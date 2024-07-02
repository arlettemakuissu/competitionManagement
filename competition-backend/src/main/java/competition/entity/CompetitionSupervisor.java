package competition.entity;

import competition.entity.key.CompetitionSupervisorKey;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class CompetitionSupervisor {
	
	@EmbeddedId
	private CompetitionSupervisorKey id;
	
	@MapsId("supervisorId")
	@ManyToOne
	@JoinColumn(nullable = false, name = "supervisor_id")
	private Supervisor supervisor;

	@MapsId("competitionId")
	@ManyToOne
	@JoinColumn(nullable = false, name = "competition_id")
	private Competition competition;
}
