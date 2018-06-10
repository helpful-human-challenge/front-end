import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray'];

    const addColorsToList = (colors) => {
      return colors.map((color, index) =>
        <li key={index} onClick={() => this.props.onComplete(color)}>{color}</li>);
    };

    const randomColor = () => {
      return Math.floor(Math.random() * (8 - 0));
    };

    return(
      <div>
        <button type='button' onClick={() => this.props.onComplete(colors[randomColor()])}>
          Random Color
        </button>
        <ul>
          {addColorsToList(colors)}
        </ul>
      </div>
    );
  }
}

export default NavBar;
