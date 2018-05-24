import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Icon from './Icon';

const customStyles = {
	content : {
		top				: '50%',
		left			: '50%',
		right			: 'auto',
		bottom			: 'auto',
		marginRight		: '-50%',
		transform		: 'translate(-50%, -50%)',
		borderRadius	: '0',
		maxHeight		: '90vh',
		overflow		: "scroll"
	}
};

class Modal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="screenshot-gallery__item">
        <button type="button" className="button button__modal-open" onClick={this.openModal}><img src={"/assets/images/" + this.props.project + "/" + this.props.page + "-t.png"} alt="" /><span className="">{this.props.caption}</span></button>
        <ReactModal
			isOpen={this.state.modalIsOpen}
			onAfterOpen={this.afterOpenModal}
			onRequestClose={this.closeModal}
			style={customStyles}
			contentLabel={this.props.caption}
        >

          <h3>{this.props.caption}</h3>
          <button type="button" onClick={this.closeModal} className="button button__icon-only button__close"><Icon icon="delete" title="Close modal" /></button>
          <img className="project-modal__image" src={"/assets/images/" + this.props.project + "/" + this.props.page + ".png"} alt="" />
        </ReactModal>
      </div>
    );
  }
}

export default Modal;