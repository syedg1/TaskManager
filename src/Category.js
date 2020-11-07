import React, { useState, useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Item from './Item.js';
import ItemModal from './ItemModal.js';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import './Category.css';

function Category({ name, categories, setCategories, index }) {

    const [modalShow, setModalShow] = useState(false);
    const [items, setItems] = useState([]);
    const { register, handleSubmit, errors } = useForm();

    const deleteCategory = () => {
        var newCategories = categories.filter((_, i) => i != index);
        setCategories(newCategories);
    }

    return (
        <div className='category__container'>
            <h5 contentEditable={true}>{name}</h5>
            <p>click title to edit</p>
            <Button variant="success" size="sm" className="category__addItem" onClick={() => setModalShow(true)}>+ Add Item</Button>{' '}

            {items?.map( ({name, description, priority, due_date}, index) => (
                <Item 
                    name={name} 
                    description={description} 
                    priority={priority} 
                    due_date={due_date} 
                    key={uuidv4()} 
                    index={index} 
                    items={items} 
                    setItems={setItems}
                />
            ))}
            <ItemModal 
                show={modalShow} 
                onHide={() => setModalShow(false)} 
                register={register} 
                handleSubmit={handleSubmit} 
                errors={errors}
                items={items}
                setItems={setItems}
            />
            <a className="category__close" onClick={deleteCategory}>×</a>
        </div>
    )
}

export default Category
