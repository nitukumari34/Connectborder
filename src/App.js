import Navbar from './Components/Common/Navbar';
import Entrepreneurship from './Pages/Entrepreneurship';
import Events from './Pages/Events';
import LandingPage from './Pages/LandingPage';
import { Route ,Routes } from 'react-router-dom';
import Mentors from './Pages/Mentors';
import ContactUs from './Pages/ContactUs';
import BlogPost from './Pages/BlogPost';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/entrepreneurship' element={<Entrepreneurship/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/mentors' element={<Mentors/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/blogpost' element={<BlogPost/>}/>
    
    </Routes>
    </>
    
  );
}

export default App;
