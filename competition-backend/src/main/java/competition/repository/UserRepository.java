package competition.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import competition.entity.user.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	public Optional<User> findByEmail(String email);

}
