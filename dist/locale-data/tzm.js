!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.tzm=t())}(this,function(){"use strict";var e=[{locale:"tzm",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=Number(a[0])==e;return t?"other":0==e||1==e||r&&e>=11&&99>=e?"one":"other"},fields:{year:{displayName:"Asseggas",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Ayur",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Ass",relative:{0:"Assa",1:"Asekka","-1":"Assenaṭ"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Tasragt",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Tusdat",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Tusnat",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"tzm-Latn",parentLocale:"tzm"},{locale:"tzm-Latn-MA",parentLocale:"tzm-Latn"}];return e});