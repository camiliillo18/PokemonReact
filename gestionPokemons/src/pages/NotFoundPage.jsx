import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {

  return (
    <div>
      Pagina no encontrada.
      <Link to={'/'} />
    </div>
  )
}

export default NotFoundPage
