package competition.service;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import competition.dto.user.UserDto;
import competition.entity.user.User;
import competition.repository.UserRepository;
import competition.security.Role;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserCommonService {

	private final UserRepository userRepository;
	
	private final PasswordEncoder passwordEncoder;
	
	public UserDto getUserByEmail(String email) {
		User user = userRepository.findByEmail(email).orElseThrow();
		return new UserDto(user.getId(), user.getEmail(), user.getRole());
	}
	
	public void init3user() {
		User user1 =  User.builder()
				.email("supervisor")
				.password(passwordEncoder.encode("supervisor"))
				.role(Role.SUPERVISOR)
				.firstName("supervisor")
				.lastName("supervisor")
				.build();
		
		User user2 =  User.builder()
				.email("it")
				.password(passwordEncoder.encode("it"))
				.role(Role.IT)
				.firstName("it")
				.lastName("it")
				.build();

		User admin =  User.builder()
				.email("admin")
				.password(passwordEncoder.encode("admin"))
				.role(Role.ADMIN)
				.firstName("admin")
				.lastName("admin")
				.build();
		if(userRepository.findByEmail("supervisor").get() ==null) {
			userRepository.save(user1);
		}
		if(userRepository.findByEmail("it").get() ==null) {
			userRepository.save(user2);
		}
		if(userRepository.findByEmail("admin").get() ==null) {
			userRepository.save(admin);
		}
		
	}
}

