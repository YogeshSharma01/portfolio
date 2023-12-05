import React,{useState,useEffect} from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Project() {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000);
      
        // Return a cleanup function
        return () => {
          clearTimeout(timerId); // Clear the timer when the component unmounts
        };
      }, []);

      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <>
         <div className='container about-page'>
        <div className='text-zone ' style={{top:'55%'}}>
        <h1>
                <AnimatedLetters 
                 letterClass={letterClass}
                 strArray={['P','r','o','j','e','c','t','s']}
                 idx={15}
                />
            </h1> 
            
            <Carousel className='carousel' responsive={responsive} containerClass="custom-carousel"> 
            
            <div className='project-data-container'>
                <img src='https://i.pinimg.com/originals/88/6b/15/886b1598b09c5c588004570c4fd1e28c.gif' alt='resume builder'/>
                <h2>Resume Builder</h2>
                <p>This is MERN STACK Resume Builder Application where it helps user to build Resume <strong style={{color:"yellow"}}> Work is under progress.</strong> </p>
                <p> 
                <Link className='githubLink' target='_blank' to="https://github.com/YogeshSharma01/resumebuilder">
                <FontAwesomeIcon icon={faGithub}/>
                </Link> 
                </p>
                <Link to="#" className="flat-button">
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                &nbsp;Check out
                </Link>                
            </div>

            <div className='project-data-container'>
                <img src='https://gifdb.com/images/thumbnail/ai-artificial-intelligence-human-robot-brain-pon8h9dclo1fl1u2.gif' alt='ai'/>
                <h2>React Alan AI News-app</h2>
                <p>This project is going to read news headlines for users using Alan AI, Users can search news of their choice(SportsNews, LatestNews, TechNews).</p>
                <p> 
                <Link className='githubLink' target='_blank' to="https://github.com/YogeshSharma01/React_ai-News-App">
                <FontAwesomeIcon icon={faGithub}/>
                </Link> 
                </p>
                <Link target="_blank" to="https://yogeshsharma01.github.io/React_ai-News-App/" className="flat-button">
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                &nbsp;Check out
                </Link>                
            </div>
            <div className='project-data-container'>
                <img src='https://www.appropedia.org/w/images/0/03/Logo_publiclab.png' alt='open_source'/>
                <h2>Community toolbox</h2>
                <p>This is an Open source project under the PublicLab Org. This project helps first timers to how to start contributing to an opne source. The Navbar section and few other sections created by me in this project.</p>
                <p>
                <Link className='githubLink' target='_blank' to="https://github.com/YogeshSharma01/community-toolbox">
                <FontAwesomeIcon icon={faGithub}/>
                </Link> 
                </p>
                <Link target='_blank' to="https://code.publiclab.org/" className="flat-button">
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                 &nbsp;Check out
                </Link>
            </div>
            <div className='project-data-container'>
                <img src='https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif' alt='weather project'/>
                <h2>City Weather</h2>
                <p>This project will show the current weather report of the searched city by user.  </p>
                <p>
                <Link className='githubLink' target='_blank' to="https://github.com/YogeshSharma01/city-weather">
                <FontAwesomeIcon icon={faGithub}/>
                </Link> 
                </p>
                <Link to="https://yogeshsharma01.github.io/city-weather/" target='_blank' className="flat-button">
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                 &nbsp;Check out
                </Link>
            </div>
            <div className='project-data-container'>
                <img src='https://www.adexchanger.com/wp-content/uploads/2020/04/appsfightCOVID_WHO.gif' alt='Covid'/>
                <h2>INDIA-Covid19-Statewise-Status</h2>
                <p>It shows the current reports of -Positive confirmed patients of corona in India Statewise, -Death of patients, -Recovery rate of patients, -Last Updated date and time of the reports Statewise.</p>
                <p>
                <Link className='githubLink' target='_blank' to="https://github.com/YogeshSharma01/INDIA-Covid19-Statewise-Status">
                <FontAwesomeIcon icon={faGithub}/>
                </Link> 
                </p>
                <Link to="https://yogeshsharma01.github.io/INDIA-Covid19-Statewise-Status/" target='_blank' className="flat-button">
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                 &nbsp;Check out
                </Link>
            </div>

            <div className='project-data-container'>
                <img src='https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/78/f7/b0/78f7b0fa-0d46-203e-993e-4e98b03be62d/source/512x512bb.jpg' alt='textutils'/>
                <h2>TextUtils</h2>
                <p>TextUtils is a utility which can be used to manipulate your text the way you want.</p>
                <p>
                <Link className='githubLink' target='_blank' to="https://github.com/YogeshSharma01/TextUtils">
                <FontAwesomeIcon icon={faGithub}/>
                </Link> 
                </p>
                <Link to="https://yogeshsharma01.github.io/TextUtils/" target='_blank' className="flat-button">
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                 &nbsp;Check out
                </Link>
            </div>
            <div className='project-data-container'>
                <img src='https://i.pinimg.com/originals/7d/95/56/7d95564c160833d13873f91ef36eb39d.gif' alt='calculator'/>
                <h2>Calculator app</h2>
                <p>This is my veru first project. Build using using Vanilla JS</p>
                <p>
                <Link className='githubLink' target='_blank' to="https://github.com/YogeshSharma01/calculator">
                <FontAwesomeIcon icon={faGithub}/>
                </Link> 
                </p>
                <Link to="https://yogeshsharma01.github.io/calculator/" target='_blank' className="flat-button">
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                 &nbsp;Check out
                </Link>
            </div>
            
            </Carousel>
           
        </div>
        
        </div>
        
          <Loader type="pacman" />
    </>
  )
}
