import { Route, Routes} from 'react-router-dom';    
import Home from '../pages/home';
import Pricing from '../pages/pricing';
import About from '../pages/about';
import Header from './../components/HomeHeader';
import Footer from './../components/Footer';
import Login from '../components/Authentication/login';
import Register from '../components/Authentication/login';

const index = () => {
  return (
    <>
    <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default index
