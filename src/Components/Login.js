import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
// import InputGroup from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'

export default function Login() {
    const [loginForm, setLoginForm] = useState({
        username: '',
        Password:''
    });
    const handleChange = (e)=>{
        setLoginForm({...loginForm, [e.target.name]:[e.target.value]})
    }

    const handleSubmit = ()=>{
        if(loginForm.username === 'admin' && loginForm.Password ==='admin'){
            localStorage.setItem('isLoggedin','true');
        }
    }
    return (
        <Container>
            <form>
                <div>Login page</div>
                {/* <InputGroup type='text' name='username' onChange={handleChange}/>
                <InputGroup type='text' name='password' onChange={handleChange}/>
                <Button color='primary' onClick={handleSubmit}>Submit</Button> */}
            </form>
        </Container>
    )
}


