/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./service-worker.js":
/*!***************************!*\
  !*** ./service-worker.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core */ "./node_modules/workbox-core/index.mjs");
/* harmony import */ var workbox_expiration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-expiration */ "./node_modules/workbox-expiration/index.mjs");
/* harmony import */ var workbox_strategies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-strategies */ "./node_modules/workbox-strategies/index.mjs");
/* harmony import */ var workbox_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-routing */ "./node_modules/workbox-routing/index.mjs");
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");
/* module decorator */ module = __webpack_require__.hmd(module);





(0,workbox_core__WEBPACK_IMPORTED_MODULE_0__.skipWaiting)();
(0,workbox_core__WEBPACK_IMPORTED_MODULE_0__.clientsClaim)(); // must include following lines when using inject manifest module from workbox
// https://developers.google.com/web/tools/workbox/guides/precache-files/workbox-build#add_an_injection_point

var WB_MANIFEST = []; // Precache fallback route and image

WB_MANIFEST.push({
  url: "/fallback",
  revision: "1234567890"
});
(0,workbox_precaching__WEBPACK_IMPORTED_MODULE_4__.precacheAndRoute)(WB_MANIFEST);
(0,workbox_precaching__WEBPACK_IMPORTED_MODULE_4__.cleanupOutdatedCaches)();
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)("/", new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.NetworkFirst({
  cacheName: "start-url",
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 1,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), "GET");
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.CacheFirst({
  cacheName: "google-fonts",
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 4,
    maxAgeSeconds: 31536e3,
    purgeOnQuotaError: !0
  })]
}), "GET");
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.StaleWhileRevalidate({
  cacheName: "static-font-assets",
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 4,
    maxAgeSeconds: 604800,
    purgeOnQuotaError: !0
  })]
}), "GET"); // disable image cache, so we could observe the placeholder image when offline

(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.NetworkOnly({
  cacheName: "static-image-assets",
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 64,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), "GET");
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/\.(?:js)$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.StaleWhileRevalidate({
  cacheName: "static-js-assets",
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), "GET");
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/\.(?:css|less)$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.StaleWhileRevalidate({
  cacheName: "static-style-assets",
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), "GET");
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/\.(?:json|xml|csv)$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.NetworkFirst({
  cacheName: "static-data-assets",
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), "GET");
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/\/api\/.*$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.NetworkFirst({
  cacheName: "apis",
  networkTimeoutSeconds: 10,
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 16,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), "GET");
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/.*/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.NetworkFirst({
  cacheName: "others",
  networkTimeoutSeconds: 10,
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), "GET"); // following lines gives you control of the offline fallback strategies
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#comprehensive_fallbacks
// Use a stale-while-revalidate strategy for all other requests.

(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.setDefaultHandler)(new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.StaleWhileRevalidate()); // This "catch" handler is triggered when any of the other routes fail to
// generate a response.

(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.setCatchHandler)(function (_ref) {
  var event = _ref.event;
  // The FALLBACK_URL entries must be added to the cache ahead of time, either
  // via runtime or precaching. If they are precached, then call
  // `matchPrecache(FALLBACK_URL)` (from the `workbox-precaching` package)
  // to get the response from the correct cache.
  //
  // Use event, request, and url to figure out how to respond.
  // One approach would be to use request.destination, see
  // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
  if (event.request.cache === "only-if-cached" && event.request.mode !== "same-origin") return;

  switch (event.request.destination) {
    case "document":
      // If using precached URLs:
      return (0,workbox_precaching__WEBPACK_IMPORTED_MODULE_4__.matchPrecache)("/fallback"); // return caches.match('/fallback')

      break;

    case "image":
      // If using precached URLs:
      return (0,workbox_precaching__WEBPACK_IMPORTED_MODULE_4__.matchPrecache)("/static/images/fallback.png"); // return caches.match('/static/images/fallback.png')

      break;

    case "font": // If using precached URLs:
    // return matchPrecache(FALLBACK_FONT_URL);
    //return caches.match('/static/fonts/fallback.otf')
    //break

    default:
      // If we don't have a fallback, just return an error response.
      return Response.error();
  }
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/idb/build/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/idb/build/esm/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unwrap": function() { return /* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u; },
/* harmony export */   "wrap": function() { return /* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w; },
/* harmony export */   "deleteDB": function() { return /* binding */ deleteDB; },
/* harmony export */   "openDB": function() { return /* binding */ openDB; }
/* harmony export */ });
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ "./node_modules/idb/build/esm/wrap-idb-value.js");



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction));
        });
    }
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking)
            db.addEventListener('versionchange', () => blocking());
    })
        .catch(() => { });
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done,
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));




/***/ }),

/***/ "./node_modules/idb/build/esm/wrap-idb-value.js":
/*!******************************************************!*\
  !*** ./node_modules/idb/build/esm/wrap-idb-value.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ reverseTransformCache; },
/* harmony export */   "i": function() { return /* binding */ instanceOfAny; },
/* harmony export */   "r": function() { return /* binding */ replaceTraps; },
/* harmony export */   "u": function() { return /* binding */ unwrap; },
/* harmony export */   "w": function() { return /* binding */ wrap; }
/* harmony export */ });
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then((value) => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);




/***/ }),

/***/ "./node_modules/workbox-core/_private.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_private.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": function() { return /* reexport safe */ _private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert; },
/* harmony export */   "cacheMatchIgnoreParams": function() { return /* reexport safe */ _private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_2__.cacheMatchIgnoreParams; },
/* harmony export */   "cacheNames": function() { return /* reexport safe */ _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames; },
/* harmony export */   "canConstructReadableStream": function() { return /* reexport safe */ _private_canConstructReadableStream_js__WEBPACK_IMPORTED_MODULE_3__.canConstructReadableStream; },
/* harmony export */   "canConstructResponseFromBodyStream": function() { return /* reexport safe */ _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_4__.canConstructResponseFromBodyStream; },
/* harmony export */   "dontWaitFor": function() { return /* reexport safe */ _private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_5__.dontWaitFor; },
/* harmony export */   "Deferred": function() { return /* reexport safe */ _private_Deferred_js__WEBPACK_IMPORTED_MODULE_6__.Deferred; },
/* harmony export */   "executeQuotaErrorCallbacks": function() { return /* reexport safe */ _private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_7__.executeQuotaErrorCallbacks; },
/* harmony export */   "getFriendlyURL": function() { return /* reexport safe */ _private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_8__.getFriendlyURL; },
/* harmony export */   "logger": function() { return /* reexport safe */ _private_logger_js__WEBPACK_IMPORTED_MODULE_9__.logger; },
/* harmony export */   "resultingClientExists": function() { return /* reexport safe */ _private_resultingClientExists_js__WEBPACK_IMPORTED_MODULE_10__.resultingClientExists; },
/* harmony export */   "timeout": function() { return /* reexport safe */ _private_timeout_js__WEBPACK_IMPORTED_MODULE_11__.timeout; },
/* harmony export */   "waitUntil": function() { return /* reexport safe */ _private_waitUntil_js__WEBPACK_IMPORTED_MODULE_12__.waitUntil; },
/* harmony export */   "WorkboxError": function() { return /* reexport safe */ _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_13__.WorkboxError; }
/* harmony export */ });
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var _private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var _private_canConstructReadableStream_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_private/canConstructReadableStream.js */ "./node_modules/workbox-core/_private/canConstructReadableStream.js");
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_private/dontWaitFor.js */ "./node_modules/workbox-core/_private/dontWaitFor.js");
/* harmony import */ var _private_Deferred_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var _private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var _private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _private_resultingClientExists_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_private/resultingClientExists.js */ "./node_modules/workbox-core/_private/resultingClientExists.js");
/* harmony import */ var _private_timeout_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var _private_waitUntil_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_14__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/
// We either expose defaults or we expose every named export.


















/***/ }),

/***/ "./node_modules/workbox-core/_private/Deferred.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/_private/Deferred.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deferred": function() { return /* binding */ Deferred; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": function() { return /* binding */ WorkboxError; }
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": function() { return /* binding */ finalAssertExports; }
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] =
            `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false ? 0 : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass,
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheMatchIgnoreParams": function() { return /* binding */ cacheMatchIgnoreParams; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": function() { return /* binding */ cacheNames; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructReadableStream.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructReadableStream.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructReadableStream": function() { return /* binding */ canConstructReadableStream; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream)
 * object.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `ReadableStream`, `false` otherwise.
 *
 * @private
 */
function canConstructReadableStream() {
    if (supportStatus === undefined) {
        // See https://github.com/GoogleChrome/workbox/issues/1473
        try {
            new ReadableStream({ start() { } });
            supportStatus = true;
        }
        catch (error) {
            supportStatus = false;
        }
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructResponseFromBodyStream": function() { return /* binding */ canConstructResponseFromBodyStream; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/dontWaitFor.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-core/_private/dontWaitFor.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dontWaitFor": function() { return /* binding */ dontWaitFor; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A helper function that prevents a promise from being flagged as unused.
 *
 * @private
 **/
function dontWaitFor(promise) {
    // Effective no-op.
    void promise.then(() => { });
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQuotaErrorCallbacks": function() { return /* binding */ executeQuotaErrorCallbacks; }
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof module:workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": function() { return /* binding */ getFriendlyURL; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": function() { return /* binding */ logger; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false ? 0 : (() => {
    // Don't overwrite this value if it's already set.
    // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
    if (!('__WB_DISABLE_DEV_LOGS' in self)) {
        self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
        debug: `#7f8c8d`,
        log: `#2ecc71`,
        warn: `#f39c12`,
        error: `#c0392b`,
        groupCollapsed: `#3498db`,
        groupEnd: null,
    };
    const print = function (method, args) {
        if (self.__WB_DISABLE_DEV_LOGS) {
            return;
        }
        if (method === 'groupCollapsed') {
            // Safari doesn't print all console.groupCollapsed() arguments:
            // https://bugs.webkit.org/show_bug.cgi?id=182754
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                console[method](...args);
                return;
            }
        }
        const styles = [
            `background: ${methodToColorMap[method]}`,
            `border-radius: 0.5em`,
            `color: white`,
            `font-weight: bold`,
            `padding: 2px 0.5em`,
        ];
        // When in a group, the workbox prefix is not displayed.
        const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
        console[method](...logPrefix, ...args);
        if (method === 'groupCollapsed') {
            inGroup = true;
        }
        if (method === 'groupEnd') {
            inGroup = false;
        }
    };
    // eslint-disable-next-line @typescript-eslint/ban-types
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
        const method = key;
        api[method] = (...args) => {
            print(method, args);
        };
    }
    return api;
})());



/***/ }),

/***/ "./node_modules/workbox-core/_private/resultingClientExists.js":
/*!*********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/resultingClientExists.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resultingClientExists": function() { return /* binding */ resultingClientExists; }
/* harmony export */ });
/* harmony import */ var _timeout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const MAX_RETRY_TIME = 2000;
/**
 * Returns a promise that resolves to a window client matching the passed
 * `resultingClientId`. For browsers that don't support `resultingClientId`
 * or if waiting for the resulting client to apper takes too long, resolve to
 * `undefined`.
 *
 * @param {string} [resultingClientId]
 * @return {Promise<Client|undefined>}
 * @private
 */
async function resultingClientExists(resultingClientId) {
    if (!resultingClientId) {
        return;
    }
    let existingWindows = await self.clients.matchAll({ type: 'window' });
    const existingWindowIds = new Set(existingWindows.map((w) => w.id));
    let resultingWindow;
    const startTime = performance.now();
    // Only wait up to `MAX_RETRY_TIME` to find a matching client.
    while (performance.now() - startTime < MAX_RETRY_TIME) {
        existingWindows = await self.clients.matchAll({ type: 'window' });
        resultingWindow = existingWindows.find((w) => {
            if (resultingClientId) {
                // If we have a `resultingClientId`, we can match on that.
                return w.id === resultingClientId;
            }
            else {
                // Otherwise match on finding a window not in `existingWindowIds`.
                return !existingWindowIds.has(w.id);
            }
        });
        if (resultingWindow) {
            break;
        }
        // Sleep for 100ms and retry.
        await (0,_timeout_js__WEBPACK_IMPORTED_MODULE_0__.timeout)(100);
    }
    return resultingWindow;
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/timeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/timeout.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": function() { return /* binding */ timeout; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/waitUntil.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/_private/waitUntil.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitUntil": function() { return /* binding */ waitUntil; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/***/ (function() {


// @ts-ignore
try {
    self['workbox:core:6.2.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/cacheNames.js":
/*!*************************************************!*\
  !*** ./node_modules/workbox-core/cacheNames.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": function() { return /* binding */ cacheNames; }
/* harmony export */ });
/* harmony import */ var _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Get the current cache names and prefix/suffix used by Workbox.
 *
 * `cacheNames.precache` is used for precached assets,
 * `cacheNames.googleAnalytics` is used by `workbox-google-analytics` to
 * store `analytics.js`, and `cacheNames.runtime` is used for everything else.
 *
 * `cacheNames.prefix` can be used to retrieve just the current prefix value.
 * `cacheNames.suffix` can be used to retrieve just the current suffix value.
 *
 * @return {Object} An object with `precache`, `runtime`, `prefix`, and
 *     `googleAnalytics` properties.
 *
 * @memberof module:workbox-core
 */
const cacheNames = {
    get googleAnalytics() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getGoogleAnalyticsName();
    },
    get precache() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
    },
    get prefix() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrefix();
    },
    get runtime() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName();
    },
    get suffix() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getSuffix();
    },
};



/***/ }),

/***/ "./node_modules/workbox-core/clientsClaim.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/clientsClaim.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clientsClaim": function() { return /* binding */ clientsClaim; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Claim any currently available clients once the service worker
 * becomes active. This is normally used in conjunction with `skipWaiting()`.
 *
 * @memberof module:workbox-core
 */
function clientsClaim() {
    self.addEventListener('activate', () => self.clients.claim());
}



/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyResponse": function() { return /* binding */ copyResponse; }
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof module:workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)() ?
        clonedResponse.body : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/index.js":
/*!********************************************!*\
  !*** ./node_modules/workbox-core/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_private": function() { return /* reexport module object */ _private_js__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "cacheNames": function() { return /* reexport safe */ _cacheNames_js__WEBPACK_IMPORTED_MODULE_2__.cacheNames; },
/* harmony export */   "clientsClaim": function() { return /* reexport safe */ _clientsClaim_js__WEBPACK_IMPORTED_MODULE_4__.clientsClaim; },
/* harmony export */   "copyResponse": function() { return /* reexport safe */ _copyResponse_js__WEBPACK_IMPORTED_MODULE_3__.copyResponse; },
/* harmony export */   "registerQuotaErrorCallback": function() { return /* reexport safe */ _registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_0__.registerQuotaErrorCallback; },
/* harmony export */   "setCacheNameDetails": function() { return /* reexport safe */ _setCacheNameDetails_js__WEBPACK_IMPORTED_MODULE_5__.setCacheNameDetails; },
/* harmony export */   "skipWaiting": function() { return /* reexport safe */ _skipWaiting_js__WEBPACK_IMPORTED_MODULE_6__.skipWaiting; }
/* harmony export */ });
/* harmony import */ var _registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerQuotaErrorCallback.js */ "./node_modules/workbox-core/registerQuotaErrorCallback.js");
/* harmony import */ var _private_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private.js */ "./node_modules/workbox-core/_private.js");
/* harmony import */ var _cacheNames_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cacheNames.js */ "./node_modules/workbox-core/cacheNames.js");
/* harmony import */ var _copyResponse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var _clientsClaim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clientsClaim.js */ "./node_modules/workbox-core/clientsClaim.js");
/* harmony import */ var _setCacheNameDetails_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setCacheNameDetails.js */ "./node_modules/workbox-core/setCacheNameDetails.js");
/* harmony import */ var _skipWaiting_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skipWaiting.js */ "./node_modules/workbox-core/skipWaiting.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types.js */ "./node_modules/workbox-core/types.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_js__WEBPACK_IMPORTED_MODULE_8__) if(["default","_private","cacheNames","clientsClaim","copyResponse","registerQuotaErrorCallback","setCacheNameDetails","skipWaiting"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types_js__WEBPACK_IMPORTED_MODULE_8__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * All of the Workbox service worker libraries use workbox-core for shared
 * code as well as setting default values that need to be shared (like cache
 * names).
 *
 * @module workbox-core
 */




/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": function() { return /* binding */ messageGenerator; }
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator = ( false) ?
    0 : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": function() { return /* binding */ messages; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return `The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`;
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`;
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return `The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`;
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`;
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName }) => {
        if (!expectedMethod || !paramName || !moduleName || !className
            || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return `${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return `An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`;
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` +
                `'add-to-cache-list-duplicate-entries' error.`);
        }
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`;
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` +
                `'plugin-error-request-will-fetch', error.`);
        }
        return `An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`;
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return `You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`;
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return `The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`;
    },
    'unregister-route-route-not-registered': () => {
        return `The route you're trying to unregister was not previously ` +
            `registered.`;
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return `The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`;
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return `The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`;
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`;
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`;
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return `When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`;
    },
    'channel-name-required': () => {
        return `You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`;
    },
    'invalid-responses-are-same-args': () => {
        return `The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`;
    },
    'expire-custom-caches-only': () => {
        return `You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`;
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return `The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`;
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return `Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return `The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return `The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`;
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return `Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`;
    },
    'cache-put-with-no-response': ({ url }) => {
        return `There was an attempt to cache '${url}' but the response was not ` +
            `defined.`;
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return `The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`);
    },
    'non-precached-url': ({ url }) => {
        return `createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`;
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`;
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return `workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotaErrorCallbacks": function() { return /* binding */ quotaErrorCallbacks; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-core/registerQuotaErrorCallback.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/registerQuotaErrorCallback.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerQuotaErrorCallback": function() { return /* binding */ registerQuotaErrorCallback; }
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds a function to the set of quotaErrorCallbacks that will be executed if
 * there's a quota error.
 *
 * @param {Function} callback
 * @memberof module:workbox-core
 */
// Can't change Function type
// eslint-disable-next-line @typescript-eslint/ban-types
function registerQuotaErrorCallback(callback) {
    if (true) {
        _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert.isType(callback, 'function', {
            moduleName: 'workbox-core',
            funcName: 'register',
            paramName: 'callback',
        });
    }
    _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_2__.quotaErrorCallbacks.add(callback);
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Registered a callback to respond to quota errors.', callback);
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/setCacheNameDetails.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/setCacheNameDetails.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCacheNameDetails": function() { return /* binding */ setCacheNameDetails; }
/* harmony export */ });
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Modifies the default cache names used by the Workbox packages.
 * Cache names are generated as `<prefix>-<Cache Name>-<suffix>`.
 *
 * @param {Object} details
 * @param {Object} [details.prefix] The string to add to the beginning of
 *     the precache and runtime cache names.
 * @param {Object} [details.suffix] The string to add to the end of
 *     the precache and runtime cache names.
 * @param {Object} [details.precache] The cache name to use for precache
 *     caching.
 * @param {Object} [details.runtime] The cache name to use for runtime caching.
 * @param {Object} [details.googleAnalytics] The cache name to use for
 *     `workbox-google-analytics` caching.
 *
 * @memberof module:workbox-core
 */
function setCacheNameDetails(details) {
    if (true) {
        Object.keys(details).forEach((key) => {
            _private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(details[key], 'string', {
                moduleName: 'workbox-core',
                funcName: 'setCacheNameDetails',
                paramName: `details.${key}`,
            });
        });
        if ('precache' in details && details['precache'].length === 0) {
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('invalid-cache-name', {
                cacheNameId: 'precache',
                value: details['precache'],
            });
        }
        if ('runtime' in details && details['runtime'].length === 0) {
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('invalid-cache-name', {
                cacheNameId: 'runtime',
                value: details['runtime'],
            });
        }
        if ('googleAnalytics' in details && details['googleAnalytics'].length === 0) {
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('invalid-cache-name', {
                cacheNameId: 'googleAnalytics',
                value: details['googleAnalytics'],
            });
        }
    }
    _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.updateDetails(details);
}



/***/ }),

/***/ "./node_modules/workbox-core/skipWaiting.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-core/skipWaiting.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skipWaiting": function() { return /* binding */ skipWaiting; }
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * This method is deprecated, and will be removed in Workbox v7.
 *
 * Calling self.skipWaiting() is equivalent, and should be used instead.
 *
 * @memberof module:workbox-core
 */
function skipWaiting() {
    // Just call self.skipWaiting() directly.
    // See https://github.com/GoogleChrome/workbox/issues/2525
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.warn(`skipWaiting() from workbox-core is no longer recommended ` +
            `and will be removed in Workbox v7. Using self.skipWaiting() instead ` +
            `is equivalent.`);
    }
    void self.skipWaiting();
}



/***/ }),

/***/ "./node_modules/workbox-core/types.js":
/*!********************************************!*\
  !*** ./node_modules/workbox-core/types.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/***/ }),

/***/ "./node_modules/workbox-expiration/CacheExpiration.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-expiration/CacheExpiration.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheExpiration": function() { return /* binding */ CacheExpiration; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/dontWaitFor.js */ "./node_modules/workbox-core/_private/dontWaitFor.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _models_CacheTimestampsModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/CacheTimestampsModel.js */ "./node_modules/workbox-expiration/models/CacheTimestampsModel.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * The `CacheExpiration` class allows you define an expiration and / or
 * limit on the number of responses stored in a
 * [`Cache`](https://developer.mozilla.org/en-US/docs/Web/API/Cache).
 *
 * @memberof module:workbox-expiration
 */
class CacheExpiration {
    /**
     * To construct a new CacheExpiration instance you must provide at least
     * one of the `config` properties.
     *
     * @param {string} cacheName Name of the cache to apply restrictions to.
     * @param {Object} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
     * that will be used when calling `delete()` on the cache.
     */
    constructor(cacheName, config = {}) {
        this._isRunning = false;
        this._rerunRequested = false;
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(cacheName, 'string', {
                moduleName: 'workbox-expiration',
                className: 'CacheExpiration',
                funcName: 'constructor',
                paramName: 'cacheName',
            });
            if (!(config.maxEntries || config.maxAgeSeconds)) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('max-entries-or-age-required', {
                    moduleName: 'workbox-expiration',
                    className: 'CacheExpiration',
                    funcName: 'constructor',
                });
            }
            if (config.maxEntries) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(config.maxEntries, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'CacheExpiration',
                    funcName: 'constructor',
                    paramName: 'config.maxEntries',
                });
            }
            if (config.maxAgeSeconds) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(config.maxAgeSeconds, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'CacheExpiration',
                    funcName: 'constructor',
                    paramName: 'config.maxAgeSeconds',
                });
            }
        }
        this._maxEntries = config.maxEntries;
        this._maxAgeSeconds = config.maxAgeSeconds;
        this._matchOptions = config.matchOptions;
        this._cacheName = cacheName;
        this._timestampModel = new _models_CacheTimestampsModel_js__WEBPACK_IMPORTED_MODULE_4__.CacheTimestampsModel(cacheName);
    }
    /**
     * Expires entries for the given cache and given criteria.
     */
    async expireEntries() {
        if (this._isRunning) {
            this._rerunRequested = true;
            return;
        }
        this._isRunning = true;
        const minTimestamp = this._maxAgeSeconds ?
            Date.now() - (this._maxAgeSeconds * 1000) : 0;
        const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
        // Delete URLs from the cache
        const cache = await self.caches.open(this._cacheName);
        for (const url of urlsExpired) {
            await cache.delete(url, this._matchOptions);
        }
        if (true) {
            if (urlsExpired.length > 0) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.groupCollapsed(`Expired ${urlsExpired.length} ` +
                    `${urlsExpired.length === 1 ? 'entry' : 'entries'} and removed ` +
                    `${urlsExpired.length === 1 ? 'it' : 'them'} from the ` +
                    `'${this._cacheName}' cache.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`Expired the following ${urlsExpired.length === 1 ?
                    'URL' : 'URLs'}:`);
                urlsExpired.forEach((url) => workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`    ${url}`));
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.groupEnd();
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.debug(`Cache expiration ran and found no entries to remove.`);
            }
        }
        this._isRunning = false;
        if (this._rerunRequested) {
            this._rerunRequested = false;
            (0,workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_1__.dontWaitFor)(this.expireEntries());
        }
    }
    /**
     * Update the timestamp for the given URL. This ensures the when
     * removing entries based on maximum entries, most recently used
     * is accurate or when expiring, the timestamp is up-to-date.
     *
     * @param {string} url
     */
    async updateTimestamp(url) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(url, 'string', {
                moduleName: 'workbox-expiration',
                className: 'CacheExpiration',
                funcName: 'updateTimestamp',
                paramName: 'url',
            });
        }
        await this._timestampModel.setTimestamp(url, Date.now());
    }
    /**
     * Can be used to check if a URL has expired or not before it's used.
     *
     * This requires a look up from IndexedDB, so can be slow.
     *
     * Note: This method will not remove the cached entry, call
     * `expireEntries()` to remove indexedDB and Cache entries.
     *
     * @param {string} url
     * @return {boolean}
     */
    async isURLExpired(url) {
        if (!this._maxAgeSeconds) {
            if (true) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError(`expired-test-without-max-age`, {
                    methodName: 'isURLExpired',
                    paramName: 'maxAgeSeconds',
                });
            }
            return false;
        }
        else {
            const timestamp = await this._timestampModel.getTimestamp(url);
            const expireOlderThan = Date.now() - (this._maxAgeSeconds * 1000);
            return timestamp !== undefined ? (timestamp < expireOlderThan) : true;
        }
    }
    /**
     * Removes the IndexedDB object store used to keep track of cache expiration
     * metadata.
     */
    async delete() {
        // Make sure we don't attempt another rerun if we're called in the middle of
        // a cache expiration.
        this._rerunRequested = false;
        await this._timestampModel.expireEntries(Infinity); // Expires all.
    }
}



/***/ }),

/***/ "./node_modules/workbox-expiration/ExpirationPlugin.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-expiration/ExpirationPlugin.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpirationPlugin": function() { return /* binding */ ExpirationPlugin; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/dontWaitFor.js */ "./node_modules/workbox-core/_private/dontWaitFor.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/registerQuotaErrorCallback.js */ "./node_modules/workbox-core/registerQuotaErrorCallback.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CacheExpiration.js */ "./node_modules/workbox-expiration/CacheExpiration.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









/**
 * This plugin can be used in a `workbox-strategy` to regularly enforce a
 * limit on the age and / or the number of cached requests.
 *
 * It can only be used with `workbox-strategy` instances that have a
 * [custom `cacheName` property set](/web/tools/workbox/guides/configure-workbox#custom_cache_names_in_strategies).
 * In other words, it can't be used to expire entries in strategy that uses the
 * default runtime cache name.
 *
 * Whenever a cached request is used or updated, this plugin will look
 * at the associated cache and remove any old or extra requests.
 *
 * When using `maxAgeSeconds`, requests may be used *once* after expiring
 * because the expiration clean up will not have occurred until *after* the
 * cached request has been used. If the request has a "Date" header, then
 * a light weight expiration check is performed and the request will not be
 * used immediately.
 *
 * When using `maxEntries`, the entry least-recently requested will be removed
 * from the cache first.
 *
 * @memberof module:workbox-expiration
 */
class ExpirationPlugin {
    /**
     * @param {ExpirationPluginOptions} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
     * that will be used when calling `delete()` on the cache.
     * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
     * automatic deletion if the available storage quota has been exceeded.
     */
    constructor(config = {}) {
        /**
         * A "lifecycle" callback that will be triggered automatically by the
         * `workbox-strategies` handlers when a `Response` is about to be returned
         * from a [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) to
         * the handler. It allows the `Response` to be inspected for freshness and
         * prevents it from being used if the `Response`'s `Date` header value is
         * older than the configured `maxAgeSeconds`.
         *
         * @param {Object} options
         * @param {string} options.cacheName Name of the cache the response is in.
         * @param {Response} options.cachedResponse The `Response` object that's been
         *     read from a cache and whose freshness should be checked.
         * @return {Response} Either the `cachedResponse`, if it's
         *     fresh, or `null` if the `Response` is older than `maxAgeSeconds`.
         *
         * @private
         */
        this.cachedResponseWillBeUsed = async ({ event, request, cacheName, cachedResponse }) => {
            if (!cachedResponse) {
                return null;
            }
            const isFresh = this._isResponseDateFresh(cachedResponse);
            // Expire entries to ensure that even if the expiration date has
            // expired, it'll only be used once.
            const cacheExpiration = this._getCacheExpiration(cacheName);
            (0,workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_2__.dontWaitFor)(cacheExpiration.expireEntries());
            // Update the metadata for the request URL to the current timestamp,
            // but don't `await` it as we don't want to block the response.
            const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
            if (event) {
                try {
                    event.waitUntil(updateTimestampDone);
                }
                catch (error) {
                    if (true) {
                        // The event may not be a fetch event; only log the URL if it is.
                        if ('request' in event) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__.logger.warn(`Unable to ensure service worker stays alive when ` +
                                `updating cache entry for ` +
                                `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(event.request.url)}'.`);
                        }
                    }
                }
            }
            return isFresh ? cachedResponse : null;
        };
        /**
         * A "lifecycle" callback that will be triggered automatically by the
         * `workbox-strategies` handlers when an entry is added to a cache.
         *
         * @param {Object} options
         * @param {string} options.cacheName Name of the cache that was updated.
         * @param {string} options.request The Request for the cached entry.
         *
         * @private
         */
        this.cacheDidUpdate = async ({ cacheName, request }) => {
            if (true) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(cacheName, 'string', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'cacheDidUpdate',
                    paramName: 'cacheName',
                });
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'cacheDidUpdate',
                    paramName: 'request',
                });
            }
            const cacheExpiration = this._getCacheExpiration(cacheName);
            await cacheExpiration.updateTimestamp(request.url);
            await cacheExpiration.expireEntries();
        };
        if (true) {
            if (!(config.maxEntries || config.maxAgeSeconds)) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__.WorkboxError('max-entries-or-age-required', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'constructor',
                });
            }
            if (config.maxEntries) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(config.maxEntries, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'constructor',
                    paramName: 'config.maxEntries',
                });
            }
            if (config.maxAgeSeconds) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(config.maxAgeSeconds, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'constructor',
                    paramName: 'config.maxAgeSeconds',
                });
            }
        }
        this._config = config;
        this._maxAgeSeconds = config.maxAgeSeconds;
        this._cacheExpirations = new Map();
        if (config.purgeOnQuotaError) {
            (0,workbox_core_registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_5__.registerQuotaErrorCallback)(() => this.deleteCacheAndMetadata());
        }
    }
    /**
     * A simple helper method to return a CacheExpiration instance for a given
     * cache name.
     *
     * @param {string} cacheName
     * @return {CacheExpiration}
     *
     * @private
     */
    _getCacheExpiration(cacheName) {
        if (cacheName === workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getRuntimeName()) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__.WorkboxError('expire-custom-caches-only');
        }
        let cacheExpiration = this._cacheExpirations.get(cacheName);
        if (!cacheExpiration) {
            cacheExpiration = new _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_7__.CacheExpiration(cacheName, this._config);
            this._cacheExpirations.set(cacheName, cacheExpiration);
        }
        return cacheExpiration;
    }
    /**
     * @param {Response} cachedResponse
     * @return {boolean}
     *
     * @private
     */
    _isResponseDateFresh(cachedResponse) {
        if (!this._maxAgeSeconds) {
            // We aren't expiring by age, so return true, it's fresh
            return true;
        }
        // Check if the 'date' header will suffice a quick expiration check.
        // See https://github.com/GoogleChromeLabs/sw-toolbox/issues/164 for
        // discussion.
        const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
        if (dateHeaderTimestamp === null) {
            // Unable to parse date, so assume it's fresh.
            return true;
        }
        // If we have a valid headerTime, then our response is fresh iff the
        // headerTime plus maxAgeSeconds is greater than the current time.
        const now = Date.now();
        return dateHeaderTimestamp >= now - (this._maxAgeSeconds * 1000);
    }
    /**
     * This method will extract the data header and parse it into a useful
     * value.
     *
     * @param {Response} cachedResponse
     * @return {number|null}
     *
     * @private
     */
    _getDateHeaderTimestamp(cachedResponse) {
        if (!cachedResponse.headers.has('date')) {
            return null;
        }
        const dateHeader = cachedResponse.headers.get('date');
        const parsedDate = new Date(dateHeader);
        const headerTime = parsedDate.getTime();
        // If the Date header was invalid for some reason, parsedDate.getTime()
        // will return NaN.
        if (isNaN(headerTime)) {
            return null;
        }
        return headerTime;
    }
    /**
     * This is a helper method that performs two operations:
     *
     * - Deletes *all* the underlying Cache instances associated with this plugin
     * instance, by calling caches.delete() on your behalf.
     * - Deletes the metadata from IndexedDB used to keep track of expiration
     * details for each Cache instance.
     *
     * When using cache expiration, calling this method is preferable to calling
     * `caches.delete()` directly, since this will ensure that the IndexedDB
     * metadata is also cleanly removed and open IndexedDB instances are deleted.
     *
     * Note that if you're *not* using cache expiration for a given cache, calling
     * `caches.delete()` and passing in the cache's name should be sufficient.
     * There is no Workbox-specific method needed for cleanup in that case.
     */
    async deleteCacheAndMetadata() {
        // Do this one at a time instead of all at once via `Promise.all()` to
        // reduce the chance of inconsistency if a promise rejects.
        for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
            await self.caches.delete(cacheName);
            await cacheExpiration.delete();
        }
        // Reset this._cacheExpirations to its initial state.
        this._cacheExpirations = new Map();
    }
}



/***/ }),

/***/ "./node_modules/workbox-expiration/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-expiration/_version.js ***!
  \*****************************************************/
/***/ (function() {


// @ts-ignore
try {
    self['workbox:expiration:6.2.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-expiration/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-expiration/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheExpiration": function() { return /* reexport safe */ _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_0__.CacheExpiration; },
/* harmony export */   "ExpirationPlugin": function() { return /* reexport safe */ _ExpirationPlugin_js__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin; }
/* harmony export */ });
/* harmony import */ var _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheExpiration.js */ "./node_modules/workbox-expiration/CacheExpiration.js");
/* harmony import */ var _ExpirationPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpirationPlugin.js */ "./node_modules/workbox-expiration/ExpirationPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * @module workbox-expiration
 */



/***/ }),

/***/ "./node_modules/workbox-expiration/models/CacheTimestampsModel.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-expiration/models/CacheTimestampsModel.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheTimestampsModel": function() { return /* binding */ CacheTimestampsModel; }
/* harmony export */ });
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/esm/index.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const DB_NAME = 'workbox-expiration';
const CACHE_OBJECT_STORE = 'cache-entries';
const normalizeURL = (unNormalizedUrl) => {
    const url = new URL(unNormalizedUrl, location.href);
    url.hash = '';
    return url.href;
};
/**
 * Returns the timestamp model.
 *
 * @private
 */
class CacheTimestampsModel {
    /**
     *
     * @param {string} cacheName
     *
     * @private
     */
    constructor(cacheName) {
        this._db = null;
        this._cacheName = cacheName;
    }
    /**
     * Performs an upgrade of indexedDB.
     *
     * @param {IDBPDatabase<CacheDbSchema>} db
     *
     * @private
     */
    _upgradeDb(db) {
        // TODO(philipwalton): EdgeHTML doesn't support arrays as a keyPath, so we
        // have to use the `id` keyPath here and create our own values (a
        // concatenation of `url + cacheName`) instead of simply using
        // `keyPath: ['url', 'cacheName']`, which is supported in other browsers.
        const objStore = db.createObjectStore(CACHE_OBJECT_STORE, { keyPath: 'id' });
        // TODO(philipwalton): once we don't have to support EdgeHTML, we can
        // create a single index with the keyPath `['cacheName', 'timestamp']`
        // instead of doing both these indexes.
        objStore.createIndex('cacheName', 'cacheName', { unique: false });
        objStore.createIndex('timestamp', 'timestamp', { unique: false });
    }
    /**
     * Performs an upgrade of indexedDB and deletes deprecated DBs.
     *
     * @param {IDBPDatabase<CacheDbSchema>} db
     *
     * @private
     */
    _upgradeDbAndDeleteOldDbs(db) {
        this._upgradeDb(db);
        if (this._cacheName) {
            void (0,idb__WEBPACK_IMPORTED_MODULE_0__.deleteDB)(this._cacheName);
        }
    }
    /**
     * @param {string} url
     * @param {number} timestamp
     *
     * @private
     */
    async setTimestamp(url, timestamp) {
        url = normalizeURL(url);
        const entry = {
            url,
            timestamp,
            cacheName: this._cacheName,
            // Creating an ID from the URL and cache name won't be necessary once
            // Edge switches to Chromium and all browsers we support work with
            // array keyPaths.
            id: this._getId(url),
        };
        const db = await this.getDb();
        const tx = db.transaction(CACHE_OBJECT_STORE, 'readwrite', { durability: 'relaxed' });
        await tx.store.put(entry);
        await tx.done;
    }
    /**
     * Returns the timestamp stored for a given URL.
     *
     * @param {string} url
     * @return {number | undefined}
     *
     * @private
     */
    async getTimestamp(url) {
        const db = await this.getDb();
        const entry = await db.get(CACHE_OBJECT_STORE, this._getId(url));
        return entry === null || entry === void 0 ? void 0 : entry.timestamp;
    }
    /**
     * Iterates through all the entries in the object store (from newest to
     * oldest) and removes entries once either `maxCount` is reached or the
     * entry's timestamp is less than `minTimestamp`.
     *
     * @param {number} minTimestamp
     * @param {number} maxCount
     * @return {Array<string>}
     *
     * @private
     */
    async expireEntries(minTimestamp, maxCount) {
        const db = await this.getDb();
        let cursor = await db.transaction(CACHE_OBJECT_STORE).store.index('timestamp').openCursor(null, 'prev');
        const entriesToDelete = [];
        let entriesNotDeletedCount = 0;
        while (cursor) {
            const result = cursor.value;
            // TODO(philipwalton): once we can use a multi-key index, we
            // won't have to check `cacheName` here.
            if (result.cacheName === this._cacheName) {
                // Delete an entry if it's older than the max age or
                // if we already have the max number allowed.
                if ((minTimestamp && result.timestamp < minTimestamp) ||
                    (maxCount && entriesNotDeletedCount >= maxCount)) {
                    // TODO(philipwalton): we should be able to delete the
                    // entry right here, but doing so causes an iteration
                    // bug in Safari stable (fixed in TP). Instead we can
                    // store the keys of the entries to delete, and then
                    // delete the separate transactions.
                    // https://github.com/GoogleChrome/workbox/issues/1978
                    // cursor.delete();
                    // We only need to return the URL, not the whole entry.
                    entriesToDelete.push(cursor.value);
                }
                else {
                    entriesNotDeletedCount++;
                }
            }
            cursor = await cursor.continue();
        }
        // TODO(philipwalton): once the Safari bug in the following issue is fixed,
        // we should be able to remove this loop and do the entry deletion in the
        // cursor loop above:
        // https://github.com/GoogleChrome/workbox/issues/1978
        const urlsDeleted = [];
        for (const entry of entriesToDelete) {
            await db.delete(CACHE_OBJECT_STORE, entry.id);
            urlsDeleted.push(entry.url);
        }
        return urlsDeleted;
    }
    /**
     * Takes a URL and returns an ID that will be unique in the object store.
     *
     * @param {string} url
     * @return {string}
     *
     * @private
     */
    _getId(url) {
        // Creating an ID from the URL and cache name won't be necessary once
        // Edge switches to Chromium and all browsers we support work with
        // array keyPaths.
        return this._cacheName + '|' + normalizeURL(url);
    }
    /**
      * Returns an open connection to the database.
      *
      * @private
      */
    async getDb() {
        if (!this._db) {
            this._db = await (0,idb__WEBPACK_IMPORTED_MODULE_0__.openDB)(DB_NAME, 1, {
                upgrade: this._upgradeDbAndDeleteOldDbs.bind(this),
            });
        }
        return this._db;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": function() { return /* binding */ PrecacheController; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof module:workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {module:workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = (typeof entry !== 'string' && entry.revision) ?
                'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<module:workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<module:workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {module:workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheFallbackPlugin": function() { return /* binding */ PrecacheFallbackPlugin; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof module:workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController = precacheController ||
            (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheRoute.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheRoute.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheRoute": function() { return /* binding */ PrecacheRoute; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of [Route]{@link module:workbox-routing.Route} that takes a
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof module:workbox-precaching
 * @extends module:workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {module:workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` +
                    (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheStrategy": function() { return /* binding */ PrecacheStrategy; }
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A [Strategy]{@link module:workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            response = await handler.fetch(new Request(request, {
                integrity: integrityInRequest || integrityInManifest,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            if (integrityInManifest && noIntegrityConflict) {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/***/ (function() {


// @ts-ignore
try {
    self['workbox:precaching:6.2.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": function() { return /* binding */ addPlugins; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof module:workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRoute": function() { return /* binding */ addRoute; }
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See
 * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
 *
 * @memberof module:workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanupOutdatedCaches": function() { return /* binding */ cleanupOutdatedCaches; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof module:workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHandlerBoundToURL": function() { return /* binding */ createHandlerBoundToURL; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheKeyForURL": function() { return /* binding */ getCacheKeyForURL; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof module:workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": function() { return /* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins; },
/* harmony export */   "addRoute": function() { return /* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute; },
/* harmony export */   "cleanupOutdatedCaches": function() { return /* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches; },
/* harmony export */   "createHandlerBoundToURL": function() { return /* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL; },
/* harmony export */   "getCacheKeyForURL": function() { return /* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL; },
/* harmony export */   "matchPrecache": function() { return /* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache; },
/* harmony export */   "precache": function() { return /* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache; },
/* harmony export */   "precacheAndRoute": function() { return /* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute; },
/* harmony export */   "PrecacheController": function() { return /* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController; },
/* harmony export */   "PrecacheRoute": function() { return /* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute; },
/* harmony export */   "PrecacheStrategy": function() { return /* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy; },
/* harmony export */   "PrecacheFallbackPlugin": function() { return /* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin; }
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */



/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchPrecache": function() { return /* binding */ matchPrecache; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof module:workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precache": function() { return /* binding */ precache; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * [addRoute()]{@link module:workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof module:workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precacheAndRoute": function() { return /* binding */ precacheAndRoute; }
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * [precache()]{@link module:workbox-precaching.precache} and
 * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See
 * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
 *
 * @memberof module:workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheCacheKeyPlugin": function() { return /* binding */ PrecacheCacheKeyPlugin; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!******************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheInstallReportPlugin": function() { return /* binding */ PrecacheInstallReportPlugin; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state && state.originalRequest
                    && state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKey": function() { return /* binding */ createCacheKey; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteOutdatedCaches": function() { return /* binding */ deleteOutdatedCaches; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof module:workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName;
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateURLVariations": function() { return /* binding */ generateURLVariations; }
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof module:workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreatePrecacheController": function() { return /* binding */ getOrCreatePrecacheController; }
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printCleanupDetails": function() { return /* binding */ printCleanupDetails; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printInstallDetails": function() { return /* binding */ printInstallDetails; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message += ` ${alreadyPrecachedCount} ` +
                `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeIgnoredSearchParams": function() { return /* binding */ removeIgnoredSearchParams; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/workbox-routing/NavigationRoute.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/NavigationRoute.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationRoute": function() { return /* binding */ NavigationRoute; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * NavigationRoute makes it easy to create a
 * [Route]{@link module:workbox-routing.Route} that matches for browser
 * [navigation requests]{@link https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests}.
 *
 * It will only match incoming Requests whose
 * [`mode`]{@link https://fetch.spec.whatwg.org/#concept-request-mode}
 * is set to `navigate`.
 *
 * You can optionally only apply this route to a subset of navigation requests
 * by using one or both of the `denylist` and `allowlist` parameters.
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */
class NavigationRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If both `denylist` and `allowlist` are provided, the `denylist` will
     * take precedence and the request will not match this route.
     *
     * The regular expressions in `allowlist` and `denylist`
     * are matched against the concatenated
     * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
     * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
     * portions of the requested URL.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {Object} options
     * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
     * the route will not handle the request (even if a allowlist RegExp matches).
     * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
     * match the URL's pathname and search parameter, the route will handle the
     * request (assuming the denylist doesn't match).
     */
    constructor(handler, { allowlist = [/./], denylist = [] } = {}) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArrayOfClass(allowlist, RegExp, {
                moduleName: 'workbox-routing',
                className: 'NavigationRoute',
                funcName: 'constructor',
                paramName: 'options.allowlist',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArrayOfClass(denylist, RegExp, {
                moduleName: 'workbox-routing',
                className: 'NavigationRoute',
                funcName: 'constructor',
                paramName: 'options.denylist',
            });
        }
        super((options) => this._match(options), handler);
        this._allowlist = allowlist;
        this._denylist = denylist;
    }
    /**
     * Routes match handler.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {Request} options.request
     * @return {boolean}
     *
     * @private
     */
    _match({ url, request }) {
        if (request && request.mode !== 'navigate') {
            return false;
        }
        const pathnameAndSearch = url.pathname + url.search;
        for (const regExp of this._denylist) {
            if (regExp.test(pathnameAndSearch)) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The navigation route ${pathnameAndSearch} is not ` +
                        `being used, since the URL matches this denylist pattern: ` +
                        `${regExp.toString()}`);
                }
                return false;
            }
        }
        if (this._allowlist.some((regExp) => regExp.test(pathnameAndSearch))) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The navigation route ${pathnameAndSearch} ` +
                    `is being used.`);
            }
            return true;
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The navigation route ${pathnameAndSearch} is not ` +
                `being used, since the URL being navigated to doesn't ` +
                `match the allowlist.`);
        }
        return false;
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/RegExpRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-routing/RegExpRoute.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegExpRoute": function() { return /* binding */ RegExpRoute; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * [Route]{@link module:workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * [handler's]{@link module:workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if ((url.origin !== location.origin) && (result.index !== 0)) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/Route.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": function() { return /* binding */ Route; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof module:workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {module:workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {module:workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Router.js":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Router.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": function() { return /* binding */ Router; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a FetchEvent through one or more
 * [Routes]{@link module:workbox-routing.Route} responding  with a Request if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof module:workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<module:workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            if (event.data && event.data.type === 'CACHE_URLS') { // eslint-disable-line
                const { payload } = event.data; // eslint-disable-line
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([
                    `Found a route to handle this request:`, route,
                ]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`, params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if ((matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0)) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-routing/_version.js ***!
  \**************************************************/
/***/ (function() {


// @ts-ignore
try {
    self['workbox:routing:6.2.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-routing/index.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationRoute": function() { return /* reexport safe */ _NavigationRoute_js__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute; },
/* harmony export */   "RegExpRoute": function() { return /* reexport safe */ _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_1__.RegExpRoute; },
/* harmony export */   "registerRoute": function() { return /* reexport safe */ _registerRoute_js__WEBPACK_IMPORTED_MODULE_2__.registerRoute; },
/* harmony export */   "Route": function() { return /* reexport safe */ _Route_js__WEBPACK_IMPORTED_MODULE_3__.Route; },
/* harmony export */   "Router": function() { return /* reexport safe */ _Router_js__WEBPACK_IMPORTED_MODULE_4__.Router; },
/* harmony export */   "setCatchHandler": function() { return /* reexport safe */ _setCatchHandler_js__WEBPACK_IMPORTED_MODULE_5__.setCatchHandler; },
/* harmony export */   "setDefaultHandler": function() { return /* reexport safe */ _setDefaultHandler_js__WEBPACK_IMPORTED_MODULE_6__.setDefaultHandler; }
/* harmony export */ });
/* harmony import */ var _NavigationRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationRoute.js */ "./node_modules/workbox-routing/NavigationRoute.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _registerRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _setCatchHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setCatchHandler.js */ "./node_modules/workbox-routing/setCatchHandler.js");
/* harmony import */ var _setDefaultHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setDefaultHandler.js */ "./node_modules/workbox-routing/setDefaultHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_7__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * @module workbox-routing
 */



/***/ }),

/***/ "./node_modules/workbox-routing/registerRoute.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-routing/registerRoute.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoute": function() { return /* binding */ registerRoute; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call [registerRoute()]{@link module:workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|module:workbox-routing.Route~matchCallback|module:workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {module:workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {module:workbox-routing.Route} The generated `Route`(Useful for
 * unregistering).
 *
 * @memberof module:workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http') ?
                captureUrl.pathname : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if ((new RegExp(`${wildcards}`)).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if ((url.pathname === captureUrl.pathname) &&
                    (url.origin !== captureUrl.origin)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/workbox-routing/setCatchHandler.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/setCatchHandler.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCatchHandler": function() { return /* binding */ setCatchHandler; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * If a Route throws an error while handling a request, this `handler`
 * will be called and given a chance to provide a response.
 *
 * @param {module:workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof module:workbox-routing
 */
function setCatchHandler(handler) {
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreateDefaultRouter)();
    defaultRouter.setCatchHandler(handler);
}



/***/ }),

/***/ "./node_modules/workbox-routing/setDefaultHandler.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-routing/setDefaultHandler.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setDefaultHandler": function() { return /* binding */ setDefaultHandler; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Define a default `handler` that's called when no routes explicitly
 * match the incoming request.
 *
 * Without a default handler, unmatched requests will go against the
 * network as if there were no service worker present.
 *
 * @param {module:workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof module:workbox-routing
 */
function setDefaultHandler(handler) {
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreateDefaultRouter)();
    defaultRouter.setDefaultHandler(handler);
}



/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMethod": function() { return /* binding */ defaultMethod; },
/* harmony export */   "validMethods": function() { return /* binding */ validMethods; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateDefaultRouter": function() { return /* binding */ getOrCreateDefaultRouter; }
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeHandler": function() { return /* binding */ normalizeHandler; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/workbox-strategies/CacheFirst.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-strategies/CacheFirst.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheFirst": function() { return /* binding */ CacheFirst; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of a [cache-first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network}
 * request strategy.
 *
 * A cache first strategy is useful for assets that have been revisioned,
 * such as URLs like `/styles/example.a8f5f1.css`, since they
 * can be cached for long periods of time.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class CacheFirst extends _Strategy_js__WEBPACK_IMPORTED_MODULE_3__.Strategy {
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const logs = [];
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: this.constructor.name,
                funcName: 'makeRequest',
                paramName: 'request',
            });
        }
        let response = await handler.cacheMatch(request);
        let error = undefined;
        if (!response) {
            if (true) {
                logs.push(`No response found in the '${this.cacheName}' cache. ` +
                    `Will respond with a network request.`);
            }
            try {
                response = await handler.fetchAndCachePut(request);
            }
            catch (err) {
                if (err instanceof Error) {
                    error = err;
                }
            }
            if (true) {
                if (response) {
                    logs.push(`Got response from network.`);
                }
                else {
                    logs.push(`Unable to get a response from the network.`);
                }
            }
        }
        else {
            if (true) {
                logs.push(`Found a cached response in the '${this.cacheName}' cache.`);
            }
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_4__.messages.strategyStart(this.constructor.name, request));
            for (const log of logs) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(log);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__.messages.printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('no-response', { url: request.url, error });
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/CacheOnly.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-strategies/CacheOnly.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheOnly": function() { return /* binding */ CacheOnly; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of a
 * [cache-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If there is no cache match, this will throw a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class CacheOnly extends _Strategy_js__WEBPACK_IMPORTED_MODULE_3__.Strategy {
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: this.constructor.name,
                funcName: 'makeRequest',
                paramName: 'request',
            });
        }
        const response = await handler.cacheMatch(request);
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_4__.messages.strategyStart(this.constructor.name, request));
            if (response) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Found a cached response in the '${this.cacheName}' ` +
                    `cache.`);
                _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__.messages.printFinalResponse(response);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`No response found in the '${this.cacheName}' cache.`);
            }
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('no-response', { url: request.url });
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/NetworkFirst.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-strategies/NetworkFirst.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkFirst": function() { return /* binding */ NetworkFirst; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/cacheOkAndOpaquePlugin.js */ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [network first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache}
 * request strategy.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class NetworkFirst extends _Strategy_js__WEBPACK_IMPORTED_MODULE_4__.Strategy {
    /**
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     * @param {number} [options.networkTimeoutSeconds] If set, any network requests
     * that fail to respond within the timeout will fallback to the cache.
     *
     * This option can be used to combat
     * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
     * scenarios.
     */
    constructor(options = {}) {
        super(options);
        // If this instance contains no plugins with a 'cacheWillUpdate' callback,
        // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.
        if (!this.plugins.some((p) => 'cacheWillUpdate' in p)) {
            this.plugins.unshift(_plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_3__.cacheOkAndOpaquePlugin);
        }
        this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
        if (true) {
            if (this._networkTimeoutSeconds) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(this._networkTimeoutSeconds, 'number', {
                    moduleName: 'workbox-strategies',
                    className: this.constructor.name,
                    funcName: 'constructor',
                    paramName: 'networkTimeoutSeconds',
                });
            }
        }
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const logs = [];
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: this.constructor.name,
                funcName: 'handle',
                paramName: 'makeRequest',
            });
        }
        const promises = [];
        let timeoutId;
        if (this._networkTimeoutSeconds) {
            const { id, promise } = this._getTimeoutPromise({ request, logs, handler });
            timeoutId = id;
            promises.push(promise);
        }
        const networkPromise = this._getNetworkPromise({ timeoutId, request, logs, handler });
        promises.push(networkPromise);
        const response = await handler.waitUntil((async () => {
            // Promise.race() will resolve as soon as the first promise resolves.
            return await handler.waitUntil(Promise.race(promises)) ||
                // If Promise.race() resolved with null, it might be due to a network
                // timeout + a cache miss. If that were to happen, we'd rather wait until
                // the networkPromise resolves instead of returning null.
                // Note that it's fine to await an already-resolved promise, so we don't
                // have to check to see if it's still "in flight".
                await networkPromise;
        })());
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.strategyStart(this.constructor.name, request));
            for (const log of logs) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(log);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('no-response', { url: request.url });
        }
        return response;
    }
    /**
     * @param {Object} options
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs array
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */
    _getTimeoutPromise({ request, logs, handler }) {
        let timeoutId;
        const timeoutPromise = new Promise((resolve) => {
            const onNetworkTimeout = async () => {
                if (true) {
                    logs.push(`Timing out the network response at ` +
                        `${this._networkTimeoutSeconds} seconds.`);
                }
                resolve(await handler.cacheMatch(request));
            };
            timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1000);
        });
        return {
            promise: timeoutPromise,
            id: timeoutId,
        };
    }
    /**
     * @param {Object} options
     * @param {number|undefined} options.timeoutId
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs Array.
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */
    async _getNetworkPromise({ timeoutId, request, logs, handler }) {
        let error;
        let response;
        try {
            response = await handler.fetchAndCachePut(request);
        }
        catch (fetchError) {
            if (fetchError instanceof Error) {
                error = fetchError;
            }
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (true) {
            if (response) {
                logs.push(`Got response from network.`);
            }
            else {
                logs.push(`Unable to get a response from the network. Will respond ` +
                    `with a cached response.`);
            }
        }
        if (error || !response) {
            response = await handler.cacheMatch(request);
            if (true) {
                if (response) {
                    logs.push(`Found a cached response in the '${this.cacheName}'` +
                        ` cache.`);
                }
                else {
                    logs.push(`No response found in the '${this.cacheName}' cache.`);
                }
            }
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/NetworkOnly.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-strategies/NetworkOnly.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkOnly": function() { return /* binding */ NetworkOnly; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [network-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If the network request fails, this will throw a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class NetworkOnly extends _Strategy_js__WEBPACK_IMPORTED_MODULE_4__.Strategy {
    /**
     * @param {Object} [options]
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {number} [options.networkTimeoutSeconds] If set, any network requests
     * that fail to respond within the timeout will result in a network error.
     */
    constructor(options = {}) {
        super(options);
        this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: this.constructor.name,
                funcName: '_handle',
                paramName: 'request',
            });
        }
        let error = undefined;
        let response;
        try {
            const promises = [handler.fetch(request)];
            if (this._networkTimeoutSeconds) {
                const timeoutPromise = (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_2__.timeout)(this._networkTimeoutSeconds * 1000);
                promises.push(timeoutPromise);
            }
            response = await Promise.race(promises);
            if (!response) {
                throw new Error(`Timed out the network response after ` +
                    `${this._networkTimeoutSeconds} seconds.`);
            }
        }
        catch (err) {
            if (err instanceof Error) {
                error = err;
            }
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.strategyStart(this.constructor.name, request));
            if (response) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Got response from network.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Unable to get a response from the network.`);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('no-response', { url: request.url, error });
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/StaleWhileRevalidate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-strategies/StaleWhileRevalidate.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaleWhileRevalidate": function() { return /* binding */ StaleWhileRevalidate; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/cacheOkAndOpaquePlugin.js */ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [stale-while-revalidate]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate}
 * request strategy.
 *
 * Resources are requested from both the cache and the network in parallel.
 * The strategy will respond with the cached version if available, otherwise
 * wait for the network response. The cache is updated with the network response
 * with each successful request.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class StaleWhileRevalidate extends _Strategy_js__WEBPACK_IMPORTED_MODULE_4__.Strategy {
    /**
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     */
    constructor(options = {}) {
        super(options);
        // If this instance contains no plugins with a 'cacheWillUpdate' callback,
        // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.
        if (!this.plugins.some((p) => 'cacheWillUpdate' in p)) {
            this.plugins.unshift(_plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_3__.cacheOkAndOpaquePlugin);
        }
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const logs = [];
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: this.constructor.name,
                funcName: 'handle',
                paramName: 'request',
            });
        }
        const fetchAndCachePromise = handler
            .fetchAndCachePut(request)
            .catch(() => {
            // Swallow this error because a 'no-response' error will be thrown in
            // main handler return flow. This will be in the `waitUntil()` flow.
        });
        let response = await handler.cacheMatch(request);
        let error;
        if (response) {
            if (true) {
                logs.push(`Found a cached response in the '${this.cacheName}'` +
                    ` cache. Will update with the network response in the background.`);
            }
        }
        else {
            if (true) {
                logs.push(`No response found in the '${this.cacheName}' cache. ` +
                    `Will wait for the network response.`);
            }
            try {
                // NOTE(philipwalton): Really annoying that we have to type cast here.
                // https://github.com/microsoft/TypeScript/issues/20006
                response = await fetchAndCachePromise;
            }
            catch (err) {
                if (err instanceof Error) {
                    error = err;
                }
            }
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.strategyStart(this.constructor.name, request));
            for (const log of logs) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(log);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('no-response', { url: request.url, error });
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/Strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/Strategy.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": function() { return /* binding */ Strategy; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof module:workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * [workbox-core]{@link module:workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * [route]{@link module:workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to [`handle()`]{@link module:workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of [response, done] promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string' ?
            new Request(options.request) :
            options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the [`handler`]{@link module:workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {module:workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof module:workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/workbox-strategies/StrategyHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-strategies/StrategyHandler.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyHandler": function() { return /* binding */ StrategyHandler; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return (typeof input === 'string') ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * [handle()]{@link module:workbox-strategies.Strategy~handle} or
 * [handleAll()]{@link module:workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof module:workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {module:workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     *     [match callback]{@link module:workbox-routing~matchCallback},
     *     (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * [match callback]{@link module:workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = await event.preloadResponse;
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail') ?
            request.clone() : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', { thrownErrorMessage: err.message });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ?
                undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse = (await callback({
                cacheName,
                matchOptions,
                cachedResponse,
                request: effectiveRequest,
                event: this.event,
            })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
        // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
        // feature. Consider into ways to only add this behavior if using
        // precaching.
        cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions) :
            null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ?
                responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        if (!this._cacheKeys[mode]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params,
                }));
            }
            this._cacheKeys[mode] = effectiveRequest;
        }
        return this._cacheKeys[mode];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * [`iterateCallbacks()`]{@link module:workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * [`doneWaiting()`]{@link module:workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * [`waitUntil()`]{@link module:workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while (promise = this._extendLifetimePromises.shift()) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache = (await callback({
                request: this.request,
                response: responseToCache,
                event: this.event,
            })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.js ***!
  \*****************************************************/
/***/ (function() {


// @ts-ignore
try {
    self['workbox:strategies:6.2.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-strategies/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-strategies/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheFirst": function() { return /* reexport safe */ _CacheFirst_js__WEBPACK_IMPORTED_MODULE_0__.CacheFirst; },
/* harmony export */   "CacheOnly": function() { return /* reexport safe */ _CacheOnly_js__WEBPACK_IMPORTED_MODULE_1__.CacheOnly; },
/* harmony export */   "NetworkFirst": function() { return /* reexport safe */ _NetworkFirst_js__WEBPACK_IMPORTED_MODULE_2__.NetworkFirst; },
/* harmony export */   "NetworkOnly": function() { return /* reexport safe */ _NetworkOnly_js__WEBPACK_IMPORTED_MODULE_3__.NetworkOnly; },
/* harmony export */   "StaleWhileRevalidate": function() { return /* reexport safe */ _StaleWhileRevalidate_js__WEBPACK_IMPORTED_MODULE_4__.StaleWhileRevalidate; },
/* harmony export */   "Strategy": function() { return /* reexport safe */ _Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy; },
/* harmony export */   "StrategyHandler": function() { return /* reexport safe */ _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_6__.StrategyHandler; }
/* harmony export */ });
/* harmony import */ var _CacheFirst_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheFirst.js */ "./node_modules/workbox-strategies/CacheFirst.js");
/* harmony import */ var _CacheOnly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CacheOnly.js */ "./node_modules/workbox-strategies/CacheOnly.js");
/* harmony import */ var _NetworkFirst_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NetworkFirst.js */ "./node_modules/workbox-strategies/NetworkFirst.js");
/* harmony import */ var _NetworkOnly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NetworkOnly.js */ "./node_modules/workbox-strategies/NetworkOnly.js");
/* harmony import */ var _StaleWhileRevalidate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StaleWhileRevalidate.js */ "./node_modules/workbox-strategies/StaleWhileRevalidate.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_7__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * There are common caching strategies that most service workers will need
 * and use. This module provides simple implementations of these strategies.
 *
 * @module workbox-strategies
 */



/***/ }),

/***/ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheOkAndOpaquePlugin": function() { return /* binding */ cacheOkAndOpaquePlugin; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const cacheOkAndOpaquePlugin = {
    /**
     * Returns a valid response (to allow caching) if the status is 200 (OK) or
     * 0 (opaque).
     *
     * @param {Object} options
     * @param {Response} options.response
     * @return {Response|null}
     *
     * @private
     */
    cacheWillUpdate: async ({ response }) => {
        if (response.status === 200 || response.status === 0) {
            return response;
        }
        return null;
    },
};


/***/ }),

/***/ "./node_modules/workbox-strategies/utils/messages.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-strategies/utils/messages.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": function() { return /* binding */ messages; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const messages = {
    strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url)}'`,
    printFinalResponse: (response) => {
        if (response) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`View the final response here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(response || '[No response returned]');
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
        }
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/workbox-core/index.mjs ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-core/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _index_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/workbox-expiration/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-expiration/index.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-expiration/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _index_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _index_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/workbox-routing/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/index.mjs ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-routing/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _index_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/workbox-strategies/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-strategies/index.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-strategies/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _index_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	!function() {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push(function(options) {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function(moduleObject, moduleExports, webpackRequire) {
/******/ 				var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				var cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : function() {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./service-worker.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RjVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hMckc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhDO0FBQ1E7QUFDd0I7QUFDUTtBQUNnQjtBQUM5QztBQUNOO0FBQ29DO0FBQ3hCO0FBQ2hCO0FBQzhCO0FBQzVCO0FBQ0k7QUFDTTtBQUNuQztBQUNvTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQzBFO0FBQ2xEO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzRkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQzJEO0FBQ25DO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0VBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtFQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0VBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrRUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDRCQUE0QjtBQUM1RCxrQkFBa0Isa0VBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtFQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixNQUFxQyxHQUFHLENBQUk7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsUUFBUTtBQUNuQixXQUFXLGVBQWU7QUFDMUIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsbUJBQW1CLG9CQUFvQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxhQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLCtCQUErQjtBQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDK0M7QUFDd0I7QUFDL0M7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0MsUUFBUSwwREFBVSxpQkFBaUIsb0ZBQXdCLEVBQUU7QUFDN0Q7QUFDQTtBQUNBLDJCQUEyQiwrRUFBbUI7QUFDOUM7QUFDQSxZQUFZLElBQXFDO0FBQ2pELFlBQVksMERBQVU7QUFDdEI7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0MsUUFBUSwwREFBVTtBQUNsQjtBQUNBO0FBQ3NDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnQkFBZ0I7QUFDOUQ7QUFDMEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3QjtBQUN4QixnQkFBZ0IsTUFBcUMsR0FBRyxDQUFJO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix5QkFBeUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VDO0FBQ2Y7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxnQkFBZ0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxnQkFBZ0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxvREFBTztBQUNyQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsV0FBVyxVQUFVO0FBQ3JCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxQjs7Ozs7Ozs7Ozs7QUNyQlI7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FFO0FBQzlDO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUZBQWtDO0FBQ2pELEtBQUs7QUFDTDtBQUNBLGVBQWUsOEVBQTJCO0FBQzFDLEtBQUs7QUFDTDtBQUNBLGVBQWUsd0VBQXFCO0FBQ3BDLEtBQUs7QUFDTDtBQUNBLGVBQWUsNkVBQTBCO0FBQ3pDLEtBQUs7QUFDTDtBQUNBLGVBQWUsd0VBQXFCO0FBQ3BDLEtBQUs7QUFDTDtBQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJ4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NHO0FBQzVDO0FBQ25DO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxLQUFLLDRCQUE0QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0VBQVksaUNBQWlDLFFBQVE7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0hBQWtDO0FBQ25EO0FBQ0E7QUFDQTtBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RTtBQUNuQztBQUNHO0FBQ0k7QUFDQTtBQUNjO0FBQ2hCO0FBQ3hCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJIO0FBQ2hHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDeUM7QUFDZDtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxvQkFBb0Isa0RBQVE7QUFDNUI7QUFDQSw0REFBNEQsS0FBSztBQUNqRTtBQUNBO0FBQ0E7QUFDTywwQkFBMEIsTUFBcUM7QUFDdEUsSUFBSSxDQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQ3BCO0FBQ1Asd0JBQXdCLHlDQUF5QztBQUNqRTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQyxpQ0FBaUMsdUJBQXVCO0FBQ3hELGVBQWUsc0JBQXNCO0FBQ3JDLEtBQUs7QUFDTCx1QkFBdUIsNENBQTRDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDLGdCQUFnQixXQUFXLEdBQUcsVUFBVSxHQUFHLFNBQVM7QUFDcEQsS0FBSztBQUNMLHlCQUF5QiwwREFBMEQ7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFVBQVU7QUFDdEQsaUNBQWlDLFVBQVU7QUFDM0MsZ0JBQWdCLFdBQVcsR0FBRyxhQUFhO0FBQzNDLGVBQWUsU0FBUyxzQkFBc0IsYUFBYTtBQUMzRCxLQUFLO0FBQ0wsMEJBQTBCLHFGQUFxRjtBQUMvRztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RDtBQUNBO0FBQ0Esb0JBQW9CLFdBQVcsR0FBRyxhQUFhLEVBQUUsU0FBUztBQUMxRCxnREFBZ0Qsa0JBQWtCO0FBQ2xFO0FBQ0EsaUNBQWlDLFVBQVU7QUFDM0MsZ0JBQWdCLFdBQVcsR0FBRyxhQUFhLEVBQUUsU0FBUztBQUN0RCw0Q0FBNEMsa0JBQWtCO0FBQzlELEtBQUs7QUFDTCwyQkFBMkIsNERBQTREO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFdBQVcsR0FBRyxVQUFVLEdBQUcsU0FBUztBQUN0RCxnQkFBZ0IsVUFBVSwyQkFBMkIsZUFBZTtBQUNwRSxLQUFLO0FBQ0wsNENBQTRDLE9BQU87QUFDbkQ7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBLEtBQUs7QUFDTCxnREFBZ0QseUJBQXlCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0EsS0FBSztBQUNMLDBDQUEwQyxvQkFBb0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxtQkFBbUI7QUFDakUsS0FBSztBQUNMLDZCQUE2QixvQkFBb0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRSxZQUFZLFFBQVE7QUFDcEQsZ0JBQWdCLHNCQUFzQjtBQUN0QyxLQUFLO0FBQ0wscURBQXFELFFBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxPQUFPO0FBQ3RELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsOEJBQThCLE1BQU07QUFDcEMsdURBQXVELEtBQUs7QUFDNUQsS0FBSztBQUNMLCtCQUErQixNQUFNO0FBQ3JDLGtDQUFrQyxLQUFLO0FBQ3ZDO0FBQ0EsS0FBSztBQUNMLHVDQUF1Qyx1QkFBdUI7QUFDOUQsdUJBQXVCLFdBQVc7QUFDbEMsZ0JBQWdCLFVBQVU7QUFDMUIsS0FBSztBQUNMLGlDQUFpQyw0Q0FBNEM7QUFDN0UsZ0NBQWdDLFVBQVU7QUFDMUMseUNBQXlDLFdBQVcsR0FBRyxVQUFVLEdBQUcsVUFBVTtBQUM5RTtBQUNBLEtBQUs7QUFDTCw2QkFBNkIsa0VBQWtFO0FBQy9GLGdDQUFnQyxVQUFVO0FBQzFDLGdCQUFnQixjQUFjLHVCQUF1QixzQkFBc0I7QUFDM0Usd0NBQXdDLFdBQVcsR0FBRyxVQUFVLEdBQUcsU0FBUztBQUM1RTtBQUNBLEtBQUs7QUFDTCxzQ0FBc0MsaUNBQWlDO0FBQ3ZFO0FBQ0Esa0JBQWtCLFdBQVcsR0FBRyxVQUFVLEdBQUcsU0FBUztBQUN0RCxLQUFLO0FBQ0wsdUNBQXVDLGlDQUFpQztBQUN4RTtBQUNBLGtCQUFrQixXQUFXLEdBQUcsVUFBVSxHQUFHLFNBQVM7QUFDdEQsS0FBSztBQUNMLHlCQUF5QixpQ0FBaUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFVBQVU7QUFDckQ7QUFDQSx1Q0FBdUMsV0FBVyxHQUFHLFNBQVM7QUFDOUQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNkJBQTZCLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxzQkFBc0I7QUFDcEUsS0FBSztBQUNMLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEMsS0FBSztBQUNMLCtCQUErQix1QkFBdUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEMsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLGtCQUFrQjtBQUNsRCw2QkFBNkIsTUFBTSxhQUFhLElBQUk7QUFDcEQsZ0VBQWdFLE1BQU07QUFDdEUsS0FBSztBQUNMLDJDQUEyQyxhQUFhO0FBQ3hELG1DQUFtQyxJQUFJLHFCQUFxQixPQUFPO0FBQ25FO0FBQ0EsS0FBSztBQUNMLHFDQUFxQyxLQUFLO0FBQzFDLGlEQUFpRCxJQUFJO0FBQ3JEO0FBQ0EsS0FBSztBQUNMLHNCQUFzQixZQUFZO0FBQ2xDLHlFQUF5RSxJQUFJO0FBQzdFO0FBQ0EsbURBQW1ELE1BQU07QUFDekQ7QUFDQTtBQUNBLEtBQUs7QUFDTCxrQ0FBa0MsYUFBYTtBQUMvQyw4Q0FBOEMsSUFBSTtBQUNsRCxpREFBaUQsT0FBTztBQUN4RCxLQUFLO0FBQ0wsNEJBQTRCLEtBQUs7QUFDakMsMkNBQTJDLElBQUk7QUFDL0M7QUFDQSxLQUFLO0FBQ0wsb0RBQW9ELEtBQUs7QUFDekQ7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQixLQUFLO0FBQ0wsaUNBQWlDLGdCQUFnQjtBQUNqRCx5REFBeUQsV0FBVyxNQUFNLElBQUk7QUFDOUUsS0FBSztBQUNMLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0EsK0RBQStELE9BQU87QUFDdEUsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQytCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ovQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQzhDO0FBQ0E7QUFDd0I7QUFDL0M7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0MsUUFBUSw2REFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxJQUFJLG1GQUF1QjtBQUMzQixRQUFRLElBQXFDO0FBQzdDLFFBQVEsMERBQVU7QUFDbEI7QUFDQTtBQUNzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDOEM7QUFDUTtBQUNJO0FBQ25DO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQSxZQUFZLDZEQUFhO0FBQ3pCO0FBQ0E7QUFDQSxzQ0FBc0MsSUFBSTtBQUMxQyxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0Esc0JBQXNCLGtFQUFZO0FBQ2xDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHNCQUFzQixrRUFBWTtBQUNsQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxzQkFBc0Isa0VBQVk7QUFDbEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsSUFBSSw0RUFBd0I7QUFDNUI7QUFDK0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUM4QztBQUN2QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0MsUUFBUSwyREFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VCOzs7Ozs7Ozs7Ozs7OztBQzFCdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lEO0FBQ1U7QUFDVjtBQUNZO0FBQ0c7QUFDakQ7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0EsWUFBWSxJQUFxQztBQUNqRCxZQUFZLHlFQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMEJBQTBCLDhFQUFZO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsZ0JBQWdCLHlFQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxnQkFBZ0IseUVBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGlGQUFvQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pEO0FBQ0EsZ0JBQWdCLGlGQUFxQixZQUFZLG9CQUFvQjtBQUNyRSx1QkFBdUIsZ0RBQWdEO0FBQ3ZFLHVCQUF1QiwwQ0FBMEM7QUFDakUsd0JBQXdCLGdCQUFnQjtBQUN4QyxnQkFBZ0Isc0VBQVUsMEJBQTBCO0FBQ3BELG1DQUFtQztBQUNuQyw2Q0FBNkMsc0VBQVUsUUFBUSxJQUFJO0FBQ25FLGdCQUFnQiwyRUFBZTtBQUMvQjtBQUNBO0FBQ0EsZ0JBQWdCLHdFQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdGQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pELFlBQVkseUVBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQXFDO0FBQ3JELDBCQUEwQiw4RUFBWTtBQUN0QztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RDtBQUNRO0FBQ0U7QUFDTTtBQUNoQjtBQUMrQjtBQUNuQjtBQUNkO0FBQ2hDO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5QkFBeUI7QUFDeEMsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCLG1CQUFtQixRQUFRO0FBQzNCLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsMkNBQTJDO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnRkFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQXFDO0FBQzdELCtEQUErRDtBQUMvRDtBQUNBLDRCQUE0Qix1RUFBVztBQUN2QztBQUNBLG9DQUFvQyxzRkFBYyxvQkFBb0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQixtQkFBbUIsUUFBUTtBQUMzQixtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsb0JBQW9CO0FBQzNELGdCQUFnQixJQUFxQztBQUNyRCxnQkFBZ0IseUVBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCLDZFQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxJQUFxQztBQUNqRDtBQUNBLDBCQUEwQiw4RUFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGdCQUFnQix5RUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsZ0JBQWdCLHlFQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0dBQTBCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUZBQXlCO0FBQ25ELHNCQUFzQiw4RUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0VBQWU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEI7Ozs7Ozs7Ozs7O0FDN1BmO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VEO0FBQ0U7QUFDbEM7QUFDdkI7QUFDQTtBQUNBO0FBQzhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN1QztBQUNmO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsZUFBZTtBQUNuRjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsZUFBZTtBQUN4RSx5REFBeUQsZUFBZTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSx1QkFBdUI7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDJDQUFNO0FBQ25DO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkxoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lEO0FBQ1E7QUFDUjtBQUNZO0FBQ047QUFDSjtBQUMwQjtBQUNWO0FBQ047QUFDQTtBQUNaO0FBQ2xDO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQW9ELElBQUk7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1FQUFnQjtBQUM3Qyx1QkFBdUIsMEZBQTBCO0FBQ2pEO0FBQ0E7QUFDQSxvQkFBb0Isb0ZBQXNCLEdBQUcsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNENBQTRDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsc0NBQXNDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBFQUEwRTtBQUN6RjtBQUNBO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pELFlBQVksMEVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCLEVBQUUsd0VBQWM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOEVBQVk7QUFDdEM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw4RUFBWTtBQUMxQztBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyQkFBMkI7QUFDeEQ7QUFDQSxvQkFBb0IsS0FBcUMsRUFBRSxFQUkxQztBQUNqQjtBQUNBLG9CQUFvQix1RUFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEMsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0RUFBUztBQUN4Qiw0Q0FBNEMsOEZBQTJCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLG9CQUFvQiw4QkFBOEI7QUFDbEQsZ0JBQWdCLElBQXFDO0FBQ3JELGdCQUFnQixrRkFBbUI7QUFDbkM7QUFDQSxxQkFBcUI7QUFDckIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQyxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDRFQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQXFDO0FBQ3JELGdCQUFnQixrRkFBbUI7QUFDbkM7QUFDQSxxQkFBcUI7QUFDckIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZUFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhFQUFZLHdCQUF3QixLQUFLO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxVQUFVO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQzhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwUzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDeUY7QUFDbEU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQ0FBaUM7QUFDbkQ7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0dBQTZCO0FBQ3pDO0FBQ0E7QUFDa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RDtBQUNnQjtBQUN4QjtBQUN3QjtBQUNsRDtBQUN2QjtBQUNBLHlCQUF5QixvQ0FBb0M7QUFDN0Qsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyREFBSztBQUNqQztBQUNBLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUI7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQSxlQUFlLDJDQUEyQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0Esc0NBQXNDLHNGQUFxQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLGdCQUFnQixJQUFxQztBQUNyRCxnQkFBZ0Isd0VBQVk7QUFDNUIsb0JBQW9CLHNGQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RHpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDNEQ7QUFDSztBQUNRO0FBQ2hCO0FBQ1k7QUFDWDtBQUNuQztBQUN2QjtBQUNBLGdCQUFnQiwwQ0FBMEM7QUFDMUQ7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9FQUFRO0FBQ3ZDO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0Esc0JBQXNCLHFDQUFxQztBQUMzRCxlQUFlLGVBQWUsNEJBQTRCO0FBQzFEO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQjtBQUNoQjtBQUNBLGVBQWUsUUFBUTtBQUN2Qiw2QkFBNkI7QUFDN0I7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qiw0QkFBNEIsMEZBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQixlQUFlLDJDQUEyQztBQUMxRDtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBcUM7QUFDckQsZ0JBQWdCLHVFQUFXO0FBQzNCLHVCQUF1QixzRkFBYyxlQUFlLEtBQUssZ0JBQWdCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsSUFBcUM7QUFDekQ7QUFDQSx3QkFBd0Isc0VBQVUsbUJBQW1CLHNGQUFjLGVBQWU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4RUFBWTtBQUNsQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsWUFBWSxJQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlGQUFxQixtQ0FBbUMsc0ZBQWM7QUFDbEYsWUFBWSxzRUFBVSwrQkFBK0Isc0ZBQWMsd0RBQXdEO0FBQzNILFlBQVksaUZBQXFCO0FBQ2pDLFlBQVksc0VBQVU7QUFDdEIsWUFBWSwyRUFBZTtBQUMzQixZQUFZLGlGQUFxQjtBQUNqQyxZQUFZLHNFQUFVO0FBQ3RCLFlBQVksMkVBQWU7QUFDM0IsWUFBWSwyRUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4RUFBWTtBQUNsQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDLDJDQUEyQywwRUFBWTtBQUN2RCxLQUFLO0FBQ0w7QUFDNEI7Ozs7Ozs7Ozs7O0FDdE5mO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RjtBQUNsRTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0dBQTZCO0FBQzVEO0FBQ0E7QUFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUU7QUFDd0I7QUFDdEM7QUFDNUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQiwyQkFBMkIsOENBQThDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNHQUE2QjtBQUM1RCw4QkFBOEIsNERBQWE7QUFDM0MsSUFBSSwrRUFBYTtBQUNqQjtBQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QnBCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDaUU7QUFDUjtBQUNjO0FBQ2hEO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwRkFBMEI7QUFDcEQsd0JBQXdCLG9GQUFvQjtBQUM1QyxnQkFBZ0IsSUFBcUM7QUFDckQ7QUFDQSxvQkFBb0Isc0VBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lGO0FBQ2xFO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJLGtEQUFrRDtBQUN0RCxJQUFJLDBCQUEwQjtBQUM5QjtBQUNBLGlDQUFpQyx5QkFBeUI7QUFDMUQsSUFBSSxrREFBa0Q7QUFDdEQ7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzR0FBNkI7QUFDNUQ7QUFDQTtBQUNtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lGO0FBQ2xFO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNHQUE2QjtBQUM1RDtBQUNBO0FBQzZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQzZDO0FBQ0o7QUFDMEI7QUFDSTtBQUNaO0FBQ1I7QUFDVjtBQUNnQjtBQUNJO0FBQ1Y7QUFDTTtBQUNZO0FBQzlDO0FBQ3ZCO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDNE47Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDNU47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RjtBQUNsRTtBQUN2QjtBQUNBO0FBQ0EsSUFBSSx3Q0FBd0M7QUFDNUMsSUFBSSwwQkFBMEI7QUFDOUI7QUFDQSxpQ0FBaUMseUJBQXlCO0FBQzFELElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzR0FBNkI7QUFDNUQ7QUFDQTtBQUN5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJ6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lGO0FBQ2xFO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQ0FBc0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlDQUF5QztBQUN6RDtBQUNBO0FBQ0Esd0JBQXdCLGlEQUFpRDtBQUN6RTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNHQUE2QjtBQUM1RDtBQUNBO0FBQ29COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lDO0FBQ0E7QUFDbEI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwQ0FBMEM7QUFDMUQsZ0JBQWdCLDBDQUEwQztBQUMxRDtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsUUFBUTtBQUNuQiwyQkFBMkIsOENBQThDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBUTtBQUNaLElBQUksc0RBQVE7QUFDWjtBQUM0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QjVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDLDJDQUEyQyxrQkFBa0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDBCQUEwQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxpQkFBaUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwrQkFBK0I7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FFO0FBQzdDO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGtCQUFrQiw4RUFBWSx3Q0FBd0MsT0FBTztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0Esa0JBQWtCLDhFQUFZLHdDQUF3QyxPQUFPO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDMkU7QUFDbkQ7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ08sdUNBQXVDLHlIQUF5SCxJQUFJO0FBQzNLO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx3RkFBeUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGdCQUFnQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUM4RDtBQUN0QztBQUN4QjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDTztBQUNQO0FBQ0EsaUNBQWlDLHNFQUFrQjtBQUNuRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lEO0FBQ2pDO0FBQ3hCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsZUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUZBQXFCO0FBQ3pCO0FBQ0EsUUFBUSxzRUFBVTtBQUNsQjtBQUNBLElBQUksMkVBQWU7QUFDbkI7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLFFBQVEsaUZBQXFCO0FBQzdCLGVBQWUsZUFBZTtBQUM5QixzQkFBc0IseUNBQXlDO0FBQy9EO0FBQ0EsUUFBUSwyRUFBZTtBQUN2QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RDtBQUNqQztBQUN4QjtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLGVBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlGQUFxQjtBQUN6QjtBQUNBLFFBQVEsc0VBQVU7QUFDbEI7QUFDQSxJQUFJLDJFQUFlO0FBQ25CO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsV0FBVyxlQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0JBQWdCLE1BQU0sZ0NBQWdDO0FBQzFGO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRCx1QkFBdUIsK0NBQStDO0FBQ3RFO0FBQ0EsUUFBUSxpRkFBcUI7QUFDN0I7QUFDQTtBQUNBLFFBQVEsMkVBQWU7QUFDdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxlQUFlO0FBQzFCO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RDtBQUNBO0FBQ3RCO0FBQ1o7QUFDdkI7QUFDQTtBQUNBLFdBQVcsb0NBQW9DO0FBQy9DLHlCQUF5Qix5SUFBeUk7QUFDbEs7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDRDQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLGVBQWUsd0NBQXdDO0FBQ3ZEO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsZUFBZTtBQUM5QjtBQUNBLGVBQWUsZUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUNBQW1DLElBQUk7QUFDbEUsWUFBWSxJQUFxQztBQUNqRCxZQUFZLGlGQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixZQUFZLGlGQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsS0FBSztBQUNwQixlQUFlLFNBQVM7QUFDeEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsSUFBcUM7QUFDekQsb0JBQW9CLHNFQUFVLHlCQUF5QixtQkFBbUI7QUFDMUU7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBcUM7QUFDckQsZ0JBQWdCLHdFQUFZLHlCQUF5QixtQkFBbUI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pELFlBQVksc0VBQVUseUJBQXlCLG1CQUFtQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekczQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lEO0FBQ0E7QUFDdEI7QUFDWjtBQUN2QjtBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0Q0FBSztBQUMvQjtBQUNBO0FBQ0Esd0JBQXdCLHVIQUF1SDtBQUMvSTtBQUNBLG1CQUFtQiw4Q0FBOEM7QUFDakU7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLHdDQUF3QztBQUN2RDtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pELFlBQVksNkVBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsSUFBcUM7QUFDekQsb0JBQW9CLHdFQUFZLDRCQUE0QixrQkFBa0I7QUFDOUUseURBQXlELGVBQWU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUV2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lEO0FBQ1U7QUFDSjtBQUN4QztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0NBQXNDO0FBQ3JEO0FBQ0E7QUFDQSxlQUFlLHdDQUF3QztBQUN2RDtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0EseUNBQXlDLDhEQUFhO0FBQ3RELFlBQVksSUFBcUM7QUFDakQsWUFBWSx5RUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGdCQUFnQiwwRUFBYyxTQUFTLDZEQUFZLElBQUkscUJBQXFCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRFQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3Q0FBd0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDRFQUFnQjtBQUM1QztBQUNBO0FBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RDtBQUNnQjtBQUNwQjtBQUNJO0FBQ007QUFDTTtBQUM5QztBQUN2QjtBQUNBO0FBQ0EsWUFBWSxvQ0FBb0M7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrREFBa0Q7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5Qix5REFBeUQsZ0JBQWdCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRSx3QkFBd0IsVUFBVSxjQUFjO0FBQ2hELG9CQUFvQixJQUFxQztBQUN6RCxvQkFBb0Isd0VBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGdCQUFnQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsSUFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEIsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQSxnQkFBZ0IsNkJBQTZCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEMsWUFBWSxJQUFxQztBQUNqRCxZQUFZLDZFQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBcUM7QUFDckQsZ0JBQWdCLHdFQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBWSxJQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBcUM7QUFDckQ7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFxQztBQUNyRDtBQUNBO0FBQ0EsZ0JBQWdCLHdFQUFZLHdCQUF3QixzRkFBYyxNQUFNO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLFlBQVksSUFBcUM7QUFDakQ7QUFDQTtBQUNBLFlBQVksaUZBQXFCLDZCQUE2QixzRkFBYyxNQUFNO0FBQ2xGO0FBQ0E7QUFDQSxvQkFBb0Isc0VBQVU7QUFDOUI7QUFDQTtBQUNBLG9CQUFvQixzRUFBVTtBQUM5QjtBQUNBLGFBQWE7QUFDYixZQUFZLDJFQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsNkJBQTZCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQXFDO0FBQzdEO0FBQ0E7QUFDQSx3QkFBd0IsaUZBQXFCO0FBQzdDLGdDQUFnQyxzRkFBYyxNQUFNO0FBQ3BELHdCQUF3Qix3RUFBWTtBQUNwQyx3QkFBd0Isd0VBQVk7QUFDcEMsd0JBQXdCLDJFQUFlO0FBQ3ZDO0FBQ0E7QUFDQSwyREFBMkQsNkJBQTZCO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsSUFBcUM7QUFDN0Q7QUFDQTtBQUNBLHdCQUF3QixpRkFBcUI7QUFDN0MsZ0NBQWdDLHNGQUFjLE1BQU07QUFDcEQsd0JBQXdCLHdFQUFZO0FBQ3BDLHdCQUF3Qix3RUFBWTtBQUNwQyx3QkFBd0IsMkVBQWU7QUFDdkM7QUFDQSx1REFBdUQscUJBQXFCO0FBQzVFO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLEtBQUs7QUFDcEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUNBQWlDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsaUNBQWlDO0FBQy9FO0FBQ0Esb0JBQW9CLElBQXFDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1RUFBVyxrQkFBa0Isc0ZBQWMsTUFBTTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdDQUF3QztBQUN2RDtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0Esd0NBQXdDLDhEQUFhO0FBQ3JELDRDQUE0Qyw0RUFBZ0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0NBQXdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0RUFBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhCQUE4QjtBQUM3QztBQUNBO0FBQ0EsWUFBWSxJQUFxQztBQUNqRCxZQUFZLHlFQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFlBQVksNEVBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFlBQVkseUVBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsWUFBWSw0RUFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsWUFBWSx5RUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4QkFBOEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhFQUFZO0FBQ2xDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4RUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDa0I7Ozs7Ozs7Ozs7O0FDdFlMO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN1RDtBQUNSO0FBQ0k7QUFDaEI7QUFDRTtBQUNrQjtBQUNJO0FBQ3BDO0FBQ3ZCO0FBQ0E7QUFDQTtBQUMyRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCM0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RDtBQUNZO0FBQ2xDO0FBQ1k7QUFDZ0M7QUFDeEQ7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrREFBa0Q7QUFDNUU7QUFDQSxXQUFXLHVGQUF1RjtBQUNsRztBQUNBLFdBQVcsd0NBQXdDO0FBQ25EO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxZQUFZLDhCQUE4QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxJQUFxQztBQUNqRDtBQUNBLDBCQUEwQiw4RUFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QyxnQkFBZ0Isd0VBQVk7QUFDNUIsa0NBQWtDLFVBQVU7QUFDNUMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSztBQUN0QyxnQkFBZ0IsSUFBcUM7QUFDckQ7QUFDQTtBQUNBLG9CQUFvQix3RUFBWSxJQUFJLFNBQVM7QUFDN0MsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRDQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3REFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQUs7QUFDekI7QUFDQSxnQ0FBZ0MsNENBQUs7QUFDckM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhFQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDBCQUEwQiw0RkFBd0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ3lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RnpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDK0U7QUFDeEQ7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHdDQUF3QztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRGQUF3QjtBQUNsRDtBQUNBO0FBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDK0U7QUFDeEQ7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHdDQUF3QztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRGQUF3QjtBQUNsRDtBQUNBO0FBQzZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDc0M7QUFDZDtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0EsNEJBQTRCLDhDQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDeUQ7QUFDakM7QUFDeEI7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsWUFBWSxJQUFxQztBQUNqRCxZQUFZLDRFQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksSUFBcUM7QUFDakQsWUFBWSx5RUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDeUQ7QUFDQTtBQUNZO0FBQzVCO0FBQ007QUFDeEI7QUFDdkI7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFRO0FBQ2pDO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQixlQUFlLDJDQUEyQztBQUMxRDtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pELFlBQVksNkVBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQXFDO0FBQ3JELHVEQUF1RCxlQUFlO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQXFDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFxQztBQUNyRCw2REFBNkQsZUFBZTtBQUM1RTtBQUNBO0FBQ0EsWUFBWSxJQUFxQztBQUNqRCxZQUFZLGlGQUFxQixDQUFDLHNFQUFzQjtBQUN4RDtBQUNBLGdCQUFnQixzRUFBVTtBQUMxQjtBQUNBLFlBQVksMkVBQTJCO0FBQ3ZDLFlBQVksMkVBQWU7QUFDM0I7QUFDQTtBQUNBLHNCQUFzQiw4RUFBWSxrQkFBa0IseUJBQXlCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZ0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lEO0FBQ0E7QUFDWTtBQUM1QjtBQUNNO0FBQ3hCO0FBQ3ZCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJFQUEyRTtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQVE7QUFDaEM7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CLGVBQWUsMkNBQTJDO0FBQzFEO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pELFlBQVksNkVBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pELFlBQVksaUZBQXFCLENBQUMsc0VBQXNCO0FBQ3hEO0FBQ0EsZ0JBQWdCLHNFQUFVLG9DQUFvQyxlQUFlO0FBQzdFO0FBQ0EsZ0JBQWdCLDJFQUEyQjtBQUMzQztBQUNBO0FBQ0EsZ0JBQWdCLHNFQUFVLDhCQUE4QixlQUFlO0FBQ3ZFO0FBQ0EsWUFBWSwyRUFBZTtBQUMzQjtBQUNBO0FBQ0Esc0JBQXNCLDhFQUFZLGtCQUFrQixrQkFBa0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lEO0FBQ0E7QUFDWTtBQUNRO0FBQ3BDO0FBQ007QUFDeEI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseUZBQXlGO0FBQ3ZIO0FBQ0Esa0JBQWtCLCtCQUErQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrREFBUTtBQUNuQztBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQSxzQkFBc0IscUNBQXFDO0FBQzNELGVBQWUsZUFBZSw0QkFBNEI7QUFDMUQ7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkZBQTJGO0FBQzVHO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsc0ZBQXNCO0FBQ3ZEO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pEO0FBQ0EsZ0JBQWdCLHlFQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQixlQUFlLDJDQUEyQztBQUMxRDtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pELFlBQVksNkVBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWMsNEJBQTRCLHdCQUF3QjtBQUN0RjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsbUNBQW1DO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFlBQVksSUFBcUM7QUFDakQsWUFBWSxpRkFBcUIsQ0FBQyxzRUFBc0I7QUFDeEQ7QUFDQSxnQkFBZ0Isc0VBQVU7QUFDMUI7QUFDQSxZQUFZLDJFQUEyQjtBQUN2QyxZQUFZLDJFQUFlO0FBQzNCO0FBQ0E7QUFDQSxzQkFBc0IsOEVBQVksa0JBQWtCLGtCQUFrQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdCQUF3QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsSUFBcUM7QUFDekQ7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLGtCQUFrQjtBQUNqQyxlQUFlLFNBQVM7QUFDeEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1DQUFtQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksSUFBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBcUM7QUFDckQ7QUFDQSxpRUFBaUUsZUFBZTtBQUNoRjtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsZUFBZTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE14QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lEO0FBQ0E7QUFDRTtBQUNVO0FBQzVCO0FBQ007QUFDeEI7QUFDdkI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkVBQTJFO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrREFBUTtBQUNsQztBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLGVBQWUsNEJBQTRCO0FBQzFEO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQixlQUFlLDJDQUEyQztBQUMxRDtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsWUFBWSxJQUFxQztBQUNqRCxZQUFZLDZFQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsd0VBQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2QkFBNkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pELFlBQVksaUZBQXFCLENBQUMsc0VBQXNCO0FBQ3hEO0FBQ0EsZ0JBQWdCLHNFQUFVO0FBQzFCO0FBQ0E7QUFDQSxnQkFBZ0Isc0VBQVU7QUFDMUI7QUFDQSxZQUFZLDJFQUEyQjtBQUN2QyxZQUFZLDJFQUFlO0FBQzNCO0FBQ0E7QUFDQSxzQkFBc0IsOEVBQVksa0JBQWtCLHlCQUF5QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRnZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDeUQ7QUFDQTtBQUNZO0FBQ1E7QUFDcEM7QUFDTTtBQUN4QjtBQUN2QjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseUZBQXlGO0FBQ3ZIO0FBQ0Esa0JBQWtCLCtCQUErQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrREFBUTtBQUMzQztBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQSxzQkFBc0IscUNBQXFDO0FBQzNELGVBQWUsZUFBZSw0QkFBNEI7QUFDMUQ7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHNGQUFzQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CLGVBQWUsMkNBQTJDO0FBQzFEO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFlBQVksSUFBcUM7QUFDakQsWUFBWSw2RUFBaUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFxQztBQUNyRCw2REFBNkQsZUFBZTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFxQztBQUNyRCx1REFBdUQsZUFBZTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksSUFBcUM7QUFDakQsWUFBWSxpRkFBcUIsQ0FBQyxzRUFBc0I7QUFDeEQ7QUFDQSxnQkFBZ0Isc0VBQVU7QUFDMUI7QUFDQSxZQUFZLDJFQUEyQjtBQUN2QyxZQUFZLDJFQUFlO0FBQzNCO0FBQ0E7QUFDQSxzQkFBc0IsOEVBQVksa0JBQWtCLHlCQUF5QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RIaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNpRTtBQUNJO0FBQ1o7QUFDZ0I7QUFDbEI7QUFDaEM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQSxzQkFBc0IscUNBQXFDO0FBQzNELGVBQWUsZUFBZSw0QkFBNEI7QUFDMUQ7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxQ0FBcUM7QUFDL0Q7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSx5QkFBeUIseUZBQXlCO0FBQ2xEO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCLGVBQWUsR0FBRztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0RBQWdEO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0IsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxHQUFHO0FBQ2xCLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0VBQWUsU0FBUyx3QkFBd0I7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGdCQUFnQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4RUFBWSxrQkFBa0Isa0JBQWtCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsdUJBQXVCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsSUFBcUM7QUFDMUQsZ0JBQWdCLHNFQUFVLHlCQUF5QixzRkFBYyxjQUFjO0FBQy9FLDBCQUEwQixnREFBZ0Q7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMEJBQTBCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0I7QUFDcEI7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsMkNBQTJDO0FBQ3RELFlBQVk7QUFDWjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuT0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RDtBQUNnQztBQUM1QjtBQUNvQztBQUN4QjtBQUNoQjtBQUNFO0FBQ1U7QUFDOUM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaURBQWlEO0FBQy9ELGlCQUFpQixvREFBb0Q7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRCxlQUFlLFFBQVE7QUFDdkIsZUFBZSxnQkFBZ0I7QUFDL0IsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxHQUFHO0FBQ2xCLDRCQUE0QiwyQ0FBMkM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNENBQTRDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsWUFBWSxJQUFxQztBQUNqRCxZQUFZLDZFQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxzRUFBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixJQUFxQztBQUN6RCxvQkFBb0Isc0VBQVU7QUFDOUIsNEJBQTRCLHNGQUFjLGNBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxpQ0FBaUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOEVBQVksc0NBQXNDLGlDQUFpQztBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQXFDO0FBQ3JELGdCQUFnQix3RUFBWTtBQUM1Qix3QkFBd0Isc0ZBQWMsY0FBYztBQUNwRCwrQkFBK0IscUJBQXFCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFxQztBQUNyRCxnQkFBZ0Isc0VBQVU7QUFDMUIsd0JBQXdCLHNGQUFjLGNBQWM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQixnQkFBZ0IsNkJBQTZCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBCQUEwQjtBQUMxQztBQUNBLGdFQUFnRSxtQkFBbUIsV0FBVztBQUM5RjtBQUNBLFlBQVksSUFBcUM7QUFDakQ7QUFDQSxnQkFBZ0Isd0VBQVksZ0NBQWdDLFVBQVU7QUFDdEU7QUFDQTtBQUNBLGdCQUFnQix3RUFBWSxpQ0FBaUMsVUFBVTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQixlQUFlLFVBQVU7QUFDekIsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdFQUFPO0FBQ3JCO0FBQ0EsWUFBWSxJQUFxQztBQUNqRDtBQUNBLDBCQUEwQiw4RUFBWTtBQUN0Qyx5QkFBeUIsc0ZBQWM7QUFDdkM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0VBQVkscUJBQXFCLHNGQUFjLHdCQUF3QjtBQUN2RixvQ0FBb0MsS0FBSztBQUN6QywyQ0FBMkMsa0JBQWtCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQXFDO0FBQ3JELGdCQUFnQix3RUFBWTtBQUM1Qix3QkFBd0Isc0ZBQWMsdUJBQXVCO0FBQzdEO0FBQ0Esc0JBQXNCLDhFQUFZO0FBQ2xDLHFCQUFxQixzRkFBYztBQUNuQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQXFDO0FBQ3JELGdCQUFnQix3RUFBWSxjQUFjLHNGQUFjLHVCQUF1QjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwQkFBMEI7QUFDMUM7QUFDQTtBQUNBLDJEQUEyRCxzR0FBc0I7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksSUFBcUM7QUFDakQsWUFBWSx3RUFBWSxrQkFBa0IsVUFBVTtBQUNwRCx1QkFBdUIsc0ZBQWMsdUJBQXVCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4R0FBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsWUFBWSxPQUFPO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxVQUFVO0FBQ3pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFxQztBQUNyRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUVBQVcsc0JBQXNCLGlCQUFpQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3RUFBWSxzQkFBc0IsaUJBQWlCO0FBQy9FLDhEQUE4RCxnQkFBZ0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCOzs7Ozs7Ozs7OztBQ2hnQmQ7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQzZDO0FBQ0Y7QUFDTTtBQUNGO0FBQ2tCO0FBQ3hCO0FBQ2M7QUFDaEM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCOUc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN3QjtBQUNqQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsVUFBVTtBQUN6QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RDtBQUNnQjtBQUNqRDtBQUNqQjtBQUNQLHVEQUF1RCxjQUFjLGlCQUFpQixzRkFBYyxjQUFjO0FBQ2xIO0FBQ0E7QUFDQSxZQUFZLGlGQUFxQjtBQUNqQyxZQUFZLHNFQUFVO0FBQ3RCLFlBQVksMkVBQWU7QUFDM0I7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VU1uQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxHQUFHO1VBQ0g7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NoQ0E7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7Ozs7O1dDVkEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQSxDQUFDO1dBQ0Q7Ozs7OztVQ1hBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7OztVRVZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2Utd29ya2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lkYi9idWlsZC9lc20vd3JhcC1pZGItdmFsdWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvRGVmZXJyZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU1hdGNoSWdub3JlUGFyYW1zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FuQ29uc3RydWN0UmVhZGFibGVTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9kb250V2FpdEZvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9leGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvcmVzdWx0aW5nQ2xpZW50RXhpc3RzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL3RpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvd2FpdFVudGlsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL192ZXJzaW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL2NhY2hlTmFtZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvY2xpZW50c0NsYWltLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL2NvcHlSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9tb2RlbHMvbWVzc2FnZXMvbWVzc2FnZUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9tb2RlbHMvbWVzc2FnZXMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvc2V0Q2FjaGVOYW1lRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9za2lwV2FpdGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS90eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtZXhwaXJhdGlvbi9DYWNoZUV4cGlyYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWV4cGlyYXRpb24vRXhwaXJhdGlvblBsdWdpbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtZXhwaXJhdGlvbi9fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtZXhwaXJhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtZXhwaXJhdGlvbi9tb2RlbHMvQ2FjaGVUaW1lc3RhbXBzTW9kZWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvUHJlY2FjaGVDb250cm9sbGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL1ByZWNhY2hlRmFsbGJhY2tQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvUHJlY2FjaGVSb3V0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9QcmVjYWNoZVN0cmF0ZWd5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL192ZXJzaW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL2FkZFBsdWdpbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvYWRkUm91dGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvY2xlYW51cE91dGRhdGVkQ2FjaGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL2NyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL2dldENhY2hlS2V5Rm9yVVJMLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL21hdGNoUHJlY2FjaGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvcHJlY2FjaGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvcHJlY2FjaGVBbmRSb3V0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9QcmVjYWNoZUNhY2hlS2V5UGx1Z2luLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL1ByZWNhY2hlSW5zdGFsbFJlcG9ydFBsdWdpbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9jcmVhdGVDYWNoZUtleS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9kZWxldGVPdXRkYXRlZENhY2hlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9nZW5lcmF0ZVVSTFZhcmlhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvcHJpbnRDbGVhbnVwRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9wcmludEluc3RhbGxEZXRhaWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL3JlbW92ZUlnbm9yZWRTZWFyY2hQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvTmF2aWdhdGlvblJvdXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL1JlZ0V4cFJvdXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL1JvdXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL1JvdXRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9yZWdpc3RlclJvdXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL3NldENhdGNoSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9zZXREZWZhdWx0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL3V0aWxzL25vcm1hbGl6ZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvQ2FjaGVGaXJzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9DYWNoZU9ubHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvTmV0d29ya0ZpcnN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL05ldHdvcmtPbmx5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL1N0YWxlV2hpbGVSZXZhbGlkYXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL1N0cmF0ZWd5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL1N0cmF0ZWd5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9wbHVnaW5zL2NhY2hlT2tBbmRPcGFxdWVQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvdXRpbHMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvaW5kZXgubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1leHBpcmF0aW9uL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvaW5kZXgubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9fTl9FL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL19OX0Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vX05fRS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vX05fRS93ZWJwYWNrL3J1bnRpbWUvaGFybW9ueSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL19OX0Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9fTl9FL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vX05fRS93ZWJwYWNrL3J1bnRpbWUvcmVhY3QgcmVmcmVzaCIsIndlYnBhY2s6Ly9fTl9FL3dlYnBhY2svcnVudGltZS9jb21wYXQiLCJ3ZWJwYWNrOi8vX05fRS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL19OX0Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL19OX0Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNraXBXYWl0aW5nLCBjbGllbnRzQ2xhaW0gfSBmcm9tIFwid29ya2JveC1jb3JlXCI7XHJcbmltcG9ydCB7IEV4cGlyYXRpb25QbHVnaW4gfSBmcm9tIFwid29ya2JveC1leHBpcmF0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgTmV0d29ya09ubHksXHJcbiAgTmV0d29ya0ZpcnN0LFxyXG4gIENhY2hlRmlyc3QsXHJcbiAgU3RhbGVXaGlsZVJldmFsaWRhdGUsXHJcbn0gZnJvbSBcIndvcmtib3gtc3RyYXRlZ2llc1wiO1xyXG5pbXBvcnQge1xyXG4gIHJlZ2lzdGVyUm91dGUsXHJcbiAgc2V0RGVmYXVsdEhhbmRsZXIsXHJcbiAgc2V0Q2F0Y2hIYW5kbGVyLFxyXG59IGZyb20gXCJ3b3JrYm94LXJvdXRpbmdcIjtcclxuaW1wb3J0IHtcclxuICBtYXRjaFByZWNhY2hlLFxyXG4gIHByZWNhY2hlQW5kUm91dGUsXHJcbiAgY2xlYW51cE91dGRhdGVkQ2FjaGVzLFxyXG59IGZyb20gXCJ3b3JrYm94LXByZWNhY2hpbmdcIjtcclxuXHJcbnNraXBXYWl0aW5nKCk7XHJcbmNsaWVudHNDbGFpbSgpO1xyXG5cclxuLy8gbXVzdCBpbmNsdWRlIGZvbGxvd2luZyBsaW5lcyB3aGVuIHVzaW5nIGluamVjdCBtYW5pZmVzdCBtb2R1bGUgZnJvbSB3b3JrYm94XHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy9wcmVjYWNoZS1maWxlcy93b3JrYm94LWJ1aWxkI2FkZF9hbl9pbmplY3Rpb25fcG9pbnRcclxuY29uc3QgV0JfTUFOSUZFU1QgPSBzZWxmLl9fV0JfTUFOSUZFU1Q7XHJcbi8vIFByZWNhY2hlIGZhbGxiYWNrIHJvdXRlIGFuZCBpbWFnZVxyXG5XQl9NQU5JRkVTVC5wdXNoKHtcclxuICB1cmw6IFwiL2ZhbGxiYWNrXCIsXHJcbiAgcmV2aXNpb246IFwiMTIzNDU2Nzg5MFwiLFxyXG59KTtcclxucHJlY2FjaGVBbmRSb3V0ZShXQl9NQU5JRkVTVCk7XHJcblxyXG5jbGVhbnVwT3V0ZGF0ZWRDYWNoZXMoKTtcclxucmVnaXN0ZXJSb3V0ZShcclxuICBcIi9cIixcclxuICBuZXcgTmV0d29ya0ZpcnN0KHtcclxuICAgIGNhY2hlTmFtZTogXCJzdGFydC11cmxcIixcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgbmV3IEV4cGlyYXRpb25QbHVnaW4oe1xyXG4gICAgICAgIG1heEVudHJpZXM6IDEsXHJcbiAgICAgICAgbWF4QWdlU2Vjb25kczogODY0MDAsXHJcbiAgICAgICAgcHVyZ2VPblF1b3RhRXJyb3I6ICEwLFxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgfSksXHJcbiAgXCJHRVRcIlxyXG4pO1xyXG5yZWdpc3RlclJvdXRlKFxyXG4gIC9eaHR0cHM6XFwvXFwvZm9udHNcXC4oPzpnb29nbGVhcGlzfGdzdGF0aWMpXFwuY29tXFwvLiovaSxcclxuICBuZXcgQ2FjaGVGaXJzdCh7XHJcbiAgICBjYWNoZU5hbWU6IFwiZ29vZ2xlLWZvbnRzXCIsXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIG5ldyBFeHBpcmF0aW9uUGx1Z2luKHtcclxuICAgICAgICBtYXhFbnRyaWVzOiA0LFxyXG4gICAgICAgIG1heEFnZVNlY29uZHM6IDMxNTM2ZTMsXHJcbiAgICAgICAgcHVyZ2VPblF1b3RhRXJyb3I6ICEwLFxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgfSksXHJcbiAgXCJHRVRcIlxyXG4pO1xyXG5yZWdpc3RlclJvdXRlKFxyXG4gIC9cXC4oPzplb3R8b3RmfHR0Y3x0dGZ8d29mZnx3b2ZmMnxmb250LmNzcykkL2ksXHJcbiAgbmV3IFN0YWxlV2hpbGVSZXZhbGlkYXRlKHtcclxuICAgIGNhY2hlTmFtZTogXCJzdGF0aWMtZm9udC1hc3NldHNcIixcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgbmV3IEV4cGlyYXRpb25QbHVnaW4oe1xyXG4gICAgICAgIG1heEVudHJpZXM6IDQsXHJcbiAgICAgICAgbWF4QWdlU2Vjb25kczogNjA0ODAwLFxyXG4gICAgICAgIHB1cmdlT25RdW90YUVycm9yOiAhMCxcclxuICAgICAgfSksXHJcbiAgICBdLFxyXG4gIH0pLFxyXG4gIFwiR0VUXCJcclxuKTtcclxuLy8gZGlzYWJsZSBpbWFnZSBjYWNoZSwgc28gd2UgY291bGQgb2JzZXJ2ZSB0aGUgcGxhY2Vob2xkZXIgaW1hZ2Ugd2hlbiBvZmZsaW5lXHJcbnJlZ2lzdGVyUm91dGUoXHJcbiAgL1xcLig/OmpwZ3xqcGVnfGdpZnxwbmd8c3ZnfGljb3x3ZWJwKSQvaSxcclxuICBuZXcgTmV0d29ya09ubHkoe1xyXG4gICAgY2FjaGVOYW1lOiBcInN0YXRpYy1pbWFnZS1hc3NldHNcIixcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgbmV3IEV4cGlyYXRpb25QbHVnaW4oe1xyXG4gICAgICAgIG1heEVudHJpZXM6IDY0LFxyXG4gICAgICAgIG1heEFnZVNlY29uZHM6IDg2NDAwLFxyXG4gICAgICAgIHB1cmdlT25RdW90YUVycm9yOiAhMCxcclxuICAgICAgfSksXHJcbiAgICBdLFxyXG4gIH0pLFxyXG4gIFwiR0VUXCJcclxuKTtcclxucmVnaXN0ZXJSb3V0ZShcclxuICAvXFwuKD86anMpJC9pLFxyXG4gIG5ldyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSh7XHJcbiAgICBjYWNoZU5hbWU6IFwic3RhdGljLWpzLWFzc2V0c1wiLFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICBuZXcgRXhwaXJhdGlvblBsdWdpbih7XHJcbiAgICAgICAgbWF4RW50cmllczogMzIsXHJcbiAgICAgICAgbWF4QWdlU2Vjb25kczogODY0MDAsXHJcbiAgICAgICAgcHVyZ2VPblF1b3RhRXJyb3I6ICEwLFxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgfSksXHJcbiAgXCJHRVRcIlxyXG4pO1xyXG5yZWdpc3RlclJvdXRlKFxyXG4gIC9cXC4oPzpjc3N8bGVzcykkL2ksXHJcbiAgbmV3IFN0YWxlV2hpbGVSZXZhbGlkYXRlKHtcclxuICAgIGNhY2hlTmFtZTogXCJzdGF0aWMtc3R5bGUtYXNzZXRzXCIsXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIG5ldyBFeHBpcmF0aW9uUGx1Z2luKHtcclxuICAgICAgICBtYXhFbnRyaWVzOiAzMixcclxuICAgICAgICBtYXhBZ2VTZWNvbmRzOiA4NjQwMCxcclxuICAgICAgICBwdXJnZU9uUXVvdGFFcnJvcjogITAsXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICB9KSxcclxuICBcIkdFVFwiXHJcbik7XHJcbnJlZ2lzdGVyUm91dGUoXHJcbiAgL1xcLig/Ompzb258eG1sfGNzdikkL2ksXHJcbiAgbmV3IE5ldHdvcmtGaXJzdCh7XHJcbiAgICBjYWNoZU5hbWU6IFwic3RhdGljLWRhdGEtYXNzZXRzXCIsXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIG5ldyBFeHBpcmF0aW9uUGx1Z2luKHtcclxuICAgICAgICBtYXhFbnRyaWVzOiAzMixcclxuICAgICAgICBtYXhBZ2VTZWNvbmRzOiA4NjQwMCxcclxuICAgICAgICBwdXJnZU9uUXVvdGFFcnJvcjogITAsXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICB9KSxcclxuICBcIkdFVFwiXHJcbik7XHJcbnJlZ2lzdGVyUm91dGUoXHJcbiAgL1xcL2FwaVxcLy4qJC9pLFxyXG4gIG5ldyBOZXR3b3JrRmlyc3Qoe1xyXG4gICAgY2FjaGVOYW1lOiBcImFwaXNcIixcclxuICAgIG5ldHdvcmtUaW1lb3V0U2Vjb25kczogMTAsXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIG5ldyBFeHBpcmF0aW9uUGx1Z2luKHtcclxuICAgICAgICBtYXhFbnRyaWVzOiAxNixcclxuICAgICAgICBtYXhBZ2VTZWNvbmRzOiA4NjQwMCxcclxuICAgICAgICBwdXJnZU9uUXVvdGFFcnJvcjogITAsXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICB9KSxcclxuICBcIkdFVFwiXHJcbik7XHJcbnJlZ2lzdGVyUm91dGUoXHJcbiAgLy4qL2ksXHJcbiAgbmV3IE5ldHdvcmtGaXJzdCh7XHJcbiAgICBjYWNoZU5hbWU6IFwib3RoZXJzXCIsXHJcbiAgICBuZXR3b3JrVGltZW91dFNlY29uZHM6IDEwLFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICBuZXcgRXhwaXJhdGlvblBsdWdpbih7XHJcbiAgICAgICAgbWF4RW50cmllczogMzIsXHJcbiAgICAgICAgbWF4QWdlU2Vjb25kczogODY0MDAsXHJcbiAgICAgICAgcHVyZ2VPblF1b3RhRXJyb3I6ICEwLFxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgfSksXHJcbiAgXCJHRVRcIlxyXG4pO1xyXG5cclxuLy8gZm9sbG93aW5nIGxpbmVzIGdpdmVzIHlvdSBjb250cm9sIG9mIHRoZSBvZmZsaW5lIGZhbGxiYWNrIHN0cmF0ZWdpZXNcclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL2FkdmFuY2VkLXJlY2lwZXMjY29tcHJlaGVuc2l2ZV9mYWxsYmFja3NcclxuXHJcbi8vIFVzZSBhIHN0YWxlLXdoaWxlLXJldmFsaWRhdGUgc3RyYXRlZ3kgZm9yIGFsbCBvdGhlciByZXF1ZXN0cy5cclxuc2V0RGVmYXVsdEhhbmRsZXIobmV3IFN0YWxlV2hpbGVSZXZhbGlkYXRlKCkpO1xyXG5cclxuLy8gVGhpcyBcImNhdGNoXCIgaGFuZGxlciBpcyB0cmlnZ2VyZWQgd2hlbiBhbnkgb2YgdGhlIG90aGVyIHJvdXRlcyBmYWlsIHRvXHJcbi8vIGdlbmVyYXRlIGEgcmVzcG9uc2UuXHJcbnNldENhdGNoSGFuZGxlcigoeyBldmVudCB9KSA9PiB7XHJcbiAgLy8gVGhlIEZBTExCQUNLX1VSTCBlbnRyaWVzIG11c3QgYmUgYWRkZWQgdG8gdGhlIGNhY2hlIGFoZWFkIG9mIHRpbWUsIGVpdGhlclxyXG4gIC8vIHZpYSBydW50aW1lIG9yIHByZWNhY2hpbmcuIElmIHRoZXkgYXJlIHByZWNhY2hlZCwgdGhlbiBjYWxsXHJcbiAgLy8gYG1hdGNoUHJlY2FjaGUoRkFMTEJBQ0tfVVJMKWAgKGZyb20gdGhlIGB3b3JrYm94LXByZWNhY2hpbmdgIHBhY2thZ2UpXHJcbiAgLy8gdG8gZ2V0IHRoZSByZXNwb25zZSBmcm9tIHRoZSBjb3JyZWN0IGNhY2hlLlxyXG4gIC8vXHJcbiAgLy8gVXNlIGV2ZW50LCByZXF1ZXN0LCBhbmQgdXJsIHRvIGZpZ3VyZSBvdXQgaG93IHRvIHJlc3BvbmQuXHJcbiAgLy8gT25lIGFwcHJvYWNoIHdvdWxkIGJlIHRvIHVzZSByZXF1ZXN0LmRlc3RpbmF0aW9uLCBzZWVcclxuICAvLyBodHRwczovL21lZGl1bS5jb20vZGV2LWNoYW5uZWwvc2VydmljZS13b3JrZXItY2FjaGluZy1zdHJhdGVnaWVzLWJhc2VkLW9uLXJlcXVlc3QtdHlwZXMtNTc0MTFkZDc2NTJjXHJcblxyXG4gIGlmIChcclxuICAgIGV2ZW50LnJlcXVlc3QuY2FjaGUgPT09IFwib25seS1pZi1jYWNoZWRcIiAmJlxyXG4gICAgZXZlbnQucmVxdWVzdC5tb2RlICE9PSBcInNhbWUtb3JpZ2luXCJcclxuICApXHJcbiAgICByZXR1cm47XHJcbiAgc3dpdGNoIChldmVudC5yZXF1ZXN0LmRlc3RpbmF0aW9uKSB7XHJcbiAgICBjYXNlIFwiZG9jdW1lbnRcIjpcclxuICAgICAgLy8gSWYgdXNpbmcgcHJlY2FjaGVkIFVSTHM6XHJcbiAgICAgIHJldHVybiBtYXRjaFByZWNhY2hlKFwiL2ZhbGxiYWNrXCIpO1xyXG4gICAgICAvLyByZXR1cm4gY2FjaGVzLm1hdGNoKCcvZmFsbGJhY2snKVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJpbWFnZVwiOlxyXG4gICAgICAvLyBJZiB1c2luZyBwcmVjYWNoZWQgVVJMczpcclxuICAgICAgcmV0dXJuIG1hdGNoUHJlY2FjaGUoXCIvc3RhdGljL2ltYWdlcy9mYWxsYmFjay5wbmdcIik7XHJcbiAgICAgIC8vIHJldHVybiBjYWNoZXMubWF0Y2goJy9zdGF0aWMvaW1hZ2VzL2ZhbGxiYWNrLnBuZycpXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImZvbnRcIjpcclxuICAgIC8vIElmIHVzaW5nIHByZWNhY2hlZCBVUkxzOlxyXG4gICAgLy8gcmV0dXJuIG1hdGNoUHJlY2FjaGUoRkFMTEJBQ0tfRk9OVF9VUkwpO1xyXG4gICAgLy9yZXR1cm4gY2FjaGVzLm1hdGNoKCcvc3RhdGljL2ZvbnRzL2ZhbGxiYWNrLm90ZicpXHJcbiAgICAvL2JyZWFrXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgZmFsbGJhY2ssIGp1c3QgcmV0dXJuIGFuIGVycm9yIHJlc3BvbnNlLlxyXG4gICAgICByZXR1cm4gUmVzcG9uc2UuZXJyb3IoKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyB3IGFzIHdyYXAsIHIgYXMgcmVwbGFjZVRyYXBzIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5leHBvcnQgeyB1IGFzIHVud3JhcCwgdyBhcyB3cmFwIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5cbi8qKlxuICogT3BlbiBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICogQHBhcmFtIHZlcnNpb24gU2NoZW1hIHZlcnNpb24uXG4gKiBAcGFyYW0gY2FsbGJhY2tzIEFkZGl0aW9uYWwgY2FsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBvcGVuREIobmFtZSwgdmVyc2lvbiwgeyBibG9ja2VkLCB1cGdyYWRlLCBibG9ja2luZywgdGVybWluYXRlZCB9ID0ge30pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4obmFtZSwgdmVyc2lvbik7XG4gICAgY29uc3Qgb3BlblByb21pc2UgPSB3cmFwKHJlcXVlc3QpO1xuICAgIGlmICh1cGdyYWRlKSB7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBncmFkZW5lZWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdXBncmFkZSh3cmFwKHJlcXVlc3QucmVzdWx0KSwgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgd3JhcChyZXF1ZXN0LnRyYW5zYWN0aW9uKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYmxvY2tlZClcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKCkgPT4gYmxvY2tlZCgpKTtcbiAgICBvcGVuUHJvbWlzZVxuICAgICAgICAudGhlbigoZGIpID0+IHtcbiAgICAgICAgaWYgKHRlcm1pbmF0ZWQpXG4gICAgICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHRlcm1pbmF0ZWQoKSk7XG4gICAgICAgIGlmIChibG9ja2luZylcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ3ZlcnNpb25jaGFuZ2UnLCAoKSA9PiBibG9ja2luZygpKTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICByZXR1cm4gb3BlblByb21pc2U7XG59XG4vKipcbiAqIERlbGV0ZSBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICovXG5mdW5jdGlvbiBkZWxldGVEQihuYW1lLCB7IGJsb2NrZWQgfSA9IHt9KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShuYW1lKTtcbiAgICBpZiAoYmxvY2tlZClcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKCkgPT4gYmxvY2tlZCgpKTtcbiAgICByZXR1cm4gd3JhcChyZXF1ZXN0KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG59XG5cbmNvbnN0IHJlYWRNZXRob2RzID0gWydnZXQnLCAnZ2V0S2V5JywgJ2dldEFsbCcsICdnZXRBbGxLZXlzJywgJ2NvdW50J107XG5jb25zdCB3cml0ZU1ldGhvZHMgPSBbJ3B1dCcsICdhZGQnLCAnZGVsZXRlJywgJ2NsZWFyJ107XG5jb25zdCBjYWNoZWRNZXRob2RzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkge1xuICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIElEQkRhdGFiYXNlICYmXG4gICAgICAgICEocHJvcCBpbiB0YXJnZXQpICYmXG4gICAgICAgIHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2FjaGVkTWV0aG9kcy5nZXQocHJvcCkpXG4gICAgICAgIHJldHVybiBjYWNoZWRNZXRob2RzLmdldChwcm9wKTtcbiAgICBjb25zdCB0YXJnZXRGdW5jTmFtZSA9IHByb3AucmVwbGFjZSgvRnJvbUluZGV4JC8sICcnKTtcbiAgICBjb25zdCB1c2VJbmRleCA9IHByb3AgIT09IHRhcmdldEZ1bmNOYW1lO1xuICAgIGNvbnN0IGlzV3JpdGUgPSB3cml0ZU1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpO1xuICAgIGlmIChcbiAgICAvLyBCYWlsIGlmIHRoZSB0YXJnZXQgZG9lc24ndCBleGlzdCBvbiB0aGUgdGFyZ2V0LiBFZywgZ2V0QWxsIGlzbid0IGluIEVkZ2UuXG4gICAgISh0YXJnZXRGdW5jTmFtZSBpbiAodXNlSW5kZXggPyBJREJJbmRleCA6IElEQk9iamVjdFN0b3JlKS5wcm90b3R5cGUpIHx8XG4gICAgICAgICEoaXNXcml0ZSB8fCByZWFkTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWV0aG9kID0gYXN5bmMgZnVuY3Rpb24gKHN0b3JlTmFtZSwgLi4uYXJncykge1xuICAgICAgICAvLyBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiB1bmRlZmluZWQgZ3ppcHBzIGJldHRlciwgYnV0IGZhaWxzIGluIEVkZ2UgOihcbiAgICAgICAgY29uc3QgdHggPSB0aGlzLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogJ3JlYWRvbmx5Jyk7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0eC5zdG9yZTtcbiAgICAgICAgaWYgKHVzZUluZGV4KVxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LmluZGV4KGFyZ3Muc2hpZnQoKSk7XG4gICAgICAgIC8vIE11c3QgcmVqZWN0IGlmIG9wIHJlamVjdHMuXG4gICAgICAgIC8vIElmIGl0J3MgYSB3cml0ZSBvcGVyYXRpb24sIG11c3QgcmVqZWN0IGlmIHR4LmRvbmUgcmVqZWN0cy5cbiAgICAgICAgLy8gTXVzdCByZWplY3Qgd2l0aCBvcCByZWplY3Rpb24gZmlyc3QuXG4gICAgICAgIC8vIE11c3QgcmVzb2x2ZSB3aXRoIG9wIHZhbHVlLlxuICAgICAgICAvLyBNdXN0IGhhbmRsZSBib3RoIHByb21pc2VzIChubyB1bmhhbmRsZWQgcmVqZWN0aW9ucylcbiAgICAgICAgcmV0dXJuIChhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0YXJnZXRbdGFyZ2V0RnVuY05hbWVdKC4uLmFyZ3MpLFxuICAgICAgICAgICAgaXNXcml0ZSAmJiB0eC5kb25lLFxuICAgICAgICBdKSlbMF07XG4gICAgfTtcbiAgICBjYWNoZWRNZXRob2RzLnNldChwcm9wLCBtZXRob2QpO1xuICAgIHJldHVybiBtZXRob2Q7XG59XG5yZXBsYWNlVHJhcHMoKG9sZFRyYXBzKSA9PiAoe1xuICAgIC4uLm9sZFRyYXBzLFxuICAgIGdldDogKHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpID0+IGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSxcbiAgICBoYXM6ICh0YXJnZXQsIHByb3ApID0+ICEhZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuaGFzKHRhcmdldCwgcHJvcCksXG59KSk7XG5cbmV4cG9ydCB7IGRlbGV0ZURCLCBvcGVuREIgfTtcbiIsImNvbnN0IGluc3RhbmNlT2ZBbnkgPSAob2JqZWN0LCBjb25zdHJ1Y3RvcnMpID0+IGNvbnN0cnVjdG9ycy5zb21lKChjKSA9PiBvYmplY3QgaW5zdGFuY2VvZiBjKTtcblxubGV0IGlkYlByb3h5YWJsZVR5cGVzO1xubGV0IGN1cnNvckFkdmFuY2VNZXRob2RzO1xuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRJZGJQcm94eWFibGVUeXBlcygpIHtcbiAgICByZXR1cm4gKGlkYlByb3h5YWJsZVR5cGVzIHx8XG4gICAgICAgIChpZGJQcm94eWFibGVUeXBlcyA9IFtcbiAgICAgICAgICAgIElEQkRhdGFiYXNlLFxuICAgICAgICAgICAgSURCT2JqZWN0U3RvcmUsXG4gICAgICAgICAgICBJREJJbmRleCxcbiAgICAgICAgICAgIElEQkN1cnNvcixcbiAgICAgICAgICAgIElEQlRyYW5zYWN0aW9uLFxuICAgICAgICBdKSk7XG59XG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gcHJldmVudCBpdCB0aHJvd2luZyB1cCBpbiBub2RlIGVudmlyb25tZW50cy5cbmZ1bmN0aW9uIGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCkge1xuICAgIHJldHVybiAoY3Vyc29yQWR2YW5jZU1ldGhvZHMgfHxcbiAgICAgICAgKGN1cnNvckFkdmFuY2VNZXRob2RzID0gW1xuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5hZHZhbmNlLFxuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5jb250aW51ZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWVQcmltYXJ5S2V5LFxuICAgICAgICBdKSk7XG59XG5jb25zdCBjdXJzb3JSZXF1ZXN0TWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zYWN0aW9uRG9uZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgICAgICAgICByZXF1ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh3cmFwKHJlcXVlc3QucmVzdWx0KSk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgIH0pO1xuICAgIHByb21pc2VcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIFNpbmNlIGN1cnNvcmluZyByZXVzZXMgdGhlIElEQlJlcXVlc3QgKCpzaWdoKiksIHdlIGNhY2hlIGl0IGZvciBsYXRlciByZXRyaWV2YWxcbiAgICAgICAgLy8gKHNlZSB3cmFwRnVuY3Rpb24pLlxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJDdXJzb3IpIHtcbiAgICAgICAgICAgIGN1cnNvclJlcXVlc3RNYXAuc2V0KHZhbHVlLCByZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYXRjaGluZyB0byBhdm9pZCBcIlVuY2F1Z2h0IFByb21pc2UgZXhjZXB0aW9uc1wiXG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgLy8gVGhpcyBtYXBwaW5nIGV4aXN0cyBpbiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgYnV0IGRvZXNuJ3QgZG9lc24ndCBleGlzdCBpbiB0cmFuc2Zvcm1DYWNoZS4gVGhpc1xuICAgIC8vIGlzIGJlY2F1c2Ugd2UgY3JlYXRlIG1hbnkgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0LlxuICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQocHJvbWlzZSwgcmVxdWVzdCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odHgpIHtcbiAgICAvLyBFYXJseSBiYWlsIGlmIHdlJ3ZlIGFscmVhZHkgY3JlYXRlZCBhIGRvbmUgcHJvbWlzZSBmb3IgdGhpcyB0cmFuc2FjdGlvbi5cbiAgICBpZiAodHJhbnNhY3Rpb25Eb25lTWFwLmhhcyh0eCkpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdCh0eC5lcnJvciB8fCBuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydEVycm9yJywgJ0Fib3J0RXJyb3InKSk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgIH0pO1xuICAgIC8vIENhY2hlIGl0IGZvciBsYXRlciByZXRyaWV2YWwuXG4gICAgdHJhbnNhY3Rpb25Eb25lTWFwLnNldCh0eCwgZG9uZSk7XG59XG5sZXQgaWRiUHJveHlUcmFwcyA9IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRyYW5zYWN0aW9uLmRvbmUuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ2RvbmUnKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbkRvbmVNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICAvLyBQb2x5ZmlsbCBmb3Igb2JqZWN0U3RvcmVOYW1lcyBiZWNhdXNlIG9mIEVkZ2UuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ29iamVjdFN0b3JlTmFtZXMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5vYmplY3RTdG9yZU5hbWVzIHx8IHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2UgdHguc3RvcmUgcmV0dXJuIHRoZSBvbmx5IHN0b3JlIGluIHRoZSB0cmFuc2FjdGlvbiwgb3IgdW5kZWZpbmVkIGlmIHRoZXJlIGFyZSBtYW55LlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdzdG9yZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1sxXVxuICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA6IHJlY2VpdmVyLm9iamVjdFN0b3JlKHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEVsc2UgdHJhbnNmb3JtIHdoYXRldmVyIHdlIGdldCBiYWNrLlxuICAgICAgICByZXR1cm4gd3JhcCh0YXJnZXRbcHJvcF0pO1xuICAgIH0sXG4gICAgc2V0KHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgaGFzKHRhcmdldCwgcHJvcCkge1xuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24gJiZcbiAgICAgICAgICAgIChwcm9wID09PSAnZG9uZScgfHwgcHJvcCA9PT0gJ3N0b3JlJykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldDtcbiAgICB9LFxufTtcbmZ1bmN0aW9uIHJlcGxhY2VUcmFwcyhjYWxsYmFjaykge1xuICAgIGlkYlByb3h5VHJhcHMgPSBjYWxsYmFjayhpZGJQcm94eVRyYXBzKTtcbn1cbmZ1bmN0aW9uIHdyYXBGdW5jdGlvbihmdW5jKSB7XG4gICAgLy8gRHVlIHRvIGV4cGVjdGVkIG9iamVjdCBlcXVhbGl0eSAod2hpY2ggaXMgZW5mb3JjZWQgYnkgdGhlIGNhY2hpbmcgaW4gYHdyYXBgKSwgd2VcbiAgICAvLyBvbmx5IGNyZWF0ZSBvbmUgbmV3IGZ1bmMgcGVyIGZ1bmMuXG4gICAgLy8gRWRnZSBkb2Vzbid0IHN1cHBvcnQgb2JqZWN0U3RvcmVOYW1lcyAoYm9vbyksIHNvIHdlIHBvbHlmaWxsIGl0IGhlcmUuXG4gICAgaWYgKGZ1bmMgPT09IElEQkRhdGFiYXNlLnByb3RvdHlwZS50cmFuc2FjdGlvbiAmJlxuICAgICAgICAhKCdvYmplY3RTdG9yZU5hbWVzJyBpbiBJREJUcmFuc2FjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoc3RvcmVOYW1lcywgLi4uYXJncykge1xuICAgICAgICAgICAgY29uc3QgdHggPSBmdW5jLmNhbGwodW53cmFwKHRoaXMpLCBzdG9yZU5hbWVzLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcC5zZXQodHgsIHN0b3JlTmFtZXMuc29ydCA/IHN0b3JlTmFtZXMuc29ydCgpIDogW3N0b3JlTmFtZXNdKTtcbiAgICAgICAgICAgIHJldHVybiB3cmFwKHR4KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gQ3Vyc29yIG1ldGhvZHMgYXJlIHNwZWNpYWwsIGFzIHRoZSBiZWhhdmlvdXIgaXMgYSBsaXR0bGUgbW9yZSBkaWZmZXJlbnQgdG8gc3RhbmRhcmQgSURCLiBJblxuICAgIC8vIElEQiwgeW91IGFkdmFuY2UgdGhlIGN1cnNvciBhbmQgd2FpdCBmb3IgYSBuZXcgJ3N1Y2Nlc3MnIG9uIHRoZSBJREJSZXF1ZXN0IHRoYXQgZ2F2ZSB5b3UgdGhlXG4gICAgLy8gY3Vyc29yLiBJdCdzIGtpbmRhIGxpa2UgYSBwcm9taXNlIHRoYXQgY2FuIHJlc29sdmUgd2l0aCBtYW55IHZhbHVlcy4gVGhhdCBkb2Vzbid0IG1ha2Ugc2Vuc2VcbiAgICAvLyB3aXRoIHJlYWwgcHJvbWlzZXMsIHNvIGVhY2ggYWR2YW5jZSBtZXRob2RzIHJldHVybnMgYSBuZXcgcHJvbWlzZSBmb3IgdGhlIGN1cnNvciBvYmplY3QsIG9yXG4gICAgLy8gdW5kZWZpbmVkIGlmIHRoZSBlbmQgb2YgdGhlIGN1cnNvciBoYXMgYmVlbiByZWFjaGVkLlxuICAgIGlmIChnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpLmluY2x1ZGVzKGZ1bmMpKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgICAgICAgLy8gdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICAgICAgICAgIGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiB3cmFwKGN1cnNvclJlcXVlc3RNYXAuZ2V0KHRoaXMpKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgLy8gdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICAgICAgcmV0dXJuIHdyYXAoZnVuYy5hcHBseSh1bndyYXAodGhpcyksIGFyZ3MpKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtQ2FjaGFibGVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHJldHVybiB3cmFwRnVuY3Rpb24odmFsdWUpO1xuICAgIC8vIFRoaXMgZG9lc24ndCByZXR1cm4sIGl0IGp1c3QgY3JlYXRlcyBhICdkb25lJyBwcm9taXNlIGZvciB0aGUgdHJhbnNhY3Rpb24sXG4gICAgLy8gd2hpY2ggaXMgbGF0ZXIgcmV0dXJuZWQgZm9yIHRyYW5zYWN0aW9uLmRvbmUgKHNlZSBpZGJPYmplY3RIYW5kbGVyKS5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbilcbiAgICAgICAgY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHZhbHVlKTtcbiAgICBpZiAoaW5zdGFuY2VPZkFueSh2YWx1ZSwgZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSkpXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodmFsdWUsIGlkYlByb3h5VHJhcHMpO1xuICAgIC8vIFJldHVybiB0aGUgc2FtZSB2YWx1ZSBiYWNrIGlmIHdlJ3JlIG5vdCBnb2luZyB0byB0cmFuc2Zvcm0gaXQuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gd3JhcCh2YWx1ZSkge1xuICAgIC8vIFdlIHNvbWV0aW1lcyBnZW5lcmF0ZSBtdWx0aXBsZSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QgKGVnIHdoZW4gY3Vyc29yaW5nKSwgYmVjYXVzZVxuICAgIC8vIElEQiBpcyB3ZWlyZCBhbmQgYSBzaW5nbGUgSURCUmVxdWVzdCBjYW4geWllbGQgbWFueSByZXNwb25zZXMsIHNvIHRoZXNlIGNhbid0IGJlIGNhY2hlZC5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJSZXF1ZXN0KVxuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdCh2YWx1ZSk7XG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSB0cmFuc2Zvcm1lZCB0aGlzIHZhbHVlIGJlZm9yZSwgcmV1c2UgdGhlIHRyYW5zZm9ybWVkIHZhbHVlLlxuICAgIC8vIFRoaXMgaXMgZmFzdGVyLCBidXQgaXQgYWxzbyBwcm92aWRlcyBvYmplY3QgZXF1YWxpdHkuXG4gICAgaWYgKHRyYW5zZm9ybUNhY2hlLmhhcyh2YWx1ZSkpXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1DYWNoZS5nZXQodmFsdWUpO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdHJhbnNmb3JtQ2FjaGFibGVWYWx1ZSh2YWx1ZSk7XG4gICAgLy8gTm90IGFsbCB0eXBlcyBhcmUgdHJhbnNmb3JtZWQuXG4gICAgLy8gVGhlc2UgbWF5IGJlIHByaW1pdGl2ZSB0eXBlcywgc28gdGhleSBjYW4ndCBiZSBXZWFrTWFwIGtleXMuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0cmFuc2Zvcm1DYWNoZS5zZXQodmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59XG5jb25zdCB1bndyYXAgPSAodmFsdWUpID0+IHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5nZXQodmFsdWUpO1xuXG5leHBvcnQgeyByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgYXMgYSwgaW5zdGFuY2VPZkFueSBhcyBpLCByZXBsYWNlVHJhcHMgYXMgciwgdW53cmFwIGFzIHUsIHdyYXAgYXMgdyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuLy8gV2UgZWl0aGVyIGV4cG9zZSBkZWZhdWx0cyBvciB3ZSBleHBvc2UgZXZlcnkgbmFtZWQgZXhwb3J0LlxuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJy4vX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQgeyBjYWNoZU1hdGNoSWdub3JlUGFyYW1zIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYWNoZU1hdGNoSWdub3JlUGFyYW1zLmpzJztcbmltcG9ydCB7IGNhbkNvbnN0cnVjdFJlYWRhYmxlU3RyZWFtIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYW5Db25zdHJ1Y3RSZWFkYWJsZVN0cmVhbS5qcyc7XG5pbXBvcnQgeyBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtLmpzJztcbmltcG9ydCB7IGRvbnRXYWl0Rm9yIH0gZnJvbSAnLi9fcHJpdmF0ZS9kb250V2FpdEZvci5qcyc7XG5pbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gJy4vX3ByaXZhdGUvRGVmZXJyZWQuanMnO1xuaW1wb3J0IHsgZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MgfSBmcm9tICcuL19wcml2YXRlL2V4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzLmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnLi9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyByZXN1bHRpbmdDbGllbnRFeGlzdHMgfSBmcm9tICcuL19wcml2YXRlL3Jlc3VsdGluZ0NsaWVudEV4aXN0cy5qcyc7XG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSAnLi9fcHJpdmF0ZS90aW1lb3V0LmpzJztcbmltcG9ydCB7IHdhaXRVbnRpbCB9IGZyb20gJy4vX3ByaXZhdGUvd2FpdFVudGlsLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJy4vX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5leHBvcnQgeyBhc3NlcnQsIGNhY2hlTWF0Y2hJZ25vcmVQYXJhbXMsIGNhY2hlTmFtZXMsIGNhbkNvbnN0cnVjdFJlYWRhYmxlU3RyZWFtLCBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtLCBkb250V2FpdEZvciwgRGVmZXJyZWQsIGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzLCBnZXRGcmllbmRseVVSTCwgbG9nZ2VyLCByZXN1bHRpbmdDbGllbnRFeGlzdHMsIHRpbWVvdXQsIHdhaXRVbnRpbCwgV29ya2JveEVycm9yLCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoZSBEZWZlcnJlZCBjbGFzcyBjb21wb3NlcyBQcm9taXNlcyBpbiBhIHdheSB0aGF0IGFsbG93cyBmb3IgdGhlbSB0byBiZVxuICogcmVzb2x2ZWQgb3IgcmVqZWN0ZWQgZnJvbSBvdXRzaWRlIHRoZSBjb25zdHJ1Y3Rvci4gSW4gbW9zdCBjYXNlcyBwcm9taXNlc1xuICogc2hvdWxkIGJlIHVzZWQgZGlyZWN0bHksIGJ1dCBEZWZlcnJlZHMgY2FuIGJlIG5lY2Vzc2FyeSB3aGVuIHRoZSBsb2dpYyB0b1xuICogcmVzb2x2ZSBhIHByb21pc2UgbXVzdCBiZSBzZXBhcmF0ZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBEZWZlcnJlZCB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHByb21pc2UgYW5kIGV4cG9zZXMgaXRzIHJlc29sdmUgYW5kIHJlamVjdCBmdW5jdGlvbnMgYXMgbWV0aG9kcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgeyBEZWZlcnJlZCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbWVzc2FnZUdlbmVyYXRvciB9IGZyb20gJy4uL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlR2VuZXJhdG9yLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBXb3JrYm94IGVycm9ycyBzaG91bGQgYmUgdGhyb3duIHdpdGggdGhpcyBjbGFzcy5cbiAqIFRoaXMgYWxsb3dzIHVzZSB0byBlbnN1cmUgdGhlIHR5cGUgZWFzaWx5IGluIHRlc3RzLFxuICogaGVscHMgZGV2ZWxvcGVycyBpZGVudGlmeSBlcnJvcnMgZnJvbSB3b3JrYm94XG4gKiBlYXNpbHkgYW5kIGFsbG93cyB1c2UgdG8gb3B0aW1pc2UgZXJyb3JcbiAqIG1lc3NhZ2VzIGNvcnJlY3RseS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBXb3JrYm94RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JDb2RlIFRoZSBlcnJvciBjb2RlIHRoYXRcbiAgICAgKiBpZGVudGlmaWVzIHRoaXMgcGFydGljdWxhciBlcnJvci5cbiAgICAgKiBAcGFyYW0ge09iamVjdD19IGRldGFpbHMgQW55IHJlbGV2YW50IGFyZ3VtZW50c1xuICAgICAqIHRoYXQgd2lsbCBoZWxwIGRldmVsb3BlcnMgaWRlbnRpZnkgaXNzdWVzIHNob3VsZFxuICAgICAqIGJlIGFkZGVkIGFzIGEga2V5IG9uIHRoZSBjb250ZXh0IG9iamVjdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGUsIGRldGFpbHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VHZW5lcmF0b3IoZXJyb3JDb2RlLCBkZXRhaWxzKTtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IGVycm9yQ29kZTtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICB9XG59XG5leHBvcnQgeyBXb3JrYm94RXJyb3IgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJy4uL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qXG4gKiBUaGlzIG1ldGhvZCB0aHJvd3MgaWYgdGhlIHN1cHBsaWVkIHZhbHVlIGlzIG5vdCBhbiBhcnJheS5cbiAqIFRoZSBkZXN0cnVjdGVkIHZhbHVlcyBhcmUgcmVxdWlyZWQgdG8gcHJvZHVjZSBhIG1lYW5pbmdmdWwgZXJyb3IgZm9yIHVzZXJzLlxuICogVGhlIGRlc3RydWN0ZWQgYW5kIHJlc3RydWN0dXJlZCBvYmplY3QgaXMgc28gaXQncyBjbGVhciB3aGF0IGlzXG4gKiBuZWVkZWQuXG4gKi9cbmNvbnN0IGlzQXJyYXkgPSAodmFsdWUsIGRldGFpbHMpID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vdC1hbi1hcnJheScsIGRldGFpbHMpO1xuICAgIH1cbn07XG5jb25zdCBoYXNNZXRob2QgPSAob2JqZWN0LCBleHBlY3RlZE1ldGhvZCwgZGV0YWlscykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2Ygb2JqZWN0W2V4cGVjdGVkTWV0aG9kXTtcbiAgICBpZiAodHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkZXRhaWxzWydleHBlY3RlZE1ldGhvZCddID0gZXhwZWN0ZWRNZXRob2Q7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21pc3NpbmctYS1tZXRob2QnLCBkZXRhaWxzKTtcbiAgICB9XG59O1xuY29uc3QgaXNUeXBlID0gKG9iamVjdCwgZXhwZWN0ZWRUeXBlLCBkZXRhaWxzKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBvYmplY3QgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICBkZXRhaWxzWydleHBlY3RlZFR5cGUnXSA9IGV4cGVjdGVkVHlwZTtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW5jb3JyZWN0LXR5cGUnLCBkZXRhaWxzKTtcbiAgICB9XG59O1xuY29uc3QgaXNJbnN0YW5jZSA9IChvYmplY3QsIFxuLy8gTmVlZCB0aGUgZ2VuZXJhbCB0eXBlIHRvIGRvIHRoZSBjaGVjayBsYXRlci5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBlY3RlZENsYXNzLCBkZXRhaWxzKSA9PiB7XG4gICAgaWYgKCEob2JqZWN0IGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgZGV0YWlsc1snZXhwZWN0ZWRDbGFzc05hbWUnXSA9IGV4cGVjdGVkQ2xhc3MubmFtZTtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW5jb3JyZWN0LWNsYXNzJywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGlzT25lT2YgPSAodmFsdWUsIHZhbGlkVmFsdWVzLCBkZXRhaWxzKSA9PiB7XG4gICAgaWYgKCF2YWxpZFZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgZGV0YWlsc1sndmFsaWRWYWx1ZURlc2NyaXB0aW9uJ10gPVxuICAgICAgICAgICAgYFZhbGlkIHZhbHVlcyBhcmUgJHtKU09OLnN0cmluZ2lmeSh2YWxpZFZhbHVlcyl9LmA7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2ludmFsaWQtdmFsdWUnLCBkZXRhaWxzKTtcbiAgICB9XG59O1xuY29uc3QgaXNBcnJheU9mQ2xhc3MgPSAodmFsdWUsIFxuLy8gTmVlZCBnZW5lcmFsIHR5cGUgdG8gZG8gY2hlY2sgbGF0ZXIuXG5leHBlY3RlZENsYXNzLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5kZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgV29ya2JveEVycm9yKCdub3QtYXJyYXktb2YtY2xhc3MnLCBkZXRhaWxzKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgaWYgKCEoaXRlbSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBmaW5hbEFzc2VydEV4cG9ydHMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gbnVsbCA6IHtcbiAgICBoYXNNZXRob2QsXG4gICAgaXNBcnJheSxcbiAgICBpc0luc3RhbmNlLFxuICAgIGlzT25lT2YsXG4gICAgaXNUeXBlLFxuICAgIGlzQXJyYXlPZkNsYXNzLFxufTtcbmV4cG9ydCB7IGZpbmFsQXNzZXJ0RXhwb3J0cyBhcyBhc3NlcnQgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmZ1bmN0aW9uIHN0cmlwUGFyYW1zKGZ1bGxVUkwsIGlnbm9yZVBhcmFtcykge1xuICAgIGNvbnN0IHN0cmlwcGVkVVJMID0gbmV3IFVSTChmdWxsVVJMKTtcbiAgICBmb3IgKGNvbnN0IHBhcmFtIG9mIGlnbm9yZVBhcmFtcykge1xuICAgICAgICBzdHJpcHBlZFVSTC5zZWFyY2hQYXJhbXMuZGVsZXRlKHBhcmFtKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmlwcGVkVVJMLmhyZWY7XG59XG4vKipcbiAqIE1hdGNoZXMgYW4gaXRlbSBpbiB0aGUgY2FjaGUsIGlnbm9yaW5nIHNwZWNpZmljIFVSTCBwYXJhbXMuIFRoaXMgaXMgc2ltaWxhclxuICogdG8gdGhlIGBpZ25vcmVTZWFyY2hgIG9wdGlvbiwgYnV0IGl0IGFsbG93cyB5b3UgdG8gaWdub3JlIGp1c3Qgc3BlY2lmaWNcbiAqIHBhcmFtcyAod2hpbGUgY29udGludWluZyB0byBtYXRjaCBvbiB0aGUgb3RoZXJzKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtDYWNoZX0gY2FjaGVcbiAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdFxuICogQHBhcmFtIHtPYmplY3R9IG1hdGNoT3B0aW9uc1xuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBpZ25vcmVQYXJhbXNcbiAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2FjaGVNYXRjaElnbm9yZVBhcmFtcyhjYWNoZSwgcmVxdWVzdCwgaWdub3JlUGFyYW1zLCBtYXRjaE9wdGlvbnMpIHtcbiAgICBjb25zdCBzdHJpcHBlZFJlcXVlc3RVUkwgPSBzdHJpcFBhcmFtcyhyZXF1ZXN0LnVybCwgaWdub3JlUGFyYW1zKTtcbiAgICAvLyBJZiB0aGUgcmVxdWVzdCBkb2Vzbid0IGluY2x1ZGUgYW55IGlnbm9yZWQgcGFyYW1zLCBtYXRjaCBhcyBub3JtYWwuXG4gICAgaWYgKHJlcXVlc3QudXJsID09PSBzdHJpcHBlZFJlcXVlc3RVUkwpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLm1hdGNoKHJlcXVlc3QsIG1hdGNoT3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgbWF0Y2ggYnkgY29tcGFyaW5nIGtleXNcbiAgICBjb25zdCBrZXlzT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbWF0Y2hPcHRpb25zKSwgeyBpZ25vcmVTZWFyY2g6IHRydWUgfSk7XG4gICAgY29uc3QgY2FjaGVLZXlzID0gYXdhaXQgY2FjaGUua2V5cyhyZXF1ZXN0LCBrZXlzT3B0aW9ucyk7XG4gICAgZm9yIChjb25zdCBjYWNoZUtleSBvZiBjYWNoZUtleXMpIHtcbiAgICAgICAgY29uc3Qgc3RyaXBwZWRDYWNoZUtleVVSTCA9IHN0cmlwUGFyYW1zKGNhY2hlS2V5LnVybCwgaWdub3JlUGFyYW1zKTtcbiAgICAgICAgaWYgKHN0cmlwcGVkUmVxdWVzdFVSTCA9PT0gc3RyaXBwZWRDYWNoZUtleVVSTCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlLm1hdGNoKGNhY2hlS2V5LCBtYXRjaE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmV4cG9ydCB7IGNhY2hlTWF0Y2hJZ25vcmVQYXJhbXMgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuY29uc3QgX2NhY2hlTmFtZURldGFpbHMgPSB7XG4gICAgZ29vZ2xlQW5hbHl0aWNzOiAnZ29vZ2xlQW5hbHl0aWNzJyxcbiAgICBwcmVjYWNoZTogJ3ByZWNhY2hlLXYyJyxcbiAgICBwcmVmaXg6ICd3b3JrYm94JyxcbiAgICBydW50aW1lOiAncnVudGltZScsXG4gICAgc3VmZml4OiB0eXBlb2YgcmVnaXN0cmF0aW9uICE9PSAndW5kZWZpbmVkJyA/IHJlZ2lzdHJhdGlvbi5zY29wZSA6ICcnLFxufTtcbmNvbnN0IF9jcmVhdGVDYWNoZU5hbWUgPSAoY2FjaGVOYW1lKSA9PiB7XG4gICAgcmV0dXJuIFtfY2FjaGVOYW1lRGV0YWlscy5wcmVmaXgsIGNhY2hlTmFtZSwgX2NhY2hlTmFtZURldGFpbHMuc3VmZml4XVxuICAgICAgICAuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMClcbiAgICAgICAgLmpvaW4oJy0nKTtcbn07XG5jb25zdCBlYWNoQ2FjaGVOYW1lRGV0YWlsID0gKGZuKSA9PiB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoX2NhY2hlTmFtZURldGFpbHMpKSB7XG4gICAgICAgIGZuKGtleSk7XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBjYWNoZU5hbWVzID0ge1xuICAgIHVwZGF0ZURldGFpbHM6IChkZXRhaWxzKSA9PiB7XG4gICAgICAgIGVhY2hDYWNoZU5hbWVEZXRhaWwoKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXRhaWxzW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgX2NhY2hlTmFtZURldGFpbHNba2V5XSA9IGRldGFpbHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXRHb29nbGVBbmFseXRpY3NOYW1lOiAodXNlckNhY2hlTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gdXNlckNhY2hlTmFtZSB8fCBfY3JlYXRlQ2FjaGVOYW1lKF9jYWNoZU5hbWVEZXRhaWxzLmdvb2dsZUFuYWx5dGljcyk7XG4gICAgfSxcbiAgICBnZXRQcmVjYWNoZU5hbWU6ICh1c2VyQ2FjaGVOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VyQ2FjaGVOYW1lIHx8IF9jcmVhdGVDYWNoZU5hbWUoX2NhY2hlTmFtZURldGFpbHMucHJlY2FjaGUpO1xuICAgIH0sXG4gICAgZ2V0UHJlZml4OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfY2FjaGVOYW1lRGV0YWlscy5wcmVmaXg7XG4gICAgfSxcbiAgICBnZXRSdW50aW1lTmFtZTogKHVzZXJDYWNoZU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZXJDYWNoZU5hbWUgfHwgX2NyZWF0ZUNhY2hlTmFtZShfY2FjaGVOYW1lRGV0YWlscy5ydW50aW1lKTtcbiAgICB9LFxuICAgIGdldFN1ZmZpeDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gX2NhY2hlTmFtZURldGFpbHMuc3VmZml4O1xuICAgIH0sXG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5sZXQgc3VwcG9ydFN0YXR1cztcbi8qKlxuICogQSB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHNcbiAqIGNvbnN0cnVjdGluZyBhIFtgUmVhZGFibGVTdHJlYW1gXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUmVhZGFibGVTdHJlYW0vUmVhZGFibGVTdHJlYW0pXG4gKiBvYmplY3QuXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgLCBpZiB0aGUgY3VycmVudCBicm93c2VyIGNhbiBzdWNjZXNzZnVsbHlcbiAqICAgICBjb25zdHJ1Y3QgYSBgUmVhZGFibGVTdHJlYW1gLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjYW5Db25zdHJ1Y3RSZWFkYWJsZVN0cmVhbSgpIHtcbiAgICBpZiAoc3VwcG9ydFN0YXR1cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE0NzNcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5ldyBSZWFkYWJsZVN0cmVhbSh7IHN0YXJ0KCkgeyB9IH0pO1xuICAgICAgICAgICAgc3VwcG9ydFN0YXR1cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzdXBwb3J0U3RhdHVzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRTdGF0dXM7XG59XG5leHBvcnQgeyBjYW5Db25zdHJ1Y3RSZWFkYWJsZVN0cmVhbSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5sZXQgc3VwcG9ydFN0YXR1cztcbi8qKlxuICogQSB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHNcbiAqIGNvbnN0cnVjdGluZyBhIG5ldyBgUmVzcG9uc2VgIGZyb20gYSBgcmVzcG9uc2UuYm9keWAgc3RyZWFtLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCwgaWYgdGhlIGN1cnJlbnQgYnJvd3NlciBjYW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgY29uc3RydWN0IGEgYFJlc3BvbnNlYCBmcm9tIGEgYHJlc3BvbnNlLmJvZHlgIHN0cmVhbSwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbSgpIHtcbiAgICBpZiAoc3VwcG9ydFN0YXR1cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHRlc3RSZXNwb25zZSA9IG5ldyBSZXNwb25zZSgnJyk7XG4gICAgICAgIGlmICgnYm9keScgaW4gdGVzdFJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG5ldyBSZXNwb25zZSh0ZXN0UmVzcG9uc2UuYm9keSk7XG4gICAgICAgICAgICAgICAgc3VwcG9ydFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0U3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VwcG9ydFN0YXR1cyA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydFN0YXR1cztcbn1cbmV4cG9ydCB7IGNhbkNvbnN0cnVjdFJlc3BvbnNlRnJvbUJvZHlTdHJlYW0gfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdGhhdCBwcmV2ZW50cyBhIHByb21pc2UgZnJvbSBiZWluZyBmbGFnZ2VkIGFzIHVudXNlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvbnRXYWl0Rm9yKHByb21pc2UpIHtcbiAgICAvLyBFZmZlY3RpdmUgbm8tb3AuXG4gICAgdm9pZCBwcm9taXNlLnRoZW4oKCkgPT4geyB9KTtcbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBxdW90YUVycm9yQ2FsbGJhY2tzIH0gZnJvbSAnLi4vbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFJ1bnMgYWxsIG9mIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMsIG9uZSBhdCBhIHRpbWUgc2VxdWVudGlhbGx5LCBpbiB0aGUgb3JkZXJcbiAqIGluIHdoaWNoIHRoZXkgd2VyZSByZWdpc3RlcmVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1jb3JlXG4gKiBAcHJpdmF0ZVxuICovXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcygpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIubG9nKGBBYm91dCB0byBydW4gJHtxdW90YUVycm9yQ2FsbGJhY2tzLnNpemV9IGAgK1xuICAgICAgICAgICAgYGNhbGxiYWNrcyB0byBjbGVhbiB1cCBjYWNoZXMuYCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgcXVvdGFFcnJvckNhbGxiYWNrcykge1xuICAgICAgICBhd2FpdCBjYWxsYmFjaygpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmxvZyhjYWxsYmFjaywgJ2lzIGNvbXBsZXRlLicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5sb2coJ0ZpbmlzaGVkIHJ1bm5pbmcgY2FsbGJhY2tzLicpO1xuICAgIH1cbn1cbmV4cG9ydCB7IGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmNvbnN0IGdldEZyaWVuZGx5VVJMID0gKHVybCkgPT4ge1xuICAgIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwoU3RyaW5nKHVybCksIGxvY2F0aW9uLmhyZWYpO1xuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzIzMjNcbiAgICAvLyBXZSB3YW50IHRvIGluY2x1ZGUgZXZlcnl0aGluZywgZXhjZXB0IGZvciB0aGUgb3JpZ2luIGlmIGl0J3Mgc2FtZS1vcmlnaW4uXG4gICAgcmV0dXJuIHVybE9iai5ocmVmLnJlcGxhY2UobmV3IFJlZ0V4cChgXiR7bG9jYXRpb24ub3JpZ2lufWApLCAnJyk7XG59O1xuZXhwb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmNvbnN0IGxvZ2dlciA9IChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gbnVsbCA6ICgoKSA9PiB7XG4gICAgLy8gRG9uJ3Qgb3ZlcndyaXRlIHRoaXMgdmFsdWUgaWYgaXQncyBhbHJlYWR5IHNldC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L3B1bGwvMjI4NCNpc3N1ZWNvbW1lbnQtNTYwNDcwOTIzXG4gICAgaWYgKCEoJ19fV0JfRElTQUJMRV9ERVZfTE9HUycgaW4gc2VsZikpIHtcbiAgICAgICAgc2VsZi5fX1dCX0RJU0FCTEVfREVWX0xPR1MgPSBmYWxzZTtcbiAgICB9XG4gICAgbGV0IGluR3JvdXAgPSBmYWxzZTtcbiAgICBjb25zdCBtZXRob2RUb0NvbG9yTWFwID0ge1xuICAgICAgICBkZWJ1ZzogYCM3ZjhjOGRgLFxuICAgICAgICBsb2c6IGAjMmVjYzcxYCxcbiAgICAgICAgd2FybjogYCNmMzljMTJgLFxuICAgICAgICBlcnJvcjogYCNjMDM5MmJgLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYCMzNDk4ZGJgLFxuICAgICAgICBncm91cEVuZDogbnVsbCxcbiAgICB9O1xuICAgIGNvbnN0IHByaW50ID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJncykge1xuICAgICAgICBpZiAoc2VsZi5fX1dCX0RJU0FCTEVfREVWX0xPR1MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBDb2xsYXBzZWQnKSB7XG4gICAgICAgICAgICAvLyBTYWZhcmkgZG9lc24ndCBwcmludCBhbGwgY29uc29sZS5ncm91cENvbGxhcHNlZCgpIGFyZ3VtZW50czpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xODI3NTRcbiAgICAgICAgICAgIGlmICgvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZVttZXRob2RdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHlsZXMgPSBbXG4gICAgICAgICAgICBgYmFja2dyb3VuZDogJHttZXRob2RUb0NvbG9yTWFwW21ldGhvZF19YCxcbiAgICAgICAgICAgIGBib3JkZXItcmFkaXVzOiAwLjVlbWAsXG4gICAgICAgICAgICBgY29sb3I6IHdoaXRlYCxcbiAgICAgICAgICAgIGBmb250LXdlaWdodDogYm9sZGAsXG4gICAgICAgICAgICBgcGFkZGluZzogMnB4IDAuNWVtYCxcbiAgICAgICAgXTtcbiAgICAgICAgLy8gV2hlbiBpbiBhIGdyb3VwLCB0aGUgd29ya2JveCBwcmVmaXggaXMgbm90IGRpc3BsYXllZC5cbiAgICAgICAgY29uc3QgbG9nUHJlZml4ID0gaW5Hcm91cCA/IFtdIDogWyclY3dvcmtib3gnLCBzdHlsZXMuam9pbignOycpXTtcbiAgICAgICAgY29uc29sZVttZXRob2RdKC4uLmxvZ1ByZWZpeCwgLi4uYXJncyk7XG4gICAgICAgIGlmIChtZXRob2QgPT09ICdncm91cENvbGxhcHNlZCcpIHtcbiAgICAgICAgICAgIGluR3JvdXAgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgPT09ICdncm91cEVuZCcpIHtcbiAgICAgICAgICAgIGluR3JvdXAgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgICBjb25zdCBhcGkgPSB7fTtcbiAgICBjb25zdCBsb2dnZXJNZXRob2RzID0gT2JqZWN0LmtleXMobWV0aG9kVG9Db2xvck1hcCk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgbG9nZ2VyTWV0aG9kcykge1xuICAgICAgICBjb25zdCBtZXRob2QgPSBrZXk7XG4gICAgICAgIGFwaVttZXRob2RdID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIHByaW50KG1ldGhvZCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBhcGk7XG59KSgpKTtcbmV4cG9ydCB7IGxvZ2dlciB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IHRpbWVvdXQgfSBmcm9tICcuL3RpbWVvdXQuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBNQVhfUkVUUllfVElNRSA9IDIwMDA7XG4vKipcbiAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSB3aW5kb3cgY2xpZW50IG1hdGNoaW5nIHRoZSBwYXNzZWRcbiAqIGByZXN1bHRpbmdDbGllbnRJZGAuIEZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgYHJlc3VsdGluZ0NsaWVudElkYFxuICogb3IgaWYgd2FpdGluZyBmb3IgdGhlIHJlc3VsdGluZyBjbGllbnQgdG8gYXBwZXIgdGFrZXMgdG9vIGxvbmcsIHJlc29sdmUgdG9cbiAqIGB1bmRlZmluZWRgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcmVzdWx0aW5nQ2xpZW50SWRdXG4gKiBAcmV0dXJuIHtQcm9taXNlPENsaWVudHx1bmRlZmluZWQ+fVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc3VsdGluZ0NsaWVudEV4aXN0cyhyZXN1bHRpbmdDbGllbnRJZCkge1xuICAgIGlmICghcmVzdWx0aW5nQ2xpZW50SWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZXhpc3RpbmdXaW5kb3dzID0gYXdhaXQgc2VsZi5jbGllbnRzLm1hdGNoQWxsKHsgdHlwZTogJ3dpbmRvdycgfSk7XG4gICAgY29uc3QgZXhpc3RpbmdXaW5kb3dJZHMgPSBuZXcgU2V0KGV4aXN0aW5nV2luZG93cy5tYXAoKHcpID0+IHcuaWQpKTtcbiAgICBsZXQgcmVzdWx0aW5nV2luZG93O1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIC8vIE9ubHkgd2FpdCB1cCB0byBgTUFYX1JFVFJZX1RJTUVgIHRvIGZpbmQgYSBtYXRjaGluZyBjbGllbnQuXG4gICAgd2hpbGUgKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lIDwgTUFYX1JFVFJZX1RJTUUpIHtcbiAgICAgICAgZXhpc3RpbmdXaW5kb3dzID0gYXdhaXQgc2VsZi5jbGllbnRzLm1hdGNoQWxsKHsgdHlwZTogJ3dpbmRvdycgfSk7XG4gICAgICAgIHJlc3VsdGluZ1dpbmRvdyA9IGV4aXN0aW5nV2luZG93cy5maW5kKCh3KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0aW5nQ2xpZW50SWQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgYHJlc3VsdGluZ0NsaWVudElkYCwgd2UgY2FuIG1hdGNoIG9uIHRoYXQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHcuaWQgPT09IHJlc3VsdGluZ0NsaWVudElkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIG1hdGNoIG9uIGZpbmRpbmcgYSB3aW5kb3cgbm90IGluIGBleGlzdGluZ1dpbmRvd0lkc2AuXG4gICAgICAgICAgICAgICAgcmV0dXJuICFleGlzdGluZ1dpbmRvd0lkcy5oYXMody5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzdWx0aW5nV2luZG93KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBTbGVlcCBmb3IgMTAwbXMgYW5kIHJldHJ5LlxuICAgICAgICBhd2FpdCB0aW1lb3V0KDEwMCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRpbmdXaW5kb3c7XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYW5kIHRoZSBwYXNzZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAqIFRoaXMgdXRpbGl0eSBpcyBhbiBhc3luYy9hd2FpdC1mcmllbmRseSB2ZXJzaW9uIG9mIGBzZXRUaW1lb3V0YC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbXNcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGltZW91dChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIHV0aWxpdHkgbWV0aG9kIHRoYXQgbWFrZXMgaXQgZWFzaWVyIHRvIHVzZSBgZXZlbnQud2FpdFVudGlsYCB3aXRoXG4gKiBhc3luYyBmdW5jdGlvbnMgYW5kIHJldHVybiB0aGUgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXN5bmNGblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB3YWl0VW50aWwoZXZlbnQsIGFzeW5jRm4pIHtcbiAgICBjb25zdCByZXR1cm5Qcm9taXNlID0gYXN5bmNGbigpO1xuICAgIGV2ZW50LndhaXRVbnRpbChyZXR1cm5Qcm9taXNlKTtcbiAgICByZXR1cm4gcmV0dXJuUHJvbWlzZTtcbn1cbmV4cG9ydCB7IHdhaXRVbnRpbCB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6Y29yZTo2LjIuNCddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGNhY2hlTmFtZXMgYXMgX2NhY2hlTmFtZXMgfSBmcm9tICcuL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogR2V0IHRoZSBjdXJyZW50IGNhY2hlIG5hbWVzIGFuZCBwcmVmaXgvc3VmZml4IHVzZWQgYnkgV29ya2JveC5cbiAqXG4gKiBgY2FjaGVOYW1lcy5wcmVjYWNoZWAgaXMgdXNlZCBmb3IgcHJlY2FjaGVkIGFzc2V0cyxcbiAqIGBjYWNoZU5hbWVzLmdvb2dsZUFuYWx5dGljc2AgaXMgdXNlZCBieSBgd29ya2JveC1nb29nbGUtYW5hbHl0aWNzYCB0b1xuICogc3RvcmUgYGFuYWx5dGljcy5qc2AsIGFuZCBgY2FjaGVOYW1lcy5ydW50aW1lYCBpcyB1c2VkIGZvciBldmVyeXRoaW5nIGVsc2UuXG4gKlxuICogYGNhY2hlTmFtZXMucHJlZml4YCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSBqdXN0IHRoZSBjdXJyZW50IHByZWZpeCB2YWx1ZS5cbiAqIGBjYWNoZU5hbWVzLnN1ZmZpeGAgY2FuIGJlIHVzZWQgdG8gcmV0cmlldmUganVzdCB0aGUgY3VycmVudCBzdWZmaXggdmFsdWUuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBgcHJlY2FjaGVgLCBgcnVudGltZWAsIGBwcmVmaXhgLCBhbmRcbiAqICAgICBgZ29vZ2xlQW5hbHl0aWNzYCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1jb3JlXG4gKi9cbmNvbnN0IGNhY2hlTmFtZXMgPSB7XG4gICAgZ2V0IGdvb2dsZUFuYWx5dGljcygpIHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVzLmdldEdvb2dsZUFuYWx5dGljc05hbWUoKTtcbiAgICB9LFxuICAgIGdldCBwcmVjYWNoZSgpIHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVzLmdldFByZWNhY2hlTmFtZSgpO1xuICAgIH0sXG4gICAgZ2V0IHByZWZpeCgpIHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVzLmdldFByZWZpeCgpO1xuICAgIH0sXG4gICAgZ2V0IHJ1bnRpbWUoKSB7XG4gICAgICAgIHJldHVybiBfY2FjaGVOYW1lcy5nZXRSdW50aW1lTmFtZSgpO1xuICAgIH0sXG4gICAgZ2V0IHN1ZmZpeCgpIHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVzLmdldFN1ZmZpeCgpO1xuICAgIH0sXG59O1xuZXhwb3J0IHsgY2FjaGVOYW1lcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQ2xhaW0gYW55IGN1cnJlbnRseSBhdmFpbGFibGUgY2xpZW50cyBvbmNlIHRoZSBzZXJ2aWNlIHdvcmtlclxuICogYmVjb21lcyBhY3RpdmUuIFRoaXMgaXMgbm9ybWFsbHkgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBza2lwV2FpdGluZygpYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtY29yZVxuICovXG5mdW5jdGlvbiBjbGllbnRzQ2xhaW0oKSB7XG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsICgpID0+IHNlbGYuY2xpZW50cy5jbGFpbSgpKTtcbn1cbmV4cG9ydCB7IGNsaWVudHNDbGFpbSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbSB9IGZyb20gJy4vX3ByaXZhdGUvY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbS5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICcuL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbGxvd3MgZGV2ZWxvcGVycyB0byBjb3B5IGEgcmVzcG9uc2UgYW5kIG1vZGlmeSBpdHMgYGhlYWRlcnNgLCBgc3RhdHVzYCxcbiAqIG9yIGBzdGF0dXNUZXh0YCB2YWx1ZXMgKHRoZSB2YWx1ZXMgc2V0dGFibGUgdmlhIGFcbiAqIFtgUmVzcG9uc2VJbml0YF17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Jlc3BvbnNlL1Jlc3BvbnNlI1N5bnRheH1cbiAqIG9iamVjdCBpbiB0aGUgY29uc3RydWN0b3IpLlxuICogVG8gbW9kaWZ5IHRoZXNlIHZhbHVlcywgcGFzcyBhIGZ1bmN0aW9uIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoYXRcbiAqIGZ1bmN0aW9uIHdpbGwgYmUgaW52b2tlZCB3aXRoIGEgc2luZ2xlIG9iamVjdCB3aXRoIHRoZSByZXNwb25zZSBwcm9wZXJ0aWVzXG4gKiBge2hlYWRlcnMsIHN0YXR1cywgc3RhdHVzVGV4dH1gLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoaXMgZnVuY3Rpb24gd2lsbFxuICogYmUgdXNlZCBhcyB0aGUgYFJlc3BvbnNlSW5pdGAgZm9yIHRoZSBuZXcgYFJlc3BvbnNlYC4gVG8gY2hhbmdlIHRoZSB2YWx1ZXNcbiAqIGVpdGhlciBtb2RpZnkgdGhlIHBhc3NlZCBwYXJhbWV0ZXIocykgYW5kIHJldHVybiBpdCwgb3IgcmV0dXJuIGEgdG90YWxseVxuICogbmV3IG9iamVjdC5cbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBpbnRlbnRpb25hbGx5IGxpbWl0ZWQgdG8gc2FtZS1vcmlnaW4gcmVzcG9uc2VzLCByZWdhcmRsZXNzIG9mXG4gKiB3aGV0aGVyIENPUlMgd2FzIHVzZWQgb3Igbm90LlxuICpcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc3BvbnNlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtb2RpZmllclxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LWNvcmVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY29weVJlc3BvbnNlKHJlc3BvbnNlLCBtb2RpZmllcikge1xuICAgIGxldCBvcmlnaW4gPSBudWxsO1xuICAgIC8vIElmIHJlc3BvbnNlLnVybCBpc24ndCBzZXQsIGFzc3VtZSBpdCdzIGNyb3NzLW9yaWdpbiBhbmQga2VlcCBvcmlnaW4gbnVsbC5cbiAgICBpZiAocmVzcG9uc2UudXJsKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVVJMID0gbmV3IFVSTChyZXNwb25zZS51cmwpO1xuICAgICAgICBvcmlnaW4gPSByZXNwb25zZVVSTC5vcmlnaW47XG4gICAgfVxuICAgIGlmIChvcmlnaW4gIT09IHNlbGYubG9jYXRpb24ub3JpZ2luKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2Nyb3NzLW9yaWdpbi1jb3B5LXJlc3BvbnNlJywgeyBvcmlnaW4gfSk7XG4gICAgfVxuICAgIGNvbnN0IGNsb25lZFJlc3BvbnNlID0gcmVzcG9uc2UuY2xvbmUoKTtcbiAgICAvLyBDcmVhdGUgYSBmcmVzaCBgUmVzcG9uc2VJbml0YCBvYmplY3QgYnkgY2xvbmluZyB0aGUgaGVhZGVycy5cbiAgICBjb25zdCByZXNwb25zZUluaXQgPSB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKGNsb25lZFJlc3BvbnNlLmhlYWRlcnMpLFxuICAgICAgICBzdGF0dXM6IGNsb25lZFJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogY2xvbmVkUmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICB9O1xuICAgIC8vIEFwcGx5IGFueSB1c2VyIG1vZGlmaWNhdGlvbnMuXG4gICAgY29uc3QgbW9kaWZpZWRSZXNwb25zZUluaXQgPSBtb2RpZmllciA/IG1vZGlmaWVyKHJlc3BvbnNlSW5pdCkgOiByZXNwb25zZUluaXQ7XG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgcmVzcG9uc2UgZnJvbSB0aGUgYm9keSBzdHJlYW0gYW5kIGBSZXNwb25zZUluaXRgXG4gICAgLy8gbW9kaWZpY2F0aW9ucy4gTm90ZTogbm90IGFsbCBicm93c2VycyBzdXBwb3J0IHRoZSBSZXNwb25zZS5ib2R5IHN0cmVhbSxcbiAgICAvLyBzbyBmYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgZW50aXJlIGJvZHkgaW50byBtZW1vcnkgYXMgYSBibG9iLlxuICAgIGNvbnN0IGJvZHkgPSBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtKCkgP1xuICAgICAgICBjbG9uZWRSZXNwb25zZS5ib2R5IDogYXdhaXQgY2xvbmVkUmVzcG9uc2UuYmxvYigpO1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoYm9keSwgbW9kaWZpZWRSZXNwb25zZUluaXQpO1xufVxuZXhwb3J0IHsgY29weVJlc3BvbnNlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyByZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjayB9IGZyb20gJy4vcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2suanMnO1xuaW1wb3J0ICogYXMgX3ByaXZhdGUgZnJvbSAnLi9fcHJpdmF0ZS5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnLi9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7IGNvcHlSZXNwb25zZSB9IGZyb20gJy4vY29weVJlc3BvbnNlLmpzJztcbmltcG9ydCB7IGNsaWVudHNDbGFpbSB9IGZyb20gJy4vY2xpZW50c0NsYWltLmpzJztcbmltcG9ydCB7IHNldENhY2hlTmFtZURldGFpbHMgfSBmcm9tICcuL3NldENhY2hlTmFtZURldGFpbHMuanMnO1xuaW1wb3J0IHsgc2tpcFdhaXRpbmcgfSBmcm9tICcuL3NraXBXYWl0aW5nLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFsbCBvZiB0aGUgV29ya2JveCBzZXJ2aWNlIHdvcmtlciBsaWJyYXJpZXMgdXNlIHdvcmtib3gtY29yZSBmb3Igc2hhcmVkXG4gKiBjb2RlIGFzIHdlbGwgYXMgc2V0dGluZyBkZWZhdWx0IHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgc2hhcmVkIChsaWtlIGNhY2hlXG4gKiBuYW1lcykuXG4gKlxuICogQG1vZHVsZSB3b3JrYm94LWNvcmVcbiAqL1xuZXhwb3J0IHsgX3ByaXZhdGUsIGNhY2hlTmFtZXMsIGNsaWVudHNDbGFpbSwgY29weVJlc3BvbnNlLCByZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjaywgc2V0Q2FjaGVOYW1lRGV0YWlscywgc2tpcFdhaXRpbmcsIH07XG5leHBvcnQgKiBmcm9tICcuL3R5cGVzLmpzJztcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IG1lc3NhZ2VzIH0gZnJvbSAnLi9tZXNzYWdlcy5qcyc7XG5pbXBvcnQgJy4uLy4uL192ZXJzaW9uLmpzJztcbmNvbnN0IGZhbGxiYWNrID0gKGNvZGUsIC4uLmFyZ3MpID0+IHtcbiAgICBsZXQgbXNnID0gY29kZTtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG1zZyArPSBgIDo6ICR7SlNPTi5zdHJpbmdpZnkoYXJncyl9YDtcbiAgICB9XG4gICAgcmV0dXJuIG1zZztcbn07XG5jb25zdCBnZW5lcmF0b3JGdW5jdGlvbiA9IChjb2RlLCBkZXRhaWxzID0ge30pID0+IHtcbiAgICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZXNbY29kZV07XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgbWVzc2FnZSBmb3IgY29kZSAnJHtjb2RlfScuYCk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlKGRldGFpbHMpO1xufTtcbmV4cG9ydCBjb25zdCBtZXNzYWdlR2VuZXJhdG9yID0gKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpID9cbiAgICBmYWxsYmFjayA6IGdlbmVyYXRvckZ1bmN0aW9uO1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi8uLi9fdmVyc2lvbi5qcyc7XG5leHBvcnQgY29uc3QgbWVzc2FnZXMgPSB7XG4gICAgJ2ludmFsaWQtdmFsdWUnOiAoeyBwYXJhbU5hbWUsIHZhbGlkVmFsdWVEZXNjcmlwdGlvbiwgdmFsdWUgfSkgPT4ge1xuICAgICAgICBpZiAoIXBhcmFtTmFtZSB8fCAhdmFsaWRWYWx1ZURlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2ludmFsaWQtdmFsdWUnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgVGhlICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciB3YXMgZ2l2ZW4gYSB2YWx1ZSB3aXRoIGFuIGAgK1xuICAgICAgICAgICAgYHVuZXhwZWN0ZWQgdmFsdWUuICR7dmFsaWRWYWx1ZURlc2NyaXB0aW9ufSBSZWNlaXZlZCBhIHZhbHVlIG9mIGAgK1xuICAgICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfS5gO1xuICAgIH0sXG4gICAgJ25vdC1hbi1hcnJheSc6ICh7IG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZSB9KSA9PiB7XG4gICAgICAgIGlmICghbW9kdWxlTmFtZSB8fCAhY2xhc3NOYW1lIHx8ICFmdW5jTmFtZSB8fCAhcGFyYW1OYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ25vdC1hbi1hcnJheScgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpJyBtdXN0IGJlIGFuIGFycmF5LmA7XG4gICAgfSxcbiAgICAnaW5jb3JyZWN0LXR5cGUnOiAoeyBleHBlY3RlZFR5cGUsIHBhcmFtTmFtZSwgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSB9KSA9PiB7XG4gICAgICAgIGlmICghZXhwZWN0ZWRUeXBlIHx8ICFwYXJhbU5hbWUgfHwgIW1vZHVsZU5hbWUgfHwgIWZ1bmNOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2luY29ycmVjdC10eXBlJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWVTdHIgPSBjbGFzc05hbWUgPyBgJHtjbGFzc05hbWV9LmAgOiAnJztcbiAgICAgICAgcmV0dXJuIGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lU3RyfWAgK1xuICAgICAgICAgICAgYCR7ZnVuY05hbWV9KCknIG11c3QgYmUgb2YgdHlwZSAke2V4cGVjdGVkVHlwZX0uYDtcbiAgICB9LFxuICAgICdpbmNvcnJlY3QtY2xhc3MnOiAoeyBleHBlY3RlZENsYXNzTmFtZSwgcGFyYW1OYW1lLCBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBpc1JldHVyblZhbHVlUHJvYmxlbSB9KSA9PiB7XG4gICAgICAgIGlmICghZXhwZWN0ZWRDbGFzc05hbWUgfHwgIW1vZHVsZU5hbWUgfHwgIWZ1bmNOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2luY29ycmVjdC1jbGFzcycgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lU3RyID0gY2xhc3NOYW1lID8gYCR7Y2xhc3NOYW1lfS5gIDogJyc7XG4gICAgICAgIGlmIChpc1JldHVyblZhbHVlUHJvYmxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGBUaGUgcmV0dXJuIHZhbHVlIGZyb20gYCArXG4gICAgICAgICAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lU3RyfSR7ZnVuY05hbWV9KCknIGAgK1xuICAgICAgICAgICAgICAgIGBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGNsYXNzICR7ZXhwZWN0ZWRDbGFzc05hbWV9LmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lU3RyfSR7ZnVuY05hbWV9KCknIGAgK1xuICAgICAgICAgICAgYG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgY2xhc3MgJHtleHBlY3RlZENsYXNzTmFtZX0uYDtcbiAgICB9LFxuICAgICdtaXNzaW5nLWEtbWV0aG9kJzogKHsgZXhwZWN0ZWRNZXRob2QsIHBhcmFtTmFtZSwgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSB9KSA9PiB7XG4gICAgICAgIGlmICghZXhwZWN0ZWRNZXRob2QgfHwgIXBhcmFtTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhY2xhc3NOYW1lXG4gICAgICAgICAgICB8fCAhZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnbWlzc2luZy1hLW1ldGhvZCcgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpIGV4cGVjdGVkIHRoZSBgICtcbiAgICAgICAgICAgIGAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgdG8gZXhwb3NlIGEgJyR7ZXhwZWN0ZWRNZXRob2R9JyBtZXRob2QuYDtcbiAgICB9LFxuICAgICdhZGQtdG8tY2FjaGUtbGlzdC11bmV4cGVjdGVkLXR5cGUnOiAoeyBlbnRyeSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgQW4gdW5leHBlY3RlZCBlbnRyeSB3YXMgcGFzc2VkIHRvIGAgK1xuICAgICAgICAgICAgYCd3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLmFkZFRvQ2FjaGVMaXN0KCknIFRoZSBlbnRyeSBgICtcbiAgICAgICAgICAgIGAnJHtKU09OLnN0cmluZ2lmeShlbnRyeSl9JyBpc24ndCBzdXBwb3J0ZWQuIFlvdSBtdXN0IHN1cHBseSBhbiBhcnJheSBvZiBgICtcbiAgICAgICAgICAgIGBzdHJpbmdzIHdpdGggb25lIG9yIG1vcmUgY2hhcmFjdGVycywgb2JqZWN0cyB3aXRoIGEgdXJsIHByb3BlcnR5IG9yIGAgK1xuICAgICAgICAgICAgYFJlcXVlc3Qgb2JqZWN0cy5gO1xuICAgIH0sXG4gICAgJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWVudHJpZXMnOiAoeyBmaXJzdEVudHJ5LCBzZWNvbmRFbnRyeSB9KSA9PiB7XG4gICAgICAgIGlmICghZmlyc3RFbnRyeSB8fCAhc2Vjb25kRW50cnkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byBgICtcbiAgICAgICAgICAgICAgICBgJ2FkZC10by1jYWNoZS1saXN0LWR1cGxpY2F0ZS1lbnRyaWVzJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFR3byBvZiB0aGUgZW50cmllcyBwYXNzZWQgdG8gYCArXG4gICAgICAgICAgICBgJ3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoKScgaGFkIHRoZSBVUkwgYCArXG4gICAgICAgICAgICBgJHtmaXJzdEVudHJ5fSBidXQgZGlmZmVyZW50IHJldmlzaW9uIGRldGFpbHMuIFdvcmtib3ggaXMgYCArXG4gICAgICAgICAgICBgdW5hYmxlIHRvIGNhY2hlIGFuZCB2ZXJzaW9uIHRoZSBhc3NldCBjb3JyZWN0bHkuIFBsZWFzZSByZW1vdmUgb25lIGAgK1xuICAgICAgICAgICAgYG9mIHRoZSBlbnRyaWVzLmA7XG4gICAgfSxcbiAgICAncGx1Z2luLWVycm9yLXJlcXVlc3Qtd2lsbC1mZXRjaCc6ICh7IHRocm93bkVycm9yTWVzc2FnZSB9KSA9PiB7XG4gICAgICAgIGlmICghdGhyb3duRXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gYCArXG4gICAgICAgICAgICAgICAgYCdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJywgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBBbiBlcnJvciB3YXMgdGhyb3duIGJ5IGEgcGx1Z2lucyAncmVxdWVzdFdpbGxGZXRjaCgpJyBtZXRob2QuIGAgK1xuICAgICAgICAgICAgYFRoZSB0aHJvd24gZXJyb3IgbWVzc2FnZSB3YXM6ICcke3Rocm93bkVycm9yTWVzc2FnZX0nLmA7XG4gICAgfSxcbiAgICAnaW52YWxpZC1jYWNoZS1uYW1lJzogKHsgY2FjaGVOYW1lSWQsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgaWYgKCFjYWNoZU5hbWVJZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhICdjYWNoZU5hbWVJZCcgZm9yIGVycm9yICdpbnZhbGlkLWNhY2hlLW5hbWUnYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBZb3UgbXVzdCBwcm92aWRlIGEgbmFtZSBjb250YWluaW5nIGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgZm9yIGAgK1xuICAgICAgICAgICAgYHNldENhY2hlRGV0YWlscyh7JHtjYWNoZU5hbWVJZH06ICcuLi4nfSkuIFJlY2VpdmVkIGEgdmFsdWUgb2YgYCArXG4gICAgICAgICAgICBgJyR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfSdgO1xuICAgIH0sXG4gICAgJ3VucmVnaXN0ZXItcm91dGUtYnV0LW5vdC1mb3VuZC13aXRoLW1ldGhvZCc6ICh7IG1ldGhvZCB9KSA9PiB7XG4gICAgICAgIGlmICghbWV0aG9kKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gYCArXG4gICAgICAgICAgICAgICAgYCd1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgVGhlIHJvdXRlIHlvdSdyZSB0cnlpbmcgdG8gdW5yZWdpc3RlciB3YXMgbm90ICBwcmV2aW91c2x5IGAgK1xuICAgICAgICAgICAgYHJlZ2lzdGVyZWQgZm9yIHRoZSBtZXRob2QgdHlwZSAnJHttZXRob2R9Jy5gO1xuICAgIH0sXG4gICAgJ3VucmVnaXN0ZXItcm91dGUtcm91dGUtbm90LXJlZ2lzdGVyZWQnOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlIHJvdXRlIHlvdSdyZSB0cnlpbmcgdG8gdW5yZWdpc3RlciB3YXMgbm90IHByZXZpb3VzbHkgYCArXG4gICAgICAgICAgICBgcmVnaXN0ZXJlZC5gO1xuICAgIH0sXG4gICAgJ3F1ZXVlLXJlcGxheS1mYWlsZWQnOiAoeyBuYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBSZXBsYXlpbmcgdGhlIGJhY2tncm91bmQgc3luYyBxdWV1ZSAnJHtuYW1lfScgZmFpbGVkLmA7XG4gICAgfSxcbiAgICAnZHVwbGljYXRlLXF1ZXVlLW5hbWUnOiAoeyBuYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBUaGUgUXVldWUgbmFtZSAnJHtuYW1lfScgaXMgYWxyZWFkeSBiZWluZyB1c2VkLiBgICtcbiAgICAgICAgICAgIGBBbGwgaW5zdGFuY2VzIG9mIGJhY2tncm91bmRTeW5jLlF1ZXVlIG11c3QgYmUgZ2l2ZW4gdW5pcXVlIG5hbWVzLmA7XG4gICAgfSxcbiAgICAnZXhwaXJlZC10ZXN0LXdpdGhvdXQtbWF4LWFnZSc6ICh7IG1ldGhvZE5hbWUsIHBhcmFtTmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlICcke21ldGhvZE5hbWV9KCknIG1ldGhvZCBjYW4gb25seSBiZSB1c2VkIHdoZW4gdGhlIGAgK1xuICAgICAgICAgICAgYCcke3BhcmFtTmFtZX0nIGlzIHVzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLmA7XG4gICAgfSxcbiAgICAndW5zdXBwb3J0ZWQtcm91dGUtdHlwZSc6ICh7IG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlIHN1cHBsaWVkICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciB3YXMgYW4gdW5zdXBwb3J0ZWQgdHlwZS4gYCArXG4gICAgICAgICAgICBgUGxlYXNlIGNoZWNrIHRoZSBkb2NzIGZvciAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSBmb3IgYCArXG4gICAgICAgICAgICBgdmFsaWQgaW5wdXQgdHlwZXMuYDtcbiAgICB9LFxuICAgICdub3QtYXJyYXktb2YtY2xhc3MnOiAoeyB2YWx1ZSwgZXhwZWN0ZWRDbGFzcywgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBUaGUgc3VwcGxpZWQgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIG11c3QgYmUgYW4gYXJyYXkgb2YgYCArXG4gICAgICAgICAgICBgJyR7ZXhwZWN0ZWRDbGFzc30nIG9iamVjdHMuIFJlY2VpdmVkICcke0pTT04uc3RyaW5naWZ5KHZhbHVlKX0sJy4gYCArXG4gICAgICAgICAgICBgUGxlYXNlIGNoZWNrIHRoZSBjYWxsIHRvICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9KCkgYCArXG4gICAgICAgICAgICBgdG8gZml4IHRoZSBpc3N1ZS5gO1xuICAgIH0sXG4gICAgJ21heC1lbnRyaWVzLW9yLWFnZS1yZXF1aXJlZCc6ICh7IG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFlvdSBtdXN0IGRlZmluZSBlaXRoZXIgY29uZmlnLm1heEVudHJpZXMgb3IgY29uZmlnLm1heEFnZVNlY29uZHNgICtcbiAgICAgICAgICAgIGBpbiAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfWA7XG4gICAgfSxcbiAgICAnc3RhdHVzZXMtb3ItaGVhZGVycy1yZXF1aXJlZCc6ICh7IG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFlvdSBtdXN0IGRlZmluZSBlaXRoZXIgY29uZmlnLnN0YXR1c2VzIG9yIGNvbmZpZy5oZWFkZXJzYCArXG4gICAgICAgICAgICBgaW4gJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX1gO1xuICAgIH0sXG4gICAgJ2ludmFsaWQtc3RyaW5nJzogKHsgbW9kdWxlTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZSB9KSA9PiB7XG4gICAgICAgIGlmICghcGFyYW1OYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFmdW5jTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXN0cmluZycgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBXaGVuIHVzaW5nIHN0cmluZ3MsIHRoZSAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgbXVzdCBzdGFydCB3aXRoIGAgK1xuICAgICAgICAgICAgYCdodHRwJyAoZm9yIGNyb3NzLW9yaWdpbiBtYXRjaGVzKSBvciAnLycgKGZvciBzYW1lLW9yaWdpbiBtYXRjaGVzKS4gYCArXG4gICAgICAgICAgICBgUGxlYXNlIHNlZSB0aGUgZG9jcyBmb3IgJHttb2R1bGVOYW1lfS4ke2Z1bmNOYW1lfSgpIGZvciBgICtcbiAgICAgICAgICAgIGBtb3JlIGluZm8uYDtcbiAgICB9LFxuICAgICdjaGFubmVsLW5hbWUtcmVxdWlyZWQnOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgWW91IG11c3QgcHJvdmlkZSBhIGNoYW5uZWxOYW1lIHRvIGNvbnN0cnVjdCBhIGAgK1xuICAgICAgICAgICAgYEJyb2FkY2FzdENhY2hlVXBkYXRlIGluc3RhbmNlLmA7XG4gICAgfSxcbiAgICAnaW52YWxpZC1yZXNwb25zZXMtYXJlLXNhbWUtYXJncyc6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGBUaGUgYXJndW1lbnRzIHBhc3NlZCBpbnRvIHJlc3BvbnNlc0FyZVNhbWUoKSBhcHBlYXIgdG8gYmUgYCArXG4gICAgICAgICAgICBgaW52YWxpZC4gUGxlYXNlIGVuc3VyZSB2YWxpZCBSZXNwb25zZXMgYXJlIHVzZWQuYDtcbiAgICB9LFxuICAgICdleHBpcmUtY3VzdG9tLWNhY2hlcy1vbmx5JzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gYFlvdSBtdXN0IHByb3ZpZGUgYSAnY2FjaGVOYW1lJyBwcm9wZXJ0eSB3aGVuIHVzaW5nIHRoZSBgICtcbiAgICAgICAgICAgIGBleHBpcmF0aW9uIHBsdWdpbiB3aXRoIGEgcnVudGltZSBjYWNoaW5nIHN0cmF0ZWd5LmA7XG4gICAgfSxcbiAgICAndW5pdC1tdXN0LWJlLWJ5dGVzJzogKHsgbm9ybWFsaXplZFJhbmdlSGVhZGVyIH0pID0+IHtcbiAgICAgICAgaWYgKCFub3JtYWxpemVkUmFuZ2VIZWFkZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAndW5pdC1tdXN0LWJlLWJ5dGVzJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFRoZSAndW5pdCcgcG9ydGlvbiBvZiB0aGUgUmFuZ2UgaGVhZGVyIG11c3QgYmUgc2V0IHRvICdieXRlcycuIGAgK1xuICAgICAgICAgICAgYFRoZSBSYW5nZSBoZWFkZXIgcHJvdmlkZWQgd2FzIFwiJHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9XCJgO1xuICAgIH0sXG4gICAgJ3NpbmdsZS1yYW5nZS1vbmx5JzogKHsgbm9ybWFsaXplZFJhbmdlSGVhZGVyIH0pID0+IHtcbiAgICAgICAgaWYgKCFub3JtYWxpemVkUmFuZ2VIZWFkZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnc2luZ2xlLXJhbmdlLW9ubHknIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgTXVsdGlwbGUgcmFuZ2VzIGFyZSBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgdXNlIGEgIHNpbmdsZSBzdGFydCBgICtcbiAgICAgICAgICAgIGB2YWx1ZSwgYW5kIG9wdGlvbmFsIGVuZCB2YWx1ZS4gVGhlIFJhbmdlIGhlYWRlciBwcm92aWRlZCB3YXMgYCArXG4gICAgICAgICAgICBgXCIke25vcm1hbGl6ZWRSYW5nZUhlYWRlcn1cImA7XG4gICAgfSxcbiAgICAnaW52YWxpZC1yYW5nZS12YWx1ZXMnOiAoeyBub3JtYWxpemVkUmFuZ2VIZWFkZXIgfSkgPT4ge1xuICAgICAgICBpZiAoIW5vcm1hbGl6ZWRSYW5nZUhlYWRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXJhbmdlLXZhbHVlcycgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBUaGUgUmFuZ2UgaGVhZGVyIGlzIG1pc3NpbmcgYm90aCBzdGFydCBhbmQgZW5kIHZhbHVlcy4gQXQgbGVhc3QgYCArXG4gICAgICAgICAgICBgb25lIG9mIHRob3NlIHZhbHVlcyBpcyBuZWVkZWQuIFRoZSBSYW5nZSBoZWFkZXIgcHJvdmlkZWQgd2FzIGAgK1xuICAgICAgICAgICAgYFwiJHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9XCJgO1xuICAgIH0sXG4gICAgJ25vLXJhbmdlLWhlYWRlcic6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGBObyBSYW5nZSBoZWFkZXIgd2FzIGZvdW5kIGluIHRoZSBSZXF1ZXN0IHByb3ZpZGVkLmA7XG4gICAgfSxcbiAgICAncmFuZ2Utbm90LXNhdGlzZmlhYmxlJzogKHsgc2l6ZSwgc3RhcnQsIGVuZCB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlIHN0YXJ0ICgke3N0YXJ0fSkgYW5kIGVuZCAoJHtlbmR9KSB2YWx1ZXMgaW4gdGhlIFJhbmdlIGFyZSBgICtcbiAgICAgICAgICAgIGBub3Qgc2F0aXNmaWFibGUgYnkgdGhlIGNhY2hlZCByZXNwb25zZSwgd2hpY2ggaXMgJHtzaXplfSBieXRlcy5gO1xuICAgIH0sXG4gICAgJ2F0dGVtcHQtdG8tY2FjaGUtbm9uLWdldC1yZXF1ZXN0JzogKHsgdXJsLCBtZXRob2QgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFVuYWJsZSB0byBjYWNoZSAnJHt1cmx9JyBiZWNhdXNlIGl0IGlzIGEgJyR7bWV0aG9kfScgcmVxdWVzdCBhbmQgYCArXG4gICAgICAgICAgICBgb25seSAnR0VUJyByZXF1ZXN0cyBjYW4gYmUgY2FjaGVkLmA7XG4gICAgfSxcbiAgICAnY2FjaGUtcHV0LXdpdGgtbm8tcmVzcG9uc2UnOiAoeyB1cmwgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZXJlIHdhcyBhbiBhdHRlbXB0IHRvIGNhY2hlICcke3VybH0nIGJ1dCB0aGUgcmVzcG9uc2Ugd2FzIG5vdCBgICtcbiAgICAgICAgICAgIGBkZWZpbmVkLmA7XG4gICAgfSxcbiAgICAnbm8tcmVzcG9uc2UnOiAoeyB1cmwsIGVycm9yIH0pID0+IHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBgVGhlIHN0cmF0ZWd5IGNvdWxkIG5vdCBnZW5lcmF0ZSBhIHJlc3BvbnNlIGZvciAnJHt1cmx9Jy5gO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gYCBUaGUgdW5kZXJseWluZyBlcnJvciBpcyAke2Vycm9yfS5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH0sXG4gICAgJ2JhZC1wcmVjYWNoaW5nLXJlc3BvbnNlJzogKHsgdXJsLCBzdGF0dXMgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSBwcmVjYWNoaW5nIHJlcXVlc3QgZm9yICcke3VybH0nIGZhaWxlZGAgK1xuICAgICAgICAgICAgKHN0YXR1cyA/IGAgd2l0aCBhbiBIVFRQIHN0YXR1cyBvZiAke3N0YXR1c30uYCA6IGAuYCk7XG4gICAgfSxcbiAgICAnbm9uLXByZWNhY2hlZC11cmwnOiAoeyB1cmwgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMKCcke3VybH0nKSB3YXMgY2FsbGVkLCBidXQgdGhhdCBVUkwgaXMgYCArXG4gICAgICAgICAgICBgbm90IHByZWNhY2hlZC4gUGxlYXNlIHBhc3MgaW4gYSBVUkwgdGhhdCBpcyBwcmVjYWNoZWQgaW5zdGVhZC5gO1xuICAgIH0sXG4gICAgJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWludGVncml0aWVzJzogKHsgdXJsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBUd28gb2YgdGhlIGVudHJpZXMgcGFzc2VkIHRvIGAgK1xuICAgICAgICAgICAgYCd3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLmFkZFRvQ2FjaGVMaXN0KCknIGhhZCB0aGUgVVJMIGAgK1xuICAgICAgICAgICAgYCR7dXJsfSB3aXRoIGRpZmZlcmVudCBpbnRlZ3JpdHkgdmFsdWVzLiBQbGVhc2UgcmVtb3ZlIG9uZSBvZiB0aGVtLmA7XG4gICAgfSxcbiAgICAnbWlzc2luZy1wcmVjYWNoZS1lbnRyeSc6ICh7IGNhY2hlTmFtZSwgdXJsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBVbmFibGUgdG8gZmluZCBhIHByZWNhY2hlZCByZXNwb25zZSBpbiAke2NhY2hlTmFtZX0gZm9yICR7dXJsfS5gO1xuICAgIH0sXG4gICAgJ2Nyb3NzLW9yaWdpbi1jb3B5LXJlc3BvbnNlJzogKHsgb3JpZ2luIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGB3b3JrYm94LWNvcmUuY29weVJlc3BvbnNlKCkgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIHNhbWUtb3JpZ2luIGAgK1xuICAgICAgICAgICAgYHJlc3BvbnNlcy4gSXQgd2FzIHBhc3NlZCBhIHJlc3BvbnNlIHdpdGggb3JpZ2luICR7b3JpZ2lufS5gO1xuICAgIH0sXG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vLyBDYWxsYmFja3MgdG8gYmUgZXhlY3V0ZWQgd2hlbmV2ZXIgdGhlcmUncyBhIHF1b3RhIGVycm9yLlxuLy8gQ2FuJ3QgY2hhbmdlIEZ1bmN0aW9uIHR5cGUgcmlnaHQgbm93LlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmNvbnN0IHF1b3RhRXJyb3JDYWxsYmFja3MgPSBuZXcgU2V0KCk7XG5leHBvcnQgeyBxdW90YUVycm9yQ2FsbGJhY2tzIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBxdW90YUVycm9yQ2FsbGJhY2tzIH0gZnJvbSAnLi9tb2RlbHMvcXVvdGFFcnJvckNhbGxiYWNrcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBZGRzIGEgZnVuY3Rpb24gdG8gdGhlIHNldCBvZiBxdW90YUVycm9yQ2FsbGJhY2tzIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBpZlxuICogdGhlcmUncyBhIHF1b3RhIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtY29yZVxuICovXG4vLyBDYW4ndCBjaGFuZ2UgRnVuY3Rpb24gdHlwZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmZ1bmN0aW9uIHJlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgYXNzZXJ0LmlzVHlwZShjYWxsYmFjaywgJ2Z1bmN0aW9uJywge1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY29yZScsXG4gICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NhbGxiYWNrJyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHF1b3RhRXJyb3JDYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIubG9nKCdSZWdpc3RlcmVkIGEgY2FsbGJhY2sgdG8gcmVzcG9uZCB0byBxdW90YSBlcnJvcnMuJywgY2FsbGJhY2spO1xuICAgIH1cbn1cbmV4cG9ydCB7IHJlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJy4vX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIE1vZGlmaWVzIHRoZSBkZWZhdWx0IGNhY2hlIG5hbWVzIHVzZWQgYnkgdGhlIFdvcmtib3ggcGFja2FnZXMuXG4gKiBDYWNoZSBuYW1lcyBhcmUgZ2VuZXJhdGVkIGFzIGA8cHJlZml4Pi08Q2FjaGUgTmFtZT4tPHN1ZmZpeD5gLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXRhaWxzXG4gKiBAcGFyYW0ge09iamVjdH0gW2RldGFpbHMucHJlZml4XSBUaGUgc3RyaW5nIHRvIGFkZCB0byB0aGUgYmVnaW5uaW5nIG9mXG4gKiAgICAgdGhlIHByZWNhY2hlIGFuZCBydW50aW1lIGNhY2hlIG5hbWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtkZXRhaWxzLnN1ZmZpeF0gVGhlIHN0cmluZyB0byBhZGQgdG8gdGhlIGVuZCBvZlxuICogICAgIHRoZSBwcmVjYWNoZSBhbmQgcnVudGltZSBjYWNoZSBuYW1lcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGV0YWlscy5wcmVjYWNoZV0gVGhlIGNhY2hlIG5hbWUgdG8gdXNlIGZvciBwcmVjYWNoZVxuICogICAgIGNhY2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gW2RldGFpbHMucnVudGltZV0gVGhlIGNhY2hlIG5hbWUgdG8gdXNlIGZvciBydW50aW1lIGNhY2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gW2RldGFpbHMuZ29vZ2xlQW5hbHl0aWNzXSBUaGUgY2FjaGUgbmFtZSB0byB1c2UgZm9yXG4gKiAgICAgYHdvcmtib3gtZ29vZ2xlLWFuYWx5dGljc2AgY2FjaGluZy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtY29yZVxuICovXG5mdW5jdGlvbiBzZXRDYWNoZU5hbWVEZXRhaWxzKGRldGFpbHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBPYmplY3Qua2V5cyhkZXRhaWxzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUoZGV0YWlsc1trZXldLCAnc3RyaW5nJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNvcmUnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnc2V0Q2FjaGVOYW1lRGV0YWlscycsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiBgZGV0YWlscy4ke2tleX1gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoJ3ByZWNhY2hlJyBpbiBkZXRhaWxzICYmIGRldGFpbHNbJ3ByZWNhY2hlJ10ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbnZhbGlkLWNhY2hlLW5hbWUnLCB7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lSWQ6ICdwcmVjYWNoZScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGRldGFpbHNbJ3ByZWNhY2hlJ10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3J1bnRpbWUnIGluIGRldGFpbHMgJiYgZGV0YWlsc1sncnVudGltZSddLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW52YWxpZC1jYWNoZS1uYW1lJywge1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZUlkOiAncnVudGltZScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGRldGFpbHNbJ3J1bnRpbWUnXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnZ29vZ2xlQW5hbHl0aWNzJyBpbiBkZXRhaWxzICYmIGRldGFpbHNbJ2dvb2dsZUFuYWx5dGljcyddLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW52YWxpZC1jYWNoZS1uYW1lJywge1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZUlkOiAnZ29vZ2xlQW5hbHl0aWNzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGV0YWlsc1snZ29vZ2xlQW5hbHl0aWNzJ10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWNoZU5hbWVzLnVwZGF0ZURldGFpbHMoZGV0YWlscyk7XG59XG5leHBvcnQgeyBzZXRDYWNoZU5hbWVEZXRhaWxzIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBkZXByZWNhdGVkLCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIFdvcmtib3ggdjcuXG4gKlxuICogQ2FsbGluZyBzZWxmLnNraXBXYWl0aW5nKCkgaXMgZXF1aXZhbGVudCwgYW5kIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LWNvcmVcbiAqL1xuZnVuY3Rpb24gc2tpcFdhaXRpbmcoKSB7XG4gICAgLy8gSnVzdCBjYWxsIHNlbGYuc2tpcFdhaXRpbmcoKSBkaXJlY3RseS5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yNTI1XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLndhcm4oYHNraXBXYWl0aW5nKCkgZnJvbSB3b3JrYm94LWNvcmUgaXMgbm8gbG9uZ2VyIHJlY29tbWVuZGVkIGAgK1xuICAgICAgICAgICAgYGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gV29ya2JveCB2Ny4gVXNpbmcgc2VsZi5za2lwV2FpdGluZygpIGluc3RlYWQgYCArXG4gICAgICAgICAgICBgaXMgZXF1aXZhbGVudC5gKTtcbiAgICB9XG4gICAgdm9pZCBzZWxmLnNraXBXYWl0aW5nKCk7XG59XG5leHBvcnQgeyBza2lwV2FpdGluZyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgZG9udFdhaXRGb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZG9udFdhaXRGb3IuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IENhY2hlVGltZXN0YW1wc01vZGVsIH0gZnJvbSAnLi9tb2RlbHMvQ2FjaGVUaW1lc3RhbXBzTW9kZWwuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhlIGBDYWNoZUV4cGlyYXRpb25gIGNsYXNzIGFsbG93cyB5b3UgZGVmaW5lIGFuIGV4cGlyYXRpb24gYW5kIC8gb3JcbiAqIGxpbWl0IG9uIHRoZSBudW1iZXIgb2YgcmVzcG9uc2VzIHN0b3JlZCBpbiBhXG4gKiBbYENhY2hlYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhY2hlKS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtZXhwaXJhdGlvblxuICovXG5jbGFzcyBDYWNoZUV4cGlyYXRpb24ge1xuICAgIC8qKlxuICAgICAqIFRvIGNvbnN0cnVjdCBhIG5ldyBDYWNoZUV4cGlyYXRpb24gaW5zdGFuY2UgeW91IG11c3QgcHJvdmlkZSBhdCBsZWFzdFxuICAgICAqIG9uZSBvZiB0aGUgYGNvbmZpZ2AgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYWNoZU5hbWUgTmFtZSBvZiB0aGUgY2FjaGUgdG8gYXBwbHkgcmVzdHJpY3Rpb25zIHRvLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhFbnRyaWVzXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgZW50cmllcyB0byBjYWNoZS5cbiAgICAgKiBFbnRyaWVzIHVzZWQgdGhlIGxlYXN0IHdpbGwgYmUgcmVtb3ZlZCBhcyB0aGUgbWF4aW11bSBpcyByZWFjaGVkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLm1heEFnZVNlY29uZHNdIFRoZSBtYXhpbXVtIGFnZSBvZiBhbiBlbnRyeSBiZWZvcmVcbiAgICAgKiBpdCdzIHRyZWF0ZWQgYXMgc3RhbGUgYW5kIHJlbW92ZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWcubWF0Y2hPcHRpb25zXSBUaGUgW2BDYWNoZVF1ZXJ5T3B0aW9uc2BdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZS9kZWxldGUjUGFyYW1ldGVycylcbiAgICAgKiB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIGNhbGxpbmcgYGRlbGV0ZSgpYCBvbiB0aGUgY2FjaGUuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2FjaGVOYW1lLCBjb25maWcgPSB7fSkge1xuICAgICAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmVydW5SZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUoY2FjaGVOYW1lLCAnc3RyaW5nJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnY2FjaGVOYW1lJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCEoY29uZmlnLm1heEVudHJpZXMgfHwgY29uZmlnLm1heEFnZVNlY29uZHMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbWF4LWVudHJpZXMtb3ItYWdlLXJlcXVpcmVkJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLm1heEVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGNvbmZpZy5tYXhFbnRyaWVzLCAnbnVtYmVyJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhFbnRyaWVzJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcubWF4QWdlU2Vjb25kcykge1xuICAgICAgICAgICAgICAgIGFzc2VydC5pc1R5cGUoY29uZmlnLm1heEFnZVNlY29uZHMsICdudW1iZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLm1heEFnZVNlY29uZHMnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21heEVudHJpZXMgPSBjb25maWcubWF4RW50cmllcztcbiAgICAgICAgdGhpcy5fbWF4QWdlU2Vjb25kcyA9IGNvbmZpZy5tYXhBZ2VTZWNvbmRzO1xuICAgICAgICB0aGlzLl9tYXRjaE9wdGlvbnMgPSBjb25maWcubWF0Y2hPcHRpb25zO1xuICAgICAgICB0aGlzLl9jYWNoZU5hbWUgPSBjYWNoZU5hbWU7XG4gICAgICAgIHRoaXMuX3RpbWVzdGFtcE1vZGVsID0gbmV3IENhY2hlVGltZXN0YW1wc01vZGVsKGNhY2hlTmFtZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4cGlyZXMgZW50cmllcyBmb3IgdGhlIGdpdmVuIGNhY2hlIGFuZCBnaXZlbiBjcml0ZXJpYS5cbiAgICAgKi9cbiAgICBhc3luYyBleHBpcmVFbnRyaWVzKCkge1xuICAgICAgICBpZiAodGhpcy5faXNSdW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXJ1blJlcXVlc3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgbWluVGltZXN0YW1wID0gdGhpcy5fbWF4QWdlU2Vjb25kcyA/XG4gICAgICAgICAgICBEYXRlLm5vdygpIC0gKHRoaXMuX21heEFnZVNlY29uZHMgKiAxMDAwKSA6IDA7XG4gICAgICAgIGNvbnN0IHVybHNFeHBpcmVkID0gYXdhaXQgdGhpcy5fdGltZXN0YW1wTW9kZWwuZXhwaXJlRW50cmllcyhtaW5UaW1lc3RhbXAsIHRoaXMuX21heEVudHJpZXMpO1xuICAgICAgICAvLyBEZWxldGUgVVJMcyBmcm9tIHRoZSBjYWNoZVxuICAgICAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4odGhpcy5fY2FjaGVOYW1lKTtcbiAgICAgICAgZm9yIChjb25zdCB1cmwgb2YgdXJsc0V4cGlyZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IGNhY2hlLmRlbGV0ZSh1cmwsIHRoaXMuX21hdGNoT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh1cmxzRXhwaXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBFeHBpcmVkICR7dXJsc0V4cGlyZWQubGVuZ3RofSBgICtcbiAgICAgICAgICAgICAgICAgICAgYCR7dXJsc0V4cGlyZWQubGVuZ3RoID09PSAxID8gJ2VudHJ5JyA6ICdlbnRyaWVzJ30gYW5kIHJlbW92ZWQgYCArXG4gICAgICAgICAgICAgICAgICAgIGAke3VybHNFeHBpcmVkLmxlbmd0aCA9PT0gMSA/ICdpdCcgOiAndGhlbSd9IGZyb20gdGhlIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJyR7dGhpcy5fY2FjaGVOYW1lfScgY2FjaGUuYCk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgRXhwaXJlZCB0aGUgZm9sbG93aW5nICR7dXJsc0V4cGlyZWQubGVuZ3RoID09PSAxID9cbiAgICAgICAgICAgICAgICAgICAgJ1VSTCcgOiAnVVJMcyd9OmApO1xuICAgICAgICAgICAgICAgIHVybHNFeHBpcmVkLmZvckVhY2goKHVybCkgPT4gbG9nZ2VyLmxvZyhgICAgICR7dXJsfWApKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgQ2FjaGUgZXhwaXJhdGlvbiByYW4gYW5kIGZvdW5kIG5vIGVudHJpZXMgdG8gcmVtb3ZlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fcmVydW5SZXF1ZXN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcnVuUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBkb250V2FpdEZvcih0aGlzLmV4cGlyZUVudHJpZXMoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB0aW1lc3RhbXAgZm9yIHRoZSBnaXZlbiBVUkwuIFRoaXMgZW5zdXJlcyB0aGUgd2hlblxuICAgICAqIHJlbW92aW5nIGVudHJpZXMgYmFzZWQgb24gbWF4aW11bSBlbnRyaWVzLCBtb3N0IHJlY2VudGx5IHVzZWRcbiAgICAgKiBpcyBhY2N1cmF0ZSBvciB3aGVuIGV4cGlyaW5nLCB0aGUgdGltZXN0YW1wIGlzIHVwLXRvLWRhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgYXN5bmMgdXBkYXRlVGltZXN0YW1wKHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZSh1cmwsICdzdHJpbmcnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ3VwZGF0ZVRpbWVzdGFtcCcsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAndXJsJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuX3RpbWVzdGFtcE1vZGVsLnNldFRpbWVzdGFtcCh1cmwsIERhdGUubm93KCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgdXNlZCB0byBjaGVjayBpZiBhIFVSTCBoYXMgZXhwaXJlZCBvciBub3QgYmVmb3JlIGl0J3MgdXNlZC5cbiAgICAgKlxuICAgICAqIFRoaXMgcmVxdWlyZXMgYSBsb29rIHVwIGZyb20gSW5kZXhlZERCLCBzbyBjYW4gYmUgc2xvdy5cbiAgICAgKlxuICAgICAqIE5vdGU6IFRoaXMgbWV0aG9kIHdpbGwgbm90IHJlbW92ZSB0aGUgY2FjaGVkIGVudHJ5LCBjYWxsXG4gICAgICogYGV4cGlyZUVudHJpZXMoKWAgdG8gcmVtb3ZlIGluZGV4ZWREQiBhbmQgQ2FjaGUgZW50cmllcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGFzeW5jIGlzVVJMRXhwaXJlZCh1cmwpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tYXhBZ2VTZWNvbmRzKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoYGV4cGlyZWQtdGVzdC13aXRob3V0LW1heC1hZ2VgLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZE5hbWU6ICdpc1VSTEV4cGlyZWQnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdtYXhBZ2VTZWNvbmRzJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IGF3YWl0IHRoaXMuX3RpbWVzdGFtcE1vZGVsLmdldFRpbWVzdGFtcCh1cmwpO1xuICAgICAgICAgICAgY29uc3QgZXhwaXJlT2xkZXJUaGFuID0gRGF0ZS5ub3coKSAtICh0aGlzLl9tYXhBZ2VTZWNvbmRzICogMTAwMCk7XG4gICAgICAgICAgICByZXR1cm4gdGltZXN0YW1wICE9PSB1bmRlZmluZWQgPyAodGltZXN0YW1wIDwgZXhwaXJlT2xkZXJUaGFuKSA6IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgSW5kZXhlZERCIG9iamVjdCBzdG9yZSB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgY2FjaGUgZXhwaXJhdGlvblxuICAgICAqIG1ldGFkYXRhLlxuICAgICAqL1xuICAgIGFzeW5jIGRlbGV0ZSgpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IGF0dGVtcHQgYW5vdGhlciByZXJ1biBpZiB3ZSdyZSBjYWxsZWQgaW4gdGhlIG1pZGRsZSBvZlxuICAgICAgICAvLyBhIGNhY2hlIGV4cGlyYXRpb24uXG4gICAgICAgIHRoaXMuX3JlcnVuUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IHRoaXMuX3RpbWVzdGFtcE1vZGVsLmV4cGlyZUVudHJpZXMoSW5maW5pdHkpOyAvLyBFeHBpcmVzIGFsbC5cbiAgICB9XG59XG5leHBvcnQgeyBDYWNoZUV4cGlyYXRpb24gfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7IGRvbnRXYWl0Rm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2RvbnRXYWl0Rm9yLmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2sgfSBmcm9tICd3b3JrYm94LWNvcmUvcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2suanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBDYWNoZUV4cGlyYXRpb24gfSBmcm9tICcuL0NhY2hlRXhwaXJhdGlvbi5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGlzIHBsdWdpbiBjYW4gYmUgdXNlZCBpbiBhIGB3b3JrYm94LXN0cmF0ZWd5YCB0byByZWd1bGFybHkgZW5mb3JjZSBhXG4gKiBsaW1pdCBvbiB0aGUgYWdlIGFuZCAvIG9yIHRoZSBudW1iZXIgb2YgY2FjaGVkIHJlcXVlc3RzLlxuICpcbiAqIEl0IGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBgd29ya2JveC1zdHJhdGVneWAgaW5zdGFuY2VzIHRoYXQgaGF2ZSBhXG4gKiBbY3VzdG9tIGBjYWNoZU5hbWVgIHByb3BlcnR5IHNldF0oL3dlYi90b29scy93b3JrYm94L2d1aWRlcy9jb25maWd1cmUtd29ya2JveCNjdXN0b21fY2FjaGVfbmFtZXNfaW5fc3RyYXRlZ2llcykuXG4gKiBJbiBvdGhlciB3b3JkcywgaXQgY2FuJ3QgYmUgdXNlZCB0byBleHBpcmUgZW50cmllcyBpbiBzdHJhdGVneSB0aGF0IHVzZXMgdGhlXG4gKiBkZWZhdWx0IHJ1bnRpbWUgY2FjaGUgbmFtZS5cbiAqXG4gKiBXaGVuZXZlciBhIGNhY2hlZCByZXF1ZXN0IGlzIHVzZWQgb3IgdXBkYXRlZCwgdGhpcyBwbHVnaW4gd2lsbCBsb29rXG4gKiBhdCB0aGUgYXNzb2NpYXRlZCBjYWNoZSBhbmQgcmVtb3ZlIGFueSBvbGQgb3IgZXh0cmEgcmVxdWVzdHMuXG4gKlxuICogV2hlbiB1c2luZyBgbWF4QWdlU2Vjb25kc2AsIHJlcXVlc3RzIG1heSBiZSB1c2VkICpvbmNlKiBhZnRlciBleHBpcmluZ1xuICogYmVjYXVzZSB0aGUgZXhwaXJhdGlvbiBjbGVhbiB1cCB3aWxsIG5vdCBoYXZlIG9jY3VycmVkIHVudGlsICphZnRlciogdGhlXG4gKiBjYWNoZWQgcmVxdWVzdCBoYXMgYmVlbiB1c2VkLiBJZiB0aGUgcmVxdWVzdCBoYXMgYSBcIkRhdGVcIiBoZWFkZXIsIHRoZW5cbiAqIGEgbGlnaHQgd2VpZ2h0IGV4cGlyYXRpb24gY2hlY2sgaXMgcGVyZm9ybWVkIGFuZCB0aGUgcmVxdWVzdCB3aWxsIG5vdCBiZVxuICogdXNlZCBpbW1lZGlhdGVseS5cbiAqXG4gKiBXaGVuIHVzaW5nIGBtYXhFbnRyaWVzYCwgdGhlIGVudHJ5IGxlYXN0LXJlY2VudGx5IHJlcXVlc3RlZCB3aWxsIGJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGNhY2hlIGZpcnN0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1leHBpcmF0aW9uXG4gKi9cbmNsYXNzIEV4cGlyYXRpb25QbHVnaW4ge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RXhwaXJhdGlvblBsdWdpbk9wdGlvbnN9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLm1heEVudHJpZXNdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBlbnRyaWVzIHRvIGNhY2hlLlxuICAgICAqIEVudHJpZXMgdXNlZCB0aGUgbGVhc3Qgd2lsbCBiZSByZW1vdmVkIGFzIHRoZSBtYXhpbXVtIGlzIHJlYWNoZWQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcubWF4QWdlU2Vjb25kc10gVGhlIG1heGltdW0gYWdlIG9mIGFuIGVudHJ5IGJlZm9yZVxuICAgICAqIGl0J3MgdHJlYXRlZCBhcyBzdGFsZSBhbmQgcmVtb3ZlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZy5tYXRjaE9wdGlvbnNdIFRoZSBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhY2hlL2RlbGV0ZSNQYXJhbWV0ZXJzKVxuICAgICAqIHRoYXQgd2lsbCBiZSB1c2VkIHdoZW4gY2FsbGluZyBgZGVsZXRlKClgIG9uIHRoZSBjYWNoZS5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtjb25maWcucHVyZ2VPblF1b3RhRXJyb3JdIFdoZXRoZXIgdG8gb3B0IHRoaXMgY2FjaGUgaW4gdG9cbiAgICAgKiBhdXRvbWF0aWMgZGVsZXRpb24gaWYgdGhlIGF2YWlsYWJsZSBzdG9yYWdlIHF1b3RhIGhhcyBiZWVuIGV4Y2VlZGVkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIFwibGlmZWN5Y2xlXCIgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZVxuICAgICAgICAgKiBgd29ya2JveC1zdHJhdGVnaWVzYCBoYW5kbGVycyB3aGVuIGEgYFJlc3BvbnNlYCBpcyBhYm91dCB0byBiZSByZXR1cm5lZFxuICAgICAgICAgKiBmcm9tIGEgW0NhY2hlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUpIHRvXG4gICAgICAgICAqIHRoZSBoYW5kbGVyLiBJdCBhbGxvd3MgdGhlIGBSZXNwb25zZWAgdG8gYmUgaW5zcGVjdGVkIGZvciBmcmVzaG5lc3MgYW5kXG4gICAgICAgICAqIHByZXZlbnRzIGl0IGZyb20gYmVpbmcgdXNlZCBpZiB0aGUgYFJlc3BvbnNlYCdzIGBEYXRlYCBoZWFkZXIgdmFsdWUgaXNcbiAgICAgICAgICogb2xkZXIgdGhhbiB0aGUgY29uZmlndXJlZCBgbWF4QWdlU2Vjb25kc2AuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNhY2hlTmFtZSBOYW1lIG9mIHRoZSBjYWNoZSB0aGUgcmVzcG9uc2UgaXMgaW4uXG4gICAgICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMuY2FjaGVkUmVzcG9uc2UgVGhlIGBSZXNwb25zZWAgb2JqZWN0IHRoYXQncyBiZWVuXG4gICAgICAgICAqICAgICByZWFkIGZyb20gYSBjYWNoZSBhbmQgd2hvc2UgZnJlc2huZXNzIHNob3VsZCBiZSBjaGVja2VkLlxuICAgICAgICAgKiBAcmV0dXJuIHtSZXNwb25zZX0gRWl0aGVyIHRoZSBgY2FjaGVkUmVzcG9uc2VgLCBpZiBpdCdzXG4gICAgICAgICAqICAgICBmcmVzaCwgb3IgYG51bGxgIGlmIHRoZSBgUmVzcG9uc2VgIGlzIG9sZGVyIHRoYW4gYG1heEFnZVNlY29uZHNgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYWNoZWRSZXNwb25zZVdpbGxCZVVzZWQgPSBhc3luYyAoeyBldmVudCwgcmVxdWVzdCwgY2FjaGVOYW1lLCBjYWNoZWRSZXNwb25zZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpc0ZyZXNoID0gdGhpcy5faXNSZXNwb25zZURhdGVGcmVzaChjYWNoZWRSZXNwb25zZSk7XG4gICAgICAgICAgICAvLyBFeHBpcmUgZW50cmllcyB0byBlbnN1cmUgdGhhdCBldmVuIGlmIHRoZSBleHBpcmF0aW9uIGRhdGUgaGFzXG4gICAgICAgICAgICAvLyBleHBpcmVkLCBpdCdsbCBvbmx5IGJlIHVzZWQgb25jZS5cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlRXhwaXJhdGlvbiA9IHRoaXMuX2dldENhY2hlRXhwaXJhdGlvbihjYWNoZU5hbWUpO1xuICAgICAgICAgICAgZG9udFdhaXRGb3IoY2FjaGVFeHBpcmF0aW9uLmV4cGlyZUVudHJpZXMoKSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIG1ldGFkYXRhIGZvciB0aGUgcmVxdWVzdCBVUkwgdG8gdGhlIGN1cnJlbnQgdGltZXN0YW1wLFxuICAgICAgICAgICAgLy8gYnV0IGRvbid0IGBhd2FpdGAgaXQgYXMgd2UgZG9uJ3Qgd2FudCB0byBibG9jayB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVUaW1lc3RhbXBEb25lID0gY2FjaGVFeHBpcmF0aW9uLnVwZGF0ZVRpbWVzdGFtcChyZXF1ZXN0LnVybCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC53YWl0VW50aWwodXBkYXRlVGltZXN0YW1wRG9uZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGV2ZW50IG1heSBub3QgYmUgYSBmZXRjaCBldmVudDsgb25seSBsb2cgdGhlIFVSTCBpZiBpdCBpcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgncmVxdWVzdCcgaW4gZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgVW5hYmxlIHRvIGVuc3VyZSBzZXJ2aWNlIHdvcmtlciBzdGF5cyBhbGl2ZSB3aGVuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdXBkYXRpbmcgY2FjaGUgZW50cnkgZm9yIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwoZXZlbnQucmVxdWVzdC51cmwpfScuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXNGcmVzaCA/IGNhY2hlZFJlc3BvbnNlIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgXCJsaWZlY3ljbGVcIiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlXG4gICAgICAgICAqIGB3b3JrYm94LXN0cmF0ZWdpZXNgIGhhbmRsZXJzIHdoZW4gYW4gZW50cnkgaXMgYWRkZWQgdG8gYSBjYWNoZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FjaGVOYW1lIE5hbWUgb2YgdGhlIGNhY2hlIHRoYXQgd2FzIHVwZGF0ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgVGhlIFJlcXVlc3QgZm9yIHRoZSBjYWNoZWQgZW50cnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNhY2hlRGlkVXBkYXRlID0gYXN5bmMgKHsgY2FjaGVOYW1lLCByZXF1ZXN0IH0pID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShjYWNoZU5hbWUsICdzdHJpbmcnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NhY2hlRGlkVXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnY2FjaGVOYW1lJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NhY2hlRGlkVXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZUV4cGlyYXRpb24gPSB0aGlzLl9nZXRDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lKTtcbiAgICAgICAgICAgIGF3YWl0IGNhY2hlRXhwaXJhdGlvbi51cGRhdGVUaW1lc3RhbXAocmVxdWVzdC51cmwpO1xuICAgICAgICAgICAgYXdhaXQgY2FjaGVFeHBpcmF0aW9uLmV4cGlyZUVudHJpZXMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICghKGNvbmZpZy5tYXhFbnRyaWVzIHx8IGNvbmZpZy5tYXhBZ2VTZWNvbmRzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21heC1lbnRyaWVzLW9yLWFnZS1yZXF1aXJlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5tYXhFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShjb25maWcubWF4RW50cmllcywgJ251bWJlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcubWF4RW50cmllcycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLm1heEFnZVNlY29uZHMpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGNvbmZpZy5tYXhBZ2VTZWNvbmRzLCAnbnVtYmVyJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhBZ2VTZWNvbmRzJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX21heEFnZVNlY29uZHMgPSBjb25maWcubWF4QWdlU2Vjb25kcztcbiAgICAgICAgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgaWYgKGNvbmZpZy5wdXJnZU9uUXVvdGFFcnJvcikge1xuICAgICAgICAgICAgcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2soKCkgPT4gdGhpcy5kZWxldGVDYWNoZUFuZE1ldGFkYXRhKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgc2ltcGxlIGhlbHBlciBtZXRob2QgdG8gcmV0dXJuIGEgQ2FjaGVFeHBpcmF0aW9uIGluc3RhbmNlIGZvciBhIGdpdmVuXG4gICAgICogY2FjaGUgbmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYWNoZU5hbWVcbiAgICAgKiBAcmV0dXJuIHtDYWNoZUV4cGlyYXRpb259XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXRDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lKSB7XG4gICAgICAgIGlmIChjYWNoZU5hbWUgPT09IGNhY2hlTmFtZXMuZ2V0UnVudGltZU5hbWUoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignZXhwaXJlLWN1c3RvbS1jYWNoZXMtb25seScpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjYWNoZUV4cGlyYXRpb24gPSB0aGlzLl9jYWNoZUV4cGlyYXRpb25zLmdldChjYWNoZU5hbWUpO1xuICAgICAgICBpZiAoIWNhY2hlRXhwaXJhdGlvbikge1xuICAgICAgICAgICAgY2FjaGVFeHBpcmF0aW9uID0gbmV3IENhY2hlRXhwaXJhdGlvbihjYWNoZU5hbWUsIHRoaXMuX2NvbmZpZyk7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZUV4cGlyYXRpb25zLnNldChjYWNoZU5hbWUsIGNhY2hlRXhwaXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhY2hlRXhwaXJhdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtSZXNwb25zZX0gY2FjaGVkUmVzcG9uc2VcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaXNSZXNwb25zZURhdGVGcmVzaChjYWNoZWRSZXNwb25zZSkge1xuICAgICAgICBpZiAoIXRoaXMuX21heEFnZVNlY29uZHMpIHtcbiAgICAgICAgICAgIC8vIFdlIGFyZW4ndCBleHBpcmluZyBieSBhZ2UsIHNvIHJldHVybiB0cnVlLCBpdCdzIGZyZXNoXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgJ2RhdGUnIGhlYWRlciB3aWxsIHN1ZmZpY2UgYSBxdWljayBleHBpcmF0aW9uIGNoZWNrLlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvc3ctdG9vbGJveC9pc3N1ZXMvMTY0IGZvclxuICAgICAgICAvLyBkaXNjdXNzaW9uLlxuICAgICAgICBjb25zdCBkYXRlSGVhZGVyVGltZXN0YW1wID0gdGhpcy5fZ2V0RGF0ZUhlYWRlclRpbWVzdGFtcChjYWNoZWRSZXNwb25zZSk7XG4gICAgICAgIGlmIChkYXRlSGVhZGVyVGltZXN0YW1wID09PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBVbmFibGUgdG8gcGFyc2UgZGF0ZSwgc28gYXNzdW1lIGl0J3MgZnJlc2guXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdmFsaWQgaGVhZGVyVGltZSwgdGhlbiBvdXIgcmVzcG9uc2UgaXMgZnJlc2ggaWZmIHRoZVxuICAgICAgICAvLyBoZWFkZXJUaW1lIHBsdXMgbWF4QWdlU2Vjb25kcyBpcyBncmVhdGVyIHRoYW4gdGhlIGN1cnJlbnQgdGltZS5cbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuIGRhdGVIZWFkZXJUaW1lc3RhbXAgPj0gbm93IC0gKHRoaXMuX21heEFnZVNlY29uZHMgKiAxMDAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBleHRyYWN0IHRoZSBkYXRhIGhlYWRlciBhbmQgcGFyc2UgaXQgaW50byBhIHVzZWZ1bFxuICAgICAqIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXNwb25zZX0gY2FjaGVkUmVzcG9uc2VcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ8bnVsbH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldERhdGVIZWFkZXJUaW1lc3RhbXAoY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFjYWNoZWRSZXNwb25zZS5oZWFkZXJzLmhhcygnZGF0ZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRlSGVhZGVyID0gY2FjaGVkUmVzcG9uc2UuaGVhZGVycy5nZXQoJ2RhdGUnKTtcbiAgICAgICAgY29uc3QgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGVIZWFkZXIpO1xuICAgICAgICBjb25zdCBoZWFkZXJUaW1lID0gcGFyc2VkRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIC8vIElmIHRoZSBEYXRlIGhlYWRlciB3YXMgaW52YWxpZCBmb3Igc29tZSByZWFzb24sIHBhcnNlZERhdGUuZ2V0VGltZSgpXG4gICAgICAgIC8vIHdpbGwgcmV0dXJuIE5hTi5cbiAgICAgICAgaWYgKGlzTmFOKGhlYWRlclRpbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVhZGVyVGltZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBhIGhlbHBlciBtZXRob2QgdGhhdCBwZXJmb3JtcyB0d28gb3BlcmF0aW9uczpcbiAgICAgKlxuICAgICAqIC0gRGVsZXRlcyAqYWxsKiB0aGUgdW5kZXJseWluZyBDYWNoZSBpbnN0YW5jZXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgcGx1Z2luXG4gICAgICogaW5zdGFuY2UsIGJ5IGNhbGxpbmcgY2FjaGVzLmRlbGV0ZSgpIG9uIHlvdXIgYmVoYWxmLlxuICAgICAqIC0gRGVsZXRlcyB0aGUgbWV0YWRhdGEgZnJvbSBJbmRleGVkREIgdXNlZCB0byBrZWVwIHRyYWNrIG9mIGV4cGlyYXRpb25cbiAgICAgKiBkZXRhaWxzIGZvciBlYWNoIENhY2hlIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogV2hlbiB1c2luZyBjYWNoZSBleHBpcmF0aW9uLCBjYWxsaW5nIHRoaXMgbWV0aG9kIGlzIHByZWZlcmFibGUgdG8gY2FsbGluZ1xuICAgICAqIGBjYWNoZXMuZGVsZXRlKClgIGRpcmVjdGx5LCBzaW5jZSB0aGlzIHdpbGwgZW5zdXJlIHRoYXQgdGhlIEluZGV4ZWREQlxuICAgICAqIG1ldGFkYXRhIGlzIGFsc28gY2xlYW5seSByZW1vdmVkIGFuZCBvcGVuIEluZGV4ZWREQiBpbnN0YW5jZXMgYXJlIGRlbGV0ZWQuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgaWYgeW91J3JlICpub3QqIHVzaW5nIGNhY2hlIGV4cGlyYXRpb24gZm9yIGEgZ2l2ZW4gY2FjaGUsIGNhbGxpbmdcbiAgICAgKiBgY2FjaGVzLmRlbGV0ZSgpYCBhbmQgcGFzc2luZyBpbiB0aGUgY2FjaGUncyBuYW1lIHNob3VsZCBiZSBzdWZmaWNpZW50LlxuICAgICAqIFRoZXJlIGlzIG5vIFdvcmtib3gtc3BlY2lmaWMgbWV0aG9kIG5lZWRlZCBmb3IgY2xlYW51cCBpbiB0aGF0IGNhc2UuXG4gICAgICovXG4gICAgYXN5bmMgZGVsZXRlQ2FjaGVBbmRNZXRhZGF0YSgpIHtcbiAgICAgICAgLy8gRG8gdGhpcyBvbmUgYXQgYSB0aW1lIGluc3RlYWQgb2YgYWxsIGF0IG9uY2UgdmlhIGBQcm9taXNlLmFsbCgpYCB0b1xuICAgICAgICAvLyByZWR1Y2UgdGhlIGNoYW5jZSBvZiBpbmNvbnNpc3RlbmN5IGlmIGEgcHJvbWlzZSByZWplY3RzLlxuICAgICAgICBmb3IgKGNvbnN0IFtjYWNoZU5hbWUsIGNhY2hlRXhwaXJhdGlvbl0gb2YgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucykge1xuICAgICAgICAgICAgYXdhaXQgc2VsZi5jYWNoZXMuZGVsZXRlKGNhY2hlTmFtZSk7XG4gICAgICAgICAgICBhd2FpdCBjYWNoZUV4cGlyYXRpb24uZGVsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucyB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cbiAgICAgICAgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICB9XG59XG5leHBvcnQgeyBFeHBpcmF0aW9uUGx1Z2luIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIEB0cy1pZ25vcmVcbnRyeSB7XG4gICAgc2VsZlsnd29ya2JveDpleHBpcmF0aW9uOjYuMi40J10gJiYgXygpO1xufVxuY2F0Y2ggKGUpIHsgfVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgQ2FjaGVFeHBpcmF0aW9uIH0gZnJvbSAnLi9DYWNoZUV4cGlyYXRpb24uanMnO1xuaW1wb3J0IHsgRXhwaXJhdGlvblBsdWdpbiB9IGZyb20gJy4vRXhwaXJhdGlvblBsdWdpbi5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBAbW9kdWxlIHdvcmtib3gtZXhwaXJhdGlvblxuICovXG5leHBvcnQgeyBDYWNoZUV4cGlyYXRpb24sIEV4cGlyYXRpb25QbHVnaW4sIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBvcGVuREIsIGRlbGV0ZURCIH0gZnJvbSAnaWRiJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuY29uc3QgREJfTkFNRSA9ICd3b3JrYm94LWV4cGlyYXRpb24nO1xuY29uc3QgQ0FDSEVfT0JKRUNUX1NUT1JFID0gJ2NhY2hlLWVudHJpZXMnO1xuY29uc3Qgbm9ybWFsaXplVVJMID0gKHVuTm9ybWFsaXplZFVybCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodW5Ob3JtYWxpemVkVXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICB1cmwuaGFzaCA9ICcnO1xuICAgIHJldHVybiB1cmwuaHJlZjtcbn07XG4vKipcbiAqIFJldHVybnMgdGhlIHRpbWVzdGFtcCBtb2RlbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBDYWNoZVRpbWVzdGFtcHNNb2RlbCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FjaGVOYW1lXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhY2hlTmFtZSkge1xuICAgICAgICB0aGlzLl9kYiA9IG51bGw7XG4gICAgICAgIHRoaXMuX2NhY2hlTmFtZSA9IGNhY2hlTmFtZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW4gdXBncmFkZSBvZiBpbmRleGVkREIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0lEQlBEYXRhYmFzZTxDYWNoZURiU2NoZW1hPn0gZGJcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3VwZ3JhZGVEYihkYikge1xuICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IEVkZ2VIVE1MIGRvZXNuJ3Qgc3VwcG9ydCBhcnJheXMgYXMgYSBrZXlQYXRoLCBzbyB3ZVxuICAgICAgICAvLyBoYXZlIHRvIHVzZSB0aGUgYGlkYCBrZXlQYXRoIGhlcmUgYW5kIGNyZWF0ZSBvdXIgb3duIHZhbHVlcyAoYVxuICAgICAgICAvLyBjb25jYXRlbmF0aW9uIG9mIGB1cmwgKyBjYWNoZU5hbWVgKSBpbnN0ZWFkIG9mIHNpbXBseSB1c2luZ1xuICAgICAgICAvLyBga2V5UGF0aDogWyd1cmwnLCAnY2FjaGVOYW1lJ11gLCB3aGljaCBpcyBzdXBwb3J0ZWQgaW4gb3RoZXIgYnJvd3NlcnMuXG4gICAgICAgIGNvbnN0IG9ialN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoQ0FDSEVfT0JKRUNUX1NUT1JFLCB7IGtleVBhdGg6ICdpZCcgfSk7XG4gICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogb25jZSB3ZSBkb24ndCBoYXZlIHRvIHN1cHBvcnQgRWRnZUhUTUwsIHdlIGNhblxuICAgICAgICAvLyBjcmVhdGUgYSBzaW5nbGUgaW5kZXggd2l0aCB0aGUga2V5UGF0aCBgWydjYWNoZU5hbWUnLCAndGltZXN0YW1wJ11gXG4gICAgICAgIC8vIGluc3RlYWQgb2YgZG9pbmcgYm90aCB0aGVzZSBpbmRleGVzLlxuICAgICAgICBvYmpTdG9yZS5jcmVhdGVJbmRleCgnY2FjaGVOYW1lJywgJ2NhY2hlTmFtZScsIHsgdW5pcXVlOiBmYWxzZSB9KTtcbiAgICAgICAgb2JqU3RvcmUuY3JlYXRlSW5kZXgoJ3RpbWVzdGFtcCcsICd0aW1lc3RhbXAnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGFuIHVwZ3JhZGUgb2YgaW5kZXhlZERCIGFuZCBkZWxldGVzIGRlcHJlY2F0ZWQgREJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtJREJQRGF0YWJhc2U8Q2FjaGVEYlNjaGVtYT59IGRiXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF91cGdyYWRlRGJBbmREZWxldGVPbGREYnMoZGIpIHtcbiAgICAgICAgdGhpcy5fdXBncmFkZURiKGRiKTtcbiAgICAgICAgaWYgKHRoaXMuX2NhY2hlTmFtZSkge1xuICAgICAgICAgICAgdm9pZCBkZWxldGVEQih0aGlzLl9jYWNoZU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIHNldFRpbWVzdGFtcCh1cmwsIHRpbWVzdGFtcCkge1xuICAgICAgICB1cmwgPSBub3JtYWxpemVVUkwodXJsKTtcbiAgICAgICAgY29uc3QgZW50cnkgPSB7XG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICBjYWNoZU5hbWU6IHRoaXMuX2NhY2hlTmFtZSxcbiAgICAgICAgICAgIC8vIENyZWF0aW5nIGFuIElEIGZyb20gdGhlIFVSTCBhbmQgY2FjaGUgbmFtZSB3b24ndCBiZSBuZWNlc3Nhcnkgb25jZVxuICAgICAgICAgICAgLy8gRWRnZSBzd2l0Y2hlcyB0byBDaHJvbWl1bSBhbmQgYWxsIGJyb3dzZXJzIHdlIHN1cHBvcnQgd29yayB3aXRoXG4gICAgICAgICAgICAvLyBhcnJheSBrZXlQYXRocy5cbiAgICAgICAgICAgIGlkOiB0aGlzLl9nZXRJZCh1cmwpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuZ2V0RGIoKTtcbiAgICAgICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihDQUNIRV9PQkpFQ1RfU1RPUkUsICdyZWFkd3JpdGUnLCB7IGR1cmFiaWxpdHk6ICdyZWxheGVkJyB9KTtcbiAgICAgICAgYXdhaXQgdHguc3RvcmUucHV0KGVudHJ5KTtcbiAgICAgICAgYXdhaXQgdHguZG9uZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGltZXN0YW1wIHN0b3JlZCBmb3IgYSBnaXZlbiBVUkwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybiB7bnVtYmVyIHwgdW5kZWZpbmVkfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBnZXRUaW1lc3RhbXAodXJsKSB7XG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5nZXREYigpO1xuICAgICAgICBjb25zdCBlbnRyeSA9IGF3YWl0IGRiLmdldChDQUNIRV9PQkpFQ1RfU1RPUkUsIHRoaXMuX2dldElkKHVybCkpO1xuICAgICAgICByZXR1cm4gZW50cnkgPT09IG51bGwgfHwgZW50cnkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVudHJ5LnRpbWVzdGFtcDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSXRlcmF0ZXMgdGhyb3VnaCBhbGwgdGhlIGVudHJpZXMgaW4gdGhlIG9iamVjdCBzdG9yZSAoZnJvbSBuZXdlc3QgdG9cbiAgICAgKiBvbGRlc3QpIGFuZCByZW1vdmVzIGVudHJpZXMgb25jZSBlaXRoZXIgYG1heENvdW50YCBpcyByZWFjaGVkIG9yIHRoZVxuICAgICAqIGVudHJ5J3MgdGltZXN0YW1wIGlzIGxlc3MgdGhhbiBgbWluVGltZXN0YW1wYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5UaW1lc3RhbXBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4Q291bnRcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBleHBpcmVFbnRyaWVzKG1pblRpbWVzdGFtcCwgbWF4Q291bnQpIHtcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCB0aGlzLmdldERiKCk7XG4gICAgICAgIGxldCBjdXJzb3IgPSBhd2FpdCBkYi50cmFuc2FjdGlvbihDQUNIRV9PQkpFQ1RfU1RPUkUpLnN0b3JlLmluZGV4KCd0aW1lc3RhbXAnKS5vcGVuQ3Vyc29yKG51bGwsICdwcmV2Jyk7XG4gICAgICAgIGNvbnN0IGVudHJpZXNUb0RlbGV0ZSA9IFtdO1xuICAgICAgICBsZXQgZW50cmllc05vdERlbGV0ZWRDb3VudCA9IDA7XG4gICAgICAgIHdoaWxlIChjdXJzb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGN1cnNvci52YWx1ZTtcbiAgICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogb25jZSB3ZSBjYW4gdXNlIGEgbXVsdGkta2V5IGluZGV4LCB3ZVxuICAgICAgICAgICAgLy8gd29uJ3QgaGF2ZSB0byBjaGVjayBgY2FjaGVOYW1lYCBoZXJlLlxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jYWNoZU5hbWUgPT09IHRoaXMuX2NhY2hlTmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBhbiBlbnRyeSBpZiBpdCdzIG9sZGVyIHRoYW4gdGhlIG1heCBhZ2Ugb3JcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhbHJlYWR5IGhhdmUgdGhlIG1heCBudW1iZXIgYWxsb3dlZC5cbiAgICAgICAgICAgICAgICBpZiAoKG1pblRpbWVzdGFtcCAmJiByZXN1bHQudGltZXN0YW1wIDwgbWluVGltZXN0YW1wKSB8fFxuICAgICAgICAgICAgICAgICAgICAobWF4Q291bnQgJiYgZW50cmllc05vdERlbGV0ZWRDb3VudCA+PSBtYXhDb3VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiB3ZSBzaG91bGQgYmUgYWJsZSB0byBkZWxldGUgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIGVudHJ5IHJpZ2h0IGhlcmUsIGJ1dCBkb2luZyBzbyBjYXVzZXMgYW4gaXRlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1ZyBpbiBTYWZhcmkgc3RhYmxlIChmaXhlZCBpbiBUUCkuIEluc3RlYWQgd2UgY2FuXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSBrZXlzIG9mIHRoZSBlbnRyaWVzIHRvIGRlbGV0ZSwgYW5kIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlIHRoZSBzZXBhcmF0ZSB0cmFuc2FjdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTk3OFxuICAgICAgICAgICAgICAgICAgICAvLyBjdXJzb3IuZGVsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIG9ubHkgbmVlZCB0byByZXR1cm4gdGhlIFVSTCwgbm90IHRoZSB3aG9sZSBlbnRyeS5cbiAgICAgICAgICAgICAgICAgICAgZW50cmllc1RvRGVsZXRlLnB1c2goY3Vyc29yLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXNOb3REZWxldGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJzb3IgPSBhd2FpdCBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IG9uY2UgdGhlIFNhZmFyaSBidWcgaW4gdGhlIGZvbGxvd2luZyBpc3N1ZSBpcyBmaXhlZCxcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGJlIGFibGUgdG8gcmVtb3ZlIHRoaXMgbG9vcCBhbmQgZG8gdGhlIGVudHJ5IGRlbGV0aW9uIGluIHRoZVxuICAgICAgICAvLyBjdXJzb3IgbG9vcCBhYm92ZTpcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xOTc4XG4gICAgICAgIGNvbnN0IHVybHNEZWxldGVkID0gW107XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllc1RvRGVsZXRlKSB7XG4gICAgICAgICAgICBhd2FpdCBkYi5kZWxldGUoQ0FDSEVfT0JKRUNUX1NUT1JFLCBlbnRyeS5pZCk7XG4gICAgICAgICAgICB1cmxzRGVsZXRlZC5wdXNoKGVudHJ5LnVybCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybHNEZWxldGVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIFVSTCBhbmQgcmV0dXJucyBhbiBJRCB0aGF0IHdpbGwgYmUgdW5pcXVlIGluIHRoZSBvYmplY3Qgc3RvcmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0SWQodXJsKSB7XG4gICAgICAgIC8vIENyZWF0aW5nIGFuIElEIGZyb20gdGhlIFVSTCBhbmQgY2FjaGUgbmFtZSB3b24ndCBiZSBuZWNlc3Nhcnkgb25jZVxuICAgICAgICAvLyBFZGdlIHN3aXRjaGVzIHRvIENocm9taXVtIGFuZCBhbGwgYnJvd3NlcnMgd2Ugc3VwcG9ydCB3b3JrIHdpdGhcbiAgICAgICAgLy8gYXJyYXkga2V5UGF0aHMuXG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZU5hbWUgKyAnfCcgKyBub3JtYWxpemVVUkwodXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICAqIFJldHVybnMgYW4gb3BlbiBjb25uZWN0aW9uIHRvIHRoZSBkYXRhYmFzZS5cbiAgICAgICpcbiAgICAgICogQHByaXZhdGVcbiAgICAgICovXG4gICAgYXN5bmMgZ2V0RGIoKSB7XG4gICAgICAgIGlmICghdGhpcy5fZGIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RiID0gYXdhaXQgb3BlbkRCKERCX05BTUUsIDEsIHtcbiAgICAgICAgICAgICAgICB1cGdyYWRlOiB0aGlzLl91cGdyYWRlRGJBbmREZWxldGVPbGREYnMuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kYjtcbiAgICB9XG59XG5leHBvcnQgeyBDYWNoZVRpbWVzdGFtcHNNb2RlbCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IHdhaXRVbnRpbCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS93YWl0VW50aWwuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FjaGVLZXkgfSBmcm9tICcuL3V0aWxzL2NyZWF0ZUNhY2hlS2V5LmpzJztcbmltcG9ydCB7IFByZWNhY2hlSW5zdGFsbFJlcG9ydFBsdWdpbiB9IGZyb20gJy4vdXRpbHMvUHJlY2FjaGVJbnN0YWxsUmVwb3J0UGx1Z2luLmpzJztcbmltcG9ydCB7IFByZWNhY2hlQ2FjaGVLZXlQbHVnaW4gfSBmcm9tICcuL3V0aWxzL1ByZWNhY2hlQ2FjaGVLZXlQbHVnaW4uanMnO1xuaW1wb3J0IHsgcHJpbnRDbGVhbnVwRGV0YWlscyB9IGZyb20gJy4vdXRpbHMvcHJpbnRDbGVhbnVwRGV0YWlscy5qcyc7XG5pbXBvcnQgeyBwcmludEluc3RhbGxEZXRhaWxzIH0gZnJvbSAnLi91dGlscy9wcmludEluc3RhbGxEZXRhaWxzLmpzJztcbmltcG9ydCB7IFByZWNhY2hlU3RyYXRlZ3kgfSBmcm9tICcuL1ByZWNhY2hlU3RyYXRlZ3kuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogUGVyZm9ybXMgZWZmaWNpZW50IHByZWNhY2hpbmcgb2YgYXNzZXRzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmNsYXNzIFByZWNhY2hlQ29udHJvbGxlciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IFByZWNhY2hlQ29udHJvbGxlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBUaGUgY2FjaGUgdG8gdXNlIGZvciBwcmVjYWNoaW5nLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5wbHVnaW5zXSBQbHVnaW5zIHRvIHVzZSB3aGVuIHByZWNhY2hpbmcgYXMgd2VsbFxuICAgICAqIGFzIHJlc3BvbmRpbmcgdG8gZmV0Y2ggZXZlbnRzIGZvciBwcmVjYWNoZWQgYXNzZXRzLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZmFsbGJhY2tUb05ldHdvcms9dHJ1ZV0gV2hldGhlciB0byBhdHRlbXB0IHRvXG4gICAgICogZ2V0IHRoZSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrIGlmIHRoZXJlJ3MgYSBwcmVjYWNoZSBtaXNzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHsgY2FjaGVOYW1lLCBwbHVnaW5zID0gW10sIGZhbGxiYWNrVG9OZXR3b3JrID0gdHJ1ZSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl91cmxzVG9DYWNoZU1vZGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9jYWNoZUtleXNUb0ludGVncml0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9zdHJhdGVneSA9IG5ldyBQcmVjYWNoZVN0cmF0ZWd5KHtcbiAgICAgICAgICAgIGNhY2hlTmFtZTogY2FjaGVOYW1lcy5nZXRQcmVjYWNoZU5hbWUoY2FjaGVOYW1lKSxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAuLi5wbHVnaW5zLFxuICAgICAgICAgICAgICAgIG5ldyBQcmVjYWNoZUNhY2hlS2V5UGx1Z2luKHsgcHJlY2FjaGVDb250cm9sbGVyOiB0aGlzIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZhbGxiYWNrVG9OZXR3b3JrLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQmluZCB0aGUgaW5zdGFsbCBhbmQgYWN0aXZhdGUgbWV0aG9kcyB0byB0aGUgaW5zdGFuY2UuXG4gICAgICAgIHRoaXMuaW5zdGFsbCA9IHRoaXMuaW5zdGFsbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlID0gdGhpcy5hY3RpdmF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZVN0cmF0ZWd5fSBUaGUgc3RyYXRlZ3kgY3JlYXRlZCBieSB0aGlzIGNvbnRyb2xsZXIgYW5kXG4gICAgICogdXNlZCB0byBjYWNoZSBhc3NldHMgYW5kIHJlc3BvbmQgdG8gZmV0Y2ggZXZlbnRzLlxuICAgICAqL1xuICAgIGdldCBzdHJhdGVneSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmF0ZWd5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGl0ZW1zIHRvIHRoZSBwcmVjYWNoZSBsaXN0LCByZW1vdmluZyBhbnkgZHVwbGljYXRlcyBhbmRcbiAgICAgKiBzdG9yZXMgdGhlIGZpbGVzIGluIHRoZVxuICAgICAqIFtcInByZWNhY2hlIGNhY2hlXCJde0BsaW5rIG1vZHVsZTp3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30gd2hlbiB0aGUgc2VydmljZVxuICAgICAqIHdvcmtlciBpbnN0YWxscy5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdHxzdHJpbmc+fSBbZW50cmllcz1bXV0gQXJyYXkgb2YgZW50cmllcyB0byBwcmVjYWNoZS5cbiAgICAgKi9cbiAgICBwcmVjYWNoZShlbnRyaWVzKSB7XG4gICAgICAgIHRoaXMuYWRkVG9DYWNoZUxpc3QoZW50cmllcyk7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFsbEFuZEFjdGl2ZUxpc3RlbmVyc0FkZGVkKSB7XG4gICAgICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCB0aGlzLmluc3RhbGwpO1xuICAgICAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIHRoaXMuYWN0aXZhdGUpO1xuICAgICAgICAgICAgdGhpcy5faW5zdGFsbEFuZEFjdGl2ZUxpc3RlbmVyc0FkZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGFkZCBpdGVtcyB0byB0aGUgcHJlY2FjaGUgbGlzdCwgcmVtb3ZpbmcgZHVwbGljYXRlc1xuICAgICAqIGFuZCBlbnN1cmluZyB0aGUgaW5mb3JtYXRpb24gaXMgdmFsaWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5PG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLlByZWNhY2hlRW50cnl8c3RyaW5nPn0gZW50cmllc1xuICAgICAqICAgICBBcnJheSBvZiBlbnRyaWVzIHRvIHByZWNhY2hlLlxuICAgICAqL1xuICAgIGFkZFRvQ2FjaGVMaXN0KGVudHJpZXMpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0FycmF5KGVudHJpZXMsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1wcmVjYWNoaW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQcmVjYWNoZUNvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnYWRkVG9DYWNoZUxpc3QnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2VudHJpZXMnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsc1RvV2FybkFib3V0ID0gW107XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjI1OVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB1cmxzVG9XYXJuQWJvdXQucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbnRyeSAmJiBlbnRyeS5yZXZpc2lvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdXJsc1RvV2FybkFib3V0LnB1c2goZW50cnkudXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgY2FjaGVLZXksIHVybCB9ID0gY3JlYXRlQ2FjaGVLZXkoZW50cnkpO1xuICAgICAgICAgICAgY29uc3QgY2FjaGVNb2RlID0gKHR5cGVvZiBlbnRyeSAhPT0gJ3N0cmluZycgJiYgZW50cnkucmV2aXNpb24pID9cbiAgICAgICAgICAgICAgICAncmVsb2FkJyA6ICdkZWZhdWx0JztcbiAgICAgICAgICAgIGlmICh0aGlzLl91cmxzVG9DYWNoZUtleXMuaGFzKHVybCkgJiZcbiAgICAgICAgICAgICAgICB0aGlzLl91cmxzVG9DYWNoZUtleXMuZ2V0KHVybCkgIT09IGNhY2hlS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctZW50cmllcycsIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RFbnRyeTogdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmdldCh1cmwpLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRFbnRyeTogY2FjaGVLZXksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSAnc3RyaW5nJyAmJiBlbnRyeS5pbnRlZ3JpdHkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FjaGVLZXlzVG9JbnRlZ3JpdGllcy5oYXMoY2FjaGVLZXkpICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuZ2V0KGNhY2hlS2V5KSAhPT0gZW50cnkuaW50ZWdyaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWludGVncml0aWVzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXlzVG9JbnRlZ3JpdGllcy5zZXQoY2FjaGVLZXksIGVudHJ5LmludGVncml0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl91cmxzVG9DYWNoZUtleXMuc2V0KHVybCwgY2FjaGVLZXkpO1xuICAgICAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVNb2Rlcy5zZXQodXJsLCBjYWNoZU1vZGUpO1xuICAgICAgICAgICAgaWYgKHVybHNUb1dhcm5BYm91dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FybmluZ01lc3NhZ2UgPSBgV29ya2JveCBpcyBwcmVjYWNoaW5nIFVSTHMgd2l0aG91dCByZXZpc2lvbiBgICtcbiAgICAgICAgICAgICAgICAgICAgYGluZm86ICR7dXJsc1RvV2FybkFib3V0LmpvaW4oJywgJyl9XFxuVGhpcyBpcyBnZW5lcmFsbHkgTk9UIHNhZmUuIGAgK1xuICAgICAgICAgICAgICAgICAgICBgTGVhcm4gbW9yZSBhdCBodHRwczovL2JpdC5seS93Yi1wcmVjYWNoZWA7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIGNvbnNvbGUgZGlyZWN0bHkgdG8gZGlzcGxheSB0aGlzIHdhcm5pbmcgd2l0aG91dCBibG9hdGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBidW5kbGUgc2l6ZXMgYnkgcHVsbGluZyBpbiBhbGwgb2YgdGhlIGxvZ2dlciBjb2RlYmFzZSBpbiBwcm9kLlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4od2FybmluZ01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4od2FybmluZ01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVjYWNoZXMgbmV3IGFuZCB1cGRhdGVkIGFzc2V0cy4gQ2FsbCB0aGlzIG1ldGhvZCBmcm9tIHRoZSBzZXJ2aWNlIHdvcmtlclxuICAgICAqIGluc3RhbGwgZXZlbnQuXG4gICAgICpcbiAgICAgKiBOb3RlOiB0aGlzIG1ldGhvZCBjYWxscyBgZXZlbnQud2FpdFVudGlsKClgIGZvciB5b3UsIHNvIHlvdSBkbyBub3QgbmVlZFxuICAgICAqIHRvIGNhbGwgaXQgeW91cnNlbGYgaW4geW91ciBldmVudCBoYW5kbGVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBldmVudFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8bW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5JbnN0YWxsUmVzdWx0Pn1cbiAgICAgKi9cbiAgICBpbnN0YWxsKGV2ZW50KSB7XG4gICAgICAgIC8vIHdhaXRVbnRpbCByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cbiAgICAgICAgcmV0dXJuIHdhaXRVbnRpbChldmVudCwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFsbFJlcG9ydFBsdWdpbiA9IG5ldyBQcmVjYWNoZUluc3RhbGxSZXBvcnRQbHVnaW4oKTtcbiAgICAgICAgICAgIHRoaXMuc3RyYXRlZ3kucGx1Z2lucy5wdXNoKGluc3RhbGxSZXBvcnRQbHVnaW4pO1xuICAgICAgICAgICAgLy8gQ2FjaGUgZW50cmllcyBvbmUgYXQgYSB0aW1lLlxuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjUyOFxuICAgICAgICAgICAgZm9yIChjb25zdCBbdXJsLCBjYWNoZUtleV0gb2YgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW50ZWdyaXR5ID0gdGhpcy5fY2FjaGVLZXlzVG9JbnRlZ3JpdGllcy5nZXQoY2FjaGVLZXkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlTW9kZSA9IHRoaXMuX3VybHNUb0NhY2hlTW9kZXMuZ2V0KHVybCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCwge1xuICAgICAgICAgICAgICAgICAgICBpbnRlZ3JpdHksXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlOiBjYWNoZU1vZGUsXG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRoaXMuc3RyYXRlZ3kuaGFuZGxlQWxsKHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGNhY2hlS2V5IH0sXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXBkYXRlZFVSTHMsIG5vdFVwZGF0ZWRVUkxzIH0gPSBpbnN0YWxsUmVwb3J0UGx1Z2luO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBwcmludEluc3RhbGxEZXRhaWxzKHVwZGF0ZWRVUkxzLCBub3RVcGRhdGVkVVJMcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyB1cGRhdGVkVVJMcywgbm90VXBkYXRlZFVSTHMgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYXNzZXRzIHRoYXQgYXJlIG5vIGxvbmdlciBwcmVzZW50IGluIHRoZSBjdXJyZW50IHByZWNhY2hlIG1hbmlmZXN0LlxuICAgICAqIENhbGwgdGhpcyBtZXRob2QgZnJvbSB0aGUgc2VydmljZSB3b3JrZXIgYWN0aXZhdGUgZXZlbnQuXG4gICAgICpcbiAgICAgKiBOb3RlOiB0aGlzIG1ldGhvZCBjYWxscyBgZXZlbnQud2FpdFVudGlsKClgIGZvciB5b3UsIHNvIHlvdSBkbyBub3QgbmVlZFxuICAgICAqIHRvIGNhbGwgaXQgeW91cnNlbGYgaW4geW91ciBldmVudCBoYW5kbGVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBldmVudFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8bW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5DbGVhbnVwUmVzdWx0Pn1cbiAgICAgKi9cbiAgICBhY3RpdmF0ZShldmVudCkge1xuICAgICAgICAvLyB3YWl0VW50aWwgcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG4gICAgICAgIHJldHVybiB3YWl0VW50aWwoZXZlbnQsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3Blbih0aGlzLnN0cmF0ZWd5LmNhY2hlTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50bHlDYWNoZWRSZXF1ZXN0cyA9IGF3YWl0IGNhY2hlLmtleXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkQ2FjaGVLZXlzID0gbmV3IFNldCh0aGlzLl91cmxzVG9DYWNoZUtleXMudmFsdWVzKCkpO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlZFVSTHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVxdWVzdCBvZiBjdXJyZW50bHlDYWNoZWRSZXF1ZXN0cykge1xuICAgICAgICAgICAgICAgIGlmICghZXhwZWN0ZWRDYWNoZUtleXMuaGFzKHJlcXVlc3QudXJsKSkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBjYWNoZS5kZWxldGUocmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZWRVUkxzLnB1c2gocmVxdWVzdC51cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcHJpbnRDbGVhbnVwRGV0YWlscyhkZWxldGVkVVJMcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBkZWxldGVkVVJMcyB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG1hcHBpbmcgb2YgYSBwcmVjYWNoZWQgVVJMIHRvIHRoZSBjb3JyZXNwb25kaW5nIGNhY2hlIGtleSwgdGFraW5nXG4gICAgICogaW50byBhY2NvdW50IHRoZSByZXZpc2lvbiBpbmZvcm1hdGlvbiBmb3IgdGhlIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hcDxzdHJpbmcsIHN0cmluZz59IEEgVVJMIHRvIGNhY2hlIGtleSBtYXBwaW5nLlxuICAgICAqL1xuICAgIGdldFVSTHNUb0NhY2hlS2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VybHNUb0NhY2hlS2V5cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2YgYWxsIHRoZSBVUkxzIHRoYXQgaGF2ZSBiZWVuIHByZWNhY2hlZCBieSB0aGUgY3VycmVudFxuICAgICAqIHNlcnZpY2Ugd29ya2VyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn0gVGhlIHByZWNhY2hlZCBVUkxzLlxuICAgICAqL1xuICAgIGdldENhY2hlZFVSTHMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmtleXMoKV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNhY2hlIGtleSB1c2VkIGZvciBzdG9yaW5nIGEgZ2l2ZW4gVVJMLiBJZiB0aGF0IFVSTCBpc1xuICAgICAqIHVudmVyc2lvbmVkLCBsaWtlIGAvaW5kZXguaHRtbCcsIHRoZW4gdGhlIGNhY2hlIGtleSB3aWxsIGJlIHRoZSBvcmlnaW5hbFxuICAgICAqIFVSTCB3aXRoIGEgc2VhcmNoIHBhcmFtZXRlciBhcHBlbmRlZCB0byBpdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgQSBVUkwgd2hvc2UgY2FjaGUga2V5IHlvdSB3YW50IHRvIGxvb2sgdXAuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgdmVyc2lvbmVkIFVSTCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEgY2FjaGUga2V5XG4gICAgICogZm9yIHRoZSBvcmlnaW5hbCBVUkwsIG9yIHVuZGVmaW5lZCBpZiB0aGF0IFVSTCBpc24ndCBwcmVjYWNoZWQuXG4gICAgICovXG4gICAgZ2V0Q2FjaGVLZXlGb3JVUkwodXJsKSB7XG4gICAgICAgIGNvbnN0IHVybE9iamVjdCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VybHNUb0NhY2hlS2V5cy5nZXQodXJsT2JqZWN0LmhyZWYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIEEgY2FjaGUga2V5IHdob3NlIFNSSSB5b3Ugd2FudCB0byBsb29rIHVwLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN1YnJlc291cmNlIGludGVncml0eSBhc3NvY2lhdGVkIHdpdGggdGhlIGNhY2hlIGtleSxcbiAgICAgKiBvciB1bmRlZmluZWQgaWYgaXQncyBub3Qgc2V0LlxuICAgICAqL1xuICAgIGdldEludGVncml0eUZvckNhY2hlS2V5KGNhY2hlS2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZUtleXNUb0ludGVncml0aWVzLmdldChjYWNoZUtleSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgYWN0cyBhcyBhIGRyb3AtaW4gcmVwbGFjZW1lbnQgZm9yXG4gICAgICogW2BjYWNoZS5tYXRjaCgpYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhY2hlL21hdGNoKVxuICAgICAqIHdpdGggdGhlIGZvbGxvd2luZyBkaWZmZXJlbmNlczpcbiAgICAgKlxuICAgICAqIC0gSXQga25vd3Mgd2hhdCB0aGUgbmFtZSBvZiB0aGUgcHJlY2FjaGUgaXMsIGFuZCBvbmx5IGNoZWNrcyBpbiB0aGF0IGNhY2hlLlxuICAgICAqIC0gSXQgYWxsb3dzIHlvdSB0byBwYXNzIGluIGFuIFwib3JpZ2luYWxcIiBVUkwgd2l0aG91dCB2ZXJzaW9uaW5nIHBhcmFtZXRlcnMsXG4gICAgICogYW5kIGl0IHdpbGwgYXV0b21hdGljYWxseSBsb29rIHVwIHRoZSBjb3JyZWN0IGNhY2hlIGtleSBmb3IgdGhlIGN1cnJlbnRseVxuICAgICAqIGFjdGl2ZSByZXZpc2lvbiBvZiB0aGF0IFVSTC5cbiAgICAgKlxuICAgICAqIEUuZy4sIGBtYXRjaFByZWNhY2hlKCdpbmRleC5odG1sJylgIHdpbGwgZmluZCB0aGUgY29ycmVjdCBwcmVjYWNoZWRcbiAgICAgKiByZXNwb25zZSBmb3IgdGhlIGN1cnJlbnRseSBhY3RpdmUgc2VydmljZSB3b3JrZXIsIGV2ZW4gaWYgdGhlIGFjdHVhbCBjYWNoZVxuICAgICAqIGtleSBpcyBgJy9pbmRleC5odG1sP19fV0JfUkVWSVNJT05fXz0xMjM0YWJjZCdgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8UmVxdWVzdH0gcmVxdWVzdCBUaGUga2V5ICh3aXRob3V0IHJldmlzaW9uaW5nIHBhcmFtZXRlcnMpXG4gICAgICogdG8gbG9vayB1cCBpbiB0aGUgcHJlY2FjaGUuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZXx1bmRlZmluZWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIG1hdGNoUHJlY2FjaGUocmVxdWVzdCkge1xuICAgICAgICBjb25zdCB1cmwgPSByZXF1ZXN0IGluc3RhbmNlb2YgUmVxdWVzdCA/IHJlcXVlc3QudXJsIDogcmVxdWVzdDtcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSB0aGlzLmdldENhY2hlS2V5Rm9yVVJMKHVybCk7XG4gICAgICAgIGlmIChjYWNoZUtleSkge1xuICAgICAgICAgICAgY29uc3QgY2FjaGUgPSBhd2FpdCBzZWxmLmNhY2hlcy5vcGVuKHRoaXMuc3RyYXRlZ3kuY2FjaGVOYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZS5tYXRjaChjYWNoZUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgbG9va3MgdXAgYHVybGAgaW4gdGhlIHByZWNhY2hlICh0YWtpbmcgaW50b1xuICAgICAqIGFjY291bnQgcmV2aXNpb24gaW5mb3JtYXRpb24pLCBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBgUmVzcG9uc2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgcHJlY2FjaGVkIFVSTCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gbG9va3VwIHRoZVxuICAgICAqIGBSZXNwb25zZWAuXG4gICAgICogQHJldHVybiB7bW9kdWxlOndvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9XG4gICAgICovXG4gICAgY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwodXJsKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gdGhpcy5nZXRDYWNoZUtleUZvclVSTCh1cmwpO1xuICAgICAgICBpZiAoIWNhY2hlS2V5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdub24tcHJlY2FjaGVkLXVybCcsIHsgdXJsIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAob3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgb3B0aW9ucy5yZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsKTtcbiAgICAgICAgICAgIG9wdGlvbnMucGFyYW1zID0gT2JqZWN0LmFzc2lnbih7IGNhY2hlS2V5IH0sIG9wdGlvbnMucGFyYW1zKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmF0ZWd5LmhhbmRsZShvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnQgeyBQcmVjYWNoZUNvbnRyb2xsZXIgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBgUHJlY2FjaGVGYWxsYmFja1BsdWdpbmAgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IGFuIFwib2ZmbGluZSBmYWxsYmFja1wiXG4gKiByZXNwb25zZSB0byBiZSB1c2VkIHdoZW4gYSBnaXZlbiBzdHJhdGVneSBpcyB1bmFibGUgdG8gZ2VuZXJhdGUgYSByZXNwb25zZS5cbiAqXG4gKiBJdCBkb2VzIHRoaXMgYnkgaW50ZXJjZXB0aW5nIHRoZSBgaGFuZGxlckRpZEVycm9yYCBwbHVnaW4gY2FsbGJhY2tcbiAqIGFuZCByZXR1cm5pbmcgYSBwcmVjYWNoZWQgcmVzcG9uc2UsIHRha2luZyB0aGUgZXhwZWN0ZWQgcmV2aXNpb24gcGFyYW1ldGVyXG4gKiBpbnRvIGFjY291bnQgYXV0b21hdGljYWxseS5cbiAqXG4gKiBVbmxlc3MgeW91IGV4cGxpY2l0bHkgcGFzcyBpbiBhIGBQcmVjYWNoZUNvbnRyb2xsZXJgIGluc3RhbmNlIHRvIHRoZVxuICogY29uc3RydWN0b3IsIHRoZSBkZWZhdWx0IGluc3RhbmNlIHdpbGwgYmUgdXNlZC4gR2VuZXJhbGx5IHNwZWFraW5nLCBtb3N0XG4gKiBkZXZlbG9wZXJzIHdpbGwgZW5kIHVwIHVzaW5nIHRoZSBkZWZhdWx0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmNsYXNzIFByZWNhY2hlRmFsbGJhY2tQbHVnaW4ge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgYSBuZXcgUHJlY2FjaGVGYWxsYmFja1BsdWdpbiB3aXRoIHRoZSBhc3NvY2lhdGVkIGZhbGxiYWNrVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuZmFsbGJhY2tVUkwgQSBwcmVjYWNoZWQgVVJMIHRvIHVzZSBhcyB0aGUgZmFsbGJhY2tcbiAgICAgKiAgICAgaWYgdGhlIGFzc29jaWF0ZWQgc3RyYXRlZ3kgY2FuJ3QgZ2VuZXJhdGUgYSByZXNwb25zZS5cbiAgICAgKiBAcGFyYW0ge1ByZWNhY2hlQ29udHJvbGxlcn0gW2NvbmZpZy5wcmVjYWNoZUNvbnRyb2xsZXJdIEFuIG9wdGlvbmFsXG4gICAgICogICAgIFByZWNhY2hlQ29udHJvbGxlciBpbnN0YW5jZS4gSWYgbm90IHByb3ZpZGVkLCB0aGUgZGVmYXVsdFxuICAgICAqICAgICBQcmVjYWNoZUNvbnRyb2xsZXIgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHsgZmFsbGJhY2tVUkwsIHByZWNhY2hlQ29udHJvbGxlciB9KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn0gVGhlIHByZWNhY2hlIHJlc3BvbnNlIGZvciB0aGUgZmFsbGJhY2sgVVJMLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVyRGlkRXJyb3IgPSAoKSA9PiB0aGlzLl9wcmVjYWNoZUNvbnRyb2xsZXIubWF0Y2hQcmVjYWNoZSh0aGlzLl9mYWxsYmFja1VSTCk7XG4gICAgICAgIHRoaXMuX2ZhbGxiYWNrVVJMID0gZmFsbGJhY2tVUkw7XG4gICAgICAgIHRoaXMuX3ByZWNhY2hlQ29udHJvbGxlciA9IHByZWNhY2hlQ29udHJvbGxlciB8fFxuICAgICAgICAgICAgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICB9XG59XG5leHBvcnQgeyBQcmVjYWNoZUZhbGxiYWNrUGx1Z2luIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnd29ya2JveC1yb3V0aW5nL1JvdXRlLmpzJztcbmltcG9ydCB7IGdlbmVyYXRlVVJMVmFyaWF0aW9ucyB9IGZyb20gJy4vdXRpbHMvZ2VuZXJhdGVVUkxWYXJpYXRpb25zLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEEgc3ViY2xhc3Mgb2YgW1JvdXRlXXtAbGluayBtb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlfSB0aGF0IHRha2VzIGFcbiAqIFtQcmVjYWNoZUNvbnRyb2xsZXJde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyfVxuICogaW5zdGFuY2UgYW5kIHVzZXMgaXQgdG8gbWF0Y2ggaW5jb21pbmcgcmVxdWVzdHMgYW5kIGhhbmRsZSBmZXRjaGluZ1xuICogcmVzcG9uc2VzIGZyb20gdGhlIHByZWNhY2hlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKiBAZXh0ZW5kcyBtb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlXG4gKi9cbmNsYXNzIFByZWNhY2hlUm91dGUgZXh0ZW5kcyBSb3V0ZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtQcmVjYWNoZUNvbnRyb2xsZXJ9IHByZWNhY2hlQ29udHJvbGxlciBBIGBQcmVjYWNoZUNvbnRyb2xsZXJgXG4gICAgICogaW5zdGFuY2UgdXNlZCB0byBib3RoIG1hdGNoIHJlcXVlc3RzIGFuZCByZXNwb25kIHRvIGZldGNoIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMgdG8gY29udHJvbCBob3cgcmVxdWVzdHMgYXJlIG1hdGNoZWRcbiAgICAgKiBhZ2FpbnN0IHRoZSBsaXN0IG9mIHByZWNhY2hlZCBVUkxzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5kaXJlY3RvcnlJbmRleD1pbmRleC5odG1sXSBUaGUgYGRpcmVjdG9yeUluZGV4YCB3aWxsXG4gICAgICogY2hlY2sgY2FjaGUgZW50cmllcyBmb3IgYSBVUkxzIGVuZGluZyB3aXRoICcvJyB0byBzZWUgaWYgdGhlcmUgaXMgYSBoaXQgd2hlblxuICAgICAqIGFwcGVuZGluZyB0aGUgYGRpcmVjdG9yeUluZGV4YCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PFJlZ0V4cD59IFtvcHRpb25zLmlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZz1bL151dG1fLywgL15mYmNsaWQkL11dIEFuXG4gICAgICogYXJyYXkgb2YgcmVnZXgncyB0byByZW1vdmUgc2VhcmNoIHBhcmFtcyB3aGVuIGxvb2tpbmcgZm9yIGEgY2FjaGUgbWF0Y2guXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jbGVhblVSTHM9dHJ1ZV0gVGhlIGBjbGVhblVSTHNgIG9wdGlvbiB3aWxsXG4gICAgICogY2hlY2sgdGhlIGNhY2hlIGZvciB0aGUgVVJMIHdpdGggYSBgLmh0bWxgIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGVuZC5cbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXByZWNhY2hpbmd+dXJsTWFuaXB1bGF0aW9ufSBbb3B0aW9ucy51cmxNYW5pcHVsYXRpb25dXG4gICAgICogVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIHRha2UgYSBVUkwgYW5kIHJldHVybiBhbiBhcnJheSBvZlxuICAgICAqIGFsdGVybmF0aXZlIFVSTHMgdGhhdCBzaG91bGQgYmUgY2hlY2tlZCBmb3IgcHJlY2FjaGUgbWF0Y2hlcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwcmVjYWNoZUNvbnRyb2xsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSAoeyByZXF1ZXN0IH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybHNUb0NhY2hlS2V5cyA9IHByZWNhY2hlQ29udHJvbGxlci5nZXRVUkxzVG9DYWNoZUtleXMoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcG9zc2libGVVUkwgb2YgZ2VuZXJhdGVVUkxWYXJpYXRpb25zKHJlcXVlc3QudXJsLCBvcHRpb25zKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gdXJsc1RvQ2FjaGVLZXlzLmdldChwb3NzaWJsZVVSTCk7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGludGVncml0eSA9IHByZWNhY2hlQ29udHJvbGxlci5nZXRJbnRlZ3JpdHlGb3JDYWNoZUtleShjYWNoZUtleSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGNhY2hlS2V5LCBpbnRlZ3JpdHkgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUHJlY2FjaGluZyBkaWQgbm90IGZpbmQgYSBtYXRjaCBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgIGdldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIHN1cGVyKG1hdGNoLCBwcmVjYWNoZUNvbnRyb2xsZXIuc3RyYXRlZ3kpO1xuICAgIH1cbn1cbmV4cG9ydCB7IFByZWNhY2hlUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGNvcHlSZXNwb25zZSB9IGZyb20gJ3dvcmtib3gtY29yZS9jb3B5UmVzcG9uc2UuanMnO1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJ3dvcmtib3gtc3RyYXRlZ2llcy9TdHJhdGVneS5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIFtTdHJhdGVneV17QGxpbmsgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX0gaW1wbGVtZW50YXRpb25cbiAqIHNwZWNpZmljYWxseSBkZXNpZ25lZCB0byB3b3JrIHdpdGhcbiAqIFtQcmVjYWNoZUNvbnRyb2xsZXJde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyfVxuICogdG8gYm90aCBjYWNoZSBhbmQgZmV0Y2ggcHJlY2FjaGVkIGFzc2V0cy5cbiAqXG4gKiBOb3RlOiBhbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGlzIGNyZWF0ZWQgYXV0b21hdGljYWxseSB3aGVuIGNyZWF0aW5nIGFcbiAqIGBQcmVjYWNoZUNvbnRyb2xsZXJgOyBpdCdzIGdlbmVyYWxseSBub3QgbmVjZXNzYXJ5IHRvIGNyZWF0ZSB0aGlzIHlvdXJzZWxmLlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmNsYXNzIFByZWNhY2hlU3RyYXRlZ3kgZXh0ZW5kcyBTdHJhdGVneSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTmFtZV0gQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gdGhlIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAgICogW3dvcmtib3gtY29yZV17QGxpbmsgbW9kdWxlOndvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICAgKiBbYGluaXRgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzfVxuICAgICAqIG9mIGFsbCBmZXRjaCgpIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMubWF0Y2hPcHRpb25zXSBUaGVcbiAgICAgKiBbYENhY2hlUXVlcnlPcHRpb25zYF17QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnN9XG4gICAgICogZm9yIGFueSBgY2FjaGUubWF0Y2goKWAgb3IgYGNhY2hlLnB1dCgpYCBjYWxscyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5mYWxsYmFja1RvTmV0d29yaz10cnVlXSBXaGV0aGVyIHRvIGF0dGVtcHQgdG9cbiAgICAgKiBnZXQgdGhlIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsgaWYgdGhlcmUncyBhIHByZWNhY2hlIG1pc3MuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIG9wdGlvbnMuY2FjaGVOYW1lID0gY2FjaGVOYW1lcy5nZXRQcmVjYWNoZU5hbWUob3B0aW9ucy5jYWNoZU5hbWUpO1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZmFsbGJhY2tUb05ldHdvcmsgPVxuICAgICAgICAgICAgb3B0aW9ucy5mYWxsYmFja1RvTmV0d29yayA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIC8vIFJlZGlyZWN0ZWQgcmVzcG9uc2VzIGNhbm5vdCBiZSB1c2VkIHRvIHNhdGlzZnkgYSBuYXZpZ2F0aW9uIHJlcXVlc3QsIHNvXG4gICAgICAgIC8vIGFueSByZWRpcmVjdGVkIHJlc3BvbnNlIG11c3QgYmUgXCJjb3BpZWRcIiByYXRoZXIgdGhhbiBjbG9uZWQsIHNvIHRoZSBuZXdcbiAgICAgICAgLy8gcmVzcG9uc2UgZG9lc24ndCBjb250YWluIHRoZSBgcmVkaXJlY3RlZGAgZmxhZy4gU2VlOlxuICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02NjkzNjMmZGVzYz0yI2MxXG4gICAgICAgIHRoaXMucGx1Z2lucy5wdXNoKFByZWNhY2hlU3RyYXRlZ3kuY29weVJlZGlyZWN0ZWRDYWNoZWFibGVSZXNwb25zZXNQbHVnaW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IHJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBfaGFuZGxlKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCk7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYW4gYGluc3RhbGxgIGV2ZW50IGZvciBhbiBlbnRyeSB0aGF0IGlzbid0IGFscmVhZHkgY2FjaGVkLFxuICAgICAgICAvLyB0aGVuIHBvcHVsYXRlIHRoZSBjYWNoZS5cbiAgICAgICAgaWYgKGhhbmRsZXIuZXZlbnQgJiYgaGFuZGxlci5ldmVudC50eXBlID09PSAnaW5zdGFsbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9oYW5kbGVJbnN0YWxsKHJlcXVlc3QsIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldHRpbmcgaGVyZSBtZWFucyBzb21ldGhpbmcgd2VudCB3cm9uZy4gQW4gZW50cnkgdGhhdCBzaG91bGQgaGF2ZSBiZWVuXG4gICAgICAgIC8vIHByZWNhY2hlZCB3YXNuJ3QgZm91bmQgaW4gdGhlIGNhY2hlLlxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faGFuZGxlRmV0Y2gocmVxdWVzdCwgaGFuZGxlcik7XG4gICAgfVxuICAgIGFzeW5jIF9oYW5kbGVGZXRjaChyZXF1ZXN0LCBoYW5kbGVyKSB7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gKGhhbmRsZXIucGFyYW1zIHx8IHt9KTtcbiAgICAgICAgLy8gRmFsbCBiYWNrIHRvIHRoZSBuZXR3b3JrIGlmIHdlJ3JlIGNvbmZpZ3VyZWQgdG8gZG8gc28uXG4gICAgICAgIGlmICh0aGlzLl9mYWxsYmFja1RvTmV0d29yaykge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgVGhlIHByZWNhY2hlZCByZXNwb25zZSBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgIGAke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0gaW4gJHt0aGlzLmNhY2hlTmFtZX0gd2FzIG5vdCBgICtcbiAgICAgICAgICAgICAgICAgICAgYGZvdW5kLiBGYWxsaW5nIGJhY2sgdG8gdGhlIG5ldHdvcmsuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbnRlZ3JpdHlJbk1hbmlmZXN0ID0gcGFyYW1zLmludGVncml0eTtcbiAgICAgICAgICAgIGNvbnN0IGludGVncml0eUluUmVxdWVzdCA9IHJlcXVlc3QuaW50ZWdyaXR5O1xuICAgICAgICAgICAgY29uc3Qgbm9JbnRlZ3JpdHlDb25mbGljdCA9ICFpbnRlZ3JpdHlJblJlcXVlc3QgfHwgaW50ZWdyaXR5SW5SZXF1ZXN0ID09PSBpbnRlZ3JpdHlJbk1hbmlmZXN0O1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmZldGNoKG5ldyBSZXF1ZXN0KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBpbnRlZ3JpdHk6IGludGVncml0eUluUmVxdWVzdCB8fCBpbnRlZ3JpdHlJbk1hbmlmZXN0LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgLy8gSXQncyBvbmx5IFwic2FmZVwiIHRvIHJlcGFpciB0aGUgY2FjaGUgaWYgd2UncmUgdXNpbmcgU1JJIHRvIGd1YXJhbnRlZVxuICAgICAgICAgICAgLy8gdGhhdCB0aGUgcmVzcG9uc2UgbWF0Y2hlcyB0aGUgcHJlY2FjaGUgbWFuaWZlc3QncyBleHBlY3RhdGlvbnMsXG4gICAgICAgICAgICAvLyBhbmQgdGhlcmUncyBlaXRoZXIgYSkgbm8gaW50ZWdyaXR5IHByb3BlcnR5IGluIHRoZSBpbmNvbWluZyByZXF1ZXN0XG4gICAgICAgICAgICAvLyBvciBiKSB0aGVyZSBpcyBhbiBpbnRlZ3JpdHksIGFuZCBpdCBtYXRjaGVzIHRoZSBwcmVjYWNoZSBtYW5pZmVzdC5cbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzI4NThcbiAgICAgICAgICAgIGlmIChpbnRlZ3JpdHlJbk1hbmlmZXN0ICYmIG5vSW50ZWdyaXR5Q29uZmxpY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91c2VEZWZhdWx0Q2FjaGVhYmlsaXR5UGx1Z2luSWZOZWVkZWQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3YXNDYWNoZWQgPSBhd2FpdCBoYW5kbGVyLmNhY2hlUHV0KHJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3YXNDYWNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYEEgcmVzcG9uc2UgZm9yICR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgd2FzIHVzZWQgdG8gXCJyZXBhaXJcIiB0aGUgcHJlY2FjaGUuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGlzIHNob3VsZG4ndCBub3JtYWxseSBoYXBwZW4sIGJ1dCB0aGVyZSBhcmUgZWRnZSBjYXNlczpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTQ0MVxuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbWlzc2luZy1wcmVjYWNoZS1lbnRyeScsIHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWU6IHRoaXMuY2FjaGVOYW1lLFxuICAgICAgICAgICAgICAgIHVybDogcmVxdWVzdC51cmwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBwYXJhbXMuY2FjaGVLZXkgfHwgKGF3YWl0IGhhbmRsZXIuZ2V0Q2FjaGVLZXkocmVxdWVzdCwgJ3JlYWQnKSk7XG4gICAgICAgICAgICAvLyBXb3JrYm94IGlzIGdvaW5nIHRvIGhhbmRsZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAvLyBwcmludCB0aGUgcm91dGluZyBkZXRhaWxzIHRvIHRoZSBjb25zb2xlLlxuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBQcmVjYWNoaW5nIGlzIHJlc3BvbmRpbmcgdG86IGAgKyBnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCkpO1xuICAgICAgICAgICAgbG9nZ2VyLmxvZyhgU2VydmluZyB0aGUgcHJlY2FjaGVkIHVybDogJHtnZXRGcmllbmRseVVSTChjYWNoZUtleSBpbnN0YW5jZW9mIFJlcXVlc3QgPyBjYWNoZUtleS51cmwgOiBjYWNoZUtleSl9YCk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFZpZXcgcmVxdWVzdCBkZXRhaWxzIGhlcmUuYCk7XG4gICAgICAgICAgICBsb2dnZXIubG9nKHJlcXVlc3QpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFZpZXcgcmVzcG9uc2UgZGV0YWlscyBoZXJlLmApO1xuICAgICAgICAgICAgbG9nZ2VyLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgX2hhbmRsZUluc3RhbGwocmVxdWVzdCwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLl91c2VEZWZhdWx0Q2FjaGVhYmlsaXR5UGx1Z2luSWZOZWVkZWQoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmZldGNoKHJlcXVlc3QpO1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZGVmZXIgY2FjaGVQdXQoKSB1bnRpbCBhZnRlciB3ZSBrbm93IHRoZSByZXNwb25zZVxuICAgICAgICAvLyBzaG91bGQgYmUgY2FjaGVkOyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yNzM3XG4gICAgICAgIGNvbnN0IHdhc0NhY2hlZCA9IGF3YWl0IGhhbmRsZXIuY2FjaGVQdXQocmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XG4gICAgICAgIGlmICghd2FzQ2FjaGVkKSB7XG4gICAgICAgICAgICAvLyBUaHJvd2luZyBoZXJlIHdpbGwgbGVhZCB0byB0aGUgYGluc3RhbGxgIGhhbmRsZXIgZmFpbGluZywgd2hpY2hcbiAgICAgICAgICAgIC8vIHdlIHdhbnQgdG8gZG8gaWYgKmFueSogb2YgdGhlIHJlc3BvbnNlcyBhcmVuJ3Qgc2FmZSB0byBjYWNoZS5cbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2JhZC1wcmVjYWNoaW5nLXJlc3BvbnNlJywge1xuICAgICAgICAgICAgICAgIHVybDogcmVxdWVzdC51cmwsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNvbXBsZXgsIGFzIHRoZXJlIGEgbnVtYmVyIG9mIHRoaW5ncyB0byBhY2NvdW50IGZvcjpcbiAgICAgKlxuICAgICAqIFRoZSBgcGx1Z2luc2AgYXJyYXkgY2FuIGJlIHNldCBhdCBjb25zdHJ1Y3Rpb24sIGFuZC9vciBpdCBtaWdodCBiZSBhZGRlZCB0b1xuICAgICAqIHRvIGF0IGFueSB0aW1lIGJlZm9yZSB0aGUgc3RyYXRlZ3kgaXMgdXNlZC5cbiAgICAgKlxuICAgICAqIEF0IHRoZSB0aW1lIHRoZSBzdHJhdGVneSBpcyB1c2VkIChpLmUuIGR1cmluZyBhbiBgaW5zdGFsbGAgZXZlbnQpLCB0aGVyZVxuICAgICAqIG5lZWRzIHRvIGJlIGF0IGxlYXN0IG9uZSBwbHVnaW4gdGhhdCBpbXBsZW1lbnRzIGBjYWNoZVdpbGxVcGRhdGVgIGluIHRoZVxuICAgICAqIGFycmF5LCBvdGhlciB0aGFuIGBjb3B5UmVkaXJlY3RlZENhY2hlYWJsZVJlc3BvbnNlc1BsdWdpbmAuXG4gICAgICpcbiAgICAgKiAtIElmIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhbmQgdGhlcmUgYXJlIG5vIHN1aXRhYmxlIGBjYWNoZVdpbGxVcGRhdGVgXG4gICAgICogcGx1Z2lucywgd2UgbmVlZCB0byBhZGQgYGRlZmF1bHRQcmVjYWNoZUNhY2hlYWJpbGl0eVBsdWdpbmAuXG4gICAgICpcbiAgICAgKiAtIElmIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhbmQgdGhlcmUgaXMgZXhhY3RseSBvbmUgYGNhY2hlV2lsbFVwZGF0ZWAsIHRoZW5cbiAgICAgKiB3ZSBkb24ndCBoYXZlIHRvIGRvIGFueXRoaW5nICh0aGlzIG1pZ2h0IGJlIGEgcHJldmlvdXNseSBhZGRlZFxuICAgICAqIGBkZWZhdWx0UHJlY2FjaGVDYWNoZWFiaWxpdHlQbHVnaW5gLCBvciBpdCBtaWdodCBiZSBhIGN1c3RvbSBwbHVnaW4pLlxuICAgICAqXG4gICAgICogLSBJZiB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgYW5kIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgYGNhY2hlV2lsbFVwZGF0ZWAsXG4gICAgICogdGhlbiB3ZSBuZWVkIHRvIGNoZWNrIGlmIG9uZSBpcyBgZGVmYXVsdFByZWNhY2hlQ2FjaGVhYmlsaXR5UGx1Z2luYC4gSWYgc28sXG4gICAgICogd2UgbmVlZCB0byByZW1vdmUgaXQuIChUaGlzIHNpdHVhdGlvbiBpcyB1bmxpa2VseSwgYnV0IGl0IGNvdWxkIGhhcHBlbiBpZlxuICAgICAqIHRoZSBzdHJhdGVneSBpcyB1c2VkIG11bHRpcGxlIHRpbWVzLCB0aGUgZmlyc3Qgd2l0aG91dCBhIGBjYWNoZVdpbGxVcGRhdGVgLFxuICAgICAqIGFuZCB0aGVuIGxhdGVyIG9uIGFmdGVyIG1hbnVhbGx5IGFkZGluZyBhIGN1c3RvbSBgY2FjaGVXaWxsVXBkYXRlYC4pXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yNzM3IGZvciBtb3JlIGNvbnRleHQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF91c2VEZWZhdWx0Q2FjaGVhYmlsaXR5UGx1Z2luSWZOZWVkZWQoKSB7XG4gICAgICAgIGxldCBkZWZhdWx0UGx1Z2luSW5kZXggPSBudWxsO1xuICAgICAgICBsZXQgY2FjaGVXaWxsVXBkYXRlUGx1Z2luQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IFtpbmRleCwgcGx1Z2luXSBvZiB0aGlzLnBsdWdpbnMuZW50cmllcygpKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgdGhlIGNvcHkgcmVkaXJlY3RlZCBwbHVnaW4gd2hlbiBkZXRlcm1pbmluZyB3aGF0IHRvIGRvLlxuICAgICAgICAgICAgaWYgKHBsdWdpbiA9PT0gUHJlY2FjaGVTdHJhdGVneS5jb3B5UmVkaXJlY3RlZENhY2hlYWJsZVJlc3BvbnNlc1BsdWdpbikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgZGVmYXVsdCBwbHVnaW4ncyBpbmRleCwgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZW1vdmVkLlxuICAgICAgICAgICAgaWYgKHBsdWdpbiA9PT0gUHJlY2FjaGVTdHJhdGVneS5kZWZhdWx0UHJlY2FjaGVDYWNoZWFiaWxpdHlQbHVnaW4pIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0UGx1Z2luSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbHVnaW4uY2FjaGVXaWxsVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVXaWxsVXBkYXRlUGx1Z2luQ291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FjaGVXaWxsVXBkYXRlUGx1Z2luQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2lucy5wdXNoKFByZWNhY2hlU3RyYXRlZ3kuZGVmYXVsdFByZWNhY2hlQ2FjaGVhYmlsaXR5UGx1Z2luKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjYWNoZVdpbGxVcGRhdGVQbHVnaW5Db3VudCA+IDEgJiYgZGVmYXVsdFBsdWdpbkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBPbmx5IHJlbW92ZSB0aGUgZGVmYXVsdCBwbHVnaW47IG11bHRpcGxlIGN1c3RvbSBwbHVnaW5zIGFyZSBhbGxvd2VkLlxuICAgICAgICAgICAgdGhpcy5wbHVnaW5zLnNwbGljZShkZWZhdWx0UGx1Z2luSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdGhpbmcgbmVlZHMgdG8gYmUgZG9uZSBpZiBjYWNoZVdpbGxVcGRhdGVQbHVnaW5Db3VudCBpcyAxXG4gICAgfVxufVxuUHJlY2FjaGVTdHJhdGVneS5kZWZhdWx0UHJlY2FjaGVDYWNoZWFiaWxpdHlQbHVnaW4gPSB7XG4gICAgYXN5bmMgY2FjaGVXaWxsVXBkYXRlKHsgcmVzcG9uc2UgfSkge1xuICAgICAgICBpZiAoIXJlc3BvbnNlIHx8IHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9LFxufTtcblByZWNhY2hlU3RyYXRlZ3kuY29weVJlZGlyZWN0ZWRDYWNoZWFibGVSZXNwb25zZXNQbHVnaW4gPSB7XG4gICAgYXN5bmMgY2FjaGVXaWxsVXBkYXRlKHsgcmVzcG9uc2UgfSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UucmVkaXJlY3RlZCA/IGF3YWl0IGNvcHlSZXNwb25zZShyZXNwb25zZSkgOiByZXNwb25zZTtcbiAgICB9LFxufTtcbmV4cG9ydCB7IFByZWNhY2hlU3RyYXRlZ3kgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gQHRzLWlnbm9yZVxudHJ5IHtcbiAgICBzZWxmWyd3b3JrYm94OnByZWNhY2hpbmc6Ni4yLjQnXSAmJiBfKCk7XG59XG5jYXRjaCAoZSkgeyB9XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWRkcyBwbHVnaW5zIHRvIHRoZSBwcmVjYWNoaW5nIHN0cmF0ZWd5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gcGx1Z2luc1xuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIGFkZFBsdWdpbnMocGx1Z2lucykge1xuICAgIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgcHJlY2FjaGVDb250cm9sbGVyLnN0cmF0ZWd5LnBsdWdpbnMucHVzaCguLi5wbHVnaW5zKTtcbn1cbmV4cG9ydCB7IGFkZFBsdWdpbnMgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyByZWdpc3RlclJvdXRlIH0gZnJvbSAnd29ya2JveC1yb3V0aW5nL3JlZ2lzdGVyUm91dGUuanMnO1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCB7IFByZWNhY2hlUm91dGUgfSBmcm9tICcuL1ByZWNhY2hlUm91dGUuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWRkIGEgYGZldGNoYCBsaXN0ZW5lciB0byB0aGUgc2VydmljZSB3b3JrZXIgdGhhdCB3aWxsXG4gKiByZXNwb25kIHRvXG4gKiBbbmV0d29yayByZXF1ZXN0c117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlcnZpY2VfV29ya2VyX0FQSS9Vc2luZ19TZXJ2aWNlX1dvcmtlcnMjQ3VzdG9tX3Jlc3BvbnNlc190b19yZXF1ZXN0c31cbiAqIHdpdGggcHJlY2FjaGVkIGFzc2V0cy5cbiAqXG4gKiBSZXF1ZXN0cyBmb3IgYXNzZXRzIHRoYXQgYXJlbid0IHByZWNhY2hlZCwgdGhlIGBGZXRjaEV2ZW50YCB3aWxsIG5vdCBiZVxuICogcmVzcG9uZGVkIHRvLCBhbGxvd2luZyB0aGUgZXZlbnQgdG8gZmFsbCB0aHJvdWdoIHRvIG90aGVyIGBmZXRjaGAgZXZlbnRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFNlZVxuICogW1ByZWNhY2hlUm91dGUgb3B0aW9uc117QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZVJvdXRlfS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBhZGRSb3V0ZShvcHRpb25zKSB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICBjb25zdCBwcmVjYWNoZVJvdXRlID0gbmV3IFByZWNhY2hlUm91dGUocHJlY2FjaGVDb250cm9sbGVyLCBvcHRpb25zKTtcbiAgICByZWdpc3RlclJvdXRlKHByZWNhY2hlUm91dGUpO1xufVxuZXhwb3J0IHsgYWRkUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGNhY2hlTmFtZXMgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IGRlbGV0ZU91dGRhdGVkQ2FjaGVzIH0gZnJvbSAnLi91dGlscy9kZWxldGVPdXRkYXRlZENhY2hlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBZGRzIGFuIGBhY3RpdmF0ZWAgZXZlbnQgbGlzdGVuZXIgd2hpY2ggd2lsbCBjbGVhbiB1cCBpbmNvbXBhdGlibGVcbiAqIHByZWNhY2hlcyB0aGF0IHdlcmUgY3JlYXRlZCBieSBvbGRlciB2ZXJzaW9ucyBvZiBXb3JrYm94LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIGNsZWFudXBPdXRkYXRlZENhY2hlcygpIHtcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODM1NyNpc3N1ZWNvbW1lbnQtNDM2NDg0NzA1XG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsICgoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY2FjaGVOYW1lID0gY2FjaGVOYW1lcy5nZXRQcmVjYWNoZU5hbWUoKTtcbiAgICAgICAgZXZlbnQud2FpdFVudGlsKGRlbGV0ZU91dGRhdGVkQ2FjaGVzKGNhY2hlTmFtZSkudGhlbigoY2FjaGVzRGVsZXRlZCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVzRGVsZXRlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFRoZSBmb2xsb3dpbmcgb3V0LW9mLWRhdGUgcHJlY2FjaGVzIHdlcmUgY2xlYW5lZCB1cCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBhdXRvbWF0aWNhbGx5OmAsIGNhY2hlc0RlbGV0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH0pKTtcbn1cbmV4cG9ydCB7IGNsZWFudXBPdXRkYXRlZENhY2hlcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNhbGxzXG4gKiB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyI2NyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMfSBvbiB0aGUgZGVmYXVsdFxuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlcn0gaW5zdGFuY2UuXG4gKlxuICogSWYgeW91IGFyZSBjcmVhdGluZyB5b3VyIG93biB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyfSwgdGhlbiBjYWxsIHRoZVxuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlciNjcmVhdGVIYW5kbGVyQm91bmRUb1VSTH0gb24gdGhhdCBpbnN0YW5jZSxcbiAqIGluc3RlYWQgb2YgdXNpbmcgdGhpcyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBwcmVjYWNoZWQgVVJMIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBsb29rdXAgdGhlXG4gKiBgUmVzcG9uc2VgLlxuICogQHBhcmFtIHtib29sZWFufSBbZmFsbGJhY2tUb05ldHdvcms9dHJ1ZV0gV2hldGhlciB0byBhdHRlbXB0IHRvIGdldCB0aGVcbiAqIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsgaWYgdGhlcmUncyBhIHByZWNhY2hlIG1pc3MuXG4gKiBAcmV0dXJuIHttb2R1bGU6d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja31cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBjcmVhdGVIYW5kbGVyQm91bmRUb1VSTCh1cmwpIHtcbiAgICBjb25zdCBwcmVjYWNoZUNvbnRyb2xsZXIgPSBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIHJldHVybiBwcmVjYWNoZUNvbnRyb2xsZXIuY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwodXJsKTtcbn1cbmV4cG9ydCB7IGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGFrZXMgaW4gYSBVUkwsIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIFVSTCB0aGF0IGNvdWxkIGJlIHVzZWQgdG9cbiAqIGxvb2t1cCB0aGUgZW50cnkgaW4gdGhlIHByZWNhY2hlLlxuICpcbiAqIElmIGEgcmVsYXRpdmUgVVJMIGlzIHByb3ZpZGVkLCB0aGUgbG9jYXRpb24gb2YgdGhlIHNlcnZpY2Ugd29ya2VyIGZpbGUgd2lsbFxuICogYmUgdXNlZCBhcyB0aGUgYmFzZS5cbiAqXG4gKiBGb3IgcHJlY2FjaGVkIGVudHJpZXMgd2l0aG91dCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgdGhlIGNhY2hlIGtleSB3aWxsIGJlIHRoZVxuICogc2FtZSBhcyB0aGUgb3JpZ2luYWwgVVJMLlxuICpcbiAqIEZvciBwcmVjYWNoZWQgZW50cmllcyB3aXRoIHJldmlzaW9uIGluZm9ybWF0aW9uLCB0aGUgY2FjaGUga2V5IHdpbGwgYmUgdGhlXG4gKiBvcmlnaW5hbCBVUkwgd2l0aCB0aGUgYWRkaXRpb24gb2YgYSBxdWVyeSBwYXJhbWV0ZXIgdXNlZCBmb3Iga2VlcGluZyB0cmFjayBvZlxuICogdGhlIHJldmlzaW9uIGluZm8uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHdob3NlIGNhY2hlIGtleSB0byBsb29rIHVwLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgY2FjaGUga2V5IHRoYXQgY29ycmVzcG9uZHMgdG8gdGhhdCBVUkwuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gZ2V0Q2FjaGVLZXlGb3JVUkwodXJsKSB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICByZXR1cm4gcHJlY2FjaGVDb250cm9sbGVyLmdldENhY2hlS2V5Rm9yVVJMKHVybCk7XG59XG5leHBvcnQgeyBnZXRDYWNoZUtleUZvclVSTCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYWRkUGx1Z2lucyB9IGZyb20gJy4vYWRkUGx1Z2lucy5qcyc7XG5pbXBvcnQgeyBhZGRSb3V0ZSB9IGZyb20gJy4vYWRkUm91dGUuanMnO1xuaW1wb3J0IHsgY2xlYW51cE91dGRhdGVkQ2FjaGVzIH0gZnJvbSAnLi9jbGVhbnVwT3V0ZGF0ZWRDYWNoZXMuanMnO1xuaW1wb3J0IHsgY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwgfSBmcm9tICcuL2NyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMLmpzJztcbmltcG9ydCB7IGdldENhY2hlS2V5Rm9yVVJMIH0gZnJvbSAnLi9nZXRDYWNoZUtleUZvclVSTC5qcyc7XG5pbXBvcnQgeyBtYXRjaFByZWNhY2hlIH0gZnJvbSAnLi9tYXRjaFByZWNhY2hlLmpzJztcbmltcG9ydCB7IHByZWNhY2hlIH0gZnJvbSAnLi9wcmVjYWNoZS5qcyc7XG5pbXBvcnQgeyBwcmVjYWNoZUFuZFJvdXRlIH0gZnJvbSAnLi9wcmVjYWNoZUFuZFJvdXRlLmpzJztcbmltcG9ydCB7IFByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCB7IFByZWNhY2hlUm91dGUgfSBmcm9tICcuL1ByZWNhY2hlUm91dGUuanMnO1xuaW1wb3J0IHsgUHJlY2FjaGVTdHJhdGVneSB9IGZyb20gJy4vUHJlY2FjaGVTdHJhdGVneS5qcyc7XG5pbXBvcnQgeyBQcmVjYWNoZUZhbGxiYWNrUGx1Z2luIH0gZnJvbSAnLi9QcmVjYWNoZUZhbGxiYWNrUGx1Z2luLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIE1vc3QgY29uc3VtZXJzIG9mIHRoaXMgbW9kdWxlIHdpbGwgd2FudCB0byB1c2UgdGhlXG4gKiBbcHJlY2FjaGVBbmRSb3V0ZSgpXXtAbGluayBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLnByZWNhY2hlQW5kUm91dGV9XG4gKiBtZXRob2QgdG8gYWRkIGFzc2V0cyB0byB0aGUgY2FjaGUgYW5kIHJlc3BvbmQgdG8gbmV0d29yayByZXF1ZXN0cyB3aXRoIHRoZXNlXG4gKiBjYWNoZWQgYXNzZXRzLlxuICpcbiAqIElmIHlvdSByZXF1aXJlIG1vcmUgY29udHJvbCBvdmVyIGNhY2hpbmcgYW5kIHJvdXRpbmcsIHlvdSBjYW4gdXNlIHRoZVxuICogW1ByZWNhY2hlQ29udHJvbGxlcl17QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXJ9XG4gKiBpbnRlcmZhY2UuXG4gKlxuICogQG1vZHVsZSB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IHsgYWRkUGx1Z2lucywgYWRkUm91dGUsIGNsZWFudXBPdXRkYXRlZENhY2hlcywgY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwsIGdldENhY2hlS2V5Rm9yVVJMLCBtYXRjaFByZWNhY2hlLCBwcmVjYWNoZSwgcHJlY2FjaGVBbmRSb3V0ZSwgUHJlY2FjaGVDb250cm9sbGVyLCBQcmVjYWNoZVJvdXRlLCBQcmVjYWNoZVN0cmF0ZWd5LCBQcmVjYWNoZUZhbGxiYWNrUGx1Z2luLCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNhbGxzXG4gKiB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyI21hdGNoUHJlY2FjaGV9IG9uIHRoZSBkZWZhdWx0XG4gKiB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyfSBpbnN0YW5jZS5cbiAqXG4gKiBJZiB5b3UgYXJlIGNyZWF0aW5nIHlvdXIgb3duIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXJ9LCB0aGVuIGNhbGxcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXIjbWF0Y2hQcmVjYWNoZX0gb24gdGhhdCBpbnN0YW5jZSxcbiAqIGluc3RlYWQgb2YgdXNpbmcgdGhpcyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xSZXF1ZXN0fSByZXF1ZXN0IFRoZSBrZXkgKHdpdGhvdXQgcmV2aXNpb25pbmcgcGFyYW1ldGVycylcbiAqIHRvIGxvb2sgdXAgaW4gdGhlIHByZWNhY2hlLlxuICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZXx1bmRlZmluZWQ+fVxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIG1hdGNoUHJlY2FjaGUocmVxdWVzdCkge1xuICAgIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgcmV0dXJuIHByZWNhY2hlQ29udHJvbGxlci5tYXRjaFByZWNhY2hlKHJlcXVlc3QpO1xufVxuZXhwb3J0IHsgbWF0Y2hQcmVjYWNoZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFkZHMgaXRlbXMgdG8gdGhlIHByZWNhY2hlIGxpc3QsIHJlbW92aW5nIGFueSBkdXBsaWNhdGVzIGFuZFxuICogc3RvcmVzIHRoZSBmaWxlcyBpbiB0aGVcbiAqIFtcInByZWNhY2hlIGNhY2hlXCJde0BsaW5rIG1vZHVsZTp3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30gd2hlbiB0aGUgc2VydmljZVxuICogd29ya2VyIGluc3RhbGxzLlxuICpcbiAqIFRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXG4gKlxuICogUGxlYXNlIG5vdGU6IFRoaXMgbWV0aG9kICoqd2lsbCBub3QqKiBzZXJ2ZSBhbnkgb2YgdGhlIGNhY2hlZCBmaWxlcyBmb3IgeW91LlxuICogSXQgb25seSBwcmVjYWNoZXMgZmlsZXMuIFRvIHJlc3BvbmQgdG8gYSBuZXR3b3JrIHJlcXVlc3QgeW91IGNhbGxcbiAqIFthZGRSb3V0ZSgpXXtAbGluayBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLmFkZFJvdXRlfS5cbiAqXG4gKiBJZiB5b3UgaGF2ZSBhIHNpbmdsZSBhcnJheSBvZiBmaWxlcyB0byBwcmVjYWNoZSwgeW91IGNhbiBqdXN0IGNhbGxcbiAqIFtwcmVjYWNoZUFuZFJvdXRlKClde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcucHJlY2FjaGVBbmRSb3V0ZX0uXG4gKlxuICogQHBhcmFtIHtBcnJheTxPYmplY3R8c3RyaW5nPn0gW2VudHJpZXM9W11dIEFycmF5IG9mIGVudHJpZXMgdG8gcHJlY2FjaGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gcHJlY2FjaGUoZW50cmllcykge1xuICAgIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgcHJlY2FjaGVDb250cm9sbGVyLnByZWNhY2hlKGVudHJpZXMpO1xufVxuZXhwb3J0IHsgcHJlY2FjaGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFkZFJvdXRlIH0gZnJvbSAnLi9hZGRSb3V0ZS5qcyc7XG5pbXBvcnQgeyBwcmVjYWNoZSB9IGZyb20gJy4vcHJlY2FjaGUuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhpcyBtZXRob2Qgd2lsbCBhZGQgZW50cmllcyB0byB0aGUgcHJlY2FjaGUgbGlzdCBhbmQgYWRkIGEgcm91dGUgdG9cbiAqIHJlc3BvbmQgdG8gZmV0Y2ggZXZlbnRzLlxuICpcbiAqIFRoaXMgaXMgYSBjb252ZW5pZW5jZSBtZXRob2QgdGhhdCB3aWxsIGNhbGxcbiAqIFtwcmVjYWNoZSgpXXtAbGluayBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLnByZWNhY2hlfSBhbmRcbiAqIFthZGRSb3V0ZSgpXXtAbGluayBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLmFkZFJvdXRlfSBpbiBhIHNpbmdsZSBjYWxsLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0fHN0cmluZz59IGVudHJpZXMgQXJyYXkgb2YgZW50cmllcyB0byBwcmVjYWNoZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gU2VlXG4gKiBbUHJlY2FjaGVSb3V0ZSBvcHRpb25zXXtAbGluayBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlUm91dGV9LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIHByZWNhY2hlQW5kUm91dGUoZW50cmllcywgb3B0aW9ucykge1xuICAgIHByZWNhY2hlKGVudHJpZXMpO1xuICAgIGFkZFJvdXRlKG9wdGlvbnMpO1xufVxuZXhwb3J0IHsgcHJlY2FjaGVBbmRSb3V0ZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEEgcGx1Z2luLCBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggUHJlY2FjaGVDb250cm9sbGVyLCB0byB0cmFuc2xhdGUgVVJMcyBpbnRvXG4gKiB0aGUgY29ycmVzcG9uZGluZyBjYWNoZSBrZXksIGJhc2VkIG9uIHRoZSBjdXJyZW50IHJldmlzaW9uIGluZm8uXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgUHJlY2FjaGVDYWNoZUtleVBsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoeyBwcmVjYWNoZUNvbnRyb2xsZXIgfSkge1xuICAgICAgICB0aGlzLmNhY2hlS2V5V2lsbEJlVXNlZCA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcywgfSkgPT4ge1xuICAgICAgICAgICAgLy8gUGFyYW1zIGlzIHR5cGUgYW55LCBjYW4ndCBjaGFuZ2UgcmlnaHQgbm93LlxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jYWNoZUtleSkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVjYWNoZUNvbnRyb2xsZXIuZ2V0Q2FjaGVLZXlGb3JVUkwocmVxdWVzdC51cmwpO1xuICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlS2V5XG4gICAgICAgICAgICAgICAgPyBuZXcgUmVxdWVzdChjYWNoZUtleSwgeyBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMgfSlcbiAgICAgICAgICAgICAgICA6IHJlcXVlc3Q7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3ByZWNhY2hlQ29udHJvbGxlciA9IHByZWNhY2hlQ29udHJvbGxlcjtcbiAgICB9XG59XG5leHBvcnQgeyBQcmVjYWNoZUNhY2hlS2V5UGx1Z2luIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQSBwbHVnaW4sIGRlc2lnbmVkIHRvIGJlIHVzZWQgd2l0aCBQcmVjYWNoZUNvbnRyb2xsZXIsIHRvIGRldGVybWluZSB0aGVcbiAqIG9mIGFzc2V0cyB0aGF0IHdlcmUgdXBkYXRlZCAob3Igbm90IHVwZGF0ZWQpIGR1cmluZyB0aGUgaW5zdGFsbCBldmVudC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBQcmVjYWNoZUluc3RhbGxSZXBvcnRQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZWRVUkxzID0gW107XG4gICAgICAgIHRoaXMubm90VXBkYXRlZFVSTHMgPSBbXTtcbiAgICAgICAgdGhpcy5oYW5kbGVyV2lsbFN0YXJ0ID0gYXN5bmMgKHsgcmVxdWVzdCwgc3RhdGUsIH0pID0+IHtcbiAgICAgICAgICAgIC8vIFRPRE86IGBzdGF0ZWAgc2hvdWxkIG5ldmVyIGJlIHVuZGVmaW5lZC4uLlxuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUub3JpZ2luYWxSZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jYWNoZWRSZXNwb25zZVdpbGxCZVVzZWQgPSBhc3luYyAoeyBldmVudCwgc3RhdGUsIGNhY2hlZFJlc3BvbnNlLCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2luc3RhbGwnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLm9yaWdpbmFsUmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAmJiBzdGF0ZS5vcmlnaW5hbFJlcXVlc3QgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGBzdGF0ZWAgc2hvdWxkIG5ldmVyIGJlIHVuZGVmaW5lZC4uLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBzdGF0ZS5vcmlnaW5hbFJlcXVlc3QudXJsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90VXBkYXRlZFVSTHMucHVzaCh1cmwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVkVVJMcy5wdXNoKHVybCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkUmVzcG9uc2U7XG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IHsgUHJlY2FjaGVJbnN0YWxsUmVwb3J0UGx1Z2luIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLy8gTmFtZSBvZiB0aGUgc2VhcmNoIHBhcmFtZXRlciB1c2VkIHRvIHN0b3JlIHJldmlzaW9uIGluZm8uXG5jb25zdCBSRVZJU0lPTl9TRUFSQ0hfUEFSQU0gPSAnX19XQl9SRVZJU0lPTl9fJztcbi8qKlxuICogQ29udmVydHMgYSBtYW5pZmVzdCBlbnRyeSBpbnRvIGEgdmVyc2lvbmVkIFVSTCBzdWl0YWJsZSBmb3IgcHJlY2FjaGluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IGVudHJ5XG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgVVJMIHdpdGggdmVyc2lvbmluZyBpbmZvLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FjaGVLZXkoZW50cnkpIHtcbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2FkZC10by1jYWNoZS1saXN0LXVuZXhwZWN0ZWQtdHlwZScsIHsgZW50cnkgfSk7XG4gICAgfVxuICAgIC8vIElmIGEgcHJlY2FjaGUgbWFuaWZlc3QgZW50cnkgaXMgYSBzdHJpbmcsIGl0J3MgYXNzdW1lZCB0byBiZSBhIHZlcnNpb25lZFxuICAgIC8vIFVSTCwgbGlrZSAnL2FwcC5hYmNkMTIzNC5qcycuIFJldHVybiBhcy1pcy5cbiAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB1cmxPYmplY3QgPSBuZXcgVVJMKGVudHJ5LCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhY2hlS2V5OiB1cmxPYmplY3QuaHJlZixcbiAgICAgICAgICAgIHVybDogdXJsT2JqZWN0LmhyZWYsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgcmV2aXNpb24sIHVybCB9ID0gZW50cnk7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYWRkLXRvLWNhY2hlLWxpc3QtdW5leHBlY3RlZC10eXBlJywgeyBlbnRyeSB9KTtcbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBqdXN0IGEgVVJMIGFuZCBubyByZXZpc2lvbiwgdGhlbiBpdCdzIGFsc28gYXNzdW1lZCB0byBiZSBhXG4gICAgLy8gdmVyc2lvbmVkIFVSTC5cbiAgICBpZiAoIXJldmlzaW9uKSB7XG4gICAgICAgIGNvbnN0IHVybE9iamVjdCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhY2hlS2V5OiB1cmxPYmplY3QuaHJlZixcbiAgICAgICAgICAgIHVybDogdXJsT2JqZWN0LmhyZWYsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgY29uc3RydWN0IGEgcHJvcGVybHkgdmVyc2lvbmVkIFVSTCB1c2luZyB0aGUgY3VzdG9tIFdvcmtib3hcbiAgICAvLyBzZWFyY2ggcGFyYW1ldGVyIGFsb25nIHdpdGggdGhlIHJldmlzaW9uIGluZm8uXG4gICAgY29uc3QgY2FjaGVLZXlVUkwgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgY29uc3Qgb3JpZ2luYWxVUkwgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgY2FjaGVLZXlVUkwuc2VhcmNoUGFyYW1zLnNldChSRVZJU0lPTl9TRUFSQ0hfUEFSQU0sIHJldmlzaW9uKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjYWNoZUtleTogY2FjaGVLZXlVUkwuaHJlZixcbiAgICAgICAgdXJsOiBvcmlnaW5hbFVSTC5ocmVmLFxuICAgIH07XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmNvbnN0IFNVQlNUUklOR19UT19GSU5EID0gJy1wcmVjYWNoZS0nO1xuLyoqXG4gKiBDbGVhbnMgdXAgaW5jb21wYXRpYmxlIHByZWNhY2hlcyB0aGF0IHdlcmUgY3JlYXRlZCBieSBvbGRlciB2ZXJzaW9ucyBvZlxuICogV29ya2JveCwgYnkgYSBzZXJ2aWNlIHdvcmtlciByZWdpc3RlcmVkIHVuZGVyIHRoZSBjdXJyZW50IHNjb3BlLlxuICpcbiAqIFRoaXMgaXMgbWVhbnQgdG8gYmUgY2FsbGVkIGFzIHBhcnQgb2YgdGhlIGBhY3RpdmF0ZWAgZXZlbnQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgc2FmZSB0byB1c2UgYXMgbG9uZyBhcyB5b3UgZG9uJ3QgaW5jbHVkZSBgc3Vic3RyaW5nVG9GaW5kYFxuICogKGRlZmF1bHRpbmcgdG8gYC1wcmVjYWNoZS1gKSBpbiB5b3VyIG5vbi1wcmVjYWNoZSBjYWNoZSBuYW1lcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudFByZWNhY2hlTmFtZSBUaGUgY2FjaGUgbmFtZSBjdXJyZW50bHkgaW4gdXNlIGZvclxuICogcHJlY2FjaGluZy4gVGhpcyBjYWNoZSB3b24ndCBiZSBkZWxldGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFtzdWJzdHJpbmdUb0ZpbmQ9Jy1wcmVjYWNoZS0nXSBDYWNoZSBuYW1lcyB3aGljaCBpbmNsdWRlIHRoaXNcbiAqIHN1YnN0cmluZyB3aWxsIGJlIGRlbGV0ZWQgKGV4Y2x1ZGluZyBgY3VycmVudFByZWNhY2hlTmFtZWApLlxuICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn0gQSBsaXN0IG9mIGFsbCB0aGUgY2FjaGUgbmFtZXMgdGhhdCB3ZXJlIGRlbGV0ZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmNvbnN0IGRlbGV0ZU91dGRhdGVkQ2FjaGVzID0gYXN5bmMgKGN1cnJlbnRQcmVjYWNoZU5hbWUsIHN1YnN0cmluZ1RvRmluZCA9IFNVQlNUUklOR19UT19GSU5EKSA9PiB7XG4gICAgY29uc3QgY2FjaGVOYW1lcyA9IGF3YWl0IHNlbGYuY2FjaGVzLmtleXMoKTtcbiAgICBjb25zdCBjYWNoZU5hbWVzVG9EZWxldGUgPSBjYWNoZU5hbWVzLmZpbHRlcigoY2FjaGVOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBjYWNoZU5hbWUuaW5jbHVkZXMoc3Vic3RyaW5nVG9GaW5kKSAmJlxuICAgICAgICAgICAgY2FjaGVOYW1lLmluY2x1ZGVzKHNlbGYucmVnaXN0cmF0aW9uLnNjb3BlKSAmJlxuICAgICAgICAgICAgY2FjaGVOYW1lICE9PSBjdXJyZW50UHJlY2FjaGVOYW1lO1xuICAgIH0pO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKGNhY2hlTmFtZXNUb0RlbGV0ZS5tYXAoKGNhY2hlTmFtZSkgPT4gc2VsZi5jYWNoZXMuZGVsZXRlKGNhY2hlTmFtZSkpKTtcbiAgICByZXR1cm4gY2FjaGVOYW1lc1RvRGVsZXRlO1xufTtcbmV4cG9ydCB7IGRlbGV0ZU91dGRhdGVkQ2FjaGVzIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyByZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi9yZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBHZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCB5aWVsZHMgcG9zc2libGUgdmFyaWF0aW9ucyBvbiB0aGUgb3JpZ2luYWwgVVJMIHRvXG4gKiBjaGVjaywgb25lIGF0IGEgdGltZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24qIGdlbmVyYXRlVVJMVmFyaWF0aW9ucyh1cmwsIHsgaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nID0gWy9edXRtXy8sIC9eZmJjbGlkJC9dLCBkaXJlY3RvcnlJbmRleCA9ICdpbmRleC5odG1sJywgY2xlYW5VUkxzID0gdHJ1ZSwgdXJsTWFuaXB1bGF0aW9uLCB9ID0ge30pIHtcbiAgICBjb25zdCB1cmxPYmplY3QgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgdXJsT2JqZWN0Lmhhc2ggPSAnJztcbiAgICB5aWVsZCB1cmxPYmplY3QuaHJlZjtcbiAgICBjb25zdCB1cmxXaXRob3V0SWdub3JlZFBhcmFtcyA9IHJlbW92ZUlnbm9yZWRTZWFyY2hQYXJhbXModXJsT2JqZWN0LCBpZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmcpO1xuICAgIHlpZWxkIHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zLmhyZWY7XG4gICAgaWYgKGRpcmVjdG9yeUluZGV4ICYmIHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zLnBhdGhuYW1lLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5VVJMID0gbmV3IFVSTCh1cmxXaXRob3V0SWdub3JlZFBhcmFtcy5ocmVmKTtcbiAgICAgICAgZGlyZWN0b3J5VVJMLnBhdGhuYW1lICs9IGRpcmVjdG9yeUluZGV4O1xuICAgICAgICB5aWVsZCBkaXJlY3RvcnlVUkwuaHJlZjtcbiAgICB9XG4gICAgaWYgKGNsZWFuVVJMcykge1xuICAgICAgICBjb25zdCBjbGVhblVSTCA9IG5ldyBVUkwodXJsV2l0aG91dElnbm9yZWRQYXJhbXMuaHJlZik7XG4gICAgICAgIGNsZWFuVVJMLnBhdGhuYW1lICs9ICcuaHRtbCc7XG4gICAgICAgIHlpZWxkIGNsZWFuVVJMLmhyZWY7XG4gICAgfVxuICAgIGlmICh1cmxNYW5pcHVsYXRpb24pIHtcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFVSTHMgPSB1cmxNYW5pcHVsYXRpb24oeyB1cmw6IHVybE9iamVjdCB9KTtcbiAgICAgICAgZm9yIChjb25zdCB1cmxUb0F0dGVtcHQgb2YgYWRkaXRpb25hbFVSTHMpIHtcbiAgICAgICAgICAgIHlpZWxkIHVybFRvQXR0ZW1wdC5ocmVmO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi4vUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xubGV0IHByZWNhY2hlQ29udHJvbGxlcjtcbi8qKlxuICogQHJldHVybiB7UHJlY2FjaGVDb250cm9sbGVyfVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyID0gKCkgPT4ge1xuICAgIGlmICghcHJlY2FjaGVDb250cm9sbGVyKSB7XG4gICAgICAgIHByZWNhY2hlQ29udHJvbGxlciA9IG5ldyBQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHByZWNhY2hlQ29udHJvbGxlcjtcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBUaXRsZVxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBkZWxldGVkVVJMc1xuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGxvZ0dyb3VwID0gKGdyb3VwVGl0bGUsIGRlbGV0ZWRVUkxzKSA9PiB7XG4gICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGdyb3VwVGl0bGUpO1xuICAgIGZvciAoY29uc3QgdXJsIG9mIGRlbGV0ZWRVUkxzKSB7XG4gICAgICAgIGxvZ2dlci5sb2codXJsKTtcbiAgICB9XG4gICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG59O1xuLyoqXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGRlbGV0ZWRVUkxzXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmludENsZWFudXBEZXRhaWxzKGRlbGV0ZWRVUkxzKSB7XG4gICAgY29uc3QgZGVsZXRpb25Db3VudCA9IGRlbGV0ZWRVUkxzLmxlbmd0aDtcbiAgICBpZiAoZGVsZXRpb25Db3VudCA+IDApIHtcbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBEdXJpbmcgcHJlY2FjaGluZyBjbGVhbnVwLCBgICtcbiAgICAgICAgICAgIGAke2RlbGV0aW9uQ291bnR9IGNhY2hlZCBgICtcbiAgICAgICAgICAgIGByZXF1ZXN0JHtkZWxldGlvbkNvdW50ID09PSAxID8gJyB3YXMnIDogJ3Mgd2VyZSd9IGRlbGV0ZWQuYCk7XG4gICAgICAgIGxvZ0dyb3VwKCdEZWxldGVkIENhY2hlIFJlcXVlc3RzJywgZGVsZXRlZFVSTHMpO1xuICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBUaXRsZVxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1cmxzXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gX25lc3RlZEdyb3VwKGdyb3VwVGl0bGUsIHVybHMpIHtcbiAgICBpZiAodXJscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoZ3JvdXBUaXRsZSk7XG4gICAgZm9yIChjb25zdCB1cmwgb2YgdXJscykge1xuICAgICAgICBsb2dnZXIubG9nKHVybCk7XG4gICAgfVxuICAgIGxvZ2dlci5ncm91cEVuZCgpO1xufVxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHVybHNUb1ByZWNhY2hlXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHVybHNBbHJlYWR5UHJlY2FjaGVkXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmludEluc3RhbGxEZXRhaWxzKHVybHNUb1ByZWNhY2hlLCB1cmxzQWxyZWFkeVByZWNhY2hlZCkge1xuICAgIGNvbnN0IHByZWNhY2hlZENvdW50ID0gdXJsc1RvUHJlY2FjaGUubGVuZ3RoO1xuICAgIGNvbnN0IGFscmVhZHlQcmVjYWNoZWRDb3VudCA9IHVybHNBbHJlYWR5UHJlY2FjaGVkLmxlbmd0aDtcbiAgICBpZiAocHJlY2FjaGVkQ291bnQgfHwgYWxyZWFkeVByZWNhY2hlZENvdW50KSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYFByZWNhY2hpbmcgJHtwcmVjYWNoZWRDb3VudH0gZmlsZSR7cHJlY2FjaGVkQ291bnQgPT09IDEgPyAnJyA6ICdzJ30uYDtcbiAgICAgICAgaWYgKGFscmVhZHlQcmVjYWNoZWRDb3VudCA+IDApIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gYCAke2FscmVhZHlQcmVjYWNoZWRDb3VudH0gYCArXG4gICAgICAgICAgICAgICAgYGZpbGUke2FscmVhZHlQcmVjYWNoZWRDb3VudCA9PT0gMSA/ICcgaXMnIDogJ3MgYXJlJ30gYWxyZWFkeSBjYWNoZWQuYDtcbiAgICAgICAgfVxuICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQobWVzc2FnZSk7XG4gICAgICAgIF9uZXN0ZWRHcm91cChgVmlldyBuZXdseSBwcmVjYWNoZWQgVVJMcy5gLCB1cmxzVG9QcmVjYWNoZSk7XG4gICAgICAgIF9uZXN0ZWRHcm91cChgVmlldyBwcmV2aW91c2x5IHByZWNhY2hlZCBVUkxzLmAsIHVybHNBbHJlYWR5UHJlY2FjaGVkKTtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFJlbW92ZXMgYW55IFVSTCBzZWFyY2ggcGFyYW1ldGVycyB0aGF0IHNob3VsZCBiZSBpZ25vcmVkLlxuICpcbiAqIEBwYXJhbSB7VVJMfSB1cmxPYmplY3QgVGhlIG9yaWdpbmFsIFVSTC5cbiAqIEBwYXJhbSB7QXJyYXk8UmVnRXhwPn0gaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nIFJlZ0V4cHMgdG8gdGVzdCBhZ2FpbnN0XG4gKiBlYWNoIHNlYXJjaCBwYXJhbWV0ZXIgbmFtZS4gTWF0Y2hlcyBtZWFuIHRoYXQgdGhlIHNlYXJjaCBwYXJhbWV0ZXIgc2hvdWxkIGJlXG4gKiBpZ25vcmVkLlxuICogQHJldHVybiB7VVJMfSBUaGUgVVJMIHdpdGggYW55IGlnbm9yZWQgc2VhcmNoIHBhcmFtZXRlcnMgcmVtb3ZlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUlnbm9yZWRTZWFyY2hQYXJhbXModXJsT2JqZWN0LCBpZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmcgPSBbXSkge1xuICAgIC8vIENvbnZlcnQgdGhlIGl0ZXJhYmxlIGludG8gYW4gYXJyYXkgYXQgdGhlIHN0YXJ0IG9mIHRoZSBsb29wIHRvIG1ha2Ugc3VyZVxuICAgIC8vIGRlbGV0aW9uIGRvZXNuJ3QgbWVzcyB1cCBpdGVyYXRpb24uXG4gICAgZm9yIChjb25zdCBwYXJhbU5hbWUgb2YgWy4uLnVybE9iamVjdC5zZWFyY2hQYXJhbXMua2V5cygpXSkge1xuICAgICAgICBpZiAoaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nLnNvbWUoKHJlZ0V4cCkgPT4gcmVnRXhwLnRlc3QocGFyYW1OYW1lKSkpIHtcbiAgICAgICAgICAgIHVybE9iamVjdC5zZWFyY2hQYXJhbXMuZGVsZXRlKHBhcmFtTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybE9iamVjdDtcbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJy4vUm91dGUuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogTmF2aWdhdGlvblJvdXRlIG1ha2VzIGl0IGVhc3kgdG8gY3JlYXRlIGFcbiAqIFtSb3V0ZV17QGxpbmsgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX0gdGhhdCBtYXRjaGVzIGZvciBicm93c2VyXG4gKiBbbmF2aWdhdGlvbiByZXF1ZXN0c117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy9wcmltZXJzL3NlcnZpY2Utd29ya2Vycy9oaWdoLXBlcmZvcm1hbmNlLWxvYWRpbmcjZmlyc3Rfd2hhdF9hcmVfbmF2aWdhdGlvbl9yZXF1ZXN0c30uXG4gKlxuICogSXQgd2lsbCBvbmx5IG1hdGNoIGluY29taW5nIFJlcXVlc3RzIHdob3NlXG4gKiBbYG1vZGVgXXtAbGluayBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1yZXF1ZXN0LW1vZGV9XG4gKiBpcyBzZXQgdG8gYG5hdmlnYXRlYC5cbiAqXG4gKiBZb3UgY2FuIG9wdGlvbmFsbHkgb25seSBhcHBseSB0aGlzIHJvdXRlIHRvIGEgc3Vic2V0IG9mIG5hdmlnYXRpb24gcmVxdWVzdHNcbiAqIGJ5IHVzaW5nIG9uZSBvciBib3RoIG9mIHRoZSBgZGVueWxpc3RgIGFuZCBgYWxsb3dsaXN0YCBwYXJhbWV0ZXJzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1yb3V0aW5nXG4gKiBAZXh0ZW5kcyBtb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlXG4gKi9cbmNsYXNzIE5hdmlnYXRpb25Sb3V0ZSBleHRlbmRzIFJvdXRlIHtcbiAgICAvKipcbiAgICAgKiBJZiBib3RoIGBkZW55bGlzdGAgYW5kIGBhbGxvd2xpc3RgIGFyZSBwcm92aWRlZCwgdGhlIGBkZW55bGlzdGAgd2lsbFxuICAgICAqIHRha2UgcHJlY2VkZW5jZSBhbmQgdGhlIHJlcXVlc3Qgd2lsbCBub3QgbWF0Y2ggdGhpcyByb3V0ZS5cbiAgICAgKlxuICAgICAqIFRoZSByZWd1bGFyIGV4cHJlc3Npb25zIGluIGBhbGxvd2xpc3RgIGFuZCBgZGVueWxpc3RgXG4gICAgICogYXJlIG1hdGNoZWQgYWdhaW5zdCB0aGUgY29uY2F0ZW5hdGVkXG4gICAgICogW2BwYXRobmFtZWBde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MSHlwZXJsaW5rRWxlbWVudFV0aWxzL3BhdGhuYW1lfVxuICAgICAqIGFuZCBbYHNlYXJjaGBde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MSHlwZXJsaW5rRWxlbWVudFV0aWxzL3NlYXJjaH1cbiAgICAgKiBwb3J0aW9ucyBvZiB0aGUgcmVxdWVzdGVkIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0FycmF5PFJlZ0V4cD59IFtvcHRpb25zLmRlbnlsaXN0XSBJZiBhbnkgb2YgdGhlc2UgcGF0dGVybnMgbWF0Y2gsXG4gICAgICogdGhlIHJvdXRlIHdpbGwgbm90IGhhbmRsZSB0aGUgcmVxdWVzdCAoZXZlbiBpZiBhIGFsbG93bGlzdCBSZWdFeHAgbWF0Y2hlcykuXG4gICAgICogQHBhcmFtIHtBcnJheTxSZWdFeHA+fSBbb3B0aW9ucy5hbGxvd2xpc3Q9Wy8uL11dIElmIGFueSBvZiB0aGVzZSBwYXR0ZXJuc1xuICAgICAqIG1hdGNoIHRoZSBVUkwncyBwYXRobmFtZSBhbmQgc2VhcmNoIHBhcmFtZXRlciwgdGhlIHJvdXRlIHdpbGwgaGFuZGxlIHRoZVxuICAgICAqIHJlcXVlc3QgKGFzc3VtaW5nIHRoZSBkZW55bGlzdCBkb2Vzbid0IG1hdGNoKS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyLCB7IGFsbG93bGlzdCA9IFsvLi9dLCBkZW55bGlzdCA9IFtdIH0gPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzQXJyYXlPZkNsYXNzKGFsbG93bGlzdCwgUmVnRXhwLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnTmF2aWdhdGlvblJvdXRlJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdvcHRpb25zLmFsbG93bGlzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydC5pc0FycmF5T2ZDbGFzcyhkZW55bGlzdCwgUmVnRXhwLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnTmF2aWdhdGlvblJvdXRlJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdvcHRpb25zLmRlbnlsaXN0JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKChvcHRpb25zKSA9PiB0aGlzLl9tYXRjaChvcHRpb25zKSwgaGFuZGxlcik7XG4gICAgICAgIHRoaXMuX2FsbG93bGlzdCA9IGFsbG93bGlzdDtcbiAgICAgICAgdGhpcy5fZGVueWxpc3QgPSBkZW55bGlzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm91dGVzIG1hdGNoIGhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7VVJMfSBvcHRpb25zLnVybFxuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX21hdGNoKHsgdXJsLCByZXF1ZXN0IH0pIHtcbiAgICAgICAgaWYgKHJlcXVlc3QgJiYgcmVxdWVzdC5tb2RlICE9PSAnbmF2aWdhdGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGF0aG5hbWVBbmRTZWFyY2ggPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ0V4cCBvZiB0aGlzLl9kZW55bGlzdCkge1xuICAgICAgICAgICAgaWYgKHJlZ0V4cC50ZXN0KHBhdGhuYW1lQW5kU2VhcmNoKSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFRoZSBuYXZpZ2F0aW9uIHJvdXRlICR7cGF0aG5hbWVBbmRTZWFyY2h9IGlzIG5vdCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBiZWluZyB1c2VkLCBzaW5jZSB0aGUgVVJMIG1hdGNoZXMgdGhpcyBkZW55bGlzdCBwYXR0ZXJuOiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3JlZ0V4cC50b1N0cmluZygpfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2FsbG93bGlzdC5zb21lKChyZWdFeHApID0+IHJlZ0V4cC50ZXN0KHBhdGhuYW1lQW5kU2VhcmNoKSkpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBUaGUgbmF2aWdhdGlvbiByb3V0ZSAke3BhdGhuYW1lQW5kU2VhcmNofSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGlzIGJlaW5nIHVzZWQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmxvZyhgVGhlIG5hdmlnYXRpb24gcm91dGUgJHtwYXRobmFtZUFuZFNlYXJjaH0gaXMgbm90IGAgK1xuICAgICAgICAgICAgICAgIGBiZWluZyB1c2VkLCBzaW5jZSB0aGUgVVJMIGJlaW5nIG5hdmlnYXRlZCB0byBkb2Vzbid0IGAgK1xuICAgICAgICAgICAgICAgIGBtYXRjaCB0aGUgYWxsb3dsaXN0LmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgeyBOYXZpZ2F0aW9uUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJy4vUm91dGUuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogUmVnRXhwUm91dGUgbWFrZXMgaXQgZWFzeSB0byBjcmVhdGUgYSByZWd1bGFyIGV4cHJlc3Npb24gYmFzZWRcbiAqIFtSb3V0ZV17QGxpbmsgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX0uXG4gKlxuICogRm9yIHNhbWUtb3JpZ2luIHJlcXVlc3RzIHRoZSBSZWdFeHAgb25seSBuZWVkcyB0byBtYXRjaCBwYXJ0IG9mIHRoZSBVUkwuIEZvclxuICogcmVxdWVzdHMgYWdhaW5zdCB0aGlyZC1wYXJ0eSBzZXJ2ZXJzLCB5b3UgbXVzdCBkZWZpbmUgYSBSZWdFeHAgdGhhdCBtYXRjaGVzXG4gKiB0aGUgc3RhcnQgb2YgdGhlIFVSTC5cbiAqXG4gKiBbU2VlIHRoZSBtb2R1bGUgZG9jcyBmb3IgaW5mby5de0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L21vZHVsZXMvd29ya2JveC1yb3V0aW5nfVxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1yb3V0aW5nXG4gKiBAZXh0ZW5kcyBtb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlXG4gKi9cbmNsYXNzIFJlZ0V4cFJvdXRlIGV4dGVuZHMgUm91dGUge1xuICAgIC8qKlxuICAgICAqIElmIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gY29udGFpbnNcbiAgICAgKiBbY2FwdHVyZSBncm91cHNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1JlZ0V4cCNncm91cGluZy1iYWNrLXJlZmVyZW5jZXN9LFxuICAgICAqIHRoZSBjYXB0dXJlZCB2YWx1ZXMgd2lsbCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICogW2hhbmRsZXInc117QGxpbmsgbW9kdWxlOndvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGBwYXJhbXNgXG4gICAgICogYXJndW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVnRXhwIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdCBVUkxzLlxuICAgICAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIFRoZSBIVFRQIG1ldGhvZCB0byBtYXRjaCB0aGUgUm91dGVcbiAgICAgKiBhZ2FpbnN0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlZ0V4cCwgaGFuZGxlciwgbWV0aG9kKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZWdFeHAsIFJlZ0V4cCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JlZ0V4cFJvdXRlJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hdGNoID0gKHsgdXJsIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlZ0V4cC5leGVjKHVybC5ocmVmKTtcbiAgICAgICAgICAgIC8vIFJldHVybiBpbW1lZGlhdGVseSBpZiB0aGVyZSdzIG5vIG1hdGNoLlxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXF1aXJlIHRoYXQgdGhlIG1hdGNoIHN0YXJ0IGF0IHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gdGhlIFVSTCBzdHJpbmdcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgYSBjcm9zcy1vcmlnaW4gcmVxdWVzdC5cbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzI4MSBmb3IgdGhlIGNvbnRleHRcbiAgICAgICAgICAgIC8vIGJlaGluZCB0aGlzIGJlaGF2aW9yLlxuICAgICAgICAgICAgaWYgKCh1cmwub3JpZ2luICE9PSBsb2NhdGlvbi5vcmlnaW4pICYmIChyZXN1bHQuaW5kZXggIT09IDApKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBUaGUgcmVndWxhciBleHByZXNzaW9uICcke3JlZ0V4cC50b1N0cmluZygpfScgb25seSBwYXJ0aWFsbHkgbWF0Y2hlZCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBhZ2FpbnN0IHRoZSBjcm9zcy1vcmlnaW4gVVJMICcke3VybC50b1N0cmluZygpfScuIFJlZ0V4cFJvdXRlJ3Mgd2lsbCBvbmx5IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGhhbmRsZSBjcm9zcy1vcmlnaW4gcmVxdWVzdHMgaWYgdGhleSBtYXRjaCB0aGUgZW50aXJlIFVSTC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIHJvdXRlIG1hdGNoZXMsIGJ1dCB0aGVyZSBhcmVuJ3QgYW55IGNhcHR1cmUgZ3JvdXBzIGRlZmluZWQsIHRoZW5cbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXR1cm4gW10sIHdoaWNoIGlzIHRydXRoeSBhbmQgdGhlcmVmb3JlIHN1ZmZpY2llbnQgdG9cbiAgICAgICAgICAgIC8vIGluZGljYXRlIGEgbWF0Y2guXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgY2FwdHVyZSBncm91cHMsIHRoZW4gaXQgd2lsbCByZXR1cm4gdGhlaXIgdmFsdWVzLlxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zbGljZSgxKTtcbiAgICAgICAgfTtcbiAgICAgICAgc3VwZXIobWF0Y2gsIGhhbmRsZXIsIG1ldGhvZCk7XG4gICAgfVxufVxuZXhwb3J0IHsgUmVnRXhwUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgZGVmYXVsdE1ldGhvZCwgdmFsaWRNZXRob2RzIH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgbm9ybWFsaXplSGFuZGxlciB9IGZyb20gJy4vdXRpbHMvbm9ybWFsaXplSGFuZGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIGBSb3V0ZWAgY29uc2lzdHMgb2YgYSBwYWlyIG9mIGNhbGxiYWNrIGZ1bmN0aW9ucywgXCJtYXRjaFwiIGFuZCBcImhhbmRsZXJcIi5cbiAqIFRoZSBcIm1hdGNoXCIgY2FsbGJhY2sgZGV0ZXJtaW5lIGlmIGEgcm91dGUgc2hvdWxkIGJlIHVzZWQgdG8gXCJoYW5kbGVcIiBhXG4gKiByZXF1ZXN0IGJ5IHJldHVybmluZyBhIG5vbi1mYWxzeSB2YWx1ZSBpZiBpdCBjYW4uIFRoZSBcImhhbmRsZXJcIiBjYWxsYmFja1xuICogaXMgY2FsbGVkIHdoZW4gdGhlcmUgaXMgYSBtYXRjaCBhbmQgc2hvdWxkIHJldHVybiBhIFByb21pc2UgdGhhdCByZXNvbHZlc1xuICogdG8gYSBgUmVzcG9uc2VgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1yb3V0aW5nXG4gKi9cbmNsYXNzIFJvdXRlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgUm91dGUgY2xhc3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+bWF0Y2hDYWxsYmFja30gbWF0Y2hcbiAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByb3V0ZSBtYXRjaGVzIGEgZ2l2ZW5cbiAgICAgKiBgZmV0Y2hgIGV2ZW50IGJ5IHJldHVybmluZyBhIG5vbi1mYWxzeSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc29sdmluZyB0byBhIFJlc3BvbnNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gbWF0Y2ggdGhlIFJvdXRlXG4gICAgICogYWdhaW5zdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtYXRjaCwgaGFuZGxlciwgbWV0aG9kID0gZGVmYXVsdE1ldGhvZCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShtYXRjaCwgJ2Z1bmN0aW9uJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdtYXRjaCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNPbmVPZihtZXRob2QsIHZhbGlkTWV0aG9kcywgeyBwYXJhbU5hbWU6ICdtZXRob2QnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRoZXNlIHZhbHVlcyBhcmUgcmVmZXJlbmNlZCBkaXJlY3RseSBieSBSb3V0ZXIgc28gY2Fubm90IGJlXG4gICAgICAgIC8vIGFsdGVyZWQgYnkgbWluaWZpY2F0b24uXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgIHRoaXMubWF0Y2ggPSBtYXRjaDtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1yb3V0aW5nLWhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXNvbHZpbmcgdG8gYSBSZXNwb25zZVxuICAgICAqL1xuICAgIHNldENhdGNoSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuY2F0Y2hIYW5kbGVyID0gbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKTtcbiAgICB9XG59XG5leHBvcnQgeyBSb3V0ZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0TWV0aG9kIH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBub3JtYWxpemVIYW5kbGVyIH0gZnJvbSAnLi91dGlscy9ub3JtYWxpemVIYW5kbGVyLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhlIFJvdXRlciBjYW4gYmUgdXNlZCB0byBwcm9jZXNzIGEgRmV0Y2hFdmVudCB0aHJvdWdoIG9uZSBvciBtb3JlXG4gKiBbUm91dGVzXXtAbGluayBtb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlfSByZXNwb25kaW5nICB3aXRoIGEgUmVxdWVzdCBpZlxuICogYSBtYXRjaGluZyByb3V0ZSBleGlzdHMuXG4gKlxuICogSWYgbm8gcm91dGUgbWF0Y2hlcyBhIGdpdmVuIGEgcmVxdWVzdCwgdGhlIFJvdXRlciB3aWxsIHVzZSBhIFwiZGVmYXVsdFwiXG4gKiBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkLlxuICpcbiAqIFNob3VsZCB0aGUgbWF0Y2hpbmcgUm91dGUgdGhyb3cgYW4gZXJyb3IsIHRoZSBSb3V0ZXIgd2lsbCB1c2UgYSBcImNhdGNoXCJcbiAqIGhhbmRsZXIgaWYgb25lIGlzIGRlZmluZWQgdG8gZ3JhY2VmdWxseSBkZWFsIHdpdGggaXNzdWVzIGFuZCByZXNwb25kIHdpdGggYVxuICogUmVxdWVzdC5cbiAqXG4gKiBJZiBhIHJlcXVlc3QgbWF0Y2hlcyBtdWx0aXBsZSByb3V0ZXMsIHRoZSAqKmVhcmxpZXN0KiogcmVnaXN0ZXJlZCByb3V0ZSB3aWxsXG4gKiBiZSB1c2VkIHRvIHJlc3BvbmQgdG8gdGhlIHJlcXVlc3QuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXJvdXRpbmdcbiAqL1xuY2xhc3MgUm91dGVyIHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBhIG5ldyBSb3V0ZXIuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdEhhbmRsZXJNYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge01hcDxzdHJpbmcsIEFycmF5PG1vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGU+Pn0gcm91dGVzIEEgYE1hcGAgb2YgSFRUUFxuICAgICAqIG1ldGhvZCBuYW1lICgnR0VUJywgZXRjLikgdG8gYW4gYXJyYXkgb2YgYWxsIHRoZSBjb3JyZXNwb25kaW5nIGBSb3V0ZWBcbiAgICAgKiBpbnN0YW5jZXMgdGhhdCBhcmUgcmVnaXN0ZXJlZC5cbiAgICAgKi9cbiAgICBnZXQgcm91dGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm91dGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgZmV0Y2ggZXZlbnQgbGlzdGVuZXIgdG8gcmVzcG9uZCB0byBldmVudHMgd2hlbiBhIHJvdXRlIG1hdGNoZXNcbiAgICAgKiB0aGUgZXZlbnQncyByZXF1ZXN0LlxuICAgICAqL1xuICAgIGFkZEZldGNoTGlzdGVuZXIoKSB7XG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI4MzU3I2lzc3VlY29tbWVudC00MzY0ODQ3MDVcbiAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsICgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVxdWVzdCB9ID0gZXZlbnQ7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVByb21pc2UgPSB0aGlzLmhhbmRsZVJlcXVlc3QoeyByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBldmVudC5yZXNwb25kV2l0aChyZXNwb25zZVByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBtZXNzYWdlIGV2ZW50IGxpc3RlbmVyIGZvciBVUkxzIHRvIGNhY2hlIGZyb20gdGhlIHdpbmRvdy5cbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCB0byBjYWNoZSByZXNvdXJjZXMgbG9hZGVkIG9uIHRoZSBwYWdlIHByaW9yIHRvIHdoZW4gdGhlXG4gICAgICogc2VydmljZSB3b3JrZXIgc3RhcnRlZCBjb250cm9sbGluZyBpdC5cbiAgICAgKlxuICAgICAqIFRoZSBmb3JtYXQgb2YgdGhlIG1lc3NhZ2UgZGF0YSBzZW50IGZyb20gdGhlIHdpbmRvdyBzaG91bGQgYmUgYXMgZm9sbG93cy5cbiAgICAgKiBXaGVyZSB0aGUgYHVybHNUb0NhY2hlYCBhcnJheSBtYXkgY29uc2lzdCBvZiBVUkwgc3RyaW5ncyBvciBhbiBhcnJheSBvZlxuICAgICAqIFVSTCBzdHJpbmcgKyBgcmVxdWVzdEluaXRgIG9iamVjdCAodGhlIHNhbWUgYXMgeW91J2QgcGFzcyB0byBgZmV0Y2goKWApLlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICoge1xuICAgICAqICAgdHlwZTogJ0NBQ0hFX1VSTFMnLFxuICAgICAqICAgcGF5bG9hZDoge1xuICAgICAqICAgICB1cmxzVG9DYWNoZTogW1xuICAgICAqICAgICAgICcuL3NjcmlwdDEuanMnLFxuICAgICAqICAgICAgICcuL3NjcmlwdDIuanMnLFxuICAgICAqICAgICAgIFsnLi9zY3JpcHQzLmpzJywge21vZGU6ICduby1jb3JzJ31dLFxuICAgICAqICAgICBdLFxuICAgICAqICAgfSxcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgYWRkQ2FjaGVMaXN0ZW5lcigpIHtcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjgzNTcjaXNzdWVjb21tZW50LTQzNjQ4NDcwNVxuICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBldmVudC5kYXRhIGlzIHR5cGUgJ2FueSdcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0NBQ0hFX1VSTFMnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBheWxvYWQgfSA9IGV2ZW50LmRhdGE7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYENhY2hpbmcgVVJMcyBmcm9tIHRoZSB3aW5kb3dgLCBwYXlsb2FkLnVybHNUb0NhY2hlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdFByb21pc2VzID0gUHJvbWlzZS5hbGwocGF5bG9hZC51cmxzVG9DYWNoZS5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IFtlbnRyeV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KC4uLmVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdCh7IHJlcXVlc3QsIGV2ZW50IH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IFR5cGVTY3JpcHQgZXJyb3JzIHdpdGhvdXQgdGhpcyB0eXBlY2FzdCBmb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gc29tZSByZWFzb24gKHByb2JhYmx5IGEgYnVnKS4gVGhlIHJlYWwgdHlwZSBoZXJlIHNob3VsZCB3b3JrIGJ1dFxuICAgICAgICAgICAgICAgICAgICAvLyBkb2Vzbid0OiBgQXJyYXk8UHJvbWlzZTxSZXNwb25zZT4gfCB1bmRlZmluZWQ+YC5cbiAgICAgICAgICAgICAgICB9KSk7IC8vIFR5cGVTY3JpcHRcbiAgICAgICAgICAgICAgICBldmVudC53YWl0VW50aWwocmVxdWVzdFByb21pc2VzKTtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIE1lc3NhZ2VDaGFubmVsIHdhcyB1c2VkLCByZXBseSB0byB0aGUgbWVzc2FnZSBvbiBzdWNjZXNzLlxuICAgICAgICAgICAgICAgIGlmIChldmVudC5wb3J0cyAmJiBldmVudC5wb3J0c1swXSkge1xuICAgICAgICAgICAgICAgICAgICB2b2lkIHJlcXVlc3RQcm9taXNlcy50aGVuKCgpID0+IGV2ZW50LnBvcnRzWzBdLnBvc3RNZXNzYWdlKHRydWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIHJvdXRpbmcgcnVsZXMgdG8gYSBGZXRjaEV2ZW50IG9iamVjdCB0byBnZXQgYSBSZXNwb25zZSBmcm9tIGFuXG4gICAgICogYXBwcm9wcmlhdGUgUm91dGUncyBoYW5kbGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdCBUaGUgcmVxdWVzdCB0byBoYW5kbGUuXG4gICAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZVxuICAgICAqICAgICByZXF1ZXN0LlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fHVuZGVmaW5lZH0gQSBwcm9taXNlIGlzIHJldHVybmVkIGlmIGFcbiAgICAgKiAgICAgcmVnaXN0ZXJlZCByb3V0ZSBjYW4gaGFuZGxlIHRoZSByZXF1ZXN0LiBJZiB0aGVyZSBpcyBubyBtYXRjaGluZ1xuICAgICAqICAgICByb3V0ZSBhbmQgdGhlcmUncyBubyBgZGVmYXVsdEhhbmRsZXJgLCBgdW5kZWZpbmVkYCBpcyByZXR1cm5lZC5cbiAgICAgKi9cbiAgICBoYW5kbGVSZXF1ZXN0KHsgcmVxdWVzdCwgZXZlbnQgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdoYW5kbGVSZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdvcHRpb25zLnJlcXVlc3QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICghdXJsLnByb3RvY29sLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFdvcmtib3ggUm91dGVyIG9ubHkgc3VwcG9ydHMgVVJMcyB0aGF0IHN0YXJ0IHdpdGggJ2h0dHAnLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNhbWVPcmlnaW4gPSB1cmwub3JpZ2luID09PSBsb2NhdGlvbi5vcmlnaW47XG4gICAgICAgIGNvbnN0IHsgcGFyYW1zLCByb3V0ZSB9ID0gdGhpcy5maW5kTWF0Y2hpbmdSb3V0ZSh7XG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICBzYW1lT3JpZ2luLFxuICAgICAgICAgICAgdXJsLFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSByb3V0ZSAmJiByb3V0ZS5oYW5kbGVyO1xuICAgICAgICBjb25zdCBkZWJ1Z01lc3NhZ2VzID0gW107XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGRlYnVnTWVzc2FnZXMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgIGBGb3VuZCBhIHJvdXRlIHRvIGhhbmRsZSB0aGlzIHJlcXVlc3Q6YCwgcm91dGUsXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z01lc3NhZ2VzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgYFBhc3NpbmcgdGhlIGZvbGxvd2luZyBwYXJhbXMgdG8gdGhlIHJvdXRlJ3MgaGFuZGxlcjpgLCBwYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgaGFuZGxlciBiZWNhdXNlIHRoZXJlIHdhcyBubyBtYXRjaGluZyByb3V0ZSwgdGhlblxuICAgICAgICAvLyBmYWxsIGJhY2sgdG8gZGVmYXVsdEhhbmRsZXIgaWYgdGhhdCdzIGRlZmluZWQuXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHJlcXVlc3QubWV0aG9kO1xuICAgICAgICBpZiAoIWhhbmRsZXIgJiYgdGhpcy5fZGVmYXVsdEhhbmRsZXJNYXAuaGFzKG1ldGhvZCkpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZGVidWdNZXNzYWdlcy5wdXNoKGBGYWlsZWQgdG8gZmluZCBhIG1hdGNoaW5nIHJvdXRlLiBGYWxsaW5nIGAgK1xuICAgICAgICAgICAgICAgICAgICBgYmFjayB0byB0aGUgZGVmYXVsdCBoYW5kbGVyIGZvciAke21ldGhvZH0uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGVyID0gdGhpcy5fZGVmYXVsdEhhbmRsZXJNYXAuZ2V0KG1ldGhvZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIC8vIE5vIGhhbmRsZXIgc28gV29ya2JveCB3aWxsIGRvIG5vdGhpbmcuIElmIGxvZ3MgaXMgc2V0IG9mIGRlYnVnXG4gICAgICAgICAgICAgICAgLy8gaS5lLiB2ZXJib3NlLCB3ZSBzaG91bGQgcHJpbnQgb3V0IHRoaXMgaW5mb3JtYXRpb24uXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBObyByb3V0ZSBmb3VuZCBmb3I6ICR7Z2V0RnJpZW5kbHlVUkwodXJsKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIGhhbmRsZXIsIG1lYW5pbmcgV29ya2JveCBpcyBnb2luZyB0byBoYW5kbGUgdGhlIHJvdXRlLlxuICAgICAgICAgICAgLy8gcHJpbnQgdGhlIHJvdXRpbmcgZGV0YWlscyB0byB0aGUgY29uc29sZS5cbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgUm91dGVyIGlzIHJlc3BvbmRpbmcgdG86ICR7Z2V0RnJpZW5kbHlVUkwodXJsKX1gKTtcbiAgICAgICAgICAgIGRlYnVnTWVzc2FnZXMuZm9yRWFjaCgobXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobXNnKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKC4uLm1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKG1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXcmFwIGluIHRyeSBhbmQgY2F0Y2ggaW4gY2FzZSB0aGUgaGFuZGxlIG1ldGhvZCB0aHJvd3MgYSBzeW5jaHJvbm91c1xuICAgICAgICAvLyBlcnJvci4gSXQgc2hvdWxkIHN0aWxsIGNhbGxiYWNrIHRvIHRoZSBjYXRjaCBoYW5kbGVyLlxuICAgICAgICBsZXQgcmVzcG9uc2VQcm9taXNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2VQcm9taXNlID0gaGFuZGxlci5oYW5kbGUoeyB1cmwsIHJlcXVlc3QsIGV2ZW50LCBwYXJhbXMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzcG9uc2VQcm9taXNlID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgcm91dGUncyBjYXRjaCBoYW5kbGVyLCBpZiBpdCBleGlzdHNcbiAgICAgICAgY29uc3QgY2F0Y2hIYW5kbGVyID0gcm91dGUgJiYgcm91dGUuY2F0Y2hIYW5kbGVyO1xuICAgICAgICBpZiAocmVzcG9uc2VQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSAmJiAodGhpcy5fY2F0Y2hIYW5kbGVyIHx8IGNhdGNoSGFuZGxlcikpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbWlzZSA9IHJlc3BvbnNlUHJvbWlzZS5jYXRjaChhc3luYyAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJvdXRlIGNhdGNoIGhhbmRsZXIsIHByb2Nlc3MgdGhhdCBmaXJzdFxuICAgICAgICAgICAgICAgIGlmIChjYXRjaEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0aWxsIGluY2x1ZGUgVVJMIGhlcmUgYXMgaXQgd2lsbCBiZSBhc3luYyBmcm9tIHRoZSBjb25zb2xlIGdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbWF5IG5vdCBtYWtlIHNlbnNlIHdpdGhvdXQgdGhlIFVSTFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBFcnJvciB0aHJvd24gd2hlbiByZXNwb25kaW5nIHRvOiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgICR7Z2V0RnJpZW5kbHlVUkwodXJsKX0uIEZhbGxpbmcgYmFjayB0byByb3V0ZSdzIENhdGNoIEhhbmRsZXIuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoYEVycm9yIHRocm93biBieTpgLCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2F0Y2hIYW5kbGVyLmhhbmRsZSh7IHVybCwgcmVxdWVzdCwgZXZlbnQsIHBhcmFtcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoY2F0Y2hFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRjaEVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyID0gY2F0Y2hFcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhdGNoSGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RpbGwgaW5jbHVkZSBVUkwgaGVyZSBhcyBpdCB3aWxsIGJlIGFzeW5jIGZyb20gdGhlIGNvbnNvbGUgZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBtYXkgbm90IG1ha2Ugc2Vuc2Ugd2l0aG91dCB0aGUgVVJMXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYEVycm9yIHRocm93biB3aGVuIHJlc3BvbmRpbmcgdG86IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgJHtnZXRGcmllbmRseVVSTCh1cmwpfS4gRmFsbGluZyBiYWNrIHRvIGdsb2JhbCBDYXRjaCBIYW5kbGVyLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBFcnJvciB0aHJvd24gYnk6YCwgcm91dGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2F0Y2hIYW5kbGVyLmhhbmRsZSh7IHVybCwgcmVxdWVzdCwgZXZlbnQgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZVByb21pc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyBhIHJlcXVlc3QgYW5kIFVSTCAoYW5kIG9wdGlvbmFsbHkgYW4gZXZlbnQpIGFnYWluc3QgdGhlIGxpc3Qgb2ZcbiAgICAgKiByZWdpc3RlcmVkIHJvdXRlcywgYW5kIGlmIHRoZXJlJ3MgYSBtYXRjaCwgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZ1xuICAgICAqIHJvdXRlIGFsb25nIHdpdGggYW55IHBhcmFtcyBnZW5lcmF0ZWQgYnkgdGhlIG1hdGNoLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1VSTH0gb3B0aW9ucy51cmxcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuc2FtZU9yaWdpbiBUaGUgcmVzdWx0IG9mIGNvbXBhcmluZyBgdXJsLm9yaWdpbmBcbiAgICAgKiAgICAgYWdhaW5zdCB0aGUgY3VycmVudCBvcmlnaW4uXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3QgVGhlIHJlcXVlc3QgdG8gbWF0Y2guXG4gICAgICogQHBhcmFtIHtFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgY29ycmVzcG9uZGluZyBldmVudC5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGByb3V0ZWAgYW5kIGBwYXJhbXNgIHByb3BlcnRpZXMuXG4gICAgICogICAgIFRoZXkgYXJlIHBvcHVsYXRlZCBpZiBhIG1hdGNoaW5nIHJvdXRlIHdhcyBmb3VuZCBvciBgdW5kZWZpbmVkYFxuICAgICAqICAgICBvdGhlcndpc2UuXG4gICAgICovXG4gICAgZmluZE1hdGNoaW5nUm91dGUoeyB1cmwsIHNhbWVPcmlnaW4sIHJlcXVlc3QsIGV2ZW50IH0pIHtcbiAgICAgICAgY29uc3Qgcm91dGVzID0gdGhpcy5fcm91dGVzLmdldChyZXF1ZXN0Lm1ldGhvZCkgfHwgW107XG4gICAgICAgIGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zO1xuICAgICAgICAgICAgLy8gcm91dGUubWF0Y2ggcmV0dXJucyB0eXBlIGFueSwgbm90IHBvc3NpYmxlIHRvIGNoYW5nZSByaWdodCBub3cuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gICAgICAgICAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHJvdXRlLm1hdGNoKHsgdXJsLCBzYW1lT3JpZ2luLCByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgICAgIGlmIChtYXRjaFJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdhcm4gZGV2ZWxvcGVycyB0aGF0IHVzaW5nIGFuIGFzeW5jIG1hdGNoQ2FsbGJhY2sgaXMgYWxtb3N0IGFsd2F5c1xuICAgICAgICAgICAgICAgICAgICAvLyBub3QgdGhlIHJpZ2h0IHRoaW5nIHRvIGRvLlxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hSZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgV2hpbGUgcm91dGluZyAke2dldEZyaWVuZGx5VVJMKHVybCl9LCBhbiBhc3luYyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgbWF0Y2hDYWxsYmFjayBmdW5jdGlvbiB3YXMgdXNlZC4gUGxlYXNlIGNvbnZlcnQgdGhlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBmb2xsb3dpbmcgcm91dGUgdG8gdXNlIGEgc3luY2hyb25vdXMgbWF0Y2hDYWxsYmFjayBmdW5jdGlvbjpgLCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjA3OVxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBtYXRjaFJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXMpICYmIHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5zdGVhZCBvZiBwYXNzaW5nIGFuIGVtcHR5IGFycmF5IGluIGFzIHBhcmFtcywgdXNlIHVuZGVmaW5lZC5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgobWF0Y2hSZXN1bHQuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG1hdGNoUmVzdWx0KS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluc3RlYWQgb2YgcGFzc2luZyBhbiBlbXB0eSBvYmplY3QgaW4gYXMgcGFyYW1zLCB1c2UgdW5kZWZpbmVkLlxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBtYXRjaFJlc3VsdCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciB0aGUgYm9vbGVhbiB2YWx1ZSB0cnVlIChyYXRoZXIgdGhhbiBqdXN0IHNvbWV0aGluZyB0cnV0aC15KSxcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9uJ3Qgc2V0IHBhcmFtcy5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9wdWxsLzIxMzQjaXNzdWVjb21tZW50LTUxMzkyNDM1M1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJldHVybiBlYXJseSBpZiBoYXZlIGEgbWF0Y2guXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcm91dGUsIHBhcmFtcyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIG5vIG1hdGNoIHdhcyBmb3VuZCBhYm92ZSwgcmV0dXJuIGFuZCBlbXB0eSBvYmplY3QuXG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVmaW5lIGEgZGVmYXVsdCBgaGFuZGxlcmAgdGhhdCdzIGNhbGxlZCB3aGVuIG5vIHJvdXRlcyBleHBsaWNpdGx5XG4gICAgICogbWF0Y2ggdGhlIGluY29taW5nIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBFYWNoIEhUVFAgbWV0aG9kICgnR0VUJywgJ1BPU1QnLCBldGMuKSBnZXRzIGl0cyBvd24gZGVmYXVsdCBoYW5kbGVyLlxuICAgICAqXG4gICAgICogV2l0aG91dCBhIGRlZmF1bHQgaGFuZGxlciwgdW5tYXRjaGVkIHJlcXVlc3RzIHdpbGwgZ28gYWdhaW5zdCB0aGVcbiAgICAgKiBuZXR3b3JrIGFzIGlmIHRoZXJlIHdlcmUgbm8gc2VydmljZSB3b3JrZXIgcHJlc2VudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIFRoZSBIVFRQIG1ldGhvZCB0byBhc3NvY2lhdGUgd2l0aCB0aGlzXG4gICAgICogZGVmYXVsdCBoYW5kbGVyLiBFYWNoIG1ldGhvZCBoYXMgaXRzIG93biBkZWZhdWx0LlxuICAgICAqL1xuICAgIHNldERlZmF1bHRIYW5kbGVyKGhhbmRsZXIsIG1ldGhvZCA9IGRlZmF1bHRNZXRob2QpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdEhhbmRsZXJNYXAuc2V0KG1ldGhvZCwgbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIGEgUm91dGUgdGhyb3dzIGFuIGVycm9yIHdoaWxlIGhhbmRsaW5nIGEgcmVxdWVzdCwgdGhpcyBgaGFuZGxlcmBcbiAgICAgKiB3aWxsIGJlIGNhbGxlZCBhbmQgZ2l2ZW4gYSBjaGFuY2UgdG8gcHJvdmlkZSBhIHJlc3BvbnNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAgICAgKi9cbiAgICBzZXRDYXRjaEhhbmRsZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLl9jYXRjaEhhbmRsZXIgPSBub3JtYWxpemVIYW5kbGVyKGhhbmRsZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSByb3V0ZSB3aXRoIHRoZSByb3V0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGV9IHJvdXRlIFRoZSByb3V0ZSB0byByZWdpc3Rlci5cbiAgICAgKi9cbiAgICByZWdpc3RlclJvdXRlKHJvdXRlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNUeXBlKHJvdXRlLCAnb2JqZWN0Jywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydC5oYXNNZXRob2Qocm91dGUsICdtYXRjaCcsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncm91dGUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhc3NlcnQuaXNUeXBlKHJvdXRlLmhhbmRsZXIsICdvYmplY3QnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXNzZXJ0Lmhhc01ldGhvZChyb3V0ZS5oYW5kbGVyLCAnaGFuZGxlJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZS5oYW5kbGVyJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShyb3V0ZS5tZXRob2QsICdzdHJpbmcnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlLm1ldGhvZCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX3JvdXRlcy5oYXMocm91dGUubWV0aG9kKSkge1xuICAgICAgICAgICAgdGhpcy5fcm91dGVzLnNldChyb3V0ZS5tZXRob2QsIFtdKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBHaXZlIHByZWNlZGVuY2UgdG8gYWxsIG9mIHRoZSBlYXJsaWVyIHJvdXRlcyBieSBhZGRpbmcgdGhpcyBhZGRpdGlvbmFsXG4gICAgICAgIC8vIHJvdXRlIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgICAgICB0aGlzLl9yb3V0ZXMuZ2V0KHJvdXRlLm1ldGhvZCkucHVzaChyb3V0ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXJzIGEgcm91dGUgd2l0aCB0aGUgcm91dGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlfSByb3V0ZSBUaGUgcm91dGUgdG8gdW5yZWdpc3Rlci5cbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyUm91dGUocm91dGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9yb3V0ZXMuaGFzKHJvdXRlLm1ldGhvZCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3VucmVnaXN0ZXItcm91dGUtYnV0LW5vdC1mb3VuZC13aXRoLW1ldGhvZCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHJvdXRlLm1ldGhvZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlSW5kZXggPSB0aGlzLl9yb3V0ZXMuZ2V0KHJvdXRlLm1ldGhvZCkuaW5kZXhPZihyb3V0ZSk7XG4gICAgICAgIGlmIChyb3V0ZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlcy5nZXQocm91dGUubWV0aG9kKS5zcGxpY2Uocm91dGVJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCd1bnJlZ2lzdGVyLXJvdXRlLXJvdXRlLW5vdC1yZWdpc3RlcmVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgeyBSb3V0ZXIgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gQHRzLWlnbm9yZVxudHJ5IHtcbiAgICBzZWxmWyd3b3JrYm94OnJvdXRpbmc6Ni4yLjQnXSAmJiBfKCk7XG59XG5jYXRjaCAoZSkgeyB9XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBOYXZpZ2F0aW9uUm91dGUgfSBmcm9tICcuL05hdmlnYXRpb25Sb3V0ZS5qcyc7XG5pbXBvcnQgeyBSZWdFeHBSb3V0ZSB9IGZyb20gJy4vUmVnRXhwUm91dGUuanMnO1xuaW1wb3J0IHsgcmVnaXN0ZXJSb3V0ZSB9IGZyb20gJy4vcmVnaXN0ZXJSb3V0ZS5qcyc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJy4vUm91dGUuanMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi9Sb3V0ZXIuanMnO1xuaW1wb3J0IHsgc2V0Q2F0Y2hIYW5kbGVyIH0gZnJvbSAnLi9zZXRDYXRjaEhhbmRsZXIuanMnO1xuaW1wb3J0IHsgc2V0RGVmYXVsdEhhbmRsZXIgfSBmcm9tICcuL3NldERlZmF1bHRIYW5kbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEBtb2R1bGUgd29ya2JveC1yb3V0aW5nXG4gKi9cbmV4cG9ydCB7IE5hdmlnYXRpb25Sb3V0ZSwgUmVnRXhwUm91dGUsIHJlZ2lzdGVyUm91dGUsIFJvdXRlLCBSb3V0ZXIsIHNldENhdGNoSGFuZGxlciwgc2V0RGVmYXVsdEhhbmRsZXIsIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICcuL1JvdXRlLmpzJztcbmltcG9ydCB7IFJlZ0V4cFJvdXRlIH0gZnJvbSAnLi9SZWdFeHBSb3V0ZS5qcyc7XG5pbXBvcnQgeyBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBFYXNpbHkgcmVnaXN0ZXIgYSBSZWdFeHAsIHN0cmluZywgb3IgZnVuY3Rpb24gd2l0aCBhIGNhY2hpbmdcbiAqIHN0cmF0ZWd5IHRvIGEgc2luZ2xldG9uIFJvdXRlciBpbnN0YW5jZS5cbiAqXG4gKiBUaGlzIG1ldGhvZCB3aWxsIGdlbmVyYXRlIGEgUm91dGUgZm9yIHlvdSBpZiBuZWVkZWQgYW5kXG4gKiBjYWxsIFtyZWdpc3RlclJvdXRlKClde0BsaW5rIG1vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGVyI3JlZ2lzdGVyUm91dGV9LlxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfHN0cmluZ3xtb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlfm1hdGNoQ2FsbGJhY2t8bW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX0gY2FwdHVyZVxuICogSWYgdGhlIGNhcHR1cmUgcGFyYW0gaXMgYSBgUm91dGVgLCBhbGwgb3RoZXIgYXJndW1lbnRzIHdpbGwgYmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IFtoYW5kbGVyXSBBIGNhbGxiYWNrXG4gKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLiBUaGlzIHBhcmFtZXRlclxuICogaXMgcmVxdWlyZWQgaWYgYGNhcHR1cmVgIGlzIG5vdCBhIGBSb3V0ZWAgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIFRoZSBIVFRQIG1ldGhvZCB0byBtYXRjaCB0aGUgUm91dGVcbiAqIGFnYWluc3QuXG4gKiBAcmV0dXJuIHttb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlfSBUaGUgZ2VuZXJhdGVkIGBSb3V0ZWAoVXNlZnVsIGZvclxuICogdW5yZWdpc3RlcmluZykuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXJvdXRpbmdcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJSb3V0ZShjYXB0dXJlLCBoYW5kbGVyLCBtZXRob2QpIHtcbiAgICBsZXQgcm91dGU7XG4gICAgaWYgKHR5cGVvZiBjYXB0dXJlID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCBjYXB0dXJlVXJsID0gbmV3IFVSTChjYXB0dXJlLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICghKGNhcHR1cmUuc3RhcnRzV2l0aCgnLycpIHx8IGNhcHR1cmUuc3RhcnRzV2l0aCgnaHR0cCcpKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2ludmFsaWQtc3RyaW5nJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnY2FwdHVyZScsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSB3YW50IHRvIGNoZWNrIGlmIEV4cHJlc3Mtc3R5bGUgd2lsZGNhcmRzIGFyZSBpbiB0aGUgcGF0aG5hbWUgb25seS5cbiAgICAgICAgICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIGxvZyBtZXNzYWdlIGluIHY0LlxuICAgICAgICAgICAgY29uc3QgdmFsdWVUb0NoZWNrID0gY2FwdHVyZS5zdGFydHNXaXRoKCdodHRwJykgP1xuICAgICAgICAgICAgICAgIGNhcHR1cmVVcmwucGF0aG5hbWUgOiBjYXB0dXJlO1xuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9waWxsYXJqcy9wYXRoLXRvLXJlZ2V4cCNwYXJhbWV0ZXJzXG4gICAgICAgICAgICBjb25zdCB3aWxkY2FyZHMgPSAnWyo6PytdJztcbiAgICAgICAgICAgIGlmICgobmV3IFJlZ0V4cChgJHt3aWxkY2FyZHN9YCkpLmV4ZWModmFsdWVUb0NoZWNrKSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlICckY2FwdHVyZScgcGFyYW1ldGVyIGNvbnRhaW5zIGFuIEV4cHJlc3Mtc3R5bGUgd2lsZGNhcmQgYCArXG4gICAgICAgICAgICAgICAgICAgIGBjaGFyYWN0ZXIgKCR7d2lsZGNhcmRzfSkuIFN0cmluZ3MgYXJlIG5vdyBhbHdheXMgaW50ZXJwcmV0ZWQgYXMgYCArXG4gICAgICAgICAgICAgICAgICAgIGBleGFjdCBtYXRjaGVzOyB1c2UgYSBSZWdFeHAgZm9yIHBhcnRpYWwgb3Igd2lsZGNhcmQgbWF0Y2hlcy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaENhbGxiYWNrID0gKHsgdXJsIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh1cmwucGF0aG5hbWUgPT09IGNhcHR1cmVVcmwucGF0aG5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICh1cmwub3JpZ2luICE9PSBjYXB0dXJlVXJsLm9yaWdpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGAke2NhcHR1cmV9IG9ubHkgcGFydGlhbGx5IG1hdGNoZXMgdGhlIGNyb3NzLW9yaWdpbiBVUkwgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt1cmwudG9TdHJpbmcoKX0uIFRoaXMgcm91dGUgd2lsbCBvbmx5IGhhbmRsZSBjcm9zcy1vcmlnaW4gcmVxdWVzdHMgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgaWYgdGhleSBtYXRjaCB0aGUgZW50aXJlIFVSTC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXJsLmhyZWYgPT09IGNhcHR1cmVVcmwuaHJlZjtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSWYgYGNhcHR1cmVgIGlzIGEgc3RyaW5nIHRoZW4gYGhhbmRsZXJgIGFuZCBgbWV0aG9kYCBtdXN0IGJlIHByZXNlbnQuXG4gICAgICAgIHJvdXRlID0gbmV3IFJvdXRlKG1hdGNoQ2FsbGJhY2ssIGhhbmRsZXIsIG1ldGhvZCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNhcHR1cmUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgLy8gSWYgYGNhcHR1cmVgIGlzIGEgYFJlZ0V4cGAgdGhlbiBgaGFuZGxlcmAgYW5kIGBtZXRob2RgIG11c3QgYmUgcHJlc2VudC5cbiAgICAgICAgcm91dGUgPSBuZXcgUmVnRXhwUm91dGUoY2FwdHVyZSwgaGFuZGxlciwgbWV0aG9kKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNhcHR1cmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gSWYgYGNhcHR1cmVgIGlzIGEgZnVuY3Rpb24gdGhlbiBgaGFuZGxlcmAgYW5kIGBtZXRob2RgIG11c3QgYmUgcHJlc2VudC5cbiAgICAgICAgcm91dGUgPSBuZXcgUm91dGUoY2FwdHVyZSwgaGFuZGxlciwgbWV0aG9kKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2FwdHVyZSBpbnN0YW5jZW9mIFJvdXRlKSB7XG4gICAgICAgIHJvdXRlID0gY2FwdHVyZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3Vuc3VwcG9ydGVkLXJvdXRlLXR5cGUnLCB7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICBwYXJhbU5hbWU6ICdjYXB0dXJlJyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGRlZmF1bHRSb3V0ZXIgPSBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIoKTtcbiAgICBkZWZhdWx0Um91dGVyLnJlZ2lzdGVyUm91dGUocm91dGUpO1xuICAgIHJldHVybiByb3V0ZTtcbn1cbmV4cG9ydCB7IHJlZ2lzdGVyUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIElmIGEgUm91dGUgdGhyb3dzIGFuIGVycm9yIHdoaWxlIGhhbmRsaW5nIGEgcmVxdWVzdCwgdGhpcyBgaGFuZGxlcmBcbiAqIHdpbGwgYmUgY2FsbGVkIGFuZCBnaXZlbiBhIGNoYW5jZSB0byBwcm92aWRlIGEgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1yb3V0aW5nXG4gKi9cbmZ1bmN0aW9uIHNldENhdGNoSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgY29uc3QgZGVmYXVsdFJvdXRlciA9IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlcigpO1xuICAgIGRlZmF1bHRSb3V0ZXIuc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXIpO1xufVxuZXhwb3J0IHsgc2V0Q2F0Y2hIYW5kbGVyIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBEZWZpbmUgYSBkZWZhdWx0IGBoYW5kbGVyYCB0aGF0J3MgY2FsbGVkIHdoZW4gbm8gcm91dGVzIGV4cGxpY2l0bHlcbiAqIG1hdGNoIHRoZSBpbmNvbWluZyByZXF1ZXN0LlxuICpcbiAqIFdpdGhvdXQgYSBkZWZhdWx0IGhhbmRsZXIsIHVubWF0Y2hlZCByZXF1ZXN0cyB3aWxsIGdvIGFnYWluc3QgdGhlXG4gKiBuZXR3b3JrIGFzIGlmIHRoZXJlIHdlcmUgbm8gc2VydmljZSB3b3JrZXIgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXJvdXRpbmdcbiAqL1xuZnVuY3Rpb24gc2V0RGVmYXVsdEhhbmRsZXIoaGFuZGxlcikge1xuICAgIGNvbnN0IGRlZmF1bHRSb3V0ZXIgPSBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIoKTtcbiAgICBkZWZhdWx0Um91dGVyLnNldERlZmF1bHRIYW5kbGVyKGhhbmRsZXIpO1xufVxuZXhwb3J0IHsgc2V0RGVmYXVsdEhhbmRsZXIgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBIVFRQIG1ldGhvZCwgJ0dFVCcsIHVzZWQgd2hlbiB0aGVyZSdzIG5vIHNwZWNpZmljIG1ldGhvZFxuICogY29uZmlndXJlZCBmb3IgYSByb3V0ZS5cbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0TWV0aG9kID0gJ0dFVCc7XG4vKipcbiAqIFRoZSBsaXN0IG9mIHZhbGlkIEhUVFAgbWV0aG9kcyBhc3NvY2lhdGVkIHdpdGggcmVxdWVzdHMgdGhhdCBjb3VsZCBiZSByb3V0ZWQuXG4gKlxuICogQHR5cGUge0FycmF5PHN0cmluZz59XG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkTWV0aG9kcyA9IFtcbiAgICAnREVMRVRFJyxcbiAgICAnR0VUJyxcbiAgICAnSEVBRCcsXG4gICAgJ1BBVENIJyxcbiAgICAnUE9TVCcsXG4gICAgJ1BVVCcsXG5dO1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vUm91dGVyLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xubGV0IGRlZmF1bHRSb3V0ZXI7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIHNpbmdsZXRvbiBSb3V0ZXIgaW5zdGFuY2UgaWYgb25lIGRvZXMgbm90IGV4aXN0LiBJZiBvbmVcbiAqIGRvZXMgYWxyZWFkeSBleGlzdCwgdGhhdCBpbnN0YW5jZSBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybiB7Um91dGVyfVxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyID0gKCkgPT4ge1xuICAgIGlmICghZGVmYXVsdFJvdXRlcikge1xuICAgICAgICBkZWZhdWx0Um91dGVyID0gbmV3IFJvdXRlcigpO1xuICAgICAgICAvLyBUaGUgaGVscGVycyB0aGF0IHVzZSB0aGUgZGVmYXVsdCBSb3V0ZXIgYXNzdW1lIHRoZXNlIGxpc3RlbmVycyBleGlzdC5cbiAgICAgICAgZGVmYXVsdFJvdXRlci5hZGRGZXRjaExpc3RlbmVyKCk7XG4gICAgICAgIGRlZmF1bHRSb3V0ZXIuYWRkQ2FjaGVMaXN0ZW5lcigpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFJvdXRlcjtcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCl8T2JqZWN0fSBoYW5kbGVyIEVpdGhlciBhIGZ1bmN0aW9uLCBvciBhbiBvYmplY3Qgd2l0aCBhXG4gKiAnaGFuZGxlJyBtZXRob2QuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGEgaGFuZGxlIG1ldGhvZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSGFuZGxlciA9IChoYW5kbGVyKSA9PiB7XG4gICAgaWYgKGhhbmRsZXIgJiYgdHlwZW9mIGhhbmRsZXIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaGFzTWV0aG9kKGhhbmRsZXIsICdoYW5kbGUnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGUnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2hhbmRsZXInLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShoYW5kbGVyLCAnZnVuY3Rpb24nLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGUnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2hhbmRsZXInLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgaGFuZGxlOiBoYW5kbGVyIH07XG4gICAgfVxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IFN0cmF0ZWd5IH0gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQgeyBtZXNzYWdlcyB9IGZyb20gJy4vdXRpbHMvbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYSBbY2FjaGUtZmlyc3Rde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvaW5zdGFudC1hbmQtb2ZmbGluZS9vZmZsaW5lLWNvb2tib29rLyNjYWNoZS1mYWxsaW5nLWJhY2stdG8tbmV0d29ya31cbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogQSBjYWNoZSBmaXJzdCBzdHJhdGVneSBpcyB1c2VmdWwgZm9yIGFzc2V0cyB0aGF0IGhhdmUgYmVlbiByZXZpc2lvbmVkLFxuICogc3VjaCBhcyBVUkxzIGxpa2UgYC9zdHlsZXMvZXhhbXBsZS5hOGY1ZjEuY3NzYCwgc2luY2UgdGhleVxuICogY2FuIGJlIGNhY2hlZCBmb3IgbG9uZyBwZXJpb2RzIG9mIHRpbWUuXG4gKlxuICogSWYgdGhlIG5ldHdvcmsgcmVxdWVzdCBmYWlscywgYW5kIHRoZXJlIGlzIG5vIGNhY2hlIG1hdGNoLCB0aGlzIHdpbGwgdGhyb3dcbiAqIGEgYFdvcmtib3hFcnJvcmAgZXhjZXB0aW9uLlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIENhY2hlRmlyc3QgZXh0ZW5kcyBTdHJhdGVneSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlciBUaGUgZXZlbnQgdGhhdFxuICAgICAqICAgICB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAgICovXG4gICAgYXN5bmMgX2hhbmRsZShyZXF1ZXN0LCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IGxvZ3MgPSBbXTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ21ha2VSZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuY2FjaGVNYXRjaChyZXF1ZXN0KTtcbiAgICAgICAgbGV0IGVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgTm8gcmVzcG9uc2UgZm91bmQgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgY2FjaGUuIGAgK1xuICAgICAgICAgICAgICAgICAgICBgV2lsbCByZXNwb25kIHdpdGggYSBuZXR3b3JrIHJlcXVlc3QuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5mZXRjaEFuZENhY2hlUHV0KHJlcXVlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dzLnB1c2goYEdvdCByZXNwb25zZSBmcm9tIG5ldHdvcmsuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2dzLnB1c2goYFVuYWJsZSB0byBnZXQgYSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9JyBjYWNoZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCByZXF1ZXN0KSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxvZyBvZiBsb2dzKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhsb2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywgeyB1cmw6IHJlcXVlc3QudXJsLCBlcnJvciB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuZXhwb3J0IHsgQ2FjaGVGaXJzdCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgU3RyYXRlZ3kgfSBmcm9tICcuL1N0cmF0ZWd5LmpzJztcbmltcG9ydCB7IG1lc3NhZ2VzIH0gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhXG4gKiBbY2FjaGUtb25seV17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy9pbnN0YW50LWFuZC1vZmZsaW5lL29mZmxpbmUtY29va2Jvb2svI2NhY2hlLW9ubHl9XG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZnVsIGlmIHlvdSB3YW50IHRvIHRha2UgYWR2YW50YWdlIG9mIGFueVxuICogW1dvcmtib3ggcGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9LlxuICpcbiAqIElmIHRoZXJlIGlzIG5vIGNhY2hlIG1hdGNoLCB0aGlzIHdpbGwgdGhyb3cgYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQGV4dGVuZHMgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgQ2FjaGVPbmx5IGV4dGVuZHMgU3RyYXRlZ3kge1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gcmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgICAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV2ZW50IHRoYXRcbiAgICAgKiAgICAgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqL1xuICAgIGFzeW5jIF9oYW5kbGUocmVxdWVzdCwgaGFuZGxlcikge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnbWFrZVJlcXVlc3QnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JlcXVlc3QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQobWVzc2FnZXMuc3RyYXRlZ3lTdGFydCh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHJlcXVlc3QpKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nIGAgK1xuICAgICAgICAgICAgICAgICAgICBgY2FjaGUuYCk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYE5vIHJlc3BvbnNlIGZvdW5kIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nIGNhY2hlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7IHVybDogcmVxdWVzdC51cmwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn1cbmV4cG9ydCB7IENhY2hlT25seSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbiB9IGZyb20gJy4vcGx1Z2lucy9jYWNoZU9rQW5kT3BhcXVlUGx1Z2luLmpzJztcbmltcG9ydCB7IFN0cmF0ZWd5IH0gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQgeyBtZXNzYWdlcyB9IGZyb20gJy4vdXRpbHMvbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYVxuICogW25ldHdvcmsgZmlyc3Rde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvaW5zdGFudC1hbmQtb2ZmbGluZS9vZmZsaW5lLWNvb2tib29rLyNuZXR3b3JrLWZhbGxpbmctYmFjay10by1jYWNoZX1cbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhpcyBzdHJhdGVneSB3aWxsIGNhY2hlIHJlc3BvbnNlcyB3aXRoIGEgMjAwIHN0YXR1cyBjb2RlIGFzXG4gKiB3ZWxsIGFzIFtvcGFxdWUgcmVzcG9uc2VzXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvaGFuZGxlLXRoaXJkLXBhcnR5LXJlcXVlc3RzfS5cbiAqIE9wYXF1ZSByZXNwb25zZXMgYXJlIGFyZSBjcm9zcy1vcmlnaW4gcmVxdWVzdHMgd2hlcmUgdGhlIHJlc3BvbnNlIGRvZXNuJ3RcbiAqIHN1cHBvcnQgW0NPUlNde0BsaW5rIGh0dHBzOi8vZW5hYmxlLWNvcnMub3JnL30uXG4gKlxuICogSWYgdGhlIG5ldHdvcmsgcmVxdWVzdCBmYWlscywgYW5kIHRoZXJlIGlzIG5vIGNhY2hlIG1hdGNoLCB0aGlzIHdpbGwgdGhyb3dcbiAqIGEgYFdvcmtib3hFcnJvcmAgZXhjZXB0aW9uLlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIE5ldHdvcmtGaXJzdCBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTmFtZV0gQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICAgKiBbd29ya2JveC1jb3JlXXtAbGluayBtb2R1bGU6d29ya2JveC1jb3JlLmNhY2hlTmFtZXN9LlxuICAgICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10gW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgICAqIHRvIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoaXMgY2FjaGluZyBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZmV0Y2hPcHRpb25zXSBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAgICogb2YgW25vbi1uYXZpZ2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE3OTYpXG4gICAgICogYGZldGNoKClgIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMubWF0Y2hPcHRpb25zXSBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm5ldHdvcmtUaW1lb3V0U2Vjb25kc10gSWYgc2V0LCBhbnkgbmV0d29yayByZXF1ZXN0c1xuICAgICAqIHRoYXQgZmFpbCB0byByZXNwb25kIHdpdGhpbiB0aGUgdGltZW91dCB3aWxsIGZhbGxiYWNrIHRvIHRoZSBjYWNoZS5cbiAgICAgKlxuICAgICAqIFRoaXMgb3B0aW9uIGNhbiBiZSB1c2VkIHRvIGNvbWJhdFxuICAgICAqIFwiW2xpZS1maV17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy9wZXJmb3JtYW5jZS9wb29yLWNvbm5lY3Rpdml0eS8jbGllLWZpfVwiXG4gICAgICogc2NlbmFyaW9zLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgLy8gSWYgdGhpcyBpbnN0YW5jZSBjb250YWlucyBubyBwbHVnaW5zIHdpdGggYSAnY2FjaGVXaWxsVXBkYXRlJyBjYWxsYmFjayxcbiAgICAgICAgLy8gcHJlcGVuZCB0aGUgYGNhY2hlT2tBbmRPcGFxdWVQbHVnaW5gIHBsdWdpbiB0byB0aGUgcGx1Z2lucyBsaXN0LlxuICAgICAgICBpZiAoIXRoaXMucGx1Z2lucy5zb21lKChwKSA9PiAnY2FjaGVXaWxsVXBkYXRlJyBpbiBwKSkge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW5zLnVuc2hpZnQoY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzID0gb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHMgfHwgMDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNUeXBlKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcywgJ251bWJlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnbmV0d29ya1RpbWVvdXRTZWNvbmRzJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IHJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBfaGFuZGxlKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgbG9ncyA9IFtdO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnaGFuZGxlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdtYWtlUmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBsZXQgdGltZW91dElkO1xuICAgICAgICBpZiAodGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzKSB7XG4gICAgICAgICAgICBjb25zdCB7IGlkLCBwcm9taXNlIH0gPSB0aGlzLl9nZXRUaW1lb3V0UHJvbWlzZSh7IHJlcXVlc3QsIGxvZ3MsIGhhbmRsZXIgfSk7XG4gICAgICAgICAgICB0aW1lb3V0SWQgPSBpZDtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV0d29ya1Byb21pc2UgPSB0aGlzLl9nZXROZXR3b3JrUHJvbWlzZSh7IHRpbWVvdXRJZCwgcmVxdWVzdCwgbG9ncywgaGFuZGxlciB9KTtcbiAgICAgICAgcHJvbWlzZXMucHVzaChuZXR3b3JrUHJvbWlzZSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci53YWl0VW50aWwoKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIC8vIFByb21pc2UucmFjZSgpIHdpbGwgcmVzb2x2ZSBhcyBzb29uIGFzIHRoZSBmaXJzdCBwcm9taXNlIHJlc29sdmVzLlxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGhhbmRsZXIud2FpdFVudGlsKFByb21pc2UucmFjZShwcm9taXNlcykpIHx8XG4gICAgICAgICAgICAgICAgLy8gSWYgUHJvbWlzZS5yYWNlKCkgcmVzb2x2ZWQgd2l0aCBudWxsLCBpdCBtaWdodCBiZSBkdWUgdG8gYSBuZXR3b3JrXG4gICAgICAgICAgICAgICAgLy8gdGltZW91dCArIGEgY2FjaGUgbWlzcy4gSWYgdGhhdCB3ZXJlIHRvIGhhcHBlbiwgd2UnZCByYXRoZXIgd2FpdCB1bnRpbFxuICAgICAgICAgICAgICAgIC8vIHRoZSBuZXR3b3JrUHJvbWlzZSByZXNvbHZlcyBpbnN0ZWFkIG9mIHJldHVybmluZyBudWxsLlxuICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCBpdCdzIGZpbmUgdG8gYXdhaXQgYW4gYWxyZWFkeS1yZXNvbHZlZCBwcm9taXNlLCBzbyB3ZSBkb24ndFxuICAgICAgICAgICAgICAgIC8vIGhhdmUgdG8gY2hlY2sgdG8gc2VlIGlmIGl0J3Mgc3RpbGwgXCJpbiBmbGlnaHRcIi5cbiAgICAgICAgICAgICAgICBhd2FpdCBuZXR3b3JrUHJvbWlzZTtcbiAgICAgICAgfSkoKSk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQobWVzc2FnZXMuc3RyYXRlZ3lTdGFydCh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHJlcXVlc3QpKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbG9nIG9mIGxvZ3MpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGxvZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7IHVybDogcmVxdWVzdC51cmwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAgICogQHBhcmFtIHtBcnJheX0gb3B0aW9ucy5sb2dzIEEgcmVmZXJlbmNlIHRvIHRoZSBsb2dzIGFycmF5XG4gICAgICogQHBhcmFtIHtFdmVudH0gb3B0aW9ucy5ldmVudFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0VGltZW91dFByb21pc2UoeyByZXF1ZXN0LCBsb2dzLCBoYW5kbGVyIH0pIHtcbiAgICAgICAgbGV0IHRpbWVvdXRJZDtcbiAgICAgICAgY29uc3QgdGltZW91dFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb25OZXR3b3JrVGltZW91dCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dzLnB1c2goYFRpbWluZyBvdXQgdGhlIG5ldHdvcmsgcmVzcG9uc2UgYXQgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHN9IHNlY29uZHMuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoYXdhaXQgaGFuZGxlci5jYWNoZU1hdGNoKHJlcXVlc3QpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KG9uTmV0d29ya1RpbWVvdXQsIHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcyAqIDEwMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb21pc2U6IHRpbWVvdXRQcm9taXNlLFxuICAgICAgICAgICAgaWQ6IHRpbWVvdXRJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcnx1bmRlZmluZWR9IG9wdGlvbnMudGltZW91dElkXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3RcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zLmxvZ3MgQSByZWZlcmVuY2UgdG8gdGhlIGxvZ3MgQXJyYXkuXG4gICAgICogQHBhcmFtIHtFdmVudH0gb3B0aW9ucy5ldmVudFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBfZ2V0TmV0d29ya1Byb21pc2UoeyB0aW1lb3V0SWQsIHJlcXVlc3QsIGxvZ3MsIGhhbmRsZXIgfSkge1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5mZXRjaEFuZENhY2hlUHV0KHJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChmZXRjaEVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZmV0Y2hFcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBmZXRjaEVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBsb2dzLnB1c2goYEdvdCByZXNwb25zZSBmcm9tIG5ldHdvcmsuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dzLnB1c2goYFVuYWJsZSB0byBnZXQgYSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrLiBXaWxsIHJlc3BvbmQgYCArXG4gICAgICAgICAgICAgICAgICAgIGB3aXRoIGEgY2FjaGVkIHJlc3BvbnNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciB8fCAhcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5jYWNoZU1hdGNoKHJlcXVlc3QpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9J2AgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCBjYWNoZS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgTm8gcmVzcG9uc2UgZm91bmQgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgY2FjaGUuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59XG5leHBvcnQgeyBOZXR3b3JrRmlyc3QgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL3RpbWVvdXQuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHsgbWVzc2FnZXMgfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGFcbiAqIFtuZXR3b3JrLW9ubHlde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvaW5zdGFudC1hbmQtb2ZmbGluZS9vZmZsaW5lLWNvb2tib29rLyNuZXR3b3JrLW9ubHl9XG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZnVsIGlmIHlvdSB3YW50IHRvIHRha2UgYWR2YW50YWdlIG9mIGFueVxuICogW1dvcmtib3ggcGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9LlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIHRoaXMgd2lsbCB0aHJvdyBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBOZXR3b3JrT25seSBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAgICogW2Bpbml0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVycylcbiAgICAgKiBvZiBbbm9uLW5hdmlnYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTc5NilcbiAgICAgKiBgZmV0Y2goKWAgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHNdIElmIHNldCwgYW55IG5ldHdvcmsgcmVxdWVzdHNcbiAgICAgKiB0aGF0IGZhaWwgdG8gcmVzcG9uZCB3aXRoaW4gdGhlIHRpbWVvdXQgd2lsbCByZXN1bHQgaW4gYSBuZXR3b3JrIGVycm9yLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzID0gb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHMgfHwgMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlciBUaGUgZXZlbnQgdGhhdFxuICAgICAqICAgICB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAgICovXG4gICAgYXN5bmMgX2hhbmRsZShyZXF1ZXN0LCBoYW5kbGVyKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdfaGFuZGxlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbaGFuZGxlci5mZXRjaChyZXF1ZXN0KV07XG4gICAgICAgICAgICBpZiAodGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZW91dFByb21pc2UgPSB0aW1lb3V0KHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcyAqIDEwMDApO1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGltZW91dFByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLnJhY2UocHJvbWlzZXMpO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGltZWQgb3V0IHRoZSBuZXR3b3JrIHJlc3BvbnNlIGFmdGVyIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHN9IHNlY29uZHMuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChtZXNzYWdlcy5zdHJhdGVneVN0YXJ0KHRoaXMuY29uc3RydWN0b3IubmFtZSwgcmVxdWVzdCkpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgR290IHJlc3BvbnNlIGZyb20gbmV0d29yay5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFVuYWJsZSB0byBnZXQgYSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywgeyB1cmw6IHJlcXVlc3QudXJsLCBlcnJvciB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuZXhwb3J0IHsgTmV0d29ya09ubHkgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IGNhY2hlT2tBbmRPcGFxdWVQbHVnaW4gfSBmcm9tICcuL3BsdWdpbnMvY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbi5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHsgbWVzc2FnZXMgfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGFcbiAqIFtzdGFsZS13aGlsZS1yZXZhbGlkYXRlXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL2luc3RhbnQtYW5kLW9mZmxpbmUvb2ZmbGluZS1jb29rYm9vay8jc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZX1cbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogUmVzb3VyY2VzIGFyZSByZXF1ZXN0ZWQgZnJvbSBib3RoIHRoZSBjYWNoZSBhbmQgdGhlIG5ldHdvcmsgaW4gcGFyYWxsZWwuXG4gKiBUaGUgc3RyYXRlZ3kgd2lsbCByZXNwb25kIHdpdGggdGhlIGNhY2hlZCB2ZXJzaW9uIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlXG4gKiB3YWl0IGZvciB0aGUgbmV0d29yayByZXNwb25zZS4gVGhlIGNhY2hlIGlzIHVwZGF0ZWQgd2l0aCB0aGUgbmV0d29yayByZXNwb25zZVxuICogd2l0aCBlYWNoIHN1Y2Nlc3NmdWwgcmVxdWVzdC5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGlzIHN0cmF0ZWd5IHdpbGwgY2FjaGUgcmVzcG9uc2VzIHdpdGggYSAyMDAgc3RhdHVzIGNvZGUgYXNcbiAqIHdlbGwgYXMgW29wYXF1ZSByZXNwb25zZXNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy9oYW5kbGUtdGhpcmQtcGFydHktcmVxdWVzdHN9LlxuICogT3BhcXVlIHJlc3BvbnNlcyBhcmUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIHdoZXJlIHRoZSByZXNwb25zZSBkb2Vzbid0XG4gKiBzdXBwb3J0IFtDT1JTXXtAbGluayBodHRwczovL2VuYWJsZS1jb3JzLm9yZy99LlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIGFuZCB0aGVyZSBpcyBubyBjYWNoZSBtYXRjaCwgdGhpcyB3aWxsIHRocm93XG4gKiBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTmFtZV0gQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICAgKiBbd29ya2JveC1jb3JlXXtAbGluayBtb2R1bGU6d29ya2JveC1jb3JlLmNhY2hlTmFtZXN9LlxuICAgICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10gW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgICAqIHRvIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoaXMgY2FjaGluZyBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZmV0Y2hPcHRpb25zXSBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAgICogb2YgW25vbi1uYXZpZ2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE3OTYpXG4gICAgICogYGZldGNoKClgIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMubWF0Y2hPcHRpb25zXSBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnMpXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICAvLyBJZiB0aGlzIGluc3RhbmNlIGNvbnRhaW5zIG5vIHBsdWdpbnMgd2l0aCBhICdjYWNoZVdpbGxVcGRhdGUnIGNhbGxiYWNrLFxuICAgICAgICAvLyBwcmVwZW5kIHRoZSBgY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbmAgcGx1Z2luIHRvIHRoZSBwbHVnaW5zIGxpc3QuXG4gICAgICAgIGlmICghdGhpcy5wbHVnaW5zLnNvbWUoKHApID0+ICdjYWNoZVdpbGxVcGRhdGUnIGluIHApKSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbnMudW5zaGlmdChjYWNoZU9rQW5kT3BhcXVlUGx1Z2luKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IHJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBfaGFuZGxlKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgbG9ncyA9IFtdO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnaGFuZGxlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZldGNoQW5kQ2FjaGVQcm9taXNlID0gaGFuZGxlclxuICAgICAgICAgICAgLmZldGNoQW5kQ2FjaGVQdXQocmVxdWVzdClcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBTd2FsbG93IHRoaXMgZXJyb3IgYmVjYXVzZSBhICduby1yZXNwb25zZScgZXJyb3Igd2lsbCBiZSB0aHJvd24gaW5cbiAgICAgICAgICAgIC8vIG1haW4gaGFuZGxlciByZXR1cm4gZmxvdy4gVGhpcyB3aWxsIGJlIGluIHRoZSBgd2FpdFVudGlsKClgIGZsb3cuXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCk7XG4gICAgICAgIGxldCBlcnJvcjtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfSdgICtcbiAgICAgICAgICAgICAgICAgICAgYCBjYWNoZS4gV2lsbCB1cGRhdGUgd2l0aCB0aGUgbmV0d29yayByZXNwb25zZSBpbiB0aGUgYmFja2dyb3VuZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBObyByZXNwb25zZSBmb3VuZCBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9JyBjYWNoZS4gYCArXG4gICAgICAgICAgICAgICAgICAgIGBXaWxsIHdhaXQgZm9yIHRoZSBuZXR3b3JrIHJlc3BvbnNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBOT1RFKHBoaWxpcHdhbHRvbik6IFJlYWxseSBhbm5veWluZyB0aGF0IHdlIGhhdmUgdG8gdHlwZSBjYXN0IGhlcmUuXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yMDAwNlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hBbmRDYWNoZVByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCByZXF1ZXN0KSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxvZyBvZiBsb2dzKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhsb2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywgeyB1cmw6IHJlcXVlc3QudXJsLCBlcnJvciB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuZXhwb3J0IHsgU3RhbGVXaGlsZVJldmFsaWRhdGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGNhY2hlTmFtZXMgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgU3RyYXRlZ3lIYW5kbGVyIH0gZnJvbSAnLi9TdHJhdGVneUhhbmRsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQW4gYWJzdHJhY3QgYmFzZSBjbGFzcyB0aGF0IGFsbCBvdGhlciBzdHJhdGVneSBjbGFzc2VzIG11c3QgZXh0ZW5kIGZyb206XG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgU3RyYXRlZ3kge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHN0cmF0ZWd5IGFuZCBzZXRzIGFsbCBkb2N1bWVudGVkIG9wdGlvblxuICAgICAqIHByb3BlcnRpZXMgYXMgcHVibGljIGluc3RhbmNlIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBOb3RlOiBpZiBhIGN1c3RvbSBzdHJhdGVneSBjbGFzcyBleHRlbmRzIHRoZSBiYXNlIFN0cmF0ZWd5IGNsYXNzIGFuZCBkb2VzXG4gICAgICogbm90IG5lZWQgbW9yZSB0aGFuIHRoZXNlIHByb3BlcnRpZXMsIGl0IGRvZXMgbm90IG5lZWQgdG8gZGVmaW5lIGl0cyBvd25cbiAgICAgKiBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byB0aGUgY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICAgKiBbd29ya2JveC1jb3JlXXtAbGluayBtb2R1bGU6d29ya2JveC1jb3JlLmNhY2hlTmFtZXN9LlxuICAgICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10gW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgICAqIHRvIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoaXMgY2FjaGluZyBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZmV0Y2hPcHRpb25zXSBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAgICogb2YgW25vbi1uYXZpZ2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE3OTYpXG4gICAgICogYGZldGNoKClgIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMubWF0Y2hPcHRpb25zXSBUaGVcbiAgICAgKiBbYENhY2hlUXVlcnlPcHRpb25zYF17QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnN9XG4gICAgICogZm9yIGFueSBgY2FjaGUubWF0Y2goKWAgb3IgYGNhY2hlLnB1dCgpYCBjYWxscyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgICAgICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gdGhlIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAgICAgICAqIFt3b3JrYm94LWNvcmVde0BsaW5rIG1vZHVsZTp3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNhY2hlTmFtZSA9IGNhY2hlTmFtZXMuZ2V0UnVudGltZU5hbWUob3B0aW9ucy5jYWNoZU5hbWUpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGxpc3RcbiAgICAgICAgICogW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgICAgICAgKiB1c2VkIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTxPYmplY3Q+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wbHVnaW5zID0gb3B0aW9ucy5wbHVnaW5zIHx8IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICAgICAgICogW2Bpbml0YF17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVyc31cbiAgICAgICAgICogb2YgYWxsIGZldGNoKCkgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mZXRjaE9wdGlvbnMgPSBvcHRpb25zLmZldGNoT3B0aW9ucztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZVxuICAgICAgICAgKiBbYENhY2hlUXVlcnlPcHRpb25zYF17QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnN9XG4gICAgICAgICAqIGZvciBhbnkgYGNhY2hlLm1hdGNoKClgIG9yIGBjYWNoZS5wdXQoKWAgY2FsbHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tYXRjaE9wdGlvbnMgPSBvcHRpb25zLm1hdGNoT3B0aW9ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybSBhIHJlcXVlc3Qgc3RyYXRlZ3kgYW5kIHJldHVybnMgYSBgUHJvbWlzZWAgdGhhdCB3aWxsIHJlc29sdmUgd2l0aFxuICAgICAqIGEgYFJlc3BvbnNlYCwgaW52b2tpbmcgYWxsIHJlbGV2YW50IHBsdWdpbiBjYWxsYmFja3MuXG4gICAgICpcbiAgICAgKiBXaGVuIGEgc3RyYXRlZ3kgaW5zdGFuY2UgaXMgcmVnaXN0ZXJlZCB3aXRoIGEgV29ya2JveFxuICAgICAqIFtyb3V0ZV17QGxpbmsgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX0sIHRoaXMgbWV0aG9kIGlzIGF1dG9tYXRpY2FsbHlcbiAgICAgKiBjYWxsZWQgd2hlbiB0aGUgcm91dGUgbWF0Y2hlcy5cbiAgICAgKlxuICAgICAqIEFsdGVybmF0aXZlbHksIHRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIGluIGEgc3RhbmRhbG9uZSBgRmV0Y2hFdmVudGBcbiAgICAgKiBsaXN0ZW5lciBieSBwYXNzaW5nIGl0IHRvIGBldmVudC5yZXNwb25kV2l0aCgpYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmV0Y2hFdmVudHxPYmplY3R9IG9wdGlvbnMgQSBgRmV0Y2hFdmVudGAgb3IgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICogICAgIHByb3BlcnRpZXMgbGlzdGVkIGJlbG93LlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhlXG4gICAgICogICAgIHJlcXVlc3QuXG4gICAgICogQHBhcmFtIHtVUkx9IFtvcHRpb25zLnVybF1cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zLnBhcmFtc11cbiAgICAgKi9cbiAgICBoYW5kbGUob3B0aW9ucykge1xuICAgICAgICBjb25zdCBbcmVzcG9uc2VEb25lXSA9IHRoaXMuaGFuZGxlQWxsKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VEb25lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaW1pbGFyIHRvIFtgaGFuZGxlKClgXXtAbGluayBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fmhhbmRsZX0sIGJ1dFxuICAgICAqIGluc3RlYWQgb2YganVzdCByZXR1cm5pbmcgYSBgUHJvbWlzZWAgdGhhdCByZXNvbHZlcyB0byBhIGBSZXNwb25zZWAgaXRcbiAgICAgKiBpdCB3aWxsIHJldHVybiBhbiB0dXBsZSBvZiBbcmVzcG9uc2UsIGRvbmVdIHByb21pc2VzLCB3aGVyZSB0aGUgZm9ybWVyXG4gICAgICogKGByZXNwb25zZWApIGlzIGVxdWl2YWxlbnQgdG8gd2hhdCBgaGFuZGxlKClgIHJldHVybnMsIGFuZCB0aGUgbGF0dGVyIGlzIGFcbiAgICAgKiBQcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uY2UgYW55IHByb21pc2VzIHRoYXQgd2VyZSBhZGRlZCB0b1xuICAgICAqIGBldmVudC53YWl0VW50aWwoKWAgYXMgcGFydCBvZiBwZXJmb3JtaW5nIHRoZSBzdHJhdGVneSBoYXZlIGNvbXBsZXRlZC5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gYXdhaXQgdGhlIGBkb25lYCBwcm9taXNlIHRvIGVuc3VyZSBhbnkgZXh0cmEgd29yayBwZXJmb3JtZWQgYnlcbiAgICAgKiB0aGUgc3RyYXRlZ3kgKHVzdWFsbHkgY2FjaGluZyByZXNwb25zZXMpIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ZldGNoRXZlbnR8T2JqZWN0fSBvcHRpb25zIEEgYEZldGNoRXZlbnRgIG9yIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgICAqICAgICBwcm9wZXJ0aWVzIGxpc3RlZCBiZWxvdy5cbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICAgICAqICAgICByZXF1ZXN0LlxuICAgICAqIEBwYXJhbSB7VVJMfSBbb3B0aW9ucy51cmxdXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5wYXJhbXNdXG4gICAgICogQHJldHVybiB7QXJyYXk8UHJvbWlzZT59IEEgdHVwbGUgb2YgW3Jlc3BvbnNlLCBkb25lXVxuICAgICAqICAgICBwcm9taXNlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGRldGVybWluZSB3aGVuIHRoZSByZXNwb25zZSByZXNvbHZlcyBhc1xuICAgICAqICAgICB3ZWxsIGFzIHdoZW4gdGhlIGhhbmRsZXIgaGFzIGNvbXBsZXRlZCBhbGwgaXRzIHdvcmsuXG4gICAgICovXG4gICAgaGFuZGxlQWxsKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gQWxsb3cgZm9yIGZsZXhpYmxlIG9wdGlvbnMgdG8gYmUgcGFzc2VkLlxuICAgICAgICBpZiAob3B0aW9ucyBpbnN0YW5jZW9mIEZldGNoRXZlbnQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogb3B0aW9ucy5yZXF1ZXN0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudCA9IG9wdGlvbnMuZXZlbnQ7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0eXBlb2Ygb3B0aW9ucy5yZXF1ZXN0ID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICBuZXcgUmVxdWVzdChvcHRpb25zLnJlcXVlc3QpIDpcbiAgICAgICAgICAgIG9wdGlvbnMucmVxdWVzdDtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gJ3BhcmFtcycgaW4gb3B0aW9ucyA/IG9wdGlvbnMucGFyYW1zIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gbmV3IFN0cmF0ZWd5SGFuZGxlcih0aGlzLCB7IGV2ZW50LCByZXF1ZXN0LCBwYXJhbXMgfSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRG9uZSA9IHRoaXMuX2dldFJlc3BvbnNlKGhhbmRsZXIsIHJlcXVlc3QsIGV2ZW50KTtcbiAgICAgICAgY29uc3QgaGFuZGxlckRvbmUgPSB0aGlzLl9hd2FpdENvbXBsZXRlKHJlc3BvbnNlRG9uZSwgaGFuZGxlciwgcmVxdWVzdCwgZXZlbnQpO1xuICAgICAgICAvLyBSZXR1cm4gYW4gYXJyYXkgb2YgcHJvbWlzZXMsIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCBQcm9taXNlLmFsbCgpLlxuICAgICAgICByZXR1cm4gW3Jlc3BvbnNlRG9uZSwgaGFuZGxlckRvbmVdO1xuICAgIH1cbiAgICBhc3luYyBfZ2V0UmVzcG9uc2UoaGFuZGxlciwgcmVxdWVzdCwgZXZlbnQpIHtcbiAgICAgICAgYXdhaXQgaGFuZGxlci5ydW5DYWxsYmFja3MoJ2hhbmRsZXJXaWxsU3RhcnQnLCB7IGV2ZW50LCByZXF1ZXN0IH0pO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2hhbmRsZShyZXF1ZXN0LCBoYW5kbGVyKTtcbiAgICAgICAgICAgIC8vIFRoZSBcIm9mZmljaWFsXCIgU3RyYXRlZ3kgc3ViY2xhc3NlcyBhbGwgdGhyb3cgdGhpcyBlcnJvciBhdXRvbWF0aWNhbGx5LFxuICAgICAgICAgICAgLy8gYnV0IGluIGNhc2UgYSB0aGlyZC1wYXJ0eSBTdHJhdGVneSBkb2Vzbid0LCBlbnN1cmUgdGhhdCB3ZSBoYXZlIGFcbiAgICAgICAgICAgIC8vIGNvbnNpc3RlbnQgZmFpbHVyZSB3aGVuIHRoZXJlJ3Mgbm8gcmVzcG9uc2Ugb3IgYW4gZXJyb3IgcmVzcG9uc2UuXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlIHx8IHJlc3BvbnNlLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHsgdXJsOiByZXF1ZXN0LnVybCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBoYW5kbGVyLml0ZXJhdGVDYWxsYmFja3MoJ2hhbmRsZXJEaWRFcnJvcicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgY2FsbGJhY2soeyBlcnJvciwgZXZlbnQsIHJlcXVlc3QgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgV2hpbGUgcmVzcG9uZGluZyB0byAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9JywgYCArXG4gICAgICAgICAgICAgICAgICAgIGBhbiAke2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci50b1N0cmluZygpIDogJyd9IGVycm9yIG9jY3VycmVkLiBVc2luZyBhIGZhbGxiYWNrIHJlc3BvbnNlIHByb3ZpZGVkIGJ5IGAgK1xuICAgICAgICAgICAgICAgICAgICBgYSBoYW5kbGVyRGlkRXJyb3IgcGx1Z2luLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgaGFuZGxlci5pdGVyYXRlQ2FsbGJhY2tzKCdoYW5kbGVyV2lsbFJlc3BvbmQnKSkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBjYWxsYmFjayh7IGV2ZW50LCByZXF1ZXN0LCByZXNwb25zZSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIGFzeW5jIF9hd2FpdENvbXBsZXRlKHJlc3BvbnNlRG9uZSwgaGFuZGxlciwgcmVxdWVzdCwgZXZlbnQpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlRG9uZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBlcnJvcnMsIGFzIHJlc3BvbnNlIGVycm9ycyBzaG91bGQgYmUgY2F1Z2h0IHZpYSB0aGUgYHJlc3BvbnNlYFxuICAgICAgICAgICAgLy8gcHJvbWlzZSBhYm92ZS4gVGhlIGBkb25lYCBwcm9taXNlIHdpbGwgb25seSB0aHJvdyBmb3IgZXJyb3JzIGluXG4gICAgICAgICAgICAvLyBwcm9taXNlcyBwYXNzZWQgdG8gYGhhbmRsZXIud2FpdFVudGlsKClgLlxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBoYW5kbGVyLnJ1bkNhbGxiYWNrcygnaGFuZGxlckRpZFJlc3BvbmQnLCB7XG4gICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXdhaXQgaGFuZGxlci5kb25lV2FpdGluZygpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoICh3YWl0VW50aWxFcnJvcikge1xuICAgICAgICAgICAgaWYgKHdhaXRVbnRpbEVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IHdhaXRVbnRpbEVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGhhbmRsZXIucnVuQ2FsbGJhY2tzKCdoYW5kbGVyRGlkQ29tcGxldGUnLCB7XG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgfSk7XG4gICAgICAgIGhhbmRsZXIuZGVzdHJveSgpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IHsgU3RyYXRlZ3kgfTtcbi8qKlxuICogQ2xhc3NlcyBleHRlbmRpbmcgdGhlIGBTdHJhdGVneWAgYmFzZWQgY2xhc3Mgc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCxcbiAqIGFuZCBsZXZlcmFnZSB0aGUgW2BoYW5kbGVyYF17QGxpbmsgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9XG4gKiBhcmcgdG8gcGVyZm9ybSBhbGwgZmV0Y2hpbmcgYW5kIGNhY2hlIGxvZ2ljLCB3aGljaCB3aWxsIGVuc3VyZSBhbGwgcmVsZXZhbnRcbiAqIGNhY2hlLCBjYWNoZSBvcHRpb25zLCBmZXRjaCBvcHRpb25zIGFuZCBwbHVnaW5zIGFyZSB1c2VkIChwZXIgdGhlIGN1cnJlbnRcbiAqIHN0cmF0ZWd5IGluc3RhbmNlKS5cbiAqXG4gKiBAbmFtZSBfaGFuZGxlXG4gKiBAaW5zdGFuY2VcbiAqIEBhYnN0cmFjdFxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXJcbiAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKi9cbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgY2FjaGVNYXRjaElnbm9yZVBhcmFtcyB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU1hdGNoSWdub3JlUGFyYW1zLmpzJztcbmltcG9ydCB7IERlZmVycmVkIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL0RlZmVycmVkLmpzJztcbmltcG9ydCB7IGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2V4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzLmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS90aW1lb3V0LmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbmZ1bmN0aW9uIHRvUmVxdWVzdChpbnB1dCkge1xuICAgIHJldHVybiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykgPyBuZXcgUmVxdWVzdChpbnB1dCkgOiBpbnB1dDtcbn1cbi8qKlxuICogQSBjbGFzcyBjcmVhdGVkIGV2ZXJ5IHRpbWUgYSBTdHJhdGVneSBpbnN0YW5jZSBpbnN0YW5jZSBjYWxsc1xuICogW2hhbmRsZSgpXXtAbGluayBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fmhhbmRsZX0gb3JcbiAqIFtoYW5kbGVBbGwoKV17QGxpbmsgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX5oYW5kbGVBbGx9IHRoYXQgd3JhcHMgYWxsIGZldGNoIGFuZFxuICogY2FjaGUgYWN0aW9ucyBhcm91bmQgcGx1Z2luIGNhbGxiYWNrcyBhbmQga2VlcHMgdHJhY2sgb2Ygd2hlbiB0aGUgc3RyYXRlZ3lcbiAqIGlzIFwiZG9uZVwiIChpLmUuIGFsbCBhZGRlZCBgZXZlbnQud2FpdFVudGlsKClgIHByb21pc2VzIGhhdmUgcmVzb2x2ZWQpLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIFN0cmF0ZWd5SGFuZGxlciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBhc3NvY2lhdGVkIHdpdGggdGhlIHBhc3NlZCBzdHJhdGVneSBhbmQgZXZlbnRcbiAgICAgKiB0aGF0J3MgaGFuZGxpbmcgdGhlIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgYWxzbyBpbml0aWFsaXplcyB0aGUgc3RhdGUgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byBlYWNoIG9mXG4gICAgICogdGhlIHBsdWdpbnMgaGFuZGxpbmcgdGhpcyByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fSBzdHJhdGVneVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICAgKiAgICAgcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0ge1VSTH0gW29wdGlvbnMudXJsXVxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnMucGFyYW1zXVxuICAgICAqICAgICBbbWF0Y2ggY2FsbGJhY2tde0BsaW5rIG1vZHVsZTp3b3JrYm94LXJvdXRpbmd+bWF0Y2hDYWxsYmFja30sXG4gICAgICogICAgIChpZiBhcHBsaWNhYmxlKS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzdHJhdGVneSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLl9jYWNoZUtleXMgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByZXF1ZXN0IHRoZSBzdHJhdGVneSBpcyBwZXJmb3JtaW5nIChwYXNzZWQgdG8gdGhlIHN0cmF0ZWd5J3NcbiAgICAgICAgICogYGhhbmRsZSgpYCBvciBgaGFuZGxlQWxsKClgIG1ldGhvZCkuXG4gICAgICAgICAqIEBuYW1lIHJlcXVlc3RcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlIHtSZXF1ZXN0fVxuICAgICAgICAgKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJcbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgcmVxdWVzdC5cbiAgICAgICAgICogQG5hbWUgZXZlbnRcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlIHtFeHRlbmRhYmxlRXZlbnR9XG4gICAgICAgICAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYFVSTGAgaW5zdGFuY2Ugb2YgYHJlcXVlc3QudXJsYCAoaWYgcGFzc2VkIHRvIHRoZSBzdHJhdGVneSdzXG4gICAgICAgICAqIGBoYW5kbGUoKWAgb3IgYGhhbmRsZUFsbCgpYCBtZXRob2QpLlxuICAgICAgICAgKiBOb3RlOiB0aGUgYHVybGAgcGFyYW0gd2lsbCBiZSBwcmVzZW50IGlmIHRoZSBzdHJhdGVneSB3YXMgaW52b2tlZFxuICAgICAgICAgKiBmcm9tIGEgd29ya2JveCBgUm91dGVgIG9iamVjdC5cbiAgICAgICAgICogQG5hbWUgdXJsXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSB7VVJMfHVuZGVmaW5lZH1cbiAgICAgICAgICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBgcGFyYW1gIHZhbHVlIChpZiBwYXNzZWQgdG8gdGhlIHN0cmF0ZWd5J3NcbiAgICAgICAgICogYGhhbmRsZSgpYCBvciBgaGFuZGxlQWxsKClgIG1ldGhvZCkuXG4gICAgICAgICAqIE5vdGU6IHRoZSBgcGFyYW1gIHBhcmFtIHdpbGwgYmUgcHJlc2VudCBpZiB0aGUgc3RyYXRlZ3kgd2FzIGludm9rZWRcbiAgICAgICAgICogZnJvbSBhIHdvcmtib3ggYFJvdXRlYCBvYmplY3QgYW5kIHRoZVxuICAgICAgICAgKiBbbWF0Y2ggY2FsbGJhY2tde0BsaW5rIG1vZHVsZTp3b3JrYm94LXJvdXRpbmd+bWF0Y2hDYWxsYmFja30gcmV0dXJuZWRcbiAgICAgICAgICogYSB0cnV0aHkgdmFsdWUgKGl0IHdpbGwgYmUgdGhhdCB2YWx1ZSkuXG4gICAgICAgICAqIEBuYW1lIHBhcmFtc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgeyp8dW5kZWZpbmVkfVxuICAgICAgICAgKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJcbiAgICAgICAgICovXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShvcHRpb25zLmV2ZW50LCBFeHRlbmRhYmxlRXZlbnQsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdTdHJhdGVneUhhbmRsZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ29wdGlvbnMuZXZlbnQnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5ldmVudCA9IG9wdGlvbnMuZXZlbnQ7XG4gICAgICAgIHRoaXMuX3N0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJEZWZlcnJlZCA9IG5ldyBEZWZlcnJlZCgpO1xuICAgICAgICB0aGlzLl9leHRlbmRMaWZldGltZVByb21pc2VzID0gW107XG4gICAgICAgIC8vIENvcHkgdGhlIHBsdWdpbnMgbGlzdCAoc2luY2UgaXQncyBtdXRhYmxlIG9uIHRoZSBzdHJhdGVneSksXG4gICAgICAgIC8vIHNvIGFueSBtdXRhdGlvbnMgZG9uJ3QgYWZmZWN0IHRoaXMgaGFuZGxlciBpbnN0YW5jZS5cbiAgICAgICAgdGhpcy5fcGx1Z2lucyA9IFsuLi5zdHJhdGVneS5wbHVnaW5zXTtcbiAgICAgICAgdGhpcy5fcGx1Z2luU3RhdGVNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHRoaXMuX3BsdWdpbnMpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsdWdpblN0YXRlTWFwLnNldChwbHVnaW4sIHt9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50LndhaXRVbnRpbCh0aGlzLl9oYW5kbGVyRGVmZXJyZWQucHJvbWlzZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZldGNoZXMgYSBnaXZlbiByZXF1ZXN0IChhbmQgaW52b2tlcyBhbnkgYXBwbGljYWJsZSBwbHVnaW4gY2FsbGJhY2tcbiAgICAgKiBtZXRob2RzKSB1c2luZyB0aGUgYGZldGNoT3B0aW9uc2AgKGZvciBub24tbmF2aWdhdGlvbiByZXF1ZXN0cykgYW5kXG4gICAgICogYHBsdWdpbnNgIGRlZmluZWQgb24gdGhlIGBTdHJhdGVneWAgb2JqZWN0LlxuICAgICAqXG4gICAgICogVGhlIGZvbGxvd2luZyBwbHVnaW4gbGlmZWN5Y2xlIG1ldGhvZHMgYXJlIGludm9rZWQgd2hlbiB1c2luZyB0aGlzIG1ldGhvZDpcbiAgICAgKiAtIGByZXF1ZXN0V2lsbEZldGNoKClgXG4gICAgICogLSBgZmV0Y2hEaWRTdWNjZWVkKClgXG4gICAgICogLSBgZmV0Y2hEaWRGYWlsKClgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBpbnB1dCBUaGUgVVJMIG9yIHJlcXVlc3QgdG8gZmV0Y2guXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAgICovXG4gICAgYXN5bmMgZmV0Y2goaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBldmVudCB9ID0gdGhpcztcbiAgICAgICAgbGV0IHJlcXVlc3QgPSB0b1JlcXVlc3QoaW5wdXQpO1xuICAgICAgICBpZiAocmVxdWVzdC5tb2RlID09PSAnbmF2aWdhdGUnICYmXG4gICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIEZldGNoRXZlbnQgJiZcbiAgICAgICAgICAgIGV2ZW50LnByZWxvYWRSZXNwb25zZSkge1xuICAgICAgICAgICAgY29uc3QgcG9zc2libGVQcmVsb2FkUmVzcG9uc2UgPSBhd2FpdCBldmVudC5wcmVsb2FkUmVzcG9uc2U7XG4gICAgICAgICAgICBpZiAocG9zc2libGVQcmVsb2FkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBVc2luZyBhIHByZWxvYWRlZCBuYXZpZ2F0aW9uIHJlc3BvbnNlIGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9J2ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zc2libGVQcmVsb2FkUmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBmZXRjaERpZEZhaWwgcGx1Z2luLCB3ZSBuZWVkIHRvIHNhdmUgYSBjbG9uZSBvZiB0aGVcbiAgICAgICAgLy8gb3JpZ2luYWwgcmVxdWVzdCBiZWZvcmUgaXQncyBlaXRoZXIgbW9kaWZpZWQgYnkgYSByZXF1ZXN0V2lsbEZldGNoXG4gICAgICAgIC8vIHBsdWdpbiBvciBiZWZvcmUgdGhlIG9yaWdpbmFsIHJlcXVlc3QncyBib2R5IGlzIGNvbnN1bWVkIHZpYSBmZXRjaCgpLlxuICAgICAgICBjb25zdCBvcmlnaW5hbFJlcXVlc3QgPSB0aGlzLmhhc0NhbGxiYWNrKCdmZXRjaERpZEZhaWwnKSA/XG4gICAgICAgICAgICByZXF1ZXN0LmNsb25lKCkgOiBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjYiBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ3JlcXVlc3RXaWxsRmV0Y2gnKSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3QgPSBhd2FpdCBjYih7IHJlcXVlc3Q6IHJlcXVlc3QuY2xvbmUoKSwgZXZlbnQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigncGx1Z2luLWVycm9yLXJlcXVlc3Qtd2lsbC1mZXRjaCcsIHsgdGhyb3duRXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgcmVxdWVzdCBjYW4gYmUgYWx0ZXJlZCBieSBwbHVnaW5zIHdpdGggYHJlcXVlc3RXaWxsRmV0Y2hgIG1ha2luZ1xuICAgICAgICAvLyB0aGUgb3JpZ2luYWwgcmVxdWVzdCAobW9zdCBsaWtlbHkgZnJvbSBhIGBmZXRjaGAgZXZlbnQpIGRpZmZlcmVudFxuICAgICAgICAvLyBmcm9tIHRoZSBSZXF1ZXN0IHdlIG1ha2UuIFBhc3MgYm90aCB0byBgZmV0Y2hEaWRGYWlsYCB0byBhaWQgZGVidWdnaW5nLlxuICAgICAgICBjb25zdCBwbHVnaW5GaWx0ZXJlZFJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgZmV0Y2hSZXNwb25zZTtcbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE3OTZcbiAgICAgICAgICAgIGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0LCByZXF1ZXN0Lm1vZGUgPT09ICduYXZpZ2F0ZScgP1xuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCA6IHRoaXMuX3N0cmF0ZWd5LmZldGNoT3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgTmV0d29yayByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nIHJldHVybmVkIGEgcmVzcG9uc2Ugd2l0aCBgICtcbiAgICAgICAgICAgICAgICAgICAgYHN0YXR1cyAnJHtmZXRjaFJlc3BvbnNlLnN0YXR1c30nLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2ZldGNoRGlkU3VjY2VlZCcpKSB7XG4gICAgICAgICAgICAgICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHBsdWdpbkZpbHRlcmVkUmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IGZldGNoUmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgTmV0d29yayByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nIHRocmV3IGFuIGVycm9yLmAsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGBvcmlnaW5hbFJlcXVlc3RgIHdpbGwgb25seSBleGlzdCBpZiBhIGBmZXRjaERpZEZhaWxgIGNhbGxiYWNrXG4gICAgICAgICAgICAvLyBpcyBiZWluZyB1c2VkIChzZWUgYWJvdmUpLlxuICAgICAgICAgICAgaWYgKG9yaWdpbmFsUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucnVuQ2FsbGJhY2tzKCdmZXRjaERpZEZhaWwnLCB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsUmVxdWVzdDogb3JpZ2luYWxSZXF1ZXN0LmNsb25lKCksXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHBsdWdpbkZpbHRlcmVkUmVxdWVzdC5jbG9uZSgpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbHMgYHRoaXMuZmV0Y2goKWAgYW5kIChpbiB0aGUgYmFja2dyb3VuZCkgcnVucyBgdGhpcy5jYWNoZVB1dCgpYCBvblxuICAgICAqIHRoZSByZXNwb25zZSBnZW5lcmF0ZWQgYnkgYHRoaXMuZmV0Y2goKWAuXG4gICAgICpcbiAgICAgKiBUaGUgY2FsbCB0byBgdGhpcy5jYWNoZVB1dCgpYCBhdXRvbWF0aWNhbGx5IGludm9rZXMgYHRoaXMud2FpdFVudGlsKClgLFxuICAgICAqIHNvIHlvdSBkbyBub3QgaGF2ZSB0byBtYW51YWxseSBjYWxsIGB3YWl0VW50aWwoKWAgb24gdGhlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gaW5wdXQgVGhlIHJlcXVlc3Qgb3IgVVJMIHRvIGZldGNoIGFuZCBjYWNoZS5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaEFuZENhY2hlUHV0KGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mZXRjaChpbnB1dCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlQ2xvbmUgPSByZXNwb25zZS5jbG9uZSgpO1xuICAgICAgICB2b2lkIHRoaXMud2FpdFVudGlsKHRoaXMuY2FjaGVQdXQoaW5wdXQsIHJlc3BvbnNlQ2xvbmUpKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYXRjaGVzIGEgcmVxdWVzdCBmcm9tIHRoZSBjYWNoZSAoYW5kIGludm9rZXMgYW55IGFwcGxpY2FibGUgcGx1Z2luXG4gICAgICogY2FsbGJhY2sgbWV0aG9kcykgdXNpbmcgdGhlIGBjYWNoZU5hbWVgLCBgbWF0Y2hPcHRpb25zYCwgYW5kIGBwbHVnaW5zYFxuICAgICAqIGRlZmluZWQgb24gdGhlIHN0cmF0ZWd5IG9iamVjdC5cbiAgICAgKlxuICAgICAqIFRoZSBmb2xsb3dpbmcgcGx1Z2luIGxpZmVjeWNsZSBtZXRob2RzIGFyZSBpbnZva2VkIHdoZW4gdXNpbmcgdGhpcyBtZXRob2Q6XG4gICAgICogLSBjYWNoZUtleVdpbGxCeVVzZWQoKVxuICAgICAqIC0gY2FjaGVkUmVzcG9uc2VXaWxsQnlVc2VkKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IGtleSBUaGUgUmVxdWVzdCBvciBVUkwgdG8gdXNlIGFzIHRoZSBjYWNoZSBrZXkuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZXx1bmRlZmluZWQ+fSBBIG1hdGNoaW5nIHJlc3BvbnNlLCBpZiBmb3VuZC5cbiAgICAgKi9cbiAgICBhc3luYyBjYWNoZU1hdGNoKGtleSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdG9SZXF1ZXN0KGtleSk7XG4gICAgICAgIGxldCBjYWNoZWRSZXNwb25zZTtcbiAgICAgICAgY29uc3QgeyBjYWNoZU5hbWUsIG1hdGNoT3B0aW9ucyB9ID0gdGhpcy5fc3RyYXRlZ3k7XG4gICAgICAgIGNvbnN0IGVmZmVjdGl2ZVJlcXVlc3QgPSBhd2FpdCB0aGlzLmdldENhY2hlS2V5KHJlcXVlc3QsICdyZWFkJyk7XG4gICAgICAgIGNvbnN0IG11bHRpTWF0Y2hPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBtYXRjaE9wdGlvbnMpLCB7IGNhY2hlTmFtZSB9KTtcbiAgICAgICAgY2FjaGVkUmVzcG9uc2UgPSBhd2FpdCBjYWNoZXMubWF0Y2goZWZmZWN0aXZlUmVxdWVzdCwgbXVsdGlNYXRjaE9wdGlvbnMpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiAnJHtjYWNoZU5hbWV9Jy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgTm8gY2FjaGVkIHJlc3BvbnNlIGZvdW5kIGluICcke2NhY2hlTmFtZX0nLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZWRSZXNwb25zZVdpbGxCZVVzZWQnKSkge1xuICAgICAgICAgICAgY2FjaGVkUmVzcG9uc2UgPSAoYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZSxcbiAgICAgICAgICAgICAgICBtYXRjaE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgY2FjaGVkUmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCxcbiAgICAgICAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgICAgICAgIH0pKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhY2hlZFJlc3BvbnNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdXRzIGEgcmVxdWVzdC9yZXNwb25zZSBwYWlyIGluIHRoZSBjYWNoZSAoYW5kIGludm9rZXMgYW55IGFwcGxpY2FibGVcbiAgICAgKiBwbHVnaW4gY2FsbGJhY2sgbWV0aG9kcykgdXNpbmcgdGhlIGBjYWNoZU5hbWVgIGFuZCBgcGx1Z2luc2AgZGVmaW5lZCBvblxuICAgICAqIHRoZSBzdHJhdGVneSBvYmplY3QuXG4gICAgICpcbiAgICAgKiBUaGUgZm9sbG93aW5nIHBsdWdpbiBsaWZlY3ljbGUgbWV0aG9kcyBhcmUgaW52b2tlZCB3aGVuIHVzaW5nIHRoaXMgbWV0aG9kOlxuICAgICAqIC0gY2FjaGVLZXlXaWxsQnlVc2VkKClcbiAgICAgKiAtIGNhY2hlV2lsbFVwZGF0ZSgpXG4gICAgICogLSBjYWNoZURpZFVwZGF0ZSgpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBrZXkgVGhlIHJlcXVlc3Qgb3IgVVJMIHRvIHVzZSBhcyB0aGUgY2FjaGUga2V5LlxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc3BvbnNlIFRoZSByZXNwb25zZSB0byBjYWNoZS5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBgZmFsc2VgIGlmIGEgY2FjaGVXaWxsVXBkYXRlIGNhdXNlZCB0aGUgcmVzcG9uc2VcbiAgICAgKiBub3QgYmUgY2FjaGVkLCBhbmQgYHRydWVgIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBhc3luYyBjYWNoZVB1dChrZXksIHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0b1JlcXVlc3Qoa2V5KTtcbiAgICAgICAgLy8gUnVuIGluIHRoZSBuZXh0IHRhc2sgdG8gYXZvaWQgYmxvY2tpbmcgb3RoZXIgY2FjaGUgcmVhZHMuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvU2VydmljZVdvcmtlci9pc3N1ZXMvMTM5N1xuICAgICAgICBhd2FpdCB0aW1lb3V0KDApO1xuICAgICAgICBjb25zdCBlZmZlY3RpdmVSZXF1ZXN0ID0gYXdhaXQgdGhpcy5nZXRDYWNoZUtleShyZXF1ZXN0LCAnd3JpdGUnKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChlZmZlY3RpdmVSZXF1ZXN0Lm1ldGhvZCAmJiBlZmZlY3RpdmVSZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdhdHRlbXB0LXRvLWNhY2hlLW5vbi1nZXQtcmVxdWVzdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCksXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogZWZmZWN0aXZlUmVxdWVzdC5tZXRob2QsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yODE4XG4gICAgICAgICAgICBjb25zdCB2YXJ5ID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1ZhcnknKTtcbiAgICAgICAgICAgIGlmICh2YXJ5KSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBUaGUgcmVzcG9uc2UgZm9yICR7Z2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpfSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGhhcyBhICdWYXJ5OiAke3Zhcnl9JyBoZWFkZXIuIGAgK1xuICAgICAgICAgICAgICAgICAgICBgQ29uc2lkZXIgc2V0dGluZyB0aGUge2lnbm9yZVZhcnk6IHRydWV9IG9wdGlvbiBvbiB5b3VyIHN0cmF0ZWd5IGAgK1xuICAgICAgICAgICAgICAgICAgICBgdG8gZW5zdXJlIGNhY2hlIG1hdGNoaW5nIGFuZCBkZWxldGlvbiB3b3JrcyBhcyBleHBlY3RlZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgQ2Fubm90IGNhY2hlIG5vbi1leGlzdGVudCByZXNwb25zZSBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCl9Jy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2NhY2hlLXB1dC13aXRoLW5vLXJlc3BvbnNlJywge1xuICAgICAgICAgICAgICAgIHVybDogZ2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzcG9uc2VUb0NhY2hlID0gYXdhaXQgdGhpcy5fZW5zdXJlUmVzcG9uc2VTYWZlVG9DYWNoZShyZXNwb25zZSk7XG4gICAgICAgIGlmICghcmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUmVzcG9uc2UgJyR7Z2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpfScgYCArXG4gICAgICAgICAgICAgICAgICAgIGB3aWxsIG5vdCBiZSBjYWNoZWQuYCwgcmVzcG9uc2VUb0NhY2hlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGNhY2hlTmFtZSwgbWF0Y2hPcHRpb25zIH0gPSB0aGlzLl9zdHJhdGVneTtcbiAgICAgICAgY29uc3QgY2FjaGUgPSBhd2FpdCBzZWxmLmNhY2hlcy5vcGVuKGNhY2hlTmFtZSk7XG4gICAgICAgIGNvbnN0IGhhc0NhY2hlVXBkYXRlQ2FsbGJhY2sgPSB0aGlzLmhhc0NhbGxiYWNrKCdjYWNoZURpZFVwZGF0ZScpO1xuICAgICAgICBjb25zdCBvbGRSZXNwb25zZSA9IGhhc0NhY2hlVXBkYXRlQ2FsbGJhY2sgPyBhd2FpdCBjYWNoZU1hdGNoSWdub3JlUGFyYW1zKFxuICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IHRoZSBgX19XQl9SRVZJU0lPTl9fYCBwYXJhbSBpcyBhIHByZWNhY2hpbmdcbiAgICAgICAgLy8gZmVhdHVyZS4gQ29uc2lkZXIgaW50byB3YXlzIHRvIG9ubHkgYWRkIHRoaXMgYmVoYXZpb3IgaWYgdXNpbmdcbiAgICAgICAgLy8gcHJlY2FjaGluZy5cbiAgICAgICAgY2FjaGUsIGVmZmVjdGl2ZVJlcXVlc3QuY2xvbmUoKSwgWydfX1dCX1JFVklTSU9OX18nXSwgbWF0Y2hPcHRpb25zKSA6XG4gICAgICAgICAgICBudWxsO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBVcGRhdGluZyB0aGUgJyR7Y2FjaGVOYW1lfScgY2FjaGUgd2l0aCBhIG5ldyBSZXNwb25zZSBgICtcbiAgICAgICAgICAgICAgICBgZm9yICR7Z2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgY2FjaGUucHV0KGVmZmVjdGl2ZVJlcXVlc3QsIGhhc0NhY2hlVXBkYXRlQ2FsbGJhY2sgP1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlVG9DYWNoZS5jbG9uZSgpIDogcmVzcG9uc2VUb0NhY2hlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01FeGNlcHRpb24jZXhjZXB0aW9uLVF1b3RhRXhjZWVkZWRFcnJvclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJykge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygnY2FjaGVEaWRVcGRhdGUnKSkge1xuICAgICAgICAgICAgYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZSxcbiAgICAgICAgICAgICAgICBvbGRSZXNwb25zZSxcbiAgICAgICAgICAgICAgICBuZXdSZXNwb25zZTogcmVzcG9uc2VUb0NhY2hlLmNsb25lKCksXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCxcbiAgICAgICAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdGhlIGxpc3Qgb2YgcGx1Z2lucyBmb3IgdGhlIGBjYWNoZUtleVdpbGxCZVVzZWRgIGNhbGxiYWNrLCBhbmRcbiAgICAgKiBleGVjdXRlcyBhbnkgb2YgdGhvc2UgY2FsbGJhY2tzIGZvdW5kIGluIHNlcXVlbmNlLiBUaGUgZmluYWwgYFJlcXVlc3RgXG4gICAgICogb2JqZWN0IHJldHVybmVkIGJ5IHRoZSBsYXN0IHBsdWdpbiBpcyB0cmVhdGVkIGFzIHRoZSBjYWNoZSBrZXkgZm9yIGNhY2hlXG4gICAgICogcmVhZHMgYW5kL29yIHdyaXRlcy4gSWYgbm8gYGNhY2hlS2V5V2lsbEJlVXNlZGAgcGx1Z2luIGNhbGxiYWNrcyBoYXZlXG4gICAgICogYmVlbiByZWdpc3RlcmVkLCB0aGUgcGFzc2VkIHJlcXVlc3QgaXMgcmV0dXJuZWQgdW5tb2RpZmllZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlcXVlc3Q+fVxuICAgICAqL1xuICAgIGFzeW5jIGdldENhY2hlS2V5KHJlcXVlc3QsIG1vZGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZUtleXNbbW9kZV0pIHtcbiAgICAgICAgICAgIGxldCBlZmZlY3RpdmVSZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZUtleVdpbGxCZVVzZWQnKSkge1xuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVJlcXVlc3QgPSB0b1JlcXVlc3QoYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFyYW1zIGhhcyBhIHR5cGUgYW55IGNhbid0IGNoYW5nZSByaWdodCBub3cuXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5wYXJhbXMsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXlzW21vZGVdID0gZWZmZWN0aXZlUmVxdWVzdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVLZXlzW21vZGVdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHN0cmF0ZWd5IGhhcyBhdCBsZWFzdCBvbmUgcGx1Z2luIHdpdGggdGhlIGdpdmVuXG4gICAgICogY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY2FsbGJhY2sgdG8gY2hlY2sgZm9yLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzQ2FsbGJhY2sobmFtZSkge1xuICAgICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiB0aGlzLl9zdHJhdGVneS5wbHVnaW5zKSB7XG4gICAgICAgICAgICBpZiAobmFtZSBpbiBwbHVnaW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJ1bnMgYWxsIHBsdWdpbiBjYWxsYmFja3MgbWF0Y2hpbmcgdGhlIGdpdmVuIG5hbWUsIGluIG9yZGVyLCBwYXNzaW5nIHRoZVxuICAgICAqIGdpdmVuIHBhcmFtIG9iamVjdCAobWVyZ2VkIGl0aCB0aGUgY3VycmVudCBwbHVnaW4gc3RhdGUpIGFzIHRoZSBvbmx5XG4gICAgICogYXJndW1lbnQuXG4gICAgICpcbiAgICAgKiBOb3RlOiBzaW5jZSB0aGlzIG1ldGhvZCBydW5zIGFsbCBwbHVnaW5zLCBpdCdzIG5vdCBzdWl0YWJsZSBmb3IgY2FzZXNcbiAgICAgKiB3aGVyZSB0aGUgcmV0dXJuIHZhbHVlIG9mIGEgY2FsbGJhY2sgbmVlZHMgdG8gYmUgYXBwbGllZCBwcmlvciB0byBjYWxsaW5nXG4gICAgICogdGhlIG5leHQgY2FsbGJhY2suIFNlZVxuICAgICAqIFtgaXRlcmF0ZUNhbGxiYWNrcygpYF17QGxpbmsgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXIjaXRlcmF0ZUNhbGxiYWNrc31cbiAgICAgKiBiZWxvdyBmb3IgaG93IHRvIGhhbmRsZSB0aGF0IGNhc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY2FsbGJhY2sgdG8gcnVuIHdpdGhpbiBlYWNoIHBsdWdpbi5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0gVGhlIG9iamVjdCB0byBwYXNzIGFzIHRoZSBmaXJzdCAoYW5kIG9ubHkpIHBhcmFtXG4gICAgICogICAgIHdoZW4gZXhlY3V0aW5nIGVhY2ggY2FsbGJhY2suIFRoaXMgb2JqZWN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlXG4gICAgICogICAgIGN1cnJlbnQgcGx1Z2luIHN0YXRlIHByaW9yIHRvIGNhbGxiYWNrIGV4ZWN1dGlvbi5cbiAgICAgKi9cbiAgICBhc3luYyBydW5DYWxsYmFja3MobmFtZSwgcGFyYW0pIHtcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MobmFtZSkpIHtcbiAgICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogbm90IHN1cmUgd2h5IGBhbnlgIGlzIG5lZWRlZC4gSXQgc2VlbXMgbGlrZVxuICAgICAgICAgICAgLy8gdGhpcyBzaG91bGQgd29yayB3aXRoIGBhcyBXb3JrYm94UGx1Z2luQ2FsbGJhY2tQYXJhbVtDXWAuXG4gICAgICAgICAgICBhd2FpdCBjYWxsYmFjayhwYXJhbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWNjZXB0cyBhIGNhbGxiYWNrIGFuZCByZXR1cm5zIGFuIGl0ZXJhYmxlIG9mIG1hdGNoaW5nIHBsdWdpbiBjYWxsYmFja3MsXG4gICAgICogd2hlcmUgZWFjaCBjYWxsYmFjayBpcyB3cmFwcGVkIHdpdGggdGhlIGN1cnJlbnQgaGFuZGxlciBzdGF0ZSAoaS5lLiB3aGVuXG4gICAgICogeW91IGNhbGwgZWFjaCBjYWxsYmFjaywgd2hhdGV2ZXIgb2JqZWN0IHBhcmFtZXRlciB5b3UgcGFzcyBpdCB3aWxsXG4gICAgICogYmUgbWVyZ2VkIHdpdGggdGhlIHBsdWdpbidzIGN1cnJlbnQgc3RhdGUpLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgZm8gdGhlIGNhbGxiYWNrIHRvIHJ1blxuICAgICAqIEByZXR1cm4ge0FycmF5PEZ1bmN0aW9uPn1cbiAgICAgKi9cbiAgICAqaXRlcmF0ZUNhbGxiYWNrcyhuYW1lKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHRoaXMuX3N0cmF0ZWd5LnBsdWdpbnMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGx1Z2luW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9wbHVnaW5TdGF0ZU1hcC5nZXQocGx1Z2luKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZWZ1bENhbGxiYWNrID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlZnVsUGFyYW0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtKSwgeyBzdGF0ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBub3Qgc3VyZSB3aHkgYGFueWAgaXMgbmVlZGVkLiBJdCBzZWVtcyBsaWtlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgc2hvdWxkIHdvcmsgd2l0aCBgYXMgV29ya2JveFBsdWdpbkNhbGxiYWNrUGFyYW1bQ11gLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGx1Z2luW25hbWVdKHN0YXRlZnVsUGFyYW0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeWllbGQgc3RhdGVmdWxDYWxsYmFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgcHJvbWlzZSB0byB0aGVcbiAgICAgKiBbZXh0ZW5kIGxpZmV0aW1lIHByb21pc2VzXXtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZXh0ZW5kYWJsZWV2ZW50LWV4dGVuZC1saWZldGltZS1wcm9taXNlc31cbiAgICAgKiBvZiB0aGUgZXZlbnQgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXF1ZXN0IGJlaW5nIGhhbmRsZWQgKHVzdWFsbHkgYVxuICAgICAqIGBGZXRjaEV2ZW50YCkuXG4gICAgICpcbiAgICAgKiBOb3RlOiB5b3UgY2FuIGF3YWl0XG4gICAgICogW2Bkb25lV2FpdGluZygpYF17QGxpbmsgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ+ZG9uZVdhaXRpbmd9XG4gICAgICogdG8ga25vdyB3aGVuIGFsbCBhZGRlZCBwcm9taXNlcyBoYXZlIHNldHRsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Byb21pc2V9IHByb21pc2UgQSBwcm9taXNlIHRvIGFkZCB0byB0aGUgZXh0ZW5kIGxpZmV0aW1lIHByb21pc2VzXG4gICAgICogICAgIG9mIHRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKi9cbiAgICB3YWl0VW50aWwocHJvbWlzZSkge1xuICAgICAgICB0aGlzLl9leHRlbmRMaWZldGltZVByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uY2UgYWxsIHByb21pc2VzIHBhc3NlZCB0b1xuICAgICAqIFtgd2FpdFVudGlsKClgXXtAbGluayBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn53YWl0VW50aWx9XG4gICAgICogaGF2ZSBzZXR0bGVkLlxuICAgICAqXG4gICAgICogTm90ZTogYW55IHdvcmsgZG9uZSBhZnRlciBgZG9uZVdhaXRpbmcoKWAgc2V0dGxlcyBzaG91bGQgYmUgbWFudWFsbHlcbiAgICAgKiBwYXNzZWQgdG8gYW4gZXZlbnQncyBgd2FpdFVudGlsKClgIG1ldGhvZCAobm90IHRoaXMgaGFuZGxlcidzXG4gICAgICogYHdhaXRVbnRpbCgpYCBtZXRob2QpLCBvdGhlcndpc2UgdGhlIHNlcnZpY2Ugd29ya2VyIHRocmVhZCBteSBiZSBraWxsZWRcbiAgICAgKiBwcmlvciB0byB5b3VyIHdvcmsgY29tcGxldGluZy5cbiAgICAgKi9cbiAgICBhc3luYyBkb25lV2FpdGluZygpIHtcbiAgICAgICAgbGV0IHByb21pc2U7XG4gICAgICAgIHdoaWxlIChwcm9taXNlID0gdGhpcy5fZXh0ZW5kTGlmZXRpbWVQcm9taXNlcy5zaGlmdCgpKSB7XG4gICAgICAgICAgICBhd2FpdCBwcm9taXNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3BzIHJ1bm5pbmcgdGhlIHN0cmF0ZWd5IGFuZCBpbW1lZGlhdGVseSByZXNvbHZlcyBhbnkgcGVuZGluZ1xuICAgICAqIGB3YWl0VW50aWwoKWAgcHJvbWlzZXMuXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlckRlZmVycmVkLnJlc29sdmUobnVsbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgY2FsbCBjYWNoZVdpbGxVcGRhdGUgb24gdGhlIGF2YWlsYWJsZSBwbHVnaW5zIChvciB1c2VcbiAgICAgKiBzdGF0dXMgPT09IDIwMCkgdG8gZGV0ZXJtaW5lIGlmIHRoZSBSZXNwb25zZSBpcyBzYWZlIGFuZCB2YWxpZCB0byBjYWNoZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAgICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5yZXNwb25zZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX2Vuc3VyZVJlc3BvbnNlU2FmZVRvQ2FjaGUocmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlVG9DYWNoZSA9IHJlc3BvbnNlO1xuICAgICAgICBsZXQgcGx1Z2luc1VzZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlV2lsbFVwZGF0ZScpKSB7XG4gICAgICAgICAgICByZXNwb25zZVRvQ2FjaGUgPSAoYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHRoaXMucmVxdWVzdCxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2VUb0NhY2hlLFxuICAgICAgICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICAgICAgfSkpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHBsdWdpbnNVc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwbHVnaW5zVXNlZCkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZSAmJiByZXNwb25zZVRvQ2FjaGUuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZVRvQ2FjaGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgVGhlIHJlc3BvbnNlIGZvciAnJHt0aGlzLnJlcXVlc3QudXJsfScgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBpcyBhbiBvcGFxdWUgcmVzcG9uc2UuIFRoZSBjYWNoaW5nIHN0cmF0ZWd5IHRoYXQgeW91J3JlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdXNpbmcgd2lsbCBub3QgY2FjaGUgb3BhcXVlIHJlc3BvbnNlcyBieSBkZWZhdWx0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBUaGUgcmVzcG9uc2UgZm9yICcke3RoaXMucmVxdWVzdC51cmx9JyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHJldHVybmVkIGEgc3RhdHVzIGNvZGUgb2YgJyR7cmVzcG9uc2Uuc3RhdHVzfScgYW5kIHdvbid0IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYmUgY2FjaGVkIGFzIGEgcmVzdWx0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZVRvQ2FjaGU7XG4gICAgfVxufVxuZXhwb3J0IHsgU3RyYXRlZ3lIYW5kbGVyIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIEB0cy1pZ25vcmVcbnRyeSB7XG4gICAgc2VsZlsnd29ya2JveDpzdHJhdGVnaWVzOjYuMi40J10gJiYgXygpO1xufVxuY2F0Y2ggKGUpIHsgfVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgQ2FjaGVGaXJzdCB9IGZyb20gJy4vQ2FjaGVGaXJzdC5qcyc7XG5pbXBvcnQgeyBDYWNoZU9ubHkgfSBmcm9tICcuL0NhY2hlT25seS5qcyc7XG5pbXBvcnQgeyBOZXR3b3JrRmlyc3QgfSBmcm9tICcuL05ldHdvcmtGaXJzdC5qcyc7XG5pbXBvcnQgeyBOZXR3b3JrT25seSB9IGZyb20gJy4vTmV0d29ya09ubHkuanMnO1xuaW1wb3J0IHsgU3RhbGVXaGlsZVJldmFsaWRhdGUgfSBmcm9tICcuL1N0YWxlV2hpbGVSZXZhbGlkYXRlLmpzJztcbmltcG9ydCB7IFN0cmF0ZWd5IH0gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneUhhbmRsZXIgfSBmcm9tICcuL1N0cmF0ZWd5SGFuZGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGVyZSBhcmUgY29tbW9uIGNhY2hpbmcgc3RyYXRlZ2llcyB0aGF0IG1vc3Qgc2VydmljZSB3b3JrZXJzIHdpbGwgbmVlZFxuICogYW5kIHVzZS4gVGhpcyBtb2R1bGUgcHJvdmlkZXMgc2ltcGxlIGltcGxlbWVudGF0aW9ucyBvZiB0aGVzZSBzdHJhdGVnaWVzLlxuICpcbiAqIEBtb2R1bGUgd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmV4cG9ydCB7IENhY2hlRmlyc3QsIENhY2hlT25seSwgTmV0d29ya0ZpcnN0LCBOZXR3b3JrT25seSwgU3RhbGVXaGlsZVJldmFsaWRhdGUsIFN0cmF0ZWd5LCBTdHJhdGVneUhhbmRsZXIsIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmV4cG9ydCBjb25zdCBjYWNoZU9rQW5kT3BhcXVlUGx1Z2luID0ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB2YWxpZCByZXNwb25zZSAodG8gYWxsb3cgY2FjaGluZykgaWYgdGhlIHN0YXR1cyBpcyAyMDAgKE9LKSBvclxuICAgICAqIDAgKG9wYXF1ZSkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMucmVzcG9uc2VcbiAgICAgKiBAcmV0dXJuIHtSZXNwb25zZXxudWxsfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjYWNoZVdpbGxVcGRhdGU6IGFzeW5jICh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmV4cG9ydCBjb25zdCBtZXNzYWdlcyA9IHtcbiAgICBzdHJhdGVneVN0YXJ0OiAoc3RyYXRlZ3lOYW1lLCByZXF1ZXN0KSA9PiBgVXNpbmcgJHtzdHJhdGVneU5hbWV9IHRvIHJlc3BvbmQgdG8gJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfSdgLFxuICAgIHByaW50RmluYWxSZXNwb25zZTogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IHRoZSBmaW5hbCByZXNwb25zZSBoZXJlLmApO1xuICAgICAgICAgICAgbG9nZ2VyLmxvZyhyZXNwb25zZSB8fCAnW05vIHJlc3BvbnNlIHJldHVybmVkXScpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnOyIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnOyIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnOyIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnOyIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoY2FjaGVkTW9kdWxlLmVycm9yICE9PSB1bmRlZmluZWQpIHRocm93IGNhY2hlZE1vZHVsZS5lcnJvcjtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dmFyIHRocmV3ID0gdHJ1ZTtcblx0dHJ5IHtcblx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHR0aHJldyA9IGZhbHNlO1xuXHR9IGZpbmFsbHkge1xuXHRcdGlmKHRocmV3KSBkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0fVxuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG1vZHVsZSk7XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5pKSB7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbihvcHRpb25zKSB7XG5cdHZhciBvcmlnaW5hbEZhY3RvcnkgPSBvcHRpb25zLmZhY3Rvcnk7XG5cdG9wdGlvbnMuZmFjdG9yeSA9IGZ1bmN0aW9uKG1vZHVsZU9iamVjdCwgbW9kdWxlRXhwb3J0cywgd2VicGFja1JlcXVpcmUpIHtcblx0XHR2YXIgaGFzUmVmcmVzaCA9IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmICEhc2VsZi4kUmVmcmVzaEludGVyY2VwdE1vZHVsZUV4ZWN1dGlvbiQ7XG5cdFx0dmFyIGNsZWFudXAgPSBoYXNSZWZyZXNoID8gc2VsZi4kUmVmcmVzaEludGVyY2VwdE1vZHVsZUV4ZWN1dGlvbiQobW9kdWxlT2JqZWN0LmlkKSA6IGZ1bmN0aW9uKCkge307XG5cdFx0dHJ5IHtcblx0XHRcdG9yaWdpbmFsRmFjdG9yeS5jYWxsKHRoaXMsIG1vZHVsZU9iamVjdCwgbW9kdWxlRXhwb3J0cywgd2VicGFja1JlcXVpcmUpO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRjbGVhbnVwKCk7XG5cdFx0fVxuXHR9XG59KVxufSIsIlxuXG4vLyBub29wIGZucyB0byBwcmV2ZW50IHJ1bnRpbWUgZXJyb3JzIGR1cmluZyBpbml0aWFsaXphdGlvblxuaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdHNlbGYuJFJlZnJlc2hSZWckID0gZnVuY3Rpb24gKCkge307XG5cdHNlbGYuJFJlZnJlc2hTaWckID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0cmV0dXJuIHR5cGU7XG5cdFx0fTtcblx0fTtcbn0iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NlcnZpY2Utd29ya2VyLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbInNraXBXYWl0aW5nIiwiY2xpZW50c0NsYWltIiwiRXhwaXJhdGlvblBsdWdpbiIsIk5ldHdvcmtPbmx5IiwiTmV0d29ya0ZpcnN0IiwiQ2FjaGVGaXJzdCIsIlN0YWxlV2hpbGVSZXZhbGlkYXRlIiwicmVnaXN0ZXJSb3V0ZSIsInNldERlZmF1bHRIYW5kbGVyIiwic2V0Q2F0Y2hIYW5kbGVyIiwibWF0Y2hQcmVjYWNoZSIsInByZWNhY2hlQW5kUm91dGUiLCJjbGVhbnVwT3V0ZGF0ZWRDYWNoZXMiLCJXQl9NQU5JRkVTVCIsInNlbGYiLCJfX1dCX01BTklGRVNUIiwicHVzaCIsInVybCIsInJldmlzaW9uIiwiY2FjaGVOYW1lIiwicGx1Z2lucyIsIm1heEVudHJpZXMiLCJtYXhBZ2VTZWNvbmRzIiwicHVyZ2VPblF1b3RhRXJyb3IiLCJuZXR3b3JrVGltZW91dFNlY29uZHMiLCJldmVudCIsInJlcXVlc3QiLCJjYWNoZSIsIm1vZGUiLCJkZXN0aW5hdGlvbiIsIlJlc3BvbnNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9