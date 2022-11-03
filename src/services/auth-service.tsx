import http from "../Components/http-common";

class AuthService {

    // public login(email: string, password: string) {

    //     return http.post("auth/login", { email, password })
    //         .then(response => {
    //             // console.log(response);
    //             console.log("Outsied if")
    //             console.log(response.data)

    //             console.log(response.data.accessToken)
                
    //                 console.log("Inside if")
    //                 localStorage.setItem("accessToken", response.data.accessToken);
    //                 localStorage.setItem("user", JSON.stringify(response.data));
    //             return response.data;
    //         });
    // }

    public login(email: string, password: string) {

        return http.post("/auth/login", { email, password})
            .then(response => {
                if (response.data.data.accessToken) {
                    localStorage.setItem('accessToken', response.data.data.accessToken);
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