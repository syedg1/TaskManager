import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import './Header.css';

function Header({ categories, setCategories }) {

    const { register, handleSubmit, reset, errors } = useForm();
    const createCategory = (data, e) => {
        setCategories([...categories, {name: data.category, id: uuidv4()}]); 
        e.target.reset();    
    }

    return (
        <div>
            <Row className='justify-content-center mt-3'>
                <h1>Dunder Mifflin Task Manager</h1>
            </Row>  
            <Row className='justify-content-center mt-3'>
                <Col md={6}>
                    <Form onSubmit={handleSubmit(createCategory)}>
                        <InputGroup className="mb-3">
                            <FormControl
                                ref={register({ required: true })}
                                name="category"
                                type="text"
                                placeholder="Add Category..."
                                aria-label="Add Category..."
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button type="submit" variant="success">Add</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Header
