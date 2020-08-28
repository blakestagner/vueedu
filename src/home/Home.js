import React from 'react';
import Planner from '../components/planner/Planner'
import MyPlans from '../components/planner/MyPlans'
import PlannerSideNav from '../components/sidenav/PlannerSideNav'


export default class Home extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            openComponent: 'my planner'
        }
        this.setComponent = this.setComponent.bind(this)
    }
    setComponent(e) {
        this.setState({openComponent: e.target.name})
    }
    render() {
        return (
            <div className="main-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
                        <PlannerSideNav 
                            setPlanner={this.setComponent}
                            />
                    </div>
                    <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9">
                        {this.state.openComponent === 'my planner' ? 
                            <div>
                                <Planner
                                    userDetails={this.props.userDetails}/>
                                <MyPlans 
                                    userDetails={this.props.userDetails} />
                            </div> 
                        : ''}
                        {this.state.openComponent === 'add to planner' ? 
                            <Planner 
                                userDetails={this.props.userDetails}/>: ''}
                    </div>
                </div>
            </div>
        )
    }
}