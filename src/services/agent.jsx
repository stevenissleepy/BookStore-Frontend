async function post(url, data) {
    /* post data */
    let opt = {
        method: "POST",
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

async function sendMessageToAgent(username, prompt) {
    const url = `http://127.0.0.1:5678/webhook/chat`;

    try {
        const response = await post(url, { username, prompt });
        return response?.output ?? "客服暂时无法回复，请稍后再试。";
    } catch (error) {
        console.error("Failed to reach agent service", error);
        throw new Error("客服暂时无法回复，请稍后再试。");
    }
}

export { sendMessageToAgent };
