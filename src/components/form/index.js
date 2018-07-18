import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitData } from '../../actions/index';
import './index.css';

class Form extends React.Component {
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
      this.props.dispatch(submitData());
     // event.preventDefault();
    }
  
    render() {
      const {isLoading} = this.props;
      console.log("from form", isLoading);
      return (
        <div className="form">
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
              <textarea rows="3" 
                        id="message" 
                        value={this.state.message} 
                        onChange={this.handleChange('message')}
                        placeholder="Enter your message here" />
            </li>
            <li>
              <button onClick={this.handleSubmit}>Submit</button>
            </li>
          </ul>
        </div>
      );
    }
}

const mapStateToProps = ({ data, isLoading}) =>
    ({ data, isLoading });

Form.propTypes = {
  isLoading: PropTypes.bool
};  

export default connect(mapStateToProps)(Form);