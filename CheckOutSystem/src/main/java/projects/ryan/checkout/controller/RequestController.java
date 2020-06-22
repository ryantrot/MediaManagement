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

import projects.ryan.checkout.model.Request;
import projects.ryan.checkout.service.RequestService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")

public class RequestController {
	
	@Autowired
	RequestService requestService;
	
	@GetMapping("/view")
	public List<Request> getAllRequest(){
		return requestService.findAllRequest();
	}
	
	@GetMapping("/view/{id}")
	public Optional<Request> getRequestId(@PathVariable Long id){
		return requestService.findByRequestId(id);
	}
	
	@GetMapping("/view/preacher/{preacher}")
	public List<Request> getRequestByPreacherName(@PathVariable String preacher){
		return requestService.findByPreacherName(preacher);
	}
	
	@GetMapping("/view/sort/preacher")
	public List<Request> getBySortedPreacher(){
		return requestService.sortByPreacher();
	}
	
	@GetMapping("/view/sort/fullname")
	public List<Request> getBySortedFullname(){
		return requestService.sortByFullname();
	}
	
	@GetMapping("/view/sort/date")
	public List<Request> getBySortedDate(){
		return requestService.sortByDate();
	}
	
	@GetMapping("view/status/{status}")
	public List<Request> getRequestByStatus(@PathVariable Boolean status){
		return requestService.findbyStatus(status);
	}
	
	@PostMapping("/addrequest")
	public ResponseEntity<String>createRequest(@Valid @RequestBody Request request){
		
		Request newRequest = requestService.addRequest(request);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(newRequest.getRequest_id()).toUri();
		
		return ResponseEntity.created(location).header("request", newRequest.getRequest_id()+"")
				.body(newRequest.getEmail()+" "+newRequest.getFullname()+" "+newRequest.getPhone_number()
				+" "+newRequest.getEmail()+ " "+newRequest.getName_preacher()+" "+newRequest.getEvent_date()+" "+
						newRequest.getDisk_type()+" "+newRequest.isStatus());
	}
	
	@PutMapping("/updaterequest/{id}")
	public void updateRequest(@RequestBody Request request) {
		requestService.updateRequest(request);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateRequested(@RequestBody Request request, @PathVariable Long id){
		
		Optional<Request> requestOptional = requestService.findByRequestId(id);
		if(!requestOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		request.setRequest_id(id);
		requestService.updateRequested(request);
		return ResponseEntity.noContent().build();
		
	}
	
	@DeleteMapping("/deleterequest/{request_id}")
	public void deleteRequest(@PathVariable Long request_id) {
		requestService.deleteRequest(request_id);
	}
}
