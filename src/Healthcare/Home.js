import './Home.css'
import Nav from './Navbar'
export default function Hero() {
  return (
    <div>
    <Nav/>
    <div class='hero'>
    <img id='ige' src='https://images.unsplash.com/photo-1641757625075-d018760a4fb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D' alt='heroimg' />
    </div>
    <div class='herotext'>
    <h1>Our patients,our priority</h1>
    <p>Every life matters</p>
    <a href='#'>Learn More</a>
    </div>
    </div>
  )
}