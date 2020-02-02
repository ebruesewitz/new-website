import React, {Component} from 'react';
import Menu from './Header';

export default class SmartMenu extends Component{
  constructor(){
    super();
    this.state = {
      isMenuOpen: false,
      arrowDirection: 'down',
    }
  }

  componentDidMount(){
    if(this.props.shouldShowArrow && !this.props.isArrowDirectionFixed){
      window.addEventListener('scroll', ()=>{
        if (window.scrollY >= window.innerHeight && this.state.arrowDirection==='down'){
          this.setState({arrowDirection: 'up'});
        }else if(window.scrollY < window.innerHeight && this.state.arrowDirection==='up'){
          this.setState({arrowDirection: 'down'});
        }
      });
    }else if(this.props.isArrowDirectionFixed){
      this.setState({arrowDirection: 'up'});
    }
  }

  toggleMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }
  
  onArrowClick = () => {
    if(this.state.arrowDirection === 'down'){
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      })
      this.setState({arrowDirection: 'up'});
    }else if(this.state.arrowDirection === 'up'){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      if(!this.props.isArrowDirectionFixed){
        this.setState({ arrowDirection: 'down' });
      }
    }
  }

  render(){
    const {
      shouldShowArrow,
      children,
      iconImages,
      iconImageTitles,
      mapPageLink,
      selectedIcon,
      setSelectedIcon, 
      shouldShowMapLink,
    } = this.props;

    return(
      <Menu
        iconImages={iconImages}
        iconImageTitles={iconImageTitles}
        onMenuClick={this.toggleMenu}
        onArrowClick={this.onArrowClick}
        arrowDirection={this.state.arrowDirection}
        isOpen={this.state.isMenuOpen}
        shouldShowArrow={shouldShowArrow}
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
        mapPageLink={mapPageLink}
        shouldShowMapLink={shouldShowMapLink}
      >
        {children}  
      </Menu>
    );
  }
}