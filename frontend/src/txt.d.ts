declare module "*.txt" {
    const value:string; 
    export default value;
}

   /**
   *  저장 데이터 정보 json 형태로 저장   ( canvas에 그려질 수 있게 )
   *  { 
   *    backgroundimage : true , //백그라운드 이미지 존재 유무  true : image 있음 ( image URL ) , false : image 없음 
   *    backgroundColor : white , // backgroundimage fasle 일때, 배경색상 ( 없는 경우 default : white )
   *    inputdataCnt : xx ,  //텍스트 갯수
   *    inputdata : { // 텍스트 입력 정도
   *       { 
   *         textX : 0 (text의 X 좌표) 
   *         textY : 0 (text의 Y 좌표) 
   *         textfontsize : 10 (text 폰트 크기)
   *       } , {} , ....
   *    } 
  */