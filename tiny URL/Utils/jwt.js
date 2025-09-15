import jwt from "jsonwebtoken";

export const signJWT = (payload) => {
  try {
    if (!payload) {
      throw new Error("Payload is required for JWT signing.");
    }

    if (!process.env.SECRET_KEY) {
      throw new Error("SECRET_KEY environment variable is not defined.");
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "1m",
    });
    console.log(token);
    return token; 
  } catch (error) {
    console.log(error);
    throw error; 
  }
};

export const verifyJWT=(token)=>{
    try{
        jwt.verify(token,process.env.SECRET_KEY);
        return true;
    }
    catch(error){
      console.log(error);


    }
}
