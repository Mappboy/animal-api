/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/appConfig */ \"./src/config/appConfig.js\");\n/* harmony import */ var _config_appErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/appErrorHandler */ \"./src/config/appErrorHandler.js\");\n/* harmony import */ var _config_appErrorHandler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_appErrorHandler__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes_admin_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/admin/index */ \"./src/routes/admin/index.js\");\n/* harmony import */ var _routes_admin_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/admin/auth */ \"./src/routes/admin/auth.js\");\n/* harmony import */ var _routes_admin_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes_admin_auth__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes_admin_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/admin/user */ \"./src/routes/admin/user.js\");\n/* harmony import */ var _routes_admin_user__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes_admin_user__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes_admin_report__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/admin/report */ \"./src/routes/admin/report.js\");\n/* harmony import */ var _routes_api_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/api/auth */ \"./src/routes/api/auth.js\");\n/* harmony import */ var _routes_api_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes_api_auth__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _routes_api_rescue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/api/rescue */ \"./src/routes/api/rescue.js\");\n/* harmony import */ var _routes_api_profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/api/profile */ \"./src/routes/api/profile.js\");\n\n\n\n//routes import\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\nObject(_config_appConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(app);\n\n//routes setup\napp.use('/', _routes_admin_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\napp.use('/auth', _routes_admin_auth__WEBPACK_IMPORTED_MODULE_4___default.a);\napp.use('/user', _routes_admin_user__WEBPACK_IMPORTED_MODULE_5___default.a);\napp.use('/report', _routes_admin_report__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n//api routes setup\napp.use('/api/auth', _routes_api_auth__WEBPACK_IMPORTED_MODULE_7___default.a);\napp.use('/api/report', apiReport);\napp.use('/api/rescue', _routes_api_rescue__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use('/api/profile', _routes_api_profile__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n_config_appErrorHandler__WEBPACK_IMPORTED_MODULE_2___default()(app);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/config/appConfig.js":
/*!*********************************!*\
  !*** ./src/config/appConfig.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! serve-favicon */ \"serve-favicon\");\n/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(serve_favicon__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var express_handlebars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express-handlebars */ \"express-handlebars\");\n/* harmony import */ var express_handlebars__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express_handlebars__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! express-validator */ \"express-validator\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var connect_flash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! connect-flash */ \"connect-flash\");\n/* harmony import */ var connect_flash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(connect_flash__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main */ \"./src/config/main.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_main__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _helpers_hbsHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helpers/hbsHelper */ \"./src/helpers/hbsHelper.js\");\n\n\n\n\n\n\n\n\nconst apiPassport = __webpack_require__(/*! ./passportApi */ \"./src/config/passportApi.js\").default();\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n\n    // assign mongoose promise to global promise\n    // mongoose.Promise = global.Promise;\n    sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_7___default.a(..._main__WEBPACK_IMPORTED_MODULE_12__[\"database\"], {\n        // gimme postgres, please!\n        dialect: 'postgres'\n    });\n\n    // call passport web config\n    __webpack_require__(/*! ./passport */ \"./src/config/passport.js\");\n    const hbs = express_handlebars__WEBPACK_IMPORTED_MODULE_6___default()({ defaultLayout: 'layout', extname: '.hbs' });\n    hbs.registerHelper('add', _helpers_hbsHelper__WEBPACK_IMPORTED_MODULE_13__[\"add\"]);\n    hbs.registerHelper('isFirstPage', _helpers_hbsHelper__WEBPACK_IMPORTED_MODULE_13__[\"isFirstPage\"]);\n    hbs.registerHelper('isLastPage', _helpers_hbsHelper__WEBPACK_IMPORTED_MODULE_13__[\"isLastPage\"]);\n    hbs.registerHelper('hasRescue', _helpers_hbsHelper__WEBPACK_IMPORTED_MODULE_13__[\"hasRescue\"]);\n    // view engine setup\n    app.engine('.hbs');\n    app.set('view engine', 'hbs');\n\n    app.use(serve_favicon__WEBPACK_IMPORTED_MODULE_2___default()(Object(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"])(__dirname, '..', 'public', 'favicon.ico')));\n    app.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()('dev'));\n    // parse http post body\n    app.use(Object(body_parser__WEBPACK_IMPORTED_MODULE_5__[\"json\"])());\n    app.use(Object(body_parser__WEBPACK_IMPORTED_MODULE_5__[\"urlencoded\"])({ limit: '50mb', extended: true }));\n    //use express validator\n    app.use(express_validator__WEBPACK_IMPORTED_MODULE_8___default()());\n    app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_4___default()());\n    //conf session\n    app.use(express_session__WEBPACK_IMPORTED_MODULE_9___default()({\n        secret: _main__WEBPACK_IMPORTED_MODULE_12__[\"jwtSecret\"],\n        resave: false,\n        saveUninitialized: false\n    }));\n    //use connect flash for flash messages\n    app.use(connect_flash__WEBPACK_IMPORTED_MODULE_10___default()());\n    //initialize passport and passport session\n    app.use(Object(passport__WEBPACK_IMPORTED_MODULE_11__[\"initialize\"])());\n    app.use(Object(passport__WEBPACK_IMPORTED_MODULE_11__[\"session\"])());\n    //conf static files\n    app.use(Object(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"])(Object(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"])(__dirname, '../public')));\n    app.use(apiPassport.initialize());\n\n    //set global variable\n    app.use(function (req, res, next) {\n        res.locals.login = req.isAuthenticated();\n        res.locals.user = req.session.passport ? req.session.passport.user : null;\n        res.locals.errors = req.flash('error');\n        res.locals.messages = req.flash('messages');\n        next();\n    });\n});;\n\n//# sourceURL=webpack:///./src/config/appConfig.js?");

