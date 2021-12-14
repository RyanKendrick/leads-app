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
        <>
        <div className="header"><img className="logo" src="./images/logo.png" alt="" /><h1>LeadTracker</h1></div>
        <h2 className="form-title">Add a new Lead!</h2>
        <div>
            
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
        </div>
        <h4 className="form-title">All Leads</h4>
        </>
    )
}

export default LeadForm;
