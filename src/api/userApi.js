import axiosClient from "./axiosClient";

const userApi = {
    async getUsers() {
        const url = 'fakeData2';
        return await axiosClient.get(url);
    },
    async create(data) {
        const url = 'fakeData2/';
        return await axiosClient.post(url, data);
    },
    async getUser(id) {
        const url = 'fakeData2/' + id;
        return await axiosClient.get(url);
    },
    update(id,data) {
        const url = 'fakeData2/' + id;
        return axiosClient.put(url, data);
    },
    delete(id) {
        const url = 'fakeData2/' + id;
        return axiosClient.delete(url);
    }
}

export default userApi;
