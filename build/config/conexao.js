"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }const { Pool, Client } = require('pg');
var _databaseConfig = require('./databaseConfig'); var _databaseConfig2 = _interopRequireDefault(_databaseConfig);


class Conexao{

    constructor(){
        this.conexao();
    }
     conexao(){
        this.conexao=new Pool(_databaseConfig2.default);
     }

}
exports. default = new Conexao().conexao;
