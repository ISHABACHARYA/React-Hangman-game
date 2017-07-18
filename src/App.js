import React, { Component } from 'react';
import Correctanswer from './Correctanswer';

const Answers=["ishab","acharya"];
var Answer;
var input;
const style={
  textboxes:{
    height: '30px',
    width: '130px'
  }
}
class App extends Component {
  componentWillMount(){
    this.generateAnswer()
  }

  generateAnswer(){
    let a= Math.floor(Math.random()*2);
    Answer=Answers[a];

  }

  displayInputBox(){
    
    return(
      <form onSubmit={(e)=>this.validateInput(e)}>
      <input type="text" placeholder="only one letter" ref='userinput' style={style.textboxes}/> 
      <button type="submit" style={{height:'30px',width:'80px',margin:'10px'}}>check!</button>
      </form>
    );
  }
  constructor(){
    super();
    this.state={input}
  }

    validateInput(event){
      event.preventDefault();

      if(this.refs.userinput.value === "" || this.refs.userinput.value.length >1){
        alert("Input should be one character")
      }
      else
            this.setState({input:this.refs.userinput.value});

      this.refs.userinput.value="";
    }


  render() {
 
    return (
      <div style={{marginTop:'50px',marginLeft:'500px'}}>
        {this.displayInputBox()}
         <div>
           <Correctanswer answer={this.Answer} input={this.input}/>
         </div>
      </div>
    );
}
}
export default App;