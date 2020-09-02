import React, { useState, useEffect } from 'react';
import { updateNotesReminder2 } from '../../autho/Repository'
import reminder from '../../img/icons/reminder.svg'
import reminderWhite from '../../img/icons/reminder_white.svg'
import delete_icon from '../../img/icons/delete_icon.svg'


export default function DeletePost(props) {
  const [state, setState] = useState({
    noteid: props.noteid
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value});
  };

  useEffect(() => updateDB(state), [state])
  
  const updateDB = (state) => {
    console.log(state)
  }
  return ( 
      <div>
          <img
            className="color-icon"
            src={delete_icon}
            onClick={handleChange}
            name="delete"
          />
        </div>
  );
}