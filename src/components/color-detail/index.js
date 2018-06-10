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
    this.props.getRangeColors(this.props.range);
  }

  render() {
    // console.log('__DETAIL_PROPS__', this.props);
    return(
      <div className='detail'>
        <div className='main'>
          <ColorSwatch hex={this.props.mainColor}/>
        </div>
        <div className='range'>
          {renderIf(this.props.colors,
            this.props.colors.map((color, index) =>
              <ColorSwatch
                key={index}
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
  colors: state.colors,
});

const mapDispatchToProps = dispatch => ({
  // getOneColor: (id) => dispatch(fetchOneColor(id)),
  getRangeColors: (range) => dispatch(fetchRangeColor(range)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorDetail);
