import React, {Component} from 'react'
// import AddEditNews from './AddEditNews'
// import APIManager from '../../modules/APIManager';
// import $ from 'jquery'

export default class NewsModule extends Component{
//TODO: Get button working to open link in a separate tag
//TODO: Refresh function
//TODO: Need to make sure userId and session storage is being captured appropriately

  //TODO: UPDATE THESE TWO FUNCTIONS AS SOON AS SESSION STORAGE IS INTEGRATED

  addEditCapability=(id)=>{
    if(id === 1){
      return <button className="button" onClick={()=>  this.props.editNewsClick()}>Edit Article</button>
    } else{
      return
    }
  }

  addDeleteCapability=(id)=>{
    if(id === sessionStorage.id){
      return <button className="button" onClick={()=> this.deleteButtonClick()}>Delete Article</button>
    }
  }

  //Step 5: When news modal renders take information that is passed down and create pop-up with that information and button to read more
  //Call functions above in this component to add edit capability and delete capability for active users to modify their articles only

  render(){
    return(
      <React.Fragment>
      <div className="modal is-active" id="newsModal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">    {this.props.articleName}
          </header>
        <div className="modal-content">
          <img src={this.props.articleImage} alt="Article"/>
          <p>{this.props.about}</p>
        </div>
        <footer className="modal-card-foot">
          <a className="button" src={this.props.url}>Read More</a>
          {this.addEditCapability(1)}
          {this.addDeleteCapability(this.props.userId)}
        </footer>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={()=> this.props.closeModal()}></button>
    </div>
    </React.Fragment>
    )
  }
}