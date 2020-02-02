import React, {Component} from 'react';
import injectSheet from 'react-jss';
import Button from './Button';
import Input from './Input';

class ContactFormWithClasses extends Component{
  constructor(){
    super();
    this.state = {
      name: {
        value: '',
        error: false,
      },
      email: {
        value: '',
        error: false,
      },
      message: {
        value: '',
        error: false,
      },
    }
  }

  handleChange = (value, inputStateName) => {
    this.setState({[inputStateName]: {...this.state[inputStateName], value}});
  }

  submitForm = () => {
    let areErrors = false;

    if (!this.state.email || !this.state.email.value || this.state.email.value === ''){
      this.setState({email: {...this.state.email, error: true}});
      areErrors = true;
    }else{
      this.setState({ email: { ...this.state.email, error: false } });
    }

    if (!this.state.message || !this.state.message.value || this.state.message.value === ''){
      this.setState({ message: { ...this.state.message, error: true } });
      areErrors = true;
    } else {
      this.setState({ message: { ...this.state.message, error: false } });
    }

    if(!areErrors){
      const request = {
        email: this.state.email.value,
        name: this.state.name.value,
        message: this.state.message.value,
      }

      return fetch('https://h8jmbankhg.execute-api.us-east-1.amazonaws.com/prod/contact-us', {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(request),
      }).then(response => response.json()).then(
        (result) =>{
          console.log(result);
          this.setState({
            name: {
              value: '',
              error: false,
            },
            email: {
              value: '',
              error: false,
            },
            message: {
              value: '',
              error: false,
            },
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  
  render(){
    const {
      classes
    } = this.props;
    return(
      <div className={classes.form}>
        <div className={classes.topInputs}>
          <Input
            autoFocus
            hasError={this.state.name.error}
            placeholder='Full name'
            onChange={(event) => {this.handleChange(event.target.value, 'name')}}
            value={this.state.name.value}
            type='text'
          />
          <Input
            hasError={this.state.email.error}
            placeholder='Email'
            onChange={(event) => {this.handleChange(event.target.value, 'email')}}
            value={this.state.email.value}
            type='email'
          />
        </div>
        <Input
          isTextArea
          hasError={this.state.message.error}
          placeholder='Message'
          onChange={(event) => { this.handleChange(event.target.value, 'message') }}
          value={this.state.message.value}
          type='email'
        />
        <Button 
          className={classes.button}
          onClick={this.submitForm}
          buttonText='Send Message'
        />
      </div>
    )
  }
}

const styles = {
  form: {
    width: '60vw',
    display: 'flex',
    flexDirection: 'column',
    '& *': {
      width: '100%',
    },
    '@media (max-width: 760px)': {
      width: '80vw',
      margin: 'auto',
    }
  },
  topInputs: {
    display: 'flex',
    marginBottom: 20,
    alignItems: 'flex-end',
    '& div + div': {
      marginLeft: 20,
    },
    '@media (max-width: 760px)': {
      flexDirection: 'column',
      '& div + div': {
        marginLeft: 0,
        marginTop: 20,
      },
    }
  },
  button: {
    marginTop: 20,
    height: 50,
    lineHeight: '50px',
    fontSize: 18,
  }
}

export default injectSheet(styles)(ContactFormWithClasses);