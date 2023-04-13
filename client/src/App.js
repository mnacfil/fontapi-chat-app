import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main, Conversation, SignIn } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/' element={<Main />}/>
        <Route path='/conversation' element={<Conversation />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
