/**
 * Sparing.js
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
     team_a: {
         model: 'team'
     },
     team_b: {
         model: 'team'
     },
     area: {
         model: 'area'
     },
     date_playing: {
         type: 'string'
     },
     status: {
         type: 'string'
     }
  }
};
