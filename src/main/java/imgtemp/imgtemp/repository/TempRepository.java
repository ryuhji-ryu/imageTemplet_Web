package imgtemp.imgtemp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import imgtemp.imgtemp.entity.Temp;

public interface TempRepository extends JpaRepository<Temp , Long> {

}
