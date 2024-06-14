package competition.service.competition;

import java.util.List;

import org.springframework.stereotype.Service;

import competition.dto.BaseResponse;
import competition.dto.CompetitionDto;
import competition.dto.CompetitionToManageDto;
import competition.entity.Competition;
import competition.entity.Referee;
import competition.entity.Supervisor;
import competition.entity.user.User;
import competition.repository.CompetitionRepository;
import competition.repository.RefereeRepository;
import competition.repository.SupervisorRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CompetitionService {

	private final CompetitionRepository competitionRepository;
	private final RefereeRepository refereeRepository;
	private final SupervisorRepository supervisorRepository;
	
	public void saveCompetition(CompetitionDto dto, User admin) {
		Competition competition = CompetitionMapper.toCompetition(dto, admin);
		competitionRepository.save(competition);
	}

	public List<CompetitionDto> getCompetitions(Long  adminId) {
		List<Competition> competitions = competitionRepository.findByAdmin_Id(adminId);
		return CompetitionMapper.toCompetitionsDto(competitions);
	}

	public void deteleCompetition(Long competitionId, Long adminId) {

		competitionRepository.deleteByAdmin_IdAndId(adminId, competitionId);
		
	}

	public CompetitionToManageDto getCompetitionToManage(Long competitionId, Long adminId) {
		List<Referee> freeReferees = refereeRepository.findByAdmin_Id(adminId);//
		List<Supervisor> freeSupervisor = supervisorRepository.findByAdmin_Id(adminId);//
		Competition competition = competitionRepository.findByIdAndAdmin_Id(competitionId, adminId);
		return CompetitionMapper.toCompetitionToManageDto(competition, freeReferees, freeSupervisor);
	}
	
}
