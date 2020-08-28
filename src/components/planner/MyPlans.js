import React from 'react';
import { getPlanner } from '../../autho/Repository'

export default class MyPlans extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myPlanner: []
        }
    }
    componentDidMount() {
        getPlanner() 
        .then(res => (
            this.setState({myPlanner: res})
        ))
        .catch(err => (
            console.log(err)
        ))
    }
    render() {
        const myPlanner = this.state.myPlanner;
        return (
            <div>
                <h1>My Plans</h1>
                    {myPlanner.map((plans) => (
                        <div key={plans.id}>
                            {plans.title}
                            {plans.content}
                        </div>
                    ))}
            </div>
        )
    }
}