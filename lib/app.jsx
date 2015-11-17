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
    //return this.setState({value: (this.state.value == "X")? "O" : "X" });
  },
  handleClick : function() {
    //this.updateState();
    //Je renvois directement l'object plutôt que l'index ...
    return this.props.onClick(this);
  },
  render: function onRender () {
    return ( <button onClick={this.handleClick} style={boxStyle}>{this.state.value}</button> );
  }
});

var Row = React.createClass({
  handleClick : function(item) {
    ... parce qu'ici j'arrive pas à retrouver la box juste avec son index
    return this.props.onClick(item);
  },
  render: function onRender () {
    var ligns = this.props.ligns;
    return (
      <div>
      {
          ligns.map(function(lign, index) {
            return <Box initialValue={lign} onClick={this.handleClick} />
          }.bind(this))
      }
      </div>
    );
  }
});


var Grid = React.createClass({
  handleClick : function(item) {
    //et ici pareil
    return item.setState({value: (item.state.value == "X")? "O" : "X" });
  },
  render: function onRender () {
    var cells = this.props.cells;
    return (
    <div>
    {
        cells.map(function(ligns, index) {
          return <Row ligns={ligns} onClick={this.handleClick} />
        }.bind(this))
    }
    </div>

    );
  }
});

React.render(<Grid cells={[["-","-","-"],["-","-","-"],["-","-","-"]]}/>, document.body);
