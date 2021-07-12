{
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "bookshelf",
      "settings": {
        "client": "postgres",
        "host": "$(process.env.INSTANCE_CONNECTION_NAME)",
        "port": "5432",
        "database": "$(process.env.DATABASE_NAME)",
        "username": "$(process.env.DATABASE_USERNAME)",
        "password": "$(process.env.DATABASE_PASSWORD)",
        
      },
      "options": {
        "ssl": false,
        "pool": {
          "min":0,
          "max":15,
          "idleTimeoutMillis":30000,
          "createTimeoutMillis":30000,
          "acquireTimeoutMillis": 30000
        } 
    },
  },
}
