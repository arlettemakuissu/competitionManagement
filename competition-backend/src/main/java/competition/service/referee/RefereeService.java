package competition.service.referee;

import java.util.List;

import org.springframework.stereotype.Service;

import competition.dto.managecompetition.AssignRefereeDto;
import competition.dto.referee.RefereeDto;
import competition.entity.Competition;
import competition.entity.CompetitionReferee;
import competition.entity.Referee;
import competition.entity.key.CompetitionRefereeKey;
import competition.entity.user.User;
import competition.repository.CompetitionRefereeRepository;
import competition.repository.CompetitionRepository;
import competition.repository.RefereeRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RefereeService {
	
	private final RefereeRepository refereeRepository;
	private final CompetitionRepository competitionRepository;
	private final CompetitionRefereeRepository competitionRefereeRepository;

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

	public void assignReferee(AssignRefereeDto dto, User build) {
		Referee referee = refereeRepository.findById(dto.getRefereeId()).get();
		Competition competition = competitionRepository.findById(dto.getCompetitionId()).get();
		CompetitionReferee cr = new CompetitionReferee(new CompetitionRefereeKey(), referee, competition);
		competitionRefereeRepository.save(cr);
	} 

}
