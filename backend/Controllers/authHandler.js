const Customer = require("../models/customer");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const Session = require("../models/Session");
const {
  signupSchema,
  loginSchema,
  passwordSchema,
} = require("../validation/auth");

const jwtSecret = "ghdsjvbiuy43870yoh22#$hoihnAkpvbjhTN)3&_N";
var salt = bcrypt.genSaltSync(10);

//Signup Handler
async function signupHandler(req, res) {
  try {
    await signupSchema.validateAsync(req.body);
    let {
      firstName,
      lastName,
      email,
      password,
      mobile,
      address,
      city,
      state,
      pincode,
    } = req.body;

    //check if user is already registered
    let isAvailable = await Customer.findOne({
      where: {
        email: email,
      },
    });
    if (isAvailable) {
      return res.status(409).send({ message: "User already exist" });
    }

    //encrypt the password
    const passwordHash = bcrypt.hashSync(password, salt);
    let newUser = await Customer.create({
      firstName,
      lastName,
      email,
      password: passwordHash,
      mobile,
      address,
      city,
      state,
      pincode,
    });
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.log("Error in creating a customer", error.message);
    res.status(500).json({ message: "Error occurred", error: error.message });
  }
}

//Login Handler
async function loginHandler(req, res) {
  try {
    await loginSchema.validateAsync(req.body);
    const { email, password } = req.body;

    //check if user exist or not
    let isAvailable = await Customer.findOne({
      where: { email: email },
    });
    // const customerString = JSON.stringify(isAvailable);
    // console.log(customerString);
    if (!isAvailable) {
      return res.status(404).send({ message: "User not registered" });
    }

    //check password
    console.log("Password is", isAvailable.password);
    let passwordMatch = bcrypt.compareSync(password, isAvailable.password);
    if (!passwordMatch) {
      return res.status(401).send({ message: "Incorrect password" });
    }
    // console.log("All that under isAvailable", isAvailable);
    var token = jwt.sign({ isAvailable }, jwtSecret, {
      expiresIn: 60 * 60 * 60,
    }); //token expiration time set as  1 hour
    await Session.create({
      userId: isAvailable.customerId,
      jwt: token,
      status: "valid",
    });
    return res
      .status(200)
      .send({ message: "User logged in successfully", token: token });
  } catch (err) {
    return res.send({ message: err.message });
  }
}
async function resetPasswordHandler(req, res) {
  try {
    await loginSchema.validateAsync(req.body);
    const { email } = req.body;
    const isUser = await Customer.findOne({ where: { email: email } });
    if (!isUser) {
      return res.send({
        message: "User is not registered. Please try with correct email.",
      });
    }
    let resetToken = jwt.sign({ email }, jwtSecret, { expiresIn: 120 }); //2 minutes
    // const link=`http://localhost:${process.env.PORT}/reset-password/${email}/${resetToken}`;  //to be removed after creating process.env.PORT and using the same
    const link = `http://localhost:5000/api/v1/auth/createpassword/${resetToken}`;
    return res
      .status(200)
      .send({
        message:
          "Token generated. Valid for 2 minutes. Please reset password within 2 mintes",
        URL: link,
      });
  } catch (err) {
    return res.send({ message: err.message });
  }
}

async function createPasswordHandler(req, res) {
  try {
    await passwordSchema.validateAsync(req.body);
    let { token } = req.params;
    const { new_password, confirmNewPassoword } = req.body;
    const decodedToken = jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        console.log("Error in JWT Verification", err);
        return res.send({ message: "JWT token expired" });
      }
      console.log("Verified token is", decoded);
      return decoded;
    });

    // const decoded = jwt.verify(req.params.token, jwtSecret);   shortcut or can put this function in a common folder
    if (decodedToken.email) {
      const userEmail = await Customer.findOne({
        where: { email: decodedToken.email },
      });
      if (!userEmail) {
        return res.send({ message: "User not found" });
      }
      console.log("UserEmail is", userEmail.email);
      if (new_password !== confirmNewPassoword) {
        return res.send({ message: "Password doesnot match" });
      }
      const new_passwordHash = bcrypt.hashSync(new_password, salt);
      const updatePassword = await Customer.update(
        { password: new_passwordHash },
        { where: { email: userEmail.email } }
      );
      return res.send({
        message: "Password is updated. Please login with new password.",
        URL: `https://localhost:5000/api/v1/auth/login`,
      });
    } else {
      res.send({ message: "Token expired" });
    }
  } catch (err) {
    return res.send({
      message: "confirm password should match with the new password entered",
      error: err.message,
    });
  }
}
module.exports = {
  signupHandler,
  loginHandler,
  resetPasswordHandler,
  createPasswordHandler,
};
