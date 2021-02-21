// const { Number } = require('core-js');
// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const Record = new Schema({
//     name: String,
//     age: Number,
// });

// // const UserSchema = new mongoose.Schema({//конструктор объекта !
// //     name: String,
// //     age: Number
// // });

// // const User = mongoose.model('Users', UserSchema); // создание 


// module.exports = mongoose.model('Record', Record);

// const express = require('express');
// const router = express.Router();

// const Record = require('../models/Record'); // тут чет не так
// (async () => {
//      router.get('/test', async (req, res) => { //Получить всех пользователей
//         res.status(200).send({ msg: "fuck" });
        
//     });

//     router.get('/users', async (req, res) => { //Получить всех пользователей
//         const users = await User.find({});
//         if (users) {
//             res.status(200).send(users);
//         } else {
//             res.status(404).send({ msg: "Not Found" });
//         }
//     });

//     router.get('/users/:_id', async (req, res) => { //Получить пользователя по id
//         const user = await User.findById(req.params._id);
//         if (user) {
//             res.status(200).send(user);
//         } else {
//             res.status(404).send({ msg: "Not Found" });
//         }
//     });
    
//     router.put('/users/:_id',async (req, res) => {
//         const user = await User.findById(req.params._id);
//         console.log(req.body.name);
//         user.name = req.body.name;
//         user.age = req.body.age;
//         await user.save();
//         res.status(200).send({msg : "user has been updated"})
//     })

//     router.post('/users', async (req, res) => { //Создание пользователя
//         const user = new User();
//         user.name = req.body.name;
//         user.age = req.body.age;
//         await user.save();
//         res.status(200).send({ msg: "user was create" });
//     });

//     router.delete('/users/:_id', async (req, res) => { //Удаление пользователя по id
//         const user = await User.findById(req.params._id);
//         if (user) {
//             await user.delete();
//             res.status(200).send({ msg: "User was remove" });
//         } else {
//             res.status(404).send({ msg: "Not Found" });
//         }
//     });
// // ----------------------------------------------------------
// //     router.get('/', async (req, res) =>{
// //         // res.json(await User.find({}));
// //         const user = await User.find({});
// //         res.status(200).send(user);
// //     });

// //     router.post('/', async (req, res) => {
// //         const record = new User(req.body);
// //         await record.save();
// //         res.json({ state: 'success' });
// //     });

// //     router.get('/:id', async (req, res) => {
// //         res.json(await User.findById(req.params.id));
// //     });

// //     router.put('/:id', async (req, res) => {
// //         await User.findByIdAndUpdate(req.params.id, req.body);
// //         res.json({ state: 'updated' });
// //     });

// //     router.delete('/:id', async (req, res) => {
// //         await User.findByIdAndRemove(req.params.id);
// //         res.json({ state: 'deleted' });
// //     });
// })();

// module.exports = router;