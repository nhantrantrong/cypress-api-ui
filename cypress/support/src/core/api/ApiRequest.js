import { configs } from '../../../../e2e/TestController';

/**
 * This is wrapped up `cy.request()` method and METHOD Constants so that can reuse in the specified Request class
 */
class APIRequest {

    url = configs.api.url;

    METHOD = {
        POST: 'POST',
        PUT: 'PUT',
        GET: 'GET',
        DELETE: 'DELETE',
    };

    sendGet(path, queryParams = null) {
        return cy.request({
            method: this.METHOD.GET,
            url: `${this.url}${path}`,
            qs: queryParams,
            failOnStatusCode: false,
        });
    }

    sendPost(path, body, isForm = false) {
        return cy.request({
            method: this.METHOD.POST,
            url: `${this.url}${path}`,
            body: body,
            form: isForm,
            failOnStatusCode: false
        });
    }
}

export default APIRequest;