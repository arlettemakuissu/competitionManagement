package competition.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import competition.entity.Referee;

@Repository
public interface RefereeRepository extends JpaRepository<Referee, Long> {

	List<Referee> findByAdmin_Id(Long id);
	void deleteByAdmin_IdAndId(Long adminId, Long refereeId);
}
