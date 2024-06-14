package competition.dto;

import java.util.List;

import competition.dto.managecompetition.RefereeSelect;
import competition.dto.managecompetition.SupervisorSelect;
import competition.dto.managecompetition.TeamSelect;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CompetitionToManageDto implements BaseResponse{
	private CompetitionDto info;
	private List<TeamSelect> teams;
	private List<RefereeSelect> referees;
	private List<SupervisorSelect> supervisors;
}
