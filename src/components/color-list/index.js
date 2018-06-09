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
    };
    this.handleDetailView = this.handleDetailView.bind(this);
  }

  componentDidMount() {
    this.props.getAllColors();
  }

  handleDetailView(color) {
    this.props.getOneColor(color._id);
    // this.props.getRangeColors(color.colorRange);
    this.setState({
      detail: true,
    });
  }

  renter() {
    return(
      <div className='color-list'>
        <Header />
        <NavBar />
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
        {renderIf(this.state.detail, <ColorDetail />)}
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
