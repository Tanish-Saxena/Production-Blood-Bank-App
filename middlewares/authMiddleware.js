const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader) {
      return res.status(401).send({
        success: false,
        message: "Authorization header missing",
      });
    }

    const token = authorizationHeader.split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET, function (err, decode) {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth Failed",
        });
      } else {
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error: error,
      message: "Auth Failed",
    });
  }
};
