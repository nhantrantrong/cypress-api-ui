# cypress-api-ui
This is sample cypress api and ui repository

# Automation FW Architecture
![image](https://user-images.githubusercontent.com/64664332/197671564-90c80894-296c-48c8-9ac6-f3bf8a46f7b0.png)

- **support:** Location of `core` and business common methods
     + core: Definition of classes to store wrapped up `cy` build in method which relating much more on the framework and elements handling
     + project: Definition of classes to store common methods which describe a business flow basing on domain knowledge of a specified project
- **configuration:** Store configuration for cypress and test run. We can define specPattern, timeout, environment variables, etc. in **_cypress.config.js_** file
- **fixtures:** Resources location. Test Data files, JSON Schemas, upload images, downloads, etc. would be store in this folder
- **e2e:** Test spec files location. The spec files are separated into **api** and **ui** folder. The `TestController.js` class would be used to initialize the class instances as well as storing `setUp` method defintion
- **report:** Location for the generated xml and html report

# Structure in VSCode Editor
![image](https://user-images.githubusercontent.com/64664332/197672021-0f49f040-b77d-4ab9-934e-f4f0067b5d6a.png)

# Prerequisite
- Install [NodeJS-v14.17.3](https://nodejs.org/dist/v14.17.3/)
<img width="408" alt="image" src="https://user-images.githubusercontent.com/64664332/197672542-d7110f1d-e19c-4468-b83f-3b7dda0874ee.png">

- Install [allure-commandline](https://www.npmjs.com/package/allure-commandline)
<img width="459" alt="image" src="https://user-images.githubusercontent.com/64664332/197672773-c0f15d13-461a-4982-b6dd-2876f00d7418.png">

- Install dependencies after cloning repository to your local
`npm run reinstall`
<img width="759" alt="image" src="https://user-images.githubusercontent.com/64664332/197673525-2b24b645-0597-4178-9761-12a1358d11ca.png">



## rest-api
### Test Cases:
#### GET - List Users
- Validate List Users api works correctly with valid page index
- Validate Error message should be returned when page value is less than 0
- Validate List Users api works correctly with page > total_pages
- Validate List Users api works correctly with page <= total_pages and per_pages > total
- Validate List Users api works correctly without 'page' and 'per_page' parameters
- Validate Error message should be returned when per_page value is less than 0

#### POST - Create User
- Validate Create User api works correctly
- Validate error message should be display when sending request without name
- Validate error message should be display when sending request without job
- Validate error message should be display when sending request without name and job
- Validate Create User api works correctly when sending request with name including special characters
- Validate Create User api works correctly when sending request with job including special characters

#### GET - Single User
- Validate Single User api works correctly with existing user id
- Validate Single User api works correctly with non-existing user id
- Validate empty response should be returned with non-numeric user id
- Validate empty response should be returned with user id is a negative numberjsontab

### Execute Test Locally:
- To run all of api tests, please use following command `npm run cy:test-api`
- Currently, Cypress not yet support to run test in parallely on your local. We can use github action workflow to run the test in parallely
<img width="718" alt="image" src="https://user-images.githubusercontent.com/64664332/197677768-f35c4782-6a50-4e13-abbe-40c62bde363d.png">

### Execute Test on Github Action Workflow:


### Report:
- To generate and open allure-report on your local. Please use command `npm run allure:report`
![image](https://user-images.githubusercontent.com/64664332/197677615-5f57d750-340b-4322-8b15-c49e313e3cc4.png)



## ui
### Execute Test:
- To run all of ui tests, please use following command `npm run cy:test-ui`
<img width="721" alt="image" src="https://user-images.githubusercontent.com/64664332/197687222-82319ff1-a2e3-418a-b935-857e16a8f3a4.png">

### Report:
- To generate and open allure-report on your local. Please use command `npm run allure:report`
![image](https://user-images.githubusercontent.com/64664332/197688241-04d86347-3763-4350-b6c8-8456bd6c229f.png)
