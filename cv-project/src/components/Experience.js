import React, { Component } from "react";
import Sectionc from "./Sectionc";
import './styles/per.css';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: "",
            job: "",
            from: "",
            to: "",
        };
    
    }

    Handleinput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    HandleSave = (e) => {
        e.preventDefault();
        const { company, job, from, to } = this.state;
        const Save = { company, job, from, to };
        this.setState({ Save });
      };

    render() {
        const {company, job, from, to, Save} = this.state;
        return (
            <div>
                <form className="my-container" onSubmit={this.HandleSave}>
                    <label htmlFor="companyInput">Company:</label>
                    <input type="text" id="companyInput" name="company" value={company} onChange={this.Handleinput} />

                    <label htmlFor="jobInput">Job:</label>
                    <input type="text" id="jobInput" name="job"  value={job}  onChange={this.Handleinput} />

                    <label htmlFor="fromInput">From:</label>
                    <input type="date" id="fromInput" name="from"  value={from} onChange={this.Handleinput} />

                    <label htmlFor="To">To:</label>
                    <input type="date" id="To" name="to"  value={to} onChange={this.Handleinput} />
                    <button type="submit">Submit</button>
                </form>

                {Save && (
                    <Sectionc 
                    company={Save.company}
                    job={Save.job}
                    from={Save.from}
                    to={Save.to}
                    />
                )}
            </div>
        )
    }
}

export default Experience;