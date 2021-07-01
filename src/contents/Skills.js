import React, { Component } from 'react';

class Skills extends Component{

 
    state = {
            myskills : ["HTML","CSS","Javascript","React"]
    }
    
    render(){
        return(
            <div className="condiv skills"> 
                <h1 className="subtopic"> My Skills </h1>
                <ul>
                    {this.state.myskills.map((myskill)=>{
                        return <li>{myskill}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Skills;