package competition.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import competition.dto.common.GenericResponse;
import competition.dto.managecompetition.AssignRefereeDto;
import competition.dto.referee.RefereeDto;
import competition.entity.user.User;
import competition.service.referee.RefereeService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class RefereeController {
	
	private final RefereeService refereeService;
	
	
	@PostMapping("api/v1/referees")
	public GenericResponse saveReferee(@RequestBody RefereeDto dto, Principal principal) {
		try {
			refereeService.saveReferee(dto,  User.builder().id(102L).build());
			return new GenericResponse(true, 200, "");
		}catch (Exception e) {
			System.out.println(e.getMessage());
			return new GenericResponse(false, 500, e.getMessage());
		}
	}


	@PostMapping("api/v1/referees/assign")
	public GenericResponse assignReferee(@RequestBody AssignRefereeDto dto, Principal principal) {
		try {
			refereeService.assignReferee(dto,  User.builder().id(102L).build());
			return new GenericResponse(true, 200, "");
		}catch (Exception e) {
			System.out.println(e.getMessage());
			return new GenericResponse(false, 500, e.getMessage());
		}
	}
	
	@GetMapping("api/v1/referees")
	public List<RefereeDto> getReferees(Principal principal) {
		try {
			return refereeService.getReferees(102L);
		}catch (Exception e) {
			throw e;
		}
	}

	@DeleteMapping("api/v1/referees/{id}")
	public GenericResponse deleteReferee(@PathVariable Long refereeId, Principal principal) {
		try {
			Long adminId = 102L;
			refereeService.deteleReferee(refereeId, adminId);
			return new GenericResponse(true, 200, "");
		}catch (Exception e) {
			return new GenericResponse(false, 500, e.getMessage());
		}
	}

}
