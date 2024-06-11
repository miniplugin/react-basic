import logo from './logo.svg';
import './App.css';
import BtnEventComponent from './components/BtnEventComponent';
import React, { useState } from 'react'; //리액트 내장 모듈에서 useState 객체 import
import KakaoMap from './components/ClassKakaoMap';
import { Link } from "react-router-dom"; //추가

function App() {
  //함수형 컴포넌트에서는 클래스의 state 예약변수 대신 useState함수로 변수 초기화(아래)
  const [state, setState] = useState({ count: 10 });
  const resetEvent = () => { //기존 값+10으로 리셋하기
    //state 변경 let count = state.count;
    setState(prevState => ({ //람다함수=단축코드함수 화살표함수(애로우함수)
      count: prevState.count + 10,
    }));
  }
  return (
    <div className="App">
      {/* <KakaoMap/> */}
      {/* <BtnEventComponent
        nodeValue={<h1>태그노드</h1>}
        count={state.count}
      >
        <h2>자식노드추가</h2>
      </BtnEventComponent>
      <button onClick={resetEvent}>{state.count + 10}으로 초기화 버튼</button> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>HTML 태그를 자바스크립트에서 바로 사용한다.</h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/classkakaomap">
          <button id='btnHome'>클래스형 카카오맵</button>
        </Link>
      </header>
    </div>
  );
}

export default App;
