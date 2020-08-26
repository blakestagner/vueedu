import React from 'react'
import planner from './planner.css';
import {  TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default class Planner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            hashtag: '',
            reminder: '',
            reminder_date: '',
            reminder_time: '',
            type: '',
        }
        this.handleInputChange =this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state)
        }
    onSubmit(e) {
        console.log(e.value)
    }
    render() {

        return (
            <div className="col-lg-9 col-md-9 col-sm-12">
                <h1>Planner</h1>
                    <div className="row align-left">
                        <Grid container item xs={12} spacing={5}>
                            <Grid item >
                                <TextField 
                                    id="standard-basic" 
                                    label="title" 
                                    name="title"
                                    value={this.value}
                                    onChange={this.handleInputChange}
                                    />
                            </Grid>
                            <Grid item>
                            <FormControl component="fieldset" name="type" onChange={this.handleInputChange}>
                                <FormLabel component="legend">type</FormLabel>
                                    <RadioGroup row aria-label="gender" name="type" value={this.value} >
                                        <FormControlLabel value="female" control={<Radio />} label="Plan" />
                                        <FormControlLabel value="male" control={<Radio />} label="Plan 2" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                            </FormControl>
                            </Grid>
                        </Grid>
                    </div>
                
                    <br />
                    <div className="row space-under">
                        <TextField
                            id="outlined-multiline-static"
                            label="plan details"
                            name="content"
                            multiline
                            rows={5}
                            fullWidth
                            defaultValue=""
                            variant="outlined"
                            onChange={this.handleInputChange}
                            />
                    </div>
                    <div className="row align-left">
                        <Grid container item xs={12} spacing={5}>
                            <Grid item >
                                <TextField
                                    id="date"
                                    name="reminder_date"
                                    label="reminder"
                                    type="date"
                                    onChange={this.handleInputChange}
                                    defaultValue="2020-08-26"      
                                />
                            </Grid>
                            <Grid item >
                                <TextField
                                    id="time"
                                    name="reminder_time"
                                    label="reminder time"
                                    type="time"
                                    defaultValue="07:30"
                                    onChange={this.handleInputChange}
                                />
                            </Grid>
                        </Grid>
                    </div>
            </div>
        )
    }
}