import React, { useState } from 'react';
import { useCreateDonationMutation } from '../../redux/api/donationsApiSlice';
import { useTranslation } from 'react-i18next';
 
const DonationForm: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Hook to handle donation creation
  const [createDonation, { isLoading, isSuccess, isError }] = useCreateDonationMutation();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Create donation payload
      const donationData = {
        fullName: name,
        phoneNumber: phone,
        amount: parseFloat(amount),
        message: message,
      };

      // Call the API to create a donation
      await createDonation(donationData).unwrap();

      setSubmitted(true); // Open the success modal if successful
    } catch (error) {
      console.error('Error submitting donation:', error);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    // Clear form fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setAmount('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">     
                {t('post.Donate Now') || ''}
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">{t('post.Full Name') || ''}
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"> {t('post.Email') || ''}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">  {t('post.Phone Number') || ''}
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">  {t('post.Donation Amount') || ''}
          </label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">  {t('post.Message') || ''}
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
             {isLoading ? t('post.Processing...') || '' : t('menu.donate') || ''}

          </button>
        </div>
      </form>

      {submitted && isSuccess && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            <h2 className="text-xl font-bold mb-4"> {t('post.Thank you')! || ''}
            </h2>
            <p> {t('post.Your donation was successful. We will contact you later.') || ''}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              {t('post.Close') || ''}

            </button>
          </div>
        </div>
      )}

      {isError && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            <h2 className="text-xl font-bold mb-4"> {t('post.Error') || ''}</h2>
            <p>{t('post.Something went wrong. Please try again later.') || ''}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
            >
          {t('post.Close') || ''}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationForm;
