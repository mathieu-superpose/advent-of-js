import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Pomodoro from './pages/Pomodoro/Pomodoro'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
      </Routes>
    </div>
  )
}

export default App
