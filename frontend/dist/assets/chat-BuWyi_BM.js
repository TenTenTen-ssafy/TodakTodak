import{l as s}from"./index-KxoQWIPE.js";const e=s();function r(a,o){e.defaults.headers.Authorization="Bearer "+localStorage.getItem("accessToken"),e.get("/chat/rooms").then(a).catch(o)}function l(a,o,t){e.defaults.headers.Authorization="Bearer "+localStorage.getItem("accessToken"),e.post("/chat/rooms",JSON.stringify(a)).then(o).catch(t),console.log("채팅방 생성 성공")}async function n(a,o,t){e.defaults.headers.Authorization="Bearer "+localStorage.getItem("accessToken"),await e.get(`/chat/rooms/${a}/message`).then(o).catch(t),console.log("채팅방 조회 성공")}export{n as a,l as c,r as l};
