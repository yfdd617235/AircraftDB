import React, { useRef } from 'react';
import NavBar from '../navBar/NavBar';
import Block1 from '../block1/Block1';
import ExcelViewer from '../excelviewer/Excelviewer';
import Referencedocs from '../dropdown/Referencedocs';

import './screem.css';

const Screem = () => {

  return (
    <div className='screem'>
      <div className='left-col'>
        <NavBar />
      </div>
      <div className='right-col'>
        <div>
          <Block1 />
        </div>
        <div>
          <ExcelViewer />
        </div>
      </div>
      <div className='footer-container'>
        <Referencedocs/>
      </div>
        
    </div>
  );
};

export default Screem;

