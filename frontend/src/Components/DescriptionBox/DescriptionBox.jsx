import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>

        </div>
        <div className="descriptionbox-description">
            <p>An E-commerce website is an online platform that enables businesses and individuals to buy and sell products or services over the internet. It serves as a digital storefront where users can browse items, add them to a shopping cart, and complete purchases through secure payment methods.</p>
            <p>The e-commerce website provides a seamless online shopping experience by integrating various essential functionalities. It features a user-friendly interface with categorized product listings, search filters, and high-quality images for easy browsing. Users can register and log in securely to manage their profiles, view order history, and save favorite products. The shopping cart and checkout system allow customers to add or remove items, apply discounts, and complete purchases through multiple secure payment options such as credit/debit cards, UPI, and PayPal. The platform includes real-time order tracking, ensuring customers receive timely updates on their purchases. Additionally, the website supports customer reviews and ratings, enabling users to share feedback and enhance trust. With admin panel access, store owners can efficiently manage inventory, track sales, and analyze customer behavior. The e-commerce site is also fully responsive, ensuring a smooth shopping experience across mobile, tablet, and desktop devices.</p>
        </div>
    </div>
  )
}

export default DescriptionBox
