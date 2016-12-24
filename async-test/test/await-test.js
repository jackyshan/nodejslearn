const hello = require('../hello')
const assert = require('assert')

it('#async function', async () => {
    let r = await hello();
    assert.strictEqual(r, 15);
});
