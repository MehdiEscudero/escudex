import React from "react";
import axios from "axios";
import Wrapper from "./components/Wrapper";
import "./App.css";
import Card from "./components/Card";

class App extends React.Component {
  state = {
    loading: true,
    result: [],
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=99")
      .then((rep) => {
        this.setState({
          result: rep.data.results,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return this.state.loading ? (
      <span>Loading ...</span>
    ) : (
      <Wrapper>
        {this.state.result.map((value, index) => {
          return (
            <Card
              name={value.name}
              frontImg={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              backImg={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
                index + 1
              }.png`}
            />
          );
        })}
      </Wrapper>
    );
  }
}

export default App;
