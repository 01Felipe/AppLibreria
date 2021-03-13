"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var editoriales_service_1 = require("./editoriales.service");
describe('EditorialesService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(editoriales_service_1.EditorialesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=editoriales.service.spec.js.map