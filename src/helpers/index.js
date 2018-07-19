const delay = (t, v) => {
    return new Promise(function(resolve) { 
        setTimeout(resolve.bind(null, false), t)
    });
}

const validateForm = (name) => (email) => (message) => {
    let nameValid, 
        emailValid, 
        messageValid,
        emailValidator = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    nameValid = emailValid = messageValid = false;

    nameValid = name.length >= 1 && name.search(/[_0-9]/) !== 0;
    emailValid = emailValidator.test(email);
    messageValid = message.length >= 1;

    let formErrors = {
        nameValid,
        emailValid,
        messageValid,
        nameError: nameValid ? '' : 'Name is required and should not start with _ or number.',
        emailError: emailValid ? '' : 'Email is required',
        messageError: messageValid ? '' : 'Message is required',
        formValid: nameValid && emailValid && messageValid
    };

    return formErrors;
  }

export {
    delay,
    validateForm
};