import React from "react";
import Modal from "./components/Modal/index";
import "./styles.css";

class App extends React.Component {
  state = {
    show: false
  };

  onClose = e => {
    this.props.show = false;
  };


  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div className="App">
        <button  onClick={e => {
              this.showModal();
         }}
          > show Modal </button>
        <Modal onClose={this.onClose} show={this.state.show}>Message in Modal</Modal>
      </div>
    );
  }
}
export default App;