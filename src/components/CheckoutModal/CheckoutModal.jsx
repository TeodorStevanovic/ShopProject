import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const CheckoutModal = (props) => {

  const navigate = useNavigate();

  const [card, setCard] = useState();
  const [cvc, setCvc] = useState ();
  const [error, setError] = useState (false);

  function validateCreditCardNumber(cardNumber) {
    var regex =
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    return regex.test(cardNumber);
  }

  function creditCardChange(e) {
    setCard(e.target.value);
  }

  function cvcChange(e) {
    setCvc(e.target.value);
  }

  function tryToPay() {
    const isCreditCartValid = validateCreditCardNumber(card)
    
    if(isCreditCartValid) {
      navigate('/successfulPayemnt')
    } else {
      setError('Bad Credit Card Number!!!');
    }
  }


  return (
    <div className="w-screen h-screen flex justify-center items-center top-0 left-0 absolute bg-sky-500/100">
      <div className="w-[400px] h-[400px] flex flex-col justify-center p-10">
        Total Price: {props.price} + 10$ shipping = {Number(props.price) + 10}
        <label className="text-center">Card Number</label>
        <input onChange={creditCardChange} className="b-[1px]-black rounded-md mb-2" type="text" id="fname" name="fname" />
        <label className="text-center">CVC</label>
        <input onChange={cvcChange} className="b-[1px]-black rounded-md mb-2" type="text" id="fname" name="fname" />
        <label className="text-center">Expiration Date</label>
        <input className="b-[1px]-black rounded-md mb-2" type="date" id="fname" name="fname" />
        <label className="text-center">Card Holder</label>
        <input className="b-[1px]-black rounded-md mb-2" type="text" id="fname" name="fname" />
        {
          error && error
        }
          <div onClick={tryToPay} className="bg-black rounded-md text-white text-center">
            <span>Pay</span>
          </div>
  
      </div>
    </div>
  );
};

export default CheckoutModal;