/***/ }),

/***/ "./src/config/appErrorHandler.js":
/*!***************************************!*\
  !*** ./src/config/appErrorHandler.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (app) {\n    // catch 404 and forward to error handler\n    app.use(function (req, res, next) {\n        var err = new Error('Not Found');\n        err.status = 404;\n        next(err);\n    });\n\n    // error handler\n    app.use(function (err, req, res, next) {\n        // set locals, only providing error in development\n        res.locals.message = err.message;\n        res.locals.error = req.app.get('env') === 'development' ? err : {};\n\n        // render the error page\n        res.status(err.status || 500);\n        res.render('error');\n    });\n};\n\n//# sourceURL=webpack:///./src/config/appErrorHandler.js?");

/***/ }),

/***/ "./src/config/lang/auth.js":
/*!*********************************!*\
  !*** ./src/config/lang/auth.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n    invalid_email: 'Invalid Email',\n    invalid_password: 'Invalid Password',\n    error: 'Error',\n    wrong_credentials: 'Wrong credentials',\n    name_required: 'Name required',\n    email_already_used: 'Email already used',\n    token_required: 'Token required',\n    register_error: 'Register Error'\n};\n\n//# sourceURL=webpack:///./src/config/lang/auth.js?");

/***/ }),

/***/ "./src/config/lang/profile.js":
/*!************************************!*\
  !*** ./src/config/lang/profile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n    user_id_required: 'User id required',\n    error: 'Unknown Error',\n    name_required: 'Name Required',\n    invalid_password_4_min: 'Password must be longer than 4 characters',\n    user_updated_successfully: 'User updated successfully'\n};\n\n//# sourceURL=webpack:///./src/config/lang/profile.js?");

/***/ }),

/***/ "./src/config/lang/rescue.js":
/*!***********************************!*\
  !*** ./src/config/lang/rescue.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n    error: 'Ndodhi nje error',\n    description_required: 'Pershkrimi eshte i detyrueshem',\n    report_id_required: 'ID e sinjalizimit eshte e detyrueshme',\n    image_required: 'Fotoja eshte e detyrueshme',\n    rescue_deleted_successfully: 'Shpetimi u fshi me sukses',\n    no_permission_for_action: 'Nuk keni te drejta per te kryer kete veprim',\n    no_rescue_to_delete: 'Nuk ka shpetim per te fshire'\n};\n\n//# sourceURL=webpack:///./src/config/lang/rescue.js?");

/***/ }),

/***/ "./src/config/main.js":
/*!****************************!*\
  !*** ./src/config/main.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n    jwtSecret: 'e0d5ceae4ef7445ffbe06a6a14b2309348622d48c5c06c51',\n    jwtSession: { session: false },\n    database: { database: 'bonorong', username: 'bonorong_app', password: \"pademol0n\" }\n};\n\n//# sourceURL=webpack:///./src/config/main.js?");

/***/ }),

/***/ "./src/config/passport.js":
/*!********************************!*\
  !*** ./src/config/passport.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/admin */ \"./src/models/admin.js\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n// tell passport how to store user in session\nObject(passport__WEBPACK_IMPORTED_MODULE_0__[\"serializeUser\"])(function (user, done) {\n    done(null, user.id); //serialize user by id\n});\n\n// tell passport how to take the user from the session\nObject(passport__WEBPACK_IMPORTED_MODULE_0__[\"deserializeUser\"])(function (id, done) {\n\n    _models_admin__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fineOne({ where: { id: id } }).then((err, user) => {\n        done(err, user);\n    });\n});\n\nObject(passport__WEBPACK_IMPORTED_MODULE_0__[\"use\"])('local.signin', new passport_local__WEBPACK_IMPORTED_MODULE_2__[\"Strategy\"]({\n    usernameField: 'email',\n    papsswordField: 'password',\n    passReqToCallback: true\n}, function (req, email, password, done) {\n    //validator\n    req.checkBody('email', 'Invalid email').notEmpty().isEmail();\n    req.checkBody('password', 'Invalid password').notEmpty();\n    var errors = req.validationErrors();\n    if (errors) {\n        var messages = [];\n        errors.forEach(function (error) {\n            messages.push(error.msg);\n        });\n        return done(null, false, req.flash('error', messages));\n    }\n\n    _models_admin__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({ where: { email: email } }).then((err, user) => {\n        if (err) {\n            return done(err);\n        }\n        if (!user) {\n            return done(null, false, { message: 'No user found.' });\n        }\n        if (!user.validPassword(password)) {\n            return done(null, false, { message: 'Wrong password.' });\n        }\n\n        req.flash('messages', ['Admin logged in successfully']);\n        return done(null, user);\n    });\n}));\n\n//# sourceURL=webpack:///./src/config/passport.js?");

/***/ }),

