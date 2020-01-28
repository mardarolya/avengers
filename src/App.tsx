import React, { Component, ChangeEvent } from "react";
import avengers from "./assets/avengers.json";

import { AvengerProps } from "./shared/typings/Avenger.d";
import { AvengersList } from "./components/avengers-list/AvengersList";
import { Search } from "./components/search/Search";
import logo from "./assets/images/logo.png";
import "./App.css";

class App extends Component<
  null,
  { avengers: AvengerProps[]; search: string }
> {
  constructor(props: null) {
    super(props);

    this.state = {
      avengers,
      search: ""
    };
  }

  handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: value });
  };

  render() {
    const { avengers, search } = this.state;
    const filteredAvengers = avengers.filter(({ name }) =>
      name.toLocaleLowerCase().includes(search)
    );
    return (
      <div className="main">
        <img src={logo} alt="Avengers" className="logo" />
        <Search placeholder="find aveneger" handleChange={this.handleChange} />
        <AvengersList avengers={filteredAvengers} />
      </div>
    );
  }
}

export default App;
