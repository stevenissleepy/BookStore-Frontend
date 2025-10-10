import { useEffect, useRef } from 'react';

const WS_BASE = import.meta.env.VITE_BACKEND_WS_URL ?? 'ws://localhost:8088';
const WS_URL = `${WS_BASE.replace(/\/$/, '')}/topic/order`;

const useOrderWebSocketNative = (userId, onMessageReceived) => {
  const wsRef = useRef(null);

  useEffect(() => {
    if (!userId || typeof onMessageReceived !== 'function') return;

    const url = `${WS_URL}/${encodeURIComponent(userId)}`;
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => console.log('WebSocket connected');
    ws.onmessage = () => { console.log('WebSocket message received'); onMessageReceived(); };
    ws.onclose = () => { wsRef.current = null; console.log('WebSocket disconnected'); };
    ws.onerror = (error) => console.error('WebSocket error:', error);

    return () => {
      if (wsRef.current === ws) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [userId, onMessageReceived]);

  return null;
};

export default useOrderWebSocketNative;