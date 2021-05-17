/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './AuthScreen.css'

const AuthScreen = () => {
    return (
        <div className="authScreen">
            <div className="authScreen_content">
            <img src="/assets/images/cta-logo-one.svg" className="contentAuth__logo" alt="cta-image" />
                <a className="contentAuth__button">Get All There!</a>
                <p className="contentAuth__desc">
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </p>
                <img src="/assets/images/cta-logo-two.png" className="contentAuth__logo" alt="cta2-image" />
            </div>
        </div>
    )
}

export default AuthScreen
