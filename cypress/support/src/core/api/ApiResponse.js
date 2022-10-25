import { Validator } from "jsonschema";
import { configs, allureReporter } from '../../../../e2e/TestController';


/**
 * This class is used to define STATUS_CODE constant with some reusable common methods
 */
class APIResponse {

    STATUS_CODE = {
        SUCCESS: 200,
        BAD_REQUEST: 400,
        NOT_FOUND: 404,
        CREATED: 201
    };

    /**
     * Validate response status should be 200-OK
     * @param {*} response Response object after sending request
     */
    validateSuccessResponseStatus(response) {
        allureReporter.parentStep(`Validate response status should be 200-OK`)
            .then(() => {
                expect(response.status).to.be.eq(this.STATUS_CODE.SUCCESS);
                allureReporter.endStep();
            });
    }

    /**
     * Validate response status should be 400-Bad Request
     * @param {*} response Response object after sending request
     */
    validateBadRequestResponseStatus(response) {
        allureReporter.parentStep(`Validate response status should be 400-Bad Request`)
            .then(() => {
                expect(response.status).to.be.eq(this.STATUS_CODE.BAD_REQUEST);
                allureReporter.endStep();
            });
    }

    /**
     * Validate response status should be 404-Not Found
     * @param {*} response Response object after sending request
     */
    validateNotFoundResponseStatus(response) {
        allureReporter.parentStep(`Validate response status should be 404-Not Found`)
            .then(() => {
                expect(response.status).to.be.eq(this.STATUS_CODE.NOT_FOUND);
                allureReporter.endStep();
            });
    }

    /**
     * Validate response status should be 201-Created
     * @param {*} response Response object after sending request
     */
    validateCreatedResponseStatus(response) {
        allureReporter.parentStep(`Validate response status should be 201-Created`)
            .then(() => {
                expect(response.status).to.be.eq(this.STATUS_CODE.CREATED);
                allureReporter.endStep();
            });
    }

    /**
     * Validate if JSON Response Body matches with the expected Schema
     * @param {*} responseBody JSON Response body
     * @param {Schema} schema The expected JSON Schema
     */
    validateJsonSchema(responseBody, schema) {
        const validator = new Validator();
        validator.addSchema(schema, schema.id);
        const validationResults = validator.validate(responseBody, schema);
        expect(validationResults.valid).to.be.eq(true, validationResults.errors);
    }

    /**
     * Validate response body should be equal {}
     * @param {*} response Response object after sending request
     */
    validateEmptyResponseObject(response) {
        const emptyObject = {}
        allureReporter.parentStep(`Validate the returned object is empty`)
            .then(() => {
                expect(response.body).to.be.deep.eq(emptyObject);
                allureReporter.endStep();
            })
    }

    /**
     * Genrate the support object data with corresponding url and text properties
     * @return 
     * \{ "support": {
     *          "url": "https://reqres.in/#support-heading",
     *          "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
     *      }
     * \}
     */
    generateSupportData() {
        const support = {
            "url": `${configs.api.url}/#support-heading`,
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        };
        return support;
    }
}

export default APIResponse;