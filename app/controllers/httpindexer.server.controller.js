'use strict';

/*http get*/
exports.index = function(req, res){
    console.log('Assume an HTTP Get was made...');
    res.json('Assume that an HTTP Get was made and this returned a JSON list...');
};
