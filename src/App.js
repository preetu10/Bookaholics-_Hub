import './App.css';
import  Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Services from './pages/Services';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import UserDashboard from './pages/userRoutes/UserDashboard';
import Privateroute from './components/Privateroute';
import ProfileInfo from './pages/userRoutes/ProfileInfo';
import UserProvider from './context/UserProvider';
import BuySellSection from './pages/userRoutes/BuySellSection';
import BorrowSection from './pages/userRoutes/BorrowSection';
import ExchangeSection from './pages/userRoutes/ExchangeSection';
import ExchangeForm from './pages/userRoutes/ExchangeForm';
import AddBorrow from './pages/userRoutes/AddBorrow';
import AddExchange from './pages/userRoutes/AddExchange';
import OrderPlaceForm from './pages/userRoutes/OrderPlaceForm';
function App() {
  return (
    <UserProvider>
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/services" element={<Services />} />

      <Route path="/user" element={<Privateroute />}>
        <Route path="addsell" element={<UserDashboard />} />
        <Route path="buysell" element={<BuySellSection />} />
        <Route path="borrow" element={<BorrowSection />} />
        <Route path="exchange" element={<ExchangeSection />} />
        <Route path="profile/:userId" element={<ProfileInfo />} />
        <Route path="exchange-form" element={<ExchangeForm />} />
        <Route path="addborrow" element={<AddBorrow />} />
        <Route path="addexchange" element={<AddExchange />} />
        <Route path="orderplace" element={<OrderPlaceForm />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
