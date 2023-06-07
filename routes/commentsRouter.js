const express = require('express');
const CommentService = require('../services/commentService');

const router = express.Router();
const service = new CommentService();

/**
 * COMMENTS
 */

//1. CREATE
//1.2 insertMany()
router.post('/', async (req, res)=>{
    const comments = req.body
    const result = await service.insertMany([comments]);
    res.status(201).json({
        message: 'created',
        // data: movies,
        result
    })
})

//2. READ
//2.1 find()
router.get('/',async (req, res)=>{
    const comment = await service.find();
    if(comment){
        res.send(comment);
    }else{
        res.send("No se encontro la informacion");
    }
})

//2.2 findOne()
router.get('/:id', async (req, res)=>{
    const id = req.params.id;
    const comment = await service.findOne(id);
    if(comment){
        res.status(200).send(comment);
    }else{
        res.send('Comment not found');
    }
})

//3. UPDATE
//3.1 updateOne
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    await service.updateOne(id, name, email)
    res.status(200).send({
        message: 'updated',
        id,
      })
  });

//4. DELETE
//4.1 deleteOne()
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await service.deleteOne(id);
    res.status(204).json({
        message: 'deleted',
        id,
      })     
  });

module.exports = router;