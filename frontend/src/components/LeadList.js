import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../styles/LeadList.css'

const LeadList = ({id, firstName, lastName, email, contacted, notes, created, updated, markContacted, deleteLead, editLead}) => {
    const [show, setShow] = useState(false)
    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    // React hooks for state variables
    const [ newFirstName, setFirstName ] = useState(firstName)
    const [ newLastName, setLastName ] = useState(lastName)
    const [ newEmail, setEmail ] = useState(email)
    const [ newNotes, setNotes] = useState(notes) 

    // Event handler for editing leads
    const editLeadHandler = (id, firstName, lastName, email, notes) => {
        handleClose()
        const lead = {
            id,
            firstName,
            lastName,
            email,
            notes,
        }
        editLead(lead)
    }

    return (
        <>
        <div className='lead-box'>
            <div className='lead-box-top'>
                <div className='lead-info'>
                <div><div className='lead-label'>Name: </div>{firstName} {lastName}</div>
                    <div><div className='lead-label'>Email:</div> {email}</div>
                    <div className='notes'><div className='lead-label'>Notes:</div> {notes}</div>
                </div>
                <div className='lead-container-buttons'>
                <button className='delete-button' onClick={() => deleteLead(id)}>
                    <img className='delete-svg' src="./images/delete.svg" alt="" />
                    Delete
                </button>
                <button className='edit-button' onClick={handleOpen}>
                    <img className='edit-svg' src="./images/edit.svg" alt="" />
                    Edit
                </button>
                <div className='centered-col'>
                    <div className='lead-mid-label'>Contacted: </div>
                    <input
                        type="checkbox"
                        checked={contacted}
                        value={contacted}
                        onChange={() => markContacted(id)}
                        />
                </div>
                </div>
            </div>

            <div className='lead-box-mid'>
                <div className='centered-col'>
                    <div className='lead-mid-label'>Created:</div>
                    <span>{created}</span>
                </div>
                <div className='centered-col'>
                    <div className='lead-mid-label'>Last Updated:</div>
                    <span>{updated}</span>
                </div>
            </div>

            {/* Edit Lead Modal (React-Bootstrap) */}

            <Modal  className='lead-box' show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Edit Lead</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id='edit-form-main' className='form-entry'  method="get">
                        <div>
                            <div className='edit-form-content' >
                                <label>First Name: </label>
                                <input onChange={e => setFirstName(e.target.value)} value={newFirstName} type="text" id="name" required />
                            </div>
                            <div className='edit-form-content' >
                                <label>Last Name: </label>
                                <input onChange={e => setLastName(e.target.value)} value={newLastName} type="text" id="email" required />
                            </div>
                            <div className='edit-form-content' >
                                <label>Email: </label>
                                <input onChange={e => setEmail(e.target.value)} value={newEmail} type="text"  id="email" required />
                            </div>
                            <div className='edit-form-content' >
                                <label>Notes: </label>
                                <input className='edit-notes' onChange={e => setNotes(e.target.value)} value={newNotes} type="text" id="email" required />
                            </div>
                        </div>
                
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => editLeadHandler(id, newFirstName, newLastName, newEmail, newNotes)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
         </div>
         
        </>      
    )
}

export default LeadList
