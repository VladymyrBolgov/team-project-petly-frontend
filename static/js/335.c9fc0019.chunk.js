"use strict";(self.webpackChunkteam_project_petly_frontend=self.webpackChunkteam_project_petly_frontend||[]).push([[335],{813:function(n,t,e){e.d(t,{U:function(){return c}});var r="479px",o="768px",i="1279px",a="1280px",c={mobile:"(min-width: ".concat("320px",")"),mobileOnly:"(max-width: ".concat(r,")"),tablet:"(min-width: ".concat(o,")"),tabletOnly:"(min-width:".concat(o,") and (max-width:").concat(i,")"),beforeDesktop:"(max-width: ".concat(i,")"),desktop:"(min-width: ".concat(a,")")}},2390:function(n,t,e){e.d(t,{FA:function(){return x},HN:function(){return g},SP:function(){return h},Z$:function(){return f},a3:function(){return p},y:function(){return b}});var r,o,i,a,c,u,s=e(168),d=e(7691),m=e(5705),l=e(813),p=(0,d.ZP)(m.l0)(r||(r=(0,s.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  button {\n    margin: ","px auto;\n    width: 280px;\n    font-weight: ",";\n    letter-spacing: 0.04em;\n  }\n  @media "," {\n    > button {\n      width: 458px;\n    }\n  }\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fontWeights.fw500}),l.U.tablet),f=d.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: ","px;\n"])),(function(n){return n.theme.space[2]})),h=d.ZP.div(i||(i=(0,s.Z)(["\n  position: relative;\n"]))),x=(0,d.ZP)(m.gN)(a||(a=(0,s.Z)(["\n  width: 280px;\n  padding: 11px 0 11px 14px;\n  font-family: ",";\n  font-size: ",";\n  line-height: 1.35;\n  letter-spacing: 0.04em;\n  background: ",";\n  border: ",";\n  border-radius: ",";\n  :hover,\n  :focus {\n    cursor: pointer;\n    border-color: ",";\n  }\n  @media "," {\n    width: 448px;\n    font-size: ",";\n  }\n  @media "," {\n    width: 458px;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontSizes.fs14}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.borders.auth}),(function(n){return n.theme.radii.br40}),(function(n){return n.theme.colors.accent}),l.U.tablet,(function(n){return n.theme.fontSizes.fs18}),l.U.desktop),b=(0,d.ZP)(m.Bc)(c||(c=(0,s.Z)(["\n  position: absolute;\n  left: 15px;\n  top: -17px;\n  width: 100%;\n  font-size: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.fs14}),(function(n){return n.theme.colors.accent})),g=d.ZP.p(u||(u=(0,s.Z)(["\n  font-family: ",";\n  font-size: ",";\n  text-align: center;\n  letter-spacing: 0.04em;\n  color: ",";\n  > a {\n    text-decoration-line: underline;\n    color: #3091eb;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontSizes.fs12}),(function(n){return n.theme.colors.inputText}))},3143:function(n,t,e){e.d(t,{E:function(){return u},S:function(){return c}});var r,o,i=e(168),a=e(7691),c=a.ZP.button(r||(r=(0,i.Z)(["\n  padding: 8px 41px;\n  min-width: ",";\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n  font-size: ",";\n  line-height: 1.35;\n  transition: color 250ms linear, border 250ms linear;\n  color: ",";\n  &:hover,\n  &:focus {\n    border: ",";\n    color: ",";\n    cursor: pointer;\n  }\n"])),(function(n){return n.size}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.borders.main}),(function(n){return n.theme.radii.br40}),(function(n){return n.theme.fontSizes.fs20}),(function(n){return n.theme.colors.mainText}),(function(n){return n.theme.borders.accent}),(function(n){return n.theme.colors.hoverAccent})),u=(0,a.ZP)(c)(o||(o=(0,i.Z)(["\n  background-color: ",";\n  min-width: ",";\n  color: ",";\n  border: none;\n  transition: background-color 250ms linear;\n\n  &:hover,\n  &:focus {\n    border: none;\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.size}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.hoverAccent}))},8335:function(n,t,e){e.r(t),e.d(t,{default:function(){return A}});var r,o,i,a=e(4017),c=e(1087),u=e(5705),s=e(2797),d=e(5984),m=e(9434),l=e(5822),p=e(2390),f=e(3143),h=e(5206),x=e(184),b=/^[\S*]{7,32}$/,g=/^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/,w=function(){var n=(0,d.x0)(),t=(0,d.x0)(),e=(0,m.I0)(),r=s.Ry({email:s.Z_().min(7,"Email must contain at least 7 symbols").max(63,"Email must contain not more than 63 symbols").matches(g,"Please, enter a valid e-mail").required("E-mail is required"),password:s.Z_().min(7,"Password must contain at least 7 symbols").max(32,"Password must contain not more than 32 symbols").matches(b,"Please, enter a valid password").required("Password is required")});return(0,x.jsx)(u.J9,{initialValues:{email:"",password:""},validationSchema:r,onSubmit:function(n){var t=n.email,r=n.password;e((0,l.Ib)({email:t,password:r})).then((function(n){n.error?h.Am.error("Wrong password or email!"):h.Am.success("Successfully logged in!")}))},children:(0,x.jsxs)(p.a3,{autoComplete:"off",children:[(0,x.jsxs)(p.Z$,{children:[(0,x.jsxs)(p.SP,{children:[(0,x.jsx)(p.FA,{type:"text",name:"email",id:n,placeholder:"Email"}),(0,x.jsx)(p.y,{name:"email",component:"p"})]}),(0,x.jsxs)(p.SP,{children:[(0,x.jsx)(p.FA,{type:"password",name:"password",id:t,placeholder:"Password"}),(0,x.jsx)(p.y,{name:"password",component:"p"})]})]}),(0,x.jsx)(f.E,{type:"submit",size:"280px",children:"Login"}),(0,x.jsxs)(p.HN,{children:["Don't have an account? ",(0,x.jsx)(c.OL,{to:"/register",children:"Register"})]})]})})},k=e(168),Z=e(7691),v=e(813),y=e(9580),j=e(9757),z=e(6878),P=Z.ZP.section(r||(r=(0,k.Z)(["\n  padding-top: 44px;\n  height: calc(100vh - 42px);\n  background-image: url('","');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: bottom;\n\n  @media "," {\n    padding-top: 204px;\n    height: calc(100vh + 82px);\n    background-image: url('","');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: bottom;\n  }\n  @media "," {\n    padding-top: 80px;\n    height: calc(100vh - 68px);\n    background-image: url('","');\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: bottom 50px;\n  }\n"])),z,v.U.tablet,j,v.U.desktop,y),S=Z.ZP.div(o||(o=(0,k.Z)(["\n  @media "," {\n    background: ",";\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n    border-radius: ",";\n    padding: 65px 75px 40px 75px;\n    width: 608px;\n    margin: 0 auto;\n  }\n  @media "," {\n    width: 618px;\n    padding: 60px 80px;\n  }\n"])),v.U.tablet,(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.br40}),v.U.desktop),_=Z.ZP.h2(i||(i=(0,k.Z)(["\n  margin-bottom: ","px;\n  text-align: center;\n  font-family: ",";\n  line-height: 1.37;\n  letter-spacing: 0.04em;\n  @media "," {\n    font-weight: ",";\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fonts.main}),v.U.tablet,(function(n){return n.theme.fontWeights.fw500}),(function(n){return n.theme.fontSizes.fs36})),A=function(){return(0,x.jsx)("main",{children:(0,x.jsx)(P,{children:(0,x.jsx)(a.W,{children:(0,x.jsxs)(S,{children:[(0,x.jsx)(_,{children:"Login"}),(0,x.jsx)(w,{})]})})})})}},9580:function(n,t,e){n.exports=e.p+"static/media/background-desk.a0420da1b26bc24c9024.png"},6878:function(n,t,e){n.exports=e.p+"static/media/background-mob.26f87b37c159912a2ee7.png"},9757:function(n,t,e){n.exports=e.p+"static/media/background-tab.327a3deabf43065dd576.png"},5984:function(n,t,e){e.d(t,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=335.c9fc0019.chunk.js.map