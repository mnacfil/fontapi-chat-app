import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main, Conversation, Auth } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />}/>
        <Route path='/' element={<Main />}/>
        <Route path='/conversation' element={<Conversation />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
