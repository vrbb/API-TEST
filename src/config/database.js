module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'docker',
  database: 'dbtest',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
