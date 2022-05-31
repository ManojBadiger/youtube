
import './App.css';
import { Header } from './Header';
import Sidebar from './Sidebar';
import Recommendedvideo from './Recommendedvideo';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Searchpage from './Searchpage';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
        <Route path='/search/:searchTerm'
        element={
          <div className='app_page'>
          <Sidebar/>
         <Searchpage/>
         </div>
        }
        >
       
        </Route>
        <Route path='/' element={
          
        <div className='app_page'>
         <Sidebar/>
        <Recommendedvideo/>
        </div>
       }>
         
        </Route>
       
        </Routes>

      </Router>
 
     {/* <Header/>
     <div className="app_page">
     <Sidebar/>
     <Recommendedvideo/>
     </div> */}
    
    </div>
  );
}

export default App;
