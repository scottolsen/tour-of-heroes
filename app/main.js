System.register(['../node_modules/angular2/platform/browser.d', './app.component.ts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_d_1, app_component_ts_1;
    return {
        setters:[
            function (browser_d_1_1) {
                browser_d_1 = browser_d_1_1;
            },
            function (app_component_ts_1_1) {
                app_component_ts_1 = app_component_ts_1_1;
            }],
        execute: function() {
            browser_d_1.bootstrap(app_component_ts_1.AppComponent);
        }
    }
});
//# sourceMappingURL=main.js.map