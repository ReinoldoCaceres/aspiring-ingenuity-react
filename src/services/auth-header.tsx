export default function AuthHeader() {
    const userString = localStorage.getItem("user");
    let user = null;

    if (userString) {
        user = JSON.parse(userString);
    }

    if (user && user.accessToken) {
        return { headers: { 'Authorization': 'Bearer ' + user.accessToken } }
    }

    else {
        return {};
    }
}