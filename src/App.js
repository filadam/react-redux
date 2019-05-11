import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.reset}>reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { count: state };
};

const mapDispatchToProps = dispatch => {
  return { 
    increment: () => dispatch({type: 'INCREMENT'}), 
    decrement: () => dispatch({type: 'DECREMENT'}),
    reset: () => dispatch ({type: 'RESET'})
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);