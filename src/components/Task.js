import React from 'react';
import { connect } from 'react-redux';
import { removeTask } from '../redux/actions/todoActions';
import DeleteIcon from "@mui/icons-material/Delete";

const Task = (props) => {

  return (
    <div className='task'>
        <span className='task__title'>{props.task.title}</span>
            <div onClick={() => {props.removeTask(props.task.id)}}>
                <span>
                {<DeleteIcon />}
                </span>
           </div>
    </div>
  )
}


const mapDispatchToProps = {
  removeTask: removeTask
}


export default connect(null, mapDispatchToProps)(Task);