import React from 'react';
import NotesSideNav from '../sidenav/NotesSideNav';
import AddNote from './AddNote'
import MyNotes from './MyNotes'
import { getNotes } from '../../autho/Repository'


export default class Home extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            openComponent: 'my planner',
            myNotes: []
        }
        this.setComponent = this.setComponent.bind(this)
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
    handleUpdate() {
        getNotes()
        .then(res => (
            this.setState({myNotes: res})
        ))
        .catch(err => (
            console.log(err)
        ))
    }
    setComponent(e) {
        this.setState({openComponent: e.target.name})
    }
    updateState() {
        this.setState({updateState: 'yes'})
    }
    render() {
        return (
            <div className="main-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
                        <NotesSideNav 
                            setPlanner={this.setComponent}
                            />
                    </div>
                    <div className="col-xs-12 col-sm-8 col-md-7 col-lg-9">
                        {this.state.openComponent === 'my planner' ? 
                        <div>
                            <AddNote
                                updateState={this.handleUpdate.bind(this)}
                                userDetails={this.props.userDetails}/>
                            <MyNotes 
                                myNotes={this.state.myNotes}
                                updateState={this.handleUpdate.bind(this)}
                                date={'1999'}
                                userDetails={this.props.userDetails}
                                />
                        </div> 
                        : ''}
                    </div>
                </div>
            </div>
        )
    }
}