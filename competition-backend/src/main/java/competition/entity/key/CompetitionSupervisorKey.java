package competition.entity.key;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Embeddable
public class CompetitionSupervisorKey {

		private Long competitionId;
		private Long supervisorId;
	}
