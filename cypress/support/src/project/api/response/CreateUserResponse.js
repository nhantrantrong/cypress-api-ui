import APIResponse from '../../../core/api/ApiResponse';
import { allureReporter } from '../../../../../e2e/TestController';
import {
    createUserSchemaSuccess
} from '../../../../../fixtures/api/schemas/create-users-schemas-success';

/**
 * This class define common methods of POST - Create User Response handling
 */
class CreateUserResponse extends APIResponse {

    /**
     * Validate JSON Response Schema of Create User when sending successfully
     * @param {*} response 
     */
    validateSuccessResponseSchema(response) {
        allureReporter.parentStep(`Validate JSON Response Schema of Create User Success should be correct`)
            .then(() => {
                this.validateJsonSchema(response.body, createUserSchemaSuccess);
                allureReporter.endStep();
            });
    }

    /**
     * Validate data in JSON Response of Create user when success
     * @param {*} response 
     * @param {*} expected 
     */
    validateSuccessJsonResponseData(response, expected) {
        const responseBody = response.body

        allureReporter.parentStep(`Validate data should be returned correctly in JSON Response when Success`)
            .then(() => {

                allureReporter.step(`Validate 'name' value should be '${expected.name}'`)
                    .then(() => {
                        expect(responseBody.name).to.be.eq(expected.name);
                    });

                allureReporter.step(`Validate 'job' value should be '${expected.job}'`)
                    .then(() => {
                        expect(responseBody.job).to.be.eq(expected.job);
                    });

                allureReporter.step(`Validate 'id' value should be a number`)
                    .then(() => {
                        expect(!isNaN(responseBody.id)).to.be.true;
                    });

                allureReporter.step(`Validate 'createdAt' value should include current date '${expected.createdAt}'`)
                    .then(() => {
                        expect(responseBody.createdAt).to.be.include(expected.createdAt);
                    });
                allureReporter.endStep();
            });
    }

}

export default CreateUserResponse;
