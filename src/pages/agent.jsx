import { useState, useContext } from "react";
import { Button, Card, Input } from "antd";
import { UserLayout } from "../components/layout";

import { UserContext } from "../utils/context";
import { sendMessageToAgent } from "../services/agent";

function ChatArea() {
    const { user } = useContext(UserContext);
    const [displayMessage, setDisplayMessage] = useState(
        "你好！我是 BookJar 客服，有什么可以帮您的吗？"
    );
    const [inputValue, setInputValue] = useState("");
    const [isSending, setIsSending] = useState(false);

    const handleSend = async () => {
        const trimmed = inputValue.trim();
        if (!trimmed || isSending) return;

        setDisplayMessage("正在处理您的请求，请稍候...");
        setInputValue("");
        setIsSending(true);

        const username = user?.username ?? "guest";

        try {
            const response = await sendMessageToAgent(username, trimmed);
            setDisplayMessage(response);
        } catch (error) {
            setDisplayMessage(error.message ?? "客服暂时无法回复，请稍后再试。");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <Card title="BookJar Agent">
            <Input.TextArea
                value={displayMessage}
                readOnly
                autoSize={{ minRows: 8, maxRows: 12 }}
                style={{ marginBottom: 12 }}
            />
            <Input.TextArea
                rows={3}
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="输入想说的话..."
            />
            <Button
                type="primary"
                onClick={handleSend}
                disabled={!inputValue.trim() || isSending}
            >
                {isSending ? "发送中..." : "发送"}
            </Button>
        </Card>
    );
}

function AgentPage() {
    return (
        <UserLayout>
            <ChatArea />
        </UserLayout>
    );
}

export default AgentPage;
