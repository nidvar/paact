import React from 'react';
import './ClientManagement.css';

class ClientManagement extends React.Component {
    state={

    }
    componentDidMount() {
        fetch(`http://localhost:3000/clients`)
        .then(a=>{
            return a.json()
        })
        .then(a=>{
            console.log('fail')
            console.log(a)
        })
        console.log(this.state)
    }

    // send_stuff = ()=>{
    //     fetch(`http://localhost:3000/person`,{
    //         method:POST,
    //         body:JSON.stringify(doc)
    //     })
    // }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(e.target.value)
        this.setState({[e.target.name]: e.target.value},()=> {
            console.log(this.state)
        });
    }


    render() {
        return(
                <div className="ClientManagement">
                    <h1>Client Management</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="myform">
                            <div className="left-block">
                                <label>Client ID: </label> 
                                <input name='client_id' />
                                <br />
                                <label>Client Name: </label>
                                <input name='name' />
                                <br />
                                <label>Client Gender: </label>
                                <select>
                                    <option defaultValue="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <br />
                                <label>ATSI Flag: </label>
                                <input />
                            </div>
                            <div className="right-block">
                            <label>AMC Phone: </label>
                                <input />
                                <br />
                                <label>Referral from Corrections Flag: </label>
                                <select>
                                    <option defaultValue="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <br />
                                <label>Throughcare Eligibility Flag: </label>
                                <select>
                                    <option defaultValue="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <br />
                                <label>Client Behaviour Alert Flag: </label>
                                <select>
                                    <option defaultValue="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="bottom-block">
                                <label>Additional Notes: </label>
                                <textarea />
                                <label>Last Modified By: </label>
                                <input />
                                <label>Last Modified Timestamp: </label>
                                <input type='timestamp'/>
                                
                            </div>    
                        </div>
                        <button>SUBMIT</button>
                    </form>
                    <a href="/clist"><button className="back-button">BACK</button></a>
                </div>
        )
    }
}

export default ClientManagement