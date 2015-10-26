/// <reference path="typings/tsd.d.ts" />

class App {
    constructor() {
        console.log("App init");
    }
}

window.addEventListener("load", (e) => {
  var main: App = new App();
});
