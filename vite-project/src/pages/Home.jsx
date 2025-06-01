import Recat from 'react';
import Navbar from '../Component/navbar.jsx';
import Headline from '../Component/Headline.jsx';
import Footer from '../Component/fotter.jsx';
const Home = () => {
  return (
   <div className='bg-zinc-950 w-full h-screen '>
    <Navbar/>
    <Headline/>
    <Footer/>
   </div>
  );
}

export default Home;
