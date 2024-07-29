import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

interface CreditCardFormProps {
  amount: string;
}

const CreditCardForm: React.FC<CreditCardFormProps> = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement!,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Here you can handle the payment process (e.g., send to your backend for processing)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Credit Card Details
        </label>
        <CardElement className="mt-1 p-2 border border-gray-300 rounded-md" />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        disabled={!stripe}
      >
        Donate ${amount}
      </button>
    </form>
  );
};

export default CreditCardForm;
