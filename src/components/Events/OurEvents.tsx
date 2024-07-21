// components/Events/OurEvents.tsx
import React from 'react';
import EventCard from './EventCard';

interface Event {
  date: string;
  category: string;
  title: string;
  imageUrl: string;
}

const events: Event[] = [
  { date: '20 Sep 2018', category: 'Éducation', title: 'Éducation pour Tous les Enfants', imageUrl: 'https://c7.alamy.com/comp/EK0420/western-health-aid-workers-helping-local-families-at-a-health-clinic-EK0420.jpg' },
  { date: '20 Sep 2018', category: 'Nourriture', title: 'Nourriture pour Tout le Monde', imageUrl: 'https://c7.alamy.com/comp/EK9EDW/a-congolese-nurse-and-western-health-aid-worker-feeding-a-baby-heal-EK9EDW.jpg' },
  { date: '20 Sep 2018', category: 'Traitement', title: 'Traitement Gratuit', imageUrl: 'https://c7.alamy.com/comp/EK9EWJ/an-african-nurse-nursing-a-baby-in-a-ward-the-heal-africa-charity-EK9EWJ.jpg' },
];

const OurEvents: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-600">
      <div className="container mx-auto text-center dark:text-white">
        <h2 className="text-4xl font-semibold mb-6">Nos Événements</h2>
        <h3 className="text-2xl font-semibold mb-6">Événements à Venir</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard
              key={index}
              date={event.date}
              category={event.category}
              title={event.title}
              imageUrl={event.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurEvents;
