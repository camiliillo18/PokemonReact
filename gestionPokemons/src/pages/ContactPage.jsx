import React from 'react'
import NaviComponent from '../components/nav/NaviComponent'

const ContactPage = () => {
  return (
    <div>
        <NaviComponent currentPage={'contacto'} />
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5
      }}>
          <span>Name: Camilo Dubra</span>
          <span>Edad: 19</span>
          <span><a href="https://www.linkedin.com/in/camilo-dubra-corchs-039232223/">Linkedin</a></span>
      </div>
    </div>
  )
}

export default ContactPage
