import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Kevin</h1>

            <ul className="footer__list">
                <li>
                    <a href='#about' className="footer__link">About</a>
                </li>

                <li>
                    <a href='#portofolio' className="footer__link">Projects</a>
                </li>

                <li>
                    <a href='#testimonials' className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.intagram.com/kevinfz16_" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
            </a>

            <a href="https://www.facebook.com/muhamadkevinfairuzZ/" className="footer__social-link" target="_blank">
            <i class="bx bxl-facebook"></i>    
            </a>

            <a href="https://twitter.com/rnxx1606" className="footer__social-link" target="_blank">
            <i class="bx bxl-twitter"></i>    
            </a>
            </div>

            <span className='footer__copy'>Kevinfairuz. All rights reserved</span> 
        </div>
    </footer>
  )
}

export default Footer