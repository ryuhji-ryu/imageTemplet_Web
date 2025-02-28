package imgtemp.imgtemp.model;

// post 통신위한 모델 정의
public class imageData {
    private int seq; 

    public imageData(int seq){
        this.seq = seq;
    }

    //기본생성자 
    public imageData(){

    }

    public int getSeq() {
        return this.seq;
    }
}
