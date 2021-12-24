import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Pomodoro from './pages/Pomodoro/Pomodoro'
import Ecommerce from './pages/Ecommerce/Ecommerce'
import Piano from './pages/Piano/Piano'
import Keyboard from './pages/Keyboard/Keyboard'
import Slidebar from './pages/Slidebar/Slidebar'
import BillAmount from './pages/BillAmount/BillAmount'
import CustomModal from './pages/CustomModal/CustomModal'
import TabbedContent from './pages/TabbedContent'
import Signup from './pages/Signup'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/piano" element={<Piano />} />
        <Route path="/keyboard" element={<Keyboard />} />
        <Route path="/slidebar" element={<Slidebar />} />
        <Route path="/billamount" element={<BillAmount />} />
        <Route path="/custom-modal" element={<CustomModal />} />
        <Route path="/tabbed-content" element={<TabbedContent />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
