import React from 'react';
import sidenav from './sidenav.css';

export default class PlannerSideNav extends React.Component {
    render() {
        return (
        <div className="side-nav">
            <h2>Planner</h2>
            <ul>
                <li>
                    <a 
                        name="my planner"
                        onClick={this.props.setPlanner}>
                        my planner
                    </a>
                </li>
                <li>
                    <a 
                        name="add to planner" 
                        onClick={this.props.setPlanner}>
                        add a plan to planner
                    </a>
                </li>
            </ul>
        </div>
        )
    }
}