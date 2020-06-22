package projects.ryan.checkout.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import projects.ryan.checkout.model.Item;
import projects.ryan.checkout.service.CheckOutService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CheckOutController {

	@Autowired
	CheckOutService checkoutService;
	
	@GetMapping("/inventory")
	public List<Item> getAllItems(){
		return checkoutService.findAllItems();
	}
	
	@GetMapping("/inventory/{itemID}")
	public Optional<Item> getItemID(@PathVariable Long itemID){
		return checkoutService.findByItemId(itemID);
	}
	
	@PostMapping("/additem")
	public ResponseEntity<String>createItem(@Valid @RequestBody Item item){
		
		Item newitem = checkoutService.addItem(item);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(newitem.getId()).toUri();
		
		return ResponseEntity.created(location).header("item", newitem.getId()+"")
				.body(newitem.getName()+" "+newitem.getEvent()+" "+newitem.getCd_disk()+" "+newitem.getDvd_disk()+" "+newitem.getCd_quantity()+" "+newitem.getDvd_quantity());
			
	}
	
	@PutMapping("/updateitem/{id}")
	public void updateItem(@RequestBody Item item) {
		
		checkoutService.updateItem(item);
	}
	
	
	@DeleteMapping("/deleteitem/{itemid}")
	public void deleteItem(@PathVariable Long itemid) {
		checkoutService.deleteItem(itemid);
	}
}
