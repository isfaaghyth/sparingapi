/**
 * Score.js
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
     sparing: {
        model: 'sparing'
     },
     team_a: {
        type: 'integer'
     },
     team_b: {
        type: 'integer'
     }
  }
};
