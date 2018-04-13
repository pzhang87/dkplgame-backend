const DB = require('./connection')

DB.orm.sync({force: true}).then( () => process.exit() )
