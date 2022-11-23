import React from 'react'
import '../Home/HomeStyles.css'
import Records from '../../Components/Records/Records'
import Form from '../../Components/Form/Form'

const Home = () => {
  return (
    <div className='sec1'>
        <Records/>
        <Form/>
    </div>
  )
}

export default Home