import React , {Component} from 'react' ;
import profilepic from '../img/profile.png';
import Social from '../components/Social' ;
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component {
    render(){
        return(
            <div className="condiv home"> 
                <img src={profilepic} alt="profile" className="profilepic" />
                <ReactTypingEffect text={[ "I am Worachote","I am learning React "] } speed={80} eraseDelay={200} className="typingeffect" /> 
                <Social />
            </div>
        );
    }
    
}

export default Home ;