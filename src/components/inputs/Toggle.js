import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function Toggle(props) {
    const [state, setState] = React.useState({
        checked: false,
      });

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      return (
        <div>
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedB}
                onChange={handleChange, props.handleChange}
                color="primary"
                value={state.checked}
              />
            }
            label={props.toggleName}
          />
          </div>
      );
}