var test, a, b, c, d, e, f;
test = function (value, callback) {
  console.log('called');
  callback(value);
};
var _$parallel_done_0 = 0;
var _$errors_0 = [];
(function (_$cont) {
  test(1, function () {
    ++_$parallel_done_0;
    a = arguments[0];
    _$cont();
  });
  test(2, function () {
    ++_$parallel_done_0;
    b = arguments[0];
    _$cont();
  });
  test(3, function () {
    ++_$parallel_done_0;
    c = arguments[0];
    _$cont();
  });
}(function (_$err) {
  if (_$err)
    _$errors_0.push(_$err);
  if (_$parallel_done_0 !== 3)
    return;
  if (_$errors_0.length > 0)
    throw _$errors_0;
  _$parallel_done_0 = undefined;
  _$err = undefined;
  _$errors_0 = undefined;
  console.log(a, b, c);
  var _$parallel_done_1 = 0;
  var _$errors_1 = [];
  (function (_$cont) {
    test(4, function () {
      ++_$parallel_done_1;
      d = arguments[0];
      _$cont();
    });
    test(5, function () {
      ++_$parallel_done_1;
      e = arguments[0];
      _$cont();
    });
    test(6, function () {
      ++_$parallel_done_1;
      f = arguments[0];
      _$cont();
    });
  }(function (_$err) {
    if (_$err)
      _$errors_1.push(_$err);
    if (_$parallel_done_1 !== 3)
      return;
    if (_$errors_1.length > 0)
      throw _$errors_1;
    _$parallel_done_1 = undefined;
    _$err = undefined;
    _$errors_1 = undefined;
    console.log(d, e, f);
  }));
}));
/* Generated by Continuation.js v0.1.2 */