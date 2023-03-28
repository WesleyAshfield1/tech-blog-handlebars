const sequelize = require('./../config/connection');
const { Post } = require('./../models')

const posts = [
    {
      textContent: 'My team and I finished our project ahead of scheduale!',
      userId: 1 
    },
    {
      textContent: 'Our team meeting this morning went very well. Keep up the good work team!',
      userId: 2 
    },
    {
      textContent: 'I learned how to code in a defferent language today!',
      userId: 3 
    }
  ];

  const postSeed = async () => {
    await sequelize.sync({ force: false });
    await Post.bulkCreate(posts);
  };

  module.exports = postSeed;