import React, { Component } from "react";

class Sectionc extends Component {
    render() {
        const {company, position, job, from, to} = this.props;
        return (
            <div>
                <h1>Experience</h1>
                <h2>Company: {company}</h2>
                <h2>Position: {position}</h2>
                <h2>Job: {job}</h2>
                <h2>From: {from}</h2>
                <h2>To: {to}</h2>
            </div>
        )
    }
}

export default Sectionc;