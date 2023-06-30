import './ContactFormStyle.css'

function ContactForm () {
    return(
        <form id="fcf-form-id" className="fcf-form-class" method="post" action="contact-form-process.php">
        
        <div className="fcf-form-group">
            <div className="fcf-input-group">
                <input type="text" id="Name" name="Name" className="fcf-form-control" required placeholder='Name'/>
            </div>
        </div>

        <div className="fcf-form-group">
            <div className="fcf-input-group">
                <input type="email" id="Email" name="Email" className="fcf-form-control" required placeholder='Email'/>
            </div>
        </div>

        <div className="fcf-form-group">
            <div className="fcf-input-group">
                <textarea id="Message" name="Message" className="fcf-form-control" rows="6" maxlength="3000" required placeholder='How Can I Help?'></textarea>
            </div>
        </div>

        <div className="fcf-form-group">
            <button type="submit" id="fcf-button" className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
        </div>

    </form>
        
    )
}

export default ContactForm