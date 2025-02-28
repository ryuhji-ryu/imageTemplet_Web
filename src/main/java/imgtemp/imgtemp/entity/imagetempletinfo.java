package imgtemp.imgtemp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class imagetempletinfo {
    
    //imagetempletinfo  table column 정보 세팅 
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int seq; 
    
    private String templetnm ; 
    private String templetdetail;
    private String imagenm;
    private String imageurl;
}
