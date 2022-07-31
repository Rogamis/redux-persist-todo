import React from 'react'
import { connect } from 'react-redux'
import { formTask } from '../redux/actions/todoActions'

const TaskCreator = (props) => {

  console.log('TaskCreator')

  const [taskTitle, setTaskTitle] = React.useState('');

  const addTask = () => {
    if(taskTitle === '') return
    props.formTask(taskTitle, () => {setTaskTitle('')})
  }

  const onChangeTaskTitle = (event) => {
    setTaskTitle(event.target.value)
  }

  return (
    <div>
        <input value={taskTitle} onChange={onChangeTaskTitle}/>
        <button onClick={addTask}>Add</button>
    </div>
  )
}

const mapDispatchToProps = {
  formTask: formTask
}

export default connect(null, mapDispatchToProps)(TaskCreator)