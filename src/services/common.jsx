async function get(url) {
    /* get response */
    let opt = {
        method: "GET",
        credentials: "include",
    };
    let response = await fetch(url, opt);

    /* handle response */
    let result = await response.json();
    if (result.code !== 200) {
        console.error(result.message);
    }
    return result.data;
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
    if (result.code !== 200) {
        console.error(result.message);
    }
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
    if (result.code !== 200) {
        console.error(result.message);
    }
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
    if (result.code !== 200) {
        console.error(result.message);
    }
    return result;
}

const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8088";

export { get, post, put, del, BASE_URL };
