alert("123")
ReactDOM.render(<h1>Hello World!</h1>,document.getElementById('root'));
/*const domContainer = document.querySelector('#root')
ReactDOM.render(<h1>Luquitas</h1>,domContainer);*/

///////////////////////////////////////////////////////////////////////////////////

/*'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container')
ReactDOM.render(e(LikeButton),domContainer);*/

///////////////////////////////////////////////////////////////////////

/*import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(<h1>Hello world!</h1>,document.getElementById("root"))*/

/*var HelloWorld = React.createClass({
	render: function(){
		return (
			<h1>Hello World</h1>
		)
	}
});

ReactDOM.render(<HelloWorld/>, document.getElementById('root'));*/