package imgtemp.imgtemp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import imgtemp.imgtemp.entity.Temp;
import imgtemp.imgtemp.service.TempService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/temp")
public class TempController {
  
    private final TempService tempService; 

    //TempService 생성자 

    public TempController( TempService tempService){
        this.tempService = tempService;
    }
    
    //db연동 테스트
    @GetMapping("/temp")
    public Temp createTemp(@RequestParam Temp temp) {
        return tempService.createTempRecord(temp);
    }

    @GetMapping("/data")
    public ResponseEntity<List<Temp>> getTemp() {
        List<Temp> ids = tempService.getAllConfirm();
        return ResponseEntity.ok(ids);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Temp>> getIdData(@PathVariable Long id , @RequestParam String testData , @RequestParam String confirm1 ) {
        
        System.out.println("test test ::" + testData);
        
        Optional<Temp> confirm = tempService.getUserById(id);
        return ResponseEntity.ok(confirm);
    }
    
    
}
