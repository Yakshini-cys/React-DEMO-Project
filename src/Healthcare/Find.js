import React from 'react'
import './Find.css'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Nav from './Navbar'
const Find = () => {
    const [Place, setPlace] = React.useState('');

    const handlePlace = (event) => {
      setPlace(event.target.value);
    };
    const [Loc, setLoc] = React.useState('');

    const handleLoc = (event) => {
      setLoc(event.target.value);
    };
    const [spec, setSpec] = React.useState('');

    const handleSpec = (event) => {
      setSpec(event.target.value);
    };
    const [sym, setSym] = React.useState('');

    const handlesym = (event) => {
      setSym(event.target.value);
    };
    
    const handleSubmit=()=>{
      if(Loc!==''&&spec!=='')
      alert("Appointment fixed Successfully");
    };
  return (
      <div>
      <Nav/>
      <div id='b'>
      <Button href="#text-buttons">Home</Button>
      <hr></hr>
      <div style={{display:'flex'}}>
      <div>
    <div id='a'>
    <div id='c'>
    <h2 style={{color:' #00b3b3',paddingTop:'20px'}}>Find Doctors</h2>
      <FormControl style={{width:'150px',marginTop:'10px'}}>
        <InputLabel>Location</InputLabel>
        <Select 
          value={Place}
          label="Age"
          onChange={handlePlace}
          style={{border: 'none',
          outline: 'none'}}
        >
          <MenuItem value={10}>All Cities</MenuItem>
          <MenuItem value={20}>Hyderabad</MenuItem>
          <MenuItem value={30}>Chennai</MenuItem>
          <MenuItem value={40}>Kolkata</MenuItem>
          <MenuItem value={50}>Mumbai</MenuItem>
          <MenuItem value={60}>Banglore</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel > Search Doctors, Specialists, Symptoms, Hospitals etc"  style</InputLabel>
      <Select style={{width:'450px'}}
        value={sym}
        onChange={handlesym}
        label="Age"
> 
        <MenuItem value={10}>Headache</MenuItem>
        <MenuItem value={20}>Fever</MenuItem>
        <MenuItem value={30}>Inflammation</MenuItem>
        <MenuItem value={30}>Sore Throat</MenuItem>
      </Select>
    </FormControl>
    <h5 style={{marginTop:'20px'}}>Most Searched Cities</h5>
    <br></br>
    <Stack spacing={2} direction="row">
    <Button variant="outlined" size="small" style={{color:'#00b3b3', borderColor:'#D2d5d5',}}> Hyderabad</Button>
    <Button variant="outlined" size="small"  style={{color:'#00b3b3', borderColor:'#D2d5d5',}}>Kolkata</Button>
    <Button variant="outlined" size="small" style={{color:'#00b3b3',borderColor:'#D2d5d5',}}>Chennai</Button>
    <Button variant="outlined" size="small" style={{color:'#00b3b3', borderColor:'#D2d5d5',}}>Mumbai</Button>
    <Button variant="outlined" size="small" style={{color:'#00b3b3', borderColor:'#D2d5d5',}}>Banglore</Button>
    </Stack>
    </div>
    </div>
    <div id='e' style={{marginTop:'20px'}} >
    <div id='c'>
    <h2 style={{color: '#00cccc',fontWeight:'400',fontFamily:'Comic Sans MS'}}>Whenever the Art of Medicine is Loved,There is also a love for humanity....</h2>
    </div>
    </div>
    <div id='f' style={{marginTop:'20px'}}>
    <div  id='c'>
    <br></br>
    <div id='d' >
    <h2 style={{textAlign:'center'}}>Book an Appointment in 3 Simple Steps...</h2>
    </div>
    <br></br>
    <div style={{display:'flex'}}>
    <div >
    <h3>1.Your Area/Pincode</h3>
    <FormControl style={{width:'290px',marginTop:'10px'}}>
    <InputLabel><img src="https://images.apollo247.in/images/quickBook/location.svg?tr=w-60,q-80,f-webp,dpr-1.25,c-at_max" alt="location" width="24" height="24" loading="lazy" fetchpriority="low"/> </InputLabel>
    <Select required
          value={Loc}
          label="Age"
          onChange={handleLoc}
          style={{border: 'none',
          outline: 'none'}}
        >
        <MenuItem value={20}>Howrah</MenuItem>
        <MenuItem value={30}>Chrompet</MenuItem>
        <MenuItem value={40}>Adyar</MenuItem>
        <MenuItem value={50}>Electronic City</MenuItem>
        <MenuItem value={60}>Hoogly</MenuItem>
        <MenuItem value={70}>White Field</MenuItem>
        <MenuItem value={80}>HSR ayout</MenuItem>
        <MenuItem value={90}>Mallapur</MenuItem>
        </Select>
        </FormControl>
        </div>
    <div style={{marginLeft:'20px'}}>
    <h3>2.Speciality</h3>
    <FormControl style={{width:'290px',marginTop:'10px'}}>
    <InputLabel><img src="https://images.apollo247.in/images/quickBook/search.svg?tr=w-60,q-80,f-webp,dpr-1.25,c-at_max" alt="search" width="24" height="24" loading="lazy" fetchpriority="low"/>
    </InputLabel>
    <Select 
          value={spec}
          label="Age"
          onChange={handleSpec}
          style={{border: 'none',
          outline: 'none'}}
        >
          <MenuItem value={10}>Dermatology</MenuItem>
          <MenuItem value={20}>Urology</MenuItem>
          <MenuItem value={30}>Paediatrics</MenuItem>
          <MenuItem value={40}>Orthopaedics</MenuItem>
          <MenuItem value={50}>Gynaecology</MenuItem>
        </Select>
        </FormControl>
        </div>
        </div>
        <br></br>
        <h3>3.Time to Meet</h3>
        <br></br>
        <FormControl>
        <RadioGroup row>
          <FormControlLabel value="female" control={<Radio />} label="Morning"/>
          <FormControlLabel value="male" control={<Radio />} label="Afternoon" />
          <FormControlLabel value="other" control={<Radio />} label="Evening" />
      <Button variant="contained" href="#contained-buttons" onClick={handleSubmit}>
        Submit
      </Button>
      </RadioGroup>
        </FormControl>
    </div>
    </div>
    </div>
    <div id='j'>
    <ul style={{listStyleType:'none',marginTop:'20px',marginLeft:'10px'}}>
    <h3 style={{marginTop:'20px',marginLeft:'10px'}}>Why Apollo247</h3>
    <br></br>
    <li>Round-the-clock doctor availability</li>
    <li>Broad range of Specialities</li>
    <li>Order medicines & tests online</li>
    <li>Digitised health records</li>
    </ul>
    <br></br>
    <h3 style={{textAlign:'center'}}>How Doctor Consultation Works?</h3>
    <br></br>
    <div style={{marginLeft:'40px'}}>
    <Stack direction="row" spacing={2}>
    <Button variant="contained">Online</Button>
    <Button variant="contained">Meet Personally</Button>
  </Stack>
  <ul  style={{listStyleType:'none',marginTop:'20px',marginLeft:'10px'}}>
  <li style={{display:'flex',marginTop:'20px'}}><img src="https://images.apollo247.in/images/consult-doc.svg?tr=w-40,q-80,f-webp,dpr-1.25,c-at_max" alt="Consult" width="25" height="25" loading="lazy" fetchpriority="low" class="lazy "/>
  <p>Choose the doctor</p>
  </li>
  <li style={{display:'flex',marginTop:'20px'}}><img src="https://images.apollo247.in/images/slot.svg?tr=w-40,q-80,f-webp,dpr-1.25,c-at_max" alt="Book Slot" width="25" height="25" loading="lazy" fetchpriority="low" class="lazy "/>
  <p>Book a slot</p></li>
  <li style={{display:'flex',marginTop:'20px'}}><img src="https://images.apollo247.in/images/ic-payment.svg?tr=w-40,q-80,f-webp,dpr-1.25,c-at_max" alt="Payment" width="25" height="25" loading="lazy" fetchpriority="low" class="lazy "/><p>Make payment</p></li>
  <li style={{display:'flex',marginTop:'20px'}}><img src="https://images.apollo247.in/images/ic-mobile.svg?tr=w-40,q-80,f-webp,dpr-1.25,c-at_max" alt="Mobile Icon" width="25" height="25" loading="lazy" fetchpriority="low" class="lazy "/><p>Be present in the consult room on apollo247.com at the time of consult</p></li>
  <li style={{display:'flex',marginTop:'20px'}}><img src="https://images.apollo247.in/images/ic-followchat.svg?tr=w-40,q-80,f-webp,dpr-1.25,c-at_max" alt="Follow Chat" width="25" height="25" loading="lazy" fetchpriority="low" class="lazy "/><p>Follow Up via text - Valid upto 7 days</p></li>
  </ul>
  
  </div>
    </div>
    </div>
    <h3 id='c' style={{margin:'10px 0px 10px 20px'}}>Top Specialities</h3>
    <hr></hr>
    <div style={{display:'flex'}}>
    <div>
    <div style={{display:'flex'}}>
    <div id='g'>
    <p id='h'>Dermatology</p>
    <center>
    <img src="https://images.apollo247.in/specialties/ee249e8a-950a-489c-8a33-8846889831f5.jpg?tr=w-100,q-80,f-webp,dpr-1.25,c-at_max" alt="Online Doctor Consultation - Dermatology" width="40" height="40" loading="lazy" fetchpriority="low" class="lazy "></img>
    <p id='i'>Specalists for skin and hair treatment</p>
    </center>
    </div>
    <div id='g'>
    <p id='h'>Paediatrics</p>
    <center>
    <img src="https://images.apollo247.in/specialties/ic_paediatrics.png?tr=w-100,q-80,f-webp,dpr-1.25,c-at_max" alt="Online Doctor Consultation - Paediatrics" width="40" height="40" loading="lazy" fetchpriority="low" class="lazy "></img>
    <p id='i'>Specialist to care and treat children</p>
    </center>
    </div>
    <div id='g'><p id='h'>General Medicine</p>
    <center>
    <img src="https://images.apollo247.in/specialties/ic_general_medicine.png?tr=w-100,q-80,f-webp,dpr-1.25,c-at_max" alt="Online Doctor Consultation - General Physician/ Internal Medicine" width="40" height="40" loading="lazy" fetchpriority="low" class="lazy "></img>
    <p id='i'>Managing acute medical conditions</p>
    </center></div>
    <div id='g'><p id='h'>Recommended</p>
    <center>
    <img src="https://images.apollo247.in/specialties/87734b2b-3a92-4ebe-97e7-f5a6d9554ef6.jpeg?tr=w-100,q-80,f-webp,dpr-1.25,c-at_max" alt="Online Doctor Consultation - Recommended Doctors" width="40" height="40" loading="lazy" fetchpriority="low" ></img>
    <p id='i'>Top rated Apollo Doctors</p>
    </center>
    </div>
    </div>
    <div style={{display:'flex',marginTop:'20px'}}>
    <div id='g'><p id='h'>ENT</p>
    <center>
    <img src="https://images.apollo247.in/specialties/04eca688-50f4-4f2c-8420-261619cb5e33.png?tr=w-100,q-80,f-webp,dpr-1.25,c-at_max" alt="Online Doctor Consultation - ENT, Head &amp; Neck Surgery" width="40" height="40" loading="lazy" fetchpriority="low" class="lazy "></img>
    <p id='i'>Specialists for Ear,Nose,Throat</p>
    </center></div>
    <div id='g'><p id='h'>Diabetology</p>
    <center>
    <img src="https://images.apollo247.in/specialties/ic_diabetology.png?tr=w-100,q-80,f-webp,dpr-1.25,c-at_max" alt="Online Doctor Consultation - Diabetology" width="40" height="40" loading="lazy" fetchpriority="low" class="lazy "></img>
    <p id='i'>Managing all kinds of Diabetes</p>
    </center></div>
    <div id='g'><p id='h'>Gastroentology</p>
    <center>
    <img src="https://images.apollo247.in/specialties/ic_gastroenterology.png?tr=w-100,q-80,f-webp,dpr-1.25,c-at_max" alt="Online Doctor Consultation - Gastroenterology/GI medicine" width="40" height="40" loading="lazy" fetchpriority="low" class="lazy "></img>
    <p id='i'>Managing Digestive health</p>
    </center></div>
    <div id='g'><p id='h'>Cardiology</p>
    <center>
    <img src="https://images.apollo247.in/specialties/72d4eda4-c0cd-4ff4-881a-5e7ae148681a.jpg?tr=w-100,q-80,f-webp,dpr-1.25,c-at_max" alt="Online Doctor Consultation - Cardiology" width="40" height="40" loading="lazy" fetchpriority="low" class="lazy "></img> 
    <p id='i'>For Heart and Blood Pressure problems</p></center></div>
    </div>
    </div>
    <div id='k'>
    <hr></hr>
  <p>To enjoy services provided by Apollo 24/7 on Mobile, download our App</p>
  <div style={{display:'flex',marginTop:'20px'}}>
  <div><img src="https://images.apollo247.in/images/apollo247.png?tr=w-187.5,q-80,f-webp,dpr-1.25,c-at_max" alt="Download Apollo" width="75" height="45" loading="lazy" fetchpriority="low" class="lazy "/></div>
  <div><Button variant="contained" color='warning' href="https://play.google.com/store/apps/details?id=com.apollo.patientapp&hl=en_US" target='blank'>Download the App</Button></div>
  </div></div>
    </div>

    <br></br>
    </div>
    </div>
  )
}

export default Find