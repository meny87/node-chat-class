[{
  id: 'aksmdlaksmd',
  name: 'Emmanuel',
  room: 'Office'
}]

class Users{
  constructor(){
    this.users = [];
  }

  addUser(id, name, room){
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id){
    var user = this.getUser(id);
    if (user){
      this.users = this.users.filter((user) => user.id !== id);
    }
    return user;
  }

  getUser(id){
    var filtered = this.users.filter((user) => user.id === id)[0];
    return filtered;
  }

  getUserList(room){
    var roomFiltered = this.users.filter((user) => user.room === room);
    var res = roomFiltered.map((user) => user.name);

    return res;

  }
}

module.exports = {Users};
