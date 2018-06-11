import React from 'react';
import { connect } from 'react-redux';
import { renderIf } from '../../lib/utils';
import { fetchAllColors, fetchOneColor, fetchRangeColor } from '../../actions/color-action';
import Header from '../header';
import NavBar from '../nav-bar';
import ColorDetail from '../color-detail';
import ColorSwatch from '../color-swatch';
import './_color-list.scss';

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
    this.setState({
      detail: false,
      hex: null,
      id: null,
      range: null,
    });
    if(range === '') {
      this.props.getAllColors();
    }
    range = range.toLowerCase();
    this.props.getRangeColors(range);
  }

  render() {
    return(
      <div className='color-list'>
        <Header onComplete={this.onComplete}/>
        <NavBar onComplete={this.onComplete}/>
        <ul className='list-view'>
          {renderIf(this.props.colors[0] && !this.state.detail,
            this.props.colors.map(color =>
              <li key={color._id}>
                <ColorSwatch
                  handleDetailView={this.handleDetailView}
                  id={color._id}
                  hex={color.hex}
                  range={color.colorRange}
                />
              </li>)
          )}
        </ul>
        {renderIf(this.state.detail,
          <ColorDetail
            handleDetailView={this.handleDetailView}
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
