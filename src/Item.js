import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemModal from './ItemModal.js';
import './Item.css';

function Item({ name, description, priority, due_date, index, items, setItems}) {

    const [colour, setColour] = useState("#34dcff");
    const [modalShow, setModalShow] = useState(false);
    const [showDate, setShowDate] = useState(due_date.trim() == "" ? false : true)
    const { register, handleSubmit, errors } = useForm();
    const [editableName, setName] = useState(name);
    const [editableDesc, setDescription] = useState(description);
    const [editablePriority, setPriority] = useState(priority);
    const [editableDate, setDate] = useState(due_date);

    const deleteItem = () => {      
        var newItems = items.filter((_, i) => i != index);
        setItems(newItems);
    }

    var style = {
        paddingLeft: "10px"
    }

    useEffect(() => {
        setShowDate(editableDate.trim() == "" ? false : true);
    }, [editableDate])

    useEffect(() => {
        if (editablePriority.charAt(0) == 1) {
            setColour("#ff4e4e")
        } else if (editablePriority.charAt(0) == 2) {
            setColour("#ffae19")
        } else if (editablePriority.charAt(0) == 3) {
            setColour("#ffea00")
        } else if (editablePriority.charAt(0) == 4) {
            setColour("#ddf969")
        } else if (editablePriority.charAt(0) == 5) {
            setColour("#46d246")
        } else {
    
        }
    }, [editablePriority])

    return (
        <div className="item__container">
            <div className="item__details">
                <div className="item__header">
                { editablePriority.charAt(0) != "N" && 
                    <div className="item__priority" style={{backgroundColor: colour}}>{editablePriority.charAt(0)}</div>
                }
                    <div className="item__title">{editableName}</div>
                    
                </div>
                <div className="item__description" style={editablePriority.charAt(0) == "N" ? style : undefined}>{editableDesc}</div>
                <div className="item__dueDate" style={editablePriority.charAt(0) == "N" ? style : undefined}>{showDate ? "Date:" : ""} {editableDate}</div>
            </div>
            <div className="item__buttonGroup">
                <button onClick={() => setModalShow(true)}>Edit</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
            <ItemModal 
                show={modalShow} 
                onHide={() => setModalShow(false)} 
                register={register} 
                handleSubmit={handleSubmit} 
                errors={errors}
                name={editableName}
                setName={setName}
                description={editableDesc}
                setDescription={setDescription}
                priority={editablePriority}
                setPriority={setPriority}
                date={editableDate}
                setDate={setDate}
                index={index}
                setItems={setItems}
                items={items}
             />
        </div>
    )
}

export default Item
