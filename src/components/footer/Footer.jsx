import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <>
      <div className='footer_body'>
        <section className='footer_top'>
          <Link to='/' className='footer_link'>Home</Link>
          <Link to='/' className='footer_link'>About Us</Link>
          <Link to='/vacation' className='footer_link'>Vacation</Link>
          <Link to='/' className='footer_link'>News</Link>
        </section>
        <section className='footer_bottom'>
          <p>Use of this website constitutes acceptance of the NATO's Terms & Conditions and Privacy Notice.</p>
          <p>
            With a deep understanding of the challenges faced by military members, 
            we also offer special discounts and flexible booking options. Your service is invaluable, 
            and we want to ensure that your well-earned vacation is seamless and affordable.
          </p>
          <p>
            Thank you for your dedication. Now it's time to unwind, make lifelong memories, 
            and experience the break you truly deserve. Explore the world with [Your Website Name]—because you've earned it!
          </p>
          <p>©2024 NATO Resort Rental. All Rights Reserved.</p>
        </section>
      </div>
    </>
  )
}

export default Footer