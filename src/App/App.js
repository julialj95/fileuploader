import React from "react";
import "./App.css";
import FilterableList from "../FilterableList/FilterableList";
import SearchBar from "../SearchBar/SearchBar";
class App extends React.component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <FilterableList files={this.props.files} />
      </div>
    );
  }
}

export default App;
