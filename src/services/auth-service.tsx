import http from "../Components/http-common";

class AuthService {

    public login(email: string, password: string,role: string) {

        return http.post("/api/auth/login", { email, password,role })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    public logout() {
        return localStorage.removeItem("user");
    }

    public register(username: string, password: string, firstname: string, lastname: string, email: string) {
        return http.post("/api/auth/register", { username, password, firstname, lastname, email });
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