'use strict';

/*
 * finder
 *
 * Takes an input and a test function and returns any values in
 * the input that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'allegory' ]
 *
 */
module.exports = ( input, test ) => {
  var rt = [];
  if(!input || input.length==0){
    return rt;
  }
  if(Array.isArray(input)){
    for(var i=0;i<input.length; i++){
      if((typeof(input[i]) !== 'object') && test(input[i])){
        rt.push(input[i]);
      }
    }
  }

  return rt;
};
