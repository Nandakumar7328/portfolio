import React from 'react';
import aboutWork from '../../assets/seewise_job.jpg'
import logo from '../../assets/old_logo.png'
import './index.css'

const Work = () =>{
  const work = {textAlign:'center',
  color: '#FFFFFF',
  fontWeight: 'bold'}
    return(
    <div id='work' classNameName='d-flex flex-column'>
        <h1 classNameName='work' style={work}>About My Work</h1>
        <div classNameName='d-flex flex-row justify-content-around '>
           

<div className="grid mb-5">
  <figure className="effect-hover">
    <img src={aboutWork} className='img-seewise'/>
    <figcaption>
      <h1>Seewise.AI</h1>
      <div>
        <p>In Seewise.ai, I managed both frontend and backend development using React.js, HTML/CSS, and Django, ensuring seamless interaction between user interfaces and backend systems. My responsibilities included building robust APIs, handling server-side logic efficiently, and managing the PostgreSQL database for data integrity and scalability.</p>
        <p>During my tenure, I actively participated in code reviews and iterative development cycles, continuously enhancing the application's functionality and usability. Through proactive problem-solving and troubleshooting, I mitigated technical challenges and optimized system performance for an enhanced user experience.</p>
        <p>My experience at Seewise.ai deepened my proficiency in delivering innovative solutions at the intersection of technology and artificial intelligence.</p>
      </div>
      <div>
      </div>
      
    </figcaption>
  </figure>
</div>

        </div>
    </div>
     
    )
}


export default Work
