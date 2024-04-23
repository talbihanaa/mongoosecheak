const mongoose =require('mongoose');


const connectdb =async()=>{
    // let url=process.env.MONGO_URI;

    // console.log(url);
    await mongoose.connect("mongodb+srv://hanatalbi87:9HevDdTYNte7bn6v@cluster0.cucvqei.mongodb.net/mydb",{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('db connected');
    })
    .catch((err)=>{
        console.error("errro in db connect")
    })
}


module.exports = connectdb