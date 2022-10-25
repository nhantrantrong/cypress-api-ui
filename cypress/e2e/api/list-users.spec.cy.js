import { userRequests, listUserResponse, allureReporter } from '../TestController';


describe('Validate GET - List Users api works correctly', () => {

  it('API-ListUser001-Validate List Users api works correctly with valid page index', () => {
    const expectedResponse = {
      page: 1,
      per_page: 6,
      total: 12,
      total_pages: 2
    };

    allureReporter.parentStep(`Send GET - '/api/users?page=1' request`);
    userRequests.listUser(expectedResponse.page).then(response => {
      listUserResponse.validateSuccessResponseStatus(response);
      listUserResponse.validateSuccessResponseSchema(response);
      listUserResponse.validateSuccessJsonResponseData(response, expectedResponse);
      allureReporter.endStep();
    });
  })

  // Bug: JSON response data still works with page=-1 but does not with page=-2
  it('API-ListUser002-Validate Error message should be returned when page value is less than 0', () => {
    allureReporter.parentStep(`Send GET - '/api/users?page-2' request`);
    userRequests.listUser(-2).then(response => {
      listUserResponse.validateBadRequestResponseStatus(response);
      allureReporter.endStep();
    });
  })

  it('API-ListUser003-Validate GET - List Users api works correctly with page > total_pages', () => {
    const expectedResponse = {
      page: 3,
      per_page: 6,
      total: 12,
      total_pages: 2,
    };

    allureReporter.parentStep(`Send GET - '/api/users?page-2' request`);
    userRequests.listUser(expectedResponse.page).then(response => {
      listUserResponse.validateSuccessResponseStatus(response);
      listUserResponse.validateSuccessResponseSchema(response);
      listUserResponse.validateSuccessJsonResponseData(response, expectedResponse);
      listUserResponse.validateDataIsEmpty(response);
      allureReporter.endStep();
    });
  })

  it('API-ListUser004-Validate List Users api works correctly with page <= total_pages and per_pages > total', () => {
    const expectedResponse = {
      page: 1,
      per_page: 13,
      total: 12,
      total_pages: 1,
    };

    allureReporter.parentStep(`Send GET - '/api/users?page-1&per_pages=13' request`);
    userRequests.listUser(expectedResponse.page, expectedResponse.per_page).then(response => {
      listUserResponse.validateSuccessResponseStatus(response);
      listUserResponse.validateSuccessResponseSchema(response);
      listUserResponse.validateSuccessJsonResponseData(response, expectedResponse);
      listUserResponse.validateDataIsNotEmpty(response);
      allureReporter.endStep();
    });
  })
})