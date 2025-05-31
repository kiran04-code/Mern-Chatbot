import mongoose from 'mongoose';
const  userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    profileImage:{
        type:String,
        default:"https://t4.ftcdn.net/jpg/06/34/25/63/360_F_634256300_1J563CXPkUJR2nteelgbfQxQz4MvFT5h.jpg"
    }
})

const  user = mongoose.model('User', userSchema);
export default user;