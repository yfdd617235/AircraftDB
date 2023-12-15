import React from 'react';
import { BsDownload } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import './referencedocs.css';

function Referencedocs() {
  return (
    <div className='btns'>
      <Dropdown className="d-inline btn-id" autoClose="outside">
        <Dropdown.Toggle variant='none' className='ref-doc customddb' id="dropdown-autoclose-outside" style={{ color: 'white', fontSize: '14px' }}>D&B Report</Dropdown.Toggle>
        <Dropdown.Menu className='ref-doc customddb' style={{ fontSize: '14px' }}>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/D&B TEMPLATE.xlsx' download><BsDownload /> Excel</Dropdown.Item>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/identification.pdf'><BsDownload /> PDF</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="btn-id" autoClose="outside">
        <Dropdown.Toggle variant='none' className='ref-doc' id="dropdown-autoclose-outside" style={{ color: 'white', fontSize: '14px' }}>Ref. Documents</Dropdown.Toggle>
        <Dropdown.Menu className='ref-doc' style={{fontSize: '14px' }}>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/52-Doors.zip' download><BsDownload />  52-Doors </Dropdown.Item>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/53-Fuselage.zip' download><BsDownload /> 53-Fuselage</Dropdown.Item>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/54-Nacelles_Pylons.zip' download><BsDownload /> 54-Nacelles_Pylons</Dropdown.Item>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/55-Stabilizers.zip' download><BsDownload /> 55-Stabilizers</Dropdown.Item>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/56-Windows.zip' download><BsDownload /> 56-Windows</Dropdown.Item>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/57-Wings.zip' download><BsDownload /> 57-Wings</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <a className="btn-id" href="/downloads/identification.pdf">A/C Identification</a>
    </div>

  )
}

export default Referencedocs