/***/ "./src/config/passportApi.js":
/*!***********************************!*\
  !*** ./src/config/passportApi.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ \"./src/models/user.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.js */ \"./src/config/main.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst ExtractJwt = passport_jwt__WEBPACK_IMPORTED_MODULE_1__[\"ExtractJwt\"];\nconst Strategy = passport_jwt__WEBPACK_IMPORTED_MODULE_1__[\"Strategy\"];\nconst params = {\n    secretOrKey: _main_js__WEBPACK_IMPORTED_MODULE_3__[\"jwtSecret\"],\n    jwtFromRequest: ExtractJwt.fromAuthHeader()\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n    const strategy = new Strategy(params, function (payload, done) {\n        _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fineOne({ where: { id: payload.id } }).then(user => {\n            if (!user) {\n                return done(new Error(\"User not found\"), null);\n            }\n\n            return done(null, {\n                id: user.id\n            });\n        }).catch(err => {\n            return done(new Error(\"Query error\"), null);\n        });\n    });\n    Object(passport__WEBPACK_IMPORTED_MODULE_0__[\"use\"])(strategy);\n    return {\n        initialize: function () {\n            return Object(passport__WEBPACK_IMPORTED_MODULE_0__[\"initialize\"])();\n        },\n        authenticate: function () {\n            return Object(passport__WEBPACK_IMPORTED_MODULE_0__[\"authenticate\"])(\"jwt\", _main_js__WEBPACK_IMPORTED_MODULE_3__[\"jwtSession\"]);\n        }\n    };\n});;\n\n//# sourceURL=webpack:///./src/config/passportApi.js?");

/***/ }),

/***/ "./src/controllers/admin/authController.js":
/*!*************************************************!*\
  !*** ./src/controllers/admin/authController.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n    getLogin(req, res, next) {\n        res.render('admin/auth/login', { csrfToken: req.csrfToken() });\n    },\n    login(req, res, next) {\n        if (req.session.oldUrl) {\n            var oldUrl = req.session.oldUrl;\n            req.session.oldUrl = null;\n            res.redirect(oldUrl);\n        } else {\n            res.redirect('/');\n        }\n    },\n    logout(req, res, next) {\n        req.logout();\n        res.redirect('/');\n    }\n};\n\n//# sourceURL=webpack:///./src/controllers/admin/authController.js?");

/***/ }),

/***/ "./src/controllers/admin/reportController.js":
/*!***************************************************!*\
  !*** ./src/controllers/admin/reportController.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_report__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/report */ \"./src/models/report.js\");\n\n\nmodule.exports = {\n    async index(req, res, next) {\n        const pagination = req.query.pagination ? parseInt(req.query.pagination) : 10;\n        const page = req.query.page ? parseInt(req.query.page) : 1;\n        const total = await Report.find({}).count();\n        _models_report__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findAll({\n            offset: (page - 1) * pagination,\n            limit: pagination,\n            order: ['createdAt', 'DESC']\n        }).then(reports => {\n            return res.render('admin/report/index', { reports, page, pagination, total });\n        }).catch(err => next(err));\n    },\n    destroy(req, res, next) {\n        _models_report__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByPk(req.params.id).then(report => {\n            report.delete().then(() => {\n                req.flash('messages', ['Report deleted successfully']);\n                res.redirect(\"back\");\n            }).catch(err => next(err));\n        }).catch(err => next(err));\n    }\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/controllers/admin/reportController.js?");

/***/ }),

/***/ "./src/controllers/admin/userController.js":
/*!*************************************************!*\
  !*** ./src/controllers/admin/userController.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const User = __webpack_require__(/*! ../../models/user */ \"./src/models/user.js\");\n\nmodule.exports = {\n    async index(req, res, next) {\n        const pagination = req.query.pagination ? parseInt(req.query.pagination) : 10;\n        const page = req.query.page ? parseInt(req.query.page) : 1;\n        const total = await User.find({}).count();\n        User.find({}).skip((page - 1) * pagination).limit(pagination).sort({ _id: -1 }).then(users => {\n            return res.render('admin/user/index', { users, page, pagination, total });\n        }).catch(err => next(err));\n    },\n    destroy(req, res, next) {\n        req.checkParams('id', 'User id is required').notEmpty();\n        var errors = req.validationErrors();\n        if (errors) {\n            var messages = [];\n            errors.forEach(function (error) {\n                messages.push(error.msg);\n            });\n            req.flash('error', messages);\n            res.redirect(\"back\");\n        }\n        User.findById(req.params.id).then(user => {\n            const name = user.name;\n            user.delete().then(() => {\n                req.flash('messages', ['User ' + name + ' deleted successfully']);\n                res.redirect(\"back\");\n            }).catch(err => next(err));\n        }).catch(err => next(err));\n    }\n};\n\n//# sourceURL=webpack:///./src/controllers/admin/userController.js?");

/***/ }),

