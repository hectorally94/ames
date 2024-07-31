import React from 'react';
import DonationForm from '../components/Donations/DonationForm';

const DonatePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <DonationForm />
  </div>
  );
};

export default DonatePage;
