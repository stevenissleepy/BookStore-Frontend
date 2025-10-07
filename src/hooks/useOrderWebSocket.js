import { useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';

const WS_URL = import.meta.env.VITE_BACKEND_WS_URL ?? "ws://localhost:8088";

/**
 * 一个自定义 Hook，用于处理订单页面的 WebSocket 连接。
 * @param {Number} userId - 当前登录的用户ID。
 * @param {function} onMessageReceived - 当从 WebSocket 收到消息时要执行的回调函数。
 */
const useOrderWebSocket = (userId, onMessageReceived) => {
  const stompClientRef = useRef(null);

  useEffect(() => {
    if (userId && typeof onMessageReceived === 'function') {
      const client = new Client({
        brokerURL: WS_URL + '/ws',
        reconnectDelay: 1000,
        onConnect: () => {
          console.log('WebSocket Connected via native WebSocket!');
          const userTopic = `/topic/order/${userId}`;
          client.subscribe(userTopic, (res) => {
            const body = JSON.parse(res.body);
            console.log('Received order update message:', body.message);
            onMessageReceived();
          });
        },
        onStompError: (frame) => {
          console.error('Broker reported error: ' + frame.headers['message']);
          console.error('Additional details: ' + frame.body);
        },
      });

      client.activate();
      stompClientRef.current = client;

      return () => {
        if (stompClientRef.current) {
          stompClientRef.current.deactivate();
          console.log('WebSocket Disconnected');
        }
      };
    }
  }, [userId, onMessageReceived]);
};

export default useOrderWebSocket;