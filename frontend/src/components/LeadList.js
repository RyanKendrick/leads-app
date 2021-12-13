import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../styles/LeadList.css'

const LeadList = ({id, firstName, lastName, email, contacted, notes, created, updated, markContacted, deleteLead, editLead}) => {
    const [show, setShow] = useState(false)
    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    const [ newFirstName, setFirstName ] = useState(firstName)
    const [ newLastName, setLastName ] = useState(lastName)
    const [ newEmail, setEmail ] = useState(email)
    const [ newNotes, setNotes] = useState(notes) 


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
        document.getElementsByTagName('input').value = ''
        
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

             
            <Modal  className='lead-box' show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Edit Lead</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id='edit-form-main' action="" method="get">
                        <div>
                            <label for="name">First Name: </label>
                            <input onChange={e => setFirstName(e.target.value)} value={newFirstName} type="text" name="name" id="name" required />
                        </div>
                        <div>
                            <label for="email">Last Name: </label>
                            <input onChange={e => setLastName(e.target.value)} value={newLastName} type="email" name="email" id="email" required />
                        </div>
                        <div>
                            <label for="email">Email: </label>
                            <input onChange={e => setEmail(e.target.value)} value={newEmail} type="email" name="email" id="email" required />
                        </div>
                        <div>
                            <label for="email">Notes: </label>
                            <input onChange={e => setNotes(e.target.value)} value={newNotes} type="email" name="email" id="email" required />
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
