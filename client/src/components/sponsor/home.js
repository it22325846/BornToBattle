import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to={'/sponsorPage'}>
        <button className='btn btn-warning'>goSponsor</button>
      </Link>

    </div>
  )
}
