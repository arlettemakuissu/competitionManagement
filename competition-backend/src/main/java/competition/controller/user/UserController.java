package competition.controller.user;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import competition.dto.BaseResponse;
import competition.dto.common.GenericResponse;
import competition.dto.user.LoginRequest;
import competition.dto.user.UserRegisterDto;
import competition.service.user.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UserController {
	
	private final UserService userService;

	@PostMapping("api/v1/register")
	public BaseResponse register(@RequestBody UserRegisterDto user) {
		try {
			userService.register(user);
			return new GenericResponse(true, 200, "");
		}catch (Exception e) {
			return new GenericResponse(false, 500, e.getMessage());
		}
	} 

	@PostMapping("api/v1/login")
	public BaseResponse login(@RequestBody LoginRequest request) {
		try {
			return userService.login(request);
		}catch (Exception e) {
			return  new GenericResponse(false, 500, e.getMessage());
		}
	} 
	
}
