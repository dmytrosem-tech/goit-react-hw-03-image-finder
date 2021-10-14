import { Component } from "react";

import { ImSearch } from "react-icons/im";

export default class SearchBar extends Component {
  state = {
    inputValue: "",
  };

  handleValueChange = (e) => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue.trim() === "") {
      alert("Not so fast");
      return;
    }
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <ImSearch style={{ marginRight: 8 }} />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleValueChange}
          />
        </form>
      </header>
    );
  }
}
