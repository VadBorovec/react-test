import { Component } from 'react';

import Search from './Search';
import ContentInfo from './ContentInfo';

class App extends Component {
  state = {
    searchText: '',
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <div className="container">
        <Search handleSearch={this.handleSearch} />
        <ContentInfo searchText={this.state.searchText} />
      </div>
    );
  }
}

export default App;
