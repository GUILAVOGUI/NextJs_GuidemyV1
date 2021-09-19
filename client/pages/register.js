import { useState } from "react"

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        console.table({ name, email, password });

    }
    return (
        < >
            <h1 className="jumbotron text-center bg-primary square"> Register</h1>

            <div className="container col-md-4 offset-md-4 pb-5" >
                <form onSubmit={handleSubmit} >

                    <input type="text" className="form-control mb-4 p-4"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter name"
                    />

                    <input type="email" className="form-control mb-4 p-4"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter Email"
                    />

                    <input type="password" className="form-control mb-4 p-4"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />


                    <button type="submit" className="btn form-control  btn-block btn-primary" >Submit</button>

                </form>

            </div>

        </ >
    )
}

export default Register
