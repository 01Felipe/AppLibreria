"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var libros_service_1 = require("./libros.service");
describe('LibrosService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(libros_service_1.LibrosService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=libros.service.spec.js.map