import React from 'react';
import Section from '../ui/Section/Section';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  handleDecrement = () => {
    this.setState(prevState => {
      if (prevState.value > 0) {
        return {
          value: prevState.value - 1,
        };
      }
      return null;
    });
  };
  render() {
    const { value } = this.state;
    return (
      <Section title="Counter">
        <div className="Counter">
          <Value value={value} />
          <Controls
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </div>
      </Section>
    );
  }
}

export default Counter;
