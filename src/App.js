import { Routes, Route} from 'react-router-dom'
import { Navbar, Home, Login, Form1, Form2, Form3, Form4, Form5, NoPageMatch } from './components/pageImports'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/forms' element={<Form1 />} >
          <Route index element={<Form1 />} />
        </Route>
        <Route path='form1' element={<Form1 />} />
        <Route path='form2' element={<Form2 />} />
        <Route path='form3' element={<Form3 />} />
        <Route path='form4' element={<Form4 />} />
        <Route path='form5' element={<Form5 />} />
        <Route path='register' element={<Login />} />
        {/* <Route path='logout' element={<Logout />} /> */}
        <Route path='*' element={<NoPageMatch />} />
      </Routes>
    </div>
  );
}

export default App;
