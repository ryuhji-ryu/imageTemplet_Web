package imgtemp.imgtemp.model;

// post 통신위한 모델 정의 : insert to DB 
public class insertData {

    private String templetnm; 
    private String templetdetail; 
    private String imagenm ; 
    private String imageurl; 
    
    //기본 생성자 
    public insertData(){

    }

    public insertData( String templetnm , String templetdetail , String imagenm ,  String imageurl){
        this.templetnm = templetnm; 
        this.templetdetail = templetdetail;
        this.imagenm = imagenm; 
        this.imageurl = imageurl;
    }

    public String getTempletnm() {
       return templetnm;
    }

    public String getTempletdetail() {
        return templetdetail;
    }

    public String getImagenm() {
       return imagenm;
    } 

    public String getImageurl() {
        return imageurl;
    } 
}
