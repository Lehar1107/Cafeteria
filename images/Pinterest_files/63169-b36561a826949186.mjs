"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[63169],{357013:(e,t,o)=>{o.d(t,{Z:()=>s});var l=o(590338),i=o(730212),r=o(785893);let s=({currency:e,maximumFractionDigits:t,minimumFractionDigits:o,shortform:s,shortformMaximumFractionDigits:n,formatStyle:a,uplimit:c,value:h})=>{let d=(0,l.Z)();return(0,r.jsx)(i.LC,{children:l=>d(l.locale||"en-US",h,{currency:e,maximum_fraction_digits:t,minimum_fraction_digits:o,shortform:s,shortform_maximum_fraction_digits:n,style:a,uplimit:c})})}},576359:(e,t,o)=>{o.d(t,{Z:()=>i});var l=o(667294);function i(e,t){let o=(0,l.useRef)([]),[i,r]=(0,l.useState)(),[s,n]=(0,l.useReducer)(i??(()=>t),t),a=(0,l.useCallback)(t=>{i?n(t):(o.current.length||e().then(e=>{r(()=>e.default)}),o.current=[...o.current,t])},[e,i]);return(0,l.useEffect)(()=>{i&&(o.current.forEach(n),o.current=[])},[i]),[s,a]}},838486:(e,t,o)=>{o.d(t,{Z:()=>z});var l=o(667294),i=o(545007),r=o(883119),s=o(609326),n=o(573706),a=o(703454),c=o(803611),h=o(208121),d=o(194093),u=o(144326),_=o(240760),p=o(267005),f=o(864723),w=o(901450),x=o(969119),g=o(357013),m=o(785893);let v=({followText:e,followerCount:t,userFollowed:o})=>{let l=(0,u.ZP)();return(0,_.nk)(l._('{{ followCount }} {{ followText }}', ' - ', ' -- '),{followCount:(0,m.jsx)(r.xu,{"data-test-id":"followCount",opacity:o?void 0:.8,paddingX:1,children:(0,m.jsx)(r.xv,{color:o?"subtle":"inverse",children:(0,m.jsx)(g.Z,{shortform:!0,shortformMaximumFractionDigits:0,value:t})})},"followCount"),followText:(0,m.jsx)(r.xu,{"data-test-id":"followText",paddingX:1,children:(0,m.jsx)(r.xv,{color:o?"default":"inverse",weight:"bold",children:e})},"followText")})};var j=o(212443),y=o(402151),b=o(424583),P=o(310368);function C(e,t,o){var l;return(t="symbol"==typeof(l=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var l=o.call(e,t||"default");if("object"!=typeof l)return l;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?l:String(l))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class A extends l.PureComponent{constructor(...e){super(...e),C(this,"handleButtonClick",({event:e})=>{let{requireAuth:t,i18n:o,userFollowed:l}=this.props;if(t){e.stopPropagation(),t({loginModalHeader:(0,a.N4)({i18n:o,toFollow:!l})});return}let{shouldStopEventPropagation:i,loggingData:r}=this.props;i&&(e.preventDefault(),e.stopPropagation()),this.props.logContextEvent({event_type:101,component:13672,element:11951,object_id_str:this.props.id,view_type:this.props.viewType,view_parameter:this.props.viewParameter,clientTrackingParams:this.props.clientTrackingParams,...r||Object.freeze({})}),this.toggleFollowUnfollow()}),C(this,"handleClick",({event:e})=>{let{requireAuth:t}=this.props;if((t||this.props.shouldStopEventPropagation)&&e.stopPropagation(),t){t();return}this.toggleFollowUnfollow()}),C(this,"toggleFollowUnfollow",()=>{let{id:e,mostRecentPinId:t,loggingData:o,userFollowed:l,viewType:i,viewParameter:r,clientTrackingParams:s}=this.props;l?(this.props.logContextEvent({event_type:46,object_id_str:e,view_type:i,view_parameter:r,aux_data:{pin_id:t},clientTrackingParams:s,...o||Object.freeze({})}),this.unfollow()):(this.props.logContextEvent({event_type:45,object_id_str:e,view_type:i,view_parameter:r,aux_data:{pin_id:t},clientTrackingParams:s,...o||Object.freeze({})}),this.follow())}),C(this,"follow",()=>{let{follow:e,id:t,onUserFollow:o,mostRecentPinId:l,setMostRecentPinId:i,inviteCode:r,handleFollowSuccessFromInvite:s,loggingData:n,viewType:a,viewParameter:c}=this.props;e(t,l,()=>{r?(s?.(),this.props.logContextEvent({event_type:14858,object_id_str:t,view_type:a,view_parameter:c,...n||Object.freeze({})})):this.showConfirmation()},this.showError),o&&o(!0),i(null)}),C(this,"showToast",e=>{let{id:t,imageUrl:o,profileUrl:l,toastManagerContext:i,suppressToasts:r}=this.props;r||i.showOneToast(({hideToast:i})=>(0,m.jsx)(P.Z,{handleHide:i,href:l,imageUrl:o,text:e,userId:t}))}),C(this,"showConfirmation",()=>{let e=(0,m.jsx)(r.xv,{children:this.props.i18n._('Following! Their created Pins will show up in your home feed!', 'userFollowButton.informationalToastText2', 'Text explaining that a creator\'s Pins will show up in home feed after follow')});this.showToast(e)}),C(this,"showError",e=>{let{fullName:t,userFollowed:o,showEmailVerificationReminderModal:l,loggingData:i,inviteCode:s,id:n,viewParameter:a,viewType:c}=this.props,h=o?this.props.i18n._('Error unfollowing {{ usernameComponent }}.', 'UserFollowButton.error.unfollowing', 'When there is an API error when unfollowing a user'):this.props.i18n._('Error following {{ usernameComponent }}.', 'UserFollowButton.error.following', 'When there is an API error when following a user');if((0,d.Z)(e,"api_error_code")===p.H9){l();return}let u=(0,m.jsx)(r.xv,{children:(0,_.nk)(h,{usernameComponent:(0,m.jsx)(r.xv,{inline:!0,weight:"bold",children:t})})});this.showToast(u),!o&&s&&this.props.logContextEvent({event_type:14859,object_id_str:n,view_type:c,view_parameter:a,...i||Object.freeze({})})}),C(this,"unfollow",()=>{let{id:e,onUserFollow:t,unfollow:o,mostRecentPinId:l,setMostRecentPinId:i}=this.props;o(e,l,()=>{},this.showError),t&&t(!1),i(null)})}renderButton(){let{button:e,followerCount:t,inline:o=!1,isOwnProfile:l,invertButtonColor:i,isSecondaryButton:s,size:n,showFollowerCount:a,userFollowed:c}=this.props,h=c?this.props.i18n._('Following', 'User follow button', 'User follow button'):this.props.i18n._('Follow', 'User follow button', 'User follow button');if(e)return e({followText:h,onClick:this.handleButtonClick,userFollowed:c});if(l)return(0,m.jsx)(r.zx,{disabled:!0,fullWidth:!0,text:this.props.i18n._('This is you', 'Button label to note that this is your Profile', 'Button label to note that this is your Profile')});if(!a)return(0,m.jsx)(r.xu,{"data-test-id":`user-${c?"unfollow":"follow"}-button`,display:"inlineBlock",children:(0,m.jsx)(r.zx,{accessibilityLabel:c?this.props.i18n._('Unfollow', 'userUnfollowButton.button.accessibilityLabel', 'Accessibility label for the unfollow button'):this.props.i18n._('Follow', 'userFollowButton.button.accessibilityLabel', 'Accessibility label for the follow button'),color:s||c?"gray":"red",fullWidth:o,onClick:this.handleButtonClick,selected:i?!c:!!c,size:n??void 0,text:h})});{let e="number"==typeof t?(0,m.jsx)(v,{followerCount:t,followText:h,userFollowed:c}):h;return(0,m.jsx)(r.iP,{onTap:this.handleClick,children:(0,m.jsx)(r.xu,{color:c?"secondary":"primary",paddingX:3,paddingY:3,rounding:2,children:(0,m.jsx)(r.kC,{alignItems:"center",justifyContent:"start",children:e})})})}}render(){let{showPulsar:e,userFollowed:t}=this.props;return(0,m.jsxs)(r.xu,{display:"flex",position:"relative",children:[this.renderButton(),e&&(0,m.jsx)(r.iP,{onTap:this.handleClick,children:(0,m.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:-86,marginTop:-28}},display:"inlineBlock",position:"absolute",children:(0,m.jsx)(r.o3,{paused:t||!1})})})]})}}function z(e){let{logContextEvent:t}=(0,n.v)(),o=(0,u.ZP)(),{id:l,setMostRecentPinId:r}=(0,j.f)(),a=(0,c.Z)(),d=(0,i.I0)(),{showEmailVerificationReminderModal:_}=(0,h.y9)(),p=(0,b.mN)()(e.id),g=p?.follower_count,v=p?p.explicitly_followed_by_me:e.userFollowed;return(0,x.Z)(()=>{let{id:t}=e,o=(0,f.M0)().getItem(s.AG)||"";o&&o===t&&((0,f.M0)().removeItem(s.AG),d((0,y.ZN)(o,e.clientTrackingParams)))}),(0,m.jsx)(A,{...e,follow:(t,o,l,i)=>{d((0,y.yA)(t,o,e.clientTrackingParams,e.inviteCode)).then(l).catch(e=>{i(e)})},followerCount:g,i18n:o,logContextEvent:t,mostRecentPinId:l,requireAuth:a,setMostRecentPinId:r,showEmailVerificationReminderModal:_,toastManagerContext:(0,w.F9)(),unfollow:(t,o,l,i)=>{d((0,y.KF)(t,o,e.clientTrackingParams)).then(l,i)},userFollowed:v})}},863314:(e,t,o)=>{o.d(t,{Z:()=>m});var l=o(883119),i=o(573706),r=o(559028),s=o(679482),n=o(357013),a=o(144326),c=o(788388),h=o(240760),d=o(383399),u=o(838486),_=o(701918),p=o(785893);let f={__style:{backgroundColor:"rgba(0, 0, 0, 0.04)"}},w=(s.yF-2)/2,x=1.6*s.yF;function g({height:e,image:t,width:o}){let i=(0,a.ZP)();return(0,p.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{borderRight:"1px solid white"}},children:t?(0,p.jsxs)(l.xu,{position:"relative",children:[(0,p.jsx)(l.GH,{contentAspectRatio:(t.width??1)/(t.height??1),height:e,width:o,children:(0,p.jsx)(l.Ee,{alt:i._('contextual pin image', 'UserContent.PinImage', 'alt text for pin image'),color:t.dominant_color||void 0,naturalHeight:t.height??1,naturalWidth:t.width??1,src:t.url??""})}),(0,p.jsx)(l.xu,{dangerouslySetInlineStyle:f,height:e,left:!0,position:"absolute",top:!0,width:o})]}):(0,p.jsx)(l.xu,{color:"secondary",height:e,width:o})})}function m({action:e,auxData:t,avatarSize:o,avatarUrl:f,contextualPinImages:m,followedByMe:v,followersCount:j,fullName:y,isVerifiedIdentity:b,invertButtonColor:P,isVerifiedMerchant:C,onActionClick:A,recentPinImages:z,suppressToasts:T,truncateName:k=!1,userId:F,username:I,userPinsImages236x:E,userSearchRepStyle:U,viewParameter:Z,viewType:B}){let S;let{logContextEvent:L}=(0,i.v)(),O=(0,a.ZP)(),M=(0,d.Z)(),D=z?.["222x"]||z?.["192x"]||[],N=m?.["222x"]||m?.["192x"]||[],R=U&&N.length<=0,H=U?N.concat(D).slice(0,4):(E||[]).concat(D).slice(0,2);0===H.length&&(H=[void 0,void 0]);let W=U?197:157,V=U?(x-2*((S=H.length)-1))/S:w,$=!R&&(0,p.jsx)(l.zd,{rounding:4,children:(0,p.jsx)(l.kC,{children:H.map((e,t)=>(0,p.jsx)(g,{height:W,image:H[t],width:V},`pinImage-${t}`))})}),G="";"number"==typeof j&&(G=(0,p.jsx)(n.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:j},"followersCount"));let K=o?void 0:80,X=e=>(0,p.jsx)(l.xu,{height:K,marginTop:e,width:K,children:(0,p.jsx)(r.qE,{name:y??"",outline:!0,size:o||"fit",src:f??""})}),q=e=>(0,p.jsxs)(l.kC,{alignItems:e,direction:"column",gap:{row:0,column:1},children:[(0,p.jsx)(l.xu,{"data-test-id":"user-rep-name",maxWidth:s.yF,children:(0,p.jsx)(l.xv,{align:e,lineClamp:k?1:void 0,weight:"bold",children:C||b?(0,p.jsx)(_.Z,{badgeSize:"sm",badgeSpacing:2,fullName:y??"",isVerifiedIdentity:b,isVerifiedMerchant:C,truncate:k}):y})}),(0,p.jsx)(l.xu,{"data-test-id":"user-rep-followers",children:(0,p.jsx)(l.xv,{align:e,size:"100",children:(0,h.nk)(O.ngettext('{{ formattedFollowersCount }} follower', '{{ formattedFollowersCount }} followers', j, 'Label for the number of people following a user', 'Label for the number of people following a user'),{formattedFollowersCount:G})})})]}),Y=(0,p.jsx)(l.kC,{height:48,children:e&&e.url?(0,p.jsx)("object",{children:(0,p.jsx)(l.ZP,{href:e.url,onClick:({event:e,dangerouslyDisableOnNavigation:o})=>{o(),e.stopPropagation(),L({event_type:9029,object_id_str:F,view_type:B,view_parameter:Z,aux_data:{...t}}),A?.()},size:"lg",text:e.text||""})}):(0,p.jsx)(u.Z,{fullName:y,id:F,imageUrl:f,invertButtonColor:P,isOwnProfile:M.isAuth&&M.id===F,isSecondaryButton:!0,onUserFollow:A,profileUrl:`/${I}/`,shouldStopEventPropagation:!0,size:"lg",suppressToasts:T,userFollowed:v,viewParameter:Z,viewType:B})});return(0,p.jsx)(c.F,{impressionType:"User",loggingId:F,viewParameter:Z,viewType:B,children:({impressionTrackerRef:e})=>(0,p.jsx)(l.xu,{ref:e,width:U?x:s.yF,children:(0,p.jsx)(l.xu,{"data-test-id":"user-rep",children:(0,p.jsx)(l.Tg,{accessibilityLabel:O._('profile name details', 'UserRep.Card', 'description for UserRep card'),href:`/${I}/`,onTap:()=>{L({event_type:43,object_id_str:F,view_type:B,view_parameter:Z})},rounding:4,children:(0,p.jsxs)(l.kC,{alignItems:"center",direction:"column",gap:{row:0,column:2},children:[$,U?(0,p.jsx)(l.xu,{width:x,children:(0,p.jsxs)(l.kC,{alignItems:"center",justifyContent:"between",children:[(0,p.jsxs)(l.kC,{alignItems:"center",gap:{row:2,column:0},children:[X(),q("start")]}),Y]})}):(0,p.jsxs)(l.kC,{alignItems:"center",direction:"column",gap:{row:0,column:2},children:[X(-10),q("center"),Y]})]})})})})})}},914716:(e,t,o)=>{o.d(t,{Z:()=>s});var l=o(883119),i=o(863314),r=o(785893);function s({action:e,auxData:t,avatarSize:o,avatarUrl:s,contextualPinImages:n,followedByMe:a,followersCount:c,fullName:h,isVerifiedIdentity:d,invertButtonColor:u,isVerifiedMerchant:_,onActionClick:p,recentPinImages:f,suppressToasts:w,truncateName:x=!1,userId:g,username:m,userPinsImages236x:v,userSearchRepStyle:j,viewParameter:y,viewType:b}){return(0,r.jsx)(l.xu,{marginBottom:3,marginTop:3,children:(0,r.jsx)(l.st,{children:(0,r.jsx)(i.Z,{action:e,auxData:t,avatarSize:o,avatarUrl:s,contextualPinImages:n,followedByMe:a,followersCount:c,fullName:h,invertButtonColor:u,isVerifiedIdentity:d,isVerifiedMerchant:_,onActionClick:p,recentPinImages:f,suppressToasts:w,truncateName:x,userId:g,username:m,userPinsImages236x:v,userSearchRepStyle:j,viewParameter:y,viewType:b})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/63169-b36561a826949186.mjs.map