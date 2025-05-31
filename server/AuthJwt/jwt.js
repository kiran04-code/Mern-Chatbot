import JWT from "jsonwebtoken";

const secretKey = "kiran"; // ✅ corrected variable name

export function createToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  // ✅ add expiresIn (optional but recommended)
  const token = JWT.sign(payload, secretKey, { expiresIn: "1d" });
  return token;
}

export function validUser(token){
 const paylaod = JWT.verify(token,secretKey)
 return paylaod
}
