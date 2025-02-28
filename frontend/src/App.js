import React, {useState} from 'react';
import test from './table.txt' ; 
import location from './location2.txt' ;
import './App.css';
import axios from 'axios';

/* eslint-disable */
function App() {

  const [resultData , setResultData] = useState('test');
  const [htmlTag , setHtmlTag] = useState('');
  const [locationhtmlTag , setLocationHtmlTag] = useState('');
  const [saveData , setSaveData] = useState('없음');

  const searchData = () =>{
    console.log("before :: " +  resultData); 
    let urlString = "/saveTemplet/getImageData2";
    let param = "seq=2"; 

    axios.post(urlString , {
      "seq" : 2
    })
    .then(response => {
       let result = response.data; 
        console.log("result :: " +  result.templetnm); 
        setResultData( result.templetnm);  
    }).catch(
      (error)=>{
        debugger;
        console.log("error");
      }
    );  
  }

  const htmltoStringBytable = () =>{
    fetch(test)
    .then(r => r.text())
    .then(text =>{
      console.log('txt ??? : ' , text);
      setHtmlTag(text);
    })
  }

  const htmltoStringBylocation = () =>{
    fetch(location)
    .then(r => r.text())
    .then(text =>{
      console.log('txt ??? : ' , text);
      setLocationHtmlTag(text);
    })
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

  const saveHtmlTag = ( name , htmlTagTxt) =>{
    let urlString  = "/saveTemplet/insertData/post" ; 
    let param  = {
      "templetnm" : name , 
      "templetdetail" : htmlTagTxt.toString() , 
      "imagenm" : "testImg.png" , 
      "imageurl" : "testImg.png"
    }

    debugger;
    if(htmlTag != null && htmlTag != ''){
      axios.post(urlString , param)
      // .then(response => response.json())
      .then(response => {
         let result = response.data; 
          console.log("result :: " +  result); 
          // setSaveData( result.templetnm);  
          alert("html tag 저장되었습니다. ");
      }).catch(
        (error)=>{
          debugger;
          console.log("error ::" + error);
        }
      );
    }

  } 

  return (
    <div className='App'>
      <header className="App-header">
        <div>
          <h1>{'캔버스 영역이에요.'}</h1>
        </div>
        <div>
          <div className='table_box' style={{display:'table-row'}}>
            <div style={{display:'table-cell'}}>  
              <button className='Button'
                onClick={()=>{
                  htmltoStringBytable();
                  }}
              >{'html table tag 불러오기 '}</button> 
            </div>
            <div className='box' style={{display:'table-cell'}}>  
            {htmlTag}
            </div>
            <div style={{display:'table-cell'}}>  
              <button className='Button'
                value ={'save'}
                onClick={()=>{
                  saveHtmlTag("tableSample" , htmlTag);
                }}
              >{'save data'}</button> 
            </div>
          </div>
          <div className='table_box' style={{display:'table-row'}}>
            <div style={{display:'table-cell'}}>  
              <button className='Button'
                onClick={()=>{
                  htmltoStringBylocation();
                  }}
              >{'html location tag 불러오기 '}</button> 
            </div>
            <div className='box' style={{display:'table-cell'}}>  
            {locationhtmlTag}
            </div>
            <div style={{display:'table-cell'}}>  
              <button className='Button'
                value ={'save'}
                onClick={()=>{
                  saveHtmlTag("locationSample" , locationhtmlTag);
                }}
              >{'save data'}</button> 
            </div>
          </div>
        </div>    
      </header>
    </div>
  );
}

export default App;
