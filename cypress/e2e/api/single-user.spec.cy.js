import {
  allureReporter,
  userRequests,
  singleUserResponse,
  configs
} from '../TestController';


describe('Validate Single User api works correctly', () => {

  it('API-SingleUser001-Validate Single User api works correctly with existing user id', () => {
    const expectedResponse = {
      "data": {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": `${configs.api.url}/img/faces/1-image.jpg`
      }
    };

    allureReporter.parentStep(`Send GET - '/api/users/1' request`);
    userRequests.singleUser(1).then(response => {
      singleUserResponse.validateSuccessResponseStatus(response);
      singleUserResponse.validateSuccessResponseSchema(response);
      singleUserResponse.validateSuccessJsonResponseData(response, expectedResponse);
      allureReporter.endStep();
    });
  })

  it('API-SingleUser002-Validate Single User api works correctly with non-existing user id', () => {
    const nonExistingUserId = 9999999;

    allureReporter.parentStep(`Send GET - '/api/users/${nonExistingUserId}' request`);
    userRequests.singleUser(nonExistingUserId).then(response => {
      singleUserResponse.validateNotFoundResponseStatus(response);
      singleUserResponse.validateEmptyResponseObject(response);
      allureReporter.endStep();
    });
  })

})