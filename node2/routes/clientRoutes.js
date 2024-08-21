const express =require ('express')
const ClientRoute = require('../action/action')
const Routes = express.Router()

    Routes.post('./CreateClient', ClientRoute.CreateClient)

    module.exports = Routes;
