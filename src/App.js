import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Sidebar from './Layout/Sidebar';
import PagenotFound from './Pages/PagenotFound/PagenotFound';
import CallRecord from './Pages/CallRecord/CallRecord';
import Mentee from './Pages/Mentee/Mentee';
import Mentors from './Pages/Mentors/Mentors';
import ManageCredit from './Pages/ManageCredit/ManageCredit';
import Billings from './Pages/Billings/Billings';
import AllProgram from './Pages/AllProgram/AllProgram';
import Addscreen from './Pages/Dashboard/Addscreen';
import Datacall from './Pages/CallRecord/Datacall';

function App() {
  return (
    <div className="AppContainer">
      <Sidebar />
      <div className="mainWrapper">
        <Header />
        <div className="PagesWrapper">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addscreen" element={<Addscreen />} />
            <Route path="/call-record" element={<CallRecord />} />
            <Route path="//call-record/data-calls" element={<Datacall />} />
            <Route path="/mentor" element={<Mentors />} />
            <Route path="/mentee" element={<Mentee />} />
            <Route path="/all-program" element={<AllProgram />} />
            <Route path="/manage-credit" element={<ManageCredit />} />
            <Route path="/billing" element={<Billings />} />
            <Route path="*" element={<PagenotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
