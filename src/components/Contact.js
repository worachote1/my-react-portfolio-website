import React , {Component} from 'react' ;
import Social from '../components/Social';

class Contact extends Component{
    render(){
        return(
            <div className='condiv'> 
                <h1 className="subtopic"> Contact Me </h1>
                <h2> Email : worachote659@gmail.com</h2>
                <h2> Instagram : time_worachote </h2>
                <Social />
            </div>
        );
    }
    
}

export default Contact ;
