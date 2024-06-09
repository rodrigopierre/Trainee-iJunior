import './App.css'
import Bottom from './components/Bottom'
import Top from './components/Top'
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props);
    this.updatestate = this.updatestate.bind(this)
    this.state = {
      years:"--",
      months:"--",
      days:"--"
    }
  }

  updatestate(newstate){
    this.setState(newstate)
  }

  render(){
    return (
      <div className='screen'>
        <Top changefunction={this.updatestate}/>
        <Bottom years={this.state.years} months={this.state.months} days={this.state.days}/>
      </div>
    )
  }
}

export default App
