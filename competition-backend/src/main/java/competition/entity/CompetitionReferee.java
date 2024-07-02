package competition.entity;

import competition.entity.key.CompetitionRefereeKey;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class CompetitionReferee {

	@EmbeddedId
	private CompetitionRefereeKey id;
	
	@MapsId("refereeId")
	@ManyToOne
	@JoinColumn(nullable = false, name = "referee_id")
	private Referee referee;

	@MapsId("competitionId")
	@ManyToOne
	@JoinColumn(nullable = false, name = "competition_id")
	private Competition competition;
}
