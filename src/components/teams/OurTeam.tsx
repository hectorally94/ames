// components/Team/OurTeam.tsx
import React from 'react';
import TeamMember from './TeamMember';

interface TeamMemberData {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMemberData[] = [
  { name: 'Devin Robertson', role: 'PDG & Fondateur', imageUrl: 'https://media.istockphoto.com/id/889902824/photo/senior-african-american-man-planting-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=xX232q3dwcD9NqUa1C-Yt-39_vPx_A9a-5Q29uXuzxs=' },
  { name: 'Rickey Goodman', role: 'Bénévole', imageUrl: 'https://media.istockphoto.com/id/1206739766/photo/senior-african-american-man-gardening.jpg?s=1024x1024&w=is&k=20&c=12fvviIf--R-ib2EvAT-sBFZCHcQnuMmI0fKvxnv3gg=' },
  { name: 'Jean Washington', role: 'Bénévole', imageUrl: 'https://media.istockphoto.com/id/898439420/photo/senior-african-american-man-standing-in-front-yard.jpg?s=1024x1024&w=is&k=20&c=s-BCNbppzw_MiU61q6ApL3vl0TF0NxNEJeECTU0ZCFA=' },
];

const OurTeam: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white  dark:bg-gray-600">
      <div className="container mx-auto text-center dark:text-white">
        <h2 className="text-4xl font-semibold mb-6">Rencontrez Notre Équipe</h2>
        <h3 className="text-2xl font-semibold mb-6">Nos Volontaires Experts</h3>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <TeamMember
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

export default OurTeam;
