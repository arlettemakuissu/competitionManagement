package competition.service.supervisor;

import java.util.ArrayList;
import java.util.List;

import competition.dto.SupervisorDto;
import competition.entity.Supervisor;
import competition.entity.user.User;

public class SupervisorMapper {


	public static Supervisor toSupervisor(SupervisorDto dto, User admin) {
			
			return new Supervisor(
					dto.getId(), 
					dto.getLastName(), 
					dto.getFirstName(), 
					dto.getPhoneNumber(), 
					dto.getEmail(),
					admin
				);
	}

	public static List<SupervisorDto> toSupervisorsDto(List<Supervisor> supervisors) {
		List<SupervisorDto> dtos = new ArrayList<SupervisorDto>();
		if(supervisors == null) return dtos;
		for(Supervisor supervisor: supervisors) {
			SupervisorDto dto = new SupervisorDto(
					supervisor.getId(), 
					supervisor.getLastName(), 
					supervisor.getFirstName(), 
					supervisor.getPhoneNumber(), 
					supervisor.getEmail()
			);
			dtos.add(dto);
		}
		return dtos;
	}

}
