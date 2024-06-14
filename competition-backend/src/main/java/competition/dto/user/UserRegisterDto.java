package competition.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserRegisterDto {

	private String lastName;
	private String firstName;
	private String password;
	private String confirmPassword;
	private String address;
	private String phoneNumber;
	private String email;
}
