import React, { useState } from 'react'
import { Form,Button, Col } from 'react-bootstrap'
import { useStateValue } from "../reducers/StateProvider";

function AddNewCustomer() {
  const [ form, setForm ] = useState({})
const [ errors, setErrors ] = useState({})
const [{}, dispatch] = useStateValue();

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }
  const findFormErrors = () => {
    const { name, surname, age } = form
    const newErrors = {}
    // name errors
    if ( !name || name === '' ) newErrors.name = 'Cannot be blank!'
    else if ( name.length > 30 ) newErrors.name = 'Name is too long!'
    // food errors
    if ( !surname || surname === '' ) newErrors.surname = 'Cannot be blank!'
    // rating errors
    
    if ( !age || age <1  ) newErrors.age = 'Cannot be blank or negative!'
   

    return newErrors
}
const handleSubmit = e => {
  console.log(form)
  e.preventDefault()
  // get our new errors
  const newErrors = findFormErrors()
  // Conditional logic:
  if ( Object.keys(newErrors).length > 0 ) {
    // We got errors!
    setErrors(newErrors)
  } else {
dispatch({type:'ADD_CUSTOMER',item:form})
    alert('Successfully added to customers!')
  }
}
   
    return (
        <Form >
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text "   onChange={ e => setField('name', e.target.value) }  isInvalid={ !!errors.name }
 />
 <Form.Control.Feedback type='invalid'>
        { errors.name }
    </Form.Control.Feedback>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Surname</Form.Label>
            <Form.Control type="text" onChange={ e => setField('surname', e.target.value) }  isInvalid={ !!errors.name }/>
            <Form.Control.Feedback type='invalid'>
        { errors.surname }
    </Form.Control.Feedback>
          </Form.Group>
          <Form.Group  controlId="formGridCity">
            <Form.Label size="small">Age</Form.Label>
            <Form.Control type="number"  onChange={ e => setField('age', e.target.value) }  isInvalid={ !!errors.name }/>
            <Form.Control.Feedback type='invalid'>
        { errors.age }
    </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
      
       
      
        <Form.Row>
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text"  onChange={ e => setField('address', e.target.value) }   />
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Address 2</Form.Label>
          <Form.Control type="text"  onChange={ e => setField('address2', e.target.value) }   />
        </Form.Group>
        </Form.Row>
        <Form.Group>
   
    <Form.Control.Feedback type='invalid'>
        { errors.name }
    </Form.Control.Feedback>
</Form.Group>
      
        <Button variant="primary"  onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    )
}

export default AddNewCustomer
