import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{r as t}from"./index-BofL8h0e.js";import"./index-C9rmetsa.js";const g=a=>t.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("g",{clipPath:"url(#clip0_230_2475)"},t.createElement("path",{d:"M18.75 3H5.25C4.00736 3 3 4.00736 3 5.25V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V5.25C21 4.00736 19.9926 3 18.75 3Z",stroke:"#384250",strokeLinejoin:"round"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_230_2475"},t.createElement("rect",{width:24,height:24,fill:"white"})))),v=({mockData:a=[],trashIconSelected:C=!1,requiredCalender:x=!1})=>e.jsx(e.Fragment,{children:a==null?void 0:a.map((r,_)=>e.jsxs("div",{className:"certificate-info",children:[C&&e.jsx("div",{className:"certificate-info-checkbox",children:e.jsx(g,{})}),e.jsxs("div",{className:"certificate-info-box",children:[e.jsx("div",{className:"certificate-info-box__image"}),e.jsxs("div",{className:"certificate-info-box__text",children:[e.jsx("div",{className:"certificate-info-box__text__name",children:r.certificateName}),e.jsxs("div",{className:"certificate-info-box__text__date",children:[e.jsxs("div",{className:"certificate-info-box__text__date-receipt",children:["접수일 | ",r.receiptDate]}),e.jsxs("div",{className:"certificate-info-box__text__date-test",children:["시험일 | ",r.testDate]})]})]}),x&&e.jsxs("div",{className:"certificate-info-calender",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"certificate-info-calender__icon",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"})}),e.jsx("div",{className:"certificate-info-calender__count",children:r.calenderCount})]})]})]},_))});v.__docgenInfo={description:"Certificate Card Component for Recommend Certificate and Certificate Search",methods:[],displayName:"CertificateCard",props:{mockData:{required:!1,tsType:{name:"Array",elements:[{name:"ICertificateData"}],raw:"ICertificateData[]"},description:"Mock Data",defaultValue:{value:"[]",computed:!1}},trashIconSelected:{required:!1,tsType:{name:"boolean"},description:"Clicked Trash Icon",defaultValue:{value:"false",computed:!1}},requiredCalender:{required:!1,tsType:{name:"boolean"},description:"Calender Icon ON/OFF",defaultValue:{value:"false",computed:!1}}}};const w={title:"Component/CertificateCard",component:v,parameters:{layout:"centered"},tags:["autodocs"]},c={args:{mockData:[{certificateName:"정보처리기사",receiptDate:"2025-08-12",testDate:"2025-09-15",calenderCount:342}],trashIconSelected:!1,requiredCalender:!1}},i={args:{mockData:[{certificateName:"정보처리기사",receiptDate:"2025-08-12",testDate:"2025-09-15",calenderCount:342}],trashIconSelected:!1,requiredCalender:!0}},n={args:{mockData:[{certificateName:"정보처리기사",receiptDate:"2025-08-12",testDate:"2025-09-15",calenderCount:342}],trashIconSelected:!0,requiredCalender:!1}};var s,o,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    mockData: [{
      'certificateName': '정보처리기사',
      'receiptDate': '2025-08-12',
      'testDate': '2025-09-15',
      'calenderCount': 342
    }],
    trashIconSelected: false,
    requiredCalender: false
  }
}`,...(l=(o=c.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var d,m,f;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    mockData: [{
      'certificateName': '정보처리기사',
      'receiptDate': '2025-08-12',
      'testDate': '2025-09-15',
      'calenderCount': 342
    }],
    trashIconSelected: false,
    requiredCalender: true
  }
}`,...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var h,p,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    mockData: [{
      'certificateName': '정보처리기사',
      'receiptDate': '2025-08-12',
      'testDate': '2025-09-15',
      'calenderCount': 342
    }],
    trashIconSelected: true,
    requiredCalender: false
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const S=["RecommendCertificate","CertificateSearch","MyPage"];export{i as CertificateSearch,n as MyPage,c as RecommendCertificate,S as __namedExportsOrder,w as default};
