import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/CustomNavbar';
import HeroSection from './Components/HeroSection';
import Banner from './Components/Banner';
import Insights from './Components/Insights';
import WhyAlliance from './Components/WhyAlliance';
import Timeline from './Components/Timeline';
import Curriculum from './Components/Cirriculum';
import Footer from './Components/Footer';
import CaseStudy from './Components/CaseStudy';
import StudyAbroad from './Components/StudyAbroad';
import './index.css'
import Faculty from './Components/Faculty';
import HiringPartners from './Components/HiringPartners';
import FAQs from './Components/FAQs';
import CorporateMentors from './Components/CorporateMentors';
const App = () => {
  return (
    <div className='main'>
       <CustomNavbar/>
       <HeroSection/>
        <Timeline/>
       <Insights/>
       <Banner/>
       <WhyAlliance/>
       <Curriculum/>
       <CaseStudy/>
       <Faculty/>
       <StudyAbroad/>
       <HiringPartners/>
       <CorporateMentors/>
       <FAQs/>
       <Footer/>
    </div>
  );
};

export default App;
