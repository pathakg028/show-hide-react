import React from "react";


class Modal extends React.Component {
//console.log(this.props);
  onClose = e => { this.props.onClose && this.props.onClose(e)};

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <div>{this.props.children}</div>
        <div>
          <button onClose = { e => { this.onClose(e)}}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
export default Modal;