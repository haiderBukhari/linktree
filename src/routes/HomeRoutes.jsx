import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Pricing from '../pages/pricing';
import About from '../pages/about';
import Header from './../components/HomeHeader';
import Footer from './../components/Footer';
import Login from '../components/Authentication/login';
import Register from '../components/Authentication/Register';
import SpinningWheel from '../components/wheel';
import GameManagement from '../pages/GameManagement';
import CustomerReviews from '../pages/Reviews';
import Settings from '../pages/Settings';
import PaymentSuccess from '../components/Authentication/PaymentSuccess';

const index = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/game" element={<GameManagement />} />
        <Route path="/reviews" element={<CustomerReviews />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wheel" element={<SpinningWheel />} />
      </Routes>
      <Footer />
    </>
  )
}

export default index
