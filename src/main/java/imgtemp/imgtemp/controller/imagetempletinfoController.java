package imgtemp.imgtemp.controller;

import imgtemp.imgtemp.entity.imagetempletinfo;
import imgtemp.imgtemp.model.imageData;
import imgtemp.imgtemp.model.insertData;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import imgtemp.imgtemp.service.imagetempletinfoService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/saveTemplet")
public class imagetempletinfoController {

    @Autowired
    private final imagetempletinfoService imageService; 

    //service 생성자     
    public imagetempletinfoController(imagetempletinfoService imagetempletinfoService){
        this.imageService = imagetempletinfoService;    
    }

    //DB 연동 확인 
    @GetMapping("/getImageData")
    public ResponseEntity<Optional<imagetempletinfo>> getImageData (@RequestParam int seq ) {
        Optional<imagetempletinfo> result = imageService.getUserById(seq);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/getImageData2")
    public ResponseEntity<Optional<imagetempletinfo>> getImageData2 (@RequestBody imageData imageData ) {
        int seq = imageData.getSeq();
        Optional<imagetempletinfo> result = imageService.getUserById(seq);
        return ResponseEntity.ok(result);
    }

    //DB insert test 
    @GetMapping("/insertData")
    public imagetempletinfo insertData (@RequestParam String templetnm , @RequestParam String templetdetail , @RequestParam String imagenm , @RequestParam String imageurl) {

        imagetempletinfo insertInfo = new imagetempletinfo(); 
        insertInfo.setTempletnm(templetnm);
        insertInfo.setTempletdetail(templetdetail);
        insertInfo.setImagenm(imagenm);
        insertInfo.setImageurl(imageurl);

        return  imageService.insertSaveData(insertInfo);
    }  
    //DB insert test 
    @PostMapping("/insertData/post")
    public int insertDataPost (@RequestBody insertData insertData) {

        imagetempletinfo insertInfo = new imagetempletinfo(); 
        insertInfo.setTempletnm(insertData.getTempletnm());
        insertInfo.setTempletdetail(insertData.getTempletdetail());
        insertInfo.setImagenm(insertData.getImagenm());
        insertInfo.setImageurl(insertData.getImageurl());

        // return  imageService.insertSaveData(insertInfo);

        int resultData = imageService.insertSaveDataPost(insertInfo);

        if(resultData != 1){
            return 0 ;
        }else{
            return 1;
        }
    }      
}
