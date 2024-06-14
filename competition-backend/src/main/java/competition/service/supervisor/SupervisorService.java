package competition.service.supervisor;

import java.util.List;

import org.springframework.stereotype.Service;

import competition.dto.SupervisorDto;
import competition.entity.Supervisor;
import competition.entity.user.User;
import competition.repository.SupervisorRepository;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class SupervisorService {

	private final SupervisorRepository supervisorRepository;
	
	public void saveSupervisor(SupervisorDto dto, User admin) {
		Supervisor supervisor = SupervisorMapper.toSupervisor(dto, admin);
		supervisorRepository.save(supervisor);
	}

	public List<SupervisorDto> getSupervisors(Long adminId) {
		List<Supervisor> supervisors =  supervisorRepository.findByAdmin_Id(adminId);
		return SupervisorMapper.toSupervisorsDto(supervisors);
	}
	
	public void deteleSupervisor(Long supervisorId, Long adminId) {
		supervisorRepository.deleteByAdmin_IdAndId(adminId, supervisorId);
	}


}
