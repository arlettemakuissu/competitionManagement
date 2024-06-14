package competition.service.user;

import competition.dto.user.UserRegisterDto;
import competition.entity.user.User;
import competition.security.Role;

public class UserMapper {
	
	public static User toUser(UserRegisterDto dto) {
		
		return User.builder()
				.firstName(dto.getFirstName())
				.lastName(dto.getLastName())
				.address(dto.getAddress())
				.email(dto.getEmail())
				.role(Role.ADMIN)
				.phoneNumber(dto.getPhoneNumber())
				.build();
	}

}
