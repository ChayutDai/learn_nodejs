const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33,11);

  if( res !== 44){
    throw new Error('value not correct');    
  }
  
});

it('should square a number' , () => {
  var res = utils.square(4);
  if( res !== 9){
      throw new Error(`Expect 9, but got ${res}`);
  }
}); 