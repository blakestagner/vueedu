import React from 'react'
import { getNotes } from '../../autho/Repository'
import ToggleNotesReminder from '../inputs/ToggleNotesReminder'
import {  TextField } from '@material-ui/core';
import Grid from '@material-ui/core/grid'
import add from '../../img/icons/add.svg';
import remove from '../../img/icons/remove.svg';
import planner from '../planner/planner.css'
import reminder from '../../img/icons/reminder.svg'
import reminderWhite from '../../img/icons/reminder_white.svg'
import reminderSet from '../../img/icons/reminder_set.svg'
import reminderSetWhite from '../../img/icons/reminder_set_white.svg'
import ReminderToggle from '../inputs/ReminderToggle'

export default class MyNotes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myNotes: []
        }
        this.handleToggle = this.handleToggle.bind(this)
        this.expandPanel = this.expandPanel.bind(this);
    }
    componentDidMount() {
        getNotes() 
        .then(res => (
            this.setState({myNotes: res})
        ))
        .catch(err => (
            console.log(err)
        ))
    }
    handleToggle() {
        this.props.updateState()
    }
    expandPanel(x, e) {
        let panel = document.getElementById(x)
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null
            e.target.src = add
        } else {
            panel.style.maxHeight = panel.scrollHeight + '50px'
            e.target.src = remove
            }
        }
    render() {

        let myNotes = this.props.myNotes;
        let date = String(this.props.date)
        return (
            <div >
                <Grid 
                    container 
                    item 
                    spacing={2}
                    justify='space-between'
                >
                {myNotes.filter(notes => notes.created > this.props.date ).map((notes) => (
                    <Grid 
                        container
                        lg={4}
                        item
                        key={notes.id}
                        >
                        <div className="notes">
                            <div 
                                key={notes.id}
                                className="notes-container"
                                style={{backgroundColor: `${notes.color}`}}
                                >
                                <div className="notes-main">
                                    <h3 className={notes.color === 'yellow' ? 'black' : 'white' }>
                                        {notes.title}
                                    </h3>
                                    <img src={ add } className="add" alt="plus-minus"
                                    onClick={(e) => {this.expandPanel(`panel-${notes.id}`, e)}} />
                                </div>
                                <div className="notes-content">
                                    <p  className={notes.color === 'yellow' ? 'black' : 'white' }>{notes.content}</p>
                                </div>
                                
                            
                                
                            </div>
                            <div
                                    className="notes-tools">
                                    <div className="my-plans-toggle">
                                        <ReminderToggle
                                            notificationid={notes.id}
                                            reminderStatus={notes.reminder == 1 ? true: false}
                                            reminderStatus={notes.reminder} 
                                            refreshState={this.handleToggle}
                                            alt="reminder"
                                        />
                                    {notes.reminder === 1 ? 
                                    <div className="reminder-select">
                                        <TextField
                                            id="datetime-local"
                                            label="reminder time"
                                            name="reminder_time"
                                            type="datetime-local"
                                            defaultValue={notes.reminder == 1 ? `${notes.reminder_time.split('.000Z')[0]}` : '2020-09-24T10:30' }
                                            onChange={this.handleInputChange}
                                        /> 
                                    </div>
                                    : 
                                    'no reminder set'
                                    }
                                    </div>
                                </div>
                            </div>
                    </Grid>
                ))}
                </Grid>
                
                <br/>
                <br/>
            </div >
        )
    }
}