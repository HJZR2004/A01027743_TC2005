/* 
Hector Julian Zarate Ramirez
A01027743
*/

"use strict";
import express from "express";


let app = express();
let port = 5000;
let card_list=[];
app.use(express.json());

app.listen(port,()=>{
    console.log(`Running on port ${port}`)});

app.get("/hello",(req, res) => {
    let salute = "Hello from server";
    res.status(200).send(salute)});

app.get("/hello/:name", (req,res)=>{
    console.log(req.params)
    let salute = `Hello ${req.params.name}!!`
    res.status(200).send(salute)});
    
app.post("/addCards", (req, res) => {
    let newCards = req.body; 
    card_list.push(...newCards); 
    res.status(200).send("Cards added successfully");});

app.get("/stored/cards", (req, res) => {
    if (card_list.length > 0) {
        res.status(200).send(card_list);} 
    else {
        res.status(404).send("no cards are stored");}});

app.get('/searchID/:id', (req, res) => {
    console.log(card_list);
    let card = card_list.find(c => c.ID === req.params.id);
    if (!card) {
        return res.status(404).send("invalid letter id");}
    res.json(card);});

app.delete('/deleteCard/:id', (req, res) => {
    let idToDelete = req.params.id;
    let indexToDelete = card_list.findIndex(card => card.ID === idToDelete);
    if (indexToDelete === -1) {
        return res.status(404).send("invalid letter id");}
    card_list.splice(indexToDelete, 1);
    res.status(200).send("card deleted")});


