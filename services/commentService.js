// require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');

const uri = process.env.URI;

class CommentService{

    constructor(){}

    //1. CREATE
    // insertMany()
    async insertMany(comments){
        const client = new MongoClient(uri)
        try{
            await client.connect()
            const result = await client.db('sample_mflix').collection('movies').insertMany(comments);
            return result;
        }finally{
            await client.close();
        }
    }

    //2. READ
    //find()
    async find(){
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const comments = await client.db("sample_mflix").collection("comments").find({}).limit(10).toArray();
            return comments;
        }catch(e){
            console.log(e);
        }finally{
            await client.close();
        }
    }

    //findOne()
    async findOne(id){
        const client = new MongoClient(uri)
        try{
            await client.connect()
            const comment = await client.db("sample_mflix").collection("comments").findOne({_id: new ObjectId(id)})
            return comment;
        }finally{
            await client.close();
        }
    }

    //3. UPDATE
    //updateOne()
    async updateOne(id, name, email){
        const client = new MongoClient(uri)
        try{
            await client.connect()
            await client.db('sample_mflix').collection('movies').updateOne({_id: new ObjectId(id)},{$set:{name:name, email:email}})
        }finally{
            await client.close()
        }    
    }

    //4. DELETE
    //deleteOne()
    async deleteOne(id){
        const client = new MongoClient(uri)
        try{
            await client.connect()
            await client.db('sample_mflix').collection('movies').deleteOne({_id: new ObjectId(id)})
        }finally{
            await client.close()
        }
    }
    
    /**
     * 
     * etc.
     * etc.
     *  |
     *  |
     * \|/
     * 
     */
}

module.exports = CommentService;