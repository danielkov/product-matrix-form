(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(26)},26:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),o=t(4),s=t.n(o),r=t(3),k=t(1),i=t(8),m=t(2);function b(){var e=Object(k.a)(['\n    font-size: 17px;\n    line-height: 1.7;\n    font-family: "Avenir Next Rounded",sans-serif;\n    font-weight: 400;\n    font-style: normal;\n    color: #000;\n    -webkit-font-smoothing: antialiased;\n    margin-bottom: 16px;\n']);return b=function(){return e},e}var z=m.a.form(b()),g=function(e){var n=e.children,t=e.onChange,o=Object(a.useState)([]),s=Object(r.a)(o,2),k=s[0],m=s[1],b=Object(a.useCallback)(function(e){m(e),t(e)},[m]);return l.a.createElement(z,null,l.a.Children.map(n,function(e){return Object(i.a)({},e,{props:Object(i.a)({},e.props,{state:k,setState:b})})}))},u=t(12);function d(){var e=Object(k.a)(["\nmargin-right: 12px !important;\n"]);return d=function(){return e},e}var y=m.a.input(d()),h=function(e){var n=e.index,t=e.question,o=e.options,s=e.state,r=e.setState,k=Object(a.useCallback)(function(e){var t=Object(u.a)(s);t[n]=e,r(t)},[s]);return l.a.createElement("div",null,l.a.createElement("h3",null,t),o.map(function(e,t){return l.a.createElement("div",{key:e},l.a.createElement("label",{htmlFor:"radio-".concat(n,"-").concat(t)},l.a.createElement(y,{type:"radio",name:"".concat(n),value:t,onChange:function(e){return k(parseInt(e.target.value,10))},id:"radio-".concat(n,"-").concat(t)}),e))}))};function c(){var e=Object(k.a)(['\n    margin: 12px 0;\n    font-size: 17px;\n    line-height: 1.7;\n    font-family: "Avenir Next Rounded",sans-serif;\n    font-weight: 400;\n    font-style: normal;\n    color: #000;\n    -webkit-font-smoothing: antialiased;\n    margin-bottom: 16px;\n']);return c=function(){return e},e}function f(){var e=Object(k.a)(['\n  display: inline-block;\n  padding: 8px 16px;\n  margin: 0;\n  font-size: 0.94118em;\n  font-family: "Avenir Next Rounded",sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 1.8;\n  text-decoration: none;\n  text-align: center;\n  vertical-align: middle;\n  min-height: 44px;\n  white-space: nowrap;\n  cursor: pointer;\n  border: 1px solid transparent;\n  user-select: none;\n  border-radius: 2px;\n  background-color: #537ba4;\n  color: #fff;\n']);return f=function(){return e},e}var p=m.a.button(f()),j=m.a.div(c()),v=[["Kisebb s\xfalyod miatt a motor teljes\xedtm\xe9nye lehet kisebb. A legink\xe1bb elterjedt motor\n    teljes\xedtm\xe9ny a 250 wattos. Enn\xe9l kisebb teljes\xedtm\xe9ny\u0171 elektromos motort nem \xe9rdemes\n    v\xe1s\xe1rolnod. A ker\xe9kp\xe1r stabilit\xe1sa \xe9rdek\xe9ben a k\xf6z\xe9pmotoros v\xe1ltozat a legjobb a\n    s\xfalyeloszt\xe1s miatt. Min\xe9l nagyobb a wattsz\xe1m, ann\xe1l bik\xe1bb lesz a motor!","A ker\xe9kp\xe1rosok t\xf6bbs\xe9ge 50-80 kg k\xf6z\xf6tti, tesztel\xe9sek alapj\xe1n a motor teljes\xedtm\xe9nye 250-\n    500W k\xf6z\xf6tt a megfelel\u0151. 250W-n\xe1l kisebb teljes\xedtm\xe9ny\u0171 motort nem \xe9rdemes v\xe1s\xe1rolnod. A\n    ker\xe9kp\xe1r stabilit\xe1sa \xe9rdek\xe9ben a k\xf6z\xe9pmotoros v\xe1ltozat a legjobb a s\xfalyeloszt\xe1s miatt.\n    Gondolkodhatsz ak\xe1r egy 350-500w-osban is, ezzel ak\xe1r 45-km/h sebess\xe9ggel is tudsz haladni\n    nagyobb meger\u0151ltet\xe9s n\xe9lk\xfcl. Min\xe9l nagyobb a wattsz\xe1m, ann\xe1l bik\xe1bb lesz a motor.","80kg feletti s\xfalyod miatt \xe9rdemes a nagyobb teljes\xedtm\xe9ny\u0171 motorokban gondolkodnod. A\n    legink\xe1bb elterjedt motor teljes\xedtm\xe9ny a 250 wattos. Enn\xe9l kisebb teljes\xedtm\xe9ny\u0171 elektromos\n    motort nem \xe9rdemes v\xe1s\xe1rolnod. Min\xe9l nagyobb a wattsz\xe1m, ann\xe1l bik\xe1bb lesz a motor. A\n    ker\xe9kp\xe1r stabilit\xe1sa \xe9rdek\xe9ben a k\xf6z\xe9pmotoros v\xe1ltozat a legjobb a s\xfalyeloszt\xe1s miatt.\n    Gondolkodhatsz ak\xe1r egy 500w-osban is, ezzel ak\xe1r 45-km/h sebess\xe9ggel is tudsz haladni\n    nagyobb meger\u0151ltet\xe9s n\xe9lk\xfcl."],["\xd3ri\xe1si szerepet j\xe1tszik az akkumul\xe1tor. Fontos hogy az akkumul\xe1tor lithiumos (Li-ion) legyen,\n    hiszen ezek az akkuk m\xe1r r\xe9szlegesen is t\xf6lthet\u0151ek, nem musz\xe1j megv\xe1rni, hogy teljesen\n    lemer\xfclj\xf6n.Az akkumul\xe1tor legfontosabb jellemz\u0151je a leadhat\xf3 energia mennyis\xe9ge, amit Ah-val \n    (Amper\xf3ra)jel\xf6l\xfcnk. Ez a sz\xe1m min\xe9l nagyobb, ann\xe1l nagyobb t\xe1vols\xe1got tud megtenni\n    egy felt\xf6lt\xe9ssel. A legjellemz\u0151bb a\xa0 10-13 Ah \u2013\xe1s akkumul\xe1torral szerelt elektromos ker\xe9kp\xe1r\n    ami m\xe1r elegend\u0151 80-100 km megt\xe9tel\xe9re. A napi ing\xe1z\xe1s \xe1ltal\xe1ban oda-vissza nem t\xf6bb mint\n    80 km, k\xf6zben a munkahelyen t\xf6ltheted is, \xfagyhogy egy 10,5 vagy egy 11,6 Ah-s\n    akkumul\xe1tor t\xf6k\xe9letesen megfelel\u0151.","\xd3ri\xe1si szerepet j\xe1tszik az akkumul\xe1tor. Fontos hogy az akkumul\xe1tor lithiumos (Li-ion) legyen,\n    hiszen ezek az akkuk m\xe1r r\xe9szlegesen is t\xf6lthet\u0151ek, nem musz\xe1j megv\xe1rni, hogy teljesen\n    lemer\xfclj\xf6n. Az akkumul\xe1tor legfontosabb jellemz\u0151je a leadhat\xf3 energia mennyis\xe9ge, amit Ah-\n    val \xa0(Amper\xf3ra)jel\xf6l\xfcnk. Ez a sz\xe1m min\xe9l nagyobb, ann\xe1l nagyobb t\xe1vols\xe1got tud megtenni\n    egy felt\xf6lt\xe9ssel. A legjellemz\u0151bb a\xa0 10-13 Ah \u2013\xe1s akkumul\xe1torral szerelt elektromos ker\xe9kp\xe1r\n    ami m\xe1r elegend\u0151 80-100 km megt\xe9tel\xe9re.","\xd3ri\xe1si szerepet j\xe1tszik az akkumul\xe1tor. Fontos hogy az akkumul\xe1tor lithiumos (Li-ion) legyen,\n    hiszen ezek az akkuk m\xe1r r\xe9szlegesen is t\xf6lthet\u0151ek, nem musz\xe1j megv\xe1rni, hogy teljesen\n    lemer\xfclj\xf6n. Az akkumul\xe1tor legfontosabb jellemz\u0151je a leadhat\xf3 energia mennyis\xe9ge, amit Ah-\n    val \xa0(Amper\xf3ra)jel\xf6l\xfcnk. Ez a sz\xe1m min\xe9l nagyobb, ann\xe1l nagyobb t\xe1vols\xe1got tud megtenni\n    egy felt\xf6lt\xe9ssel. A legjellemz\u0151bb a\xa0 10-13 Ah \u2013\xe1s akkumul\xe1torral szerelt elektromos ker\xe9kp\xe1r\n    ami m\xe1r elegend\u0151 80-100 km megt\xe9tel\xe9re de kaphat\xf3ak 14,5 \xe9s 17,5 Ah-s akkumul\xe1torok is.\n    Hosszabb t\xfar\xe1khoz \xe9rdemesebb min\xe9l nagyobb Ah-s akkumul\xe1tort v\xe1lasztani!","\xd3ri\xe1si szerepet j\xe1tszik az akkumul\xe1tor. Fontos hogy az akkumul\xe1tor lithiumos (Li-ion) legyen,\n    hiszen ezek az akkuk m\xe1r r\xe9szlegesen is t\xf6lthet\u0151ek, nem musz\xe1j megv\xe1rni, hogy teljesen\n    lemer\xfclj\xf6n. Az akkumul\xe1tor legfontosabb jellemz\u0151je a leadhat\xf3 energia mennyis\xe9ge, amit Ah-\n    val \xa0(Amper\xf3ra)jel\xf6l\xfcnk. Ez a sz\xe1m min\xe9l nagyobb, ann\xe1l nagyobb t\xe1vols\xe1got tud megtenni\n    egy felt\xf6lt\xe9ssel. A legjellemz\u0151bb a\xa0 10-13 Ah \u2013\xe1s akkumul\xe1torral szerelt elektromos ker\xe9kp\xe1r\n    ami m\xe1r elegend\u0151 80-100 km megt\xe9tel\xe9re, de kaphat\xf3ak 14,5 \xe9s 17,5 Ah-s akkumul\xe1torok is."],["S\xedk vagy enyh\xe9n lank\xe1s terepen a 36V-os motor t\xf6k\xe9letesen megfelel! Ezt b\xe1tran\n    haszn\xe1lhatod munk\xe1ba j\xe1r\xe1shoz, kisebb t\xe1vokra, f\u0151leg helyi k\xf6zleked\xe9sre.","Enyh\xe9n lank\xe1s vagy dombosabb terepen a 36V-os motor t\xf6k\xe9letesen megfelel! Ezt b\xe1tran\n    haszn\xe1lhatod munk\xe1ba j\xe1r\xe1shoz, kisebb vagy k\xf6zepes t\xe1vokra, helyi k\xf6zleked\xe9sre, t\xfar\xe1z\xe1shoz,\n    ide\xe1lis plusz s\xfaly sz\xe1ll\xedt\xe1s\xe1ra is.","Nagyobb t\xfar\xe1khoz, extr\xe9m terepen, nagy emelked\u0151kh\xf6z, terepen a 48V-os motor a megfelel\u0151!\n    Ezt b\xe1tran haszn\xe1lhatod munk\xe1ba j\xe1r\xe1shoz, kisebb \xe9s hosszabb t\xe1vokra is, helyi k\xf6zleked\xe9sre,\n    a brut\xe1l emelked\u0151kh\xf6z elengedhetetlen! N\xe1lunk megrendelheted a BAFANG leg\xfajabb,\n    1000W-os motoregys\xe9g\xe9t, amely k\xe9pes 48V helyett 52V-os Li-ion akkupakkal is \xfczemelni\n    ami ebb\u0151l a motorb\xf3l ak\xe1r 1700W teljes\xedtm\xe9nyt is k\xe9pes leadni.\xa0FIGYELEM:\xa0Ez a t\xedpus a\n    leger\u0151sebb ez\xe9rt csak nagyon massz\xedv donor ker\xe9kp\xe1rba \xe9p\xedthet\u0151 be biztons\xe1gosan!"],["A biztons\xe1g nagyon fontos ker\xe9kp\xe1roz\xe1s k\xf6zben! Hat\xe9kony f\xe9kek kellenek!\n    Megn\u0151 a ker\xe9kp\xe1r t\xf6mege, \xe9s gyorsabban is fogsz menni vele. V f\xe9k eset\xe9ben a csomag tartalmazza az \xe9rz\xe9kel\u0151vel ell\xe1tott \xfaj f\xe9kkarokat, \xedgy a f\xe9krendszert cser\xe9lni nem kell. Az \xe9rz\xe9kel\u0151s f\xe9krendszer be van k\xf6tve a vez\xe9rl\xe9sbe, \xedgy f\xe9kez\xe9skor automatikusan le\xe1ll\xedtja a motort, \xedgy biztons\xe1gosan tudsz k\xf6zlekedni!","A biztons\xe1g nagyon fontos ker\xe9kp\xe1roz\xe1s k\xf6zben! Hat\xe9kony f\xe9kek kellenek!\n    Megn\u0151 a ker\xe9kp\xe1r t\xf6mege, \xe9s gyorsabban is fogsz menni vele.  T\xe1rcsaf\xe9k eset\xe9ben a csomag tartalmazza az \xe9rz\xe9kel\u0151vel ell\xe1tott \xfaj f\xe9kkarokat, \xedgy a f\xe9krendszert cser\xe9lni nem kell. Az \xe9rz\xe9kel\u0151s f\xe9krendszer be van k\xf6tve a vez\xe9rl\xe9sbe, \xedgy f\xe9kez\xe9skor automatikusan le\xe1ll\xedtja a motort, \xedgy biztons\xe1gosan tudsz k\xf6zlekedni! Viszont sz\xfcks\xe9ged lesz egy kieg\xe9sz\xedt\u0151 elemre. Rendel\xe9skor a konzult\xe1ci\xf3 sor\xe1n erre r\xe1 fogunk k\xe9rdezni!","A biztons\xe1g nagyon fontos ker\xe9kp\xe1roz\xe1s k\xf6zben! Hat\xe9kony f\xe9kek kellenek!\n    Megn\u0151 a ker\xe9kp\xe1r t\xf6mege, \xe9s gyorsabban is fogsz menni vele. V f\xe9k eset\xe9ben a csomag tartalmazza az \xe9rz\xe9kel\u0151vel ell\xe1tott \xfaj f\xe9kkarokat, \xedgy a f\xe9krendszert cser\xe9lni nem kell. Az \xe9rz\xe9kel\u0151s f\xe9krendszer be van k\xf6tve a vez\xe9rl\xe9sbe, \xedgy f\xe9kez\xe9skor automatikusan le\xe1ll\xedtja a motort, \xedgy biztons\xe1gosan tudsz k\xf6zlekedni! A t\xe1rcsaf\xe9kes ker\xe9kp\xe1rok jobbak, \xe1t\xe9p\xedt\xe9s ehhez sem kell, egy f\xe9k kieg\xe9sz\xedt\u0151vel k\xf6nnyed\xe9n bek\xf6theted a vez\xe9rl\u0151be!"]];s.a.render(l.a.createElement(function(){var e,n=Object(a.useState)([,,,,]),t=Object(r.a)(n,2),o=t[0],s=t[1],k=Object(a.useState)(!1),i=Object(r.a)(k,2),m=i[0],b=i[1],z=Object(a.useCallback)(function(){return b(!0)},[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,{onChange:s},l.a.createElement(h,{index:0,question:"Tests\xfaly",options:["50 kg alatt","50-80 kg k\xf6z\xf6tt","80 kg felett"]}),l.a.createElement(h,{index:1,question:"Felhaszn\xe1l\xe1s c\xe9lja",options:["munk\xe1baj\xe1r\xe1s","r\xf6vid t\xfar\xe1z\xe1s (10-50 km)","hosszabb t\xfar\xe1z\xe1s (50 km felett)","Vegyes haszn\xe1lat"]}),l.a.createElement(h,{index:2,question:"Felhaszn\xe1l\xe1s helysz\xedne",options:["s\xedk terep","dombosabb vid\xe9k","hegyi bring\xe1z\xe1s, downhill","Vegyes"]}),l.a.createElement(h,{index:3,question:"F\xe9krendszer",options:["V f\xe9k","T\xe1rcsaf\xe9k","kontra","m\xe9g nem tudom"]})),l.a.createElement(p,{disabled:(e=o,!(!e.includes(void 0)&&4===e.length)),onClick:z},"Eredm\xe9ny"),m&&v.map(function(e,n){return l.a.createElement(j,{key:n},e[o[n]])}))},null),document.getElementById("product-select-questionnaire"))}},[[14,2,1]]]);
//# sourceMappingURL=main.js.map