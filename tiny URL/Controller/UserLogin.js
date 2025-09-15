import { signJWT } from "../Utils/jwt.js";

export const UserLogin = async (req, res) => {
  const { email,userId } = req.body;
  try {
const userFound={
    email:"Farhan ullah",
    userId:"123",
};
const jwtToken=signJWT(userFound);
res.status(200).json({
    ok:true,
    jwtToken:jwtToken,
});
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
    });
  }
};