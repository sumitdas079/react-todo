import React from 'react';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from 'uuid';
/* import Todo from './components/Todo'; */
import List from './components/List';
import Input from './components/Input';


const App = () => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(uuid());
  const [item, setItem] = useState('');
  const [editItem, setEditItem] = useState(false);

  const handleChange = (e) => {
    setItem(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: id,
      title: item
    }
    setItems([...items, newItem]);
    setItem('');
    setId(uuid());
    setEditItem(false);
  }

  const clearList = () => {
    setItems([]);
  }

  const handleDelete = (id) => {
    const filtered = items.filter(item => item.id !== id);
    setItems(filtered);
  }

  const handleEdit = (id) => {
    const filtered = items.filter(item => item.id !== id);
    const selected = items.find(item => item.id === id);
    setItems(filtered);
    setItem(selected.title);
    setEditItem(true);
    setId(id);
  }
  return (
    <div className="todos">
      <header class="bg-warning text-white p-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <font face="Inria Sans" size="11" color="black">
                <strong class="text">ToDo List</strong>
              </font>
              {/* <i class="bi-card-checklist"></i> */}
            </div>
          </div>
        </div>
      </header>

      <div className="container mt-3">

        <Input
          item={item}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          editItem={editItem} />

        <h3 className="mt-4">Tasks</h3>

        <List
          items={items}
          clearList={clearList}
          handleDelete={handleDelete}
          handleEdit={handleEdit} />

      </div>



    </div>
  );
}

export default App;