/***/ "./src/controllers/api/AuthController.js":
/*!***********************************************!*\
  !*** ./src/controllers/api/AuthController.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FB = __webpack_require__(/*! fb */ \"fb\");\nconst User = __webpack_require__(/*! ../../models/user */ \"./src/models/user.js\");\nconst config = __webpack_require__(/*! ../../config/main */ \"./src/config/main.js\");\nconst jwt = __webpack_require__(/*! jwt-simple */ \"jwt-simple\");\nconst lang = __webpack_require__(/*! ../../config/lang/auth */ \"./src/config/lang/auth.js\");\n\nmodule.exports = {\n    login(req, res, next) {\n\n        req.checkBody('email', lang.invalid_email).notEmpty().isEmail();\n        req.checkBody('password', lang.invalid_password).notEmpty();\n\n        const errors = req.validationErrors();\n        if (errors) {\n            return res.status(400).send({ errors });\n        }\n\n        const email = req.body.email;\n        const password = req.body.password;\n\n        User.findOne({ where: { email: email } }).then((user, error) => {\n            if (err) {\n                return res.status(500).send({ error: lang.error });\n            }\n            if (!user) {\n                return res.status(401).send({ error: lang.wrong_credentials });\n            }\n            if (!user.validPassword(password)) {\n                return res.status(401).send({ error: lang.wrong_credentials });\n            }\n\n            const payload = {\n                id: user.id\n            };\n            const token = jwt.encode(payload, config.jwtSecret);\n            return res.send({ _id: user._id, token });\n        });\n    },\n    register(req, res, next) {\n\n        req.checkBody('email', lang.invalid_email).notEmpty().isEmail();\n        req.checkBody('password', lang.invalid_password).notEmpty().isLength({ min: 4 });\n        req.checkBody('name', lang.name_required).notEmpty();\n\n        const errors = req.validationErrors();\n        if (errors) {\n            return res.status(400).send({ errors });\n        }\n\n        User.findOne({ email: req.body.email }).then(user => {\n            if (user) {\n                return res.status(401).send({ error: lang.email_already_used });\n            }\n\n            var user = new User();\n            user.email = req.body.email;\n            user.password = user.encryptPassword(req.body.password);\n            user.name = req.body.name;\n            if (req.file) user.image = req.file.filename;\n\n            user.save().then(user => {\n                const payload = {\n                    id: user.id\n                };\n                const token = jwt.encode(payload, config.jwtSecret);\n                return res.send({ _id: user._id, token });\n            }).catch(error => {\n                return res.status(500).send({ error: lang.error });\n            });\n        }).catch(error => {\n            return res.status(500).send({ error: lang.error });\n        });\n    },\n    async fbAuth(req, res, next) {\n\n        req.checkBody('token', lang.token_required).notEmpty();\n        const errors = req.validationErrors();\n        if (errors) {\n            return res.status(400).send({ error: lang.error });\n        }\n\n        FB.setAccessToken(req.body.token);\n\n        FB.api('/me', { fields: 'id,name,email' }, response => {\n\n            if (response.error) return res.status(500).send({ error: lang.error });\n            let username = null;\n            if (response.email) username = response.email;else username = `${response.id}@facebook.com`;\n\n            User.findOne({ email: username }).then(user => {\n                if (user) {\n                    const payload = {\n                        id: user.id\n                    };\n                    const token = jwt.encode(payload, config.jwtSecret);\n                    return res.send({ token });\n                }\n                let newUser = new User();\n                newUser.name = response.name;\n                newUser.email = username;\n                newUser.save().then(newUser => {\n                    const payload = {\n                        id: newUser.id\n                    };\n                    const token = jwt.encode(payload, config.jwtSecret);\n                    return res.send({ _id: newUser._id, token });\n                }).catch(error => {\n                    return res.status(500).send({ error: lang.register_error });\n                });\n            }).catch(error => {\n                return res.status(500).send({ error: lang.error });\n            });\n        });\n    }\n};\n\n//# sourceURL=webpack:///./src/controllers/api/AuthController.js?");

/***/ }),

/***/ "./src/controllers/api/ProfileController.js":
/*!**************************************************!*\
  !*** ./src/controllers/api/ProfileController.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/user */ \"./src/models/user.js\");\n/* harmony import */ var _models_report__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/report */ \"./src/models/report.js\");\n/* harmony import */ var _config_lang_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/lang/profile */ \"./src/config/lang/profile.js\");\n/* harmony import */ var _config_lang_profile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_lang_profile__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nmodule.exports = {\n    show(req, res, next) {\n        req.checkParams('id', _config_lang_profile__WEBPACK_IMPORTED_MODULE_2___default.a.user_id_required).notEmpty();\n        var errors = req.validationErrors();\n\n        if (errors) {\n            return res.status(400).send({ errors });\n        }\n\n        _models_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByPk(req.params.id).then(user => {\n            const rescues = user.getRescues();\n            res.send({ user, rescues });\n        }).catch(err => {\n            return res.status(500).send({ error: _config_lang_profile__WEBPACK_IMPORTED_MODULE_2___default.a.error });\n        });\n    },\n\n    myProfile(req, res, next) {\n        _models_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByPk(req.user.id).then(user => {\n            const rescues = user.getRescues().then(rescues => res.send({ user, rescues })).catch(err => {\n                return res.status(500).send({ error: _config_lang_profile__WEBPACK_IMPORTED_MODULE_2___default.a.error });\n            });\n        }).catch(err => {\n            return res.status(500).send({ error: _config_lang_profile__WEBPACK_IMPORTED_MODULE_2___default.a.error });\n        });\n    },\n\n    settings(req, res, next) {\n        _models_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByPk(req.user.id).then(user => {\n            res.send({ user });\n        }).catch(err => {\n            return res.status(500).send({ error: _config_lang_profile__WEBPACK_IMPORTED_MODULE_2___default.a.error });\n        });\n    },\n\n    update(req, res, next) {\n\n        req.checkBody('name', _config_lang_profile__WEBPACK_IMPORTED_MODULE_2___default.a.name_required).notEmpty();\n        if (req.body.password) req.checkBody('password', _config_lang_profile__WEBPACK_IMPORTED_MODULE_2___default.a.invalid_password_4_min).notEmpty().isLength({ min: 4 });\n\n        var errors = req.validationErrors();\n        if (errors) {\n            return res.status(400).send({ errors });\n        }\n\n        _models_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByPk(req.user.id).then(user => {\n            user.name = req.body.name ? req.body.name : user.name;\n            user.password = req.body.password ? user.encryptPassword(req.body.password) : user.password;\n            user.image = req.file ? req.file.filename : user.image;\n            user.save().then(res.send({ msg: _config_lang_profile__WEBPACK_IMPORTED_MODULE_2___default.a.user_updated_successfully, user })).catch(err => {\n                return res.status(500).send({ error: _config_lang_profile__WEBPACK_IMPORTED_MODULE_2___default.a.error });\n            });\n        }).catch(err => {\n            return res.status(500).send({ error: _config_lang_profile__WEBPACK_IMPORTED_MODULE_2___default.a.error });\n        });\n    }\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/controllers/api/ProfileController.js?");

