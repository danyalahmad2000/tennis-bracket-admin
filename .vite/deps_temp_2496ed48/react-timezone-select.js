"use client";
import {
  require_react_dom
} from "./chunk-OYP6L5KJ.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-ATZAHYIB.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment4 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment4;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement2;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics2(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics2(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics2;
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React6 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format2) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format2, args);
            }
          }
        }
        function printWarning(level, format2, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format2 += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format2);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign2 = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign2({}, props, {
                  value: prevLog
                }),
                info: assign2({}, props, {
                  value: prevInfo
                }),
                warn: assign2({}, props, {
                  value: prevWarn
                }),
                error: assign2({}, props, {
                  value: prevError
                }),
                group: assign2({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign2({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign2({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix3;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix3 === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match2 = x.stack.trim().match(/\n( *(at )?)/);
                prefix3 = match2 && match2[1] || "";
              }
            }
            return "\n" + prefix3 + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray3(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps2 = type.defaultProps;
              for (propName in defaultProps2) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps2[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node2, parentType) {
          {
            if (typeof node2 !== "object") {
              return;
            }
            if (isArray3(node2)) {
              for (var i = 0; i < node2.length; i++) {
                var child = node2[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node2)) {
              if (node2._store) {
                node2._store.validated = true;
              }
            } else if (node2) {
              var iteratorFn = getIteratorFn(node2);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node2.entries) {
                  var iterator = iteratorFn.call(node2);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray3(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray3(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx4 = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx4;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/react-timezone-select/dist/index.js
var import_react10 = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r && (o2 = o2.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}

// node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o2 = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o2 = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o2)
          throw n;
      }
    }
    return a;
  }
}

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n = Object.prototype.toString.call(o2).slice(8, -1);
  if (n === "Object" && o2.constructor)
    n = o2.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o2);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o2, minLen);
}

// node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/react-select/dist/useStateManager-7e1e8489.esm.js
var import_react = __toESM(require_react());
var _excluded = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function useStateManager(_ref3) {
  var _ref$defaultInputValu = _ref3.defaultInputValue, defaultInputValue = _ref$defaultInputValu === void 0 ? "" : _ref$defaultInputValu, _ref$defaultMenuIsOpe = _ref3.defaultMenuIsOpen, defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe, _ref$defaultValue = _ref3.defaultValue, defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue, propsInputValue = _ref3.inputValue, propsMenuIsOpen = _ref3.menuIsOpen, propsOnChange = _ref3.onChange, propsOnInputChange = _ref3.onInputChange, propsOnMenuClose = _ref3.onMenuClose, propsOnMenuOpen = _ref3.onMenuOpen, propsValue = _ref3.value, restSelectProps = _objectWithoutProperties(_ref3, _excluded);
  var _useState = (0, import_react.useState)(propsInputValue !== void 0 ? propsInputValue : defaultInputValue), _useState2 = _slicedToArray(_useState, 2), stateInputValue = _useState2[0], setStateInputValue = _useState2[1];
  var _useState3 = (0, import_react.useState)(propsMenuIsOpen !== void 0 ? propsMenuIsOpen : defaultMenuIsOpen), _useState4 = _slicedToArray(_useState3, 2), stateMenuIsOpen = _useState4[0], setStateMenuIsOpen = _useState4[1];
  var _useState5 = (0, import_react.useState)(propsValue !== void 0 ? propsValue : defaultValue), _useState6 = _slicedToArray(_useState5, 2), stateValue = _useState6[0], setStateValue = _useState6[1];
  var onChange2 = (0, import_react.useCallback)(function(value2, actionMeta) {
    if (typeof propsOnChange === "function") {
      propsOnChange(value2, actionMeta);
    }
    setStateValue(value2);
  }, [propsOnChange]);
  var onInputChange = (0, import_react.useCallback)(function(value2, actionMeta) {
    var newValue;
    if (typeof propsOnInputChange === "function") {
      newValue = propsOnInputChange(value2, actionMeta);
    }
    setStateInputValue(newValue !== void 0 ? newValue : value2);
  }, [propsOnInputChange]);
  var onMenuOpen = (0, import_react.useCallback)(function() {
    if (typeof propsOnMenuOpen === "function") {
      propsOnMenuOpen();
    }
    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = (0, import_react.useCallback)(function() {
    if (typeof propsOnMenuClose === "function") {
      propsOnMenuClose();
    }
    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== void 0 ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== void 0 ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== void 0 ? propsValue : stateValue;
  return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
    inputValue,
    menuIsOpen,
    onChange: onChange2,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    value
  });
}

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/react-select/dist/react-select.esm.js
var React5 = __toESM(require_react());
var import_react8 = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o2, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p2) {
    o3.__proto__ = p2;
    return o3;
  };
  return _setPrototypeOf(o2, p);
}

// node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}

// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}

// node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

// node_modules/@babel/runtime/helpers/esm/createSuper.js
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}

// node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

// node_modules/react-select/dist/Select-49a62830.esm.js
var React4 = __toESM(require_react());
var import_react6 = __toESM(require_react());

// node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js
var React2 = __toESM(require_react());
var import_react2 = __toESM(require_react());

// node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options2) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options2.key);
  if (options2.nonce !== void 0) {
    tag.setAttribute("nonce", options2.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = function() {
  function StyleSheet2(options2) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options2.speedy === void 0 ? false : options2.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options2.nonce;
    this.key = options2.key;
    this.container = options2.container;
    this.prepend = options2.prepend;
    this.insertionPoint = options2.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (true) {
      var isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
      if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule) {
        console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
    }
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
          console.error('There was a problem inserting the following rule: "' + rule + '"', e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };
  return StyleSheet2;
}();

// node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index2) {
  return value.charCodeAt(index2) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}

// node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index2, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index2) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index2) {
  while (!token(peek()))
    next();
  return slice(index2, position);
}

// node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index2 = 0;
  var offset2 = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index2++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset2:
            if (ampersand == -1)
              characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index2, offset2, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset2 === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index2 = offset2 = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset2 = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index2, offset2, rules, points, type, props, children, length2) {
  var post = offset2 - 1;
  var rule = offset2 === 0 ? rules : [""];
  var size2 = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index2; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size2; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root, parent, offset2 === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index2, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length)
        break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index2, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index2, children, callback) || "";
    return output;
  };
}

// node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var weakMemoize = function weakMemoize2(func) {
  var cache2 = /* @__PURE__ */ new WeakMap();
  return function(arg) {
    if (cache2.has(arg)) {
      return cache2.get(arg);
    }
    var ret = func(arg);
    cache2.set(arg, ret);
    return ret;
  };
};

// node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache2 = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache2[arg] === void 0)
      cache2[arg] = fn(arg);
    return cache2[arg];
  };
}

// node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index2) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index2] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index2 = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index2] = 1;
        }
        parsed[index2] += identifierWithPointTracking(position - 1, points, index2);
        break;
      case 2:
        parsed[index2] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index2] = peek() === 58 ? "&\f" : "";
          points[index2] = parsed[index2].length;
          break;
        }
      default:
        parsed[index2] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
var isIgnoringComment = function isIgnoringComment2(element) {
  return element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache2) {
  return function(element, index2, children) {
    if (element.type !== "rule" || cache2.compat)
      return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
    if (unsafePseudoClasses) {
      var isNested = !!element.parent;
      var commentContainer = isNested ? element.parent.children : (
        // global rule at the root level
        children
      );
      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node2 = commentContainer[i];
        if (node2.line < element.line) {
          break;
        }
        if (node2.column < element.column) {
          if (isIgnoringComment(node2)) {
            return;
          }
          break;
        }
      }
      unsafePseudoClasses.forEach(function(unsafePseudoClass) {
        console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
      });
    }
  };
};
var isImportRule = function isImportRule2(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules2(index2, children) {
  for (var i = index2 - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }
  return false;
};
var nullifyElement = function nullifyElement2(element) {
  element.type = "";
  element.value = "";
  element["return"] = "";
  element.children = "";
  element.props = "";
};
var incorrectImportAlarm = function incorrectImportAlarm2(element, index2, children) {
  if (!isImportRule(element)) {
    return;
  }
  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index2, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};
function prefix2(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix2(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index2, children, callback) {
  if (element.length > -1) {
    if (!element["return"])
      switch (element.type) {
        case DECLARATION:
          element["return"] = prefix2(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, {
            value: replace(element.value, "@", "@" + WEBKIT)
          })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, {
                    props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                  })], callback);
                case "::placeholder":
                  return serialize([copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                  })], callback);
              }
              return "";
            });
      }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options2) {
  var key = options2.key;
  if (!key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
  }
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options2.stylisPlugins || defaultStylisPlugins;
  if (true) {
    if (/[^a-z-]/.test(key)) {
      throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
    }
  }
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options2.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (true) {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache2.compat;
      }
    }), incorrectImportAlarm);
  }
  {
    var currentSheet;
    var finalizingPlugins = [stringify, true ? function(element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== COMMENT) {
          currentSheet.insert(element.value + "{}");
        }
      }
    } : rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      if (serialized.map !== void 0) {
        currentSheet = {
          insert: function insert2(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache2.inserted[serialized.name] = true;
      }
    };
  }
  var cache2 = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options2.nonce,
      speedy: options2.speedy,
      prepend: options2.prepend,
      insertionPoint: options2.insertionPoint
    }),
    nonce: options2.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache2.sheet.hydrate(nodesToHydrate);
  return cache2;
};

// node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());

// node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames2) {
  var rawClassName = "";
  classNames2.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache2, serialized, isStringTag) {
  var className = cache2.key + "-" + serialized.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false) && cache2.registered[className] === void 0
  ) {
    cache2.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache2, serialized, isStringTag) {
  registerStyles(cache2, serialized, isStringTag);
  var className = cache2.key + "-" + serialized.name;
  if (cache2.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache2.insert(serialized === current ? "." + className : "", current, cache2.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};

// node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

// node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
if (true) {
  contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  contentValues = ["normal", "none", "initial", "inherit", "unset"];
  oldProcessStyleValue = processStyleValue;
  msPattern = /^-ms-/;
  hyphenPattern = /-(.)/g;
  hyphenatedCache = {};
  processStyleValue = function processStyleValue3(key, value) {
    if (key === "content") {
      if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }
    return processed;
  };
}
var contentValuePattern;
var contentValues;
var oldProcessStyleValue;
var msPattern;
var hyphenPattern;
var hyphenatedCache;
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    if (interpolation.toString() === "NO_COMPONENT_SELECTOR") {
      throw new Error(noComponentSelectorMessage);
    }
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles = interpolation.styles + ";";
        if (interpolation.map !== void 0) {
          styles += interpolation.map;
        }
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      } else if (true) {
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      }
      break;
    }
    case "string":
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function(match2, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
        }
      }
      break;
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && true) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              if (_key === "undefined") {
                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
              }
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;
if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
}
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (strings[0] === void 0) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      if (strings[i] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles += strings[i];
    }
  }
  var sourceMap;
  if (true) {
    styles = styles.replace(sourceMapPattern, function(match3) {
      sourceMap = match3;
      return "";
    });
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + // $FlowFixMe we know it's not null
    match2[1];
  }
  var name = murmur2(styles) + identifierName;
  if (true) {
    return {
      name,
      styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }
  return {
    name,
    styles,
    next: cursor
  };
};

// node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var React = __toESM(require_react());
var syncFallback = function syncFallback2(create) {
  return create();
};
var useInsertionEffect2 = React["useInsertionEffect"] ? React["useInsertionEffect"] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect2 || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect2 || React.useLayoutEffect;

// node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js
var isBrowser2 = true;
var hasOwn = {}.hasOwnProperty;
var EmotionCacheContext = React2.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== "undefined" ? createCache({
    key: "css"
  }) : null
);
if (true) {
  EmotionCacheContext.displayName = "EmotionCacheContext";
}
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return (0, import_react2.forwardRef)(function(props, ref) {
    var cache2 = (0, import_react2.useContext)(EmotionCacheContext);
    return func(props, cache2, ref);
  });
};
if (!isBrowser2) {
  withEmotionCache = function withEmotionCache3(func) {
    return function(props) {
      var cache2 = (0, import_react2.useContext)(EmotionCacheContext);
      if (cache2 === null) {
        cache2 = createCache({
          key: "css"
        });
        return React2.createElement(EmotionCacheContext.Provider, {
          value: cache2
        }, func(props, cache2));
      } else {
        return func(props, cache2);
      }
    };
  };
}
var ThemeContext = React2.createContext({});
if (true) {
  ThemeContext.displayName = "EmotionThemeContext";
}
var getTheme = function getTheme2(outerTheme, theme) {
  if (typeof theme === "function") {
    var mergedTheme = theme(outerTheme);
    if (mergedTheme == null || typeof mergedTheme !== "object" || Array.isArray(mergedTheme)) {
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    }
    return mergedTheme;
  }
  if (theme == null || typeof theme !== "object" || Array.isArray(theme)) {
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  }
  return _extends({}, outerTheme, theme);
};
var createCacheWithTheme = weakMemoize(function(outerTheme) {
  return weakMemoize(function(theme) {
    return getTheme(outerTheme, theme);
  });
});
var getLastPart = function getLastPart2(functionName) {
  var parts = functionName.split(".");
  return parts[parts.length - 1];
};
var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine2(line2) {
  var match2 = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line2);
  if (match2)
    return getLastPart(match2[1]);
  match2 = /^([A-Za-z0-9$.]+)@/.exec(line2);
  if (match2)
    return getLastPart(match2[1]);
  return void 0;
};
var internalReactFunctionNames = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]);
var sanitizeIdentifier = function sanitizeIdentifier2(identifier2) {
  return identifier2.replace(/\$/g, "-");
};
var getLabelFromStackTrace = function getLabelFromStackTrace2(stackTrace) {
  if (!stackTrace)
    return void 0;
  var lines = stackTrace.split("\n");
  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]);
    if (!functionName)
      continue;
    if (internalReactFunctionNames.has(functionName))
      break;
    if (/^[A-Z]/.test(functionName))
      return sanitizeIdentifier(functionName);
  }
  return void 0;
};
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps2(type, props) {
  if (typeof props.css === "string" && // check if there is a css declaration
  props.css.indexOf(":") !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }
  var newProps = {};
  for (var key in props) {
    if (hasOwn.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  if (!!props.css && (typeof props.css !== "object" || typeof props.css.name !== "string" || props.css.name.indexOf("-") === -1)) {
    var label = getLabelFromStackTrace(new Error().stack);
    if (label)
      newProps[labelPropName] = label;
  }
  return newProps;
};
var Insertion = function Insertion2(_ref3) {
  var cache2 = _ref3.cache, serialized = _ref3.serialized, isStringTag = _ref3.isStringTag;
  registerStyles(cache2, serialized, isStringTag);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache2, serialized, isStringTag);
  });
  return null;
};
var Emotion = withEmotionCache(function(props, cache2, ref) {
  var cssProp = props.css;
  if (typeof cssProp === "string" && cache2.registered[cssProp] !== void 0) {
    cssProp = cache2.registered[cssProp];
  }
  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = "";
  if (typeof props.className === "string") {
    className = getRegisteredStyles(cache2.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles, void 0, React2.useContext(ThemeContext));
  if (serialized.name.indexOf("-") === -1) {
    var labelFromStack = props[labelPropName];
    if (labelFromStack) {
      serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]);
    }
  }
  className += cache2.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwn.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  return React2.createElement(React2.Fragment, null, React2.createElement(Insertion, {
    cache: cache2,
    serialized,
    isStringTag: typeof WrappedComponent === "string"
  }), React2.createElement(WrappedComponent, newProps));
});
if (true) {
  Emotion.displayName = "EmotionCssPropInternal";
}
var Emotion$1 = Emotion;

// node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var React3 = __toESM(require_react());
var import_hoist_non_react_statics2 = __toESM(require_hoist_non_react_statics_cjs());
var pkg = {
  name: "@emotion/react",
  version: "11.11.4",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        "default": "./dist/emotion-react.esm.js"
      },
      "import": "./dist/emotion-react.cjs.mjs",
      "default": "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        "import": "./macro.d.mts",
        "default": "./macro.d.ts"
      },
      "default": "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: false,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: true
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            "import": "./macro.d.mts",
            "default": "./macro.d.ts"
          },
          "default": "./macro.js"
        }
      }
    }
  }
};
var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwn.call(props, "css")) {
    return React3.createElement.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion$1;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }
  return React3.createElement.apply(null, createElementArgArray);
};
var warnedAboutCssPropForGlobal = false;
var Global = withEmotionCache(function(props, cache2) {
  if (!warnedAboutCssPropForGlobal && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }
  var styles = props.styles;
  var serialized = serializeStyles([styles], void 0, React3.useContext(ThemeContext));
  if (!isBrowser2) {
    var _ref3;
    var serializedNames = serialized.name;
    var serializedStyles = serialized.styles;
    var next2 = serialized.next;
    while (next2 !== void 0) {
      serializedNames += " " + next2.name;
      serializedStyles += next2.styles;
      next2 = next2.next;
    }
    var shouldCache = cache2.compat === true;
    var rules = cache2.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache2.sheet, shouldCache);
    if (shouldCache) {
      return null;
    }
    return React3.createElement("style", (_ref3 = {}, _ref3["data-emotion"] = cache2.key + "-global " + serializedNames, _ref3.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref3.nonce = cache2.sheet.nonce, _ref3));
  }
  var sheetRef = React3.useRef();
  useInsertionEffectWithLayoutFallback(function() {
    var key = cache2.key + "-global";
    var sheet = new cache2.sheet.constructor({
      key,
      nonce: cache2.sheet.nonce,
      container: cache2.sheet.container,
      speedy: cache2.sheet.isSpeedy
    });
    var rehydrating = false;
    var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache2.sheet.tags.length) {
      sheet.before = cache2.sheet.tags[0];
    }
    if (node2 !== null) {
      rehydrating = true;
      node2.setAttribute("data-emotion", key);
      sheet.hydrate([node2]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache2]);
  useInsertionEffectWithLayoutFallback(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache2, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache2.insert("", serialized, sheet, false);
  }, [cache2, serialized.name]);
  return null;
});
if (true) {
  Global.displayName = "EmotionGlobal";
}
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var classnames = function classnames2(args) {
  var len = args.length;
  var i = 0;
  var cls = "";
  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null)
      continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          if (arg.styles !== void 0 && arg.name !== void 0) {
            console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
          }
          toAdd = "";
          for (var k in arg) {
            if (arg[k] && k) {
              toAdd && (toAdd += " ");
              toAdd += k;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css5, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css5(registeredStyles);
}
var Insertion3 = function Insertion4(_ref3) {
  var cache2 = _ref3.cache, serializedArr = _ref3.serializedArr;
  useInsertionEffectAlwaysWithSyncFallback(function() {
    for (var i = 0; i < serializedArr.length; i++) {
      insertStyles(cache2, serializedArr[i], false);
    }
  });
  return null;
};
var ClassNames = withEmotionCache(function(props, cache2) {
  var hasRendered = false;
  var serializedArr = [];
  var css5 = function css6() {
    if (hasRendered && true) {
      throw new Error("css can only be used during render");
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache2.registered);
    serializedArr.push(serialized);
    registerStyles(cache2, serialized, false);
    return cache2.key + "-" + serialized.name;
  };
  var cx = function cx2() {
    if (hasRendered && true) {
      throw new Error("cx can only be used during render");
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache2.registered, css5, classnames(args));
  };
  var content = {
    css: css5,
    cx,
    theme: React3.useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return React3.createElement(React3.Fragment, null, React3.createElement(Insertion3, {
    cache: cache2,
    serializedArr
  }), ele);
});
if (true) {
  ClassNames.displayName = "EmotionClassNames";
}
if (true) {
  isBrowser3 = true;
  isTestEnv = typeof jest !== "undefined" || typeof vi !== "undefined";
  if (isBrowser3 && !isTestEnv) {
    globalContext = // $FlowIgnore
    typeof globalThis !== "undefined" ? globalThis : isBrowser3 ? window : global;
    globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
    if (globalContext[globalKey]) {
      console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
    }
    globalContext[globalKey] = true;
  }
}
var isBrowser3;
var isTestEnv;
var globalContext;
var globalKey;

// node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

// node_modules/react-select/dist/index-a301f526.esm.js
var import_react5 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node2) {
  if (isNode(node2)) {
    return (node2.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node2) {
  var _node$ownerDocument;
  return (node2 == null || (_node$ownerDocument = node2.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node2) {
  var _ref3;
  return (_ref3 = (isNode(node2) ? node2.ownerDocument : node2.document) || window.document) == null ? void 0 : _ref3.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display: display2
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display2);
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node2) {
  return ["html", "body", "#document"].includes(getNodeName(node2));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getParentNode(node2) {
  if (getNodeName(node2) === "html") {
    return node2;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node2.assignedSlot || // DOM Element detected.
    node2.parentNode || // ShadowRoot detected.
    isShadowRoot(node2) && node2.host || // Fallback.
    getDocumentElement(node2)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node2) {
  const parentNode = getParentNode(node2);
  if (isLastTraversableNode(parentNode)) {
    return node2.ownerDocument ? node2.ownerDocument.body : node2.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node2, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node2);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node2.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css5 = getComputedStyle2(element);
  let width = parseFloat(css5.width) || 0;
  let height = parseFloat(css5.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css5 = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css5.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css5.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options2 = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options2,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options2);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options2;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref3) => {
      let [firstEntry] = _ref3;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

// node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js
var import_react3 = __toESM(require_react());
var index = import_react3.useLayoutEffect;
var use_isomorphic_layout_effect_browser_esm_default = index;

// node_modules/react-select/dist/index-a301f526.esm.js
var _excluded$4 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
var noop = function noop2() {
};
function applyPrefixToName(prefix3, name) {
  if (!name) {
    return prefix3;
  } else if (name[0] === "-") {
    return prefix3 + name;
  } else {
    return prefix3 + "__" + name;
  }
}
function classNames(prefix3, state) {
  for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    classNameList[_key - 2] = arguments[_key];
  }
  var arr = [].concat(classNameList);
  if (state && prefix3) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix3, key)));
      }
    }
  }
  return arr.filter(function(i) {
    return i;
  }).map(function(i) {
    return String(i).trim();
  }).join(" ");
}
var cleanValue = function cleanValue2(value) {
  if (isArray(value))
    return value.filter(Boolean);
  if (_typeof(value) === "object" && value !== null)
    return [value];
  return [];
};
var cleanCommonProps = function cleanCommonProps2(props) {
  props.className;
  props.clearValue;
  props.cx;
  props.getStyles;
  props.getClassNames;
  props.getValue;
  props.hasValue;
  props.isMulti;
  props.isRtl;
  props.options;
  props.selectOption;
  props.selectProps;
  props.setValue;
  props.theme;
  var innerProps = _objectWithoutProperties(props, _excluded$4);
  return _objectSpread2({}, innerProps);
};
var getStyleProps = function getStyleProps2(props, name, classNamesState) {
  var cx = props.cx, getStyles = props.getStyles, getClassNames = props.getClassNames, className = props.className;
  return {
    css: getStyles(name, props),
    className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
  };
};
function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}
function normalizedHeight(el) {
  if (isDocumentElement(el)) {
    return window.innerHeight;
  }
  return el.clientHeight;
}
function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}
function scrollTo(el, top) {
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }
  el.scrollTop = top;
}
function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === "absolute";
  var overflowRx = /(auto|scroll)/;
  if (style.position === "fixed")
    return document.documentElement;
  for (var parent = element; parent = parent.parentElement; ) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === "static") {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }
  return document.documentElement;
}
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}
function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;
  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}
function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;
  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
function isTouchCapable() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}
var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
var w = typeof window !== "undefined" ? window : {};
if (w.addEventListener && w.removeEventListener) {
  w.addEventListener("p", noop, options);
  w.removeEventListener("p", noop, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
  return item != null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
  return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
  return singleValue;
}
function multiValueAsValue(multiValue) {
  return multiValue;
}
var removeProps = function removeProps2(propsObj) {
  for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    properties[_key2 - 1] = arguments[_key2];
  }
  var propsMap = Object.entries(propsObj).filter(function(_ref3) {
    var _ref23 = _slicedToArray(_ref3, 1), key = _ref23[0];
    return !properties.includes(key);
  });
  return propsMap.reduce(function(newProps, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], val = _ref4[1];
    newProps[key] = val;
    return newProps;
  }, {});
};
var _excluded$3 = ["children", "innerProps"];
var _excluded2$1 = ["children", "innerProps"];
function getMenuPlacement(_ref3) {
  var preferredMaxHeight = _ref3.maxHeight, menuEl = _ref3.menuEl, minHeight = _ref3.minHeight, preferredPlacement = _ref3.placement, shouldScroll = _ref3.shouldScroll, isFixedPosition = _ref3.isFixedPosition, controlHeight2 = _ref3.controlHeight;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: "bottom",
    maxHeight: preferredMaxHeight
  };
  if (!menuEl || !menuEl.offsetParent)
    return defaultState;
  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(), scrollHeight = _scrollParent$getBoun.height;
  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(), menuBottom = _menuEl$getBoundingCl.bottom, menuHeight = _menuEl$getBoundingCl.height, menuTop = _menuEl$getBoundingCl.top;
  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(), containerTop = _menuEl$offsetParent$.top;
  var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;
  switch (preferredPlacement) {
    case "auto":
    case "bottom":
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: "bottom",
          maxHeight: constrainedHeight
        };
      }
      if (preferredPlacement === "auto" || isFixedPosition) {
        var _constrainedHeight = preferredMaxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight2, preferredMaxHeight);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight
        };
      }
      if (preferredPlacement === "bottom") {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      break;
    case "top":
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: "top",
          maxHeight: preferredMaxHeight
        };
      }
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight: preferredMaxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = preferredMaxHeight;
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight2
        };
      }
      return {
        placement: "bottom",
        maxHeight: preferredMaxHeight
      };
    default:
      throw new Error('Invalid placement provided "'.concat(preferredPlacement, '".'));
  }
  return defaultState;
}
function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: "top",
    top: "bottom"
  };
  return placement ? placementToCSSProp[placement] : "bottom";
}
var coercePlacement = function coercePlacement2(p) {
  return p === "auto" ? "bottom" : p;
};
var menuCSS = function menuCSS2(_ref23, unstyled) {
  var _objectSpread22;
  var placement = _ref23.placement, _ref2$theme = _ref23.theme, borderRadius2 = _ref2$theme.borderRadius, spacing2 = _ref2$theme.spacing, colors2 = _ref2$theme.colors;
  return _objectSpread2((_objectSpread22 = {
    label: "menu"
  }, _defineProperty(_objectSpread22, alignToControl(placement), "100%"), _defineProperty(_objectSpread22, "position", "absolute"), _defineProperty(_objectSpread22, "width", "100%"), _defineProperty(_objectSpread22, "zIndex", 1), _objectSpread22), unstyled ? {} : {
    backgroundColor: colors2.neutral0,
    borderRadius: borderRadius2,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: spacing2.menuGutter,
    marginTop: spacing2.menuGutter
  });
};
var PortalPlacementContext = (0, import_react5.createContext)(null);
var MenuPlacer = function MenuPlacer2(props) {
  var children = props.children, minMenuHeight = props.minMenuHeight, maxMenuHeight = props.maxMenuHeight, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition, menuShouldScrollIntoView = props.menuShouldScrollIntoView, theme = props.theme;
  var _ref3 = (0, import_react5.useContext)(PortalPlacementContext) || {}, setPortalPlacement = _ref3.setPortalPlacement;
  var ref = (0, import_react5.useRef)(null);
  var _useState = (0, import_react5.useState)(maxMenuHeight), _useState2 = _slicedToArray(_useState, 2), maxHeight = _useState2[0], setMaxHeight = _useState2[1];
  var _useState3 = (0, import_react5.useState)(null), _useState4 = _slicedToArray(_useState3, 2), placement = _useState4[0], setPlacement = _useState4[1];
  var controlHeight2 = theme.spacing.controlHeight;
  use_isomorphic_layout_effect_browser_esm_default(function() {
    var menuEl = ref.current;
    if (!menuEl)
      return;
    var isFixedPosition = menuPosition === "fixed";
    var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
    var state = getMenuPlacement({
      maxHeight: maxMenuHeight,
      menuEl,
      minHeight: minMenuHeight,
      placement: menuPlacement,
      shouldScroll,
      isFixedPosition,
      controlHeight: controlHeight2
    });
    setMaxHeight(state.maxHeight);
    setPlacement(state.placement);
    setPortalPlacement === null || setPortalPlacement === void 0 ? void 0 : setPortalPlacement(state.placement);
  }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, controlHeight2]);
  return children({
    ref,
    placerProps: _objectSpread2(_objectSpread2({}, props), {}, {
      placement: placement || coercePlacement(menuPlacement),
      maxHeight
    })
  });
};
var Menu = function Menu2(props) {
  var children = props.children, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "menu", {
    menu: true
  }), {
    ref: innerRef
  }, innerProps), children);
};
var Menu$1 = Menu;
var menuListCSS = function menuListCSS2(_ref4, unstyled) {
  var maxHeight = _ref4.maxHeight, baseUnit2 = _ref4.theme.spacing.baseUnit;
  return _objectSpread2({
    maxHeight,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, unstyled ? {} : {
    paddingBottom: baseUnit2,
    paddingTop: baseUnit2
  });
};
var MenuList = function MenuList2(props) {
  var children = props.children, innerProps = props.innerProps, innerRef = props.innerRef, isMulti = props.isMulti;
  return jsx("div", _extends({}, getStyleProps(props, "menuList", {
    "menu-list": true,
    "menu-list--is-multi": isMulti
  }), {
    ref: innerRef
  }, innerProps), children);
};
var noticeCSS = function noticeCSS2(_ref5, unstyled) {
  var _ref5$theme = _ref5.theme, baseUnit2 = _ref5$theme.spacing.baseUnit, colors2 = _ref5$theme.colors;
  return _objectSpread2({
    textAlign: "center"
  }, unstyled ? {} : {
    color: colors2.neutral40,
    padding: "".concat(baseUnit2 * 2, "px ").concat(baseUnit2 * 3, "px")
  });
};
var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage2(_ref6) {
  var _ref6$children = _ref6.children, children = _ref6$children === void 0 ? "No options" : _ref6$children, innerProps = _ref6.innerProps, restProps = _objectWithoutProperties(_ref6, _excluded$3);
  return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    children,
    innerProps
  }), "noOptionsMessage", {
    "menu-notice": true,
    "menu-notice--no-options": true
  }), innerProps), children);
};
var LoadingMessage = function LoadingMessage2(_ref7) {
  var _ref7$children = _ref7.children, children = _ref7$children === void 0 ? "Loading..." : _ref7$children, innerProps = _ref7.innerProps, restProps = _objectWithoutProperties(_ref7, _excluded2$1);
  return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    children,
    innerProps
  }), "loadingMessage", {
    "menu-notice": true,
    "menu-notice--loading": true
  }), innerProps), children);
};
var menuPortalCSS = function menuPortalCSS2(_ref8) {
  var rect = _ref8.rect, offset2 = _ref8.offset, position2 = _ref8.position;
  return {
    left: rect.left,
    position: position2,
    top: offset2,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = function MenuPortal2(props) {
  var appendTo = props.appendTo, children = props.children, controlElement = props.controlElement, innerProps = props.innerProps, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition;
  var menuPortalRef = (0, import_react5.useRef)(null);
  var cleanupRef = (0, import_react5.useRef)(null);
  var _useState5 = (0, import_react5.useState)(coercePlacement(menuPlacement)), _useState6 = _slicedToArray(_useState5, 2), placement = _useState6[0], setPortalPlacement = _useState6[1];
  var portalPlacementContext = (0, import_react5.useMemo)(function() {
    return {
      setPortalPlacement
    };
  }, []);
  var _useState7 = (0, import_react5.useState)(null), _useState8 = _slicedToArray(_useState7, 2), computedPosition = _useState8[0], setComputedPosition = _useState8[1];
  var updateComputedPosition = (0, import_react5.useCallback)(function() {
    if (!controlElement)
      return;
    var rect = getBoundingClientObj(controlElement);
    var scrollDistance = menuPosition === "fixed" ? 0 : window.pageYOffset;
    var offset2 = rect[placement] + scrollDistance;
    if (offset2 !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
      setComputedPosition({
        offset: offset2,
        rect
      });
    }
  }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
  use_isomorphic_layout_effect_browser_esm_default(function() {
    updateComputedPosition();
  }, [updateComputedPosition]);
  var runAutoUpdate = (0, import_react5.useCallback)(function() {
    if (typeof cleanupRef.current === "function") {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (controlElement && menuPortalRef.current) {
      cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, {
        elementResize: "ResizeObserver" in window
      });
    }
  }, [controlElement, updateComputedPosition]);
  use_isomorphic_layout_effect_browser_esm_default(function() {
    runAutoUpdate();
  }, [runAutoUpdate]);
  var setMenuPortalElement = (0, import_react5.useCallback)(function(menuPortalElement) {
    menuPortalRef.current = menuPortalElement;
    runAutoUpdate();
  }, [runAutoUpdate]);
  if (!appendTo && menuPosition !== "fixed" || !computedPosition)
    return null;
  var menuWrapper = jsx("div", _extends({
    ref: setMenuPortalElement
  }, getStyleProps(_objectSpread2(_objectSpread2({}, props), {}, {
    offset: computedPosition.offset,
    position: menuPosition,
    rect: computedPosition.rect
  }), "menuPortal", {
    "menu-portal": true
  }), innerProps), children);
  return jsx(PortalPlacementContext.Provider, {
    value: portalPlacementContext
  }, appendTo ? (0, import_react_dom.createPortal)(menuWrapper, appendTo) : menuWrapper);
};
var containerCSS = function containerCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled, isRtl = _ref3.isRtl;
  return {
    label: "container",
    direction: isRtl ? "rtl" : void 0,
    pointerEvents: isDisabled ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
};
var SelectContainer = function SelectContainer2(props) {
  var children = props.children, innerProps = props.innerProps, isDisabled = props.isDisabled, isRtl = props.isRtl;
  return jsx("div", _extends({}, getStyleProps(props, "container", {
    "--is-disabled": isDisabled,
    "--is-rtl": isRtl
  }), innerProps), children);
};
var valueContainerCSS = function valueContainerCSS2(_ref23, unstyled) {
  var spacing2 = _ref23.theme.spacing, isMulti = _ref23.isMulti, hasValue = _ref23.hasValue, controlShouldRenderValue = _ref23.selectProps.controlShouldRenderValue;
  return _objectSpread2({
    alignItems: "center",
    display: isMulti && hasValue && controlShouldRenderValue ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, unstyled ? {} : {
    padding: "".concat(spacing2.baseUnit / 2, "px ").concat(spacing2.baseUnit * 2, "px")
  });
};
var ValueContainer = function ValueContainer2(props) {
  var children = props.children, innerProps = props.innerProps, isMulti = props.isMulti, hasValue = props.hasValue;
  return jsx("div", _extends({}, getStyleProps(props, "valueContainer", {
    "value-container": true,
    "value-container--is-multi": isMulti,
    "value-container--has-value": hasValue
  }), innerProps), children);
};
var indicatorsContainerCSS = function indicatorsContainerCSS2() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "indicatorsContainer", {
    indicators: true
  }), innerProps), children);
};
var _templateObject;
var _excluded$2 = ["size"];
var _excluded2 = ["innerProps", "isRtl", "size"];
function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _ref2 = false ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var Svg = function Svg2(_ref3) {
  var size2 = _ref3.size, props = _objectWithoutProperties(_ref3, _excluded$2);
  return jsx("svg", _extends({
    height: size2,
    width: size2,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};
var CrossIcon = function CrossIcon2(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron2(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
};
var baseCSS = function baseCSS2(_ref3, unstyled) {
  var isFocused = _ref3.isFocused, _ref3$theme = _ref3.theme, baseUnit2 = _ref3$theme.spacing.baseUnit, colors2 = _ref3$theme.colors;
  return _objectSpread2({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, unstyled ? {} : {
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    padding: baseUnit2 * 2,
    ":hover": {
      color: isFocused ? colors2.neutral80 : colors2.neutral40
    }
  });
};
var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "dropdownIndicator", {
    indicator: true,
    "dropdown-indicator": true
  }), innerProps), children || jsx(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "clearIndicator", {
    indicator: true,
    "clear-indicator": true
  }), innerProps), children || jsx(CrossIcon, null));
};
var indicatorSeparatorCSS = function indicatorSeparatorCSS2(_ref4, unstyled) {
  var isDisabled = _ref4.isDisabled, _ref4$theme = _ref4.theme, baseUnit2 = _ref4$theme.spacing.baseUnit, colors2 = _ref4$theme.colors;
  return _objectSpread2({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors2.neutral10 : colors2.neutral20,
    marginBottom: baseUnit2 * 2,
    marginTop: baseUnit2 * 2
  });
};
var IndicatorSeparator = function IndicatorSeparator2(props) {
  var innerProps = props.innerProps;
  return jsx("span", _extends({}, innerProps, getStyleProps(props, "indicatorSeparator", {
    "indicator-separator": true
  })));
};
var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var loadingIndicatorCSS = function loadingIndicatorCSS2(_ref5, unstyled) {
  var isFocused = _ref5.isFocused, size2 = _ref5.size, _ref5$theme = _ref5.theme, colors2 = _ref5$theme.colors, baseUnit2 = _ref5$theme.spacing.baseUnit;
  return _objectSpread2({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: size2,
    lineHeight: 1,
    marginRight: size2,
    textAlign: "center",
    verticalAlign: "middle"
  }, unstyled ? {} : {
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    padding: baseUnit2 * 2
  });
};
var LoadingDot = function LoadingDot2(_ref6) {
  var delay = _ref6.delay, offset2 = _ref6.offset;
  return jsx("span", {
    css: css({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: offset2 ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, false ? "" : ";label:LoadingDot;", false ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */")
  });
};
var LoadingIndicator = function LoadingIndicator2(_ref7) {
  var innerProps = _ref7.innerProps, isRtl = _ref7.isRtl, _ref7$size = _ref7.size, size2 = _ref7$size === void 0 ? 4 : _ref7$size, restProps = _objectWithoutProperties(_ref7, _excluded2);
  return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    innerProps,
    isRtl,
    size: size2
  }), "loadingIndicator", {
    indicator: true,
    "loading-indicator": true
  }), innerProps), jsx(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), jsx(LoadingDot, {
    delay: 160,
    offset: true
  }), jsx(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
var css$1 = function css2(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, _ref$theme = _ref3.theme, colors2 = _ref$theme.colors, borderRadius2 = _ref$theme.borderRadius, spacing2 = _ref$theme.spacing;
  return _objectSpread2({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: spacing2.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors2.neutral5 : colors2.neutral0,
    borderColor: isDisabled ? colors2.neutral10 : isFocused ? colors2.primary : colors2.neutral20,
    borderRadius: borderRadius2,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors2.primary) : void 0,
    "&:hover": {
      borderColor: isFocused ? colors2.primary : colors2.neutral30
    }
  });
};
var Control = function Control2(props) {
  var children = props.children, isDisabled = props.isDisabled, isFocused = props.isFocused, innerRef = props.innerRef, innerProps = props.innerProps, menuIsOpen = props.menuIsOpen;
  return jsx("div", _extends({
    ref: innerRef
  }, getStyleProps(props, "control", {
    control: true,
    "control--is-disabled": isDisabled,
    "control--is-focused": isFocused,
    "control--menu-is-open": menuIsOpen
  }), innerProps, {
    "aria-disabled": isDisabled || void 0
  }), children);
};
var Control$1 = Control;
var _excluded$1 = ["data"];
var groupCSS = function groupCSS2(_ref3, unstyled) {
  var spacing2 = _ref3.theme.spacing;
  return unstyled ? {} : {
    paddingBottom: spacing2.baseUnit * 2,
    paddingTop: spacing2.baseUnit * 2
  };
};
var Group = function Group2(props) {
  var children = props.children, cx = props.cx, getStyles = props.getStyles, getClassNames = props.getClassNames, Heading = props.Heading, headingProps = props.headingProps, innerProps = props.innerProps, label = props.label, theme = props.theme, selectProps = props.selectProps;
  return jsx("div", _extends({}, getStyleProps(props, "group", {
    group: true
  }), innerProps), jsx(Heading, _extends({}, headingProps, {
    selectProps,
    theme,
    getStyles,
    getClassNames,
    cx
  }), label), jsx("div", null, children));
};
var groupHeadingCSS = function groupHeadingCSS2(_ref23, unstyled) {
  var _ref2$theme = _ref23.theme, colors2 = _ref2$theme.colors, spacing2 = _ref2$theme.spacing;
  return _objectSpread2({
    label: "group",
    cursor: "default",
    display: "block"
  }, unstyled ? {} : {
    color: colors2.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: spacing2.baseUnit * 3,
    paddingRight: spacing2.baseUnit * 3,
    textTransform: "uppercase"
  });
};
var GroupHeading = function GroupHeading2(props) {
  var _cleanCommonProps = cleanCommonProps(props);
  _cleanCommonProps.data;
  var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
  return jsx("div", _extends({}, getStyleProps(props, "groupHeading", {
    "group-heading": true
  }), innerProps));
};
var Group$1 = Group;
var _excluded3 = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
var inputCSS = function inputCSS2(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, value = _ref3.value, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2(_objectSpread2({
    visibility: isDisabled ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: value ? "translateZ(0)" : ""
  }, containerStyle), unstyled ? {} : {
    margin: spacing2.baseUnit / 2,
    paddingBottom: spacing2.baseUnit / 2,
    paddingTop: spacing2.baseUnit / 2,
    color: colors2.neutral80
  });
};
var spacingStyle = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
};
var containerStyle = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": _objectSpread2({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, spacingStyle)
};
var inputStyle = function inputStyle2(isHidden) {
  return _objectSpread2({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: isHidden ? 0 : 1,
    width: "100%"
  }, spacingStyle);
};
var Input = function Input2(props) {
  var cx = props.cx, value = props.value;
  var _cleanCommonProps = cleanCommonProps(props), innerRef = _cleanCommonProps.innerRef, isDisabled = _cleanCommonProps.isDisabled, isHidden = _cleanCommonProps.isHidden, inputClassName = _cleanCommonProps.inputClassName, innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded3);
  return jsx("div", _extends({}, getStyleProps(props, "input", {
    "input-container": true
  }), {
    "data-value": value || ""
  }), jsx("input", _extends({
    className: cx({
      input: true
    }, inputClassName),
    ref: innerRef,
    style: inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};
var Input$1 = Input;
var multiValueCSS = function multiValueCSS2(_ref3, unstyled) {
  var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, borderRadius2 = _ref$theme.borderRadius, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, unstyled ? {} : {
    backgroundColor: colors2.neutral10,
    borderRadius: borderRadius2 / 2,
    margin: spacing2.baseUnit / 2
  });
};
var multiValueLabelCSS = function multiValueLabelCSS2(_ref23, unstyled) {
  var _ref2$theme = _ref23.theme, borderRadius2 = _ref2$theme.borderRadius, colors2 = _ref2$theme.colors, cropWithEllipsis = _ref23.cropWithEllipsis;
  return _objectSpread2({
    overflow: "hidden",
    textOverflow: cropWithEllipsis || cropWithEllipsis === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, unstyled ? {} : {
    borderRadius: borderRadius2 / 2,
    color: colors2.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
};
var multiValueRemoveCSS = function multiValueRemoveCSS2(_ref3, unstyled) {
  var _ref3$theme = _ref3.theme, spacing2 = _ref3$theme.spacing, borderRadius2 = _ref3$theme.borderRadius, colors2 = _ref3$theme.colors, isFocused = _ref3.isFocused;
  return _objectSpread2({
    alignItems: "center",
    display: "flex"
  }, unstyled ? {} : {
    borderRadius: borderRadius2 / 2,
    backgroundColor: isFocused ? colors2.dangerLight : void 0,
    paddingLeft: spacing2.baseUnit,
    paddingRight: spacing2.baseUnit,
    ":hover": {
      backgroundColor: colors2.dangerLight,
      color: colors2.danger
    }
  });
};
var MultiValueGeneric = function MultiValueGeneric2(_ref4) {
  var children = _ref4.children, innerProps = _ref4.innerProps;
  return jsx("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children, innerProps = _ref5.innerProps;
  return jsx("div", _extends({
    role: "button"
  }, innerProps), children || jsx(CrossIcon, {
    size: 14
  }));
}
var MultiValue = function MultiValue2(props) {
  var children = props.children, components2 = props.components, data = props.data, innerProps = props.innerProps, isDisabled = props.isDisabled, removeProps3 = props.removeProps, selectProps = props.selectProps;
  var Container = components2.Container, Label = components2.Label, Remove = components2.Remove;
  return jsx(Container, {
    data,
    innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, "multiValue", {
      "multi-value": true,
      "multi-value--is-disabled": isDisabled
    })), innerProps),
    selectProps
  }, jsx(Label, {
    data,
    innerProps: _objectSpread2({}, getStyleProps(props, "multiValueLabel", {
      "multi-value__label": true
    })),
    selectProps
  }, children), jsx(Remove, {
    data,
    innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, "multiValueRemove", {
      "multi-value__remove": true
    })), {}, {
      "aria-label": "Remove ".concat(children || "option")
    }, removeProps3),
    selectProps
  }));
};
var MultiValue$1 = MultiValue;
var optionCSS = function optionCSS2(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, isSelected = _ref3.isSelected, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, unstyled ? {} : {
    backgroundColor: isSelected ? colors2.primary : isFocused ? colors2.primary25 : "transparent",
    color: isDisabled ? colors2.neutral20 : isSelected ? colors2.neutral0 : "inherit",
    padding: "".concat(spacing2.baseUnit * 2, "px ").concat(spacing2.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: !isDisabled ? isSelected ? colors2.primary : colors2.primary50 : void 0
    }
  });
};
var Option = function Option2(props) {
  var children = props.children, isDisabled = props.isDisabled, isFocused = props.isFocused, isSelected = props.isSelected, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "option", {
    option: true,
    "option--is-disabled": isDisabled,
    "option--is-focused": isFocused,
    "option--is-selected": isSelected
  }), {
    ref: innerRef,
    "aria-disabled": isDisabled
  }, innerProps), children);
};
var Option$1 = Option;
var placeholderCSS = function placeholderCSS2(_ref3, unstyled) {
  var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, unstyled ? {} : {
    color: colors2.neutral50,
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2
  });
};
var Placeholder = function Placeholder2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "placeholder", {
    placeholder: true
  }), innerProps), children);
};
var Placeholder$1 = Placeholder;
var css3 = function css4(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, unstyled ? {} : {
    color: isDisabled ? colors2.neutral40 : colors2.neutral80,
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2
  });
};
var SingleValue = function SingleValue2(props) {
  var children = props.children, isDisabled = props.isDisabled, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "singleValue", {
    "single-value": true,
    "single-value--is-disabled": isDisabled
  }), innerProps), children);
};
var SingleValue$1 = SingleValue;
var components = {
  ClearIndicator,
  Control: Control$1,
  DropdownIndicator,
  DownChevron,
  CrossIcon,
  Group: Group$1,
  GroupHeading,
  IndicatorsContainer,
  IndicatorSeparator,
  Input: Input$1,
  LoadingIndicator,
  Menu: Menu$1,
  MenuList,
  MenuPortal,
  LoadingMessage,
  NoOptionsMessage,
  MultiValue: MultiValue$1,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Option: Option$1,
  Placeholder: Placeholder$1,
  SelectContainer,
  SingleValue: SingleValue$1,
  ValueContainer
};
var defaultComponents = function defaultComponents2(props) {
  return _objectSpread2(_objectSpread2({}, components), props.components);
};

// node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var cache2 = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache2 && cache2.lastThis === this && isEqual2(newArgs, cache2.lastArgs)) {
      return cache2.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache2 = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache2 = null;
  };
  return memoized;
}

// node_modules/react-select/dist/Select-49a62830.esm.js
function _EMOTION_STRINGIFIED_CSS_ERROR__$2() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _ref = false ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};
var A11yText = function A11yText2(props) {
  return jsx("span", _extends({
    css: _ref
  }, props));
};
var A11yText$1 = A11yText;
var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable, isMulti = props.isMulti, tabSelectsValue = props.tabSelectsValue, context = props.context, isInitialFocus = props.isInitialFocus;
    switch (context) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(tabSelectsValue ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return isInitialFocus ? "".concat(props["aria-label"] || "Select", " is focused ").concat(isSearchable ? ",type to refine list" : "", ", press Down to open the menu, ").concat(isMulti ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function onChange(props) {
    var action = props.action, _props$label = props.label, label = _props$label === void 0 ? "" : _props$label, labels = props.labels, isDisabled = props.isDisabled;
    switch (action) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(label, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(labels.length > 1 ? "s" : "", " ").concat(labels.join(","), ", selected.");
      case "select-option":
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context, focused = props.focused, options2 = props.options, _props$label2 = props.label, label = _props$label2 === void 0 ? "" : _props$label2, selectValue = props.selectValue, isDisabled = props.isDisabled, isSelected = props.isSelected, isAppleDevice2 = props.isAppleDevice;
    var getArrayIndex = function getArrayIndex2(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : "";
    };
    if (context === "value" && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }
    if (context === "menu" && isAppleDevice2) {
      var disabled = isDisabled ? " disabled" : "";
      var status = "".concat(isSelected ? " selected" : "").concat(disabled);
      return "".concat(label).concat(status, ", ").concat(getArrayIndex(options2, focused), ".");
    }
    return "";
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue, resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? " for search term " + inputValue : "", ".");
  }
};
var LiveRegion = function LiveRegion2(props) {
  var ariaSelection = props.ariaSelection, focusedOption = props.focusedOption, focusedValue = props.focusedValue, focusableOptions = props.focusableOptions, isFocused = props.isFocused, selectValue = props.selectValue, selectProps = props.selectProps, id = props.id, isAppleDevice2 = props.isAppleDevice;
  var ariaLiveMessages = selectProps.ariaLiveMessages, getOptionLabel4 = selectProps.getOptionLabel, inputValue = selectProps.inputValue, isMulti = selectProps.isMulti, isOptionDisabled3 = selectProps.isOptionDisabled, isSearchable = selectProps.isSearchable, menuIsOpen = selectProps.menuIsOpen, options2 = selectProps.options, screenReaderStatus2 = selectProps.screenReaderStatus, tabSelectsValue = selectProps.tabSelectsValue, isLoading = selectProps.isLoading;
  var ariaLabel = selectProps["aria-label"];
  var ariaLive = selectProps["aria-live"];
  var messages = (0, import_react6.useMemo)(function() {
    return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]);
  var ariaSelected = (0, import_react6.useMemo)(function() {
    var message = "";
    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option, selectedOptions = ariaSelection.options, removedValue = ariaSelection.removedValue, removedValues = ariaSelection.removedValues, value = ariaSelection.value;
      var asOption = function asOption2(val) {
        return !Array.isArray(val) ? val : null;
      };
      var selected = removedValue || option || asOption(value);
      var label = selected ? getOptionLabel4(selected) : "";
      var multiSelected = selectedOptions || removedValues || void 0;
      var labels = multiSelected ? multiSelected.map(getOptionLabel4) : [];
      var onChangeProps = _objectSpread2({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: selected && isOptionDisabled3(selected, selectValue),
        label,
        labels
      }, ariaSelection);
      message = messages.onChange(onChangeProps);
    }
    return message;
  }, [ariaSelection, messages, isOptionDisabled3, selectValue, getOptionLabel4]);
  var ariaFocused = (0, import_react6.useMemo)(function() {
    var focusMsg = "";
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused,
        label: getOptionLabel4(focused),
        isDisabled: isOptionDisabled3(focused, selectValue),
        isSelected,
        options: focusableOptions,
        context: focused === focusedOption ? "menu" : "value",
        selectValue,
        isAppleDevice: isAppleDevice2
      };
      focusMsg = messages.onFocus(onFocusProps);
    }
    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel4, isOptionDisabled3, messages, focusableOptions, selectValue, isAppleDevice2]);
  var ariaResults = (0, import_react6.useMemo)(function() {
    var resultsMsg = "";
    if (menuIsOpen && options2.length && !isLoading && messages.onFilter) {
      var resultsMessage = screenReaderStatus2({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue,
        resultsMessage
      });
    }
    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options2, screenReaderStatus2, isLoading]);
  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus";
  var ariaGuidance = (0, import_react6.useMemo)(function() {
    var guidanceMsg = "";
    if (messages.guidance) {
      var context = focusedValue ? "value" : menuIsOpen ? "menu" : "input";
      guidanceMsg = messages.guidance({
        "aria-label": ariaLabel,
        context,
        isDisabled: focusedOption && isOptionDisabled3(focusedOption, selectValue),
        isMulti,
        isSearchable,
        tabSelectsValue,
        isInitialFocus
      });
    }
    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled3, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue, isInitialFocus]);
  var ScreenReaderText = jsx(import_react6.Fragment, null, jsx("span", {
    id: "aria-selection"
  }, ariaSelected), jsx("span", {
    id: "aria-focused"
  }, ariaFocused), jsx("span", {
    id: "aria-results"
  }, ariaResults), jsx("span", {
    id: "aria-guidance"
  }, ariaGuidance));
  return jsx(import_react6.Fragment, null, jsx(A11yText$1, {
    id
  }, isInitialFocus && ScreenReaderText), jsx(A11yText$1, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, isFocused && !isInitialFocus && ScreenReaderText));
};
var LiveRegion$1 = LiveRegion;
var diacritics = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}];
var anyDiacritic = new RegExp("[" + diacritics.map(function(d) {
  return d.letters;
}).join("") + "]", "g");
var diacriticToBase = {};
for (i = 0; i < diacritics.length; i++) {
  diacritic = diacritics[i];
  for (j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}
var diacritic;
var j;
var i;
var stripDiacritics = function stripDiacritics2(str) {
  return str.replace(anyDiacritic, function(match2) {
    return diacriticToBase[match2];
  });
};
var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
var trimString = function trimString2(str) {
  return str.replace(/^\s+|\s+$/g, "");
};
var defaultStringify = function defaultStringify2(option) {
  return "".concat(option.label, " ").concat(option.value);
};
var createFilter = function createFilter2(config) {
  return function(option, rawInput) {
    if (option.data.__isNew__)
      return true;
    var _ignoreCase$ignoreAcc = _objectSpread2({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: "any"
    }, config), ignoreCase = _ignoreCase$ignoreAcc.ignoreCase, ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents, stringify2 = _ignoreCase$ignoreAcc.stringify, trim2 = _ignoreCase$ignoreAcc.trim, matchFrom = _ignoreCase$ignoreAcc.matchFrom;
    var input = trim2 ? trimString(rawInput) : rawInput;
    var candidate = trim2 ? trimString(stringify2(option)) : stringify2(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }
    return matchFrom === "start" ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};
var _excluded4 = ["innerRef"];
function DummyInput(_ref3) {
  var innerRef = _ref3.innerRef, props = _objectWithoutProperties(_ref3, _excluded4);
  var filteredProps = removeProps(props, "onExited", "in", "enter", "exit", "appear");
  return jsx("input", _extends({
    ref: innerRef
  }, filteredProps, {
    css: css({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, false ? "" : ";label:DummyInput;", false ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgcmVtb3ZlUHJvcHMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbm5lclJlZixcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW5wdXQnXSAmIHtcbiAgcmVhZG9ubHkgaW5uZXJSZWY6IFJlZjxIVE1MSW5wdXRFbGVtZW50Pjtcbn0pIHtcbiAgLy8gUmVtb3ZlIGFuaW1hdGlvbiBwcm9wcyBub3QgbWVhbnQgZm9yIEhUTUwgZWxlbWVudHNcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IHJlbW92ZVByb3BzKFxuICAgIHByb3BzLFxuICAgICdvbkV4aXRlZCcsXG4gICAgJ2luJyxcbiAgICAnZW50ZXInLFxuICAgICdleGl0JyxcbiAgICAnYXBwZWFyJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLmZpbHRlcmVkUHJvcHN9XG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgICBjYXJldENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICB3aWR0aDogMSxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgICBsZWZ0OiAtMTAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjAxKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */")
  }));
}
var cancelScroll = function cancelScroll2(event) {
  if (event.cancelable)
    event.preventDefault();
  event.stopPropagation();
};
function useScrollCapture(_ref3) {
  var isEnabled = _ref3.isEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var isBottom = (0, import_react6.useRef)(false);
  var isTop = (0, import_react6.useRef)(false);
  var touchStart = (0, import_react6.useRef)(0);
  var scrollTarget = (0, import_react6.useRef)(null);
  var handleEventDelta = (0, import_react6.useCallback)(function(event, delta) {
    if (scrollTarget.current === null)
      return;
    var _scrollTarget$current = scrollTarget.current, scrollTop = _scrollTarget$current.scrollTop, scrollHeight = _scrollTarget$current.scrollHeight, clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false;
    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave)
        onBottomLeave(event);
      isBottom.current = false;
    }
    if (isDeltaPositive && isTop.current) {
      if (onTopLeave)
        onTopLeave(event);
      isTop.current = false;
    }
    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }
      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true;
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }
      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    }
    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
  var onWheel = (0, import_react6.useCallback)(function(event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = (0, import_react6.useCallback)(function(event) {
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = (0, import_react6.useCallback)(function(event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = (0, import_react6.useCallback)(function(el) {
    if (!el)
      return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false;
    el.addEventListener("wheel", onWheel, notPassive);
    el.addEventListener("touchstart", onTouchStart, notPassive);
    el.addEventListener("touchmove", onTouchMove, notPassive);
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = (0, import_react6.useCallback)(function(el) {
    if (!el)
      return;
    el.removeEventListener("wheel", onWheel, false);
    el.removeEventListener("touchstart", onTouchStart, false);
    el.removeEventListener("touchmove", onTouchMove, false);
  }, [onTouchMove, onTouchStart, onWheel]);
  (0, import_react6.useEffect)(function() {
    if (!isEnabled)
      return;
    var element = scrollTarget.current;
    startListening(element);
    return function() {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function(element) {
    scrollTarget.current = element;
  };
}
var STYLE_KEYS = ["boxSizing", "height", "overflow", "paddingRight", "position"];
var LOCK_STYLES = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;
  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}
function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref3) {
  var isEnabled = _ref3.isEnabled, _ref$accountForScroll = _ref3.accountForScrollbars, accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = (0, import_react6.useRef)({});
  var scrollTarget = (0, import_react6.useRef)(null);
  var addScrollLock = (0, import_react6.useCallback)(function(touchScrollTarget) {
    if (!canUseDOM)
      return;
    var target = document.body;
    var targetStyle = target && target.style;
    if (accountForScrollbars) {
      STYLE_KEYS.forEach(function(key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    }
    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function(key) {
        var val = LOCK_STYLES[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    }
    if (target && isTouchDevice()) {
      target.addEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.addEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
    activeScrollLocks += 1;
  }, [accountForScrollbars]);
  var removeScrollLock = (0, import_react6.useCallback)(function(touchScrollTarget) {
    if (!canUseDOM)
      return;
    var target = document.body;
    var targetStyle = target && target.style;
    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);
    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function(key) {
        var val = originalStyles.current[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    }
    if (target && isTouchDevice()) {
      target.removeEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
  }, [accountForScrollbars]);
  (0, import_react6.useEffect)(function() {
    if (!isEnabled)
      return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function() {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function(element) {
    scrollTarget.current = element;
  };
}
function _EMOTION_STRINGIFIED_CSS_ERROR__$1() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var blurSelectInput = function blurSelectInput2(event) {
  var element = event.target;
  return element.ownerDocument.activeElement && element.ownerDocument.activeElement.blur();
};
var _ref2$1 = false ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};
function ScrollManager(_ref3) {
  var children = _ref3.children, lockEnabled = _ref3.lockEnabled, _ref$captureEnabled = _ref3.captureEnabled, captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive,
    onBottomLeave,
    onTopArrive,
    onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });
  var targetRef = function targetRef2(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };
  return jsx(import_react6.Fragment, null, lockEnabled && jsx("div", {
    onClick: blurSelectInput,
    css: _ref2$1
  }), children(targetRef));
}
function _EMOTION_STRINGIFIED_CSS_ERROR__2() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _ref22 = false ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__2
};
var RequiredInput = function RequiredInput2(_ref3) {
  var name = _ref3.name, onFocus2 = _ref3.onFocus;
  return jsx("input", {
    required: true,
    name,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: onFocus2,
    css: _ref22,
    value: "",
    onChange: function onChange2() {
    }
  });
};
var RequiredInput$1 = RequiredInput;
function testPlatform(re) {
  var _window$navigator$use;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window$navigator$use = window.navigator["userAgentData"]) === null || _window$navigator$use === void 0 ? void 0 : _window$navigator$use.platform) || window.navigator.platform) : false;
}
function isIPhone() {
  return testPlatform(/^iPhone/i);
}
function isMac() {
  return testPlatform(/^Mac/i);
}
function isIPad() {
  return testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
  return isIPhone() || isIPad();
}
function isAppleDevice() {
  return isMac() || isIOS();
}
var formatGroupLabel = function formatGroupLabel2(group) {
  return group.label;
};
var getOptionLabel$1 = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue$1 = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled2(option) {
  return !!option.isDisabled;
};
var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css3,
  valueContainer: valueContainerCSS
};
var colors = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
};
var borderRadius = 4;
var baseUnit = 4;
var controlHeight = 38;
var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit,
  controlHeight,
  menuGutter
};
var defaultTheme = {
  borderRadius,
  colors,
  spacing
};
var defaultProps = {
  "aria-live": "polite",
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  classNames: {},
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel,
  getOptionLabel: getOptionLabel$1,
  getOptionValue: getOptionValue$1,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return "No options";
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function screenReaderStatus(_ref3) {
    var count = _ref3.count;
    return "".concat(count, " result").concat(count !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: true,
  unstyled: false
};
function toCategorizedOption(props, option, selectValue, index2) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);
  var isSelected = _isOptionSelected(props, option, selectValue);
  var label = getOptionLabel2(props, option);
  var value = getOptionValue2(props, option);
  return {
    type: "option",
    data: option,
    isDisabled,
    isSelected,
    label,
    value,
    index: index2
  };
}
function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function(groupOrOption, groupOrOptionIndex) {
    if ("options" in groupOrOption) {
      var categorizedOptions = groupOrOption.options.map(function(option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function(categorizedOption2) {
        return isFocusable(props, categorizedOption2);
      });
      return categorizedOptions.length > 0 ? {
        type: "group",
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : void 0;
    }
    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : void 0;
  }).filter(notNullish);
}
function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === "group") {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function(option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptionsWithIds(categorizedOptions, optionId) {
  return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === "group") {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function(option) {
        return {
          data: option.data,
          id: "".concat(optionId, "-").concat(categorizedOption.index, "-").concat(option.index)
        };
      })));
    } else {
      optionsAccumulator.push({
        data: categorizedOption.data,
        id: "".concat(optionId, "-").concat(categorizedOption.index)
      });
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}
function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue, inputValue = _props$inputValue === void 0 ? "" : _props$inputValue;
  var data = categorizedOption.data, isSelected = categorizedOption.isSelected, label = categorizedOption.label, value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label,
    value,
    data
  }, inputValue);
}
function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue, lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
    if (nextFocusedIndex > -1) {
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      return nextSelectValue[lastFocusedIndex];
    }
  }
  return null;
}
function getNextFocusedOption(state, options2) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options2.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options2[0];
}
var getFocusedOptionId = function getFocusedOptionId2(focusableOptionsWithIds, focusedOption) {
  var _focusableOptionsWith;
  var focusedOptionId = (_focusableOptionsWith = focusableOptionsWithIds.find(function(option) {
    return option.data === focusedOption;
  })) === null || _focusableOptionsWith === void 0 ? void 0 : _focusableOptionsWith.id;
  return focusedOptionId || null;
};
var getOptionLabel2 = function getOptionLabel3(props, data) {
  return props.getOptionLabel(data);
};
var getOptionValue2 = function getOptionValue3(props, data) {
  return props.getOptionValue(data);
};
function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === "function" ? props.isOptionDisabled(option, selectValue) : false;
}
function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1)
    return true;
  if (typeof props.isOptionSelected === "function") {
    return props.isOptionSelected(option, selectValue);
  }
  var candidate = getOptionValue2(props, option);
  return selectValue.some(function(i) {
    return getOptionValue2(props, i) === candidate;
  });
}
function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var shouldHideSelectedOptions = function shouldHideSelectedOptions2(props) {
  var hideSelectedOptions = props.hideSelectedOptions, isMulti = props.isMulti;
  if (hideSelectedOptions === void 0)
    return isMulti;
  return hideSelectedOptions;
};
var instanceId = 1;
var Select = function(_Component) {
  _inherits(Select2, _Component);
  var _super = _createSuper(Select2);
  function Select2(_props) {
    var _this;
    _classCallCheck(this, Select2);
    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      prevWasFocused: false,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: ""
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.isAppleDevice = isAppleDevice();
    _this.controlRef = null;
    _this.getControlRef = function(ref) {
      _this.controlRef = ref;
    };
    _this.focusedOptionRef = null;
    _this.getFocusedOptionRef = function(ref) {
      _this.focusedOptionRef = ref;
    };
    _this.menuListRef = null;
    _this.getMenuListRef = function(ref) {
      _this.menuListRef = ref;
    };
    _this.inputRef = null;
    _this.getInputRef = function(ref) {
      _this.inputRef = ref;
    };
    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;
    _this.onChange = function(newValue, actionMeta) {
      var _this$props = _this.props, onChange2 = _this$props.onChange, name = _this$props.name;
      actionMeta.name = name;
      _this.ariaOnChange(newValue, actionMeta);
      onChange2(newValue, actionMeta);
    };
    _this.setValue = function(newValue, action, option) {
      var _this$props2 = _this.props, closeMenuOnSelect = _this$props2.closeMenuOnSelect, isMulti = _this$props2.isMulti, inputValue = _this$props2.inputValue;
      _this.onInputChange("", {
        action: "set-value",
        prevInputValue: inputValue
      });
      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      }
      _this.setState({
        clearFocusValueOnUpdate: true
      });
      _this.onChange(newValue, {
        action,
        option
      });
    };
    _this.selectOption = function(newValue) {
      var _this$props3 = _this.props, blurInputOnSelect = _this$props3.blurInputOnSelect, isMulti = _this$props3.isMulti, name = _this$props3.name;
      var selectValue = _this.state.selectValue;
      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
      var isDisabled = _this.isOptionDisabled(newValue, selectValue);
      if (deselected) {
        var candidate = _this.getOptionValue(newValue);
        _this.setValue(multiValueAsValue(selectValue.filter(function(i) {
          return _this.getOptionValue(i) !== candidate;
        })), "deselect-option", newValue);
      } else if (!isDisabled) {
        if (isMulti) {
          _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), "select-option", newValue);
        } else {
          _this.setValue(singleValueAsValue(newValue), "select-option");
        }
      } else {
        _this.ariaOnChange(singleValueAsValue(newValue), {
          action: "select-option",
          option: newValue,
          name
        });
        return;
      }
      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };
    _this.removeValue = function(removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var candidate = _this.getOptionValue(removedValue);
      var newValueArray = selectValue.filter(function(i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: "remove-value",
        removedValue
      });
      _this.focusInput();
    };
    _this.clearValue = function() {
      var selectValue = _this.state.selectValue;
      _this.onChange(valueTernary(_this.props.isMulti, [], null), {
        action: "clear",
        removedValues: selectValue
      });
    };
    _this.popValue = function() {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: "pop-value",
        removedValue: lastSelectedValue
      });
    };
    _this.getFocusedOptionId = function(focusedOption) {
      return getFocusedOptionId(_this.state.focusableOptionsWithIds, focusedOption);
    };
    _this.getFocusableOptionsWithIds = function() {
      return buildFocusableOptionsWithIds(buildCategorizedOptions(_this.props, _this.state.selectValue), _this.getElementId("option"));
    };
    _this.getValue = function() {
      return _this.state.selectValue;
    };
    _this.cx = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };
    _this.getOptionLabel = function(data) {
      return getOptionLabel2(_this.props, data);
    };
    _this.getOptionValue = function(data) {
      return getOptionValue2(_this.props, data);
    };
    _this.getStyles = function(key, props) {
      var unstyled = _this.props.unstyled;
      var base = defaultStyles[key](props, unstyled);
      base.boxSizing = "border-box";
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };
    _this.getClassNames = function(key, props) {
      var _this$props$className, _this$props$className2;
      return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
    };
    _this.getElementId = function(element) {
      return "".concat(_this.state.instancePrefix, "-").concat(element);
    };
    _this.getComponents = function() {
      return defaultComponents(_this.props);
    };
    _this.buildCategorizedOptions = function() {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };
    _this.getCategorizedOptions = function() {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };
    _this.buildFocusableOptions = function() {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };
    _this.getFocusableOptions = function() {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };
    _this.ariaOnChange = function(value, actionMeta) {
      _this.setState({
        ariaSelection: _objectSpread2({
          value
        }, actionMeta)
      });
    };
    _this.onMenuMouseDown = function(event) {
      if (event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      _this.focusInput();
    };
    _this.onMenuMouseMove = function(event) {
      _this.blockOptionHover = false;
    };
    _this.onControlMouseDown = function(event) {
      if (event.defaultPrevented) {
        return;
      }
      var openMenuOnClick = _this.props.openMenuOnClick;
      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }
        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu("first");
        }
      } else {
        if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
          _this.onMenuClose();
        }
      }
      if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
        event.preventDefault();
      }
    };
    _this.onDropdownIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      if (_this.props.isDisabled)
        return;
      var _this$props4 = _this.props, isMulti = _this$props4.isMulti, menuIsOpen = _this$props4.menuIsOpen;
      _this.focusInput();
      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      } else {
        _this.openMenu("first");
      }
      event.preventDefault();
    };
    _this.onClearIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      _this.clearValue();
      event.preventDefault();
      _this.openAfterFocus = false;
      if (event.type === "touchend") {
        _this.focusInput();
      } else {
        setTimeout(function() {
          return _this.focusInput();
        });
      }
    };
    _this.onScroll = function(event) {
      if (typeof _this.props.closeMenuOnScroll === "boolean") {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === "function") {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };
    _this.onCompositionStart = function() {
      _this.isComposing = true;
    };
    _this.onCompositionEnd = function() {
      _this.isComposing = false;
    };
    _this.onTouchStart = function(_ref23) {
      var touches = _ref23.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };
    _this.onTouchMove = function(_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };
    _this.onTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      }
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };
    _this.onControlTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      _this.onControlMouseDown(event);
    };
    _this.onClearIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      _this.onClearIndicatorMouseDown(event);
    };
    _this.onDropdownIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      _this.onDropdownIndicatorMouseDown(event);
    };
    _this.handleInputChange = function(event) {
      var prevInputValue = _this.props.inputValue;
      var inputValue = event.currentTarget.value;
      _this.setState({
        inputIsHiddenAfterUpdate: false
      });
      _this.onInputChange(inputValue, {
        action: "input-change",
        prevInputValue
      });
      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };
    _this.onInputFocus = function(event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });
      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu("first");
      }
      _this.openAfterFocus = false;
    };
    _this.onInputBlur = function(event) {
      var prevInputValue = _this.props.inputValue;
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();
        return;
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
      _this.onInputChange("", {
        action: "input-blur",
        prevInputValue
      });
      _this.onMenuClose();
      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };
    _this.onOptionHover = function(focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }
      var options2 = _this.getFocusableOptions();
      var focusedOptionIndex = options2.indexOf(focusedOption);
      _this.setState({
        focusedOption,
        focusedOptionId: focusedOptionIndex > -1 ? _this.getFocusedOptionId(focusedOption) : null
      });
    };
    _this.shouldHideSelectedOptions = function() {
      return shouldHideSelectedOptions(_this.props);
    };
    _this.onValueInputFocus = function(e) {
      e.preventDefault();
      e.stopPropagation();
      _this.focus();
    };
    _this.onKeyDown = function(event) {
      var _this$props5 = _this.props, isMulti = _this$props5.isMulti, backspaceRemovesValue = _this$props5.backspaceRemovesValue, escapeClearsValue = _this$props5.escapeClearsValue, inputValue = _this$props5.inputValue, isClearable = _this$props5.isClearable, isDisabled = _this$props5.isDisabled, menuIsOpen = _this$props5.menuIsOpen, onKeyDown = _this$props5.onKeyDown, tabSelectsValue = _this$props5.tabSelectsValue, openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state, focusedOption = _this$state.focusedOption, focusedValue = _this$state.focusedValue, selectValue = _this$state.selectValue;
      if (isDisabled)
        return;
      if (typeof onKeyDown === "function") {
        onKeyDown(event);
        if (event.defaultPrevented) {
          return;
        }
      }
      _this.blockOptionHover = true;
      switch (event.key) {
        case "ArrowLeft":
          if (!isMulti || inputValue)
            return;
          _this.focusValue("previous");
          break;
        case "ArrowRight":
          if (!isMulti || inputValue)
            return;
          _this.focusValue("next");
          break;
        case "Delete":
        case "Backspace":
          if (inputValue)
            return;
          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue)
              return;
            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }
          break;
        case "Tab":
          if (_this.isComposing)
            return;
          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }
          _this.selectOption(focusedOption);
          break;
        case "Enter":
          if (event.keyCode === 229) {
            break;
          }
          if (menuIsOpen) {
            if (!focusedOption)
              return;
            if (_this.isComposing)
              return;
            _this.selectOption(focusedOption);
            break;
          }
          return;
        case "Escape":
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });
            _this.onInputChange("", {
              action: "menu-close",
              prevInputValue: inputValue
            });
            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }
          break;
        case " ":
          if (inputValue) {
            return;
          }
          if (!menuIsOpen) {
            _this.openMenu("first");
            break;
          }
          if (!focusedOption)
            return;
          _this.selectOption(focusedOption);
          break;
        case "ArrowUp":
          if (menuIsOpen) {
            _this.focusOption("up");
          } else {
            _this.openMenu("last");
          }
          break;
        case "ArrowDown":
          if (menuIsOpen) {
            _this.focusOption("down");
          } else {
            _this.openMenu("first");
          }
          break;
        case "PageUp":
          if (!menuIsOpen)
            return;
          _this.focusOption("pageup");
          break;
        case "PageDown":
          if (!menuIsOpen)
            return;
          _this.focusOption("pagedown");
          break;
        case "Home":
          if (!menuIsOpen)
            return;
          _this.focusOption("first");
          break;
        case "End":
          if (!menuIsOpen)
            return;
          _this.focusOption("last");
          break;
        default:
          return;
      }
      event.preventDefault();
    };
    _this.state.instancePrefix = "react-select-" + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = cleanValue(_props.value);
    if (_props.menuIsOpen && _this.state.selectValue.length) {
      var focusableOptionsWithIds = _this.getFocusableOptionsWithIds();
      var focusableOptions = _this.buildFocusableOptions();
      var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
      _this.state.focusableOptionsWithIds = focusableOptionsWithIds;
      _this.state.focusedOption = focusableOptions[optionIndex];
      _this.state.focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusableOptions[optionIndex]);
    }
    return _this;
  }
  _createClass(Select2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();
      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        document.addEventListener("scroll", this.onScroll, true);
      }
      if (this.props.autoFocus) {
        this.focusInput();
      }
      if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props, isDisabled = _this$props6.isDisabled, menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;
      if (
        // ensure focus is restored correctly when the control becomes enabled
        isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
        isFocused && menuIsOpen && !prevProps.menuIsOpen
      ) {
        this.focusInput();
      }
      if (isFocused && isDisabled && !prevProps.isDisabled) {
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
        this.setState({
          isFocused: true
        });
      }
      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener("scroll", this.onScroll, true);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef)
        return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef)
        return;
      this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;
      var _this$state2 = this.state, selectValue = _this$state2.selectValue, isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === "first" ? 0 : focusableOptions.length - 1;
      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }
      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex],
        focusedOptionId: this.getFocusedOptionId(focusableOptions[openAtIndex])
      }, function() {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state, selectValue = _this$state3.selectValue, focusedValue = _this$state3.focusedValue;
      if (!this.props.isMulti)
        return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);
      if (!focusedValue) {
        focusedIndex = -1;
      }
      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length)
        return;
      switch (direction) {
        case "previous":
          if (focusedIndex === 0) {
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case "next":
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }
      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first";
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options2 = this.getFocusableOptions();
      if (!options2.length)
        return;
      var nextFocus = 0;
      var focusedIndex = options2.indexOf(focusedOption);
      if (!focusedOption) {
        focusedIndex = -1;
      }
      if (direction === "up") {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options2.length - 1;
      } else if (direction === "down") {
        nextFocus = (focusedIndex + 1) % options2.length;
      } else if (direction === "pageup") {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0)
          nextFocus = 0;
      } else if (direction === "pagedown") {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options2.length - 1)
          nextFocus = options2.length - 1;
      } else if (direction === "last") {
        nextFocus = options2.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options2[nextFocus],
        focusedValue: null,
        focusedOptionId: this.getFocusedOptionId(options2[nextFocus])
      });
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function getTheme3() {
        if (!this.props.theme) {
          return defaultTheme;
        }
        if (typeof this.props.theme === "function") {
          return this.props.theme(defaultTheme);
        }
        return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
      }
    )
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue, cx = this.cx, getStyles = this.getStyles, getClassNames = this.getClassNames, getValue = this.getValue, selectOption = this.selectOption, setValue = this.setValue, props = this.props;
      var isMulti = props.isMulti, isRtl = props.isRtl, options2 = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue,
        cx,
        getStyles,
        getClassNames,
        getValue,
        hasValue,
        isMulti,
        isRtl,
        options: options2,
        selectOption,
        selectProps: props,
        setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props, isClearable2 = _this$props7.isClearable, isMulti = _this$props7.isMulti;
      if (isClearable2 === void 0)
        return isMulti;
      return isClearable2;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled3(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === "function") {
        var _inputValue = this.props.inputValue;
        var _selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context,
          inputValue: _inputValue,
          selectValue: _selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel3(data) {
      return this.props.formatGroupLabel(data);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function startListeningComposition() {
        if (document && document.addEventListener) {
          document.addEventListener("compositionstart", this.onCompositionStart, false);
          document.addEventListener("compositionend", this.onCompositionEnd, false);
        }
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener("compositionstart", this.onCompositionStart);
        document.removeEventListener("compositionend", this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function startListeningToTouch() {
        if (document && document.addEventListener) {
          document.addEventListener("touchstart", this.onTouchStart, false);
          document.addEventListener("touchmove", this.onTouchMove, false);
          document.addEventListener("touchend", this.onTouchEnd, false);
        }
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener("touchstart", this.onTouchStart);
        document.removeEventListener("touchmove", this.onTouchMove);
        document.removeEventListener("touchend", this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function renderInput() {
        var _this$props8 = this.props, isDisabled = _this$props8.isDisabled, isSearchable = _this$props8.isSearchable, inputId = _this$props8.inputId, inputValue = _this$props8.inputValue, tabIndex = _this$props8.tabIndex, form = _this$props8.form, menuIsOpen = _this$props8.menuIsOpen, required = _this$props8.required;
        var _this$getComponents = this.getComponents(), Input3 = _this$getComponents.Input;
        var _this$state4 = this.state, inputIsHidden = _this$state4.inputIsHidden, ariaSelection = _this$state4.ariaSelection;
        var commonProps = this.commonProps;
        var id = inputId || this.getElementId("input");
        var ariaAttributes = _objectSpread2(_objectSpread2(_objectSpread2({
          "aria-autocomplete": "list",
          "aria-expanded": menuIsOpen,
          "aria-haspopup": true,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": required,
          role: "combobox",
          "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, menuIsOpen && {
          "aria-controls": this.getElementId("listbox")
        }), !isSearchable && {
          "aria-readonly": true
        }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        if (!isSearchable) {
          return React4.createElement(DummyInput, _extends({
            id,
            innerRef: this.getInputRef,
            onBlur: this.onInputBlur,
            onChange: noop,
            onFocus: this.onInputFocus,
            disabled: isDisabled,
            tabIndex,
            inputMode: "none",
            form,
            value: ""
          }, ariaAttributes));
        }
        return React4.createElement(Input3, _extends({}, commonProps, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id,
          innerRef: this.getInputRef,
          isDisabled,
          isHidden: inputIsHidden,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex,
          form,
          type: "text",
          value: inputValue
        }, ariaAttributes));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;
      var _this$getComponents2 = this.getComponents(), MultiValue3 = _this$getComponents2.MultiValue, MultiValueContainer2 = _this$getComponents2.MultiValueContainer, MultiValueLabel2 = _this$getComponents2.MultiValueLabel, MultiValueRemove2 = _this$getComponents2.MultiValueRemove, SingleValue3 = _this$getComponents2.SingleValue, Placeholder3 = _this$getComponents2.Placeholder;
      var commonProps = this.commonProps;
      var _this$props9 = this.props, controlShouldRenderValue = _this$props9.controlShouldRenderValue, isDisabled = _this$props9.isDisabled, isMulti = _this$props9.isMulti, inputValue = _this$props9.inputValue, placeholder = _this$props9.placeholder;
      var _this$state5 = this.state, selectValue = _this$state5.selectValue, focusedValue = _this$state5.focusedValue, isFocused = _this$state5.isFocused;
      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : React4.createElement(Placeholder3, _extends({}, commonProps, {
          key: "placeholder",
          isDisabled,
          isFocused,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), placeholder);
      }
      if (isMulti) {
        return selectValue.map(function(opt, index2) {
          var isOptionFocused = opt === focusedValue;
          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
          return React4.createElement(MultiValue3, _extends({}, commonProps, {
            components: {
              Container: MultiValueContainer2,
              Label: MultiValueLabel2,
              Remove: MultiValueRemove2
            },
            isFocused: isOptionFocused,
            isDisabled,
            key,
            index: index2,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, "value"));
        });
      }
      if (inputValue) {
        return null;
      }
      var singleValue = selectValue[0];
      return React4.createElement(SingleValue3, _extends({}, commonProps, {
        data: singleValue,
        isDisabled
      }), this.formatOptionLabel(singleValue, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(), ClearIndicator3 = _this$getComponents3.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props10 = this.props, isDisabled = _this$props10.isDisabled, isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;
      if (!this.isClearable() || !ClearIndicator3 || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }
      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return React4.createElement(ClearIndicator3, _extends({}, commonProps, {
        innerProps,
        isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(), LoadingIndicator3 = _this$getComponents4.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props11 = this.props, isDisabled = _this$props11.isDisabled, isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator3 || !isLoading)
        return null;
      var innerProps = {
        "aria-hidden": "true"
      };
      return React4.createElement(LoadingIndicator3, _extends({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(), DropdownIndicator3 = _this$getComponents5.DropdownIndicator, IndicatorSeparator3 = _this$getComponents5.IndicatorSeparator;
      if (!DropdownIndicator3 || !IndicatorSeparator3)
        return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return React4.createElement(IndicatorSeparator3, _extends({}, commonProps, {
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(), DropdownIndicator3 = _this$getComponents6.DropdownIndicator;
      if (!DropdownIndicator3)
        return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return React4.createElement(DropdownIndicator3, _extends({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;
      var _this$getComponents7 = this.getComponents(), Group3 = _this$getComponents7.Group, GroupHeading3 = _this$getComponents7.GroupHeading, Menu3 = _this$getComponents7.Menu, MenuList3 = _this$getComponents7.MenuList, MenuPortal3 = _this$getComponents7.MenuPortal, LoadingMessage3 = _this$getComponents7.LoadingMessage, NoOptionsMessage3 = _this$getComponents7.NoOptionsMessage, Option3 = _this$getComponents7.Option;
      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props, captureMenuScroll = _this$props12.captureMenuScroll, inputValue = _this$props12.inputValue, isLoading = _this$props12.isLoading, loadingMessage2 = _this$props12.loadingMessage, minMenuHeight = _this$props12.minMenuHeight, maxMenuHeight = _this$props12.maxMenuHeight, menuIsOpen = _this$props12.menuIsOpen, menuPlacement = _this$props12.menuPlacement, menuPosition = _this$props12.menuPosition, menuPortalTarget = _this$props12.menuPortalTarget, menuShouldBlockScroll = _this$props12.menuShouldBlockScroll, menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView, noOptionsMessage2 = _this$props12.noOptionsMessage, onMenuScrollToTop = _this$props12.onMenuScrollToTop, onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen)
        return null;
      var render = function render2(props, id) {
        var type = props.type, data = props.data, isDisabled = props.isDisabled, isSelected = props.isSelected, label = props.label, value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? void 0 : function() {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? void 0 : function() {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId("option"), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1,
          role: "option",
          "aria-selected": _this4.isAppleDevice ? void 0 : isSelected
          // is not supported on Apple devices
        };
        return React4.createElement(Option3, _extends({}, commonProps, {
          innerProps,
          data,
          isDisabled,
          isSelected,
          key: optionId,
          label,
          type,
          value,
          isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : void 0
        }), _this4.formatOptionLabel(props.data, "menu"));
      };
      var menuUI;
      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function(item) {
          if (item.type === "group") {
            var _data = item.data, options2 = item.options, groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId("group"), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return React4.createElement(Group3, _extends({}, commonProps, {
              key: groupId,
              data: _data,
              options: options2,
              Heading: GroupHeading3,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function(option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === "option") {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage2({
          inputValue
        });
        if (message === null)
          return null;
        menuUI = React4.createElement(LoadingMessage3, commonProps, message);
      } else {
        var _message = noOptionsMessage2({
          inputValue
        });
        if (_message === null)
          return null;
        menuUI = React4.createElement(NoOptionsMessage3, commonProps, _message);
      }
      var menuPlacementProps = {
        minMenuHeight,
        maxMenuHeight,
        menuPlacement,
        menuPosition,
        menuShouldScrollIntoView
      };
      var menuElement = React4.createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function(_ref4) {
        var ref = _ref4.ref, _ref4$placerProps = _ref4.placerProps, placement = _ref4$placerProps.placement, maxHeight = _ref4$placerProps.maxHeight;
        return React4.createElement(Menu3, _extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove
          },
          isLoading,
          placement
        }), React4.createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function(scrollTargetRef) {
          return React4.createElement(MenuList3, _extends({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);
              scrollTargetRef(instance);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": commonProps.isMulti,
              id: _this4.getElementId("listbox")
            },
            isLoading,
            maxHeight,
            focusedOption
          }), menuUI);
        }));
      });
      return menuPortalTarget || menuPosition === "fixed" ? React4.createElement(MenuPortal3, _extends({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement,
        menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;
      var _this$props13 = this.props, delimiter2 = _this$props13.delimiter, isDisabled = _this$props13.isDisabled, isMulti = _this$props13.isMulti, name = _this$props13.name, required = _this$props13.required;
      var selectValue = this.state.selectValue;
      if (required && !this.hasValue() && !isDisabled) {
        return React4.createElement(RequiredInput$1, {
          name,
          onFocus: this.onValueInputFocus
        });
      }
      if (!name || isDisabled)
        return;
      if (isMulti) {
        if (delimiter2) {
          var value = selectValue.map(function(opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter2);
          return React4.createElement("input", {
            name,
            type: "hidden",
            value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function(opt, i) {
            return React4.createElement("input", {
              key: "i-".concat(i),
              name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : React4.createElement("input", {
            name,
            type: "hidden",
            value: ""
          });
          return React4.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : "";
        return React4.createElement("input", {
          name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state6 = this.state, ariaSelection = _this$state6.ariaSelection, focusedOption = _this$state6.focusedOption, focusedValue = _this$state6.focusedValue, isFocused = _this$state6.isFocused, selectValue = _this$state6.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return React4.createElement(LiveRegion$1, _extends({}, commonProps, {
        id: this.getElementId("live-region"),
        ariaSelection,
        focusedOption,
        focusedValue,
        isFocused,
        selectValue,
        focusableOptions,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(), Control3 = _this$getComponents8.Control, IndicatorsContainer3 = _this$getComponents8.IndicatorsContainer, SelectContainer3 = _this$getComponents8.SelectContainer, ValueContainer3 = _this$getComponents8.ValueContainer;
      var _this$props14 = this.props, className = _this$props14.className, id = _this$props14.id, isDisabled = _this$props14.isDisabled, menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return React4.createElement(SelectContainer3, _extends({}, commonProps, {
        className,
        innerProps: {
          id,
          onKeyDown: this.onKeyDown
        },
        isDisabled,
        isFocused
      }), this.renderLiveRegion(), React4.createElement(Control3, _extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled,
        isFocused,
        menuIsOpen
      }), React4.createElement(ValueContainer3, _extends({}, commonProps, {
        isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), React4.createElement(IndicatorsContainer3, _extends({}, commonProps, {
        isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps, clearFocusValueOnUpdate = state.clearFocusValueOnUpdate, inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate, ariaSelection = state.ariaSelection, isFocused = state.isFocused, prevWasFocused = state.prevWasFocused, instancePrefix = state.instancePrefix;
      var options2 = props.options, value = props.value, menuIsOpen = props.menuIsOpen, inputValue = props.inputValue, isMulti = props.isMulti;
      var selectValue = cleanValue(value);
      var newMenuOptionsState = {};
      if (prevProps && (value !== prevProps.value || options2 !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusableOptionsWithIds = menuIsOpen ? buildFocusableOptionsWithIds(buildCategorizedOptions(props, selectValue), "".concat(instancePrefix, "-option")) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        var focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusedOption);
        newMenuOptionsState = {
          selectValue,
          focusedOption,
          focusedOptionId,
          focusableOptionsWithIds,
          focusedValue,
          clearFocusValueOnUpdate: false
        };
      }
      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: void 0
      } : {};
      var newAriaSelection = ariaSelection;
      var hasKeptFocus = isFocused && prevWasFocused;
      if (isFocused && !hasKeptFocus) {
        newAriaSelection = {
          value: valueTernary(isMulti, selectValue, selectValue[0] || null),
          options: selectValue,
          action: "initial-input-focus"
        };
        hasKeptFocus = !prevWasFocused;
      }
      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus") {
        newAriaSelection = null;
      }
      return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props,
        ariaSelection: newAriaSelection,
        prevWasFocused: hasKeptFocus
      });
    }
  }]);
  return Select2;
}(import_react6.Component);
Select.defaultProps = defaultProps;

// node_modules/react-select/dist/react-select.esm.js
var import_react_dom2 = __toESM(require_react_dom());
var StateManagedSelect = (0, import_react8.forwardRef)(function(props, ref) {
  var baseSelectProps = useStateManager(props);
  return React5.createElement(Select, _extends({
    ref
  }, baseSelectProps));
});
var StateManagedSelect$1 = StateManagedSelect;

// node_modules/spacetime/src/timezone/summerTime.js
var MSEC_IN_HOUR = 60 * 60 * 1e3;
var toUtc = (dstChange, offset2, year2) => {
  const [month2, rest] = dstChange.split("/");
  const [day, hour] = rest.split(":");
  return Date.UTC(year2, month2 - 1, day, hour) - offset2 * MSEC_IN_HOUR;
};
var inSummerTime = (epoch, start, end, summerOffset, winterOffset) => {
  const year2 = new Date(epoch).getUTCFullYear();
  const startUtc = toUtc(start, winterOffset, year2);
  const endUtc = toUtc(end, summerOffset, year2);
  return epoch >= startUtc && epoch < endUtc;
};
var summerTime_default = inSummerTime;

// node_modules/spacetime/src/timezone/quick.js
var quickOffset = (s) => {
  let zones2 = s.timezones;
  let obj = zones2[s.tz];
  if (obj === void 0) {
    console.warn("Warning: couldn't find timezone " + s.tz);
    return 0;
  }
  if (obj.dst === void 0) {
    return obj.offset;
  }
  let jul = obj.offset;
  let dec = obj.offset + 1;
  if (obj.hem === "n") {
    dec = jul - 1;
  }
  let split = obj.dst.split("->");
  let inSummer = summerTime_default(s.epoch, split[0], split[1], jul, dec);
  if (inSummer === true) {
    return jul;
  }
  return dec;
};
var quick_default = quickOffset;

// node_modules/spacetime/zonefile/_build.js
var build_default = {
  "9|s": "2/dili,2/jayapura",
  "9|n": "2/chita,2/khandyga,2/pyongyang,2/seoul,2/tokyo,2/yakutsk,11/palau,japan,rok",
  "9.5|s|04/07:03->10/06:02": "4/adelaide,4/broken_hill,4/south,4/yancowinna",
  "9.5|s": "4/darwin,4/north",
  "8|s|03/13:01->10/02:00": "12/casey",
  "8|s": "2/kuala_lumpur,2/makassar,2/singapore,4/perth,2/ujung_pandang,4/west,singapore",
  "8|n": "2/brunei,2/choibalsan,2/hong_kong,2/irkutsk,2/kuching,2/macau,2/manila,2/shanghai,2/taipei,2/ulaanbaatar,2/chongqing,2/chungking,2/harbin,2/macao,2/ulan_bator,hongkong,prc,roc",
  "8.75|s": "4/eucla",
  "7|s": "12/davis,2/jakarta,9/christmas",
  "7|n": "2/bangkok,2/barnaul,2/hovd,2/krasnoyarsk,2/novokuznetsk,2/novosibirsk,2/phnom_penh,2/pontianak,2/ho_chi_minh,2/tomsk,2/vientiane,2/saigon",
  "6|s": "12/vostok",
  "6|n": "2/almaty,2/bishkek,2/dhaka,2/omsk,2/qyzylorda,2/qostanay,2/thimphu,2/urumqi,9/chagos,2/dacca,2/kashgar,2/thimbu",
  "6.5|n": "2/yangon,9/cocos,2/rangoon",
  "5|s": "12/mawson,9/kerguelen",
  "5|n": "2/aqtau,2/aqtobe,2/ashgabat,2/atyrau,2/dushanbe,2/karachi,2/oral,2/samarkand,2/tashkent,2/yekaterinburg,9/maldives,2/ashkhabad",
  "5.75|n": "2/kathmandu,2/katmandu",
  "5.5|n": "2/kolkata,2/colombo,2/calcutta",
  "4|s": "9/reunion",
  "4|n": "2/baku,2/dubai,2/muscat,2/tbilisi,2/yerevan,8/astrakhan,8/samara,8/saratov,8/ulyanovsk,8/volgograd,9/mahe,9/mauritius,2/volgograd",
  "4.5|n": "2/kabul",
  "3|s": "12/syowa,9/antananarivo",
  "3|n|04/26:00->10/31:24": "0/cairo,egypt",
  "3|n|04/20:02->10/26:02": "2/gaza,2/hebron",
  "3|n|03/31:03->10/27:04": "2/famagusta,2/nicosia,8/athens,8/bucharest,8/helsinki,8/kyiv,8/mariehamn,8/riga,8/sofia,8/tallinn,8/uzhgorod,8/vilnius,8/zaporozhye,8/nicosia,8/kiev,eet",
  "3|n|03/31:02->10/27:03": "8/chisinau,8/tiraspol",
  "3|n|03/31:00->10/26:24": "2/beirut",
  "3|n|03/29:02->10/27:02": "2/jerusalem,2/tel_aviv,israel",
  "3|n": "0/addis_ababa,0/asmara,0/asmera,0/dar_es_salaam,0/djibouti,0/juba,0/kampala,0/mogadishu,0/nairobi,2/aden,2/amman,2/baghdad,2/bahrain,2/damascus,2/kuwait,2/qatar,2/riyadh,8/istanbul,8/kirov,8/minsk,8/moscow,8/simferopol,9/comoro,9/mayotte,2/istanbul,turkey,w-su",
  "3.5|n": "2/tehran,iran",
  "2|s|03/31:02->10/27:02": "12/troll",
  "2|s": "0/gaborone,0/harare,0/johannesburg,0/lubumbashi,0/lusaka,0/maputo,0/maseru,0/mbabane",
  "2|n|03/31:02->10/27:03": "0/ceuta,arctic/longyearbyen,8/amsterdam,8/andorra,8/belgrade,8/berlin,8/bratislava,8/brussels,8/budapest,8/busingen,8/copenhagen,8/gibraltar,8/ljubljana,8/luxembourg,8/madrid,8/malta,8/monaco,8/oslo,8/paris,8/podgorica,8/prague,8/rome,8/san_marino,8/sarajevo,8/skopje,8/stockholm,8/tirane,8/vaduz,8/vatican,8/vienna,8/warsaw,8/zagreb,8/zurich,3/jan_mayen,poland,cet,met",
  "2|n": "0/blantyre,0/bujumbura,0/khartoum,0/kigali,0/tripoli,8/kaliningrad,libya",
  "1|s": "0/brazzaville,0/kinshasa,0/luanda,0/windhoek",
  "1|n|03/31:01->10/27:02": "3/canary,3/faroe,3/madeira,8/dublin,8/guernsey,8/isle_of_man,8/jersey,8/lisbon,8/london,3/faeroe,eire,8/belfast,gb-eire,gb,portugal,wet",
  "1|n": "0/algiers,0/bangui,0/douala,0/lagos,0/libreville,0/malabo,0/ndjamena,0/niamey,0/porto-novo,0/tunis",
  "14|n": "11/kiritimati",
  "13|s": "11/apia,11/tongatapu",
  "13|n": "11/enderbury,11/kanton,11/fakaofo",
  "12|s|04/07:03->09/29:02": "12/mcmurdo,11/auckland,12/south_pole,nz",
  "12|s": "11/fiji",
  "12|n": "2/anadyr,2/kamchatka,2/srednekolymsk,11/funafuti,11/kwajalein,11/majuro,11/nauru,11/tarawa,11/wake,11/wallis,kwajalein",
  "12.75|s|04/07:03->04/07:02": "11/chatham,nz-chat",
  "11|s|04/07:03->10/06:02": "12/macquarie",
  "11|s": "11/bougainville",
  "11|n": "2/magadan,2/sakhalin,11/efate,11/guadalcanal,11/kosrae,11/noumea,11/pohnpei,11/ponape",
  "11.5|n|04/07:03->10/06:02": "11/norfolk",
  "10|s|04/07:03->10/06:02": "4/currie,4/hobart,4/melbourne,4/sydney,4/act,4/canberra,4/nsw,4/tasmania,4/victoria",
  "10|s": "12/dumontdurville,4/brisbane,4/lindeman,11/port_moresby,4/queensland",
  "10|n": "2/ust-nera,2/vladivostok,11/guam,11/saipan,11/chuuk,11/truk,11/yap",
  "10.5|s|04/07:01->10/06:02": "4/lord_howe,4/lhi",
  "0|s|03/10:03->04/14:02": "0/casablanca,0/el_aaiun",
  "0|n|03/31:00->10/27:01": "1/scoresbysund,3/azores",
  "0|n": "0/abidjan,0/accra,0/bamako,0/banjul,0/bissau,0/conakry,0/dakar,0/freetown,0/lome,0/monrovia,0/nouakchott,0/ouagadougou,0/sao_tome,1/danmarkshavn,3/reykjavik,3/st_helena,13/gmt,13/utc,0/timbuktu,13/greenwich,13/uct,13/universal,13/zulu,gmt-0,gmt+0,gmt0,greenwich,iceland,uct,universal,utc,zulu,13/unknown,factory",
  "-9|n|03/10:02->11/03:02": "1/adak,1/atka,us/aleutian",
  "-9|n": "11/gambier",
  "-9.5|n": "11/marquesas",
  "-8|n|03/10:02->11/03:02": "1/anchorage,1/juneau,1/metlakatla,1/nome,1/sitka,1/yakutat,us/alaska",
  "-8|n": "11/pitcairn",
  "-7|n|03/10:02->11/03:02": "1/los_angeles,1/santa_isabel,1/tijuana,1/vancouver,1/ensenada,6/pacific,10/bajanorte,us/pacific-new,us/pacific",
  "-7|n": "1/creston,1/dawson,1/dawson_creek,1/fort_nelson,1/hermosillo,1/mazatlan,1/phoenix,1/whitehorse,6/yukon,10/bajasur,us/arizona,mst",
  "-6|s|04/06:22->09/07:22": "11/easter,7/easterisland",
  "-6|n|04/07:02->10/27:02": "1/merida",
  "-6|n|03/10:02->11/03:02": "1/boise,1/cambridge_bay,1/denver,1/edmonton,1/inuvik,1/north_dakota,1/ojinaga,1/ciudad_juarez,1/yellowknife,1/shiprock,6/mountain,navajo,us/mountain",
  "-6|n": "1/bahia_banderas,1/belize,1/chihuahua,1/costa_rica,1/el_salvador,1/guatemala,1/managua,1/mexico_city,1/monterrey,1/regina,1/swift_current,1/tegucigalpa,11/galapagos,6/east-saskatchewan,6/saskatchewan,10/general",
  "-5|s": "1/lima,1/rio_branco,1/porto_acre,5/acre",
  "-5|n|03/10:02->11/03:02": "1/chicago,1/matamoros,1/menominee,1/rainy_river,1/rankin_inlet,1/resolute,1/winnipeg,1/indiana/knox,1/indiana/tell_city,1/north_dakota/beulah,1/north_dakota/center,1/north_dakota/new_salem,1/knox_in,6/central,us/central,us/indiana-starke",
  "-5|n": "1/bogota,1/cancun,1/cayman,1/coral_harbour,1/eirunepe,1/guayaquil,1/jamaica,1/panama,1/atikokan,jamaica,est",
  "-4|s|04/06:24->09/08:00": "1/santiago,7/continental",
  "-4|s|03/23:24->10/06:00": "1/asuncion",
  "-4|s": "1/campo_grande,1/cuiaba,1/la_paz,1/manaus,5/west",
  "-4|n|03/10:02->11/03:02": "1/detroit,1/grand_turk,1/indiana,1/indianapolis,1/iqaluit,1/kentucky,1/louisville,1/montreal,1/nassau,1/new_york,1/nipigon,1/pangnirtung,1/port-au-prince,1/thunder_bay,1/toronto,1/indiana/marengo,1/indiana/petersburg,1/indiana/vevay,1/indiana/vincennes,1/indiana/winamac,1/kentucky/monticello,1/fort_wayne,1/indiana/indianapolis,1/kentucky/louisville,6/eastern,us/east-indiana,us/eastern,us/michigan",
  "-4|n|03/10:00->11/03:01": "1/havana,cuba",
  "-4|n": "1/anguilla,1/antigua,1/aruba,1/barbados,1/blanc-sablon,1/boa_vista,1/caracas,1/curacao,1/dominica,1/grenada,1/guadeloupe,1/guyana,1/kralendijk,1/lower_princes,1/marigot,1/martinique,1/montserrat,1/port_of_spain,1/porto_velho,1/puerto_rico,1/santo_domingo,1/st_barthelemy,1/st_kitts,1/st_lucia,1/st_thomas,1/st_vincent,1/tortola,1/virgin",
  "-3|s": "1/argentina,1/buenos_aires,1/catamarca,1/cordoba,1/fortaleza,1/jujuy,1/mendoza,1/montevideo,1/punta_arenas,1/sao_paulo,12/palmer,12/rothera,3/stanley,1/argentina/la_rioja,1/argentina/rio_gallegos,1/argentina/salta,1/argentina/san_juan,1/argentina/san_luis,1/argentina/tucuman,1/argentina/ushuaia,1/argentina/comodrivadavia,1/argentina/buenos_aires,1/argentina/catamarca,1/argentina/cordoba,1/argentina/jujuy,1/argentina/mendoza,1/argentina/rosario,1/rosario,5/east",
  "-3|n|03/10:02->11/03:02": "1/glace_bay,1/goose_bay,1/halifax,1/moncton,1/thule,3/bermuda,6/atlantic",
  "-3|n": "1/araguaina,1/bahia,1/belem,1/cayenne,1/maceio,1/paramaribo,1/recife,1/santarem",
  "-2|n|03/30:22->10/26:23": "1/nuuk,1/godthab",
  "-2|n|03/10:02->11/03:02": "1/miquelon",
  "-2|n": "1/noronha,3/south_georgia,5/denoronha",
  "-2.5|n|03/10:02->11/03:02": "1/st_johns,6/newfoundland",
  "-1|n": "3/cape_verde",
  "-11|n": "11/midway,11/niue,11/pago_pago,11/samoa,us/samoa",
  "-10|n": "11/honolulu,11/johnston,11/rarotonga,11/tahiti,us/hawaii,hst"
};

// node_modules/spacetime/zonefile/_prefixes.js
var prefixes_default = [
  "africa",
  "america",
  "asia",
  "atlantic",
  "australia",
  "brazil",
  "canada",
  "chile",
  "europe",
  "indian",
  "mexico",
  "pacific",
  "antarctica",
  "etc"
];

// node_modules/spacetime/zonefile/unpack.js
var all = {};
Object.keys(build_default).forEach((k) => {
  let split = k.split("|");
  let obj = {
    offset: Number(split[0]),
    hem: split[1]
  };
  if (split[2]) {
    obj.dst = split[2];
  }
  let names = build_default[k].split(",");
  names.forEach((str) => {
    str = str.replace(/(^[0-9]+)\//, (before, num) => {
      num = Number(num);
      return prefixes_default[num] + "/";
    });
    all[str] = obj;
  });
});
all.utc = {
  offset: 0,
  hem: "n"
  //default to northern hemisphere - (sorry!)
};
for (let i = -14; i <= 14; i += 0.5) {
  let num = i;
  if (num > 0) {
    num = "+" + num;
  }
  let name = "etc/gmt" + num;
  all[name] = {
    offset: i * -1,
    //they're negative!
    hem: "n"
    //(sorry)
  };
  name = "utc/gmt" + num;
  all[name] = {
    offset: i * -1,
    hem: "n"
  };
}
var unpack_default = all;

// node_modules/spacetime/src/timezone/guessTz.js
var fallbackTZ = "utc";
var safeIntl = () => {
  if (typeof Intl === "undefined" || typeof Intl.DateTimeFormat === "undefined") {
    return null;
  }
  let format2 = Intl.DateTimeFormat();
  if (typeof format2 === "undefined" || typeof format2.resolvedOptions === "undefined") {
    return null;
  }
  let timezone2 = format2.resolvedOptions().timeZone;
  if (!timezone2) {
    return null;
  }
  return timezone2.toLowerCase();
};
var guessTz = () => {
  let timezone2 = safeIntl();
  if (timezone2 === null) {
    return fallbackTZ;
  }
  return timezone2;
};
var guessTz_default = guessTz;

// node_modules/spacetime/src/timezone/parseOffset.js
var isOffset = /(\-?[0-9]+)h(rs)?/i;
var isNumber = /(\-?[0-9]+)/;
var utcOffset = /utc([\-+]?[0-9]+)/i;
var gmtOffset = /gmt([\-+]?[0-9]+)/i;
var toIana = function(num) {
  num = Number(num);
  if (num >= -13 && num <= 13) {
    num = num * -1;
    num = (num > 0 ? "+" : "") + num;
    return "etc/gmt" + num;
  }
  return null;
};
var parseOffset = function(tz) {
  let m = tz.match(isOffset);
  if (m !== null) {
    return toIana(m[1]);
  }
  m = tz.match(utcOffset);
  if (m !== null) {
    return toIana(m[1]);
  }
  m = tz.match(gmtOffset);
  if (m !== null) {
    let num = Number(m[1]) * -1;
    return toIana(num);
  }
  m = tz.match(isNumber);
  if (m !== null) {
    return toIana(m[1]);
  }
  return null;
};
var parseOffset_default = parseOffset;

// node_modules/spacetime/src/timezone/find.js
var local = guessTz_default();
var cities = Object.keys(unpack_default).reduce((h, k) => {
  let city = k.split("/")[1] || "";
  city = city.replace(/_/g, " ");
  h[city] = k;
  return h;
}, {});
var normalize = (tz) => {
  tz = tz.replace(/ time/g, "");
  tz = tz.replace(/ (standard|daylight|summer)/g, "");
  tz = tz.replace(/\b(east|west|north|south)ern/g, "$1");
  tz = tz.replace(/\b(africa|america|australia)n/g, "$1");
  tz = tz.replace(/\beuropean/g, "europe");
  tz = tz.replace(/\islands/g, "island");
  return tz;
};
var lookupTz = (str, zones2) => {
  if (!str) {
    if (!zones2.hasOwnProperty(local)) {
      console.warn(`Unrecognized IANA id '${local}'. Setting fallback tz to UTC.`);
      local = "utc";
    }
    return local;
  }
  if (typeof str !== "string") {
    console.error("Timezone must be a string - recieved: '", str, "'\n");
  }
  let tz = str.trim();
  tz = tz.toLowerCase();
  if (zones2.hasOwnProperty(tz) === true) {
    return tz;
  }
  tz = normalize(tz);
  if (zones2.hasOwnProperty(tz) === true) {
    return tz;
  }
  if (cities.hasOwnProperty(tz) === true) {
    return cities[tz];
  }
  if (/[0-9]/.test(tz) === true) {
    let id = parseOffset_default(tz);
    if (id) {
      return id;
    }
  }
  throw new Error(
    "Spacetime: Cannot find timezone named: '" + str + "'. Please enter an IANA timezone id."
  );
};
var find_default = lookupTz;

// node_modules/spacetime/src/fns.js
function isLeapYear(year2) {
  return year2 % 4 === 0 && year2 % 100 !== 0 || year2 % 400 === 0;
}
function isDate(d) {
  return Object.prototype.toString.call(d) === "[object Date]" && !isNaN(d.valueOf());
}
function isArray2(input) {
  return Object.prototype.toString.call(input) === "[object Array]";
}
function isObject(input) {
  return Object.prototype.toString.call(input) === "[object Object]";
}
function isBoolean(input) {
  return Object.prototype.toString.call(input) === "[object Boolean]";
}
function zeroPad(str, len = 2) {
  let pad = "0";
  str = str + "";
  return str.length >= len ? str : new Array(len - str.length + 1).join(pad) + str;
}
function titleCase(str) {
  if (!str) {
    return "";
  }
  return str[0].toUpperCase() + str.substr(1);
}
function ordinal(i) {
  let j = i % 10;
  let k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
}
function toCardinal(str) {
  str = String(str);
  str = str.replace(/([0-9])(st|nd|rd|th)$/i, "$1");
  return parseInt(str, 10);
}
function normalize2(str = "") {
  str = str.toLowerCase().trim();
  str = str.replace(/ies$/, "y");
  str = str.replace(/s$/, "");
  str = str.replace(/-/g, "");
  if (str === "day" || str === "days") {
    return "date";
  }
  if (str === "min" || str === "mins") {
    return "minute";
  }
  return str;
}
function getEpoch(tmp) {
  if (typeof tmp === "number") {
    return tmp;
  }
  if (isDate(tmp)) {
    return tmp.getTime();
  }
  if (tmp.epoch) {
    return tmp.epoch;
  }
  return null;
}
function beADate(d, s) {
  if (isObject(d) === false) {
    return s.clone().set(d);
  }
  return d;
}
function formatTimezone(offset2, delimiter2 = "") {
  const sign = offset2 > 0 ? "+" : "-";
  const absOffset = Math.abs(offset2);
  const hours2 = zeroPad(parseInt("" + absOffset, 10));
  const minutes2 = zeroPad(absOffset % 1 * 60);
  return `${sign}${hours2}${delimiter2}${minutes2}`;
}

// node_modules/spacetime/src/input/helpers.js
var defaults = {
  year: (/* @__PURE__ */ new Date()).getFullYear(),
  month: 0,
  date: 1
};
var parseArray = (s, arr, today) => {
  if (arr.length === 0) {
    return s;
  }
  let order3 = ["year", "month", "date", "hour", "minute", "second", "millisecond"];
  for (let i = 0; i < order3.length; i++) {
    let num = arr[i] || today[order3[i]] || defaults[order3[i]] || 0;
    s = s[order3[i]](num);
  }
  return s;
};
var parseObject = (s, obj, today) => {
  if (Object.keys(obj).length === 0) {
    return s;
  }
  obj = Object.assign({}, defaults, today, obj);
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let unit = keys[i];
    if (s[unit] === void 0 || typeof s[unit] !== "function") {
      continue;
    }
    if (obj[unit] === null || obj[unit] === void 0 || obj[unit] === "") {
      continue;
    }
    let num = obj[unit] || today[unit] || defaults[unit] || 0;
    s = s[unit](num);
  }
  return s;
};
var parseNumber = function(s, input) {
  const minimumEpoch = 25e8;
  if (input > 0 && input < minimumEpoch && s.silent === false) {
    console.warn("  - Warning: You are setting the date to January 1970.");
    console.warn("       -   did input seconds instead of milliseconds?");
  }
  s.epoch = input;
  return s;
};
var helpers_default = {
  parseArray,
  parseObject,
  parseNumber
};

// node_modules/spacetime/src/input/named-dates.js
var getNow = function(s) {
  s.epoch = Date.now();
  Object.keys(s._today || {}).forEach((k) => {
    if (typeof s[k] === "function") {
      s = s[k](s._today[k]);
    }
  });
  return s;
};
var dates = {
  now: (s) => {
    return getNow(s);
  },
  today: (s) => {
    return getNow(s);
  },
  tonight: (s) => {
    s = getNow(s);
    s = s.hour(18);
    return s;
  },
  tomorrow: (s) => {
    s = getNow(s);
    s = s.add(1, "day");
    s = s.startOf("day");
    return s;
  },
  yesterday: (s) => {
    s = getNow(s);
    s = s.subtract(1, "day");
    s = s.startOf("day");
    return s;
  },
  christmas: (s) => {
    let year2 = getNow(s).year();
    s = s.set([year2, 11, 25, 18, 0, 0]);
    return s;
  },
  "new years": (s) => {
    let year2 = getNow(s).year();
    s = s.set([year2, 11, 31, 18, 0, 0]);
    return s;
  }
};
dates["new years eve"] = dates["new years"];
var named_dates_default = dates;

// node_modules/spacetime/src/input/normalize.js
var normalize3 = function(str) {
  str = str.replace(/\b(mon|tues?|wed|wednes|thur?s?|fri|sat|satur|sun)(day)?\b/i, "");
  str = str.replace(/([0-9])(th|rd|st|nd)/, "$1");
  str = str.replace(/,/g, "");
  str = str.replace(/ +/g, " ").trim();
  return str;
};
var normalize_default = normalize3;

// node_modules/spacetime/src/data/milliseconds.js
var o = {
  millisecond: 1
};
o.second = 1e3;
o.minute = 6e4;
o.hour = 36e5;
o.day = 864e5;
o.date = o.day;
o.month = 864e5 * 29.5;
o.week = 6048e5;
o.year = 3154e7;
Object.keys(o).forEach((k) => {
  o[k + "s"] = o[k];
});
var milliseconds_default = o;

// node_modules/spacetime/src/methods/set/walk.js
var walk = (s, n, fn, unit, previous) => {
  let current = s.d[fn]();
  if (current === n) {
    return;
  }
  let startUnit = previous === null ? null : s.d[previous]();
  let original = s.epoch;
  let diff2 = n - current;
  s.epoch += milliseconds_default[unit] * diff2;
  if (unit === "day") {
    if (Math.abs(diff2) > 28 && n < 28) {
      s.epoch += milliseconds_default.hour;
    }
  }
  if (previous !== null && startUnit !== s.d[previous]()) {
    s.epoch = original;
  }
  const halfStep = milliseconds_default[unit] / 2;
  while (s.d[fn]() < n) {
    s.epoch += halfStep;
  }
  while (s.d[fn]() > n) {
    s.epoch -= halfStep;
  }
  if (previous !== null && startUnit !== s.d[previous]()) {
    s.epoch = original;
  }
};
var units = {
  year: {
    valid: (n) => n > -4e3 && n < 4e3,
    walkTo: (s, n) => walk(s, n, "getFullYear", "year", null)
  },
  month: {
    valid: (n) => n >= 0 && n <= 11,
    walkTo: (s, n) => {
      let d = s.d;
      let current = d.getMonth();
      let original = s.epoch;
      let startUnit = d.getFullYear();
      if (current === n) {
        return;
      }
      let diff2 = n - current;
      s.epoch += milliseconds_default.day * (diff2 * 28);
      if (startUnit !== s.d.getFullYear()) {
        s.epoch = original;
      }
      while (s.d.getMonth() < n) {
        s.epoch += milliseconds_default.day;
      }
      while (s.d.getMonth() > n) {
        s.epoch -= milliseconds_default.day;
      }
    }
  },
  date: {
    valid: (n) => n > 0 && n <= 31,
    walkTo: (s, n) => walk(s, n, "getDate", "day", "getMonth")
  },
  hour: {
    valid: (n) => n >= 0 && n < 24,
    walkTo: (s, n) => walk(s, n, "getHours", "hour", "getDate")
  },
  minute: {
    valid: (n) => n >= 0 && n < 60,
    walkTo: (s, n) => walk(s, n, "getMinutes", "minute", "getHours")
  },
  second: {
    valid: (n) => n >= 0 && n < 60,
    walkTo: (s, n) => {
      s.epoch = s.seconds(n).epoch;
    }
  },
  millisecond: {
    valid: (n) => n >= 0 && n < 1e3,
    walkTo: (s, n) => {
      s.epoch = s.milliseconds(n).epoch;
    }
  }
};
var walkTo = (s, wants) => {
  let keys = Object.keys(units);
  let old = s.clone();
  for (let i = 0; i < keys.length; i++) {
    let k = keys[i];
    let n = wants[k];
    if (n === void 0) {
      n = old[k]();
    }
    if (typeof n === "string") {
      n = parseInt(n, 10);
    }
    if (!units[k].valid(n)) {
      s.epoch = null;
      if (s.silent === false) {
        console.warn("invalid " + k + ": " + n);
      }
      return;
    }
    units[k].walkTo(s, n);
  }
  return;
};
var walk_default = walkTo;

// node_modules/spacetime/src/data/monthLengths.js
var monthLengths = [
  31,
  // January - 31 days
  28,
  // February - 28 days in a common year and 29 days in leap years
  31,
  // March - 31 days
  30,
  // April - 30 days
  31,
  // May - 31 days
  30,
  // June - 30 days
  31,
  // July - 31 days
  31,
  // August - 31 days
  30,
  // September - 30 days
  31,
  // October - 31 days
  30,
  // November - 30 days
  31
  // December - 31 days
];
var monthLengths_default = monthLengths;

// node_modules/spacetime/src/data/months.js
var shortMonths = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec"
];
var longMonths = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
];
function buildMapping() {
  const obj = {
    sep: 8
    //support this format
  };
  for (let i = 0; i < shortMonths.length; i++) {
    obj[shortMonths[i]] = i;
  }
  for (let i = 0; i < longMonths.length; i++) {
    obj[longMonths[i]] = i;
  }
  return obj;
}
function short() {
  return shortMonths;
}
function long() {
  return longMonths;
}
function mapping() {
  return buildMapping();
}
function set(i18n) {
  shortMonths = i18n.short || shortMonths;
  longMonths = i18n.long || longMonths;
}

// node_modules/spacetime/src/input/formats/parseOffset.js
var parseOffset2 = (s, offset2) => {
  if (!offset2) {
    return s;
  }
  offset2 = offset2.trim().toLowerCase();
  let num = 0;
  if (/^[\+-]?[0-9]{2}:[0-9]{2}$/.test(offset2)) {
    if (/:00/.test(offset2) === true) {
      offset2 = offset2.replace(/:00/, "");
    }
    if (/:30/.test(offset2) === true) {
      offset2 = offset2.replace(/:30/, ".5");
    }
  }
  if (/^[\+-]?[0-9]{4}$/.test(offset2)) {
    offset2 = offset2.replace(/30$/, ".5");
  }
  num = parseFloat(offset2);
  if (Math.abs(num) > 100) {
    num = num / 100;
  }
  if (num === 0 || offset2 === "Z" || offset2 === "z") {
    s.tz = "etc/gmt";
    return s;
  }
  num *= -1;
  if (num >= 0) {
    num = "+" + num;
  }
  let tz = "etc/gmt" + num;
  let zones2 = s.timezones;
  if (zones2[tz]) {
    s.tz = tz;
  }
  return s;
};
var parseOffset_default2 = parseOffset2;

// node_modules/spacetime/src/input/formats/parseTime.js
var parseMs = function(str = "") {
  str = String(str);
  if (str.length > 3) {
    str = str.substring(0, 3);
  } else if (str.length === 1) {
    str = str + "00";
  } else if (str.length === 2) {
    str = str + "0";
  }
  return Number(str) || 0;
};
var parseTime = (s, str = "") => {
  str = str.replace(/^\s+/, "").toLowerCase();
  let arr = str.match(/([0-9]{1,2}):([0-9]{1,2}):?([0-9]{1,2})?[:\.]?([0-9]{1,4})?/);
  if (arr !== null) {
    let [, h, m, sec, ms] = arr;
    h = Number(h);
    if (h < 0 || h > 24) {
      return s.startOf("day");
    }
    m = Number(m);
    if (arr[2].length < 2 || m < 0 || m > 59) {
      return s.startOf("day");
    }
    s = s.hour(h);
    s = s.minute(m);
    s = s.seconds(sec || 0);
    s = s.millisecond(parseMs(ms));
    let ampm = str.match(/[\b0-9] ?(am|pm)\b/);
    if (ampm !== null && ampm[1]) {
      s = s.ampm(ampm[1]);
    }
    return s;
  }
  arr = str.match(/([0-9]+) ?(am|pm)/);
  if (arr !== null && arr[1]) {
    let h = Number(arr[1]);
    if (h > 12 || h < 1) {
      return s.startOf("day");
    }
    s = s.hour(arr[1] || 0);
    s = s.ampm(arr[2]);
    s = s.startOf("hour");
    return s;
  }
  s = s.startOf("day");
  return s;
};
var parseTime_default = parseTime;

// node_modules/spacetime/src/input/formats/_parsers.js
var months = mapping();
var validate = (obj) => {
  if (monthLengths_default.hasOwnProperty(obj.month) !== true) {
    return false;
  }
  if (obj.month === 1) {
    if (isLeapYear(obj.year) && obj.date <= 29) {
      return true;
    } else {
      return obj.date <= 28;
    }
  }
  let max2 = monthLengths_default[obj.month] || 0;
  if (obj.date <= max2) {
    return true;
  }
  return false;
};
var parseYear = (str = "", today) => {
  str = str.trim();
  if (/^'[0-9][0-9]$/.test(str) === true) {
    let num = Number(str.replace(/'/, ""));
    if (num > 50) {
      return 1900 + num;
    }
    return 2e3 + num;
  }
  let year2 = parseInt(str, 10);
  if (!year2 && today) {
    year2 = today.year;
  }
  year2 = year2 || (/* @__PURE__ */ new Date()).getFullYear();
  return year2;
};
var parseMonth = function(str) {
  str = str.toLowerCase().trim();
  if (str === "sept") {
    return months.sep;
  }
  return months[str];
};

// node_modules/spacetime/src/input/formats/01-ymd.js
var ymd_default = [
  // =====
  //  y-m-d
  // =====
  //iso-this 1998-05-30T22:00:00:000Z, iso-that 2017-04-03T08:00:00-0700
  {
    reg: /^(\-?0?0?[0-9]{3,4})-([0-9]{1,2})-([0-9]{1,2})[T| ]([0-9.:]+)(Z|[0-9\-\+:]+)?$/i,
    parse: (s, m) => {
      let obj = {
        year: m[1],
        month: parseInt(m[2], 10) - 1,
        date: m[3]
      };
      if (validate(obj) === false) {
        s.epoch = null;
        return s;
      }
      parseOffset_default2(s, m[5]);
      walk_default(s, obj);
      s = parseTime_default(s, m[4]);
      return s;
    }
  },
  //short-iso "2015-03-25" or "2015/03/25" or "2015/03/25 12:26:14 PM"
  {
    reg: /^([0-9]{4})[\-\/\. ]([0-9]{1,2})[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
    parse: (s, m) => {
      let obj = {
        year: m[1],
        month: parseInt(m[2], 10) - 1,
        date: parseInt(m[3], 10)
      };
      if (obj.month >= 12) {
        obj.date = parseInt(m[2], 10);
        obj.month = parseInt(m[3], 10) - 1;
      }
      if (validate(obj) === false) {
        s.epoch = null;
        return s;
      }
      walk_default(s, obj);
      s = parseTime_default(s, m[4]);
      return s;
    }
  },
  //text-month "2015-feb-25"
  {
    reg: /^([0-9]{4})[\-\/\. ]([a-z]+)[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
    parse: (s, m) => {
      let obj = {
        year: parseYear(m[1], s._today),
        month: parseMonth(m[2]),
        date: toCardinal(m[3] || "")
      };
      if (validate(obj) === false) {
        s.epoch = null;
        return s;
      }
      walk_default(s, obj);
      s = parseTime_default(s, m[4]);
      return s;
    }
  }
];

// node_modules/spacetime/src/input/formats/02-mdy.js
var mdy_default = [
  // =====
  //  m-d-y
  // =====
  //mm/dd/yyyy - uk/canada "6/28/2019, 12:26:14 PM"
  {
    reg: /^([0-9]{1,2})[\-\/.]([0-9]{1,2})[\-\/.]?([0-9]{4})?( [0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i,
    parse: (s, arr) => {
      let month2 = parseInt(arr[1], 10) - 1;
      let date2 = parseInt(arr[2], 10);
      if (s.british || month2 >= 12) {
        date2 = parseInt(arr[1], 10);
        month2 = parseInt(arr[2], 10) - 1;
      }
      let obj = {
        date: date2,
        month: month2,
        year: parseYear(arr[3], s._today) || (/* @__PURE__ */ new Date()).getFullYear()
      };
      if (validate(obj) === false) {
        s.epoch = null;
        return s;
      }
      walk_default(s, obj);
      s = parseTime_default(s, arr[4]);
      return s;
    }
  },
  //alt short format - "feb-25-2015"
  {
    reg: /^([a-z]+)[\-\/\. ]([0-9]{1,2})[\-\/\. ]?([0-9]{4}|'[0-9]{2})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
    parse: (s, arr) => {
      let obj = {
        year: parseYear(arr[3], s._today),
        month: parseMonth(arr[1]),
        date: toCardinal(arr[2] || "")
      };
      if (validate(obj) === false) {
        s.epoch = null;
        return s;
      }
      walk_default(s, obj);
      s = parseTime_default(s, arr[4]);
      return s;
    }
  },
  //Long "Mar 25 2015"
  //February 22, 2017 15:30:00
  {
    reg: /^([a-z]+) ([0-9]{1,2})( [0-9]{4})?( ([0-9:]+( ?am| ?pm| ?gmt)?))?$/i,
    parse: (s, arr) => {
      let obj = {
        year: parseYear(arr[3], s._today),
        month: parseMonth(arr[1]),
        date: toCardinal(arr[2] || "")
      };
      if (validate(obj) === false) {
        s.epoch = null;
        return s;
      }
      walk_default(s, obj);
      s = parseTime_default(s, arr[4]);
      return s;
    }
  },
  // 'Sun Mar 14 15:09:48 +0000 2021'
  {
    reg: /^([a-z]+) ([0-9]{1,2}) ([0-9]{1,2}:[0-9]{2}:?[0-9]{0,2})( \+[0-9]{4})?( [0-9]{4})?$/i,
    parse: (s, arr) => {
      let [, month2, date2, time2, tz, year2] = arr;
      let obj = {
        year: parseYear(year2, s._today),
        month: parseMonth(month2),
        date: toCardinal(date2 || "")
      };
      if (validate(obj) === false) {
        s.epoch = null;
        return s;
      }
      walk_default(s, obj);
      s = parseOffset_default2(s, tz);
      s = parseTime_default(s, time2);
      return s;
    }
  }
];

// node_modules/spacetime/src/input/formats/03-dmy.js
var dmy_default = [
  // =====
  //  d-m-y
  // =====
  //common british format - "25-feb-2015"
  {
    reg: /^([0-9]{1,2})[\-\/]([a-z]+)[\-\/]?([0-9]{4})?$/i,
    parse: (s, m) => {
      let obj = {
        year: parseYear(m[3], s._today),
        month: parseMonth(m[2]),
        date: toCardinal(m[1] || "")
      };
      if (validate(obj) === false) {
        s.epoch = null;
        return s;
      }
      walk_default(s, obj);
      s = parseTime_default(s, m[4]);
      return s;
    }
  },
  // "25 Mar 2015"
  {
    reg: /^([0-9]{1,2})( [a-z]+)( [0-9]{4}| '[0-9]{2})? ?([0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i,
    parse: (s, m) => {
      let obj = {
        year: parseYear(m[3], s._today),
        month: parseMonth(m[2]),
        date: toCardinal(m[1])
      };
      if (!obj.month || validate(obj) === false) {
        s.epoch = null;
        return s;
      }
      walk_default(s, obj);
      s = parseTime_default(s, m[4]);
      return s;
    }
  },
  // 01-jan-2020
  {
    reg: /^([0-9]{1,2})[\. -/]([a-z]+)[\. -/]([0-9]{4})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
    parse: (s, m) => {
      let obj = {
        date: Number(m[1]),
        month: parseMonth(m[2]),
        year: Number(m[3])
      };
      if (validate(obj) === false) {
        s.epoch = null;
        return s;
      }
      walk_default(s, obj);
      s = s.startOf("day");
      s = parseTime_default(s, m[4]);
      return s;
    }
  }
];

// node_modules/spacetime/src/input/formats/04-misc.js
var misc_default = [
  // =====
  // no dates
  // =====
  // '2012-06' month-only
  {
    reg: /^([0-9]{4})[\-\/]([0-9]{2})$/i,
    parse: (s, m) => {
      let obj = {
        year: m[1],
        month: parseInt(m[2], 10) - 1,
        date: 1
      };
      if (validate(obj) === false) {
        s.epoch = null;
        return s;
      }
      walk_default(s, obj);
      s = parseTime_default(s, m[4]);
      return s;
    }
  },
  //February 2017 (implied date)
  {
    reg: /^([a-z]+) ([0-9]{4})$/i,
    parse: (s, arr) => {
      let obj = {
        year: parseYear(arr[2], s._today),
        month: parseMonth(arr[1]),
        date: s._today.date || 1
      };
      if (validate(obj) === false) {
        s.epoch = null;
        return s;
      }
      walk_default(s, obj);
      s = parseTime_default(s, arr[4]);
      return s;
    }
  },
  {
    // 'q2 2002'
    reg: /^(q[0-9])( of)?( [0-9]{4})?/i,
    parse: (s, arr) => {
      let quarter = arr[1] || "";
      s = s.quarter(quarter);
      let year2 = arr[3] || "";
      if (year2) {
        year2 = year2.trim();
        s = s.year(year2);
      }
      return s;
    }
  },
  {
    // 'summer 2002'
    reg: /^(spring|summer|winter|fall|autumn)( of)?( [0-9]{4})?/i,
    parse: (s, arr) => {
      let season = arr[1] || "";
      s = s.season(season);
      let year2 = arr[3] || "";
      if (year2) {
        year2 = year2.trim();
        s = s.year(year2);
      }
      return s;
    }
  },
  {
    // '200bc'
    reg: /^[0-9,]+ ?b\.?c\.?$/i,
    parse: (s, arr) => {
      let str = arr[0] || "";
      str = str.replace(/^([0-9,]+) ?b\.?c\.?$/i, "-$1");
      let d = /* @__PURE__ */ new Date();
      let obj = {
        year: parseInt(str.trim(), 10),
        month: d.getMonth(),
        date: d.getDate()
      };
      if (validate(obj) === false) {
        s.epoch = null;
        return s;
      }
      walk_default(s, obj);
      s = parseTime_default(s);
      return s;
    }
  },
  {
    // '200ad'
    reg: /^[0-9,]+ ?(a\.?d\.?|c\.?e\.?)$/i,
    parse: (s, arr) => {
      let str = arr[0] || "";
      str = str.replace(/,/g, "");
      let d = /* @__PURE__ */ new Date();
      let obj = {
        year: parseInt(str.trim(), 10),
        month: d.getMonth(),
        date: d.getDate()
      };
      if (validate(obj) === false) {
        s.epoch = null;
        return s;
      }
      walk_default(s, obj);
      s = parseTime_default(s);
      return s;
    }
  },
  {
    // '1992'
    reg: /^[0-9]{4}( ?a\.?d\.?)?$/i,
    parse: (s, arr) => {
      let today = s._today;
      if (today.month && !today.date) {
        today.date = 1;
      }
      let d = /* @__PURE__ */ new Date();
      let obj = {
        year: parseYear(arr[0], today),
        month: today.month || d.getMonth(),
        date: today.date || d.getDate()
      };
      if (validate(obj) === false) {
        s.epoch = null;
        return s;
      }
      walk_default(s, obj);
      s = parseTime_default(s);
      return s;
    }
  }
];

// node_modules/spacetime/src/input/formats/index.js
var formats_default = [].concat(ymd_default, mdy_default, dmy_default, misc_default);

// node_modules/spacetime/src/input/parse.js
var parseString = function(s, input, givenTz) {
  for (let i = 0; i < formats_default.length; i++) {
    let m = input.match(formats_default[i].reg);
    if (m) {
      let res = formats_default[i].parse(s, m, givenTz);
      if (res !== null && res.isValid()) {
        return res;
      }
    }
  }
  if (s.silent === false) {
    console.warn("Warning: couldn't parse date-string: '" + input + "'");
  }
  s.epoch = null;
  return s;
};
var parse_default = parseString;

// node_modules/spacetime/src/input/index.js
var { parseArray: parseArray2, parseObject: parseObject2, parseNumber: parseNumber2 } = helpers_default;
var defaults2 = {
  year: (/* @__PURE__ */ new Date()).getFullYear(),
  month: 0,
  date: 1
};
var parseInput = (s, input) => {
  let today = s._today || defaults2;
  if (typeof input === "number") {
    return parseNumber2(s, input);
  }
  s.epoch = Date.now();
  if (s._today && isObject(s._today) && Object.keys(s._today).length > 0) {
    let res = parseObject2(s, today, defaults2);
    if (res.isValid()) {
      s.epoch = res.epoch;
    }
  }
  if (input === null || input === void 0 || input === "") {
    return s;
  }
  if (isDate(input) === true) {
    s.epoch = input.getTime();
    return s;
  }
  if (isArray2(input) === true) {
    s = parseArray2(s, input, today);
    return s;
  }
  if (isObject(input) === true) {
    if (input.epoch) {
      s.epoch = input.epoch;
      s.tz = input.tz;
      return s;
    }
    s = parseObject2(s, input, today);
    return s;
  }
  if (typeof input !== "string") {
    return s;
  }
  input = normalize_default(input);
  if (named_dates_default.hasOwnProperty(input) === true) {
    s = named_dates_default[input](s);
    return s;
  }
  return parse_default(s, input);
};
var input_default = parseInput;

// node_modules/spacetime/src/data/days.js
var shortDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
var longDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
function short2() {
  return shortDays;
}
function long2() {
  return longDays;
}
function set2(i18n) {
  shortDays = i18n.short || shortDays;
  longDays = i18n.long || longDays;
}
var aliases = {
  mo: 1,
  tu: 2,
  we: 3,
  th: 4,
  fr: 5,
  sa: 6,
  su: 7,
  tues: 2,
  weds: 3,
  wedn: 3,
  thur: 4,
  thurs: 4
};

// node_modules/spacetime/src/data/caseFormat.js
var titleCaseEnabled = true;
function useTitleCase() {
  return titleCaseEnabled;
}
function set3(val) {
  titleCaseEnabled = val;
}

// node_modules/spacetime/src/methods/format/_offset.js
var isoOffset = (s) => {
  let offset2 = s.timezone().current.offset;
  return !offset2 ? "Z" : formatTimezone(offset2, ":");
};
var offset_default = isoOffset;

// node_modules/spacetime/src/methods/format/index.js
var applyCaseFormat = (str) => {
  if (useTitleCase()) {
    return titleCase(str);
  }
  return str;
};
var padYear = (num) => {
  if (num >= 0) {
    return zeroPad(num, 4);
  } else {
    num = Math.abs(num);
    return "-" + zeroPad(num, 4);
  }
};
var format = {
  day: (s) => applyCaseFormat(s.dayName()),
  "day-short": (s) => applyCaseFormat(short2()[s.day()]),
  "day-number": (s) => s.day(),
  "day-ordinal": (s) => ordinal(s.day()),
  "day-pad": (s) => zeroPad(s.day()),
  date: (s) => s.date(),
  "date-ordinal": (s) => ordinal(s.date()),
  "date-pad": (s) => zeroPad(s.date()),
  month: (s) => applyCaseFormat(s.monthName()),
  "month-short": (s) => applyCaseFormat(short()[s.month()]),
  "month-number": (s) => s.month(),
  "month-ordinal": (s) => ordinal(s.month()),
  "month-pad": (s) => zeroPad(s.month()),
  "iso-month": (s) => zeroPad(s.month() + 1),
  //1-based months
  year: (s) => {
    let year2 = s.year();
    if (year2 > 0) {
      return year2;
    }
    year2 = Math.abs(year2);
    return year2 + " BC";
  },
  "year-short": (s) => {
    let year2 = s.year();
    if (year2 > 0) {
      return `'${String(s.year()).substr(2, 4)}`;
    }
    year2 = Math.abs(year2);
    return year2 + " BC";
  },
  "iso-year": (s) => {
    let year2 = s.year();
    let isNegative = year2 < 0;
    let str = zeroPad(Math.abs(year2), 4);
    if (isNegative) {
      str = zeroPad(str, 6);
      str = "-" + str;
    }
    return str;
  },
  time: (s) => s.time(),
  "time-24": (s) => `${s.hour24()}:${zeroPad(s.minute())}`,
  hour: (s) => s.hour12(),
  "hour-pad": (s) => zeroPad(s.hour12()),
  "hour-24": (s) => s.hour24(),
  "hour-24-pad": (s) => zeroPad(s.hour24()),
  minute: (s) => s.minute(),
  "minute-pad": (s) => zeroPad(s.minute()),
  second: (s) => s.second(),
  "second-pad": (s) => zeroPad(s.second()),
  millisecond: (s) => s.millisecond(),
  "millisecond-pad": (s) => zeroPad(s.millisecond(), 3),
  ampm: (s) => s.ampm(),
  AMPM: (s) => s.ampm().toUpperCase(),
  quarter: (s) => "Q" + s.quarter(),
  season: (s) => s.season(),
  era: (s) => s.era(),
  json: (s) => s.json(),
  timezone: (s) => s.timezone().name,
  offset: (s) => offset_default(s),
  numeric: (s) => `${s.year()}/${zeroPad(s.month() + 1)}/${zeroPad(s.date())}`,
  // yyyy/mm/dd
  "numeric-us": (s) => `${zeroPad(s.month() + 1)}/${zeroPad(s.date())}/${s.year()}`,
  // mm/dd/yyyy
  "numeric-uk": (s) => `${zeroPad(s.date())}/${zeroPad(s.month() + 1)}/${s.year()}`,
  //dd/mm/yyyy
  "mm/dd": (s) => `${zeroPad(s.month() + 1)}/${zeroPad(s.date())}`,
  //mm/dd
  // ... https://en.wikipedia.org/wiki/ISO_8601 ;(((
  iso: (s) => {
    let year2 = s.format("iso-year");
    let month2 = zeroPad(s.month() + 1);
    let date2 = zeroPad(s.date());
    let hour = zeroPad(s.h24());
    let minute = zeroPad(s.minute());
    let second = zeroPad(s.second());
    let ms = zeroPad(s.millisecond(), 3);
    let offset2 = offset_default(s);
    return `${year2}-${month2}-${date2}T${hour}:${minute}:${second}.${ms}${offset2}`;
  },
  "iso-short": (s) => {
    let month2 = zeroPad(s.month() + 1);
    let date2 = zeroPad(s.date());
    let year2 = padYear(s.year());
    return `${year2}-${month2}-${date2}`;
  },
  "iso-utc": (s) => {
    return new Date(s.epoch).toISOString();
  },
  //i made these up
  nice: (s) => `${short()[s.month()]} ${ordinal(s.date())}, ${s.time()}`,
  "nice-24": (s) => `${short()[s.month()]} ${ordinal(s.date())}, ${s.hour24()}:${zeroPad(
    s.minute()
  )}`,
  "nice-year": (s) => `${short()[s.month()]} ${ordinal(s.date())}, ${s.year()}`,
  "nice-day": (s) => `${short2()[s.day()]} ${applyCaseFormat(short()[s.month()])} ${ordinal(
    s.date()
  )}`,
  "nice-full": (s) => `${s.dayName()} ${applyCaseFormat(s.monthName())} ${ordinal(s.date())}, ${s.time()}`,
  "nice-full-24": (s) => `${s.dayName()} ${applyCaseFormat(s.monthName())} ${ordinal(
    s.date()
  )}, ${s.hour24()}:${zeroPad(s.minute())}`
};
var aliases2 = {
  "day-name": "day",
  "month-name": "month",
  "iso 8601": "iso",
  "time-h24": "time-24",
  "time-12": "time",
  "time-h12": "time",
  tz: "timezone",
  "day-num": "day-number",
  "month-num": "month-number",
  "month-iso": "iso-month",
  "year-iso": "iso-year",
  "nice-short": "nice",
  "nice-short-24": "nice-24",
  mdy: "numeric-us",
  dmy: "numeric-uk",
  ymd: "numeric",
  "yyyy/mm/dd": "numeric",
  "mm/dd/yyyy": "numeric-us",
  "dd/mm/yyyy": "numeric-us",
  "little-endian": "numeric-uk",
  "big-endian": "numeric",
  "day-nice": "nice-day"
};
Object.keys(aliases2).forEach((k) => format[k] = format[aliases2[k]]);
var printFormat = (s, str = "") => {
  if (s.isValid() !== true) {
    return "";
  }
  if (format.hasOwnProperty(str)) {
    let out = format[str](s) || "";
    if (str !== "json") {
      out = String(out);
      if (str.toLowerCase() !== "ampm") {
        out = applyCaseFormat(out);
      }
    }
    return out;
  }
  if (str.indexOf("{") !== -1) {
    let sections = /\{(.+?)\}/g;
    str = str.replace(sections, (_, fmt2) => {
      fmt2 = fmt2.toLowerCase().trim();
      if (format.hasOwnProperty(fmt2)) {
        let out = String(format[fmt2](s));
        if (fmt2.toLowerCase() !== "ampm") {
          return applyCaseFormat(out);
        }
        return out;
      }
      return "";
    });
    return str;
  }
  return s.format("iso-short");
};
var format_default = printFormat;

// node_modules/spacetime/src/methods/format/unixFmt.js
var mapping2 = {
  G: (s) => s.era(),
  GG: (s) => s.era(),
  GGG: (s) => s.era(),
  GGGG: (s) => s.era() === "AD" ? "Anno Domini" : "Before Christ",
  //year
  y: (s) => s.year(),
  yy: (s) => {
    return zeroPad(Number(String(s.year()).substr(2, 4)));
  },
  yyy: (s) => s.year(),
  yyyy: (s) => s.year(),
  yyyyy: (s) => "0" + s.year(),
  // u: (s) => {},//extended non-gregorian years
  //quarter
  Q: (s) => s.quarter(),
  QQ: (s) => s.quarter(),
  QQQ: (s) => s.quarter(),
  QQQQ: (s) => s.quarter(),
  //month
  M: (s) => s.month() + 1,
  MM: (s) => zeroPad(s.month() + 1),
  MMM: (s) => s.format("month-short"),
  MMMM: (s) => s.format("month"),
  //week
  w: (s) => s.week(),
  ww: (s) => zeroPad(s.week()),
  //week of month
  // W: (s) => s.week(),
  //date of month
  d: (s) => s.date(),
  dd: (s) => zeroPad(s.date()),
  //date of year
  D: (s) => s.dayOfYear(),
  DD: (s) => zeroPad(s.dayOfYear()),
  DDD: (s) => zeroPad(s.dayOfYear(), 3),
  // F: (s) => {},//date of week in month
  // g: (s) => {},//modified julian day
  //day
  E: (s) => s.format("day-short"),
  EE: (s) => s.format("day-short"),
  EEE: (s) => s.format("day-short"),
  EEEE: (s) => s.format("day"),
  EEEEE: (s) => s.format("day")[0],
  e: (s) => s.day(),
  ee: (s) => s.day(),
  eee: (s) => s.format("day-short"),
  eeee: (s) => s.format("day"),
  eeeee: (s) => s.format("day")[0],
  //am/pm
  a: (s) => s.ampm().toUpperCase(),
  aa: (s) => s.ampm().toUpperCase(),
  aaa: (s) => s.ampm().toUpperCase(),
  aaaa: (s) => s.ampm().toUpperCase(),
  //hour
  h: (s) => s.h12(),
  hh: (s) => zeroPad(s.h12()),
  H: (s) => s.hour(),
  HH: (s) => zeroPad(s.hour()),
  // j: (s) => {},//weird hour format
  m: (s) => s.minute(),
  mm: (s) => zeroPad(s.minute()),
  s: (s) => s.second(),
  ss: (s) => zeroPad(s.second()),
  //milliseconds
  SSS: (s) => zeroPad(s.millisecond(), 3),
  //milliseconds in the day
  A: (s) => s.epoch - s.startOf("day").epoch,
  //timezone
  z: (s) => s.timezone().name,
  zz: (s) => s.timezone().name,
  zzz: (s) => s.timezone().name,
  zzzz: (s) => s.timezone().name,
  Z: (s) => formatTimezone(s.timezone().current.offset),
  ZZ: (s) => formatTimezone(s.timezone().current.offset),
  ZZZ: (s) => formatTimezone(s.timezone().current.offset),
  ZZZZ: (s) => formatTimezone(s.timezone().current.offset, ":")
};
var addAlias = (char2, to, n) => {
  let name = char2;
  let toName = to;
  for (let i = 0; i < n; i += 1) {
    mapping2[name] = mapping2[toName];
    name += char2;
    toName += to;
  }
};
addAlias("q", "Q", 4);
addAlias("L", "M", 4);
addAlias("Y", "y", 4);
addAlias("c", "e", 4);
addAlias("k", "H", 2);
addAlias("K", "h", 2);
addAlias("S", "s", 2);
addAlias("v", "z", 4);
addAlias("V", "Z", 4);
var escapeChars = function(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === `'`) {
      for (let o2 = i + 1; o2 < arr.length; o2 += 1) {
        if (arr[o2]) {
          arr[i] += arr[o2];
        }
        if (arr[o2] === `'`) {
          arr[o2] = null;
          break;
        }
        arr[o2] = null;
      }
    }
  }
  return arr.filter((ch) => ch);
};
var combineRepeated = function(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let c = arr[i];
    for (let o2 = i + 1; o2 < arr.length; o2 += 1) {
      if (arr[o2] === c) {
        arr[i] += arr[o2];
        arr[o2] = null;
      } else {
        break;
      }
    }
  }
  arr = arr.filter((ch) => ch);
  arr = arr.map((str) => {
    if (str === `''`) {
      str = `'`;
    }
    return str;
  });
  return arr;
};
var unixFmt = (s, str) => {
  let arr = str.split("");
  arr = escapeChars(arr);
  arr = combineRepeated(arr);
  return arr.reduce((txt, c) => {
    if (mapping2[c] !== void 0) {
      txt += mapping2[c](s) || "";
    } else {
      if (/^'.{1,}'$/.test(c)) {
        c = c.replace(/'/g, "");
      }
      txt += c;
    }
    return txt;
  }, "");
};
var unixFmt_default = unixFmt;

// node_modules/spacetime/src/methods/progress.js
var units2 = ["year", "season", "quarter", "month", "week", "day", "quarterHour", "hour", "minute"];
var doUnit = function(s, k) {
  let start = s.clone().startOf(k);
  let end = s.clone().endOf(k);
  let duration = end.epoch - start.epoch;
  let percent = (s.epoch - start.epoch) / duration;
  return parseFloat(percent.toFixed(2));
};
var progress = (s, unit) => {
  if (unit) {
    unit = normalize2(unit);
    return doUnit(s, unit);
  }
  let obj = {};
  units2.forEach((k) => {
    obj[k] = doUnit(s, k);
  });
  return obj;
};
var progress_default = progress;

// node_modules/spacetime/src/methods/nearest.js
var nearest = (s, unit) => {
  let prog = s.progress();
  unit = normalize2(unit);
  if (unit === "quarterhour") {
    unit = "quarterHour";
  }
  if (prog[unit] !== void 0) {
    if (prog[unit] > 0.5) {
      s = s.add(1, unit);
    }
    s = s.startOf(unit);
  } else if (s.silent === false) {
    console.warn("no known unit '" + unit + "'");
  }
  return s;
};
var nearest_default = nearest;

// node_modules/spacetime/src/methods/diff/one.js
var climb = (a, b, unit) => {
  let i = 0;
  a = a.clone();
  while (a.isBefore(b)) {
    a = a.add(1, unit);
    i += 1;
  }
  if (a.isAfter(b, unit)) {
    i -= 1;
  }
  return i;
};
var diffOne = (a, b, unit) => {
  if (a.isBefore(b)) {
    return climb(a, b, unit);
  } else {
    return climb(b, a, unit) * -1;
  }
};
var one_default = diffOne;

// node_modules/spacetime/src/methods/diff/waterfall.js
var fastYear = (a, b) => {
  let years = b.year() - a.year();
  a = a.year(b.year());
  if (a.isAfter(b)) {
    years -= 1;
  }
  return years;
};
var diff = function(a, b) {
  let msDiff = b.epoch - a.epoch;
  let obj = {
    milliseconds: msDiff,
    seconds: parseInt(msDiff / 1e3, 10)
  };
  obj.minutes = parseInt(obj.seconds / 60, 10);
  obj.hours = parseInt(obj.minutes / 60, 10);
  let tmp = a.clone();
  obj.years = fastYear(tmp, b);
  tmp = a.add(obj.years, "year");
  obj.months = obj.years * 12;
  tmp = a.add(obj.months, "month");
  obj.months += one_default(tmp, b, "month");
  obj.quarters = obj.years * 4;
  obj.quarters += parseInt(obj.months % 12 / 3, 10);
  obj.weeks = obj.years * 52;
  tmp = a.add(obj.weeks, "week");
  obj.weeks += one_default(tmp, b, "week");
  obj.days = obj.weeks * 7;
  tmp = a.add(obj.days, "day");
  obj.days += one_default(tmp, b, "day");
  return obj;
};
var waterfall_default = diff;

// node_modules/spacetime/src/methods/diff/index.js
var reverseDiff = function(obj) {
  Object.keys(obj).forEach((k) => {
    obj[k] *= -1;
  });
  return obj;
};
var main = function(a, b, unit) {
  b = beADate(b, a);
  let reversed = false;
  if (a.isAfter(b)) {
    let tmp = a;
    a = b;
    b = tmp;
    reversed = true;
  }
  let obj = waterfall_default(a, b);
  if (reversed) {
    obj = reverseDiff(obj);
  }
  if (unit) {
    unit = normalize2(unit);
    if (/s$/.test(unit) !== true) {
      unit += "s";
    }
    if (unit === "dates") {
      unit = "days";
    }
    return obj[unit];
  }
  return obj;
};
var diff_default = main;

// node_modules/spacetime/src/methods/since/_iso.js
var fmt = (n) => Math.abs(n) || 0;
var toISO = function(diff2) {
  let iso = "P";
  iso += fmt(diff2.years) + "Y";
  iso += fmt(diff2.months) + "M";
  iso += fmt(diff2.days) + "DT";
  iso += fmt(diff2.hours) + "H";
  iso += fmt(diff2.minutes) + "M";
  iso += fmt(diff2.seconds) + "S";
  return iso;
};
var iso_default = toISO;

// node_modules/spacetime/src/methods/since/getDiff.js
function getDiff(a, b) {
  const isBefore = a.isBefore(b);
  const later = isBefore ? b : a;
  let earlier = isBefore ? a : b;
  earlier = earlier.clone();
  const diff2 = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  Object.keys(diff2).forEach((unit) => {
    if (earlier.isSame(later, unit)) {
      return;
    }
    let max2 = earlier.diff(later, unit);
    earlier = earlier.add(max2, unit);
    diff2[unit] = max2;
  });
  if (isBefore) {
    Object.keys(diff2).forEach((u) => {
      if (diff2[u] !== 0) {
        diff2[u] *= -1;
      }
    });
  }
  return diff2;
}
var getDiff_default = getDiff;

// node_modules/spacetime/src/data/units.js
var units3 = {
  second: "second",
  seconds: "seconds",
  minute: "minute",
  minutes: "minutes",
  hour: "hour",
  hours: "hours",
  day: "day",
  days: "days",
  month: "month",
  months: "months",
  year: "year",
  years: "years"
};
function unitsString(unit) {
  return units3[unit] || "";
}
function set4(i18n = {}) {
  units3 = {
    second: i18n.second || units3.second,
    seconds: i18n.seconds || units3.seconds,
    minute: i18n.minute || units3.minute,
    minutes: i18n.minutes || units3.minutes,
    hour: i18n.hour || units3.hour,
    hours: i18n.hours || units3.hours,
    day: i18n.day || units3.day,
    days: i18n.days || units3.days,
    month: i18n.month || units3.month,
    months: i18n.months || units3.months,
    year: i18n.year || units3.year,
    years: i18n.years || units3.years
  };
}

// node_modules/spacetime/src/data/distance.js
var past = "past";
var future = "future";
var present = "present";
var now = "now";
var almost = "almost";
var over = "over";
var pastDistance = (value) => `${value} ago`;
var futureDistance = (value) => `in ${value}`;
function pastDistanceString(value) {
  return pastDistance(value);
}
function futureDistanceString(value) {
  return futureDistance(value);
}
function pastString() {
  return past;
}
function futureString() {
  return future;
}
function presentString() {
  return present;
}
function nowString() {
  return now;
}
function almostString() {
  return almost;
}
function overString() {
  return over;
}
function set5(i18n) {
  pastDistance = i18n.pastDistance || pastDistance;
  futureDistance = i18n.futureDistance || futureDistance;
  past = i18n.past || past;
  future = i18n.future || future;
  present = i18n.present || present;
  now = i18n.now || now;
  almost = i18n.almost || almost;
  over = i18n.over || over;
}

// node_modules/spacetime/src/methods/since/soften.js
var qualifiers = {
  months: {
    almost: 10,
    over: 4
  },
  days: {
    almost: 25,
    over: 10
  },
  hours: {
    almost: 20,
    over: 8
  },
  minutes: {
    almost: 50,
    over: 20
  },
  seconds: {
    almost: 50,
    over: 20
  }
};
function pluralize(value, unit) {
  if (value === 1) {
    return value + " " + unitsString(unit.slice(0, -1));
  }
  return value + " " + unitsString(unit);
}
var toSoft = function(diff2) {
  let rounded = null;
  let qualified = null;
  let abbreviated = [];
  let englishValues = [];
  Object.keys(diff2).forEach((unit, i, units6) => {
    const value = Math.abs(diff2[unit]);
    if (value === 0) {
      return;
    }
    abbreviated.push(value + unit[0]);
    const englishValue = pluralize(value, unit);
    englishValues.push(englishValue);
    if (!rounded) {
      rounded = qualified = englishValue;
      if (i > 4) {
        return;
      }
      const nextUnit = units6[i + 1];
      const nextValue = Math.abs(diff2[nextUnit]);
      if (nextValue > qualifiers[nextUnit].almost) {
        rounded = pluralize(value + 1, unit);
        qualified = almostString() + " " + rounded;
      } else if (nextValue > qualifiers[nextUnit].over) {
        qualified = overString() + " " + englishValue;
      }
    }
  });
  return { qualified, rounded, abbreviated, englishValues };
};
var soften_default = toSoft;

// node_modules/spacetime/src/methods/since/index.js
var since = (start, end) => {
  end = beADate(end, start);
  const diff2 = getDiff_default(start, end);
  const isNow = Object.keys(diff2).every((u) => !diff2[u]);
  if (isNow === true) {
    return {
      diff: diff2,
      rounded: nowString(),
      qualified: nowString(),
      precise: nowString(),
      abbreviated: [],
      iso: "P0Y0M0DT0H0M0S",
      direction: presentString()
    };
  }
  let precise;
  let direction = futureString();
  let { rounded, qualified, englishValues, abbreviated } = soften_default(diff2);
  precise = englishValues.splice(0, 2).join(", ");
  if (start.isAfter(end) === true) {
    rounded = pastDistanceString(rounded);
    qualified = pastDistanceString(qualified);
    precise = pastDistanceString(precise);
    direction = pastString();
  } else {
    rounded = futureDistanceString(rounded);
    qualified = futureDistanceString(qualified);
    precise = futureDistanceString(precise);
  }
  let iso = iso_default(diff2);
  return {
    diff: diff2,
    rounded,
    qualified,
    precise,
    abbreviated,
    iso,
    direction
  };
};
var since_default = since;

// node_modules/spacetime/src/data/seasons.js
var north = [
  ["spring", 2, 1],
  ["summer", 5, 1],
  ["fall", 8, 1],
  ["autumn", 8, 1],
  ["winter", 11, 1]
  //dec 1
];
var south = [
  ["fall", 2, 1],
  ["autumn", 2, 1],
  ["winter", 5, 1],
  ["spring", 8, 1],
  ["summer", 11, 1]
  //dec 1
];
var seasons_default = { north, south };

// node_modules/spacetime/src/data/quarters.js
var quarters_default = [
  null,
  [0, 1],
  //jan 1
  [3, 1],
  //apr 1
  [6, 1],
  //july 1
  [9, 1]
  //oct 1
];

// node_modules/spacetime/src/methods/startOf.js
var units4 = {
  second: (s) => {
    walk_default(s, {
      millisecond: 0
    });
    return s;
  },
  minute: (s) => {
    walk_default(s, {
      second: 0,
      millisecond: 0
    });
    return s;
  },
  quarterhour: (s) => {
    let minute = s.minutes();
    if (minute >= 45) {
      s = s.minutes(45);
    } else if (minute >= 30) {
      s = s.minutes(30);
    } else if (minute >= 15) {
      s = s.minutes(15);
    } else {
      s = s.minutes(0);
    }
    walk_default(s, {
      second: 0,
      millisecond: 0
    });
    return s;
  },
  hour: (s) => {
    walk_default(s, {
      minute: 0,
      second: 0,
      millisecond: 0
    });
    return s;
  },
  day: (s) => {
    walk_default(s, {
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    });
    return s;
  },
  week: (s) => {
    let original = s.clone();
    s = s.day(s._weekStart);
    if (s.isAfter(original)) {
      s = s.subtract(1, "week");
    }
    walk_default(s, {
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    });
    return s;
  },
  month: (s) => {
    walk_default(s, {
      date: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    });
    return s;
  },
  quarter: (s) => {
    let q = s.quarter();
    if (quarters_default[q]) {
      walk_default(s, {
        month: quarters_default[q][0],
        date: quarters_default[q][1],
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      });
    }
    return s;
  },
  season: (s) => {
    let current = s.season();
    let hem = "north";
    if (s.hemisphere() === "South") {
      hem = "south";
    }
    for (let i = 0; i < seasons_default[hem].length; i++) {
      if (seasons_default[hem][i][0] === current) {
        let year2 = s.year();
        if (current === "winter" && s.month() < 3) {
          year2 -= 1;
        }
        walk_default(s, {
          year: year2,
          month: seasons_default[hem][i][1],
          date: seasons_default[hem][i][2],
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0
        });
        return s;
      }
    }
    return s;
  },
  year: (s) => {
    walk_default(s, {
      month: 0,
      date: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    });
    return s;
  },
  decade: (s) => {
    s = s.startOf("year");
    let year2 = s.year();
    let decade = parseInt(year2 / 10, 10) * 10;
    s = s.year(decade);
    return s;
  },
  century: (s) => {
    s = s.startOf("year");
    let year2 = s.year();
    let decade = parseInt(year2 / 100, 10) * 100;
    s = s.year(decade);
    return s;
  }
};
units4.date = units4.day;
var startOf = (a, unit) => {
  let s = a.clone();
  unit = normalize2(unit);
  if (units4[unit]) {
    return units4[unit](s);
  }
  if (unit === "summer" || unit === "winter") {
    s = s.season(unit);
    return units4.season(s);
  }
  return s;
};
var endOf = (a, unit) => {
  let s = a.clone();
  unit = normalize2(unit);
  if (units4[unit]) {
    s = units4[unit](s);
    s = s.add(1, unit);
    s = s.subtract(1, "millisecond");
    return s;
  }
  return s;
};

// node_modules/spacetime/src/methods/every.js
var isDay = function(unit) {
  if (short2().find((s) => s === unit)) {
    return true;
  }
  if (long2().find((s) => s === unit)) {
    return true;
  }
  return false;
};
var every = function(start, unit, end) {
  if (!unit || !end) {
    return [];
  }
  unit = normalize2(unit);
  end = start.clone().set(end);
  if (start.isAfter(end)) {
    let tmp = start;
    start = end;
    end = tmp;
  }
  let d = start.clone();
  if (isDay(unit)) {
    d = d.next(unit);
    unit = "week";
  } else {
    let first = d.startOf(unit);
    if (first.isBefore(start)) {
      d = d.next(unit);
    }
  }
  let result = [];
  while (d.isBefore(end)) {
    result.push(d);
    d = d.add(1, unit);
  }
  return result;
};
var every_default = every;

// node_modules/spacetime/src/timezone/index.js
var parseDst = (dst) => {
  if (!dst) {
    return [];
  }
  return dst.split("->");
};
var titleCase2 = (str) => {
  str = str[0].toUpperCase() + str.substr(1);
  str = str.replace(/[\/_-]([a-z])/gi, (s) => {
    return s.toUpperCase();
  });
  str = str.replace(/_(of|es)_/i, (s) => s.toLowerCase());
  str = str.replace(/\/gmt/i, "/GMT");
  str = str.replace(/\/Dumontdurville$/i, "/DumontDUrville");
  str = str.replace(/\/Mcmurdo$/i, "/McMurdo");
  str = str.replace(/\/Port-au-prince$/i, "/Port-au-Prince");
  return str;
};
var timezone = (s) => {
  let zones2 = s.timezones;
  let tz = s.tz;
  if (zones2.hasOwnProperty(tz) === false) {
    tz = find_default(s.tz, zones2);
  }
  if (tz === null) {
    if (s.silent === false) {
      console.warn("Warn: could not find given or local timezone - '" + s.tz + "'");
    }
    return {
      current: {
        epochShift: 0
      }
    };
  }
  let found = zones2[tz];
  let result = {
    name: titleCase2(tz),
    hasDst: Boolean(found.dst),
    default_offset: found.offset,
    //do north-hemisphere version as default (sorry!)
    hemisphere: found.hem === "s" ? "South" : "North",
    current: {}
  };
  if (result.hasDst) {
    let arr = parseDst(found.dst);
    result.change = {
      start: arr[0],
      back: arr[1]
    };
  }
  let summer = found.offset;
  let winter = summer;
  if (result.hasDst === true) {
    if (result.hemisphere === "North") {
      winter = summer - 1;
    } else {
      winter = found.offset + 1;
    }
  }
  if (result.hasDst === false) {
    result.current.offset = summer;
    result.current.isDST = false;
  } else if (summerTime_default(s.epoch, result.change.start, result.change.back, summer, winter) === true) {
    result.current.offset = summer;
    result.current.isDST = result.hemisphere === "North";
  } else {
    result.current.offset = winter;
    result.current.isDST = result.hemisphere === "South";
  }
  return result;
};
var timezone_default = timezone;

// node_modules/spacetime/src/methods.js
var units5 = [
  "century",
  "decade",
  "year",
  "month",
  "date",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
var methods = {
  set: function(input, tz) {
    let s = this.clone();
    s = input_default(s, input, null);
    if (tz) {
      this.tz = find_default(tz);
    }
    return s;
  },
  timezone: function() {
    return timezone_default(this);
  },
  isDST: function() {
    return timezone_default(this).current.isDST;
  },
  hasDST: function() {
    return timezone_default(this).hasDst;
  },
  offset: function() {
    return timezone_default(this).current.offset * 60;
  },
  hemisphere: function() {
    return timezone_default(this).hemisphere;
  },
  format: function(fmt2) {
    return format_default(this, fmt2);
  },
  unixFmt: function(fmt2) {
    return unixFmt_default(this, fmt2);
  },
  startOf: function(unit) {
    return startOf(this, unit);
  },
  endOf: function(unit) {
    return endOf(this, unit);
  },
  leapYear: function() {
    let year2 = this.year();
    return isLeapYear(year2);
  },
  progress: function(unit) {
    return progress_default(this, unit);
  },
  nearest: function(unit) {
    return nearest_default(this, unit);
  },
  diff: function(d, unit) {
    return diff_default(this, d, unit);
  },
  since: function(d) {
    if (!d) {
      d = this.clone().set();
    }
    return since_default(this, d);
  },
  next: function(unit) {
    let s = this.add(1, unit);
    return s.startOf(unit);
  },
  //the start of the previous year/week/century
  last: function(unit) {
    let s = this.subtract(1, unit);
    return s.startOf(unit);
  },
  isValid: function() {
    if (!this.epoch && this.epoch !== 0) {
      return false;
    }
    return !isNaN(this.d.getTime());
  },
  //travel to this timezone
  goto: function(tz) {
    let s = this.clone();
    s.tz = find_default(tz, s.timezones);
    return s;
  },
  //get each week/month/day between a -> b
  every: function(unit, to) {
    if (typeof unit === "object" && typeof to === "string") {
      let tmp = to;
      to = unit;
      unit = tmp;
    }
    return every_default(this, unit, to);
  },
  isAwake: function() {
    let hour = this.hour();
    if (hour < 8 || hour > 22) {
      return false;
    }
    return true;
  },
  isAsleep: function() {
    return !this.isAwake();
  },
  daysInMonth: function() {
    switch (this.month()) {
      case 0:
        return 31;
      case 1:
        return this.leapYear() ? 29 : 28;
      case 2:
        return 31;
      case 3:
        return 30;
      case 4:
        return 31;
      case 5:
        return 30;
      case 6:
        return 31;
      case 7:
        return 31;
      case 8:
        return 30;
      case 9:
        return 31;
      case 10:
        return 30;
      case 11:
        return 31;
      default:
        throw new Error("Invalid Month state.");
    }
  },
  //pretty-printing
  log: function() {
    console.log("");
    console.log(format_default(this, "nice-short"));
    return this;
  },
  logYear: function() {
    console.log("");
    console.log(format_default(this, "full-short"));
    return this;
  },
  json: function() {
    return units5.reduce((h, unit) => {
      h[unit] = this[unit]();
      return h;
    }, {});
  },
  debug: function() {
    let tz = this.timezone();
    let date2 = this.format("MM") + " " + this.format("date-ordinal") + " " + this.year();
    date2 += "\n     - " + this.format("time");
    console.log("\n\n", date2 + "\n     - " + tz.name + " (" + tz.current.offset + ")");
    return this;
  },
  //alias of 'since' but opposite - like moment.js
  from: function(d) {
    d = this.clone().set(d);
    return d.since(this);
  },
  fromNow: function() {
    let d = this.clone().set(Date.now());
    return d.since(this);
  },
  weekStart: function(input) {
    if (typeof input === "number") {
      this._weekStart = input;
      return this;
    }
    if (typeof input === "string") {
      input = input.toLowerCase().trim();
      let num = short2().indexOf(input);
      if (num === -1) {
        num = long2().indexOf(input);
      }
      if (num === -1) {
        num = 1;
      }
      this._weekStart = num;
    } else {
      console.warn("Spacetime Error: Cannot understand .weekStart() input:", input);
    }
    return this;
  }
};
methods.inDST = methods.isDST;
methods.round = methods.nearest;
methods.each = methods.every;
var methods_default = methods;

// node_modules/spacetime/src/methods/set/set.js
var validate2 = (n) => {
  if (typeof n === "string") {
    n = parseInt(n, 10);
  }
  return n;
};
var order = ["year", "month", "date", "hour", "minute", "second", "millisecond"];
var confirm = (s, tmp, unit) => {
  let n = order.indexOf(unit);
  let arr = order.slice(n, order.length);
  for (let i = 0; i < arr.length; i++) {
    let want = tmp[arr[i]]();
    s[arr[i]](want);
  }
  return s;
};
var fwdBkwd = function(s, old, goFwd, unit) {
  if (goFwd === true && s.isBefore(old)) {
    s = s.add(1, unit);
  } else if (goFwd === false && s.isAfter(old)) {
    s = s.minus(1, unit);
  }
  return s;
};
var milliseconds = function(s, n) {
  n = validate2(n);
  let current = s.millisecond();
  let diff2 = current - n;
  return s.epoch - diff2;
};
var seconds = function(s, n, goFwd) {
  n = validate2(n);
  let old = s.clone();
  let diff2 = s.second() - n;
  let shift2 = diff2 * milliseconds_default.second;
  s.epoch = s.epoch - shift2;
  s = fwdBkwd(s, old, goFwd, "minute");
  return s.epoch;
};
var minutes = function(s, n, goFwd) {
  n = validate2(n);
  let old = s.clone();
  let diff2 = s.minute() - n;
  let shift2 = diff2 * milliseconds_default.minute;
  s.epoch -= shift2;
  confirm(s, old, "second");
  s = fwdBkwd(s, old, goFwd, "hour");
  return s.epoch;
};
var hours = function(s, n, goFwd) {
  n = validate2(n);
  if (n >= 24) {
    n = 24;
  } else if (n < 0) {
    n = 0;
  }
  let old = s.clone();
  let diff2 = s.hour() - n;
  let shift2 = diff2 * milliseconds_default.hour;
  s.epoch -= shift2;
  if (s.date() !== old.date()) {
    s = old.clone();
    if (diff2 > 1) {
      diff2 -= 1;
    }
    if (diff2 < 1) {
      diff2 += 1;
    }
    shift2 = diff2 * milliseconds_default.hour;
    s.epoch -= shift2;
  }
  walk_default(s, {
    hour: n
  });
  confirm(s, old, "minute");
  s = fwdBkwd(s, old, goFwd, "day");
  return s.epoch;
};
var time = function(s, str, goFwd) {
  let m = str.match(/([0-9]{1,2})[:h]([0-9]{1,2})(:[0-9]{1,2})? ?(am|pm)?/);
  if (!m) {
    m = str.match(/([0-9]{1,2}) ?(am|pm)/);
    if (!m) {
      return s.epoch;
    }
    m.splice(2, 0, "0");
    m.splice(3, 0, "");
  }
  let h24 = false;
  let hour = parseInt(m[1], 10);
  let minute = parseInt(m[2], 10);
  if (minute >= 60) {
    minute = 59;
  }
  if (hour > 12) {
    h24 = true;
  }
  if (h24 === false) {
    if (m[4] === "am" && hour === 12) {
      hour = 0;
    }
    if (m[4] === "pm" && hour < 12) {
      hour += 12;
    }
  }
  m[3] = m[3] || "";
  m[3] = m[3].replace(/:/, "");
  let sec = parseInt(m[3], 10) || 0;
  let old = s.clone();
  s = s.hour(hour);
  s = s.minute(minute);
  s = s.second(sec);
  s = s.millisecond(0);
  s = fwdBkwd(s, old, goFwd, "day");
  return s.epoch;
};
var date = function(s, n, goFwd) {
  n = validate2(n);
  if (n > 28) {
    let month2 = s.month();
    let max2 = monthLengths_default[month2];
    if (month2 === 1 && n === 29 && isLeapYear(s.year())) {
      max2 = 29;
    }
    if (n > max2) {
      n = max2;
    }
  }
  if (n <= 0) {
    n = 1;
  }
  let old = s.clone();
  walk_default(s, {
    date: n
  });
  s = fwdBkwd(s, old, goFwd, "month");
  return s.epoch;
};
var month = function(s, n, goFwd) {
  if (typeof n === "string") {
    if (n === "sept") {
      n = "sep";
    }
    n = mapping()[n.toLowerCase()];
  }
  n = validate2(n);
  if (n >= 12) {
    n = 11;
  }
  if (n <= 0) {
    n = 0;
  }
  let d = s.date();
  if (d > monthLengths_default[n]) {
    d = monthLengths_default[n];
  }
  let old = s.clone();
  walk_default(s, {
    month: n,
    d
  });
  s = fwdBkwd(s, old, goFwd, "year");
  return s.epoch;
};
var year = function(s, n) {
  if (typeof n === "string" && /^'[0-9]{2}$/.test(n)) {
    n = n.replace(/'/, "").trim();
    n = Number(n);
    if (n > 30) {
      n = 1900 + n;
    } else {
      n = 2e3 + n;
    }
  }
  n = validate2(n);
  walk_default(s, {
    year: n
  });
  return s.epoch;
};
var week = function(s, n, goFwd) {
  let old = s.clone();
  n = validate2(n);
  s = s.month(0);
  s = s.date(1);
  s = s.day("monday");
  if (s.monthName() === "december" && s.date() >= 28) {
    s = s.add(1, "week");
  }
  n -= 1;
  s = s.add(n, "weeks");
  s = fwdBkwd(s, old, goFwd, "year");
  return s.epoch;
};
var dayOfYear = function(s, n, goFwd) {
  n = validate2(n);
  let old = s.clone();
  n -= 1;
  if (n <= 0) {
    n = 0;
  } else if (n >= 365) {
    if (isLeapYear(s.year())) {
      n = 365;
    } else {
      n = 364;
    }
  }
  s = s.startOf("year");
  s = s.add(n, "day");
  confirm(s, old, "hour");
  s = fwdBkwd(s, old, goFwd, "year");
  return s.epoch;
};

// node_modules/spacetime/src/data/ampm.js
var morning = "am";
var evening = "pm";
function am() {
  return morning;
}
function pm() {
  return evening;
}
function set6(i18n) {
  morning = i18n.am || morning;
  evening = i18n.pm || evening;
}

// node_modules/spacetime/src/methods/query/01-time.js
var methods2 = {
  millisecond: function(num) {
    if (num !== void 0) {
      let s = this.clone();
      s.epoch = milliseconds(s, num);
      return s;
    }
    return this.d.getMilliseconds();
  },
  second: function(num, goFwd) {
    if (num !== void 0) {
      let s = this.clone();
      s.epoch = seconds(s, num, goFwd);
      return s;
    }
    return this.d.getSeconds();
  },
  minute: function(num, goFwd) {
    if (num !== void 0) {
      let s = this.clone();
      s.epoch = minutes(s, num, goFwd);
      return s;
    }
    return this.d.getMinutes();
  },
  hour: function(num, goFwd) {
    let d = this.d;
    if (num !== void 0) {
      let s = this.clone();
      s.epoch = hours(s, num, goFwd);
      return s;
    }
    return d.getHours();
  },
  //'3:30' is 3.5
  hourFloat: function(num, goFwd) {
    if (num !== void 0) {
      let s = this.clone();
      let minute2 = num % 1;
      minute2 = minute2 * 60;
      let hour2 = parseInt(num, 10);
      s.epoch = hours(s, hour2, goFwd);
      s.epoch = minutes(s, minute2, goFwd);
      return s;
    }
    let d = this.d;
    let hour = d.getHours();
    let minute = d.getMinutes();
    minute = minute / 60;
    return hour + minute;
  },
  // hour in 12h format
  hour12: function(str, goFwd) {
    let d = this.d;
    if (str !== void 0) {
      let s = this.clone();
      str = "" + str;
      let m = str.match(/^([0-9]+)(am|pm)$/);
      if (m) {
        let hour = parseInt(m[1], 10);
        if (m[2] === "pm") {
          hour += 12;
        }
        s.epoch = hours(s, hour, goFwd);
      }
      return s;
    }
    let hour12 = d.getHours();
    if (hour12 > 12) {
      hour12 = hour12 - 12;
    }
    if (hour12 === 0) {
      hour12 = 12;
    }
    return hour12;
  },
  //some ambiguity here with 12/24h
  time: function(str, goFwd) {
    if (str !== void 0) {
      let s = this.clone();
      str = str.toLowerCase().trim();
      s.epoch = time(s, str, goFwd);
      return s;
    }
    return `${this.h12()}:${zeroPad(this.minute())}${this.ampm()}`;
  },
  // either 'am' or 'pm'
  ampm: function(input, goFwd) {
    let which = am();
    let hour = this.hour();
    if (hour >= 12) {
      which = pm();
    }
    if (typeof input !== "string") {
      return which;
    }
    let s = this.clone();
    input = input.toLowerCase().trim();
    if (hour >= 12 && input === "am") {
      hour -= 12;
      return s.hour(hour, goFwd);
    }
    if (hour < 12 && input === "pm") {
      hour += 12;
      return s.hour(hour, goFwd);
    }
    return s;
  },
  //some hard-coded times of day, like 'noon'
  dayTime: function(str, goFwd) {
    if (str !== void 0) {
      const times = {
        morning: "7:00",
        breakfast: "7:00",
        noon: "12:00",
        lunch: "12:00",
        afternoon: "14:00",
        evening: "18:00",
        dinner: "18:00",
        night: "23:00",
        midnight: "00:00"
      };
      let s = this.clone();
      str = str || "";
      str = str.toLowerCase();
      if (times.hasOwnProperty(str) === true) {
        s = s.time(times[str], goFwd);
      }
      return s;
    }
    let h = this.hour();
    if (h < 6) {
      return "night";
    }
    if (h < 12) {
      return "morning";
    }
    if (h < 17) {
      return "afternoon";
    }
    if (h < 22) {
      return "evening";
    }
    return "night";
  },
  //parse a proper iso string
  iso: function(num) {
    if (num !== void 0) {
      return this.set(num);
    }
    return this.format("iso");
  }
};
var time_default = methods2;

// node_modules/spacetime/src/methods/query/02-date.js
var methods3 = {
  // # day in the month
  date: function(num, goFwd) {
    if (num !== void 0) {
      let s = this.clone();
      num = parseInt(num, 10);
      if (num) {
        s.epoch = date(s, num, goFwd);
      }
      return s;
    }
    return this.d.getDate();
  },
  //like 'wednesday' (hard!)
  day: function(input, goFwd) {
    if (input === void 0) {
      return this.d.getDay();
    }
    let original = this.clone();
    let want = input;
    if (typeof input === "string") {
      input = input.toLowerCase();
      if (aliases.hasOwnProperty(input)) {
        want = aliases[input];
      } else {
        want = short2().indexOf(input);
        if (want === -1) {
          want = long2().indexOf(input);
        }
      }
    }
    let day = this.d.getDay();
    let diff2 = day - want;
    if (goFwd === true && diff2 > 0) {
      diff2 = diff2 - 7;
    }
    if (goFwd === false && diff2 < 0) {
      diff2 = diff2 + 7;
    }
    let s = this.subtract(diff2, "days");
    walk_default(s, {
      hour: original.hour(),
      minute: original.minute(),
      second: original.second()
    });
    return s;
  },
  //these are helpful name-wrappers
  dayName: function(input, goFwd) {
    if (input === void 0) {
      return long2()[this.day()];
    }
    let s = this.clone();
    s = s.day(input, goFwd);
    return s;
  }
};
var date_default = methods3;

// node_modules/spacetime/src/methods/query/03-year.js
var clearMinutes = (s) => {
  s = s.minute(0);
  s = s.second(0);
  s = s.millisecond(1);
  return s;
};
var methods4 = {
  // day 0-366
  dayOfYear: function(num, goFwd) {
    if (num !== void 0) {
      let s = this.clone();
      s.epoch = dayOfYear(s, num, goFwd);
      return s;
    }
    let sum = 0;
    let month2 = this.d.getMonth();
    let tmp;
    for (let i = 1; i <= month2; i++) {
      tmp = /* @__PURE__ */ new Date();
      tmp.setDate(1);
      tmp.setFullYear(this.d.getFullYear());
      tmp.setHours(1);
      tmp.setMinutes(1);
      tmp.setMonth(i);
      tmp.setHours(-2);
      sum += tmp.getDate();
    }
    return sum + this.d.getDate();
  },
  //since the start of the year
  week: function(num, goFwd) {
    if (num !== void 0) {
      let s = this.clone();
      s.epoch = week(this, num, goFwd);
      s = clearMinutes(s);
      return s;
    }
    let tmp = this.clone();
    tmp = tmp.month(0);
    tmp = tmp.date(1);
    tmp = clearMinutes(tmp);
    tmp = tmp.day("monday");
    if (tmp.month() === 11 && tmp.date() >= 25) {
      tmp = tmp.add(1, "week");
    }
    let toAdd = 1;
    if (tmp.date() === 1) {
      toAdd = 0;
    }
    tmp = tmp.minus(1, "second");
    const thisOne = this.epoch;
    if (tmp.epoch > thisOne) {
      return 1;
    }
    let i = 0;
    let skipWeeks = this.month() * 4;
    tmp.epoch += milliseconds_default.week * skipWeeks;
    i += skipWeeks;
    for (; i <= 52; i++) {
      if (tmp.epoch > thisOne) {
        return i + toAdd;
      }
      tmp = tmp.add(1, "week");
    }
    return 52;
  },
  //either name or number
  month: function(input, goFwd) {
    if (input !== void 0) {
      let s = this.clone();
      s.epoch = month(s, input, goFwd);
      return s;
    }
    return this.d.getMonth();
  },
  //'january'
  monthName: function(input, goFwd) {
    if (input !== void 0) {
      let s = this.clone();
      s = s.month(input, goFwd);
      return s;
    }
    return long()[this.month()];
  },
  //q1, q2, q3, q4
  quarter: function(num, goFwd) {
    if (num !== void 0) {
      if (typeof num === "string") {
        num = num.replace(/^q/i, "");
        num = parseInt(num, 10);
      }
      if (quarters_default[num]) {
        let s = this.clone();
        let month3 = quarters_default[num][0];
        s = s.month(month3, goFwd);
        s = s.date(1, goFwd);
        s = s.startOf("day");
        return s;
      }
    }
    let month2 = this.d.getMonth();
    for (let i = 1; i < quarters_default.length; i++) {
      if (month2 < quarters_default[i][0]) {
        return i - 1;
      }
    }
    return 4;
  },
  //spring, summer, winter, fall
  season: function(input, goFwd) {
    let hem = "north";
    if (this.hemisphere() === "South") {
      hem = "south";
    }
    if (input !== void 0) {
      let s = this.clone();
      for (let i = 0; i < seasons_default[hem].length; i++) {
        if (input === seasons_default[hem][i][0]) {
          s = s.month(seasons_default[hem][i][1], goFwd);
          s = s.date(1);
          s = s.startOf("day");
        }
      }
      return s;
    }
    let month2 = this.d.getMonth();
    for (let i = 0; i < seasons_default[hem].length - 1; i++) {
      if (month2 >= seasons_default[hem][i][1] && month2 < seasons_default[hem][i + 1][1]) {
        return seasons_default[hem][i][0];
      }
    }
    return hem === "north" ? "winter" : "summer";
  },
  //the year number
  year: function(num) {
    if (num !== void 0) {
      let s = this.clone();
      s.epoch = year(s, num);
      return s;
    }
    return this.d.getFullYear();
  },
  //bc/ad years
  era: function(str) {
    if (str !== void 0) {
      let s = this.clone();
      str = str.toLowerCase();
      let year2 = s.d.getFullYear();
      if (str === "bc" && year2 > 0) {
        s.epoch = year(s, year2 * -1);
      }
      if (str === "ad" && year2 < 0) {
        s.epoch = year(s, year2 * -1);
      }
      return s;
    }
    if (this.d.getFullYear() < 0) {
      return "BC";
    }
    return "AD";
  },
  // 2019 -> 2010
  decade: function(input) {
    if (input !== void 0) {
      input = String(input);
      input = input.replace(/([0-9])'?s$/, "$1");
      input = input.replace(/([0-9])(th|rd|st|nd)/, "$1");
      if (!input) {
        console.warn("Spacetime: Invalid decade input");
        return this;
      }
      if (input.length === 2 && /[0-9][0-9]/.test(input)) {
        input = "19" + input;
      }
      let year2 = Number(input);
      if (isNaN(year2)) {
        return this;
      }
      year2 = Math.floor(year2 / 10) * 10;
      return this.year(year2);
    }
    return this.startOf("decade").year();
  },
  // 1950 -> 19+1
  century: function(input) {
    if (input !== void 0) {
      if (typeof input === "string") {
        input = input.replace(/([0-9])(th|rd|st|nd)/, "$1");
        input = input.replace(/([0-9]+) ?(b\.?c\.?|a\.?d\.?)/i, (a, b, c) => {
          if (c.match(/b\.?c\.?/i)) {
            b = "-" + b;
          }
          return b;
        });
        input = input.replace(/c$/, "");
      }
      let year2 = Number(input);
      if (isNaN(input)) {
        console.warn("Spacetime: Invalid century input");
        return this;
      }
      if (year2 === 0) {
        year2 = 1;
      }
      if (year2 >= 0) {
        year2 = (year2 - 1) * 100;
      } else {
        year2 = (year2 + 1) * 100;
      }
      return this.year(year2);
    }
    let num = this.startOf("century").year();
    num = Math.floor(num / 100);
    if (num < 0) {
      return num - 1;
    }
    return num + 1;
  },
  // 2019 -> 2+1
  millenium: function(input) {
    if (input !== void 0) {
      if (typeof input === "string") {
        input = input.replace(/([0-9])(th|rd|st|nd)/, "$1");
        input = Number(input);
        if (isNaN(input)) {
          console.warn("Spacetime: Invalid millenium input");
          return this;
        }
      }
      if (input > 0) {
        input -= 1;
      }
      let year2 = input * 1e3;
      if (year2 === 0) {
        year2 = 1;
      }
      return this.year(year2);
    }
    let num = Math.floor(this.year() / 1e3);
    if (num >= 0) {
      num += 1;
    }
    return num;
  }
};
var year_default = methods4;

// node_modules/spacetime/src/methods/query/index.js
var methods5 = Object.assign({}, time_default, date_default, year_default);
methods5.milliseconds = methods5.millisecond;
methods5.seconds = methods5.second;
methods5.minutes = methods5.minute;
methods5.hours = methods5.hour;
methods5.hour24 = methods5.hour;
methods5.h12 = methods5.hour12;
methods5.h24 = methods5.hour24;
methods5.days = methods5.day;
var addMethods = (Space) => {
  Object.keys(methods5).forEach((k) => {
    Space.prototype[k] = methods5[k];
  });
};
var query_default = addMethods;

// node_modules/spacetime/src/methods/set/_model.js
var getMonthLength = function(month2, year2) {
  if (month2 === 1 && isLeapYear(year2)) {
    return 29;
  }
  return monthLengths_default[month2];
};
var rollMonth = (want, old) => {
  if (want.month > 0) {
    let years = parseInt(want.month / 12, 10);
    want.year = old.year() + years;
    want.month = want.month % 12;
  } else if (want.month < 0) {
    let m = Math.abs(want.month);
    let years = parseInt(m / 12, 10);
    if (m % 12 !== 0) {
      years += 1;
    }
    want.year = old.year() - years;
    want.month = want.month % 12;
    want.month = want.month + 12;
    if (want.month === 12) {
      want.month = 0;
    }
  }
  return want;
};
var rollDaysDown = (want, old, sum) => {
  want.year = old.year();
  want.month = old.month();
  let date2 = old.date();
  want.date = date2 - Math.abs(sum);
  while (want.date < 1) {
    want.month -= 1;
    if (want.month < 0) {
      want.month = 11;
      want.year -= 1;
    }
    let max2 = getMonthLength(want.month, want.year);
    want.date += max2;
  }
  return want;
};
var rollDaysUp = (want, old, sum) => {
  let year2 = old.year();
  let month2 = old.month();
  let max2 = getMonthLength(month2, year2);
  while (sum > max2) {
    sum -= max2;
    month2 += 1;
    if (month2 >= 12) {
      month2 -= 12;
      year2 += 1;
    }
    max2 = getMonthLength(month2, year2);
  }
  want.month = month2;
  want.date = sum;
  return want;
};
var months2 = rollMonth;
var days = rollDaysUp;
var daysBack = rollDaysDown;

// node_modules/spacetime/src/methods/add.js
var order2 = ["millisecond", "second", "minute", "hour", "date", "month"];
var keep = {
  second: order2.slice(0, 1),
  minute: order2.slice(0, 2),
  quarterhour: order2.slice(0, 2),
  hour: order2.slice(0, 3),
  date: order2.slice(0, 4),
  month: order2.slice(0, 4),
  quarter: order2.slice(0, 4),
  season: order2.slice(0, 4),
  year: order2,
  decade: order2,
  century: order2
};
keep.week = keep.hour;
keep.season = keep.date;
keep.quarter = keep.date;
var dstAwareUnits = {
  year: true,
  quarter: true,
  season: true,
  month: true,
  week: true,
  date: true
};
var keepDate = {
  month: true,
  quarter: true,
  season: true,
  year: true
};
var addMethods2 = (SpaceTime2) => {
  SpaceTime2.prototype.add = function(num, unit) {
    let s = this.clone();
    if (!unit || num === 0) {
      return s;
    }
    let old = this.clone();
    unit = normalize2(unit);
    if (unit === "millisecond") {
      s.epoch += num;
      return s;
    }
    if (unit === "fortnight") {
      num *= 2;
      unit = "week";
    }
    if (milliseconds_default[unit]) {
      s.epoch += milliseconds_default[unit] * num;
    } else if (unit === "week" || unit === "weekend") {
      s.epoch += milliseconds_default.day * (num * 7);
    } else if (unit === "quarter" || unit === "season") {
      s.epoch += milliseconds_default.month * (num * 3);
    } else if (unit === "quarterhour") {
      s.epoch += milliseconds_default.minute * 15 * num;
    }
    let want = {};
    if (keep[unit]) {
      keep[unit].forEach((u) => {
        want[u] = old[u]();
      });
    }
    if (dstAwareUnits[unit]) {
      const diff2 = old.timezone().current.offset - s.timezone().current.offset;
      s.epoch += diff2 * 3600 * 1e3;
    }
    if (unit === "month") {
      want.month = old.month() + num;
      want = months2(want, old);
    }
    if (unit === "week") {
      let sum = old.date() + num * 7;
      if (sum <= 28 && sum > 1) {
        want.date = sum;
      }
    }
    if (unit === "weekend" && s.dayName() !== "saturday") {
      s = s.day("saturday", true);
    } else if (unit === "date") {
      if (num < 0) {
        want = daysBack(want, old, num);
      } else {
        let sum = old.date() + num;
        want = days(want, old, sum);
      }
      if (num !== 0 && old.isSame(s, "day")) {
        want.date = old.date() + num;
      }
    } else if (unit === "quarter") {
      want.month = old.month() + num * 3;
      want.year = old.year();
      if (want.month < 0) {
        let years = Math.floor(want.month / 12);
        let remainder = want.month + Math.abs(years) * 12;
        want.month = remainder;
        want.year += years;
      } else if (want.month >= 12) {
        let years = Math.floor(want.month / 12);
        want.month = want.month % 12;
        want.year += years;
      }
      want.date = old.date();
    } else if (unit === "year") {
      let wantYear = old.year() + num;
      let haveYear = s.year();
      if (haveYear < wantYear) {
        let toAdd = Math.floor(num / 4) || 1;
        s.epoch += Math.abs(milliseconds_default.day * toAdd);
      } else if (haveYear > wantYear) {
        let toAdd = Math.floor(num / 4) || 1;
        s.epoch += milliseconds_default.day * toAdd;
      }
    } else if (unit === "decade") {
      want.year = s.year() + 10;
    } else if (unit === "century") {
      want.year = s.year() + 100;
    }
    if (keepDate[unit]) {
      let max2 = monthLengths_default[want.month];
      want.date = old.date();
      if (want.date > max2) {
        want.date = max2;
      }
    }
    if (Object.keys(want).length > 1) {
      walk_default(s, want);
    }
    return s;
  };
  SpaceTime2.prototype.subtract = function(num, unit) {
    let s = this.clone();
    return s.add(num * -1, unit);
  };
  SpaceTime2.prototype.minus = SpaceTime2.prototype.subtract;
  SpaceTime2.prototype.plus = SpaceTime2.prototype.add;
};
var add_default = addMethods2;

// node_modules/spacetime/src/methods/same.js
var print = {
  millisecond: (s) => {
    return s.epoch;
  },
  second: (s) => {
    return [s.year(), s.month(), s.date(), s.hour(), s.minute(), s.second()].join("-");
  },
  minute: (s) => {
    return [s.year(), s.month(), s.date(), s.hour(), s.minute()].join("-");
  },
  hour: (s) => {
    return [s.year(), s.month(), s.date(), s.hour()].join("-");
  },
  day: (s) => {
    return [s.year(), s.month(), s.date()].join("-");
  },
  week: (s) => {
    return [s.year(), s.week()].join("-");
  },
  month: (s) => {
    return [s.year(), s.month()].join("-");
  },
  quarter: (s) => {
    return [s.year(), s.quarter()].join("-");
  },
  year: (s) => {
    return s.year();
  }
};
print.date = print.day;
var addMethods3 = (SpaceTime2) => {
  SpaceTime2.prototype.isSame = function(b, unit, tzAware = true) {
    let a = this;
    if (!unit) {
      return null;
    }
    if (typeof b === "string" && typeof unit === "object") {
      let tmp = b;
      b = unit;
      unit = tmp;
    }
    if (typeof b === "string" || typeof b === "number") {
      b = new SpaceTime2(b, this.timezone.name);
    }
    unit = unit.replace(/s$/, "");
    if (tzAware === true && a.tz !== b.tz) {
      b = b.clone();
      b.tz = a.tz;
    }
    if (print[unit]) {
      return print[unit](a) === print[unit](b);
    }
    return null;
  };
};
var same_default = addMethods3;

// node_modules/spacetime/src/methods/compare.js
var addMethods4 = (SpaceTime2) => {
  const methods6 = {
    isAfter: function(d) {
      d = beADate(d, this);
      let epoch = getEpoch(d);
      if (epoch === null) {
        return null;
      }
      return this.epoch > epoch;
    },
    isBefore: function(d) {
      d = beADate(d, this);
      let epoch = getEpoch(d);
      if (epoch === null) {
        return null;
      }
      return this.epoch < epoch;
    },
    isEqual: function(d) {
      d = beADate(d, this);
      let epoch = getEpoch(d);
      if (epoch === null) {
        return null;
      }
      return this.epoch === epoch;
    },
    isBetween: function(start, end, isInclusive = false) {
      start = beADate(start, this);
      end = beADate(end, this);
      let startEpoch = getEpoch(start);
      if (startEpoch === null) {
        return null;
      }
      let endEpoch = getEpoch(end);
      if (endEpoch === null) {
        return null;
      }
      if (isInclusive) {
        return this.isBetween(start, end) || this.isEqual(start) || this.isEqual(end);
      }
      return startEpoch < this.epoch && this.epoch < endEpoch;
    }
  };
  Object.keys(methods6).forEach((k) => {
    SpaceTime2.prototype[k] = methods6[k];
  });
};
var compare_default = addMethods4;

// node_modules/spacetime/src/methods/i18n.js
var addMethods5 = (SpaceTime2) => {
  const methods6 = {
    i18n: function(data) {
      if (isObject(data.days)) {
        set2(data.days);
      }
      if (isObject(data.months)) {
        set(data.months);
      }
      if (isBoolean(data.useTitleCase)) {
        set3(data.useTitleCase);
      }
      if (isObject(data.ampm)) {
        set6(data.ampm);
      }
      if (isObject(data.distance)) {
        set5(data.distance);
      }
      if (isObject(data.units)) {
        set4(data.units);
      }
      return this;
    }
  };
  Object.keys(methods6).forEach((k) => {
    SpaceTime2.prototype[k] = methods6[k];
  });
};
var i18n_default = addMethods5;

// node_modules/spacetime/src/spacetime.js
var timezones = unpack_default;
var SpaceTime = function(input, tz, options2 = {}) {
  this.epoch = null;
  this.tz = find_default(tz, timezones);
  this.silent = typeof options2.silent !== "undefined" ? options2.silent : true;
  this.british = options2.dmy || options2.british;
  this._weekStart = 1;
  if (options2.weekStart !== void 0) {
    this._weekStart = options2.weekStart;
  }
  this._today = {};
  if (options2.today !== void 0) {
    this._today = options2.today;
  }
  Object.defineProperty(this, "d", {
    // return a js date object
    get: function() {
      let offset2 = quick_default(this);
      let bias = new Date(this.epoch).getTimezoneOffset() || 0;
      let shift2 = bias + offset2 * 60;
      shift2 = shift2 * 60 * 1e3;
      let epoch = this.epoch + shift2;
      let d = new Date(epoch);
      return d;
    }
  });
  Object.defineProperty(this, "timezones", {
    get: () => timezones,
    set: (obj) => {
      timezones = obj;
      return obj;
    }
  });
  let tmp = input_default(this, input);
  this.epoch = tmp.epoch;
  if (tmp.tz) {
    this.tz = tmp.tz;
  }
};
Object.keys(methods_default).forEach((k) => {
  SpaceTime.prototype[k] = methods_default[k];
});
SpaceTime.prototype.clone = function() {
  return new SpaceTime(this.epoch, this.tz, {
    silent: this.silent,
    weekStart: this._weekStart,
    today: this._today,
    parsers: this.parsers
  });
};
SpaceTime.prototype.toLocalDate = function() {
  return this.toNativeDate();
};
SpaceTime.prototype.toNativeDate = function() {
  return new Date(this.epoch);
};
query_default(SpaceTime);
add_default(SpaceTime);
same_default(SpaceTime);
compare_default(SpaceTime);
i18n_default(SpaceTime);
var spacetime_default = SpaceTime;

// node_modules/spacetime/src/whereIts.js
var whereIts = (a, b) => {
  let start = new spacetime_default(null);
  let end = new spacetime_default(null);
  start = start.time(a);
  if (b) {
    end = end.time(b);
  } else {
    end = start.add(59, "minutes");
  }
  let startHour = start.hour();
  let endHour = end.hour();
  let tzs = Object.keys(start.timezones).filter((tz) => {
    if (tz.indexOf("/") === -1) {
      return false;
    }
    let m = new spacetime_default(null, tz);
    let hour = m.hour();
    if (hour >= startHour && hour <= endHour) {
      if (hour === startHour && m.minute() < start.minute()) {
        return false;
      }
      if (hour === endHour && m.minute() > end.minute()) {
        return false;
      }
      return true;
    }
    return false;
  });
  return tzs;
};
var whereIts_default = whereIts;

// node_modules/spacetime/src/_version.js
var version_default = "7.6.0";

// node_modules/spacetime/src/index.js
var main2 = (input, tz, options2) => new spacetime_default(input, tz, options2);
var setToday = function(s) {
  let today = s._today || {};
  Object.keys(today).forEach((k) => {
    s = s[k](today[k]);
  });
  return s;
};
main2.now = (tz, options2) => {
  let s = new spacetime_default((/* @__PURE__ */ new Date()).getTime(), tz, options2);
  s = setToday(s);
  return s;
};
main2.today = (tz, options2) => {
  let s = new spacetime_default((/* @__PURE__ */ new Date()).getTime(), tz, options2);
  s = setToday(s);
  return s.startOf("day");
};
main2.tomorrow = (tz, options2) => {
  let s = new spacetime_default((/* @__PURE__ */ new Date()).getTime(), tz, options2);
  s = setToday(s);
  return s.add(1, "day").startOf("day");
};
main2.yesterday = (tz, options2) => {
  let s = new spacetime_default((/* @__PURE__ */ new Date()).getTime(), tz, options2);
  s = setToday(s);
  return s.subtract(1, "day").startOf("day");
};
main2.extend = function(obj = {}) {
  Object.keys(obj).forEach((k) => {
    spacetime_default.prototype[k] = obj[k];
  });
  return this;
};
main2.timezones = function() {
  let s = new spacetime_default();
  return s.timezones;
};
main2.max = function(tz, options2) {
  let s = new spacetime_default(null, tz, options2);
  s.epoch = 864e13;
  return s;
};
main2.min = function(tz, options2) {
  let s = new spacetime_default(null, tz, options2);
  s.epoch = -864e13;
  return s;
};
main2.whereIts = whereIts_default;
main2.version = version_default;
main2.plugin = main2.extend;
var src_default = main2;

// node_modules/timezone-soft/builds/timezone-soft.mjs
var BASE = 36;
var seq = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var cache = seq.split("").reduce(function(h, c, i) {
  h[c] = i;
  return h;
}, {});
var toAlphaCode = function(n) {
  if (seq[n] !== void 0) {
    return seq[n];
  }
  let places = 1;
  let range = BASE;
  let s = "";
  for (; n >= range; n -= range, places++, range *= BASE) {
  }
  while (places--) {
    const d = n % BASE;
    s = String.fromCharCode((d < 10 ? 48 : 55) + d) + s;
    n = (n - d) / BASE;
  }
  return s;
};
var fromAlphaCode = function(s) {
  if (cache[s] !== void 0) {
    return cache[s];
  }
  let n = 0;
  let places = 1;
  let range = BASE;
  let pow = 1;
  for (; places < s.length; n += range, places++, range *= BASE) {
  }
  for (let i = s.length - 1; i >= 0; i--, pow *= BASE) {
    let d = s.charCodeAt(i) - 48;
    if (d > 10) {
      d -= 7;
    }
    n += d * pow;
  }
  return n;
};
var encoding = {
  toAlphaCode,
  fromAlphaCode
};
var symbols = function(t) {
  const reSymbol = new RegExp("([0-9A-Z]+):([0-9A-Z]+)");
  for (let i = 0; i < t.nodes.length; i++) {
    const m = reSymbol.exec(t.nodes[i]);
    if (!m) {
      t.symCount = i;
      break;
    }
    t.syms[encoding.fromAlphaCode(m[1])] = encoding.fromAlphaCode(m[2]);
  }
  t.nodes = t.nodes.slice(t.symCount, t.nodes.length);
};
var parseSymbols = symbols;
var indexFromRef = function(trie, ref, index2) {
  const dnode = encoding.fromAlphaCode(ref);
  if (dnode < trie.symCount) {
    return trie.syms[dnode];
  }
  return index2 + dnode + 1 - trie.symCount;
};
var toArray = function(trie) {
  const all2 = [];
  const crawl = (index2, pref) => {
    let node2 = trie.nodes[index2];
    if (node2[0] === "!") {
      all2.push(pref);
      node2 = node2.slice(1);
    }
    const matches = node2.split(/([A-Z0-9,]+)/g);
    for (let i = 0; i < matches.length; i += 2) {
      const str = matches[i];
      const ref = matches[i + 1];
      if (!str) {
        continue;
      }
      const have = pref + str;
      if (ref === "," || ref === void 0) {
        all2.push(have);
        continue;
      }
      const newIndex = indexFromRef(trie, ref, index2);
      crawl(newIndex, have);
    }
  };
  crawl(0, "");
  return all2;
};
var unpack$2 = function(str) {
  const trie = {
    nodes: str.split(";"),
    syms: [],
    symCount: 0
  };
  if (str.match(":")) {
    parseSymbols(trie);
  }
  return toArray(trie);
};
var traverse = unpack$2;
var unpack = function(str) {
  if (!str) {
    return {};
  }
  const obj = str.split("|").reduce((h, s) => {
    const arr = s.split("¦");
    h[arr[0]] = arr[1];
    return h;
  }, {});
  const all2 = {};
  Object.keys(obj).forEach(function(cat) {
    const arr = traverse(obj[cat]);
    if (cat === "true") {
      cat = true;
    }
    for (let i = 0; i < arr.length; i++) {
      const k = arr[i];
      if (all2.hasOwnProperty(k) === true) {
        if (Array.isArray(all2[k]) === false) {
          all2[k] = [all2[k], cat];
        } else {
          all2[k].push(cat);
        }
      } else {
        all2[k] = cat;
      }
    }
  });
  return all2;
};
var unpack$1 = unpack;
var patterns = {
  usa: "2nd-sun-mar-2h|1st-sun-nov-2h",
  // (From 1987 to 2006)
  // mexico
  mex: "1st-sun-apr-2h|last-sun-oct-2h",
  // European Union zone
  eu0: "last-sun-mar-0h|last-sun-oct-1h",
  eu1: "last-sun-mar-1h|last-sun-oct-2h",
  eu2: "last-sun-mar-2h|last-sun-oct-3h",
  eu3: "last-sun-mar-3h|last-sun-oct-4h",
  //greenland
  green: "last-sat-mar-22h|last-sat-oct-23h",
  // australia
  aus: "1st-sun-apr-3h|1st-sun-oct-2h",
  //lord howe australia
  lhow: "1st-sun-apr-2h|1st-sun-oct-2h",
  // new zealand
  chat: "1st-sun-apr-3h|last-sun-sep-2h",
  //technically 3:45h -> 2:45h
  // new Zealand, antarctica 
  nz: "1st-sun-apr-3h|last-sun-sep-2h",
  // casey - antarctica
  ant: "2nd-sun-mar-0h|1st-sun-oct-0h",
  // troll - antarctica
  troll: "3rd-sun-mar-1h|last-sun-oct-3h",
  //jordan
  jord: "last-fri-feb-0h|last-fri-oct-1h",
  // lebanon
  leb: "last-sun-mar-0h|last-sun-oct-0h",
  // syria
  syr: "last-fri-mar-0h|last-fri-oct-0h",
  //israel
  // Start: Last Friday before April 2 -> The Sunday between Rosh Hashana and Yom Kippur
  isr: "last-fri-mar-2h|last-sun-oct-2h",
  //palestine
  pal: "last-sun-mar-0h|last-fri-oct-1h",
  // el aaiun
  //this one seems to be on arabic calendar?
  saha: "last-sun-mar-3h|1st-sun-may-2h",
  // paraguay
  par: "last-sun-mar-0h|1st-sun-oct-0h",
  //cuba
  cuba: "2nd-sun-mar-0h|1st-sun-nov-1h",
  //chile
  chile: "1st-sun-apr-0h|1st-sun-sep-0h",
  //easter island
  east: "1st-sat-apr-22h|1st-sat-sep-22h",
  //fiji
  fiji: "3rd-sun-jan-3h|2nd-sun-nov-2h"
};
var dstPatterns = patterns;
var pcked = { "Africa": { "Abidjan": ["true¦a5bouake,coordinated universal4daloa,g1san ped0utc,yamoussouk0zulu;ro;h0mt,reenwich mean2;!a0;!na; ti3;b4frica0tlantic/st_helena;!/0;accra,ba1conakry,dakar,freetown,lo0nouakchott,ouagadougou,timbuktu;me;mako,njul;idjan,obo", "Greenwich Mean", "n"], "Algiers": ["true¦a8b6c3dz2or5s1t0;ebessa,iaret;etif,idi bel abbes;!a;e0hlef,onstantine;ntral europe0t;an;a0iskra,lida,oumerdas;b ezzouar,tna;frica,lg0nnaba;eria,iers", "Central European", "n"], "Bissau": ["true¦africa,b2coordinated universal1g0utc,zulu;mt,nb,reenwich mean0uinea b1w; time;issau", "Greenwich Mean", "n"], "Cairo": ["true¦a6bani suwayf,c5damanhur,e2giza,halw8i1kafr ad dawwar,luxor,new c5port said,qina,s0tanta,zagazig;hibin al kawm,ohag,uez;dku,smail8;astern europe5et,g0;!y0;!pt;airo;frica,l2s0;w0yut;an; 1exandr0;ia;fayyum,m0;a0inya;hallah al kubra,nsurah", "Eastern European", "n"], "Casablanca": ["true¦aCcasablanDfBkenitAm6oujda angad,rabat,sa4t1we0;stern europe2t;angier,e0;ma7tou0;an;fi,le0;! al jadida;a1ekn4o0;hammedia,rocco;!r0;!rakesh;ra;es;fri0gadir,l hoceima;ca", "Morocco Standard", "n", "saha"], "Ceuta": ["true¦africa,brussels,c0europe central,madrid,paris,romance;e0openhagen;ntral european,t,uta0;!melilla", "Central European", "n", "eu2"], "El_Aaiun": ["true¦afri3casablan3e2laayoune,morocco,we0;stern 0t;european,sahara;h,l_aaiun,sh;ca", "Morocco Standard", "n", "saha"], "Johannesburg": ["true¦africaIbEcAd9east londBharare,johannesHk7newcastDp6r5s3tembisa,uitenhage,v2w1za0;!f;elkom,itbank;anderbijlpark,ereeniging;ast,o0prings;uth africa,weto;andBichards bay,oodepoort;aarl,ietermaritzAort elizabeth,retoria;lerk0ruger0;sdorp;iepsloot,urb5;a1enturi0;on;pe town,rletonvil0;le;enoni,loemfontein,o1rakp0;an;ks0tshabelo;burg;! southern,/m0;aseru,babane", "South Africa", "s"], "Juba": ["true¦a3c2juba,s0winejok;outh sudan,s0;!d;at,entral a0;frica", "Central Africa", "n"], "Khartoum": ["true¦a7c6el 5k3ny4omdurm2port sud2s0wad medani;d0inga,ud1;!n;an;ass0hartoum,osti;ala;dae3fasher,obeid;at,entral af1;d damaz1f0l qadarif;rica;in", "Central Africa", "n"], "Lagos": ["true¦aVbTcReQgPiLjKkaIlGmDnnewi,oAport harcourt,s9u7w0zar8; c3a2est0; 0ern3;a3c1;rBst,t;entral0; a0;frica;gep,muah0yo;ia;a7hagamu,okoto;kDn1w0yo;er3o;do,itsha;a0in5ubi;idugu0kurdi;ri;agos,ek0;ki;du0no,tsi0;na;imeLos;badan,jebu ode,k1l0seHwo;a orangun,eDor7;eHi8ot ekp0;ene;ombe,usau;bute ikorodu,fon alaaye,nugu;alabar,d,hakwama,o0;d,ngo;auchi,en0;in;b8do7frica1ku0tani;re;! western,/0;b2douala,kinsha1l0malabo,niamey,porto-novo;ibre2uanda;sa;angui,razza0;ville; ekiti;a,eoku1u0;ja;ta", "West Africa", "n"], "Maputo": ["true¦africa7beiCc6ma4na2quelimaAwindhoek,z0;imbabwe,w0;!e;ca2m0;ibia,pu1;puto,to0;la;at,entral africa,himoio;! central,/0;b2gaboro1hara4kigali,lu0;bumbashi,saka;ne;lanty1ujumbu0;ra;re", "Central Africa", "s"], "Monrovia": ["true¦africa,coordinated universal3g2l0monrov1utc,zulu;br,iber0r;ia;mt,reenwich mean0; time", "Greenwich Mean", "n"], "Nairobi": ["true¦africa8e4indian/2kisumu,m1na0thika,yt;irobi,kuru;a1ombasa,yt;antananarivo,comoro,ma0;yotte; 2a0ldoret;st0t; 0ern 0;africa;! eastern,/0;a1d0kampala,mogadishu;ar_es_salaam,jibouti;ddis_ababa,sm0;a0e0;ra", "East Africa", "n"], "Ndjamena": ["true¦africaAchad,n8t7w0; c3a2est0; 0ern3;a3c1;st,t;entral0; a0;frica;cd,d;'d0d0;jamena;! western", "West Africa", "n"], "Sao_Tome": ["true¦africa,coordinated universal5g4s0utc,zulu;ao1t0;!p; 0_0;to2;mt,reenwich mean0; ti0;me", "Greenwich Mean", "n"], "Tripoli": ["true¦a4benghazi,e3l1misrat5t0zawi2;arhuna,ripoli;by,ib0y;ya;astern european,et;frica,l khums,z zawiy0;ah", "Eastern European", "n"], "Tunis": ["true¦africa,ce3sfax,t0;n,un0;!is0;!ia;ntral european,t", "Central European", "n"], "Windhoek": ["true¦africa3c2na0windhoek;!m0;!ibia;at,entral africa;! central", "Central Africa", "s"] }, "America": { "Adak": ["true¦a1h0nwt,us/aleutian;awaii s3dt,st;dak,leutian0merica/atka;! 0;islands,s0;tandard time", "Aleutian Standard", "n", "usa"], "Anchorage": ["true¦a0us/alaska;h6k5laska0merica,nchorage;! 1n0;! s1;s0t1;tandard t0;ime;dt,st,t;dt,st", "Alaska", "n", "usa"], "Araguaina": ["true¦araguaina,br1e0palmas,tocantins; south america s4ast south america;a0t;silia0zil;! 0;s0t1;tandard t0;ime", "Brasilia", "n"], "Argentina/Buenos_Aires": ["true¦a0buenos 4;merica/2r0;!g0;!e2;arge1buenos_0;aires;ntina", "Argentina", "s"], "Argentina/Catamarca": ["true¦a0c2;merica/0rgentina;argentina/comodrivadavia,c0;atamarca", "Argentina", "s"], "Argentina/Cordoba": ["true¦a0c2;merica/0rgentina;c0rosario;ordoba", "Argentina", "s"], "Argentina/Jujuy": ["true¦a0j1;merica/j0rgentina;ujuy", "Argentina", "s"], "Argentina/La_Rioja": ["true¦ar1b0city of b0la rioja;uenos aires;gentina0st,t;! 0;standard t0t0;ime", "Argentina", "s"], "Argentina/Mendoza": ["true¦a0m1;merica/m0rgentina;endoza", "Argentina", "s"], "Argentina/Rio_Gallegos": ["true¦ar1b0city of b0rio_gallegos;uenos aires;gentina0st,t;! 0;standard t0t0;ime", "Argentina", "s"], "Argentina/Salta": ["true¦ar1b0city of b0salta;uenos aires;gentina0st,t;! 0;standard t0t0;ime", "Argentina", "s"], "Argentina/San_Juan": ["true¦ar1b0city of b0san juan;uenos aires;gentina0st,t;! time", "Argentina", "s"], "Argentina/San_Luis": ["true¦ar1b0city of b0san luis;uenos aires;gentina0st,t;! time", "Argentina", "s"], "Argentina/Tucuman": ["true¦ar1b0city of b0tucuman;uenos aires;gentina0st,t;! time", "Argentina", "s"], "Argentina/Ushuaia": ["true¦ar1b0city of b0ushuaia;uenos aires;gentina0st,t;! time", "Argentina", "s"], "Asuncion": ["true¦asuncion,c3p0san lorenzo;araguay1ry,y0;!st,t;! time;apiata,iudad del este", "Paraguay", "s", "par"], "Bahia": ["true¦b2camacari,e1feira de santa0itabu0salvador,vitoria da conquista;na; south america s5ast south america;ahia,r0;a0t;silia0zil;! 0;s0t1;tandard t0;ime", "Brasilia", "n"], "Bahia_Banderas": ["true¦bah7c2guadalajara,m0;exico0onterrey;! city;entral 0st;mexic0standard 2;an,o0;! 0;time;ia_0ía de 0;banderas", "Central Mexico", "n", "mex"], "Barbados": ["true¦a1b0;arbados,b,rb;st,tlantic standard time", "Atlantic", "n"], "Belem": ["true¦ananindeua,b2e1macapa,par0;auapebas,á east amapá; south america s5ast south america;elem,r0;a0t;silia0zil;! 0;s0t1;tandard t0;ime", "Brasilia", "n"], "Belize": ["true¦b1c0;entral standard time,st;elize,lz,z", "Central", "n"], "Boa_Vista": ["true¦am3boa vista,c0roraima;entral brazil0uiaba;!ian0;! s3;azon0t;! 0;s0t1;tandard t0;ime", "Amazon", "n"], "Bogota": ["true¦armenGbBc7dosquebradas,floridablanca,i6m5neiva,p3s1v0;alledupar,illavicencio;anta marCincelejo,o0;acha,ledad;a0erei9opayan;lmi8sto;anizales,edellin,onterA;bague,taguei;a2o0ucu6;!l0st,t;!omb6;li,rtagena;arran3ello,ogo2u0;caramanga,enaventu0;ra;ta;cabermeja,quilla;ia", "Colombia", "n"], "Boise": ["true¦america4boise,idaho,m0;ountain0pt,st,t;! 0;id,standard t0t0;ime;! mountain", "Mountain", "n", "usa"], "Cambridge_Bay": ["true¦america4cambridge bay,m0;ddt,ountain0st,t;! 0;standard t0t0;ime;! mountain", "Mountain", "n", "usa"], "Campo_Grande": ["true¦am0brazil,campo grande,mato grosso do sul;azon standard time,t", "Amazon", "s"], "Cancun": ["true¦cancun,e0mexico,quintana roo;astern standard time,st", "Eastern", "n"], "Caracas": ["true¦alto barinKbarJcDguaBm8p7san6turmeFv0;alencia,e0;!n0t;!ezuela0;! 0n;standard t0t0;ime; cristobal,ta teresa del tuy;eta4uerto la cruz;a0ucumpiz;raca0turin;ibo,y;ren8ti0;re;a4iudad 2o1u0;a,m2;ro;bolivar,guay0;ana;bim1rac1;in0quisimeto,uta;as", "Venezuela", "n"], "Cayenne": ["true¦cayenne,french guiana3g0;f1u0;f,iana;!t;! time", "French Guiana", "n"], "Chicago": ["true¦aWbTcRdQfort worth,gPhOiMk00lJmCn8o7plano,s4t2us1wi0;chiGsconsW;/02a;ex0ulsa;!as;a0hreveport,ou4t 1;int 0n antonio;louGpaul;klahoXmaha,verland park;ashLe1or0;th dako7;braska,w 0;orleans,south me6;adisMe5i1o0;biHntgomery;lwaukee,nne1ss0;issippi,ouri;apol6so0;ta;mph4;aredo,i0ouisiana,ubb1;ncoln,ttle r0;ock;llino0owa,rving;is;oustAunts5;arland,rand prairie;allAes moines;dt,entral0hicago,orpus christi,st,t;! time;aton rouge,rowns0;vil0;le;laba8m5r1ust0;in;k1lingt0;on;ans0;as;arillo,erica0;! 0;central;ma", "Central", "n", "usa"], "Chihuahua": ["true¦chihuahua,h5la paz,m0;azatlan,exic1ountain 0;mexico,standard time (mexico);an pacific1o0;! pacific;! time;ep0np0p0;mx", "Mexican Pacific", "n", "mex"], "Costa_Rica": ["true¦c0sjmt;entral standard time,osta rica,r0st;!i", "Central", "n"], "Cuiaba": ["true¦am0brazil,cuiaba,mato grosso,varzea grande;azon standard time,t", "Amazon", "s"], "Danmarkshavn": ["true¦coordinated universal2d1g0utc,zulu;mt,reenwich mean1;anmarkshavn,enmark; time", "Greenwich Mean", "n"], "Dawson": ["true¦canada,dawson,m2y0;d0pt,wt;dt,t;ountain standard time,st", "Mountain", "n"], "Dawson_Creek": ["true¦canada,dawson creek,m1p0;pt,wt;ountain standard time,st,t", "Mountain", "n"], "Denver": ["true¦a5colorado springs,denver,el paso,m1navajo,salt lake,us0;/6a;dt,ountain0st,t;! 0;standard t0t0;ime;lbuquerque,merica0urora;! 0/shiprock;mountain", "Mountain", "n", "usa"], "Detroit": ["true¦america4detroit,e0grand rapids,us/michigan;astern0pt,st,t,wt;! 0;mi,standard t0t0;ime;! eastern", "Eastern", "n", "usa"], "Edmonton": ["true¦a6ca4edmonton,m0;ountain0st,t;! 0;standard t0t0;ime;lgary,nada0;!/1;lberta,merica 0;mountain", "Mountain", "n", "usa"], "Eirunepe": ["true¦a0brazil,eirunepe;c0mazonas west;re0t;! 0;standard t0t0;ime", "Acre", "n"], "El_Salvador": ["true¦c2el1s0;an0lv,oyapango,v; salvador;entral standard time,st", "Central", "n"], "Fort_Nelson": ["true¦british columbia,canada,fort nelson,m0;ountain standard time,st,t", "Mountain", "n"], "Fortaleza": ["true¦br5ca4e3fortaleza,imperatriz,j2m0natal,sao luis,teresina;a0ossoro;picernpb,racanau;oao pessoa,uazeiro do norte; south america s5ast south america;mpina grande,ucaia;a0t;silia0zil;! 0;s0t1;tandard t0;ime", "Brasilia", "s"], "Glace_Bay": ["true¦a1ca0glace_bay;nada,pe breton;st,t0;!lantic0;! 0;standard t0t0;ime", "Atlantic", "n", "usa"], "Goose_Bay": ["true¦a0canada,goose_bay,labrador,npt;st,t0;!lantic0;! 0;standard t0t0;ime", "Atlantic", "n", "usa"], "Grand_Turk": ["true¦america eastern,e2grand turk,kmt,t0;c0urks and caicos;!a;astern0st,t;! 0;standard t0t0;ime", "Eastern", "n", "usa"], "Guatemala": ["true¦c2g0mixco,villa nueva;t0uatemala;!m;entral standard time,st", "Central", "n"], "Guayaquil": ["true¦cuenca,ec2guayaquil,ma1q0santo domingo de los colorados;mt,uito;chala,nta;!t,u0;!ador0;! 0;mainland,time", "Ecuador", "n"], "Guyana": ["true¦g0;eorgetown,uy1y0;!t;!ana0;! time", "Guyana", "n"], "Halifax": ["true¦a4ca2halifax,n1p0;ei,rince edward island;ew brunswick,ova scotia;!nada0;!/atlantic;dt,st,t0;!lantic0;! 0;ns,standard t0t0;ime", "Atlantic", "n", "usa"], "Havana": ["true¦arroyo naranjo,bBc3diez de octubre,guantanDh1las tunas,pinar del rio,sant0;a clara,iago de cuba;avana,cu,e0n0olguin;cu;amaguey,i5u0;!b0;!a0;! 0;standard t0t0;ime;e0udad camilo cie0;nfueg1;ay1oyer0;os;amo", "Cuba", "n", "cuba"], "Hermosillo": ["true¦ciudad obregon,h1mexic0nogales,sonora;an pacific standard time,o;ermosillo,npmx", "Mexican Pacific", "n"], "Indiana/Indianapolis": ["true¦america2crawford,dadukmn,eastern in,i4p0star1us/east-indiana;erry,i0ulaski;ke;!/0;fort_wayne,i0;ndiana0;!polis", "Eastern", "n", "usa"], "Indiana/Knox": ["true¦america1c0indiana,knox,us/indiana-starke;entral standard time,st;!/knox_in", "Central", "n", "usa"], "Indiana/Marengo": ["true¦america,e0indiana,marengo;astern standard time,st", "Eastern", "n", "usa"], "Indiana/Petersburg": ["true¦america,e0indiana,petersburg;astern standard time,st", "Eastern", "n", "usa"], "Indiana/Tell_City": ["true¦america,c0indiana,tell_city;entral standard time,st", "Central", "n", "usa"], "Indiana/Vevay": ["true¦america,e0indiana,vevay;astern standard time,st", "Eastern", "n", "usa"], "Indiana/Vincennes": ["true¦america,e0indiana,vincennes;astern standard time,st", "Eastern", "n", "usa"], "Indiana/Winamac": ["true¦america,e0indiana,winamac;astern standard time,st", "Eastern", "n", "usa"], "Inuvik": ["true¦america mountain,canada,inuvik,m0pddt;ountain0st,t;! 0;standard t0t0;ime", "Mountain", "n", "usa"], "Iqaluit": ["true¦america eastern,canada,e0iqaluit;astern0ddt,st,t;! 0;standard t0t0;ime", "Eastern", "n", "usa"], "Jamaica": ["true¦e3j1k0new k0;ingston;am0m;!aica;astern standard time,st", "Eastern", "n"], "Juneau": ["true¦a0juneau;k5laska0merica;! 1n0;! s1;juneau area,s0t1;tandard t0;ime;st,t", "Alaska", "n", "usa"], "Kentucky/Louisville": ["true¦america0eastern 4k3l2wayne;!/0;k1l0;ouisville;entuc0;ky", "Eastern", "n", "usa"], "Kentucky/Monticello": ["true¦america,e0kentucky,monticello;astern standard time,st", "Eastern", "n", "usa"], "La_Paz": ["true¦bo1cochabamba,la paz,oruro,s0;anta cruz de la sierra,ucre;!l0t;!ivia0;! time", "Bolivia", "s"], "Lima": ["true¦arequiDc9huancCi8juliaca,lima,p2sant1t0;acna,rujillo;a anita   los ficus,iago de sur8;e0iura,ucallA;!r0t;!u0;! 0;standard t0t0;ime;ca,quitos;allao,hi1us0;co;cl0mbote;ayo;pa", "Peru", "s"], "Los_Angeles": ["true¦a05ba03c00fWgarden grove,hTirviSlMmoJnIoFp9r8s1tacoma,us0washington state;/06a;a1eattle,f,p0tocktTunrise manor;okaPringH;cramenHn0; 1ta 0;aTclariV;bernardiRdiego,fran0jo4;!cisco;ancho cucamonga,ePiver7;a0dt,ort7st,t;cific1radi0;se;! 0;standard t0t0;ime;ak1cean0regFxnard;side;land;evada,orth las8;des1reno0; valley;to;a3o0;ng6s0; 0_0;angeles;!s0; vegas;ne;enders1untington0; beach;on;onta2re0;mont,s0;no;na;ali1hula vis0;ta;!f1;ja calif0kersfield;ornia;merica0naheim;! 0;pacific", "Pacific", "n", "usa"], "Maceio": ["true¦a6br1e0maceio; south america s3ast south america;asilia0t;! 0;s0t1;tandard t0;ime;lagoassergipe,racaju", "Brasilia", "n"], "Managua": ["true¦c3man2ni0;!c0;!ar0;agua;entral standard time,st", "Central", "n"], "Manaus": ["true¦am4brazil3c0manaus;entral brazil0uiaba;!ian0;! s5;!/we2;azon0t;! 1as ea0;st;s0t1;tandard t0;ime", "Amazon", "s"], "Martinique": ["true¦a3f1m0;a1q,tq;fmt,ort de france,rench ma0;rtinique;st,tlantic standard time", "Atlantic", "n"], "Matamoros": ["true¦america central,c2heroica ma1m0nuevo laredo,reynosa;a0exico;tamoros;entral0st,t;! 0;standard t0t0;ime", "Central", "n", "usa"], "Mazatlan": ["true¦cAh8l7m0tep4;azatlAexic1ountain 0;mexico,standard time (mexico);an pacific 2o0;! pacif0/bajasur;ic;standard t0t0;ime;a paz,os mochis;np0p0;mx;hihuahua,uliac0;an", "Mexican Pacific", "n", "mex"], "Menominee": ["true¦america4c0menominee,wisconsin;entral0st,t;! 0;standard t0t0;ime;! central", "Central", "n", "usa"], "Merida": ["true¦c3guadalajara,m0;e0onterrey;rida,xico0;! city;ampeche4entral 0st;mexic0standard 2;an,o0;! 0;time;!yucatán", "Central Mexico", "n", "mex"], "Metlakatla": ["true¦a0metlakatla;k5laska0merica;! 1n0;! s1;annette island,s0t1;tandard t0;ime;st,t", "Alaska", "n", "usa"], "Mexico_City": ["true¦a0Lb0JcYduran0Cecatepec de morel0AguThSiQjalis0Nleon de los alda06mInHoGpEqDs9t4uruap04v2x1yucat04za0;catec0Cpop03;alapa de enriqu0Pi0Lochimil0L;e0illahermosa;nustiano carranza,racruz;a3e7la1o0uxt03;luUna02;huac,l0quepaque,xca01;nepant00pW;bas0Emaulip04pachuZ;an0oledad de graciano sanch0H; luis potosi,t0;a maria chimal0iago de q1;huQ;ueretaG;achuca de soIoza rica de7ue0;bSrto vallar04;axaJjo de agua;aucalpan07icolas romeCuevo le06;agdalena contrerUex4i2o0x;nterrey,rel0;ia,os;choHguel0; h5;!ico0;! 0/general,_0;city;rap5xtapalu9zta0;cUpalapa;idalJ;a1erre0stavo adolfo made0;ro;dalajara,naj0;ua0;to;ampeche,eFhiCiudad Ao3st,u0wt;au1ernava0;ca;htemoc,titlan izcalli;a4l2yo0;ac0;an;i0onia del valle;ma;cEhui0tzacoalc2;la;lopez mate0nezahualcoyotl;os;ap1lpancin0;go;as;laya,ntral 0;mexic0standard 2;an,o0;! 0;time;enito6uenavis0;ta;capulco3guascalientes,lvaro obreg2zcapotz0;al0;co;on; de0; juar0;ez", "Central Mexico", "n", "mex"], "Miquelon": ["true¦hBmAp8s0;aint pierre2pm,t pierre 0;& miquelon 0a5;s2t3;! 0;a2s0;tandard t0;ime;nd1;ierre0m; m0;iquelon;npm,pm", "St. Pierre & Miquelon", "n", "usa"], "Moncton": ["true¦a0canada,hepm,moncton,new brunswick;st,t0;!lantic0;! 0;standard t0t0;ime", "Atlantic", "n", "usa"], "Monterrey": ["true¦c8g6m3sa1t0victoria de durango;ampico,orreon;ltillo,n0; nicolas de los garza,ta catarina;exico1on0;clova,terrey;! city;omez palacio,uadal0;ajara,upe;entral 1iudad 0st;apodaca,general escobedo,madero,victoria;mexic0standard 2;an,o0;! 0;time", "Central Mexico", "n", "mex"], "Montevideo": ["true¦montevideo5u0;r1y0;!st,t;uguay0y;! 0;s1t2;! s0;tandard t0;ime", "Uruguay", "s"], "New_York": ["true¦a0Rb0Oc0Hd0Ge0Bf07g05hialeah,i02j00kZlexingtonYmUnMoKpIquHrDsAt7u5v3w0yonkers;ashington1est 0inston salem,orcD;raEvirgin04;! dc;ermont,irginia0;! beach;nited states,s0;!/0Ma;a0enne1he bronx,oleD;llaha0mpa;ssee;outh 1t0; petersburg,aten3;bo0CcC;a2hode1ichmo06och0;ester; is03;lei2;eens,intana roo;ennsylvanNhiladelphNittsbur0rovidence;gh;hio,rlan0;do;ew3or1y0;!c;folk,th c0;aroliE; 1_yo0a0port news;rk;hampshiXje8york0;! staT;a1eads,i0;ami,chig1;ine,nhatt0ryMssachusetts;an;! fayetO;entucky,nox9;acks2e0;rsey;ndia1r0;on5;na;eorg0reensboro;ia;ayette1l0ort lauderda2;!orida;vil0;le;ast0dt,st,t; flatbush,ern0;! 0;standard t0t0;ime;elawa9urham;ape coral,h3incinnati,leve1o0;lumbus,nnecticut;la0;nd;a0esapeake;rlot0ttanooga;te;altimo1o0rooklyn,uffalo;st4;re;kr2merica0tlanta;! 0;eastern;on", "Eastern", "n", "usa"], "Nipigon": ["true¦america eastern,canada,e0nipigon;astern0st,t;! 0;standard t0t0;ime", "Eastern", "n", "usa"], "Nome": ["true¦a0no5;k5laska0merica;! 1n0;! s1;s0ti1west;tandard ti0;me;st,t", "Alaska", "n", "usa"], "Noronha": ["true¦atlantic islands,brazil3f0n4;ernando de noronha 0nt;standard t0t0;ime;!/den0;oronha", "Fernando de Noronha", "n"], "North_Dakota/Beulah": ["true¦america,beulah,c0north dakota;entral standard time,st", "Central", "n", "usa"], "North_Dakota/Center": ["true¦america,c1merc0north dakota,oliv0;er;ent0st;er,ral standard time", "Central", "n", "usa"], "North_Dakota/New_Salem": ["true¦america,c1n0;ew_salem,orth dakota;entral standard time,st", "Central", "n", "usa"], "Nuuk": ["true¦america3g1nuuk,wg0;st,t;l,r0;eenland,l;!/godthab", "West Greenland", "n", "green"], "Ojinaga": ["true¦america5c4m0ojinaga;ountain0st,t;! 0;standard t0t0;ime;hihuahua,iudad juarez;! mountain", "Mountain", "n", "usa"], "Panama": ["true¦a3coral h,e2pa0san miguelito;!n0;!ama;astern standard time,st;merica/0t2;at1c0;aym1oral_harbour;ikok0;an", "Eastern", "n"], "Pangnirtung": ["true¦a4baffin island,canada,e0nunavit,pangnirtung;astern0st,t;! 0;standard t0t0;ime;ddt,merica eastern", "Eastern", "n", "usa"], "Paramaribo": ["true¦paramaribo,s0;r2ur0;!iname0;! time;!t", "Suriname", "n"], "Phoenix": ["true¦aAc8g6idaho,m4n3phoenix,s2t1u0wyoming;s/arAtah;empe,ucsC;cottsd4inaloa,onora;ayarit,ew mexico;aryv2esa,o0st,t,wt;nta6untain standard time;ilbert,lend0;ale;h0olorado;andler,ihuahua;merica2r0;izo0;na;!/crest0;on", "Mountain", "n"], "Port-au-Prince": ["true¦america eastern,cAe6h4p0;etionville,ort0; 0-au-1;au 0de paix;prince;aiti,t0;!i;astern0st,t;! 0;standard t0t0;ime;arrefour,roix des bouquets", "Eastern", "n", "usa"], "Porto_Velho": ["true¦am5brazil,c2porto0rondônia; 0_0;velho;entral brazil0uiaba;!ian0;! s3;azon0t;! 0;s0t1;tandard t0;ime", "Amazon", "n"], "Puerto_Rico": ["true¦a2bayam9p0;r0uerto rico;!i;merica0st,tlantic standard time;!/0;a5blanc-sabl4curacao,dominica,g3kralendijk,lower_princes,m2port_of_spa1st_0torto7virg1;barthelemy,kitts,lucia,thomas,vincent;in;arigot,ontserrat;renada,uadeloupe;on;n0ruba;guil0tigua;la", "Atlantic", "n"], "Punta_Arenas": ["true¦c0punta arenas,region of magallanes;hile0lt;! standard time", "Chile", "s"], "Rainy_River": ["true¦america4c0ft frances,rainy river;entral0st,t;! 0;standard t0t0;ime;! central", "Central", "n", "usa"], "Rankin_Inlet": ["true¦america4c0rankin inlet;ddt,entral0st,t;! 0;standard t0t0;ime;! central", "Central", "n", "usa"], "Recife": ["true¦aAbr4caruaru,e3jaboatao2olinda,p0;aulista,e0;rnambuco,trolina;! dos guararapes; south america s4ast south a6;a0t;silia0zil;! 0;s0t1;tandard t0;ime;merica", "Brasilia", "n"], "Regina": ["true¦c2regina,s0;askat0k;c2oon;anada0entral standard time,st;!/saskatc0;hewan", "Central", "n"], "Resolute": ["true¦america4c0resolute;entral0st,t;! 0;standard t0t0;ime;! central", "Central", "n", "usa"], "Rio_Branco": ["true¦a1brazil0rio branco;!/1;c1merica/porto_0;acre;re0t;! 0;standard t0t0;ime", "Acre", "s"], "Santarem": ["true¦br1e0pará west,santarem; south america s4ast south america;a0t;silia0zil;! 0;s0t1;tandard t0;ime", "Brasilia", "n"], "Santiago": ["true¦aAc4iquique,la pintana,puente alto,rancagua,san3t1v0;alparaiso,ina del mar;alca0emuco;!huano; bernardo,tiago;h1l0oncepcion;!st,t;ile0l;! 0/continental;standard t0t0;ime;ntofagasta,rica", "Chile", "s", "chile"], "Santo_Domingo": ["true¦a8bella vista,do6la romana,s0;an0dmt; pedro de macoris,t0;iago de los caballeros,o domingo0;! 0;e0oe0;ste;!m0;!inican republic;st,tlantic standard time", "Atlantic", "n"], "Sao_Paulo": ["true¦a16b0Tc0Md0Je0Hf0Fg0Ahortol09i05j02l01mXnVosasco,pLriFs4ta3uber2v0;i0olta redon1A;amao,la velha,tor16;a0Ml06;boao da ser00uba10;a2e1oroNu0;maLzano;rXte lago0L;nt4o 0;bernardo do campo,carl03jo0leopolLpaulo,vicE;ao de meriti,se0;! do0; rio p8s camp00;a 1o0; andDs;barbara d'oes0Pluz0Tmar0T;beirao 3o0;! 0;cla0de janei0g6ver7;ro;das nev07p0;reto;asso fun8e7iraci6lanalti0Oo4r0;aia g1esidente prud0;en0G;ran0;de;nta grossa,rto aleg0;re;caW;lotYtro0F;do;iteroi,ov0;aJo hamburgo;a1o0;gi das cruzSntes clarD;ri0ua;l07n6;imei2ondri08;acarei,oinville,u0;iz de fo0ndi9;ra;ndaia2patin1ta0;bor6pevi,quaquece1;ga;tuG;andY;o3ravat2uaru0;ja,lh0;os;ai;iSvernador valadarC;loria5oz do0ran2; iguacu; south america sHast south ameri0mbu;ca;i0uque de caxi8;adema,vi0;noN;a1o0uriti2;ntagem,tK;choeiro de itapemirDmp1no3rapicui0scavel,xias do sul;ba;in1os dos goytacaz0;es;as;aBe7lumenau,r0;!a0st,t;!silia1zil0;!/east;! 0;s0t1;tandard t0;ime;l1t0;im;ford roxo,o horizon0;te;rueri,uru;lvora4merica3na2parecida de goi0;an0;ia;polis;na;da", "Brasilia", "s"], "Scoresbysund": ["true¦e3greenland2h0ittoqqortoormiit,scoresbysund;e0neg;eg,g;! eastern;ast greenland1g0;st,t;! 0;standard t0t0;ime", "East Greenland", "n", "eu0"], "Sitka": ["true¦a0sitka;k6laska0merica;! 1n0;! st2;s0t2;itka area,t0;andard t0;ime;st,t", "Alaska", "n", "usa"], "St_Johns": ["true¦canada7h5n0st johns;d3ewfoundland0st,t;! 0;labrador,standard t0t0;ime;dt,t;e0n0tn;tn;!/newfoundland", "Newfoundland", "n", "usa"], "Swift_Current": ["true¦c1s0;askatchewan,wift current;anada,entral standard time,st", "Central", "n"], "Tegucigalpa": ["true¦c2h0san pedro sula,tegucigalpa;n0onduras;!d;entral standard time,st", "Central", "n"], "Thule": ["true¦a0pituffik,thule;st,t0;!lantic0;! 0;standard t0t0;ime", "Atlantic", "n", "usa"], "Thunder_Bay": ["true¦canada,e0thunder bay;astern0st,t;! time", "Eastern", "n", "usa"], "Tijuana": ["true¦america8baja california,eAh6mexic4p0tijuana;acific0st,t;! 0;standard t0t0;ime;ali,o0;!/bajanorte;e0n0;nomx; pacific,/0;e0santa_isabel;nsenada", "Pacific", "n", "usa"], "Toronto": ["true¦americaGbEcaBe7gatineIhamilFkitchener,l4m3nepe2o0quebec,richmond hill,toronto,vaugh2windsor;n5sh0tt0;awa;an;arkham,ississauga,oF;avFon0;don on0gueuil;tario;astern0st,t;! 0;standard t0t0;ime;!n0;!ada0;!/7;arrie,ramp0;ton; 4/0;mo1nass0;au;ntre0;al;eastern", "Eastern", "n", "usa"], "Vancouver": ["true¦america 9b7ca5ladn4okanagan,p1surrey,v0yukon;ancouv3ictor7;acific0st,t;! 0;bc,standard time;er;!nada0;!/2;ritish columb0urnaby;ia;pacific", "Pacific", "n", "usa"], "Whitehorse": ["true¦canada1m0whitehorse,yst;ountain standard time,st;!/yukon", "Mountain", "n"], "Winnipeg": ["true¦america 7c2m1w0;est m0innipeg;anitoba;anada3entral0st,t;! 0;standard t0t0;ime;!/0;central", "Central", "n", "usa"], "Yakutat": ["true¦a0y4;k6laska0merica;! 1n0;! s2;s1t2y0;akutat;tandard t0;ime;st,t", "Alaska", "n", "usa"], "Yellowknife": ["true¦america mountain,canada,m0yellowknife;ountain0st,t;! 0;standard t0t0;ime", "Mountain", "n", "usa"] }, "Antarctica": { "Casey": ["true¦antarctica,cas0;ey,t", "Casey", "s", "ant"], "Davis": ["true¦a1dav0;is,t;ntarctica,q,ta", "Davis", "s"], "Macquarie": ["true¦a2canberra,eastern australia6m0sydney;acquarie0elbourne;! island;e4ntarctica,us0; east0tralia eastern;!ern0;! standard0; time;st,t", "Eastern Australia", "s", "aus"], "Mawson": ["true¦antarctica,maw0;son,t", "Mawson", "s"], "Rothera": ["true¦a1b0city of b0rothera;uenos aires;ntarctica1r0;gentina,st,t;!/palmer", "Argentina", "s"], "Troll": ["true¦antarctica,g2troll0;! 0;research station,t1;mt,reenwich mean t0;ime", "Troll", "s", "troll"], "Vostok": ["true¦antarctica,vost0;!ok", "Vostok", "s"] }, "Asia": { "Almaty": ["true¦a6central asia,east kazakhstan time,k2nur sultan,p1s0taraz,ust kamenogorsk;emey,hymkent;avlodar,etropavl;a0z;ragandy,z0;!akhstan0;! eastern;lm1s0;ia,tana;a0t; ata,ty", "East Kazakhstan", "n"], "Amman": ["true¦a2eet,irbid,jo0russeifa,wadi as sir,zarqa;!r0;!d1;mm0sia;an", "Eastern European", "n", "jord"], "Anadyr": ["true¦a0petropavlovsk kamchatsky;na0sia;dyr0t;! time", "Anadyr", "n"], "Aqtau": ["true¦a1kazakhstan western,mangghystaū/mankis3tashkent,west 0;asia,kazakhstan5;lm2q1s0;hgabat,ia;tau;a0t; ata,-ata0; time", "West Kazakhstan", "n"], "Aqtobe": ["true¦a1kazakhstan western,tashkent,west 0;asia,kazakhstan5;kto5lm2qt1s0;hgabat,ia;o3ö3;a0t; ata,-ata0; time;be", "West Kazakhstan", "n"], "Ashgabat": ["true¦as4t0;km,m2urkmen0;a4istan0;! time;!st,t;hga1ia0;!/ashkhabad;bat", "Turkmenistan", "n"], "Atyrau": ["true¦a1gur'yev,kazakhstan western,tashkent,west 0;asia,kazakhstan6;lm3s2t0;irau,yra0;u,ū;hgabat,ia;a0t; ata,-ata0; time", "West Kazakhstan", "n"], "Baghdad": ["true¦a6ba5dihok,erbil,i3k2mosul,na1r0;amadi,iyadh;jaf,sirC;arbala,irkuk,uwait;q,r0;aq,q;ghdad,sr9;bu ghurayb,d diw6l 5rab1s0; sulaym5ia,t;!i0;a0c;!n0;! time;amar2basrah al qadim2falluj2hill2kut,mawsil al jadid2;an0;iy0;ah", "Arabian", "n"], "Baku": ["true¦a0baku,ganja,lankaran,sumqayit;sia,z0;!e0t;!rbaijan0;! time", "Azerbaijan", "n"], "Bangkok": ["true¦asiaAbangkok,ch7h5i3jakarta,mueang nontha8na2pak kret,s0udon thani;amut prakan,e0i racha,outh east0; asia;khon ratchasima,m di9;ct,ndochina0;! time;a0ue;iphong,noi,t y2;iang m1on 0;buri;ai;!/0;phnom_pe0vientiane;nh", "Indochina", "n"], "Barnaul": ["true¦a3b2kra0north a3;snoyarsk0t;! time;arnaul,iysk;sia", "Krasnoyarsk", "n"], "Beirut": ["true¦asia,bei3e2l0ra's bay3;b0ebanon;!n;astern european time,et,urope eastern;rut", "Eastern European", "n", "leb"], "Bishkek": ["true¦asia,bishkek,k0osh;g2yrgy0;stan,zstan0;! time;!t,z", "Kyrgyzstan", "n"], "Brunei": ["true¦asia,b0;dt,n2r0;n,unei0;! darussalam time;!t", "Brunei Darussalam", "n"], "Chita": ["true¦asia,chita,yak0;t,utsk0;! time", "Yakutsk", "n"], "Choibalsan": ["true¦as2choibalsan,dornodsükhbaatar,mongol2ula0;anbaatar0t;! time;ia", "Ulaanbaatar", "n"], "Colombo": ["true¦as6c4dehiwala mount lavin6i2kolkata,lk1m0new delhi,sri lanka;oratuwa,umb4;!a;ndia0st;! time,n;henn0olombo;ai;ia", "India", "n"], "Damascus": ["true¦a4d3eet,h2latak5sy0;!r0;!ia;am3oms;amascus,eir ez zor;leppo,r raqq1s0;ia;ah", "Eastern European", "n", "syr"], "Dhaka": ["true¦asiaGbDcBd9jess8khul7mymensingh,na4pa3ra2s1t0;angail,ungi;aid8hib4ylhet;jshahi,ng7;b3ltan,r naogaon;gar5r0t3;ayan0singdi;ganj;na;ore;haka,inaj0;pur;hattogram,o0;milla,x's bazar;a0d,gd,ogra,st;gerhat,ngladesh0rishal;! time;!/dacca", "Bangladesh", "n"], "Dili": ["true¦asia,dili,east timor1tl0;!s,t;! time", "East Timor", "s"], "Dubai": ["true¦a5dubai,g3mus1om0ras al khaim2sharj2;!an,n;aff0c5;ah;st,ulf0;! time;bu dhabi,jm2rabi2sia0;!/musc0;at;an", "Gulf", "n"], "Dushanbe": ["true¦asia,dushanbe,t0;ajikistan1j0;!k,t;! time", "Tajikistan", "n"], "Famagusta": ["true¦asia,e0famagusta,northern cyprus;astern european time,et,urope eastern", "Eastern European", "n", "eu3"], "Gaza": ["true¦asia,eet,gaza2p0;alestine,s0;!e;! strip", "Eastern European", "n", "pal"], "Hebron": ["true¦asia,e0hebron,west bank;ast jerusalem,et", "Eastern European", "n", "pal"], "Ho_Chi_Minh": ["true¦asia7bien hoa,can tho,da 5ho3nha tr6qui nh8rach gia,sa dec,thi xa phu my,v0;ietnam1n0ung tau;!m;! south; chi 0_chi_0;minh;lat,n0;ang;!/saig0;on", "Indochina", "n"], "Hong_Kong": ["true¦asia,h0kowloon,tsuen wan;k3ong0; kong1_k0k0;ong;! time;!g,st,t", "Hong Kong", "n"], "Hovd": ["true¦as4bayan-ölgiigovi-altaihovduvszavkhan,hov2west0; 0ern 0;mongol2;d0t;! time;ia", "Hovd", "n"], "Irkutsk": ["true¦a2brat3irk0north asia east,ulan ude;t,utsk0;! time;ngar0sia;sk", "Irkutsk", "n"], "Jakarta": ["true¦aZbTcRdepQiNjKkediri,lJmGpArengasdengklQs4t2w0yogyakM;est0ib; indoneXern indonesia time;a0egal;n4sikmal3;ema4itubondo,outh tan3u0;kabumi,medaSra0;b0kF;aya;ge0;raO;a4e1robolinggo,urw0;akAokerto;ka1ma0rcut;laKtangsiantar;long2nbaru;daIl3mulaIruI;a1ed0;an;diun,laF;embaE;a0ember;k0mbi,vasumatra;arta;d1ndonesia0;! western;!n;ok;i0urug;ampea,bino5leungsir,mahi,putat,rebon;a1e0injai,ogor;kasi,ngkulu;nd0tam;a0u1; aceh,r lampu0;ng;sia", "Western Indonesia", "s"], "Jayapura": ["true¦a2east1indonesia eastern,jayapura,m0new guinea,wit;alukus,oluccas; indones1ern indonesia time;mbon,s0;ia", "Eastern Indonesia", "s"], "Jerusalem": ["true¦as7beersheba,haifa,i2j0petah tiqwa,rishon leziyyon,tel 9west je1;e0mt;rusalem;d3l,s0;r0t;!ael0;! time;dt,t;hdod,ia0;!/tel_0;aviv", "Israel", "n", "isr"], "Kabul": ["true¦a1herat,jalalabad,ka0mazar e sharif;bul,ndahar;f0sia;!g0t;!hanistan0;! time", "Afghanistan", "n"], "Kamchatka": ["true¦a2kamchatka,pet0;ropavlovsk0t; kamchatsky,-kamchatski time;nadyr,sia", "Petropavlovsk-Kamchatski", "n"], "Karachi": ["true¦asia,bLchiniKdera ghaziIfaisalHgujraGhyderHislamHjhang sadr,kElaDm8nawabshah,okaBp4quetta,ra3s0;a1h0ialkJukkN;ahkIekhupu9;ddiqEhiwal,rgodha;him yarEwalpindi;ak1eshawar,k0;!t;!istan0;! time;a3i1u0;lt9zaffar7;ngo0rpur khas;ra;lir cantonment,rd6;hore,rkana;a0otli;moke,rachi,s8;n5t;abad; kh0;an;ot;a1himber,ure0;wala;hawalp0ttagram;ur", "Pakistan", "n"], "Kathmandu": ["true¦asia3biratnagar,kath4n1p0;atan,okhara;epal,p0;!l,t;!/kat0;mandu", "Nepal", "n"], "Khandyga": ["true¦asia,khandyga,yak0;t,utsk0;! time", "Yakutsk", "n"], "Kolkata": ["true¦0:3D;1:3L;2:2D;3:3M;4:3J;a35b2Dc24d1We1Uf1Sg1Fh1Ci18j13k0Pl0Km0Cn05odis3KpVquthbull3DrNsFt9u8v5warang2Myamun1P;a6el1Ui5;jayawa2Vsakha0HzianagC;doda2Orana11;daip0jja23lhasn1ttar pradesh;a8eXh7iru5umk0;chirap0Mnelve2p5vottiy0;a39p0;ane,iruvananthapur0Noothuku2Yriss0;mb5njo1X;ar0L;aBecunder4h9i8lst,o7r1Fu5;jan37r5;at,endr1C;l2Znip2N;k3liguKngrau2rJ;ahj1Zi5ri2Oya0L;mo1Mvaji07;har1Xlem,mbh24ng2t04ug0Y;a6e0Eoh5;iItak;ebare2i9j7m5nc1Gtl0Aurke37;ag5g5p0;und08;a5kot;hmund26sth2A;ch0p0;a9imp8roddat0u5;ducher23n5rn17;a5e;sa;ri;li,n7rbha6t5;ia2Vna;ni;chku2Ti5;ha2Gp21;a7e6izam4o5;i1Vwrang2B;l0Sw del0Y;di2Kg7i0Ejaf2Fn5re2Oshik,vi mumb15;ded,g5;i,loi j1V;ercoil,p0;a8eerut,irz25o7u5yso0Y;lugu,mb10rwa1Izaffar5;n1p0;nghyr,rad4;chili7d6harasht1Fleg07n5thu1Fu;ga0Iip0;hya,ur0V;patnG;a7u5;cknow,dhia5;na;l bahadur5t0; n1;aDhaBo8u5;kat6lt5rno1P;a2i;pal2;l5rWta,zhikode;h1Nka1Kl5;am;nd5ragp0;wa;kina13l8marOnp0r5shmir,tih3;i6na5ol ba18;l,tV;mn1;lakuric03y11;a6han5odNunagadh;si;b0Rip0l6m5;mu,n1shedp0;andh3gGna;chalkaranji,mph0In5st;!d5;!ia5o00;! time,n;a6is3ospet,u5;b2g2;o0Hp0ridw3;aChazi4o9reater noi0Mu6wali5y04;or;jar0OlbarQnt0rg6wa5;ha12;aon;rak6sa5;ba;hp0;juw8n5ya;dh6g5;an1;in1;aka;ar5iroz4;id4rukh4;l5taw0M;loF;aAe8h6indigul,ombOurg5;!ap0;anb0Uul5;ia;hra dun,l5was;hi;rbhan5vange8;ga;a09h8o5uttack;ch6imbato5;re;in;a6enn5;ai;nd5pL;a5i0C;!nn1;aNeKhBi9or7rahm04u5;landshahr,rh5;anp0;iv2;li;d3har sharif,jZkan07l5;asp0imoC;aAi7op6u5;baneshw3sav5;al;l6wan5;di,i;ai,wa6;g6ratp0tpa5vn1yand3;ra;alp0;l5ngaluru;gaum,la5;ry;hAli,r6thin5;da;a6ddham5eilly;an;n1s5;at;a6rai5;gh;ramp0;gQhmLizawl,jmKkoRlHmDnantCrrBs6urang4va5;di;ans8ia5;!/ca5;lcut5;ta;ol;ah;ap0;arnath,batt0r5;ava5its3o9;ti;ur;appuz6i5lah4w3;garh;ha;er;adn1ed4;ab5;ad;ag3;ar;arta5ra;la", "India", "n"], "Krasnoyarsk": ["true¦a2kra0north a2;snoyarsk0t;! time;sia", "Krasnoyarsk", "n"], "Kuala_Lumpur": ["true¦aHbukit mertajGgeorge town,ipoh,johor bahFk8m4petali3s0taipiE;e1hah alFu0;ba1ngai petani;paBremb7;ng jaya;ala1y0;!s,t;cca,ysia0;! time;ampung baru suba5la5ota bha6ua0;la1nt0;an; 0_l1;l0terengganu;umpur;ng;ru;am;lor setar,sia", "Malaysia", "s"], "Kuching": ["true¦asia,k4m2s0tawau;a0ibu;bahsarawak,ndakan;alaysia0iri,yt;! time;ota kinabalu,uching", "Malaysia", "n"], "Macau": ["true¦asia6beiji5c2hong ko5m0urumqi;ac0o;!au;h0st;ina0ongqi1;! time;ng;!/macao", "China", "n"], "Magadan": ["true¦asia,mag0;adan0t;! time", "Magadan", "n"], "Makassar": ["true¦asiaBba8c5denpa4indonesia central,k3l2ma1palu,s0wita;amarinda,ulawesi;kas2nado,taram;abuan bajo,oa jan7;endari,up8;sar;e0ity of bal3;lebesbalinusa,ntral indonesia0;! time;l0njarmasin;ikpap0;an;!/ujung_pand0;ang", "Central Indonesia", "s"], "Manila": ["true¦a04bWcRdaPgeneral santOiMlJmCnaBoAp4quezIsan1ta0zamboanga;clobZguig,rlac,ytE; 1t0;a ro2ol;fernando,jose del monte,pab02;a3h1uerto prince0;sa;!ilippine0l,st,t; time,s;gadiRnalanoy,s0;ay,ig;longapo,rmoc;ga,votQ;a0eycauayN;balacat,gugpo poblaci4kati,l3n0;da1ila,silingLtamp0;ay;luyong,ue;ingDol6;on;a1egaspi,i0ucena;bertad,pa;pu lapu,s p4;l0mus;igCoiI;os;smar0v5;inB;a0ebu,otabato;b1gayan de oro,in5l0;amba,ooc6;anatu5uy0;ao;a4inan2u0;d0tu2;ta;!gon0;an;co1guio,tang0;as;lod,or;n0sia;geles,tipo0;lo", "Philippine", "n"], "Nicosia": ["true¦a5cy3e0n2;astern european time,et,urope0; eastern,/n0;ico2;!p0;!rus;sia", "Eastern European", "n", "eu3"], "Novokuznetsk": ["true¦a5k2no0prokop'yev1;rth a4vokuznet0;sk;emerovo,ra0;snoyarsk0t;! time;sia", "Krasnoyarsk", "n"], "Novosibirsk": ["true¦as3no0siber3;rth central as2v0;osibirsk0t;! time;ia", "Novosibirsk", "n"], "Omsk": ["true¦asia,oms0;k0t;! time", "Omsk", "n"], "Oral": ["true¦a2kazakhstan western,oral,tashkent,west 0;asia,kazakhstan0;! 4;lm1s0;hgabat,ia;a0t; ata,-ata 0;time", "West Kazakhstan", "n"], "Pontianak": ["true¦asia,b2indonesia western,pontianak,tanjung pinang,w0;est0ib; b0ern indonesia time;orneo", "Western Indonesia", "n"], "Pyongyang": ["true¦asia,chongjin,h7k4n3p2s0won8;ariw0eoul,inuiAunch'0;on;rk,yongya7;amp'o,orth korea;a1orea0p,st;!n time;eso3nggye;a1ungnam,ye0;san;e1mhu0;ng;ju", "Korean", "n"], "Qatar": ["true¦a2doha,kuwait,qa0riyadh;!t0;!ar;r2s0;ia0t;!/bahrain; rayyan,ab0;!i0;a0c;!n0;! time", "Arabian", "n"], "Qostanay": ["true¦a2central asia,east kazakhstan time,k0qo1;azakhstan eastern,o0;stanay;lmt,s0;ia,tana", "East Kazakhstan", "n"], "Qyzylorda": ["true¦a4k1qy2tashkent,west 0;asia,kazakhstan7;azakhstan western,y0zyl-1;zyl0;orda;lm1s0;hgabat,ia;a0t; ata,-ata0; time", "West Kazakhstan", "n"], "Riyadh": ["true¦a9burayd8dammam,ha7jedd8k6me5najran,riyadh,s4ta3y0;anbu,e0;!m0;!en;'if,buk;ultan3yot;cca,dina;hamis mush6uw6;'il,far al batin;ah;bha,l 8ntarctica/syowa,rab4s0;ia0t;!/0;aden,kuw0;ait;!i0;a0c;!n0;! time;hufuf,jubayl,kharj,mubarraz", "Arabian", "n"], "Sakhalin": ["true¦asia,sak0yuzhno sakhalinsk;halin0t;! 0;island,time", "Sakhalin", "n"], "Samarkand": ["true¦asia,bukhara,nukus,qarshi,samarkand,uz0;bekistan0t;! 0;time,west", "Uzbekistan", "n"], "Seoul": ["true¦aPbuMchHdaeGgChwaseoRiBjeAk7m6pohaFrok,s2u1wonJy0;aCeosu;ijeongbuQlsL;e1outh korea,u0;nEwH;joAo0;ngnamMul;asGokpo;imhae,or0r,st,wangmyo7;!ea0;!n time;ju,on8;cCksBn6;angneu2oyaEu1wa0;ng5;mi,ns8riD;ng;gu,je4;angw3eon2in1un0;che2;ju;an,gju7;on;c1s0;an;heon3;n0sia;san1ya0;ng0; si", "Korean", "n"], "Shanghai": ["true¦0:3J;1:36;2:34;3:37;4:3D;a3Cb31c2Nd2He30f2Cg26h1Qji1Ek1Bl0Ym0Wn0Tordos,p0Pq0Lrizh10s08t01u3FwSxLyEz5;aoCh6i5ouc3unyi;bo,go0;a7en6ouk2u5; c3h31maWzh2;g2Vj1Izh2;b1Vng5o3E;jiakou5zh2;! shi xuanhua qu;ya0z27;an9i7u5;ci,e18n5;c3fu;b4c9n5ya0;cZgk2;c3g5ji,t2Q;j17qu1sh16zh2;i6uc5;ha0;a6n5uyi0;di,gt2Lh1Gi0pu,t2Lx13ya0;m17n5;!g5ni0t0Eya0;t1ya0;aBe9u5;h6so0w1Cx5zh2;i,ue;a5u;i,n;i0Hn5;sh1zh2;fang5nxi1;di1;a8i6ong5;chuans0XhDli02sh1;an5eli0;j4sh10;i6ng5;gu,sh1;an,hec1Wyu1zh2;anmi0hAi8u5;i5zh2;h5zh2;ua;c5pi0;hu1;a7en6i5uangya14;jiaz15qi,y1;gli,ya0zh0G;n6o5s0I;gu1xi0;g5t2;h1Pqiu,rKyu;i5uan1J;aFn5o14qih1Y;g5huangdH;dGh1L;an0Ting7rc,u5;ti1yang5;! H;ding0QxZ;an5eijYingbo;ch5ji0ni0to0ya0;a0o0;entoug2ianRuda5;njU;aEi8u5;anc3o6qi5;ao;he,ya0;a7jPn5upansh02;fTxia 5yi;chengguanI;n0Do5;c3y5;a0u1;i0Wn5ohek2;g5zh2;fa0;ai6un5;mi0sh1;fe0yu1;'1aAe9l4n6u5xi;jCt0U;an,c3g5i0zh2;de5li0zh2;zhE;ya0;musi,n8o5xi0;j6z5;uo;ia0;g5shG;m7xi;aGeCkt,oBu5;a6i0Dlan ergi,m5n1;en;i7ng5y4;ga0s5;hi;'1b9n1;hhot,ng ko0;bi,f7ga0ng5ze;sh5ya0;ui;ei;i7n5rb4;d1g5;u,zh2;c3k2l0F;a9u5;an6i5li;l4ya0zh2;g5k2;do0yu1zh2;nsu,opi0;en7o6u5;ji1shQx4zh2;sh1;d2g5;hua0;a6eNong5;gu1hR;d6lian5ndo0qi0to0;!g;o5uk2;nghN;angHh5n,st,t;aAen7i5n,oZuG;fe0na5;! time;g5zh2;d5zho0;e,u;ng6o5;ya0zh2;ch7de,sh6zh5;i,ou;a,u;un;zh2;a9e5;i6n5;gbu,xi;'1h5ji0;ai;i7o5yan nur;di0t2;ou;c3sh1y4;an;he0;nDsia5;!/5;ch8harb4kashg6u5;rumqi;ar;in;o5ungki0;ng5;qi0;da,qi0sh5ya0;an,un;ng", "China", "n"], "Singapore": ["true¦asia,kuala lumpur,s0woodlands;g0ingapore;!p,t", "Singapore", "s"], "Srednekolymsk": ["true¦asia,chokurdakh,sre0;dnekolymsk,t", "Srednekolymsk", "n"], "Taipei": ["true¦asia,banqiao,cst,h7k5roc,t0;a1w0;!n;i0oyu1;ch2n0pei,w0;an;aohsi0eel0;ung;sinchu,ualien", "Taipei", "n"], "Tashkent": ["true¦a3namangan,qo`q4tashkent,uz0;!b0t;!ekistan0;! east;ndij0sia;on", "Uzbekistan", "n"], "Tbilisi": ["true¦asia,ge1kuta0tbil0;isi;!o0t;!rgia0;!n", "Georgia", "n"], "Tehran": ["true¦aQbMgorgWhamViKkCmaBn8orumiy7pasragad branch,q4rasht,s2t1varam6yazd,za0;hedVnjV;abHehrU;a0hirRirjT;bzevar,nandEri,v3;a0om;rchak,zv0;in;eh;a0eyshabur;jaf0zar0;ab4;layer,shh3;a4erman3ho0;meyni sDrram0wy;ab0sC;ad;!shah;h1r0;aj;riz;r0sfahB;!an,dt,n,st;a2irjand,o0uk9;jnu0ruje0;rd;b3ndar abbas;b4hv3m2r1sia,zads0;hahr;ak,dabil;ol;az;ad0;an", "Iran", "n"], "Thimphu": ["true¦asia2b0thimphu;hutan,t0;!n;!/thimbu", "Bhutan", "n"], "Tokyo": ["true¦0:11;1:1A;2:10;a18ch16fu0Zgifu14h0Oi0Ij0FkZmTnMoKsFt9u8waka05y3;a6o3;k3no;kaic1Co3;ha2su0;maKo;ji,tsun0F;aka7o3sukuba;k5makom05y3;a2o3;hOna0ta;oro03us0Qyo;m0Jrazu0sa1tsu1;a5end00hi4o0u3;i10zu0;monose1zuo0;ita2k3ppoLsebo;ai,u06;dawa05i0Wka3sa0t0E;ya2za1;a6eyaga0Qi3umazu;i4shi3; tokyo0Inomiya ha2;ga0R;g3ha,ra0G;a3oX;no,o0sa1;a5i3orio0;na3to,yaza1;mirinkOto;chiDeb4tsu3;do,m8ya2;as0J;aBi9o7u3y6;mam5r4shi3;ro;ashi1e,ume;oto;be,c0Dfu,ri3shigaK;ya2;shiwa3takyushu;da;gosVkogawacho honmKmirenjaku,na8s5wa3;g3sa1;oe,uc07;hi01u3;g3kabe;ai;zaY;ap4dt,oetJp3st;!n;an;bara1chi4ta3wa1zu3;mi;ha5n3;omi3;ya;ra;a8i3oncho;meBr4t3;acR;a4os3;a1hi2;kaNtsu0;chi5kodate,mam3;at3;su;nohe,o3;ji;ji8ku3;i6o0s3ya2;hi2;ma;ka; sD;!sa7;i3ofu;ba,g6;geoshimo,k7mag5njo,omori,s3tsugi;ahika3ia;wa;asa1;ki;as4i3;ta;hi", "Japan", "n"], "Tomsk": ["true¦asia,oms0tomsk;k,t", "Omsk", "n"], "Ulaanbaatar": ["true¦asia3m1ula0;anbaatar,n 3t;n0ongolia;!g;!/ulan_0;bator", "Ulaanbaatar", "n"], "Ust-Nera": ["true¦asia,ust-nera,vla0;divostok,t", "Vladivostok", "n"], "Vladivostok": ["true¦asia,k1vla0;divostok,t;habarovsk0omsomolsk on amur;! vtoroy", "Vladivostok", "n"], "Yakutsk": ["true¦asia,blagoveshchen1yak0;t,ut0;sk", "Yakutsk", "n"], "Yangon": ["true¦asia4b3kyain seikgyi township,m0nay pyi taw,pathein,sittwe,yang5;a1eiktila,m0onywa;!r,t;ndalay,wlamyine;ago,urma;!/rango0;on", "Myanmar", "n"], "Yekaterinburg": ["true¦asia,chelyabin7eka5k4magnitogor7nizhn3or2perm,s1tyumen,ufa,yek0zlatoust;a4t;terlitamak,urgut;e3sk;evartov3y tagil;amensk ural'skiy,urgan;teri0;nburg;sk", "Yekaterinburg", "n"], "Yerevan": ["true¦a0caucasus,yerevan;m2rm0s1;!en0;ia;!t", "Armenia", "n"] }, "Atlantic": { "Azores": ["true¦a0hmt;tlantic,zo0;res,st,t", "Azores", "n", "eu0"], "Bermuda": ["true¦a2b0;ermuda,m0;!u;st,t0;!lantic", "Atlantic", "n", "usa"], "Canary": ["true¦atlantic,canary1europe western,las palmas de gran canaria,santa cruz de tenerife,we0;stern european,t;! islands", "Western European", "n", "eu1"], "Cape_Verde": ["true¦atlantic,c0;a1pv,v0;!t;bo verde0pe verde;! is", "Cape Verde", "n"], "Faroe": ["true¦atlantic2f0;aroe0o,ro;! islands;!/faeroe", "Western European", "n", "eu1"], "Madeira": ["true¦atlantic,europe western,madeira1we0;stern european,t;! islands", "Western European", "n", "eu1"], "Reykjavik": ["true¦atlantic,coordinated universal3g2i0reykjavik,utc,zulu;celand,s0;!l;mt,reenwich mean0; time", "Greenwich Mean", "n"], "South_Georgia": ["true¦atlantic,gs1s0;gs,outh georgia;!t", "South Georgia", "n"], "Stanley": ["true¦atlantic,f0stanley;alkland1k0lk;!st,t;! island0;!s", "Falkland Islands", "s"] }, "Australia": { "Adelaide": ["true¦a2cen0south 1; 0tral 0;australia;c2delaide,ustralia0;! 0/south,n 0;central;dt,st,t", "Central Australia", "s", "aus"], "Brisbane": ["true¦a1brisbane0gold coa5logan,q4townsville;! time;e3ustralia0;!/q1n east0;!ern;ueensland;st", "Brisbane", "s"], "Broken_Hill": ["true¦a1broken_hill,cen0y3; australia standard time,tral australia;c2delaide,ustralia0;! central,/y0;ancowinna;st,t", "Central Australia", "s", "aus"], "Darwin": ["true¦a0darwin,northern territory;cst,ustralia0;!/north,n central", "Australian Central", "s"], "Eucla": ["true¦a0cw4eucla;cw4us0; central w1tralia0;!n central western;!e0;st;dt,st,t", "Australian Central Western", "s"], "Hobart": ["true¦a0canberra,eastern austral5hobart,king island,melbourne,sydney,t4;e8us0; east5tralia0;! 3/0n 3;currie,t0;asman0;ia;easte1;!e0;rn;dt,st,t", "Eastern Australia", "s", "aus"], "Lindeman": ["true¦a0brisbane time,lindeman,whitsunday islands;est,ustralia0;!n eastern", "Brisbane", "s"], "Lord_Howe": ["true¦australia3l0;h1ord howe0;! island;dt,st,t;!/lhi", "Lord Howe", "s", "lhow"], "Melbourne": ["true¦a0canberra,eastern austral4geelong,melbourne,sydney,v3;e7us0; east4tralia0;! 2/v0n 2;ictor0;ia;easte1;!e0;rn;dt,st,t", "Eastern Australia", "s", "aus"], "Perth": ["true¦a4perth,w0; 2est0; 1ern australia0;! time;australia;ustralia1w0;dt,st,t;! weste1/west,n west0;!e0;rn", "Western Australia", "s"], "Sydney": ["true¦a0c5eastern australia time,melbourne,new south wales,sydney,wollongong;e8u0;!s0;! east4tralia0;! 2/0n 2;act,c0nsw;anberra;easte1;!e0;rn;dt,st,t", "Eastern Australia", "s", "aus"] }, "Etc": { "GMT": ["true¦coordinated universal3etc2g0utc,zulu;mt,reenwich0;! mean1;!/greenwich; time", "Greenwich Mean", "n"], "UTC": ["true¦coordinated universal7etc2g1u0z4;ct,n5tc;mt,reenwich mean5;!/0;u1z0;ulu;ct,n0;iversal; time", "Greenwich Mean", "n"] }, "Europe": { "Amsterdam": ["true¦a9brussels,c6e4groning7madrid,n2paris,ro1t0utrecht;he hague,ilburg;mance,t9;etherlands,l0;!d;indhov2urope0;! central;e1openhag0;en;ntral european,st,t;lmere stad,m0;s0t;terdam", "Central European", "n", "eu2"], "Andorra": ["true¦a3brussels,c1europe0madrid,paris,romance;! central;e0openhagen;ntral european,st,t;d,nd0;!orra", "Central European", "n", "eu2"], "Astrakhan": ["true¦astrakh1europe,m0russi1st petersburg,volgograd time;oscow,sk;an", "Moscow", "n"], "Athens": ["true¦athens,e1gr0thessaloniki;!c,eece;astern european,et,urope0;! eastern", "Eastern European", "n", "eu3"], "Belgrade": ["true¦b9c7europe3madrid,n2p1romance,s0;i,lovenia,vn;aris,risti4;is,ovi sad;! central,/0;ljublja1podgorica,s0zagreb;arajevo,kopje;na;e0openhagen;ntral european,st,t;elgrade,russels", "Central European", "n", "eu2"], "Brussels": ["true¦antwerp6b3c1europe0gent,liege,madrid,paris,romance;! central;e0harleroi,openhag4;ntral european,st,t;e0mt,russels;!l0;!gium;en", "Central European", "n", "eu2"], "Bucharest": ["true¦b5c4e2gala1iasi,oradea,ploies1ro0timisoara;!mania,u;ti;astern european,et,urope0;! eastern;luj napoca,onstanta,raiova;ra0ucharest;ila,sov", "Eastern European", "n", "eu3"], "Budapest": ["true¦b6c3debrec4europe2hu0madrid,paris,romance;!n0;!gary;! central;e1openhag0;en;ntral european,st,t;russels,udapest", "Central European", "n", "eu2"], "Busingen": ["true¦b5c3de2europe1germa0madrid,paris,romance,saxo0;ny;! central,/berlin;!u;e0openhag3;ntral european,st,t;avaria,r0using1;em0ussels;en", "Central European", "n", "eu2"], "Chisinau": ["true¦chisinau,e2m0;d0oldova;!a;astern european,et,urope0;! eastern,/tiraspol", "Eastern European", "n", "eu2"], "Copenhagen": ["true¦arhus,brussels,c2d1europe0madrid,paris,romance;! central;enmark,k,nk;e0mt,openhagen;ntral european,st,t", "Central European", "n", "eu2"], "Dublin": ["true¦ace,british8cork,d7e6g5i3l0tse,waterford;i0ond1;merick,sb0;on;e,r0st;eland,l;alway,mt,reenwich mean2;dinburgh,ire,urope;mt,ublin; time", "Irish", "n", "eu1"], "Gibraltar": ["true¦b5c3europe2gi0madrid,paris,romance;!b0;!raltar;! central;e0openhagen;ntral european,st,t;dst,russels,st", "Central European", "n", "eu2"], "Helsinki": ["true¦e3fi1helsinki,t0vantaa;ampere,urku;!n0;!land;astern european,et,spoo,urope0;! eastern,/mariehamn", "Eastern European", "n", "eu3"], "Istanbul": ["true¦aYbScQdOeKgJiHkFmBosmAs4t1u0v07zeytinburnu;eskuedWmr9;arsus,r1ur0;!kZ;!abzon,t;a3i1ultan0;beyJgazi;sIv0;as,erek;msun,n0;cakteBliurfa;aniye;a1er0uratpaH;kezefendi,sin;l0niF;atQte6;a0irikkale,onPutahP;hramanmaras,rabaglGyseS;sJzmi0;r,t;aziantep,ebze;lazig,rzurum,s1uro0;pe;en0kiC;l8yurt;eniz0iyarbakB;li;ankaEor0;lu,um;a1ur0;sa;gcil2hcelievl1likes5sak4t0;ikent,mB;er;ar;d7n4rnavutko3sia/is2ta0;seh0;ir;tanbul;ey;kara,ta0;k0l0;ya;a1iyam0;an;na,paza0;ri", "Turkey", "n"], "Kaliningrad": ["true¦e0kaliningrad;astern european,et,urope", "Eastern European", "n"], "Kiev": ["true¦bila tserkLcherIdGeDhorlCivano frankivHk8l7m5odessa,poltaLriv4sumy,ternopil,u2vinnyts1z0;aporizhzh0hytomyr;ya;a,kr0;!ai0;ne;a0ykolayE;ki5riu8;ut9vC;amyanske,h1iev,r0yB;emenchuk,opyv1yvyy rih;ark9erson,mel0;nytskyy;ivka;astern european,et,urope0;! eastern,/simfero0;pol;nipro,onet0;sk;kasy,ni0;h0vtsi;iv;va", "Eastern European", "n", "eu3"], "Kirov": ["true¦europe,kirov,m0russian,st petersburg,volgograd time;oscow,sk", "Moscow", "n"], "Lisbon": ["true¦amadora,europe5lisbon,p2we0;st0t;! europe,ern european;ort0rt,t;o,ugal0;! mainland;! western", "Western European", "n", "eu1"], "London": ["true¦a0Ob0Ac07d03eXgThRiOj00kingston upon hull,lJmHnBoxSp9reading,s1w0yF;arwick0Aig00olverha7;heffield,o3t2u1w0;an4iH;ffolk,nderland,rr0IsYttL;afNoke on tre0C;meZuth0;a1end on 0;sea;mptG;ly0orts0restF;mouth;ew4o0;r0ttinghamT;th0wC; y0amptonR;orkV;castle upon tyne,port;ancheQi0;dlan4lton keynes;ancaRdn,e2i1o0ut5;nd4;ncolnPsb3verW;e0icesterJ;ds;psw1slingt0;on;ich;ampJert0;fordI;b2l1mt0reenwich mean M;! standard L;asgow,oucesterF;!-eF;dinburgh,s4urope0;!/0;belNguernsMisle_of_m1j0;ersL;an;sex;erby2o1u0;blin,dlH;rset;!sh5;a1ity of westmin0oventry,rawlE;ster;mbridge1rdiff;eAir9lack7r2st,uckingham0;sh0;ire;adford,e3i0;st4tish0;! 0;time;nt;po0;ol;kenhead,mingham;l1xl0;ey;fast;berdeen,rchway", "British", "n", "eu1"], "Luxembourg": ["true¦brussels,c3europe2lu0madrid,paris,romance;!x0;!embourg;! central;e0openhagen;ntral european,st,t", "Central European", "n", "eu2"], "Madrid": ["true¦aRbOcJeGfuenDgCjerez de la frontera,lBm8ovieFp6romance,s1terrassa,v0wemt,zaragoza;alladol9igo;a1evilla,pain0;! mainland;badell,n0; sebastiHt0; marti,ander,s montjuic;a0uente de vallecas;lma,mpIris;a0ostolLurcK;dr0laga;id;atiJeganI;asteiz/vitorGijon,ran1;carral el par1labr0;ada;do;ixample,lche,s1urope0;! centr2;!p;a3e1iudad line0openhagen;al;ntral europe0st,t;an;rabanchel,stello de la pla7;a0ilbao,russels,urgos;da0rce0sque;lo4; coru3l0;cala de henar1icante,mer0;ia;es;na", "Central European", "n", "eu2"], "Malta": ["true¦brussels,c3europe2m0paris,romance;a0lt,t;drid,lta;! central;e0openhagen;ntral european,st,t", "Central European", "n", "eu2"], "Minsk": ["true¦b4europe,h3m1russian,st petersburg,v0;iteb4olgograd time;ahily0in3osc0sk;ow;omyel,rodna;abruy0elarus,lr,rest,y;sk", "Moscow", "n"], "Monaco": ["true¦brussels,c3europe2m0paris,romance;adrid,c0onaco;!o;! central;e0openhagen;ntral european,st,t", "Central European", "n", "eu2"], "Moscow": ["true¦ar0Db0Ac07dzerzh06europe,fet,grozn05ivano04kYlipet0FmRnNorel,pKrFs8t6v2w-su,y0zelenograd;a0oshkar oW;roslavl,sene02;asyl'evsky ostrIelikiMladi2o0ykhino zhulebT;l0ronezh;gograd Pogda;kavkaz,m08;a0uQver;ganrog,mbD;a4ever3hakhty,molen06ochi,t0yktyvkR; 4a0;ryy osk0vrop0;ol;nSodvT;int 0rX;petersburg;ostov na donu,u1y0;azLbP;!s0;!sia0;!n;e1odolUsk0;ov;nza,trozavodS;a2izhn0ovorossiyR;ekamQi0;y novM;berezhnyye chelny,l'chik;a3dst,oscow1s0urmJ;d,k;! 0;time;khachka1r'0;ino;la;a2himki,ostroma,rasno0urG;d0gvargeisky;ar;l1z0;an;ininsk5uga;vo;yy;in8;entraln1he0;boksary,repovets;iy;el1ry0;an3;gorod;khangel'1mav0;ir;sk", "Moscow", "n"], "Oslo": ["true¦a6b5c3europe2madrid,oslo,paris,romance,s0;j0valbard and jan 6;!m;! central;e0openhag4;ntral european,st,t;erg2russels;rctic/longyearby1tlantic/jan_0;may0;en", "Central European", "n", "eu2"], "Paris": ["true¦bIcFeuropeEfrBl9m7n5paris,r3s0toulouH;aint 1t0; 0rasbourg;etienne;e0oman9;ims,nn1;ant0i7ormandy;es;a0et,ontpellier;drid,rsei1;e havre,i0yon;lle;!a0;!n0;ce;! central;e0openhagen;ntral european,rgy pontoi0st,t;se;ordeaux,russels", "Central European", "n", "eu2"], "Prague": ["true¦br6c4europe2madrid,ostr3p1romance,s0;k,lovakia,vk;aris,mt,rague;! central,/bratisl0;ava;e0openhagen;ntral european,st,t;no,ussels", "Central European", "n", "eu2"], "Riga": ["true¦e2kalt,l0riga;atvia,st,v0;!a;ast2e1urope0;! eastern;st,t; europe,ern european", "Eastern European", "n", "eu3"], "Rome": ["true¦bIcEeuropeCfloreBgenoa,mAnaples,p7r5sicily,t3v0;a0eroK;!t0;!ican city;aran4rieste,u0;rin,scany;mt,om0;a4e;a1ra0;to;dova,lermo,ris;adrid,essiAil6;nce;! central,/0;san_marino,vatic3;atan5e1o0;penhagen,rsica;ntral europe0st,t;an;ari,olog2r0;esc0ussels;ia;na", "Central European", "n", "eu2"], "Samara": ["true¦europe,izhevsk,s0togliatti on the volga;am0yzran;ara,t", "Samara", "n"], "Saratov": ["true¦balakovo,europe,izhevsk,sa0;m0ratov;ara,t", "Samara", "n"], "Sofia": ["true¦b2e0imt,plovdiv,sof4varna;astern european,et,urope0;! eastern;g2u0;lgar0rgas;ia;!r", "Eastern European", "n", "eu3"], "Stockholm": ["true¦brussels,c5europe4goeteborg,ma3paris,romance,s0;e1tockholm,we0;!d4;!t;drid,lmoe;! central;e1openhag0;en;ntral european,st,t", "Central European", "n", "eu2"], "Tallinn": ["true¦e0tallinn;astern european,e2st1urope0;! eastern;!onia;!t", "Eastern European", "n", "eu3"], "Tirane": ["true¦al4brussels,c2europe1madrid,paris,romance,tiran0;a,e;! central;e0openhagen;ntral european,st,t;!b0;!ania", "Central European", "n", "eu2"], "Ulyanovsk": ["true¦europe,m0russian,st petersburg,ulyanovsk,volgograd 2;oscow0sk;! 0;time", "Moscow", "n"], "Uzhgorod": ["true¦e0ruthenia,uzhgorod;astern european,et,urope0;! eastern", "Eastern European", "n", "eu3"], "Vienna": ["true¦a4brussels,c1donaustadt,europe0favorit2graz,linz,madrid,paris,romance,vienna;! central;e1openhag0;en;ntral european,st,t;t,u0;stria,t", "Central European", "n", "eu2"], "Vilnius": ["true¦e3k2l0vilnius;ithuania,t0;!u;aunas,laipeda;astern european,et,urope0;! eastern", "Eastern European", "n", "eu3"], "Volgograd": ["true¦europe,m2russian,st petersburg,vol0;gograd0t,zhskiy;! time;oscow,sk", "Moscow", "n"], "Warsaw": ["true¦bKcHeuropeGgCkAl8m7p4r3s2torun,w0zabrze;ars0rocl0;aw;osnowiec,zczec6;adIomanA;aris,l,o0raga poludnie;l0znD;!and;adrid,okot3;odz,ubl0;in;ato2iel3rak0;ow;d2li0;wi0;ce;ansk,ynia;! central;e0openhagen,zestochowa;ntral europe0st,t;an;i2russels,y0;dgoszcz,t0;om;alystok,elsko biala", "Central European", "n", "eu2"], "Zaporozhye": ["true¦e3luhansk2sevastopol,zapor0;izhia lugansk,ozh0;'ye,ye;! east;astern european,et,urope0;! eastern", "Eastern European", "n", "eu3"], "Zurich": ["true¦brussels,c4europe2geneve,li0madrid,paris,romance,swiss time,zurich;!e0;!chtenstein;! central,/0;busin1vaduz;e1openha0;gen;ntral european,st,t", "Central European", "n", "eu2"] }, "Indian": { "Chagos": ["true¦british indian ocean territory,c4i0;ndian1o0;!t;! 0;c0ocean;hagos", "Indian Ocean", "n"], "Christmas": ["true¦c0indian;hristmas1x0;!r,t;! island", "Christmas Island", "s"], "Cocos": ["true¦c0indian;c2ocos0;! island0;!s;!k,t", "Cocos Islands", "n"], "Kerguelen": ["true¦a5french southern2indian,kerguelen1tf0;!t;!st paul4;! 0;& antarctic time,and antarctic0;! lands;msterdam0tf; island", "French Southern & Antarctic", "s"], "Mahe": ["true¦indian,mahe,s0;c0eychelles,yc;!t", "Seychelles", "n"], "Maldives": ["true¦indian,m0;aldives,dv,v0;!t", "Maldives", "n"], "Mauritius": ["true¦indian,m0port louis;auritius,u0;!s,t", "Mauritius", "n"], "Reunion": ["true¦indian,r0;e0éu1;t,u0;nion", "Réunion", "s"] }, "Pacific": { "Apia": ["true¦apia,pacific,s2w0;est s1s0;!m,t;amoa", "West Samoa", "s"], "Auckland": ["true¦a2christchurch,manukau,n0pacific,wellington;ew zea2orth shore,z0;!dt,l,mt,st,t;ntarctica/1uck0;land;mcmurdo,south_pole", "New Zealand", "s", "nz"], "Bougainville": ["true¦bougainville,guinea2p0;a0gt;cific,pua new guinea;!n", "Papua New Guinea", "s"], "Chatham": ["true¦cha0nz-chat,pacific;dt,st,t0;!ham0;! 0;islands,time", "Chatham", "s", "chat"], "Chuuk": ["true¦chu2pacific0;!/0;truk,y2;t,uk0;!/truky0;ap", "Chuuk", "n"], "Easter": ["true¦chile/easter4e0pacific;as0mt;st,t0;!er0;! 0;island", "Easter Island", "s", "east"], "Efate": ["true¦efate,pacific,v0;anuatu,u0;!t", "Vanuatu", "n"], "Fakaofo": ["true¦fakaofo,pacific,t0;k0okelau;!l,t", "Tokelau", "n"], "Fiji": ["true¦f0pacific;iji,j0;!i,st,t", "Fiji", "s", "fiji"], "Funafuti": ["true¦funafuti,pacific,t0;uv1v0;!t;!alu", "Tuvalu", "n"], "Galapagos": ["true¦co1gal0pacific;apagos,t,ápagos islands;lombia,st,t", "Colombia", "n"], "Gambier": ["true¦gam0pacific;bier0t;! islands", "Gambier", "n"], "Guadalcanal": ["true¦guadalcanal,pacific,s0;b1lb,olomon0;! islands;!t", "Solomon Islands", "n"], "Guam": ["true¦ch5guam,m4northern mariana islands,p2west0; 0ern 0;pacific;acific0ort moresby;!/saipan;np,p;amorro,st", "Chamorro", "n"], "Honolulu": ["true¦aleutian4h1pacific0us/hawaii;!/johnston;a0onolulu,st;dt,st,t,waii0;! aleutian;! islands", "Hawaii-Aleutian", "n"], "Kanton": ["true¦kanton,p0;acific1ho0;enix islands,t;!/enderbury", "Phoenix Islands", "n"], "Kiritimati": ["true¦ki1lin0pacific;e islands,t;!r0;!i0;bati,timati0;! island", "Line Islands", "n"], "Kosrae": ["true¦kos0pacific;rae,t", "Kosrae", "n"], "Kwajalein": ["true¦kwajalein,m0pacific;arshall islands,ht", "Marshall Islands", "n"], "Majuro": ["true¦m0pacific;a1h0;!l,t;juro,rshall islands", "Marshall Islands", "n"], "Marquesas": ["true¦mar0pacific;quesas0t;! islands", "Marquesas", "n"], "Nauru": ["true¦n0pacific;auru,r0;!t,u", "Nauru", "n"], "Niue": ["true¦n0pacific;iu1u0;!t;!e", "Niue", "n"], "Norfolk": ["true¦n0pacific;f1orfolk0;! island;!dt,k,t", "Norfolk Island", "n", "aus"], "Noumea": ["true¦n0pacific;c0ew caledonia,oumea;!l,t", "New Caledonia", "n"], "Pago_Pago": ["true¦m5pa1s0us/sa4;a3st;cific0go_pago;!/0;m1sa0;moa;idway", "Samoa", "n"], "Palau": ["true¦p0;a1lw,w0;!t;cific,lau", "Palau", "n"], "Pitcairn": ["true¦p0;acific,cn,itcairn,n,st", "Pitcairn", "n"], "Pohnpei": ["true¦french polynesia,p0;acific1f,o0yf;hnpei0nt;!/ponape", "Ponape", "n"], "Port_Moresby": ["true¦antarctica/dumontd6dumont-d'6guinea5p0;a3g2ng,ort0; 0_0;moresby;!t;cific,pua new guinea;!n;urville", "Papua New Guinea", "s"], "Rarotonga": ["true¦c0pacific,rarotonga;k2o0;k,ok0;! islands;!t", "Cook Islands", "n"], "Tahiti": ["true¦pacific,society islands,tah0;iti,t", "Tahiti", "n"], "Tarawa": ["true¦gil0pacific,tarawa;bert islands,t", "Gilbert Islands", "n"], "Tongatapu": ["true¦nuku'alofa,pacific,to0;!n0t;!ga0;!tapu", "Tonga", "s"], "Wake": ["true¦pacific,u2wak0;e0t;! island;m0s minor outlying islands;!i", "Wake Island", "n"], "Wallis": ["true¦pacific,w0;allis1f0lf;!t;! 0;&0and0; futuna", "Wallis & Futuna", "n"] } };
var misc = {
  "gmt+0": ["Etc/GMT"],
  "gmt-0": ["Etc/GMT"],
  gmt0: ["Etc/GMT"],
  "etc/gmt+0": ["Etc/GMT"],
  "etc/gmt-0": ["Etc/GMT"],
  "etc/gmt0": ["Etc/GMT"],
  "msk+00": ["Europe/Moscow"],
  "msk-01 - kaliningrad": ["Europe/Kaliningrad"],
  "msk+00 - moscow area": ["Europe/Moscow"],
  "msk+00 - crimea": ["Europe/Kiev"],
  "msk+00 - volgograd": ["Europe/Volgograd"],
  "msk+00 - kirov": ["Europe/Kirov"],
  "msk+01 - astrakhan": ["Europe/Astrakhan"],
  "msk+01 - saratov": ["Europe/Saratov"],
  "msk+01 - ulyanovsk": ["Europe/Ulyanovsk"],
  "msk+01 - samaraudmurtia": ["Europe/Samara"],
  "msk+02 - urals": ["Asia/Yekaterinburg"],
  "msk+03": ["Asia/Omsk"],
  "msk+04 - novosibirsk": ["Asia/Novosibirsk"],
  "msk+04 - altai": ["Asia/Barnaul"],
  "msk+04": ["Asia/Tomsk"],
  "msk+04 - kemerovo": ["Asia/Novokuznetsk"],
  "msk+04 - krasnoyarsk area": ["Asia/Krasnoyarsk"],
  "msk+05 - irkutskburyatia": ["Asia/Irkutsk"],
  "msk+06 - zabaykalsky": ["Asia/Chita"],
  "msk+06 - lena river": ["Asia/Yakutsk"],
  "msk+06 - tomponskyust-maysky": ["Asia/Khandyga"],
  "msk+07 - amur river": ["Asia/Vladivostok"],
  "msk+07 - oymyakonsky": ["Asia/Ust-Nera"],
  "msk+08 - magadan": ["Asia/Magadan"],
  "msk+08 - sakhalin island": ["Asia/Sakhalin"],
  "msk+08 - sakha (e) north kuril is": ["Asia/Srednekolymsk"],
  "msk+09": ["Asia/Kamchatka"],
  "msk+09 - bering sea": ["Asia/Anadyr"],
  "russia time zone 11": ["Asia/Anadyr"],
  "russia time zone 10": ["Asia/Srednekolymsk"],
  "russia time zone 3": ["Europe/Samara"],
  "coordinated universal time-09": ["Pacific/Gambier"],
  "utc-09": ["Pacific/Gambier"],
  "coordinated universal time-08": ["Pacific/Pitcairn"]
};
var addEtc = function(zones2) {
  for (let i = 0; i <= 14; i += 1) {
    zones2[`Etc/GMT-${i}`] = {
      offset: i,
      meta: `gmt-${i}`,
      hem: "n"
      //sorry
    };
    zones2[`Etc/GMT+${i}`] = {
      offset: i * -1,
      meta: `gmt+${i}`,
      hem: "n"
      //sorry
    };
  }
};
var addUTC = addEtc;
var zones = {};
var lexicon = Object.assign({}, misc);
Object.keys(pcked).forEach((top) => {
  Object.keys(pcked[top]).forEach((name) => {
    let [words, meta, hem, dst] = pcked[top][name];
    let id = `${top}/${name}`;
    zones[id] = { meta, hem };
    let keys = Object.keys(unpack$1(words));
    keys.forEach((k) => {
      lexicon[k] = lexicon[k] || [];
      lexicon[k].push(id);
      if (k.match(/\//)) {
        let arr = k.split(/\//);
        let last = arr[arr.length - 1].toLowerCase();
        lexicon[last] = lexicon[last] || [];
        lexicon[last].push(id);
      }
    });
    zones[id].wordCount = keys.length;
    if (dst) {
      zones[id].dst = dstPatterns[dst].split(/\|/);
    }
  });
});
addUTC(zones);
var unique = function(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i += 1) {
    obj[arr[i]] = true;
  }
  return Object.keys(obj);
};
Object.keys(lexicon).forEach((k) => {
  if (lexicon[k].length > 1) {
    lexicon[k] = unique(lexicon[k]);
    lexicon[k] = lexicon[k].sort((a, b) => {
      if (zones[a].wordCount > zones[b].wordCount) {
        return -1;
      } else if (zones[a].wordCount < zones[b].wordCount) {
        return 1;
      }
      return 0;
    });
  }
});
var one = (str) => {
  str = str.toLowerCase();
  str = str.replace(/^in /g, "");
  str = str.replace(/ time/g, "");
  str = str.replace(/ (standard|daylight|summer)/g, "");
  str = str.replace(/ - .*/g, "");
  str = str.replace(/, .*/g, "");
  str = str.replace(/\./g, "");
  return str.trim();
};
var two = function(str) {
  str = str.replace(/\b(east|west|north|south)ern/g, "$1");
  str = str.replace(/\b(africa|america|australia)n/g, "$1");
  str = str.replace(/\beuropean/g, "europe");
  str = str.replace(/\islands/g, "island");
  str = str.replace(/.*\//g, "");
  return str.trim();
};
var three = function(str) {
  str = str.replace(/\(.*\)/, "");
  str = str.replace(/  +/g, " ");
  return str.trim();
};
var normalize4 = { one, two, three };
var isOffset2 = /^([-+]?[0-9]+)h(r?s)?$/i;
var isNumber2 = /^([-+]?[0-9]+)$/;
var utcOffset2 = /utc([\-+]?[0-9]+)$/i;
var gmtOffset2 = /gmt([\-+]?[0-9]+)$/i;
var toIana2 = function(num) {
  num = Number(num);
  if (num > -13 && num < 13) {
    num = num * -1;
    num = (num > 0 ? "+" : "") + num;
    return "Etc/GMT" + num;
  }
  return null;
};
var parseOffset3 = function(tz) {
  let m = tz.match(isOffset2);
  if (m !== null) {
    return toIana2(m[1]);
  }
  m = tz.match(utcOffset2);
  if (m !== null) {
    return toIana2(m[1]);
  }
  m = tz.match(gmtOffset2);
  if (m !== null) {
    let num = Number(m[1]) * -1;
    return toIana2(num);
  }
  m = tz.match(isNumber2);
  if (m !== null) {
    return toIana2(m[1]);
  }
  return null;
};
var parseOffset$1 = parseOffset3;
var find = function(str) {
  if (zones.hasOwnProperty(str)) {
    return str;
  }
  if (lexicon.hasOwnProperty(str)) {
    return lexicon[str];
  }
  if (/[0-9]/.test(str)) {
    let etc = parseOffset$1(str);
    if (etc) {
      return [etc];
    }
  }
  str = normalize4.one(str);
  if (lexicon.hasOwnProperty(str)) {
    return lexicon[str];
  }
  str = normalize4.two(str);
  if (lexicon.hasOwnProperty(str)) {
    return lexicon[str];
  }
  str = normalize4.three(str);
  if (lexicon.hasOwnProperty(str)) {
    return lexicon[str];
  }
  return null;
};
var find$1 = find;
var metas = {
  "India": {
    "std": ["IST", 5.5],
    "long": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi"
  },
  "China": {
    "std": ["CST", 8],
    "long": "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi"
  },
  "Central European": {
    "std": ["CET", 1],
    "dst": ["CEST", 2, "Central European Summer Time"],
    "long": "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris"
  },
  "Atlantic": {
    "dupe": true,
    "std": ["AST", -4],
    "dst": ["ADT", -3],
    "long": "(UTC-04:00) Atlantic Time (Canada)"
  },
  "Greenwich Mean": {
    "std": ["GMT", 0],
    "long": "(UTC) Coordinated Universal Time"
  },
  "Eastern European": {
    "std": ["EET", 2],
    "dst": [
      "EEST",
      3,
      "Eastern European Summer Time"
    ]
  },
  "Central": {
    "dupe": true,
    "std": ["CST", -6],
    "dst": ["CDT", -5],
    "long": "(UTC-06:00) Central Time (US & Canada)"
  },
  "Eastern": {
    "std": ["EST", -5],
    "dst": ["EDT", -4],
    "long": "(UTC-05:00) Eastern Time (US & Canada)"
  },
  "Argentina": {
    "std": ["ART", -3],
    "long": "(UTC-03:00) City of Buenos Aires"
  },
  "East Africa": {
    "std": ["EAT", 3],
    "long": "(UTC+03:00) Nairobi"
  },
  "West Africa": {
    "std": ["WAT", 1],
    "long": "(UTC+01:00) West Central Africa"
  },
  "Moscow": {
    "std": ["MSK", 3],
    "long": "(UTC+03:00) Moscow, St. Petersburg"
  },
  "Brasilia": {
    "std": ["BRT", -3],
    "long": "(UTC-03:00) Brasilia"
  },
  "Mountain": {
    "std": ["MST", -7],
    "dst": ["MDT", -6],
    "long": "(UTC-07:00) Mountain Time (US & Canada)"
  },
  "Central Africa": {
    "std": ["CAT", 2],
    "long": "(UTC+02:00) Windhoek"
  },
  "Arabian": {
    "std": ["AST", 3],
    "long": "(UTC+03:00) Kuwait, Riyadh"
  },
  "Alaska": {
    "std": ["AKST", -9],
    "dst": ["AKDT", -8],
    "long": "(UTC-09:00) Alaska"
  },
  "British": {
    "std": ["GMT", 0],
    "dst": ["BST", 1, "British Summer Time"],
    "long": "(UTC+00:00) Dublin, Edinburgh, Lisbon, London"
  },
  "Irish": {
    "std": ["GMT", 0],
    "dst": ["IST", 1, "Irish Standard Time"]
  },
  "West Kazakhstan": {
    "std": ["ALMT", 5],
    "long": "(UTC+05:00) Ashgabat, Tashkent"
  },
  "Eastern Australia": {
    "std": ["AEST", 10],
    "dst": ["AEDT", 11, "Australian Eastern Daylight Time"],
    "long": "(UTC+10:00) Canberra, Melbourne, Sydney"
  },
  "Western European": {
    "std": ["WET", 0],
    "dst": ["WEST", 1, "Western European Summer Time"]
  },
  "Indochina": {
    "std": ["ICT", 7],
    "long": "(UTC+07:00) Bangkok, Hanoi, Jakarta"
  },
  "Central Mexico": {
    "long": "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
    "std": ["CST", -6],
    "dst": [
      "CDT",
      -5,
      "Central Daylight Time"
    ]
  },
  "South Africa": {
    "std": ["SAST", 2],
    "long": "(UTC+02:00) Harare, Pretoria"
  },
  "Krasnoyarsk": {
    "std": ["KRAT", 7],
    "long": "(UTC+07:00) Krasnoyarsk"
  },
  "Yakutsk": {
    "std": ["YAKT", 9],
    "long": "(UTC+09:00) Yakutsk"
  },
  "Pacific": {
    "std": ["PST", -8],
    "dst": ["PDT", -7],
    "long": "(UTC-08:00) Pacific Time (US & Canada)"
  },
  "Amazon": {
    "std": ["AMT", -4],
    "long": "(UTC-04:00) Cuiaba"
  },
  "Morocco Standard": {
    "offset": 1,
    "long": "(UTC+00:00) Casablanca",
    "std": ["WET", 1],
    "dst": [
      "WEST",
      0,
      "Western European Summer Time"
    ]
  },
  "Gulf": {
    "std": ["GST", 4],
    "long": "(UTC+04:00) Abu Dhabi, Muscat"
  },
  "Samara": {
    "std": ["SAMT", 4],
    "long": "(UTC+04:00) Izhevsk, Samara"
  },
  "Uzbekistan": {
    "std": ["UZT", 5]
  },
  "East Kazakhstan": {
    "std": ["ALMT", 6],
    "long": "(UTC+06:00) Astana"
  },
  "Omsk": {
    "std": ["OMST", 6],
    "long": "(UTC+06:00) Omsk"
  },
  "Western Indonesia": {
    "std": ["WIB", 7]
  },
  "Ulaanbaatar": {
    "std": ["ULAT", 8],
    "long": "(UTC+08:00) Ulaanbaatar"
  },
  "Malaysia": {
    "std": ["MYT", 8]
  },
  "Korean": {
    "std": ["KST", 9],
    "long": "(UTC+09:00) Seoul"
  },
  "Central Australia": {
    "std": ["ACST", 9.5],
    "dst": ["ACDT", 10.5, "Australian Central Daylight Time"],
    "long": "(UTC+09:30) Adelaide"
  },
  "Brisbane": {
    "dupe": true,
    "std": ["AEST", 10]
  },
  "Vladivostok": {
    "std": ["VLAT", 10],
    "long": "(UTC+10:00) Vladivostok"
  },
  "Chamorro": {
    "std": ["ChST", 10],
    "long": "(UTC+10:00) Guam, Port Moresby"
  },
  "Papua New Guinea": {
    "std": ["PGT", 11]
  },
  "New Zealand": {
    "std": ["NZST", 12],
    "dst": ["NZDT", 13],
    "long": "(UTC+12:00) Auckland, Wellington"
  },
  "Marshall Islands": {
    "std": ["MHT", 12]
  },
  "Samoa": {
    "std": ["SST", -11],
    "long": "(UTC+13:00) Samoa"
  },
  "Hawaii-Aleutian": {
    "std": ["HAST", -9],
    "dst": ["HADT", -8],
    "long": "(UTC-09:00) Aleutian Islands"
  },
  "Mexican Pacific": {
    "std": ["HNPMX", -7],
    "dst": ["HEPMX", -6],
    "long": "(UTC-07:00) Chihuahua, La Paz, Mazatlan"
  },
  "Colombia": {
    "std": ["COT", -5]
  },
  "Acre": {
    "std": ["ACT", -5]
  },
  "Chile": {
    "dupe": true,
    "std": ["CLT", -3],
    "dst": [
      "CLST",
      -4,
      "Chile Summer Time"
    ]
  },
  "Troll": {
    "dupe": true,
    "std": ["GMT", 0]
  },
  "East Greenland": {
    "std": ["HNEG", 0],
    "dst": [
      "HEEG",
      1,
      "East Greenland Summer Time"
    ]
  },
  "Israel": {
    "std": ["IST", 2],
    "dst": ["IDT", 3],
    "long": "(UTC+02:00) Jerusalem"
  },
  "Syowa": {
    "std": ["SYOT", 3]
  },
  "Turkey": {
    "std": ["TRT", 3],
    "long": "(UTC+03:00) Istanbul"
  },
  "Iran": {
    "std": ["IRST", 3.5],
    "dst": ["IRDT", 4.5],
    "long": "(UTC+03:30) Tehran"
  },
  "Azerbaijan": {
    "std": ["AZT", 4],
    "long": "(UTC+04:00) Baku"
  },
  "Georgia": {
    "std": ["GET", 4],
    "long": "(UTC+04:00) Tbilisi"
  },
  "Armenia": {
    "std": ["AMT", 4],
    "long": "(UTC+04:00) Yerevan"
  },
  "Seychelles": {
    "std": ["SCT", 4]
  },
  "Mauritius": {
    "std": ["MUT", 4],
    "long": "(UTC+04:00) Port Louis"
  },
  "Réunion": {
    "std": ["RET", 4]
  },
  "Afghanistan": {
    "std": ["AFT", 4.5],
    "long": "(UTC+04:30) Kabul"
  },
  "Mawson": {
    "std": ["MAWT", 5]
  },
  "Turkmenistan": {
    "std": ["TMT", 5]
  },
  "Tajikistan": {
    "std": ["TJT", 5]
  },
  "Pakistan": {
    "std": ["PKT", 5],
    "long": "(UTC+05:00) Islamabad, Karachi"
  },
  "Yekaterinburg": {
    "std": ["YEKT", 5],
    "long": "(UTC+05:00) Ekaterinburg"
  },
  "French Southern & Antarctic": {
    "std": ["TFT", 5]
  },
  "Maldives": {
    "std": ["MVT", 5]
  },
  "Nepal": {
    "std": ["NPT", 5.75],
    "long": "(UTC+05:45) Kathmandu"
  },
  "Vostok": {
    "std": ["MSK+4", 6]
  },
  "Kyrgyzstan": {
    "std": ["KGT", 6]
  },
  "Bangladesh": {
    "std": ["BST", 6],
    "long": "(UTC+06:00) Dhaka"
  },
  "Bhutan": {
    "std": ["BT", 6]
  },
  "Indian Ocean": {
    "std": ["IOT", 6]
  },
  "Myanmar": {
    "std": ["MMT", 6.5],
    "long": "(UTC+06:30) Yangon (Rangoon)"
  },
  "Cocos Islands": {
    "std": ["CCT", 6.5]
  },
  "Davis": {
    "std": ["DAVT", 7]
  },
  "Hovd": {
    "std": ["HOVT", 7],
    "long": "(UTC+07:00) Hovd"
  },
  "Novosibirsk": {
    "std": ["NOVT", 7],
    "long": "(UTC+07:00) Novosibirsk"
  },
  "Christmas Island": {
    "std": ["CXT", 7]
  },
  "Brunei Darussalam": {
    "std": ["BNT", 8]
  },
  "Hong Kong": {
    "std": ["HKT", 8]
  },
  "Irkutsk": {
    "std": ["IRKT", 8],
    "long": "(UTC+08:00) Irkutsk"
  },
  "Central Indonesia": {
    "std": ["WITA", 8]
  },
  "Philippine": {
    "std": ["PHST", 8]
  },
  "Singapore": {
    "std": ["SGT", 8],
    "long": "(UTC+08:00) Kuala Lumpur, Singapore"
  },
  "Taipei": {
    "std": ["CST", 8],
    "long": "(UTC+08:00) Taipei"
  },
  "Western Australia": {
    "std": ["AWST", 8],
    "long": "(UTC+08:00) Perth"
  },
  "Australian Central Western": {
    "std": ["ACWST", 8.75],
    "long": "(UTC+08:45) Eucla"
  },
  "East Timor": {
    "std": ["TLT", 9]
  },
  "Eastern Indonesia": {
    "std": ["WIT", 9]
  },
  "Japan": {
    "std": ["JST", 9],
    "long": "(UTC+09:00) Osaka, Sapporo, Tokyo"
  },
  "Palau": {
    "std": ["PWT", 9]
  },
  "Australian Central": {
    "dupe": true,
    "std": ["ACST", 9.5]
  },
  "Dumont-d’Urville": {
    "std": ["CLST", 10]
  },
  "Chuuk": {
    "std": ["CHUT", 10]
  },
  "Lord Howe": {
    "std": ["LHST", 10.5],
    "dst": ["LHDT", 11.5],
    "long": "(UTC+10:30) Lord Howe Island"
  },
  "Casey": {
    "std": ["CAST", 11],
    "dst": [
      "CAST",
      8,
      "Casey Summer Time"
    ]
  },
  "Magadan": {
    "std": ["MAGT", 11],
    "long": "(UTC+11:00) Magadan"
  },
  "Sakhalin": {
    "std": ["SAKT", 11],
    "long": "(UTC+11:00) Sakhalin"
  },
  "Srednekolymsk": {
    "std": ["SRET", 11],
    "long": "(UTC+11:00) Chokurdakh"
  },
  "Vanuatu": {
    "std": ["VUT", 11]
  },
  "Solomon Islands": {
    "std": ["SBT", 11]
  },
  "Kosrae": {
    "std": ["KOST", 11]
  },
  "New Caledonia": {
    "std": ["NCT", 11]
  },
  "Ponape": {
    "std": ["PONT", 11]
  },
  "Anadyr": {
    "std": ["ANAT", 12],
    "long": "(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky"
  },
  "Petropavlovsk-Kamchatski": {
    "std": ["PETT", 12],
    "long": "(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky"
  },
  "Fiji": {
    "std": ["FJT", 12],
    "dst": ["FJT", 13, "Fiji Summer Time"],
    "long": "(UTC+12:00) Fiji"
  },
  "Tuvalu": {
    "std": ["TVT", 12]
  },
  "Nauru": {
    "std": ["NRT", 12]
  },
  "Norfolk Island": {
    "std": ["NFT", 12],
    "dst": ["NFDT", 11],
    "long": "(UTC+11:00) Norfolk Island"
  },
  "Gilbert Islands": {
    "std": ["GILT", 12]
  },
  "Wake Island": {
    "std": ["WAKT", 12]
  },
  "Wallis & Futuna": {
    "std": ["WFT", 12]
  },
  "Chatham": {
    "std": ["CHAST", 12.75],
    "dst": ["CHADT", 13.75],
    "long": "(UTC+12:45) Chatham Islands"
  },
  "West Samoa": {
    "std": ["WST", 13],
    "dst": [
      "WST",
      14,
      "West Samoa Summer Time"
    ]
  },
  "Phoenix Islands": {
    "std": ["PHOT", 13]
  },
  "Tokelau": {
    "std": ["TKT", 13]
  },
  "Tonga": {
    "std": ["TOT", 13],
    "long": "(UTC+13:00) Nuku'alofa"
  },
  "Line Islands": {
    "std": ["LINT", 14],
    "long": "(UTC+14:00) Kiritimati Island"
  },
  "Niue": {
    "std": ["NUT", -11]
  },
  "Cook Islands": {
    "std": ["CKT", -10]
  },
  "Tahiti": {
    "std": ["TAHT", -10]
  },
  "Marquesas": {
    "std": ["MART", -9.5],
    "long": "(UTC-09:30) Marquesas Islands"
  },
  "Aleutian Standard": {
    "iso": "(UTC-10:00) Aleutian Islands",
    "std": ["HST", -10],
    "dst": [
      "HDT",
      -9,
      "Hawaii Daylight Time"
    ]
  },
  "Gambier": {
    "std": ["GAMT", -9],
    "long": "(UTC-09:00) Coordinated Universal Time-09"
  },
  "Pitcairn": {
    "std": ["PST", -8],
    "long": "(UTC-08:00) Coordinated Universal Time-08"
  },
  "Northwest Mexico": {
    "std": ["HNNOMX", -6],
    "dst": ["HENOMX", -5],
    "long": "(UTC-08:00) Baja California"
  },
  "Easter Island": {
    "std": ["EAST", -6],
    "dst": ["EASST", -5, "Easter Island Summer Time"],
    "long": "(UTC-06:00) Easter Island"
  },
  "Ecuador": {
    "std": ["ECT", -5]
  },
  "Cuba": {
    "std": ["HNCU", -5],
    "dst": ["HECU", -4],
    "long": "(UTC-05:00) Havana"
  },
  "Peru": {
    "std": ["PET", -5]
  },
  "Paraguay": {
    "std": ["PYT", -4],
    "dst": ["PYST", -3, "Paraguay Summer Time"],
    "long": "(UTC-04:00) Asuncion"
  },
  "Venezuela": {
    "std": ["VET", -4],
    "long": "(UTC-04:00) Caracas"
  },
  "Guyana": {
    "std": ["GYT", -4]
  },
  "Bolivia": {
    "std": ["BOT", -4]
  },
  "Newfoundland": {
    "std": ["HNTN", -3.5],
    "dst": ["HETN", -2.5],
    "long": "(UTC-03:30) Newfoundland"
  },
  "French Guiana": {
    "std": ["GFT", -3]
  },
  "West Greenland": {
    "std": ["WGT", -3],
    "dst": ["WGST", -2, "West Greenland Summer Time"],
    "long": "(UTC-03:00) Greenland"
  },
  "St. Pierre & Miquelon": {
    "std": ["HNPM", -3],
    "dst": ["HEPM", -2],
    "long": "(UTC-03:00) Saint Pierre and Miquelon"
  },
  "Uruguay": {
    "std": ["UYT", -3],
    "long": "(UTC-03:00) Montevideo"
  },
  "Suriname": {
    "std": ["SRT", -3]
  },
  "Falkland Islands": {
    "std": ["FKST", -3]
  },
  "Fernando de Noronha": {
    "std": ["FNT", -2]
  },
  "South Georgia": {
    "std": ["GST", -2]
  },
  "Azores": {
    "std": ["AZOT", -1],
    "dst": ["AZOST", 0, "Azores Summer Time"],
    "long": "(UTC-01:00) Azores"
  },
  "Cape Verde": {
    "std": ["CVT", -1],
    "long": "(UTC-01:00) Cabo Verde Is."
  }
};
for (let i = 0; i <= 14; i += 1) {
  metas[`gmt-${i}`] = {
    name: `Etc/GMT-${i}`,
    std: [`GMT-${i}`, i],
    long: `(UTC-${i}:00) Coordinated Universal Time`
  };
  metas[`gmt+${i}`] = {
    name: `Etc/GMT+${i}`,
    std: [`GMT+${i}`, -i],
    long: `(UTC+${i}:00) Coordinated Universal Time`
  };
}
var display = function(id) {
  if (!id) {
    return null;
  }
  if (!zones[id]) {
    console.error(`missing id ${id}`);
    return null;
  }
  let metaName = zones[id].meta;
  if (!metas[metaName]) {
    console.error(`missing tz-meta ${metaName}`);
  }
  let meta = metas[metaName] || {};
  let dst = null;
  if (zones[id].dst && meta.dst) {
    let [abbr2, offset3, name2] = meta.dst;
    name2 = name2 || `${metaName} Daylight Time`;
    let [start, end] = zones[id].dst || [];
    dst = { abbr: abbr2, offset: offset3, name: name2, start, end };
  }
  let [abbr, offset2] = meta.std;
  let name = meta.name || `${metaName} Time`;
  let long3 = meta.long || `(UTC+${offset2}:00) ${name}`;
  return {
    name,
    iana: id,
    standard: { abbr, offset: offset2, name: meta.name || `${metaName} Standard Time` },
    daylight: dst || null,
    long: long3
  };
};
var display$1 = display;
var version = "1.5.2";
var soft = function(str) {
  let ids = find$1(str) || [];
  if (typeof ids === "string") {
    ids = [ids];
  }
  ids = ids.map((id) => display$1(id));
  return ids;
};
soft.prototype.version = version;

// node_modules/react-timezone-select/dist/index.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var allTimezones = {
  "Pacific/Midway": "Midway Island, Samoa",
  "Pacific/Honolulu": "Hawaii",
  "America/Juneau": "Alaska",
  "America/Boise": "Mountain Time",
  "America/Dawson": "Dawson, Yukon",
  "America/Chihuahua": "Chihuahua, La Paz, Mazatlan",
  "America/Phoenix": "Arizona",
  "America/Chicago": "Central Time",
  "America/Regina": "Saskatchewan",
  "America/Mexico_City": "Guadalajara, Mexico City, Monterrey",
  "America/Belize": "Central America",
  "America/Detroit": "Eastern Time",
  "America/Bogota": "Bogota, Lima, Quito",
  "America/Caracas": "Caracas, La Paz",
  "America/Santiago": "Santiago",
  "America/St_Johns": "Newfoundland and Labrador",
  "America/Sao_Paulo": "Brasilia",
  "America/Tijuana": "Tijuana",
  "America/Montevideo": "Montevideo",
  "America/Argentina/Buenos_Aires": "Buenos Aires, Georgetown",
  "America/Godthab": "Greenland",
  "America/Los_Angeles": "Pacific Time",
  "Atlantic/Azores": "Azores",
  "Atlantic/Cape_Verde": "Cape Verde Islands",
  GMT: "UTC",
  "Europe/London": "Edinburgh, London",
  "Europe/Dublin": "Dublin",
  "Europe/Lisbon": "Lisbon",
  "Africa/Casablanca": "Casablanca, Monrovia",
  "Atlantic/Canary": "Canary Islands",
  "Europe/Belgrade": "Belgrade, Bratislava, Budapest, Ljubljana, Prague",
  "Europe/Sarajevo": "Sarajevo, Skopje, Warsaw, Zagreb",
  "Europe/Brussels": "Brussels, Copenhagen, Madrid, Paris",
  "Europe/Amsterdam": "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
  "Africa/Algiers": "West Central Africa",
  "Europe/Bucharest": "Bucharest",
  "Africa/Cairo": "Cairo",
  "Europe/Helsinki": "Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
  "Europe/Athens": "Athens",
  "Asia/Jerusalem": "Jerusalem",
  "Africa/Harare": "Harare, Pretoria",
  "Europe/Moscow": "Istanbul, Minsk, Moscow, St. Petersburg, Volgograd",
  "Asia/Kuwait": "Kuwait, Riyadh",
  "Africa/Nairobi": "Nairobi",
  "Asia/Baghdad": "Baghdad",
  "Asia/Tehran": "Tehran",
  "Asia/Dubai": "Abu Dhabi, Muscat",
  "Asia/Baku": "Baku, Tbilisi, Yerevan",
  "Asia/Kabul": "Kabul",
  "Asia/Yekaterinburg": "Ekaterinburg",
  "Asia/Karachi": "Islamabad, Karachi, Tashkent",
  "Asia/Kolkata": "Chennai, Kolkata, Mumbai, New Delhi",
  "Asia/Kathmandu": "Kathmandu",
  "Asia/Dhaka": "Astana, Dhaka",
  "Asia/Colombo": "Sri Jayawardenepura",
  "Asia/Almaty": "Almaty, Novosibirsk",
  "Asia/Rangoon": "Yangon Rangoon",
  "Asia/Bangkok": "Bangkok, Hanoi, Jakarta",
  "Asia/Krasnoyarsk": "Krasnoyarsk",
  "Asia/Shanghai": "Beijing, Chongqing, Hong Kong SAR, Urumqi",
  "Asia/Kuala_Lumpur": "Kuala Lumpur, Singapore",
  "Asia/Taipei": "Taipei",
  "Australia/Perth": "Perth",
  "Asia/Irkutsk": "Irkutsk, Ulaanbaatar",
  "Asia/Seoul": "Seoul",
  "Asia/Tokyo": "Osaka, Sapporo, Tokyo",
  "Asia/Yakutsk": "Yakutsk",
  "Australia/Darwin": "Darwin",
  "Australia/Adelaide": "Adelaide",
  "Australia/Sydney": "Canberra, Melbourne, Sydney",
  "Australia/Brisbane": "Brisbane",
  "Australia/Hobart": "Hobart",
  "Asia/Vladivostok": "Vladivostok",
  "Pacific/Guam": "Guam, Port Moresby",
  "Asia/Magadan": "Magadan, Solomon Islands, New Caledonia",
  "Asia/Kamchatka": "Kamchatka, Marshall Islands",
  "Pacific/Fiji": "Fiji Islands",
  "Pacific/Auckland": "Auckland, Wellington",
  "Pacific/Tongatapu": "Nuku'alofa"
};
var timezone_list_default = allTimezones;
function useTimezoneSelect({
  timezones: timezones2 = timezone_list_default,
  labelStyle = "original",
  displayValue = "GMT",
  currentDatetime
}) {
  const options2 = (0, import_react10.useMemo)(() => {
    return Object.entries(timezones2).map((zone) => {
      var _a, _b, _c, _d;
      try {
        const now2 = (currentDatetime ? src_default(currentDatetime) : src_default.now()).goto(zone[0]);
        const isDstString = now2.isDST() ? "daylight" : "standard";
        const tz = now2.timezone();
        const tzStrings = soft(zone[0]);
        const abbr = (_b = (_a = tzStrings == null ? void 0 : tzStrings[0]) == null ? void 0 : _a[isDstString]) == null ? void 0 : _b.abbr;
        const altName = (_d = (_c = tzStrings == null ? void 0 : tzStrings[0]) == null ? void 0 : _c[isDstString]) == null ? void 0 : _d.name;
        const min2 = tz.current.offset * 60;
        const hr = `${min2 / 60 ^ 0}:${min2 % 60 === 0 ? "00" : Math.abs(min2 % 60)}`;
        const prefix3 = `(${displayValue}${hr.includes("-") ? hr : `+${hr}`}) ${zone[1]}`;
        let label = "";
        switch (labelStyle) {
          case "original":
            label = prefix3;
            break;
          case "altName":
            label = `${prefix3} ${altName ? `(${altName})` : ""}`;
            break;
          case "abbrev":
            label = `${prefix3} (${abbr})`;
            break;
          case "offsetHidden":
            label = `${prefix3.replace(/^\(.*?\)\s*/, "")}`;
            break;
          default:
            label = `${prefix3}`;
        }
        return {
          value: tz.name,
          label,
          offset: tz.current.offset,
          abbrev: abbr,
          altName
        };
      } catch (e) {
        return null;
      }
    }).filter(Boolean).sort((a, b) => a.offset - b.offset);
  }, [labelStyle, timezones2]);
  const findFuzzyTz = (zone) => {
    let currentTime;
    try {
      currentTime = (currentDatetime ? src_default(currentDatetime) : src_default.now()).goto(zone);
    } catch (err) {
      currentTime = (currentDatetime ? src_default(currentDatetime) : src_default.now()).goto("GMT");
    }
    return options2.filter((tz) => tz.offset === currentTime.timezone().current.offset).map((tz) => {
      let score = 0;
      if (currentTime.timezones[tz.value.toLowerCase()] && !!currentTime.timezones[tz.value.toLowerCase()].dst === currentTime.timezone().hasDst) {
        if (tz.value.toLowerCase().indexOf(currentTime.tz.substring(currentTime.tz.indexOf("/") + 1)) !== -1) {
          score += 8;
        }
        if (tz.label.toLowerCase().indexOf(currentTime.tz.substring(currentTime.tz.indexOf("/") + 1)) !== -1) {
          score += 4;
        }
        if (tz.value.toLowerCase().indexOf(currentTime.tz.substring(0, currentTime.tz.indexOf("/"))) !== -1) {
          score += 2;
        }
        score += 1;
      } else if (tz.value === "GMT") {
        score += 1;
      }
      return { tz, score };
    }).sort((a, b) => b.score - a.score)[0].tz;
  };
  const parseTimezone = (zone) => {
    if (typeof zone === "object" && zone.value && zone.label)
      return zone;
    if (typeof zone === "string") {
      return options2.find((tz) => tz.value === zone) || zone.indexOf("/") !== -1 && findFuzzyTz(zone);
    } else if (zone.value && !zone.label) {
      return options2.find((tz) => tz.value === zone.value);
    }
  };
  return { options: options2, parseTimezone };
}
var TimezoneSelect = (_a) => {
  var _b = _a, {
    value,
    onBlur,
    onChange: onChange2,
    labelStyle,
    displayValue,
    timezones: timezones2,
    currentDatetime
  } = _b, props = __objRest(_b, [
    "value",
    "onBlur",
    "onChange",
    "labelStyle",
    "displayValue",
    "timezones",
    "currentDatetime"
  ]);
  const { options: options2, parseTimezone } = useTimezoneSelect({
    timezones: timezones2,
    labelStyle,
    displayValue,
    currentDatetime
  });
  const handleChange = (tz) => {
    onChange2 && onChange2(tz);
  };
  return (0, import_jsx_runtime.jsx)(
    StateManagedSelect$1,
    __spreadValues({
      value: parseTimezone(value),
      onChange: handleChange,
      options: options2,
      onBlur
    }, props)
  );
};
export {
  timezone_list_default as allTimezones,
  TimezoneSelect as default,
  useTimezoneSelect
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=react-timezone-select.js.map
