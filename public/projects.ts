type Project = {
  name: string;
  description: string;
  github: string;
  deployment: string;
  imgSrc: string;
};

const projects: Project[] = [
  {
    name: 'Bodega Swap',
    description: `Bodega Swap is an app where users can swap their unwanted items. It was built using React, Tailwind CSS, and Supabase, and deployed with Heroku. Bodega Swap is a PWA and is designed responsively.`,
    github: 'https://github.com/FSA-Capstone-2201-Team-7/bodega-swap',
    deployment: 'https://bodega-swap.herokuapp.com/',
    imgSrc: './images/bodega-swap.png',
  },
  {
    name: 'Meme Supreme',
    description: `Meme Supreme is an ecommerce website where users can go to buy the hottest, freshest memes. It was built using React, Express, Node, and PostgreSQL with Material UI, and Sequelize.`,
    github: 'https://github.com/popplio-powersquad/graceshopper',
    deployment: 'https://meme-supreme.herokuapp.com/',
    imgSrc: './images/meme-supreme.png',
  },
];

export default projects;