/***/ }),

/***/ "./src/controllers/api/RescueController.js":
/*!*************************************************!*\
  !*** ./src/controllers/api/RescueController.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_report__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/report */ \"./src/models/report.js\");\n/* harmony import */ var _config_lang_rescue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/lang/rescue */ \"./src/config/lang/rescue.js\");\n/* harmony import */ var _config_lang_rescue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_lang_rescue__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nmodule.exports = {\n    index(req, res, next) {\n        const pagination = req.query.pagination ? parseInt(req.query.pagination) : 10;\n        const page = req.query.page ? parseInt(req.query.page) : 1;\n\n        _models_report__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findAll({\n            where: {\n                deleted: false\n            },\n            offset: (page - 1) * pagination,\n            limit: pagination,\n            order: ['createdAt', 'DESC']\n        }).then(rescues => {\n            return res.send({\n                rescues,\n                page,\n                pagination\n            });\n        }).catch(err => {\n            console.log(err);\n            return res.status(500).send({\n                error: _config_lang_rescue__WEBPACK_IMPORTED_MODULE_1___default.a.error\n            });\n        });\n    },\n    indexRescued(req, res, next) {\n        const pagination = req.query.pagination ? parseInt(req.query.pagination) : 10;\n        const page = req.query.page ? parseInt(req.query.page) : 1;\n\n        _models_report__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findAll({\n            where: {\n                deleted: false\n            },\n            offset: (page - 1) * pagination,\n            limit: pagination,\n            order: ['createdAt', 'DESC']\n        }).then(rescues => {\n            return res.send({\n                rescues,\n                page,\n                pagination\n            });\n        }).catch(err => {\n            return res.status(500).send({\n                error: _config_lang_rescue__WEBPACK_IMPORTED_MODULE_1___default.a.error\n            });\n        });\n    },\n    store(req, res, next) {\n        req.checkBody('description', _config_lang_rescue__WEBPACK_IMPORTED_MODULE_1___default.a.description_required).notEmpty();\n        req.checkParams('id', _config_lang_rescue__WEBPACK_IMPORTED_MODULE_1___default.a.report_id_required).notEmpty();\n\n        var errors = req.validationErrors();\n        if (!req.file) {\n            if (!errors) errors = [];\n            errors.push({\n                param: \"image\",\n                msg: _config_lang_rescue__WEBPACK_IMPORTED_MODULE_1___default.a.image_required\n            });\n        }\n        if (errors) {\n            return res.status(400).send({\n                errors\n            });\n        }\n\n        // Rescue.findOne({where:}\n        //     { id: req.params.id, $or:[ { rescue: null }, { \"rescue.deleted\": true }] },\n        //     { \"rescue\": {\n        //         user: req.user.id,\n        //         image: req.file.filename,\n        //         description: req.body.description,\n        //         deleted: false,\n        //         deletedAt: null,\n        //         createdAt: new Date()\n        //     }})\n        //     .then(report => {return res.send({ _id: report._id })})\n        //     .catch(err => { console.log(err); return res.status(500).send({ error: lang.error }) });\n    },\n    destroy(req, res, next) {\n        _models_report__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByPk(req.params.id).then(rescue => {\n            rescue.destroy().then(() => {\n                return res.send({\n                    msg: _config_lang_rescue__WEBPACK_IMPORTED_MODULE_1___default.a.rescue_deleted_successfully\n                });\n            }).catch(err => {\n                return res.status(500).send({\n                    error: _config_lang_rescue__WEBPACK_IMPORTED_MODULE_1___default.a.error\n                });\n            });\n        });\n    }\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/controllers/api/RescueController.js?");

/***/ }),

