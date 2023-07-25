import React, { useState, useEffect } from "react";
import * as yup from 'yup'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const schema = yup.object().shape({
  name: yup.string().required('We need your name!').min(2, 'name must be at least 2 characters'),
  size: yup.string()
})

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  cheese: false,
  chicken: false,
}

const Pizza = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(true);
  
const setFormErrors = (name, value) => {
  yup.reach(schema, name).validate(value)
  .then(() => setErrors({ ...errors, [name]: '' }))
  .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
}

  const onChange = evt => {
    const { name, value } = evt.target
    setFormValues({ ...formValues, [name]: value })
    setFormErrors(name, value)
    }

const onChangeCheck = evt => {
  const name = evt.target.name
  setFormValues({ ...formValues, [name]: evt.target.checked})
  console.log(evt.target.checked)

}

  
    return (
      <form id="pizza-form">
        <div style={{ color: 'red' }}>
          <div>{errors.name}</div>
        </div>
        <input 
          name='name'
          type='text'
          value={formValues.name}
          id='name-input'
          placeholder="Type your name"
          onChange={onChange}
        />
        <label>Select a size
        <select value={formValues.size} name="size" onChange={onChange} id="size-dropdown">
          <option value=''>Select</option>
          <option value='Small'>Small</option>
          <option value='Medium'>Medium</option>
          <option value='Large'>Large</option>
          <option value='Extra-Large'>Extra Large</option>
        </select>
        </label>
        <div className="toppingsChecklist">
        <label>
          <input 
          key='1'
            type='checkbox'
            name='pepperoni'
            onChange={onChangeCheck}
            checked={formValues.pepperoni}
          />Pepperoni
          </label>
          <label>
          <input 
          key='2'
            type='checkbox'
            name='sausage'
            onChange={onChangeCheck}
            checked={formValues.sausage}
          />Sausage
          </label>
          <label>
          <input 
          key='3'
            type='checkbox'
            name='cheese'
            onChange={onChangeCheck}
            checked={formValues.cheese}
          />Extra Cheese
          </label>
          <label>
          <input 
          key='4'
            type='checkbox'
            name='chicken'
            onChange={onChangeCheck}
            checked={formValues.chicken}
          />Grilled Chicken
          </label>
          <label>
            <input 
              type='text'
              name='special'
              id='special-text'
            />
            Anything special?
          </label>
          <label>
            <input 
            type="submit"
            name='submit'
            id="order-button"
            />
          </label>
        </div>

      </form>
    );
  };

  export default Pizza;