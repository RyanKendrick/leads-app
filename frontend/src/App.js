import './App.css';
import LeadForm from './components/LeadForm';
import LeadList from './components/LeadList';
import axios from 'axios';
import React, { useState, useEffect } from 'react';



function App() {
  const [leads, setLeads] = useState([])

  const getLeads = async () => {
    try {
      const response = await axios.get('/api/leads')
      const { data } = response
      setLeads(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getLeads()
  }, [])

  const addLead = async (info) => {
    try {
      await axios.post('/api/leads/', info)
      // refresh leads list after adding new lead
      getLeads()
    } catch (err) {
      console.log(err)
    }
  }

  const markContacted = async (id) => {
    try {
      const lead = leads.filter(lead => lead.id === id)[0]
      if (lead.contacted === false) {
        lead.contacted = true
      } else {
        lead.contacted = false
      }
      await axios.put(`/api/leads/${id}/`, lead)
      getLeads()
    } catch (err) {
      console.log(err)
    }
  }

  const deleteLead = async (id) => {
    try {
      await axios.delete(`/api/leads/${id}/`)
      getLeads()
    } catch (err) {
      console.log(err)
    }
  }

  const editLead = async (lead) => {
    try {
      await axios.put(`/api/leads/${lead.id}/`, lead)
      getLeads()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
     <LeadForm addLead={addLead} />
     
     {leads.map((lead, index) => (
       <LeadList
          key={index} 
          id={lead.id} 
          firstName={lead.firstName}
          lastName={lead.lastName}
          email={lead.email}
          contacted={lead.contacted}
          notes={lead.notes}
          created={lead.created}
          updated={lead.updated}
          markContacted={markContacted}
          deleteLead={deleteLead}
          editLead={editLead}
          />
     ))}
    </>
  );
}

export default App;
