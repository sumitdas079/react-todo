import React from 'react'

const Input = ({item,handleChange,handleSubmit,editItem}) => {
    return (
        <div className='ap'>
            <form id="addForm" onSubmit={handleSubmit}>
            <div class="row">
                <div class="col-lg-7 col-md-7 col-sm-7">

                    <input type="text" 
                        placeholder="What do you want to do today?" 
                        class="form-control"
                        value={item}
                        onChange={handleChange}/>
                </div>

                <div class="col-lg-5 col-md-5 col-sm-5">
                    <button type='submit'
                    className={editItem ? 'btn btn-outline-success' : 'btn btn-outline-info'}>
                        {editItem ? 'Edit':'Add'}
                    </button>
                </div>
            </div>
        </form>
        </div>
    );
}

export default Input
