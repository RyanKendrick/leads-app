import React, { useState } from "react";
import '../styles/LeadForm.css'

const LeadForm = ({ addLead }) => {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ notes, setNotes] = useState('')

    const addLeadHandler = (e) => {
       let form = document.getElementById('main-form')
        e.preventDefault()
        addLead({
            firstName,
            lastName,
            email,
            contacted: false,
            notes,
        })
        form.reset()
    }
    

    return (
        <form data-testid='lead-form' id='main-form' className="lead-form-container">
            <div className="form-entry" >
                <label>First Name</label>
                <input onChange={e => setFirstName(e.target.value)} type="text" required />
            </div>
            <div className="form-entry" >
                <label>Last Name</label>
                <input onChange={e => setLastName(e.target.value)} type="text" required />
            </div>
            <div className="form-entry" >
                <label>Email</label>
                <input onChange={e => setEmail(e.target.value)} type="text" required />
            </div>
            <div className="form-entry" >
                <label>Notes</label>
                <input onChange={e => setNotes(e.target.value)} className="notes-field" type="text" required />
            </div>
            <button className="save-button" onClick={addLeadHandler} type="submit">
                <img className="add-svg" src="./images/add.svg" alt="" />
                Save Lead
                </button>
        </form>
    )
}

export default LeadForm;
