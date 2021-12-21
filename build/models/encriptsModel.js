"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto);
var _frontend = require('postgres/lib/frontend');
const { Pool, Client } = require('pg')
var _conexao = require('../config/conexao'); var _conexao2 = _interopRequireDefault(_conexao);
exports.getEncripts= (req,res)=>{
    const id= req.params.id;

   _conexao2.default.query(`SELECT * from texts where id=${id} `, (err, result,fields) => {

   if(err){
      return res.json({"Erro":err});
   }else{
    if(result.rowCount>=1){
      const alg='aes-256-ctr';
      const pwd='abcdabcd';
      const encripted_name=result.rows[0].name;
      const decipher=_crypto2.default.createCipher(alg,pwd);
      const decrypted_name=decipher.update(encripted_name,'hex','utf8');
      
        return res.json({"name":decrypted_name});
    }else{
      return res.status(404).json({"msg":"usuario not found"});
    }
   }

 
})

}

exports.postEncripts= (req,res)=>{
     const {name} =req.body;

     if(req.body.name){

      const alg='aes-256-ctr';
      const pwd='abcdabcd';
      const cipher=_crypto2.default.createCipher(alg,pwd);
      const encripted_name=cipher.update(name,'utf8','hex');
     
      _conexao2.default.query(`INSERT INTO texts(name) VALUES ('${encripted_name}') RETURNING id `, (err,result,fields) => {

         if(err){
            return res.json({"Erro":err,"text":encripted_name});
         }else{
             
            return res.json({"id":result.rows[0].id,"encripted_name": encripted_name})
         }
      
      })

      
     }else{
        return res.json({"code": "E_VALIDATION_FAILURE","message": "O campo \"name\" é obrigatório"});
     }
     
}