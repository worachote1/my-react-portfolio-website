import React , {Component} from 'react' ;
import NavItems from '../components/NavItems' ;

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            'NavItemActive':''
        }
    }

    render(){
        return(
            <nav>
                <ul>
                    <NavItems item="Home" tolink="/"> </NavItems>
                    <NavItems item="About" tolink="/about"> </NavItems>
                    <NavItems item="Education" tolink="/edution"> </NavItems>
                    <NavItems item="Skills" tolink="/skills"> </NavItems>
                    <NavItems item="Contact" tolink="/contact"> </NavItems>

                </ul>
            </nav>
        );
    }
    

}

export default NavBar ;