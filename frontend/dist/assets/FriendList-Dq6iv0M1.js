import{l as S,_ as L,u as M,a as y,s as I,r as l,o as B,c as q,b as T,d,e as _,f as o,g as V,h as x,w as p,v as A,i as D,F as N,j as P,t as U,k as $,p as j,m as z,n as E,q as Q,x as G,y as H}from"./index-B7PZOxdE.js";import{c as J}from"./chat-D6Vyw2hT.js";const v=S();async function K(a,c){v.defaults.headers.Authorization="Bearer "+localStorage.getItem("accessToken"),await v.get("/friends").then(a).catch(c),console.log("친구 목록 조회 성공")}const u=a=>(j("data-v-281feca4"),a=a(),z(),a),O={class:"friend-list container mt-5"},W={class:"friend-header"},X=u(()=>o("div",{class:"friend"},"친구",-1)),Y={class:"friend-buttons"},Z=u(()=>o("div",{class:"search"},[o("img",{src:E,alt:""})],-1)),ee=[Z],oe=u(()=>o("img",{src:Q,alt:""},null,-1)),se=[oe],te={class:"friend-search mb-3"},ae={class:"list-group"},ne=["onClick"],le={class:"friend-item"},ce=["src"],re={class:"buttons"},ie=["onClick"],de=u(()=>o("img",{src:G,alt:""},null,-1)),ue=[de],me={__name:"FriendList",setup(a){const c=M(),f=y();I(f);const g=l(null),r=l(!1),i=l(""),h=l([]),m=l("");B(()=>{C()});const C=()=>{console.log("친구 목록 가져오기"),K(({data:e})=>{console.log("친구 목록 리스트"),console.log(e),h.value=e},e=>{console.log(e)})},k=e=>{const t={path:"/friend-profile",component:H,props:{friend:e}};c.push(t)},b=q(()=>h.value.filter(e=>e.name.toLowerCase().includes(i.value.toLowerCase()))),w=e=>{g.value=e;const t={title:e.nickname+"의 대화방",receiver:e.nickname};J(t,n=>{let s="채팅방 생성에 문제 발생했습니다";n.status==200?(s="채팅방 입장 완료되었습니다.",m.value=n.data.chatRoomId,console.log(m.value),alert(s),c.push({name:"chat-view",params:{roomid:m.value}})):alert(s)},n=>console.error(n))},F=()=>{r.value=!r.value,r.value||(i.value="")};return(e,t)=>{const n=T("CreateRoomModal");return d(),_("div",O,[o("div",W,[X,o("div",Y,[o("button",{class:"create-chat-button btn",onClick:F},ee),o("button",{class:"create-chat-button btn",onClick:t[0]||(t[0]=(...s)=>e.showFriendRequestList&&e.showFriendRequestList(...s))},se),e.showModal?(d(),V(n,{key:0,onClose:e.closeCreateRoomModal,onCreate:e.createRoom},null,8,["onClose","onCreate"])):x("",!0)])]),p(o("div",te,[p(o("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>i.value=s),type:"text",class:"form-control",placeholder:"친구 검색"},null,512),[[D,i.value]])],512),[[A,r.value]]),o("ul",ae,[(d(!0),_(N,null,P(b.value,s=>(d(),_("li",{key:s.id,class:"list-group-item",onClick:R=>k(s)},[o("div",le,[o("img",{src:s.profileUrl,alt:"프로필 이미지",class:"profile-image mr-2"},null,8,ce),o("span",null,U(s.nickname),1)]),o("div",re,[o("button",{class:"btn btn-sm",onClick:$(R=>w(s),["stop"])},ue,8,ie)])],8,ne))),128))])])}}},pe=L(me,[["__scopeId","data-v-281feca4"]]);export{pe as default};
