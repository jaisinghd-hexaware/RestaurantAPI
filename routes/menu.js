const express = require('express')
const router = express.Router()
module.exports=router
const Menu = require('../models/menuModel')

//GET ALL THE MENU
router.get('/', async(req,res) => {
    
    try{
           const menu = await Menu.find()
           res.json(menu)
    }catch(err){
        res.send('Error ' + err)
    }
})

//CREATE A MENU
router.post('/',async(req,res) => {

    const menu=new Menu({
        name:req.body.name,
        type:req.body.type,
        price:req.body.price,
    })

    try{
        const a= await menu.save()
        res.json(a)
    }catch(err){
        res.send('Error')

 }})

 //GET A SPECIFIC MENU
 router.get('/:id', async(req,res) => {
    // res.send("received")
    try{
           const menu = await Menu.findById(req.params.id)
           res.json(menu)
    }catch(err){
        res.send('Error ' + err)
    }
})

//UPDATE A MENU
router.patch('/:id',async(req,res)=>{
    try{
    const menu = await Menu.findById(req.params.id)
    menu.name=req.body.name
    menu.type=req.body.type
    menu.price=req.body.price
    const b=await menu.save()
        res.send(b)
    }catch(err){
        res.send('Error')
    }

})

//DELETE A MENU
router.delete('/:id',async(req,res)=>{
    try{
        const menu=await Menu.remove({_id:req.params.id})
        
    res.send('Deleted')
    
    }catch(err){
        res.send('Error')
    }

})