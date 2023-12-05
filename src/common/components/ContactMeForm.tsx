import "../styles/contactmeform.css"

const ContactMeForm = () => {
    return (
        <div>
            <form className="contact-me-form">
                    <label className="contact-me-form-label" htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                    <label className="contact-me-form-label" htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                    <label className="contact-me-form-label" htmlFor="message">Message</label>
                    <textarea id="message" name="message" />
            
                <button className="contact-me-form-submit-button" type="submit">Submit</button>
        </form>
        </div>
    );
}

export default ContactMeForm;