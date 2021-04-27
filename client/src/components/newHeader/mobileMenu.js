import React from 'react'
import {Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './mobileMenu.css'
import {Link} from 'react-router-dom'

export const mobileMenu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="text-center" variant="dark"> 
  {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav"> */}
    <Nav className="mx-auto">
      <Nav.Link ><Link className="nav-router-link" to="/">Home</Link></Nav.Link>     
      <NavDropdown title="Numbers" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link className="nav-router-link" to="/mobile">Mobile</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="nav-router-link" to="/local">Local</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="nav-router-link" to="/national">National</Link></NavDropdown.Item>      
        <NavDropdown.Item ><Link className="nav-router-link" to="/tollfree">Toll Free </Link></NavDropdown.Item>      
      </NavDropdown>
      <NavDropdown title="Features" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link className="nav-router-link" to="/call-forwarding">Call Forwarding</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="nav-router-link" to="/call-recording">Call Recodring</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="nav-router-link" to="/call-blocking">Call Blocking</Link></NavDropdown.Item>      
        <NavDropdown.Item ><Link className="nav-router-link" to="/call-whisper">Call Whispering</Link></NavDropdown.Item>      
        <NavDropdown.Item ><Link className="nav-router-link" to="/conference-calling">Conference Calling</Link></NavDropdown.Item>      
        <NavDropdown.Item ><Link className="nav-router-link" to="/personalised-voicemail">Personalised Voicemail</Link></NavDropdown.Item>      
        <NavDropdown.Item ><Link className="nav-router-link" to="/translation">Translation</Link></NavDropdown.Item>      
        <NavDropdown.Item ><Link className="nav-router-link" to="/web-integration">Web Integration</Link></NavDropdown.Item>      
      </NavDropdown>
      <NavDropdown title="Platform" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link className="nav-router-link" to="/free-video-calls">Free Video Calls</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="nav-router-link" to="/buy-telephone-numbers">Buy Multiple Numbers</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="nav-router-link" to="/make-calls-and-messages">Make Calls and Messages</Link></NavDropdown.Item>      
        <NavDropdown.Item ><Link className="nav-router-link" to="/host-meeting-anywhere">Host Meetings</Link></NavDropdown.Item>      
        <NavDropdown.Item ><Link className="nav-router-link" to="/reviews-calls-and-messages">Review Calls and Messages</Link></NavDropdown.Item>      
        <NavDropdown.Item ><Link className="nav-router-link" to="/your-business-card">Your Business Card</Link></NavDropdown.Item>      
      </NavDropdown>
      <Nav.Link ><Link className="nav-router-link" to='/support'>Support</Link></Nav.Link>   
      <Nav.Link ><Link className="meetings-navlink" to="/meeting-room">Meetings</Link></Nav.Link>      
    </Nav>
    
  {/* </Navbar.Collapse> */}
</Navbar>                
            
        </div>
    )
}
