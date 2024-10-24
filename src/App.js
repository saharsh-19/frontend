//import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import HomePage from './Pages/Home.jsx'
import DeletePage from './Pages/DeletePage.jsx';
import CreatePage from './Pages/CreatePage.jsx';
import UpdatePage from './Pages/UpdatePage.jsx';
import ViewPage from './Pages/ViewPage.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/view' element={<ViewPage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/update' element={<UpdatePage />} />
          <Route path='/delete' element={<DeletePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
