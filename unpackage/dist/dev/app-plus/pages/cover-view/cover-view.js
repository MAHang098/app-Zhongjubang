"use weex:vue";
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************************************************************************!*\
  !*** G:/zhongjubang/app-Zhongjubang/main.js?{"page":"pages%2Fcover-view%2Fcover-view"} ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 6);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_cover_view_cover_view_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/cover-view/cover-view.nvue?mpType=page */ 9);

        
        
        
        _pages_cover_view_cover_view_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_cover_view_cover_view_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/cover-view/cover-view'
        _pages_cover_view_cover_view_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_cover_view_cover_view_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {var _package = __webpack_require__(/*! ../package.json */ 3);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 5).default || __webpack_require__(/*! uni-stat-config */ 5);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 2 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.weexPlus = exports.default = void 0;function initUni() {

  var isFn = function isFn(v) {
    return typeof v === 'function';
  };

  var handlePromise = function handlePromise(promise) {
    return promise.then(function (data) {
      return [null, data];
    }).catch(function (err) {
      return [err];
    });
  };

  var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
  var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
  'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
  'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
  'pageScrollTo', 'drawCanvas'];


  var shouldPromise = function shouldPromise(name) {
    if (REGEX.test(name) && name !== 'createBLEConnection') {
      return false;
    }
    if (~API_NORMAL_LIST.indexOf(name)) {
      return false;
    }
    return true;
  };

  var promisify = function promisify(api) {
    return function () {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
        return api.apply(undefined, [options].concat(params));
      }
      return handlePromise(new Promise(function (resolve, reject) {
        api.apply(undefined, [Object.assign({}, options, {
          success: resolve,
          fail: reject })].
        concat(params));
        /* eslint-disable no-extend-native */
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(function (value) {
            return promise.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return promise.resolve(callback()).then(function () {
              throw reason;
            });
          });
        };
      }));
    };
  };

  var onMessageCallbacks = [];

  var origin = void 0;

  function onSubNVueMessage(data) {
    onMessageCallbacks.forEach(function (callback) {
      return callback({
        origin: origin,
        data: data });

    });
  }

  var webviewId = weexPlus.webview.currentWebview().id;

  var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
  channel.onmessage = function (event) {
    if (event.data.to === webviewId) {
      onSubNVueMessage(event.data.data);
    }
  };

  function wrapper(webview) {
    webview.$processed = true;

    var currentWebviewId = weexPlus.webview.currentWebview().id;
    var isPopupNVue = currentWebviewId === webview.id;

    var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
    var popupNVueId = webview.id;

    webview.postMessage = function (data) {
      if (hostNVueId) {
        channel.postMessage({
          data: data,
          to: isPopupNVue ? hostNVueId : popupNVueId });

      } else {
        postMessage({
          type: 'UniAppSubNVue',
          data: data });

      }
    };
    webview.onMessage = function (callback) {
      onMessageCallbacks.push(callback);
    };

    if (!webview.__uniapp_mask_id) {
      return;
    }
    origin = webview.__uniapp_host;

    var maskColor = webview.__uniapp_mask;

    var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
    maskWebview = maskWebview.parent() || maskWebview; //再次检测父
    var oldShow = webview.show;
    var oldHide = webview.hide;
    var oldClose = webview.close;

    var showMask = function showMask() {
      maskWebview.setStyle({
        mask: maskColor });

    };
    var closeMask = function closeMask() {
      maskWebview.setStyle({
        mask: 'none' });

    };
    webview.show = function () {
      showMask();

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return oldShow.apply(webview, args);
    };
    webview.hide = function () {
      closeMask();

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return oldHide.apply(webview, args);
    };
    webview.close = function () {
      closeMask();

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return oldClose.apply(webview, args);
    };
  }

  function getSubNVueById(id) {
    var webview = weexPlus.webview.getWebviewById(id);
    if (webview && !webview.$processed) {
      wrapper(webview);
    }
    return webview;
  }

  function getCurrentSubNVue() {
    return getSubNVueById(weexPlus.webview.currentWebview().id);
  }

  var plus = weex.requireModule('plus');
  var globalEvent = weex.requireModule('globalEvent');

  var id = 0;
  var callbacks = {};

  var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

  globalEvent.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppJsApi') {
      invoke(e.data.id, e.data.data);
    } else if (e.data.type === 'UniAppSubNVue') {
      onSubNVueMessage(e.data.data, e.data.options);
    } else if (e.data.type === 'onNavigationBarButtonTap') {
      if (typeof onNavigationBarButtonTapCallback === 'function') {
        onNavigationBarButtonTapCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
      if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
        onNavigationBarSearchInputChangedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
      if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
        onNavigationBarSearchInputConfirmedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
      if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
        onNavigationBarSearchInputClickedCallback(e.data.data);
      }
    }
  });

  var createCallback = function createCallback(args, type) {
    var callback = function callback(res) {
      if (isFn(args)) {
        args(res);
      } else if (args) {
        if (~res.errMsg.indexOf(':ok')) {
          isFn(args.success) && args.success(res);
        } else if (~res.errMsg.indexOf(':fail')) {
          isFn(args.fail) && args.fail(res);
        }
        isFn(args.complete) && args.complete(res);
      }
    };
    if (isFn(args) || args && isFn(args.callback)) {
      callback.keepAlive = true;
    }
    return callback;
  };

  var invoke = function invoke(callbackId, data) {
    var callback = callbacks[callbackId];
    if (callback) {
      callback(data);
      if (!callback.keepAlive) {
        delete callbacks[callbackId];
      }
    } else {
      console.error('callback[' + callbackId + '] is undefined');
    }
  };

  var publish = function publish(_ref) {
    var id = _ref.id,
    type = _ref.type,
    params = _ref.params;

    callbacks[id] = createCallback(params, type);
    plus.postMessage({
      id: id,
      type: type,
      params: params },
    UNIAPP_SERVICE_NVUE_ID);
  };

  function postMessage(data) {
    plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
  }

  var createPublish = function createPublish(name) {
    return function (args) {
      publish({
        id: id++,
        type: name,
        params: args });

    };
  };

  var onNavigationBarButtonTapCallback = void 0;
  var onNavigationBarSearchInputChangedCallback = void 0;
  var onNavigationBarSearchInputConfirmedCallback = void 0;
  var onNavigationBarSearchInputClickedCallback = void 0;

  function onNavigationBarButtonTap(callback) {
    onNavigationBarButtonTapCallback = callback;
  }

  function onNavigationBarSearchInputChanged(callback) {
    onNavigationBarSearchInputChangedCallback = callback;
  }

  function onNavigationBarSearchInputConfirmed(callback) {
    onNavigationBarSearchInputConfirmedCallback = callback;
  }

  function onNavigationBarSearchInputClicked(callback) {
    onNavigationBarSearchInputClickedCallback = callback;
  }

  function requireNativePlugin(pluginName) {
    return weex.requireModule(pluginName);
  }

  var dom = weex.requireModule('dom');

  function loadFontFace(_ref) {
    var family = _ref.family,
    source = _ref.source,
    desc = _ref.desc,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    dom.addRule('fontFace', {
      fontFamily: family,
      src: source.replace(/"/g, '\'') });

    var res = {
      errMsg: 'loadFontFace:ok',
      status: 'loaded' };

    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var globalEvent$1 = weex.requireModule('globalEvent');

  var callbacks$1 = [];

  globalEvent$1.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppReady') {
      ready.isUniAppReady = true;
      if (callbacks$1.length) {
        callbacks$1.forEach(function (callback) {
          return callback();
        });
        callbacks$1 = [];
      }
    }
  });

  function ready(callback) {
    if (typeof callback === 'function') {
      if (this.isUniAppReady) {
        callback();
      } else {
        callbacks$1.push(callback);
      }
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
    "symbol" : typeof obj;
  };

  var stream = weex.requireModule('stream');

  // let requestTaskId = 0

  var METHOD_GET = 'GET';
  var METHOD_POST = 'POST';
  var CONTENT_TYPE_JSON = 'application/json';
  var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

  var serialize = function serialize(data) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
    var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
        return JSON.stringify(data);
      } else {
        return Object.keys(data).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }).join('&');
      }
    }
    return data;
  };

  function request(_ref) {
    var url = _ref.url,
    data = _ref.data,
    header = _ref.header,
    _ref$method = _ref.method,
    method = _ref$method === undefined ? 'GET' : _ref$method,
    _ref$dataType = _ref.dataType,
    dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
    responseType = _ref.responseType,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    // requestTaskId++
    var aborted = false;

    var hasContentType = false;
    var headers = {};
    if (header) {
      for (var name in header) {
        if (!hasContentType && name.toLowerCase() === 'content-type') {
          hasContentType = true;
          headers['Content-Type'] = header[name];
        } else {
          headers[name] = header[name];
        }
      }
    }
    if (method === METHOD_GET && data) {
      url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
      serialize(data);
    }
    stream.fetch({
      url: url,
      method: method,
      headers: headers,
      type: dataType === 'json' ? 'json' : 'text',
      body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : '' },
    function (_ref2) {
      var status = _ref2.status,
      ok = _ref2.ok,
      statusText = _ref2.statusText,
      data = _ref2.data,
      headers = _ref2.headers;

      var ret = {};
      if (!status || status === -1 || aborted) {
        ret.errMsg = 'request:fail';
        isFn(fail) && fail(ret);
      } else {
        ret.data = data;
        ret.statusCode = status;
        ret.header = headers;
        isFn(success) && success(ret);
      }
      isFn(complete) && complete(ret);
    });
    return {
      abort: function abort() {
        aborted = true;
      } };

  }

  var storage = weex.requireModule('plusstorage');
  var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

  function getStorage(_ref) {
    var key = _ref.key,
    data = _ref.data,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function (ret) {
      if (ret.result === 'success') {
        var dataType = ret.data;
        storage.getItem(key, function (res) {
          if (res.result === 'success') {
            var result = res.data;
            if (dataType && result) {
              if (dataType !== 'String') {
                result = JSON.parse(result);
              }
              isFn(success) && success({
                errMsg: 'getStorage:ok',
                data: result });

            } else {
              res.errMsg = 'setStorage:fail';
              isFn(fail) && fail(res);
            }
          } else {
            res.errMsg = 'setStorage:fail';
            isFn(fail) && fail(res);
          }
          isFn(complete) && complete(res);
        });
      } else {
        ret.errMsg = 'setStorage:fail';
        isFn(fail) && fail(ret);
        isFn(complete) && complete(ret);
      }
    });
  }

  function setStorage(_ref2) {
    var key = _ref2.key,
    data = _ref2.data,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;

    var dataType = 'String';
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      dataType = 'Object';
      data = JSON.stringify(data);
    }
    storage.setItem(key, data, function (res) {
      if (res.result === 'success') {
        storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function (ret) {
          if (ret.result === 'success') {
            isFn(success) && success({
              errMsg: 'setStorage:ok' });

          } else {
            ret.errMsg = 'setStorage:fail';
            isFn(fail) && fail(ret);
          }
        });
      } else {
        res.errMsg = 'setStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
  }

  function removeStorage(_ref3) {
    var key = _ref3.key,
    data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    storage.removeItem(key, function (res) {
      if (res.result === 'success') {
        isFn(success) && success({
          errMsg: 'removeStorage:ok' });

      } else {
        res.errMsg = 'removeStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
    storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
  }

  function clearStorage(_ref4) {
    var key = _ref4.key,
    data = _ref4.data,
    success = _ref4.success,
    fail = _ref4.fail,
    complete = _ref4.complete;
  }

  var clipboard = weex.requireModule('clipboard');

  function getClipboardData(_ref) {
    var success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    clipboard.getString(function (_ref2) {
      var data = _ref2.data;

      var res = {
        errMsg: 'getClipboardData:ok',
        data: data };

      isFn(success) && success(res);
      isFn(complete) && complete(res);
    });
  }

  function setClipboardData(_ref3) {
    var data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    var res = {
      errMsg: 'setClipboardData:ok' };

    clipboard.setString(data);
    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var getEmitter = function () {
    if (typeof getUniEmitter === 'function') {
      /* eslint-disable no-undef */
      return getUniEmitter;
    }
    var Emitter = {
      $on: function $on() {
        console.warn('uni.$on failed');
      },
      $off: function $off() {
        console.warn('uni.$off failed');
      },
      $once: function $once() {
        console.warn('uni.$once failed');
      },
      $emit: function $emit() {
        console.warn('uni.$emit failed');
      } };

    return function getUniEmitter() {
      return Emitter;
    };
  }();

  function apply(ctx, method, args) {
    return ctx[method].apply(ctx, args);
  }

  function $on() {
    return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $off() {
    return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $once() {
    return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $emit() {
    return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
  }



  var api = /*#__PURE__*/Object.freeze({
    loadFontFace: loadFontFace,
    ready: ready,
    request: request,
    getStorage: getStorage,
    setStorage: setStorage,
    removeStorage: removeStorage,
    clearStorage: clearStorage,
    getClipboardData: getClipboardData,
    setClipboardData: setClipboardData,
    onSubNVueMessage: onSubNVueMessage,
    getSubNVueById: getSubNVueById,
    getCurrentSubNVue: getCurrentSubNVue,
    $on: $on,
    $off: $off,
    $once: $once,
    $emit: $emit });



  var wx = {
    uploadFile: true,
    downloadFile: true,
    chooseImage: true,
    previewImage: true,
    getImageInfo: true,
    saveImageToPhotosAlbum: true,
    chooseVideo: true,
    saveVideoToPhotosAlbum: true,
    saveFile: true,
    getSavedFileList: true,
    getSavedFileInfo: true,
    removeSavedFile: true,
    openDocument: true,
    setStorage: true,
    getStorage: true,
    getStorageInfo: true,
    removeStorage: true,
    clearStorage: true,
    getLocation: true,
    chooseLocation: true,
    openLocation: true,
    getSystemInfo: true,
    getNetworkType: true,
    makePhoneCall: true,
    scanCode: true,
    setScreenBrightness: true,
    getScreenBrightness: true,
    setKeepScreenOn: true,
    vibrateLong: true,
    vibrateShort: true,
    addPhoneContact: true,
    showToast: true,
    showLoading: true,
    hideToast: true,
    hideLoading: true,
    showModal: true,
    showActionSheet: true,
    setNavigationBarTitle: true,
    setNavigationBarColor: true,
    navigateTo: true,
    redirectTo: true,
    reLaunch: true,
    switchTab: true,
    navigateBack: true,
    getProvider: true,
    login: true,
    getUserInfo: true,
    share: true,
    requestPayment: true,
    subscribePush: true,
    unsubscribePush: true,
    onPush: true,
    offPush: true };


  var baseUni = {
    os: {
      nvue: true } };



  var uni = {};

  if (typeof Proxy !== 'undefined') {
    uni = new Proxy({}, {
      get: function get(target, name) {
        if (name === 'os') {
          return {
            nvue: true };

        }
        if (name === 'postMessage') {
          return postMessage;
        }
        if (name === 'requireNativePlugin') {
          return requireNativePlugin;
        }
        if (name === 'onNavigationBarButtonTap') {
          return onNavigationBarButtonTap;
        }
        if (name === 'onNavigationBarSearchInputChanged') {
          return onNavigationBarSearchInputChanged;
        }
        if (name === 'onNavigationBarSearchInputConfirmed') {
          return onNavigationBarSearchInputConfirmed;
        }
        if (name === 'onNavigationBarSearchInputClicked') {
          return onNavigationBarSearchInputClicked;
        }
        var method = api[name];
        if (!method) {
          method = createPublish(name);
        }
        if (shouldPromise(name)) {
          return promisify(method);
        }
        return method;
      } });

  } else {
    Object.keys(baseUni).forEach(function (key) {
      uni[key] = baseUni[key];
    });

    uni.postMessage = postMessage;

    uni.requireNativePlugin = requireNativePlugin;

    uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

    uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

    uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

    uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

    Object.keys(wx).forEach(function (name) {
      var method = api[name];
      if (!method) {
        method = createPublish(name);
      }
      if (shouldPromise(name)) {
        uni[name] = promisify(method);
      } else {
        uni[name] = method;
      }
    });
  }
  return uni;
}

var createUni;

if (typeof getUni === 'function') {
  createUni = getUni;
} else {
  createUni = initUni;
}
var weexPlus = new WeexPlus(weex);exports.weexPlus = weexPlus;var _default =
createUni(weex, weexPlus, BroadcastChannel);exports.default = _default;

/***/ }),
/* 3 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001","_id":"@dcloudio/uni-stat@2.0.0-v3-24020191018001","_inBundle":false,"_integrity":"sha512-nYBm5pRrYzrj2dKMqucWSF2PwInUMnn3MLHM/ik3gnLUEKSW61rzcY1RPlUwaH7c+Snm6N+bAJzmj3GvlrlVXA==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"^2.0.0-alpha-24420191128001","saveSpec":null,"fetchSpec":"^2.0.0-alpha-24420191128001"},"_requiredBy":["/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-v3-24020191018001.tgz","_shasum":"6ef04326cc0b945726413eebe442ab8f47c7536c","_spec":"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"197e8df53cc9d4c3f6eb722b918ccf51672b5cfe","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-v3-24020191018001"};

/***/ }),
/* 4 */
/*!******************************************************************!*\
  !*** G:/zhongjubang/app-Zhongjubang/pages.json?{"type":"style"} ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{"pages/main/main":{"titleNView":false},"pages/myRanked/myRanked":{"titleNView":false},"pages/loginPhone/loginPhone":{"titleNView":false},"pages/user/user":{"titleNView":false},"pages/otherUser/otherUser":{"titleNView":false},"pages/confirm-order/confirm-order":{"navigationBarTitleText":"确认订单"},"pages/paySuccess/paySuccess":{"navigationBarTitleText":"支付成功"},"pages/category-more/category-more":{"titleNView":false},"pages/spot-praise/spot-praise":{"titleNView":false},"pages/wanghong/wanghong":{"titleNView":false},"pages/shop/shop":{"titleNView":false},"pages/category/category":{"titleNView":false},"pages/answer/answer":{"titleNView":false},"pages/juquanVideo/juquanVideo":{"titleNView":false},"pages/juquan/juquan":{"titleNView":false,"usingComponents":{}},"pages/jingpin/jingpin":{"titleNView":false},"pages/haodian/haodian":{"titleNView":false},"pages/drafts/drafts":{"navigationBarTitleText":"草稿箱"},"pages/updatePswd/updatePswd":{"navigationBarTitleText":"找回密码","usingComponents":{}},"pages/balanceDetails/balanceDetails":{"navigationBarTitleText":"余额明细"},"pages/drawer/drawer":{"navigationBarTitleText":"Drawer 抽屉"},"pages/myBank/myBank":{"navigationBarTitleText":"我的银行卡"},"pages/about/about":{"navigationBarTitleText":"关于众居邦"},"pages/bindBank/bindBank":{"navigationBarTitleText":"绑定银行卡"},"pages/take-cash/take-cash":{"navigationBarTitleText":"提现"},"pages/setting/setting":{"navigationBarTitleText":"设置"},"pages/ID-card/ID-card":{"navigationBarTitleText":"身份认证"},"pages/releaseVideo2/releaseVideo2":{"titleNView":false,"usingComponents":{}},"pages/wallet/wallet":{"navigationBarTitleText":"我的钱包"},"pages/account/account":{"navigationBarTitleText":"账号与绑定"},"pages/ganswer/ganswer":{"titleNView":false},"pages/editInfo/editInfo":{"titleNView":false},"pages/updatePswd1/updatePswd1":{"navigationBarTitleText":"修改密码"},"pages/topicDetails/topicDetails":{"titleNView":false},"pages/release/release":{"titleNView":false},"pages/previewImage/previewImage":{"titleNView":false},"pages/releaseImage-details/releaseImage-details":{"titleNView":false},"pages/receiving-address/receiving-address":{"navigationBarTitleText":"我的收货地址","titleNView":{"buttons":[{"text":"添加收获地址","fontSize":"14px","color":"#666666","width":"110px"}]},"bounce":"none"},"pages/releaseVideo/releaseVideo":{"titleNView":false},"pages/agreement/agreement":{"titleNView":false},"pages/bindPhone/bindPhone":{"navigationBarTitleText":" "},"pages/bindPhone1/bindPhone1":{"navigationBarTitleText":" "},"pages/add-adress/add-adress":{"navigationBarTitleText":"添加收货地址","titleNView":{"buttons":[{"text":"保存","fontSize":"14px","color":"#F9B72C"}]},"bounce":"none"},"pages/setPswd/setPswd":{"navigationBarTitleText":"","usingComponents":{}},"pages/loginPwd/loginPwd":{"titleNView":false},"pages/reg/reg":{"navigationBarTitleText":"注册"},"pages/pwd/pwd":{"navigationBarTitleText":"找回密码"},"pages/changePwd/changePwd":{"navigationBarTitleText":"修改密码"},"pages/stop/stop":{"titleNView":false},"pages/shop-command/shop-command":{"titleNView":false},"pages/designeConfirm/designeConfirm":{"navigationBarTitleText":"居圈达人认证"},"pages/my-evaluate/my-evaluate":{"navigationBarTitleText":"我发布的评论"},"pages/releaseImage/search-title/search-title":{"titleNView":false},"pages/releaseImage/search-tag/search-tag":{"titleNView":false},"pages/releaseImage/release-image/release-image":{"titleNView":false},"pages/releaseImage/add-tag/add-tag":{"titleNView":false},"pages/information/information-list/information-list":{"navigationBarTitleText":"消息"},"pages/information/add-fans/add-fans":{"navigationBarTitleText":"新增粉丝"},"pages/information/collection/collection":{"navigationBarTitleText":"收藏"},"pages/information/give-like/give-like":{"navigationBarTitleText":"点赞"},"pages/information/all-fans/all-fans":{"navigationBarTitleText":"所有粉丝"},"pages/information/comments/comments":{"navigationBarTitleText":"评论"},"pages/personal/hot-points/hot-points":{"navigationBarTitleText":"热度分"},"pages/personal/hot-detail/hot-detail":{"navigationBarTitleText":"热度分明细"},"pages/personal/hot-exchange/hot-exchange":{"navigationBarTitleText":"热度分兑换","titleNView":{"splitLine":{"color":"#e2e2e2"}}},"pages/personal/order-exchange/order-exchange":{"navigationBarTitleText":"确认兑换"},"pages/personal/hot-rules/hot-rules":{"navigationBarTitleText":"热度分规则"},"pages/G-circle/search-content/search-content":{"titleNView":false},"pages/G-circle/search-list/search-list":{"titleNView":false},"pages/shopping-mall/all-order/all-order":{"titleNView":false},"pages/shopping-mall/logistics/logistics":{"navigationBarTitleText":"查看物流"},"pages/shopping-mall/replacement-apply/replacement-apply":{"navigationBarTitleText":"退款换货申请"},"pages/shopping-mall/replacement-applyDetail/replacement-applyDetail":{"navigationBarTitleText":"退款换货详情"},"pages/shopping-mall/detail/detail":{"titleNView":false},"pages/shopping-mall/detail-evaluate/detail-evaluate":{"navigationBarTitleText":"全部评价"},"pages/shopping-mall/order-comments/order-comments":{"navigationBarTitleText":"发表评价"},"pages/shopping-mall/order-detail/order-detail":{"navigationBarTitleText":"订单详情"},"pages/shopping-mall/order-search/order-search":{"titleNView":false},"pages/shopping-mall/order-searchList/order-searchList":{"titleNView":false},"pages/identity/all-authentication/all-authentication":{"navigationBarTitleText":"身份认证"},"pages/identity/rednet/rednet":{"navigationBarTitleText":"网红达人认证"},"pages/identity/circle-people/circle-people":{"navigationBarTitleText":"居圈达人认证"},"pages/identity/designer/designer":{"navigationBarTitleText":"设计师认证"},"pages/identity/owner/owner":{"navigationBarTitleText":"金牌业主认证"},"pages/identity/write/write":{"navigationBarTitleText":"居圈达人认证"},"pages/identity/rednet-people/rednet-people":{"navigationBarTitleText":"居家网红认证"},"pages/identity/owner-people/owner-people":{"navigationBarTitleText":"金牌业主认证"},"pages/identity/designer-people/designer-people":{"navigationBarTitleText":"设计狂人认证"}},"globalStyle":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#333333"}});

/***/ }),
/* 5 */
/*!*****************************************************************!*\
  !*** G:/zhongjubang/app-Zhongjubang/pages.json?{"type":"stat"} ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__27F8F94"});

/***/ }),
/* 6 */
/*!******************************************************************!*\
  !*** G:/zhongjubang/app-Zhongjubang/main.js?{"type":"appStyle"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 7).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 7 */