/***/ "./src/helpers/hbsHelper.js":
/*!**********************************!*\
  !*** ./src/helpers/hbsHelper.js ***!
  \**********************************/
/*! exports provided: isFirstPage, add, isLastPage, hasRescue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFirstPage\", function() { return isFirstPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isLastPage\", function() { return isLastPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasRescue\", function() { return hasRescue; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction isFirstPage(page) {\n    if (page === 1) return true;\n    return false;\n}\nfunction add(base, number) {\n    return base + number;\n}\nfunction isLastPage(total, page, pagination) {\n    if (total <= page * pagination) return true;\n    return false;\n}\nfunction hasRescue(rescue) {\n    if (rescue !== undefined && rescue.deleted === false) return true;\n    return false;\n}\n\n//# sourceURL=webpack:///./src/helpers/hbsHelper.js?");

/***/ }),

/***/ "./src/middlewares/authMiddlewares.js":
/*!********************************************!*\
  !*** ./src/middlewares/authMiddlewares.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n    isLoggedIn(req, res, next) {\n        if (req.isAuthenticated()) {\n            return next();\n        }\n        res.redirect('/auth/login');\n    },\n\n    notLoggedIn(req, res, next) {\n        if (!req.isAuthenticated()) {\n            return next();\n        }\n        res.redirect('/');\n    }\n};\n\n//# sourceURL=webpack:///./src/middlewares/authMiddlewares.js?");

/***/ }),

/***/ "./src/models/admin.js":
/*!*****************************!*\
  !*** ./src/models/admin.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role */ \"./src/models/role.js\");\nvar _this = undefined;\n\n\n\n\n\nconst admin = sequelize__WEBPACK_IMPORTED_MODULE_1___default.a.define('admin', {\n    email: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__[\"STRING\"], required: true, validate: { isEmail: true } },\n    password: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__[\"STRING\"], defaultValue: '' },\n    name: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__[\"STRING\"], required: true },\n    image: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__[\"STRING\"], default: 'user.png' },\n    uuid: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__[\"UUIDV4\"] },\n    instanceMethods: {\n        encryptPassword: () => {\n            return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_0__[\"hashSync\"])(_this.password, Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_0__[\"genSaltSync\"])(5), null);\n        },\n        validPassword: candidatePassword => {\n            return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_0__[\"compareSync\"])(candidatePassword, _this.password);\n        }\n    }\n});\n\nadmin.belongsTo(_role__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { as: 'role' });\n\n// admin.pre('delete', function(next){\n//     const Report = mongoose.model('report');\n//     Report.delete({ user: this})\n//         .then(() => {\n//             Report.update({ \"rescue.user\": this  }, { \"rescue.deleted\": true, \"rescue.deletedAt\": new Date() })\n//                 .then(() => next())\n//                 .catch(err => console.log(err));\n//         })\n//         .catch(err => console.log(err));\n// });\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (admin);\n\n//# sourceURL=webpack:///./src/models/admin.js?");

/***/ }),

/***/ "./src/models/report.js":
/*!******************************!*\
  !*** ./src/models/report.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./src/models/user.js\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _suburb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suburb */ \"./src/models/suburb.js\");\n\n\n\n\n\nconst RescueType = sequelize__WEBPACK_IMPORTED_MODULE_2___default.a.define('rescue_type', {\n    rescue_type: { type: sequelize__WEBPACK_IMPORTED_MODULE_2__[\"STRING\"] }\n});\n\nconst InjuryType = sequelize__WEBPACK_IMPORTED_MODULE_2___default.a.define('injury_type', {\n    injury_type: { type: sequelize__WEBPACK_IMPORTED_MODULE_2__[\"STRING\"] }\n});\n\nconst AnimalSize = sequelize__WEBPACK_IMPORTED_MODULE_2___default.a.define('animal_size', {\n    size: { type: sequelize__WEBPACK_IMPORTED_MODULE_2__[\"STRING\"] }\n});\n\nconst Rescue = sequelize__WEBPACK_IMPORTED_MODULE_2___default.a.define('rescue_', {\n    image: { type: sequelize__WEBPACK_IMPORTED_MODULE_2__[\"STRING\"], required: true },\n    description: { type: sequelize__WEBPACK_IMPORTED_MODULE_2__[\"STRING\"], required: true },\n    isInjured: { type: sequelize__WEBPACK_IMPORTED_MODULE_2__[\"BOOLEAN\"] },\n    isJoey: { type: sequelize__WEBPACK_IMPORTED_MODULE_2__[\"BOOLEAN\"] },\n    isContained: { type: sequelize__WEBPACK_IMPORTED_MODULE_2__[\"BOOLEAN\"] },\n    isSplitTrip: { type: sequelize__WEBPACK_IMPORTED_MODULE_2__[\"BOOLEAN\"] },\n    injuryDescription: { type: sequelize__WEBPACK_IMPORTED_MODULE_2__[\"TEXT\"] },\n    locationDetails: { type: sequelize__WEBPACK_IMPORTED_MODULE_2__[\"TEXT\"] },\n    otherDetails: { type: sequelize__WEBPACK_IMPORTED_MODULE_2__[\"TEXT\"] },\n    deleted: { type: sequelize__WEBPACK_IMPORTED_MODULE_2__[\"BOOLEAN\"], default: false }\n});\n\nRescue.hasOne(RescueType, { as: 'rescue_type' });\nRescue.hasOne(InjuryType, { as: 'injury_type' });\nRescue.hasOne(AnimalSize, { as: 'animal_size' });\nRescue.hasOne(_suburb__WEBPACK_IMPORTED_MODULE_3__[\"careLocation\"], { as: 'care_location' });\nRescue.hasOne(_suburb__WEBPACK_IMPORTED_MODULE_3__[\"suburb\"], { as: 'animal_location' });\nRescue.hasOne(_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { as: 'submitted_by' });\nRescue.hasOne(_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { as: 'attendeding' });\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ Rescue, AnimalSize, InjuryType, RescueType });\n\n//# sourceURL=webpack:///./src/models/report.js?");

