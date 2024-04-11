import { Route, Routes} from 'react-router-dom';    
import Home from '../pages/home';
import Pricing from '../pages/pricing';
import About from '../pages/about';

const index = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
  )
}

export default index
