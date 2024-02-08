import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection'; 
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
/* import MainLayout from './components/MainLayout'; */


function App() {
  return (
    <>
    <NavBar/>
   { <HeroSection/>}
 {/*    <MainLayout/> */}
    <SearchBar/>
    <Footer/>
    </>
  );
}

export default App;
