package competition.dto.user;

import competition.dto.BaseResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LoginResponse implements BaseResponse{

	private String token;
	private String firstName;
	private String lastName;
	
}