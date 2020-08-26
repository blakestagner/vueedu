import React, { useContext } from 'react';
import { isAuthenticated } from '../autho/Repository';
import { Redirect } from 'react-router-dom';
import Sidenav from '../components/sidenav/Sidenav'
import Planner from '../components/planner/Planner'


export default class Home extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
        }
    }
    render() {
        return (
            <div className="main-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
                        <Sidenav component='Planner'/>
                    </div>
                    <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9">
                        <Planner />
                    </div>
                </div>
            </div>
        )
    }
}