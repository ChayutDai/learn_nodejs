const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33,11);

  expect(res).toBe(44);
  //if( res !== 44){
  //  throw new Error('value not correct');    
  //}
  
});

it('should async add two number', (done) => {
  utils.asyncAdd(4, 3,(sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number' , () => {
  var res = utils.square(3);
  
  expect(res).toBe(9).toBeA('number');
  //if( res !== 9){
  //    throw new Error(`Expect 9, but got ${res}`);
  //}
}); 

it('should square a number',(done) => {
  var res = utils.asyncSquare(5,(res) => {
    expect(res).toBe(25).toBeA('number');
    done();
  });
  
});

it('should expect some value',()=>{
  //expect(12).toNotBe(12);
  expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
});

it('should set firstName and lastName', () => {
  var user = {location: 'Thailand' , age: 25};
  var res = utils.setName(user, 'Chayut Dookandee');
  //expect(user).toEqual(res);
  expect(res).toInclude({
    firstName: 'Chayut',
    lastName: 'Dookandee'
  })
});
