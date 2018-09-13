var expect = require('expect');
var {generateMessage} = require('./message');


describe('generateMessage', () => {
  it('should generate correct message', () => {
    var from = 'emmanuel';
    var text = 'Hey There!';
    var res = generateMessage(from, text);

    expect(res).toMatchObject({from,text});
    expect(typeof(res.createdAt)).toBe("number");
  });
});
