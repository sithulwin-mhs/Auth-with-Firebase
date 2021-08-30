import React,{useRef,useContext} from 'react'
import { Card,Form,Button } from 'react-bootstrap'
import { AuthContext } from '../contexts/AuthContext'


const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    // const { signup } = useContext(AuthContext);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     signup(emailRef.current.value,passwordRef.current.value)
    // }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password-Confirmation</Form.Label>
                            <Form.Control type="email" ref={passwordConfirmRef} required></Form.Control>
                        </Form.Group>
                        <Button className="w-100 mt-2" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log In
            </div>
        </>
    )
}

export default Signup
