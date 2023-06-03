import LoginPage from "./Components/Pages/LoginPage";
import FooterPage from "./Components/Pages/FooterPage";
import HomePage from "./Components/Pages/HomePage";
import Layout from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./Components/Pages/SignUpPage";
import ContactPage from "./Components/Pages/ContactPage";


function App() {
  return (
   <Layout>
    <Routes>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route> 
      <Route path='/signup' element={<SignUpPage/>}></Route>  
      <Route path='/contact' element={<ContactPage/>}></Route>  
    </Routes>
    <FooterPage />
   </Layout>
  );
}

export default App;
