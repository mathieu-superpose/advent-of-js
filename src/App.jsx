import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pomodoro from "./pages/Pomodoro/Pomodoro";
import Ecommerce from "./pages/Ecommerce/Ecommerce";
import Piano from "./pages/Piano/Piano";
import Keyboard from "./pages/Keyboard/Keyboard";
import Slidebar from "./pages/Slidebar/Slidebar";
import BillAmount from "./pages/BillAmount/BillAmount";
import CustomModal from "./pages/CustomModal/CustomModal";
import TabbedContent from "./pages/TabbedContent";
import Signup from "./pages/Signup";
import Toaster from "./pages/Toaster";
import Password from "./pages/Password";
import Podcasts from "./pages/Podcasts";
import TipCalculator from "./pages/TipCalculator";
import Meteo from "./pages/Meteo";
import Caroussel from "./pages/Caroussel";
import PasswordVerifier from "./pages/PasswordVerifier";
import CollapsingSections from "./pages/CollapsingSections";
import RockPaperScissors from "./pages/RockPaperScissors";
import CalendarPage from "./pages/CalendarPage";
import YoutubeGallerie from "./pages/YoutubeGallerie";
import TableOfContent from "./pages/TableOfContent";

import "./App.scss";

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
        <Route path="/toaster" element={<Toaster />} />
        <Route path="/password" element={<Password />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/tipcalcultor" element={<TipCalculator />} />
        <Route path="/meteo" element={<Meteo />} />
        <Route path="/caroussel" element={<Caroussel />} />
        <Route path="/password-verifier" element={<PasswordVerifier />} />
        <Route path="/collapsing-sections" element={<CollapsingSections />} />
        <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/youtube-gallerie" element={<YoutubeGallerie />} />
        <Route path="/table-of-content" element={<TableOfContent />} />
      </Routes>
    </div>
  );
}

export default App;
