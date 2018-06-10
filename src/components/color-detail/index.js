import React from 'react';
import { connect } from 'react-redux';
import { renderIf } from '../../lib/utils';
import { fetchRangeColor } from '../../actions/color-action';
import ColorSwatch from '../color-swatch';

class ColorDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.range
      ?  this.props.getRangeColors(this.props.range)
      : undefined;
  }

  render() {
    return(
      <div className='detail'>
        <div className='main'>
          <ColorSwatch hex={this.props.mainColor}/>
        </div>
        <div className='range'>
          {renderIf(this.props.colors,
            this.props.color.map(color =>
              <ColorSwatch
                hex={color.hex}
                id={color._id}
                range={color.colorRange}
              />)
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  colors: state,
});

const mapDispatchToProps = dispatch => ({
  // getOneColor: (id) => dispatch(fetchOneColor(id)),
  getRangeColors: (range) => dispatch(fetchRangeColor(range)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorDetail);
