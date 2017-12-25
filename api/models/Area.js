/**
 * Area.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
     id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true
     },
     name: {
        type: 'string'
     },
     lat: {
        type: 'double'
     },
     lon: {
        type: 'double'
     },
     address: {
        type: 'string'
     },
     header_photo: {
        type: 'string'
     },
     phone_number: {
        type: 'string'
     }
  }
};
