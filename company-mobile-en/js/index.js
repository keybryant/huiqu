/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/src/js/index.js":
/*!*****************************!*\
  !*** ./app/src/js/index.js ***!
  \*****************************/
/***/ (() => {

eval(" // Vue.config.devtools = process.env.NODE_ENV === 'development';\r\n\r\n // window.onload=function(){\r\n \t $(document).ready(function(){\r\n\r\n  \r\n\r\n \t \r\n \t \t\r\n \t \t\r\nvar header = {\r\n  \"content-type\": \"application/json\",\r\n  \"Authorization\": \"Bearer \" + \"token\"\r\n}\r\n\r\n        \tvar baseUrl ='http://106.15.61.160:8020';\r\n        \t// var baseUrl ='http://localhost:8020';\r\n        \t// 创建实例时设置配置的默认值\r\nvar instance = axios.create({\r\n  baseURL: baseUrl\r\n});\r\ninstance.defaults.headers = header;\r\n  var app = new Vue({\r\n  el: '#app',\r\n  data: {\r\n    show:true,\r\n      contentIndex:0,\r\n\t  jobList:[{\r\n\t\t  title:\"结构工程师\",\r\n\t\t  price:\"7000 - 12000 \",\r\n\t\t  tags:[\"本科及以上\",\"2年工作经验\",\"深圳\"],\r\n\t\t  part:\"所属部门：产品开发部\",\r\n\t\t  bgsrc:\"assets/img/mobile/ic01_mob_joinus.png\"\r\n\t  },{\r\n\t\t title:\"电子雕刻师\",\r\n\t\t price:\"7000 - 12000 \",\r\n\t\t tags:[\"本科及以上\",\"2年工作经验\",\"深圳\"],\r\n\t\t part:\"所属部门：产品研发部\",\r\n\t\t  bgsrc:\"assets/img/mobile/ic02_mob_joinus.png\"\r\n\t\t \r\n\t  },{\r\n\t\ttitle:\"平面设计师助理\",\r\n\t\tprice:\"3500 - 5000 \",\r\n\t\ttags:[\"中专及以上\",\"应届毕业生\",\"深圳\"],\r\n\t\tpart:\"所属部门：创意设计部\"  ,\r\n\t\t bgsrc:\"assets/img/mobile/ic03_mob_joinus.png\"\r\n\t  },{\r\n\t\ttitle:\"知识产权管理专员\",\r\n\t\tprice:\"6000 - 10000 \",\r\n\t\ttags:[\"本科及以上\",\"2年工作经验\",\"深圳\"],\r\n\t\tpart:\"所属部门：商务部\"  ,\r\n\t\t bgsrc:\"assets/img/mobile/ic04_mob_joinus.png\"\r\n\t  }]\r\n  \r\n     },\r\n     methods:{\r\n     choose:function (id) {\r\n         var ele = document.getElementById(\"app\");\r\n         app.contentIndex=id\r\n\t\t console.log(\"id\",id)\r\n\r\n     \r\n   },\r\n   scroll:function () {\r\n         var contentIndex=app.contentIndex\r\n\t\t contentIndex=contentIndex+1\r\n\t\t if(contentIndex>2){\r\n\t\t\t contentIndex=0\r\n\t\t }\r\n         app.contentIndex=contentIndex\r\n   \t\t\r\n   \r\n     \r\n   }\r\n \r\n\r\n     }, mounted () {\r\n\r\n\r\n        },updated () {\r\n  \r\n    \r\n\r\n  \r\n}\r\n     \r\n \r\n  })\r\n\r\ninstance.post('/question/getPageList', \r\n   {\r\n      \r\n    }\r\n  )\r\n  .then(function (response) {\r\n    console.log(response.data);\r\n   \r\n   \r\n   \r\n  })\r\n  .catch(function (error) {\r\n    console.log(error);\r\n  })\r\n  .then(function () {\r\n    // always executed\r\n  });  \r\n\r\n\r\n\r\n})\r\n\r\n// 在实例已创建后修改默认值\r\n\r\n\r\n\r\n         \r\n \r\n\r\n\r\n \r\n\t\r\n\n\n//# sourceURL=webpack://web/./app/src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/src/js/index.js"]();
/******/ 	
/******/ })()
;