import React from 'react';

export default class IdeaSideNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ideaType: ''
        }
    }
    render() {
        return (
            <ul>
                <li>Planner</li>
            </ul>
        )
    }
}