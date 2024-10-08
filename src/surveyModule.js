const db = require('./config/database')

const database = db.db("survey_satisfaction")     
const collection = database.collection("surveys");

async function addSurvey(surveyId, name, description, createdAt, employe_id) {
    const connection = await db.connect()
    try {
        const findId = await collection.findOne({surveyId})
        if (findId) {
            throw new Error("Cet identifiant existe déjà")
        }
        const data = {surveyId, name, description, createdAt, employe_id}
        
        const result = await collection.insertOne(data)
        return result
    }catch(error) { 
        throw error
    } finally {
        await connection.close()
    }
}

async function listSurveys() {
    const connection = await db.connect()
    try {
        const result = await collection.find({}).toArray()
        console.log(result)
        return result 
    }catch(error) {
        throw error
    } finally {
        await connection.close()
    }
}

async function updateSurvey(surveyId, name, description, createdAt, employe_id) {
    const connection = await db.connect()
    try {
        const findId = await collection.findOne({surveyId})
        if (!findId) {
            throw new Error("Cet identifiant n'existe pas")
        }
        const idUp = {surveyId}
        const data = {$set : {name: name, description : description, createdAt : createdAt, employe_id: employe_id}}
        const result = await collection.updateOne(idUp, data)
        return result
    }catch(error) { 
        throw error
    } finally {
        await connection.close()
    }
}

async function deleteSurvey(surveyId) {
    const connection = await db.connect()
    try {
        const findId = await collection.findOne({surveyId})
        if (!findId) {
            throw new Error("Cet identifiant n'existe pas")
        }
        const result = await collection.deleteOne({surveyId : surveyId})
        return result
    }catch(error) { 
        throw error
    } finally {
        await connection.close()
    }
}

module.exports = {
    addSurvey,
    listSurveys,
    updateSurvey,
    deleteSurvey,
}