const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./carWorkShop.db',(err) =>{
    if(err){
        console.log(err.message)
    }

    console.log('connected to db')

    db.close((err)=>{
        if(err){
            console.log(err.message)
        }
        console.log('closed db connection')
    })
})