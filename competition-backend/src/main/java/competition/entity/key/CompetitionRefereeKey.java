package competition.entity.key;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Embeddable
public class CompetitionRefereeKey {

	private Long competitionId;
	private Long refereeId;
}
