async function get(url) {
    /* get response */
    let opt = {
        method: "GET",
        credentials: "include",
    };
    let response = await fetch(url, opt);

    /* handle response */
    let result = await response.json();
    return result;
}

async function post(url, data) {
    /* post data */
    let opt = {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    let response = await fetch(url, opt);

    /* handle response */
    let result = await response.json();
    return result;
}

async function put(url, data) {
    /* put data */
    let opt = {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    let response = await fetch(url, opt);

    /* handle response */
    let result = await response.json();
    return result;
}

async function del(url) {
    /* delete data */
    let opt = {
        method: "DELETE",
        credentials: "include",
    };
    let response = await fetch(url, opt);

    /* handle response */
    let result = await response.json();
    return result;
}

function checkResponse(response) {
    if (response.code === 200) {
        return true;
    } else {
        console.error(response.message);
        return false;
    }
}

const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8088";

export { get, post, put, del, checkResponse, BASE_URL };
