import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      range: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state.range);
  }

  render() {
    return(
      <nav>
        <img src='' alt=''/>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='range'
            placeholder='Search'
            value={this.state.range}
            onChange={this.handleChange}
          />
        </form>
      </nav>
    );
  }
}

export default Header;
