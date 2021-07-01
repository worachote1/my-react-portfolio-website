import React , {Component} from 'react'
import Widecard from '../components/Widecard';

class Education extends Component {
    render(){
        return(
            <div className="condiv"> 
                
                <h1 className='subtopic'> My Education</h1>
                <Widecard title="Computer Engineering"  where=" King Mongkut's Institute of Technology Ladkrabang" from="2021" to="present"/>
                <Widecard title="High School"  where="Rajsima Wittayalai School" from="2015" to="2021"/>

            </div>
        );
    }
}

export default Education ;