package competition.service.team;

import competition.dto.TeamDto;
import competition.entity.Competition;
import competition.entity.Team;

public class TeamMapper {

	public static Team toTeam(TeamDto dto, Competition competition) {
		
		return new Team (dto.getId(), dto.getName(), dto.getEmail(), competition);
	}

}
