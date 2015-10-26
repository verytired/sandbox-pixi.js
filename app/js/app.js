/// <reference path="typings/tsd.d.ts" />
var App = (function () {
    function App() {
        console.log("App init");
    }
    return App;
})();
window.addEventListener("load", function (e) {
    var main = new App();
});
