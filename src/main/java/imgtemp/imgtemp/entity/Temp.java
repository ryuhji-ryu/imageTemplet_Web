package imgtemp.imgtemp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Temp {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id; 
    private Boolean confirm; 
    private String username;

}
