import React from 'react'

const Todo = ({ title, handleDelete, handleEdit }) => {
    return (
        <li className='list-group-item d-flex'>
                <h6 className='p-0 m-9 flex-grow-1'>{title}</h6>           
                <span class="btn sm-5 btn-outline-success btn-sm float-right" onClick={handleEdit} type="button">Edit</span>
                <span class="mx-2 btn sm-5 btn-outline-danger btn-sm float-right" onClick={handleDelete} type="button">Delete</span>
        </li>
    );
}

export default Todo
