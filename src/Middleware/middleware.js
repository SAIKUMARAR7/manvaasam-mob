const jwt = require('jsonwebtoken');
require("dotenv").config();
const {ResponseBody} = require('../utils/response')

exports.authenticateToken=function (req, res, next) {
  const authHeader = req.headers['authorization']
  

  if (authHeader == null) 
  {
    const response = new ResponseBody(false,"UnAuthorized");
    res.send(response)
  }
  //return res.sendStatus(401)
  const token = authHeader.split(' ')[1]
  jwt.verify(token, process.env.JWT_KEY , (err,user) => {
    if (err) {
      //return res.sendStatus(403)
      const response = new ResponseBody(false,"Forbidden");
        res.send(response)
    }
    req.user = user

    next()
  })
}
