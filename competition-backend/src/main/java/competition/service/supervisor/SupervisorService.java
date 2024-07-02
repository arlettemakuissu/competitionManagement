package competition.service.supervisor;

import java.util.List;

import org.springframework.stereotype.Service;

import competition.dto.SupervisorDto;
import competition.dto.managecompetition.AssignSupervisorDto;
import competition.entity.Competition;
import competition.entity.CompetitionReferee;
import competition.entity.CompetitionSupervisor;
import competition.entity.Referee;
import competition.entity.Supervisor;
import competition.entity.key.CompetitionRefereeKey;
import competition.entity.key.CompetitionSupervisorKey;
import competition.entity.user.User;
import competition.repository.CompetitionRepository;
import competition.repository.CompetitionSupervisorRepository;
import competition.repository.SupervisorRepository;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class SupervisorService {

	private final SupervisorRepository supervisorRepository;
	private final CompetitionRepository competitionRepository;
	private final CompetitionSupervisorRepository competitionSupervisorRepository;
	
	
	
	public void saveSupervisor(SupervisorDto dto, User admin) {
		Supervisor supervisor = SupervisorMapper.toSupervisor(dto, admin);
		supervisorRepository.save(supervisor);
	}

	public List<SupervisorDto> getSupervisors(Long adminId) {
		List<Supervisor> supervisors =  supervisorRepository.findByAdmin_Id(adminId);
		return SupervisorMapper.toSupervisorsDto(supervisors);
	}
	
	public void deteleSupervisor(Long supervisorId, Long adminId) {
		supervisorRepository.deleteByAdmin_IdAndId(adminId, supervisorId);
	}

	public void assignSupervisor(AssignSupervisorDto dto, User build) {
		Supervisor supervisor = supervisorRepository.findById(dto.getSupervisorId()).get();
		Competition competition = competitionRepository.findById(dto.getCompetitionId()).get();
		CompetitionSupervisor cs = new CompetitionSupervisor(new CompetitionSupervisorKey(), supervisor, competition);
		competitionSupervisorRepository.save(cs);
	}


}
