const url = '/users';
class UserService {

    async getUserList() {debugger
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error(`UserService getUserList failed, HTTP status ${response.status}`);
        }
        const resp = await response.json();
        return JSON.parse(resp.data);
    }

    async getUser(user) {debugger
        const response = await fetch(url+'/'+user.id, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error(`UserService getUser failed, HTTP status ${response.status}`);
        }
        const resp = await response.json();
        return resp.data;
    }

    async addUser(user) {debugger
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error(`UserService adduser failed, HTTP status ${response.status}`);
        }
        const resp = await response.json();
        return resp.data;
    }

    async updateUser(user) {debugger
        const response = await fetch(url+'/'+user.id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error(`UserService updateuser failed, HTTP status ${response.status}`);
        }
        const resp = await response.json();
        return resp.data;
    }

    async deleteUser(userId) {debugger
        const response = await fetch(url+'/'+userId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`UserService deleteUser failed, HTTP status ${response.status}`);
        }
        const resp = await response.json();
        return resp.data;
    }
}

export default new UserService();