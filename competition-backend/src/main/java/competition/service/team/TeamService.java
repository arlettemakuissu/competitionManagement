package competition.service.team;

import org.springframework.stereotype.Service;

import competition.dto.TeamDto;
import competition.entity.Competition;
import competition.entity.Team;
import competition.repository.CompetitionRepository;
import competition.repository.TeamRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TeamService {

	private final TeamRepository teamRepository;
	private final CompetitionRepository competitionRepository;

	public void saveTeam(TeamDto dto, Long adminId) {
		Competition competition = competitionRepository.findByIdAndAdmin_Id(dto.getCompetitionId(), adminId);
		Team team = TeamMapper.toTeam(dto, competition);
		teamRepository.save(team);
	}
	
	
}
