package competition.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import competition.dto.BaseResponse;
import competition.dto.CompetitionDto;
import competition.dto.CompetitionToManageDto;
import competition.dto.common.GenericResponse;
import competition.entity.user.User;
import competition.service.competition.CompetitionService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CompetitionController {

	private final CompetitionService competitionService;

	@PostMapping("api/v1/competitions")
	public GenericResponse saveCompetition(@RequestBody CompetitionDto dto, Principal principal) {
		try {
			competitionService.saveCompetition(dto,  User.builder().id(102L).build());
			return new GenericResponse(true, 200, "");
		}catch (Exception e) {
			System.out.println(e.getMessage());
			return new GenericResponse(false, 500, e.getMessage());
		}
	}

	@GetMapping("api/v1/competitions")
	public List<CompetitionDto> getCompetitions(Principal principal) {
		try {
			return competitionService.getCompetitions(102L);
		}catch (Exception e) {
			throw e;
		}
	}

	@GetMapping("api/v1/competitions/{competitionId}/manage")
	public BaseResponse getCompetitionToManage(@PathVariable Long competitionId, Principal principal) {
		try {
			Long adminId = 102L;
			return competitionService.getCompetitionToManage(competitionId, adminId);
		}catch (Exception e) {
			return new GenericResponse(false, 500, e.getMessage());
		}
	}
	
	@DeleteMapping("api/v1/competitions/{id}")
	public GenericResponse deleteCompetition(@PathVariable Long competitionId, Principal principal) {
		try {
			Long adminId = 102L;
			competitionService.deteleCompetition(competitionId, adminId);
			return new GenericResponse(true, 200, "");
		}catch (Exception e) {
			return new GenericResponse(false, 500, e.getMessage());
		}
	}
	
}
