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
    //return setInterval(this.updateState, 300);
  },
  updateState : function() {
    return this.setState({value: (this.state.value == "X")? "O" : "X" });
  },
  handleClick : function() {
    //this.updateState();
    this.props.handleClick(this.props.index)
  },
  render: function onRender () {
    return ( <button onClick={this.handleClick} style={boxStyle}>{this.state.value}</button> );
  }
});

var Row = React.createClass({
  handleClick : function(index) {
    childData.updateState();
  },
  render: function onRender () {
    var ligns = this.props.ligns;
    return (
      <div>
      {
          ligns.map(function(lign, index) {
            return <Box initialValue={lign} index={index} onClick={this.handleClick} />
          }.bind(this))
      }
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

React.render(<Row ligns={["-","-","-"]}/>, document.body);
