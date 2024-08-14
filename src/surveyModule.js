const db = require('./config/database')

const database = db.db("survey_satisfaction")     
const collection = database.collection("surveys");

async function addSurvey(surveyId, name, description, createdAt, employe_id) {
    const connection = await db.connect()
    try {
        const data = {surveyId, name, description, createdAt, employe_id}
        
        const result = await collection.insertOne(data)
        return result
    }catch(error) { 
        console.log(error)
    } finally {
        await connection.close()
    }
}

async function listSurveys() {
    const connection = await db.connect()
    try {
        const result = await collection.find({}).toArray()
        return result 
    }catch(error) {
        console.log(error)
    } finally {
        await connection.close()
    }
}

async function updateSurvey(surveyId, name, description, createdAt, employe_id) {
    const connection = await db.connect()
    try {
        const idUp = {surveyId}
        const data = {$set : {name: name, description : description, createdAt : createdAt, employe_id: employe_id}}
        const result = await collection.updateOne(idUp, data)
        return result
    }catch(error) { 
        console.log(error)
    } finally {
        await connection.close()
    }
}

async function delSurvey(surveyId) {
    const connection = await db.connect()
    try {
        const result = await collection.deleteOne({surveyId : surveyId})
        return result
    }catch(error) { 
        console.log(error)
    } finally {
        await connection.close()
    }
}

module.exports = {
    addSurvey,
    listSurveys,
    updateSurvey,
    delSurvey,
}