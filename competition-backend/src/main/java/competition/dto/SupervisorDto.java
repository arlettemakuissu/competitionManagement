package competition.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SupervisorDto {
	
	private Long id;
	private String lastName;
	private String firstName;
	private String phoneNumber;
	private String email; 

}
