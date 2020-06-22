package projects.ryan.checkout.service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import projects.ryan.checkout.Repository.RequestRepository;
import projects.ryan.checkout.model.Request;

@Service
public class RequestService {

	@Autowired
	RequestRepository requestRepository;
	
	public List<Request> findAllRequest(){
		return requestRepository.findAll();
	}
	
	public List<Request> findByPreacherName(String name){
		return requestRepository.findByPreacherName(name);
	}
	
	public List<Request> sortByPreacher(){
		return requestRepository.findByOrderByPreacherAsc();
	}
	
	public List<Request> sortByFullname(){
		return requestRepository.findByOrderByFullnameAsc();
	}
	
	public List<Request> sortByDate(){
		return requestRepository.findByOrderByDateAsc();
	}
	
	public Optional<Request> findByRequestId(Long id){
		return requestRepository.findById(id);
	}
	
	public Request addRequest(Request request){
		return requestRepository.save(request);
	}
	
	public Request updateRequest(Request request) {
		requestRepository.deleteById(request.getRequest_id());
		return requestRepository.save(request);
	}
	
	public Request updateRequested(Request request) {
		requestRepository.deleteById(request.getRequest_id());
		return requestRepository.save(request);
	}
	
	public List<Request> findbyStatus(Boolean status){
		return requestRepository.findByStatus(status);
	}
	
	public void deleteRequest(Long id) {
		requestRepository.deleteById(id);
	}
}
