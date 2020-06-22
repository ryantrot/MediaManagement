package projects.ryan.checkout.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import projects.ryan.checkout.model.Item;

@Repository
public interface CheckOutRepository extends JpaRepository<Item, Long>{

		List<Item> findAll();
		Optional<Item> findByid(Long id);
}
