import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo/Todo';
import Social from './Components/Social/Social';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Components/RequireAuth';

function App() {
  return (
    <div className="App">
      {/* <Todo></Todo> */}

      <Routes>
        <Route path="/" element={<Social></Social>}></Route>
        <Route path="/todo" element={
          <RequireAuth>
            <Todo />
          </RequireAuth>
        } />

      </Routes>
    </div>
  );
}

export default App;
