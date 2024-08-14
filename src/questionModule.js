const db = require('./config/database')

const database = db.db("survey_satisfaction")     
const collection = database.collection("questions");

async function addQuestion(questionId, title, type, survey_id) {
    const connection = await db.connect()
    try {
        const data = {questionId, title, type, survey_id}
        
        const result = await collection.insertOne(data)
        return result
    }catch(error) { 
        console.log(error)
    } finally {
        await connection.close()
    }
}

async function listQuestions() {
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

async function updateQuestion(questionId, title, type, survey_id) {
    const connection = await db.connect()
    try {
        const idUp = {questionId}
        const data = {$set : {title: title, type : type, survey_id: survey_id}}
        const result = await collection.updateOne(idUp, data)
        return result
    }catch(error) { 
        console.log(error)
    } finally {
        await connection.close()
    }
}

async function deleteQuestion(questionId) {
    const connection = await db.connect()
    try {
        const result = await collection.deleteOne({questionId : questionId})
        return result
    }catch(error) { 
        console.log(error)
    } finally {
        await connection.close()
    }
}

module.exports = {
    addQuestion,
    listQuestions,
    updateQuestion,
    deleteQuestion,
}