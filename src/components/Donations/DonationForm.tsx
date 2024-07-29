import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

import CreditCardForm from './CreditCardForm';

// Stripe public key
const STRIPE_PUBLIC_KEY = 'ECfgslD7-cnaykwdQL0x1j7BSQnfPVazt3CYcKZvANEP6CTk04lSWtemZfG8iDWW4CXDxROyBOauTk1H';
const PAYPAL_CLIENT_ID = 'AXpKZlU2vFgQY5-VhgVMkQYadu3gp5qmMMGVwf_Zgk2qHHrS8l1u2A7w9hBAZNS0pYZDO0DDxwuhcjdp';
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const DonationForm: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [options, setOptions] = useState({
    clientId: PAYPAL_CLIENT_ID,
    currency: 'USD',
  });

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then((details: any) => {
      alert('Donation successful! Thank you for your generosity.');
    });
  };

  useEffect(() => {
    // Update the options as needed
    setOptions((prevOptions) => ({
      ...prevOptions,
      // Update any specific options here
    }));
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Make a Donation</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Donation Amount
          </label>
          <input
            type="number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Method
          </label>
          <div className="flex items-center mb-2">
            <input
              id="credit_card"
              name="payment_method"
              type="radio"
              value="credit_card"
              checked={paymentMethod === 'credit_card'}
              onChange={handlePaymentMethodChange}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label htmlFor="credit_card" className="ml-2 block text-sm text-gray-900">
              Credit Card
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="paypal"
              name="payment_method"
              type="radio"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={handlePaymentMethodChange}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label htmlFor="paypal" className="ml-2 block text-sm text-gray-900">
              PayPal
            </label>
          </div>
        </div>

        {paymentMethod === 'credit_card' && (
          <Elements stripe={stripePromise}>
            <CreditCardForm amount={amount} />
          </Elements>
        )}

        {paymentMethod === 'paypal' && (
          <div className="mt-4">
            <PayPalScriptProvider options={options}>
              <PayPalButtons
                style={{ layout: 'vertical' }}
                createOrder={createOrder}
                onApprove={onApprove}
              />
            </PayPalScriptProvider>
          </div>
        )}
      </form>
    </div>
  );
};

export default DonationForm;