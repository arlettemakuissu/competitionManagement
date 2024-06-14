package competition.dto.common;

import competition.dto.BaseResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class GenericResponse implements BaseResponse {

	private boolean result;
	private int status;
	private String message;
	
}
