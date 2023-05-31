import React, { Component } from 'react';
import Section from '../ui/Section/Section';
import Button from '../ui/Button/Button';
import './Dropdown.scss';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  // handleMouseEnter = () => {
  //   this.setState({ visible: true });
  // };

  // handleMouseLeave = () => {
  //   this.setState({ visible: false });
  // };

  render() {
    const { visible } = this.state;

    return (
      <Section title="Dropdown">
        <div className="Dropdown">
          <Button
            type="button"
            onClick={this.toggle}
            // onMouseEnter={this.handleMouseEnter}
            // onMouseLeave={this.handleMouseLeave}
          >
            {visible ? 'Hide' : 'Show'}
          </Button>
          {visible && <div className="Dropdown__menu">Drop-down menu</div>}
        </div>
      </Section>
    );
  }
}

export default Dropdown;
