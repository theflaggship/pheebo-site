import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-contact-info'>
                <div>1-(323)-825-1618</div>
                <a href='mailto:hello@pheebo.com'>hello@pheebo.com</a>
                <a href='facebook.com/pheebo'><i class="fab fa-facebook"></i></a>
                <a href='twitter.com/pheebo'><i class="fab fa-twitter"></i></a>
                <a href='youtube.com/pheebo'><i class="fab fa-youtube"></i></a>
            </div>
            <div className='footer-copyright'>
                <div>Copyright © 2013 Pheebo Inc. All rights reserved.</div>
                <a href='pheebo.com'>Terms of use</a>
                <div className='copyright-divider'>|</div>
                <a href='pheebo.com'>Privacy</a>
            </div>
        </div>
    )
}


export default Footer
