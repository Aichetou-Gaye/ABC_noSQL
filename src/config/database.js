const { MongoClient } = require('mongodb')
const uri = "mongodb://localhost:27017"
const client = new MongoClient(uri)

async function main(){
    try {
        await client.connect()
        console.log("connected")
    } catch (e) {
        console.error(e.message)
    }
}

main()

module.exports = client

