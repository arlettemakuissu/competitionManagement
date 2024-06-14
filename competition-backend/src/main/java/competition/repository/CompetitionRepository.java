package competition.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import competition.entity.Competition;

@Repository
public interface CompetitionRepository extends JpaRepository<Competition, Long> {

	List<Competition> findByAdmin_Id(Long adminId);

	void deleteByAdmin_IdAndId(Long adminId, Long competitionId);

	Competition findByIdAndAdmin_Id(Long competitionId, Long adminId);

}
