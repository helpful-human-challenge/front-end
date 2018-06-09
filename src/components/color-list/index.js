import React from 'react';
import { connect } from 'react-redux';
import { renderIf } from '../../lib/utils';
// import actions
import Header from '../header';
import NavBar from '../nav-bar';
import ColorDetail from '../color-detail';

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
    this.setState({
      detail: false,
    });
  }

  renter() {
    return(
      <div className='color-list'>
        <Header />
        <NavBar />
        {renderIf(this.props.colors && !this.state.detail,
          this.props.colors.map(color =>
            <ColorDetail
              key={color._id}
              id={color._id}
              hex={color.hex}
              range={color.colorRange}
            />)
        )}
        {/* {renderIf(this.state.detail,)} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  colors: state,
});

const mapDispatchToProps = dispatch => ({
  getAllColors: () => dispatch(fetchAll()),
  getOneColor: (id) => dispatch(fetchOne(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorList);
