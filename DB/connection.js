const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("drop-cart server connected sucessfully to mongoDB atlas");
}).catch((err)=>{
    console.log(`mongoDB connection failed, error:${err}`);
})