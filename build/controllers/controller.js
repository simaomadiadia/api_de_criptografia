"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _encriptsModeljs = require('../models/encriptsModel.js'); var _encriptsModeljs2 = _interopRequireDefault(_encriptsModeljs);

const route= new (0, _express.Router)();

route.get("/",(req,res)=>{
 res.json({"msg":"deu certo"});
});
route.get("/test",(req,res)=>{
 res.json({"msg":"deu certo . ok"});
});
route.get("/encripts/:id",_encriptsModeljs2.default.getEncripts);
route.post("/encripts",_encriptsModeljs2.default.postEncripts);




exports. default = route;
