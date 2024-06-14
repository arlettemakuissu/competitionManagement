package competition.entity;

import java.time.LocalDate;
import java.util.List;

import competition.entity.user.User;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Competition {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String name;
	private String address;
	private LocalDate dateStart;
	private LocalDate dateEnd;
	private int nbTeam;
	private int nbGroupe;
	private int nbQualified;

	@ManyToOne
	@JoinColumn(nullable = false, name = "create_by")
	private User admin;
	

	@OneToMany(mappedBy = "competition")
	private List<Team> teams;
}
