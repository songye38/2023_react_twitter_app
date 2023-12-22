import './App.css';
import { Route,Routes,Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Home page</h1>}></Route>
      <Route path='/posts' element={<h1>Post List Page</h1>}></Route>
      <Route path='/posts/:id' element={<h1>Post Detail Page</h1>}></Route>
      <Route path='/posts/new' element={<h1>포스트 추가 페이지</h1>}></Route>
      <Route path='/posts/edit/:id' element={<h1>포스트 수정 페이지</h1>}></Route>
      <Route path='/profile' element={<h1>프로필 페이지</h1>}></Route>
      <Route path='/profile/edit' element={<h1>프로필 수정 페이지</h1>}></Route>
      <Route path='/notifications' element={<h1>알림 페이지</h1>}></Route>
      <Route path='/search' element={<h1>검색 페이지</h1>}></Route>
      <Route path='/users/login' element={<h1>로그인 페이지</h1>}></Route>
      <Route path='/users/signup' element={<h1>회원가입 페이지</h1>}></Route>
      <Route path='*' element = {<Navigate replace to ='/'/>} />
    </Routes>
  );
}

export default App;
