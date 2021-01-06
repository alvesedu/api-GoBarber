require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  // 'localhost'
  host: process.env.DB_HOST,
  // 'postgres'
  username: process.env.DB_USER,
  // 'docker'
  password: process.env.DB_PASS,
  // 'gobarber'
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
