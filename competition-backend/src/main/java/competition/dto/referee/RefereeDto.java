package competition.dto.referee;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RefereeDto {
	private Long id;
	private String lastName;
	private String firstName;
	private String phoneNumber;
	private String email; 
}
