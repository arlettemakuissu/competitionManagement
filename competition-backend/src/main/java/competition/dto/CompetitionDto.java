package competition.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@Data
@NoArgsConstructor
public class CompetitionDto implements BaseResponse {

	private Long id;
	private String name;
	private String address;
	private LocalDate dateStart;
	private LocalDate dateEnd;
	private int nbTeam;
	private int nbGroupe;
	private int nbQualified;

}
