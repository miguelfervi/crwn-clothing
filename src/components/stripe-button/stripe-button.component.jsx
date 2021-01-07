import React from 'react'

import StripeCheckout from 'react-stripe-checkout';

export const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_lHEF1udmaebCUZ8Iyrkeapwd00oAvI44Bu';

    const onToken = token => {
        console.log(token);
        alert ('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
            ></StripeCheckout>
    )
};
