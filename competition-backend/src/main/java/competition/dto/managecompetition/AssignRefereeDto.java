package competition.dto.managecompetition;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

	@AllArgsConstructor
	@Data
	@NoArgsConstructor
	public class AssignRefereeDto {
		private Long competitionId;
		private Long refereeId;
	}
