import React from "react";

class Card extends React.Component {
  state = {
    img: "front",
  };

  handleChangeImg() {
    if (this.state.img === "front") {
      this.setState({
        img: "back",
      });
    } else {
      this.setState({
        img: "front",
      });
    }
  }
  render() {
    return (
      <div className="card">
        <span className="name">{this.props.name}</span>
        <img
          alt="logo"
          onMouseEnter={() => this.handleChangeImg()}
          onMouseLeave={() => this.handleChangeImg()}
          className="avatar"
          src={
            this.state.img === "front"
              ? this.props.frontImg
              : this.props.backImg
          }
        />
      </div>
    );
  }
}

export default Card;
