
import { useState } from 'react';
import { Layout } from 'components/Layout';
import Router from 'components/Router';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from 'firebaseApp';

function App() {
  const auth = getAuth(app);
  const [isAuthenticated,setAuthenticated] = useState<boolean>(
    !!auth?.currentUser
    //false면 인증된 사용자가 아니므로 로그인 / 회원가입 페이지로 이동
  );

  return (
    <Layout >
       <Router />
    </Layout>
  );
}

export default App;

