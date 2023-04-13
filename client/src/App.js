import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main, Conversation, Auth } from './pages'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />}/>
        <Route path='/' element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }/>
        <Route path='/conversation' element={<Conversation />}/>
      </Routes>
      <ToastContainer position='top-center'/>
    </BrowserRouter>
  );
}

export default App;
