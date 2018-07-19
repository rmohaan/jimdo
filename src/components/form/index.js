import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import classnames from 'classnames';
import { submitData } from '../../actions/index';
import { validateForm } from '../../helpers/index';
import './index.css';

const options = {
  lines: 13,
  length: 20,
  width: 10,
  radius: 30,
  scale: 1.00,
  corners: 1,
  color: '#000',
  opacity: 0.25,
  rotate: 0,
  direction: 1,
  speed: 1,
  trail: 60,
  fps: 20,
  zIndex: 2e9,
  top: '50%',
  left: '50%',
  shadow: false,
  hwaccel: false,
  position: 'absolute'
};

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: '',
        nameValid: true,
        emailValid: true,
        messageValid: true,
        formValid: true,
        formErrors: {}
      };
    }

    onKeyDown = (event) => {
      if (this.props.isLoading && ((event.target.type !== 'textarea' && event.which === 13 ) || event.which === 9)) {
        event.preventDefault();
      }
    }

    handleChange = (param) => (event) => { 
      this.setState({
        [param]: event.target.value
      });
    }

    handleSubmit = () => {
      let {name, email, message} = this.state;
      let formValidationResult = validateForm(name)(email)(message),
          formErrors;

      if (formValidationResult.formValid) {
        this.props.dispatch(submitData({name, email, message}));
        name = '';
        email = '';
        message = '';
      } else {
        formErrors = {
          nameError: formValidationResult.nameError, 
          emailError: formValidationResult.emailError, 
          messageError: formValidationResult.messageError
        };
      }
      this.setState({
        name,
        email,
        message,
        nameValid: formValidationResult.nameValid,
        emailValid: formValidationResult.emailValid,
        messageValid: formValidationResult.messageValid,
        formValid: formValidationResult.formValid,
        formErrors
      });
    }
  
    render() {
      const {isLoading} = this.props;
      const {formValid, nameValid, emailValid, messageValid} = this.state;
      let formStyle = classnames("form", {loading: isLoading}),
          buttonStyle = classnames({disabled: isLoading}),
          nameErrorStyle = classnames({error: !nameValid}),
          emailErrorStyle = classnames({error: !emailValid}),
          messageErrorStyle = classnames({error: !messageValid});
      return (
        <form className={formStyle} onKeyDown={this.onKeyDown}>
          <Loader loaded={!isLoading} options={options}/>
          <ul className="flex-outer">
            <li>
              <label htmlFor="first-name">Name</label>
              <input type="text" 
                    id="name" 
                    className={nameErrorStyle}
                    value={this.state.name} 
                    onChange={this.handleChange('name')} 
                    placeholder="Enter your name here" 
                    disabled={isLoading} />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input type="email" 
                    id="email"
                    className={emailErrorStyle}
                    value={this.state.email} 
                    onChange={this.handleChange('email')}
                    placeholder="Enter your email here"
                    disabled={isLoading} />
            </li>
            <li>
              <label htmlFor="message">Message</label>
              <textarea rows="3" 
                        id="message"
                        className={messageErrorStyle}
                        value={this.state.message} 
                        onChange={this.handleChange('message')}
                        placeholder="Enter your message here"
                        disabled={isLoading} />
            </li>
            <li>
              { !formValid ? <p>All fields are mandatory</p> : '' }
            </li>
            <li>
              <button type="button" className={buttonStyle} onClick={this.handleSubmit} disabled={isLoading}>Submit</button>
            </li>
          </ul>
        </form>
      );
    }
}

const mapStateToProps = ({ data, isLoading}) =>
    ({ data, isLoading });

Form.propTypes = {
  isLoading: PropTypes.bool
};  

export default connect(mapStateToProps)(Form);