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
import StarRating from "./pages/StarRating";
import SimplifiedBudget from "./pages/SimplifiedBudget";
import CreditCardForm from "./pages/CreditCardForm";


import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 0: index */}
        <Route path="/" element={<Home />} />
        {/* 1: pomodoro */}
        <Route path="/pomodoro" element={<Pomodoro />} />
        {/* 2: ecommerce */}
        <Route path="/ecommerce" element={<Ecommerce />} />
        {/* 3: piano */}
        <Route path="/piano" element={<Piano />} />
        {/* 4: keyboard */}
        <Route path="/keyboard" element={<Keyboard />} />
        {/* 5: checkboxes (podcast) */}
        <Route path="/podcasts" element={<Podcasts />} />
        {/* 6: slidebar */}
        <Route path="/slidebar" element={<Slidebar />} />
        {/* 7: tip calculator */}
        <Route path="/tipcalcultor" element={<TipCalculator />} />
        <Route path="/billamount" element={<BillAmount />} />
        {/* 8: tip meteo */}
        <Route path="/meteo" element={<Meteo />} />
        {/* 9: caroussel */}
        <Route path="/caroussel" element={<Caroussel />} />
        {/* 10: password verifier */}
        <Route path="/password-verifier" element={<PasswordVerifier />} />
        {/* 11: collapsing sections */}
        <Route path="/collapsing-sections" element={<CollapsingSections />} />
        {/* 12: rock paper scissors */}
        <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        {/* 13: modal */}
        <Route path="/custom-modal" element={<CustomModal />} />
        {/* 14: calendar */}
        <Route path="/calendar" element={<CalendarPage />} />
        {/* 15: youtube gallerie */}
        <Route path="/youtube-gallerie" element={<YoutubeGallerie />} />
        {/* 16: star rating */}
        <Route path="/rating" element={<StarRating />} />
        {/* 17: table of content */}
        <Route path="/table-of-content" element={<TableOfContent />} />
        {/* 18: password generator */}
        <Route path="/password" element={<Password />} />
        {/* 19: signup */}
        <Route path="/signup" element={<Signup />} />
        {/* 20: tabbed content */}
        <Route path="/tabbed-content" element={<TabbedContent />} />
        {/* 21: simplified budget */}
        <Route path="/simplified-budget" element={<SimplifiedBudget />} />
        {/* 22: credit card form */}
        <Route path="/credit-card-form" element={<CreditCardForm />} />
        {/* 23: toaster */}
        <Route path="/toaster" element={<Toaster />} />

        {/* 24: table with pagniation */}

      </Routes>
    </div>
  );
}

export default App;