/*!******************************************************************************!*\
  !*** G:/zhongjubang/app-Zhongjubang/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 8);
/* harmony import */ var _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!G:/zhongjubang/app-Zhongjubang/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 9 */
/*!***********************************************************************************!*\
  !*** G:/zhongjubang/app-Zhongjubang/pages/cover-view/cover-view.nvue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cover_view_nvue_vue_type_template_id_42e8a070_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cover-view.nvue?vue&type=template&id=42e8a070&mpType=page */ 10);
/* harmony import */ var _cover_view_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cover-view.nvue?vue&type=script&lang=js&mpType=page */ 12);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cover_view_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cover_view_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./cover-view.nvue?vue&type=style&index=0&lang=css&mpType=page */ 14).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./cover-view.nvue?vue&type=style&index=0&lang=css&mpType=page */ 14).default)
          }

}

/* normalize component */

var component = Object(_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cover_view_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _cover_view_nvue_vue_type_template_id_42e8a070_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _cover_view_nvue_vue_type_template_id_42e8a070_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "2d35bb07"
  
)

injectStyles.call(component)
component.options.__file = "G:/zhongjubang/app-Zhongjubang/pages/cover-view/cover-view.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 10 */
/*!*****************************************************************************************************************!*\
  !*** G:/zhongjubang/app-Zhongjubang/pages/cover-view/cover-view.nvue?vue&type=template&id=42e8a070&mpType=page ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_cover_view_nvue_vue_type_template_id_42e8a070_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./cover-view.nvue?vue&type=template&id=42e8a070&mpType=page */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_cover_view_nvue_vue_type_template_id_42e8a070_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_cover_view_nvue_vue_type_template_id_42e8a070_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 11 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!G:/zhongjubang/app-Zhongjubang/pages/cover-view/cover-view.nvue?vue&type=template&id=42e8a070&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c(
        "view",
        [
          _c(
            "u-video",
            {
              ref: "video",
              staticClass: ["video"],
              staticStyle: { width: "750rpx", height: "1150rpx" },
              attrs: { id: "myVideo", src: _vm.src, controls: "true" }
            },
            [
              _c(
                "u-scalable",
                {
                  staticStyle: {
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "0",
                    bottom: "0"
                  }
                },
                [
                  _c(
                    "cover-view",
                    {
                      staticClass: ["coverview"],
                      staticStyle: { overflowY: "scroll" }
                    },
                    [
                      _c("u-text", { staticClass: ["text"] }, [
                        _vm._v(
                          _vm._s(
                            "\uEA06\uEA0E\uEA0C\uEA0A 我是可以滚动的cover-view 我是可以滚动的cover-view 我是可以滚动的cover-view 我是可以滚动的cover-view 我是可以滚动的cover-view 我是可以滚动的cover-view 我是可以滚动的cover-view 我是可以滚动的cover-view 我是可以滚动的cover-view"
                          )
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 12 */
/*!***********************************************************************************************************!*\
  !*** G:/zhongjubang/app-Zhongjubang/pages/cover-view/cover-view.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_cover_view_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./cover-view.nvue?vue&type=script&lang=js&mpType=page */ 13);
/* harmony import */ var _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_cover_view_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_cover_view_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_cover_view_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_cover_view_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_cover_view_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!G:/zhongjubang/app-Zhongjubang/pages/cover-view/cover-view.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      title: 'cover-view',
      src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4" };

  },
  onLoad: function onLoad() {
  },
  methods: {} };exports.default = _default;

/***/ }),
/* 14 */
/*!*******************************************************************************************************************!*\
  !*** G:/zhongjubang/app-Zhongjubang/pages/cover-view/cover-view.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_cover_view_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./cover-view.nvue?vue&type=style&index=0&lang=css&mpType=page */ 15);
/* harmony import */ var _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_cover_view_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_cover_view_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_cover_view_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_cover_view_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_d_Documents_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_cover_view_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!G:/zhongjubang/app-Zhongjubang/pages/cover-view/cover-view.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "textAlign": "center",
    "height": "400rpx"
  },
  "logo": {
    "height": "200rpx",
    "width": "200rpx",
    "marginTop": "200rpx"
  },
  "title": {
    "fontSize": "36rpx",
    "color": "#8f8f94"
  },
  "text": {
    "color": "#4CD964",
    "fontFamily": "unincomponents"
  },
  "video": {
    "width": "750rpx",
    "height": "400rpx",
    "backgroundColor": "#808080"
  },
  "coverview": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "top": "0rpx",
    "height": "150rpx",
    "borderWidth": "10rpx",
    "borderColor": "#4CD964"
  }
}

/***/ }),
/* 16 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9HOi96aG9uZ2p1YmFuZy9hcHAtWmhvbmdqdWJhbmcvbWFpbi5qcz9kOTZmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3VuaS1hcHAtcGx1cy1udnVlLXY4L2Rpc3QvaW5kZXguanM/OTkyYSIsIndlYnBhY2s6Ly8vRzovemhvbmdqdWJhbmcvYXBwLVpob25nanViYW5nL3BhZ2VzLmpzb24/NWVkZSIsIndlYnBhY2s6Ly8vRzovemhvbmdqdWJhbmcvYXBwLVpob25nanViYW5nL3BhZ2VzLmpzb24/NDllZSIsIndlYnBhY2s6Ly8vRzovemhvbmdqdWJhbmcvYXBwLVpob25nanViYW5nL21haW4uanM/NDBiMCIsIndlYnBhY2s6Ly8vRzovemhvbmdqdWJhbmcvYXBwLVpob25nanViYW5nL0FwcC52dWU/Y2IyNCIsIndlYnBhY2s6Ly8vRzovemhvbmdqdWJhbmcvYXBwLVpob25nanViYW5nL0FwcC52dWU/NGE5ZiIsIndlYnBhY2s6Ly8vRzovemhvbmdqdWJhbmcvYXBwLVpob25nanViYW5nL3BhZ2VzL2NvdmVyLXZpZXcvY292ZXItdmlldy5udnVlP2E4MmQiLCJ3ZWJwYWNrOi8vL0c6L3pob25nanViYW5nL2FwcC1aaG9uZ2p1YmFuZy9wYWdlcy9jb3Zlci12aWV3L2NvdmVyLXZpZXcubnZ1ZT8yNTUyIiwid2VicGFjazovLy9HOi96aG9uZ2p1YmFuZy9hcHAtWmhvbmdqdWJhbmcvcGFnZXMvY292ZXItdmlldy9jb3Zlci12aWV3Lm52dWU/NDYzNSIsIndlYnBhY2s6Ly8vRzovemhvbmdqdWJhbmcvYXBwLVpob25nanViYW5nL3BhZ2VzL2NvdmVyLXZpZXcvY292ZXItdmlldy5udnVlPzhkNDEiLCJ1bmktYXBwOi8vL3BhZ2VzL2NvdmVyLXZpZXcvY292ZXItdmlldy5udnVlIiwid2VicGFjazovLy9HOi96aG9uZ2p1YmFuZy9hcHAtWmhvbmdqdWJhbmcvcGFnZXMvY292ZXItdmlldy9jb3Zlci12aWV3Lm52dWU/ZmM5ZCIsIndlYnBhY2s6Ly8vRzovemhvbmdqdWJhbmcvYXBwLVpob25nanViYW5nL3BhZ2VzL2NvdmVyLXZpZXcvY292ZXItdmlldy5udnVlPzczZGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz8yODc3Il0sIm5hbWVzIjpbIlNUQVRfVkVSU0lPTiIsInZlcnNpb24iLCJTVEFUX1VSTCIsIlNUQVRfSDVfVVJMIiwiUEFHRV9QVkVSX1RJTUUiLCJBUFBfUFZFUl9USU1FIiwiT1BFUkFUSU5HX1RJTUUiLCJVVUlEX0tFWSIsIlVVSURfVkFMVUUiLCJnZXRVdWlkIiwidXVpZCIsImdldFBsYXRmb3JtTmFtZSIsInBsdXMiLCJydW50aW1lIiwiZ2V0RENsb3VkSWQiLCJlIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTZ2luIiwic3RhdERhdGEiLCJhcnIiLCJPYmplY3QiLCJrZXlzIiwic29ydEFyciIsInNvcnQiLCJzZ2luIiwic2dpblN0ciIsImkiLCJzaWduIiwib3B0aW9ucyIsInN1YnN0ciIsImxlbmd0aCIsImdldFNwbGljaW5nIiwiZGF0YSIsInN0ciIsImdldFRpbWUiLCJwYXJzZUludCIsInBsYXRmb3JtTGlzdCIsInByb2Nlc3MiLCJnZXRQYWNrTmFtZSIsInBhY2tOYW1lIiwiY2FuSVVzZSIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRWZXJzaW9uIiwiZ2V0Q2hhbm5lbCIsInBsYXRmb3JtTmFtZSIsImNoYW5uZWwiLCJnZXRTY2VuZSIsInNjZW5lIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSIsIkxhc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJnZXRGaXJzdFZpc2l0VGltZSIsInRpbWVTdG9yZ2UiLCJ0aW1lIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwidHlwZSIsInJlc2lkZW5jZVRpbWUiLCJvdmVydGltZSIsImdldFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwiX3NlbGYiLCIkdm0iLCIkbXAiLCJpcyIsIiRzY29wZSIsInJvdXRlIiwiZ2V0UGFnZVJvdXRlIiwic2VsZiIsInF1ZXJ5IiwiX3F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFBhZ2VUeXBlcyIsIm1wVHlwZSIsIiRvcHRpb25zIiwiY2FsaWJyYXRpb24iLCJldmVudE5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJQYWdlc0pzb24iLCJyZXF1aXJlIiwiZGVmYXVsdCIsInN0YXRDb25maWciLCJyZXN1bHRPcHRpb25zIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJVdGlsIiwiX3JldHJ5IiwiX3BsYXRmb3JtIiwiX25hdmlnYXRpb25CYXJUaXRsZSIsImNvbmZpZyIsInJlcG9ydCIsImx0IiwiX29wZXJhdGluZ1RpbWUiLCJfcmVwb3J0aW5nUmVxdWVzdERhdGEiLCJfX3ByZXZlbnRfdHJpZ2dlcmluZyIsIl9fbGljYXRpb25IaWRlIiwiX19saWNhdGlvblNob3ciLCJfbGFzdFBhZ2VSb3V0ZSIsInV0IiwibXBuIiwiYWsiLCJhcHBpZCIsInVzdiIsInYiLCJjaCIsImNuIiwicG4iLCJjdCIsInQiLCJ0dCIsInAiLCJwbGF0Zm9ybSIsImJyYW5kIiwibWQiLCJtb2RlbCIsInN2Iiwic3lzdGVtIiwicmVwbGFjZSIsIm1wc2RrIiwiU0RLVmVyc2lvbiIsIm1wdiIsImxhbmciLCJsYW5ndWFnZSIsInByIiwicGl4ZWxSYXRpbyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInBhdGgiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImtleSIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJ2YWx1ZSIsImVfbiIsImVfdiIsInRvU3RyaW5nIiwiZ2V0TmV0d29ya1R5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwibmV0IiwibmV0d29ya1R5cGUiLCJnZXRMb2NhdGlvbiIsIndndGluZm8iLCJnZW9jb2RlIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInRpdGxlIiwidHRuIiwidHRwaiIsInR0YyIsInJlcXVlc3REYXRhIiwicHVzaCIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZm9yRWFjaCIsImVsbSIsIm5ld0RhdGEiLCJvcHRpb25zRGF0YSIsInJlcXVlc3RzIiwiaW1hZ2VSZXF1ZXN0Iiwic2V0VGltZW91dCIsIl9zZW5kUmVxdWVzdCIsIm1ldGhvZCIsImZhaWwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiU3RhdCIsImluc3RhbmNlIiwiYWRkSW50ZXJjZXB0b3IiLCJhZGRJbnRlcmNlcHRvckluaXQiLCJpbnRlcmNlcHRMb2dpbiIsImludGVyY2VwdFNoYXJlIiwiaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQiLCJpbnZva2UiLCJhcmdzIiwiY29tcGxldGUiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJtZXNzYWdlIiwic3RhY2siLCJzdGF0IiwiZ2V0SW5zdGFuY2UiLCJpc0hpZGUiLCJsaWZlY3ljbGUiLCJvbkxhdW5jaCIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uTG9hZCIsImxvYWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsIm9sZFNoYXJlQXBwTWVzc2FnZSIsImNhbGwiLCJvblNob3ciLCJzaG93Iiwib25IaWRlIiwiaGlkZSIsIm9uVW5sb2FkIiwib25FcnJvciIsIm1haW4iLCJpbml0VW5pIiwiaXNGbiIsImhhbmRsZVByb21pc2UiLCJwcm9taXNlIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiUkVHRVgiLCJBUElfTk9STUFMX0xJU1QiLCJzaG91bGRQcm9taXNlIiwibmFtZSIsInRlc3QiLCJpbmRleE9mIiwicHJvbWlzaWZ5IiwiYXBpIiwiX2xlbiIsImFyZ3VtZW50cyIsInBhcmFtcyIsIkFycmF5IiwiX2tleSIsInVuZGVmaW5lZCIsImFwcGx5IiwiY29uY2F0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJmaW5hbGx5IiwiY2FsbGJhY2siLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsIm9uTWVzc2FnZUNhbGxiYWNrcyIsIm9yaWdpbiIsIm9uU3ViTlZ1ZU1lc3NhZ2UiLCJ3ZWJ2aWV3SWQiLCJ3ZWV4UGx1cyIsIndlYnZpZXciLCJjdXJyZW50V2VidmlldyIsImlkIiwiQnJvYWRjYXN0Q2hhbm5lbCIsIm9ubWVzc2FnZSIsImV2ZW50IiwidG8iLCJ3cmFwcGVyIiwiJHByb2Nlc3NlZCIsImN1cnJlbnRXZWJ2aWV3SWQiLCJpc1BvcHVwTlZ1ZSIsImhvc3ROVnVlSWQiLCJfX3VuaWFwcF9vcmlnaW5fdHlwZSIsIl9fdW5pYXBwX29yaWdpbl9pZCIsInBvcHVwTlZ1ZUlkIiwicG9zdE1lc3NhZ2UiLCJvbk1lc3NhZ2UiLCJfX3VuaWFwcF9tYXNrX2lkIiwiX191bmlhcHBfaG9zdCIsIm1hc2tDb2xvciIsIl9fdW5pYXBwX21hc2siLCJtYXNrV2VidmlldyIsImdldFdlYnZpZXdCeUlkIiwicGFyZW50Iiwib2xkU2hvdyIsIm9sZEhpZGUiLCJvbGRDbG9zZSIsImNsb3NlIiwic2hvd01hc2siLCJzZXRTdHlsZSIsIm1hc2siLCJjbG9zZU1hc2siLCJfbGVuMiIsIl9rZXkyIiwiX2xlbjMiLCJfa2V5MyIsImdldFN1Yk5WdWVCeUlkIiwiZ2V0Q3VycmVudFN1Yk5WdWUiLCJ3ZWV4IiwicmVxdWlyZU1vZHVsZSIsImdsb2JhbEV2ZW50IiwiY2FsbGJhY2tzIiwiVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrIiwiY3JlYXRlQ2FsbGJhY2siLCJyZXMiLCJlcnJNc2ciLCJrZWVwQWxpdmUiLCJjYWxsYmFja0lkIiwicHVibGlzaCIsIl9yZWYiLCJjcmVhdGVQdWJsaXNoIiwib25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQiLCJyZXF1aXJlTmF0aXZlUGx1Z2luIiwicGx1Z2luTmFtZSIsImRvbSIsImxvYWRGb250RmFjZSIsImZhbWlseSIsInNvdXJjZSIsImRlc2MiLCJhZGRSdWxlIiwiZm9udEZhbWlseSIsInN0YXR1cyIsImdsb2JhbEV2ZW50JDEiLCJjYWxsYmFja3MkMSIsImlzVW5pQXBwUmVhZHkiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJzdHJlYW0iLCJNRVRIT0RfR0VUIiwiTUVUSE9EX1BPU1QiLCJDT05URU5UX1RZUEVfSlNPTiIsIkNPTlRFTlRfVFlQRV9GT1JNIiwic2VyaWFsaXplIiwiY29udGVudFR5cGUiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwibWFwIiwiam9pbiIsImhlYWRlciIsIl9yZWYkbWV0aG9kIiwiX3JlZiRkYXRhVHlwZSIsImRhdGFUeXBlIiwicmVzcG9uc2VUeXBlIiwiYWJvcnRlZCIsImhhc0NvbnRlbnRUeXBlIiwiaGVhZGVycyIsImZldGNoIiwiYm9keSIsIl9yZWYyIiwib2siLCJzdGF0dXNUZXh0IiwicmV0Iiwic3RhdHVzQ29kZSIsImFib3J0Iiwic3RvcmFnZSIsIlVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSIsImdldFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJzZXRTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZVN0b3JhZ2UiLCJfcmVmMyIsInJlbW92ZUl0ZW0iLCJjbGVhclN0b3JhZ2UiLCJfcmVmNCIsImNsaXBib2FyZCIsImdldENsaXBib2FyZERhdGEiLCJnZXRTdHJpbmciLCJzZXRDbGlwYm9hcmREYXRhIiwic2V0U3RyaW5nIiwiZ2V0RW1pdHRlciIsImdldFVuaUVtaXR0ZXIiLCJFbWl0dGVyIiwiJG9uIiwid2FybiIsIiRvZmYiLCIkb25jZSIsIiRlbWl0IiwiY3R4Iiwic2xpY2UiLCJmcmVlemUiLCJ3eCIsInVwbG9hZEZpbGUiLCJkb3dubG9hZEZpbGUiLCJjaG9vc2VJbWFnZSIsInByZXZpZXdJbWFnZSIsImdldEltYWdlSW5mbyIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJjaG9vc2VWaWRlbyIsInNhdmVWaWRlb1RvUGhvdG9zQWxidW0iLCJzYXZlRmlsZSIsImdldFNhdmVkRmlsZUxpc3QiLCJnZXRTYXZlZEZpbGVJbmZvIiwicmVtb3ZlU2F2ZWRGaWxlIiwib3BlbkRvY3VtZW50IiwiZ2V0U3RvcmFnZUluZm8iLCJjaG9vc2VMb2NhdGlvbiIsIm9wZW5Mb2NhdGlvbiIsImdldFN5c3RlbUluZm8iLCJtYWtlUGhvbmVDYWxsIiwic2NhbkNvZGUiLCJzZXRTY3JlZW5CcmlnaHRuZXNzIiwiZ2V0U2NyZWVuQnJpZ2h0bmVzcyIsInNldEtlZXBTY3JlZW5PbiIsInZpYnJhdGVMb25nIiwidmlicmF0ZVNob3J0IiwiYWRkUGhvbmVDb250YWN0Iiwic2hvd1RvYXN0Iiwic2hvd0xvYWRpbmciLCJoaWRlVG9hc3QiLCJoaWRlTG9hZGluZyIsInNob3dNb2RhbCIsInNob3dBY3Rpb25TaGVldCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInNldE5hdmlnYXRpb25CYXJDb2xvciIsIm5hdmlnYXRlVG8iLCJyZWRpcmVjdFRvIiwicmVMYXVuY2giLCJzd2l0Y2hUYWIiLCJuYXZpZ2F0ZUJhY2siLCJnZXRQcm92aWRlciIsImxvZ2luIiwiZ2V0VXNlckluZm8iLCJzaGFyZSIsInJlcXVlc3RQYXltZW50Iiwic3Vic2NyaWJlUHVzaCIsInVuc3Vic2NyaWJlUHVzaCIsIm9uUHVzaCIsIm9mZlB1c2giLCJiYXNlVW5pIiwib3MiLCJudnVlIiwiUHJveHkiLCJnZXQiLCJ0YXJnZXQiLCJjcmVhdGVVbmkiLCJnZXRVbmkiLCJXZWV4UGx1cyJdLCJtYXBw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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InBhZ2VzL2NvdmVyLXZpZXcvY292ZXItdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxuICAgICAgICBpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2NvdmVyLXZpZXcvY292ZXItdmlldy5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9jb3Zlci12aWV3L2NvdmVyLXZpZXcnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICIsImltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuY29uc3QgU1RBVF9WRVJTSU9OID0gdmVyc2lvbjtcclxuY29uc3QgU1RBVF9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0JztcclxuY29uc3QgU1RBVF9INV9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0LmdpZic7IFxyXG5jb25zdCBQQUdFX1BWRVJfVElNRSA9IDE4MDA7XHJcbmNvbnN0IEFQUF9QVkVSX1RJTUUgPSAzMDA7XHJcbmNvbnN0IE9QRVJBVElOR19USU1FID0gMTA7XHJcblxyXG5jb25zdCBVVUlEX0tFWSA9ICdfX0RDX1NUQVRfVVVJRCc7XHJcbmNvbnN0IFVVSURfVkFMVUUgPSAnX19EQ19VVUlEX1ZBTFVFJztcclxuXHJcbmZ1bmN0aW9uIGdldFV1aWQoKSB7XHJcbiAgbGV0IHV1aWQgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdXVpZCA9IHBsdXMucnVudGltZS5nZXREQ2xvdWRJZCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1dWlkID0gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXVpZFxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIHV1aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVVVJRF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHV1aWQgPSBVVUlEX1ZBTFVFO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF1dWlkKSB7XHJcbiAgICB1dWlkID0gRGF0ZS5ub3coKSArICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU3KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgdXVpZCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgVVVJRF9WQUxVRSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1dWlkO1xyXG59XHJcblxyXG5jb25zdCBnZXRTZ2luID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGFyciA9IE9iamVjdC5rZXlzKHN0YXREYXRhKTtcclxuICBsZXQgc29ydEFyciA9IGFyci5zb3J0KCk7XHJcbiAgbGV0IHNnaW4gPSB7fTtcclxuICBsZXQgc2dpblN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gc29ydEFycikge1xyXG4gICAgc2dpbltzb3J0QXJyW2ldXSA9IHN0YXREYXRhW3NvcnRBcnJbaV1dO1xyXG4gICAgc2dpblN0ciArPSBzb3J0QXJyW2ldICsgJz0nICsgc3RhdERhdGFbc29ydEFycltpXV0gKyAnJic7XHJcbiAgfVxyXG4gIC8vIGNvbnN0IG9wdGlvbnMgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgLy8gc2dpblN0ciA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSkgKyAnJmtleT0nICsgU1RBVF9LRVk7XHJcbiAgLy8gY29uc3Qgc2kgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHNnaW5TdHIpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpZ246ICcnLFxyXG4gICAgb3B0aW9uczogc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRTcGxpY2luZyA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IHN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gZGF0YSkge1xyXG4gICAgc3RyICs9IGkgKyAnPScgKyBkYXRhW2ldICsgJyYnO1xyXG4gIH1cclxuICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSlcclxufTtcclxuXHJcbmNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGF0Zm9ybU5hbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1MaXN0ID0ge1xyXG4gICAgJ2FwcC1wbHVzJzogJ24nLFxyXG4gICAgJ2g1JzogJ2g1JyxcclxuICAgICdtcC13ZWl4aW4nOiAnd3gnLFxyXG4gICAgJ21wLWFsaXBheSc6ICdhbGknLFxyXG4gICAgJ21wLWJhaWR1JzogJ2JkJyxcclxuICAgICdtcC10b3V0aWFvJzogJ3R0JyxcclxuICAgICdtcC1xcSc6ICdxcSdcclxuICB9O1xyXG4gIHJldHVybiBwbGF0Zm9ybUxpc3RbcHJvY2Vzcy5lbnYuVlVFX0FQUF9QTEFURk9STV07XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWNrTmFtZSA9ICgpID0+IHtcclxuICBsZXQgcGFja05hbWUgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICd3eCcgfHwgZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdxcScpIHtcclxuICAgIC8vIOWFvOWuueW+ruS/oeWwj+eoi+W6j+S9jueJiOacrOWfuuehgOW6k1xyXG4gICAgaWYodW5pLmNhbklVc2UoJ2dldEFjY291bnRJbmZvU3luYycpKXtcclxuICAgICAgcGFja05hbWUgPSB1bmkuZ2V0QWNjb3VudEluZm9TeW5jKCkubWluaVByb2dyYW0uYXBwSWQgfHwgJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwYWNrTmFtZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VmVyc2lvbiA9ICgpID0+IHtcclxuICByZXR1cm4gZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyA/IHBsdXMucnVudGltZS52ZXJzaW9uIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDaGFubmVsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBjaGFubmVsID0gJyc7XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ24nKSB7XHJcbiAgICBjaGFubmVsID0gcGx1cy5ydW50aW1lLmNoYW5uZWw7XHJcbiAgfVxyXG4gIHJldHVybiBjaGFubmVsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2NlbmUgPSAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBzY2VuZSA9ICcnO1xyXG4gIGlmIChvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ3d4Jykge1xyXG4gICAgc2NlbmUgPSB1bmkuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5zY2VuZTtcclxuICB9XHJcbiAgcmV0dXJuIHNjZW5lO1xyXG59O1xyXG5jb25zdCBGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdGaXJzdF9fVmlzaXRfX1RpbWUnO1xyXG5jb25zdCBMYXN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0xhc3RfX1Zpc2l0X19UaW1lJztcclxuXHJcbmNvbnN0IGdldEZpcnN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVksIHRpbWUpO1xyXG4gICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIH1cclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcbmNvbnN0IGdldExhc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gJyc7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZLCBnZXRUaW1lKCkpO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFBBR0VfUkVTSURFTkNFX1RJTUUgPSAnX19wYWdlX19yZXNpZGVuY2VfX3RpbWUnO1xyXG5sZXQgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcbmxldCBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5cclxuXHJcbmNvbnN0IHNldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FLCBnZXRUaW1lKCkpO1xyXG4gIH1cclxuICByZXR1cm4gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUpO1xyXG4gIH1cclxuICByZXR1cm4gTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIC0gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5jb25zdCBUT1RBTF9fVklTSVRfX0NPVU5UID0gJ1RvdGFsX19WaXNpdF9fQ291bnQnO1xyXG5jb25zdCBnZXRUb3RhbFZpc2l0Q291bnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5UKTtcclxuICBsZXQgY291bnQgPSAxO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICBjb3VudCA9IHRpbWVTdG9yZ2U7XHJcbiAgICBjb3VudCsrO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCwgY291bnQpO1xyXG4gIHJldHVybiBjb3VudDtcclxufTtcclxuXHJcbmNvbnN0IEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMgPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgZGF0YSA9IHt9O1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3RhdERhdGEpIHtcclxuICAgIGRhdGFbcHJvcF0gPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdERhdGFbcHJvcF0pO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmxldCBTZXRfX0ZpcnN0X19UaW1lID0gMDtcclxubGV0IFNldF9fTGFzdF9fVGltZSA9IDA7XHJcblxyXG5jb25zdCBnZXRGaXJzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0ZpcnN0X19UaW1lID0gdGltZTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldExhc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gdGltZTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRSZXNpZGVuY2VUaW1lID0gKHR5cGUpID0+IHtcclxuICBsZXQgcmVzaWRlbmNlVGltZSA9IDA7XHJcbiAgaWYgKFNldF9fRmlyc3RfX1RpbWUgIT09IDApIHtcclxuICAgIHJlc2lkZW5jZVRpbWUgPSBTZXRfX0xhc3RfX1RpbWUgLSBTZXRfX0ZpcnN0X19UaW1lO1xyXG4gIH1cclxuXHJcbiAgcmVzaWRlbmNlVGltZSA9IHBhcnNlSW50KHJlc2lkZW5jZVRpbWUgLyAxMDAwKTtcclxuICByZXNpZGVuY2VUaW1lID0gcmVzaWRlbmNlVGltZSA8IDEgPyAxIDogcmVzaWRlbmNlVGltZTtcclxuICBpZiAodHlwZSA9PT0gJ2FwcCcpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBBUFBfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmICh0eXBlID09PSAncGFnZScpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBQQUdFX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc2lkZW5jZVRpbWVcclxuICB9O1xyXG5cclxufTtcclxuXHJcbmNvbnN0IGdldFJvdXRlID0gKCkgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcblxyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlKSB8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUm91dGUgPSAoc2VsZikgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcbiAgbGV0IHF1ZXJ5ID0gc2VsZi5fcXVlcnk7XHJcbiAgbGV0IHN0ciA9IHF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSA6ICcnO1xyXG4gIC8vIGNsZWFyXHJcbiAgc2VsZi5fcXVlcnkgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXMgKyBzdHI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSArIHN0ciApfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSArIHN0cik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVR5cGVzID0gKHNlbGYpID0+IHtcclxuICBpZiAoc2VsZi5tcFR5cGUgPT09ICdwYWdlJyB8fCAoc2VsZi4kbXAgJiYgc2VsZi4kbXAubXBUeXBlID09PSAncGFnZScpIHx8IHNlbGYuJG9wdGlvbnMubXBUeXBlID09PSAncGFnZScpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBjYWxpYnJhdGlvbiA9IChldmVudE5hbWUsIG9wdGlvbnMpID0+IHtcclxuICAvLyAgbG9naW4g44CBIHNoYXJlIOOAgXBheV9zdWNjZXNzIOOAgXBheV9mYWlsIOOAgXJlZ2lzdGVyIOOAgXRpdGxlXHJcbiAgaWYoIWV2ZW50TmFtZSl7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IOe8uuWwkSBbZXZlbnROYW1lXSDlj4LmlbBgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChldmVudE5hbWUubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg5oiWIE9iamVjdCDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50TmFtZSA9PT0gJ3RpdGxlJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3VuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw5Li6IHRpdGxlIOaXtu+8jFtvcHRpb25zXSDlj4LmlbDlj6rog73kuLogU3RyaW5nIOexu+WeiycpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYWdlc0pzb24gPSByZXF1aXJlKCd1bmktcGFnZXM/e1widHlwZVwiOlwic3R5bGVcIn0nKS5kZWZhdWx0O1xyXG5jb25zdCBzdGF0Q29uZmlnID0gcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJykuZGVmYXVsdCB8fCByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKTtcclxuXHJcbmNvbnN0IHJlc3VsdE9wdGlvbnMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbmNsYXNzIFV0aWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZWxmID0gJyc7XHJcbiAgICB0aGlzLl9yZXRyeSA9IDA7XHJcbiAgICB0aGlzLl9wbGF0Zm9ybSA9ICcnO1xyXG4gICAgdGhpcy5fcXVlcnkgPSB7fTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgcGFnZTogJycsXHJcbiAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgIGx0OiAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuX29wZXJhdGluZ1RpbWUgPSAwO1xyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICcxJzogW10sXHJcbiAgICAgICcxMSc6IFtdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fX3ByZXZlbnRfdHJpZ2dlcmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSAnJztcclxuICAgIHRoaXMuc3RhdERhdGEgPSB7XHJcbiAgICAgIHV1aWQ6IGdldFV1aWQoKSxcclxuICAgICAgdXQ6IGdldFBsYXRmb3JtTmFtZSgpLFxyXG4gICAgICBtcG46IGdldFBhY2tOYW1lKCksXHJcbiAgICAgIGFrOiBzdGF0Q29uZmlnLmFwcGlkLFxyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTixcclxuICAgICAgdjogZ2V0VmVyc2lvbigpLFxyXG4gICAgICBjaDogZ2V0Q2hhbm5lbCgpLFxyXG4gICAgICBjbjogJycsXHJcbiAgICAgIHBuOiAnJyxcclxuICAgICAgY3Q6ICcnLFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHR0OiAnJyxcclxuICAgICAgcDogcmVzdWx0T3B0aW9ucy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnID8gJ2EnIDogJ2knLFxyXG4gICAgICBicmFuZDogcmVzdWx0T3B0aW9ucy5icmFuZCB8fCAnJyxcclxuICAgICAgbWQ6IHJlc3VsdE9wdGlvbnMubW9kZWwsXHJcbiAgICAgIHN2OiByZXN1bHRPcHRpb25zLnN5c3RlbS5yZXBsYWNlKC8oQW5kcm9pZHxpT1MpXFxzLywgJycpLFxyXG4gICAgICBtcHNkazogcmVzdWx0T3B0aW9ucy5TREtWZXJzaW9uIHx8ICcnLFxyXG4gICAgICBtcHY6IHJlc3VsdE9wdGlvbnMudmVyc2lvbiB8fCAnJyxcclxuICAgICAgbGFuZzogcmVzdWx0T3B0aW9ucy5sYW5ndWFnZSxcclxuICAgICAgcHI6IHJlc3VsdE9wdGlvbnMucGl4ZWxSYXRpbyxcclxuICAgICAgd3c6IHJlc3VsdE9wdGlvbnMud2luZG93V2lkdGgsXHJcbiAgICAgIHdoOiByZXN1bHRPcHRpb25zLndpbmRvd0hlaWdodCxcclxuICAgICAgc3c6IHJlc3VsdE9wdGlvbnMuc2NyZWVuV2lkdGgsXHJcbiAgICAgIHNoOiByZXN1bHRPcHRpb25zLnNjcmVlbkhlaWdodFxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25TaG93KCkge1xyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ2FwcCcpO1xyXG4gICAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25IaWRlKHNlbGYsIHR5cGUpIHtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gdHJ1ZTtcclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgpO1xyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIHRoaXMuX3NlbmRIaWRlUmVxdWVzdCh7XHJcbiAgICAgIHVybHJlZjogcm91dGUsXHJcbiAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICB9LCB0eXBlKTtcclxuICB9XHJcblxyXG4gIF9wYWdlU2hvdygpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgY29uc3Qgcm91dGVwYXRoID0gZ2V0Um91dGUoKTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5jb25maWcgPSBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldyAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3LnRpdGxlVGV4dCB8fFxyXG4gICAgICBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0ubmF2aWdhdGlvbkJhclRpdGxlVGV4dCB8fCAnJztcclxuXHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uU2hvdykge1xyXG4gICAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygn6L+Z5pivIG9uTGF1Y2gg5LmL5ZCO5omn6KGM55qE56ys5LiA5qyhIHBhZ2VTaG93IO+8jOS4uuS4i+asoeiusOW9leaXtumXtOWBmuWHhuWkhycpO1xyXG4gICAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICB9XHJcblxyXG4gIF9wYWdlSGlkZSgpIHtcclxuICAgIGlmICghdGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgICB0aGlzLl9zZW5kUGFnZVJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWY6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgICBjb25maWc6ICcnLFxyXG4gICAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgICAgbHQ6ICcnXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9sb2dpbigpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdsb2dpbidcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgX3NoYXJlKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ3NoYXJlJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9wYXltZW50KGtleSkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzEnO1xyXG4gICAgbGV0IHF1ZXJ5ID0gb3B0aW9ucy5xdWVyeSAmJiBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpIDogJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx0ID0gJzEnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS51cmwgPSAob3B0aW9ucy5wYXRoICsgcXVlcnkpIHx8ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50ID0gZ2V0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5zYyA9IGdldFNjZW5lKG9wdGlvbnMuc2NlbmUpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5mdnRzID0gZ2V0Rmlyc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEubHZ0cyA9IGdldExhc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEudHZjID0gZ2V0VG90YWxWaXNpdENvdW50KCk7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB0aGlzLmdldFByb3BlcnR5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2VuZFBhZ2VSZXF1ZXN0KG9wdCkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJsLFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxMSc7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcxMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHR0OiB0aGlzLnN0YXREYXRhLnR0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlbmRIaWRlUmVxdWVzdChvcHQsIHR5cGUpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMycsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHR5cGUpO1xyXG4gIH1cclxuICBfc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICBrZXkgPSAnJyxcclxuICAgIHZhbHVlID0gXCJcIlxyXG4gIH0gPSB7fSkge1xyXG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLl9sYXN0UGFnZVJvdXRlO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMjEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIGVfbjoga2V5LFxyXG4gICAgICBlX3Y6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUudG9TdHJpbmcoKSxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBnZXROZXR3b3JrSW5mbygpIHtcclxuICAgIHVuaS5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXREYXRhLm5ldCA9IHJlc3VsdC5uZXR3b3JrVHlwZTtcclxuICAgICAgICB0aGlzLmdldExvY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkoKSB7XHJcbiAgICBwbHVzLnJ1bnRpbWUuZ2V0UHJvcGVydHkocGx1cy5ydW50aW1lLmFwcGlkLCAod2d0aW5mbykgPT4ge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLnYgPSB3Z3RpbmZvLnZlcnNpb24gfHwgJyc7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYXRpb24oKSB7XHJcbiAgICBpZiAoc3RhdENvbmZpZy5nZXRMb2NhdGlvbikge1xyXG4gICAgICB1bmkuZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgZ2VvY29kZTogdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jbiA9IHJlc3VsdC5hZGRyZXNzLmNvdW50cnk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEucG4gPSByZXN1bHQuYWRkcmVzcy5wcm92aW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jdCA9IHJlc3VsdC5hZGRyZXNzLmNpdHk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSByZXN1bHQubGF0aXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gMDtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSAwO1xyXG4gICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KGRhdGEsIHR5cGUpIHtcclxuICAgIGxldCB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGU7XHJcbiAgICBkYXRhLnR0biA9IHRpdGxlLnBhZ2U7XHJcbiAgICBkYXRhLnR0cGogPSB0aXRsZS5jb25maWc7XHJcbiAgICBkYXRhLnR0YyA9IHRpdGxlLnJlcG9ydDtcclxuXHJcbiAgICBsZXQgcmVxdWVzdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXF1ZXN0RGF0YVtkYXRhLmx0XSkge1xyXG4gICAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdERhdGFbZGF0YS5sdF0ucHVzaChkYXRhKTtcclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJywgcmVxdWVzdERhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFBhZ2VSZXNpZGVuY2VUaW1lKCkgPCBPUEVSQVRJTkdfVElNRSAmJiAhdHlwZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCB1bmlTdGF0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pU3RhdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcbiAgICAvLyDml7bpl7TotoXov4fvvIzph43mlrDojrflj5bml7bpl7TmiLNcclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBsZXQgZmlyc3RBcnIgPSBbXTtcclxuICAgIGxldCBjb250ZW50QXJyID0gW107XHJcbiAgICBsZXQgbGFzdEFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gdW5pU3RhdERhdGEpIHtcclxuICAgICAgY29uc3QgcmQgPSB1bmlTdGF0RGF0YVtpXTtcclxuICAgICAgcmQuZm9yRWFjaCgoZWxtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IGdldFNwbGljaW5nKGVsbSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgIGZpcnN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XHJcbiAgICAgICAgICBsYXN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcnN0QXJyLnB1c2goLi4uY29udGVudEFyciwgLi4ubGFzdEFycik7XHJcbiAgICBsZXQgb3B0aW9uc0RhdGEgPSB7XHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLCAvL+e7n+iuoSBTREsg54mI5pys5Y+3XHJcbiAgICAgIHQ6IHRpbWUsIC8v5Y+R6YCB6K+35rGC5pe255qE5pe26Ze05oiuXHJcbiAgICAgIHJlcXVlc3RzOiBKU09OLnN0cmluZ2lmeShmaXJzdEFyciksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge307XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEudXQgPT09ICdoNScpIHtcclxuICAgICAgdGhpcy5pbWFnZVJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyAmJiB0aGlzLnN0YXREYXRhLnAgPT09ICdhJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gIH1cclxuICBfc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpIHtcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBTVEFUX1VSTCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vIGhlYWRlcjoge1xyXG4gICAgICAvLyAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIGRhdGE6IG9wdGlvbnNEYXRhLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnc3RhdCByZXF1ZXN0IHN1Y2Nlc3MnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCsrdGhpcy5fcmV0cnkgPCAzKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogaDUg6K+35rGCXHJcbiAgICovXHJcbiAgaW1hZ2VSZXF1ZXN0KGRhdGEpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBnZXRTZ2luKEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMoZGF0YSkpLm9wdGlvbnM7XHJcbiAgICBpbWFnZS5zcmMgPSBTVEFUX0g1X1VSTCArICc/JyArIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZW5kRXZlbnQoa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8g5qCh6aqMIHR5cGUg5Y+C5pWwXHJcbiAgICBpZiAoY2FsaWJyYXRpb24oa2V5LCB2YWx1ZSkpIHJldHVyblxyXG5cclxuICAgIGlmIChrZXkgPT09ICd0aXRsZScpIHtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLnJlcG9ydCA9IHZhbHVlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXksXHJcbiAgICAgIHZhbHVlOiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlXHJcbiAgICB9LCAxKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTdGF0IGV4dGVuZHMgVXRpbCB7XHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3RhdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgLy8g5rOo5YaM5oum5oiq5ZmoXHJcbiAgICBpZiAodHlwZW9mIHVuaS5hZGRJbnRlcmNlcHRvciA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICB0aGlzLmFkZEludGVyY2VwdG9ySW5pdCgpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdExvZ2luKCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0U2hhcmUodHJ1ZSk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEludGVyY2VwdG9ySW5pdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2V0TmF2aWdhdGlvbkJhclRpdGxlJywge1xyXG4gICAgICBpbnZva2UoYXJncykge1xyXG4gICAgICAgIHNlbGYuX25hdmlnYXRpb25CYXJUaXRsZS5wYWdlID0gYXJncy50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRMb2dpbigpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignbG9naW4nLCB7XHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHNlbGYuX2xvZ2luKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0U2hhcmUodHlwZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzaGFyZScsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3JlcXVlc3RQYXltZW50Jywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9zdWNjZXNzJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X2ZhaWwnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXBvcnQob3B0aW9ucywgc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygncmVwb3J0IGluaXQnKTtcclxuICAgIC8vIH1cclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbG9hZChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICBpZiAoIXNlbGYuJHNjb3BlICYmICFzZWxmLiRtcCkge1xyXG4gICAgICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgIHNlbGYuJHNjb3BlID0gcGFnZVtwYWdlLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIHRoaXMuX3F1ZXJ5ID0gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNob3coc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblNob3coc2VsZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWFkeShzZWxmKSB7XHJcbiAgICAvLyB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgLy8gICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgaGlkZShzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlSGlkZShzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXJyb3IoZW0pIHtcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybSA9PT0gJ2RldnRvb2xzJykge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ+W9k+WJjei/kOihjOeOr+Wig+S4uuW8gOWPkeiAheW3peWFt++8jOS4jeS4iuaKpeaVsOaNruOAgicpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBlbVZhbCA9ICcnO1xyXG4gICAgaWYgKCFlbS5tZXNzYWdlKSB7XHJcbiAgICAgIGVtVmFsID0gSlNPTi5zdHJpbmdpZnkoZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZW1WYWwgPSBlbS5zdGFjaztcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBtcHNkazogdGhpcy5zdGF0RGF0YS5tcHNkayxcclxuICAgICAgbXB2OiB0aGlzLnN0YXREYXRhLm1wdixcclxuICAgICAgdjogdGhpcy5zdGF0RGF0YS52LFxyXG4gICAgICBlbTogZW1WYWwsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3RhdCA9IFN0YXQuZ2V0SW5zdGFuY2UoKTtcclxubGV0IGlzSGlkZSA9IGZhbHNlO1xyXG5jb25zdCBsaWZlY3ljbGUgPSB7XHJcbiAgb25MYXVuY2gob3B0aW9ucykge1xyXG4gICAgc3RhdC5yZXBvcnQob3B0aW9ucywgdGhpcyk7XHJcbiAgfSxcclxuICBvblJlYWR5KCkge1xyXG4gICAgc3RhdC5yZWFkeSh0aGlzKTtcclxuICB9LFxyXG4gIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICBzdGF0LmxvYWQob3B0aW9ucywgdGhpcyk7XHJcbiAgICAvLyDph43lhpnliIbkuqvvvIzojrflj5bliIbkuqvkuIrmiqXkuovku7ZcclxuICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSkge1xyXG4gICAgICBsZXQgb2xkU2hhcmVBcHBNZXNzYWdlID0gdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2U7XHJcbiAgICAgIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIHN0YXQuaW50ZXJjZXB0U2hhcmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBvbGRTaGFyZUFwcE1lc3NhZ2UuY2FsbCh0aGlzLCBvcHRpb25zKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICBzdGF0LnNob3codGhpcyk7XHJcbiAgfSxcclxuICBvbkhpZGUoKSB7XHJcbiAgICBpc0hpZGUgPSB0cnVlO1xyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICBpZiAoaXNIaWRlKSB7XHJcbiAgICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uRXJyb3IoZSkge1xyXG4gICAgc3RhdC5lcnJvcihlKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHt9O1xyXG4gIH1lbHNle1xyXG4gICAgY29uc3QgVnVlID0gcmVxdWlyZSgndnVlJyk7XHJcbiAgICAoVnVlLmRlZmF1bHQgfHwgVnVlKS5taXhpbihsaWZlY3ljbGUpO1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHtcclxuICAgICAgc3RhdC5zZW5kRXZlbnQodHlwZSwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxubWFpbigpO1xyXG4iLCJmdW5jdGlvbiBpbml0VW5pKCkge1xyXG5cclxuICAgIHZhciBpc0ZuID0gZnVuY3Rpb24gaXNGbih2KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaGFuZGxlUHJvbWlzZSA9IGZ1bmN0aW9uIGhhbmRsZVByb21pc2UocHJvbWlzZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW251bGwsIGRhdGFdO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gW2Vycl07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBSRUdFWCA9IC9eXFwkfF5vbnxeY3JlYXRlfFN5bmMkfE1hbmFnZXIkfF5wYXVzZS87XHJcbiAgICB2YXIgQVBJX05PUk1BTF9MSVNUID0gWydvcycsICdnZXRDdXJyZW50U3ViTlZ1ZScsICdnZXRTdWJOVnVlQnlJZCcsICdzdG9wUmVjb3JkJywgJ3N0b3BWb2ljZScsXHJcbiAgICAgICAgJ3N0b3BCYWNrZ3JvdW5kQXVkaW8nLCAnc3RvcFB1bGxEb3duUmVmcmVzaCcsICdoaWRlS2V5Ym9hcmQnLCAnaGlkZVRvYXN0JywgJ2hpZGVMb2FkaW5nJyxcclxuICAgICAgICAnc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2hpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdjYW5JVXNlJywgJ25hdmlnYXRlQmFjaycsICdjbG9zZVNvY2tldCcsXHJcbiAgICAgICAgJ3BhZ2VTY3JvbGxUbycsICdkcmF3Q2FudmFzJ1xyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgc2hvdWxkUHJvbWlzZSA9IGZ1bmN0aW9uIHNob3VsZFByb21pc2UobmFtZSkge1xyXG4gICAgICAgIGlmIChSRUdFWC50ZXN0KG5hbWUpICYmIG5hbWUgIT09ICdjcmVhdGVCTEVDb25uZWN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh+QVBJX05PUk1BTF9MSVNULmluZGV4T2YobmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShhcGkpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNGbihvcHRpb25zLnN1Y2Nlc3MpIHx8IGlzRm4ob3B0aW9ucy5mYWlsKSB8fCBpc0ZuKG9wdGlvbnMuY29tcGxldGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpLmFwcGx5KHVuZGVmaW5lZCwgW29wdGlvbnNdLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUHJvbWlzZShuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIGFwaS5hcHBseSh1bmRlZmluZWQsIFtPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiByZWplY3RcclxuICAgICAgICAgICAgICAgIH0pXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1leHRlbmQtbmF0aXZlICovXHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyByZWFzb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbk1lc3NhZ2VDYWxsYmFja3MgPSBbXTtcclxuXHJcbiAgICB2YXIgb3JpZ2luID0gdm9pZCAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uU3ViTlZ1ZU1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW46IG9yaWdpbixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuXHJcbiAgICB2YXIgY2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKCdVTkktQVBQLVNVQk5WVUUnKTtcclxuICAgIGNoYW5uZWwub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuZGF0YS50byA9PT0gd2Vidmlld0lkKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZXZlbnQuZGF0YS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHdyYXBwZXIod2Vidmlldykge1xyXG4gICAgICAgIHdlYnZpZXcuJHByb2Nlc3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50V2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG4gICAgICAgIHZhciBpc1BvcHVwTlZ1ZSA9IGN1cnJlbnRXZWJ2aWV3SWQgPT09IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHZhciBob3N0TlZ1ZUlkID0gd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5fdHlwZSA9PT0gJ3VuaU5WaWV3JyAmJiB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl9pZDtcclxuICAgICAgICB2YXIgcG9wdXBOVnVlSWQgPSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB3ZWJ2aWV3LnBvc3RNZXNzYWdlID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoaG9zdE5WdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0bzogaXNQb3B1cE5WdWUgPyBob3N0TlZ1ZUlkIDogcG9wdXBOVnVlSWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdVbmlBcHBTdWJOVnVlJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5vbk1lc3NhZ2UgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCF3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcmlnaW4gPSB3ZWJ2aWV3Ll9fdW5pYXBwX2hvc3Q7XHJcblxyXG4gICAgICAgIHZhciBtYXNrQ29sb3IgPSB3ZWJ2aWV3Ll9fdW5pYXBwX21hc2s7XHJcblxyXG4gICAgICAgIHZhciBtYXNrV2VidmlldyA9IHdlZXhQbHVzLndlYnZpZXcuZ2V0V2Vidmlld0J5SWQod2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKTtcclxuICAgICAgICBtYXNrV2VidmlldyA9IG1hc2tXZWJ2aWV3LnBhcmVudCgpIHx8IG1hc2tXZWJ2aWV3Oy8v5YaN5qyh5qOA5rWL54i2XHJcbiAgICAgICAgdmFyIG9sZFNob3cgPSB3ZWJ2aWV3LnNob3c7XHJcbiAgICAgICAgdmFyIG9sZEhpZGUgPSB3ZWJ2aWV3LmhpZGU7XHJcbiAgICAgICAgdmFyIG9sZENsb3NlID0gd2Vidmlldy5jbG9zZTtcclxuXHJcbiAgICAgICAgdmFyIHNob3dNYXNrID0gZnVuY3Rpb24gc2hvd01hc2soKSB7XHJcbiAgICAgICAgICAgIG1hc2tXZWJ2aWV3LnNldFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IG1hc2tDb2xvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBjbG9zZU1hc2sgPSBmdW5jdGlvbiBjbG9zZU1hc2soKSB7XHJcbiAgICAgICAgICAgIG1hc2tXZWJ2aWV3LnNldFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG1hc2s6ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuc2hvdyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzaG93TWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRTaG93LmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5oaWRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZEhpZGUuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LmNsb3NlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZENsb3NlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3ViTlZ1ZUJ5SWQoaWQpIHtcclxuICAgICAgICB2YXIgd2VidmlldyA9IHdlZXhQbHVzLndlYnZpZXcuZ2V0V2Vidmlld0J5SWQoaWQpO1xyXG4gICAgICAgIGlmICh3ZWJ2aWV3ICYmICF3ZWJ2aWV3LiRwcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgd3JhcHBlcih3ZWJ2aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdlYnZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFN1Yk5WdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFN1Yk5WdWVCeUlkKHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBsdXMgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXMnKTtcclxuICAgIHZhciBnbG9iYWxFdmVudCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgaWQgPSAwO1xyXG4gICAgdmFyIGNhbGxiYWNrcyA9IHt9O1xyXG5cclxuICAgIHZhciBVTklBUFBfU0VSVklDRV9OVlVFX0lEID0gJ19fdW5pYXBwX19zZXJ2aWNlJztcclxuXHJcbiAgICBnbG9iYWxFdmVudC5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBKc0FwaScpIHtcclxuICAgICAgICAgICAgaW52b2tlKGUuZGF0YS5pZCwgZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBTdWJOVnVlJykge1xyXG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGUuZGF0YS5kYXRhLCBlLmRhdGEub3B0aW9ucyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGNyZWF0ZUNhbGxiYWNrID0gZnVuY3Rpb24gY3JlYXRlQ2FsbGJhY2soYXJncywgdHlwZSkge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKHJlcykge1xyXG4gICAgICAgICAgICBpZiAoaXNGbihhcmdzKSkge1xyXG4gICAgICAgICAgICAgICAgYXJncyhyZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6b2snKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oYXJncy5zdWNjZXNzKSAmJiBhcmdzLnN1Y2Nlc3MocmVzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOmZhaWwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oYXJncy5mYWlsKSAmJiBhcmdzLmZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlzRm4oYXJncy5jb21wbGV0ZSkgJiYgYXJncy5jb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoaXNGbihhcmdzKSB8fCBhcmdzICYmIGlzRm4oYXJncy5jYWxsYmFjaykpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sua2VlcEFsaXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaW52b2tlID0gZnVuY3Rpb24gaW52b2tlKGNhbGxiYWNrSWQsIGRhdGEpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrLmtlZXBBbGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbGxiYWNrWycgKyBjYWxsYmFja0lkICsgJ10gaXMgdW5kZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHVibGlzaCA9IGZ1bmN0aW9uIHB1Ymxpc2goX3JlZikge1xyXG4gICAgICAgIHZhciBpZCA9IF9yZWYuaWQsXHJcbiAgICAgICAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXHJcbiAgICAgICAgICAgIHBhcmFtcyA9IF9yZWYucGFyYW1zO1xyXG5cclxuICAgICAgICBjYWxsYmFja3NbaWRdID0gY3JlYXRlQ2FsbGJhY2socGFyYW1zLCB0eXBlKTtcclxuICAgICAgICBwbHVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgICAgIH0sIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0TWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZShkYXRhLCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY3JlYXRlUHVibGlzaCA9IGZ1bmN0aW9uIGNyZWF0ZVB1Ymxpc2gobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgICAgIHB1Ymxpc2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkKyssXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBhcmdzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gdm9pZCAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVpcmVOYXRpdmVQbHVnaW4ocGx1Z2luTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB3ZWV4LnJlcXVpcmVNb2R1bGUocGx1Z2luTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRvbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZEZvbnRGYWNlKF9yZWYpIHtcclxuICAgICAgICB2YXIgZmFtaWx5ID0gX3JlZi5mYW1pbHksXHJcbiAgICAgICAgICAgIHNvdXJjZSA9IF9yZWYuc291cmNlLFxyXG4gICAgICAgICAgICBkZXNjID0gX3JlZi5kZXNjLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIGRvbS5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuICAgICAgICAgICAgZm9udEZhbWlseTogZmFtaWx5LFxyXG4gICAgICAgICAgICBzcmM6IHNvdXJjZS5yZXBsYWNlKC9cIi9nLCAnXFwnJylcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdsb2FkRm9udEZhY2U6b2snLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdsb2FkZWQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnbG9iYWxFdmVudCQxID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cclxuICAgIHZhciBjYWxsYmFja3MkMSA9IFtdO1xyXG5cclxuICAgIGdsb2JhbEV2ZW50JDEuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwUmVhZHknKSB7XHJcbiAgICAgICAgICAgIHJlYWR5LmlzVW5pQXBwUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tzJDEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiByZWFkeShjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmlBcHBSZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcclxuICAgIH0gOiBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgP1xyXG4gICAgICAgICAgICBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHN0cmVhbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnc3RyZWFtJyk7XHJcblxyXG4gICAgLy8gbGV0IHJlcXVlc3RUYXNrSWQgPSAwXHJcblxyXG4gICAgdmFyIE1FVEhPRF9HRVQgPSAnR0VUJztcclxuICAgIHZhciBNRVRIT0RfUE9TVCA9ICdQT1NUJztcclxuICAgIHZhciBDT05URU5UX1RZUEVfSlNPTiA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgIHZhciBDT05URU5UX1RZUEVfRk9STSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xyXG5cclxuICAgIHZhciBzZXJpYWxpemUgPSBmdW5jdGlvbiBzZXJpYWxpemUoZGF0YSkge1xyXG4gICAgICAgIHZhciBtZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IE1FVEhPRF9HRVQ7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBDT05URU5UX1RZUEVfRk9STTtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBpZiAobWV0aG9kLnRvVXBwZXJDYXNlKCkgPT09IE1FVEhPRF9QT1NUICYmIGNvbnRlbnRUeXBlLnRvTG93ZXJDYXNlKCkgPT09IENPTlRFTlRfVFlQRV9KU09OKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfSkuam9pbignJicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXF1ZXN0KF9yZWYpIHtcclxuICAgICAgICB2YXIgdXJsID0gX3JlZi51cmwsXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlciA9IF9yZWYuaGVhZGVyLFxyXG4gICAgICAgICAgICBfcmVmJG1ldGhvZCA9IF9yZWYubWV0aG9kLFxyXG4gICAgICAgICAgICBtZXRob2QgPSBfcmVmJG1ldGhvZCA9PT0gdW5kZWZpbmVkID8gJ0dFVCcgOiBfcmVmJG1ldGhvZCxcclxuICAgICAgICAgICAgX3JlZiRkYXRhVHlwZSA9IF9yZWYuZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlID0gX3JlZiRkYXRhVHlwZSA9PT0gdW5kZWZpbmVkID8gJ2pzb24nIDogX3JlZiRkYXRhVHlwZSxcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlID0gX3JlZi5yZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgLy8gcmVxdWVzdFRhc2tJZCsrXHJcbiAgICAgICAgdmFyIGFib3J0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIGhhc0NvbnRlbnRUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSB7fTtcclxuICAgICAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0NvbnRlbnRUeXBlICYmIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNDb250ZW50VHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBoZWFkZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbbmFtZV0gPSBoZWFkZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gTUVUSE9EX0dFVCAmJiBkYXRhKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArICh+dXJsLmluZGV4T2YoJz8nKSA/IHVybC5zdWJzdHIoLTEpID09PSAnJicgfHwgdXJsLnN1YnN0cigtMSkgPT09ICc/JyA/ICcnIDogJyYnIDogJz8nKSArXHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemUoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0cmVhbS5mZXRjaCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgdHlwZTogZGF0YVR5cGUgPT09ICdqc29uJyA/ICdqc29uJyA6ICd0ZXh0JyxcclxuICAgICAgICAgICAgYm9keTogbWV0aG9kICE9PSBNRVRIT0RfR0VUID8gc2VyaWFsaXplKGRhdGEsIG1ldGhvZCwgaGVhZGVyc1snQ29udGVudC1UeXBlJ10pIDogJydcclxuICAgICAgICB9LCBmdW5jdGlvbihfcmVmMikge1xyXG4gICAgICAgICAgICB2YXIgc3RhdHVzID0gX3JlZjIuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgb2sgPSBfcmVmMi5vayxcclxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSBfcmVmMi5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzID0gX3JlZjIuaGVhZGVycztcclxuXHJcbiAgICAgICAgICAgIHZhciByZXQgPSB7fTtcclxuICAgICAgICAgICAgaWYgKCFzdGF0dXMgfHwgc3RhdHVzID09PSAtMSB8fCBhYm9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3JlcXVlc3Q6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldC5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldC5zdGF0dXNDb2RlID0gc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgcmV0LmhlYWRlciA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiBhYm9ydCgpIHtcclxuICAgICAgICAgICAgICAgIGFib3J0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc3RvcmFnZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1c3N0b3JhZ2UnKTtcclxuICAgIHZhciBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUgPSAnX19UWVBFJztcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdG9yYWdlKF9yZWYpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZi5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgc3RvcmFnZS5nZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhVHlwZSA9IHJldC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5nZXRJdGVtKGtleSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVHlwZSAmJiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVHlwZSAhPT0gJ1N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ2dldFN0b3JhZ2U6b2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFN0b3JhZ2UoX3JlZjIpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjIua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYyLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYyLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgZGF0YVR5cGUgPSAnU3RyaW5nJztcclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlID0gJ09iamVjdCc7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGRhdGFUeXBlLCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdzZXRTdG9yYWdlOm9rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVTdG9yYWdlKF9yZWYzKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYzLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYzLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMy5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAncmVtb3ZlU3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdyZW1vdmVTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclN0b3JhZ2UoX3JlZjQpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjQua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjQuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWY0LnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmNC5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWY0LmNvbXBsZXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjbGlwYm9hcmQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2NsaXBib2FyZCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldENsaXBib2FyZERhdGEoX3JlZikge1xyXG4gICAgICAgIHZhciBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIGNsaXBib2FyZC5nZXRTdHJpbmcoZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBfcmVmMi5kYXRhO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgICAgIGVyck1zZzogJ2dldENsaXBib2FyZERhdGE6b2snLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDbGlwYm9hcmREYXRhKF9yZWYzKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgIGVyck1zZzogJ3NldENsaXBib2FyZERhdGE6b2snXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjbGlwYm9hcmQuc2V0U3RyaW5nKGRhdGEpO1xyXG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdldEVtaXR0ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGdldFVuaUVtaXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuICAgICAgICAgICAgcmV0dXJuIGdldFVuaUVtaXR0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBFbWl0dGVyID0ge1xyXG4gICAgICAgICAgICAkb246IGZ1bmN0aW9uICRvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvbiBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJG9mZjogZnVuY3Rpb24gJG9mZigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvZmYgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvbmNlOiBmdW5jdGlvbiAkb25jZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvbmNlIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkZW1pdDogZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kZW1pdCBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldFVuaUVtaXR0ZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFbWl0dGVyO1xyXG4gICAgICAgIH07XHJcbiAgICB9KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwbHkoY3R4LCBtZXRob2QsIGFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gY3R4W21ldGhvZF0uYXBwbHkoY3R4LCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbicsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9mZigpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9mZicsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbmNlJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJGVtaXQnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdmFyIGFwaSA9IC8qI19fUFVSRV9fKi8gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgbG9hZEZvbnRGYWNlOiBsb2FkRm9udEZhY2UsXHJcbiAgICAgICAgcmVhZHk6IHJlYWR5LFxyXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogZ2V0U3RvcmFnZSxcclxuICAgICAgICBzZXRTdG9yYWdlOiBzZXRTdG9yYWdlLFxyXG4gICAgICAgIHJlbW92ZVN0b3JhZ2U6IHJlbW92ZVN0b3JhZ2UsXHJcbiAgICAgICAgY2xlYXJTdG9yYWdlOiBjbGVhclN0b3JhZ2UsXHJcbiAgICAgICAgZ2V0Q2xpcGJvYXJkRGF0YTogZ2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBzZXRDbGlwYm9hcmREYXRhOiBzZXRDbGlwYm9hcmREYXRhLFxyXG4gICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2U6IG9uU3ViTlZ1ZU1lc3NhZ2UsXHJcbiAgICAgICAgZ2V0U3ViTlZ1ZUJ5SWQ6IGdldFN1Yk5WdWVCeUlkLFxyXG4gICAgICAgIGdldEN1cnJlbnRTdWJOVnVlOiBnZXRDdXJyZW50U3ViTlZ1ZSxcclxuICAgICAgICAkb246ICRvbixcclxuICAgICAgICAkb2ZmOiAkb2ZmLFxyXG4gICAgICAgICRvbmNlOiAkb25jZSxcclxuICAgICAgICAkZW1pdDogJGVtaXRcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgd3ggPSB7XHJcbiAgICAgICAgdXBsb2FkRmlsZTogdHJ1ZSxcclxuICAgICAgICBkb3dubG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgY2hvb3NlSW1hZ2U6IHRydWUsXHJcbiAgICAgICAgcHJldmlld0ltYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldEltYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICBzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIGNob29zZVZpZGVvOiB0cnVlLFxyXG4gICAgICAgIHNhdmVWaWRlb1RvUGhvdG9zQWxidW06IHRydWUsXHJcbiAgICAgICAgc2F2ZUZpbGU6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlTGlzdDogdHJ1ZSxcclxuICAgICAgICBnZXRTYXZlZEZpbGVJbmZvOiB0cnVlLFxyXG4gICAgICAgIHJlbW92ZVNhdmVkRmlsZTogdHJ1ZSxcclxuICAgICAgICBvcGVuRG9jdW1lbnQ6IHRydWUsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldFN0b3JhZ2VJbmZvOiB0cnVlLFxyXG4gICAgICAgIHJlbW92ZVN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgY2xlYXJTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldExvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUxvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIG9wZW5Mb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBnZXRTeXN0ZW1JbmZvOiB0cnVlLFxyXG4gICAgICAgIGdldE5ldHdvcmtUeXBlOiB0cnVlLFxyXG4gICAgICAgIG1ha2VQaG9uZUNhbGw6IHRydWUsXHJcbiAgICAgICAgc2NhbkNvZGU6IHRydWUsXHJcbiAgICAgICAgc2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBnZXRTY3JlZW5CcmlnaHRuZXNzOiB0cnVlLFxyXG4gICAgICAgIHNldEtlZXBTY3JlZW5PbjogdHJ1ZSxcclxuICAgICAgICB2aWJyYXRlTG9uZzogdHJ1ZSxcclxuICAgICAgICB2aWJyYXRlU2hvcnQ6IHRydWUsXHJcbiAgICAgICAgYWRkUGhvbmVDb250YWN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dUb2FzdDogdHJ1ZSxcclxuICAgICAgICBzaG93TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBoaWRlVG9hc3Q6IHRydWUsXHJcbiAgICAgICAgaGlkZUxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgc2hvd01vZGFsOiB0cnVlLFxyXG4gICAgICAgIHNob3dBY3Rpb25TaGVldDogdHJ1ZSxcclxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyVGl0bGU6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhckNvbG9yOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlVG86IHRydWUsXHJcbiAgICAgICAgcmVkaXJlY3RUbzogdHJ1ZSxcclxuICAgICAgICByZUxhdW5jaDogdHJ1ZSxcclxuICAgICAgICBzd2l0Y2hUYWI6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVCYWNrOiB0cnVlLFxyXG4gICAgICAgIGdldFByb3ZpZGVyOiB0cnVlLFxyXG4gICAgICAgIGxvZ2luOiB0cnVlLFxyXG4gICAgICAgIGdldFVzZXJJbmZvOiB0cnVlLFxyXG4gICAgICAgIHNoYXJlOiB0cnVlLFxyXG4gICAgICAgIHJlcXVlc3RQYXltZW50OiB0cnVlLFxyXG4gICAgICAgIHN1YnNjcmliZVB1c2g6IHRydWUsXHJcbiAgICAgICAgdW5zdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIG9uUHVzaDogdHJ1ZSxcclxuICAgICAgICBvZmZQdXNoOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYXNlVW5pID0ge1xyXG4gICAgICAgIG9zOiB7XHJcbiAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB1bmkgPSB7fTtcclxuXHJcbiAgICBpZiAodHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHVuaSA9IG5ldyBQcm94eSh7fSwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3Bvc3RNZXNzYWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncmVxdWlyZU5hdGl2ZVBsdWdpbicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWlyZU5hdGl2ZVBsdWdpbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGFwaVtuYW1lXTtcclxuICAgICAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2lmeShtZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhiYXNlVW5pKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICB1bmlba2V5XSA9IGJhc2VVbmlba2V5XTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdW5pLnBvc3RNZXNzYWdlID0gcG9zdE1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luID0gcmVxdWlyZU5hdGl2ZVBsdWdpbjtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCA9IG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHd4KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGFwaVtuYW1lXTtcclxuICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShtZXRob2QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5pO1xyXG59XHJcblxyXG52YXIgY3JlYXRlVW5pO1xyXG5cclxuaWYgKHR5cGVvZiBnZXRVbmkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIGNyZWF0ZVVuaSA9IGdldFVuaTtcclxufSBlbHNlIHtcclxuICAgIGNyZWF0ZVVuaSA9IGluaXRVbmk7XHJcbn1cclxudmFyIHdlZXhQbHVzID0gbmV3IFdlZXhQbHVzKHdlZXgpO1xyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVbmkod2VleCwgd2VleFBsdXMsIEJyb2FkY2FzdENoYW5uZWwpO1xyXG5leHBvcnQge1xyXG4gICAgd2VleFBsdXNcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1wicGFnZXNcIjp7XCJwYWdlcy9tYWluL21haW5cIjp7XCJ0aXRsZU5WaWV3XCI6ZmFsc2V9LFwicGFnZXMvbXlSYW5rZWQvbXlSYW5rZWRcIjp7XCJ0aXRsZU5WaWV3XCI6ZmFsc2V9LFwicGFnZXMvbG9naW5QaG9uZS9sb2dpblBob25lXCI6e1widGl0bGVOVmlld1wiOmZhbHNlfSxcInBhZ2VzL3VzZXIvdXNlclwiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy9vdGhlclVzZXIvb3RoZXJVc2VyXCI6e1widGl0bGVOVmlld1wiOmZhbHNlfSxcInBhZ2VzL2NvbmZpcm0tb3JkZXIvY29uZmlybS1vcmRlclwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuehruiupOiuouWNlVwifSxcInBhZ2VzL3BheVN1Y2Nlc3MvcGF5U3VjY2Vzc1wiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaUr+S7mOaIkOWKn1wifSxcInBhZ2VzL2NhdGVnb3J5LW1vcmUvY2F0ZWdvcnktbW9yZVwiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy9zcG90LXByYWlzZS9zcG90LXByYWlzZVwiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy93YW5naG9uZy93YW5naG9uZ1wiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy9zaG9wL3Nob3BcIjp7XCJ0aXRsZU5WaWV3XCI6ZmFsc2V9LFwicGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnlcIjp7XCJ0aXRsZU5WaWV3XCI6ZmFsc2V9LFwicGFnZXMvYW5zd2VyL2Fuc3dlclwiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy9qdXF1YW5WaWRlby9qdXF1YW5WaWRlb1wiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy9qdXF1YW4vanVxdWFuXCI6e1widGl0bGVOVmlld1wiOmZhbHNlLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvamluZ3Bpbi9qaW5ncGluXCI6e1widGl0bGVOVmlld1wiOmZhbHNlfSxcInBhZ2VzL2hhb2RpYW4vaGFvZGlhblwiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy9kcmFmdHMvZHJhZnRzXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi6I2J56i/566xXCJ9LFwicGFnZXMvdXBkYXRlUHN3ZC91cGRhdGVQc3dkXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5om+5Zue5a+G56CBXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9iYWxhbmNlRGV0YWlscy9iYWxhbmNlRGV0YWlsc1wiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuS9memineaYjue7hlwifSxcInBhZ2VzL2RyYXdlci9kcmF3ZXJcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJEcmF3ZXIg5oq95bGJXCJ9LFwicGFnZXMvbXlCYW5rL215QmFua1wiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaIkeeahOmTtuihjOWNoVwifSxcInBhZ2VzL2Fib3V0L2Fib3V0XCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5YWz5LqO5LyX5bGF6YKmXCJ9LFwicGFnZXMvYmluZEJhbmsvYmluZEJhbmtcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLnu5Hlrprpk7booYzljaFcIn0sXCJwYWdlcy90YWtlLWNhc2gvdGFrZS1jYXNoXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5o+Q546wXCJ9LFwicGFnZXMvc2V0dGluZy9zZXR0aW5nXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi6K6+572uXCJ9LFwicGFnZXMvSUQtY2FyZC9JRC1jYXJkXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi6Lqr5Lu96K6k6K+BXCJ9LFwicGFnZXMvcmVsZWFzZVZpZGVvMi9yZWxlYXNlVmlkZW8yXCI6e1widGl0bGVOVmlld1wiOmZhbHNlLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvd2FsbGV0L3dhbGxldFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaIkeeahOmSseWMhVwifSxcInBhZ2VzL2FjY291bnQvYWNjb3VudFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIui0puWPt+S4jue7keWumlwifSxcInBhZ2VzL2dhbnN3ZXIvZ2Fuc3dlclwiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy9lZGl0SW5mby9lZGl0SW5mb1wiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy91cGRhdGVQc3dkMS91cGRhdGVQc3dkMVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuS/ruaUueWvhueggVwifSxcInBhZ2VzL3RvcGljRGV0YWlscy90b3BpY0RldGFpbHNcIjp7XCJ0aXRsZU5WaWV3XCI6ZmFsc2V9LFwicGFnZXMvcmVsZWFzZS9yZWxlYXNlXCI6e1widGl0bGVOVmlld1wiOmZhbHNlfSxcInBhZ2VzL3ByZXZpZXdJbWFnZS9wcmV2aWV3SW1hZ2VcIjp7XCJ0aXRsZU5WaWV3XCI6ZmFsc2V9LFwicGFnZXMvcmVsZWFzZUltYWdlLWRldGFpbHMvcmVsZWFzZUltYWdlLWRldGFpbHNcIjp7XCJ0aXRsZU5WaWV3XCI6ZmFsc2V9LFwicGFnZXMvcmVjZWl2aW5nLWFkZHJlc3MvcmVjZWl2aW5nLWFkZHJlc3NcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmiJHnmoTmlLbotKflnLDlnYBcIixcInRpdGxlTlZpZXdcIjp7XCJidXR0b25zXCI6W3tcInRleHRcIjpcIua3u+WKoOaUtuiOt+WcsOWdgFwiLFwiZm9udFNpemVcIjpcIjE0cHhcIixcImNvbG9yXCI6XCIjNjY2NjY2XCIsXCJ3aWR0aFwiOlwiMTEwcHhcIn1dfSxcImJvdW5jZVwiOlwibm9uZVwifSxcInBhZ2VzL3JlbGVhc2VWaWRlby9yZWxlYXNlVmlkZW9cIjp7XCJ0aXRsZU5WaWV3XCI6ZmFsc2V9LFwicGFnZXMvYWdyZWVtZW50L2FncmVlbWVudFwiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy9iaW5kUGhvbmUvYmluZFBob25lXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwiIFwifSxcInBhZ2VzL2JpbmRQaG9uZTEvYmluZFBob25lMVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIiBcIn0sXCJwYWdlcy9hZGQtYWRyZXNzL2FkZC1hZHJlc3NcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmt7vliqDmlLbotKflnLDlnYBcIixcInRpdGxlTlZpZXdcIjp7XCJidXR0b25zXCI6W3tcInRleHRcIjpcIuS/neWtmFwiLFwiZm9udFNpemVcIjpcIjE0cHhcIixcImNvbG9yXCI6XCIjRjlCNzJDXCJ9XX0sXCJib3VuY2VcIjpcIm5vbmVcIn0sXCJwYWdlcy9zZXRQc3dkL3NldFBzd2RcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL2xvZ2luUHdkL2xvZ2luUHdkXCI6e1widGl0bGVOVmlld1wiOmZhbHNlfSxcInBhZ2VzL3JlZy9yZWdcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLms6jlhoxcIn0sXCJwYWdlcy9wd2QvcHdkXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5om+5Zue5a+G56CBXCJ9LFwicGFnZXMvY2hhbmdlUHdkL2NoYW5nZVB3ZFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuS/ruaUueWvhueggVwifSxcInBhZ2VzL3N0b3Avc3RvcFwiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy9zaG9wLWNvbW1hbmQvc2hvcC1jb21tYW5kXCI6e1widGl0bGVOVmlld1wiOmZhbHNlfSxcInBhZ2VzL2Rlc2lnbmVDb25maXJtL2Rlc2lnbmVDb25maXJtXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5bGF5ZyI6L6+5Lq66K6k6K+BXCJ9LFwicGFnZXMvbXktZXZhbHVhdGUvbXktZXZhbHVhdGVcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmiJHlj5HluIPnmoTor4TorrpcIn0sXCJwYWdlcy9yZWxlYXNlSW1hZ2Uvc2VhcmNoLXRpdGxlL3NlYXJjaC10aXRsZVwiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy9yZWxlYXNlSW1hZ2Uvc2VhcmNoLXRhZy9zZWFyY2gtdGFnXCI6e1widGl0bGVOVmlld1wiOmZhbHNlfSxcInBhZ2VzL3JlbGVhc2VJbWFnZS9yZWxlYXNlLWltYWdlL3JlbGVhc2UtaW1hZ2VcIjp7XCJ0aXRsZU5WaWV3XCI6ZmFsc2V9LFwicGFnZXMvcmVsZWFzZUltYWdlL2FkZC10YWcvYWRkLXRhZ1wiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy9pbmZvcm1hdGlvbi9pbmZvcm1hdGlvbi1saXN0L2luZm9ybWF0aW9uLWxpc3RcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmtojmga9cIn0sXCJwYWdlcy9pbmZvcm1hdGlvbi9hZGQtZmFucy9hZGQtZmFuc1wiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaWsOWinueyieS4nVwifSxcInBhZ2VzL2luZm9ybWF0aW9uL2NvbGxlY3Rpb24vY29sbGVjdGlvblwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaUtuiXj1wifSxcInBhZ2VzL2luZm9ybWF0aW9uL2dpdmUtbGlrZS9naXZlLWxpa2VcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLngrnotZ5cIn0sXCJwYWdlcy9pbmZvcm1hdGlvbi9hbGwtZmFucy9hbGwtZmFuc1wiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaJgOacieeyieS4nVwifSxcInBhZ2VzL2luZm9ybWF0aW9uL2NvbW1lbnRzL2NvbW1lbnRzXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi6K+E6K66XCJ9LFwicGFnZXMvcGVyc29uYWwvaG90LXBvaW50cy9ob3QtcG9pbnRzXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi54Ot5bqm5YiGXCJ9LFwicGFnZXMvcGVyc29uYWwvaG90LWRldGFpbC9ob3QtZGV0YWlsXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi54Ot5bqm5YiG5piO57uGXCJ9LFwicGFnZXMvcGVyc29uYWwvaG90LWV4Y2hhbmdlL2hvdC1leGNoYW5nZVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIueDreW6puWIhuWFkeaNolwiLFwidGl0bGVOVmlld1wiOntcInNwbGl0TGluZVwiOntcImNvbG9yXCI6XCIjZTJlMmUyXCJ9fX0sXCJwYWdlcy9wZXJzb25hbC9vcmRlci1leGNoYW5nZS9vcmRlci1leGNoYW5nZVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuehruiupOWFkeaNolwifSxcInBhZ2VzL3BlcnNvbmFsL2hvdC1ydWxlcy9ob3QtcnVsZXNcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLng63luqbliIbop4TliJlcIn0sXCJwYWdlcy9HLWNpcmNsZS9zZWFyY2gtY29udGVudC9zZWFyY2gtY29udGVudFwiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy9HLWNpcmNsZS9zZWFyY2gtbGlzdC9zZWFyY2gtbGlzdFwiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy9zaG9wcGluZy1tYWxsL2FsbC1vcmRlci9hbGwtb3JkZXJcIjp7XCJ0aXRsZU5WaWV3XCI6ZmFsc2V9LFwicGFnZXMvc2hvcHBpbmctbWFsbC9sb2dpc3RpY3MvbG9naXN0aWNzXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5p+l55yL54mp5rWBXCJ9LFwicGFnZXMvc2hvcHBpbmctbWFsbC9yZXBsYWNlbWVudC1hcHBseS9yZXBsYWNlbWVudC1hcHBseVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIumAgOasvuaNoui0p+eUs+ivt1wifSxcInBhZ2VzL3Nob3BwaW5nLW1hbGwvcmVwbGFjZW1lbnQtYXBwbHlEZXRhaWwvcmVwbGFjZW1lbnQtYXBwbHlEZXRhaWxcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLpgIDmrL7mjaLotKfor6bmg4VcIn0sXCJwYWdlcy9zaG9wcGluZy1tYWxsL2RldGFpbC9kZXRhaWxcIjp7XCJ0aXRsZU5WaWV3XCI6ZmFsc2V9LFwicGFnZXMvc2hvcHBpbmctbWFsbC9kZXRhaWwtZXZhbHVhdGUvZGV0YWlsLWV2YWx1YXRlXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5YWo6YOo6K+E5Lu3XCJ9LFwicGFnZXMvc2hvcHBpbmctbWFsbC9vcmRlci1jb21tZW50cy9vcmRlci1jb21tZW50c1wiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuWPkeihqOivhOS7t1wifSxcInBhZ2VzL3Nob3BwaW5nLW1hbGwvb3JkZXItZGV0YWlsL29yZGVyLWRldGFpbFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuiuouWNleivpuaDhVwifSxcInBhZ2VzL3Nob3BwaW5nLW1hbGwvb3JkZXItc2VhcmNoL29yZGVyLXNlYXJjaFwiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy9zaG9wcGluZy1tYWxsL29yZGVyLXNlYXJjaExpc3Qvb3JkZXItc2VhcmNoTGlzdFwiOntcInRpdGxlTlZpZXdcIjpmYWxzZX0sXCJwYWdlcy9pZGVudGl0eS9hbGwtYXV0aGVudGljYXRpb24vYWxsLWF1dGhlbnRpY2F0aW9uXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi6Lqr5Lu96K6k6K+BXCJ9LFwicGFnZXMvaWRlbnRpdHkvcmVkbmV0L3JlZG5ldFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIue9kee6oui+vuS6uuiupOivgVwifSxcInBhZ2VzL2lkZW50aXR5L2NpcmNsZS1wZW9wbGUvY2lyY2xlLXBlb3BsZVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuWxheWciOi+vuS6uuiupOivgVwifSxcInBhZ2VzL2lkZW50aXR5L2Rlc2lnbmVyL2Rlc2lnbmVyXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi6K6+6K6h5biI6K6k6K+BXCJ9LFwicGFnZXMvaWRlbnRpdHkvb3duZXIvb3duZXJcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLph5HniYzkuJrkuLvorqTor4FcIn0sXCJwYWdlcy9pZGVudGl0eS93cml0ZS93cml0ZVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuWxheWciOi+vuS6uuiupOivgVwifSxcInBhZ2VzL2lkZW50aXR5L3JlZG5ldC1wZW9wbGUvcmVkbmV0LXBlb3BsZVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuWxheWutue9kee6ouiupOivgVwifSxcInBhZ2VzL2lkZW50aXR5L293bmVyLXBlb3BsZS9vd25lci1wZW9wbGVcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLph5HniYzkuJrkuLvorqTor4FcIn0sXCJwYWdlcy9pZGVudGl0eS9kZXNpZ25lci1wZW9wbGUvZGVzaWduZXItcGVvcGxlXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi6K6+6K6h54uC5Lq66K6k6K+BXCJ9fSxcImdsb2JhbFN0eWxlXCI6e1wibmF2aWdhdGlvbkJhclRleHRTdHlsZVwiOlwiYmxhY2tcIixcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjpcIiNGRkZGRkZcIixcImJhY2tncm91bmRDb2xvclwiOlwiIzMzMzMzM1wifX0iLCJleHBvcnQgZGVmYXVsdCB7XCJhcHBpZFwiOlwiX19VTklfXzI3RjhGOTRcIn0iLCJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIWQ6XFxcXERvY3VtZW50c1xcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhZDpcXFxcRG9jdW1lbnRzXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhZDpcXFxcRG9jdW1lbnRzXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhZDpcXFxcRG9jdW1lbnRzXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhZDpcXFxcRG9jdW1lbnRzXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIWQ6XFxcXERvY3VtZW50c1xcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhZDpcXFxcRG9jdW1lbnRzXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhZDpcXFxcRG9jdW1lbnRzXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhZDpcXFxcRG9jdW1lbnRzXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhZDpcXFxcRG9jdW1lbnRzXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7fSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY292ZXItdmlldy5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyZThhMDcwJm1wVHlwZT1wYWdlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY292ZXItdmlldy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvdmVyLXZpZXcubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKCkge1xuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jb3Zlci12aWV3Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2NvdmVyLXZpZXcubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhZDpcXFxcRG9jdW1lbnRzXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjJkMzViYjA3XCJcbiAgXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRzovemhvbmdqdWJhbmcvYXBwLVpob25nanViYW5nL3BhZ2VzL2NvdmVyLXZpZXcvY292ZXItdmlldy5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hZDpcXFxcRG9jdW1lbnRzXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhZDpcXFxcRG9jdW1lbnRzXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFkOlxcXFxEb2N1bWVudHNcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LTAhZDpcXFxcRG9jdW1lbnRzXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0wIS4vY292ZXItdmlldy5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyZThhMDcwJm1wVHlwZT1wYWdlXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInUtdmlkZW9cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcInZpZGVvXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ2aWRlb1wiXSxcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNzUwcnB4XCIsIGhlaWdodDogXCIxMTUwcnB4XCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibXlWaWRlb1wiLCBzcmM6IF92bS5zcmMsIGNvbnRyb2xzOiBcInRydWVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInUtc2NhbGFibGVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiMFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJjb3Zlci12aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiY292ZXJ2aWV3XCJdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG92ZXJmbG93WTogXCJzY3JvbGxcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx1RUEwNlxcdUVBMEVcXHVFQTBDXFx1RUEwQSDmiJHmmK/lj6/ku6Xmu5rliqjnmoRjb3Zlci12aWV3IOaIkeaYr+WPr+S7pea7muWKqOeahGNvdmVyLXZpZXcg5oiR5piv5Y+v5Lul5rua5Yqo55qEY292ZXItdmlldyDmiJHmmK/lj6/ku6Xmu5rliqjnmoRjb3Zlci12aWV3IOaIkeaYr+WPr+S7pea7muWKqOeahGNvdmVyLXZpZXcg5oiR5piv5Y+v5Lul5rua5Yqo55qEY292ZXItdmlldyDmiJHmmK/lj6/ku6Xmu5rliqjnmoRjb3Zlci12aWV3IOaIkeaYr+WPr+S7pea7muWKqOeahGNvdmVyLXZpZXcg5oiR5piv5Y+v5Lul5rua5Yqo55qEY292ZXItdmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFkOlxcXFxEb2N1bWVudHNcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIWQ6XFxcXERvY3VtZW50c1xcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFkOlxcXFxEb2N1bWVudHNcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTAhLi9jb3Zlci12aWV3Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFkOlxcXFxEb2N1bWVudHNcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIWQ6XFxcXERvY3VtZW50c1xcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFkOlxcXFxEb2N1bWVudHNcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTAhLi9jb3Zlci12aWV3Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIjx0ZW1wbGF0ZT5cclxuICAgIDx2aWV3PlxyXG4gICAgICAgIDx2aWRlbyByZWY9XCJ2aWRlb1wiIGlkPVwibXlWaWRlb1wiIGNsYXNzPVwidmlkZW9cIiBzdHlsZT1cIndpZHRoOjc1MHJweDtoZWlnaHQ6MTE1MHJweDtcIiA6c3JjPVwic3JjXCIgY29udHJvbHM9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgIDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXJ2aWV3XCIgc3R5bGU9XCJvdmVyZmxvdy15OiBzY3JvbGw7XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRleHRcIj57eyAnXFx1RUEwNlxcdUVBMEVcXHVFQTBDXFx1RUEwQSDmiJHmmK/lj6/ku6Xmu5rliqjnmoRjb3Zlci12aWV3IOaIkeaYr+WPr+S7pea7muWKqOeahGNvdmVyLXZpZXcg5oiR5piv5Y+v5Lul5rua5Yqo55qEY292ZXItdmlldyDmiJHmmK/lj6/ku6Xmu5rliqjnmoRjb3Zlci12aWV3IOaIkeaYr+WPr+S7pea7muWKqOeahGNvdmVyLXZpZXcg5oiR5piv5Y+v5Lul5rua5Yqo55qEY292ZXItdmlldyDmiJHmmK/lj6/ku6Xmu5rliqjnmoRjb3Zlci12aWV3IOaIkeaYr+WPr+S7pea7muWKqOeahGNvdmVyLXZpZXcg5oiR5piv5Y+v5Lul5rua5Yqo55qEY292ZXItdmlldycgfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvY292ZXItdmlldz5cclxuICAgICAgICA8L3ZpZGVvPlxyXG4gICAgPC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdjb3Zlci12aWV3JyxcclxuICAgICAgICAgICAgICAgIHNyYzogXCJodHRwczovL2ltZy5jZG4uYWxpeXVuLmRjbG91ZC5uZXQuY24vZ3VpZGUvdW5pYXBwLyVFNyVBQyVBQzElRTglQUUlQjIlRUYlQkMlODh1bmktYXBwJUU0JUJBJUE3JUU1JTkzJTgxJUU0JUJCJThCJUU3JUJCJThEJUVGJUJDJTg5LSUyMERDbG91ZCVFNSVBRSU5OCVFNiU5NiVCOSVFOCVBNyU4NiVFOSVBMiU5MSVFNiU5NSU5OSVFNyVBOCU4QkAyMDE4MTEyNi5tcDRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDB1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMjAwdXB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDB1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwdXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnVweDtcclxuICAgICAgICBjb2xvcjogIzhmOGY5NDtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dCB7XHJcbiAgICAgICAgY29sb3I6ICM0Q0Q5NjQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHVuaW5jb21wb25lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIC52aWRlbyB7XHJcbiAgICAgICAgd2lkdGg6IDc1MHJweDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb3ZlcnZpZXcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMHJweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHJweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDEwcnB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzRDRDk2NDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFkOlxcXFxEb2N1bWVudHNcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIWQ6XFxcXERvY3VtZW50c1xcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIWQ6XFxcXERvY3VtZW50c1xcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIWQ6XFxcXERvY3VtZW50c1xcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIWQ6XFxcXERvY3VtZW50c1xcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMCEuL2NvdmVyLXZpZXcubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hZDpcXFxcRG9jdW1lbnRzXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFkOlxcXFxEb2N1bWVudHNcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMSFkOlxcXFxEb2N1bWVudHNcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiFkOlxcXFxEb2N1bWVudHNcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyFkOlxcXFxEb2N1bWVudHNcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTAhLi9jb3Zlci12aWV3Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGVudFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiBcIjQwMHJweFwiXG4gIH0sXG4gIFwibG9nb1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIyMDBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiMjAwcnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMDBycHhcIlxuICB9LFxuICBcInRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzZycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmOGY5NFwiXG4gIH0sXG4gIFwidGV4dFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM0Q0Q5NjRcIixcbiAgICBcImZvbnRGYW1pbHlcIjogXCJ1bmluY29tcG9uZW50c1wiXG4gIH0sXG4gIFwidmlkZW9cIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQwMHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzgwODA4MFwiXG4gIH0sXG4gIFwiY292ZXJ2aWV3XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJ0b3BcIjogXCIwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNTBycHhcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiMTBycHhcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzRDRDk2NFwiXG4gIH1cbn0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==