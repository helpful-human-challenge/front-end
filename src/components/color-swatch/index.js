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
    // console.log('__SWATCH_PROPS__', this.props);
    return(
      <div id={this.state.id} onClick={() => this.props.handleDetailView(this.props)}>
        <p>{this.state.hex}</p>
      </div>
    );
  }
}

export default ColorSwatch;
