import APIRequest from '../../../core/api/ApiRequest';


/**
 * This class defines common method of send User Requests
 */
class UserRequest extends APIRequest {

    path = `/api/users`;

    /**
     * Send GET - /api/users
     * @param {*} pageIndex 
     * @param {*} per_page 
     * @returns 
     */
    listUser(pageIndex = 1, per_page = 6) {
        return this.sendGet(this.path, { page: pageIndex, per_page: per_page });
    }

    /**
     * Send GET - /api/users/<userId>
     * @param {*} userId 
     * @returns 
     */
    singleUser(userId) {
        const url = `${this.path}/${userId}`;
        return this.sendGet(url);
    }

    /**
     * Send POST - /api/users
     * @param {*} body 
     */
    createUser(body) {
        return this.sendPost(this.path, body);
    }

}

export default UserRequest;
