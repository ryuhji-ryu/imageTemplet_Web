import React, {useState ,   } from 'react';
import {Text , Rect, Stage, Layer } from 'react-konva';
import test from './table.txt' ; 
import location from './location2.txt' ;
import './App.css';
import axios from 'axios';
import { Node, NodeConfig } from 'konva/lib/Node';

type konvaState = {
  isDragging : boolean ; 
  x : number; 
  y: number;
  fontsize : number;
  fill  : string ;
} 

type rectagle = {
  isDragging : boolean; 
    x: number,
    y: number,
    width: number,
    height: number,
    fill: string,
    id: string,
}

/* eslint-disable */
function App() {
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  const [resultData , setResultData] = useState('test');
  const [htmlTag , setHtmlTag] = useState('');
  const [locationhtmlTag , setLocationHtmlTag] = useState('');
  const [saveData , setSaveData] = useState('없음');

  let defaultset : konvaState = {    isDragging : false , x : 50 , y:50 , fontsize:30 , fill : "black" };
  let defaultset2 : konvaState = {    isDragging : false , x : 50 , y:100 ,fontsize:30 , fill : "blue" };
  let initialRectangles : rectagle =  { isDragging : false , x: 50,   y: 100,  width: 200,  height: 200,  fill: '#f1afa1' ,  id: 'rect1',};
  const [konvaTextState , setKonvaState] = useState<konvaState>(defaultset);
  const [konvaText2State , setKonva2State] = useState<konvaState>(defaultset2);
  const [konvaRectState , setKonvaRect2State] = useState<rectagle>(initialRectangles);

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
  const saveHtmlTag = ( name: string , htmlTagTxt: string | null) =>{
    debugger;
    if(htmlTagTxt != null && htmlTagTxt != ''){
      let urlString  = "/saveTemplet/insertData/post" ; 
      let param  = {
        "templetnm" : name , 
        "templetdetail" : htmlTagTxt.toString() , 
        "imagenm" : "testImg.png" , 
        "imageurl" : "testImg.png"
      }
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

  const text2Info = (currentTarget?: Node<NodeConfig>) => {
    console.log("info ::" , currentTarget?.getAttr('id'));
    console.log("info ::" , currentTarget?.getAttr('fill'));
    console.log("info ::" , currentTarget?.getAttr('fontSize'));
    console.log("info ::" , currentTarget?.getAttr('x'));
    console.log("info ::" , currentTarget?.getAttr('y'));
  }  

  const checkDeselect = (e: { target: { getStage: () => any; }; }) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape('');
    }
  };

  const [rectangles, setRectangles] = React.useState(initialRectangles);
  const [selectedId, selectShape] = React.useState<string>('');

  return (
    <div className='App'>
      <header className="App-header">
        <div>
         <h2 >{'Canvas'}</h2>
        </div>
        <div>
          {/* <canvas height={height} width={width} className="canvas"/> */}
          {/* <Stage width={window.innerWidth/2} height={window.innerHeight/2} className ="App-link"> */}
          <Stage className ="App-link"   width={800}  height={400}  >
           <Layer>
             <Text id='text1' 
                text="상품명" 
                x={konvaTextState.x}
                y={konvaTextState.y}
                draggable
                fill={konvaTextState.isDragging ? konvaTextState.fill : konvaTextState.fill}
                fontSize={konvaTextState.fontsize}
                onDragEnd={(e) => {
                  setKonvaState({
                    isDragging: false,
                    x: e.target.x(),
                    y: e.target.y(),
                    fontsize : konvaTextState.fontsize,
                    fill : konvaTextState.fill,
                  });
                }}
             />
             <Text id='text2' 
                text="상승률" 
                x={konvaText2State.x}
                y={konvaText2State.y}
                draggable
                fill={konvaText2State.isDragging ? 'green' : 'black'}
                fontSize={konvaText2State.fontsize}
                onDragEnd={(e) => {
                  setKonva2State({
                    isDragging: false,
                    x: e.target.x(),
                    y: e.target.y(),
                    fontsize : konvaText2State.fontsize,
                    fill : konvaText2State.fill
                  });
                  text2Info(e.currentTarget); 
                }}
             />
            <Rect
              id = 'img1'
              draggable
              x={konvaRectState.x}
              y={konvaRectState.y}
              width={konvaRectState.width}
              height={konvaRectState.height}
              fill={konvaRectState.fill}
              onDragEnd={(e) => {
                setKonvaRect2State({
                  isDragging: false,
                  x: e.target.x(),
                  y: e.target.y(),
                  width: konvaRectState.width,
                  height: konvaRectState.height,
                  fill : konvaRectState.fill,
                  id: konvaRectState.id,
                });
              }}
            />
           </Layer>
          </Stage>
        </div>
        <br/>
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
