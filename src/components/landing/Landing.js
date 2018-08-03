import React, { Component } from 'react'
import './Landing.css'
import ULogo from '../../media/173px-Utah_Utes_U.png'
import UtahImg from '../../media/white-Utah-Horizonatl.png'

import Button from '@material-ui/core/Button';

export class Landing extends Component {
  render() {
    return (
      <div className="landing-page-container">
        <header className='landing-header'>
          <img className='landing-logo' src={ULogo} />>
            <Button className='login-btn' variant="outlined">Login</Button>
        </header>
        <section>
          <img src={UtahImg}/>
          <h2>Athlete Reporting System</h2>
        </section>
        <footer>
          Development and Design by Mikel North
          </footer>
      </div>
    )
  }
}

export default Landing
