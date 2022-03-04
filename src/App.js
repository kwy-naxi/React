import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // 데이터 변경은 2번째 (글제목변경, 따봉변경)을 이용해 변경가능  
  let [글제목, 글제목변경] = useState(['남자 코트 추천 ', '우동 맛집 ', 'React 추천 ']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  function 제목바꾸기(){
    //[...] deep copy를 이용
    //그냥 할 경우 참조형으로 받아 값 공유 형식으로 받음
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천 ';
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>

      <div className='list'>
        <h3>{ 글제목[0] }<span onClick={ ()=>{ 따봉변경(따봉 + 1)} }>👍</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3>{ 글제목[1] }</h3>
        <p>2월 18일 발행</p>
        <hr/>
        <h3>{ 글제목[2] }</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      <Modal/>
    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
        <h3>제목</h3>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
