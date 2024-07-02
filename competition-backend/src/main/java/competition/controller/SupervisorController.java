package competition.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import competition.dto.SupervisorDto;
import competition.dto.common.GenericResponse;
import competition.dto.managecompetition.AssignRefereeDto;
import competition.dto.managecompetition.AssignSupervisorDto;
import competition.entity.user.User;
import competition.service.supervisor.SupervisorService;
import lombok.RequiredArgsConstructor;



@RestController
@RequiredArgsConstructor
public class SupervisorController {
	
	private final SupervisorService supervisorService;
	
	

	@PostMapping("api/v1/supervisors")
	public GenericResponse saveSupervisor(@RequestBody SupervisorDto dto, Principal principal) {
		try {
			supervisorService.saveSupervisor(dto,  User.builder().id(102L).build());
			return new GenericResponse(true, 200, "");
		}catch (Exception e) {
			System.out.println(e.getMessage());
			return new GenericResponse(false, 500, e.getMessage());
		}
	}
	

	@PostMapping("api/v1/supervisors/assign")
	public GenericResponse assignSupervisore(@RequestBody AssignSupervisorDto dto, Principal principal) {
		try {
			supervisorService.assignSupervisor(dto,  User.builder().id(102L).build());
			return new GenericResponse(true, 200, "");
		}catch (Exception e) {
			System.out.println(e.getMessage());
			return new GenericResponse(false, 500, e.getMessage());
		}
	}
	

	@GetMapping("api/v1/supervisors")
	public List<SupervisorDto> getSupervisors(Principal principal) {
		try {
			return supervisorService.getSupervisors(102L);
		}catch (Exception e) {
			throw e;
		}
	}

	@DeleteMapping("api/v1/supervisors/{id}")
	public GenericResponse deleteSupervisor(@PathVariable Long refereeId, Principal principal) {
		try {
			Long adminId = 102L;
			supervisorService.deteleSupervisor(refereeId, adminId);
			return new GenericResponse(true, 200, "");
		}catch (Exception e) {
			return new GenericResponse(false, 500, e.getMessage());
		}
	}
}
