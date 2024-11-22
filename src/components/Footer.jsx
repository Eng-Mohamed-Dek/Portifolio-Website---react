import React from 'react'

const Footer = () => {
  return (
      <footer>
          <div className="footer-content">
              <div className="contact-info">
                  <h1>Get in Touch Let`s Talk</h1>
                  <span>+252 614459166</span>
                  <p>MadaaleDesigner123@gmail.com</p>
                  <p>&copy; {new Date().getFullYear()} All Rights reserved Hirkaab Academy</p>
              </div>
              <div className="contact-form">
                  <h1>SubScribe Our Email</h1>
                  <form action="">
                      <input type="email" name="User email" placeholder='Enter Your Email' />
                     <button>Subscribe Our NewsLetter</button>
                    </form>
              </div>
          </div>
    </footer>
  )
}

export default Footer