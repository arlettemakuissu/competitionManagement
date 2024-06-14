package competition.service.user;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import competition.dto.user.LoginRequest;
import competition.dto.user.LoginResponse;
import competition.dto.user.UserRegisterDto;
import competition.entity.user.User;
import competition.repository.UserRepository;
import competition.security.JwtService;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class UserService {
	
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;

	public LoginResponse login(LoginRequest request) {
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		User user = userRepository.findByEmail(request.getEmail()).orElseThrow();
		String token = jwtService.generateToken(user);
		return new LoginResponse(user.getFirstName(), user.getLastName(), token);
	}
	

	public void register(UserRegisterDto userToRegistered) {
		User user = UserMapper.toUser(userToRegistered);
		user.setPassword(passwordEncoder.encode(userToRegistered.getPassword()));
		userRepository.save(user);
	}


}
