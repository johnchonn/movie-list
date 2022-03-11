
import React {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateQuery(this.state.search);
    this.setState({search: ''});
  }

  render() {
    return (
    <form>
      <input
      onChange={this.handleChange}
      value={this.state.searchState}
      type='type'
      />
      <button onClick={this.handleSubmit}>Search</button>
    </form>
    );
  }
}

export default SearchBar;