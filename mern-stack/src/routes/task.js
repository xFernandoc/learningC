const express = require('express')
const rutas = express.Router()
const Task = require('../models/task')
//solicita
rutas.get('/',async (req,res)=>{
    const tareas = await Task.find()
    res.json(tareas)
})
//socilita una
rutas.get('/:id',async (req,res)=>{
    try {
        const tareas = await Task.findById(req.params.id)
        res.json({
            tareas : tareas
        })
    } catch (error) {
        console.log(error.message)
        res.status(404).json({
            error : "No encontrado"
        })
    }
})
//guarda
rutas.post('/',async (req,res)=>{
    const { title , description} = req.body
    const task = new Task({title,description})
    await task.save()
    res.json({status  : 'tarea guardada'}) 
})
//actualiza
rutas.put('/:id', async (req,res)=>{
    const {title,description} = req.body
    const newTask = {title,description}
    await Task.findByIdAndUpdate(req.params.id,newTask)
    res.json({status : 'tarea actualizada'})
})
//borrar
rutas.delete('/:id',async(req,res)=>{
    await Task.findByIdAndRemove(req.params.id)
    res.json({status : 'tarea eliminada'})
})
module.exports = rutas