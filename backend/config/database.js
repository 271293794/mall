module.exports = {
  development: {
    username: "root",
    password: "root123",
    database: "mall-admin",
    host: "localhost",
    dialect: "mysql",
    query: {
      raw: true
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    timezone: "+08:00",
    define: {
      charset: "utf8",
      dialectOptions: {
        collate: "utf8_general_ci"
      }
    }
  },
  production: {
    username: "root",
    password: "root123",
    database: "mall-admin",
    host: "127.0.0.1",
    dialect: "mysql",
    query: {
      raw: true
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    timezone: "+08:00",
    define: {
      charset: "utf8",
      dialectOptions: {
        collate: "utf8_general_ci"
      }
    }
  }
}