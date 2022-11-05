import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Footer from "../Footer/Footer";
import "./Contact.css"

export default function Contact (){
    const [submitButton, setSubmitButton] = useState(false)

    const submitted = ()=>{
        return(
            setSubmitButton(alert("Form Submitted"))
        )
    }
    return(
        <div className="container">
            <h1 className="heading">Contact Me</h1>
            <p className="paragraph">Hi there, contact me to ask me about anything you have in mind.</p>
            <Form id="usrform">
                <div className="names">
                <label htmlFor="first_name">First name
                    <input type="text" id="first_name" placeholder="Enter your first name"/>
                </label>
                <label htmlFor="last_name">Last name
                    <input type="text" id="last_name" placeholder="Enter your last name"/>
                </label>
            </div>
            <label htmlFor="email" id="label_email">Email
                <input type="email" id="email" placeholder="yourname@email.com"/>
            </label>
            <label className="text">Message
            <textarea placeholder="Send me a message and I'll reply you as soon as possible..." rows="4" cols="30" name="comment" form="usrform" id="message"/>
            </label>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" className="checked" label="You agree to providing your data to {name} who may contact you" />
      </Form.Group>
            <button onClick={submitted} variant="primary" type="submit" id="btn__submit">Send Message</button>
        </Form>
        <Footer/>
        </div>
    )
}