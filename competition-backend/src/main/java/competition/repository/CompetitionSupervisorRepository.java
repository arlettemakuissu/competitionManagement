package competition.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import competition.entity.CompetitionSupervisor;
import competition.entity.key.CompetitionSupervisorKey;

@Repository
public interface CompetitionSupervisorRepository extends JpaRepository<CompetitionSupervisor, CompetitionSupervisorKey> {

}
