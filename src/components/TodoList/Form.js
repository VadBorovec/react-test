import React, { Component } from 'react';
import shortid from 'shortid';
import './Form.css';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: true,
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
      <form class="Form" onSubmit={this.handleSubmit}>
        <label class="Form__label" htmlFor={this.nameInputId}>
          Name
          <input
            class="Form__input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label class="Form__label" htmlFor={this.tagInputId}>
          Surname
          <input
            class="Form__input"
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </label>

        <p class="Form__text">Your level</p>

        <label class="Form__label">
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>

        <label class="Form__label">
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label class="Form__label">
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>

        <button class="Form__btn" type="submit" disabled={!this.state.licence}>
          Send
        </button>
      </form>
    );
  }
}

export default Form;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>
//           Имя
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             id={this.nameInputId}
//           />
//         </label>
//         <br />
//         <label htmlFor={this.tagInputId}>
//           Прозвище
//           <input
//             type="text"
//             name="tag"
//             value={this.state.tag}
//             onChange={this.handleChange}
//             id={this.tagInputId}
//           />
//         </label>

//         <br />

//         <label>
//           <input
//             type="checkbox"
//             name="licence"
//             checked={this.state.licence}
//             onChange={this.handleLicenceChange}
//           />
//           Согласен с условием
//         </label>

//         <button type="submit" disabled={!this.state.licence}>
//           Отправить
//         </button>
//       </form>
//     );
//   }
// }
