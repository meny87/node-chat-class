const expect = require('expect');

const {
  Users
} = require('./users');

describe('Users', () => {

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'office'
    }, {

      id: '2',
      name: 'Jen',
      room: 'react'
    }, {

      id: '3',
      name: 'Julie',
      room: 'office'
    }, ]
  });

  it('should add new users', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Emmanuel',
      room: 'office'
    };

    var responseUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toMatchObject([user]);
  });

  it('should return names of "office" room', ()=>{
    var userList = users.getUserList('office');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should remove a valid user', ()=>{
    var userToBeRemoved = users.users[0];
    var usersList = users.removeUser(userToBeRemoved.id);
    expect(usersList).not.toContain(userToBeRemoved);
  });

  it('should not remove a invalid user', ()=>{
    var usersList = users.removeUser("20");
    expect(usersList).toBeFalsy();
  });

  it('should find user', ()=>{
    var userToBeFound = users.users[1];
    var foundUser = users.getUser(userToBeFound.id);

    expect(foundUser).toBe(userToBeFound);
  });

  it('should not find invalid user', ()=>{
    var foundUser = users.getUser("20");
    expect(foundUser).toBeFalsy;
  });
});
