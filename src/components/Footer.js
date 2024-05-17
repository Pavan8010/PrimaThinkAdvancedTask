import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
            <h2 className="head">Why Not Contact Us Today !</h2>
            <form action="#" method="POST">
                <div className="form-row">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div className="form-row">
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" required/>
                </div>
                <div className="form-row">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <div className="form-row">
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
      </div>
      <div className="footdiv">
            <h2 className="head">Company Information !</h2>
            <p> PrimaThink Technology Pvt Ltd <br/>
                C/O: Thakur, Chintamani Colony, <br/>
                Gajanan Maharaj Temple Shrihari<br/>
                Nagar, Arjun Nagar, Amravati<br/>
                (444602)<br/>
                Phone<br/>
                9890544466<br/>
                Email<br/>
                contact@primathink.com
            </p>
      </div>
      <div className="footdiv">
            <h2 className="head">Company Information !</h2>
            <p> PrimaThink Technology Pvt Ltd <br/>
                C/O: Thakur, Chintamani Colony, <br/>
                Gajanan Maharaj Temple Shrihari<br/>
                Nagar, Arjun Nagar, Amravati<br/>
                (444602)<br/>
                Phone<br/>
                9890544466<br/>
                Email<br/>
                contact@primathink.com
            </p>
      </div>
      <div className="footdiv">
            <h2 className="head">Company Information !</h2>
            <p> PrimaThink Technology Pvt Ltd <br/>
                C/O: Thakur, Chintamani Colony, <br/>
                Gajanan Maharaj Temple Shrihari<br/>
                Nagar, Arjun Nagar, Amravati<br/>
                (444602)<br/>
                Phone<br/>
                9890544466<br/>
                Email<br/>
                contact@primathink.com
            </p>
      </div>
    </div>
  )
}

export default Footer
