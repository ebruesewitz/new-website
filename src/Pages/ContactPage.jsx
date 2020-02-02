import React from 'react';
import injectSheet from 'react-jss';
import SmartMenu from '../Components/SmartMenu';
import ContactForm from '../Components/ContactForm';



const ContactPageWithClasses = ({ classes }) => (
  <div>
    <SmartMenu/>
      <div className={classes.pageContainer}>
        <h1 className={classes.bannerText}>Contact Us</h1>
        <ContactForm/>
      </div>
  </div>
);

const styles = {
  pageContainer: {
    width: '100vw',
    boxSizing: 'border-box',
    padding: '50px 20px 50px 200px',
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    '@media (max-width: 760px)': {
      padding: '115px 0px 77px 0px'
    }
  },
  bannerText: {
    fontFamily: "komu-b",
    fontSize: 130,
    maxWidth: '50vw',
    margin: 0,
    '@media (max-width: 760px)': {
      maxWidth: '80vw',
      marginLeft: '10vw',
      fontSize: 70,
    }
  },
}

export default injectSheet(styles)(ContactPageWithClasses);
