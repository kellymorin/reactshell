
import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Task from './Tasks'
import styled from 'styled-components'
import APIManager from '../../modules/APIManager'
import './tasks.css'


const Container = styled.div``;
const Title = styled.h3``;
const TaskList = styled.div``;
const TodoBody = styled.div`
  padding: 20px
  border-radius: 4%`;

export default class Column extends Component {


//builds the to add tasks
addTaskForm(columnId) {

       return(<div className = 'box'>
                    <label value="Add New">Add New</label>
                    <input id= {`formFieldContent-`+columnId} onChange={this.props.handleFieldChange} type = 'text' value={this.props.passedState[`formFieldContent-`+columnId]}/>
                    <button id={`formFieldButton-`+columnId} onClick={(e) => this.props.newTaskSave(e)}>Save</button>
                  </div>)



   }


  columns() {
        return (
      <Container id = "container" className="column ">
        <div >
        <Title id = "title" className="title">{this.props.column.name}</Title>
        <TodoBody className = "has-background-grey-lighter">
        {this.addTaskForm(this.props.column.id)}
        <Droppable droppableId={`col-${this.props.column.id}`}>
        {
          provided => (
            // if ref doesn't work try innerRef
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
              {
                this.props.tasks.map((task, index) =>{
                return <Task
                              key={task[0].id} task={task} index={index}
                              deleteTask = {this.props.deleteTask}
                              columnId = {this.props.column.id}
                              editTaskSave = {this.props.editTaskSave}
                              editButtonClick = {this.props.editButtonClick}
                              passedState = {this.props.passedState}
                              handleFieldChange = {this.props.handleFieldChange}
                              editFieldChange = {this.props.editFieldChange}/>}

              )}
              {provided.placeholder}
            </TaskList>
          )
        }
        </Droppable>
        </TodoBody>
        </div>
      </Container>)
  }



  render() {
   return this.columns()
  }
}