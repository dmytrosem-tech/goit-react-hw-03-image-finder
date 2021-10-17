import { Component } from "react";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";

export default class App extends Component {
  state = {
    loading: false,
    inputValue: "",
  };

  handleFormSubmit = (inputValue) => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery inputValue={this.state.inputValue} />
      </div>
    );
  }
}
