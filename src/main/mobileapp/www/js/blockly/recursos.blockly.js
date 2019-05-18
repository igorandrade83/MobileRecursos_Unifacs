window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Recursos = window.blockly.js.blockly.Recursos || {};

/**
 * recursos
 */
window.blockly.js.blockly.Recursos.vibrar = function() {
 var item;
  this.cronapi.cordova.vibrate(500);
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Recursos.bancoSQLite = function() {
 var item;
  this.cronapi.cordova.database.openDatabase('banco');
  this.cronapi.cordova.database.executeSql('banco', 'CREATE TABLE funcionario ( id INT PRIMARY KEY NOT NULL, idade int NOT NULL );', null, function(sender_item) {
      item = sender_item;
    this.cronapi.cordova.database.executeSql('banco', 'insert into funcionario values (1, 22);', null, function(sender_item) {
        item = sender_item;
      this.cronapi.cordova.database.executeSql('banco', 'select * from funcionario;', null, function(sender_item) {
          item = sender_item;
        this.cronapi.screen.notify('success',String('Tudo funcionou!!!') + String(item));
      }.bind(this), function(sender_item) {
          item = sender_item;
        this.cronapi.screen.notify('error',String('Erro Select:  ') + String(item));
      }.bind(this));
    }.bind(this), function(sender_item) {
        item = sender_item;
      this.cronapi.screen.notify('error',String('Erro Insert:  ') + String(item));
    }.bind(this));
  }.bind(this), function(sender_item) {
      item = sender_item;
    this.cronapi.screen.notify('error',String('Erro2 Create: ') + String(item));
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Recursos.localizacao = function() {
 var item;
  this.cronapi.cordova.geolocation.getCurrentPosition(function(sender_item) {
      item = sender_item;
    this.cronapi.screen.notify('success',[this.cronapi.object.getProperty(item, 'coords.latitude'),', ',this.cronapi.object.getProperty(item, 'coords.longitude')].join(''));
  }.bind(this), function(sender_item) {
      item = sender_item;
    this.cronapi.screen.notify('error',item);
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Recursos.Informacao = function() {
 var item;
  this.cronapi.screen.notify('success',this.cronapi.cordova.device.getDeviceInfo('model'));
}
