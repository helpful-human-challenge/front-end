import React from 'react';
import { connect } from 'react-redux';
import { renderIf } from '../../lib/utils';
import { fetchRangeColor } from '../../actions/color-action';
import ColorSwatch from '../color-swatch';
import './_color-detail.scss';

class ColorDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRangeColors(this.props.range);
  }

  render() {
    let rangeColor = this.props.range;
    let colorSelect = this.props.colors[0].colorRange;
    return(
      <div className='detail'>
        <div className='main-color'>
          <ColorSwatch hex={this.props.mainColor} range={this.props.range}/>
        </div>
        <ul className='range'>
          {renderIf(rangeColor === colorSelect,
            this.props.colors.map((color, index) =>
              <li key={index}>
                <ColorSwatch
                  handleDetailView={this.props.handleDetailView}
                  hex={color.hex}
                  id={color._id}
                  range={color.colorRange}
                />
              </li>)
          )}
        </ul>
        <button className='clear' type='button' onClick={() => this.props.clear()}>Clear</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  colors: state.colors,
});

const mapDispatchToProps = dispatch => ({
  getRangeColors: (range) => dispatch(fetchRangeColor(range)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorDetail);
