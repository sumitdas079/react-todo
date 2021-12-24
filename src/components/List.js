import React from 'react'
import Todo from './Todo'
const List = ({ items,clearList,handleDelete,handleEdit }) => {
    return (
        <div className='LIST'>
            <form >
                <ul className="list-group">
                    {items.map(item => {
                        return(
                            <Todo
                                key={item.id}
                                title={item.title}
                                handleDelete={()=>handleDelete(item.id)}
                                handleEdit={()=>handleEdit(item.id)}
                            />
                        )
                    })}
                </ul>

                <div class="my-5 text-center">
                    <button type="button" class="btn btn-danger" onClick={clearList}>Clear All</button>
                </div>
            </form>
        </div>
    )
}

export default List
