import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Pomodoro from './pages/Pomodoro/Pomodoro'
import Ecommerce from './pages/Ecommerce/Ecommerce'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
      </Routes>
    </div>
  )
}

export default App
