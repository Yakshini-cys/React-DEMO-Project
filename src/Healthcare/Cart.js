import React from 'react'
import './Cart.css';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Nav from './Navbar'
const Sart = () => {
    const [spec, setSpec] = React.useState('');
    
    const handleSpec = (event) => {
      setSpec(event.target.value);
    };
  return (
    <div>
    <Nav/>
    <br></br>
    <div id='bi'>
    <div style={{marginLeft:'20px'}}>
    <br></br>
    <center>
    <FormControl style={{width:'600px'}}>
    <InputLabel><img src="https://images.apollo247.in/images/quickBook/search.svg?tr=w-60,q-80,f-webp,dpr-1.25,c-at_max" alt="search" width="24" height="24" loading="lazy" fetchpriority="low"/>
    </InputLabel>
    <Select 
          value={spec}
          label="Age"
          onChange={handleSpec}
          style={{border: 'none',
          outline: 'none'}}
        >
          <MenuItem value={10}>Nivea</MenuItem>
          <MenuItem value={20}>Vaseline</MenuItem>
          <MenuItem value={30}>Protinex</MenuItem>
          <MenuItem value={40}>Ensure</MenuItem>
          <MenuItem value={50}>Pampers</MenuItem>
        </Select>
        </FormControl>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <img src="https://images.apollo247.in/images/ic-empty-cart.svg" alt="cart icon"></img>
        <br></br><br></br>
        <p> YOUR CART IS EMPTY</p>
       <br></br><br></br>
       <Button variant="contained" href="/buymeds" color="warning">Go To Pharmacy</Button>
        </center>
        <br></br>
        </div>
    </div>
    </div>
  )
}

export default Sart