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
  }

  componentDidMount() {
    this.props.getAllColors();
  }

  handleDetailView(color) {
    // this.props.getOneColor(color._id);
    // this.props.getRangeColors(color.colorRange);
    this.setState({
      detail: true,
      hex: color.hex,
      id: color._id,
      range: color.colorRange,
    });
  }

  handleClearDetail() {
    this.setState({
      detail: false,
      hex: null,
      id: null,
      range: null,
    });
  }

  render() {
    return(
      <div className='color-list'>
        {/* <Header /> */}
        {/* <NavBar />
        {renderIf(this.props.colors && !this.state.detail,
          this.props.colors.map(color =>
            <ColorSwatch
              key={color._id}
              handleView={this.handleDetailView}
              id={color._id}
              hex={color.hex}
              range={color.colorRange}
            />)
        )}
        {renderIf(this.state.detail,
          <ColorDetail
            mainColor={this.state.hex}
            range={this.state.range}
            clear={this.handleClearDetail}
          />)} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  colors: state,
});

const mapDispatchToProps = dispatch => ({
  getAllColors: () => dispatch(fetchAllColors()),
  getOneColor: (id) => dispatch(fetchOneColor(id)),
  getRangeColors: (range) => dispatch(fetchRangeColor(range)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorList);
