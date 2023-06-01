import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';

import Container from './ui/Container';
import Section from './ui/Section';

import { ProductReviewForm } from './ProductReviewForm/ProductReviewForm';
import { LoginForm } from './LoginForm/LoginForm';

export class App extends Component {
  state = {
    filter: '',
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Section title="Login form">
          <LoginForm />
        </Section>

        <Section title="Product review form">
          <ProductReviewForm />
        </Section>
        <Section title="Filter">
          <Filter
            onChange={e => this.setState({ filter: e.target.value })}
            value={this.state.filter}
          />
        </Section>
      </Container>
    );
  }
}

function Filter({ onChange, value }) {
  return <input type="text" onChange={onChange} value={value} />;
}
