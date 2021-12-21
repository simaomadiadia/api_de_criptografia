"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _controller = require('./controllers/controller'); var _controller2 = _interopRequireDefault(_controller);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);


class App{
   constructor(){
      this.server=_express2.default.call(void 0, );
      this.middlewares();
      this.routes();
   }

   middlewares(){
      this.server.use(_express2.default.json());
      this.server.use(_cors2.default.call(void 0, ));
   }
   routes(){
      this.server.use(_controller2.default);
   }

}

exports. default = new App().server;
