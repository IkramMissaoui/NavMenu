import React, { Component } from 'react';
import './App.css';
class App extends Component {
   constructor(props){
      super(props)
      this.state=({
         class:'none'
      })}
      fn=()=>{
         this.state.class==='none'?this.setState({class:'block'}):this.setState({class:'none'})
      }
         render() {
             return (
            <div className='total'>
             <div className="nav-bar">
               <ul className="ul-menu">
                   <li className="li-items1">Home</li>
                   <li className="li-items2" onClick={this.fn} style={{zIndex:'99'}}>Services
                       <ul id={this.state.class}>
                          < li>For entrepreneurs</ li>
                          < li>For students</ li>
                          < li>For hobbyits</ li>
      
                       </ul>
                   </li>
                   <li className="li-items3">Contacts</li>
               </ul>
             </div>
             </div>
             );
         }
      }
      export default App;