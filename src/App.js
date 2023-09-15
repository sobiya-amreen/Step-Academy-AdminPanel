import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/DashBoard/Home/Home';
import AboutUs from './Components/About/AboutUs/AboutUs';
import WhyChooseUs from './Components/About/WhyChooseUs/WhyChooseUs';
import OurResults from './Components/OurResults/OurResults';
import ElevenTwelveCommerce from './Components/Course/Eleven&twelveCommerce/ElevenTwelveCommerce';
import ElevenTwelveScience from './Components/Course/ElevenTwelveScience/ElevenTwelveScience';
import Bcom_BBA_BCA from './Components/Course/Bcom_BBA_BCA/Bcom_BBA_BCA';
import MBA_MCOM from './Components/Course/MBA_MCOM/MBA_MCOM';
import DMIT_Career_Counseling from './Components/Course/DMIT&Career_Counseling/DMIT_Career_Counseling';
import SpokenEnglish from './Components/Course/SpokenEnglish/SpokenEnglish';
import Costing_Taxes from './Components/Course/Costing&Texes/Costing_Taxes';
import Contact from './Components/Contact/Contact';
import CA_CMA from './Components/Course/CA_CMA/CA_CMA';
import EnquiryForm from './Components/Admission/Enquiry/EnquiryForm';
import AdmissionForm from './Components/Admission/Admission/AdmissionForm';




function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about_us' element={<AboutUs/>}/>
      <Route path='/why_choose_us' element={<WhyChooseUs/>}/>
      <Route path='/our_result' element={<OurResults/>}/>
      <Route path='/eleven_twelve_commerce' element={<ElevenTwelveCommerce/>}/>
      <Route path='/eleven_twelve_science' element={<ElevenTwelveScience/>}/>
      <Route path='/bcom_bba_bca' element={<Bcom_BBA_BCA/>}/>
      <Route path='/mba_mcom' element={<MBA_MCOM/>}/>
      <Route path='/ca_cma' element={<CA_CMA/>}/>
      <Route path='/dmit_career_counseling' element={<DMIT_Career_Counseling/>}/>
      <Route path='/spoken_english' element={<SpokenEnglish/>}/>
      <Route path='/costing_taxes' element={<Costing_Taxes/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/enquiry_form' element={<EnquiryForm/>}/>
      <Route path='/admission_form' element={<AdmissionForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
