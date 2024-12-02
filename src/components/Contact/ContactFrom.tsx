import React, { useState } from 'react';
import { useCreateContactMutation } from '../../redux/api/contactsApiSlice';
import { useTranslation } from 'react-i18next';
import { Info, useGetAllInfoQuery } from '../../redux/api/infoApiSlice';

interface InfoResponse {
  message: string;
  data: Info[];
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const { data } = useGetAllInfoQuery();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    tel: '',
    sujet: '',
    message: '',
  });

  const [createContact, { isLoading }] = useCreateContactMutation();
  const packageData = (data as unknown as InfoResponse)?.data || [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createContact(formData).unwrap();
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to submit contact:", err);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
  };

  return (<div className="min-h-screen bg-gray-100 pt-20 mt-10 flex flex-col items-center">
    {/* Contact Section with Info on Right */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 max-w-4xl w-full px-6">
      {/* Company Contact Info */}
      <div className="mb-10 md:w-1/2 md:order-2 flex justify-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
            {t('post.Contact the Association') || ''}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            {packageData.map((packageItem, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded shadow flex items-center justify-center text-gray-600 font-slab text-sm"
              >
                {packageItem.infoType}
              </div>
            ))}
          </div>
        </div>
      </div>
  
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-lg w-full p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {t('post.Contact the Association') || ''}
        </h2>
        {/* Form Fields */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            {t('post.Your name and surname* (Mandatory)') || ''}
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            {t('post.Your email* (Mandatory)') || ''}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tel">
            {t('post.Your phone* (Mandatory)') || ''}
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            required
            value={formData.tel}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sujet">
            {t('post.Subject* (Mandatory)') || ''}
          </label>
          <input
            type="text"
            id="sujet"
            name="sujet"
            required
            value={formData.sujet}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            {t('post.Your message* (Mandatory)') || ''}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 flex items-center"
            disabled={isLoading}
          >
            {isLoading ? t('post.Sending...') || '' : t('post.Send') || ''}
          </button>
        </div>
      </form>
    </div>
  
    {submitted && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md text-center">
          <h2 className="text-xl font-bold mb-4">{t('post.Thank you') || ''}</h2>
          <p>{t('post.We will contact you later.') || ''}</p>
          <button
            onClick={closeModal}
            className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            {t('post.Close') || ''}
          </button>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default ContactForm;
