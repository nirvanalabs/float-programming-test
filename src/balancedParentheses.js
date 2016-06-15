'use strict';

/*
 * balancedParentheses
 *
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 *
 * Eg:
 *
 *   input: '(x + y)'
 *   returns: true
 *
 *   input: '(x + y'
 *   returns: false
 *
 *   input: 'foo bar baz'
 *   returns: false
 *
 *   input: ''
 *   returns: false
 */
module.exports = ( input ) => {
  var stacks = [];
  var wrongPosition = true;
  for(var i=0;i<input.length;i++){
    if(input[i] === '('){
      stacks.push(1);
    }else{
      if(input[i] === ')'){
        if(stacks.length > 0){
          wrongPosition = false;
          stacks.pop(0);
        }else{
          wrongPosition = true;
          break;
        }
      }
    }
  }
  return (!wrongPosition && stacks.length==0);  
};
