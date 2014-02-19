var tap = require('tap');
var od = require('../index.js');

tap.test('make sure we can find nested properties', function(t) {
  var find = od('one.two.three')
    , found = find({one: {two: {three: 'its so dark in here'}}});

  t.equal(found, 'its so dark in here', 'check the find result');
  t.end();
});

tap.test('alternate syntax', function(t) {
  var obj = { one: { two: 'stuff' } };

  t.equal(od('one.two', obj), 'stuff');
  t.end();

});

tap.test('make sure we can find non-nested properties', function(t) {
  var find = od('findMe')
    , found = find({findMe: 'top shelf, baby'});

  t.equal(found, 'top shelf, baby', 'check the single property find result');
  t.end();
});

tap.test('ensure arrays are returned properly', function(t) {
  var find = od('findMe')
    , found = find({findMe: [1,2,3]});

  t.deepEqual(found, [1,2,3], 'check the returned array is as expected');
  t.end();
});

tap.test('ensure objects are returned properly', function(t) {
  var find = od('one.two')
    , obj = {
        one: {
          two: { thing: 'Birthday Present' }
        }
      }
    , found = find(obj);

  t.deepEqual(found, { thing: 'Birthday Present' }, 'check the returned object is as expected');
  t.end();
});

tap.test('make sure undefined is properly returned when a property isnt found', function(t) {
  var find = od('inconsequential')
    , notFound = find({}) || find() || find(null) || find(undefined);

  t.equal(notFound, undefined, 'check that we got undefined');
  t.end();
});

