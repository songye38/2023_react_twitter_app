
import { useState,useEffect } from 'react';
import { Layout } from 'components/Layout';
import Router from 'components/Router';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from 'firebaseApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const auth = getAuth(app);
  const [init,setInit] = useState<boolean>(false);
  const [isAuthenticated,setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
    //false면 인증된 사용자가 아니므로 로그인 / 회원가입 페이지로 이동
  );

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
          setIsAuthenticated(true);
        }else{
          setIsAuthenticated(false);
        }
      setInit(true);
    })
  },[auth])

  return (
    <Layout>
      <ToastContainer/>
      {init ? <Router isAuthenticated={isAuthenticated} /> :"loading"}
    </Layout>
  );
}

export default App;

