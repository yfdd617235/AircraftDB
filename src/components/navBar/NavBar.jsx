import React from 'react';
import Referencedocs from '../dropdown/Referencedocs'
import img1 from '../../imgs/logoATR.svg'
import './navbar.css'


function NavBar() {
  return (
    <>
      <div className='nav-info'>
        
        <div className='aircraft-info'>
          <img className="aircraft-logo aircraft-info-child" src={img1} alt="First slide" />
          <h4 className="aircraft-info-child">42 / 72</h4>
          <h6 className="aircraft-info-child">Registry: HK-XXXX</h6>
          {/* <p>Damage chart - Dent and Buckle</p> */}
        </div>

        <div className='referencedocs-container'>
          <Referencedocs ></Referencedocs>
        </div>

      </div>
    </>
  );
};

export default NavBar;

