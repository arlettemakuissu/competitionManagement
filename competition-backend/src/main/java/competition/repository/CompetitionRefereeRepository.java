package competition.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import competition.entity.CompetitionReferee;
import competition.entity.key.CompetitionRefereeKey;


@Repository
public interface CompetitionRefereeRepository extends JpaRepository<CompetitionReferee, CompetitionRefereeKey>{

}
