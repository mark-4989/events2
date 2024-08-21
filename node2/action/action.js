const userModel = require('../models/userModel')

module.exports={
// post meth and call back function
CreateClient: async (req, res, next) => {
    try {
      const client = new userModel(req.body);
      const result = await client.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      next();
    }
  }
}
