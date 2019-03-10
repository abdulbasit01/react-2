import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Banner from './banner/Banner';
import Sidebar from './images/innivation.jpg';

class App extends Component {
  state= {
    person :[
      {name:'this is person one and he is ', age :22},
      {name:'this is person two and he is ' ,age:22},
      {name:'this is person three and he is ', age :22}

    ]
  }
  buttonNewFunction= (newName1) =>{
    console.log('abdul basit is updated');
    this.setState({
      person :[
        {name:newName1, age :21.5},
        {name:'this is person two and he is ' ,age:22},
        {name:'this is person three and he is ' , age :22}
  
      ]
    })
  }
  newInpVal= (event) =>{
    this.setState({
      person :[
        {name:'this is person one and he is ', age :21},
        {name:event.target.value ,age:21},
        {name:event.target.value , age :20}
  
      ]
    })
  }
  buttonFunction= () =>{
    this.setState({
      person :[
        {name:'this is person one and he is ', age :21},
        {name:'this is person two and he is ' ,age:21},
        {name:'this is person three and he is ' , age :20}
  
      ]
    })
  }
  render() {
    return (
        <div>
          <div className='App'>
            <div className='nav'>
              <Person name='menu'/><Person name='contact'/> <Person name='about us '/><Person name='products'/> <Person name='services' alt=""/>
            </div>
            <img src={Sidebar} className='image-side'></img>
          </div>
          <div className='banner'>
            <Banner 
            name={this.state.person[0].name}
             age ={this.state.person[0].age} 
             click={this.buttonNewFunction.bind(this,'abd')}/>
            <Banner 
            name={this.state.person[1].name} 
            age ={this.state.person[1].age}
            click={() => this.buttonNewFunction('hello')}
            change={this.newInpVal}
            />
            <Banner 
            name={this.state.person[2].name} 
            age ={this.state.person[2].age}
            change={this.newInpVal}
            />
          </div>
          <div >
          </div>
        </div>
        
        
    );
    
  }
}

export default App;