/***/ }),

/***/ "./src/models/role.js":
/*!****************************!*\
  !*** ./src/models/role.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nconst Role = sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.define('role', {\n    type: { type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"STRING\"], required: true }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Role);\n\n//# sourceURL=webpack:///./src/models/role.js?");

/***/ }),

/***/ "./src/models/suburb.js":
/*!******************************!*\
  !*** ./src/models/suburb.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst careType = sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.define('care_type', {\n    name: { type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"STRING\"], required: true }\n});\n\nconst careLocation = sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.define('care_location', {\n    name: { type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"STRING\"], required: true },\n    geom: { type: Object(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"GEOMETRY\"])('Point', 4283), required: true }\n});\n\ncareLocation.hasOne(careType, { as: 'care_type' });\n\nconst suburb = sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.define('suburb', {\n    name: { type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"STRING\"], required: true },\n    geom: { type: Object(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"GEOMETRY\"])('POLYGON', 4283), required: true }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ suburb, careLocation, careType });\n\n//# sourceURL=webpack:///./src/models/suburb.js?");

/***/ }),

/***/ "./src/models/user.js":
/*!****************************!*\
  !*** ./src/models/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role */ \"./src/models/role.js\");\nvar _this = undefined;\n\n\n\n\n\nconst User = sequelize__WEBPACK_IMPORTED_MODULE_1___default.a.define('user', {\n    email: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__[\"STRING\"], required: true, validate: { isEmail: true } },\n    password: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__[\"STRING\"], defaultValue: '' },\n    name: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__[\"STRING\"], required: true },\n    image: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__[\"STRING\"], default: 'User.png' },\n    uuid: { type: sequelize__WEBPACK_IMPORTED_MODULE_1__[\"UUIDV4\"] },\n    instanceMethods: {\n        encryptPassword: () => {\n            return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_0__[\"hashSync\"])(_this.password, Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_0__[\"genSaltSync\"])(5), null);\n        },\n        validPassword: candidatePassword => {\n            return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_0__[\"compareSync\"])(candidatePassword, _this.password);\n        }\n    }\n});\n\nUser.belongsTo(_role__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { as: 'role' });\n\n// User.pre('delete', function(next){\n//     const Report = mongoose.model('report');\n//     Report.delete({ User: this})\n//         .then(() => {\n//             Report.update({ \"rescue.User\": this  }, { \"rescue.deleted\": true, \"rescue.deletedAt\": new Date() })\n//                 .then(() => next())\n//                 .catch(err => console.log(err));\n//         })\n//         .catch(err => console.log(err));\n// });\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./src/models/user.js?");

/***/ }),

/***/ "./src/routes/admin/auth.js":
/*!**********************************!*\
  !*** ./src/routes/admin/auth.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\nconst passport = __webpack_require__(/*! passport */ \"passport\");\nconst csrf = __webpack_require__(/*! csurf */ \"csurf\");\nconst authController = __webpack_require__(/*! ../../controllers/admin/authController */ \"./src/controllers/admin/authController.js\");\nconst authMiddlewares = __webpack_require__(/*! ../../middlewares/authMiddlewares */ \"./src/middlewares/authMiddlewares.js\");\n\nconst csrfProtection = csrf();\n\nrouter.get('/login', [authMiddlewares.notLoggedIn, csrfProtection], authController.getLogin);\n\nrouter.post('/login', passport.authenticate('local.signin', {\n    failureRedirect: '/auth/login',\n    failureFlash: true\n}), authController.login);\n\nrouter.get('/logout', authMiddlewares.isLoggedIn, authController.logout);\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/admin/auth.js?");

/***/ }),

/***/ "./src/routes/admin/index.js":
/*!***********************************!*\
  !*** ./src/routes/admin/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middlewares_authMiddlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middlewares/authMiddlewares */ \"./src/middlewares/authMiddlewares.js\");\n/* harmony import */ var _middlewares_authMiddlewares__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middlewares_authMiddlewares__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\n\n/* GET home page. */\nrouter.get('/', _middlewares_authMiddlewares__WEBPACK_IMPORTED_MODULE_1__[\"isLoggedIn\"], function (req, res, next) {\n  res.render('index');\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/admin/index.js?");

/***/ }),

