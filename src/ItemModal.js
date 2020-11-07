import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './ItemModal.css';

function ItemModal({ 
    show, 
    onHide, 
    register, 
    handleSubmit, 
    errors, 
    items, 
    setItems, 
    name, 
    setName,
    description, 
    setDescription,
    priority, 
    setPriority,
    date,
    setDate,
    index }) {

    const updateItems = (data, e) => {
        setItems([...items, {name: data.name, description: data.description, priority: data.priority, due_date: data.date}]);
        onHide();
    }

    const editItem = (data, e) => {
        getEditedList(data);
        setItems(items)
        setName(data.name);
        setDescription(data.description);
        setPriority(data.priority);
        setDate(data.date);
        onHide();
    }

    const getEditedList = (data) => {
        const removedItem = items.splice(index, 1, {name: data.name, description: data.description, priority: data.priority, due_date: data.date})
    }

    return (
        <div>
            <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Form onSubmit={handleSubmit(name ? editItem : updateItems)}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Item Details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>                     
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Item Name <span className="required">*</span></Form.Label>
                                <Form.Control 
                                    ref={register({required: "This field is required"})} 
                                    name="name" 
                                    type="text" 
                                    defaultValue={name ? name : undefined} 
                                    placeholder="Required"
                                />
                                    {errors.name && (
                                        <p className="errorMessage">{errors.name.message}</p>
                                    )}
                            </Form.Group>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                    ref={register} 
                                    name="description" 
                                    as="textarea" 
                                    defaultValue={description ? description : undefined}
                                    placeholder=""
                                />
                            </Form.Group>
                            <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Priority</Form.Label>
                                <Form.Control ref={register} name="priority" as="select" defaultValue={priority ? priority : "N/A"}>
                                    <option>N/A</option>
                                    <option>1 - Critical</option>
                                    <option>2 - High</option>
                                    <option>3 - Medium</option>
                                    <option>4 - Low</option>
                                    <option>5 - Nice to Have</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Due Date (mm/dd/yyyy)</Form.Label>
                                    <Form.Control 
                                        ref={register({ pattern: {
                                                            value: /^\d{2}\/\d{2}\/\d{4}$/, 
                                                            message: "Invalid date format"
                                                        } })} 
                                        name="date" 
                                        type="text" 
                                        defaultValue={date ? date : ""}
                                        placeholder="MM/DD/YYYY"
                                    />
                                    {errors.date && (
                                        <p className="errorMessage">{errors.date.message}</p>
                                    )}
                            </Form.Group>
                        </Form.Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={onHide} variant="secondary">Cancel</Button>
                        <Button type="submit" variant="primary">Create</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default ItemModal
