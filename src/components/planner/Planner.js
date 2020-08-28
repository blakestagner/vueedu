import React from 'react'
import planner from './planner.css';
import {  TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Switch from '@material-ui/core/Switch';
import Toggle from '../inputs/Toggle'
import { postPlanner } from '../../autho/Repository'
import Button from '@material-ui/core/Button';
import Avatar from '../loggedinUser/Avatar'
import close from '../../img/icons/close.png'


export default class Planner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            hashtag: '',
            checked: false,
            reminder_time: '',
            type: '',
            open: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.togglePlanner = this.togglePlanner.bind(this);
    }
    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state)
        }
    onChangeReminder = () => {
        this.setState({checked: this.state.checked ? false : true})
        console.log('1')
    }
    togglePlanner() {
        this.setState({open: this.state.open ? false : true})
        var app = document.getElementById('App')
        if(app.classList == "App") {
            app.classList = "App overlay"
        } else { 
            app.classList = "App"
        }
    }
    submitPlan(e) {
        e.preventDefault();
        postPlanner(this.state)
        .then(res => 
            this.togglePlanner()
        ) 
        .catch(err => 
            alert(err)
        )
    }
    render() {
        return (
            <div className="col-lg-9 col-md-9 col-sm-12">
                {this.state.open ? 
                <div className="planner-open">
                    <div className="planner-inner">
                        <img
                            onClick={this.togglePlanner} 
                            src={close} 
                            className="close-icon" 
                            />
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
                                        <RadioGroup row aria-label="type" name="type" value={this.value} >
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
                        <div className="row align-left space-under">
                        <Grid container item xs={12} spacing={1}>
                            <Grid item>
                                <Toggle
                                    checked={this.props.checked} 
                                    handleChange={this.onChangeReminder}
                                    toggleName='set a reminder?'
                                    />
                                </Grid>
                                {this.state.checked ? 
                                <Grid item >
                                    <div className="row align-left space-under">
                                        <PlannerTime
                                            handleChange={this.handleInputChange}/>
                                    </div>
                                </Grid>
                                : ''
                                }
                            </Grid>
                        </div>
                        <Button 
                            variant="contained"
                            color="primary"
                            size="medium"
                            onClick={ this.submitPlan.bind(this)}
                            >
                            update planner
                        </Button>
                    </div> 
                </div>
                : ''}
                <div className="planner-set-post">
                    <Avatar
                        hasProfileImg={this.props.userDetails.profile_pic} 
                        userData={
                            this.props.userDetails.id+
                            this.props.userDetails.fname+
                            this.props.userDetails.lname
                        }
                    />
                    <button 
                        onClick={this.togglePlanner}
                        className="text-box-button"
                        >
                        <p>plan something</p>
                    </button>
                </div>
  
            </div>
        )
    }
}
class PlannerTime extends React.Component {
    render() {
        return (
            <div>
                <Grid container item xs={12} spacing={5}>
                    <Grid item >
                    <TextField
                        id="datetime-local"
                        label="Next appointment"
                        name="reminder_time"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        onChange={this.props.handleChange}
                    /> 
                    </Grid>
                </Grid>
            </div>
        )
    }
}