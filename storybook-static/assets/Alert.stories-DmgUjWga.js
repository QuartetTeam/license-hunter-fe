import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{C}from"./ConfirmButton-BsRzbbFT.js";import{C as f}from"./CancelButton-maNWJoWG.js";import{S as v}from"./icon-button-cancel-DIst9dUE.js";import"./index-C9rmetsa.js";import"./index-BofL8h0e.js";const d=({onVisibleAlertClick:a,alertTitle:m,alertContent:p,alertConfirmMessage:u,alertCancelMessage:g})=>e.jsxs("div",{className:"alert-container",children:[e.jsx("div",{className:"alert-header",children:e.jsx(v,{onClick:a})}),e.jsxs("div",{className:"alert-body",children:[e.jsx("div",{className:"alert-body__title",children:m}),e.jsx("div",{className:"alert-body__content",children:p})]}),e.jsxs("div",{className:"alert-footer",children:[e.jsx(f,{name:g,clickEvent:a}),e.jsx(C,{name:u,clickEvent:a})]})]});d.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{alertVisible:{required:!0,tsType:{name:"boolean"},description:""},onVisibleAlertClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},alertTitle:{required:!0,tsType:{name:"string"},description:""},alertContent:{required:!0,tsType:{name:"string"},description:""},alertConfirmMessage:{required:!0,tsType:{name:"string"},description:""},alertCancelMessage:{required:!0,tsType:{name:"string"},description:""}}};const h={title:"Component/Alert",component:d,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{alertVisible:!0,onVisibleAlertClick:()=>console.log("알림창 닫기"),alertTitle:"메일링 서비스",alertContent:"해당 자격증 관련 메일링 서비스를 받아보시겠어요?",alertConfirmMessage:"네, 구독할게요!",alertCancelMessage:"고민해볼게요."}},t={args:{alertVisible:!0,onVisibleAlertClick:()=>console.log("알림창 닫기"),alertTitle:"내 캘린더 추가",alertContent:"해당 자격증을 내 캘린더에 추가하시겠어요?",alertConfirmMessage:"네, 추가할게요!",alertCancelMessage:"고민해볼게요."}};var s,n,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    alertVisible: true,
    onVisibleAlertClick: () => console.log('알림창 닫기'),
    alertTitle: '메일링 서비스',
    alertContent: '해당 자격증 관련 메일링 서비스를 받아보시겠어요?',
    alertConfirmMessage: '네, 구독할게요!',
    alertCancelMessage: '고민해볼게요.'
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,o,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    alertVisible: true,
    onVisibleAlertClick: () => console.log('알림창 닫기'),
    alertTitle: '내 캘린더 추가',
    alertContent: '해당 자격증을 내 캘린더에 추가하시겠어요?',
    alertConfirmMessage: '네, 추가할게요!',
    alertCancelMessage: '고민해볼게요.'
  }
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const A=["MailingService","AddCalendar"];export{t as AddCalendar,r as MailingService,A as __namedExportsOrder,h as default};
