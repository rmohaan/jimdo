import React from 'react';
import './index.css';

export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      };
    }

    handleChange = (param) => (e) => { 
      this.setState({
        [param]: e.target.value
      });
    }
  
    handleSubmit = (event) => {
      alert('A name was submitted: ' + this.state.name);
      event.preventDefault();
    }
  
    render() {
      return (
        
        <form onSubmit={this.handleSubmit}>
        <ul className="flex-outer">
            <li>
              <label htmlFor="first-name">Name</label>
              <input type="text" 
                    id="name" 
                    value={this.state.name} 
                    onChange={this.handleChange('name')} 
                    placeholder="Enter your name here" />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input type="email" 
                    id="email" 
                    value={this.state.email} 
                    onChange={this.handleChange('email')}
                    placeholder="Enter your email here" />
            </li>
            <li>
              <label htmlFor="message">Message</label>
              <textarea rows="6" 
                        id="message" 
                        value={this.state.message} 
                        onChange={this.handleChange('message')}
                        placeholder="Enter your message here" />
            </li>
            <li>
              <button type="submit">Submit</button>
            </li>
          </ul>
        </form>
        
      );
    }
  }