
import './App.css';
import Main from './pages/Main';
import Login from './pages/login';
import { NotFound } from './components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageRacing from './pages/ManageRacing';
import RacingDetail from './pages/RacingDetail';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />

        <Route path="/" element={<Main />} >
          <Route index element={<Home />} />
          <Route path="manage-racing" element={<ManageRacing />} />
          <Route path="racing-detail" element={<RacingDetail />} />
          {/* <Route path="manage-point/:calendarId" element={<DetailPoint />} />
          <Route path="config-point" element={<ConfigPoint />} /> */}
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <ToastContainer />
  </BrowserRouter>
  );
}

export default App;
