const db = require('./config/database')

const database = db.db("survey_satisfaction")     
const collection = database.collection("answers");

async function addAnswer(answerId, title, question_id) {
    const connection = await db.connect()
    try {
        const findId = await collection.findOne({answerId})
        if (findId) {
            throw new Error("Cet identifiant existe déjà")
        }
        const data = {answerId, title, question_id}
        
        const result = await collection.insertOne(data)
        return result
    }catch(error) { 
        throw error
    } finally {
        await connection.close()
    }
}

async function listAnswers() {
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

async function updateAnswer(answerId, title, question_id) {
    const connection = await db.connect()
    try {
        const findId = await collection.findOne({answerId})
        if (!findId) {
            throw new Error("Cet identifiant n'existe pas")
        }
        const idUp = {answerId}
        const data = {$set : {title : title, question_id : question_id}}
        const result = await collection.updateOne(idUp, data)
        return result
    }catch(error) { 
        throw error
    } finally {
        await connection.close()
    }
}

async function deleteAnswer(answerId) {
    const connection = await db.connect()
    try {
        const findId = await collection.findOne({answerId})
        if (!findId) {
            throw new Error("Cet identifiant n'existe pas")
        }
        const result = await collection.deleteOne({answerId : answerId})
        return result
    }catch(error) { 
        throw error
    } finally { 
        await connection.close()
    }
}

module.exports = {
    addAnswer,
    listAnswers,
    updateAnswer,
    deleteAnswer,
}