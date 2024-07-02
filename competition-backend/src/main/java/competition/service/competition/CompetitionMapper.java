package competition.service.competition;

import java.util.ArrayList;
import java.util.List;

import competition.dto.BaseResponse;
import competition.dto.CompetitionDto;
import competition.dto.CompetitionToManageDto;
import competition.dto.managecompetition.RefereeSelect;
import competition.dto.managecompetition.SupervisorSelect;
import competition.dto.managecompetition.TeamSelect;
import competition.entity.Competition;
import competition.entity.Referee;
import competition.entity.Supervisor;
import competition.entity.user.User;

public class CompetitionMapper {

	public static Competition toCompetition(CompetitionDto dto, User admin) {
			
			return new Competition(
					dto.getId(), 
					dto.getName(), 
					dto.getAddress(), 
					dto.getDateStart(), 
					dto.getDateEnd(),
					dto.getNbTeam(),
					dto.getNbGroupe(),
					dto.getNbQualified(),
					admin,
					null,
					null,
					null
				);
	}

	public static List<CompetitionDto> toCompetitionsDto(List<Competition> competitions) {
		List<CompetitionDto> dtos = new ArrayList<CompetitionDto>();
		if(competitions == null) return dtos;
		for(Competition competition: competitions) {
			CompetitionDto dto = new CompetitionDto(
					competition.getId(), 
					competition.getName(), 
					competition.getAddress(), 
					competition.getDateStart(), 
					competition.getDateEnd(),
					competition.getNbTeam(),
					competition.getNbGroupe(),
					competition.getNbQualified()
			);
			dtos.add(dto);
		}
		return dtos;
	}

	public static CompetitionToManageDto toCompetitionToManageDto(
			Competition competition, List<Referee> freeReferees, List<Supervisor> freeSupervisor ) {
		
		CompetitionDto info = new CompetitionDto(
				competition.getId(), 
				competition.getName(), 
				competition.getAddress(), 
				competition.getDateStart(), 
				competition.getDateEnd(),
				competition.getNbTeam(),
				competition.getNbGroupe(),
				competition.getNbQualified()
		);
		
		List<TeamSelect> teams = competition.getTeams()
				.stream().map(t->new TeamSelect(t.getId(), t.getName(), t.getEmail())).toList();
		
		List<RefereeSelect> refereesSelect = competition.getCompetitionReferees().stream().map(
				cr->new RefereeSelect(cr.getReferee().getId(), cr.getReferee().getFirstName() + " "+ cr.getReferee().getLastName() , cr.getReferee().getEmail())).toList();

		List<SupervisorSelect> supervisorsSelect = competition.getCompetitionSupervisors().stream().map(
				cs->new SupervisorSelect(cs.getSupervisor().getId(), cs.getSupervisor().getFirstName() + " "+ cs.getSupervisor().getLastName(), cs.getSupervisor().getEmail())).toList();
		
		
		List<RefereeSelect> freeRefereesSelect = freeReferees.stream().map(
				r->new RefereeSelect(r.getId(), r.getFirstName() + " "+ r.getLastName() , r.getEmail())).toList();
		

		List<SupervisorSelect> freeSupervisorsSelect = freeSupervisor.stream().map(
				s->new SupervisorSelect(s.getId(), s.getFirstName() + " "+ s.getLastName(), s.getEmail())).toList();
		
		
		
		
		return new CompetitionToManageDto(info, teams,refereesSelect, supervisorsSelect, freeRefereesSelect, freeSupervisorsSelect);
	}


}
