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
    return this.setState({value: (this.state.value == "X")? "O" : "X" });
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

var Row = React.createClass({
  render: function onRender () {
    var ligns = ["-","-","-"];
    //this.props.Lign;
    return (
      <div>
        {ligns.map(function(lign) {
          return <Box initialValue={lign} />
        })}
      </div>
    );
  }
});

var Grid = React.createClass({
  render: function onRender () {
    return (
      <div>
        <Row initialValue="-" />
        <Row initialValue="-" />
        <Row initialValue="-" />
      </div>
    );
  }
});

React.render(<Row />, document.body);
