var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
  it('should generate correct message', () => {
    var from = 'emmanuel';
    var text = 'Hey There!';
    var res = generateMessage(from, text);

    expect(res).toMatchObject({from,text});
    expect(typeof(res.createdAt)).toBe("number");
  });
});

describe('generateLocationMessage', ()=>{
  it('should generate correct location object', ()=>{
    var from = 'meny';
    var url = `http://www.google.com/maps?q=1,1`
    var obj = generateLocationMessage('meny', 1, 1);

    expect(obj).toMatchObject({from, url});
    expect(typeof(obj.createdAt)).toBe("number");
  })
});
