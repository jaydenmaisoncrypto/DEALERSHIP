import React from 'react'

const Footer = () => {
  return (
      <section className='row text-center bg-warning p-4'>
            <div className='col-md-4 text-light'>
                <h4 className='text-light'>About us</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellat repellendus ipsum id temporibus natus fugiat fuga quas, ex consequatur voluptatem inventore est maxime asperiores suscipit. Vitae rerum provident dignissimos.</p>
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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nihil obcaecati eum, incidunt aperiam in ab magnam hic praesentium consectetur veniam amet, sed qui perspiciatis voluptate facilis quo odit natus.</p>
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
