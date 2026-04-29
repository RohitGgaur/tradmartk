import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home_page.jsx';
import { AboutUsPage } from './pages/about_us_page.jsx';
import { TrademarkOurServicesPage } from './pages/trademark_our_services_page.jsx';
import { RegistrationPage } from './pages/registration_page.jsx';
import { FindYourClassPage } from './pages/find_your_class_page.jsx';
import { TrademarkContactPage } from './pages/trademark_contact_page.jsx';
import { ScrollToTop } from './components/scroll_to_top.jsx';

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/our-services" element={<TrademarkOurServicesPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/find-your-class" element={<FindYourClassPage />} />
        <Route path="/contact" element={<TrademarkContactPage />} />
        <Route path="/patent-services" element={<TrademarkOurServicesPage />} />
        <Route path="/patent-drafting" element={<TrademarkOurServicesPage />} />
      </Routes>
    </>
  );
}
