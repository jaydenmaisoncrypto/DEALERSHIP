import React from 'react'

const Footer = () => {
  return (
      <section className='row text-center bg-warning p-4'>
            <div className='col-md-4 text-light'>
                <h4 className='text-light'>About us</h4>
                <p>We are passionate about building modern, responsive, and user-friendly digital cars. Our goal is to turn ideas into functional and visually appealing solutions that make an impact.</p>
            </div>
            <div className='col-md-4'>
                <h4>Contact us</h4>
                <form>
                    <input type="email" placeholder='Enter your Email' className='form-control'/><br />
                    <textarea cols="7" rows="7" placeholder='Leave a comment' className='form-control'></textarea><br />
                    <input type="submit" value="Send Message" className='btn btn-outline-danger' />
                </form>
            </div>
            <div className='col-md-4'>
                   <h4>Stay Connected</h4>
            <a href="https://www.facebook.com">
                <img src="icons/fb.png" alt=""/>
            </a>
            <a href="https://www.instagram.com" alt="">
                <img src="icons/in.png" alt=""/>
            </a>
            <a href="https://ww.x.com">
                <img src="icons/x.png" alt=""/>
            </a>
            <p>Follow us on social media to keep up with our latest updates, projects, and insights. Let’s connect and grow together.</p>
            </div>
            <div>
                <footer className='text-light bg-dark p-2 text-center'>
                    <h5>Developed by Schlamager$$. &copy; 2026. All rights reserved</h5>
                </footer>
            </div>
      </section>

  )
}

export default Footer
