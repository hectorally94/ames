import React from 'react';
import { Link } from 'react-router-dom';
import { Cause } from '../components/Causes/Cause';
import Gallery from '../components/Gallery/allGalleryItems';
import OurTeam from '../components/teams/OurTeam';
import OurEvents from '../components/Events/OurEvents';
import FromOurBlog from '../components/Blog/blogPosts';
import OurActionnaire from '../components/Actionaires/OurActionnaire'; 


interface CauseProps {
  goal: number;
  raised: number;
  title: string;
  description: string;

  imageUrl: string; // Add imageUrl to the props
}

const HomePage: React.FC = () => {
  const causes: CauseProps[] = [
    {
      goal: 9860,
      raised: 768,
      title: 'Aide financière pour les familles pauvres',
      description: 'Il est bien établi qu’un lecteur sera distrait.', imageUrl: 'https://media.istockphoto.com/id/1322380590/photo/community-volunteers-in-masks-receiving-donations-of-food-and-clothing.jpg?s=1024x1024&w=is&k=20&c=c4n-wDFcYgp1LjV-6JfVqvEjpF5nNMzxnKrJ9Jjt1BM=' // Example image URL
    },
    {
      goal: 9860,
      raised: 768,
      title: 'Éducation pour les enfants pauvres',
      description: 'Il est bien établi qu’un lecteur sera distrait.', imageUrl: 'https://c7.alamy.com/comp/EK0421/western-aid-workers-helping-families-at-a-charity-health-clinic-goma-EK0421.jpg' // Example image URL
    },
    {
      goal: 9860,
      raised: 768,
      title: 'Envoyer un enfant à l’école pendant un an',
      description: 'Il est bien établi qu’un lecteur sera distrait.', imageUrl: 'https://c7.alamy.com/comp/2D37MY1/niger-maradi-tiberi-catholic-church-social-projects-of-catholic-order-servants-of-christ-school-katholische-kirche-soziale-projekte-der-ordensschwester-marie-catherine-kingbo-oberin-derdienerinnen-christi-schule-2D37MY1.jpg' // Example image URL
    },
    {
      goal: 9860,
      raised: 768,
      title: 'Nourriture et logement pour les enfants',
      description: 'Il est bien établi qu’un lecteur sera distrait.', imageUrl: 'https://media.istockphoto.com/id/619643870/photo/hungry-african-children-asking-for-food-africa.jpg?s=1024x1024&w=is&k=20&c=9-fxG0x5A1-tMM8fYzcqCk6-ZTuLKlndFAIo4S09BnQ=' // Example image URL
    },
    {
      goal: 9860,
      raised: 768,
      title: 'Eau pure pour le monde',
      description: 'Il est bien établi qu’un lecteur sera distrait.',
      imageUrl: 'https://media.istockphoto.com/id/618053488/photo/little-african-boy-drinking-healthy-clean-water-from-tap.jpg?s=1024x1024&w=is&k=20&c=Fqs1sxBLH3sjh1Dh3PPf1eaNcAq31xiYUtnntlOa-pw=' // Example image URL
    },
    {
      goal: 9860,
      raised: 768,
      title: 'Recyclage pour la charité',
      description: 'Il est bien établi qu’un lecteur sera distrait.',
      imageUrl: 'https://media.istockphoto.com/id/917569860/photo/sweet-little-african-boy-under-the-rain-in-mali.jpg?s=1024x1024&w=is&k=20&c=kld3Afye4aM0bF_e9FTBlil08CYA_GD-bFFJTviCjIU=' // Example image URL
    }
  ];

  return (
   <>
    <div className="bg-gray-100 dark:bg-gray-600 min-h-screen flex flex-col pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 dark:bg-gray-600 text-white dark:text-gray-100 py-20 pt-300 mt-10 flex flex-col items-center">
    <h1 className="text-5xl font-bold mb-6">Bienvenue sur notre site de charité</h1>
    <p className="text-lg mb-8 max-w-3xl text-center">
        Nous sommes dédiés à rendre le monde meilleur. Rejoignez-nous dans notre mission pour créer un changement positif et impacter les vies au sein des communautés.
    </p>
    <div>
        <Link to="/donate" className="bg-yellow-500 dark:bg-yellow-400 text-blue-900 dark:text-yellow-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-300 transition duration-300">
            Faites un don maintenant
        </Link>
    </div>
</section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-600 dark:text-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-semibold mb-6">Notre Mission</h2>
            <p className="text-lg">
              Notre mission est de fournir un soutien et des ressources aux communautés dans le besoin. Nous nous concentrons sur des domaines tels que l'éducation, la santé et les secours d'urgence pour aider ceux qui en ont le plus besoin. Avec votre soutien, nous pouvons faire une différence durable dans la vie des gens.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="src/assets/ames1.ico"
              alt="Mission de la Charité" 
              className="w-full rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 bg-gray-200 dark:bg-gray-600 ">
        <div className="container mx-auto text-center dark:bg-gray-600">
          <h2 className="text-4xl font-semibold mb-6 dark:text-gray-100">Notre Impact</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">1000+ Enfants Éduqués</h3>
                <p>Grâce à nos programmes éducatifs, nous avons fourni une éducation de qualité à plus de 1000 enfants dans des zones défavorisées.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">5000+ Repas Servis</h3>
                <p>Nous avons servi plus de 5000 repas à des familles dans le besoin grâce à nos programmes de secours alimentaire.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">200+ Familles Soutenues</h3>
                <p>Nos efforts de secours d'urgence ont fourni un soutien à plus de 200 familles en difficulté.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 px-6 bg-gray-200 dark:bg-gray-600">
        <div className="container mx-auto text-center dark:bg-gray-600 dark:text-gray-100">
          <h2 className="text-4xl font-semibold mb-6">Participez</h2>
          <p className="text-lg mb-8">
            Vous souhaitez faire une différence ? Il existe de nombreuses façons de vous impliquer, que ce soit en tant que bénévole ou en organisant des événements de collecte de fonds. Chaque petite aide compte !
          </p>
          <Link to="/volunteer" className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition duration-300">
            Devenir Bénévole
          </Link>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-600 ">
        <div className="container mx-auto text-center ">
          <h2 className="text-4xl font-semibold mb-6 dark:text-gray-100 ">Histoires de Succès</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Le Parcours de Maria</h3>
                <p>Maria, une jeune fille d'une zone rurale, a reçu un soutien éducatif grâce à nos programmes et rêve maintenant de devenir médecin.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">La Famille Johnson</h3>
                <p>La famille Johnson, autrefois en proie à l'insécurité alimentaire, profite maintenant de repas stables et d'une meilleure santé grâce à nos efforts de secours alimentaire.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">La Famille Nano</h3>
                <p>La famille Nano, autrefois en proie à l'insécurité alimentaire, profite maintenant de repas stables et d'une meilleure santé grâce à nos efforts de secours alimentaire.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Cause of Sadakat Section */}
      <section className="py-20 px-6 bg-gray-200  dark:bg-gray-600">
        <div className="container mx-auto text-center dark:text-gray-100">
          <h2 className="text-4xl font-semibold mb-6">Dernières Causes de Sadakat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causes.map((cause, index) => (
              <Cause
                key={index}
                goal={cause.goal}
                raised={cause.raised}
                title={cause.title}
                description={cause.description}
                imageUrl={cause.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-600 flex items-center justify-center dark:text-white sm:p-8 space-x-8">
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold">73</dt>
          <dd className="text-gray-500 dark:text-gray-400">Activités</dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
          <dd className="text-gray-500 dark:text-gray-400">Dons</dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold">10</dt>
          <dd className="text-gray-500 dark:text-gray-400">Projets ouverts</dd>
        </div>
      </div>

      {/* Gallery Section */}
      <Gallery />

      {/* Our Team Section */}
      <OurTeam />

      {/* Our Events Section */}
      <OurEvents />

      {/* From Our Blog Section */}
      <FromOurBlog />

      {/* From Our Sponsor Section */}
      <OurActionnaire />
    </div>
    </> 
  );
};

export default HomePage;
