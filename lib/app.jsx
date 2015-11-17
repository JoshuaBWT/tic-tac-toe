'use strict';

var React = require('react');

var boxStyle = {
  'width': '100px',
  'height': '100px'
};

var Box = React.createClass({
  getInitialState: function() {
      return {value: this.props.initialValue};
    },
  componentWillMount: function () {
    return setInterval(this.updateState, 300);
  },
  updateState : function() {
    return this.setState({value: (this.state.value == "X")? "0" : "X" });
  },
  handleClick : function() {
    this.updateState();
  },
  render: function onRender () {
    return (
      <button onClick={this.handleClick} style={boxStyle}>{this.state.value}</button>
    );
  }
});

var Rows = React.createClass({
  render: function onRender () {
    return (
      <div>
        <Box initialValue="0" />
        <Box initialValue="1" />
        <Box initialValue="0" />
      </div>
    );
  }
});



React.render(<Rows/>, document.body);
