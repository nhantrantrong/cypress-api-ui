import {
  userRequests,
  allureReporter,
  createUserResponse,
  dateTimeUtils
} from '../TestController';
import { DATE_TIME_FORMAT } from '../../support/src/core/utils/DateTimeUtils';


describe('Validate POST - Create User api works correctly', () => {

  it('API-CreateUser001-Validate POST - Create User api works correctly', () => {
    const requestBody = {
      "name": "test-user",
      "job": "qa"
    };
    const currentUTC = dateTimeUtils.getCurrentUTCDateTime(DATE_TIME_FORMAT.FORMAT_1);

    allureReporter.parentStep(`Send POST - '/api/users' request`);
    userRequests.createUser(requestBody).then(response => {
      requestBody['createdAt'] = currentUTC;
      createUserResponse.validateCreatedResponseStatus(response);
      createUserResponse.validateSuccessResponseSchema(response);
      createUserResponse.validateSuccessJsonResponseData(response, requestBody);
      allureReporter.endStep();
    });
  })
})