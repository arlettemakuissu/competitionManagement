package competition.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TeamDto {

	private Long id;
	private String name;
	private String email;
	private Long competitionId;
	
}
