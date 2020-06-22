package projects.ryan.checkout.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import projects.ryan.checkout.Repository.CheckOutRepository;
import projects.ryan.checkout.model.Item;
import projects.ryan.checkout.model.Request;

@Service
public class CheckOutService {

	@Autowired
	CheckOutRepository checkOutRepository;
	
	public List<Item> findAllItems(){
		return checkOutRepository.findAll();
	}
	
	public Optional<Item> findByItemId(Long id){
		return checkOutRepository.findById(id);
	}
	
	public Item addItem(Item item) {
		return checkOutRepository.save(item);
	}
	
	public Item updateItem(Item item) {
		checkOutRepository.deleteById(item.getId());
		return checkOutRepository.save(item);
	}
	
	public void deleteItem(Long id) {
		checkOutRepository.deleteById(id);
	}
}
