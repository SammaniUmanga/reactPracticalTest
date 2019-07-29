import React, { Component } from 'react';

import './Main.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Modal from '../UI/Modal/Modal';
import AppBody from '../AppBody/AppBody';
import AddJob from '../AddJob/AddJob';

class Main extends Component {

   state = { showModal: false };

   onPostJobButtonClickHandler = () => {
      this.setState({ showModal: true });
   }

   onCancelButtonClickHandler = () => {
      this.setState({ showModal: false});
   }

   onOkButtonClickHandler = () => {
       this.setState({ showModal: false });
       //API call
   }

    render(){
        return (
            <div className="Content">
               <NavigationItems className="NavigaitionItems" postBtnClicked={this.onPostJobButtonClickHandler} />
               <AppBody className="AppBody" postBtnClicked={this.onPostJobButtonClickHandler}/>
               <Modal show={this.state.showModal}>
                   <AddJob cancelClicked={this.onCancelButtonClickHandler} okClicked={this.onOkButtonClickHandler} />
               </Modal>
            </div>
        )
    }
}

export default Main;