import React from 'react'
import '../App.css'
import Nav from './Navbar'
import Button from '@mui/material/Button';
export default function HealthRecord() {
  return (
    <>
    <Nav/>
    <div class="EmptyHealthRecords_emptyHealthRecordsContainer__Xx_fR">
    <div class="EmptyHealthRecords_emptyImage__2qsef">
    <img src="https://images.apollo247.in/images/phr/group.svg"/>
    </div>
    <p>Looks like we have no previous records to
    <br/>show you!</p>
    <br></br>
    <p class="EmptyHealthRecords_digitizingText__cwOoE">Don't have the app? Download here</p>
    <br></br>
    <Button  size='large' variant='contained'href="https://play.google.com/store/apps/details?id=com.apollo.patientapp&hl=en_US" target='blank' >Download App</Button>
    </div>
    </>
  )
}