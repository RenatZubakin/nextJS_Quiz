
const {MongoClient} = require('mongodb')

export async function getAllQuiz() {
  const uri = 'mongodb://localhost:27017'
  const client = new MongoClient(uri)
  let allTests = []
  try {
    await client.connect()
    allTests = await client.db('Quiz').collection('Quiz').find().toArray()
    return allTests;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close()
  }
}

export async function getQuizById(currentId) {
  console.log(currentId)
  const uri = 'mongodb://localhost:27017'
  const client = new MongoClient(uri)
  let quiz = {};
  try {
    await client.connect()
    quiz = await client.db('Quiz').collection('Quiz').find().toArray()
    return quiz;
  } catch (error) {
    console.log(error);
  } finally {
    await client.close()
  }
}

