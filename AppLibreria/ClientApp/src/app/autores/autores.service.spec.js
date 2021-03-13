"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var autores_service_1 = require("./autores.service");
describe('AutoresService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(autores_service_1.AutoresService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=autores.service.spec.js.map