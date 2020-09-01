import React, { useState, useEffect } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { updateNotesReminder } from '../../autho/Repository'

export default function ToggleNotesReminder(props) {
  const [state, setState] = useState({
    checked: props.isChecked,
    toggleid: props.toggleid
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => updateDB(state), [state])

  const updateDB = (state) => {
    updateNotesReminder(state)
    .then(res => {
        props.refreshState()
    })
    .catch(err => {
        console.log(err)
    })
  }
  return ( 
      <FormControlLabel
        toggleid={props.id}
        control={
          <Switch
            checked={state.checked}
            onChange={handleChange}
            name="checked"
            color="primary"
          />
        }
        label={props.name}
      />
  );
}