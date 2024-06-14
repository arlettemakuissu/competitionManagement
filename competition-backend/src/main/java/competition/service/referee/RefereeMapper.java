package competition.service.referee;

import java.util.ArrayList;
import java.util.List;

import competition.dto.referee.RefereeDto;
import competition.entity.Referee;
import competition.entity.user.User;


public class RefereeMapper {

	public static Referee toReferee(RefereeDto dto, User admin) {
			
			return new Referee(
					dto.getId(), 
					dto.getLastName(), 
					dto.getFirstName(), 
					dto.getPhoneNumber(), 
					dto.getEmail(),
					admin
				);
	}

	public static List<RefereeDto> toRefereesDto(List<Referee> referees) {
		List<RefereeDto> dtos = new ArrayList<RefereeDto>();
		if(referees == null) return dtos;
		for(Referee referee: referees) {
			RefereeDto dto = new RefereeDto(
				referee.getId(), 
				referee.getLastName(), 
				referee.getFirstName(), 
				referee.getPhoneNumber(), 
				referee.getEmail()
			);
			dtos.add(dto);
		}
		return dtos;
	}

}
