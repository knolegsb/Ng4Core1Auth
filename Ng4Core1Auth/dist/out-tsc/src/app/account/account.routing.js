"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var registration_component_1 = require("./registration/registration.component");
var login_component_1 = require("./login/login.component");
exports.routing = router_1.RouterModule.forChild([
    { path: 'register', component: registration_component_1.RegistrationComponent },
    { path: 'login', component: login_component_1.LoginComponent }
]);
//# sourceMappingURL=account.routing.js.map