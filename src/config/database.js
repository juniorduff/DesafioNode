module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  port: 5434,
  database: 'desafio',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
