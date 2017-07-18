import React from 'react';

const lifetime=5;
var counter=0;

export default class Correctanswer extends React.Component{

    Counter(){
        var inputArray = [this.props.input];
        counter=inputArray.length;
        console.log(counter);
        if(counter !== lifetime){
        return(
            <div>
               Lifetime:  {lifetime - counter}
            </div>
        );
        return(
            <div>
                <h1 style={{color:'red'}} >oops! you killed the man</h1>
            </div>
        )
        }

    }
    render(){
        return(
            <div>
                {this.Counter()}
            </div>
        );
    }
}
