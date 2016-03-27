var Handlebars = require('handlebars');
var relativeDate = require('./DateTime/relativeDate');
var startTime = require('./DateTime/startTime');
var shortDate = require('./DateTime/shortDate');
var day = require('./DateTime/day');
var month = require('./DateTime/month');
var lts = require('./DateTime/lts');
var formatDate = require('./DateTime/formatDate');
var unlessToday = require('./DateTime/unlessToday');

Handlebars.registerHelper('shortDate', shortDate);
Handlebars.registerHelper('RelativeDate', relativeDate);
Handlebars.registerHelper('day', day);
Handlebars.registerHelper('month', month);
Handlebars.registerHelper('StartTime', startTime);
Handlebars.registerHelper('lts', lts);
Handlebars.registerHelper('formatDate', formatDate);
Handlebars.registerHelper('unless_today', unlessToday);
