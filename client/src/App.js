import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main, Conversation } from './pages'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/conversation' element={<Conversation />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
