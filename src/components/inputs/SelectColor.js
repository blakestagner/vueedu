import React, { useState, useEffect } from 'react';
import { updateNotesReminder2 } from '../../autho/Repository'
import reminder from '../../img/icons/reminder.svg'
import reminderWhite from '../../img/icons/reminder_white.svg'
import color from '../../img/icons/color.svg'
import colorWhite from '../../img/icons/color_white.svg'

export default function SelectColor(props) {
  const [state, setState] = useState({
    noteColor: props.color,
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
            className="reminder-icon"
            src={ color }
            
            onClick={handleChange}
            name="noteColor"
            noteColor={state.color}
          />
        </div>
  );
}