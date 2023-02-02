"use strict";(self.webpackChunkteam_project_petly_frontend=self.webpackChunkteam_project_petly_frontend||[]).push([[225],{813:function(n,e,t){t.d(e,{U:function(){return c}});var r="479px",i="768px",o="1279px",a="1280px",c={mobile:"(min-width: ".concat("320px",")"),mobileOnly:"(max-width: ".concat(r,")"),tablet:"(min-width: ".concat(i,")"),tabletOnly:"(min-width:".concat(i,") and (max-width:").concat(o,")"),beforeDesktop:"(max-width: ".concat(o,")"),desktop:"(min-width: ".concat(a,")")}},7712:function(n,e,t){t.d(e,{Z:function(){return c}});var r,i=t(168),o=t(6444),a=t(813),c=o.ZP.button(r||(r=(0,i.Z)(["\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  border: 1px solid;\n  border-radius: ",";\n  background-color: ",";\n  border-color: ",";\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    cursor: pointer;\n    border: 1px solid ",";\n  }\n  @media "," {\n    width: 32px;\n    height: 32px;\n  }\n"])),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.background}),(function(n){return n.disabled?n.theme.colors.mainText:"transparent"}),(function(n){return n.theme.colors.accent}),a.U.tablet)},8797:function(n,e,t){t.d(e,{Z:function(){return p}});t(2791);var r,i,o,a=t(168),c=t(6444),s=c.ZP.div(r||(r=(0,a.Z)(["\nheight: 100vh;\nwidth: 100vw;\nbackground-color: rgba(17, 17, 17, 0.6);\nbackdrop-filter: blur(10px);\nposition: fixed;\ntop: 0;\nleft: 0;\nz-index: 1000;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nopacity: 0;\npointer-events: none;\ntransition: 0.5s;\n&.active {\n    opacity: 1;\n    pointer-events: all;\n  };\n"]))),u=c.ZP.div(i||(i=(0,a.Z)(["\n  padding: 20px;\n  border-radius: 40px;\n  background-color: #FFFFFF;\n  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n  /* height: 400px;\n  width: 600px; */\ntransform: scale(0.5);\ntransition: 0.5s all;\n&.active {\n  transform: scale(1);\n}\n"]))),l=c.ZP.button(o||(o=(0,a.Z)(["\nposition: absolute;\ndisplay: flex;\ntop: 16px;\nright: 16px;\nbackground-color: transparent;\nborder: 0;\ntransition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    cursor: pointer;\n  transform: scale(1.2);\n  }\n\n"]))),d=t(8617),h=t(184),p=function(n){var e=n.active,t=n.setActive,r=n.children;return(0,h.jsx)(s,{className:e?"modal active":"modal",onClick:function(){return t(!1)},children:(0,h.jsxs)(u,{className:e?"modal-content active":"modal-content",onClick:function(n){return n.stopPropagation()},children:[(0,h.jsx)(l,{type:"button",onClick:function(){return t(!1)},children:(0,h.jsx)(d.apv,{color:"#F59256",size:"44px"})}),r]})})}},3143:function(n,e,t){t.d(e,{E:function(){return s}});var r,i,o=t(168),a=t(6444),c=a.ZP.button(r||(r=(0,o.Z)(["\n  padding: 8px 41px;\n  min-width: ",";\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n  font-size: ",";\n  line-height: 1.35;\n  transition: color 250ms linear, border 250ms linear;\n\n  &:hover,\n  &:focus {\n    border: ",";\n    color: ",";\n    cursor: pointer;\n  }\n"])),(function(n){return n.size}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.borders.main}),(function(n){return n.theme.radii.br40}),(function(n){return n.theme.fontSizes.fs20}),(function(n){return n.theme.borders.accent}),(function(n){return n.theme.colors.hoverAccent})),s=(0,a.ZP)(c)(i||(i=(0,o.Z)(["\n  background-color: ",";\n  min-width: ",";\n  color: ",";\n  border: none;\n  transition: background-color 250ms linear;\n\n  &:hover,\n  &:focus {\n    border: none;\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.size}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.hoverAccent}))},4225:function(n,e,t){t.r(e),t.d(e,{default:function(){return re}});var r,i,o,a,c,s,u,l=t(5861),d=t(885),h=t(7757),p=t.n(h),f=t(2791),m=t(9434),x=t(4142),b=function(n){return n.user.profile},g=function(n){return n.user.profile.userPets},Z=function(n){return n.user.isLoading},v=t(4289),j=t(8977),w=function(n){return(0,j.Z)(Date.parse(n),"dd.MM.yyyy")},y=function(n){switch(n.label){case"email":return"email";case"phone":return"tel";case"birthday":return"date";default:return"text"}},z=t(8617),k=t(168),P=t(6444),U=t(813),S=t(184),C=P.ZP.form(r||(r=(0,k.Z)(["\ndisplay: flex;\nalign-items: center;\n"]))),F=P.ZP.label(i||(i=(0,k.Z)(["\n  font-family: ",";\n  text-transform: capitalize;\n  font-style: normal;\n  font-size: ",";\n  letter-spacing: 0.04em;\n  @media "," {\n    font-weight: ",";\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontSizes.fs12}),U.U.tablet,(function(n){return n.theme.fontWeights.fw500}),(function(n){return n.theme.fontSizes.fs18})),D=P.ZP.input(o||(o=(0,k.Z)(["\n  font-family: ",";\n  font-size: ",";\n  line-height: 1.33;\n  letter-spacing: 0.04em;\n  width: 160px;\n  margin-right: 12px;\n  padding: 4px 0 4px 18px;\n  background-color: ",";\n  border-radius: ",";\n  border: 1px solid ",";\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  @media "," {\n    font-size: ",";\n    line-height: 1.39;\n    margin-right: 24px;\n    padding-left: 12px;\n    width: 216px;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontSizes.fs12}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.radii.br40}),(function(n){return n.theme.colors.inputBackground}),U.U.tablet,(function(n){return n.theme.fontSizes.fs18})),A=P.ZP.p(a||(a=(0,k.Z)(["\n  font-family: ",";\n  font-size: ",";\n  line-height: 1.33;\n  letter-spacing: 0.04em;\n  width: 160px;\n  margin-right: 12px;\n  padding: 4px 0 4px 18px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  @media "," {\n    font-size: ",";\n    line-height: 1.39;\n    margin-right: 24px;\n    padding-left: 12px;\n    width: 216px;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontSizes.fs12}),U.U.tablet,(function(n){return n.theme.fontSizes.fs18})),N=P.ZP.a(c||(c=(0,k.Z)(["\n  font-family: ",";\n  font-size: ",";\n  line-height: 1.33;\n  letter-spacing: 0.04em;\n  width: 160px;\n  margin-right: 12px;\n  padding: 4px 0 4px 18px;\n  color: ",";\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    cursor: pointer;\n    color: ",";\n  }\n  @media "," {\n    font-size: ",";\n    line-height: 1.39;\n    margin-right: 24px;\n    padding-left: 12px;\n    width: 216px;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontSizes.fs12}),(function(n){return n.theme.colors.mainText}),(function(n){return n.theme.colors.accent}),U.U.tablet,(function(n){return n.theme.fontSizes.fs18})),_=(0,P.ZP)((function(n){var e=n.className;return(0,S.jsx)(z.LsQ,{className:e})}))(s||(s=(0,k.Z)(["\n  color: ",";\n  width: 13px;\n  height: 13px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    cursor: pointer;\n    transform: scale(1.2);\n    color: ",";\n  }\n  @media "," {\n    width: 20px;\n    height: 20px;\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.hoverAccent}),U.U.tablet),T=(0,P.ZP)((function(n){var e=n.className;return(0,S.jsx)(z.dZ6,{className:e})}))(u||(u=(0,k.Z)(["\n\n  color: ",";\n  width: 13px;\n  height: 13px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    cursor: pointer;\n    transform: scale(1.2);\n    color: ",";\n  }\n  @media "," {\n    width: 20px;\n    height: 20px;\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.hoverAccent}),U.U.tablet),W=t(7712);function L(n,e){return"email"===n?"mailto:".concat(e):"tel"===n?"tel:".concat(e):void 0}var I,R,E,M,B,O,Y,Q,H,K,q,G,J,V,X,$,nn,en,tn,rn,on,an,cn,sn,un,ln,dn,hn,pn,fn,mn=function(n){var e=n.type,t=n.label,r=n.value,i=(0,f.useState)(!1),o=(0,d.Z)(i,2),a=o[0],c=o[1],s=(0,f.useState)(!0),u=(0,d.Z)(s,2),l=u[0],h=u[1],p=(0,f.useState)(""),b=(0,d.Z)(p,2),g=b[0],Z=b[1],v=(0,f.useState)(""),j=(0,d.Z)(v,2),w=j[0],y=j[1],z=(0,f.useState)(""),k=(0,d.Z)(z,2),P=k[0],U=k[1],I=(0,f.useState)(""),R=(0,d.Z)(I,2),E=R[0],M=R[1],B=(0,f.useState)(""),O=(0,d.Z)(B,2),Y=O[0],Q=O[1],H=(0,m.I0)();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(F,{htmlFor:t,children:[t,":"]}),(0,S.jsxs)(C,{onSubmit:function(n){n.preventDefault(),g&&(H((0,x.DZ)({name:g})).then(H((0,x.is)())),c(!1),h(!0)),P&&(H((0,x.DZ)({location:P})).then(H((0,x.is)())),c(!1),h(!0)),E&&(H((0,x.DZ)({phone:E})).then(H((0,x.is)())),c(!1),h(!0)),Y&&(H((0,x.DZ)({birthday:Y})).then(H((0,x.is)())),c(!1),h(!0)),w&&(H((0,x.DZ)({email:w})).then(H((0,x.is)())),c(!1),h(!0))},children:[a?(0,S.jsx)(D,{type:e,name:t,id:t,onChange:function(n){switch(h(!1),n.target.name){case"name":Z(n.target.value);break;case"phone":M(n.target.value);break;case"location":U(n.target.value);break;case"email":y(n.target.value);break;case"birthday":Q(n.target.value);break;default:return}}}):"email"===e||"tel"===e?(0,S.jsx)(N,{href:L(e,r),children:r}):(0,S.jsx)(A,{children:r}),l?(0,S.jsx)(W.Z,{type:"button",onClick:function(){c(!0)},children:(0,S.jsx)(_,{})}):(0,S.jsx)(W.Z,{type:"submit",children:(0,S.jsx)(T,{})})]})]})},xn=P.ZP.h2(I||(I=(0,k.Z)(["\n  font-family: ",";\n  font-style: normal;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.35;\n  letter-spacing: 0.04em;\n  color: ",";\n  margin-bottom: ","px; //18 \u0431\u044b\u043b\u043e\n  @media "," {\n    font-size: ",";\n    line-height: 38px;\n    color: ",";\n    margin-bottom: ","px;\n  }\n  @media "," {\n    margin-bottom: 24px;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.fw500}),(function(n){return n.theme.fontSizes.fs20}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.space[2]}),U.U.tablet,(function(n){return n.theme.fontSizes.fs28}),(function(n){return n.theme.colors.mainText}),(function(n){return n.theme.space[5]}),U.U.desktop),bn=P.ZP.section(R||(R=(0,k.Z)(["\n  padding-top: 52px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-direction: column;\n  gap: ","px;\n  @media "," {\n    flex-direction: row;\n  }\n"])),(function(n){return n.theme.space[5]}),U.U.desktop),gn=t(7689),Zn=t(5822),vn=t(3143),jn=P.ZP.button(E||(E=(0,k.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  line-height: 1.37;\n  letter-spacing: 0.04em;\n  color: ",";\n  background-color: transparent;\n  border: none;\n  position: absolute;\n  right: 0;\n  bottom: -66px;\n  display: flex;\n  align-items: center;\n  gap: ","px;\n  margin-left: auto;\n  margin-right: 6px;\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    cursor: pointer;\n    border: 1px solid ",";\n    border-radius: ",";\n  }\n  @media "," {\n    left: 20px;\n    bottom: 0;\n    right: auto;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.fw500}),(function(n){return n.theme.colors.inputText}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.radii.br40}),U.U.tablet),wn=P.ZP.div(M||(M=(0,k.Z)(["\n  width: 240px;\n  height: 240px;\n  padding: 15px;\n  font-size: 24px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 40px;\n  > div {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n  }\n  @media "," {\n  }\n"])),U.U.tablet),yn=(0,P.ZP)(vn.E)(B||(B=(0,k.Z)(["\n  min-width: 60px;\n  padding: 10px 15px;\n  @media "," {\n  }\n"])),U.U.tablet),zn=t(8797),kn=function(){var n=(0,m.I0)(),e=(0,f.useState)(!1),t=(0,d.Z)(e,2),r=t[0],i=t[1],o=(0,gn.s0)();return(0,S.jsxs)("main",{children:[(0,S.jsxs)(jn,{onClick:function(){return i(!0)},children:[(0,S.jsx)(z.cKt,{color:"rgba(245, 146, 86, 0.6)",size:"18px"})," Log Out"]}),(0,S.jsx)(zn.Z,{active:r,setActive:i,children:(0,S.jsxs)(wn,{children:["Do you really want to go out?",(0,S.jsxs)("div",{children:[" ",(0,S.jsx)(yn,{type:"button",onClick:function(){n((0,Zn.ni)()),o("/login",{replace:!0})},children:"Yes"}),(0,S.jsx)(yn,{type:"button",onClick:function(){return i(!1)},children:"Cancel"})]})]})})]})},Pn=t(6256),Un=P.ZP.div(O||(O=(0,k.Z)(["\n  padding: ","px 0;\n  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n  background: ",";\n  border-radius: ",";\n  @media "," {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: row-reverse;\n    gap: 52px;\n    padding: 24px ","px 24px 0;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n    border-radius: ",";\n  }\n  @media "," {\n    width: 395px;\n    flex-direction: column;\n    gap: 0;\n    padding: ","px\n      ","px 18px 0;\n    margin-left: 0;\n    margin-right: auto;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.br20}),U.U.tablet,(function(n){return n.theme.space[5]}),(function(n){return n.theme.radii.br40}),U.U.desktop,(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[2]})),Sn=P.ZP.img(Y||(Y=(0,k.Z)(["\n  margin: 0 auto ;\n  width: 233px;\n  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));\n  border-radius: ",";\n  @media "," {\n    margin-bottom: ","px; //30 \u0431\u044b\u043b\u043e\n  }\n  @media "," {\n    margin-bottom: 36px;\n  }\n"])),(function(n){return n.theme.radii.round}),U.U.tablet,(function(n){return n.theme.space[4]}),U.U.desktop),Cn=P.ZP.label(Q||(Q=(0,k.Z)(["\n  position: absolute;\n  right: 24px;\n  bottom: -12px;\n  display: flex;\n  align-items: normal;\n  gap: ","px;\n  padding: 2px;\n  font-family: ",";\n  font-size: ",";\n  line-height: 1.83;\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    cursor: pointer;\n    border: 1px solid ",";\n    border-radius: ",";\n  }\n  @media "," {\n    right: 0;\n    bottom: 0;\n  }\n  @media "," {\n    right: -74px;\n    bottom: 32px;\n  }\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontSizes.fs12}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.radii.br40}),U.U.tablet,U.U.desktop),Fn=P.ZP.form(H||(H=(0,k.Z)(["\nposition: relative;\nmargin-bottom: 45px;\n@media "," {\n    margin-bottom: 0;\n  }\n"])),U.U.tablet),Dn=P.ZP.input(K||(K=(0,k.Z)(["\n  position: absolute;\n  right: 24px;\n  bottom: -12px;\n  display: flex;\n  align-items: normal;\n  gap: ","px;\n  padding: 4px 10px;\n  font-family: ",";\n  font-size: ",";\n  line-height: 1.83;\n  color: ",";\n  background-color: "," ;\n  border-color: transparent;\n    border-radius: ",";\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    cursor: pointer;\n    background-color: ",";\n    transform: scale(1.2);\n  }\n  @media "," {\n    right: 0;\n    bottom: 0;\n  }\n  @media "," {\n    right: -74px;\n    bottom: 32px;\n  }\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontSizes.fs12}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.radii.br40}),(function(n){return n.theme.colors.hoverAccent}),U.U.tablet,U.U.desktop),An=(0,P.ZP)(Dn)(q||(q=(0,k.Z)(["\n"]))),Nn=P.ZP.input(G||(G=(0,k.Z)(["\n opacity: 0;\n width: 0;\n height: 0;\n line-height: 0;\n overflow: hidden;\n padding: 0;\n margin:0;\n"]))),_n=P.ZP.div(J||(J=(0,k.Z)(["\n  position: relative;\n"]))),Tn=P.ZP.ul(V||(V=(0,k.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding: 0 12px 0 16px;\n  margin-bottom: 66px;\n  @media "," {\n    width: 380px;\n    margin-bottom: 55px;\n    gap: ","px;\n    padding-right: 0;\n  }\n  @media "," {\n    gap: ","px;\n    margin-bottom: 46px;\n  }\n"])),U.U.tablet,(function(n){return n.theme.space[1]}),U.U.desktop,(function(n){return n.theme.space[2]})),Wn=P.ZP.li(X||(X=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  > div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"]))),Ln=function(){var n=(0,m.I0)(),e=(0,m.v9)(v.Qb),t=(0,m.v9)(b),r=(0,m.v9)(Z);(0,f.useEffect)((function(){e&&n((0,x.is)())}),[n,e]);var i=function(n){var e=[];if(n)for(var t in n)"birthday"!==t?"avatarURL"!==t&&"favorites"!==t&&e.push({label:t,value:n[t]}):n[t]&&e.push({label:t,value:w(n[t])});return e}(t.user),o=(0,f.useState)(null),a=(0,d.Z)(o,2),c=a[0],s=a[1],u=function(){var e=(0,l.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(r=new FormData).append("imageURL",c),e.next=5,n((0,x.tU)(r));case 5:return s(null),e.next=8,n((0,x.is)());case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,S.jsxs)("div",{children:[(0,S.jsx)(xn,{children:"My information:"}),(0,S.jsxs)(Un,{children:[(0,S.jsxs)("div",{children:[t.user?(0,S.jsx)(Sn,{src:t.user.avatarURL,alt:"User avatar"}):(0,S.jsx)(Sn,{src:Pn,alt:"User avatar"}),(0,S.jsxs)(Fn,{onSubmit:u,encType:"multipart/form-data",method:"post",children:[(0,S.jsx)(Nn,{type:"file",name:"photo",id:"photoUser",accept:"image/*,.png, .jpg",onChange:function(n){console.log("e.target.file",n.target.files[0]),s(n.target.files[0])}}),c?r?(0,S.jsx)(An,{type:"submit",value:"Send..."}):(0,S.jsx)(Dn,{type:"submit",value:"Send"}):(0,S.jsxs)(Cn,{htmlFor:"photoUser",children:[(0,S.jsx)(z._HF,{color:"#F59256",size:"20px"}),"Edit photo"]})]})]}),(0,S.jsxs)(_n,{children:[i?(0,S.jsx)(Tn,{children:i.map((function(n){return(0,S.jsx)(Wn,{children:(0,S.jsx)(mn,{type:y(n),label:n.label,value:n.value})},n.label)}))}):(0,S.jsx)(Tn,{children:"Not"}),(0,S.jsx)(kn,{})]})]})]})},In=P.ZP.ul($||($=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 280px;\n  gap: ","px;\n  @media "," {\n    width: 704px;\n  }\n  @media "," {\n    width: 820px;\n  }\n"])),(function(n){return n.theme.space[3]}),U.U.tablet,U.U.desktop),Rn=P.ZP.li(nn||(nn=(0,k.Z)(["\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: ","px;\n  background: ",";\n  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n  border-radius: ",";\n  padding: ","px ","px\n    ","px;\n  @media "," {\n    flex-direction: row;\n    gap: ","px;\n    padding: ","px;\n    border-radius: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.br20}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[5]}),U.U.tablet,(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.br40})),En=P.ZP.img(en||(en=(0,k.Z)(["\n  border-radius: ",";\n  @media "," {\n    border-radius: ",";\n    width: 160px;\n  }\n"])),(function(n){return n.theme.radii.br20}),U.U.tablet,(function(n){return n.theme.radii.br40})),Mn=P.ZP.div(tn||(tn=(0,k.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  width: 240px;\n  flex-direction: column;\n  gap: 12px;\n  @media "," {\n    width: 470px;\n  }\n  @media "," {\n    width: 580px;\n  }\n"])),U.U.tablet,U.U.desktop),Bn=P.ZP.div(rn||(rn=(0,k.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  letter-spacing: 0.04em;\n  > span {\n    font-weight: ",";\n    line-height: 1.57;\n  }\n  @media "," {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.fw500}),(function(n){return n.theme.fontSizes.fs14}),(function(n){return n.theme.fontWeights.fw400}),U.U.tablet,(function(n){return n.theme.fontSizes.fs16})),On=(0,P.ZP)(W.Z)(on||(on=(0,k.Z)(["\n  width: 38px;\n  height: 38px;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    cursor: pointer;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.inputText})),Yn=(0,P.ZP)((function(n){var e=n.className;return(0,S.jsx)(z._YF,{className:e})}))(an||(an=(0,k.Z)(["\n  color: ",";\n  width: 20px;\n  height: 20px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    cursor: pointer;\n    transform: scale(1.2);\n  }\n  @media "," {\n    width: 24px;\n    height: 24px;\n  }\n"])),(function(n){return n.theme.colors.inputText}),U.U.tablet),Qn=P.ZP.div(cn||(cn=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 150px;\n  background-color: rgba(245, 146, 86, 0.3);\n  border-radius: ",";\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.57;\n  letter-spacing: 0.04em;\n  color: rgba(245, 146, 86, 0.9);\n  @media "," {\n    height: 300px;\n  }\n  @media "," {\n    font-size: ",";\n    height: 582px;\n  }\n"])),(function(n){return n.theme.radii.br40}),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.fw400}),(function(n){return n.theme.fontSizes.fs18}),U.U.tablet,U.U.desktop,(function(n){return n.theme.fontSizes.fs24})),Hn=function(n){var e=n._id,t=(0,m.I0)(),r=(0,f.useState)(!1),i=(0,d.Z)(r,2),o=i[0],a=i[1];return(0,S.jsxs)("main",{children:[(0,S.jsx)(On,{onClick:function(){return a(!0)},children:(0,S.jsx)(Yn,{})}),(0,S.jsx)(zn.Z,{active:o,setActive:a,children:(0,S.jsxs)(wn,{children:["Do you really want to delete?",(0,S.jsxs)("div",{children:[" ",(0,S.jsx)(yn,{type:"button",onClick:function(){t((0,x.il)(e))},children:"Yes"}),(0,S.jsx)(yn,{type:"button",onClick:function(){return a(!1)},children:"Cancel"})]})]})})]})},Kn=function(){var n=(0,m.v9)(g);return(0,S.jsxs)(S.Fragment,{children:[0===n.length&&(0,S.jsx)(Qn,{children:"Please, add pet."}),n&&(0,S.jsx)(In,{children:n.map((function(n){return(0,S.jsxs)(Rn,{children:[n.petsPhotoURL?(0,S.jsx)(En,{src:n.petsPhotoURL,alt:n.name}):(0,S.jsx)("div",{children:"\u0417\u0430\u0433\u043b\u0443\u0448\u043a\u0430"}),(0,S.jsxs)(Mn,{children:[(0,S.jsx)(Hn,{_id:n._id}),(0,S.jsxs)(Bn,{children:["Name: ",(0,S.jsx)("span",{children:n.name})," "]}),(0,S.jsxs)(Bn,{children:["Date of birth: ",(0,S.jsx)("span",{children:w(n.birthday)})]}),(0,S.jsxs)(Bn,{children:["Breed: ",(0,S.jsx)("span",{children:n.breed})]}),(0,S.jsxs)(Bn,{children:["Comments: ",(0,S.jsx)("span",{children:n.comments})]})]})]},n._id)}))})]})},qn=P.ZP.div(sn||(sn=(0,k.Z)(["\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n"]))),Gn=(0,P.ZP)(xn)(un||(un=(0,k.Z)(["\n  @media "," {\n    margin-bottom: 24px;\n  }\n"])),U.U.tablet),Jn=(P.ZP.div(ln||(ln=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  > p {\n    font-weight: ",";\n    font-size: ",";\n    line-height: 27px;\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.fw500}),(function(n){return n.theme.fontSizes.fs20}),(function(n){return n.theme.colors.mainText})),P.ZP.div(dn||(dn=(0,k.Z)(["\n    width: 280px;\n    height: 530px;\n    padding: 40px 20px;\n"])))),Vn=P.ZP.div(hn||(hn=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  > p {\n    font-weight: ",";\n    font-size: ",";\n    line-height: 27px;\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.fw500}),(function(n){return n.theme.fontSizes.fs20}),(function(n){return n.theme.colors.mainText})),Xn=(0,P.ZP)(W.Z)(pn||(pn=(0,k.Z)(["\n  background-color: ",";\n  padding: 0;\n  width: 40px;\n  height: 40px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    cursor: pointer;\n    background-color: "," ;\n    transform: scale(1.2);\n  }\n  @media "," {\n    width: 40px;\n    height: 40px;\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.hoverAccent}),U.U.tablet),$n=(0,P.ZP)((function(n){var e=n.className;return(0,S.jsx)(z.r7I,{className:e})}))(fn||(fn=(0,k.Z)(["\n  color: ",";\n  width: 24px;\n  height: 24px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    cursor: pointer;\n    transform: scale(1.2);\n  }\n  @media "," {\n    width: 24px;\n    height: 24px;\n  }\n"])),(function(n){return n.theme.colors.white}),U.U.tablet),ne=function(){var n=(0,f.useState)(!1),e=(0,d.Z)(n,2),t=e[0],r=e[1];return(0,S.jsxs)("main",{children:[(0,S.jsxs)(Vn,{children:[(0,S.jsx)("p",{children:"Add pet "}),(0,S.jsx)(Xn,{onClick:function(){return r(!0)},children:(0,S.jsx)($n,{})})]}),(0,S.jsx)(zn.Z,{active:t,setActive:r,children:(0,S.jsxs)(Jn,{children:[(0,S.jsx)("h3",{children:"Add pet"}),(0,S.jsxs)("form",{children:[(0,S.jsxs)("label",{htmlFor:"",children:["Name pet",(0,S.jsx)("input",{type:"text"})]}),(0,S.jsxs)("label",{htmlFor:"",children:["Date of birth",(0,S.jsx)("input",{type:"text"})]}),(0,S.jsxs)("label",{htmlFor:"",children:["Breed",(0,S.jsx)("input",{type:"text"})]})]})]})})]})},ee=function(){return(0,S.jsxs)("div",{children:[(0,S.jsxs)(qn,{children:[(0,S.jsx)(Gn,{children:"My pets:"}),(0,S.jsx)(ne,{})]}),(0,S.jsx)(Kn,{})]})},te=t(4017),re=function(){return(0,S.jsx)("main",{children:(0,S.jsx)(te.W,{children:(0,S.jsxs)(bn,{children:[(0,S.jsx)(Ln,{}),(0,S.jsx)(ee,{})]})})})}},6256:function(n,e,t){n.exports=t.p+"static/media/userAvatar.85a91d1488c0891fb479.png"}}]);
//# sourceMappingURL=225.8519a8f5.chunk.js.map