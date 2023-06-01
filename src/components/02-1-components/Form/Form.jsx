import React, { Component } from 'react';
import shortid from 'shortid';
import Section from '../ui/Section';
import Button from '../ui/Button';
import './Form.scss';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = e => {
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  handleLicenceChange = e => {
    console.log(e.currentTarget.checked);

    this.setState({ licence: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <Section title="Form">
        <form className="Form" onSubmit={this.handleSubmit}>
          <label className="Form__label" htmlFor={this.nameInputId}>
            Name
            <input
              className="Form__input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <label className="Form__label" htmlFor={this.tagInputId}>
            Surname
            <input
              className="Form__input"
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange}
              id={this.tagInputId}
            />
          </label>

          <p className="Form__text">Your level</p>

          <label className="Form__label">
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === 'junior'}
            />
            Junior
          </label>

          <label className="Form__label">
            <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handleChange}
              checked={this.state.experience === 'middle'}
            />
            Middle
          </label>
          <label className="Form__label">
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === 'senior'}
            />
            Senior
          </label>

          <label className="Form__label">
            <input
              type="checkbox"
              name="licence"
              checked={this.state.licence}
              onChange={this.handleLicenceChange}
            />
            Agree with terms
          </label>

          <Button
            className="Form__btn"
            type="submit"
            disabled={!this.state.licence}
          >
            Send
          </Button>
        </form>
      </Section>
    );
  }
}

export default Form;
