package projects.ryan.checkout.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import projects.ryan.checkout.model.Request;

@Repository
public interface RequestRepository extends JpaRepository<Request, Long>{
	
	List<Request> findAll();
	Optional<Request> findById(Long id);
	
	
	@Query("FROM Request WHERE name_preacher = ?1")
	List<Request> findByPreacherName(String preacherName);
	
	@Query("FROM Request Order By name_preacher ASC")
	List<Request> findByOrderByPreacherAsc();
	
	@Query("FROM Request Order By fullname ASC")
	List<Request> findByOrderByFullnameAsc();
	
	@Query("FROM Request Order By event_date ASC")
	List<Request> findByOrderByDateAsc();
		
	
	@Query("FROM Request WHERE fullname = ?1")
	List<Request> sortByFullName(String name, Sort sort);
	
	@Query("FROM Request WHERE orderStatus =?1")
	List<Request> findByStatus(Boolean status);
	
}
