package competition.service.referee;

import java.util.List;

import org.springframework.stereotype.Service;

import competition.dto.referee.RefereeDto;
import competition.entity.Referee;
import competition.entity.user.User;
import competition.repository.RefereeRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RefereeService {
	
	private final RefereeRepository refereeRepository;

	public void saveReferee(RefereeDto dto, User admin) {
		Referee referee = RefereeMapper.toReferee(dto, admin);
		refereeRepository.save(referee);
	}

	public void deteleReferee(Long refereeId, Long adminId) {
		refereeRepository.deleteByAdmin_IdAndId(adminId, refereeId);
	} 

	public List<RefereeDto> getReferees(Long adminId) {
		List<Referee> referees =  refereeRepository.findByAdmin_Id(adminId);
		return RefereeMapper.toRefereesDto(referees);
	} 

}
