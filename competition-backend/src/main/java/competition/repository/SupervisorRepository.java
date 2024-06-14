package competition.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import competition.entity.Supervisor;

public interface SupervisorRepository extends JpaRepository<Supervisor, Long>{

	List<Supervisor> findByAdmin_Id(Long adminId);
	void deleteByAdmin_IdAndId(Long adminId, Long supervisorId);
}
