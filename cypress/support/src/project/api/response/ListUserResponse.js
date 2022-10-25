import APIResponse from '../../../core/api/ApiResponse';
import {
    listUsersSchemaSuccess
} from '../../../../../fixtures/api/schemas/list-users-schemas-success';
import { allureReporter } from '../../../../../e2e/TestController';

/**
 * This class define common methods of GET - List Users Response handling
 */
class ListUsersResponse extends APIResponse {

    /**
     * Validate JSON Response Schema of List Users when sending successfully
     * @param {*} response 
     */
    validateSuccessResponseSchema(response) {
        allureReporter.parentStep(`Validate JSON Response Schema of List Users Success should be correct`)
            .then(() => {
                this.validateJsonSchema(response.body, listUsersSchemaSuccess);
                allureReporter.endStep();
            })
    }

    /**
     * Validate data in JSON Response of List users when success
     * @param {*} response 
     * @param {*} expected 
     */
    validateSuccessJsonResponseData(response, expected) {
        const support = this.generateSupportData();
        const responseBody = response.body;

        allureReporter.parentStep(`Validate data should be returned correctly in JSON Response when Success`)
            .then(() => {

                allureReporter.step(`Validate 'page' value should be '${expected.page}'`)
                    .then(() => {
                        expect(responseBody.page).to.be.eq(expected.page);
                    });

                allureReporter.step(`Validate 'per_page' value should be '${expected['per_page']}'`)
                    .then(() => {
                        expect(responseBody['per_page']).to.be.eq(expected['per_page']);
                    });

                allureReporter.step(`Validate 'total' value should be '${expected.total}'`)
                    .then(() => {
                        expect(responseBody.total).to.be.eq(expected.total);
                    });

                allureReporter.step(`Validate 'total_pages' value should be '${expected.total_pages}'`)
                    .then(() => {
                        expect(responseBody.total_pages).to.be.eq(expected['total_pages']);
                    });

                allureReporter.step(`Validate number of items in 'data' should be less than or equal 'per_page' value`)
                    .then(() => {
                        expect(Array.from(responseBody.data).length <= expected['per_page']).to.be.eq(true);
                    });

                allureReporter.step(`Validate value of 'support' should be correct`)
                    .then(() => {
                        expect(responseBody.support).to.be.deep.eq(support);
                    });
                allureReporter.endStep();
            })
    }

    /**
     * Validate 'data' attribute in JSON response should be an empty list 
     * @param {*} response 
     */
    validateDataIsEmpty(response) {
        const responseBody = response.body;

        allureReporter.parentStep(`Validate data should be empty`)
            .then(() => {
                expect(responseBody.data).to.be.empty;
                allureReporter.endStep();
            })
    }

    /**
     * Validate 'data' attribute in JSON response should NOT be an empty
     * @param {*} response 
     */
    validateDataIsNotEmpty(response) {
        const responseBody = response.body;

        allureReporter.parentStep(`Validate data should be empty`)
            .then(() => {
                expect(responseBody.data).to.be.not.empty;
                allureReporter.endStep();
            })
    }

}

export default ListUsersResponse;
