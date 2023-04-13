import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main, Conversation, Auth } from './pages'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />}/>
        <Route path='/' element={<Main />}/>
        <Route path='/conversation' element={<Conversation />}/>
      </Routes>
      <ToastContainer position='top-center'/>
    </BrowserRouter>
  );
}

export default App;
