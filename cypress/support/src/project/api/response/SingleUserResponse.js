import APIResponse from '../../../core/api/ApiResponse';
import { allureReporter } from '../../../../../e2e/TestController';
import {
    singleUserSchemaSuccess
} from '../../../../../fixtures/api/schemas/single-user-schemas-success';

/**
 * This class define common methods of GET - Single User Response handling
 */
class SingleUserResponse extends APIResponse {

    /**
     * Validate JSON Response Schema of Single User when sending successfully
     * @param {*} response 
     */
    validateSuccessResponseSchema(response) {
        allureReporter.parentStep(`Validate JSON Response Schema of Single User Success should be correct`)
            .then(() => {
                this.validateJsonSchema(response.body, singleUserSchemaSuccess);
                allureReporter.endStep();
            });
    }

    /**
     * Validate data in JSON Response of Single user when success
     * @param {*} response 
     * @param {*} expected 
     */
    validateSuccessJsonResponseData(response, expected) {
        expected.support = this.generateSupportData();
        const responseBody = response.body;

        allureReporter.parentStep(`Validate data should be returned correctly in JSON Response when Success`)
            .then(() => {
                expect(responseBody).to.be.deep.eq(expected);
                allureReporter.endStep();
            });
    }

}

export default SingleUserResponse;
