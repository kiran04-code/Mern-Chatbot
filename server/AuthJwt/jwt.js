import JWT from "jsonwebtoken"
const sreatKey = process.env.JWT
export  function createToken (user){
  const payload = {
    _id:user._id,
    email:user.email
  }

  const token = JWT.sign(payload,sreatKey)
  return token 
}