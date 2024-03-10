import Header from '../Header'
import Certificate from '../Certificate'
import Work from '../Work'
import Contact from '../Contact'
import pfofile from './nanda.png'; 
import cv from "../../../src/assets/Nanda_Kumar_resume.pdf"
import './index.css'


const Home = () => {
    return(
        <div className='home-container' id="home">
         <Header/>
         <div className='home-detail-container' >
          <div className='d-flex flex-row justify-content-center'>
            <div  className='d-flex justify-content-around'>
                <div className='d-flex flex-column col-6'>
                    <h1 className='name-h1 glow-white'>Nanda Kumar</h1>
                    <p className='intro'>Passionate full-stack developer with expertise in front-end and back-end technologies. Dedicated to crafting efficient, user-friendly web solutions.</p>

                <a href={cv} className='cv_btn' target="_blank" download>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Get My CV
                        </a>
                </div>
                <div className='d-flex flex-column col-3'>
                <div class="image-rounded"></div>
                </div>
            </div>
          </div>
          <div className='d-flex flex-row justify-content-around skil'>
          <div class="image-rounded1"></div>
          <div class="image-rounded2"></div>
          <div class="image-rounded3"></div>
          <div class="image-rounded4"></div>
          <div class="image-rounded5"></div>
          <div class="image-rounded6"></div>
          <div class="image-rounded7"></div>
          </div>
         </div>
          <Work/>
         <Certificate/>
         <Contact/>
        </div>
    )
}

export default Home