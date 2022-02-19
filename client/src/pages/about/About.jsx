import './about.css';
import Header from "../../components/header/Header";

export default function About() {
  return (
    <>
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Sakhi se</span>
        <span className="headerTitleLg">PeriodShiksha</span>
      </div>
      <img
        className="headerImg"
        src= "https://res.cloudinary.com/dt0nu7zgk/image/upload/v1645287432/WhatsApp_Image_2022-02-19_at_9.46.45_PM_lhe6ma.jpg"
        alt=""
      />
    </div>
    <div>
        <p className='title'>About Us</p>
        
    </div>
    </>
    
  )
}
