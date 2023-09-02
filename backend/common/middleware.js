var jwt = require("jsonwebtoken");
const jwtSecret = "ghdsjvbiuy43870yoh22#$hoihnAkpvbjhTN)3&_N";

//check login
function checkLogin(req, res, next) {
  //check header
  let authHeader = req.header("Authorization");
  //   console.log(authHeader);

  //verify the token
  jwt.verify(authHeader, jwtSecret, function (err, decoded) {
    if (err) {
      console.log("ERROR is:", err);
      return res
        .status(401)
        .send({ message: "Session expired. Please login again." });
    }
    console.log("decoded data with customerID", decoded.isAvailable);
    req.body.userData = decoded.isAvailable;
    console.log("Request Body is", req.body);
    next();
  });
}
module.exports = { checkLogin };