/***/ "./src/routes/admin/report.js":
/*!************************************!*\
  !*** ./src/routes/admin/report.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_admin_reportController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/admin/reportController */ \"./src/controllers/admin/reportController.js\");\n/* harmony import */ var _middlewares_authMiddlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../middlewares/authMiddlewares */ \"./src/middlewares/authMiddlewares.js\");\n/* harmony import */ var _middlewares_authMiddlewares__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_middlewares_authMiddlewares__WEBPACK_IMPORTED_MODULE_2__);\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\n\n\n\nrouter.use(_middlewares_authMiddlewares__WEBPACK_IMPORTED_MODULE_2__[\"isLoggedIn\"]);\n\nrouter.get('/', _controllers_admin_reportController__WEBPACK_IMPORTED_MODULE_1__[\"index\"]);\nrouter.get('/delete/:id', _controllers_admin_reportController__WEBPACK_IMPORTED_MODULE_1__[\"destroy\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/admin/report.js?");

/***/ }),

/***/ "./src/routes/admin/user.js":
/*!**********************************!*\
  !*** ./src/routes/admin/user.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\nconst userController = __webpack_require__(/*! ../../controllers/admin/userController */ \"./src/controllers/admin/userController.js\");\nconst authMiddlewares = __webpack_require__(/*! ../../middlewares/authMiddlewares */ \"./src/middlewares/authMiddlewares.js\");\n\nrouter.use(authMiddlewares.isLoggedIn);\n\nrouter.get('/', userController.index);\nrouter.get('/delete/:id', userController.destroy);\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/admin/user.js?");

/***/ }),

/***/ "./src/routes/api/auth.js":
/*!********************************!*\
  !*** ./src/routes/api/auth.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst multer = __webpack_require__(/*! multer */ \"multer\");\nconst upload = multer({ dest: './public/images/user_profile_images' });\nconst router = express.Router();\nconst authController = __webpack_require__(/*! ../../controllers/api/AuthController */ \"./src/controllers/api/AuthController.js\");\nconst apiAuth = __webpack_require__(/*! ../../config/passportApi */ \"./src/config/passportApi.js\");\n\nrouter.post('/login', authController.login);\nrouter.post('/register', upload.single('image'), authController.register);\nrouter.post('/fbAuth', authController.fbAuth);\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/api/auth.js?");

/***/ }),

/***/ "./src/routes/api/profile.js":
/*!***********************************!*\
  !*** ./src/routes/api/profile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_passportApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/passportApi */ \"./src/config/passportApi.js\");\n/* harmony import */ var _controllers_api_ProfileController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controllers/api/ProfileController */ \"./src/controllers/api/ProfileController.js\");\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\n\nconst upload = multer__WEBPACK_IMPORTED_MODULE_1___default()({ dest: './public/images/user_profile_images' });\n\n\n\nrouter.get('/myprofile', Object(_config_passportApi__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().authenticate(), _controllers_api_ProfileController__WEBPACK_IMPORTED_MODULE_3__[\"myProfile\"]);\nrouter.get('/settings', Object(_config_passportApi__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().authenticate(), _controllers_api_ProfileController__WEBPACK_IMPORTED_MODULE_3__[\"settings\"]);\nrouter.get('/:id', _controllers_api_ProfileController__WEBPACK_IMPORTED_MODULE_3__[\"show\"]);\nrouter.patch('/', [Object(_config_passportApi__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().authenticate(), upload.single('image')], _controllers_api_ProfileController__WEBPACK_IMPORTED_MODULE_3__[\"update\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/api/profile.js?");

/***/ }),

/***/ "./src/routes/api/rescue.js":
/*!**********************************!*\
  !*** ./src/routes/api/rescue.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_api_RescueController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/api/RescueController */ \"./src/controllers/api/RescueController.js\");\n/* harmony import */ var _config_passportApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/passportApi */ \"./src/config/passportApi.js\");\n\n\nconst upload = multer__WEBPACK_IMPORTED_MODULE_1___default()({ dest: './public/images/rescues' });\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\n\n\n\nrouter.get('/', reportController.index);\nrouter.get('/:id', reportController.show);\nrouter.post('/:id', [Object(_config_passportApi__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().authenticate(), upload.single('image')], _controllers_api_RescueController__WEBPACK_IMPORTED_MODULE_2__[\"store\"]);\nrouter.delete('/:id', Object(_config_passportApi__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().authenticate(), _controllers_api_RescueController__WEBPACK_IMPORTED_MODULE_2__[\"destroy\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/api/rescue.js?");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "connect-flash":
/*!********************************!*\
  !*** external "connect-flash" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-flash\");\n\n//# sourceURL=webpack:///external_%22connect-flash%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "csurf":
/*!************************!*\
  !*** external "csurf" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"csurf\");\n\n//# sourceURL=webpack:///external_%22csurf%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-handlebars":
/*!*************************************!*\
  !*** external "express-handlebars" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-handlebars\");\n\n//# sourceURL=webpack:///external_%22express-handlebars%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validator\");\n\n//# sourceURL=webpack:///external_%22express-validator%22?");

/***/ }),

/***/ "fb":
/*!*********************!*\
  !*** external "fb" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fb\");\n\n//# sourceURL=webpack:///external_%22fb%22?");

/***/ }),

/***/ "jwt-simple":
/*!*****************************!*\
  !*** external "jwt-simple" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jwt-simple\");\n\n//# sourceURL=webpack:///external_%22jwt-simple%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serve-favicon\");\n\n//# sourceURL=webpack:///external_%22serve-favicon%22?");

/***/ })

/******/ });