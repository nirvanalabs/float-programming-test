'use strict';

/*
 * deepFinder
 *
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 *
 */
module.exports = ( input, test ) => {
  var getValues = obj =>{
    return Object.keys(obj).map(key => obj[key]);
  }

  //  add deep finder function
  var deepFinder = function(value,func){
    var typeClass = typeof(value);
    if(!typeClass || typeClass==='undefined' || typeClass==='function'){
      return []
    }
    if( typeClass === 'boolean' || typeClass==='string' || typeClass==='number'){
      if(func(value)){
        return [value];
      }
      return [];
    }
    if(Array.isArray(value)){
      if(value.length === 0){
        return [];
      }
      //  NOTE
      // the recursively function has change position
      // this does not care duplicated values
      return deepFinder(value.pop(0), func).concat(deepFinder(value, func));
    }
    return deepFinder(getValues(value), func);
  }
  return deepFinder(input, test).reverse();
};
