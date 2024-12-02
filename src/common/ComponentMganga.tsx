import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaEnvelope, FaCalendarAlt } from 'react-icons/fa'; // Import icons from react-icons

interface MyProps {
    id?: number;
    title: string;
    content: string;
    languageId?: number;
    languageName?: string;
    imageProfileId?: number;
    imageData: any; // Use Uint8Array for binary data
}

const ComponentMganga: React.FC<MyProps> = ({ title, content, imageData }) => {
    // Convert Uint8Array to base64 string
    const base64Image = `${imageData}`;

    return (
        <div className="container mx-auto p-4 pt-20">
            <section className="py-20 px-6 bg-white dark:bg-gray-600 dark:text-gray-100">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2 mb-2 md:mb-0">
                        <h2 className="text-4xl font-semibold mb-6">{title}</h2>
                        <p className="text-lg">{content}</p>
                        
                        <div className="flex space-x-4 mt-6">
                            {/* Button for Contact */}
                            <NavLink to="/contactMganga" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
                                <FaEnvelope className="mr-2" />
                                Contact
                            </NavLink>
                            
                            {/* Button for Book Rendez-vous */}
                            <NavLink to="/contactRendezVS" className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700">
                                <FaCalendarAlt className="mr-2" />
                                Book Rendez-vous
                            </NavLink>
                        </div>
                    </div>
                    <div className="w-full ml-5 md:w-1/2">
                        <img src={base64Image} alt={title} className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>
        </div>
    ); 

};

export default ComponentMganga;
