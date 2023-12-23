
import { Layout } from 'components/Layout';
import Router from 'components/Router';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from 'firebaseApp';

function App() {
  const auth = getAuth(app);
  console.log(auth);
  return (
    <Layout >
       <Router />
    </Layout>
  );
}

export default App;

