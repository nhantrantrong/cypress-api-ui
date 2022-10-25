import UserRequest from '../support/src/project/api/requests/UserRequest';
import ListUsersResponse from '../support/src/project/api/response/ListUserResponse';
import AllureReporter from '../support/src/core/AllureReporter';
import SingleUserResponse from '../support/src/project/api/response/SingleUserResponse';
import CreateUserResponse from '../support/src/project/api/response/CreateUserResponse';
import DateTimeUtils from '../support/src/core/utils/DateTimeUtils';
import HomePage from '../support/src/project/ui/HomePage';
import StatisticPage from '../support/src/project/ui/StatisticsPage';


/**
 * This class is used to define class instances and some setUp common method before running tests
 */

// Retrieve Configs information
export const configs = {
    api: Cypress.env('api'),
    ui: Cypress.env('ui')
};

// Allure Reporter class instance
export const allureReporter = new AllureReporter();

// Utils class instances
export const dateTimeUtils = new DateTimeUtils();

// API Request class instances
export const userRequests = new UserRequest();

// API Response class instances
export const listUserResponse = new ListUsersResponse();
export const singleUserResponse = new SingleUserResponse();
export const createUserResponse = new CreateUserResponse();

// Pages class instances
export const homePage = new HomePage();
export const statisticPage = new StatisticPage();

// Setup method
export function setupUITest() {
    homePage.open()
};
