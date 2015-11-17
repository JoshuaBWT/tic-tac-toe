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
  'render': function onRender () {
    return (
      <button style={boxStyle}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialValue="0"  buttonValue="X"/>, document.body);
