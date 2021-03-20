import './Landing.css'

const Landing = ()=>{
    return(
        <div className="Landing">
            <h1>PAACT</h1>
            <p>Jacin's Login Page</p>
            <form>
                <div>
                    email: 
                    <br />
                    <input />
                    <br />
                    password: 
                    <br />
                    <input />
                    <br />
                </div>
                <p>Or Register</p>
                <button>REGISTER</button>
            </form>
        </div>
    )
}

export default Landing