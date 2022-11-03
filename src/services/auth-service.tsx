import http from "../Components/http-common";

class AuthService {

    public login(username: string, password: string) {

        return http.post("/api/login", { username, password })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    public logout() {
        return localStorage.removeItem("user");
    }

    public register(username: string, password: string, firstname: string, lastname: string, email: string) {
        return http.post("/api/register", { username, password, firstname, lastname, email });
    }

    public getCurrentUser() {

        const userString = localStorage.getItem("user");
        if (userString) {
            return JSON.stringify(userString);
        }
        return false;
    }
}

export default new AuthService();