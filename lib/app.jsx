'use strict';

var React = require('react');


var boxStyle = {
  'width': '100px',
  'height': '100px'
};

var Box = React.createClass({
  'render': function onRender () {
    return (
      <button style={boxStyle}> {this.props.buttonValue}</button>
    );
  }
});




React.render(<Box  buttonValue="X"/>, document.body);
