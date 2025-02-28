package imgtemp.imgtemp.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import imgtemp.imgtemp.repository.imagetempletinfoRepository;
import imgtemp.imgtemp.entity.imagetempletinfo;

@Service
public class imagetempletinfoService {
    private final imagetempletinfoRepository imagetempletinfoRe;

    public imagetempletinfoService(imagetempletinfoRepository imagetempletinfo){
        this.imagetempletinfoRe = imagetempletinfo;
    }

    public imagetempletinfo insertSaveData(imagetempletinfo saveData){
        System.out.println(saveData);

        imagetempletinfo imagetemplet = new imagetempletinfo();

        System.out.println("seq??? :: " + imagetemplet.getSeq());

        // imagetemplet.setSeq(imagetemplet.getSeq());
        imagetemplet.setImagenm(saveData.getImagenm());
        imagetemplet.setImageurl(saveData.getImageurl());
        imagetemplet.setTempletnm(saveData.getTempletnm());
        imagetemplet.setTempletdetail(saveData.getTempletdetail());

        return imagetempletinfoRe.save(imagetemplet);
    }


    public int insertSaveDataPost(imagetempletinfo saveData){
        System.out.println(saveData);
        return imagetempletinfoRe.insertDataPost(saveData.getTempletnm(), saveData.getTempletdetail(), saveData.getImagenm(), saveData.getImageurl());
    }


    public Optional<imagetempletinfo> getUserById(int seq){
        return imagetempletinfoRe.findById(seq);
    }
}
