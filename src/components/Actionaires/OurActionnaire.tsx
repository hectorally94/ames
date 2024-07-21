// components/Team/OurTeam.tsx
import React from 'react';
import Member from './Member';

interface TeamMemberData {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMemberData[] = [
  { name: 'Devin Robertson', role: 'PDG & Fondateur', imageUrl: 'https://media.istockphoto.com/id/2150086818/photo/cute-shy-schoolboy-in-uniform-sitting-in-classroom-hand-raised-laughing.jpg?s=1024x1024&w=is&k=20&c=QkAS99Z5AZcNV7_rLFXJnBtJ_nAVB4Jua4gCWpMt6po=' },
  { name: 'Rickey Goodman', role: 'Bénévole', imageUrl: 'https://media.istockphoto.com/id/2150086818/photo/cute-shy-schoolboy-in-uniform-sitting-in-classroom-hand-raised-laughing.jpg?s=1024x1024&w=is&k=20&c=QkAS99Z5AZcNV7_rLFXJnBtJ_nAVB4Jua4gCWpMt6po=' },
  { name: 'Jean Washington', role: 'Bénévole', imageUrl: 'https://media.istockphoto.com/id/2150086818/photo/cute-shy-schoolboy-in-uniform-sitting-in-classroom-hand-raised-laughing.jpg?s=1024x1024&w=is&k=20&c=QkAS99Z5AZcNV7_rLFXJnBtJ_nAVB4Jua4gCWpMt6po=' },
];

const OurActionnaire: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-600">
      <div className="container mx-auto text-center dark:text-white">
        <h2 className="text-4xl font-semibold mb-6">Nos Principaux Partenaires</h2>
        <h3 className="text-2xl font-semibold mb-6">Faisant des dons au nom d'Allah.</h3>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <Member
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurActionnaire;
