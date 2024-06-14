package competition.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import competition.dto.TeamDto;
import competition.dto.common.GenericResponse;
import competition.service.team.TeamService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class TeamController {

	private final TeamService teamService;
	

	@PostMapping("api/v1/teams")
	public GenericResponse saveTeam(@RequestBody TeamDto dto, Principal principal) {
		try {
			teamService.saveTeam(dto,  102L);
			return new GenericResponse(true, 200, "");
		}catch (Exception e) {
			System.out.println(e.getMessage());
			return new GenericResponse(false, 500, e.getMessage());
		}
	}
}
