module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "toor",
    DB: "book_store",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}