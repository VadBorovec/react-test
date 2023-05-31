import React, { Component } from 'react';
import classNames from 'classnames';
import Section from '../ui/Section/Section';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionIdx,
    });
  };

  render() {
    // const { label } = this.props.options[this.state.activeOptionIdx];
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <Section title="Color Picker">
        <div className="ColorPicker">
          <h2 className="ColorPicker__title">Color Picker</h2>
          <p className="ColorPicker__title">Selected color: {label}</p>
          <div>
            {this.props.options.map(({ label, color }, index) => (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            ))}
          </div>
        </div>
      </Section>
    );
  }
}

export default ColorPicker;
