webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	__webpack_require__(2);
	
	var _Root = __webpack_require__(299);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(404);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactTapEventPlugin = __webpack_require__(812);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _userspaceSdkJs = __webpack_require__(580);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactTapEventPlugin2.default)();
	(0, _userspaceSdkJs.watchLogin)();
	
	_reactDom2.default.render(_react2.default.createElement(_Root2.default, null), document.getElementById('react-view'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "main.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(3);
	
	__webpack_require__(294);
	
	__webpack_require__(296);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(295)))

/***/ },
/* 295 */,
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(297);
	module.exports = __webpack_require__(10).RegExp.escape;

/***/ },
/* 297 */,
/* 298 */,
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _routes = __webpack_require__(330);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _reactRedux = __webpack_require__(552);
	
	var _store = __webpack_require__(757);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Routes = (0, _routes2.default)(_store2.default);
	
	var Root = function Root() {
	  return _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: _store2.default },
	    _react2.default.createElement(Routes, null)
	  );
	};
	
	exports.default = Root;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Root.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(331);
	
	var _reactRouterRedux = __webpack_require__(394);
	
	var _reactRouterApplyMiddleware = __webpack_require__(399);
	
	var _reactRouterApplyMiddleware2 = _interopRequireDefault(_reactRouterApplyMiddleware);
	
	var _reactRouterRelativeLinks = __webpack_require__(400);
	
	var _view = __webpack_require__(402);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var routes = [{
	    component: (0, _reactRouter.withRouter)(_view.App),
	    path: '/',
	    indexRoute: { component: _view.Home }
	}];
	
	exports.default = function (store) {
	    return function () {
	        return _react2.default.createElement(_reactRouter.Router, { routes: routes,
	            history: (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.hashHistory, store),
	            render: (0, _reactRouterApplyMiddleware2.default)((0, _reactRouterRelativeLinks.useRelativeLinks)()) });
	    };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "routes.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.PropTypes = exports.RoutingContext = exports.RouterContext = exports.createRoutes = exports.useRoutes = exports.RouteContext = exports.Lifecycle = exports.History = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;
	
	var _RouteUtils = __webpack_require__(332);
	
	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});
	
	var _PropTypes2 = __webpack_require__(333);
	
	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.routerShape;
	  }
	});
	
	var _PatternUtils = __webpack_require__(338);
	
	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});
	
	var _Router2 = __webpack_require__(340);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _Link2 = __webpack_require__(371);
	
	var _Link3 = _interopRequireDefault(_Link2);
	
	var _IndexLink2 = __webpack_require__(372);
	
	var _IndexLink3 = _interopRequireDefault(_IndexLink2);
	
	var _withRouter2 = __webpack_require__(373);
	
	var _withRouter3 = _interopRequireDefault(_withRouter2);
	
	var _IndexRedirect2 = __webpack_require__(375);
	
	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);
	
	var _IndexRoute2 = __webpack_require__(377);
	
	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);
	
	var _Redirect2 = __webpack_require__(376);
	
	var _Redirect3 = _interopRequireDefault(_Redirect2);
	
	var _Route2 = __webpack_require__(378);
	
	var _Route3 = _interopRequireDefault(_Route2);
	
	var _History2 = __webpack_require__(379);
	
	var _History3 = _interopRequireDefault(_History2);
	
	var _Lifecycle2 = __webpack_require__(380);
	
	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);
	
	var _RouteContext2 = __webpack_require__(381);
	
	var _RouteContext3 = _interopRequireDefault(_RouteContext2);
	
	var _useRoutes2 = __webpack_require__(382);
	
	var _useRoutes3 = _interopRequireDefault(_useRoutes2);
	
	var _RouterContext2 = __webpack_require__(368);
	
	var _RouterContext3 = _interopRequireDefault(_RouterContext2);
	
	var _RoutingContext2 = __webpack_require__(383);
	
	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);
	
	var _PropTypes3 = _interopRequireDefault(_PropTypes2);
	
	var _match2 = __webpack_require__(384);
	
	var _match3 = _interopRequireDefault(_match2);
	
	var _useRouterHistory2 = __webpack_require__(388);
	
	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);
	
	var _applyRouterMiddleware2 = __webpack_require__(389);
	
	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);
	
	var _browserHistory2 = __webpack_require__(390);
	
	var _browserHistory3 = _interopRequireDefault(_browserHistory2);
	
	var _hashHistory2 = __webpack_require__(393);
	
	var _hashHistory3 = _interopRequireDefault(_hashHistory2);
	
	var _createMemoryHistory2 = __webpack_require__(385);
	
	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Router = _Router3.default; /* components */
	
	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;
	
	/* components (configuration) */
	
	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;
	
	/* mixins */
	
	exports.History = _History3.default;
	exports.Lifecycle = _Lifecycle3.default;
	exports.RouteContext = _RouteContext3.default;
	
	/* utils */
	
	exports.useRoutes = _useRoutes3.default;
	exports.RouterContext = _RouterContext3.default;
	exports.RoutingContext = _RoutingContext3.default;
	exports.PropTypes = _PropTypes3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;
	
	/* histories */
	
	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}
	
	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}
	
	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}
	
	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);
	
	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);
	
	    if (childRoutes.length) route.childRoutes = childRoutes;
	
	    delete route.children;
	  }
	
	  return route;
	}
	
	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];
	
	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);
	
	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });
	
	  return routes;
	}
	
	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }
	
	  return routes;
	}

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;
	
	var _react = __webpack_require__(300);
	
	var _deprecateObjectProperties = __webpack_require__(334);
	
	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);
	
	var _InternalPropTypes = __webpack_require__(337);
	
	var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});
	
	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});
	
	// Deprecated stuff below:
	
	var falsy = exports.falsy = InternalPropTypes.falsy;
	var history = exports.history = InternalPropTypes.history;
	var location = exports.location = locationShape;
	var component = exports.component = InternalPropTypes.component;
	var components = exports.components = InternalPropTypes.components;
	var route = exports.route = InternalPropTypes.route;
	var routes = exports.routes = InternalPropTypes.routes;
	var router = exports.router = routerShape;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var deprecatePropType = function deprecatePropType(propType, message) {
	      return function () {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	        return propType.apply(undefined, arguments);
	      };
	    };
	
	    var deprecateInternalPropType = function deprecateInternalPropType(propType) {
	      return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
	    };
	
	    var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
	      return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
	    };
	
	    exports.falsy = falsy = deprecateInternalPropType(falsy);
	    exports.history = history = deprecateInternalPropType(history);
	    exports.component = component = deprecateInternalPropType(component);
	    exports.components = components = deprecateInternalPropType(components);
	    exports.route = route = deprecateInternalPropType(route);
	    exports.routes = routes = deprecateInternalPropType(routes);
	
	    exports.location = location = deprecateRenamedPropType(location, 'location');
	    exports.router = router = deprecateRenamedPropType(router, 'router');
	  })();
	}
	
	var defaultExport = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route,
	  // For some reason, routes was never here.
	  router: router
	};
	
	if (process.env.NODE_ENV !== 'production') {
	  defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
	}
	
	exports.default = defaultExport;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.canUseMembrane = undefined;
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var canUseMembrane = exports.canUseMembrane = false;
	
	// No-op by default.
	var deprecateObjectProperties = function deprecateObjectProperties(object) {
	  return object;
	};
	
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    if (Object.defineProperty({}, 'x', {
	      get: function get() {
	        return true;
	      }
	    }).x) {
	      exports.canUseMembrane = canUseMembrane = true;
	    }
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	
	  if (canUseMembrane) {
	    deprecateObjectProperties = function deprecateObjectProperties(object, message) {
	      // Wrap the deprecated object in a membrane to warn on property access.
	      var membrane = {};
	
	      var _loop = function _loop(prop) {
	        if (!Object.prototype.hasOwnProperty.call(object, prop)) {
	          return 'continue';
	        }
	
	        if (typeof object[prop] === 'function') {
	          // Can't use fat arrow here because of use of arguments below.
	          membrane[prop] = function () {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop].apply(object, arguments);
	          };
	          return 'continue';
	        }
	
	        // These properties are non-enumerable to prevent React dev tools from
	        // seeing them and causing spurious warnings when accessing them. In
	        // principle this could be done with a proxy, but support for the
	        // ownKeys trap on proxies is not universal, even among browsers that
	        // otherwise support proxies.
	        Object.defineProperty(membrane, prop, {
	          get: function get() {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop];
	          }
	        });
	      };
	
	      for (var prop in object) {
	        var _ret = _loop(prop);
	
	        if (_ret === 'continue') continue;
	      }
	
	      return membrane;
	    };
	  }
	}
	
	exports.default = deprecateObjectProperties;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;
	
	var _warning = __webpack_require__(336);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var warned = {};
	
	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }
	
	    warned[message] = true;
	  }
	
	  message = '[react-router] ' + message;
	
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}
	
	function _resetWarned() {
	  warned = {};
	}

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;
	
	var _react = __webpack_require__(300);
	
	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}
	
	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});
	
	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;
	
	var _invariant = __webpack_require__(339);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}
	
	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];
	
	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }
	
	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }
	
	    tokens.push(match[0]);
	
	    lastIndex = matcher.lastIndex;
	  }
	
	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }
	
	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}
	
	var CompiledPatternsCache = Object.create(null);
	
	function compilePattern(pattern) {
	  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);
	
	  return CompiledPatternsCache[pattern];
	}
	
	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }
	
	  var _compilePattern2 = compilePattern(pattern);
	
	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;
	
	
	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }
	
	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }
	
	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }
	
	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);
	
	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }
	
	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }
	
	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}
	
	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}
	
	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }
	
	  var paramNames = match.paramNames;
	  var paramValues = match.paramValues;
	
	  var params = {};
	
	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });
	
	  return params;
	}
	
	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};
	
	  var _compilePattern3 = compilePattern(pattern);
	
	  var tokens = _compilePattern3.tokens;
	
	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;
	
	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];
	
	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;
	
	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;
	
	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];
	
	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;
	
	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }
	
	  return pathname.replace(/\/+/g, '/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 339 */,
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createHashHistory = __webpack_require__(341);
	
	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);
	
	var _useQueries = __webpack_require__(357);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	var _invariant = __webpack_require__(339);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createTransitionManager = __webpack_require__(360);
	
	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
	
	var _InternalPropTypes = __webpack_require__(337);
	
	var _RouterContext = __webpack_require__(368);
	
	var _RouterContext2 = _interopRequireDefault(_RouterContext);
	
	var _RouteUtils = __webpack_require__(332);
	
	var _RouterUtils = __webpack_require__(370);
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function isDeprecatedHistory(history) {
	  return !history || !history.__v2_compatible__;
	}
	
	/* istanbul ignore next: sanity check */
	function isUnsupportedHistory(history) {
	  // v3 histories expose getCurrentLocation, but aren't currently supported.
	  return history && history.getCurrentLocation;
	}
	
	var _React$PropTypes = _react2.default.PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;
	
	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */
	
	var Router = _react2.default.createClass({
	  displayName: 'Router',
	
	
	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,
	
	    // Deprecated:
	    parseQueryString: func,
	    stringifyQuery: func,
	
	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;
	
	    var _props = this.props;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;
	
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;
	
	    var _createRouterObjects = this.createRouterObjects();
	
	    var history = _createRouterObjects.history;
	    var transitionManager = _createRouterObjects.transitionManager;
	    var router = _createRouterObjects.router;
	
	
	    this._unlisten = transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	
	    this.history = history;
	    this.router = router;
	  },
	  createRouterObjects: function createRouterObjects() {
	    var matchContext = this.props.matchContext;
	
	    if (matchContext) {
	      return matchContext;
	    }
	
	    var history = this.props.history;
	    var _props2 = this.props;
	    var routes = _props2.routes;
	    var children = _props2.children;
	
	
	    !!isUnsupportedHistory(history) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v3.x. ' + 'This version of React Router is not compatible with v3 history ' + 'objects. Please use history v2.x instead.') : (0, _invariant2.default)(false) : void 0;
	
	    if (isDeprecatedHistory(history)) {
	      history = this.wrapDeprecatedHistory(history);
	    }
	
	    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	    var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);
	
	    return { history: routingHistory, transitionManager: transitionManager, router: router };
	  },
	  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
	    var _props3 = this.props;
	    var parseQueryString = _props3.parseQueryString;
	    var stringifyQuery = _props3.stringifyQuery;
	
	
	    var createHistory = void 0;
	    if (history) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
	      createHistory = function createHistory() {
	        return history;
	      };
	    } else {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
	      createHistory = _createHashHistory2.default;
	    }
	
	    return (0, _useQueries2.default)(createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
	  },
	
	
	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;
	
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props4 = this.props;
	    var createElement = _props4.createElement;
	    var render = _props4.render;
	
	    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);
	
	    if (location == null) return null; // Async match
	
	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });
	
	    return render(_extends({}, props, {
	      history: this.history,
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});
	
	exports.default = Router;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(342);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(339);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Actions = __webpack_require__(343);
	
	var _PathUtils = __webpack_require__(344);
	
	var _ExecutionEnvironment = __webpack_require__(345);
	
	var _DOMUtils = __webpack_require__(346);
	
	var _DOMStateStorage = __webpack_require__(347);
	
	var _createDOMHistory = __webpack_require__(348);
	
	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);
	
	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}
	
	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();
	
	  if (isAbsolutePath(path)) return true;
	
	  _DOMUtils.replaceHashPath('/' + path);
	
	  return false;
	}
	
	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}
	
	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}
	
	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}
	
	var DefaultQueryKey = '_k';
	
	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;
	
	  var queryKey = options.queryKey;
	
	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;
	
	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();
	
	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);
	
	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }
	
	    var location = _PathUtils.parsePath(path);
	
	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }
	
	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;
	
	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.
	
	      transitionTo(getCurrentLocation());
	    }
	
	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);
	
	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }
	
	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;
	
	    if (action === _Actions.POP) return; // Nothing to do.
	
	    var path = (basename || '') + pathname + search;
	
	    if (queryKey) {
	      path = addQueryStringValueToPath(path, queryKey, key);
	      _DOMStateStorage.saveState(key, state);
	    } else {
	      // Drop key and state.
	      location.key = location.state = null;
	    }
	
	    var currentHash = _DOMUtils.getHashPath();
	
	    if (action === _Actions.PUSH) {
	      if (currentHash !== path) {
	        window.location.hash = path;
	      } else {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
	      }
	    } else if (currentHash !== path) {
	      // REPLACE
	      _DOMUtils.replaceHashPath(path);
	    }
	  }
	
	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));
	
	  var listenerCount = 0,
	      stopHashChangeListener = undefined;
	
	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);
	
	    var unlisten = history.listenBefore(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }
	
	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);
	
	    var unlisten = history.listen(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }
	
	  function push(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
	
	    history.push(location);
	  }
	
	  function replace(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
	
	    history.replace(location);
	  }
	
	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();
	
	  function go(n) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;
	
	    history.go(n);
	  }
	
	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }
	
	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);
	
	    history.registerTransitionHook(hook);
	  }
	
	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);
	
	    if (--listenerCount === 0) stopHashChangeListener();
	  }
	
	  // deprecated
	  function pushState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
	
	    history.pushState(state, path);
	  }
	
	  // deprecated
	  function replaceState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
	
	    history.replaceState(state, path);
	  }
	
	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    push: push,
	    replace: replace,
	    go: go,
	    createHref: createHref,
	
	    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
	    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
	    pushState: pushState, // deprecated - warning is in createHistory
	    replaceState: replaceState // deprecated - warning is in createHistory
	  });
	}
	
	exports['default'] = createHashHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 343 */
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';
	
	exports.__esModule = true;
	var PUSH = 'PUSH';
	
	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';
	
	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';
	
	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.extractPath = extractPath;
	exports.parsePath = parsePath;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(342);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);
	
	  if (match == null) return string;
	
	  return string.substring(match[0].length);
	}
	
	function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';
	
	  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;
	
	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }
	
	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }
	
	  if (pathname === '') pathname = '/';
	
	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 345 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 346 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;
	
	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}
	
	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}
	
	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}
	
	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}
	
	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}
	
	function go(n) {
	  if (n) window.history.go(n);
	}
	
	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}
	
	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */
	
	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}
	
	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	
	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*eslint-disable no-empty */
	'use strict';
	
	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(342);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var KeyPrefix = '@@History/';
	var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];
	
	var SecurityError = 'SecurityError';
	
	function createKey(key) {
	  return KeyPrefix + key;
	}
	
	function saveState(key, state) {
	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;
	
	      return;
	    }
	
	    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;
	
	      return;
	    }
	
	    throw error;
	  }
	}
	
	function readState(key) {
	  var json = undefined;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;
	
	      return null;
	    }
	  }
	
	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }
	
	  return null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(339);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ExecutionEnvironment = __webpack_require__(345);
	
	var _DOMUtils = __webpack_require__(346);
	
	var _createHistory = __webpack_require__(349);
	
	var _createHistory2 = _interopRequireDefault(_createHistory);
	
	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));
	
	  function listen(listener) {
	    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;
	
	    return history.listen(listener);
	  }
	
	  return _extends({}, history, {
	    listen: listen
	  });
	}
	
	exports['default'] = createDOMHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(342);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _deepEqual = __webpack_require__(350);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _PathUtils = __webpack_require__(344);
	
	var _AsyncUtils = __webpack_require__(353);
	
	var _Actions = __webpack_require__(343);
	
	var _createLocation2 = __webpack_require__(354);
	
	var _createLocation3 = _interopRequireDefault(_createLocation2);
	
	var _runTransitionHook = __webpack_require__(355);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _deprecate = __webpack_require__(356);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}
	
	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}
	
	var DefaultKeyLength = 6;
	
	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var getUserConfirmation = options.getUserConfirmation;
	  var keyLength = options.keyLength;
	
	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;
	
	  var transitionHooks = [];
	
	  function listenBefore(hook) {
	    transitionHooks.push(hook);
	
	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }
	
	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;
	
	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }
	
	  function updateLocation(newLocation) {
	    var current = getCurrent();
	
	    location = newLocation;
	
	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }
	
	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }
	
	  function listen(listener) {
	    changeListeners.push(listener);
	
	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }
	
	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }
	
	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }
	
	  var pendingLocation = undefined;
	
	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.
	
	    pendingLocation = nextLocation;
	
	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.
	
	      if (ok) {
	        // treat PUSH to current path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = createPath(location);
	          var nextPath = createPath(nextLocation);
	
	          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }
	
	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);
	
	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }
	
	  function push(location) {
	    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
	  }
	
	  function replace(location) {
	    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
	  }
	
	  function goBack() {
	    go(-1);
	  }
	
	  function goForward() {
	    go(1);
	  }
	
	  function createKey() {
	    return createRandomKey(keyLength);
	  }
	
	  function createPath(location) {
	    if (location == null || typeof location === 'string') return location;
	
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	
	    var result = pathname;
	
	    if (search) result += search;
	
	    if (hash) result += hash;
	
	    return result;
	  }
	
	  function createHref(location) {
	    return createPath(location);
	  }
	
	  function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];
	
	    if (typeof action === 'object') {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;
	
	      if (typeof location === 'string') location = _PathUtils.parsePath(location);
	
	      location = _extends({}, location, { state: action });
	
	      action = key;
	      key = arguments[3] || createKey();
	    }
	
	    return _createLocation3['default'](location, action, key);
	  }
	
	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }
	
	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }
	
	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }
	
	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }
	
	  // deprecated
	  function pushState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	    push(_extends({ state: state }, path));
	  }
	
	  // deprecated
	  function replaceState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	    replace(_extends({ state: state }, path));
	  }
	
	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,
	
	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	  };
	}
	
	exports['default'] = createHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(351);
	var isArguments = __webpack_require__(352);
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 351 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 352 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 353 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports.loopAsync = loopAsync;
	
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = undefined;
	
	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(_slice.call(arguments));
	      return;
	    }
	
	    callback.apply(this, arguments);
	  }
	
	  function next() {
	    if (isDone) {
	      return;
	    }
	
	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }
	
	    sync = true;
	
	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }
	
	    sync = false;
	
	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }
	
	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }
	
	  next();
	}

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(342);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _Actions = __webpack_require__(343);
	
	var _PathUtils = __webpack_require__(344);
	
	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	
	  if (typeof location === 'string') location = _PathUtils.parsePath(location);
	
	  if (typeof action === 'object') {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;
	
	    location = _extends({}, location, { state: action });
	
	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }
	
	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;
	
	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}
	
	exports['default'] = createLocation;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(342);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);
	
	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
	  }
	}
	
	exports['default'] = runTransitionHook;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(342);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function deprecate(fn, message) {
	  return function () {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
	    return fn.apply(this, arguments);
	  };
	}
	
	exports['default'] = deprecate;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(342);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _queryString = __webpack_require__(358);
	
	var _runTransitionHook = __webpack_require__(355);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _PathUtils = __webpack_require__(344);
	
	var _deprecate = __webpack_require__(356);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var SEARCH_BASE_KEY = '$searchBase';
	
	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}
	
	var defaultParseQueryString = _queryString.parse;
	
	function isNestedObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
	}
	
	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var history = createHistory(options);
	
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;
	
	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;
	
	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;
	
	    function addQuery(location) {
	      if (location.query == null) {
	        var search = location.search;
	
	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }
	
	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.
	
	      return location;
	    }
	
	    function appendQuery(location, query) {
	      var _extends2;
	
	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var queryString = query ? stringifyQuery(query) : '';
	      if (!searchBaseSpec && !queryString) {
	        return location;
	      }
	
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;
	
	      if (typeof location === 'string') location = _PathUtils.parsePath(location);
	
	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }
	
	      var search = searchBase;
	      if (queryString) {
	        search += (search ? '&' : '?') + queryString;
	      }
	
	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
	    }
	
	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }
	
	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }
	
	    // Override all write methods with query-aware versions.
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }
	
	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }
	
	    function createPath(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;
	
	      return history.createPath(appendQuery(location, query || location.query));
	    }
	
	    function createHref(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;
	
	      return history.createHref(appendQuery(location, query || location.query));
	    }
	
	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
	      if (location.query) {
	        fullLocation.query = location.query;
	      }
	      return addQuery(fullLocation);
	    }
	
	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	      push(_extends({ state: state }, path, { query: query }));
	    }
	
	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	      replace(_extends({ state: state }, path, { query: query }));
	    }
	
	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,
	
	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}
	
	exports['default'] = useQueries;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(359);
	
	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};
	
	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}
	
		str = str.trim().replace(/^(\?|#|&)/, '');
	
		if (!str) {
			return {};
		}
	
		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;
	
			key = decodeURIComponent(key);
	
			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);
	
			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
	
			return ret;
		}, {});
	};
	
	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];
	
			if (val === undefined) {
				return '';
			}
	
			if (val === null) {
				return key;
			}
	
			if (Array.isArray(val)) {
				return val.slice().sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}
	
			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 359 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = createTransitionManager;
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _computeChangedRoutes2 = __webpack_require__(361);
	
	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);
	
	var _TransitionUtils = __webpack_require__(362);
	
	var _isActive2 = __webpack_require__(364);
	
	var _isActive3 = _interopRequireDefault(_isActive2);
	
	var _getComponents = __webpack_require__(365);
	
	var _getComponents2 = _interopRequireDefault(_getComponents);
	
	var _matchRoutes = __webpack_require__(367);
	
	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}
	
	function createTransitionManager(history, routes) {
	  var state = {};
	
	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location) {
	    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	    var indexOnly = void 0;
	    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
	      indexOnly = deprecatedIndexOnly || false;
	    } else {
	      location = history.createLocation(location);
	      indexOnly = indexOnlyOrDeprecatedQuery;
	    }
	
	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }
	
	  var partialNextState = void 0;
	
	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }
	
	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);
	
	    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	    var changeRoutes = _computeChangedRoutes.changeRoutes;
	    var enterRoutes = _computeChangedRoutes.enterRoutes;
	
	
	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);
	
	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);
	
	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);
	
	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });
	
	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);
	
	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }
	
	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, redirectInfo);
	    }
	  }
	
	  var RouteGuid = 1;
	
	  function getRouteID(route) {
	    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }
	
	  var RouteHooks = Object.create(null);
	
	  function getRouteHooksForRoutes(routes) {
	    return routes.reduce(function (hooks, route) {
	      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	      return hooks;
	    }, []);
	  }
	
	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }
	
	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });
	
	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);
	
	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }
	
	      callback(result);
	    });
	  }
	
	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);
	
	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }
	
	      return message;
	    }
	  }
	
	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;
	
	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route, false);
	    if (!routeID) {
	      return;
	    }
	
	    delete RouteHooks[routeID];
	
	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }
	
	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }
	
	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    // TODO: Warn if they register for a route that isn't currently
	    // active. They're probably doing something wrong, like re-creating
	    // route objects on every location change.
	    var routeID = getRouteID(route);
	    var hooks = RouteHooks[routeID];
	
	    if (!hooks) {
	      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
	
	      RouteHooks[routeID] = [hook];
	
	      if (thereWereNoRouteHooks) {
	        // setup transition & beforeunload hooks
	        unlistenBefore = history.listenBefore(transitionHook);
	
	        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	      }
	    } else {
	      if (hooks.indexOf(hook) === -1) {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;
	
	        hooks.push(hook);
	      }
	    }
	
	    return function () {
	      var hooks = RouteHooks[routeID];
	
	      if (hooks) {
	        var newHooks = hooks.filter(function (item) {
	          return item !== hook;
	        });
	
	        if (newHooks.length === 0) {
	          removeListenBeforeHooksForRoute(route);
	        } else {
	          RouteHooks[routeID] = newHooks;
	        }
	      }
	    };
	  }
	
	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    // TODO: Only use a single history listener. Otherwise we'll
	    // end up with multiple concurrent calls to match.
	    return history.listen(function (location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.replace(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    });
	  }
	
	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}
	
	//export default useRoutes
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(338);
	
	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;
	
	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);
	
	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}
	
	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;
	
	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });
	
	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();
	
	      enterRoutes = [];
	      changeRoutes = [];
	
	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;
	
	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }
	
	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}
	
	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;
	
	var _AsyncUtils = __webpack_require__(363);
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createTransitionHook(hook, route, asyncArity) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    hook.apply(route, args);
	
	    if (hook.length < asyncArity) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}
	
	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));
	
	    return hooks;
	  }, []);
	}
	
	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
	    return hooks;
	  }, []);
	}
	
	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }
	
	  var redirectInfo = void 0;
	  function replace(location, deprecatedPathname, deprecatedQuery) {
	    if (deprecatedPathname) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      redirectInfo = {
	        pathname: deprecatedPathname,
	        query: deprecatedQuery,
	        state: location
	      };
	
	      return;
	    }
	
	    redirectInfo = location;
	  }
	
	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	
	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](nextState, replace, next);
	  }, callback);
	}
	
	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](state, nextState, replace, next);
	  }, callback);
	}
	
	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes, prevState) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 363 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;
	
	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }
	
	    callback.apply(this, arguments);
	  }
	
	  function next() {
	    if (isDone) {
	      return;
	    }
	
	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }
	
	    sync = true;
	
	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }
	
	    sync = false;
	
	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }
	
	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }
	
	  next();
	}
	
	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];
	
	  if (length === 0) return callback(null, values);
	
	  var isDone = false,
	      doneCount = 0;
	
	  function done(index, error, value) {
	    if (isDone) return;
	
	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;
	
	      isDone = ++doneCount === length;
	
	      if (isDone) callback(null, values);
	    }
	  }
	
	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = isActive;
	
	var _PatternUtils = __webpack_require__(338);
	
	function deepEqual(a, b) {
	  if (a == b) return true;
	
	  if (a == null || b == null) return false;
	
	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }
	
	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }
	
	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }
	
	    return true;
	  }
	
	  return String(a) === String(b);
	}
	
	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }
	
	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }
	
	  return currentPathname === pathname;
	}
	
	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];
	
	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';
	
	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }
	
	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	
	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }
	
	  return false;
	}
	
	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;
	
	  if (query == null) return true;
	
	  return deepEqual(query, activeQuery);
	}
	
	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname;
	  var query = _ref.query;
	
	  if (currentLocation == null) return false;
	
	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }
	
	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }
	
	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _AsyncUtils = __webpack_require__(363);
	
	var _makeStateWithLocation = __webpack_require__(366);
	
	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }
	
	  var getComponent = route.getComponent || route.getComponents;
	  if (!getComponent) {
	    callback();
	    return;
	  }
	
	  var location = nextState.location;
	
	  var nextStateWithLocation = (0, _makeStateWithLocation2.default)(nextState, location);
	
	  getComponent.call(route, nextStateWithLocation, callback);
	}
	
	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}
	
	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = makeStateWithLocation;
	
	var _deprecateObjectProperties = __webpack_require__(334);
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function makeStateWithLocation(state, location) {
	  if (process.env.NODE_ENV !== 'production' && _deprecateObjectProperties.canUseMembrane) {
	    var stateWithLocation = _extends({}, state);
	
	    // I don't use deprecateObjectProperties here because I want to keep the
	    // same code path between development and production, in that we just
	    // assign extra properties to the copy of the state object in both cases.
	
	    var _loop = function _loop(prop) {
	      if (!Object.prototype.hasOwnProperty.call(location, prop)) {
	        return 'continue';
	      }
	
	      Object.defineProperty(stateWithLocation, prop, {
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Accessing location properties directly from the first argument to `getComponent`, `getComponents`, `getChildRoutes`, and `getIndexRoute` is deprecated. That argument is now the router state (`nextState` or `partialNextState`) rather than the location. To access the location, use `nextState.location` or `partialNextState.location`.') : void 0;
	          return location[prop];
	        }
	      });
	    };
	
	    for (var prop in location) {
	      var _ret = _loop(prop);
	
	      if (_ret === 'continue') continue;
	    }
	
	    return stateWithLocation;
	  }
	
	  return _extends({}, state, location);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = matchRoutes;
	
	var _AsyncUtils = __webpack_require__(363);
	
	var _makeStateWithLocation = __webpack_require__(366);
	
	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);
	
	var _PatternUtils = __webpack_require__(338);
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _RouteUtils = __webpack_require__(332);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }
	
	  var sync = true,
	      result = void 0;
	
	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };
	
	  var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);
	
	  route.getChildRoutes(partialNextStateWithLocation, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }
	
	    callback(error, childRoutes);
	  });
	
	  sync = false;
	  return result; // Might be undefined.
	}
	
	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };
	
	    var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);
	
	    route.getIndexRoute(partialNextStateWithLocation, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });
	
	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}
	
	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];
	
	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }
	
	    return params;
	  }, params);
	}
	
	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}
	
	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';
	
	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }
	
	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }
	
	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret2 = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };
	
	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;
	
	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }
	
	            callback(null, match);
	          }
	        });
	
	        return {
	          v: void 0
	        };
	      }();
	
	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  }
	
	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };
	
	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}
	
	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];
	
	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }
	
	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _invariant = __webpack_require__(339);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _deprecateObjectProperties = __webpack_require__(334);
	
	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);
	
	var _getRouteParams = __webpack_require__(369);
	
	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);
	
	var _RouteUtils = __webpack_require__(332);
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _React$PropTypes = _react2.default.PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;
	
	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */
	
	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',
	
	
	  propTypes: {
	    history: object,
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },
	
	
	  childContextTypes: {
	    history: object,
	    location: object.isRequired,
	    router: object.isRequired
	  },
	
	  getChildContext: function getChildContext() {
	    var _props = this.props;
	    var router = _props.router;
	    var history = _props.history;
	    var location = _props.location;
	
	    if (!router) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;
	
	      router = _extends({}, history, {
	        setRouteLeaveHook: history.listenBeforeLeavingRoute
	      });
	      delete router.listenBeforeLeavingRoute;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
	    }
	
	    return { history: history, location: location, router: router };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;
	
	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;
	
	    var element = null;
	
	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.
	
	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };
	
	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }
	
	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};
	
	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }
	
	          return elements;
	        }
	
	        return _this.createElement(components, props);
	      }, element);
	    }
	
	    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;
	
	    return element;
	  }
	});
	
	exports.default = RouterContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(338);
	
	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};
	
	  if (!route.path) return routeParams;
	
	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });
	
	  return routeParams;
	}
	
	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.createRouterObject = createRouterObject;
	exports.createRoutingHistory = createRoutingHistory;
	
	var _deprecateObjectProperties = __webpack_require__(334);
	
	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createRouterObject(history, transitionManager) {
	  return _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });
	}
	
	// deprecated
	function createRoutingHistory(history, transitionManager) {
	  history = _extends({}, history, transitionManager);
	
	  if (process.env.NODE_ENV !== 'production') {
	    history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
	  }
	
	  return history;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _invariant = __webpack_require__(339);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _PropTypes = __webpack_require__(333);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _React$PropTypes = _react2.default.PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	var oneOfType = _React$PropTypes.oneOfType;
	
	
	function isLeftClickEvent(event) {
	  return event.button === 0;
	}
	
	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}
	
	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}
	
	function createLocationDescriptor(to, _ref) {
	  var query = _ref.query;
	  var hash = _ref.hash;
	  var state = _ref.state;
	
	  if (query || hash || state) {
	    return { pathname: to, query: query, hash: hash, state: state };
	  }
	
	  return to;
	}
	
	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',
	
	
	  contextTypes: {
	    router: _PropTypes.routerShape
	  },
	
	  propTypes: {
	    to: oneOfType([string, object]),
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    if (this.props.onClick) this.props.onClick(event);
	
	    if (event.defaultPrevented) return;
	
	    !this.context.router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;
	
	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;
	
	    // If target prop is set (e.g. to "_blank"), let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) return;
	
	    event.preventDefault();
	
	    var _props = this.props;
	    var to = _props.to;
	    var query = _props.query;
	    var hash = _props.hash;
	    var state = _props.state;
	
	    var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
	
	    this.context.router.push(location);
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;
	
	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);
	
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;
	
	    // Ignore if rendered outside the context of router, simplifies unit testing.
	    var router = this.context.router;
	
	
	    if (router) {
	      // If user does not specify a `to` prop, return an empty anchor tag.
	      if (to == null) {
	        return _react2.default.createElement('a', props);
	      }
	
	      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
	      props.href = router.createHref(location);
	
	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(location, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }
	
	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }
	
	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});
	
	exports.default = Link;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Link = __webpack_require__(371);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});
	
	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = withRouter;
	
	var _invariant = __webpack_require__(339);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _hoistNonReactStatics = __webpack_require__(374);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _PropTypes = __webpack_require__(333);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	
	function withRouter(WrappedComponent, options) {
	  var withRef = options && options.withRef;
	
	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',
	
	    contextTypes: { router: _PropTypes.routerShape },
	    propTypes: { router: _PropTypes.routerShape },
	
	    getWrappedInstance: function getWrappedInstance() {
	      !withRef ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as the second argument of the withRouter() call.') : (0, _invariant2.default)(false) : void 0;
	
	      return this.wrappedInstance;
	    },
	    render: function render() {
	      var _this = this;
	
	      var router = this.props.router || this.context.router;
	      var props = _extends({}, this.props, { router: router });
	
	      if (withRef) {
	        props.ref = function (c) {
	          _this.wrappedInstance = c;
	        };
	      }
	
	      return _react2.default.createElement(WrappedComponent, props);
	    }
	  });
	
	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;
	
	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 374 */,
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _invariant = __webpack_require__(339);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Redirect = __webpack_require__(376);
	
	var _Redirect2 = _interopRequireDefault(_Redirect);
	
	var _InternalPropTypes = __webpack_require__(337);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;
	
	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */
	
	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',
	
	
	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },
	
	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(339);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _RouteUtils = __webpack_require__(332);
	
	var _PatternUtils = __webpack_require__(338);
	
	var _InternalPropTypes = __webpack_require__(337);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;
	
	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */
	
	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',
	
	
	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);
	
	      if (route.from) route.path = route.from;
	
	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location;
	        var params = nextState.params;
	
	
	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }
	
	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };
	
	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';
	
	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';
	
	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;
	
	        if (pattern.indexOf('/') === 0) break;
	      }
	
	      return '/' + parentPattern;
	    }
	  },
	
	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _invariant = __webpack_require__(339);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _RouteUtils = __webpack_require__(332);
	
	var _InternalPropTypes = __webpack_require__(337);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var func = _react2.default.PropTypes.func;
	
	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */
	
	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',
	
	
	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },
	
	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(339);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _RouteUtils = __webpack_require__(332);
	
	var _InternalPropTypes = __webpack_require__(337);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	
	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */
	
	var Route = _react2.default.createClass({
	  displayName: 'Route',
	
	
	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },
	
	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _InternalPropTypes = __webpack_require__(337);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {
	
	  contextTypes: {
	    history: _InternalPropTypes.history
	  },
	
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
	    this.history = this.context.history;
	  }
	};
	
	exports.default = History;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(339);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var object = _react2.default.PropTypes.object;
	
	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */
	
	var Lifecycle = {
	
	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },
	
	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },
	
	  componentDidMount: function componentDidMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
	    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;
	
	    var route = this.props.route || this.context.route;
	
	    !route ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;
	
	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }
	};
	
	exports.default = Lifecycle;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var object = _react2.default.PropTypes.object;
	
	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */
	
	var RouteContext = {
	
	  propTypes: {
	    route: object.isRequired
	  },
	
	  childContextTypes: {
	    route: object.isRequired
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
	  }
	};
	
	exports.default = RouteContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _useQueries = __webpack_require__(357);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	var _createTransitionManager = __webpack_require__(360);
	
	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	  process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : void 0;
	
	  return function () {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var routes = _ref.routes;
	
	    var options = _objectWithoutProperties(_ref, ['routes']);
	
	    var history = (0, _useQueries2.default)(createHistory)(options);
	    var transitionManager = (0, _createTransitionManager2.default)(history, routes);
	    return _extends({}, history, transitionManager);
	  };
	}
	
	exports.default = useRoutes;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouterContext = __webpack_require__(368);
	
	var _RouterContext2 = _interopRequireDefault(_RouterContext);
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RoutingContext = _react2.default.createClass({
	  displayName: 'RoutingContext',
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
	  },
	  render: function render() {
	    return _react2.default.createElement(_RouterContext2.default, this.props);
	  }
	});
	
	exports.default = RoutingContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Actions = __webpack_require__(343);
	
	var _invariant = __webpack_require__(339);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _createMemoryHistory = __webpack_require__(385);
	
	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
	
	var _createTransitionManager = __webpack_require__(360);
	
	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
	
	var _RouteUtils = __webpack_require__(332);
	
	var _RouterUtils = __webpack_require__(370);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history;
	  var routes = _ref.routes;
	  var location = _ref.location;
	
	  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);
	
	  !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;
	
	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));
	
	  var unlisten = void 0;
	
	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    // Pick up the location from the history via synchronous history.listen
	    // call if needed.
	    unlisten = history.listen(function (historyLocation) {
	      location = historyLocation;
	    });
	  }
	
	  var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	  history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);
	
	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation && router.createLocation(redirectLocation, _Actions.REPLACE), nextState && _extends({}, nextState, {
	      history: history,
	      router: router,
	      matchContext: { history: history, transitionManager: transitionManager, router: router }
	    }));
	
	    // Defer removing the listener to here to prevent DOM histories from having
	    // to unwind DOM event listeners unnecessarily, in case callback renders a
	    // <Router> and attaches another history listener.
	    if (unlisten) {
	      unlisten();
	    }
	  });
	}
	
	exports.default = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = createMemoryHistory;
	
	var _useQueries = __webpack_require__(357);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	var _useBasename = __webpack_require__(386);
	
	var _useBasename2 = _interopRequireDefault(_useBasename);
	
	var _createMemoryHistory = __webpack_require__(387);
	
	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useRoutes` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  history.__v2_compatible__ = true;
	  return history;
	}
	module.exports = exports['default'];

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(342);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _ExecutionEnvironment = __webpack_require__(345);
	
	var _PathUtils = __webpack_require__(344);
	
	var _runTransitionHook = __webpack_require__(355);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _deprecate = __webpack_require__(356);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var history = createHistory(options);
	
	    var basename = options.basename;
	
	    var checkedBaseHref = false;
	
	    function checkBaseHref() {
	      if (checkedBaseHref) {
	        return;
	      }
	
	      // Automatically use the value of <base href> in HTML
	      // documents as basename if it's not explicitly given.
	      if (basename == null && _ExecutionEnvironment.canUseDOM) {
	        var base = document.getElementsByTagName('base')[0];
	        var baseHref = base && base.getAttribute('href');
	
	        if (baseHref != null) {
	          basename = baseHref;
	
	          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Automatically setting basename using <base href> is deprecated and will ' + 'be removed in the next major release. The semantics of <base href> are ' + 'subtly different from basename. Please pass the basename explicitly in ' + 'the options to createHistory') : undefined;
	        }
	      }
	
	      checkedBaseHref = true;
	    }
	
	    function addBasename(location) {
	      checkBaseHref();
	
	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;
	
	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }
	
	      return location;
	    }
	
	    function prependBasename(location) {
	      checkBaseHref();
	
	      if (!basename) return location;
	
	      if (typeof location === 'string') location = _PathUtils.parsePath(location);
	
	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;
	
	      return _extends({}, location, {
	        pathname: pathname
	      });
	    }
	
	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }
	
	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }
	
	    // Override all write methods with basename-aware versions.
	    function push(location) {
	      history.push(prependBasename(location));
	    }
	
	    function replace(location) {
	      history.replace(prependBasename(location));
	    }
	
	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }
	
	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }
	
	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    }
	
	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	      push(_extends({ state: state }, path));
	    }
	
	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	      replace(_extends({ state: state }, path));
	    }
	
	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,
	
	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}
	
	exports['default'] = useBasename;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(342);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(339);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _PathUtils = __webpack_require__(344);
	
	var _Actions = __webpack_require__(343);
	
	var _createHistory = __webpack_require__(349);
	
	var _createHistory2 = _interopRequireDefault(_createHistory);
	
	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}
	
	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }
	
	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));
	
	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;
	
	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }
	
	  entries = entries.map(function (entry) {
	    var key = history.createKey();
	
	    if (typeof entry === 'string') return { pathname: entry, key: key };
	
	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });
	
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });
	
	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }
	
	  var storage = createStateStorage(entries);
	
	  function saveState(key, state) {
	    storage[key] = state;
	  }
	
	  function readState(key) {
	    return storage[key];
	  }
	
	  function getCurrentLocation() {
	    var entry = entries[current];
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;
	
	    var path = (basename || '') + pathname + (search || '');
	
	    var key = undefined,
	        state = undefined;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    } else {
	      key = history.createKey();
	      state = null;
	      entry.key = key;
	    }
	
	    var location = _PathUtils.parsePath(path);
	
	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }
	
	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }
	
	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }
	
	      current += n;
	
	      var currentLocation = getCurrentLocation();
	
	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }
	
	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;
	
	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);
	
	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }
	
	  return history;
	}
	
	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = useRouterHistory;
	
	var _useQueries = __webpack_require__(357);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	var _useBasename = __webpack_require__(386);
	
	var _useBasename2 = _interopRequireDefault(_useBasename);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    history.__v2_compatible__ = true;
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouterContext = __webpack_require__(368);
	
	var _RouterContext2 = _interopRequireDefault(_RouterContext);
	
	var _routerWarning = __webpack_require__(335);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  if (process.env.NODE_ENV !== 'production') {
	    middlewares.forEach(function (middleware, index) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
	    });
	  }
	
	  var withContext = middlewares.map(function (middleware) {
	    return middleware.renderRouterContext;
	  }).filter(Boolean);
	  var withComponent = middlewares.map(function (middleware) {
	    return middleware.renderRouteComponent;
	  }).filter(Boolean);
	
	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };
	
	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createBrowserHistory = __webpack_require__(391);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _createRouterHistory = __webpack_require__(392);
	
	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(339);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Actions = __webpack_require__(343);
	
	var _PathUtils = __webpack_require__(344);
	
	var _ExecutionEnvironment = __webpack_require__(345);
	
	var _DOMUtils = __webpack_require__(346);
	
	var _DOMStateStorage = __webpack_require__(347);
	
	var _createDOMHistory = __webpack_require__(348);
	
	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);
	
	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;
	
	  var forceRefresh = options.forceRefresh;
	
	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;
	
	  function getCurrentLocation(historyState) {
	    try {
	      historyState = historyState || window.history.state || {};
	    } catch (e) {
	      historyState = {};
	    }
	
	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;
	
	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();
	
	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null);
	    }
	
	    var location = _PathUtils.parsePath(path);
	
	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }
	
	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;
	
	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.
	
	      transitionTo(getCurrentLocation(event.state));
	    }
	
	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);
	
	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }
	
	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;
	
	    if (action === _Actions.POP) return; // Nothing to do.
	
	    _DOMStateStorage.saveState(key, state);
	
	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };
	
	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }
	
	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));
	
	  var listenerCount = 0,
	      stopPopStateListener = undefined;
	
	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    var unlisten = history.listenBefore(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }
	
	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    var unlisten = history.listen(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }
	
	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    history.registerTransitionHook(hook);
	  }
	
	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);
	
	    if (--listenerCount === 0) stopPopStateListener();
	  }
	
	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}
	
	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};
	
	var _useRouterHistory = __webpack_require__(388);
	
	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	module.exports = exports['default'];

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createHashHistory = __webpack_require__(341);
	
	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);
	
	var _createRouterHistory = __webpack_require__(392);
	
	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerMiddleware = exports.routerActions = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.CALL_HISTORY_METHOD = exports.routerReducer = exports.LOCATION_CHANGE = exports.syncHistoryWithStore = undefined;
	
	var _reducer = __webpack_require__(395);
	
	Object.defineProperty(exports, 'LOCATION_CHANGE', {
	  enumerable: true,
	  get: function get() {
	    return _reducer.LOCATION_CHANGE;
	  }
	});
	Object.defineProperty(exports, 'routerReducer', {
	  enumerable: true,
	  get: function get() {
	    return _reducer.routerReducer;
	  }
	});
	
	var _actions = __webpack_require__(396);
	
	Object.defineProperty(exports, 'CALL_HISTORY_METHOD', {
	  enumerable: true,
	  get: function get() {
	    return _actions.CALL_HISTORY_METHOD;
	  }
	});
	Object.defineProperty(exports, 'push', {
	  enumerable: true,
	  get: function get() {
	    return _actions.push;
	  }
	});
	Object.defineProperty(exports, 'replace', {
	  enumerable: true,
	  get: function get() {
	    return _actions.replace;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _actions.go;
	  }
	});
	Object.defineProperty(exports, 'goBack', {
	  enumerable: true,
	  get: function get() {
	    return _actions.goBack;
	  }
	});
	Object.defineProperty(exports, 'goForward', {
	  enumerable: true,
	  get: function get() {
	    return _actions.goForward;
	  }
	});
	Object.defineProperty(exports, 'routerActions', {
	  enumerable: true,
	  get: function get() {
	    return _actions.routerActions;
	  }
	});
	
	var _sync = __webpack_require__(397);
	
	var _sync2 = _interopRequireDefault(_sync);
	
	var _middleware = __webpack_require__(398);
	
	var _middleware2 = _interopRequireDefault(_middleware);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports.syncHistoryWithStore = _sync2['default'];
	exports.routerMiddleware = _middleware2['default'];

/***/ },
/* 395 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.routerReducer = routerReducer;
	/**
	 * This action type will be dispatched when your history
	 * receives a location change.
	 */
	var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
	
	var initialState = {
	  locationBeforeTransitions: null
	};
	
	/**
	 * This reducer will update the state with the most recent location history
	 * has transitioned to. This may not be in sync with the router, particularly
	 * if you have asynchronously-loaded routes, so reading from and relying on
	 * this state is discouraged.
	 */
	function routerReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      type = _ref.type,
	      payload = _ref.payload;
	
	  if (type === LOCATION_CHANGE) {
	    return _extends({}, state, { locationBeforeTransitions: payload });
	  }
	
	  return state;
	}

/***/ },
/* 396 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * This action type will be dispatched by the history actions below.
	 * If you're writing a middleware to watch for navigation events, be sure to
	 * look for actions of this type.
	 */
	var CALL_HISTORY_METHOD = exports.CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';
	
	function updateLocation(method) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return {
	      type: CALL_HISTORY_METHOD,
	      payload: { method: method, args: args }
	    };
	  };
	}
	
	/**
	 * These actions correspond to the history API.
	 * The associated routerMiddleware will capture these events before they get to
	 * your reducer and reissue them as the matching function on your history.
	 */
	var push = exports.push = updateLocation('push');
	var replace = exports.replace = updateLocation('replace');
	var go = exports.go = updateLocation('go');
	var goBack = exports.goBack = updateLocation('goBack');
	var goForward = exports.goForward = updateLocation('goForward');
	
	var routerActions = exports.routerActions = { push: push, replace: replace, go: go, goBack: goBack, goForward: goForward };

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = syncHistoryWithStore;
	
	var _reducer = __webpack_require__(395);
	
	var defaultSelectLocationState = function defaultSelectLocationState(state) {
	  return state.routing;
	};
	
	/**
	 * This function synchronizes your history state with the Redux store.
	 * Location changes flow from history to the store. An enhanced history is
	 * returned with a listen method that responds to store updates for location.
	 *
	 * When this history is provided to the router, this means the location data
	 * will flow like this:
	 * history.push -> store.dispatch -> enhancedHistory.listen -> router
	 * This ensures that when the store state changes due to a replay or other
	 * event, the router will be updated appropriately and can transition to the
	 * correct router state.
	 */
	function syncHistoryWithStore(history, store) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      _ref$selectLocationSt = _ref.selectLocationState,
	      selectLocationState = _ref$selectLocationSt === undefined ? defaultSelectLocationState : _ref$selectLocationSt,
	      _ref$adjustUrlOnRepla = _ref.adjustUrlOnReplay,
	      adjustUrlOnReplay = _ref$adjustUrlOnRepla === undefined ? true : _ref$adjustUrlOnRepla;
	
	  // Ensure that the reducer is mounted on the store and functioning properly.
	  if (typeof selectLocationState(store.getState()) === 'undefined') {
	    throw new Error('Expected the routing state to be available either as `state.routing` ' + 'or as the custom expression you can specify as `selectLocationState` ' + 'in the `syncHistoryWithStore()` options. ' + 'Ensure you have added the `routerReducer` to your store\'s ' + 'reducers via `combineReducers` or whatever method you use to isolate ' + 'your reducers.');
	  }
	
	  var initialLocation = void 0;
	  var isTimeTraveling = void 0;
	  var unsubscribeFromStore = void 0;
	  var unsubscribeFromHistory = void 0;
	  var currentLocation = void 0;
	
	  // What does the store say about current location?
	  var getLocationInStore = function getLocationInStore(useInitialIfEmpty) {
	    var locationState = selectLocationState(store.getState());
	    return locationState.locationBeforeTransitions || (useInitialIfEmpty ? initialLocation : undefined);
	  };
	
	  // Init initialLocation with potential location in store
	  initialLocation = getLocationInStore();
	
	  // If the store is replayed, update the URL in the browser to match.
	  if (adjustUrlOnReplay) {
	    var handleStoreChange = function handleStoreChange() {
	      var locationInStore = getLocationInStore(true);
	      if (currentLocation === locationInStore || initialLocation === locationInStore) {
	        return;
	      }
	
	      // Update address bar to reflect store state
	      isTimeTraveling = true;
	      currentLocation = locationInStore;
	      history.transitionTo(_extends({}, locationInStore, {
	        action: 'PUSH'
	      }));
	      isTimeTraveling = false;
	    };
	
	    unsubscribeFromStore = store.subscribe(handleStoreChange);
	    handleStoreChange();
	  }
	
	  // Whenever location changes, dispatch an action to get it in the store
	  var handleLocationChange = function handleLocationChange(location) {
	    // ... unless we just caused that location change
	    if (isTimeTraveling) {
	      return;
	    }
	
	    // Remember where we are
	    currentLocation = location;
	
	    // Are we being called for the first time?
	    if (!initialLocation) {
	      // Remember as a fallback in case state is reset
	      initialLocation = location;
	
	      // Respect persisted location, if any
	      if (getLocationInStore()) {
	        return;
	      }
	    }
	
	    // Tell the store to update by dispatching an action
	    store.dispatch({
	      type: _reducer.LOCATION_CHANGE,
	      payload: location
	    });
	  };
	  unsubscribeFromHistory = history.listen(handleLocationChange);
	
	  // History 3.x doesn't call listen synchronously, so fire the initial location change ourselves
	  if (history.getCurrentLocation) {
	    handleLocationChange(history.getCurrentLocation());
	  }
	
	  // The enhanced history uses store as source of truth
	  return _extends({}, history, {
	    // The listeners are subscribed to the store instead of history
	    listen: function listen(listener) {
	      // Copy of last location.
	      var lastPublishedLocation = getLocationInStore(true);
	
	      // Keep track of whether we unsubscribed, as Redux store
	      // only applies changes in subscriptions on next dispatch
	      var unsubscribed = false;
	      var unsubscribeFromStore = store.subscribe(function () {
	        var currentLocation = getLocationInStore(true);
	        if (currentLocation === lastPublishedLocation) {
	          return;
	        }
	        lastPublishedLocation = currentLocation;
	        if (!unsubscribed) {
	          listener(lastPublishedLocation);
	        }
	      });
	
	      // History 2.x listeners expect a synchronous call. Make the first call to the
	      // listener after subscribing to the store, in case the listener causes a
	      // location change (e.g. when it redirects)
	      if (!history.getCurrentLocation) {
	        listener(lastPublishedLocation);
	      }
	
	      // Let user unsubscribe later
	      return function () {
	        unsubscribed = true;
	        unsubscribeFromStore();
	      };
	    },
	
	
	    // It also provides a way to destroy internal listeners
	    unsubscribe: function unsubscribe() {
	      if (adjustUrlOnReplay) {
	        unsubscribeFromStore();
	      }
	      unsubscribeFromHistory();
	    }
	  });
	}

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = routerMiddleware;
	
	var _actions = __webpack_require__(396);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
	 * provided history object. This will prevent these actions from reaching your
	 * reducer or any middleware that comes after this one.
	 */
	function routerMiddleware(history) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type !== _actions.CALL_HISTORY_METHOD) {
	          return next(action);
	        }
	
	        var _action$payload = action.payload,
	            method = _action$payload.method,
	            args = _action$payload.args;
	
	        history[method].apply(history, _toConsumableArray(args));
	      };
	    };
	  };
	}

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouterContext = __webpack_require__(368);
	
	var _RouterContext2 = _interopRequireDefault(_RouterContext);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var applyMiddleware = function applyMiddleware() {
	  for (var _len = arguments.length, middleware = Array(_len), _key = 0; _key < _len; _key++) {
	    middleware[_key] = arguments[_key];
	  }
	
	  // middleware looks like: { renderContainer, renderRootContainer }
	  var withRootContainer = middleware.filter(function (m) {
	    return m.renderRootContainer;
	  });
	  var withContainer = middleware.filter(function (m) {
	    return m.renderContainer;
	  });
	
	  var finalCreateElement = function finalCreateElement(Component, props) {
	    return _react2.default.createElement(Component, props);
	  };
	
	  var createElement = withContainer.reduceRight(function (previous, _ref) {
	    var renderContainer = _ref.renderContainer;
	    return function (RouteComponent, props) {
	      return (0, _react.cloneElement)(renderContainer(RouteComponent, props), { createElement: previous });
	    };
	  }, finalCreateElement);
	
	  var finalRenderRootContainer = function finalRenderRootContainer(renderProps) {
	    return _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, { createElement: createElement }));
	  };
	
	  return withRootContainer.reduceRight(function (previous, _ref2) {
	    var renderRootContainer = _ref2.renderRootContainer;
	    return function (renderProps) {
	      return (0, _react.cloneElement)(renderRootContainer(renderProps), { render: previous });
	    };
	  }, finalRenderRootContainer);
	};
	
	exports.default = applyMiddleware;
	
	/*
	
	`applyMiddleware` turns this:
	
	```js
	const render = applyMiddleware(
	  useAsyncProps({ loadContext: { token } }),
	  useNamedRoutes(),
	  useRelativeLinks()
	)
	```
	
	into this:
	
	```js
	<Router
	  render={(props) => (
	    <AsyncProps {...props}
	      render={(props) => (
	        <NamedRoutes {...props}
	          render={(props) => (
	            <RelativeLinks {...props}
	              createElement={(Component, props) => (
	                <AsyncPropsContainer Component={Component} routerProps={props} token={token}
	                  createElement={(Component, props) => (
	                    <RelativeLinksContainer Component={Component} routerProps={props}/>
	                  )}
	                />
	              )}
	            />
	          )}
	        />
	      )}
	    />
	  )}
	/>
	```
	*/

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RelativeLink = exports.useRelativeLinks = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Link = __webpack_require__(371);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _PatternUtils = __webpack_require__(338);
	
	var _resolvePathname = __webpack_require__(401);
	
	var _resolvePathname2 = _interopRequireDefault(_resolvePathname);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var useRelativeLinks = exports.useRelativeLinks = function useRelativeLinks() {
	  return {
	    renderContainer: function renderContainer(Component, props) {
	      return _react2.default.createElement(RelativeLinksContainer, { Component: Component, routerProps: props });
	    }
	  };
	};
	
	var _React$PropTypes = _react2.default.PropTypes;
	var oneOfType = _React$PropTypes.oneOfType;
	var shape = _React$PropTypes.shape;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	var array = _React$PropTypes.array;
	
	
	var relativeLinksContextType = {
	  relativeLinks: shape({
	    params: object.isRequired,
	    route: object.isRequired,
	    routes: array.isRequired
	  }).isRequired
	};
	
	var RelativeLinksContainer = _react2.default.createClass({
	  displayName: 'RelativeLinksContainer',
	
	
	  propTypes: {
	    Component: func.isRequired,
	    routerProps: shape({
	      route: object.isRequired,
	      params: object.isRequired
	    }).isRequired
	  },
	
	  childContextTypes: relativeLinksContextType,
	
	  getChildContext: function getChildContext() {
	    var _props$routerProps = this.props.routerProps;
	    var params = _props$routerProps.params;
	    var routes = _props$routerProps.routes;
	    var route = _props$routerProps.route;
	
	    return { relativeLinks: { params: params, route: route, routes: routes } };
	  },
	  render: function render() {
	    var _props = this.props;
	    var createElement = _props.createElement;
	    var Component = _props.Component;
	    var routerProps = _props.routerProps;
	
	    return createElement(Component, routerProps);
	  }
	});
	
	var isAbsolute = function isAbsolute(to) {
	  return to.match(/^\//);
	};
	
	var constructRoutePattern = function constructRoutePattern(currentRoute, routes) {
	  var fullPath = '';
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = routes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var route = _step.value;
	      var path = route.path;
	
	
	      if (path) {
	        if (path[0] === '/') {
	          fullPath = path;
	        } else {
	          // If the first path-ed route has no leading slash, then this will add it.
	          if (fullPath[fullPath.length - 1] !== '/') {
	            fullPath += '/';
	          }
	
	          fullPath += path;
	        }
	      }
	
	      if (route === currentRoute) {
	        break;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return fullPath;
	};
	
	var resolvePathname = function resolvePathname(_ref) {
	  var relativePath = _ref.relativePath;
	  var route = _ref.route;
	  var routes = _ref.routes;
	  var params = _ref.params;
	
	  var patternUpToRoute = constructRoutePattern(route, routes);
	  // TODO: remove trailing slash hack
	  // we add a slash cause it's SUPER WEIRD if we don't, should add an option
	  // to history to always use trailing slashes to not do this and cause
	  // confusion for people who actually know how browsers resolve urls :P
	  var specialCase = relativePath.trim() === '';
	  var slash = specialCase ? '' : '/';
	  var resolvedPattern = (0, _resolvePathname2.default)('' + relativePath + slash, patternUpToRoute + '/');
	  var withoutSlash = resolvedPattern.substring(0, resolvedPattern.length - 1);
	  return (0, _PatternUtils.formatPattern)(withoutSlash, params);
	};
	
	var RelativeLink = exports.RelativeLink = _react2.default.createClass({
	  displayName: 'RelativeLink',
	
	
	  propTypes: {
	    to: oneOfType([string, object]).isRequired
	  },
	
	  contextTypes: relativeLinksContextType,
	
	  getInitialState: function getInitialState() {
	    return { to: this.calculateTo(this.props) };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.to !== this.props.to) {
	      this.setState({ to: this.calculateTo(nextProps) });
	    }
	  },
	  calculateTo: function calculateTo(props) {
	    var to = props.to;
	    var _context$relativeLink = this.context.relativeLinks;
	    var route = _context$relativeLink.route;
	    var routes = _context$relativeLink.routes;
	    var params = _context$relativeLink.params;
	
	    var isLocationDescriptor = (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object';
	    var relativePath = isLocationDescriptor ? to.pathname || '' : to;
	    var resolved = isAbsolute(relativePath) ? relativePath : resolvePathname({ relativePath: relativePath, route: route, routes: routes, params: params });
	    return isLocationDescriptor ? _extends({}, to, { pathname: resolved }) : resolved;
	  },
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { to: this.state.to }));
	  }
	});

/***/ },
/* 401 */
/***/ function(module, exports) {

	'use strict';
	
	var isAbsolute = function isAbsolute(pathname) {
	  return pathname.charAt(0) === '/';
	};
	
	// About 1.5x faster than the two-arg version of Array#splice()
	var spliceOne = function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
	    list[i] = list[k];
	  }list.pop();
	};
	
	// This implementation is based heavily on node's url.parse
	var resolvePathname = function resolvePathname(to) {
	  var from = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	
	  var toParts = to && to.split('/') || [];
	  var fromParts = from && from.split('/') || [];
	
	  var isToAbs = to && isAbsolute(to);
	  var isFromAbs = from && isAbsolute(from);
	  var mustEndAbs = isToAbs || isFromAbs;
	
	  if (to && isAbsolute(to)) {
	    // to is absolute
	    fromParts = toParts;
	  } else if (toParts.length) {
	    // to is relative, drop the filename
	    fromParts.pop();
	    fromParts = fromParts.concat(toParts);
	  }
	
	  if (!fromParts.length) return '/';
	
	  var hasTrailingSlash = void 0;
	  if (fromParts.length) {
	    var last = fromParts[fromParts.length - 1];
	    hasTrailingSlash = last === '.' || last === '..' || last === '';
	  } else {
	    hasTrailingSlash = false;
	  }
	
	  var up = 0;
	  for (var i = fromParts.length; i >= 0; i--) {
	    var part = fromParts[i];
	
	    if (part === '.') {
	      spliceOne(fromParts, i);
	    } else if (part === '..') {
	      spliceOne(fromParts, i);
	      up++;
	    } else if (up) {
	      spliceOne(fromParts, i);
	      up--;
	    }
	  }
	
	  if (!mustEndAbs) for (; up--; up) {
	    fromParts.unshift('..');
	  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');
	
	  var result = fromParts.join('/');
	
	  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';
	
	  return result;
	};
	
	module.exports = resolvePathname;

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Home = exports.App = undefined;
	
	var _App2 = __webpack_require__(403);
	
	var _App3 = _interopRequireDefault(_App2);
	
	var _Home2 = __webpack_require__(550);
	
	var _Home3 = _interopRequireDefault(_Home2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.App = _App3.default;
	exports.Home = _Home3.default;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(404);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function App(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    { className: 'section' },
	    children
	  );
	};
	
	exports.default = App;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "App.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(404);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _connect = __webpack_require__(551);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _userspaceSdkJs = __webpack_require__(580);
	
	var _reactRouter = __webpack_require__(331);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Home = function Home() {
	    return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	            'div',
	            { className: 'row', id: 'new-spent' },
	            _react2.default.createElement(
	                'form',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'col-md-4' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group ' },
	                        _react2.default.createElement(
	                            'label',
	                            { className: 'control-label' },
	                            'Success input'
	                        ),
	                        _react2.default.createElement('input', { type: 'number', autoFocus: true, tabindex: '1', value: '', placeholder: 'valor', className: 'form-control' }),
	                        _react2.default.createElement('span', { className: 'material-input' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'col-md-4' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group ' },
	                        _react2.default.createElement(
	                            'label',
	                            { className: 'control-label' },
	                            'Success input'
	                        ),
	                        _react2.default.createElement('input', { type: 'datetime-local', tabindex: '2', value: '', placeholder: 'valor', className: 'form-control' }),
	                        _react2.default.createElement('span', { className: 'material-input' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'col-md-4' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group ' },
	                        _react2.default.createElement(
	                            'label',
	                            { className: 'control-label' },
	                            'Success input'
	                        ),
	                        _react2.default.createElement('input', { type: 'text', value: '', tabindex: '3', placeholder: 'valor', className: 'form-control' }),
	                        _react2.default.createElement('span', { className: 'material-input' })
	                    )
	                )
	            )
	        ),
	        _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	                'div',
	                { id: 'spent-list', className: 'col-md-8 col-md-offset-2' },
	                _react2.default.createElement(
	                    'h4',
	                    null,
	                    _react2.default.createElement(
	                        'small',
	                        null,
	                        '\xDAltimos 20 gastos'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'table-responsive' },
	                    _react2.default.createElement(
	                        'table',
	                        { className: 'table' },
	                        _react2.default.createElement(
	                            'thead',
	                            null,
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'th',
	                                    { className: 'text-center' },
	                                    '#'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    { className: 'text-right' },
	                                    'Gastado'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    { className: 'text-center' },
	                                    'Fecha'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Hora'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Nombre'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    { className: 'text-center' },
	                                    '#'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'tbody',
	                            null,
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'td',
	                                    { className: 'td-actions text-center' },
	                                    _react2.default.createElement(
	                                        'button',
	                                        { type: 'button', rel: 'tooltip', className: 'btn btn-info', 'data-original-title': '', title: '' },
	                                        _react2.default.createElement(
	                                            'i',
	                                            { className: 'material-icons' },
	                                            'add'
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'td',
	                                    { className: 'text-right' },
	                                    '$ 99'
	                                ),
	                                _react2.default.createElement(
	                                    'td',
	                                    { className: 'text-center' },
	                                    'ayer'
	                                ),
	                                _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    '12am'
	                                ),
	                                _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    'Taxi'
	                                ),
	                                _react2.default.createElement(
	                                    'td',
	                                    { className: 'td-actions text-center' },
	                                    _react2.default.createElement(
	                                        'button',
	                                        { type: 'button', rel: 'tooltip', className: 'btn btn-danger', 'data-original-title': '', title: '' },
	                                        _react2.default.createElement(
	                                            'i',
	                                            { className: 'material-icons' },
	                                            'delete'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            )
	        ),
	        _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	                'div',
	                { className: 'card' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'card-header card-header-icon', 'data-background-color': 'blue' },
	                    _react2.default.createElement(
	                        'i',
	                        { className: 'material-icons' },
	                        'timeline'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'card-content' },
	                    _react2.default.createElement(
	                        'h4',
	                        { className: 'card-title' },
	                        'Coloured Line Chart',
	                        _react2.default.createElement(
	                            'small',
	                            null,
	                            ' - Rounded'
	                        )
	                    )
	                ),
	                _react2.default.createElement('div', { id: 'colouredRoundedLineChart', className: 'ct-chart' })
	            )
	        )
	    );
	};
	
	// export default connect(
	//     state => ({
	//         apps: state.app.list,
	//         spaces: state.space.list,
	//         sizes: state.space.sizes,
	//         fill : state.space.fill,
	//         total : state.space.total,
	//         free : state.space.total - state.space.fill,
	//         ratio: 100*state.space.fill/state.space.total,
	//     }),
	//   {listApps: app.list, listSpaces: space.list}
	// )(HomeClass);
	exports.default = Home;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Home.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 551 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(552);
	
	var _redux = __webpack_require__(559);
	
	exports.default = function () {
	  var storeMapping = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (store) {
	    return {};
	  };
	  var actionMapping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  return (0, _reactRedux.connect)(storeMapping, function (dispatch) {
	    return {
	      actions: (0, _redux.bindActionCreators)(actionMapping, dispatch)
	    };
	  });
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "connect.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, Buffer) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.topapps = exports.size = exports.localToken = exports.signout = exports.signin = exports.watchLogin = exports.userspace = exports.urls = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jwtDecode = __webpack_require__(585);
	
	var _jwtDecode2 = _interopRequireDefault(_jwtDecode);
	
	var _parse = __webpack_require__(588);
	
	var _parse2 = _interopRequireDefault(_parse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var base = process.env.USERSPACE_GATEWAY || 'https://gateway.user.space';
	
	var urls = {
	  dashboard: function dashboard() {
	    return base + '/login/?token=' + localStorage.id_token;
	  }
	};
	
	function userspace() {
	  var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'main';
	
	  _parse2.default.initialize('userspace');
	  _parse2.default.serverURL = base + '/' + namespace;
	  _parse2.default.login = function (creds) {
	    _parse2.default.credentials = creds;
	    if (!_parse2.default.credentials) return;
	    _parse2.default.session = {};
	    try {
	      _parse2.default.session.client = (0, _jwtDecode2.default)(creds).aud;
	    } catch (e) {
	      // do nothing
	    }
	
	    fetch(base + '/apps?id=' + _parse2.default.session.client).then(function (res) {
	      _parse2.default.session.owner = res.body.owner;
	    });
	  };
	  _parse2.default.logout = function () {
	    _parse2.default.credentials = null;
	  };
	
	  var Notify = _parse2.default.Object.extend('Notify');
	  _parse2.default.share = function (_ref) {
	    var object = _ref.object,
	        app = _ref.app,
	        user = _ref.user;
	    return new Notify({
	      ref: object.id,
	      clazz: object.className,
	      app: app || _parse2.default.session.client,
	      user: user || _parse2.default.session.owner
	    }).save();
	  };
	
	  _parse2.default.login(localStorage.id_token);
	  return _parse2.default;
	}
	
	var offsetSeconds = 5;
	
	var Token = function () {
	  function Token(token) {
	    _classCallCheck(this, Token);
	
	    this.token = token;
	  }
	
	  _createClass(Token, [{
	    key: 'isLoggedIn',
	    value: function isLoggedIn() {
	      return !this.isTokenExpired();
	    }
	  }, {
	    key: 'isTokenExpired',
	    value: function isTokenExpired() {
	      var date = this.getTokenExpirationDate();
	      return date === null || !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
	    }
	  }, {
	    key: 'getTokenExpirationDate',
	    value: function getTokenExpirationDate() {
	      if (!this.token) return null;
	      var decoded = (0, _jwtDecode2.default)(this.token);
	      if (!decoded.exp) return null;
	      var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
	      date.setUTCSeconds(decoded.exp);
	      return date;
	    }
	  }], [{
	    key: 'clear',
	    value: function clear() {
	      return new Token();
	    }
	  }]);
	
	  return Token;
	}();
	
	function watchLogin() {
	  var hasToken = window.location.search.match(/[?&]token=(.*)[#&]?/);
	  if (hasToken && hasToken.length === 2) {
	    localStorage.id_token = hasToken[1];
	    window.location = window.location.origin + window.location.pathname;
	  }
	}
	
	function signin(app) {
	  var appCode = new Buffer(app || window.location.origin + window.location.pathname).toString('base64');
	  window.location = base + '/sign/' + appCode;
	}
	
	function signout() {
	  localStorage.id_token = '';
	}
	
	function localToken() {
	  return new Token(localStorage.id_token);
	}
	
	var withAuth = function withAuth() {
	  return {
	    headers: {
	      Authorization: 'Bearer ' + localStorage.id_token
	    }
	  };
	};
	
	function topapps() {
	  return fetch(base + '/topapps', withAuth()).then(function (res) {
	    return res.json();
	  });
	}
	
	function size() {
	  return fetch(base + '/size', withAuth()).then(function (res) {
	    return res.json();
	  });
	}
	
	exports.urls = urls;
	exports.userspace = userspace;
	exports.watchLogin = watchLogin;
	exports.signin = signin;
	exports.signout = signout;
	exports.localToken = localToken;
	exports.size = size;
	exports.topapps = topapps;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295), __webpack_require__(581).Buffer))

/***/ },
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(582)
	var ieee754 = __webpack_require__(583)
	var isArray = __webpack_require__(584)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()
	
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }
	
	  return that
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}
	
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	
	  return fromObject(that, value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}
	
	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)
	
	  var actual = that.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }
	
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}
	
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)
	
	    if (that.length === 0) {
	      return that
	    }
	
	    obj.copy(that, 0, 0, len)
	    return that
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 582 */
/***/ function(module, exports) {

	'use strict'
	
	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}
	
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63
	
	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}
	
	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}
	
	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)
	
	  arr = new Arr(len * 3 / 4 - placeHolders)
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len
	
	  var L = 0
	
	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }
	
	  parts.push(output)
	
	  return parts.join('')
	}


/***/ },
/* 583 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 584 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 585 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var base64_url_decode = __webpack_require__(586);
	
	module.exports = function (token,options) {
	  if (typeof token !== 'string') {
	    throw new Error('Invalid token specified');
	  }
	
	  options = options || {};
	  var pos = options.header === true ? 0 : 1;
	  return JSON.parse(base64_url_decode(token.split('.')[pos]));
	};


/***/ },
/* 586 */
/***/ function(module, exports, __webpack_require__) {

	var atob = __webpack_require__(587);
	
	function b64DecodeUnicode(str) {
	  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
	    var code = p.charCodeAt(0).toString(16).toUpperCase();
	    if (code.length < 2) {
	      code = '0' + code;
	    }
	    return '%' + code;
	  }));
	}
	
	module.exports = function(str) {
	  var output = str.replace(/-/g, "+").replace(/_/g, "/");
	  switch (output.length % 4) {
	    case 0:
	      break;
	    case 2:
	      output += "==";
	      break;
	    case 3:
	      output += "=";
	      break;
	    default:
	      throw "Illegal base64url string!";
	  }
	
	  try{
	    return b64DecodeUnicode(output);
	  } catch (err) {
	    return atob(output);
	  }
	};


/***/ },
/* 587 */
/***/ function(module, exports) {

	/**
	 * The code was extracted from:
	 * https://github.com/davidchambers/Base64.js
	 */
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function InvalidCharacterError(message) {
	  this.message = message;
	}
	
	InvalidCharacterError.prototype = new Error();
	InvalidCharacterError.prototype.name = 'InvalidCharacterError';
	
	function polyfill (input) {
	  var str = String(input).replace(/=+$/, '');
	  if (str.length % 4 == 1) {
	    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
	  }
	  for (
	    // initialize result and counters
	    var bc = 0, bs, buffer, idx = 0, output = '';
	    // get next character
	    buffer = str.charAt(idx++);
	    // character found in table? initialize bit storage and add its ascii value;
	    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
	      // and if not first of each 4 characters,
	      // convert the first 8 bits to one ascii character
	      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
	  ) {
	    // try to find character in table (0-63, not found => -1)
	    buffer = chars.indexOf(buffer);
	  }
	  return output;
	}
	
	
	module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ },
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(589);


/***/ },
/* 589 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _decode = __webpack_require__(590);
	
	var _decode2 = _interopRequireDefault(_decode);
	
	var _encode = __webpack_require__(705);
	
	var _encode2 = _interopRequireDefault(_encode);
	
	var _CoreManager = __webpack_require__(693);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _InstallationController = __webpack_require__(736);
	
	var _InstallationController2 = _interopRequireDefault(_InstallationController);
	
	var _ParseOp = __webpack_require__(703);
	
	var ParseOp = _interopRequireWildcard(_ParseOp);
	
	var _RESTController = __webpack_require__(737);
	
	var _RESTController2 = _interopRequireDefault(_RESTController);
	
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj.default = obj;return newObj;
	  }
	}
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Contains all Parse API classes and functions.
	 * @class Parse
	 * @static
	 */
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	var Parse = {
	  /**
	   * Call this method first to set up your authentication tokens for Parse.
	   * You can get your keys from the Data Browser on parse.com.
	   * @method initialize
	   * @param {String} applicationId Your Parse Application ID.
	   * @param {String} javaScriptKey (optional) Your Parse JavaScript Key (Not needed for parse-server)
	   * @param {String} masterKey (optional) Your Parse Master Key. (Node.js only!)
	   * @static
	   */
	  initialize: function (applicationId, javaScriptKey) {
	    if ('browser' === 'browser' && _CoreManager2.default.get('IS_NODE')) {
	      console.log('It looks like you\'re using the browser version of the SDK in a ' + 'node.js environment. You should require(\'parse/node\') instead.');
	    }
	    Parse._initialize(applicationId, javaScriptKey);
	  },
	  _initialize: function (applicationId, javaScriptKey, masterKey) {
	    _CoreManager2.default.set('APPLICATION_ID', applicationId);
	    _CoreManager2.default.set('JAVASCRIPT_KEY', javaScriptKey);
	    _CoreManager2.default.set('MASTER_KEY', masterKey);
	    _CoreManager2.default.set('USE_MASTER_KEY', false);
	  }
	};
	
	/** These legacy setters may eventually be deprecated **/
	Object.defineProperty(Parse, 'applicationId', {
	  get: function () {
	    return _CoreManager2.default.get('APPLICATION_ID');
	  },
	  set: function (value) {
	    _CoreManager2.default.set('APPLICATION_ID', value);
	  }
	});
	Object.defineProperty(Parse, 'javaScriptKey', {
	  get: function () {
	    return _CoreManager2.default.get('JAVASCRIPT_KEY');
	  },
	  set: function (value) {
	    _CoreManager2.default.set('JAVASCRIPT_KEY', value);
	  }
	});
	Object.defineProperty(Parse, 'masterKey', {
	  get: function () {
	    return _CoreManager2.default.get('MASTER_KEY');
	  },
	  set: function (value) {
	    _CoreManager2.default.set('MASTER_KEY', value);
	  }
	});
	Object.defineProperty(Parse, 'serverURL', {
	  get: function () {
	    return _CoreManager2.default.get('SERVER_URL');
	  },
	  set: function (value) {
	    _CoreManager2.default.set('SERVER_URL', value);
	  }
	});
	Object.defineProperty(Parse, 'credentials', {
	  get: function () {
	    return _CoreManager2.default.get('CREDENTIALS');
	  },
	  set: function (value) {
	    _CoreManager2.default.set('CREDENTIALS', value);
	  }
	});
	Object.defineProperty(Parse, 'liveQueryServerURL', {
	  get: function () {
	    return _CoreManager2.default.get('LIVEQUERY_SERVER_URL');
	  },
	  set: function (value) {
	    _CoreManager2.default.set('LIVEQUERY_SERVER_URL', value);
	  }
	});
	/** End setters **/
	
	Parse.ACL = __webpack_require__(659).default;
	Parse.Analytics = __webpack_require__(738);
	Parse.Cloud = __webpack_require__(739);
	Parse.CoreManager = __webpack_require__(693);
	Parse.Config = __webpack_require__(740).default;
	Parse.Error = __webpack_require__(686).default;
	Parse.FacebookUtils = __webpack_require__(741).default;
	Parse.File = __webpack_require__(695).default;
	Parse.GeoPoint = __webpack_require__(706).default;
	Parse.Installation = __webpack_require__(742).default;
	Parse.Object = __webpack_require__(687).default;
	Parse.Op = {
	  Set: ParseOp.SetOp,
	  Unset: ParseOp.UnsetOp,
	  Increment: ParseOp.IncrementOp,
	  Add: ParseOp.AddOp,
	  Remove: ParseOp.RemoveOp,
	  AddUnique: ParseOp.AddUniqueOp,
	  Relation: ParseOp.RelationOp
	};
	Parse.Promise = __webpack_require__(696).default;
	Parse.Push = __webpack_require__(743);
	Parse.Query = __webpack_require__(708).default;
	Parse.Relation = __webpack_require__(702).default;
	Parse.Role = __webpack_require__(669).default;
	Parse.Session = __webpack_require__(733).default;
	Parse.Storage = __webpack_require__(734);
	Parse.User = __webpack_require__(731).default;
	Parse.LiveQuery = __webpack_require__(744).default;
	Parse.LiveQueryClient = __webpack_require__(747).default;
	
	Parse._request = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  return _CoreManager2.default.getRESTController().request.apply(null, args);
	};
	Parse._ajax = function () {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  return _CoreManager2.default.getRESTController().ajax.apply(null, args);
	};
	// We attempt to match the signatures of the legacy versions of these methods
	Parse._decode = function (_, value) {
	  return (0, _decode2.default)(value);
	};
	Parse._encode = function (value, _, disallowObjects) {
	  return (0, _encode2.default)(value, disallowObjects);
	};
	Parse._getInstallationId = function () {
	  return _CoreManager2.default.getInstallationController().currentInstallationId();
	};
	
	_CoreManager2.default.setInstallationController(_InstallationController2.default);
	_CoreManager2.default.setRESTController(_RESTController2.default);
	
	// For legacy requires, of the form `var Parse = require('parse').Parse`
	Parse.Parse = Parse;
	
	module.exports = Parse;

/***/ },
/* 590 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports.default = decode;
	
	var _ParseACL = __webpack_require__(659);
	
	var _ParseACL2 = _interopRequireDefault(_ParseACL);
	
	var _ParseFile = __webpack_require__(695);
	
	var _ParseFile2 = _interopRequireDefault(_ParseFile);
	
	var _ParseGeoPoint = __webpack_require__(706);
	
	var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);
	
	var _ParseObject = __webpack_require__(687);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParseOp = __webpack_require__(703);
	
	var _ParseRelation = __webpack_require__(702);
	
	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function decode(value) {
	  if (value === null || (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) !== 'object') {
	    return value;
	  }
	  if (Array.isArray(value)) {
	    var dup = [];
	    value.forEach(function (v, i) {
	      dup[i] = decode(v);
	    });
	    return dup;
	  }
	  if (typeof value.__op === 'string') {
	    return (0, _ParseOp.opFromJSON)(value);
	  }
	  if (value.__type === 'Pointer' && value.className) {
	    return _ParseObject2.default.fromJSON(value);
	  }
	  if (value.__type === 'Object' && value.className) {
	    return _ParseObject2.default.fromJSON(value);
	  }
	  if (value.__type === 'Relation') {
	    // The parent and key fields will be populated by the parent
	    var relation = new _ParseRelation2.default(null, null);
	    relation.targetClassName = value.className;
	    return relation;
	  }
	  if (value.__type === 'Date') {
	    return new Date(value.iso);
	  }
	  if (value.__type === 'File') {
	    return _ParseFile2.default.fromJSON(value);
	  }
	  if (value.__type === 'GeoPoint') {
	    return new _ParseGeoPoint2.default({
	      latitude: value.latitude,
	      longitude: value.longitude
	    });
	  }
	  var copy = {};
	  for (var k in value) {
	    copy[k] = decode(value[k]);
	  }
	  return copy;
	}

/***/ },
/* 591 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(592);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(643);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 592 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(593), __esModule: true };

/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(594);
	__webpack_require__(638);
	module.exports = __webpack_require__(642).f('iterator');

/***/ },
/* 594 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(595)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(598)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 595 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(596)
	  , defined   = __webpack_require__(597);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 596 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 597 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(599)
	  , $export        = __webpack_require__(600)
	  , redefine       = __webpack_require__(615)
	  , hide           = __webpack_require__(605)
	  , has            = __webpack_require__(616)
	  , Iterators      = __webpack_require__(617)
	  , $iterCreate    = __webpack_require__(618)
	  , setToStringTag = __webpack_require__(634)
	  , getPrototypeOf = __webpack_require__(636)
	  , ITERATOR       = __webpack_require__(635)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 599 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 600 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(601)
	  , core      = __webpack_require__(602)
	  , ctx       = __webpack_require__(603)
	  , hide      = __webpack_require__(605)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 601 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 602 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 603 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(604);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 604 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 605 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(606)
	  , createDesc = __webpack_require__(614);
	module.exports = __webpack_require__(610) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 606 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(607)
	  , IE8_DOM_DEFINE = __webpack_require__(609)
	  , toPrimitive    = __webpack_require__(613)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(610) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 607 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(608);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 608 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 609 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(610) && !__webpack_require__(611)(function(){
	  return Object.defineProperty(__webpack_require__(612)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 610 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(611)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 611 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 612 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(608)
	  , document = __webpack_require__(601).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 613 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(608);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 614 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 615 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(605);

/***/ },
/* 616 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 617 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 618 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(619)
	  , descriptor     = __webpack_require__(614)
	  , setToStringTag = __webpack_require__(634)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(605)(IteratorPrototype, __webpack_require__(635)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 619 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(607)
	  , dPs         = __webpack_require__(620)
	  , enumBugKeys = __webpack_require__(632)
	  , IE_PROTO    = __webpack_require__(629)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(612)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(633).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 620 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(606)
	  , anObject = __webpack_require__(607)
	  , getKeys  = __webpack_require__(621);
	
	module.exports = __webpack_require__(610) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 621 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(622)
	  , enumBugKeys = __webpack_require__(632);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 622 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(616)
	  , toIObject    = __webpack_require__(623)
	  , arrayIndexOf = __webpack_require__(626)(false)
	  , IE_PROTO     = __webpack_require__(629)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 623 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(624)
	  , defined = __webpack_require__(597);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 624 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(625);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 625 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 626 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(623)
	  , toLength  = __webpack_require__(627)
	  , toIndex   = __webpack_require__(628);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 627 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(596)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 628 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(596)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 629 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(630)('keys')
	  , uid    = __webpack_require__(631);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 630 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(601)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 631 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 632 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 633 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(601).document && document.documentElement;

/***/ },
/* 634 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(606).f
	  , has = __webpack_require__(616)
	  , TAG = __webpack_require__(635)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 635 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(630)('wks')
	  , uid        = __webpack_require__(631)
	  , Symbol     = __webpack_require__(601).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 636 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(616)
	  , toObject    = __webpack_require__(637)
	  , IE_PROTO    = __webpack_require__(629)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 637 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(597);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 638 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(639);
	var global        = __webpack_require__(601)
	  , hide          = __webpack_require__(605)
	  , Iterators     = __webpack_require__(617)
	  , TO_STRING_TAG = __webpack_require__(635)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 639 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(640)
	  , step             = __webpack_require__(641)
	  , Iterators        = __webpack_require__(617)
	  , toIObject        = __webpack_require__(623);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(598)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 640 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 641 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 642 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(635);

/***/ },
/* 643 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(644), __esModule: true };

/***/ },
/* 644 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(645);
	__webpack_require__(656);
	__webpack_require__(657);
	__webpack_require__(658);
	module.exports = __webpack_require__(602).Symbol;

/***/ },
/* 645 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(601)
	  , has            = __webpack_require__(616)
	  , DESCRIPTORS    = __webpack_require__(610)
	  , $export        = __webpack_require__(600)
	  , redefine       = __webpack_require__(615)
	  , META           = __webpack_require__(646).KEY
	  , $fails         = __webpack_require__(611)
	  , shared         = __webpack_require__(630)
	  , setToStringTag = __webpack_require__(634)
	  , uid            = __webpack_require__(631)
	  , wks            = __webpack_require__(635)
	  , wksExt         = __webpack_require__(642)
	  , wksDefine      = __webpack_require__(647)
	  , keyOf          = __webpack_require__(648)
	  , enumKeys       = __webpack_require__(649)
	  , isArray        = __webpack_require__(652)
	  , anObject       = __webpack_require__(607)
	  , toIObject      = __webpack_require__(623)
	  , toPrimitive    = __webpack_require__(613)
	  , createDesc     = __webpack_require__(614)
	  , _create        = __webpack_require__(619)
	  , gOPNExt        = __webpack_require__(653)
	  , $GOPD          = __webpack_require__(655)
	  , $DP            = __webpack_require__(606)
	  , $keys          = __webpack_require__(621)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(654).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(651).f  = $propertyIsEnumerable;
	  __webpack_require__(650).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(599)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(605)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 646 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(631)('meta')
	  , isObject = __webpack_require__(608)
	  , has      = __webpack_require__(616)
	  , setDesc  = __webpack_require__(606).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(611)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 647 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(601)
	  , core           = __webpack_require__(602)
	  , LIBRARY        = __webpack_require__(599)
	  , wksExt         = __webpack_require__(642)
	  , defineProperty = __webpack_require__(606).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 648 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(621)
	  , toIObject = __webpack_require__(623);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 649 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(621)
	  , gOPS    = __webpack_require__(650)
	  , pIE     = __webpack_require__(651);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 650 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 651 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 652 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(625);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 653 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(623)
	  , gOPN      = __webpack_require__(654).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 654 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(622)
	  , hiddenKeys = __webpack_require__(632).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 655 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(651)
	  , createDesc     = __webpack_require__(614)
	  , toIObject      = __webpack_require__(623)
	  , toPrimitive    = __webpack_require__(613)
	  , has            = __webpack_require__(616)
	  , IE8_DOM_DEFINE = __webpack_require__(609)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(610) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 656 */
/***/ function(module, exports) {



/***/ },
/* 657 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(647)('asyncIterator');

/***/ },
/* 658 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(647)('observable');

/***/ },
/* 659 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(660);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(665);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _ParseRole = __webpack_require__(669);
	
	var _ParseRole2 = _interopRequireDefault(_ParseRole);
	
	var _ParseUser = __webpack_require__(731);
	
	var _ParseUser2 = _interopRequireDefault(_ParseUser);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	var PUBLIC_KEY = '*';
	
	/**
	 * Creates a new ACL.
	 * If no argument is given, the ACL has no permissions for anyone.
	 * If the argument is a Parse.User, the ACL will have read and write
	 *   permission for only that user.
	 * If the argument is any other JSON object, that object will be interpretted
	 *   as a serialized ACL created with toJSON().
	 * @class Parse.ACL
	 * @constructor
	 *
	 * <p>An ACL, or Access Control List can be added to any
	 * <code>Parse.Object</code> to restrict access to only a subset of users
	 * of your application.</p>
	 */
	
	var ParseACL = function () {
	  function ParseACL(arg1) {
	    (0, _classCallCheck3.default)(this, ParseACL);
	
	    this.permissionsById = {};
	    if (arg1 && (typeof arg1 === 'undefined' ? 'undefined' : (0, _typeof3.default)(arg1)) === 'object') {
	      if (arg1 instanceof _ParseUser2.default) {
	        this.setReadAccess(arg1, true);
	        this.setWriteAccess(arg1, true);
	      } else {
	        for (var userId in arg1) {
	          var accessList = arg1[userId];
	          if (typeof userId !== 'string') {
	            throw new TypeError('Tried to create an ACL with an invalid user id.');
	          }
	          this.permissionsById[userId] = {};
	          for (var permission in accessList) {
	            var allowed = accessList[permission];
	            if (permission !== 'read' && permission !== 'write') {
	              throw new TypeError('Tried to create an ACL with an invalid permission type.');
	            }
	            if (typeof allowed !== 'boolean') {
	              throw new TypeError('Tried to create an ACL with an invalid permission value.');
	            }
	            this.permissionsById[userId][permission] = allowed;
	          }
	        }
	      }
	    } else if (typeof arg1 === 'function') {
	      throw new TypeError('ParseACL constructed with a function. Did you forget ()?');
	    }
	  }
	
	  /**
	   * Returns a JSON-encoded version of the ACL.
	   * @method toJSON
	   * @return {Object}
	   */
	
	  (0, _createClass3.default)(ParseACL, [{
	    key: 'toJSON',
	    value: function () {
	      var permissions = {};
	      for (var p in this.permissionsById) {
	        permissions[p] = this.permissionsById[p];
	      }
	      return permissions;
	    }
	
	    /**
	     * Returns whether this ACL is equal to another object
	     * @method equals
	     * @param other The other object to compare to
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'equals',
	    value: function (other) {
	      if (!(other instanceof ParseACL)) {
	        return false;
	      }
	      var users = (0, _keys2.default)(this.permissionsById);
	      var otherUsers = (0, _keys2.default)(other.permissionsById);
	      if (users.length !== otherUsers.length) {
	        return false;
	      }
	      for (var u in this.permissionsById) {
	        if (!other.permissionsById[u]) {
	          return false;
	        }
	        if (this.permissionsById[u].read !== other.permissionsById[u].read) {
	          return false;
	        }
	        if (this.permissionsById[u].write !== other.permissionsById[u].write) {
	          return false;
	        }
	      }
	      return true;
	    }
	  }, {
	    key: '_setAccess',
	    value: function (accessType, userId, allowed) {
	      if (userId instanceof _ParseUser2.default) {
	        userId = userId.id;
	      } else if (userId instanceof _ParseRole2.default) {
	        var name = userId.getName();
	        if (!name) {
	          throw new TypeError('Role must have a name');
	        }
	        userId = 'role:' + name;
	      }
	      if (typeof userId !== 'string') {
	        throw new TypeError('userId must be a string.');
	      }
	      if (typeof allowed !== 'boolean') {
	        throw new TypeError('allowed must be either true or false.');
	      }
	      var permissions = this.permissionsById[userId];
	      if (!permissions) {
	        if (!allowed) {
	          // The user already doesn't have this permission, so no action is needed
	          return;
	        } else {
	          permissions = {};
	          this.permissionsById[userId] = permissions;
	        }
	      }
	
	      if (allowed) {
	        this.permissionsById[userId][accessType] = true;
	      } else {
	        delete permissions[accessType];
	        if ((0, _keys2.default)(permissions).length === 0) {
	          delete this.permissionsById[userId];
	        }
	      }
	    }
	  }, {
	    key: '_getAccess',
	    value: function (accessType, userId) {
	      if (userId instanceof _ParseUser2.default) {
	        userId = userId.id;
	        if (!userId) {
	          throw new Error('Cannot get access for a ParseUser without an ID');
	        }
	      } else if (userId instanceof _ParseRole2.default) {
	        var name = userId.getName();
	        if (!name) {
	          throw new TypeError('Role must have a name');
	        }
	        userId = 'role:' + name;
	      }
	      var permissions = this.permissionsById[userId];
	      if (!permissions) {
	        return false;
	      }
	      return !!permissions[accessType];
	    }
	
	    /**
	     * Sets whether the given user is allowed to read this object.
	     * @method setReadAccess
	     * @param userId An instance of Parse.User or its objectId.
	     * @param {Boolean} allowed Whether that user should have read access.
	     */
	
	  }, {
	    key: 'setReadAccess',
	    value: function (userId, allowed) {
	      this._setAccess('read', userId, allowed);
	    }
	
	    /**
	     * Get whether the given user id is *explicitly* allowed to read this object.
	     * Even if this returns false, the user may still be able to access it if
	     * getPublicReadAccess returns true or a role that the user belongs to has
	     * write access.
	     * @method getReadAccess
	     * @param userId An instance of Parse.User or its objectId, or a Parse.Role.
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'getReadAccess',
	    value: function (userId) {
	      return this._getAccess('read', userId);
	    }
	
	    /**
	     * Sets whether the given user id is allowed to write this object.
	     * @method setWriteAccess
	     * @param userId An instance of Parse.User or its objectId, or a Parse.Role..
	     * @param {Boolean} allowed Whether that user should have write access.
	     */
	
	  }, {
	    key: 'setWriteAccess',
	    value: function (userId, allowed) {
	      this._setAccess('write', userId, allowed);
	    }
	
	    /**
	     * Gets whether the given user id is *explicitly* allowed to write this object.
	     * Even if this returns false, the user may still be able to write it if
	     * getPublicWriteAccess returns true or a role that the user belongs to has
	     * write access.
	     * @method getWriteAccess
	     * @param userId An instance of Parse.User or its objectId, or a Parse.Role.
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'getWriteAccess',
	    value: function (userId) {
	      return this._getAccess('write', userId);
	    }
	
	    /**
	     * Sets whether the public is allowed to read this object.
	     * @method setPublicReadAccess
	     * @param {Boolean} allowed
	     */
	
	  }, {
	    key: 'setPublicReadAccess',
	    value: function (allowed) {
	      this.setReadAccess(PUBLIC_KEY, allowed);
	    }
	
	    /**
	     * Gets whether the public is allowed to read this object.
	     * @method getPublicReadAccess
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'getPublicReadAccess',
	    value: function () {
	      return this.getReadAccess(PUBLIC_KEY);
	    }
	
	    /**
	     * Sets whether the public is allowed to write this object.
	     * @method setPublicWriteAccess
	     * @param {Boolean} allowed
	     */
	
	  }, {
	    key: 'setPublicWriteAccess',
	    value: function (allowed) {
	      this.setWriteAccess(PUBLIC_KEY, allowed);
	    }
	
	    /**
	     * Gets whether the public is allowed to write this object.
	     * @method getPublicWriteAccess
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'getPublicWriteAccess',
	    value: function () {
	      return this.getWriteAccess(PUBLIC_KEY);
	    }
	
	    /**
	     * Gets whether users belonging to the given role are allowed
	     * to read this object. Even if this returns false, the role may
	     * still be able to write it if a parent role has read access.
	     *
	     * @method getRoleReadAccess
	     * @param role The name of the role, or a Parse.Role object.
	     * @return {Boolean} true if the role has read access. false otherwise.
	     * @throws {TypeError} If role is neither a Parse.Role nor a String.
	     */
	
	  }, {
	    key: 'getRoleReadAccess',
	    value: function (role) {
	      if (role instanceof _ParseRole2.default) {
	        // Normalize to the String name
	        role = role.getName();
	      }
	      if (typeof role !== 'string') {
	        throw new TypeError('role must be a ParseRole or a String');
	      }
	      return this.getReadAccess('role:' + role);
	    }
	
	    /**
	     * Gets whether users belonging to the given role are allowed
	     * to write this object. Even if this returns false, the role may
	     * still be able to write it if a parent role has write access.
	     *
	     * @method getRoleWriteAccess
	     * @param role The name of the role, or a Parse.Role object.
	     * @return {Boolean} true if the role has write access. false otherwise.
	     * @throws {TypeError} If role is neither a Parse.Role nor a String.
	     */
	
	  }, {
	    key: 'getRoleWriteAccess',
	    value: function (role) {
	      if (role instanceof _ParseRole2.default) {
	        // Normalize to the String name
	        role = role.getName();
	      }
	      if (typeof role !== 'string') {
	        throw new TypeError('role must be a ParseRole or a String');
	      }
	      return this.getWriteAccess('role:' + role);
	    }
	
	    /**
	     * Sets whether users belonging to the given role are allowed
	     * to read this object.
	     *
	     * @method setRoleReadAccess
	     * @param role The name of the role, or a Parse.Role object.
	     * @param {Boolean} allowed Whether the given role can read this object.
	     * @throws {TypeError} If role is neither a Parse.Role nor a String.
	     */
	
	  }, {
	    key: 'setRoleReadAccess',
	    value: function (role, allowed) {
	      if (role instanceof _ParseRole2.default) {
	        // Normalize to the String name
	        role = role.getName();
	      }
	      if (typeof role !== 'string') {
	        throw new TypeError('role must be a ParseRole or a String');
	      }
	      this.setReadAccess('role:' + role, allowed);
	    }
	
	    /**
	     * Sets whether users belonging to the given role are allowed
	     * to write this object.
	     *
	     * @method setRoleWriteAccess
	     * @param role The name of the role, or a Parse.Role object.
	     * @param {Boolean} allowed Whether the given role can write this object.
	     * @throws {TypeError} If role is neither a Parse.Role nor a String.
	     */
	
	  }, {
	    key: 'setRoleWriteAccess',
	    value: function (role, allowed) {
	      if (role instanceof _ParseRole2.default) {
	        // Normalize to the String name
	        role = role.getName();
	      }
	      if (typeof role !== 'string') {
	        throw new TypeError('role must be a ParseRole or a String');
	      }
	      this.setWriteAccess('role:' + role, allowed);
	    }
	  }]);
	  return ParseACL;
	}();
	
	exports.default = ParseACL;

/***/ },
/* 660 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(661), __esModule: true };

/***/ },
/* 661 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(662);
	module.exports = __webpack_require__(602).Object.keys;

/***/ },
/* 662 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(637)
	  , $keys    = __webpack_require__(621);
	
	__webpack_require__(663)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 663 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(600)
	  , core    = __webpack_require__(602)
	  , fails   = __webpack_require__(611);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 664 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 665 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(666);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 666 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(667), __esModule: true };

/***/ },
/* 667 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(668);
	var $Object = __webpack_require__(602).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 668 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(600);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(610), 'Object', {defineProperty: __webpack_require__(606).f});

/***/ },
/* 669 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(670);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(665);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(673);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get2 = __webpack_require__(674);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _inherits2 = __webpack_require__(678);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _ParseACL = __webpack_require__(659);
	
	var _ParseACL2 = _interopRequireDefault(_ParseACL);
	
	var _ParseError = __webpack_require__(686);
	
	var _ParseError2 = _interopRequireDefault(_ParseError);
	
	var _ParseObject2 = __webpack_require__(687);
	
	var _ParseObject3 = _interopRequireDefault(_ParseObject2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Represents a Role on the Parse server. Roles represent groupings of
	 * Users for the purposes of granting permissions (e.g. specifying an ACL
	 * for an Object). Roles are specified by their sets of child users and
	 * child roles, all of which are granted any permissions that the parent
	 * role has.
	 *
	 * <p>Roles must have a name (which cannot be changed after creation of the
	 * role), and must specify an ACL.</p>
	 * @class Parse.Role
	 * @constructor
	 * @param {String} name The name of the Role to create.
	 * @param {Parse.ACL} acl The ACL for this role. Roles must have an ACL.
	 * A Parse.Role is a local representation of a role persisted to the Parse
	 * cloud.
	 */
	var ParseRole = function (_ParseObject) {
	  (0, _inherits3.default)(ParseRole, _ParseObject);
	
	  function ParseRole(name, acl) {
	    (0, _classCallCheck3.default)(this, ParseRole);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (ParseRole.__proto__ || (0, _getPrototypeOf2.default)(ParseRole)).call(this, '_Role'));
	
	    if (typeof name === 'string' && acl instanceof _ParseACL2.default) {
	      _this.setName(name);
	      _this.setACL(acl);
	    }
	    return _this;
	  }
	
	  /**
	   * Gets the name of the role.  You can alternatively call role.get("name")
	   *
	   * @method getName
	   * @return {String} the name of the role.
	   */
	
	  (0, _createClass3.default)(ParseRole, [{
	    key: 'getName',
	    value: function () {
	      var name = this.get('name');
	      if (name == null || typeof name === 'string') {
	        return name;
	      }
	      return '';
	    }
	
	    /**
	     * Sets the name for a role. This value must be set before the role has
	     * been saved to the server, and cannot be set once the role has been
	     * saved.
	     *
	     * <p>
	     *   A role's name can only contain alphanumeric characters, _, -, and
	     *   spaces.
	     * </p>
	     *
	     * <p>This is equivalent to calling role.set("name", name)</p>
	     *
	     * @method setName
	     * @param {String} name The name of the role.
	     * @param {Object} options Standard options object with success and error
	     *     callbacks.
	     */
	
	  }, {
	    key: 'setName',
	    value: function (name, options) {
	      return this.set('name', name, options);
	    }
	
	    /**
	     * Gets the Parse.Relation for the Parse.Users that are direct
	     * children of this role. These users are granted any privileges that this
	     * role has been granted (e.g. read or write access through ACLs). You can
	     * add or remove users from the role through this relation.
	     *
	     * <p>This is equivalent to calling role.relation("users")</p>
	     *
	     * @method getUsers
	     * @return {Parse.Relation} the relation for the users belonging to this
	     *     role.
	     */
	
	  }, {
	    key: 'getUsers',
	    value: function () {
	      return this.relation('users');
	    }
	
	    /**
	     * Gets the Parse.Relation for the Parse.Roles that are direct
	     * children of this role. These roles' users are granted any privileges that
	     * this role has been granted (e.g. read or write access through ACLs). You
	     * can add or remove child roles from this role through this relation.
	     *
	     * <p>This is equivalent to calling role.relation("roles")</p>
	     *
	     * @method getRoles
	     * @return {Parse.Relation} the relation for the roles belonging to this
	     *     role.
	     */
	
	  }, {
	    key: 'getRoles',
	    value: function () {
	      return this.relation('roles');
	    }
	  }, {
	    key: 'validate',
	    value: function (attrs, options) {
	      var isInvalid = (0, _get3.default)(ParseRole.prototype.__proto__ || (0, _getPrototypeOf2.default)(ParseRole.prototype), 'validate', this).call(this, attrs, options);
	      if (isInvalid) {
	        return isInvalid;
	      }
	
	      if ('name' in attrs && attrs.name !== this.getName()) {
	        var newName = attrs.name;
	        if (this.id && this.id !== attrs.objectId) {
	          // Check to see if the objectId being set matches this.id
	          // This happens during a fetch -- the id is set before calling fetch
	          // Let the name be set in this case
	          return new _ParseError2.default(_ParseError2.default.OTHER_CAUSE, 'A role\'s name can only be set before it has been saved.');
	        }
	        if (typeof newName !== 'string') {
	          return new _ParseError2.default(_ParseError2.default.OTHER_CAUSE, 'A role\'s name must be a String.');
	        }
	        if (!/^[0-9a-zA-Z\-_ ]+$/.test(newName)) {
	          return new _ParseError2.default(_ParseError2.default.OTHER_CAUSE, 'A role\'s name can be only contain alphanumeric characters, _, ' + '-, and spaces.');
	        }
	      }
	      return false;
	    }
	  }]);
	  return ParseRole;
	}(_ParseObject3.default); /**
	                           * Copyright (c) 2015-present, Parse, LLC.
	                           * All rights reserved.
	                           *
	                           * This source code is licensed under the BSD-style license found in the
	                           * LICENSE file in the root directory of this source tree. An additional grant
	                           * of patent rights can be found in the PATENTS file in the same directory.
	                           *
	                           * 
	                           */
	
	exports.default = ParseRole;
	
	_ParseObject3.default.registerSubclass('_Role', ParseRole);

/***/ },
/* 670 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(671), __esModule: true };

/***/ },
/* 671 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(672);
	module.exports = __webpack_require__(602).Object.getPrototypeOf;

/***/ },
/* 672 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(637)
	  , $getPrototypeOf = __webpack_require__(636);
	
	__webpack_require__(663)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 673 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 674 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _getPrototypeOf = __webpack_require__(670);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _getOwnPropertyDescriptor = __webpack_require__(675);
	
	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);
	
	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);
	
	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;
	
	    if (getter === undefined) {
	      return undefined;
	    }
	
	    return getter.call(receiver);
	  }
	};

/***/ },
/* 675 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(676), __esModule: true };

/***/ },
/* 676 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(677);
	var $Object = __webpack_require__(602).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 677 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(623)
	  , $getOwnPropertyDescriptor = __webpack_require__(655).f;
	
	__webpack_require__(663)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 678 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(679);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(683);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 679 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(680), __esModule: true };

/***/ },
/* 680 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(681);
	module.exports = __webpack_require__(602).Object.setPrototypeOf;

/***/ },
/* 681 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(600);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(682).set});

/***/ },
/* 682 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(608)
	  , anObject = __webpack_require__(607);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(603)(Function.call, __webpack_require__(655).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 683 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(684), __esModule: true };

/***/ },
/* 684 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(685);
	var $Object = __webpack_require__(602).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 685 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(600)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(619)});

/***/ },
/* 686 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	/**
	 * Constructs a new Parse.Error object with the given code and message.
	 * @class Parse.Error
	 * @constructor
	 * @param {Number} code An error code constant from <code>Parse.Error</code>.
	 * @param {String} message A detailed description of the error.
	 */
	var ParseError = function ParseError(code, message) {
	  (0, _classCallCheck3.default)(this, ParseError);
	
	  this.code = code;
	  this.message = message;
	};
	
	/**
	 * Error code indicating some error other than those enumerated here.
	 * @property OTHER_CAUSE
	 * @static
	 * @final
	 */
	
	exports.default = ParseError;
	ParseError.OTHER_CAUSE = -1;
	
	/**
	 * Error code indicating that something has gone wrong with the server.
	 * If you get this error code, it is Parse's fault. Contact us at
	 * https://parse.com/help
	 * @property INTERNAL_SERVER_ERROR
	 * @static
	 * @final
	 */
	ParseError.INTERNAL_SERVER_ERROR = 1;
	
	/**
	 * Error code indicating the connection to the Parse servers failed.
	 * @property CONNECTION_FAILED
	 * @static
	 * @final
	 */
	ParseError.CONNECTION_FAILED = 100;
	
	/**
	 * Error code indicating the specified object doesn't exist.
	 * @property OBJECT_NOT_FOUND
	 * @static
	 * @final
	 */
	ParseError.OBJECT_NOT_FOUND = 101;
	
	/**
	 * Error code indicating you tried to query with a datatype that doesn't
	 * support it, like exact matching an array or object.
	 * @property INVALID_QUERY
	 * @static
	 * @final
	 */
	ParseError.INVALID_QUERY = 102;
	
	/**
	 * Error code indicating a missing or invalid classname. Classnames are
	 * case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the
	 * only valid characters.
	 * @property INVALID_CLASS_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_CLASS_NAME = 103;
	
	/**
	 * Error code indicating an unspecified object id.
	 * @property MISSING_OBJECT_ID
	 * @static
	 * @final
	 */
	ParseError.MISSING_OBJECT_ID = 104;
	
	/**
	 * Error code indicating an invalid key name. Keys are case-sensitive. They
	 * must start with a letter, and a-zA-Z0-9_ are the only valid characters.
	 * @property INVALID_KEY_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_KEY_NAME = 105;
	
	/**
	 * Error code indicating a malformed pointer. You should not see this unless
	 * you have been mucking about changing internal Parse code.
	 * @property INVALID_POINTER
	 * @static
	 * @final
	 */
	ParseError.INVALID_POINTER = 106;
	
	/**
	 * Error code indicating that badly formed JSON was received upstream. This
	 * either indicates you have done something unusual with modifying how
	 * things encode to JSON, or the network is failing badly.
	 * @property INVALID_JSON
	 * @static
	 * @final
	 */
	ParseError.INVALID_JSON = 107;
	
	/**
	 * Error code indicating that the feature you tried to access is only
	 * available internally for testing purposes.
	 * @property COMMAND_UNAVAILABLE
	 * @static
	 * @final
	 */
	ParseError.COMMAND_UNAVAILABLE = 108;
	
	/**
	 * You must call Parse.initialize before using the Parse library.
	 * @property NOT_INITIALIZED
	 * @static
	 * @final
	 */
	ParseError.NOT_INITIALIZED = 109;
	
	/**
	 * Error code indicating that a field was set to an inconsistent type.
	 * @property INCORRECT_TYPE
	 * @static
	 * @final
	 */
	ParseError.INCORRECT_TYPE = 111;
	
	/**
	 * Error code indicating an invalid channel name. A channel name is either
	 * an empty string (the broadcast channel) or contains only a-zA-Z0-9_
	 * characters and starts with a letter.
	 * @property INVALID_CHANNEL_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_CHANNEL_NAME = 112;
	
	/**
	 * Error code indicating that push is misconfigured.
	 * @property PUSH_MISCONFIGURED
	 * @static
	 * @final
	 */
	ParseError.PUSH_MISCONFIGURED = 115;
	
	/**
	 * Error code indicating that the object is too large.
	 * @property OBJECT_TOO_LARGE
	 * @static
	 * @final
	 */
	ParseError.OBJECT_TOO_LARGE = 116;
	
	/**
	 * Error code indicating that the operation isn't allowed for clients.
	 * @property OPERATION_FORBIDDEN
	 * @static
	 * @final
	 */
	ParseError.OPERATION_FORBIDDEN = 119;
	
	/**
	 * Error code indicating the result was not found in the cache.
	 * @property CACHE_MISS
	 * @static
	 * @final
	 */
	ParseError.CACHE_MISS = 120;
	
	/**
	 * Error code indicating that an invalid key was used in a nested
	 * JSONObject.
	 * @property INVALID_NESTED_KEY
	 * @static
	 * @final
	 */
	ParseError.INVALID_NESTED_KEY = 121;
	
	/**
	 * Error code indicating that an invalid filename was used for ParseFile.
	 * A valid file name contains only a-zA-Z0-9_. characters and is between 1
	 * and 128 characters.
	 * @property INVALID_FILE_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_FILE_NAME = 122;
	
	/**
	 * Error code indicating an invalid ACL was provided.
	 * @property INVALID_ACL
	 * @static
	 * @final
	 */
	ParseError.INVALID_ACL = 123;
	
	/**
	 * Error code indicating that the request timed out on the server. Typically
	 * this indicates that the request is too expensive to run.
	 * @property TIMEOUT
	 * @static
	 * @final
	 */
	ParseError.TIMEOUT = 124;
	
	/**
	 * Error code indicating that the email address was invalid.
	 * @property INVALID_EMAIL_ADDRESS
	 * @static
	 * @final
	 */
	ParseError.INVALID_EMAIL_ADDRESS = 125;
	
	/**
	 * Error code indicating a missing content type.
	 * @property MISSING_CONTENT_TYPE
	 * @static
	 * @final
	 */
	ParseError.MISSING_CONTENT_TYPE = 126;
	
	/**
	 * Error code indicating a missing content length.
	 * @property MISSING_CONTENT_LENGTH
	 * @static
	 * @final
	 */
	ParseError.MISSING_CONTENT_LENGTH = 127;
	
	/**
	 * Error code indicating an invalid content length.
	 * @property INVALID_CONTENT_LENGTH
	 * @static
	 * @final
	 */
	ParseError.INVALID_CONTENT_LENGTH = 128;
	
	/**
	 * Error code indicating a file that was too large.
	 * @property FILE_TOO_LARGE
	 * @static
	 * @final
	 */
	ParseError.FILE_TOO_LARGE = 129;
	
	/**
	 * Error code indicating an error saving a file.
	 * @property FILE_SAVE_ERROR
	 * @static
	 * @final
	 */
	ParseError.FILE_SAVE_ERROR = 130;
	
	/**
	 * Error code indicating that a unique field was given a value that is
	 * already taken.
	 * @property DUPLICATE_VALUE
	 * @static
	 * @final
	 */
	ParseError.DUPLICATE_VALUE = 137;
	
	/**
	 * Error code indicating that a role's name is invalid.
	 * @property INVALID_ROLE_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_ROLE_NAME = 139;
	
	/**
	 * Error code indicating that an application quota was exceeded.  Upgrade to
	 * resolve.
	 * @property EXCEEDED_QUOTA
	 * @static
	 * @final
	 */
	ParseError.EXCEEDED_QUOTA = 140;
	
	/**
	 * Error code indicating that a Cloud Code script failed.
	 * @property SCRIPT_FAILED
	 * @static
	 * @final
	 */
	ParseError.SCRIPT_FAILED = 141;
	
	/**
	 * Error code indicating that a Cloud Code validation failed.
	 * @property VALIDATION_ERROR
	 * @static
	 * @final
	 */
	ParseError.VALIDATION_ERROR = 142;
	
	/**
	 * Error code indicating that invalid image data was provided.
	 * @property INVALID_IMAGE_DATA
	 * @static
	 * @final
	 */
	ParseError.INVALID_IMAGE_DATA = 143;
	
	/**
	 * Error code indicating an unsaved file.
	 * @property UNSAVED_FILE_ERROR
	 * @static
	 * @final
	 */
	ParseError.UNSAVED_FILE_ERROR = 151;
	
	/**
	 * Error code indicating an invalid push time.
	 * @property INVALID_PUSH_TIME_ERROR
	 * @static
	 * @final
	 */
	ParseError.INVALID_PUSH_TIME_ERROR = 152;
	
	/**
	 * Error code indicating an error deleting a file.
	 * @property FILE_DELETE_ERROR
	 * @static
	 * @final
	 */
	ParseError.FILE_DELETE_ERROR = 153;
	
	/**
	 * Error code indicating that the application has exceeded its request
	 * limit.
	 * @property REQUEST_LIMIT_EXCEEDED
	 * @static
	 * @final
	 */
	ParseError.REQUEST_LIMIT_EXCEEDED = 155;
	
	/**
	 * Error code indicating an invalid event name.
	 * @property INVALID_EVENT_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_EVENT_NAME = 160;
	
	/**
	 * Error code indicating that the username is missing or empty.
	 * @property USERNAME_MISSING
	 * @static
	 * @final
	 */
	ParseError.USERNAME_MISSING = 200;
	
	/**
	 * Error code indicating that the password is missing or empty.
	 * @property PASSWORD_MISSING
	 * @static
	 * @final
	 */
	ParseError.PASSWORD_MISSING = 201;
	
	/**
	 * Error code indicating that the username has already been taken.
	 * @property USERNAME_TAKEN
	 * @static
	 * @final
	 */
	ParseError.USERNAME_TAKEN = 202;
	
	/**
	 * Error code indicating that the email has already been taken.
	 * @property EMAIL_TAKEN
	 * @static
	 * @final
	 */
	ParseError.EMAIL_TAKEN = 203;
	
	/**
	 * Error code indicating that the email is missing, but must be specified.
	 * @property EMAIL_MISSING
	 * @static
	 * @final
	 */
	ParseError.EMAIL_MISSING = 204;
	
	/**
	 * Error code indicating that a user with the specified email was not found.
	 * @property EMAIL_NOT_FOUND
	 * @static
	 * @final
	 */
	ParseError.EMAIL_NOT_FOUND = 205;
	
	/**
	 * Error code indicating that a user object without a valid session could
	 * not be altered.
	 * @property SESSION_MISSING
	 * @static
	 * @final
	 */
	ParseError.SESSION_MISSING = 206;
	
	/**
	 * Error code indicating that a user can only be created through signup.
	 * @property MUST_CREATE_USER_THROUGH_SIGNUP
	 * @static
	 * @final
	 */
	ParseError.MUST_CREATE_USER_THROUGH_SIGNUP = 207;
	
	/**
	 * Error code indicating that an an account being linked is already linked
	 * to another user.
	 * @property ACCOUNT_ALREADY_LINKED
	 * @static
	 * @final
	 */
	ParseError.ACCOUNT_ALREADY_LINKED = 208;
	
	/**
	 * Error code indicating that the current session token is invalid.
	 * @property INVALID_SESSION_TOKEN
	 * @static
	 * @final
	 */
	ParseError.INVALID_SESSION_TOKEN = 209;
	
	/**
	 * Error code indicating that a user cannot be linked to an account because
	 * that account's id could not be found.
	 * @property LINKED_ID_MISSING
	 * @static
	 * @final
	 */
	ParseError.LINKED_ID_MISSING = 250;
	
	/**
	 * Error code indicating that a user with a linked (e.g. Facebook) account
	 * has an invalid session.
	 * @property INVALID_LINKED_SESSION
	 * @static
	 * @final
	 */
	ParseError.INVALID_LINKED_SESSION = 251;
	
	/**
	 * Error code indicating that a service being linked (e.g. Facebook or
	 * Twitter) is unsupported.
	 * @property UNSUPPORTED_SERVICE
	 * @static
	 * @final
	 */
	ParseError.UNSUPPORTED_SERVICE = 252;
	
	/**
	 * Error code indicating that there were multiple errors. Aggregate errors
	 * have an "errors" property, which is an array of error objects with more
	 * detail about each error that occurred.
	 * @property AGGREGATE_ERROR
	 * @static
	 * @final
	 */
	ParseError.AGGREGATE_ERROR = 600;
	
	/**
	 * Error code indicating the client was unable to read an input file.
	 * @property FILE_READ_ERROR
	 * @static
	 * @final
	 */
	ParseError.FILE_READ_ERROR = 601;
	
	/**
	 * Error code indicating a real error code is unavailable because
	 * we had to use an XDomainRequest object to allow CORS requests in
	 * Internet Explorer, which strips the body from HTTP responses that have
	 * a non-2XX status code.
	 * @property X_DOMAIN_REQUEST
	 * @static
	 * @final
	 */
	ParseError.X_DOMAIN_REQUEST = 602;

/***/ },
/* 687 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty = __webpack_require__(666);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _create = __webpack_require__(683);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _freeze = __webpack_require__(688);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	var _stringify = __webpack_require__(691);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(660);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(665);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _CoreManager = __webpack_require__(693);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _canBeSerialized = __webpack_require__(694);
	
	var _canBeSerialized2 = _interopRequireDefault(_canBeSerialized);
	
	var _decode = __webpack_require__(590);
	
	var _decode2 = _interopRequireDefault(_decode);
	
	var _encode = __webpack_require__(705);
	
	var _encode2 = _interopRequireDefault(_encode);
	
	var _equals = __webpack_require__(709);
	
	var _equals2 = _interopRequireDefault(_equals);
	
	var _escape2 = __webpack_require__(710);
	
	var _escape3 = _interopRequireDefault(_escape2);
	
	var _ParseACL = __webpack_require__(659);
	
	var _ParseACL2 = _interopRequireDefault(_ParseACL);
	
	var _parseDate = __webpack_require__(711);
	
	var _parseDate2 = _interopRequireDefault(_parseDate);
	
	var _ParseError = __webpack_require__(686);
	
	var _ParseError2 = _interopRequireDefault(_ParseError);
	
	var _ParseFile = __webpack_require__(695);
	
	var _ParseFile2 = _interopRequireDefault(_ParseFile);
	
	var _ParseOp = __webpack_require__(703);
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _ParseQuery = __webpack_require__(708);
	
	var _ParseQuery2 = _interopRequireDefault(_ParseQuery);
	
	var _ParseRelation = __webpack_require__(702);
	
	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
	
	var _SingleInstanceStateController = __webpack_require__(712);
	
	var SingleInstanceStateController = _interopRequireWildcard(_SingleInstanceStateController);
	
	var _unique = __webpack_require__(707);
	
	var _unique2 = _interopRequireDefault(_unique);
	
	var _UniqueInstanceStateController = __webpack_require__(715);
	
	var UniqueInstanceStateController = _interopRequireWildcard(_UniqueInstanceStateController);
	
	var _unsavedChildren = __webpack_require__(730);
	
	var _unsavedChildren2 = _interopRequireDefault(_unsavedChildren);
	
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj.default = obj;return newObj;
	  }
	}
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	// Mapping of class names to constructors, so we can populate objects from the
	// server with appropriate subclasses of ParseObject
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	var classMap = {};
	
	// Global counter for generating unique local Ids
	var localCount = 0;
	// Global counter for generating unique Ids for non-single-instance objects
	var objectCount = 0;
	// On web clients, objects are single-instance: any two objects with the same Id
	// will have the same attributes. However, this may be dangerous default
	// behavior in a server scenario
	var singleInstance = !_CoreManager2.default.get('IS_NODE');
	if (singleInstance) {
	  _CoreManager2.default.setObjectStateController(SingleInstanceStateController);
	} else {
	  _CoreManager2.default.setObjectStateController(UniqueInstanceStateController);
	}
	
	function getServerUrlPath() {
	  var serverUrl = _CoreManager2.default.get('SERVER_URL');
	  if (serverUrl[serverUrl.length - 1] !== '/') {
	    serverUrl += '/';
	  }
	  var url = serverUrl.replace(/https?:\/\//, '');
	  return url.substr(url.indexOf('/'));
	}
	
	/**
	 * Creates a new model with defined attributes.
	 *
	 * <p>You won't normally call this method directly.  It is recommended that
	 * you use a subclass of <code>Parse.Object</code> instead, created by calling
	 * <code>extend</code>.</p>
	 *
	 * <p>However, if you don't want to use a subclass, or aren't sure which
	 * subclass is appropriate, you can use this form:<pre>
	 *     var object = new Parse.Object("ClassName");
	 * </pre>
	 * That is basically equivalent to:<pre>
	 *     var MyClass = Parse.Object.extend("ClassName");
	 *     var object = new MyClass();
	 * </pre></p>
	 *
	 * @class Parse.Object
	 * @constructor
	 * @param {String} className The class name for the object
	 * @param {Object} attributes The initial set of data to store in the object.
	 * @param {Object} options The options for this object instance.
	 */
	
	var ParseObject = function () {
	  /**
	   * The ID of this object, unique within its class.
	   * @property id
	   * @type String
	   */
	  function ParseObject(className, attributes, options) {
	    (0, _classCallCheck3.default)(this, ParseObject);
	
	    // Enable legacy initializers
	    if (typeof this.initialize === 'function') {
	      this.initialize.apply(this, arguments);
	    }
	
	    var toSet = null;
	    this._objCount = objectCount++;
	    if (typeof className === 'string') {
	      this.className = className;
	      if (attributes && (typeof attributes === 'undefined' ? 'undefined' : (0, _typeof3.default)(attributes)) === 'object') {
	        toSet = attributes;
	      }
	    } else if (className && (typeof className === 'undefined' ? 'undefined' : (0, _typeof3.default)(className)) === 'object') {
	      this.className = className.className;
	      toSet = {};
	      for (var attr in className) {
	        if (attr !== 'className') {
	          toSet[attr] = className[attr];
	        }
	      }
	      if (attributes && (typeof attributes === 'undefined' ? 'undefined' : (0, _typeof3.default)(attributes)) === 'object') {
	        options = attributes;
	      }
	    }
	    if (toSet && !this.set(toSet, options)) {
	      throw new Error('Can\'t create an invalid Parse Object');
	    }
	  }
	
	  /** Prototype getters / setters **/
	
	  (0, _createClass3.default)(ParseObject, [{
	    key: '_getId',
	
	    /** Private methods **/
	
	    /**
	     * Returns a local or server Id used uniquely identify this object
	     */
	    value: function () {
	      if (typeof this.id === 'string') {
	        return this.id;
	      }
	      if (typeof this._localId === 'string') {
	        return this._localId;
	      }
	      var localId = 'local' + String(localCount++);
	      this._localId = localId;
	      return localId;
	    }
	
	    /**
	     * Returns a unique identifier used to pull data from the State Controller.
	     */
	
	  }, {
	    key: '_getStateIdentifier',
	    value: function () {
	      if (singleInstance) {
	        var _id = this.id;
	        if (!_id) {
	          _id = this._getId();
	        }
	        return {
	          id: _id,
	          className: this.className
	        };
	      } else {
	        return this;
	      }
	    }
	  }, {
	    key: '_getServerData',
	    value: function () {
	      var stateController = _CoreManager2.default.getObjectStateController();
	      return stateController.getServerData(this._getStateIdentifier());
	    }
	  }, {
	    key: '_clearServerData',
	    value: function () {
	      var serverData = this._getServerData();
	      var unset = {};
	      for (var attr in serverData) {
	        unset[attr] = undefined;
	      }
	      var stateController = _CoreManager2.default.getObjectStateController();
	      stateController.setServerData(this._getStateIdentifier(), unset);
	    }
	  }, {
	    key: '_getPendingOps',
	    value: function () {
	      var stateController = _CoreManager2.default.getObjectStateController();
	      return stateController.getPendingOps(this._getStateIdentifier());
	    }
	  }, {
	    key: '_clearPendingOps',
	    value: function () {
	      var pending = this._getPendingOps();
	      var latest = pending[pending.length - 1];
	      var keys = (0, _keys2.default)(latest);
	      keys.forEach(function (key) {
	        delete latest[key];
	      });
	    }
	  }, {
	    key: '_getDirtyObjectAttributes',
	    value: function () {
	      var attributes = this.attributes;
	      var stateController = _CoreManager2.default.getObjectStateController();
	      var objectCache = stateController.getObjectCache(this._getStateIdentifier());
	      var dirty = {};
	      for (var attr in attributes) {
	        var val = attributes[attr];
	        if (val && (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) === 'object' && !(val instanceof ParseObject) && !(val instanceof _ParseFile2.default) && !(val instanceof _ParseRelation2.default)) {
	          // Due to the way browsers construct maps, the key order will not change
	          // unless the object is changed
	          try {
	            var json = (0, _encode2.default)(val, false, true);
	            var stringified = (0, _stringify2.default)(json);
	            if (objectCache[attr] !== stringified) {
	              dirty[attr] = val;
	            }
	          } catch (e) {
	            // Error occurred, possibly by a nested unsaved pointer in a mutable container
	            // No matter how it happened, it indicates a change in the attribute
	            dirty[attr] = val;
	          }
	        }
	      }
	      return dirty;
	    }
	  }, {
	    key: '_toFullJSON',
	    value: function (seen) {
	      var json = this.toJSON(seen);
	      json.__type = 'Object';
	      json.className = this.className;
	      return json;
	    }
	  }, {
	    key: '_getSaveJSON',
	    value: function () {
	      var pending = this._getPendingOps();
	      var dirtyObjects = this._getDirtyObjectAttributes();
	      var json = {};
	
	      for (var attr in dirtyObjects) {
	        json[attr] = new _ParseOp.SetOp(dirtyObjects[attr]).toJSON();
	      }
	      for (attr in pending[0]) {
	        json[attr] = pending[0][attr].toJSON();
	      }
	      return json;
	    }
	  }, {
	    key: '_getSaveParams',
	    value: function () {
	      var method = this.id ? 'PUT' : 'POST';
	      var body = this._getSaveJSON();
	      var path = 'classes/' + this.className;
	      if (this.id) {
	        path += '/' + this.id;
	      } else if (this.className === '_User') {
	        path = 'users';
	      }
	      return {
	        method: method,
	        body: body,
	        path: path
	      };
	    }
	  }, {
	    key: '_finishFetch',
	    value: function (serverData) {
	      if (!this.id && serverData.objectId) {
	        this.id = serverData.objectId;
	      }
	      var stateController = _CoreManager2.default.getObjectStateController();
	      stateController.initializeState(this._getStateIdentifier());
	      var decoded = {};
	      for (var attr in serverData) {
	        if (attr === 'ACL') {
	          decoded[attr] = new _ParseACL2.default(serverData[attr]);
	        } else if (attr !== 'objectId') {
	          decoded[attr] = (0, _decode2.default)(serverData[attr]);
	          if (decoded[attr] instanceof _ParseRelation2.default) {
	            decoded[attr]._ensureParentAndKey(this, attr);
	          }
	        }
	      }
	      if (decoded.createdAt && typeof decoded.createdAt === 'string') {
	        decoded.createdAt = (0, _parseDate2.default)(decoded.createdAt);
	      }
	      if (decoded.updatedAt && typeof decoded.updatedAt === 'string') {
	        decoded.updatedAt = (0, _parseDate2.default)(decoded.updatedAt);
	      }
	      if (!decoded.updatedAt && decoded.createdAt) {
	        decoded.updatedAt = decoded.createdAt;
	      }
	      stateController.commitServerChanges(this._getStateIdentifier(), decoded);
	    }
	  }, {
	    key: '_setExisted',
	    value: function (existed) {
	      var stateController = _CoreManager2.default.getObjectStateController();
	      var state = stateController.getState(this._getStateIdentifier());
	      if (state) {
	        state.existed = existed;
	      }
	    }
	  }, {
	    key: '_migrateId',
	    value: function (serverId) {
	      if (this._localId && serverId) {
	        if (singleInstance) {
	          var stateController = _CoreManager2.default.getObjectStateController();
	          var oldState = stateController.removeState(this._getStateIdentifier());
	          this.id = serverId;
	          delete this._localId;
	          if (oldState) {
	            stateController.initializeState(this._getStateIdentifier(), oldState);
	          }
	        } else {
	          this.id = serverId;
	          delete this._localId;
	        }
	      }
	    }
	  }, {
	    key: '_handleSaveResponse',
	    value: function (response, status) {
	      var changes = {};
	
	      var stateController = _CoreManager2.default.getObjectStateController();
	      var pending = stateController.popPendingState(this._getStateIdentifier());
	      for (var attr in pending) {
	        if (pending[attr] instanceof _ParseOp.RelationOp) {
	          changes[attr] = pending[attr].applyTo(undefined, this, attr);
	        } else if (!(attr in response)) {
	          // Only SetOps and UnsetOps should not come back with results
	          changes[attr] = pending[attr].applyTo(undefined);
	        }
	      }
	      for (attr in response) {
	        if ((attr === 'createdAt' || attr === 'updatedAt') && typeof response[attr] === 'string') {
	          changes[attr] = (0, _parseDate2.default)(response[attr]);
	        } else if (attr === 'ACL') {
	          changes[attr] = new _ParseACL2.default(response[attr]);
	        } else if (attr !== 'objectId') {
	          changes[attr] = (0, _decode2.default)(response[attr]);
	          if (changes[attr] instanceof _ParseOp.UnsetOp) {
	            changes[attr] = undefined;
	          }
	        }
	      }
	      if (changes.createdAt && !changes.updatedAt) {
	        changes.updatedAt = changes.createdAt;
	      }
	
	      this._migrateId(response.objectId);
	
	      if (status !== 201) {
	        this._setExisted(true);
	      }
	
	      stateController.commitServerChanges(this._getStateIdentifier(), changes);
	    }
	  }, {
	    key: '_handleSaveError',
	    value: function () {
	      this._getPendingOps();
	
	      var stateController = _CoreManager2.default.getObjectStateController();
	      stateController.mergeFirstPendingState(this._getStateIdentifier());
	    }
	
	    /** Public methods **/
	
	  }, {
	    key: 'initialize',
	    value: function () {}
	    // NOOP
	
	
	    /**
	     * Returns a JSON version of the object suitable for saving to Parse.
	     * @method toJSON
	     * @return {Object}
	     */
	
	  }, {
	    key: 'toJSON',
	    value: function (seen) {
	      var seenEntry = this.id ? this.className + ':' + this.id : this;
	      var seen = seen || [seenEntry];
	      var json = {};
	      var attrs = this.attributes;
	      for (var attr in attrs) {
	        if ((attr === 'createdAt' || attr === 'updatedAt') && attrs[attr].toJSON) {
	          json[attr] = attrs[attr].toJSON();
	        } else {
	          json[attr] = (0, _encode2.default)(attrs[attr], false, false, seen);
	        }
	      }
	      var pending = this._getPendingOps();
	      for (var attr in pending[0]) {
	        json[attr] = pending[0][attr].toJSON();
	      }
	
	      if (this.id) {
	        json.objectId = this.id;
	      }
	      return json;
	    }
	
	    /**
	     * Determines whether this ParseObject is equal to another ParseObject
	     * @method equals
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'equals',
	    value: function (other) {
	      if (this === other) {
	        return true;
	      }
	      return other instanceof ParseObject && this.className === other.className && this.id === other.id && typeof this.id !== 'undefined';
	    }
	
	    /**
	     * Returns true if this object has been modified since its last
	     * save/refresh.  If an attribute is specified, it returns true only if that
	     * particular attribute has been modified since the last save/refresh.
	     * @method dirty
	     * @param {String} attr An attribute name (optional).
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'dirty',
	    value: function (attr) {
	      if (!this.id) {
	        return true;
	      }
	      var pendingOps = this._getPendingOps();
	      var dirtyObjects = this._getDirtyObjectAttributes();
	      if (attr) {
	        if (dirtyObjects.hasOwnProperty(attr)) {
	          return true;
	        }
	        for (var i = 0; i < pendingOps.length; i++) {
	          if (pendingOps[i].hasOwnProperty(attr)) {
	            return true;
	          }
	        }
	        return false;
	      }
	      if ((0, _keys2.default)(pendingOps[0]).length !== 0) {
	        return true;
	      }
	      if ((0, _keys2.default)(dirtyObjects).length !== 0) {
	        return true;
	      }
	      return false;
	    }
	
	    /**
	     * Returns an array of keys that have been modified since last save/refresh
	     * @method dirtyKeys
	     * @return {Array of string}
	     */
	
	  }, {
	    key: 'dirtyKeys',
	    value: function () {
	      var pendingOps = this._getPendingOps();
	      var keys = {};
	      for (var i = 0; i < pendingOps.length; i++) {
	        for (var attr in pendingOps[i]) {
	          keys[attr] = true;
	        }
	      }
	      var dirtyObjects = this._getDirtyObjectAttributes();
	      for (var attr in dirtyObjects) {
	        keys[attr] = true;
	      }
	      return (0, _keys2.default)(keys);
	    }
	
	    /**
	     * Gets a Pointer referencing this Object.
	     * @method toPointer
	     * @return {Object}
	     */
	
	  }, {
	    key: 'toPointer',
	    value: function () {
	      if (!this.id) {
	        throw new Error('Cannot create a pointer to an unsaved ParseObject');
	      }
	      return {
	        __type: 'Pointer',
	        className: this.className,
	        objectId: this.id
	      };
	    }
	
	    /**
	     * Gets the value of an attribute.
	     * @method get
	     * @param {String} attr The string name of an attribute.
	     */
	
	  }, {
	    key: 'get',
	    value: function (attr) {
	      return this.attributes[attr];
	    }
	
	    /**
	     * Gets a relation on the given class for the attribute.
	     * @method relation
	     * @param String attr The attribute to get the relation for.
	     */
	
	  }, {
	    key: 'relation',
	    value: function (attr) {
	      var value = this.get(attr);
	      if (value) {
	        if (!(value instanceof _ParseRelation2.default)) {
	          throw new Error('Called relation() on non-relation field ' + attr);
	        }
	        value._ensureParentAndKey(this, attr);
	        return value;
	      }
	      return new _ParseRelation2.default(this, attr);
	    }
	
	    /**
	     * Gets the HTML-escaped value of an attribute.
	     * @method escape
	     * @param {String} attr The string name of an attribute.
	     */
	
	  }, {
	    key: 'escape',
	    value: function (attr) {
	      var val = this.attributes[attr];
	      if (val == null) {
	        return '';
	      }
	
	      if (typeof val !== 'string') {
	        if (typeof val.toString !== 'function') {
	          return '';
	        }
	        val = val.toString();
	      }
	      return (0, _escape3.default)(val);
	    }
	
	    /**
	     * Returns <code>true</code> if the attribute contains a value that is not
	     * null or undefined.
	     * @method has
	     * @param {String} attr The string name of the attribute.
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'has',
	    value: function (attr) {
	      var attributes = this.attributes;
	      if (attributes.hasOwnProperty(attr)) {
	        return attributes[attr] != null;
	      }
	      return false;
	    }
	
	    /**
	     * Sets a hash of model attributes on the object.
	     *
	     * <p>You can call it with an object containing keys and values, or with one
	     * key and value.  For example:<pre>
	     *   gameTurn.set({
	     *     player: player1,
	     *     diceRoll: 2
	     *   }, {
	     *     error: function(gameTurnAgain, error) {
	     *       // The set failed validation.
	     *     }
	     *   });
	     *
	     *   game.set("currentPlayer", player2, {
	     *     error: function(gameTurnAgain, error) {
	     *       // The set failed validation.
	     *     }
	     *   });
	     *
	     *   game.set("finished", true);</pre></p>
	     *
	     * @method set
	     * @param {String} key The key to set.
	     * @param {} value The value to give it.
	     * @param {Object} options A set of options for the set.
	     *     The only supported option is <code>error</code>.
	     * @return {Boolean} true if the set succeeded.
	     */
	
	  }, {
	    key: 'set',
	    value: function (key, value, options) {
	      var changes = {};
	      var newOps = {};
	      if (key && (typeof key === 'undefined' ? 'undefined' : (0, _typeof3.default)(key)) === 'object') {
	        changes = key;
	        options = value;
	      } else if (typeof key === 'string') {
	        changes[key] = value;
	      } else {
	        return this;
	      }
	
	      options = options || {};
	      var readonly = [];
	      if (typeof this.constructor.readOnlyAttributes === 'function') {
	        readonly = readonly.concat(this.constructor.readOnlyAttributes());
	      }
	      for (var k in changes) {
	        if (k === 'createdAt' || k === 'updatedAt') {
	          // This property is read-only, but for legacy reasons we silently
	          // ignore it
	          continue;
	        }
	        if (readonly.indexOf(k) > -1) {
	          throw new Error('Cannot modify readonly attribute: ' + k);
	        }
	        if (options.unset) {
	          newOps[k] = new _ParseOp.UnsetOp();
	        } else if (changes[k] instanceof _ParseOp.Op) {
	          newOps[k] = changes[k];
	        } else if (changes[k] && (0, _typeof3.default)(changes[k]) === 'object' && typeof changes[k].__op === 'string') {
	          newOps[k] = (0, _ParseOp.opFromJSON)(changes[k]);
	        } else if (k === 'objectId' || k === 'id') {
	          if (typeof changes[k] === 'string') {
	            this.id = changes[k];
	          }
	        } else if (k === 'ACL' && (0, _typeof3.default)(changes[k]) === 'object' && !(changes[k] instanceof _ParseACL2.default)) {
	          newOps[k] = new _ParseOp.SetOp(new _ParseACL2.default(changes[k]));
	        } else {
	          newOps[k] = new _ParseOp.SetOp(changes[k]);
	        }
	      }
	
	      // Calculate new values
	      var currentAttributes = this.attributes;
	      var newValues = {};
	      for (var attr in newOps) {
	        if (newOps[attr] instanceof _ParseOp.RelationOp) {
	          newValues[attr] = newOps[attr].applyTo(currentAttributes[attr], this, attr);
	        } else if (!(newOps[attr] instanceof _ParseOp.UnsetOp)) {
	          newValues[attr] = newOps[attr].applyTo(currentAttributes[attr]);
	        }
	      }
	
	      // Validate changes
	      if (!options.ignoreValidation) {
	        var validation = this.validate(newValues);
	        if (validation) {
	          if (typeof options.error === 'function') {
	            options.error(this, validation);
	          }
	          return false;
	        }
	      }
	
	      // Consolidate Ops
	      var pendingOps = this._getPendingOps();
	      var last = pendingOps.length - 1;
	      var stateController = _CoreManager2.default.getObjectStateController();
	      for (var attr in newOps) {
	        var nextOp = newOps[attr].mergeWith(pendingOps[last][attr]);
	        stateController.setPendingOp(this._getStateIdentifier(), attr, nextOp);
	      }
	
	      return this;
	    }
	
	    /**
	     * Remove an attribute from the model. This is a noop if the attribute doesn't
	     * exist.
	     * @method unset
	     * @param {String} attr The string name of an attribute.
	     */
	
	  }, {
	    key: 'unset',
	    value: function (attr, options) {
	      options = options || {};
	      options.unset = true;
	      return this.set(attr, null, options);
	    }
	
	    /**
	     * Atomically increments the value of the given attribute the next time the
	     * object is saved. If no amount is specified, 1 is used by default.
	     *
	     * @method increment
	     * @param attr {String} The key.
	     * @param amount {Number} The amount to increment by (optional).
	     */
	
	  }, {
	    key: 'increment',
	    value: function (attr, amount) {
	      if (typeof amount === 'undefined') {
	        amount = 1;
	      }
	      if (typeof amount !== 'number') {
	        throw new Error('Cannot increment by a non-numeric amount.');
	      }
	      return this.set(attr, new _ParseOp.IncrementOp(amount));
	    }
	
	    /**
	     * Atomically add an object to the end of the array associated with a given
	     * key.
	     * @method add
	     * @param attr {String} The key.
	     * @param item {} The item to add.
	     */
	
	  }, {
	    key: 'add',
	    value: function (attr, item) {
	      return this.set(attr, new _ParseOp.AddOp([item]));
	    }
	
	    /**
	     * Atomically add an object to the array associated with a given key, only
	     * if it is not already present in the array. The position of the insert is
	     * not guaranteed.
	     *
	     * @method addUnique
	     * @param attr {String} The key.
	     * @param item {} The object to add.
	     */
	
	  }, {
	    key: 'addUnique',
	    value: function (attr, item) {
	      return this.set(attr, new _ParseOp.AddUniqueOp([item]));
	    }
	
	    /**
	     * Atomically remove all instances of an object from the array associated
	     * with a given key.
	     *
	     * @method remove
	     * @param attr {String} The key.
	     * @param item {} The object to remove.
	     */
	
	  }, {
	    key: 'remove',
	    value: function (attr, item) {
	      return this.set(attr, new _ParseOp.RemoveOp([item]));
	    }
	
	    /**
	     * Returns an instance of a subclass of Parse.Op describing what kind of
	     * modification has been performed on this field since the last time it was
	     * saved. For example, after calling object.increment("x"), calling
	     * object.op("x") would return an instance of Parse.Op.Increment.
	     *
	     * @method op
	     * @param attr {String} The key.
	     * @returns {Parse.Op} The operation, or undefined if none.
	     */
	
	  }, {
	    key: 'op',
	    value: function (attr) {
	      var pending = this._getPendingOps();
	      for (var i = pending.length; i--;) {
	        if (pending[i][attr]) {
	          return pending[i][attr];
	        }
	      }
	    }
	
	    /**
	     * Creates a new model with identical attributes to this one, similar to Backbone.Model's clone()
	     * @method clone
	     * @return {Parse.Object}
	     */
	
	  }, {
	    key: 'clone',
	    value: function () {
	      var clone = new this.constructor();
	      if (!clone.className) {
	        clone.className = this.className;
	      }
	      var attributes = this.attributes;
	      if (typeof this.constructor.readOnlyAttributes === 'function') {
	        var readonly = this.constructor.readOnlyAttributes() || [];
	        // Attributes are frozen, so we have to rebuild an object,
	        // rather than delete readonly keys
	        var copy = {};
	        for (var a in attributes) {
	          if (readonly.indexOf(a) < 0) {
	            copy[a] = attributes[a];
	          }
	        }
	        attributes = copy;
	      }
	      if (clone.set) {
	        clone.set(attributes);
	      }
	      return clone;
	    }
	
	    /**
	     * Creates a new instance of this object. Not to be confused with clone()
	     * @method newInstance
	     * @return {Parse.Object}
	     */
	
	  }, {
	    key: 'newInstance',
	    value: function () {
	      var clone = new this.constructor();
	      if (!clone.className) {
	        clone.className = this.className;
	      }
	      clone.id = this.id;
	      if (singleInstance) {
	        // Just return an object with the right id
	        return clone;
	      }
	
	      var stateController = _CoreManager2.default.getObjectStateController();
	      if (stateController) {
	        stateController.duplicateState(this._getStateIdentifier(), clone._getStateIdentifier());
	      }
	      return clone;
	    }
	
	    /**
	     * Returns true if this object has never been saved to Parse.
	     * @method isNew
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'isNew',
	    value: function () {
	      return !this.id;
	    }
	
	    /**
	     * Returns true if this object was created by the Parse server when the
	     * object might have already been there (e.g. in the case of a Facebook
	     * login)
	     * @method existed
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'existed',
	    value: function () {
	      if (!this.id) {
	        return false;
	      }
	      var stateController = _CoreManager2.default.getObjectStateController();
	      var state = stateController.getState(this._getStateIdentifier());
	      if (state) {
	        return state.existed;
	      }
	      return false;
	    }
	
	    /**
	     * Checks if the model is currently in a valid state.
	     * @method isValid
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'isValid',
	    value: function () {
	      return !this.validate(this.attributes);
	    }
	
	    /**
	     * You should not call this function directly unless you subclass
	     * <code>Parse.Object</code>, in which case you can override this method
	     * to provide additional validation on <code>set</code> and
	     * <code>save</code>.  Your implementation should return
	     *
	     * @method validate
	     * @param {Object} attrs The current data to validate.
	     * @return {} False if the data is valid.  An error object otherwise.
	     * @see Parse.Object#set
	     */
	
	  }, {
	    key: 'validate',
	    value: function (attrs) {
	      if (attrs.hasOwnProperty('ACL') && !(attrs.ACL instanceof _ParseACL2.default)) {
	        return new _ParseError2.default(_ParseError2.default.OTHER_CAUSE, 'ACL must be a Parse ACL.');
	      }
	      for (var key in attrs) {
	        if (!/^[A-Za-z][0-9A-Za-z_]*$/.test(key)) {
	          return new _ParseError2.default(_ParseError2.default.INVALID_KEY_NAME);
	        }
	      }
	      return false;
	    }
	
	    /**
	     * Returns the ACL for this object.
	     * @method getACL
	     * @returns {Parse.ACL} An instance of Parse.ACL.
	     * @see Parse.Object#get
	     */
	
	  }, {
	    key: 'getACL',
	    value: function () {
	      var acl = this.get('ACL');
	      if (acl instanceof _ParseACL2.default) {
	        return acl;
	      }
	      return null;
	    }
	
	    /**
	     * Sets the ACL to be used for this object.
	     * @method setACL
	     * @param {Parse.ACL} acl An instance of Parse.ACL.
	     * @param {Object} options Optional Backbone-like options object to be
	     *     passed in to set.
	     * @return {Boolean} Whether the set passed validation.
	     * @see Parse.Object#set
	     */
	
	  }, {
	    key: 'setACL',
	    value: function (acl, options) {
	      return this.set('ACL', acl, options);
	    }
	
	    /**
	     * Clears any changes to this object made since the last call to save()
	     * @method revert
	     */
	
	  }, {
	    key: 'revert',
	    value: function () {
	      this._clearPendingOps();
	    }
	
	    /**
	     * Clears all attributes on a model
	     * @method clear
	     */
	
	  }, {
	    key: 'clear',
	    value: function () {
	      var attributes = this.attributes;
	      var erasable = {};
	      var readonly = ['createdAt', 'updatedAt'];
	      if (typeof this.constructor.readOnlyAttributes === 'function') {
	        readonly = readonly.concat(this.constructor.readOnlyAttributes());
	      }
	      for (var attr in attributes) {
	        if (readonly.indexOf(attr) < 0) {
	          erasable[attr] = true;
	        }
	      }
	      return this.set(erasable, { unset: true });
	    }
	
	    /**
	     * Fetch the model from the server. If the server's representation of the
	     * model differs from its current attributes, they will be overriden.
	     *
	     * @method fetch
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that is fulfilled when the fetch
	     *     completes.
	     */
	
	  }, {
	    key: 'fetch',
	    value: function (options) {
	      options = options || {};
	      var fetchOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        fetchOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        fetchOptions.sessionToken = options.sessionToken;
	      }
	      var controller = _CoreManager2.default.getObjectController();
	      return controller.fetch(this, true, fetchOptions)._thenRunCallbacks(options);
	    }
	
	    /**
	     * Set a hash of model attributes, and save the model to the server.
	     * updatedAt will be updated when the request returns.
	     * You can either call it as:<pre>
	     *   object.save();</pre>
	     * or<pre>
	     *   object.save(null, options);</pre>
	     * or<pre>
	     *   object.save(attrs, options);</pre>
	     * or<pre>
	     *   object.save(key, value, options);</pre>
	     *
	     * For example, <pre>
	     *   gameTurn.save({
	     *     player: "Jake Cutter",
	     *     diceRoll: 2
	     *   }, {
	     *     success: function(gameTurnAgain) {
	     *       // The save was successful.
	     *     },
	     *     error: function(gameTurnAgain, error) {
	     *       // The save failed.  Error is an instance of Parse.Error.
	     *     }
	     *   });</pre>
	     * or with promises:<pre>
	     *   gameTurn.save({
	     *     player: "Jake Cutter",
	     *     diceRoll: 2
	     *   }).then(function(gameTurnAgain) {
	     *     // The save was successful.
	     *   }, function(error) {
	     *     // The save failed.  Error is an instance of Parse.Error.
	     *   });</pre>
	     *
	     * @method save
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that is fulfilled when the save
	     *     completes.
	     */
	
	  }, {
	    key: 'save',
	    value: function (arg1, arg2, arg3) {
	      var _this = this;
	
	      var attrs;
	      var options;
	      if ((typeof arg1 === 'undefined' ? 'undefined' : (0, _typeof3.default)(arg1)) === 'object' || typeof arg1 === 'undefined') {
	        attrs = arg1;
	        if ((typeof arg2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(arg2)) === 'object') {
	          options = arg2;
	        }
	      } else {
	        attrs = {};
	        attrs[arg1] = arg2;
	        options = arg3;
	      }
	
	      // Support save({ success: function() {}, error: function() {} })
	      if (!options && attrs) {
	        options = {};
	        if (typeof attrs.success === 'function') {
	          options.success = attrs.success;
	          delete attrs.success;
	        }
	        if (typeof attrs.error === 'function') {
	          options.error = attrs.error;
	          delete attrs.error;
	        }
	      }
	
	      if (attrs) {
	        var validation = this.validate(attrs);
	        if (validation) {
	          if (options && typeof options.error === 'function') {
	            options.error(this, validation);
	          }
	          return _ParsePromise2.default.error(validation);
	        }
	        this.set(attrs, options);
	      }
	
	      options = options || {};
	      var saveOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        saveOptions.useMasterKey = !!options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken') && typeof options.sessionToken === 'string') {
	        saveOptions.sessionToken = options.sessionToken;
	      }
	
	      var controller = _CoreManager2.default.getObjectController();
	      var unsaved = (0, _unsavedChildren2.default)(this);
	      return controller.save(unsaved, saveOptions).then(function () {
	        return controller.save(_this, saveOptions);
	      })._thenRunCallbacks(options, this);
	    }
	
	    /**
	     * Destroy this model on the server if it was already persisted.
	     * If `wait: true` is passed, waits for the server to respond
	     * before removal.
	     *
	     * @method destroy
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that is fulfilled when the destroy
	     *     completes.
	     */
	
	  }, {
	    key: 'destroy',
	    value: function (options) {
	      options = options || {};
	      var destroyOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        destroyOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        destroyOptions.sessionToken = options.sessionToken;
	      }
	      if (!this.id) {
	        return _ParsePromise2.default.as()._thenRunCallbacks(options);
	      }
	      return _CoreManager2.default.getObjectController().destroy(this, destroyOptions)._thenRunCallbacks(options);
	    }
	
	    /** Static methods **/
	
	  }, {
	    key: 'attributes',
	    get: function () {
	      var stateController = _CoreManager2.default.getObjectStateController();
	      return (0, _freeze2.default)(stateController.estimateAttributes(this._getStateIdentifier()));
	    }
	
	    /**
	     * The first time this object was saved on the server.
	     * @property createdAt
	     * @type Date
	     */
	
	  }, {
	    key: 'createdAt',
	    get: function () {
	      return this._getServerData().createdAt;
	    }
	
	    /**
	     * The last time this object was updated on the server.
	     * @property updatedAt
	     * @type Date
	     */
	
	  }, {
	    key: 'updatedAt',
	    get: function () {
	      return this._getServerData().updatedAt;
	    }
	  }], [{
	    key: '_clearAllState',
	    value: function () {
	      var stateController = _CoreManager2.default.getObjectStateController();
	      stateController.clearAllState();
	    }
	
	    /**
	     * Fetches the given list of Parse.Object.
	     * If any error is encountered, stops and calls the error handler.
	     *
	     * <pre>
	     *   Parse.Object.fetchAll([object1, object2, ...], {
	     *     success: function(list) {
	     *       // All the objects were fetched.
	     *     },
	     *     error: function(error) {
	     *       // An error occurred while fetching one of the objects.
	     *     },
	     *   });
	     * </pre>
	     *
	     * @method fetchAll
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * @static
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     * </ul>
	     */
	
	  }, {
	    key: 'fetchAll',
	    value: function (list, options) {
	      var options = options || {};
	
	      var queryOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        queryOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        queryOptions.sessionToken = options.sessionToken;
	      }
	      return _CoreManager2.default.getObjectController().fetch(list, true, queryOptions)._thenRunCallbacks(options);
	    }
	
	    /**
	     * Fetches the given list of Parse.Object if needed.
	     * If any error is encountered, stops and calls the error handler.
	     *
	     * <pre>
	     *   Parse.Object.fetchAllIfNeeded([object1, ...], {
	     *     success: function(list) {
	     *       // Objects were fetched and updated.
	     *     },
	     *     error: function(error) {
	     *       // An error occurred while fetching one of the objects.
	     *     },
	     *   });
	     * </pre>
	     *
	     * @method fetchAllIfNeeded
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * @static
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     * </ul>
	     */
	
	  }, {
	    key: 'fetchAllIfNeeded',
	    value: function (list, options) {
	      var options = options || {};
	
	      var queryOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        queryOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        queryOptions.sessionToken = options.sessionToken;
	      }
	      return _CoreManager2.default.getObjectController().fetch(list, false, queryOptions)._thenRunCallbacks(options);
	    }
	
	    /**
	     * Destroy the given list of models on the server if it was already persisted.
	     *
	     * <p>Unlike saveAll, if an error occurs while deleting an individual model,
	     * this method will continue trying to delete the rest of the models if
	     * possible, except in the case of a fatal error like a connection error.
	     *
	     * <p>In particular, the Parse.Error object returned in the case of error may
	     * be one of two types:
	     *
	     * <ul>
	     *   <li>A Parse.Error.AGGREGATE_ERROR. This object's "errors" property is an
	     *       array of other Parse.Error objects. Each error object in this array
	     *       has an "object" property that references the object that could not be
	     *       deleted (for instance, because that object could not be found).</li>
	     *   <li>A non-aggregate Parse.Error. This indicates a serious error that
	     *       caused the delete operation to be aborted partway through (for
	     *       instance, a connection failure in the middle of the delete).</li>
	     * </ul>
	     *
	     * <pre>
	     *   Parse.Object.destroyAll([object1, object2, ...], {
	     *     success: function() {
	     *       // All the objects were deleted.
	     *     },
	     *     error: function(error) {
	     *       // An error occurred while deleting one or more of the objects.
	     *       // If this is an aggregate error, then we can inspect each error
	     *       // object individually to determine the reason why a particular
	     *       // object was not deleted.
	     *       if (error.code === Parse.Error.AGGREGATE_ERROR) {
	     *         for (var i = 0; i < error.errors.length; i++) {
	     *           console.log("Couldn't delete " + error.errors[i].object.id +
	     *             "due to " + error.errors[i].message);
	     *         }
	     *       } else {
	     *         console.log("Delete aborted because of " + error.message);
	     *       }
	     *     },
	     *   });
	     * </pre>
	     *
	     * @method destroyAll
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * @static
	     * Valid options are:<ul>
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that is fulfilled when the destroyAll
	     *     completes.
	     */
	
	  }, {
	    key: 'destroyAll',
	    value: function (list, options) {
	      var options = options || {};
	
	      var destroyOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        destroyOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        destroyOptions.sessionToken = options.sessionToken;
	      }
	      return _CoreManager2.default.getObjectController().destroy(list, destroyOptions)._thenRunCallbacks(options);
	    }
	
	    /**
	     * Saves the given list of Parse.Object.
	     * If any error is encountered, stops and calls the error handler.
	     *
	     * <pre>
	     *   Parse.Object.saveAll([object1, object2, ...], {
	     *     success: function(list) {
	     *       // All the objects were saved.
	     *     },
	     *     error: function(error) {
	     *       // An error occurred while saving one of the objects.
	     *     },
	     *   });
	     * </pre>
	     *
	     * @method saveAll
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * @static
	     * Valid options are:<ul>
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     */
	
	  }, {
	    key: 'saveAll',
	    value: function (list, options) {
	      var options = options || {};
	
	      var saveOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        saveOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        saveOptions.sessionToken = options.sessionToken;
	      }
	      return _CoreManager2.default.getObjectController().save(list, saveOptions)._thenRunCallbacks(options);
	    }
	
	    /**
	     * Creates a reference to a subclass of Parse.Object with the given id. This
	     * does not exist on Parse.Object, only on subclasses.
	     *
	     * <p>A shortcut for: <pre>
	     *  var Foo = Parse.Object.extend("Foo");
	     *  var pointerToFoo = new Foo();
	     *  pointerToFoo.id = "myObjectId";
	     * </pre>
	     *
	     * @method createWithoutData
	     * @param {String} id The ID of the object to create a reference to.
	     * @static
	     * @return {Parse.Object} A Parse.Object reference.
	     */
	
	  }, {
	    key: 'createWithoutData',
	    value: function (id) {
	      var obj = new this();
	      obj.id = id;
	      return obj;
	    }
	
	    /**
	     * Creates a new instance of a Parse Object from a JSON representation.
	     * @method fromJSON
	     * @param {Object} json The JSON map of the Object's data
	     * @param {boolean} override In single instance mode, all old server data
	     *   is overwritten if this is set to true
	     * @static
	     * @return {Parse.Object} A Parse.Object reference
	     */
	
	  }, {
	    key: 'fromJSON',
	    value: function (json, override) {
	      if (!json.className) {
	        throw new Error('Cannot create an object without a className');
	      }
	      var constructor = classMap[json.className];
	      var o = constructor ? new constructor() : new ParseObject(json.className);
	      var otherAttributes = {};
	      for (var attr in json) {
	        if (attr !== 'className' && attr !== '__type') {
	          otherAttributes[attr] = json[attr];
	        }
	      }
	      if (override) {
	        // id needs to be set before clearServerData can work
	        if (otherAttributes.objectId) {
	          o.id = otherAttributes.objectId;
	        }
	        var preserved = null;
	        if (typeof o._preserveFieldsOnFetch === 'function') {
	          preserved = o._preserveFieldsOnFetch();
	        }
	        o._clearServerData();
	        if (preserved) {
	          o._finishFetch(preserved);
	        }
	      }
	      o._finishFetch(otherAttributes);
	      if (json.objectId) {
	        o._setExisted(true);
	      }
	      return o;
	    }
	
	    /**
	     * Registers a subclass of Parse.Object with a specific class name.
	     * When objects of that class are retrieved from a query, they will be
	     * instantiated with this subclass.
	     * This is only necessary when using ES6 subclassing.
	     * @method registerSubclass
	     * @param {String} className The class name of the subclass
	     * @param {Class} constructor The subclass
	     */
	
	  }, {
	    key: 'registerSubclass',
	    value: function (className, constructor) {
	      if (typeof className !== 'string') {
	        throw new TypeError('The first argument must be a valid class name.');
	      }
	      if (typeof constructor === 'undefined') {
	        throw new TypeError('You must supply a subclass constructor.');
	      }
	      if (typeof constructor !== 'function') {
	        throw new TypeError('You must register the subclass constructor. ' + 'Did you attempt to register an instance of the subclass?');
	      }
	      classMap[className] = constructor;
	      if (!constructor.className) {
	        constructor.className = className;
	      }
	    }
	
	    /**
	     * Creates a new subclass of Parse.Object for the given Parse class name.
	     *
	     * <p>Every extension of a Parse class will inherit from the most recent
	     * previous extension of that class. When a Parse.Object is automatically
	     * created by parsing JSON, it will use the most recent extension of that
	     * class.</p>
	     *
	     * <p>You should call either:<pre>
	     *     var MyClass = Parse.Object.extend("MyClass", {
	     *         <i>Instance methods</i>,
	     *         initialize: function(attrs, options) {
	     *             this.someInstanceProperty = [],
	     *             <i>Other instance properties</i>
	     *         }
	     *     }, {
	     *         <i>Class properties</i>
	     *     });</pre>
	     * or, for Backbone compatibility:<pre>
	     *     var MyClass = Parse.Object.extend({
	     *         className: "MyClass",
	     *         <i>Instance methods</i>,
	     *         initialize: function(attrs, options) {
	     *             this.someInstanceProperty = [],
	     *             <i>Other instance properties</i>
	     *         }
	     *     }, {
	     *         <i>Class properties</i>
	     *     });</pre></p>
	     *
	     * @method extend
	     * @param {String} className The name of the Parse class backing this model.
	     * @param {Object} protoProps Instance properties to add to instances of the
	     *     class returned from this method.
	     * @param {Object} classProps Class properties to add the class returned from
	     *     this method.
	     * @return {Class} A new subclass of Parse.Object.
	     */
	
	  }, {
	    key: 'extend',
	    value: function (className, protoProps, classProps) {
	      if (typeof className !== 'string') {
	        if (className && typeof className.className === 'string') {
	          return ParseObject.extend(className.className, className, protoProps);
	        } else {
	          throw new Error('Parse.Object.extend\'s first argument should be the className.');
	        }
	      }
	      var adjustedClassName = className;
	
	      if (adjustedClassName === 'User' && _CoreManager2.default.get('PERFORM_USER_REWRITE')) {
	        adjustedClassName = '_User';
	      }
	
	      var parentProto = ParseObject.prototype;
	      if (this.hasOwnProperty('__super__') && this.__super__) {
	        parentProto = this.prototype;
	      } else if (classMap[adjustedClassName]) {
	        parentProto = classMap[adjustedClassName].prototype;
	      }
	      var ParseObjectSubclass = function (attributes, options) {
	        this.className = adjustedClassName;
	        this._objCount = objectCount++;
	        // Enable legacy initializers
	        if (typeof this.initialize === 'function') {
	          this.initialize.apply(this, arguments);
	        }
	
	        if (attributes && (typeof attributes === 'undefined' ? 'undefined' : (0, _typeof3.default)(attributes)) === 'object') {
	          if (!this.set(attributes || {}, options)) {
	            throw new Error('Can\'t create an invalid Parse Object');
	          }
	        }
	      };
	      ParseObjectSubclass.className = adjustedClassName;
	      ParseObjectSubclass.__super__ = parentProto;
	
	      ParseObjectSubclass.prototype = (0, _create2.default)(parentProto, {
	        constructor: {
	          value: ParseObjectSubclass,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      });
	
	      if (protoProps) {
	        for (var prop in protoProps) {
	          if (prop !== 'className') {
	            (0, _defineProperty2.default)(ParseObjectSubclass.prototype, prop, {
	              value: protoProps[prop],
	              enumerable: false,
	              writable: true,
	              configurable: true
	            });
	          }
	        }
	      }
	
	      if (classProps) {
	        for (var prop in classProps) {
	          if (prop !== 'className') {
	            (0, _defineProperty2.default)(ParseObjectSubclass, prop, {
	              value: classProps[prop],
	              enumerable: false,
	              writable: true,
	              configurable: true
	            });
	          }
	        }
	      }
	
	      ParseObjectSubclass.extend = function (name, protoProps, classProps) {
	        if (typeof name === 'string') {
	          return ParseObject.extend.call(ParseObjectSubclass, name, protoProps, classProps);
	        }
	        return ParseObject.extend.call(ParseObjectSubclass, adjustedClassName, name, protoProps);
	      };
	      ParseObjectSubclass.createWithoutData = ParseObject.createWithoutData;
	
	      classMap[adjustedClassName] = ParseObjectSubclass;
	      return ParseObjectSubclass;
	    }
	
	    /**
	     * Enable single instance objects, where any local objects with the same Id
	     * share the same attributes, and stay synchronized with each other.
	     * This is disabled by default in server environments, since it can lead to
	     * security issues.
	     * @method enableSingleInstance
	     */
	
	  }, {
	    key: 'enableSingleInstance',
	    value: function () {
	      singleInstance = true;
	      _CoreManager2.default.setObjectStateController(SingleInstanceStateController);
	    }
	
	    /**
	     * Disable single instance objects, where any local objects with the same Id
	     * share the same attributes, and stay synchronized with each other.
	     * When disabled, you can have two instances of the same object in memory
	     * without them sharing attributes.
	     * @method disableSingleInstance
	     */
	
	  }, {
	    key: 'disableSingleInstance',
	    value: function () {
	      singleInstance = false;
	      _CoreManager2.default.setObjectStateController(UniqueInstanceStateController);
	    }
	  }]);
	  return ParseObject;
	}();
	
	exports.default = ParseObject;
	
	var DefaultController = {
	  fetch: function (target, forceFetch, options) {
	    if (Array.isArray(target)) {
	      if (target.length < 1) {
	        return _ParsePromise2.default.as([]);
	      }
	      var objs = [];
	      var ids = [];
	      var className = null;
	      var results = [];
	      var error = null;
	      target.forEach(function (el, i) {
	        if (error) {
	          return;
	        }
	        if (!className) {
	          className = el.className;
	        }
	        if (className !== el.className) {
	          error = new _ParseError2.default(_ParseError2.default.INVALID_CLASS_NAME, 'All objects should be of the same class');
	        }
	        if (!el.id) {
	          error = new _ParseError2.default(_ParseError2.default.MISSING_OBJECT_ID, 'All objects must have an ID');
	        }
	        if (forceFetch || (0, _keys2.default)(el._getServerData()).length === 0) {
	          ids.push(el.id);
	          objs.push(el);
	        }
	        results.push(el);
	      });
	      if (error) {
	        return _ParsePromise2.default.error(error);
	      }
	      var query = new _ParseQuery2.default(className);
	      query.containedIn('objectId', ids);
	      query._limit = ids.length;
	      return query.find(options).then(function (objects) {
	        var idMap = {};
	        objects.forEach(function (o) {
	          idMap[o.id] = o;
	        });
	        for (var i = 0; i < objs.length; i++) {
	          var obj = objs[i];
	          if (!obj || !obj.id || !idMap[obj.id]) {
	            if (forceFetch) {
	              return _ParsePromise2.default.error(new _ParseError2.default(_ParseError2.default.OBJECT_NOT_FOUND, 'All objects must exist on the server.'));
	            }
	          }
	        }
	        if (!singleInstance) {
	          // If single instance objects are disabled, we need to replace the
	          for (var i = 0; i < results.length; i++) {
	            var obj = results[i];
	            if (obj && obj.id && idMap[obj.id]) {
	              var id = obj.id;
	              obj._finishFetch(idMap[id].toJSON());
	              results[i] = idMap[id];
	            }
	          }
	        }
	        return _ParsePromise2.default.as(results);
	      });
	    } else {
	      var RESTController = _CoreManager2.default.getRESTController();
	      return RESTController.request('GET', 'classes/' + target.className + '/' + target._getId(), {}, options).then(function (response, status, xhr) {
	        if (target instanceof ParseObject) {
	          target._clearPendingOps();
	          target._clearServerData();
	          target._finishFetch(response);
	        }
	        return target;
	      });
	    }
	  },
	  destroy: function (target, options) {
	    var RESTController = _CoreManager2.default.getRESTController();
	    if (Array.isArray(target)) {
	      if (target.length < 1) {
	        return _ParsePromise2.default.as([]);
	      }
	      var batches = [[]];
	      target.forEach(function (obj) {
	        if (!obj.id) {
	          return;
	        }
	        batches[batches.length - 1].push(obj);
	        if (batches[batches.length - 1].length >= 20) {
	          batches.push([]);
	        }
	      });
	      if (batches[batches.length - 1].length === 0) {
	        // If the last batch is empty, remove it
	        batches.pop();
	      }
	      var deleteCompleted = _ParsePromise2.default.as();
	      var errors = [];
	      batches.forEach(function (batch) {
	        deleteCompleted = deleteCompleted.then(function () {
	          return RESTController.request('POST', 'batch', {
	            requests: batch.map(function (obj) {
	              return {
	                method: 'DELETE',
	                path: getServerUrlPath() + 'classes/' + obj.className + '/' + obj._getId(),
	                body: {}
	              };
	            })
	          }, options).then(function (results) {
	            for (var i = 0; i < results.length; i++) {
	              if (results[i] && results[i].hasOwnProperty('error')) {
	                var err = new _ParseError2.default(results[i].error.code, results[i].error.error);
	                err.object = batch[i];
	                errors.push(err);
	              }
	            }
	          });
	        });
	      });
	      return deleteCompleted.then(function () {
	        if (errors.length) {
	          var aggregate = new _ParseError2.default(_ParseError2.default.AGGREGATE_ERROR);
	          aggregate.errors = errors;
	          return _ParsePromise2.default.error(aggregate);
	        }
	        return _ParsePromise2.default.as(target);
	      });
	    } else if (target instanceof ParseObject) {
	      return RESTController.request('DELETE', 'classes/' + target.className + '/' + target._getId(), {}, options).then(function () {
	        return _ParsePromise2.default.as(target);
	      });
	    }
	    return _ParsePromise2.default.as(target);
	  },
	  save: function (target, options) {
	    var RESTController = _CoreManager2.default.getRESTController();
	    var stateController = _CoreManager2.default.getObjectStateController();
	    if (Array.isArray(target)) {
	      if (target.length < 1) {
	        return _ParsePromise2.default.as([]);
	      }
	
	      var unsaved = target.concat();
	      for (var i = 0; i < target.length; i++) {
	        if (target[i] instanceof ParseObject) {
	          unsaved = unsaved.concat((0, _unsavedChildren2.default)(target[i], true));
	        }
	      }
	      unsaved = (0, _unique2.default)(unsaved);
	
	      var filesSaved = _ParsePromise2.default.as();
	      var pending = [];
	      unsaved.forEach(function (el) {
	        if (el instanceof _ParseFile2.default) {
	          filesSaved = filesSaved.then(function () {
	            return el.save();
	          });
	        } else if (el instanceof ParseObject) {
	          pending.push(el);
	        }
	      });
	
	      return filesSaved.then(function () {
	        var objectError = null;
	        return _ParsePromise2.default._continueWhile(function () {
	          return pending.length > 0;
	        }, function () {
	          var batch = [];
	          var nextPending = [];
	          pending.forEach(function (el) {
	            if (batch.length < 20 && (0, _canBeSerialized2.default)(el)) {
	              batch.push(el);
	            } else {
	              nextPending.push(el);
	            }
	          });
	          pending = nextPending;
	          if (batch.length < 1) {
	            return _ParsePromise2.default.error(new _ParseError2.default(_ParseError2.default.OTHER_CAUSE, 'Tried to save a batch with a cycle.'));
	          }
	
	          // Queue up tasks for each object in the batch.
	          // When every task is ready, the API request will execute
	          var batchReturned = new _ParsePromise2.default();
	          var batchReady = [];
	          var batchTasks = [];
	          batch.forEach(function (obj, index) {
	            var ready = new _ParsePromise2.default();
	            batchReady.push(ready);
	
	            stateController.pushPendingState(obj._getStateIdentifier());
	            batchTasks.push(stateController.enqueueTask(obj._getStateIdentifier(), function () {
	              ready.resolve();
	              return batchReturned.then(function (responses, status) {
	                if (responses[index].hasOwnProperty('success')) {
	                  obj._handleSaveResponse(responses[index].success, status);
	                } else {
	                  if (!objectError && responses[index].hasOwnProperty('error')) {
	                    var serverError = responses[index].error;
	                    objectError = new _ParseError2.default(serverError.code, serverError.error);
	                    // Cancel the rest of the save
	                    pending = [];
	                  }
	                  obj._handleSaveError();
	                }
	              });
	            }));
	          });
	
	          _ParsePromise2.default.when(batchReady).then(function () {
	            // Kick off the batch request
	            return RESTController.request('POST', 'batch', {
	              requests: batch.map(function (obj) {
	                var params = obj._getSaveParams();
	                params.path = getServerUrlPath() + params.path;
	                return params;
	              })
	            }, options);
	          }).then(function (response, status, xhr) {
	            batchReturned.resolve(response, status);
	          });
	
	          return _ParsePromise2.default.when(batchTasks);
	        }).then(function () {
	          if (objectError) {
	            return _ParsePromise2.default.error(objectError);
	          }
	          return _ParsePromise2.default.as(target);
	        });
	      });
	    } else if (target instanceof ParseObject) {
	      // copying target lets Flow guarantee the pointer isn't modified elsewhere
	      var targetCopy = target;
	      var task = function () {
	        var params = targetCopy._getSaveParams();
	        return RESTController.request(params.method, params.path, params.body, options).then(function (response, status) {
	          targetCopy._handleSaveResponse(response, status);
	        }, function (error) {
	          targetCopy._handleSaveError();
	          return _ParsePromise2.default.error(error);
	        });
	      };
	
	      stateController.pushPendingState(target._getStateIdentifier());
	      return stateController.enqueueTask(target._getStateIdentifier(), task).then(function () {
	        return target;
	      }, function (error) {
	        return _ParsePromise2.default.error(error);
	      });
	    }
	    return _ParsePromise2.default.as();
	  }
	};
	
	_CoreManager2.default.setObjectController(DefaultController);

/***/ },
/* 688 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(689), __esModule: true };

/***/ },
/* 689 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(690);
	module.exports = __webpack_require__(602).Object.freeze;

/***/ },
/* 690 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(608)
	  , meta     = __webpack_require__(646).onFreeze;
	
	__webpack_require__(663)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 691 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(692), __esModule: true };

/***/ },
/* 692 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(602)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 693 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	var config = {
	  // Defaults
	  IS_NODE: typeof process !== 'undefined' && !!process.versions && !!process.versions.node && !process.versions.electron,
	  REQUEST_ATTEMPT_LIMIT: 5,
	  SERVER_URL: 'https://api.parse.com/1',
	  CREDENTIALS: null,
	  LIVEQUERY_SERVER_URL: null,
	  VERSION: 'js' + '1.9.2-sebasjm',
	  APPLICATION_ID: null,
	  JAVASCRIPT_KEY: null,
	  MASTER_KEY: null,
	  USE_MASTER_KEY: false,
	  PERFORM_USER_REWRITE: true,
	  FORCE_REVOCABLE_SESSION: false
	};
	
	function requireMethods(name, methods, controller) {
	  methods.forEach(function (func) {
	    if (typeof controller[func] !== 'function') {
	      throw new Error(name + ' must implement ' + func + '()');
	    }
	  });
	}
	
	module.exports = {
	  get: function (key) {
	    if (config.hasOwnProperty(key)) {
	      return config[key];
	    }
	    throw new Error('Configuration key not found: ' + key);
	  },
	
	  set: function (key, value) {
	    config[key] = value;
	  },
	
	  /* Specialized Controller Setters/Getters */
	
	  setAnalyticsController: function (controller) {
	    requireMethods('AnalyticsController', ['track'], controller);
	    config['AnalyticsController'] = controller;
	  },
	  getAnalyticsController: function () {
	    return config['AnalyticsController'];
	  },
	  setCloudController: function (controller) {
	    requireMethods('CloudController', ['run'], controller);
	    config['CloudController'] = controller;
	  },
	  getCloudController: function () {
	    return config['CloudController'];
	  },
	  setConfigController: function (controller) {
	    requireMethods('ConfigController', ['current', 'get'], controller);
	    config['ConfigController'] = controller;
	  },
	  getConfigController: function () {
	    return config['ConfigController'];
	  },
	  setFileController: function (controller) {
	    requireMethods('FileController', ['saveFile', 'saveBase64'], controller);
	    config['FileController'] = controller;
	  },
	  getFileController: function () {
	    return config['FileController'];
	  },
	  setInstallationController: function (controller) {
	    requireMethods('InstallationController', ['currentInstallationId'], controller);
	    config['InstallationController'] = controller;
	  },
	  getInstallationController: function () {
	    return config['InstallationController'];
	  },
	  setObjectController: function (controller) {
	    requireMethods('ObjectController', ['save', 'fetch', 'destroy'], controller);
	    config['ObjectController'] = controller;
	  },
	  getObjectController: function () {
	    return config['ObjectController'];
	  },
	  setObjectStateController: function (controller) {
	    requireMethods('ObjectStateController', ['getState', 'initializeState', 'removeState', 'getServerData', 'setServerData', 'getPendingOps', 'setPendingOp', 'pushPendingState', 'popPendingState', 'mergeFirstPendingState', 'getObjectCache', 'estimateAttribute', 'estimateAttributes', 'commitServerChanges', 'enqueueTask', 'clearAllState'], controller);
	
	    config['ObjectStateController'] = controller;
	  },
	  getObjectStateController: function () {
	    return config['ObjectStateController'];
	  },
	  setPushController: function (controller) {
	    requireMethods('PushController', ['send'], controller);
	    config['PushController'] = controller;
	  },
	  getPushController: function () {
	    return config['PushController'];
	  },
	  setQueryController: function (controller) {
	    requireMethods('QueryController', ['find'], controller);
	    config['QueryController'] = controller;
	  },
	  getQueryController: function () {
	    return config['QueryController'];
	  },
	  setRESTController: function (controller) {
	    requireMethods('RESTController', ['request', 'ajax'], controller);
	    config['RESTController'] = controller;
	  },
	  getRESTController: function () {
	    return config['RESTController'];
	  },
	  setSessionController: function (controller) {
	    requireMethods('SessionController', ['getSession'], controller);
	    config['SessionController'] = controller;
	  },
	  getSessionController: function () {
	    return config['SessionController'];
	  },
	  setStorageController: function (controller) {
	    if (controller.async) {
	      requireMethods('An async StorageController', ['getItemAsync', 'setItemAsync', 'removeItemAsync'], controller);
	    } else {
	      requireMethods('A synchronous StorageController', ['getItem', 'setItem', 'removeItem'], controller);
	    }
	    config['StorageController'] = controller;
	  },
	  getStorageController: function () {
	    return config['StorageController'];
	  },
	  setUserController: function (controller) {
	    requireMethods('UserController', ['setCurrentUser', 'currentUser', 'currentUserAsync', 'signUp', 'logIn', 'become', 'logOut', 'requestPasswordReset', 'upgradeToRevocableSession', 'linkWith'], controller);
	    config['UserController'] = controller;
	  },
	  getUserController: function () {
	    return config['UserController'];
	  },
	  setLiveQueryController: function (controller) {
	    requireMethods('LiveQueryController', ['subscribe', 'unsubscribe', 'open', 'close'], controller);
	    config['LiveQueryController'] = controller;
	  },
	  getLiveQueryController: function () {
	    return config['LiveQueryController'];
	  },
	  setHooksController: function (controller) {
	    requireMethods('HooksController', ['create', 'get', 'update', 'remove'], controller);
	    config['HooksController'] = controller;
	  },
	  getHooksController: function () {
	    return config['HooksController'];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 694 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports.default = canBeSerialized;
	
	var _ParseFile = __webpack_require__(695);
	
	var _ParseFile2 = _interopRequireDefault(_ParseFile);
	
	var _ParseObject = __webpack_require__(687);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParseRelation = __webpack_require__(702);
	
	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function canBeSerialized(obj) {
	  if (!(obj instanceof _ParseObject2.default)) {
	    return true;
	  }
	  var attributes = obj.attributes;
	  for (var attr in attributes) {
	    var val = attributes[attr];
	    if (!canBeSerializedHelper(val)) {
	      return false;
	    }
	  }
	  return true;
	} /**
	   * Copyright (c) 2015-present, Parse, LLC.
	   * All rights reserved.
	   *
	   * This source code is licensed under the BSD-style license found in the
	   * LICENSE file in the root directory of this source tree. An additional grant
	   * of patent rights can be found in the PATENTS file in the same directory.
	   *
	   * 
	   */
	
	function canBeSerializedHelper(value) {
	  if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) !== 'object') {
	    return true;
	  }
	  if (value instanceof _ParseRelation2.default) {
	    return true;
	  }
	  if (value instanceof _ParseObject2.default) {
	    return !!value.id;
	  }
	  if (value instanceof _ParseFile2.default) {
	    if (value.url()) {
	      return true;
	    }
	    return false;
	  }
	  if (Array.isArray(value)) {
	    for (var i = 0; i < value.length; i++) {
	      if (!canBeSerializedHelper(value[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	  for (var k in value) {
	    if (!canBeSerializedHelper(value[k])) {
	      return false;
	    }
	  }
	  return true;
	}

/***/ },
/* 695 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(665);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _CoreManager = __webpack_require__(693);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	var dataUriRegexp = /^data:([a-zA-Z]*\/[a-zA-Z+.-]*);(charset=[a-zA-Z0-9\-\/\s]*,)?base64,/;
	
	function b64Digit(number) {
	  if (number < 26) {
	    return String.fromCharCode(65 + number);
	  }
	  if (number < 52) {
	    return String.fromCharCode(97 + (number - 26));
	  }
	  if (number < 62) {
	    return String.fromCharCode(48 + (number - 52));
	  }
	  if (number === 62) {
	    return '+';
	  }
	  if (number === 63) {
	    return '/';
	  }
	  throw new TypeError('Tried to encode large digit ' + number + ' in base64.');
	}
	
	/**
	 * A Parse.File is a local representation of a file that is saved to the Parse
	 * cloud.
	 * @class Parse.File
	 * @constructor
	 * @param name {String} The file's name. This will be prefixed by a unique
	 *     value once the file has finished saving. The file name must begin with
	 *     an alphanumeric character, and consist of alphanumeric characters,
	 *     periods, spaces, underscores, or dashes.
	 * @param data {Array} The data for the file, as either:
	 *     1. an Array of byte value Numbers, or
	 *     2. an Object like { base64: "..." } with a base64-encoded String.
	 *     3. a File object selected with a file upload control. (3) only works
	 *        in Firefox 3.6+, Safari 6.0.2+, Chrome 7+, and IE 10+.
	 *        For example:<pre>
	 * var fileUploadControl = $("#profilePhotoFileUpload")[0];
	 * if (fileUploadControl.files.length > 0) {
	 *   var file = fileUploadControl.files[0];
	 *   var name = "photo.jpg";
	 *   var parseFile = new Parse.File(name, file);
	 *   parseFile.save().then(function() {
	 *     // The file has been saved to Parse.
	 *   }, function(error) {
	 *     // The file either could not be read, or could not be saved to Parse.
	 *   });
	 * }</pre>
	 * @param type {String} Optional Content-Type header to use for the file. If
	 *     this is omitted, the content type will be inferred from the name's
	 *     extension.
	 */
	
	var ParseFile = function () {
	  function ParseFile(name, data, type) {
	    (0, _classCallCheck3.default)(this, ParseFile);
	
	    var specifiedType = type || '';
	
	    this._name = name;
	
	    if (data !== undefined) {
	      if (Array.isArray(data)) {
	        this._source = {
	          format: 'base64',
	          base64: ParseFile.encodeBase64(data),
	          type: specifiedType
	        };
	      } else if (typeof File !== 'undefined' && data instanceof File) {
	        this._source = {
	          format: 'file',
	          file: data,
	          type: specifiedType
	        };
	      } else if (data && typeof data.base64 === 'string') {
	        var _base = data.base64;
	        var commaIndex = _base.indexOf(',');
	
	        if (commaIndex !== -1) {
	          var matches = dataUriRegexp.exec(_base.slice(0, commaIndex + 1));
	          // if data URI with type and charset, there will be 4 matches.
	          this._source = {
	            format: 'base64',
	            base64: _base.slice(commaIndex + 1),
	            type: matches[1]
	          };
	        } else {
	          this._source = {
	            format: 'base64',
	            base64: _base,
	            type: specifiedType
	          };
	        }
	      } else {
	        throw new TypeError('Cannot create a Parse.File with that data.');
	      }
	    }
	  }
	
	  /**
	   * Gets the name of the file. Before save is called, this is the filename
	   * given by the user. After save is called, that name gets prefixed with a
	   * unique identifier.
	   * @method name
	   * @return {String}
	   */
	
	  (0, _createClass3.default)(ParseFile, [{
	    key: 'name',
	    value: function () {
	      return this._name;
	    }
	
	    /**
	     * Gets the url of the file. It is only available after you save the file or
	     * after you get the file from a Parse.Object.
	     * @method url
	     * @param {Object} options An object to specify url options
	     * @return {String}
	     */
	
	  }, {
	    key: 'url',
	    value: function (options) {
	      options = options || {};
	      if (!this._url) {
	        return;
	      }
	      if (options.forceSecure) {
	        return this._url.replace(/^http:\/\//i, 'https://');
	      } else {
	        return this._url;
	      }
	    }
	
	    /**
	     * Saves the file to the Parse cloud.
	     * @method save
	     * @param {Object} options A Backbone-style options object.
	     * @return {Parse.Promise} Promise that is resolved when the save finishes.
	     */
	
	  }, {
	    key: 'save',
	    value: function (options) {
	      var _this = this;
	
	      options = options || {};
	      var controller = _CoreManager2.default.getFileController();
	      if (!this._previousSave) {
	        if (this._source.format === 'file') {
	          this._previousSave = controller.saveFile(this._name, this._source).then(function (res) {
	            _this._name = res.name;
	            _this._url = res.url;
	            return _this;
	          });
	        } else {
	          this._previousSave = controller.saveBase64(this._name, this._source).then(function (res) {
	            _this._name = res.name;
	            _this._url = res.url;
	            return _this;
	          });
	        }
	      }
	      if (this._previousSave) {
	        return this._previousSave._thenRunCallbacks(options);
	      }
	    }
	  }, {
	    key: 'toJSON',
	    value: function () {
	      return {
	        __type: 'File',
	        name: this._name,
	        url: this._url
	      };
	    }
	  }, {
	    key: 'equals',
	    value: function (other) {
	      if (this === other) {
	        return true;
	      }
	      // Unsaved Files are never equal, since they will be saved to different URLs
	      return other instanceof ParseFile && this.name() === other.name() && this.url() === other.url() && typeof this.url() !== 'undefined';
	    }
	  }], [{
	    key: 'fromJSON',
	    value: function (obj) {
	      if (obj.__type !== 'File') {
	        throw new TypeError('JSON object does not represent a ParseFile');
	      }
	      var file = new ParseFile(obj.name);
	      file._url = obj.url;
	      return file;
	    }
	  }, {
	    key: 'encodeBase64',
	    value: function (bytes) {
	      var chunks = [];
	      chunks.length = Math.ceil(bytes.length / 3);
	      for (var i = 0; i < chunks.length; i++) {
	        var b1 = bytes[i * 3];
	        var b2 = bytes[i * 3 + 1] || 0;
	        var b3 = bytes[i * 3 + 2] || 0;
	
	        var has2 = i * 3 + 1 < bytes.length;
	        var has3 = i * 3 + 2 < bytes.length;
	
	        chunks[i] = [b64Digit(b1 >> 2 & 0x3F), b64Digit(b1 << 4 & 0x30 | b2 >> 4 & 0x0F), has2 ? b64Digit(b2 << 2 & 0x3C | b3 >> 6 & 0x03) : '=', has3 ? b64Digit(b3 & 0x3F) : '='].join('');
	      }
	
	      return chunks.join('');
	    }
	  }]);
	  return ParseFile;
	}();
	
	exports.default = ParseFile;
	
	var DefaultController = {
	  saveFile: function (name, source) {
	    if (source.format !== 'file') {
	      throw new Error('saveFile can only be used with File-type sources.');
	    }
	    // To directly upload a File, we use a REST-style AJAX request
	    var headers = {
	      'X-Parse-Application-ID': _CoreManager2.default.get('APPLICATION_ID'),
	      'X-Parse-JavaScript-Key': _CoreManager2.default.get('JAVASCRIPT_KEY'),
	      'Content-Type': source.type || (source.file ? source.file.type : null)
	    };
	    var url = _CoreManager2.default.get('SERVER_URL');
	    if (url[url.length - 1] !== '/') {
	      url += '/';
	    }
	    url += 'files/' + name;
	    return _CoreManager2.default.getRESTController().ajax('POST', url, source.file, headers);
	  },
	
	  saveBase64: function (name, source) {
	    if (source.format !== 'base64') {
	      throw new Error('saveBase64 can only be used with Base64-type sources.');
	    }
	    var data = {
	      base64: source.base64
	    };
	    if (source.type) {
	      data._ContentType = source.type;
	    }
	
	    return _CoreManager2.default.getRESTController().request('POST', 'files/' + name, data);
	  }
	};
	
	_CoreManager2.default.setFileController(DefaultController);

/***/ },
/* 696 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getIterator2 = __webpack_require__(697);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(665);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	var _isPromisesAPlusCompliant = true;
	
	/**
	 * A Promise is returned by async methods as a hook to provide callbacks to be
	 * called when the async task is fulfilled.
	 *
	 * <p>Typical usage would be like:<pre>
	 *    query.find().then(function(results) {
	 *      results[0].set("foo", "bar");
	 *      return results[0].saveAsync();
	 *    }).then(function(result) {
	 *      console.log("Updated " + result.id);
	 *    });
	 * </pre></p>
	 *
	 * @class Parse.Promise
	 * @constructor
	 */
	
	var ParsePromise = function () {
	  function ParsePromise(executor) {
	    (0, _classCallCheck3.default)(this, ParsePromise);
	
	    this._resolved = false;
	    this._rejected = false;
	    this._resolvedCallbacks = [];
	    this._rejectedCallbacks = [];
	
	    if (typeof executor === 'function') {
	      executor(this.resolve.bind(this), this.reject.bind(this));
	    }
	  }
	
	  /**
	   * Marks this promise as fulfilled, firing any callbacks waiting on it.
	   * @method resolve
	   * @param {Object} result the result to pass to the callbacks.
	   */
	
	  (0, _createClass3.default)(ParsePromise, [{
	    key: 'resolve',
	    value: function () {
	      if (this._resolved || this._rejected) {
	        throw new Error('A promise was resolved even though it had already been ' + (this._resolved ? 'resolved' : 'rejected') + '.');
	      }
	      this._resolved = true;
	
	      for (var _len = arguments.length, results = Array(_len), _key = 0; _key < _len; _key++) {
	        results[_key] = arguments[_key];
	      }
	
	      this._result = results;
	      for (var i = 0; i < this._resolvedCallbacks.length; i++) {
	        this._resolvedCallbacks[i].apply(this, results);
	      }
	
	      this._resolvedCallbacks = [];
	      this._rejectedCallbacks = [];
	    }
	
	    /**
	     * Marks this promise as fulfilled, firing any callbacks waiting on it.
	     * @method reject
	     * @param {Object} error the error to pass to the callbacks.
	     */
	
	  }, {
	    key: 'reject',
	    value: function (error) {
	      if (this._resolved || this._rejected) {
	        throw new Error('A promise was rejected even though it had already been ' + (this._resolved ? 'resolved' : 'rejected') + '.');
	      }
	      this._rejected = true;
	      this._error = error;
	      for (var i = 0; i < this._rejectedCallbacks.length; i++) {
	        this._rejectedCallbacks[i](error);
	      }
	      this._resolvedCallbacks = [];
	      this._rejectedCallbacks = [];
	    }
	
	    /**
	     * Adds callbacks to be called when this promise is fulfilled. Returns a new
	     * Promise that will be fulfilled when the callback is complete. It allows
	     * chaining. If the callback itself returns a Promise, then the one returned
	     * by "then" will not be fulfilled until that one returned by the callback
	     * is fulfilled.
	     * @method then
	     * @param {Function} resolvedCallback Function that is called when this
	     * Promise is resolved. Once the callback is complete, then the Promise
	     * returned by "then" will also be fulfilled.
	     * @param {Function} rejectedCallback Function that is called when this
	     * Promise is rejected with an error. Once the callback is complete, then
	     * the promise returned by "then" with be resolved successfully. If
	     * rejectedCallback is null, or it returns a rejected Promise, then the
	     * Promise returned by "then" will be rejected with that error.
	     * @return {Parse.Promise} A new Promise that will be fulfilled after this
	     * Promise is fulfilled and either callback has completed. If the callback
	     * returned a Promise, then this Promise will not be fulfilled until that
	     * one is.
	     */
	
	  }, {
	    key: 'then',
	    value: function (resolvedCallback, rejectedCallback) {
	      var _this = this;
	
	      var promise = new ParsePromise();
	
	      var wrappedResolvedCallback = function () {
	        for (var _len2 = arguments.length, results = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          results[_key2] = arguments[_key2];
	        }
	
	        if (typeof resolvedCallback === 'function') {
	          if (_isPromisesAPlusCompliant) {
	            try {
	              results = [resolvedCallback.apply(this, results)];
	            } catch (e) {
	              results = [ParsePromise.error(e)];
	            }
	          } else {
	            results = [resolvedCallback.apply(this, results)];
	          }
	        }
	        if (results.length === 1 && ParsePromise.is(results[0])) {
	          results[0].then(function () {
	            promise.resolve.apply(promise, arguments);
	          }, function (error) {
	            promise.reject(error);
	          });
	        } else {
	          promise.resolve.apply(promise, results);
	        }
	      };
	
	      var wrappedRejectedCallback = function (error) {
	        var result = [];
	        if (typeof rejectedCallback === 'function') {
	          if (_isPromisesAPlusCompliant) {
	            try {
	              result = [rejectedCallback(error)];
	            } catch (e) {
	              result = [ParsePromise.error(e)];
	            }
	          } else {
	            result = [rejectedCallback(error)];
	          }
	          if (result.length === 1 && ParsePromise.is(result[0])) {
	            result[0].then(function () {
	              promise.resolve.apply(promise, arguments);
	            }, function (error) {
	              promise.reject(error);
	            });
	          } else {
	            if (_isPromisesAPlusCompliant) {
	              promise.resolve.apply(promise, result);
	            } else {
	              promise.reject(result[0]);
	            }
	          }
	        } else {
	          promise.reject(error);
	        }
	      };
	
	      var runLater = function (fn) {
	        fn.call();
	      };
	      if (_isPromisesAPlusCompliant) {
	        if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
	          runLater = function (fn) {
	            process.nextTick(fn);
	          };
	        } else if (typeof setTimeout === 'function') {
	          runLater = function (fn) {
	            setTimeout(fn, 0);
	          };
	        }
	      }
	
	      if (this._resolved) {
	        runLater(function () {
	          wrappedResolvedCallback.apply(_this, _this._result);
	        });
	      } else if (this._rejected) {
	        runLater(function () {
	          wrappedRejectedCallback(_this._error);
	        });
	      } else {
	        this._resolvedCallbacks.push(wrappedResolvedCallback);
	        this._rejectedCallbacks.push(wrappedRejectedCallback);
	      }
	
	      return promise;
	    }
	
	    /**
	     * Add handlers to be called when the promise
	     * is either resolved or rejected
	     * @method always
	     */
	
	  }, {
	    key: 'always',
	    value: function (callback) {
	      return this.then(callback, callback);
	    }
	
	    /**
	     * Add handlers to be called when the Promise object is resolved
	     * @method done
	     */
	
	  }, {
	    key: 'done',
	    value: function (callback) {
	      return this.then(callback);
	    }
	
	    /**
	     * Add handlers to be called when the Promise object is rejected
	     * Alias for catch().
	     * @method fail
	     */
	
	  }, {
	    key: 'fail',
	    value: function (callback) {
	      return this.then(null, callback);
	    }
	
	    /**
	     * Add handlers to be called when the Promise object is rejected
	     * @method catch
	     */
	
	  }, {
	    key: 'catch',
	    value: function (callback) {
	      return this.then(null, callback);
	    }
	
	    /**
	     * Run the given callbacks after this promise is fulfilled.
	     * @method _thenRunCallbacks
	     * @param optionsOrCallback {} A Backbone-style options callback, or a
	     * callback function. If this is an options object and contains a "model"
	     * attributes, that will be passed to error callbacks as the first argument.
	     * @param model {} If truthy, this will be passed as the first result of
	     * error callbacks. This is for Backbone-compatability.
	     * @return {Parse.Promise} A promise that will be resolved after the
	     * callbacks are run, with the same result as this.
	     */
	
	  }, {
	    key: '_thenRunCallbacks',
	    value: function (optionsOrCallback, model) {
	      var options = {};
	      if (typeof optionsOrCallback === 'function') {
	        options.success = function (result) {
	          optionsOrCallback(result, null);
	        };
	        options.error = function (error) {
	          optionsOrCallback(null, error);
	        };
	      } else if ((typeof optionsOrCallback === 'undefined' ? 'undefined' : (0, _typeof3.default)(optionsOrCallback)) === 'object') {
	        if (typeof optionsOrCallback.success === 'function') {
	          options.success = optionsOrCallback.success;
	        }
	        if (typeof optionsOrCallback.error === 'function') {
	          options.error = optionsOrCallback.error;
	        }
	      }
	
	      return this.then(function () {
	        for (var _len3 = arguments.length, results = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	          results[_key3] = arguments[_key3];
	        }
	
	        if (options.success) {
	          options.success.apply(this, results);
	        }
	        return ParsePromise.as.apply(ParsePromise, arguments);
	      }, function (error) {
	        if (options.error) {
	          if (typeof model !== 'undefined') {
	            options.error(model, error);
	          } else {
	            options.error(error);
	          }
	        }
	        // By explicitly returning a rejected Promise, this will work with
	        // either jQuery or Promises/A+ semantics.
	        return ParsePromise.error(error);
	      });
	    }
	
	    /**
	     * Adds a callback function that should be called regardless of whether
	     * this promise failed or succeeded. The callback will be given either the
	     * array of results for its first argument, or the error as its second,
	     * depending on whether this Promise was rejected or resolved. Returns a
	     * new Promise, like "then" would.
	     * @method _continueWith
	     * @param {Function} continuation the callback.
	     */
	
	  }, {
	    key: '_continueWith',
	    value: function (continuation) {
	      return this.then(function () {
	        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	          args[_key4] = arguments[_key4];
	        }
	
	        return continuation(args, null);
	      }, function (error) {
	        return continuation(null, error);
	      });
	    }
	
	    /**
	     * Returns true iff the given object fulfils the Promise interface.
	     * @method is
	     * @param {Object} promise The object to test
	     * @static
	     * @return {Boolean}
	     */
	
	  }], [{
	    key: 'is',
	    value: function (promise) {
	      return promise != null && typeof promise.then === 'function';
	    }
	
	    /**
	     * Returns a new promise that is resolved with a given value.
	     * @method as
	     * @param value The value to resolve the promise with
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	
	  }, {
	    key: 'as',
	    value: function () {
	      var promise = new ParsePromise();
	
	      for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        values[_key5] = arguments[_key5];
	      }
	
	      promise.resolve.apply(promise, values);
	      return promise;
	    }
	
	    /**
	     * Returns a new promise that is resolved with a given value.
	     * If that value is a thenable Promise (has a .then() prototype
	     * method), the new promise will be chained to the end of the
	     * value.
	     * @method resolve
	     * @param value The value to resolve the promise with
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	
	  }, {
	    key: 'resolve',
	    value: function (value) {
	      return new ParsePromise(function (resolve, reject) {
	        if (ParsePromise.is(value)) {
	          value.then(resolve, reject);
	        } else {
	          resolve(value);
	        }
	      });
	    }
	
	    /**
	     * Returns a new promise that is rejected with a given error.
	     * @method error
	     * @param error The error to reject the promise with
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	
	  }, {
	    key: 'error',
	    value: function () {
	      var promise = new ParsePromise();
	
	      for (var _len6 = arguments.length, errors = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        errors[_key6] = arguments[_key6];
	      }
	
	      promise.reject.apply(promise, errors);
	      return promise;
	    }
	
	    /**
	     * Returns a new promise that is rejected with a given error.
	     * This is an alias for Parse.Promise.error, for compliance with
	     * the ES6 implementation.
	     * @method reject
	     * @param error The error to reject the promise with
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	
	  }, {
	    key: 'reject',
	    value: function () {
	      for (var _len7 = arguments.length, errors = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        errors[_key7] = arguments[_key7];
	      }
	
	      return ParsePromise.error.apply(null, errors);
	    }
	
	    /**
	     * Returns a new promise that is fulfilled when all of the input promises
	     * are resolved. If any promise in the list fails, then the returned promise
	     * will be rejected with an array containing the error from each promise.
	     * If they all succeed, then the returned promise will succeed, with the
	     * results being the results of all the input
	     * promises. For example: <pre>
	     *   var p1 = Parse.Promise.as(1);
	     *   var p2 = Parse.Promise.as(2);
	     *   var p3 = Parse.Promise.as(3);
	     *
	     *   Parse.Promise.when(p1, p2, p3).then(function(r1, r2, r3) {
	     *     console.log(r1);  // prints 1
	     *     console.log(r2);  // prints 2
	     *     console.log(r3);  // prints 3
	     *   });</pre>
	     *
	     * The input promises can also be specified as an array: <pre>
	     *   var promises = [p1, p2, p3];
	     *   Parse.Promise.when(promises).then(function(results) {
	     *     console.log(results);  // prints [1,2,3]
	     *   });
	     * </pre>
	     * @method when
	     * @param {Array} promises a list of promises to wait for.
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	
	  }, {
	    key: 'when',
	    value: function (promises) {
	      var objects;
	      var arrayArgument = Array.isArray(promises);
	      if (arrayArgument) {
	        objects = promises;
	      } else {
	        objects = arguments;
	      }
	
	      var total = objects.length;
	      var hadError = false;
	      var results = [];
	      var returnValue = arrayArgument ? [results] : results;
	      var errors = [];
	      results.length = objects.length;
	      errors.length = objects.length;
	
	      if (total === 0) {
	        return ParsePromise.as.apply(this, returnValue);
	      }
	
	      var promise = new ParsePromise();
	
	      var resolveOne = function () {
	        total--;
	        if (total <= 0) {
	          if (hadError) {
	            promise.reject(errors);
	          } else {
	            promise.resolve.apply(promise, returnValue);
	          }
	        }
	      };
	
	      var chain = function (object, index) {
	        if (ParsePromise.is(object)) {
	          object.then(function (result) {
	            results[index] = result;
	            resolveOne();
	          }, function (error) {
	            errors[index] = error;
	            hadError = true;
	            resolveOne();
	          });
	        } else {
	          results[i] = object;
	          resolveOne();
	        }
	      };
	      for (var i = 0; i < objects.length; i++) {
	        chain(objects[i], i);
	      }
	
	      return promise;
	    }
	
	    /**
	     * Returns a new promise that is fulfilled when all of the promises in the
	     * iterable argument are resolved. If any promise in the list fails, then
	     * the returned promise will be immediately rejected with the reason that
	     * single promise rejected. If they all succeed, then the returned promise
	     * will succeed, with the results being the results of all the input
	     * promises. If the iterable provided is empty, the returned promise will
	     * be immediately resolved.
	     * 
	     * For example: <pre>
	     *   var p1 = Parse.Promise.as(1);
	     *   var p2 = Parse.Promise.as(2);
	     *   var p3 = Parse.Promise.as(3);
	     *
	     *   Parse.Promise.all([p1, p2, p3]).then(function([r1, r2, r3]) {
	     *     console.log(r1);  // prints 1
	     *     console.log(r2);  // prints 2
	     *     console.log(r3);  // prints 3
	     *   });</pre>
	     *
	     * @method all
	     * @param {Iterable} promises an iterable of promises to wait for.
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	
	  }, {
	    key: 'all',
	    value: function (promises) {
	      var total = 0;
	      var objects = [];
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)(promises), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var p = _step.value;
	
	          objects[total++] = p;
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      if (total === 0) {
	        return ParsePromise.as([]);
	      }
	
	      var hadError = false;
	      var promise = new ParsePromise();
	      var resolved = 0;
	      var results = [];
	      objects.forEach(function (object, i) {
	        if (ParsePromise.is(object)) {
	          object.then(function (result) {
	            if (hadError) {
	              return false;
	            }
	            results[i] = result;
	            resolved++;
	            if (resolved >= total) {
	              promise.resolve(results);
	            }
	          }, function (error) {
	            // Reject immediately
	            promise.reject(error);
	            hadError = true;
	          });
	        } else {
	          results[i] = object;
	          resolved++;
	          if (!hadError && resolved >= total) {
	            promise.resolve(results);
	          }
	        }
	      });
	
	      return promise;
	    }
	
	    /**
	     * Returns a new promise that is immediately fulfilled when any of the
	     * promises in the iterable argument are resolved or rejected. If the
	     * first promise to complete is resolved, the returned promise will be
	     * resolved with the same value. Likewise, if the first promise to
	     * complete is rejected, the returned promise will be rejected with the
	     * same reason.
	     *
	     * @method race
	     * @param {Iterable} promises an iterable of promises to wait for.
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	
	  }, {
	    key: 'race',
	    value: function (promises) {
	      var completed = false;
	      var promise = new ParsePromise();
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = (0, _getIterator3.default)(promises), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var p = _step2.value;
	
	          if (ParsePromise.is(p)) {
	            p.then(function (result) {
	              if (completed) {
	                return;
	              }
	              completed = true;
	              promise.resolve(result);
	            }, function (error) {
	              if (completed) {
	                return;
	              }
	              completed = true;
	              promise.reject(error);
	            });
	          } else if (!completed) {
	            completed = true;
	            promise.resolve(p);
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	
	      return promise;
	    }
	
	    /**
	     * Runs the given asyncFunction repeatedly, as long as the predicate
	     * function returns a truthy value. Stops repeating if asyncFunction returns
	     * a rejected promise.
	     * @method _continueWhile
	     * @param {Function} predicate should return false when ready to stop.
	     * @param {Function} asyncFunction should return a Promise.
	     * @static
	     */
	
	  }, {
	    key: '_continueWhile',
	    value: function (predicate, asyncFunction) {
	      if (predicate()) {
	        return asyncFunction().then(function () {
	          return ParsePromise._continueWhile(predicate, asyncFunction);
	        });
	      }
	      return ParsePromise.as();
	    }
	  }, {
	    key: 'isPromisesAPlusCompliant',
	    value: function () {
	      return _isPromisesAPlusCompliant;
	    }
	  }, {
	    key: 'enableAPlusCompliant',
	    value: function () {
	      _isPromisesAPlusCompliant = true;
	    }
	  }, {
	    key: 'disableAPlusCompliant',
	    value: function () {
	      _isPromisesAPlusCompliant = false;
	    }
	  }]);
	  return ParsePromise;
	}();
	
	exports.default = ParsePromise;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 697 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(698), __esModule: true };

/***/ },
/* 698 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(638);
	__webpack_require__(594);
	module.exports = __webpack_require__(699);

/***/ },
/* 699 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(607)
	  , get      = __webpack_require__(700);
	module.exports = __webpack_require__(602).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 700 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(701)
	  , ITERATOR  = __webpack_require__(635)('iterator')
	  , Iterators = __webpack_require__(617);
	module.exports = __webpack_require__(602).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 701 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(625)
	  , TAG = __webpack_require__(635)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 702 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(665);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _ParseOp = __webpack_require__(703);
	
	var _ParseObject = __webpack_require__(687);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParseQuery = __webpack_require__(708);
	
	var _ParseQuery2 = _interopRequireDefault(_ParseQuery);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Creates a new Relation for the given parent object and key. This
	 * constructor should rarely be used directly, but rather created by
	 * Parse.Object.relation.
	 * @class Parse.Relation
	 * @constructor
	 * @param {Parse.Object} parent The parent of this relation.
	 * @param {String} key The key for this relation on the parent.
	 *
	 * <p>
	 * A class that is used to access all of the children of a many-to-many
	 * relationship.  Each instance of Parse.Relation is associated with a
	 * particular parent object and key.
	 * </p>
	 */
	var ParseRelation = function () {
	  function ParseRelation(parent, key) {
	    (0, _classCallCheck3.default)(this, ParseRelation);
	
	    this.parent = parent;
	    this.key = key;
	    this.targetClassName = null;
	  }
	
	  /**
	   * Makes sure that this relation has the right parent and key.
	   */
	
	  (0, _createClass3.default)(ParseRelation, [{
	    key: '_ensureParentAndKey',
	    value: function (parent, key) {
	      this.key = this.key || key;
	      if (this.key !== key) {
	        throw new Error('Internal Error. Relation retrieved from two different keys.');
	      }
	      if (this.parent) {
	        if (this.parent.className !== parent.className) {
	          throw new Error('Internal Error. Relation retrieved from two different Objects.');
	        }
	        if (this.parent.id) {
	          if (this.parent.id !== parent.id) {
	            throw new Error('Internal Error. Relation retrieved from two different Objects.');
	          }
	        } else if (parent.id) {
	          this.parent = parent;
	        }
	      } else {
	        this.parent = parent;
	      }
	    }
	
	    /**
	     * Adds a Parse.Object or an array of Parse.Objects to the relation.
	     * @method add
	     * @param {} objects The item or items to add.
	     */
	
	  }, {
	    key: 'add',
	    value: function (objects) {
	      if (!Array.isArray(objects)) {
	        objects = [objects];
	      }
	
	      var change = new _ParseOp.RelationOp(objects, []);
	      var parent = this.parent;
	      if (!parent) {
	        throw new Error('Cannot add to a Relation without a parent');
	      }
	      parent.set(this.key, change);
	      this.targetClassName = change._targetClassName;
	      return parent;
	    }
	
	    /**
	     * Removes a Parse.Object or an array of Parse.Objects from this relation.
	     * @method remove
	     * @param {} objects The item or items to remove.
	     */
	
	  }, {
	    key: 'remove',
	    value: function (objects) {
	      if (!Array.isArray(objects)) {
	        objects = [objects];
	      }
	
	      var change = new _ParseOp.RelationOp([], objects);
	      if (!this.parent) {
	        throw new Error('Cannot remove from a Relation without a parent');
	      }
	      this.parent.set(this.key, change);
	      this.targetClassName = change._targetClassName;
	    }
	
	    /**
	     * Returns a JSON version of the object suitable for saving to disk.
	     * @method toJSON
	     * @return {Object}
	     */
	
	  }, {
	    key: 'toJSON',
	    value: function () {
	      return {
	        __type: 'Relation',
	        className: this.targetClassName
	      };
	    }
	
	    /**
	     * Returns a Parse.Query that is limited to objects in this
	     * relation.
	     * @method query
	     * @return {Parse.Query}
	     */
	
	  }, {
	    key: 'query',
	    value: function () {
	      var query;
	      var parent = this.parent;
	      if (!parent) {
	        throw new Error('Cannot construct a query for a Relation without a parent');
	      }
	      if (!this.targetClassName) {
	        query = new _ParseQuery2.default(parent.className);
	        query._extraOptions.redirectClassNameForKey = this.key;
	      } else {
	        query = new _ParseQuery2.default(this.targetClassName);
	      }
	      query._addCondition('$relatedTo', 'object', {
	        __type: 'Pointer',
	        className: parent.className,
	        objectId: parent.id
	      });
	      query._addCondition('$relatedTo', 'key', this.key);
	
	      return query;
	    }
	  }]);
	  return ParseRelation;
	}(); /**
	      * Copyright (c) 2015-present, Parse, LLC.
	      * All rights reserved.
	      *
	      * This source code is licensed under the BSD-style license found in the
	      * LICENSE file in the root directory of this source tree. An additional grant
	      * of patent rights can be found in the PATENTS file in the same directory.
	      *
	      * 
	      */
	
	exports.default = ParseRelation;

/***/ },
/* 703 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RelationOp = exports.RemoveOp = exports.AddUniqueOp = exports.AddOp = exports.IncrementOp = exports.UnsetOp = exports.SetOp = exports.Op = undefined;
	
	var _getPrototypeOf = __webpack_require__(670);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _possibleConstructorReturn2 = __webpack_require__(673);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(678);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(665);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	exports.opFromJSON = opFromJSON;
	
	var _arrayContainsObject = __webpack_require__(704);
	
	var _arrayContainsObject2 = _interopRequireDefault(_arrayContainsObject);
	
	var _decode = __webpack_require__(590);
	
	var _decode2 = _interopRequireDefault(_decode);
	
	var _encode = __webpack_require__(705);
	
	var _encode2 = _interopRequireDefault(_encode);
	
	var _ParseObject = __webpack_require__(687);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParseRelation = __webpack_require__(702);
	
	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
	
	var _unique = __webpack_require__(707);
	
	var _unique2 = _interopRequireDefault(_unique);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function opFromJSON(json) {
	  if (!json || !json.__op) {
	    return null;
	  }
	  switch (json.__op) {
	    case 'Delete':
	      return new UnsetOp();
	    case 'Increment':
	      return new IncrementOp(json.amount);
	    case 'Add':
	      return new AddOp((0, _decode2.default)(json.objects));
	    case 'AddUnique':
	      return new AddUniqueOp((0, _decode2.default)(json.objects));
	    case 'Remove':
	      return new RemoveOp((0, _decode2.default)(json.objects));
	    case 'AddRelation':
	      var toAdd = (0, _decode2.default)(json.objects);
	      if (!Array.isArray(toAdd)) {
	        return new RelationOp([], []);
	      }
	      return new RelationOp(toAdd, []);
	    case 'RemoveRelation':
	      var toRemove = (0, _decode2.default)(json.objects);
	      if (!Array.isArray(toRemove)) {
	        return new RelationOp([], []);
	      }
	      return new RelationOp([], toRemove);
	    case 'Batch':
	      var toAdd = [];
	      var toRemove = [];
	      for (var i = 0; i < json.ops.length; i++) {
	        if (json.ops[i].__op === 'AddRelation') {
	          toAdd = toAdd.concat((0, _decode2.default)(json.ops[i].objects));
	        } else if (json.ops[i].__op === 'RemoveRelation') {
	          toRemove = toRemove.concat((0, _decode2.default)(json.ops[i].objects));
	        }
	      }
	      return new RelationOp(toAdd, toRemove);
	  }
	  return null;
	}
	
	var Op = exports.Op = function () {
	  function Op() {
	    (0, _classCallCheck3.default)(this, Op);
	  }
	
	  (0, _createClass3.default)(Op, [{
	    key: 'applyTo',
	
	    // Empty parent class
	    value: function (value) {}
	  }, {
	    key: 'mergeWith',
	    value: function (previous) {}
	  }, {
	    key: 'toJSON',
	    value: function () {}
	  }]);
	  return Op;
	}();
	
	var SetOp = exports.SetOp = function (_Op) {
	  (0, _inherits3.default)(SetOp, _Op);
	
	  function SetOp(value) {
	    (0, _classCallCheck3.default)(this, SetOp);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (SetOp.__proto__ || (0, _getPrototypeOf2.default)(SetOp)).call(this));
	
	    _this._value = value;
	    return _this;
	  }
	
	  (0, _createClass3.default)(SetOp, [{
	    key: 'applyTo',
	    value: function (value) {
	      return this._value;
	    }
	  }, {
	    key: 'mergeWith',
	    value: function (previous) {
	      return new SetOp(this._value);
	    }
	  }, {
	    key: 'toJSON',
	    value: function () {
	      return (0, _encode2.default)(this._value, false, true);
	    }
	  }]);
	  return SetOp;
	}(Op);
	
	var UnsetOp = exports.UnsetOp = function (_Op2) {
	  (0, _inherits3.default)(UnsetOp, _Op2);
	
	  function UnsetOp() {
	    (0, _classCallCheck3.default)(this, UnsetOp);
	    return (0, _possibleConstructorReturn3.default)(this, (UnsetOp.__proto__ || (0, _getPrototypeOf2.default)(UnsetOp)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(UnsetOp, [{
	    key: 'applyTo',
	    value: function (value) {
	      return undefined;
	    }
	  }, {
	    key: 'mergeWith',
	    value: function (previous) {
	      return new UnsetOp();
	    }
	  }, {
	    key: 'toJSON',
	    value: function () {
	      return { __op: 'Delete' };
	    }
	  }]);
	  return UnsetOp;
	}(Op);
	
	var IncrementOp = exports.IncrementOp = function (_Op3) {
	  (0, _inherits3.default)(IncrementOp, _Op3);
	
	  function IncrementOp(amount) {
	    (0, _classCallCheck3.default)(this, IncrementOp);
	
	    var _this3 = (0, _possibleConstructorReturn3.default)(this, (IncrementOp.__proto__ || (0, _getPrototypeOf2.default)(IncrementOp)).call(this));
	
	    if (typeof amount !== 'number') {
	      throw new TypeError('Increment Op must be initialized with a numeric amount.');
	    }
	    _this3._amount = amount;
	    return _this3;
	  }
	
	  (0, _createClass3.default)(IncrementOp, [{
	    key: 'applyTo',
	    value: function (value) {
	      if (typeof value === 'undefined') {
	        return this._amount;
	      }
	      if (typeof value !== 'number') {
	        throw new TypeError('Cannot increment a non-numeric value.');
	      }
	      return this._amount + value;
	    }
	  }, {
	    key: 'mergeWith',
	    value: function (previous) {
	      if (!previous) {
	        return this;
	      }
	      if (previous instanceof SetOp) {
	        return new SetOp(this.applyTo(previous._value));
	      }
	      if (previous instanceof UnsetOp) {
	        return new SetOp(this._amount);
	      }
	      if (previous instanceof IncrementOp) {
	        return new IncrementOp(this.applyTo(previous._amount));
	      }
	      throw new Error('Cannot merge Increment Op with the previous Op');
	    }
	  }, {
	    key: 'toJSON',
	    value: function () {
	      return { __op: 'Increment', amount: this._amount };
	    }
	  }]);
	  return IncrementOp;
	}(Op);
	
	var AddOp = exports.AddOp = function (_Op4) {
	  (0, _inherits3.default)(AddOp, _Op4);
	
	  function AddOp(value) {
	    (0, _classCallCheck3.default)(this, AddOp);
	
	    var _this4 = (0, _possibleConstructorReturn3.default)(this, (AddOp.__proto__ || (0, _getPrototypeOf2.default)(AddOp)).call(this));
	
	    _this4._value = Array.isArray(value) ? value : [value];
	    return _this4;
	  }
	
	  (0, _createClass3.default)(AddOp, [{
	    key: 'applyTo',
	    value: function (value) {
	      if (value == null) {
	        return this._value;
	      }
	      if (Array.isArray(value)) {
	        return value.concat(this._value);
	      }
	      throw new Error('Cannot add elements to a non-array value');
	    }
	  }, {
	    key: 'mergeWith',
	    value: function (previous) {
	      if (!previous) {
	        return this;
	      }
	      if (previous instanceof SetOp) {
	        return new SetOp(this.applyTo(previous._value));
	      }
	      if (previous instanceof UnsetOp) {
	        return new SetOp(this._value);
	      }
	      if (previous instanceof AddOp) {
	        return new AddOp(this.applyTo(previous._value));
	      }
	      throw new Error('Cannot merge Add Op with the previous Op');
	    }
	  }, {
	    key: 'toJSON',
	    value: function () {
	      return { __op: 'Add', objects: (0, _encode2.default)(this._value, false, true) };
	    }
	  }]);
	  return AddOp;
	}(Op);
	
	var AddUniqueOp = exports.AddUniqueOp = function (_Op5) {
	  (0, _inherits3.default)(AddUniqueOp, _Op5);
	
	  function AddUniqueOp(value) {
	    (0, _classCallCheck3.default)(this, AddUniqueOp);
	
	    var _this5 = (0, _possibleConstructorReturn3.default)(this, (AddUniqueOp.__proto__ || (0, _getPrototypeOf2.default)(AddUniqueOp)).call(this));
	
	    _this5._value = (0, _unique2.default)(Array.isArray(value) ? value : [value]);
	    return _this5;
	  }
	
	  (0, _createClass3.default)(AddUniqueOp, [{
	    key: 'applyTo',
	    value: function (value) {
	      if (value == null) {
	        return this._value || [];
	      }
	      if (Array.isArray(value)) {
	        // copying value lets Flow guarantee the pointer isn't modified elsewhere
	        var valueCopy = value;
	        var toAdd = [];
	        this._value.forEach(function (v) {
	          if (v instanceof _ParseObject2.default) {
	            if (!(0, _arrayContainsObject2.default)(valueCopy, v)) {
	              toAdd.push(v);
	            }
	          } else {
	            if (valueCopy.indexOf(v) < 0) {
	              toAdd.push(v);
	            }
	          }
	        });
	        return value.concat(toAdd);
	      }
	      throw new Error('Cannot add elements to a non-array value');
	    }
	  }, {
	    key: 'mergeWith',
	    value: function (previous) {
	      if (!previous) {
	        return this;
	      }
	      if (previous instanceof SetOp) {
	        return new SetOp(this.applyTo(previous._value));
	      }
	      if (previous instanceof UnsetOp) {
	        return new SetOp(this._value);
	      }
	      if (previous instanceof AddUniqueOp) {
	        return new AddUniqueOp(this.applyTo(previous._value));
	      }
	      throw new Error('Cannot merge AddUnique Op with the previous Op');
	    }
	  }, {
	    key: 'toJSON',
	    value: function () {
	      return { __op: 'AddUnique', objects: (0, _encode2.default)(this._value, false, true) };
	    }
	  }]);
	  return AddUniqueOp;
	}(Op);
	
	var RemoveOp = exports.RemoveOp = function (_Op6) {
	  (0, _inherits3.default)(RemoveOp, _Op6);
	
	  function RemoveOp(value) {
	    (0, _classCallCheck3.default)(this, RemoveOp);
	
	    var _this6 = (0, _possibleConstructorReturn3.default)(this, (RemoveOp.__proto__ || (0, _getPrototypeOf2.default)(RemoveOp)).call(this));
	
	    _this6._value = (0, _unique2.default)(Array.isArray(value) ? value : [value]);
	    return _this6;
	  }
	
	  (0, _createClass3.default)(RemoveOp, [{
	    key: 'applyTo',
	    value: function (value) {
	      if (value == null) {
	        return [];
	      }
	      if (Array.isArray(value)) {
	        var i = value.indexOf(this._value);
	        var removed = value.concat([]);
	        for (var i = 0; i < this._value.length; i++) {
	          var index = removed.indexOf(this._value[i]);
	          while (index > -1) {
	            removed.splice(index, 1);
	            index = removed.indexOf(this._value[i]);
	          }
	          if (this._value[i] instanceof _ParseObject2.default && this._value[i].id) {
	            for (var j = 0; j < removed.length; j++) {
	              if (removed[j] instanceof _ParseObject2.default && this._value[i].id === removed[j].id) {
	                removed.splice(j, 1);
	                j--;
	              }
	            }
	          }
	        }
	        return removed;
	      }
	      throw new Error('Cannot remove elements from a non-array value');
	    }
	  }, {
	    key: 'mergeWith',
	    value: function (previous) {
	      if (!previous) {
	        return this;
	      }
	      if (previous instanceof SetOp) {
	        return new SetOp(this.applyTo(previous._value));
	      }
	      if (previous instanceof UnsetOp) {
	        return new UnsetOp();
	      }
	      if (previous instanceof RemoveOp) {
	        var uniques = previous._value.concat([]);
	        for (var i = 0; i < this._value.length; i++) {
	          if (this._value[i] instanceof _ParseObject2.default) {
	            if (!(0, _arrayContainsObject2.default)(uniques, this._value[i])) {
	              uniques.push(this._value[i]);
	            }
	          } else {
	            if (uniques.indexOf(this._value[i]) < 0) {
	              uniques.push(this._value[i]);
	            }
	          }
	        }
	        return new RemoveOp(uniques);
	      }
	      throw new Error('Cannot merge Remove Op with the previous Op');
	    }
	  }, {
	    key: 'toJSON',
	    value: function () {
	      return { __op: 'Remove', objects: (0, _encode2.default)(this._value, false, true) };
	    }
	  }]);
	  return RemoveOp;
	}(Op);
	
	var RelationOp = exports.RelationOp = function (_Op7) {
	  (0, _inherits3.default)(RelationOp, _Op7);
	
	  function RelationOp(adds, removes) {
	    (0, _classCallCheck3.default)(this, RelationOp);
	
	    var _this7 = (0, _possibleConstructorReturn3.default)(this, (RelationOp.__proto__ || (0, _getPrototypeOf2.default)(RelationOp)).call(this));
	
	    _this7._targetClassName = null;
	
	    if (Array.isArray(adds)) {
	      _this7.relationsToAdd = (0, _unique2.default)(adds.map(_this7._extractId, _this7));
	    }
	
	    if (Array.isArray(removes)) {
	      _this7.relationsToRemove = (0, _unique2.default)(removes.map(_this7._extractId, _this7));
	    }
	    return _this7;
	  }
	
	  (0, _createClass3.default)(RelationOp, [{
	    key: '_extractId',
	    value: function (obj) {
	      if (typeof obj === 'string') {
	        return obj;
	      }
	      if (!obj.id) {
	        throw new Error('You cannot add or remove an unsaved Parse Object from a relation');
	      }
	      if (!this._targetClassName) {
	        this._targetClassName = obj.className;
	      }
	      if (this._targetClassName !== obj.className) {
	        throw new Error('Tried to create a Relation with 2 different object types: ' + this._targetClassName + ' and ' + obj.className + '.');
	      }
	      return obj.id;
	    }
	  }, {
	    key: 'applyTo',
	    value: function (value, object, key) {
	      if (!value) {
	        if (!object || !key) {
	          throw new Error('Cannot apply a RelationOp without either a previous value, or an object and a key');
	        }
	        var parent = new _ParseObject2.default(object.className);
	        if (object.id && object.id.indexOf('local') === 0) {
	          parent._localId = object.id;
	        } else if (object.id) {
	          parent.id = object.id;
	        }
	        var relation = new _ParseRelation2.default(parent, key);
	        relation.targetClassName = this._targetClassName;
	        return relation;
	      }
	      if (value instanceof _ParseRelation2.default) {
	        if (this._targetClassName) {
	          if (value.targetClassName) {
	            if (this._targetClassName !== value.targetClassName) {
	              throw new Error('Related object must be a ' + value.targetClassName + ', but a ' + this._targetClassName + ' was passed in.');
	            }
	          } else {
	            value.targetClassName = this._targetClassName;
	          }
	        }
	        return value;
	      } else {
	        throw new Error('Relation cannot be applied to a non-relation field');
	      }
	    }
	  }, {
	    key: 'mergeWith',
	    value: function (previous) {
	      if (!previous) {
	        return this;
	      } else if (previous instanceof UnsetOp) {
	        throw new Error('You cannot modify a relation after deleting it.');
	      } else if (previous instanceof RelationOp) {
	        if (previous._targetClassName && previous._targetClassName !== this._targetClassName) {
	          throw new Error('Related object must be of class ' + previous._targetClassName + ', but ' + (this._targetClassName || 'null') + ' was passed in.');
	        }
	        var newAdd = previous.relationsToAdd.concat([]);
	        this.relationsToRemove.forEach(function (r) {
	          var index = newAdd.indexOf(r);
	          if (index > -1) {
	            newAdd.splice(index, 1);
	          }
	        });
	        this.relationsToAdd.forEach(function (r) {
	          var index = newAdd.indexOf(r);
	          if (index < 0) {
	            newAdd.push(r);
	          }
	        });
	
	        var newRemove = previous.relationsToRemove.concat([]);
	        this.relationsToAdd.forEach(function (r) {
	          var index = newRemove.indexOf(r);
	          if (index > -1) {
	            newRemove.splice(index, 1);
	          }
	        });
	        this.relationsToRemove.forEach(function (r) {
	          var index = newRemove.indexOf(r);
	          if (index < 0) {
	            newRemove.push(r);
	          }
	        });
	
	        var newRelation = new RelationOp(newAdd, newRemove);
	        newRelation._targetClassName = this._targetClassName;
	        return newRelation;
	      }
	      throw new Error('Cannot merge Relation Op with the previous Op');
	    }
	  }, {
	    key: 'toJSON',
	    value: function () {
	      var _this8 = this;
	
	      var idToPointer = function (id) {
	        return {
	          __type: 'Pointer',
	          className: _this8._targetClassName,
	          objectId: id
	        };
	      };
	
	      var adds = null;
	      var removes = null;
	      var pointers = null;
	
	      if (this.relationsToAdd.length > 0) {
	        pointers = this.relationsToAdd.map(idToPointer);
	        adds = { __op: 'AddRelation', objects: pointers };
	      }
	      if (this.relationsToRemove.length > 0) {
	        pointers = this.relationsToRemove.map(idToPointer);
	        removes = { __op: 'RemoveRelation', objects: pointers };
	      }
	
	      if (adds && removes) {
	        return { __op: 'Batch', ops: [adds, removes] };
	      }
	
	      return adds || removes || {};
	    }
	  }]);
	  return RelationOp;
	}(Op);

/***/ },
/* 704 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = arrayContainsObject;
	
	var _ParseObject = __webpack_require__(687);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function arrayContainsObject(array, object) {
	  if (array.indexOf(object) > -1) {
	    return true;
	  }
	  for (var i = 0; i < array.length; i++) {
	    if (array[i] instanceof _ParseObject2.default && array[i].className === object.className && array[i]._getId() === object._getId()) {
	      return true;
	    }
	  }
	  return false;
	} /**
	   * Copyright (c) 2015-present, Parse, LLC.
	   * All rights reserved.
	   *
	   * This source code is licensed under the BSD-style license found in the
	   * LICENSE file in the root directory of this source tree. An additional grant
	   * of patent rights can be found in the PATENTS file in the same directory.
	   *
	   * 
	   */

/***/ },
/* 705 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _keys = __webpack_require__(660);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports.default = function (value, disallowObjects, forcePointers, seen) {
	  return encode(value, !!disallowObjects, !!forcePointers, seen || []);
	};
	
	var _ParseACL = __webpack_require__(659);
	
	var _ParseACL2 = _interopRequireDefault(_ParseACL);
	
	var _ParseFile = __webpack_require__(695);
	
	var _ParseFile2 = _interopRequireDefault(_ParseFile);
	
	var _ParseGeoPoint = __webpack_require__(706);
	
	var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);
	
	var _ParseObject = __webpack_require__(687);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParseOp = __webpack_require__(703);
	
	var _ParseRelation = __webpack_require__(702);
	
	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	var toString = Object.prototype.toString;
	
	function encode(value, disallowObjects, forcePointers, seen) {
	  if (value instanceof _ParseObject2.default) {
	    if (disallowObjects) {
	      throw new Error('Parse Objects not allowed here');
	    }
	    var seenEntry = value.id ? value.className + ':' + value.id : value;
	    if (forcePointers || !seen || seen.indexOf(seenEntry) > -1 || value.dirty() || (0, _keys2.default)(value._getServerData()).length < 1) {
	      return value.toPointer();
	    }
	    seen = seen.concat(seenEntry);
	    return value._toFullJSON(seen);
	  }
	  if (value instanceof _ParseOp.Op || value instanceof _ParseACL2.default || value instanceof _ParseGeoPoint2.default || value instanceof _ParseRelation2.default) {
	    return value.toJSON();
	  }
	  if (value instanceof _ParseFile2.default) {
	    if (!value.url()) {
	      throw new Error('Tried to encode an unsaved file.');
	    }
	    return value.toJSON();
	  }
	  if (toString.call(value) === '[object Date]') {
	    if (isNaN(value)) {
	      throw new Error('Tried to encode an invalid date.');
	    }
	    return { __type: 'Date', iso: value.toJSON() };
	  }
	  if (toString.call(value) === '[object RegExp]' && typeof value.source === 'string') {
	    return value.source;
	  }
	
	  if (Array.isArray(value)) {
	    return value.map(function (v) {
	      return encode(v, disallowObjects, forcePointers, seen);
	    });
	  }
	
	  if (value && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
	    var output = {};
	    for (var k in value) {
	      output[k] = encode(value[k], disallowObjects, forcePointers, seen);
	    }
	    return output;
	  }
	
	  return value;
	}

/***/ },
/* 706 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(665);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Creates a new GeoPoint with any of the following forms:<br>
	 *   <pre>
	 *   new GeoPoint(otherGeoPoint)
	 *   new GeoPoint(30, 30)
	 *   new GeoPoint([30, 30])
	 *   new GeoPoint({latitude: 30, longitude: 30})
	 *   new GeoPoint()  // defaults to (0, 0)
	 *   </pre>
	 * @class Parse.GeoPoint
	 * @constructor
	 *
	 * <p>Represents a latitude / longitude point that may be associated
	 * with a key in a ParseObject or used as a reference point for geo queries.
	 * This allows proximity-based queries on the key.</p>
	 *
	 * <p>Only one key in a class may contain a GeoPoint.</p>
	 *
	 * <p>Example:<pre>
	 *   var point = new Parse.GeoPoint(30.0, -20.0);
	 *   var object = new Parse.Object("PlaceObject");
	 *   object.set("location", point);
	 *   object.save();</pre></p>
	 */
	var ParseGeoPoint = function () {
	  function ParseGeoPoint(arg1, arg2) {
	    (0, _classCallCheck3.default)(this, ParseGeoPoint);
	
	    if (Array.isArray(arg1)) {
	      ParseGeoPoint._validate(arg1[0], arg1[1]);
	      this._latitude = arg1[0];
	      this._longitude = arg1[1];
	    } else if ((typeof arg1 === 'undefined' ? 'undefined' : (0, _typeof3.default)(arg1)) === 'object') {
	      ParseGeoPoint._validate(arg1.latitude, arg1.longitude);
	      this._latitude = arg1.latitude;
	      this._longitude = arg1.longitude;
	    } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
	      ParseGeoPoint._validate(arg1, arg2);
	      this._latitude = arg1;
	      this._longitude = arg2;
	    } else {
	      this._latitude = 0;
	      this._longitude = 0;
	    }
	  }
	
	  /**
	   * North-south portion of the coordinate, in range [-90, 90].
	   * Throws an exception if set out of range in a modern browser.
	   * @property latitude
	   * @type Number
	   */
	
	  (0, _createClass3.default)(ParseGeoPoint, [{
	    key: 'toJSON',
	
	    /**
	     * Returns a JSON representation of the GeoPoint, suitable for Parse.
	     * @method toJSON
	     * @return {Object}
	     */
	    value: function () {
	      ParseGeoPoint._validate(this._latitude, this._longitude);
	      return {
	        __type: 'GeoPoint',
	        latitude: this._latitude,
	        longitude: this._longitude
	      };
	    }
	  }, {
	    key: 'equals',
	    value: function (other) {
	      return other instanceof ParseGeoPoint && this.latitude === other.latitude && this.longitude === other.longitude;
	    }
	
	    /**
	     * Returns the distance from this GeoPoint to another in radians.
	     * @method radiansTo
	     * @param {Parse.GeoPoint} point the other Parse.GeoPoint.
	     * @return {Number}
	     */
	
	  }, {
	    key: 'radiansTo',
	    value: function (point) {
	      var d2r = Math.PI / 180.0;
	      var lat1rad = this.latitude * d2r;
	      var long1rad = this.longitude * d2r;
	      var lat2rad = point.latitude * d2r;
	      var long2rad = point.longitude * d2r;
	
	      var sinDeltaLatDiv2 = Math.sin((lat1rad - lat2rad) / 2);
	      var sinDeltaLongDiv2 = Math.sin((long1rad - long2rad) / 2);
	      // Square of half the straight line chord distance between both points.
	      var a = sinDeltaLatDiv2 * sinDeltaLatDiv2 + Math.cos(lat1rad) * Math.cos(lat2rad) * sinDeltaLongDiv2 * sinDeltaLongDiv2;
	      a = Math.min(1.0, a);
	      return 2 * Math.asin(Math.sqrt(a));
	    }
	
	    /**
	     * Returns the distance from this GeoPoint to another in kilometers.
	     * @method kilometersTo
	     * @param {Parse.GeoPoint} point the other Parse.GeoPoint.
	     * @return {Number}
	     */
	
	  }, {
	    key: 'kilometersTo',
	    value: function (point) {
	      return this.radiansTo(point) * 6371.0;
	    }
	
	    /**
	     * Returns the distance from this GeoPoint to another in miles.
	     * @method milesTo
	     * @param {Parse.GeoPoint} point the other Parse.GeoPoint.
	     * @return {Number}
	     */
	
	  }, {
	    key: 'milesTo',
	    value: function (point) {
	      return this.radiansTo(point) * 3958.8;
	    }
	
	    /**
	     * Throws an exception if the given lat-long is out of bounds.
	     */
	
	  }, {
	    key: 'latitude',
	    get: function () {
	      return this._latitude;
	    },
	    set: function (val) {
	      ParseGeoPoint._validate(val, this.longitude);
	      this._latitude = val;
	    }
	
	    /**
	     * East-west portion of the coordinate, in range [-180, 180].
	     * Throws if set out of range in a modern browser.
	     * @property longitude
	     * @type Number
	     */
	
	  }, {
	    key: 'longitude',
	    get: function () {
	      return this._longitude;
	    },
	    set: function (val) {
	      ParseGeoPoint._validate(this.latitude, val);
	      this._longitude = val;
	    }
	  }], [{
	    key: '_validate',
	    value: function (latitude, longitude) {
	      if (latitude !== latitude || longitude !== longitude) {
	        throw new TypeError('GeoPoint latitude and longitude must be valid numbers');
	      }
	      if (latitude < -90.0) {
	        throw new TypeError('GeoPoint latitude out of bounds: ' + latitude + ' < -90.0.');
	      }
	      if (latitude > 90.0) {
	        throw new TypeError('GeoPoint latitude out of bounds: ' + latitude + ' > 90.0.');
	      }
	      if (longitude < -180.0) {
	        throw new TypeError('GeoPoint longitude out of bounds: ' + longitude + ' < -180.0.');
	      }
	      if (longitude > 180.0) {
	        throw new TypeError('GeoPoint longitude out of bounds: ' + longitude + ' > 180.0.');
	      }
	    }
	
	    /**
	     * Creates a GeoPoint with the user's current location, if available.
	     * Calls options.success with a new GeoPoint instance or calls options.error.
	     * @method current
	     * @param {Object} options An object with success and error callbacks.
	     * @static
	     */
	
	  }, {
	    key: 'current',
	    value: function (options) {
	      var promise = new _ParsePromise2.default();
	      navigator.geolocation.getCurrentPosition(function (location) {
	        promise.resolve(new ParseGeoPoint(location.coords.latitude, location.coords.longitude));
	      }, function (error) {
	        promise.reject(error);
	      });
	
	      return promise._thenRunCallbacks(options);
	    }
	  }]);
	  return ParseGeoPoint;
	}(); /**
	      * Copyright (c) 2015-present, Parse, LLC.
	      * All rights reserved.
	      *
	      * This source code is licensed under the BSD-style license found in the
	      * LICENSE file in the root directory of this source tree. An additional grant
	      * of patent rights can be found in the PATENTS file in the same directory.
	      *
	      * 
	      */
	
	exports.default = ParseGeoPoint;

/***/ },
/* 707 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = unique;
	
	var _arrayContainsObject = __webpack_require__(704);
	
	var _arrayContainsObject2 = _interopRequireDefault(_arrayContainsObject);
	
	var _ParseObject = __webpack_require__(687);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function unique(arr) {
	  var uniques = [];
	  arr.forEach(function (value) {
	    if (value instanceof _ParseObject2.default) {
	      if (!(0, _arrayContainsObject2.default)(uniques, value)) {
	        uniques.push(value);
	      }
	    } else {
	      if (uniques.indexOf(value) < 0) {
	        uniques.push(value);
	      }
	    }
	  });
	  return uniques;
	}

/***/ },
/* 708 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(665);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _CoreManager = __webpack_require__(693);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _encode = __webpack_require__(705);
	
	var _encode2 = _interopRequireDefault(_encode);
	
	var _ParseError = __webpack_require__(686);
	
	var _ParseError2 = _interopRequireDefault(_ParseError);
	
	var _ParseGeoPoint = __webpack_require__(706);
	
	var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);
	
	var _ParseObject = __webpack_require__(687);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Converts a string into a regex that matches it.
	 * Surrounding with \Q .. \E does this, we just need to escape any \E's in
	 * the text separately.
	 */
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function quote(s) {
	  return '\\Q' + s.replace('\\E', '\\E\\\\E\\Q') + '\\E';
	}
	
	/**
	 * Creates a new parse Parse.Query for the given Parse.Object subclass.
	 * @class Parse.Query
	 * @constructor
	 * @param {} objectClass An instance of a subclass of Parse.Object, or a Parse className string.
	 *
	 * <p>Parse.Query defines a query that is used to fetch Parse.Objects. The
	 * most common use case is finding all objects that match a query through the
	 * <code>find</code> method. For example, this sample code fetches all objects
	 * of class <code>MyClass</code>. It calls a different function depending on
	 * whether the fetch succeeded or not.
	 *
	 * <pre>
	 * var query = new Parse.Query(MyClass);
	 * query.find({
	 *   success: function(results) {
	 *     // results is an array of Parse.Object.
	 *   },
	 *
	 *   error: function(error) {
	 *     // error is an instance of Parse.Error.
	 *   }
	 * });</pre></p>
	 *
	 * <p>A Parse.Query can also be used to retrieve a single object whose id is
	 * known, through the get method. For example, this sample code fetches an
	 * object of class <code>MyClass</code> and id <code>myId</code>. It calls a
	 * different function depending on whether the fetch succeeded or not.
	 *
	 * <pre>
	 * var query = new Parse.Query(MyClass);
	 * query.get(myId, {
	 *   success: function(object) {
	 *     // object is an instance of Parse.Object.
	 *   },
	 *
	 *   error: function(object, error) {
	 *     // error is an instance of Parse.Error.
	 *   }
	 * });</pre></p>
	 *
	 * <p>A Parse.Query can also be used to count the number of objects that match
	 * the query without retrieving all of those objects. For example, this
	 * sample code counts the number of objects of the class <code>MyClass</code>
	 * <pre>
	 * var query = new Parse.Query(MyClass);
	 * query.count({
	 *   success: function(number) {
	 *     // There are number instances of MyClass.
	 *   },
	 *
	 *   error: function(error) {
	 *     // error is an instance of Parse.Error.
	 *   }
	 * });</pre></p>
	 */
	
	var ParseQuery = function () {
	  function ParseQuery(objectClass) {
	    (0, _classCallCheck3.default)(this, ParseQuery);
	
	    if (typeof objectClass === 'string') {
	      if (objectClass === 'User' && _CoreManager2.default.get('PERFORM_USER_REWRITE')) {
	        this.className = '_User';
	      } else {
	        this.className = objectClass;
	      }
	    } else if (objectClass instanceof _ParseObject2.default) {
	      this.className = objectClass.className;
	    } else if (typeof objectClass === 'function') {
	      if (typeof objectClass.className === 'string') {
	        this.className = objectClass.className;
	      } else {
	        var obj = new objectClass();
	        this.className = obj.className;
	      }
	    } else {
	      throw new TypeError('A ParseQuery must be constructed with a ParseObject or class name.');
	    }
	
	    this._where = {};
	    this._include = [];
	    this._limit = -1; // negative limit is not sent in the server request
	    this._skip = 0;
	    this._extraOptions = {};
	  }
	
	  /**
	   * Adds constraint that at least one of the passed in queries matches.
	   * @method _orQuery
	   * @param {Array} queries
	   * @return {Parse.Query} Returns the query, so you can chain this call.
	   */
	
	  (0, _createClass3.default)(ParseQuery, [{
	    key: '_orQuery',
	    value: function (queries) {
	      var queryJSON = queries.map(function (q) {
	        return q.toJSON().where;
	      });
	
	      this._where.$or = queryJSON;
	      return this;
	    }
	
	    /**
	     * Helper for condition queries
	     */
	
	  }, {
	    key: '_addCondition',
	    value: function (key, condition, value) {
	      if (!this._where[key] || typeof this._where[key] === 'string') {
	        this._where[key] = {};
	      }
	      this._where[key][condition] = (0, _encode2.default)(value, false, true);
	      return this;
	    }
	
	    /**
	     * Returns a JSON representation of this query.
	     * @method toJSON
	     * @return {Object} The JSON representation of the query.
	     */
	
	  }, {
	    key: 'toJSON',
	    value: function () {
	      var params = {
	        where: this._where
	      };
	
	      if (this._include.length) {
	        params.include = this._include.join(',');
	      }
	      if (this._select) {
	        params.keys = this._select.join(',');
	      }
	      if (this._limit >= 0) {
	        params.limit = this._limit;
	      }
	      if (this._skip > 0) {
	        params.skip = this._skip;
	      }
	      if (this._order) {
	        params.order = this._order.join(',');
	      }
	      for (var key in this._extraOptions) {
	        params[key] = this._extraOptions[key];
	      }
	
	      return params;
	    }
	
	    /**
	     * Constructs a Parse.Object whose id is already known by fetching data from
	     * the server.  Either options.success or options.error is called when the
	     * find completes.
	     *
	     * @method get
	     * @param {String} objectId The id of the object to be fetched.
	     * @param {Object} options A Backbone-style options object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     *
	     * @return {Parse.Promise} A promise that is resolved with the result when
	     * the query completes.
	     */
	
	  }, {
	    key: 'get',
	    value: function (objectId, options) {
	      this.equalTo('objectId', objectId);
	
	      var firstOptions = {};
	      if (options && options.hasOwnProperty('useMasterKey')) {
	        firstOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options && options.hasOwnProperty('sessionToken')) {
	        firstOptions.sessionToken = options.sessionToken;
	      }
	
	      return this.first(firstOptions).then(function (response) {
	        if (response) {
	          return response;
	        }
	
	        var errorObject = new _ParseError2.default(_ParseError2.default.OBJECT_NOT_FOUND, 'Object not found.');
	        return _ParsePromise2.default.error(errorObject);
	      })._thenRunCallbacks(options, null);
	    }
	
	    /**
	     * Retrieves a list of ParseObjects that satisfy this query.
	     * Either options.success or options.error is called when the find
	     * completes.
	     *
	     * @method find
	     * @param {Object} options A Backbone-style options object. Valid options
	     * are:<ul>
	     *   <li>success: Function to call when the find completes successfully.
	     *   <li>error: Function to call when the find fails.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     *
	     * @return {Parse.Promise} A promise that is resolved with the results when
	     * the query completes.
	     */
	
	  }, {
	    key: 'find',
	    value: function (options) {
	      var _this = this;
	
	      options = options || {};
	
	      var findOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        findOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        findOptions.sessionToken = options.sessionToken;
	      }
	
	      var controller = _CoreManager2.default.getQueryController();
	
	      return controller.find(this.className, this.toJSON(), findOptions).then(function (response) {
	        return response.results.map(function (data) {
	          // In cases of relations, the server may send back a className
	          // on the top level of the payload
	          var override = response.className || _this.className;
	          if (!data.className) {
	            data.className = override;
	          }
	          return _ParseObject2.default.fromJSON(data, true);
	        });
	      })._thenRunCallbacks(options);
	    }
	
	    /**
	     * Counts the number of objects that match this query.
	     * Either options.success or options.error is called when the count
	     * completes.
	     *
	     * @method count
	     * @param {Object} options A Backbone-style options object. Valid options
	     * are:<ul>
	     *   <li>success: Function to call when the count completes successfully.
	     *   <li>error: Function to call when the find fails.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     *
	     * @return {Parse.Promise} A promise that is resolved with the count when
	     * the query completes.
	     */
	
	  }, {
	    key: 'count',
	    value: function (options) {
	      options = options || {};
	
	      var findOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        findOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        findOptions.sessionToken = options.sessionToken;
	      }
	
	      var controller = _CoreManager2.default.getQueryController();
	
	      var params = this.toJSON();
	      params.limit = 0;
	      params.count = 1;
	
	      return controller.find(this.className, params, findOptions).then(function (result) {
	        return result.count;
	      })._thenRunCallbacks(options);
	    }
	
	    /**
	     * Retrieves at most one Parse.Object that satisfies this query.
	     *
	     * Either options.success or options.error is called when it completes.
	     * success is passed the object if there is one. otherwise, undefined.
	     *
	     * @method first
	     * @param {Object} options A Backbone-style options object. Valid options
	     * are:<ul>
	     *   <li>success: Function to call when the find completes successfully.
	     *   <li>error: Function to call when the find fails.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     *
	     * @return {Parse.Promise} A promise that is resolved with the object when
	     * the query completes.
	     */
	
	  }, {
	    key: 'first',
	    value: function (options) {
	      var _this2 = this;
	
	      options = options || {};
	
	      var findOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        findOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        findOptions.sessionToken = options.sessionToken;
	      }
	
	      var controller = _CoreManager2.default.getQueryController();
	
	      var params = this.toJSON();
	      params.limit = 1;
	
	      return controller.find(this.className, params, findOptions).then(function (response) {
	        var objects = response.results;
	        if (!objects[0]) {
	          return undefined;
	        }
	        if (!objects[0].className) {
	          objects[0].className = _this2.className;
	        }
	        return _ParseObject2.default.fromJSON(objects[0], true);
	      })._thenRunCallbacks(options);
	    }
	
	    /**
	     * Iterates over each result of a query, calling a callback for each one. If
	     * the callback returns a promise, the iteration will not continue until
	     * that promise has been fulfilled. If the callback returns a rejected
	     * promise, then iteration will stop with that error. The items are
	     * processed in an unspecified order. The query may not have any sort order,
	     * and may not use limit or skip.
	     * @method each
	     * @param {Function} callback Callback that will be called with each result
	     *     of the query.
	     * @param {Object} options A Backbone-style options object. Valid options
	     * are:<ul>
	     *   <li>success: Function to call when the iteration completes successfully.
	     *   <li>error: Function to call when the iteration fails.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that will be fulfilled once the
	     *     iteration has completed.
	     */
	
	  }, {
	    key: 'each',
	    value: function (callback, options) {
	      options = options || {};
	
	      if (this._order || this._skip || this._limit >= 0) {
	        return _ParsePromise2.default.error('Cannot iterate on a query with sort, skip, or limit.')._thenRunCallbacks(options);
	      }
	
	      new _ParsePromise2.default();
	
	
	      var query = new ParseQuery(this.className);
	      // We can override the batch size from the options.
	      // This is undocumented, but useful for testing.
	      query._limit = options.batchSize || 100;
	      query._include = this._include.map(function (i) {
	        return i;
	      });
	      if (this._select) {
	        query._select = this._select.map(function (s) {
	          return s;
	        });
	      }
	
	      query._where = {};
	      for (var attr in this._where) {
	        var val = this._where[attr];
	        if (Array.isArray(val)) {
	          query._where[attr] = val.map(function (v) {
	            return v;
	          });
	        } else if (val && (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) === 'object') {
	          var conditionMap = {};
	          query._where[attr] = conditionMap;
	          for (var cond in val) {
	            conditionMap[cond] = val[cond];
	          }
	        } else {
	          query._where[attr] = val;
	        }
	      }
	
	      query.ascending('objectId');
	
	      var findOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        findOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        findOptions.sessionToken = options.sessionToken;
	      }
	
	      var finished = false;
	      return _ParsePromise2.default._continueWhile(function () {
	        return !finished;
	      }, function () {
	        return query.find(findOptions).then(function (results) {
	          var callbacksDone = _ParsePromise2.default.as();
	          results.forEach(function (result) {
	            callbacksDone = callbacksDone.then(function () {
	              return callback(result);
	            });
	          });
	
	          return callbacksDone.then(function () {
	            if (results.length >= query._limit) {
	              query.greaterThan('objectId', results[results.length - 1].id);
	            } else {
	              finished = true;
	            }
	          });
	        });
	      })._thenRunCallbacks(options);
	    }
	
	    /** Query Conditions **/
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be equal to the provided value.
	     * @method equalTo
	     * @param {String} key The key to check.
	     * @param value The value that the Parse.Object must contain.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'equalTo',
	    value: function (key, value) {
	      if (typeof value === 'undefined') {
	        return this.doesNotExist(key);
	      }
	
	      this._where[key] = (0, _encode2.default)(value, false, true);
	      return this;
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be not equal to the provided value.
	     * @method notEqualTo
	     * @param {String} key The key to check.
	     * @param value The value that must not be equalled.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'notEqualTo',
	    value: function (key, value) {
	      return this._addCondition(key, '$ne', value);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be less than the provided value.
	     * @method lessThan
	     * @param {String} key The key to check.
	     * @param value The value that provides an upper bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'lessThan',
	    value: function (key, value) {
	      return this._addCondition(key, '$lt', value);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be greater than the provided value.
	     * @method greaterThan
	     * @param {String} key The key to check.
	     * @param value The value that provides an lower bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'greaterThan',
	    value: function (key, value) {
	      return this._addCondition(key, '$gt', value);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be less than or equal to the provided value.
	     * @method lessThanOrEqualTo
	     * @param {String} key The key to check.
	     * @param value The value that provides an upper bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'lessThanOrEqualTo',
	    value: function (key, value) {
	      return this._addCondition(key, '$lte', value);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be greater than or equal to the provided value.
	     * @method greaterThanOrEqualTo
	     * @param {String} key The key to check.
	     * @param value The value that provides an lower bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'greaterThanOrEqualTo',
	    value: function (key, value) {
	      return this._addCondition(key, '$gte', value);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be contained in the provided list of values.
	     * @method containedIn
	     * @param {String} key The key to check.
	     * @param {Array} values The values that will match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'containedIn',
	    value: function (key, value) {
	      return this._addCondition(key, '$in', value);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * not be contained in the provided list of values.
	     * @method notContainedIn
	     * @param {String} key The key to check.
	     * @param {Array} values The values that will not match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'notContainedIn',
	    value: function (key, value) {
	      return this._addCondition(key, '$nin', value);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * contain each one of the provided list of values.
	     * @method containsAll
	     * @param {String} key The key to check.  This key's value must be an array.
	     * @param {Array} values The values that will match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'containsAll',
	    value: function (key, values) {
	      return this._addCondition(key, '$all', values);
	    }
	
	    /**
	     * Adds a constraint for finding objects that contain the given key.
	     * @method exists
	     * @param {String} key The key that should exist.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'exists',
	    value: function (key) {
	      return this._addCondition(key, '$exists', true);
	    }
	
	    /**
	     * Adds a constraint for finding objects that do not contain a given key.
	     * @method doesNotExist
	     * @param {String} key The key that should not exist
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'doesNotExist',
	    value: function (key) {
	      return this._addCondition(key, '$exists', false);
	    }
	
	    /**
	     * Adds a regular expression constraint for finding string values that match
	     * the provided regular expression.
	     * This may be slow for large datasets.
	     * @method matches
	     * @param {String} key The key that the string to match is stored in.
	     * @param {RegExp} regex The regular expression pattern to match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'matches',
	    value: function (key, regex, modifiers) {
	      this._addCondition(key, '$regex', regex);
	      if (!modifiers) {
	        modifiers = '';
	      }
	      if (regex.ignoreCase) {
	        modifiers += 'i';
	      }
	      if (regex.multiline) {
	        modifiers += 'm';
	      }
	      if (modifiers.length) {
	        this._addCondition(key, '$options', modifiers);
	      }
	      return this;
	    }
	
	    /**
	     * Adds a constraint that requires that a key's value matches a Parse.Query
	     * constraint.
	     * @method matchesQuery
	     * @param {String} key The key that the contains the object to match the
	     *                     query.
	     * @param {Parse.Query} query The query that should match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'matchesQuery',
	    value: function (key, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      return this._addCondition(key, '$inQuery', queryJSON);
	    }
	
	    /**
	     * Adds a constraint that requires that a key's value not matches a
	     * Parse.Query constraint.
	     * @method doesNotMatchQuery
	     * @param {String} key The key that the contains the object to match the
	     *                     query.
	     * @param {Parse.Query} query The query that should not match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'doesNotMatchQuery',
	    value: function (key, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      return this._addCondition(key, '$notInQuery', queryJSON);
	    }
	
	    /**
	     * Adds a constraint that requires that a key's value matches a value in
	     * an object returned by a different Parse.Query.
	     * @method matchesKeyInQuery
	     * @param {String} key The key that contains the value that is being
	     *                     matched.
	     * @param {String} queryKey The key in the objects returned by the query to
	     *                          match against.
	     * @param {Parse.Query} query The query to run.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'matchesKeyInQuery',
	    value: function (key, queryKey, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      return this._addCondition(key, '$select', {
	        key: queryKey,
	        query: queryJSON
	      });
	    }
	
	    /**
	     * Adds a constraint that requires that a key's value not match a value in
	     * an object returned by a different Parse.Query.
	     * @method doesNotMatchKeyInQuery
	     * @param {String} key The key that contains the value that is being
	     *                     excluded.
	     * @param {String} queryKey The key in the objects returned by the query to
	     *                          match against.
	     * @param {Parse.Query} query The query to run.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'doesNotMatchKeyInQuery',
	    value: function (key, queryKey, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      return this._addCondition(key, '$dontSelect', {
	        key: queryKey,
	        query: queryJSON
	      });
	    }
	
	    /**
	     * Adds a constraint for finding string values that contain a provided
	     * string.  This may be slow for large datasets.
	     * @method contains
	     * @param {String} key The key that the string to match is stored in.
	     * @param {String} substring The substring that the value must contain.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'contains',
	    value: function (key, value) {
	      if (typeof value !== 'string') {
	        throw new Error('The value being searched for must be a string.');
	      }
	      return this._addCondition(key, '$regex', quote(value));
	    }
	
	    /**
	     * Adds a constraint for finding string values that start with a provided
	     * string.  This query will use the backend index, so it will be fast even
	     * for large datasets.
	     * @method startsWith
	     * @param {String} key The key that the string to match is stored in.
	     * @param {String} prefix The substring that the value must start with.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'startsWith',
	    value: function (key, value) {
	      if (typeof value !== 'string') {
	        throw new Error('The value being searched for must be a string.');
	      }
	      return this._addCondition(key, '$regex', '^' + quote(value));
	    }
	
	    /**
	     * Adds a constraint for finding string values that end with a provided
	     * string.  This will be slow for large datasets.
	     * @method endsWith
	     * @param {String} key The key that the string to match is stored in.
	     * @param {String} suffix The substring that the value must end with.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'endsWith',
	    value: function (key, value) {
	      if (typeof value !== 'string') {
	        throw new Error('The value being searched for must be a string.');
	      }
	      return this._addCondition(key, '$regex', quote(value) + '$');
	    }
	
	    /**
	     * Adds a proximity based constraint for finding objects with key point
	     * values near the point given.
	     * @method near
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'near',
	    value: function (key, point) {
	      if (!(point instanceof _ParseGeoPoint2.default)) {
	        // Try to cast it as a GeoPoint
	        point = new _ParseGeoPoint2.default(point);
	      }
	      return this._addCondition(key, '$nearSphere', point);
	    }
	
	    /**
	     * Adds a proximity based constraint for finding objects with key point
	     * values near the point given and within the maximum distance given.
	     * @method withinRadians
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @param {Number} maxDistance Maximum distance (in radians) of results to
	     *   return.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'withinRadians',
	    value: function (key, point, distance) {
	      this.near(key, point);
	      return this._addCondition(key, '$maxDistance', distance);
	    }
	
	    /**
	     * Adds a proximity based constraint for finding objects with key point
	     * values near the point given and within the maximum distance given.
	     * Radius of earth used is 3958.8 miles.
	     * @method withinMiles
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @param {Number} maxDistance Maximum distance (in miles) of results to
	     *     return.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'withinMiles',
	    value: function (key, point, distance) {
	      return this.withinRadians(key, point, distance / 3958.8);
	    }
	
	    /**
	     * Adds a proximity based constraint for finding objects with key point
	     * values near the point given and within the maximum distance given.
	     * Radius of earth used is 6371.0 kilometers.
	     * @method withinKilometers
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @param {Number} maxDistance Maximum distance (in kilometers) of results
	     *     to return.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'withinKilometers',
	    value: function (key, point, distance) {
	      return this.withinRadians(key, point, distance / 6371.0);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's
	     * coordinates be contained within a given rectangular geographic bounding
	     * box.
	     * @method withinGeoBox
	     * @param {String} key The key to be constrained.
	     * @param {Parse.GeoPoint} southwest
	     *     The lower-left inclusive corner of the box.
	     * @param {Parse.GeoPoint} northeast
	     *     The upper-right inclusive corner of the box.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'withinGeoBox',
	    value: function (key, southwest, northeast) {
	      if (!(southwest instanceof _ParseGeoPoint2.default)) {
	        southwest = new _ParseGeoPoint2.default(southwest);
	      }
	      if (!(northeast instanceof _ParseGeoPoint2.default)) {
	        northeast = new _ParseGeoPoint2.default(northeast);
	      }
	      this._addCondition(key, '$within', { '$box': [southwest, northeast] });
	      return this;
	    }
	
	    /** Query Orderings **/
	
	    /**
	     * Sorts the results in ascending order by the given key.
	     *
	     * @method ascending
	     * @param {(String|String[]|...String} key The key to order by, which is a
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'ascending',
	    value: function () {
	      this._order = [];
	
	      for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
	        keys[_key] = arguments[_key];
	      }
	
	      return this.addAscending.apply(this, keys);
	    }
	
	    /**
	     * Sorts the results in ascending order by the given key,
	     * but can also add secondary sort descriptors without overwriting _order.
	     *
	     * @method addAscending
	     * @param {(String|String[]|...String} key The key to order by, which is a
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'addAscending',
	    value: function () {
	      var _this3 = this;
	
	      if (!this._order) {
	        this._order = [];
	      }
	
	      for (var _len2 = arguments.length, keys = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        keys[_key2] = arguments[_key2];
	      }
	
	      keys.forEach(function (key) {
	        if (Array.isArray(key)) {
	          key = key.join();
	        }
	        _this3._order = _this3._order.concat(key.replace(/\s/g, '').split(','));
	      });
	
	      return this;
	    }
	
	    /**
	     * Sorts the results in descending order by the given key.
	     *
	     * @method descending
	     * @param {(String|String[]|...String} key The key to order by, which is a
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'descending',
	    value: function () {
	      this._order = [];
	
	      for (var _len3 = arguments.length, keys = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        keys[_key3] = arguments[_key3];
	      }
	
	      return this.addDescending.apply(this, keys);
	    }
	
	    /**
	     * Sorts the results in descending order by the given key,
	     * but can also add secondary sort descriptors without overwriting _order.
	     *
	     * @method addDescending
	     * @param {(String|String[]|...String} key The key to order by, which is a
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'addDescending',
	    value: function () {
	      var _this4 = this;
	
	      if (!this._order) {
	        this._order = [];
	      }
	
	      for (var _len4 = arguments.length, keys = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        keys[_key4] = arguments[_key4];
	      }
	
	      keys.forEach(function (key) {
	        if (Array.isArray(key)) {
	          key = key.join();
	        }
	        _this4._order = _this4._order.concat(key.replace(/\s/g, '').split(',').map(function (k) {
	          return '-' + k;
	        }));
	      });
	
	      return this;
	    }
	
	    /** Query Options **/
	
	    /**
	     * Sets the number of results to skip before returning any results.
	     * This is useful for pagination.
	     * Default is to skip zero results.
	     * @method skip
	     * @param {Number} n the number of results to skip.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'skip',
	    value: function (n) {
	      if (typeof n !== 'number' || n < 0) {
	        throw new Error('You can only skip by a positive number');
	      }
	      this._skip = n;
	      return this;
	    }
	
	    /**
	     * Sets the limit of the number of results to return. The default limit is
	     * 100, with a maximum of 1000 results being returned at a time.
	     * @method limit
	     * @param {Number} n the number of results to limit to.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'limit',
	    value: function (n) {
	      if (typeof n !== 'number') {
	        throw new Error('You can only set the limit to a numeric value');
	      }
	      this._limit = n;
	      return this;
	    }
	
	    /**
	     * Includes nested Parse.Objects for the provided key.  You can use dot
	     * notation to specify which fields in the included object are also fetched.
	     * @method include
	     * @param {String} key The name of the key to include.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'include',
	    value: function () {
	      var _this5 = this;
	
	      for (var _len5 = arguments.length, keys = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        keys[_key5] = arguments[_key5];
	      }
	
	      keys.forEach(function (key) {
	        if (Array.isArray(key)) {
	          _this5._include = _this5._include.concat(key);
	        } else {
	          _this5._include.push(key);
	        }
	      });
	      return this;
	    }
	
	    /**
	     * Restricts the fields of the returned Parse.Objects to include only the
	     * provided keys.  If this is called multiple times, then all of the keys
	     * specified in each of the calls will be included.
	     * @method select
	     * @param {Array} keys The names of the keys to include.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	
	  }, {
	    key: 'select',
	    value: function () {
	      var _this6 = this;
	
	      if (!this._select) {
	        this._select = [];
	      }
	
	      for (var _len6 = arguments.length, keys = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        keys[_key6] = arguments[_key6];
	      }
	
	      keys.forEach(function (key) {
	        if (Array.isArray(key)) {
	          _this6._select = _this6._select.concat(key);
	        } else {
	          _this6._select.push(key);
	        }
	      });
	      return this;
	    }
	
	    /**
	     * Subscribe this query to get liveQuery updates
	     * @method subscribe
	     * @return {LiveQuerySubscription} Returns the liveQuerySubscription, it's an event emitter
	     * which can be used to get liveQuery updates.
	     */
	
	  }, {
	    key: 'subscribe',
	    value: function () {
	      var controller = _CoreManager2.default.getLiveQueryController();
	      return controller.subscribe(this);
	    }
	
	    /**
	     * Constructs a Parse.Query that is the OR of the passed in queries.  For
	     * example:
	     * <pre>var compoundQuery = Parse.Query.or(query1, query2, query3);</pre>
	     *
	     * will create a compoundQuery that is an or of the query1, query2, and
	     * query3.
	     * @method or
	     * @param {...Parse.Query} var_args The list of queries to OR.
	     * @static
	     * @return {Parse.Query} The query that is the OR of the passed in queries.
	     */
	
	  }], [{
	    key: 'or',
	    value: function () {
	      var className = null;
	
	      for (var _len7 = arguments.length, queries = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        queries[_key7] = arguments[_key7];
	      }
	
	      queries.forEach(function (q) {
	        if (!className) {
	          className = q.className;
	        }
	
	        if (className !== q.className) {
	          throw new Error('All queries must be for the same class.');
	        }
	      });
	
	      var query = new ParseQuery(className);
	      query._orQuery(queries);
	      return query;
	    }
	  }]);
	  return ParseQuery;
	}();
	
	exports.default = ParseQuery;
	
	var DefaultController = {
	  find: function (className, params, options) {
	    var RESTController = _CoreManager2.default.getRESTController();
	
	    return RESTController.request('GET', 'classes/' + className, params, options);
	  }
	};
	
	_CoreManager2.default.setQueryController(DefaultController);

/***/ },
/* 709 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(660);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports.default = equals;
	
	var _ParseACL = __webpack_require__(659);
	
	var _ParseACL2 = _interopRequireDefault(_ParseACL);
	
	var _ParseFile = __webpack_require__(695);
	
	var _ParseFile2 = _interopRequireDefault(_ParseFile);
	
	var _ParseGeoPoint = __webpack_require__(706);
	
	var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);
	
	var _ParseObject = __webpack_require__(687);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	function equals(a, b) {
	  if ((typeof a === 'undefined' ? 'undefined' : (0, _typeof3.default)(a)) !== (typeof b === 'undefined' ? 'undefined' : (0, _typeof3.default)(b))) {
	    return false;
	  }
	
	  if (!a || (typeof a === 'undefined' ? 'undefined' : (0, _typeof3.default)(a)) !== 'object') {
	    // a is a primitive
	    return a === b;
	  }
	
	  if (Array.isArray(a) || Array.isArray(b)) {
	    if (!Array.isArray(a) || !Array.isArray(b)) {
	      return false;
	    }
	    if (a.length !== b.length) {
	      return false;
	    }
	    for (var i = a.length; i--;) {
	      if (!equals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  if (a instanceof _ParseACL2.default || a instanceof _ParseFile2.default || a instanceof _ParseGeoPoint2.default || a instanceof _ParseObject2.default) {
	    return a.equals(b);
	  }
	
	  if ((0, _keys2.default)(a).length !== (0, _keys2.default)(b).length) {
	    return false;
	  }
	  for (var k in a) {
	    if (!equals(a[k], b[k])) {
	      return false;
	    }
	  }
	  return true;
	}

/***/ },
/* 710 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = escape;
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	var encoded = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '/': '&#x2F;',
	  '\'': '&#x27;',
	  '"': '&quot;'
	};
	
	function escape(str) {
	  return str.replace(/[&<>\/'"]/g, function (char) {
	    return encoded[char];
	  });
	}

/***/ },
/* 711 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = parseDate;
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function parseDate(iso8601) {
	  var regexp = new RegExp('^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})' + 'T' + '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})' + '(.([0-9]+))?' + 'Z$');
	  var match = regexp.exec(iso8601);
	  if (!match) {
	    return null;
	  }
	
	  var year = match[1] || 0;
	  var month = (match[2] || 1) - 1;
	  var day = match[3] || 0;
	  var hour = match[4] || 0;
	  var minute = match[5] || 0;
	  var second = match[6] || 0;
	  var milli = match[8] || 0;
	
	  return new Date(Date.UTC(year, month, day, hour, minute, second, milli));
	}

/***/ },
/* 712 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getState = getState;
	exports.initializeState = initializeState;
	exports.removeState = removeState;
	exports.getServerData = getServerData;
	exports.setServerData = setServerData;
	exports.getPendingOps = getPendingOps;
	exports.setPendingOp = setPendingOp;
	exports.pushPendingState = pushPendingState;
	exports.popPendingState = popPendingState;
	exports.mergeFirstPendingState = mergeFirstPendingState;
	exports.getObjectCache = getObjectCache;
	exports.estimateAttribute = estimateAttribute;
	exports.estimateAttributes = estimateAttributes;
	exports.commitServerChanges = commitServerChanges;
	exports.enqueueTask = enqueueTask;
	exports.clearAllState = clearAllState;
	exports.duplicateState = duplicateState;
	
	var _ObjectStateMutations = __webpack_require__(713);
	
	var ObjectStateMutations = _interopRequireWildcard(_ObjectStateMutations);
	
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj.default = obj;return newObj;
	  }
	}
	
	var objectState = {}; /**
	                       * Copyright (c) 2015-present, Parse, LLC.
	                       * All rights reserved.
	                       *
	                       * This source code is licensed under the BSD-style license found in the
	                       * LICENSE file in the root directory of this source tree. An additional grant
	                       * of patent rights can be found in the PATENTS file in the same directory.
	                       *
	                       * 
	                       */
	
	function getState(obj) {
	  var classData = objectState[obj.className];
	  if (classData) {
	    return classData[obj.id] || null;
	  }
	  return null;
	}
	
	function initializeState(obj, initial) {
	  var state = getState(obj);
	  if (state) {
	    return state;
	  }
	  if (!objectState[obj.className]) {
	    objectState[obj.className] = {};
	  }
	  if (!initial) {
	    initial = ObjectStateMutations.defaultState();
	  }
	  state = objectState[obj.className][obj.id] = initial;
	  return state;
	}
	
	function removeState(obj) {
	  var state = getState(obj);
	  if (state === null) {
	    return null;
	  }
	  delete objectState[obj.className][obj.id];
	  return state;
	}
	
	function getServerData(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.serverData;
	  }
	  return {};
	}
	
	function setServerData(obj, attributes) {
	  var serverData = initializeState(obj).serverData;
	  ObjectStateMutations.setServerData(serverData, attributes);
	}
	
	function getPendingOps(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.pendingOps;
	  }
	  return [{}];
	}
	
	function setPendingOp(obj, attr, op) {
	  var pendingOps = initializeState(obj).pendingOps;
	  ObjectStateMutations.setPendingOp(pendingOps, attr, op);
	}
	
	function pushPendingState(obj) {
	  var pendingOps = initializeState(obj).pendingOps;
	  ObjectStateMutations.pushPendingState(pendingOps);
	}
	
	function popPendingState(obj) {
	  var pendingOps = initializeState(obj).pendingOps;
	  return ObjectStateMutations.popPendingState(pendingOps);
	}
	
	function mergeFirstPendingState(obj) {
	  var pendingOps = getPendingOps(obj);
	  ObjectStateMutations.mergeFirstPendingState(pendingOps);
	}
	
	function getObjectCache(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.objectCache;
	  }
	  return {};
	}
	
	function estimateAttribute(obj, attr) {
	  var serverData = getServerData(obj);
	  var pendingOps = getPendingOps(obj);
	  return ObjectStateMutations.estimateAttribute(serverData, pendingOps, obj.className, obj.id, attr);
	}
	
	function estimateAttributes(obj) {
	  var serverData = getServerData(obj);
	  var pendingOps = getPendingOps(obj);
	  return ObjectStateMutations.estimateAttributes(serverData, pendingOps, obj.className, obj.id);
	}
	
	function commitServerChanges(obj, changes) {
	  var state = initializeState(obj);
	  ObjectStateMutations.commitServerChanges(state.serverData, state.objectCache, changes);
	}
	
	function enqueueTask(obj, task) {
	  var state = initializeState(obj);
	  return state.tasks.enqueue(task);
	}
	
	function clearAllState() {
	  objectState = {};
	}
	
	function duplicateState(source, dest) {
	  dest.id = source.id;
	}

/***/ },
/* 713 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(691);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports.defaultState = defaultState;
	exports.setServerData = setServerData;
	exports.setPendingOp = setPendingOp;
	exports.pushPendingState = pushPendingState;
	exports.popPendingState = popPendingState;
	exports.mergeFirstPendingState = mergeFirstPendingState;
	exports.estimateAttribute = estimateAttribute;
	exports.estimateAttributes = estimateAttributes;
	exports.commitServerChanges = commitServerChanges;
	
	var _encode = __webpack_require__(705);
	
	var _encode2 = _interopRequireDefault(_encode);
	
	var _ParseFile = __webpack_require__(695);
	
	var _ParseFile2 = _interopRequireDefault(_ParseFile);
	
	var _ParseObject = __webpack_require__(687);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _ParseRelation = __webpack_require__(702);
	
	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
	
	var _TaskQueue = __webpack_require__(714);
	
	var _TaskQueue2 = _interopRequireDefault(_TaskQueue);
	
	var _ParseOp = __webpack_require__(703);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function defaultState() {
	  return {
	    serverData: {},
	    pendingOps: [{}],
	    objectCache: {},
	    tasks: new _TaskQueue2.default(),
	    existed: false
	  };
	} /**
	   * Copyright (c) 2015-present, Parse, LLC.
	   * All rights reserved.
	   *
	   * This source code is licensed under the BSD-style license found in the
	   * LICENSE file in the root directory of this source tree. An additional grant
	   * of patent rights can be found in the PATENTS file in the same directory.
	   *
	   * 
	   */
	
	function setServerData(serverData, attributes) {
	  for (var _attr in attributes) {
	    if (typeof attributes[_attr] !== 'undefined') {
	      serverData[_attr] = attributes[_attr];
	    } else {
	      delete serverData[_attr];
	    }
	  }
	}
	
	function setPendingOp(pendingOps, attr, op) {
	  var last = pendingOps.length - 1;
	  if (op) {
	    pendingOps[last][attr] = op;
	  } else {
	    delete pendingOps[last][attr];
	  }
	}
	
	function pushPendingState(pendingOps) {
	  pendingOps.push({});
	}
	
	function popPendingState(pendingOps) {
	  var first = pendingOps.shift();
	  if (!pendingOps.length) {
	    pendingOps[0] = {};
	  }
	  return first;
	}
	
	function mergeFirstPendingState(pendingOps) {
	  var first = popPendingState(pendingOps);
	  var next = pendingOps[0];
	  for (var _attr2 in first) {
	    if (next[_attr2] && first[_attr2]) {
	      var merged = next[_attr2].mergeWith(first[_attr2]);
	      if (merged) {
	        next[_attr2] = merged;
	      }
	    } else {
	      next[_attr2] = first[_attr2];
	    }
	  }
	}
	
	function estimateAttribute(serverData, pendingOps, className, id, attr) {
	  var value = serverData[attr];
	  for (var i = 0; i < pendingOps.length; i++) {
	    if (pendingOps[i][attr]) {
	      if (pendingOps[i][attr] instanceof _ParseOp.RelationOp) {
	        if (id) {
	          value = pendingOps[i][attr].applyTo(value, { className: className, id: id }, attr);
	        }
	      } else {
	        value = pendingOps[i][attr].applyTo(value);
	      }
	    }
	  }
	  return value;
	}
	
	function estimateAttributes(serverData, pendingOps, className, id) {
	  var data = {};
	  var attr = void 0;
	  for (attr in serverData) {
	    data[attr] = serverData[attr];
	  }
	  for (var i = 0; i < pendingOps.length; i++) {
	    for (attr in pendingOps[i]) {
	      if (pendingOps[i][attr] instanceof _ParseOp.RelationOp) {
	        if (id) {
	          data[attr] = pendingOps[i][attr].applyTo(data[attr], { className: className, id: id }, attr);
	        }
	      } else {
	        data[attr] = pendingOps[i][attr].applyTo(data[attr]);
	      }
	    }
	  }
	  return data;
	}
	
	function commitServerChanges(serverData, objectCache, changes) {
	  for (var _attr3 in changes) {
	    var val = changes[_attr3];
	    serverData[_attr3] = val;
	    if (val && (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) === 'object' && !(val instanceof _ParseObject2.default) && !(val instanceof _ParseFile2.default) && !(val instanceof _ParseRelation2.default)) {
	      var json = (0, _encode2.default)(val, false, true);
	      objectCache[_attr3] = (0, _stringify2.default)(json);
	    }
	  }
	}

/***/ },
/* 714 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(665);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var TaskQueue = function () {
	  function TaskQueue() {
	    (0, _classCallCheck3.default)(this, TaskQueue);
	
	    this.queue = [];
	  }
	
	  (0, _createClass3.default)(TaskQueue, [{
	    key: 'enqueue',
	    value: function (task) {
	      var _this = this;
	
	      var taskComplete = new _ParsePromise2.default();
	      this.queue.push({
	        task: task,
	        _completion: taskComplete
	      });
	      if (this.queue.length === 1) {
	        task().then(function () {
	          _this._dequeue();
	          taskComplete.resolve();
	        }, function (error) {
	          _this._dequeue();
	          taskComplete.reject(error);
	        });
	      }
	      return taskComplete;
	    }
	  }, {
	    key: '_dequeue',
	    value: function () {
	      var _this2 = this;
	
	      this.queue.shift();
	      if (this.queue.length) {
	        var next = this.queue[0];
	        next.task().then(function () {
	          _this2._dequeue();
	          next._completion.resolve();
	        }, function (error) {
	          _this2._dequeue();
	          next._completion.reject(error);
	        });
	      }
	    }
	  }]);
	  return TaskQueue;
	}(); /**
	      * Copyright (c) 2015-present, Parse, LLC.
	      * All rights reserved.
	      *
	      * This source code is licensed under the BSD-style license found in the
	      * LICENSE file in the root directory of this source tree. An additional grant
	      * of patent rights can be found in the PATENTS file in the same directory.
	      *
	      * 
	      */
	
	module.exports = TaskQueue;

/***/ },
/* 715 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _weakMap = __webpack_require__(716);
	
	var _weakMap2 = _interopRequireDefault(_weakMap);
	
	exports.getState = getState;
	exports.initializeState = initializeState;
	exports.removeState = removeState;
	exports.getServerData = getServerData;
	exports.setServerData = setServerData;
	exports.getPendingOps = getPendingOps;
	exports.setPendingOp = setPendingOp;
	exports.pushPendingState = pushPendingState;
	exports.popPendingState = popPendingState;
	exports.mergeFirstPendingState = mergeFirstPendingState;
	exports.getObjectCache = getObjectCache;
	exports.estimateAttribute = estimateAttribute;
	exports.estimateAttributes = estimateAttributes;
	exports.commitServerChanges = commitServerChanges;
	exports.enqueueTask = enqueueTask;
	exports.duplicateState = duplicateState;
	exports.clearAllState = clearAllState;
	
	var _ObjectStateMutations = __webpack_require__(713);
	
	var ObjectStateMutations = _interopRequireWildcard(_ObjectStateMutations);
	
	var _TaskQueue = __webpack_require__(714);
	
	var _TaskQueue2 = _interopRequireDefault(_TaskQueue);
	
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj.default = obj;return newObj;
	  }
	}
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	var objectState = new _weakMap2.default();
	
	function getState(obj) {
	  var classData = objectState.get(obj);
	  return classData || null;
	}
	
	function initializeState(obj, initial) {
	  var state = getState(obj);
	  if (state) {
	    return state;
	  }
	  if (!initial) {
	    initial = {
	      serverData: {},
	      pendingOps: [{}],
	      objectCache: {},
	      tasks: new _TaskQueue2.default(),
	      existed: false
	    };
	  }
	  state = initial;
	  objectState.set(obj, state);
	  return state;
	}
	
	function removeState(obj) {
	  var state = getState(obj);
	  if (state === null) {
	    return null;
	  }
	  objectState.delete(obj);
	  return state;
	}
	
	function getServerData(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.serverData;
	  }
	  return {};
	}
	
	function setServerData(obj, attributes) {
	  var serverData = initializeState(obj).serverData;
	  ObjectStateMutations.setServerData(serverData, attributes);
	}
	
	function getPendingOps(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.pendingOps;
	  }
	  return [{}];
	}
	
	function setPendingOp(obj, attr, op) {
	  var pendingOps = initializeState(obj).pendingOps;
	  ObjectStateMutations.setPendingOp(pendingOps, attr, op);
	}
	
	function pushPendingState(obj) {
	  var pendingOps = initializeState(obj).pendingOps;
	  ObjectStateMutations.pushPendingState(pendingOps);
	}
	
	function popPendingState(obj) {
	  var pendingOps = initializeState(obj).pendingOps;
	  return ObjectStateMutations.popPendingState(pendingOps);
	}
	
	function mergeFirstPendingState(obj) {
	  var pendingOps = getPendingOps(obj);
	  ObjectStateMutations.mergeFirstPendingState(pendingOps);
	}
	
	function getObjectCache(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.objectCache;
	  }
	  return {};
	}
	
	function estimateAttribute(obj, attr) {
	  var serverData = getServerData(obj);
	  var pendingOps = getPendingOps(obj);
	  return ObjectStateMutations.estimateAttribute(serverData, pendingOps, obj.className, obj.id, attr);
	}
	
	function estimateAttributes(obj) {
	  var serverData = getServerData(obj);
	  var pendingOps = getPendingOps(obj);
	  return ObjectStateMutations.estimateAttributes(serverData, pendingOps, obj.className, obj.id);
	}
	
	function commitServerChanges(obj, changes) {
	  var state = initializeState(obj);
	  ObjectStateMutations.commitServerChanges(state.serverData, state.objectCache, changes);
	}
	
	function enqueueTask(obj, task) {
	  var state = initializeState(obj);
	  return state.tasks.enqueue(task);
	}
	
	function duplicateState(source, dest) {
	  var oldState = initializeState(source);
	  var newState = initializeState(dest);
	  for (var key in oldState.serverData) {
	    newState.serverData[key] = oldState.serverData[key];
	  }
	  for (var index = 0; index < oldState.pendingOps.length; index++) {
	    for (var _key in oldState.pendingOps[index]) {
	      newState.pendingOps[index][_key] = oldState.pendingOps[index][_key];
	    }
	  }
	  for (var _key2 in oldState.objectCache) {
	    newState.objectCache[_key2] = oldState.objectCache[_key2];
	  }
	  newState.existed = oldState.existed;
	}
	
	function clearAllState() {
	  objectState = new _weakMap2.default();
	}

/***/ },
/* 716 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(717), __esModule: true };

/***/ },
/* 717 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(656);
	__webpack_require__(638);
	__webpack_require__(718);
	module.exports = __webpack_require__(602).WeakMap;

/***/ },
/* 718 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(719)(0)
	  , redefine     = __webpack_require__(615)
	  , meta         = __webpack_require__(646)
	  , assign       = __webpack_require__(722)
	  , weak         = __webpack_require__(723)
	  , isObject     = __webpack_require__(608)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(729)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 719 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(603)
	  , IObject  = __webpack_require__(624)
	  , toObject = __webpack_require__(637)
	  , toLength = __webpack_require__(627)
	  , asc      = __webpack_require__(720);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 720 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(721);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 721 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(608)
	  , isArray  = __webpack_require__(652)
	  , SPECIES  = __webpack_require__(635)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 722 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(621)
	  , gOPS     = __webpack_require__(650)
	  , pIE      = __webpack_require__(651)
	  , toObject = __webpack_require__(637)
	  , IObject  = __webpack_require__(624)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(611)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 723 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(724)
	  , getWeak           = __webpack_require__(646).getWeak
	  , anObject          = __webpack_require__(607)
	  , isObject          = __webpack_require__(608)
	  , anInstance        = __webpack_require__(725)
	  , forOf             = __webpack_require__(726)
	  , createArrayMethod = __webpack_require__(719)
	  , $has              = __webpack_require__(616)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 724 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(605);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 725 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 726 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(603)
	  , call        = __webpack_require__(727)
	  , isArrayIter = __webpack_require__(728)
	  , anObject    = __webpack_require__(607)
	  , toLength    = __webpack_require__(627)
	  , getIterFn   = __webpack_require__(700)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 727 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(607);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 728 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(617)
	  , ITERATOR   = __webpack_require__(635)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 729 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(601)
	  , $export        = __webpack_require__(600)
	  , meta           = __webpack_require__(646)
	  , fails          = __webpack_require__(611)
	  , hide           = __webpack_require__(605)
	  , redefineAll    = __webpack_require__(724)
	  , forOf          = __webpack_require__(726)
	  , anInstance     = __webpack_require__(725)
	  , isObject       = __webpack_require__(608)
	  , setToStringTag = __webpack_require__(634)
	  , dP             = __webpack_require__(606).f
	  , each           = __webpack_require__(719)(0)
	  , DESCRIPTORS    = __webpack_require__(610);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 730 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports.default = unsavedChildren;
	
	var _ParseFile = __webpack_require__(695);
	
	var _ParseFile2 = _interopRequireDefault(_ParseFile);
	
	var _ParseObject = __webpack_require__(687);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParseRelation = __webpack_require__(702);
	
	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Return an array of unsaved children, which are either Parse Objects or Files.
	 * If it encounters any dirty Objects without Ids, it will throw an exception.
	 */
	function unsavedChildren(obj, allowDeepUnsaved) {
	  var encountered = {
	    objects: {},
	    files: []
	  };
	  var identifier = obj.className + ':' + obj._getId();
	  encountered.objects[identifier] = obj.dirty() ? obj : true;
	  var attributes = obj.attributes;
	  for (var attr in attributes) {
	    if ((0, _typeof3.default)(attributes[attr]) === 'object') {
	      traverse(attributes[attr], encountered, false, !!allowDeepUnsaved);
	    }
	  }
	  var unsaved = [];
	  for (var id in encountered.objects) {
	    if (id !== identifier && encountered.objects[id] !== true) {
	      unsaved.push(encountered.objects[id]);
	    }
	  }
	  return unsaved.concat(encountered.files);
	} /**
	   * Copyright (c) 2015-present, Parse, LLC.
	   * All rights reserved.
	   *
	   * This source code is licensed under the BSD-style license found in the
	   * LICENSE file in the root directory of this source tree. An additional grant
	   * of patent rights can be found in the PATENTS file in the same directory.
	   *
	   * 
	   */
	
	function traverse(obj, encountered, shouldThrow, allowDeepUnsaved) {
	  if (obj instanceof _ParseObject2.default) {
	    if (!obj.id && shouldThrow) {
	      throw new Error('Cannot create a pointer to an unsaved Object.');
	    }
	    var identifier = obj.className + ':' + obj._getId();
	    if (!encountered.objects[identifier]) {
	      encountered.objects[identifier] = obj.dirty() ? obj : true;
	      var attributes = obj.attributes;
	      for (var attr in attributes) {
	        if ((0, _typeof3.default)(attributes[attr]) === 'object') {
	          traverse(attributes[attr], encountered, !allowDeepUnsaved, allowDeepUnsaved);
	        }
	      }
	    }
	    return;
	  }
	  if (obj instanceof _ParseFile2.default) {
	    if (!obj.url() && encountered.files.indexOf(obj) < 0) {
	      encountered.files.push(obj);
	    }
	    return;
	  }
	  if (obj instanceof _ParseRelation2.default) {
	    return;
	  }
	  if (Array.isArray(obj)) {
	    obj.forEach(function (el) {
	      if ((typeof el === 'undefined' ? 'undefined' : (0, _typeof3.default)(el)) === 'object') {
	        traverse(el, encountered, shouldThrow, allowDeepUnsaved);
	      }
	    });
	  }
	  for (var k in obj) {
	    if ((0, _typeof3.default)(obj[k]) === 'object') {
	      traverse(obj[k], encountered, shouldThrow, allowDeepUnsaved);
	    }
	  }
	}

/***/ },
/* 731 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(691);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _defineProperty = __webpack_require__(666);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _getPrototypeOf = __webpack_require__(670);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(665);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(673);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get2 = __webpack_require__(674);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _inherits2 = __webpack_require__(678);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _CoreManager = __webpack_require__(693);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _isRevocableSession = __webpack_require__(732);
	
	var _isRevocableSession2 = _interopRequireDefault(_isRevocableSession);
	
	var _ParseError = __webpack_require__(686);
	
	var _ParseError2 = _interopRequireDefault(_ParseError);
	
	var _ParseObject2 = __webpack_require__(687);
	
	var _ParseObject3 = _interopRequireDefault(_ParseObject2);
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _ParseSession = __webpack_require__(733);
	
	var _ParseSession2 = _interopRequireDefault(_ParseSession);
	
	var _Storage = __webpack_require__(734);
	
	var _Storage2 = _interopRequireDefault(_Storage);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var CURRENT_USER_KEY = 'currentUser'; /**
	                                       * Copyright (c) 2015-present, Parse, LLC.
	                                       * All rights reserved.
	                                       *
	                                       * This source code is licensed under the BSD-style license found in the
	                                       * LICENSE file in the root directory of this source tree. An additional grant
	                                       * of patent rights can be found in the PATENTS file in the same directory.
	                                       *
	                                       * 
	                                       */
	
	var canUseCurrentUser = !_CoreManager2.default.get('IS_NODE');
	var currentUserCacheMatchesDisk = false;
	var currentUserCache = null;
	
	var authProviders = {};
	
	/**
	 * @class Parse.User
	 * @constructor
	 *
	 * <p>A Parse.User object is a local representation of a user persisted to the
	 * Parse cloud. This class is a subclass of a Parse.Object, and retains the
	 * same functionality of a Parse.Object, but also extends it with various
	 * user specific methods, like authentication, signing up, and validation of
	 * uniqueness.</p>
	 */
	
	var ParseUser = function (_ParseObject) {
	  (0, _inherits3.default)(ParseUser, _ParseObject);
	
	  function ParseUser(attributes) {
	    (0, _classCallCheck3.default)(this, ParseUser);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (ParseUser.__proto__ || (0, _getPrototypeOf2.default)(ParseUser)).call(this, '_User'));
	
	    if (attributes && (typeof attributes === 'undefined' ? 'undefined' : (0, _typeof3.default)(attributes)) === 'object') {
	      if (!_this.set(attributes || {})) {
	        throw new Error('Can\'t create an invalid Parse User');
	      }
	    }
	    return _this;
	  }
	
	  /**
	   * Request a revocable session token to replace the older style of token.
	   * @method _upgradeToRevocableSession
	   * @param {Object} options A Backbone-style options object.
	   * @return {Parse.Promise} A promise that is resolved when the replacement
	   *   token has been fetched.
	   */
	
	  (0, _createClass3.default)(ParseUser, [{
	    key: '_upgradeToRevocableSession',
	    value: function (options) {
	      options = options || {};
	
	      var upgradeOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        upgradeOptions.useMasterKey = options.useMasterKey;
	      }
	
	      var controller = _CoreManager2.default.getUserController();
	      return controller.upgradeToRevocableSession(this, upgradeOptions)._thenRunCallbacks(options);
	    }
	
	    /**
	     * Unlike in the Android/iOS SDKs, logInWith is unnecessary, since you can
	     * call linkWith on the user (even if it doesn't exist yet on the server).
	     * @method _linkWith
	     */
	
	  }, {
	    key: '_linkWith',
	    value: function (provider, options) {
	      var _this2 = this;
	
	      var authType;
	      if (typeof provider === 'string') {
	        authType = provider;
	        provider = authProviders[provider];
	      } else {
	        authType = provider.getAuthType();
	      }
	      if (options && options.hasOwnProperty('authData')) {
	        var authData = this.get('authData') || {};
	        if ((typeof authData === 'undefined' ? 'undefined' : (0, _typeof3.default)(authData)) !== 'object') {
	          throw new Error('Invalid type: authData field should be an object');
	        }
	        authData[authType] = options.authData;
	
	        var controller = _CoreManager2.default.getUserController();
	        return controller.linkWith(this, authData)._thenRunCallbacks(options, this);
	      } else {
	        var promise = new _ParsePromise2.default();
	        provider.authenticate({
	          success: function (provider, result) {
	            var opts = {};
	            opts.authData = result;
	            if (options.success) {
	              opts.success = options.success;
	            }
	            if (options.error) {
	              opts.error = options.error;
	            }
	            _this2._linkWith(provider, opts).then(function () {
	              promise.resolve(_this2);
	            }, function (error) {
	              promise.reject(error);
	            });
	          },
	          error: function (provider, _error) {
	            if (typeof options.error === 'function') {
	              options.error(_this2, _error);
	            }
	            promise.reject(_error);
	          }
	        });
	        return promise;
	      }
	    }
	
	    /**
	     * Synchronizes auth data for a provider (e.g. puts the access token in the
	     * right place to be used by the Facebook SDK).
	     * @method _synchronizeAuthData
	     */
	
	  }, {
	    key: '_synchronizeAuthData',
	    value: function (provider) {
	      if (!this.isCurrent() || !provider) {
	        return;
	      }
	      var authType;
	      if (typeof provider === 'string') {
	        authType = provider;
	        provider = authProviders[authType];
	      } else {
	        authType = provider.getAuthType();
	      }
	      var authData = this.get('authData');
	      if (!provider || !authData || (typeof authData === 'undefined' ? 'undefined' : (0, _typeof3.default)(authData)) !== 'object') {
	        return;
	      }
	      var success = provider.restoreAuthentication(authData[authType]);
	      if (!success) {
	        this._unlinkFrom(provider);
	      }
	    }
	
	    /**
	     * Synchronizes authData for all providers.
	     * @method _synchronizeAllAuthData
	     */
	
	  }, {
	    key: '_synchronizeAllAuthData',
	    value: function () {
	      var authData = this.get('authData');
	      if ((typeof authData === 'undefined' ? 'undefined' : (0, _typeof3.default)(authData)) !== 'object') {
	        return;
	      }
	
	      for (var key in authData) {
	        this._synchronizeAuthData(key);
	      }
	    }
	
	    /**
	     * Removes null values from authData (which exist temporarily for
	     * unlinking)
	     * @method _cleanupAuthData
	     */
	
	  }, {
	    key: '_cleanupAuthData',
	    value: function () {
	      if (!this.isCurrent()) {
	        return;
	      }
	      var authData = this.get('authData');
	      if ((typeof authData === 'undefined' ? 'undefined' : (0, _typeof3.default)(authData)) !== 'object') {
	        return;
	      }
	
	      for (var key in authData) {
	        if (!authData[key]) {
	          delete authData[key];
	        }
	      }
	    }
	
	    /**
	     * Unlinks a user from a service.
	     * @method _unlinkFrom
	     */
	
	  }, {
	    key: '_unlinkFrom',
	    value: function (provider, options) {
	      var _this3 = this;
	
	      if (typeof provider === 'string') {
	        provider = authProviders[provider];
	      } else {
	        provider.getAuthType();
	      }
	      return this._linkWith(provider, { authData: null }).then(function () {
	        _this3._synchronizeAuthData(provider);
	        return _ParsePromise2.default.as(_this3);
	      })._thenRunCallbacks(options);
	    }
	
	    /**
	     * Checks whether a user is linked to a service.
	     * @method _isLinked
	     */
	
	  }, {
	    key: '_isLinked',
	    value: function (provider) {
	      var authType;
	      if (typeof provider === 'string') {
	        authType = provider;
	      } else {
	        authType = provider.getAuthType();
	      }
	      var authData = this.get('authData') || {};
	      if ((typeof authData === 'undefined' ? 'undefined' : (0, _typeof3.default)(authData)) !== 'object') {
	        return false;
	      }
	      return !!authData[authType];
	    }
	
	    /**
	     * Deauthenticates all providers.
	     * @method _logOutWithAll
	     */
	
	  }, {
	    key: '_logOutWithAll',
	    value: function () {
	      var authData = this.get('authData');
	      if ((typeof authData === 'undefined' ? 'undefined' : (0, _typeof3.default)(authData)) !== 'object') {
	        return;
	      }
	
	      for (var key in authData) {
	        this._logOutWith(key);
	      }
	    }
	
	    /**
	     * Deauthenticates a single provider (e.g. removing access tokens from the
	     * Facebook SDK).
	     * @method _logOutWith
	     */
	
	  }, {
	    key: '_logOutWith',
	    value: function (provider) {
	      if (!this.isCurrent()) {
	        return;
	      }
	      if (typeof provider === 'string') {
	        provider = authProviders[provider];
	      }
	      if (provider && provider.deauthenticate) {
	        provider.deauthenticate();
	      }
	    }
	
	    /**
	     * Class instance method used to maintain specific keys when a fetch occurs.
	     * Used to ensure that the session token is not lost.
	     */
	
	  }, {
	    key: '_preserveFieldsOnFetch',
	    value: function () {
	      return {
	        sessionToken: this.get('sessionToken')
	      };
	    }
	
	    /**
	     * Returns true if <code>current</code> would return this user.
	     * @method isCurrent
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'isCurrent',
	    value: function () {
	      var current = ParseUser.current();
	      return !!current && current.id === this.id;
	    }
	
	    /**
	     * Returns get("username").
	     * @method getUsername
	     * @return {String}
	     */
	
	  }, {
	    key: 'getUsername',
	    value: function () {
	      var username = this.get('username');
	      if (username == null || typeof username === 'string') {
	        return username;
	      }
	      return '';
	    }
	
	    /**
	     * Calls set("username", username, options) and returns the result.
	     * @method setUsername
	     * @param {String} username
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'setUsername',
	    value: function (username) {
	      // Strip anonymity, even we do not support anonymous user in js SDK, we may
	      // encounter anonymous user created by android/iOS in cloud code.
	      var authData = this.get('authData');
	      if (authData && (typeof authData === 'undefined' ? 'undefined' : (0, _typeof3.default)(authData)) === 'object' && authData.hasOwnProperty('anonymous')) {
	        // We need to set anonymous to null instead of deleting it in order to remove it from Parse.
	        authData.anonymous = null;
	      }
	      this.set('username', username);
	    }
	
	    /**
	     * Calls set("password", password, options) and returns the result.
	     * @method setPassword
	     * @param {String} password
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'setPassword',
	    value: function (password) {
	      this.set('password', password);
	    }
	
	    /**
	     * Returns get("email").
	     * @method getEmail
	     * @return {String}
	     */
	
	  }, {
	    key: 'getEmail',
	    value: function () {
	      var email = this.get('email');
	      if (email == null || typeof email === 'string') {
	        return email;
	      }
	      return '';
	    }
	
	    /**
	     * Calls set("email", email, options) and returns the result.
	     * @method setEmail
	     * @param {String} email
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'setEmail',
	    value: function (email) {
	      this.set('email', email);
	    }
	
	    /**
	     * Returns the session token for this user, if the user has been logged in,
	     * or if it is the result of a query with the master key. Otherwise, returns
	     * undefined.
	     * @method getSessionToken
	     * @return {String} the session token, or undefined
	     */
	
	  }, {
	    key: 'getSessionToken',
	    value: function () {
	      var token = this.get('sessionToken');
	      if (token == null || typeof token === 'string') {
	        return token;
	      }
	      return '';
	    }
	
	    /**
	     * Checks whether this user is the current user and has been authenticated.
	     * @method authenticated
	     * @return (Boolean) whether this user is the current user and is logged in.
	     */
	
	  }, {
	    key: 'authenticated',
	    value: function () {
	      var current = ParseUser.current();
	      return !!this.get('sessionToken') && !!current && current.id === this.id;
	    }
	
	    /**
	     * Signs up a new user. You should call this instead of save for
	     * new Parse.Users. This will create a new Parse.User on the server, and
	     * also persist the session on disk so that you can access the user using
	     * <code>current</code>.
	     *
	     * <p>A username and password must be set before calling signUp.</p>
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method signUp
	     * @param {Object} attrs Extra fields to set on the new user, or null.
	     * @param {Object} options A Backbone-style options object.
	     * @return {Parse.Promise} A promise that is fulfilled when the signup
	     *     finishes.
	     */
	
	  }, {
	    key: 'signUp',
	    value: function (attrs, options) {
	      options = options || {};
	
	      var signupOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        signupOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('installationId')) {
	        signupOptions.installationId = options.installationId;
	      }
	
	      var controller = _CoreManager2.default.getUserController();
	      return controller.signUp(this, attrs, signupOptions)._thenRunCallbacks(options, this);
	    }
	
	    /**
	     * Logs in a Parse.User. On success, this saves the session to disk,
	     * so you can retrieve the currently logged in user using
	     * <code>current</code>.
	     *
	     * <p>A username and password must be set before calling logIn.</p>
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method logIn
	     * @param {Object} options A Backbone-style options object.
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the login is complete.
	     */
	
	  }, {
	    key: 'logIn',
	    value: function (options) {
	      options = options || {};
	
	      var loginOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        loginOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('installationId')) {
	        loginOptions.installationId = options.installationId;
	      }
	
	      var controller = _CoreManager2.default.getUserController();
	      return controller.logIn(this, loginOptions)._thenRunCallbacks(options, this);
	    }
	
	    /**
	     * Wrap the default save behavior with functionality to save to local
	     * storage if this is current user.
	     */
	
	  }, {
	    key: 'save',
	    value: function () {
	      var _this4 = this;
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return (0, _get3.default)(ParseUser.prototype.__proto__ || (0, _getPrototypeOf2.default)(ParseUser.prototype), 'save', this).apply(this, args).then(function () {
	        if (_this4.isCurrent()) {
	          return _CoreManager2.default.getUserController().updateUserOnDisk(_this4);
	        }
	        return _this4;
	      });
	    }
	
	    /**
	     * Wrap the default destroy behavior with functionality that logs out
	     * the current user when it is destroyed
	     */
	
	  }, {
	    key: 'destroy',
	    value: function () {
	      var _this5 = this;
	
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      return (0, _get3.default)(ParseUser.prototype.__proto__ || (0, _getPrototypeOf2.default)(ParseUser.prototype), 'destroy', this).apply(this, args).then(function () {
	        if (_this5.isCurrent()) {
	          return _CoreManager2.default.getUserController().removeUserFromDisk();
	        }
	        return _this5;
	      });
	    }
	
	    /**
	     * Wrap the default fetch behavior with functionality to save to local
	     * storage if this is current user.
	     */
	
	  }, {
	    key: 'fetch',
	    value: function () {
	      var _this6 = this;
	
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }
	
	      return (0, _get3.default)(ParseUser.prototype.__proto__ || (0, _getPrototypeOf2.default)(ParseUser.prototype), 'fetch', this).apply(this, args).then(function () {
	        if (_this6.isCurrent()) {
	          return _CoreManager2.default.getUserController().updateUserOnDisk(_this6);
	        }
	        return _this6;
	      });
	    }
	  }], [{
	    key: 'readOnlyAttributes',
	    value: function () {
	      return ['sessionToken'];
	    }
	
	    /**
	     * Adds functionality to the existing Parse.User class
	     * @method extend
	     * @param {Object} protoProps A set of properties to add to the prototype
	     * @param {Object} classProps A set of static properties to add to the class
	     * @static
	     * @return {Class} The newly extended Parse.User class
	     */
	
	  }, {
	    key: 'extend',
	    value: function (protoProps, classProps) {
	      if (protoProps) {
	        for (var prop in protoProps) {
	          if (prop !== 'className') {
	            (0, _defineProperty2.default)(ParseUser.prototype, prop, {
	              value: protoProps[prop],
	              enumerable: false,
	              writable: true,
	              configurable: true
	            });
	          }
	        }
	      }
	
	      if (classProps) {
	        for (var prop in classProps) {
	          if (prop !== 'className') {
	            (0, _defineProperty2.default)(ParseUser, prop, {
	              value: classProps[prop],
	              enumerable: false,
	              writable: true,
	              configurable: true
	            });
	          }
	        }
	      }
	
	      return ParseUser;
	    }
	
	    /**
	     * Retrieves the currently logged in ParseUser with a valid session,
	     * either from memory or localStorage, if necessary.
	     * @method current
	     * @static
	     * @return {Parse.Object} The currently logged in Parse.User.
	     */
	
	  }, {
	    key: 'current',
	    value: function () {
	      if (!canUseCurrentUser) {
	        return null;
	      }
	      var controller = _CoreManager2.default.getUserController();
	      return controller.currentUser();
	    }
	
	    /**
	     * Retrieves the currently logged in ParseUser from asynchronous Storage.
	     * @method currentAsync
	     * @static
	     * @return {Parse.Promise} A Promise that is resolved with the currently
	     *   logged in Parse User
	     */
	
	  }, {
	    key: 'currentAsync',
	    value: function () {
	      if (!canUseCurrentUser) {
	        return _ParsePromise2.default.as(null);
	      }
	      var controller = _CoreManager2.default.getUserController();
	      return controller.currentUserAsync();
	    }
	
	    /**
	     * Signs up a new user with a username (or email) and password.
	     * This will create a new Parse.User on the server, and also persist the
	     * session in localStorage so that you can access the user using
	     * {@link #current}.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method signUp
	     * @param {String} username The username (or email) to sign up with.
	     * @param {String} password The password to sign up with.
	     * @param {Object} attrs Extra fields to set on the new user.
	     * @param {Object} options A Backbone-style options object.
	     * @static
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the signup completes.
	     */
	
	  }, {
	    key: 'signUp',
	    value: function (username, password, attrs, options) {
	      attrs = attrs || {};
	      attrs.username = username;
	      attrs.password = password;
	      var user = new ParseUser(attrs);
	      return user.signUp({}, options);
	    }
	
	    /**
	     * Logs in a user with a username (or email) and password. On success, this
	     * saves the session to disk, so you can retrieve the currently logged in
	     * user using <code>current</code>.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method logIn
	     * @param {String} username The username (or email) to log in with.
	     * @param {String} password The password to log in with.
	     * @param {Object} options A Backbone-style options object.
	     * @static
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the login completes.
	     */
	
	  }, {
	    key: 'logIn',
	    value: function (username, password, options) {
	      if (typeof username !== 'string') {
	        return _ParsePromise2.default.error(new _ParseError2.default(_ParseError2.default.OTHER_CAUSE, 'Username must be a string.'));
	      } else if (typeof password !== 'string') {
	        return _ParsePromise2.default.error(new _ParseError2.default(_ParseError2.default.OTHER_CAUSE, 'Password must be a string.'));
	      }
	      var user = new ParseUser();
	      user._finishFetch({ username: username, password: password });
	      return user.logIn(options);
	    }
	
	    /**
	     * Logs in a user with a session token. On success, this saves the session
	     * to disk, so you can retrieve the currently logged in user using
	     * <code>current</code>.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method become
	     * @param {String} sessionToken The sessionToken to log in with.
	     * @param {Object} options A Backbone-style options object.
	     * @static
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the login completes.
	     */
	
	  }, {
	    key: 'become',
	    value: function (sessionToken, options) {
	      if (!canUseCurrentUser) {
	        throw new Error('It is not memory-safe to become a user in a server environment');
	      }
	      options = options || {};
	
	      var becomeOptions = {
	        sessionToken: sessionToken
	      };
	      if (options.hasOwnProperty('useMasterKey')) {
	        becomeOptions.useMasterKey = options.useMasterKey;
	      }
	
	      var controller = _CoreManager2.default.getUserController();
	      return controller.become(becomeOptions)._thenRunCallbacks(options);
	    }
	  }, {
	    key: 'logInWith',
	    value: function (provider, options) {
	      return ParseUser._logInWith(provider, options);
	    }
	
	    /**
	     * Logs out the currently logged in user session. This will remove the
	     * session from disk, log out of linked services, and future calls to
	     * <code>current</code> will return <code>null</code>.
	     * @method logOut
	     * @static
	     * @return {Parse.Promise} A promise that is resolved when the session is
	     *   destroyed on the server.
	     */
	
	  }, {
	    key: 'logOut',
	    value: function () {
	      if (!canUseCurrentUser) {
	        throw new Error('There is no current user user on a node.js server environment.');
	      }
	
	      var controller = _CoreManager2.default.getUserController();
	      return controller.logOut();
	    }
	
	    /**
	     * Requests a password reset email to be sent to the specified email address
	     * associated with the user account. This email allows the user to securely
	     * reset their password on the Parse site.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method requestPasswordReset
	     * @param {String} email The email address associated with the user that
	     *     forgot their password.
	     * @param {Object} options A Backbone-style options object.
	     * @static
	     */
	
	  }, {
	    key: 'requestPasswordReset',
	    value: function (email, options) {
	      options = options || {};
	
	      var requestOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        requestOptions.useMasterKey = options.useMasterKey;
	      }
	
	      var controller = _CoreManager2.default.getUserController();
	      return controller.requestPasswordReset(email, requestOptions)._thenRunCallbacks(options);
	    }
	
	    /**
	     * Allow someone to define a custom User class without className
	     * being rewritten to _User. The default behavior is to rewrite
	     * User to _User for legacy reasons. This allows developers to
	     * override that behavior.
	     *
	     * @method allowCustomUserClass
	     * @param {Boolean} isAllowed Whether or not to allow custom User class
	     * @static
	     */
	
	  }, {
	    key: 'allowCustomUserClass',
	    value: function (isAllowed) {
	      _CoreManager2.default.set('PERFORM_USER_REWRITE', !isAllowed);
	    }
	
	    /**
	     * Allows a legacy application to start using revocable sessions. If the
	     * current session token is not revocable, a request will be made for a new,
	     * revocable session.
	     * It is not necessary to call this method from cloud code unless you are
	     * handling user signup or login from the server side. In a cloud code call,
	     * this function will not attempt to upgrade the current token.
	     * @method enableRevocableSession
	     * @param {Object} options A Backbone-style options object.
	     * @static
	     * @return {Parse.Promise} A promise that is resolved when the process has
	     *   completed. If a replacement session token is requested, the promise
	     *   will be resolved after a new token has been fetched.
	     */
	
	  }, {
	    key: 'enableRevocableSession',
	    value: function (options) {
	      options = options || {};
	      _CoreManager2.default.set('FORCE_REVOCABLE_SESSION', true);
	      if (canUseCurrentUser) {
	        var current = ParseUser.current();
	        if (current) {
	          return current._upgradeToRevocableSession(options);
	        }
	      }
	      return _ParsePromise2.default.as()._thenRunCallbacks(options);
	    }
	
	    /**
	     * Enables the use of become or the current user in a server
	     * environment. These features are disabled by default, since they depend on
	     * global objects that are not memory-safe for most servers.
	     * @method enableUnsafeCurrentUser
	     * @static
	     */
	
	  }, {
	    key: 'enableUnsafeCurrentUser',
	    value: function () {
	      canUseCurrentUser = true;
	    }
	
	    /**
	     * Disables the use of become or the current user in any environment.
	     * These features are disabled on servers by default, since they depend on
	     * global objects that are not memory-safe for most servers.
	     * @method disableUnsafeCurrentUser
	     * @static
	     */
	
	  }, {
	    key: 'disableUnsafeCurrentUser',
	    value: function () {
	      canUseCurrentUser = false;
	    }
	  }, {
	    key: '_registerAuthenticationProvider',
	    value: function (provider) {
	      authProviders[provider.getAuthType()] = provider;
	      // Synchronize the current user with the auth provider.
	      ParseUser.currentAsync().then(function (current) {
	        if (current) {
	          current._synchronizeAuthData(provider.getAuthType());
	        }
	      });
	    }
	  }, {
	    key: '_logInWith',
	    value: function (provider, options) {
	      var user = new ParseUser();
	      return user._linkWith(provider, options);
	    }
	  }, {
	    key: '_clearCache',
	    value: function () {
	      currentUserCache = null;
	      currentUserCacheMatchesDisk = false;
	    }
	  }, {
	    key: '_setCurrentUserCache',
	    value: function (user) {
	      currentUserCache = user;
	    }
	  }]);
	  return ParseUser;
	}(_ParseObject3.default);
	
	exports.default = ParseUser;
	
	_ParseObject3.default.registerSubclass('_User', ParseUser);
	
	var DefaultController = {
	  updateUserOnDisk: function (user) {
	    var path = _Storage2.default.generatePath(CURRENT_USER_KEY);
	    var json = user.toJSON();
	    json.className = '_User';
	    return _Storage2.default.setItemAsync(path, (0, _stringify2.default)(json)).then(function () {
	      return user;
	    });
	  },
	  removeUserFromDisk: function () {
	    var path = _Storage2.default.generatePath(CURRENT_USER_KEY);
	    currentUserCacheMatchesDisk = true;
	    currentUserCache = null;
	    return _Storage2.default.removeItemAsync(path);
	  },
	  setCurrentUser: function (user) {
	    currentUserCache = user;
	    user._cleanupAuthData();
	    user._synchronizeAllAuthData();
	    return DefaultController.updateUserOnDisk(user);
	  },
	  currentUser: function () {
	    if (currentUserCache) {
	      return currentUserCache;
	    }
	    if (currentUserCacheMatchesDisk) {
	      return null;
	    }
	    if (_Storage2.default.async()) {
	      throw new Error('Cannot call currentUser() when using a platform with an async ' + 'storage system. Call currentUserAsync() instead.');
	    }
	    var path = _Storage2.default.generatePath(CURRENT_USER_KEY);
	    var userData = _Storage2.default.getItem(path);
	    currentUserCacheMatchesDisk = true;
	    if (!userData) {
	      currentUserCache = null;
	      return null;
	    }
	    userData = JSON.parse(userData);
	    if (!userData.className) {
	      userData.className = '_User';
	    }
	    if (userData._id) {
	      if (userData.objectId !== userData._id) {
	        userData.objectId = userData._id;
	      }
	      delete userData._id;
	    }
	    if (userData._sessionToken) {
	      userData.sessionToken = userData._sessionToken;
	      delete userData._sessionToken;
	    }
	    var current = _ParseObject3.default.fromJSON(userData);
	    currentUserCache = current;
	    current._synchronizeAllAuthData();
	    return current;
	  },
	  currentUserAsync: function () {
	    if (currentUserCache) {
	      return _ParsePromise2.default.as(currentUserCache);
	    }
	    if (currentUserCacheMatchesDisk) {
	      return _ParsePromise2.default.as(null);
	    }
	    var path = _Storage2.default.generatePath(CURRENT_USER_KEY);
	    return _Storage2.default.getItemAsync(path).then(function (userData) {
	      currentUserCacheMatchesDisk = true;
	      if (!userData) {
	        currentUserCache = null;
	        return _ParsePromise2.default.as(null);
	      }
	      userData = JSON.parse(userData);
	      if (!userData.className) {
	        userData.className = '_User';
	      }
	      if (userData._id) {
	        if (userData.objectId !== userData._id) {
	          userData.objectId = userData._id;
	        }
	        delete userData._id;
	      }
	      if (userData._sessionToken) {
	        userData.sessionToken = userData._sessionToken;
	        delete userData._sessionToken;
	      }
	      var current = _ParseObject3.default.fromJSON(userData);
	      currentUserCache = current;
	      current._synchronizeAllAuthData();
	      return _ParsePromise2.default.as(current);
	    });
	  },
	  signUp: function (user, attrs, options) {
	    var username = attrs && attrs.username || user.get('username');
	    var password = attrs && attrs.password || user.get('password');
	
	    if (!username || !username.length) {
	      return _ParsePromise2.default.error(new _ParseError2.default(_ParseError2.default.OTHER_CAUSE, 'Cannot sign up user with an empty name.'));
	    }
	    if (!password || !password.length) {
	      return _ParsePromise2.default.error(new _ParseError2.default(_ParseError2.default.OTHER_CAUSE, 'Cannot sign up user with an empty password.'));
	    }
	
	    return user.save(attrs, options).then(function () {
	      // Clear the password field
	      user._finishFetch({ password: undefined });
	
	      if (canUseCurrentUser) {
	        return DefaultController.setCurrentUser(user);
	      }
	      return user;
	    });
	  },
	  logIn: function (user, options) {
	    var RESTController = _CoreManager2.default.getRESTController();
	    var stateController = _CoreManager2.default.getObjectStateController();
	    var auth = {
	      username: user.get('username'),
	      password: user.get('password')
	    };
	    return RESTController.request('GET', 'login', auth, options).then(function (response, status) {
	      user._migrateId(response.objectId);
	      user._setExisted(true);
	      stateController.setPendingOp(user._getStateIdentifier(), 'username', undefined);
	      stateController.setPendingOp(user._getStateIdentifier(), 'password', undefined);
	      response.password = undefined;
	      user._finishFetch(response);
	      if (!canUseCurrentUser) {
	        // We can't set the current user, so just return the one we logged in
	        return _ParsePromise2.default.as(user);
	      }
	      return DefaultController.setCurrentUser(user);
	    });
	  },
	  become: function (options) {
	    var user = new ParseUser();
	    var RESTController = _CoreManager2.default.getRESTController();
	    return RESTController.request('GET', 'users/me', {}, options).then(function (response, status) {
	      user._finishFetch(response);
	      user._setExisted(true);
	      return DefaultController.setCurrentUser(user);
	    });
	  },
	  logOut: function () {
	    return DefaultController.currentUserAsync().then(function (currentUser) {
	      var path = _Storage2.default.generatePath(CURRENT_USER_KEY);
	      var promise = _Storage2.default.removeItemAsync(path);
	      var RESTController = _CoreManager2.default.getRESTController();
	      if (currentUser !== null) {
	        var currentSession = currentUser.getSessionToken();
	        if (currentSession && (0, _isRevocableSession2.default)(currentSession)) {
	          promise = promise.then(function () {
	            return RESTController.request('POST', 'logout', {}, { sessionToken: currentSession });
	          });
	        }
	        currentUser._logOutWithAll();
	        currentUser._finishFetch({ sessionToken: undefined });
	      }
	      currentUserCacheMatchesDisk = true;
	      currentUserCache = null;
	
	      return promise;
	    });
	  },
	  requestPasswordReset: function (email, options) {
	    var RESTController = _CoreManager2.default.getRESTController();
	    return RESTController.request('POST', 'requestPasswordReset', { email: email }, options);
	  },
	  upgradeToRevocableSession: function (user, options) {
	    var token = user.getSessionToken();
	    if (!token) {
	      return _ParsePromise2.default.error(new _ParseError2.default(_ParseError2.default.SESSION_MISSING, 'Cannot upgrade a user with no session token'));
	    }
	
	    options.sessionToken = token;
	
	    var RESTController = _CoreManager2.default.getRESTController();
	    return RESTController.request('POST', 'upgradeToRevocableSession', {}, options).then(function (result) {
	      var session = new _ParseSession2.default();
	      session._finishFetch(result);
	      user._finishFetch({ sessionToken: session.getSessionToken() });
	      if (user.isCurrent()) {
	        return DefaultController.setCurrentUser(user);
	      }
	      return _ParsePromise2.default.as(user);
	    });
	  },
	  linkWith: function (user, authData) {
	    return user.save({ authData: authData }).then(function () {
	      if (canUseCurrentUser) {
	        return DefaultController.setCurrentUser(user);
	      }
	      return user;
	    });
	  }
	};
	
	_CoreManager2.default.setUserController(DefaultController);

/***/ },
/* 732 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isRevocableSession;
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function isRevocableSession(token) {
	  return token.indexOf('r:') > -1;
	}

/***/ },
/* 733 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _getPrototypeOf = __webpack_require__(670);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(665);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(673);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(678);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _CoreManager = __webpack_require__(693);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _isRevocableSession = __webpack_require__(732);
	
	var _isRevocableSession2 = _interopRequireDefault(_isRevocableSession);
	
	var _ParseObject2 = __webpack_require__(687);
	
	var _ParseObject3 = _interopRequireDefault(_ParseObject2);
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _ParseUser = __webpack_require__(731);
	
	var _ParseUser2 = _interopRequireDefault(_ParseUser);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * @class Parse.Session
	 * @constructor
	 *
	 * <p>A Parse.Session object is a local representation of a revocable session.
	 * This class is a subclass of a Parse.Object, and retains the same
	 * functionality of a Parse.Object.</p>
	 */
	var ParseSession = function (_ParseObject) {
	  (0, _inherits3.default)(ParseSession, _ParseObject);
	
	  function ParseSession(attributes) {
	    (0, _classCallCheck3.default)(this, ParseSession);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (ParseSession.__proto__ || (0, _getPrototypeOf2.default)(ParseSession)).call(this, '_Session'));
	
	    if (attributes && (typeof attributes === 'undefined' ? 'undefined' : (0, _typeof3.default)(attributes)) === 'object') {
	      if (!_this.set(attributes || {})) {
	        throw new Error('Can\'t create an invalid Session');
	      }
	    }
	    return _this;
	  }
	
	  /**
	   * Returns the session token string.
	   * @method getSessionToken
	   * @return {String}
	   */
	
	  (0, _createClass3.default)(ParseSession, [{
	    key: 'getSessionToken',
	    value: function () {
	      var token = this.get('sessionToken');
	      if (typeof token === 'string') {
	        return token;
	      }
	      return '';
	    }
	  }], [{
	    key: 'readOnlyAttributes',
	    value: function () {
	      return ['createdWith', 'expiresAt', 'installationId', 'restricted', 'sessionToken', 'user'];
	    }
	
	    /**
	     * Retrieves the Session object for the currently logged in session.
	     * @method current
	     * @static
	     * @return {Parse.Promise} A promise that is resolved with the Parse.Session
	     *   object after it has been fetched. If there is no current user, the
	     *   promise will be rejected.
	     */
	
	  }, {
	    key: 'current',
	    value: function (options) {
	      options = options || {};
	      var controller = _CoreManager2.default.getSessionController();
	
	      var sessionOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        sessionOptions.useMasterKey = options.useMasterKey;
	      }
	      return _ParseUser2.default.currentAsync().then(function (user) {
	        if (!user) {
	          return _ParsePromise2.default.error('There is no current user.');
	        }
	        user.getSessionToken();
	
	        sessionOptions.sessionToken = user.getSessionToken();
	        return controller.getSession(sessionOptions);
	      });
	    }
	
	    /**
	     * Determines whether the current session token is revocable.
	     * This method is useful for migrating Express.js or Node.js web apps to
	     * use revocable sessions. If you are migrating an app that uses the Parse
	     * SDK in the browser only, please use Parse.User.enableRevocableSession()
	     * instead, so that sessions can be automatically upgraded.
	     * @method isCurrentSessionRevocable
	     * @static
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'isCurrentSessionRevocable',
	    value: function () {
	      var currentUser = _ParseUser2.default.current();
	      if (currentUser) {
	        return (0, _isRevocableSession2.default)(currentUser.getSessionToken() || '');
	      }
	      return false;
	    }
	  }]);
	  return ParseSession;
	}(_ParseObject3.default); /**
	                           * Copyright (c) 2015-present, Parse, LLC.
	                           * All rights reserved.
	                           *
	                           * This source code is licensed under the BSD-style license found in the
	                           * LICENSE file in the root directory of this source tree. An additional grant
	                           * of patent rights can be found in the PATENTS file in the same directory.
	                           *
	                           * 
	                           */
	
	exports.default = ParseSession;
	
	_ParseObject3.default.registerSubclass('_Session', ParseSession);
	
	var DefaultController = {
	  getSession: function (options) {
	    var RESTController = _CoreManager2.default.getRESTController();
	    var session = new ParseSession();
	
	    return RESTController.request('GET', 'sessions/me', {}, options).then(function (sessionData) {
	      session._finishFetch(sessionData);
	      session._setExisted(true);
	      return session;
	    });
	  }
	};
	
	_CoreManager2.default.setSessionController(DefaultController);

/***/ },
/* 734 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _CoreManager = __webpack_require__(693);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	module.exports = {
	  async: function () {
	    var controller = _CoreManager2.default.getStorageController();
	    return !!controller.async;
	  },
	  getItem: function (path) {
	    var controller = _CoreManager2.default.getStorageController();
	    if (controller.async === 1) {
	      throw new Error('Synchronous storage is not supported by the current storage controller');
	    }
	    return controller.getItem(path);
	  },
	  getItemAsync: function (path) {
	    var controller = _CoreManager2.default.getStorageController();
	    if (controller.async === 1) {
	      return controller.getItemAsync(path);
	    }
	    return _ParsePromise2.default.as(controller.getItem(path));
	  },
	  setItem: function (path, value) {
	    var controller = _CoreManager2.default.getStorageController();
	    if (controller.async === 1) {
	      throw new Error('Synchronous storage is not supported by the current storage controller');
	    }
	    return controller.setItem(path, value);
	  },
	  setItemAsync: function (path, value) {
	    var controller = _CoreManager2.default.getStorageController();
	    if (controller.async === 1) {
	      return controller.setItemAsync(path, value);
	    }
	    return _ParsePromise2.default.as(controller.setItem(path, value));
	  },
	  removeItem: function (path) {
	    var controller = _CoreManager2.default.getStorageController();
	    if (controller.async === 1) {
	      throw new Error('Synchronous storage is not supported by the current storage controller');
	    }
	    return controller.removeItem(path);
	  },
	  removeItemAsync: function (path) {
	    var controller = _CoreManager2.default.getStorageController();
	    if (controller.async === 1) {
	      return controller.removeItemAsync(path);
	    }
	    return _ParsePromise2.default.as(controller.removeItem(path));
	  },
	  generatePath: function (path) {
	    if (!_CoreManager2.default.get('APPLICATION_ID')) {
	      throw new Error('You need to call Parse.initialize before using Parse.');
	    }
	    if (typeof path !== 'string') {
	      throw new Error('Tried to get a Storage path that was not a String.');
	    }
	    if (path[0] === '/') {
	      path = path.substr(1);
	    }
	    return 'Parse/' + _CoreManager2.default.get('APPLICATION_ID') + '/' + path;
	  },
	  _clear: function () {
	    var controller = _CoreManager2.default.getStorageController();
	    if (controller.hasOwnProperty('clear')) {
	      controller.clear();
	    }
	  }
	};
	
	_CoreManager2.default.setStorageController(__webpack_require__(735));

/***/ },
/* 735 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var StorageController = {
	  async: 0,
	
	  getItem: function (path) {
	    return localStorage.getItem(path);
	  },
	  setItem: function (path, value) {
	    try {
	      localStorage.setItem(path, value);
	    } catch (e) {
	      // Quota exceeded, possibly due to Safari Private Browsing mode
	    }
	  },
	  removeItem: function (path) {
	    localStorage.removeItem(path);
	  },
	  clear: function () {
	    localStorage.clear();
	  }
	}; /**
	    * Copyright (c) 2015-present, Parse, LLC.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * 
	    */
	
	module.exports = StorageController;

/***/ },
/* 736 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _CoreManager = __webpack_require__(693);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _Storage = __webpack_require__(734);
	
	var _Storage2 = _interopRequireDefault(_Storage);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var iidCache = null; /**
	                      * Copyright (c) 2015-present, Parse, LLC.
	                      * All rights reserved.
	                      *
	                      * This source code is licensed under the BSD-style license found in the
	                      * LICENSE file in the root directory of this source tree. An additional grant
	                      * of patent rights can be found in the PATENTS file in the same directory.
	                      *
	                      * 
	                      */
	
	function hexOctet() {
	  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	
	function generateId() {
	  return hexOctet() + hexOctet() + '-' + hexOctet() + '-' + hexOctet() + '-' + hexOctet() + '-' + hexOctet() + hexOctet() + hexOctet();
	}
	
	var InstallationController = {
	  currentInstallationId: function () {
	    if (typeof iidCache === 'string') {
	      return _ParsePromise2.default.as(iidCache);
	    }
	    var path = _Storage2.default.generatePath('installationId');
	    return _Storage2.default.getItemAsync(path).then(function (iid) {
	      if (!iid) {
	        iid = generateId();
	        return _Storage2.default.setItemAsync(path, iid).then(function () {
	          iidCache = iid;
	          return iid;
	        });
	      }
	      iidCache = iid;
	      return iid;
	    });
	  },
	  _clearCache: function () {
	    iidCache = null;
	  },
	  _setInstallationIdCache: function (iid) {
	    iidCache = iid;
	  }
	};
	
	module.exports = InstallationController;

/***/ },
/* 737 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _stringify = __webpack_require__(691);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _CoreManager = __webpack_require__(693);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _ParseError = __webpack_require__(686);
	
	var _ParseError2 = _interopRequireDefault(_ParseError);
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _Storage = __webpack_require__(734);
	
	var _Storage2 = _interopRequireDefault(_Storage);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	var XHR = null;
	if (typeof XMLHttpRequest !== 'undefined') {
	  XHR = XMLHttpRequest;
	}
	
	
	var useXDomainRequest = false;
	if (typeof XDomainRequest !== 'undefined' && !('withCredentials' in new XMLHttpRequest())) {
	  useXDomainRequest = true;
	}
	
	function ajaxIE9(method, url, data) {
	  var promise = new _ParsePromise2.default();
	  var xdr = new XDomainRequest();
	  xdr.onload = function () {
	    var response;
	    try {
	      response = JSON.parse(xdr.responseText);
	    } catch (e) {
	      promise.reject(e);
	    }
	    if (response) {
	      promise.resolve(response);
	    }
	  };
	  xdr.onerror = xdr.ontimeout = function () {
	    // Let's fake a real error message.
	    var fakeResponse = {
	      responseText: (0, _stringify2.default)({
	        code: _ParseError2.default.X_DOMAIN_REQUEST,
	        error: 'IE\'s XDomainRequest does not supply error info.'
	      })
	    };
	    promise.reject(fakeResponse);
	  };
	  xdr.onprogress = function () {};
	  xdr.open(method, url);
	  xdr.send(data);
	  return promise;
	}
	
	var RESTController = {
	  ajax: function (method, url, data, headers) {
	    if (useXDomainRequest) {
	      return ajaxIE9(method, url, data, headers);
	    }
	
	    var promise = new _ParsePromise2.default();
	    var attempts = 0;
	
	    (function dispatch() {
	      if (XHR == null) {
	        throw new Error('Cannot make a request: No definition of XMLHttpRequest was found.');
	      }
	      var handled = false;
	      var xhr = new XHR();
	
	      xhr.onreadystatechange = function () {
	        if (xhr.readyState !== 4 || handled) {
	          return;
	        }
	        handled = true;
	
	        if (xhr.status >= 200 && xhr.status < 300) {
	          var response;
	          try {
	            response = JSON.parse(xhr.responseText);
	          } catch (e) {
	            promise.reject(e.toString());
	          }
	          if (response) {
	            promise.resolve(response, xhr.status, xhr);
	          }
	        } else if (xhr.status >= 500 || xhr.status === 0) {
	          // retry on 5XX or node-xmlhttprequest error
	          if (++attempts < _CoreManager2.default.get('REQUEST_ATTEMPT_LIMIT')) {
	            // Exponentially-growing random delay
	            var delay = Math.round(Math.random() * 125 * Math.pow(2, attempts));
	            setTimeout(dispatch, delay);
	          } else if (xhr.status === 0) {
	            promise.reject('Unable to connect to the Parse API');
	          } else {
	            // After the retry limit is reached, fail
	            promise.reject(xhr);
	          }
	        } else {
	          promise.reject(xhr);
	        }
	      };
	
	      headers = headers || {};
	      if (typeof headers['Content-Type'] !== 'string') {
	        headers['Content-Type'] = 'text/plain'; // Avoid pre-flight
	      }
	      if (_CoreManager2.default.get('IS_NODE')) {
	        headers['User-Agent'] = 'Parse/' + _CoreManager2.default.get('VERSION') + ' (NodeJS ' + process.versions.node + ')';
	      }
	      if (_CoreManager2.default.get('CREDENTIALS')) {
	        headers['Authorization'] = 'Bearer ' + _CoreManager2.default.get('CREDENTIALS');
	      }
	      xhr.open(method, url, true);
	      for (var h in headers) {
	        xhr.setRequestHeader(h, headers[h]);
	      }
	      xhr.send(data);
	    })();
	
	    return promise;
	  },
	  request: function (method, path, data, options) {
	    options = options || {};
	    var url = _CoreManager2.default.get('SERVER_URL');
	    if (url[url.length - 1] !== '/') {
	      url += '/';
	    }
	    url += path;
	
	    var payload = {};
	    if (data && (typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object') {
	      for (var k in data) {
	        payload[k] = data[k];
	      }
	    }
	
	    if (method !== 'POST') {
	      payload._method = method;
	      method = 'POST';
	    }
	
	    payload._ApplicationId = _CoreManager2.default.get('APPLICATION_ID');
	    var jsKey = _CoreManager2.default.get('JAVASCRIPT_KEY');
	    if (jsKey) {
	      payload._JavaScriptKey = jsKey;
	    }
	    payload._ClientVersion = _CoreManager2.default.get('VERSION');
	
	    var useMasterKey = options.useMasterKey;
	    if (typeof useMasterKey === 'undefined') {
	      useMasterKey = _CoreManager2.default.get('USE_MASTER_KEY');
	    }
	    if (useMasterKey) {
	      if (_CoreManager2.default.get('MASTER_KEY')) {
	        delete payload._JavaScriptKey;
	        payload._MasterKey = _CoreManager2.default.get('MASTER_KEY');
	      } else {
	        throw new Error('Cannot use the Master Key, it has not been provided.');
	      }
	    }
	
	    if (_CoreManager2.default.get('FORCE_REVOCABLE_SESSION')) {
	      payload._RevocableSession = '1';
	    }
	
	    var installationId = options.installationId;
	    var installationIdPromise;
	    if (installationId && typeof installationId === 'string') {
	      installationIdPromise = _ParsePromise2.default.as(installationId);
	    } else {
	      var installationController = _CoreManager2.default.getInstallationController();
	      installationIdPromise = installationController.currentInstallationId();
	    }
	
	    return installationIdPromise.then(function (iid) {
	      payload._InstallationId = iid;
	      var userController = _CoreManager2.default.getUserController();
	      if (options && typeof options.sessionToken === 'string') {
	        return _ParsePromise2.default.as(options.sessionToken);
	      } else if (userController) {
	        return userController.currentUserAsync().then(function (user) {
	          if (user) {
	            return _ParsePromise2.default.as(user.getSessionToken());
	          }
	          return _ParsePromise2.default.as(null);
	        });
	      }
	      return _ParsePromise2.default.as(null);
	    }).then(function (token) {
	      if (token) {
	        payload._SessionToken = token;
	      }
	
	      var payloadString = (0, _stringify2.default)(payload);
	
	      return RESTController.ajax(method, url, payloadString);
	    }).then(null, function (response) {
	      // Transform the error into an instance of ParseError by trying to parse
	      // the error string as JSON
	      var error;
	      if (response && response.responseText) {
	        try {
	          var errorJSON = JSON.parse(response.responseText);
	          error = new _ParseError2.default(errorJSON.code, errorJSON.error);
	        } catch (e) {
	          // If we fail to parse the error text, that's okay.
	          error = new _ParseError2.default(_ParseError2.default.INVALID_JSON, 'Received an error with invalid JSON from Parse: ' + response.responseText);
	        }
	      } else {
	        error = new _ParseError2.default(_ParseError2.default.CONNECTION_FAILED, 'XMLHttpRequest failed: ' + (0, _stringify2.default)(response));
	      }
	
	      return _ParsePromise2.default.error(error);
	    });
	  },
	  _setXHR: function (xhr) {
	    XHR = xhr;
	  }
	};
	
	module.exports = RESTController;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 738 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.track = track;
	
	var _CoreManager = __webpack_require__(693);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Parse.Analytics provides an interface to Parse's logging and analytics
	 * backend.
	 *
	 * @class Parse.Analytics
	 * @static
	 */
	
	/**
	 * Tracks the occurrence of a custom event with additional dimensions.
	 * Parse will store a data point at the time of invocation with the given
	 * event name.
	 *
	 * Dimensions will allow segmentation of the occurrences of this custom
	 * event. Keys and values should be {@code String}s, and will throw
	 * otherwise.
	 *
	 * To track a user signup along with additional metadata, consider the
	 * following:
	 * <pre>
	 * var dimensions = {
	 *  gender: 'm',
	 *  source: 'web',
	 *  dayType: 'weekend'
	 * };
	 * Parse.Analytics.track('signup', dimensions);
	 * </pre>
	 *
	 * There is a default limit of 8 dimensions per event tracked.
	 *
	 * @method track
	 * @param {String} name The name of the custom event to report to Parse as
	 * having happened.
	 * @param {Object} dimensions The dictionary of information by which to
	 * segment this event.
	 * @param {Object} options A Backbone-style callback object.
	 * @return {Parse.Promise} A promise that is resolved when the round-trip
	 * to the server completes.
	 */
	function track(name, dimensions, options) {
	  name = name || '';
	  name = name.replace(/^\s*/, '');
	  name = name.replace(/\s*$/, '');
	  if (name.length === 0) {
	    throw new TypeError('A name for the custom event must be provided');
	  }
	
	  for (var key in dimensions) {
	    if (typeof key !== 'string' || typeof dimensions[key] !== 'string') {
	      throw new TypeError('track() dimensions expects keys and values of type "string".');
	    }
	  }
	
	  options = options || {};
	  return _CoreManager2.default.getAnalyticsController().track(name, dimensions)._thenRunCallbacks(options);
	} /**
	   * Copyright (c) 2015-present, Parse, LLC.
	   * All rights reserved.
	   *
	   * This source code is licensed under the BSD-style license found in the
	   * LICENSE file in the root directory of this source tree. An additional grant
	   * of patent rights can be found in the PATENTS file in the same directory.
	   *
	   * 
	   */
	
	var DefaultController = {
	  track: function (name, dimensions) {
	    var RESTController = _CoreManager2.default.getRESTController();
	    return RESTController.request('POST', 'events/' + name, { dimensions: dimensions });
	  }
	};
	
	_CoreManager2.default.setAnalyticsController(DefaultController);

/***/ },
/* 739 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.run = run;
	
	var _CoreManager = __webpack_require__(693);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _decode = __webpack_require__(590);
	
	var _decode2 = _interopRequireDefault(_decode);
	
	var _encode = __webpack_require__(705);
	
	var _encode2 = _interopRequireDefault(_encode);
	
	var _ParseError = __webpack_require__(686);
	
	var _ParseError2 = _interopRequireDefault(_ParseError);
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Contains functions for calling and declaring
	 * <a href="/docs/cloud_code_guide#functions">cloud functions</a>.
	 * <p><strong><em>
	 *   Some functions are only available from Cloud Code.
	 * </em></strong></p>
	 *
	 * @class Parse.Cloud
	 * @static
	 */
	
	/**
	 * Makes a call to a cloud function.
	 * @method run
	 * @param {String} name The function name.
	 * @param {Object} data The parameters to send to the cloud function.
	 * @param {Object} options A Backbone-style options object
	 * options.success, if set, should be a function to handle a successful
	 * call to a cloud function.  options.error should be a function that
	 * handles an error running the cloud function.  Both functions are
	 * optional.  Both functions take a single argument.
	 * @return {Parse.Promise} A promise that will be resolved with the result
	 * of the function.
	 */
	function run(name, data, options) {
	  options = options || {};
	
	  if (typeof name !== 'string' || name.length === 0) {
	    throw new TypeError('Cloud function name must be a string.');
	  }
	
	  var requestOptions = {};
	  if (options.useMasterKey) {
	    requestOptions.useMasterKey = options.useMasterKey;
	  }
	  if (options.sessionToken) {
	    requestOptions.sessionToken = options.sessionToken;
	  }
	
	  return _CoreManager2.default.getCloudController().run(name, data, requestOptions)._thenRunCallbacks(options);
	} /**
	   * Copyright (c) 2015-present, Parse, LLC.
	   * All rights reserved.
	   *
	   * This source code is licensed under the BSD-style license found in the
	   * LICENSE file in the root directory of this source tree. An additional grant
	   * of patent rights can be found in the PATENTS file in the same directory.
	   *
	   * 
	   */
	
	var DefaultController = {
	  run: function (name, data, options) {
	    var RESTController = _CoreManager2.default.getRESTController();
	
	    var payload = (0, _encode2.default)(data, true);
	
	    var requestOptions = {};
	    if (options.hasOwnProperty('useMasterKey')) {
	      requestOptions.useMasterKey = options.useMasterKey;
	    }
	    if (options.hasOwnProperty('sessionToken')) {
	      requestOptions.sessionToken = options.sessionToken;
	    }
	
	    var request = RESTController.request('POST', 'functions/' + name, payload, requestOptions);
	
	    return request.then(function (res) {
	      var decoded = (0, _decode2.default)(res);
	      if (decoded && decoded.hasOwnProperty('result')) {
	        return _ParsePromise2.default.as(decoded.result);
	      }
	      return _ParsePromise2.default.error(new _ParseError2.default(_ParseError2.default.INVALID_JSON, 'The server returned an invalid response.'));
	    })._thenRunCallbacks(options);
	  }
	};
	
	_CoreManager2.default.setCloudController(DefaultController);

/***/ },
/* 740 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(691);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(665);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _CoreManager = __webpack_require__(693);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _decode = __webpack_require__(590);
	
	var _decode2 = _interopRequireDefault(_decode);
	
	var _encode = __webpack_require__(705);
	
	var _encode2 = _interopRequireDefault(_encode);
	
	var _escape2 = __webpack_require__(710);
	
	var _escape3 = _interopRequireDefault(_escape2);
	
	var _ParseError = __webpack_require__(686);
	
	var _ParseError2 = _interopRequireDefault(_ParseError);
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _Storage = __webpack_require__(734);
	
	var _Storage2 = _interopRequireDefault(_Storage);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Parse.Config is a local representation of configuration data that
	 * can be set from the Parse dashboard.
	 *
	 * @class Parse.Config
	 * @constructor
	 */
	
	var ParseConfig = function () {
	  function ParseConfig() {
	    (0, _classCallCheck3.default)(this, ParseConfig);
	
	    this.attributes = {};
	    this._escapedAttributes = {};
	  }
	
	  /**
	   * Gets the value of an attribute.
	   * @method get
	   * @param {String} attr The name of an attribute.
	   */
	
	  (0, _createClass3.default)(ParseConfig, [{
	    key: 'get',
	    value: function (attr) {
	      return this.attributes[attr];
	    }
	
	    /**
	     * Gets the HTML-escaped value of an attribute.
	     * @method escape
	     * @param {String} attr The name of an attribute.
	     */
	
	  }, {
	    key: 'escape',
	    value: function (attr) {
	      var html = this._escapedAttributes[attr];
	      if (html) {
	        return html;
	      }
	      var val = this.attributes[attr];
	      var escaped = '';
	      if (val != null) {
	        escaped = (0, _escape3.default)(val.toString());
	      }
	      this._escapedAttributes[attr] = escaped;
	      return escaped;
	    }
	
	    /**
	     * Retrieves the most recently-fetched configuration object, either from
	     * memory or from local storage if necessary.
	     *
	     * @method current
	     * @static
	     * @return {Config} The most recently-fetched Parse.Config if it
	     *     exists, else an empty Parse.Config.
	     */
	
	  }], [{
	    key: 'current',
	    value: function () {
	      var controller = _CoreManager2.default.getConfigController();
	      return controller.current();
	    }
	
	    /**
	     * Gets a new configuration object from the server.
	     * @method get
	     * @static
	     * @param {Object} options A Backbone-style options object.
	     * Valid options are:<ul>
	     *   <li>success: Function to call when the get completes successfully.
	     *   <li>error: Function to call when the get fails.
	     * </ul>
	     * @return {Parse.Promise} A promise that is resolved with a newly-created
	     *     configuration object when the get completes.
	     */
	
	  }, {
	    key: 'get',
	    value: function (options) {
	      options = options || {};
	
	      var controller = _CoreManager2.default.getConfigController();
	      return controller.get()._thenRunCallbacks(options);
	    }
	  }]);
	  return ParseConfig;
	}(); /**
	      * Copyright (c) 2015-present, Parse, LLC.
	      * All rights reserved.
	      *
	      * This source code is licensed under the BSD-style license found in the
	      * LICENSE file in the root directory of this source tree. An additional grant
	      * of patent rights can be found in the PATENTS file in the same directory.
	      *
	      * 
	      */
	
	exports.default = ParseConfig;
	
	var currentConfig = null;
	
	var CURRENT_CONFIG_KEY = 'currentConfig';
	
	function decodePayload(data) {
	  try {
	    var json = JSON.parse(data);
	    if (json && (typeof json === 'undefined' ? 'undefined' : (0, _typeof3.default)(json)) === 'object') {
	      return (0, _decode2.default)(json);
	    }
	  } catch (e) {
	    return null;
	  }
	}
	
	var DefaultController = {
	  current: function () {
	    if (currentConfig) {
	      return currentConfig;
	    }
	
	    var config = new ParseConfig();
	    var storagePath = _Storage2.default.generatePath(CURRENT_CONFIG_KEY);
	    var configData;
	    if (!_Storage2.default.async()) {
	      configData = _Storage2.default.getItem(storagePath);
	
	      if (configData) {
	        var attributes = decodePayload(configData);
	        if (attributes) {
	          config.attributes = attributes;
	          currentConfig = config;
	        }
	      }
	      return config;
	    }
	    // Return a promise for async storage controllers
	    return _Storage2.default.getItemAsync(storagePath).then(function (configData) {
	      if (configData) {
	        var attributes = decodePayload(configData);
	        if (attributes) {
	          config.attributes = attributes;
	          currentConfig = config;
	        }
	      }
	      return config;
	    });
	  },
	  get: function () {
	    var RESTController = _CoreManager2.default.getRESTController();
	
	    return RESTController.request('GET', 'config', {}, {}).then(function (response) {
	      if (!response || !response.params) {
	        var error = new _ParseError2.default(_ParseError2.default.INVALID_JSON, 'Config JSON response invalid.');
	        return _ParsePromise2.default.error(error);
	      }
	
	      var config = new ParseConfig();
	      config.attributes = {};
	      for (var attr in response.params) {
	        config.attributes[attr] = (0, _decode2.default)(response.params[attr]);
	      }
	      currentConfig = config;
	      return _Storage2.default.setItemAsync(_Storage2.default.generatePath(CURRENT_CONFIG_KEY), (0, _stringify2.default)(response.params)).then(function () {
	        return config;
	      });
	    });
	  }
	};
	
	_CoreManager2.default.setConfigController(DefaultController);

/***/ },
/* 741 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _parseDate = __webpack_require__(711);
	
	var _parseDate2 = _interopRequireDefault(_parseDate);
	
	var _ParseUser = __webpack_require__(731);
	
	var _ParseUser2 = _interopRequireDefault(_ParseUser);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * -weak
	 */
	
	var PUBLIC_KEY = "*";
	
	var initialized = false;
	var requestedPermissions;
	var initOptions;
	var provider = {
	  authenticate: function (options) {
	    var _this = this;
	
	    if (typeof FB === 'undefined') {
	      options.error(this, 'Facebook SDK not found.');
	    }
	    FB.login(function (response) {
	      if (response.authResponse) {
	        if (options.success) {
	          options.success(_this, {
	            id: response.authResponse.userID,
	            access_token: response.authResponse.accessToken,
	            expiration_date: new Date(response.authResponse.expiresIn * 1000 + new Date().getTime()).toJSON()
	          });
	        }
	      } else {
	        if (options.error) {
	          options.error(_this, response);
	        }
	      }
	    }, {
	      scope: requestedPermissions
	    });
	  },
	  restoreAuthentication: function (authData) {
	    if (authData) {
	      var expiration = (0, _parseDate2.default)(authData.expiration_date);
	      var expiresIn = expiration ? (expiration.getTime() - new Date().getTime()) / 1000 : 0;
	
	      var authResponse = {
	        userID: authData.id,
	        accessToken: authData.access_token,
	        expiresIn: expiresIn
	      };
	      var newOptions = {};
	      if (initOptions) {
	        for (var key in initOptions) {
	          newOptions[key] = initOptions[key];
	        }
	      }
	      newOptions.authResponse = authResponse;
	
	      // Suppress checks for login status from the browser.
	      newOptions.status = false;
	
	      // If the user doesn't match the one known by the FB SDK, log out.
	      // Most of the time, the users will match -- it's only in cases where
	      // the FB SDK knows of a different user than the one being restored
	      // from a Parse User that logged in with username/password.
	      var existingResponse = FB.getAuthResponse();
	      if (existingResponse && existingResponse.userID !== authResponse.userID) {
	        FB.logout();
	      }
	
	      FB.init(newOptions);
	    }
	    return true;
	  },
	  getAuthType: function () {
	    return 'facebook';
	  },
	  deauthenticate: function () {
	    this.restoreAuthentication(null);
	  }
	};
	
	/**
	 * Provides a set of utilities for using Parse with Facebook.
	 * @class Parse.FacebookUtils
	 * @static
	 */
	var FacebookUtils = {
	  /**
	   * Initializes Parse Facebook integration.  Call this function after you
	   * have loaded the Facebook Javascript SDK with the same parameters
	   * as you would pass to<code>
	   * <a href=
	   * "https://developers.facebook.com/docs/reference/javascript/FB.init/">
	   * FB.init()</a></code>.  Parse.FacebookUtils will invoke FB.init() for you
	   * with these arguments.
	   *
	   * @method init
	   * @param {Object} options Facebook options argument as described here:
	   *   <a href=
	   *   "https://developers.facebook.com/docs/reference/javascript/FB.init/">
	   *   FB.init()</a>. The status flag will be coerced to 'false' because it
	   *   interferes with Parse Facebook integration. Call FB.getLoginStatus()
	   *   explicitly if this behavior is required by your application.
	   */
	  init: function (options) {
	    if (typeof FB === 'undefined') {
	      throw new Error('The Facebook JavaScript SDK must be loaded before calling init.');
	    }
	    initOptions = {};
	    if (options) {
	      for (var key in options) {
	        initOptions[key] = options[key];
	      }
	    }
	    if (initOptions.status && typeof console !== 'undefined') {
	      var warn = console.warn || console.log || function () {};
	      warn.call(console, 'The "status" flag passed into' + ' FB.init, when set to true, can interfere with Parse Facebook' + ' integration, so it has been suppressed. Please call' + ' FB.getLoginStatus() explicitly if you require this behavior.');
	    }
	    initOptions.status = false;
	    FB.init(initOptions);
	    _ParseUser2.default._registerAuthenticationProvider(provider);
	    initialized = true;
	  },
	
	  /**
	   * Gets whether the user has their account linked to Facebook.
	   *
	   * @method isLinked
	   * @param {Parse.User} user User to check for a facebook link.
	   *     The user must be logged in on this device.
	   * @return {Boolean} <code>true</code> if the user has their account
	   *     linked to Facebook.
	   */
	  isLinked: function (user) {
	    return user._isLinked('facebook');
	  },
	
	  /**
	   * Logs in a user using Facebook. This method delegates to the Facebook
	   * SDK to authenticate the user, and then automatically logs in (or
	   * creates, in the case where it is a new user) a Parse.User.
	   *
	   * @method logIn
	   * @param {String, Object} permissions The permissions required for Facebook
	   *    log in.  This is a comma-separated string of permissions.
	   *    Alternatively, supply a Facebook authData object as described in our
	   *    REST API docs if you want to handle getting facebook auth tokens
	   *    yourself.
	   * @param {Object} options Standard options object with success and error
	   *    callbacks.
	   */
	  logIn: function (permissions, options) {
	    if (!permissions || typeof permissions === 'string') {
	      if (!initialized) {
	        throw new Error('You must initialize FacebookUtils before calling logIn.');
	      }
	      requestedPermissions = permissions;
	      return _ParseUser2.default._logInWith('facebook', options);
	    } else {
	      var newOptions = {};
	      if (options) {
	        for (var key in options) {
	          newOptions[key] = options[key];
	        }
	      }
	      newOptions.authData = permissions;
	      return _ParseUser2.default._logInWith('facebook', newOptions);
	    }
	  },
	
	  /**
	   * Links Facebook to an existing PFUser. This method delegates to the
	   * Facebook SDK to authenticate the user, and then automatically links
	   * the account to the Parse.User.
	   *
	   * @method link
	   * @param {Parse.User} user User to link to Facebook. This must be the
	   *     current user.
	   * @param {String, Object} permissions The permissions required for Facebook
	   *    log in.  This is a comma-separated string of permissions.
	   *    Alternatively, supply a Facebook authData object as described in our
	   *    REST API docs if you want to handle getting facebook auth tokens
	   *    yourself.
	   * @param {Object} options Standard options object with success and error
	   *    callbacks.
	   */
	  link: function (user, permissions, options) {
	    if (!permissions || typeof permissions === 'string') {
	      if (!initialized) {
	        throw new Error('You must initialize FacebookUtils before calling link.');
	      }
	      requestedPermissions = permissions;
	      return user._linkWith('facebook', options);
	    } else {
	      var newOptions = {};
	      if (options) {
	        for (var key in options) {
	          newOptions[key] = options[key];
	        }
	      }
	      newOptions.authData = permissions;
	      return user._linkWith('facebook', newOptions);
	    }
	  },
	
	  /**
	   * Unlinks the Parse.User from a Facebook account.
	   *
	   * @method unlink
	   * @param {Parse.User} user User to unlink from Facebook. This must be the
	   *     current user.
	   * @param {Object} options Standard options object with success and error
	   *    callbacks.
	   */
	  unlink: function (user, options) {
	    if (!initialized) {
	      throw new Error('You must initialize FacebookUtils before calling unlink.');
	    }
	    return user._unlinkFrom('facebook', options);
	  }
	};
	
	exports.default = FacebookUtils;

/***/ },
/* 742 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _getPrototypeOf = __webpack_require__(670);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(673);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(678);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _ParseObject2 = __webpack_require__(687);
	
	var _ParseObject3 = _interopRequireDefault(_ParseObject2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var Installation = function (_ParseObject) {
	  (0, _inherits3.default)(Installation, _ParseObject);
	
	  function Installation(attributes) {
	    (0, _classCallCheck3.default)(this, Installation);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Installation.__proto__ || (0, _getPrototypeOf2.default)(Installation)).call(this, '_Installation'));
	
	    if (attributes && (typeof attributes === 'undefined' ? 'undefined' : (0, _typeof3.default)(attributes)) === 'object') {
	      if (!_this.set(attributes || {})) {
	        throw new Error('Can\'t create an invalid Session');
	      }
	    }
	    return _this;
	  }
	
	  return Installation;
	}(_ParseObject3.default); /**
	                           * Copyright (c) 2015-present, Parse, LLC.
	                           * All rights reserved.
	                           *
	                           * This source code is licensed under the BSD-style license found in the
	                           * LICENSE file in the root directory of this source tree. An additional grant
	                           * of patent rights can be found in the PATENTS file in the same directory.
	                           *
	                           * 
	                           */
	
	exports.default = Installation;
	
	_ParseObject3.default.registerSubclass('_Installation', Installation);

/***/ },
/* 743 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports.send = send;
	
	var _CoreManager = __webpack_require__(693);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _ParseQuery = __webpack_require__(708);
	
	var _ParseQuery2 = _interopRequireDefault(_ParseQuery);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Contains functions to deal with Push in Parse.
	 * @class Parse.Push
	 * @static
	 */
	
	/**
	 * Sends a push notification.
	 * @method send
	 * @param {Object} data -  The data of the push notification.  Valid fields
	 * are:
	 *   <ol>
	 *     <li>channels - An Array of channels to push to.</li>
	 *     <li>push_time - A Date object for when to send the push.</li>
	 *     <li>expiration_time -  A Date object for when to expire
	 *         the push.</li>
	 *     <li>expiration_interval - The seconds from now to expire the push.</li>
	 *     <li>where - A Parse.Query over Parse.Installation that is used to match
	 *         a set of installations to push to.</li>
	 *     <li>data - The data to send as part of the push</li>
	 *   <ol>
	 * @param {Object} options An object that has an optional success function,
	 * that takes no arguments and will be called on a successful push, and
	 * an error function that takes a Parse.Error and will be called if the push
	 * failed.
	 * @return {Parse.Promise} A promise that is fulfilled when the push request
	 *     completes.
	 */
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function send(data, options) {
	  options = options || {};
	
	  if (data.where && data.where instanceof _ParseQuery2.default) {
	    data.where = data.where.toJSON().where;
	  }
	
	  if (data.push_time && (0, _typeof3.default)(data.push_time) === 'object') {
	    data.push_time = data.push_time.toJSON();
	  }
	
	  if (data.expiration_time && (0, _typeof3.default)(data.expiration_time) === 'object') {
	    data.expiration_time = data.expiration_time.toJSON();
	  }
	
	  if (data.expiration_time && data.expiration_interval) {
	    throw new Error('expiration_time and expiration_interval cannot both be set.');
	  }
	
	  return _CoreManager2.default.getPushController().send(data, {
	    useMasterKey: options.useMasterKey
	  })._thenRunCallbacks(options);
	}
	
	var DefaultController = {
	  send: function (data, options) {
	    var RESTController = _CoreManager2.default.getRESTController();
	
	    var request = RESTController.request('POST', 'push', data, { useMasterKey: !!options.useMasterKey });
	
	    return request._thenRunCallbacks(options);
	  }
	};
	
	_CoreManager2.default.setPushController(DefaultController);

/***/ },
/* 744 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventEmitter = __webpack_require__(745);
	
	var _EventEmitter2 = _interopRequireDefault(_EventEmitter);
	
	var _LiveQueryClient = __webpack_require__(747);
	
	var _LiveQueryClient2 = _interopRequireDefault(_LiveQueryClient);
	
	var _CoreManager = __webpack_require__(693);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function open() {
	  var LiveQueryController = _CoreManager2.default.getLiveQueryController();
	  LiveQueryController.open();
	}
	
	function close() {
	  var LiveQueryController = _CoreManager2.default.getLiveQueryController();
	  LiveQueryController.close();
	}
	
	/**
	 *
	 * We expose three events to help you monitor the status of the WebSocket connection:
	 *
	 * <p>Open - When we establish the WebSocket connection to the LiveQuery server, you'll get this event.
	 * 
	 * <pre>
	 * Parse.LiveQuery.on('open', () => {
	 * 
	 * });</pre></p>
	 *
	 * <p>Close - When we lose the WebSocket connection to the LiveQuery server, you'll get this event.
	 * 
	 * <pre>
	 * Parse.LiveQuery.on('close', () => {
	 * 
	 * });</pre></p>
	 *
	 * <p>Error - When some network error or LiveQuery server error happens, you'll get this event.
	 * 
	 * <pre>
	 * Parse.LiveQuery.on('error', (error) => {
	 * 
	 * });</pre></p>
	 * 
	 * @class Parse.LiveQuery
	 * @static
	 * 
	 */
	var LiveQuery = new _EventEmitter2.default();
	
	/**
	 * After open is called, the LiveQuery will try to send a connect request
	 * to the LiveQuery server.
	 * 
	 * @method open
	 */
	LiveQuery.open = open;
	
	/**
	 * When you're done using LiveQuery, you can call Parse.LiveQuery.close().
	 * This function will close the WebSocket connection to the LiveQuery server,
	 * cancel the auto reconnect, and unsubscribe all subscriptions based on it.
	 * If you call query.subscribe() after this, we'll create a new WebSocket
	 * connection to the LiveQuery server.
	 * 
	 * @method close
	 */
	
	LiveQuery.close = close;
	// Register a default onError callback to make sure we do not crash on error
	LiveQuery.on('error', function () {});
	
	exports.default = LiveQuery;
	
	function getSessionToken() {
	  var controller = _CoreManager2.default.getUserController();
	  return controller.currentUserAsync().then(function (currentUser) {
	    return currentUser ? currentUser.getSessionToken() : undefined;
	  });
	}
	
	function getLiveQueryClient() {
	  return _CoreManager2.default.getLiveQueryController().getDefaultLiveQueryClient();
	}
	
	var defaultLiveQueryClient = void 0;
	var DefaultLiveQueryController = {
	  setDefaultLiveQueryClient: function (liveQueryClient) {
	    defaultLiveQueryClient = liveQueryClient;
	  },
	  getDefaultLiveQueryClient: function () {
	    if (defaultLiveQueryClient) {
	      return _ParsePromise2.default.as(defaultLiveQueryClient);
	    }
	
	    return getSessionToken().then(function (sessionToken) {
	      var liveQueryServerURL = _CoreManager2.default.get('LIVEQUERY_SERVER_URL');
	
	      if (liveQueryServerURL && liveQueryServerURL.indexOf('ws') !== 0) {
	        throw new Error('You need to set a proper Parse LiveQuery server url before using LiveQueryClient');
	      }
	
	      // If we can not find Parse.liveQueryServerURL, we try to extract it from Parse.serverURL
	      if (!liveQueryServerURL) {
	        var tempServerURL = _CoreManager2.default.get('SERVER_URL');
	        var protocol = 'ws://';
	        // If Parse is being served over SSL/HTTPS, ensure LiveQuery Server uses 'wss://' prefix
	        if (tempServerURL.indexOf('https') === 0) {
	          protocol = 'wss://';
	        }
	        var host = tempServerURL.replace(/^https?:\/\//, '');
	        liveQueryServerURL = protocol + host;
	        _CoreManager2.default.set('LIVEQUERY_SERVER_URL', liveQueryServerURL);
	      }
	
	      var applicationId = _CoreManager2.default.get('APPLICATION_ID');
	      var javascriptKey = _CoreManager2.default.get('JAVASCRIPT_KEY');
	      var masterKey = _CoreManager2.default.get('MASTER_KEY');
	      // Get currentUser sessionToken if possible
	      defaultLiveQueryClient = new _LiveQueryClient2.default({
	        applicationId: applicationId,
	        serverURL: liveQueryServerURL,
	        javascriptKey: javascriptKey,
	        masterKey: masterKey,
	        sessionToken: sessionToken
	      });
	      // Register a default onError callback to make sure we do not crash on error
	      // Cannot create these events on a nested way because of EventEmiiter from React Native
	      defaultLiveQueryClient.on('error', function (error) {
	        LiveQuery.emit('error', error);
	      });
	      defaultLiveQueryClient.on('open', function () {
	        LiveQuery.emit('open');
	      });
	      defaultLiveQueryClient.on('close', function () {
	        LiveQuery.emit('close');
	      });
	
	      return defaultLiveQueryClient;
	    });
	  },
	  open: function () {
	    var _this = this;
	
	    getLiveQueryClient().then(function (liveQueryClient) {
	      _this.resolve(liveQueryClient.open());
	    });
	  },
	  close: function () {
	    var _this2 = this;
	
	    getLiveQueryClient().then(function (liveQueryClient) {
	      _this2.resolve(liveQueryClient.close());
	    });
	  },
	  subscribe: function (query) {
	    var _this3 = this;
	
	    var subscriptionWrap = new _EventEmitter2.default();
	
	    getLiveQueryClient().then(function (liveQueryClient) {
	      if (liveQueryClient.shouldOpen()) {
	        liveQueryClient.open();
	      }
	      var promiseSessionToken = getSessionToken();
	      // new event emitter
	      return promiseSessionToken.then(function (sessionToken) {
	
	        var subscription = liveQueryClient.subscribe(query, sessionToken);
	        // enter, leave create, etc
	
	        subscriptionWrap.id = subscription.id;
	        subscriptionWrap.query = subscription.query;
	        subscriptionWrap.sessionToken = subscription.sessionToken;
	        subscriptionWrap.unsubscribe = subscription.unsubscribe;
	        // Cannot create these events on a nested way because of EventEmiiter from React Native
	        subscription.on('open', function () {
	          subscriptionWrap.emit('open');
	        });
	        subscription.on('create', function (object) {
	          subscriptionWrap.emit('create', object);
	        });
	        subscription.on('update', function (object) {
	          subscriptionWrap.emit('update', object);
	        });
	        subscription.on('enter', function (object) {
	          subscriptionWrap.emit('enter', object);
	        });
	        subscription.on('leave', function (object) {
	          subscriptionWrap.emit('leave', object);
	        });
	        subscription.on('delete', function (object) {
	          subscriptionWrap.emit('delete', object);
	        });
	
	        _this3.resolve();
	      });
	    });
	    return subscriptionWrap;
	  },
	  unsubscribe: function (subscription) {
	    var _this4 = this;
	
	    getLiveQueryClient().then(function (liveQueryClient) {
	      _this4.resolve(liveQueryClient.unsubscribe(subscription));
	    });
	  },
	  _clearCachedDefaultClient: function () {
	    defaultLiveQueryClient = null;
	  }
	};
	
	_CoreManager2.default.setLiveQueryController(DefaultLiveQueryController);

/***/ },
/* 745 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * This is a simple wrapper to unify EventEmitter implementations across platforms.
	 */
	
	module.exports = __webpack_require__(746).EventEmitter;
	var EventEmitter;

/***/ },
/* 746 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 747 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(591);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _getIterator2 = __webpack_require__(697);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _stringify = __webpack_require__(691);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _map = __webpack_require__(748);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _getPrototypeOf = __webpack_require__(670);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(665);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(673);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(678);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _EventEmitter2 = __webpack_require__(745);
	
	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);
	
	var _ParsePromise = __webpack_require__(696);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _ParseObject = __webpack_require__(687);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _LiveQuerySubscription = __webpack_require__(756);
	
	var _LiveQuerySubscription2 = _interopRequireDefault(_LiveQuerySubscription);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	// The LiveQuery client inner state
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	var CLIENT_STATE = {
	  INITIALIZED: 'initialized',
	  CONNECTING: 'connecting',
	  CONNECTED: 'connected',
	  CLOSED: 'closed',
	  RECONNECTING: 'reconnecting',
	  DISCONNECTED: 'disconnected'
	};
	
	// The event type the LiveQuery client should sent to server
	var OP_TYPES = {
	  CONNECT: 'connect',
	  SUBSCRIBE: 'subscribe',
	  UNSUBSCRIBE: 'unsubscribe',
	  ERROR: 'error'
	};
	
	// The event we get back from LiveQuery server
	var OP_EVENTS = {
	  CONNECTED: 'connected',
	  SUBSCRIBED: 'subscribed',
	  UNSUBSCRIBED: 'unsubscribed',
	  ERROR: 'error',
	  CREATE: 'create',
	  UPDATE: 'update',
	  ENTER: 'enter',
	  LEAVE: 'leave',
	  DELETE: 'delete'
	};
	
	// The event the LiveQuery client should emit
	var CLIENT_EMMITER_TYPES = {
	  CLOSE: 'close',
	  ERROR: 'error',
	  OPEN: 'open'
	};
	
	// The event the LiveQuery subscription should emit
	var SUBSCRIPTION_EMMITER_TYPES = {
	  OPEN: 'open',
	  CLOSE: 'close',
	  ERROR: 'error',
	  CREATE: 'create',
	  UPDATE: 'update',
	  ENTER: 'enter',
	  LEAVE: 'leave',
	  DELETE: 'delete'
	};
	
	var generateInterval = function (k) {
	  return Math.random() * Math.min(30, Math.pow(2, k) - 1) * 1000;
	};
	
	/**
	 * Creates a new LiveQueryClient.
	 * Extends events.EventEmitter
	 * <a href="https://nodejs.org/api/events.html#events_class_eventemitter">cloud functions</a>.
	 * 
	 * A wrapper of a standard WebSocket client. We add several useful methods to 
	 * help you connect/disconnect to LiveQueryServer, subscribe/unsubscribe a ParseQuery easily.
	 *
	 * javascriptKey and masterKey are used for verifying the LiveQueryClient when it tries
	 * to connect to the LiveQuery server
	 * 
	 * @class Parse.LiveQueryClient
	 * @constructor
	 * @param {Object} options
	 * @param {string} options.applicationId - applicationId of your Parse app
	 * @param {string} options.serverURL - <b>the URL of your LiveQuery server</b>
	 * @param {string} options.javascriptKey (optional)
	 * @param {string} options.masterKey (optional) Your Parse Master Key. (Node.js only!)
	 * @param {string} options.sessionToken (optional)
	 *
	 *
	 * We expose three events to help you monitor the status of the LiveQueryClient.
	 *
	 * <pre>
	 * let Parse = require('parse/node');
	 * let LiveQueryClient = Parse.LiveQueryClient;
	 * let client = new LiveQueryClient({
	 *   applicationId: '',
	 *   serverURL: '',
	 *   javascriptKey: '',
	 *   masterKey: ''
	 *  });
	 * </pre>
	 * 
	 * Open - When we establish the WebSocket connection to the LiveQuery server, you'll get this event.
	 * <pre>
	 * client.on('open', () => {
	 * 
	 * });</pre>
	 *
	 * Close - When we lose the WebSocket connection to the LiveQuery server, you'll get this event.
	 * <pre>
	 * client.on('close', () => {
	 * 
	 * });</pre>
	 *
	 * Error - When some network error or LiveQuery server error happens, you'll get this event.
	 * <pre>
	 * client.on('error', (error) => {
	 * 
	 * });</pre>
	 * 
	 * 
	 */
	
	var LiveQueryClient = function (_EventEmitter) {
	  (0, _inherits3.default)(LiveQueryClient, _EventEmitter);
	
	  function LiveQueryClient(_ref) {
	    var applicationId = _ref.applicationId;
	    var serverURL = _ref.serverURL;
	    var javascriptKey = _ref.javascriptKey;
	    var masterKey = _ref.masterKey;
	    var sessionToken = _ref.sessionToken;
	    (0, _classCallCheck3.default)(this, LiveQueryClient);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (LiveQueryClient.__proto__ || (0, _getPrototypeOf2.default)(LiveQueryClient)).call(this));
	
	    if (!serverURL || serverURL.indexOf('ws') !== 0) {
	      throw new Error('You need to set a proper Parse LiveQuery server url before using LiveQueryClient');
	    }
	
	    _this.reconnectHandle = null;
	    _this.attempts = 1;;
	    _this.id = 0;
	    _this.requestId = 1;
	    _this.serverURL = serverURL;
	    _this.applicationId = applicationId;
	    _this.javascriptKey = javascriptKey;
	    _this.masterKey = masterKey;
	    _this.sessionToken = sessionToken;
	    _this.connectPromise = new _ParsePromise2.default();
	    _this.subscriptions = new _map2.default();
	    _this.state = CLIENT_STATE.INITIALIZED;
	    return _this;
	  }
	
	  (0, _createClass3.default)(LiveQueryClient, [{
	    key: 'shouldOpen',
	    value: function () {
	      return this.state === CLIENT_STATE.INITIALIZED || this.state === CLIENT_STATE.DISCONNECTED;
	    }
	
	    /**
	     * Subscribes to a ParseQuery
	     * 
	     * If you provide the sessionToken, when the LiveQuery server gets ParseObject's 
	     * updates from parse server, it'll try to check whether the sessionToken fulfills 
	     * the ParseObject's ACL. The LiveQuery server will only send updates to clients whose 
	     * sessionToken is fit for the ParseObject's ACL. You can check the LiveQuery protocol
	     * <a href="https://github.com/ParsePlatform/parse-server/wiki/Parse-LiveQuery-Protocol-Specification">here</a> for more details. The subscription you get is the same subscription you get 
	     * from our Standard API.
	     * 
	     * @method subscribe
	     * @param {Object} query - the ParseQuery you want to subscribe to
	     * @param {string} sessionToken (optional) 
	     * @return {Object} subscription
	     */
	
	  }, {
	    key: 'subscribe',
	    value: function (query, sessionToken) {
	      var _this2 = this;
	
	      if (!query) {
	        return;
	      }
	      var where = query.toJSON().where;
	      var className = query.className;
	      var subscribeRequest = {
	        op: OP_TYPES.SUBSCRIBE,
	        requestId: this.requestId,
	        query: {
	          className: className,
	          where: where
	        }
	      };
	
	      if (sessionToken) {
	        subscribeRequest.sessionToken = sessionToken;
	      }
	
	      var subscription = new _LiveQuerySubscription2.default(this.requestId, query, sessionToken);
	      this.subscriptions.set(this.requestId, subscription);
	      this.requestId += 1;
	      this.connectPromise.then(function () {
	        _this2.socket.send((0, _stringify2.default)(subscribeRequest));
	      });
	
	      // adding listener so process does not crash
	      // best practice is for developer to register their own listener
	      subscription.on('error', function () {});
	
	      return subscription;
	    }
	
	    /**
	     * After calling unsubscribe you'll stop receiving events from the subscription object.
	     * 
	     * @method unsubscribe
	     * @param {Object} subscription - subscription you would like to unsubscribe from.
	     */
	
	  }, {
	    key: 'unsubscribe',
	    value: function (subscription) {
	      var _this3 = this;
	
	      if (!subscription) {
	        return;
	      }
	
	      this.subscriptions.delete(subscription.id);
	      var unsubscribeRequest = {
	        op: OP_TYPES.UNSUBSCRIBE,
	        requestId: subscription.id
	      };
	      this.connectPromise.then(function () {
	        _this3.socket.send((0, _stringify2.default)(unsubscribeRequest));
	      });
	    }
	
	    /**
	     * After open is called, the LiveQueryClient will try to send a connect request
	     * to the LiveQuery server.
	     * 
	     * @method open
	     */
	
	  }, {
	    key: 'open',
	    value: function () {
	      var _this4 = this;
	
	      var WebSocketImplementation = this._getWebSocketImplementation();
	      if (!WebSocketImplementation) {
	        this.emit(CLIENT_EMMITER_TYPES.ERROR, 'Can not find WebSocket implementation');
	        return;
	      }
	
	      if (this.state !== CLIENT_STATE.RECONNECTING) {
	        this.state = CLIENT_STATE.CONNECTING;
	      }
	
	      // Get WebSocket implementation
	      this.socket = new WebSocketImplementation(this.serverURL);
	
	      // Bind WebSocket callbacks
	      this.socket.onopen = function () {
	        _this4._handleWebSocketOpen();
	      };
	
	      this.socket.onmessage = function (event) {
	        _this4._handleWebSocketMessage(event);
	      };
	
	      this.socket.onclose = function () {
	        _this4._handleWebSocketClose();
	      };
	
	      this.socket.onerror = function (error) {
	        _this4._handleWebSocketError(error);
	      };
	    }
	  }, {
	    key: 'resubscribe',
	    value: function () {
	      var _this5 = this;
	
	      this.subscriptions.forEach(function (subscription, requestId) {
	        var query = subscription.query;
	        var where = query.toJSON().where;
	        var className = query.className;
	        var sessionToken = subscription.sessionToken;
	        var subscribeRequest = {
	          op: OP_TYPES.SUBSCRIBE,
	          requestId: requestId,
	          query: {
	            className: className,
	            where: where
	          }
	        };
	
	        if (sessionToken) {
	          subscribeRequest.sessionToken = sessionToken;
	        }
	
	        _this5.connectPromise.then(function () {
	          _this5.socket.send((0, _stringify2.default)(subscribeRequest));
	        });
	      });
	    }
	
	    /**
	     * This method will close the WebSocket connection to this LiveQueryClient, 
	     * cancel the auto reconnect and unsubscribe all subscriptions based on it.
	     * 
	     * @method close
	     */
	
	  }, {
	    key: 'close',
	    value: function () {
	      if (this.state === CLIENT_STATE.INITIALIZED || this.state === CLIENT_STATE.DISCONNECTED) {
	        return;
	      }
	      this.state = CLIENT_STATE.DISCONNECTED;
	      this.socket.close();
	      // Notify each subscription about the close
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)(this.subscriptions.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var subscription = _step.value;
	
	          subscription.emit(SUBSCRIPTION_EMMITER_TYPES.CLOSE);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      this._handleReset();
	      this.emit(CLIENT_EMMITER_TYPES.CLOSE);
	    }
	  }, {
	    key: '_getWebSocketImplementation',
	    value: function () {
	      return typeof WebSocket === 'function' || (typeof WebSocket === 'undefined' ? 'undefined' : (0, _typeof3.default)(WebSocket)) === 'object' ? WebSocket : null;
	    }
	
	    // ensure we start with valid state if connect is called again after close
	
	  }, {
	    key: '_handleReset',
	    value: function () {
	      this.attempts = 1;;
	      this.id = 0;
	      this.requestId = 1;
	      this.connectPromise = new _ParsePromise2.default();
	      this.subscriptions = new _map2.default();
	    }
	  }, {
	    key: '_handleWebSocketOpen',
	    value: function () {
	      this.attempts = 1;
	      var connectRequest = {
	        op: OP_TYPES.CONNECT,
	        applicationId: this.applicationId,
	        javascriptKey: this.javascriptKey,
	        masterKey: this.masterKey,
	        sessionToken: this.sessionToken
	      };
	      this.socket.send((0, _stringify2.default)(connectRequest));
	    }
	  }, {
	    key: '_handleWebSocketMessage',
	    value: function (event) {
	      var data = event.data;
	      if (typeof data === 'string') {
	        data = JSON.parse(data);
	      }
	      var subscription = null;
	      if (data.requestId) {
	        subscription = this.subscriptions.get(data.requestId);
	      }
	      switch (data.op) {
	        case OP_EVENTS.CONNECTED:
	          if (this.state === CLIENT_STATE.RECONNECTING) {
	            this.resubscribe();
	          }
	          this.emit(CLIENT_EMMITER_TYPES.OPEN);
	          this.id = data.clientId;
	          this.connectPromise.resolve();
	          this.state = CLIENT_STATE.CONNECTED;
	          break;
	        case OP_EVENTS.SUBSCRIBED:
	          if (subscription) {
	            subscription.emit(SUBSCRIPTION_EMMITER_TYPES.OPEN);
	          }
	          break;
	        case OP_EVENTS.ERROR:
	          if (data.requestId) {
	            if (subscription) {
	              subscription.emit(SUBSCRIPTION_EMMITER_TYPES.ERROR, data.error);
	            }
	          } else {
	            this.emit(CLIENT_EMMITER_TYPES.ERROR, data.error);
	          }
	          break;
	        case OP_EVENTS.UNSUBSCRIBED:
	          // We have already deleted subscription in unsubscribe(), do nothing here
	          break;
	        default:
	          // create, update, enter, leave, delete cases
	          var className = data.object.className;
	          // Delete the extrea __type and className fields during transfer to full JSON
	          delete data.object.__type;
	          delete data.object.className;
	          var parseObject = new _ParseObject2.default(className);
	          parseObject._finishFetch(data.object);
	          if (!subscription) {
	            break;
	          }
	          subscription.emit(data.op, parseObject);
	      }
	    }
	  }, {
	    key: '_handleWebSocketClose',
	    value: function () {
	      if (this.state === CLIENT_STATE.DISCONNECTED) {
	        return;
	      }
	      this.state = CLIENT_STATE.CLOSED;
	      this.emit(CLIENT_EMMITER_TYPES.CLOSE);
	      // Notify each subscription about the close
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = (0, _getIterator3.default)(this.subscriptions.values()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var subscription = _step2.value;
	
	          subscription.emit(SUBSCRIPTION_EMMITER_TYPES.CLOSE);
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	
	      this._handleReconnect();
	    }
	  }, {
	    key: '_handleWebSocketError',
	    value: function (error) {
	      this.emit(CLIENT_EMMITER_TYPES.ERROR, error);
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;
	
	      try {
	        for (var _iterator3 = (0, _getIterator3.default)(this.subscriptions.values()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var subscription = _step3.value;
	
	          subscription.emit(SUBSCRIPTION_EMMITER_TYPES.ERROR);
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	
	      this._handleReconnect();
	    }
	  }, {
	    key: '_handleReconnect',
	    value: function () {
	      var _this6 = this;
	
	      // if closed or currently reconnecting we stop attempting to reconnect
	      if (this.state === CLIENT_STATE.DISCONNECTED) {
	        return;
	      }
	
	      this.state = CLIENT_STATE.RECONNECTING;
	      var time = generateInterval(this.attempts);
	
	      // handle case when both close/error occur at frequent rates we ensure we do not reconnect unnecessarily.
	      // we're unable to distinguish different between close/error when we're unable to reconnect therefore
	      // we try to reonnect in both cases
	      // server side ws and browser WebSocket behave differently in when close/error get triggered
	
	      if (this.reconnectHandle) {
	        clearTimeout(this.reconnectHandle);
	      }
	
	      this.reconnectHandle = setTimeout(function () {
	        _this6.attempts++;
	        _this6.connectPromise = new _ParsePromise2.default();
	        _this6.open();
	      }.bind(this), time);
	    }
	  }]);
	  return LiveQueryClient;
	}(_EventEmitter3.default);
	
	exports.default = LiveQueryClient;

/***/ },
/* 748 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(749), __esModule: true };

/***/ },
/* 749 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(656);
	__webpack_require__(594);
	__webpack_require__(638);
	__webpack_require__(750);
	__webpack_require__(753);
	module.exports = __webpack_require__(602).Map;

/***/ },
/* 750 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(751);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(729)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 751 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(606).f
	  , create      = __webpack_require__(619)
	  , redefineAll = __webpack_require__(724)
	  , ctx         = __webpack_require__(603)
	  , anInstance  = __webpack_require__(725)
	  , defined     = __webpack_require__(597)
	  , forOf       = __webpack_require__(726)
	  , $iterDefine = __webpack_require__(598)
	  , step        = __webpack_require__(641)
	  , setSpecies  = __webpack_require__(752)
	  , DESCRIPTORS = __webpack_require__(610)
	  , fastKey     = __webpack_require__(646).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 752 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(601)
	  , core        = __webpack_require__(602)
	  , dP          = __webpack_require__(606)
	  , DESCRIPTORS = __webpack_require__(610)
	  , SPECIES     = __webpack_require__(635)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 753 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(600);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(754)('Map')});

/***/ },
/* 754 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(701)
	  , from    = __webpack_require__(755);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 755 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(726);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 756 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(670);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(664);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(665);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(673);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(678);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _EventEmitter2 = __webpack_require__(745);
	
	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);
	
	var _CoreManager = __webpack_require__(693);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Creates a new LiveQuery Subscription.
	 * Extends events.EventEmitter
	 * <a href="https://nodejs.org/api/events.html#events_class_eventemitter">cloud functions</a>.
	 * 
	 * @constructor
	 * @param {string} id - subscription id
	 * @param {string} query - query to subscribe to
	 * @param {string} sessionToken - optional session token
	 *
	 * <p>Open Event - When you call query.subscribe(), we send a subscribe request to 
	 * the LiveQuery server, when we get the confirmation from the LiveQuery server,
	 * this event will be emitted. When the client loses WebSocket connection to the
	 * LiveQuery server, we will try to auto reconnect the LiveQuery server. If we
	 * reconnect the LiveQuery server and successfully resubscribe the ParseQuery,
	 * you'll also get this event.
	 * 
	 * <pre>
	 * subscription.on('open', () => {
	 * 
	 * });</pre></p>
	 *
	 * <p>Create Event - When a new ParseObject is created and it fulfills the ParseQuery you subscribe,
	 * you'll get this event. The object is the ParseObject which is created.
	 * 
	 * <pre>
	 * subscription.on('create', (object) => {
	 * 
	 * });</pre></p>
	 *
	 * <p>Update Event - When an existing ParseObject which fulfills the ParseQuery you subscribe 
	 * is updated (The ParseObject fulfills the ParseQuery before and after changes),
	 * you'll get this event. The object is the ParseObject which is updated.
	 * Its content is the latest value of the ParseObject.
	 * 
	 * <pre>
	 * subscription.on('update', (object) => {
	 * 
	 * });</pre></p>
	 * 
	 * <p>Enter Event - When an existing ParseObject's old value doesn't fulfill the ParseQuery
	 * but its new value fulfills the ParseQuery, you'll get this event. The object is the
	 * ParseObject which enters the ParseQuery. Its content is the latest value of the ParseObject.
	 * 
	 * <pre>
	 * subscription.on('enter', (object) => {
	 * 
	 * });</pre></p>
	 *
	 *
	 * <p>Update Event - When an existing ParseObject's old value fulfills the ParseQuery but its new value
	 * doesn't fulfill the ParseQuery, you'll get this event. The object is the ParseObject
	 * which leaves the ParseQuery. Its content is the latest value of the ParseObject.
	 * 
	 * <pre>
	 * subscription.on('leave', (object) => {
	 * 
	 * });</pre></p>
	 *
	 *
	 * <p>Delete Event - When an existing ParseObject which fulfills the ParseQuery is deleted, you'll
	 * get this event. The object is the ParseObject which is deleted.
	 * 
	 * <pre>
	 * subscription.on('delete', (object) => {
	 * 
	 * });</pre></p>
	 *
	 *
	 * <p>Close Event - When the client loses the WebSocket connection to the LiveQuery
	 * server and we stop receiving events, you'll get this event.
	 * 
	 * <pre>
	 * subscription.on('close', () => {
	 * 
	 * });</pre></p>
	 *
	 * 
	 */
	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	var Subscription = function (_EventEmitter) {
	  (0, _inherits3.default)(Subscription, _EventEmitter);
	
	  function Subscription(id, query, sessionToken) {
	    (0, _classCallCheck3.default)(this, Subscription);
	
	    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Subscription.__proto__ || (0, _getPrototypeOf2.default)(Subscription)).call(this));
	
	    _this2.id = id;
	    _this2.query = query;
	    _this2.sessionToken = sessionToken;
	    return _this2;
	  }
	
	  /**
	   * @method unsubscribe
	   */
	
	  (0, _createClass3.default)(Subscription, [{
	    key: 'unsubscribe',
	    value: function () {
	      var _this3 = this;
	
	      var _this = this;
	      _CoreManager2.default.getLiveQueryController().getDefaultLiveQueryClient().then(function (liveQueryClient) {
	        liveQueryClient.unsubscribe(_this);
	        _this.emit('close');
	        _this3.resolve();
	      });
	    }
	  }]);
	  return Subscription;
	}(_EventEmitter3.default);
	
	exports.default = Subscription;

/***/ },
/* 757 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRouter = __webpack_require__(331);
	
	var _reactRouterRedux = __webpack_require__(394);
	
	var _reduxLogger = __webpack_require__(758);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reduxObservable = __webpack_require__(764);
	
	var _configureStore = __webpack_require__(809);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	var _model = __webpack_require__(810);
	
	var _model2 = _interopRequireDefault(_model);
	
	var _controller = __webpack_require__(811);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ownMiddleware = [];
	var enhancers = [];
	
	ownMiddleware.push((0, _reduxObservable.createEpicMiddleware)(_controller2.default));
	ownMiddleware.push((0, _reactRouterRedux.routerMiddleware)(_reactRouter.hashHistory));
	
	if (process.env.NODE_ENV !== 'production') {
	  ownMiddleware.push((0, _reduxLogger2.default)({ collapsed: true }));
	  enhancers.push(window.devToolsExtension ? window.devToolsExtension() : function (f) {
	    return f;
	  });
	}
	
	var initialState = JSON.parse(document.body.getAttribute('data-redux-state'));
	if (!initialState) {
	  initialState = {};
	}
	
	var store = (0, _configureStore2.default)({
	  initialState: initialState,
	  ownMiddleware: ownMiddleware,
	  enhancers: enhancers
	}, _model2.default);
	
	exports.default = store;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "store.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 758 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _core = __webpack_require__(759);
	
	var _helpers = __webpack_require__(760);
	
	var _defaults = __webpack_require__(763);
	
	var _defaults2 = _interopRequireDefault(_defaults);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates logger with following options
	 *
	 * @namespace
	 * @param {object} options - options for logger
	 * @param {string | function | object} options.level - console[level]
	 * @param {boolean} options.duration - print duration of each action?
	 * @param {boolean} options.timestamp - print timestamp with each action?
	 * @param {object} options.colors - custom colors
	 * @param {object} options.logger - implementation of the `console` API
	 * @param {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @param {boolean} options.collapsed - is group collapsed?
	 * @param {boolean} options.predicate - condition which resolves logger behavior
	 * @param {function} options.stateTransformer - transform state before print
	 * @param {function} options.actionTransformer - transform action before print
	 * @param {function} options.errorTransformer - transform error before print
	 *
	 * @returns {function} logger middleware
	 */
	function createLogger() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var loggerOptions = _extends({}, _defaults2.default, options);
	
	  var logger = loggerOptions.logger,
	      transformer = loggerOptions.transformer,
	      stateTransformer = loggerOptions.stateTransformer,
	      errorTransformer = loggerOptions.errorTransformer,
	      predicate = loggerOptions.predicate,
	      logErrors = loggerOptions.logErrors,
	      diffPredicate = loggerOptions.diffPredicate;
	
	  // Return if 'console' object is not defined
	
	  if (typeof logger === 'undefined') {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }
	
	  if (transformer) {
	    console.error('Option \'transformer\' is deprecated, use \'stateTransformer\' instead!'); // eslint-disable-line no-console
	  }
	
	  var logBuffer = [];
	
	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // Exit early if predicate function returns 'false'
	        if (typeof predicate === 'function' && !predicate(getState, action)) {
	          return next(action);
	        }
	
	        var logEntry = {};
	        logBuffer.push(logEntry);
	
	        logEntry.started = _helpers.timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;
	
	        var returnedValue = void 0;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }
	
	        logEntry.took = _helpers.timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());
	
	        var diff = loggerOptions.diff && typeof diffPredicate === 'function' ? diffPredicate(getState, action) : loggerOptions.diff;
	
	        (0, _core.printBuffer)(logBuffer, _extends({}, loggerOptions, { diff: diff }));
	        logBuffer.length = 0;
	
	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}
	
	exports.default = createLogger;
	module.exports = exports['default'];

/***/ },
/* 759 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.printBuffer = printBuffer;
	
	var _helpers = __webpack_require__(760);
	
	var _diff = __webpack_require__(761);
	
	var _diff2 = _interopRequireDefault(_diff);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * Get log level string based on supplied params
	 *
	 * @param {string | function | object} level - console[level]
	 * @param {object} action - selected action
	 * @param {array} payload - selected payload
	 * @param {string} type - log entry type
	 *
	 * @returns {string} level
	 */
	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === 'undefined' ? 'undefined' : _typeof(level)) {
	    case 'object':
	      return typeof level[type] === 'function' ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case 'function':
	      return level(action);
	    default:
	      return level;
	  }
	}
	
	function defaultTitleFormatter(options) {
	  var timestamp = options.timestamp,
	      duration = options.duration;
	
	
	  return function (action, time, took) {
	    var parts = ['action'];
	
	    if (timestamp) parts.push('@ ' + time);
	    parts.push(String(action.type));
	    if (duration) parts.push('(in ' + took.toFixed(2) + ' ms)');
	
	    return parts.join(' ');
	  };
	}
	
	function printBuffer(buffer, options) {
	  var logger = options.logger,
	      actionTransformer = options.actionTransformer,
	      _options$titleFormatt = options.titleFormatter,
	      titleFormatter = _options$titleFormatt === undefined ? defaultTitleFormatter(options) : _options$titleFormatt,
	      collapsed = options.collapsed,
	      colors = options.colors,
	      level = options.level,
	      diff = options.diff;
	
	
	  buffer.forEach(function (logEntry, key) {
	    var started = logEntry.started,
	        startedTime = logEntry.startedTime,
	        action = logEntry.action,
	        prevState = logEntry.prevState,
	        error = logEntry.error;
	    var took = logEntry.took,
	        nextState = logEntry.nextState;
	
	    var nextEntry = buffer[key + 1];
	
	    if (nextEntry) {
	      nextState = nextEntry.prevState;
	      took = nextEntry.started - started;
	    }
	
	    // Message
	    var formattedAction = actionTransformer(action);
	    var isCollapsed = typeof collapsed === 'function' ? collapsed(function () {
	      return nextState;
	    }, action, logEntry) : collapsed;
	
	    var formattedTime = (0, _helpers.formatTime)(startedTime);
	    var titleCSS = colors.title ? 'color: ' + colors.title(formattedAction) + ';' : null;
	    var title = titleFormatter(formattedAction, formattedTime, took);
	
	    // Render
	    try {
	      if (isCollapsed) {
	        if (colors.title) logger.groupCollapsed('%c ' + title, titleCSS);else logger.groupCollapsed(title);
	      } else {
	        if (colors.title) logger.group('%c ' + title, titleCSS);else logger.group(title);
	      }
	    } catch (e) {
	      logger.log(title);
	    }
	
	    var prevStateLevel = getLogLevel(level, formattedAction, [prevState], 'prevState');
	    var actionLevel = getLogLevel(level, formattedAction, [formattedAction], 'action');
	    var errorLevel = getLogLevel(level, formattedAction, [error, prevState], 'error');
	    var nextStateLevel = getLogLevel(level, formattedAction, [nextState], 'nextState');
	
	    if (prevStateLevel) {
	      if (colors.prevState) logger[prevStateLevel]('%c prev state', 'color: ' + colors.prevState(prevState) + '; font-weight: bold', prevState);else logger[prevStateLevel]('prev state', prevState);
	    }
	
	    if (actionLevel) {
	      if (colors.action) logger[actionLevel]('%c action', 'color: ' + colors.action(formattedAction) + '; font-weight: bold', formattedAction);else logger[actionLevel]('action', formattedAction);
	    }
	
	    if (error && errorLevel) {
	      if (colors.error) logger[errorLevel]('%c error', 'color: ' + colors.error(error, prevState) + '; font-weight: bold', error);else logger[errorLevel]('error', error);
	    }
	
	    if (nextStateLevel) {
	      if (colors.nextState) logger[nextStateLevel]('%c next state', 'color: ' + colors.nextState(nextState) + '; font-weight: bold', nextState);else logger[nextStateLevel]('next state', nextState);
	    }
	
	    if (diff) {
	      (0, _diff2.default)(prevState, nextState, logger, isCollapsed);
	    }
	
	    try {
	      logger.groupEnd();
	    } catch (e) {
	      logger.log('\u2014\u2014 log end \u2014\u2014');
	    }
	  });
	}

/***/ },
/* 760 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var repeat = exports.repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	
	var pad = exports.pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	
	var formatTime = exports.formatTime = function formatTime(time) {
	  return pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};
	
	// Use performance API if it's available in order to get better precision
	var timer = exports.timer = typeof performance !== "undefined" && performance !== null && typeof performance.now === "function" ? performance : Date;

/***/ },
/* 761 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = diffLogger;
	
	var _deepDiff = __webpack_require__(762);
	
	var _deepDiff2 = _interopRequireDefault(_deepDiff);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// https://github.com/flitbit/diff#differences
	var dictionary = {
	  'E': {
	    color: '#2196F3',
	    text: 'CHANGED:'
	  },
	  'N': {
	    color: '#4CAF50',
	    text: 'ADDED:'
	  },
	  'D': {
	    color: '#F44336',
	    text: 'DELETED:'
	  },
	  'A': {
	    color: '#2196F3',
	    text: 'ARRAY:'
	  }
	};
	
	function style(kind) {
	  return 'color: ' + dictionary[kind].color + '; font-weight: bold';
	}
	
	function render(diff) {
	  var kind = diff.kind,
	      path = diff.path,
	      lhs = diff.lhs,
	      rhs = diff.rhs,
	      index = diff.index,
	      item = diff.item;
	
	
	  switch (kind) {
	    case 'E':
	      return [path.join('.'), lhs, '\u2192', rhs];
	    case 'N':
	      return [path.join('.'), rhs];
	    case 'D':
	      return [path.join('.')];
	    case 'A':
	      return [path.join('.') + '[' + index + ']', item];
	    default:
	      return [];
	  }
	}
	
	function diffLogger(prevState, newState, logger, isCollapsed) {
	  var diff = (0, _deepDiff2.default)(prevState, newState);
	
	  try {
	    if (isCollapsed) {
	      logger.groupCollapsed('diff');
	    } else {
	      logger.group('diff');
	    }
	  } catch (e) {
	    logger.log('diff');
	  }
	
	  if (diff) {
	    diff.forEach(function (elem) {
	      var kind = elem.kind;
	
	      var output = render(elem);
	
	      logger.log.apply(logger, ['%c ' + dictionary[kind].text, style(kind)].concat(_toConsumableArray(output)));
	    });
	  } else {
	    logger.log('\u2014\u2014 no diff \u2014\u2014');
	  }
	
	  try {
	    logger.groupEnd();
	  } catch (e) {
	    logger.log('\u2014\u2014 diff end \u2014\u2014 ');
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 762 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * deep-diff.
	 * Licensed under the MIT License.
	 */
	;(function(root, factory) {
	  'use strict';
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.DeepDiff = factory();
	  }
	}(this, function(undefined) {
	  'use strict';
	
	  var $scope, conflict, conflictResolution = [];
	  if (typeof global === 'object' && global) {
	    $scope = global;
	  } else if (typeof window !== 'undefined') {
	    $scope = window;
	  } else {
	    $scope = {};
	  }
	  conflict = $scope.DeepDiff;
	  if (conflict) {
	    conflictResolution.push(
	      function() {
	        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
	          $scope.DeepDiff = conflict;
	          conflict = undefined;
	        }
	      });
	  }
	
	  // nodejs compatible on server side and in the browser.
	  function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  }
	
	  function Diff(kind, path) {
	    Object.defineProperty(this, 'kind', {
	      value: kind,
	      enumerable: true
	    });
	    if (path && path.length) {
	      Object.defineProperty(this, 'path', {
	        value: path,
	        enumerable: true
	      });
	    }
	  }
	
	  function DiffEdit(path, origin, value) {
	    DiffEdit.super_.call(this, 'E', path);
	    Object.defineProperty(this, 'lhs', {
	      value: origin,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffEdit, Diff);
	
	  function DiffNew(path, value) {
	    DiffNew.super_.call(this, 'N', path);
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffNew, Diff);
	
	  function DiffDeleted(path, value) {
	    DiffDeleted.super_.call(this, 'D', path);
	    Object.defineProperty(this, 'lhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffDeleted, Diff);
	
	  function DiffArray(path, index, item) {
	    DiffArray.super_.call(this, 'A', path);
	    Object.defineProperty(this, 'index', {
	      value: index,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'item', {
	      value: item,
	      enumerable: true
	    });
	  }
	  inherits(DiffArray, Diff);
	
	  function arrayRemove(arr, from, to) {
	    var rest = arr.slice((to || from) + 1 || arr.length);
	    arr.length = from < 0 ? arr.length + from : from;
	    arr.push.apply(arr, rest);
	    return arr;
	  }
	
	  function realTypeOf(subject) {
	    var type = typeof subject;
	    if (type !== 'object') {
	      return type;
	    }
	
	    if (subject === Math) {
	      return 'math';
	    } else if (subject === null) {
	      return 'null';
	    } else if (Array.isArray(subject)) {
	      return 'array';
	    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
	      return 'date';
	    } else if (typeof subject.toString !== 'undefined' && /^\/.*\//.test(subject.toString())) {
	      return 'regexp';
	    }
	    return 'object';
	  }
	
	  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
	    path = path || [];
	    var currentPath = path.slice(0);
	    if (typeof key !== 'undefined') {
	      if (prefilter) {
	        if (typeof(prefilter) === 'function' && prefilter(currentPath, key)) { return; }
	        else if (typeof(prefilter) === 'object') {
	          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) { return; }
	          if (prefilter.normalize) {
	            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
	            if (alt) {
	              lhs = alt[0];
	              rhs = alt[1];
	            }
	          }
	        }
	      }
	      currentPath.push(key);
	    }
	
	    // Use string comparison for regexes
	    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
	      lhs = lhs.toString();
	      rhs = rhs.toString();
	    }
	
	    var ltype = typeof lhs;
	    var rtype = typeof rhs;
	    if (ltype === 'undefined') {
	      if (rtype !== 'undefined') {
	        changes(new DiffNew(currentPath, rhs));
	      }
	    } else if (rtype === 'undefined') {
	      changes(new DiffDeleted(currentPath, lhs));
	    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (Object.prototype.toString.call(lhs) === '[object Date]' && Object.prototype.toString.call(rhs) === '[object Date]' && ((lhs - rhs) !== 0)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
	      stack = stack || [];
	      if (stack.indexOf(lhs) < 0) {
	        stack.push(lhs);
	        if (Array.isArray(lhs)) {
	          var i, len = lhs.length;
	          for (i = 0; i < lhs.length; i++) {
	            if (i >= rhs.length) {
	              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
	            } else {
	              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
	            }
	          }
	          while (i < rhs.length) {
	            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
	          }
	        } else {
	          var akeys = Object.keys(lhs);
	          var pkeys = Object.keys(rhs);
	          akeys.forEach(function(k, i) {
	            var other = pkeys.indexOf(k);
	            if (other >= 0) {
	              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
	              pkeys = arrayRemove(pkeys, other);
	            } else {
	              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
	            }
	          });
	          pkeys.forEach(function(k) {
	            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
	          });
	        }
	        stack.length = stack.length - 1;
	      }
	    } else if (lhs !== rhs) {
	      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
	        changes(new DiffEdit(currentPath, lhs, rhs));
	      }
	    }
	  }
	
	  function accumulateDiff(lhs, rhs, prefilter, accum) {
	    accum = accum || [];
	    deepDiff(lhs, rhs,
	      function(diff) {
	        if (diff) {
	          accum.push(diff);
	        }
	      },
	      prefilter);
	    return (accum.length) ? accum : undefined;
	  }
	
	  function applyArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    } else {
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr = arrayRemove(arr, index);
	          break;
	        case 'E':
	        case 'N':
	          arr[index] = change.rhs;
	          break;
	      }
	    }
	    return arr;
	  }
	
	  function applyChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i = -1,
	          last = change.path ? change.path.length - 1 : 0;
	      while (++i < last) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    }
	  }
	
	  function revertArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      // the structure of the object at the index has changed...
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          delete it[change.path[i]];
	          break;
	      }
	    } else {
	      // the array item is different...
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr[index] = change.lhs;
	          break;
	        case 'E':
	          arr[index] = change.lhs;
	          break;
	        case 'N':
	          arr = arrayRemove(arr, index);
	          break;
	      }
	    }
	    return arr;
	  }
	
	  function revertChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i, u;
	      u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          // Array was modified...
	          // it will be an array...
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          // Item was deleted...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          // Item was edited...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          // Item is new...
	          delete it[change.path[i]];
	          break;
	      }
	    }
	  }
	
	  function applyDiff(target, source, filter) {
	    if (target && source) {
	      var onChange = function(change) {
	        if (!filter || filter(target, source, change)) {
	          applyChange(target, source, change);
	        }
	      };
	      deepDiff(target, source, onChange);
	    }
	  }
	
	  Object.defineProperties(accumulateDiff, {
	
	    diff: {
	      value: accumulateDiff,
	      enumerable: true
	    },
	    observableDiff: {
	      value: deepDiff,
	      enumerable: true
	    },
	    applyDiff: {
	      value: applyDiff,
	      enumerable: true
	    },
	    applyChange: {
	      value: applyChange,
	      enumerable: true
	    },
	    revertChange: {
	      value: revertChange,
	      enumerable: true
	    },
	    isConflict: {
	      value: function() {
	        return 'undefined' !== typeof conflict;
	      },
	      enumerable: true
	    },
	    noConflict: {
	      value: function() {
	        if (conflictResolution) {
	          conflictResolution.forEach(function(it) {
	            it();
	          });
	          conflictResolution = null;
	        }
	        return accumulateDiff;
	      },
	      enumerable: true
	    }
	  });
	
	  return accumulateDiff;
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 763 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  level: "log",
	  logger: console,
	  logErrors: true,
	  collapsed: undefined,
	  predicate: undefined,
	  duration: false,
	  timestamp: true,
	  stateTransformer: function stateTransformer(state) {
	    return state;
	  },
	  actionTransformer: function actionTransformer(action) {
	    return action;
	  },
	  errorTransformer: function errorTransformer(error) {
	    return error;
	  },
	  colors: {
	    title: function title() {
	      return "inherit";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  },
	  diff: false,
	  diffPredicate: undefined,
	
	  // Deprecated options
	  transformer: undefined
	};
	module.exports = exports["default"];

/***/ },
/* 764 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createEpicMiddleware = __webpack_require__(765);
	
	Object.defineProperty(exports, 'createEpicMiddleware', {
	  enumerable: true,
	  get: function get() {
	    return _createEpicMiddleware.createEpicMiddleware;
	  }
	});
	
	var _ActionsObservable = __webpack_require__(790);
	
	Object.defineProperty(exports, 'ActionsObservable', {
	  enumerable: true,
	  get: function get() {
	    return _ActionsObservable.ActionsObservable;
	  }
	});
	
	var _combineEpics = __webpack_require__(805);
	
	Object.defineProperty(exports, 'combineEpics', {
	  enumerable: true,
	  get: function get() {
	    return _combineEpics.combineEpics;
	  }
	});
	
	var _EPIC_END = __webpack_require__(804);
	
	Object.defineProperty(exports, 'EPIC_END', {
	  enumerable: true,
	  get: function get() {
	    return _EPIC_END.EPIC_END;
	  }
	});

/***/ },
/* 765 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createEpicMiddleware = createEpicMiddleware;
	
	var _Subject = __webpack_require__(766);
	
	var _map = __webpack_require__(783);
	
	var _switchMap = __webpack_require__(784);
	
	var _ActionsObservable = __webpack_require__(790);
	
	var _EPIC_END = __webpack_require__(804);
	
	var defaultAdapter = {
	  input: function input(action$) {
	    return action$;
	  },
	  output: function output(action$) {
	    return action$;
	  }
	};
	
	var defaultOptions = {
	  adapter: defaultAdapter
	};
	
	function createEpicMiddleware(epic) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions,
	      _ref$adapter = _ref.adapter,
	      adapter = _ref$adapter === undefined ? defaultAdapter : _ref$adapter;
	
	  if (typeof epic !== 'function') {
	    throw new TypeError('You must provide a root Epic to createEpicMiddleware');
	  }
	
	  var input$ = new _Subject.Subject();
	  var action$ = adapter.input(new _ActionsObservable.ActionsObservable(input$));
	  var epic$ = new _Subject.Subject();
	  var store = void 0;
	
	  var epicMiddleware = function epicMiddleware(_store) {
	    store = _store;
	
	    return function (next) {
	      var _context;
	
	      (_context = _map.map.call(epic$, function (epic) {
	        var output$ = epic(action$, store);
	        if (!output$) {
	          throw new TypeError('Your root Epic "' + (epic.name || '<anonymous>') + '" does not return a stream. Double check you\'re not missing a return statement!');
	        }
	        return output$;
	      }), _switchMap.switchMap).call(_context, function (output$) {
	        return adapter.output(output$);
	      }).subscribe(store.dispatch);
	
	      // Setup initial root epic
	      epic$.next(epic);
	
	      return function (action) {
	        var result = next(action);
	        input$.next(action);
	        return result;
	      };
	    };
	  };
	
	  epicMiddleware.replaceEpic = function (epic) {
	    // gives the previous root Epic a last chance
	    // to do some clean up
	    store.dispatch({ type: _EPIC_END.EPIC_END });
	    // switches to the new root Epic, synchronously terminating
	    // the previous one
	    epic$.next(epic);
	  };
	
	  return epicMiddleware;
	}

/***/ },
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ActionsObservable = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Observable2 = __webpack_require__(767);
	
	var _of2 = __webpack_require__(791);
	
	var _from2 = __webpack_require__(796);
	
	var _filter = __webpack_require__(803);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ActionsObservable = exports.ActionsObservable = function (_Observable) {
	  _inherits(ActionsObservable, _Observable);
	
	  _createClass(ActionsObservable, null, [{
	    key: 'of',
	    value: function of() {
	      return new this(_of2.of.apply(undefined, arguments));
	    }
	  }, {
	    key: 'from',
	    value: function from(actions, scheduler) {
	      return new this((0, _from2.from)(actions, scheduler));
	    }
	  }]);
	
	  function ActionsObservable(actionsSubject) {
	    _classCallCheck(this, ActionsObservable);
	
	    var _this = _possibleConstructorReturn(this, (ActionsObservable.__proto__ || Object.getPrototypeOf(ActionsObservable)).call(this));
	
	    _this.source = actionsSubject;
	    return _this;
	  }
	
	  _createClass(ActionsObservable, [{
	    key: 'lift',
	    value: function lift(operator) {
	      var observable = new ActionsObservable(this);
	      observable.operator = operator;
	      return observable;
	    }
	  }, {
	    key: 'ofType',
	    value: function ofType() {
	      for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
	        keys[_key] = arguments[_key];
	      }
	
	      return _filter.filter.call(this, function (_ref) {
	        var type = _ref.type;
	
	        var len = keys.length;
	        if (len === 1) {
	          return type === keys[0];
	        } else {
	          for (var i = 0; i < len; i++) {
	            if (keys[i] === type) {
	              return true;
	            }
	          }
	        }
	        return false;
	      });
	    }
	  }]);
	
	  return ActionsObservable;
	}(_Observable2.Observable);

/***/ },
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EPIC_END = exports.EPIC_END = '@@redux-observable/EPIC_END';

/***/ },
/* 805 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.combineEpics = undefined;
	
	var _merge = __webpack_require__(806);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	  Merges all epics into a single one.
	 */
	var combineEpics = exports.combineEpics = function combineEpics() {
	  for (var _len = arguments.length, epics = Array(_len), _key = 0; _key < _len; _key++) {
	    epics[_key] = arguments[_key];
	  }
	
	  return function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return _merge.merge.apply(undefined, _toConsumableArray(epics.map(function (epic) {
	      var output$ = epic.apply(undefined, args);
	      if (!output$) {
	        throw new TypeError('combineEpics: one of the provided Epics "' + (epic.name || '<anonymous>') + '" does not return a stream. Double check you\'re not missing a return statement!');
	      }
	      return output$;
	    })));
	  };
	};

/***/ },
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var reducers = arguments[1];
	  var _options$initialState = options.initialState,
	      initialState = _options$initialState === undefined ? {} : _options$initialState,
	      _options$ownMiddlewar = options.ownMiddleware,
	      ownMiddleware = _options$ownMiddlewar === undefined ? [] : _options$ownMiddlewar,
	      _options$enhancers = options.enhancers,
	      enhancers = _options$enhancers === undefined ? [] : _options$enhancers;
	
	
	  var appliedMiddleware = _redux.applyMiddleware.apply(undefined, _toConsumableArray(ownMiddleware));
	
	  var store = (0, _redux.createStore)(reducers, initialState, _redux.compose.apply(undefined, [appliedMiddleware].concat(_toConsumableArray(enhancers))));
	
	  return store;
	};
	
	var _redux = __webpack_require__(559);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "configureStore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 810 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 811 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/personal/userspace/spent/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 812 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var invariant = __webpack_require__(306);
	var defaultClickRejectionStrategy = __webpack_require__(813);
	
	var alreadyInjected = false;
	
	module.exports = function injectTapEventPlugin (strategyOverrides) {
	  strategyOverrides = strategyOverrides || {}
	  var shouldRejectClick = strategyOverrides.shouldRejectClick || defaultClickRejectionStrategy;
	
	  if (process.env.NODE_ENV !== 'production') {
	    invariant(
	      !alreadyInjected,
	      'injectTapEventPlugin(): Can only be called once per application lifecycle.\n\n\
	It is recommended to call injectTapEventPlugin() just before you call \
	ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() \
	itself, please contact the maintainer as it shouldn\'t be called in library code and \
	should be injected by the application.'
	    )
	  }
	
	  alreadyInjected = true;
	
	  __webpack_require__(414).injection.injectEventPluginsByName({
	    'TapEventPlugin':       __webpack_require__(814)(shouldRejectClick)
	  });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },
/* 813 */
/***/ function(module, exports) {

	module.exports = function(lastTouchEvent, clickTimestamp) {
	  if (lastTouchEvent && (clickTimestamp - lastTouchEvent) < 750) {
	    return true;
	  }
	};


/***/ },
/* 814 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TapEventPlugin
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(815);
	var EventPluginUtils = __webpack_require__(416);
	var EventPropagators = __webpack_require__(413);
	var SyntheticUIEvent = __webpack_require__(447);
	var TouchEventUtils = __webpack_require__(816);
	var ViewportMetrics = __webpack_require__(448);
	
	var keyOf = __webpack_require__(817);
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var isStartish = EventPluginUtils.isStartish;
	var isEndish = EventPluginUtils.isEndish;
	
	var isTouch = function(topLevelType) {
	  var touchTypes = [
	    'topTouchCancel',
	    'topTouchEnd',
	    'topTouchStart',
	    'topTouchMove'
	  ];
	  return touchTypes.indexOf(topLevelType) >= 0;
	}
	
	/**
	 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
	 * in order to still be considered a 'tap' event.
	 */
	var tapMoveThreshold = 10;
	var ignoreMouseThreshold = 750;
	var startCoords = {x: null, y: null};
	var lastTouchEvent = null;
	
	var Axis = {
	  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
	  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
	};
	
	function getAxisCoordOfEvent(axis, nativeEvent) {
	  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
	  if (singleTouch) {
	    return singleTouch[axis.page];
	  }
	  return axis.page in nativeEvent ?
	    nativeEvent[axis.page] :
	    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
	}
	
	function getDistance(coords, nativeEvent) {
	  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
	  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
	  return Math.pow(
	    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
	    0.5
	  );
	}
	
	var touchEvents = [
	  'topTouchStart',
	  'topTouchCancel',
	  'topTouchEnd',
	  'topTouchMove',
	];
	
	var dependencies = [
	  'topMouseDown',
	  'topMouseMove',
	  'topMouseUp',
	].concat(touchEvents);
	
	var eventTypes = {
	  touchTap: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchTap: null}),
	      captured: keyOf({onTouchTapCapture: null})
	    },
	    dependencies: dependencies
	  }
	};
	
	var now = (function() {
	  if (Date.now) {
	    return Date.now;
	  } else {
	    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
	    return function () {
	      return +new Date;
	    }
	  }
	})();
	
	function createTapEventPlugin(shouldRejectClick) {
	  return {
	
	    tapMoveThreshold: tapMoveThreshold,
	
	    ignoreMouseThreshold: ignoreMouseThreshold,
	
	    eventTypes: eventTypes,
	
	    /**
	     * @param {string} topLevelType Record from `EventConstants`.
	     * @param {DOMEventTarget} targetInst The listening component root node.
	     * @param {object} nativeEvent Native browser event.
	     * @return {*} An accumulation of synthetic events.
	     * @see {EventPluginHub.extractEvents}
	     */
	    extractEvents: function(
	      topLevelType,
	      targetInst,
	      nativeEvent,
	      nativeEventTarget
	    ) {
	
	      if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
	        return null;
	      }
	
	      if (isTouch(topLevelType)) {
	        lastTouchEvent = now();
	      } else {
	        if (shouldRejectClick(lastTouchEvent, now())) {
	          return null;
	        }
	      }
	
	      var event = null;
	      var distance = getDistance(startCoords, nativeEvent);
	      if (isEndish(topLevelType) && distance < tapMoveThreshold) {
	        event = SyntheticUIEvent.getPooled(
	          eventTypes.touchTap,
	          targetInst,
	          nativeEvent,
	          nativeEventTarget
	        );
	      }
	      if (isStartish(topLevelType)) {
	        startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
	        startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
	      } else if (isEndish(topLevelType)) {
	        startCoords.x = 0;
	        startCoords.y = 0;
	      }
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	      return event;
	    }
	
	  };
	}
	
	module.exports = createTapEventPlugin;


/***/ },
/* 815 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Types of raw signals from the browser caught at the top level.
	 */
	var topLevelTypes = {
	  topAbort: null,
	  topAnimationEnd: null,
	  topAnimationIteration: null,
	  topAnimationStart: null,
	  topBlur: null,
	  topCanPlay: null,
	  topCanPlayThrough: null,
	  topChange: null,
	  topClick: null,
	  topCompositionEnd: null,
	  topCompositionStart: null,
	  topCompositionUpdate: null,
	  topContextMenu: null,
	  topCopy: null,
	  topCut: null,
	  topDoubleClick: null,
	  topDrag: null,
	  topDragEnd: null,
	  topDragEnter: null,
	  topDragExit: null,
	  topDragLeave: null,
	  topDragOver: null,
	  topDragStart: null,
	  topDrop: null,
	  topDurationChange: null,
	  topEmptied: null,
	  topEncrypted: null,
	  topEnded: null,
	  topError: null,
	  topFocus: null,
	  topInput: null,
	  topInvalid: null,
	  topKeyDown: null,
	  topKeyPress: null,
	  topKeyUp: null,
	  topLoad: null,
	  topLoadedData: null,
	  topLoadedMetadata: null,
	  topLoadStart: null,
	  topMouseDown: null,
	  topMouseMove: null,
	  topMouseOut: null,
	  topMouseOver: null,
	  topMouseUp: null,
	  topPaste: null,
	  topPause: null,
	  topPlay: null,
	  topPlaying: null,
	  topProgress: null,
	  topRateChange: null,
	  topReset: null,
	  topScroll: null,
	  topSeeked: null,
	  topSeeking: null,
	  topSelectionChange: null,
	  topStalled: null,
	  topSubmit: null,
	  topSuspend: null,
	  topTextInput: null,
	  topTimeUpdate: null,
	  topTouchCancel: null,
	  topTouchEnd: null,
	  topTouchMove: null,
	  topTouchStart: null,
	  topTransitionEnd: null,
	  topVolumeChange: null,
	  topWaiting: null,
	  topWheel: null
	};
	
	var EventConstants = {
	  topLevelTypes: topLevelTypes
	};
	
	module.exports = EventConstants;

/***/ },
/* 816 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TouchEventUtils
	 */
	
	var TouchEventUtils = {
	  /**
	   * Utility function for common case of extracting out the primary touch from a
	   * touch event.
	   * - `touchEnd` events usually do not have the `touches` property.
	   *   http://stackoverflow.com/questions/3666929/
	   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
	   *
	   * @param {Event} nativeEvent Native event that may or may not be a touch.
	   * @return {TouchesObject?} an object with pageX and pageY or null.
	   */
	  extractSingleTouch: function(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;
	
	    return !hasTouches && hasChangedTouches ? changedTouches[0] :
	           hasTouches ? touches[0] :
	           nativeEvent;
	  }
	};
	
	module.exports = TouchEventUtils;


/***/ },
/* 817 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};
	
	module.exports = keyOf;

/***/ }
]);
//# sourceMappingURL=bundle.js.map