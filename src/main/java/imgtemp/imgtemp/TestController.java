package imgtemp.imgtemp;

import java.util.Date;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api")
public class TestController {
    @RequestMapping(value="/getNow", method=RequestMethod.GET)
    public String getNow() {
        return "현재 시간은" + new Date() + "입니다.";
    }
    


    @RequestMapping(value="/dbSelect", method=RequestMethod.GET)
    public String requestMethodName(@RequestParam String param) {
        return new String();
    }
    

}
