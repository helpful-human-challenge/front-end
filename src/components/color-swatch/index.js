import React from 'react';

const defaultState = {
  hex: null,
  id: null,
  colorRange: null,
};

class ColorSwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props ? this.props : defaultState;
  }

  render() {
    const colorStyle = {
      backgroundColor: this.state.hex,
    };

    return(
      <div id={this.state.id} onClick={() => this.props.handleDetailView(this.props)} style={colorStyle}>
        <p>{this.state.hex}</p>
      </div>
    );
  }
}

export default ColorSwatch;
