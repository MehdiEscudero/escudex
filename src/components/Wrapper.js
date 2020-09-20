import React from "react";

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <h3 className="header">Escudex</h3>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

export default Wrapper;
