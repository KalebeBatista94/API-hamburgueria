module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "codeburger", // Nome de usuário
  password: "postgresburger", // Senha do usuário
  database: "codeburger",
  define: {
    timespamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
