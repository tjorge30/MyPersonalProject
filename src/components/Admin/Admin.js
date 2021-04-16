import React from 'react';
import Nav from "../Nav/Nav";
import './Admin.css';

function Admin() {
    return (
      <div className='adminPage'>
        <Nav/>
        <div className="Admin">
          <div className='formBox'>
          <h1>Admin Page</h1>
            <form>
              <input placeholder='Jessica B'/>
              <input placeholder='fakeemail@example.com'/>
              <button type='submit'>Save</button>
            </form>
            <div className='twoButtons'>
              <button>Send Emails</button>
              <button>Send Texts</button>
            </div>
            {/* need to create twelve of these oraclImput forms
            one for each moon sign thinking could do this with javascript*/}
            <div className='oraclInput'>
              <form>
              <textarea placeholder='input the moon signs reading and submit to send it to the users'/>
              <button type='submit'>Submit</button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  
  export default Admin;