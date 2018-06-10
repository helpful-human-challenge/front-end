import React from 'react';
import { connect } from 'react-redux';
import { renderIf } from '../../lib/utils';
import { fetchAllColors, fetchOneColor, fetchRangeColor } from '../../actions/color-action';
import Header from '../header';
import NavBar from '../nav-bar';
import ColorDetail from '../color-detail';
import ColorSwatch from '../color-swatch';

class ColorList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: false,
      hex: null,
      id: null,
      range: null,
    };
    this.handleDetailView = this.handleDetailView.bind(this);
    this.handleClearDetail = this.handleClearDetail.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  componentDidMount() {
    this.props.getAllColors();
  }

  handleDetailView(color) {
    // console.log('handle detail color', color);
    this.setState({
      detail: true,
      hex: color.hex,
      id: color.id,
      range: color.range,
    });
  }

  handleClearDetail() {
    this.props.getAllColors();
    this.setState({
      detail: false,
      hex: null,
      id: null,
      range: null,
    });
  }

  onComplete(range) {
    if(range === '') {
      this.props.getAllColors();
    }
    this.props.getRangeColors(range);
  }

  render() {
    // console.log('__LIST_PROPS__', this.props.colors);
    // console.log('list state', this.state);
    return(
      <div className='color-list'>
        <Header onComplete={this.onComplete}/>
        {/* <NavBar /> */}
        {renderIf(this.props.colors[0] && !this.state.detail,
          this.props.colors.map(color =>
            <ColorSwatch
              key={color._id}
              handleDetailView={this.handleDetailView}
              id={color._id}
              hex={color.hex}
              range={color.colorRange}
            />)
        )}
        {renderIf(this.state.detail,
          <ColorDetail
            clear={this.handleClearDetail}
            mainColor={this.state.hex}
            range={this.state.range}
            clear={this.handleClearDetail}
          />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  colors: state.colors,
});

const mapDispatchToProps = dispatch => ({
  getAllColors: () => dispatch(fetchAllColors()),
  getOneColor: (id) => dispatch(fetchOneColor(id)),
  getRangeColors: (range) => dispatch(fetchRangeColor(range)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorList);
