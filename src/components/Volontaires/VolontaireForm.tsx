// components/VolontaireForm.tsx
import React, { useState } from 'react';
import { useCreateVolontaireMutation } from '../../redux/api/voluntairesApiSlice';
import { useTranslation } from 'react-i18next';

const VolontaireForm: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: '',
    tel: '',
    adress1: '',
    adress2: '',
  });

  const [createVolontaire, { isLoading, isSuccess, isError }] = useCreateVolontaireMutation();
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createVolontaire(formData).unwrap();
       setFormData({
        fullName: '',
        tel: '',
        adress1: '',
        adress2: '',
      });
    } catch (err) {
      console.error('Failed to create volontaire', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">{t('post.Add a Volunteer') || ''}</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            {t('post.Full Name') || ''}
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tel">
            {t('post.Phone Number') || ''}
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={formData.tel}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adress1">
             {t('post.Address 1') || ''}
          </label>
          <input
            type="text"
            id="adress1"
            name="adress1"
            value={formData.adress1}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adress2">
             {t('post.Address 2') || ''}
          </label>
          <input
            type="text"
            id="adress2"
            name="adress2"
            value={formData.adress2}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className={`bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
             {isLoading ? t('post.Submitting...') || '' : t('post.Submit') || ''}

          </button>
        </div>

        {isSuccess && <p className="mt-4 text-green-600">{t('post.Volunteer added successfully!') || ''}</p>}
        {isError && <p className="mt-4 text-red-600">{t('post.Failed to add volunteer.') || ''}</p>}
      </form>
    </div>
  );
};

export default VolontaireForm;
