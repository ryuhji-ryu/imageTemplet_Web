package imgtemp.imgtemp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import imgtemp.imgtemp.entity.Temp;
import imgtemp.imgtemp.repository.TempRepository;

@Service
public class TempService {
    private final TempRepository tempRepository;

    public TempService(TempRepository tempRepository){
        this.tempRepository = tempRepository;
    }

    public Temp createTempRecord(Temp userTemp){
        System.out.println(userTemp);

        Temp temp = new Temp(); 
        temp.setId(userTemp.getId());
        temp.setConfirm(true);
        temp.setUsername(userTemp.getUsername());
        return tempRepository.save(temp);
    }

    public List<Temp> getAllConfirm (){
        return tempRepository.findAll();
    }

    public Optional<Temp> getUserById(Long id){
        return tempRepository.findById(id);
    }
}
