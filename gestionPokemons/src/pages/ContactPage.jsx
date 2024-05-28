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
          <span>Last Name: Dubra Corchs</span>
          <span>City: Málaga</span>
          <span><a href="https://github.com/camiliillo18">Github</a></span>
      </div>
    </div>
  )
}

export default ContactPage
