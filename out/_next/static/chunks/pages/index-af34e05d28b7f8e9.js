(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1428)}])},1428:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(5893),l=(t(9008),t(5675),t(1163)),s=t(7294),o=t(2253),a=t(4268),i=t(6713),c=t(65),u=t(7950),d=t(368),f=t(1889),h=t(1669),p=t(4895),m=t(4936),g=t(1230),x=t(5746);t(9604);function j(e){var n=e.onChange,t=e.accept,l=e.text,o=s.useRef();return(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{ref:o,className:"ant-btn ant-btn-default",type:"file",accept:t,onInput:function(){console.log("oninput")},onChange:function(e){if(e.target.files){console.log("input file onChange",e.target.files);var t=new FileReader;t.onload=function(e){var t=e.target.result;n(t)},t.readAsText(e.target.files[0])}},style:{display:"none"}}),(0,r.jsx)(f.Z,{onClick:function(){o.current.click()},children:l})]})}function Z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var v={Apple:"Appl",Google:"Goog",Meta:"FB",Windows:"Wind",Twitter:"Twtr",JoyPixels:"Joy",Samsung:"Sams"};function _(){var e,n={canvas_type:"Rectangle",emoji_data:"",canvas_width:780,canvas_height:780,contour_width:780,thold_alpha_contour:10,thold_alpha_bb:0,color:"white",contour_color:"white",masked_file:{fileList:[]}},t=(0,s.useState)([]),_=t[0],y=(t[1],(0,s.useState)()),b=y[0],w=y[1],C=(0,s.useState)(!1),P=C[0],S=C[1],I=(0,s.useState)(!1),k=I[0],E=I[1],O=(0,s.useState)(n),N=O[0],R=O[1],T=(0,l.useRouter)(),F=(0,s.useRef)(),L=(0,s.useRef)(),q=function(e){F.current=new WebSocket("ws://localhost:8000/plot"),F.current.addEventListener("open",(function(){console.log("ws opened"),o.ZP.success("Connected to the server"),e&&e(F.current)})),F.current.addEventListener("close",(function(){o.ZP.warning("Connection closed"),console.log("ws closed")})),F.current.addEventListener("message",(function(e){console.log("got ws message",e);var n=JSON.parse(e.data);"ready"===n.e?(S((function(){return!0})),E((function(){return!1})),o.ZP.success("Finish processing"),T.push("/result?sid="+b)):"sid"===n.e&&(w(n.data.sid),S((function(){return!1})),E((function(){return!0})),o.ZP.info("Start processing..."))}))};(0,s.useEffect)((function(){F.current||q()}),[]),console.log("render app",{formValues:N});var A=function(e,n){e.send(JSON.stringify({e:"plot",data:n}))};return(0,r.jsxs)("div",{style:{margin:"2rem"},children:[(0,r.jsx)(a.Z,{layout:"horizontal",onValuesChange:function(e){console.log("form values change",e),R((function(n){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Z(e,n,t[n])}))}return e}({},n,e)}))},onFinish:function(e){console.log("form submit",N),console.log(e),3===F.current.readyState?(o.ZP.info("Connection closed. Reconnecting..."),console.log("connection closed. restarting..."),q((function(e){A(e,N)}))):A(F.current,N)},labelCol:{span:4},wrapperCol:{span:16},initialValues:n,ref:L,children:(0,r.jsxs)(i.Z,{direction:"vertical",size:"middle",style:{display:"flex"},children:[(0,r.jsx)(c.Z,{children:(0,r.jsxs)(i.Z,{direction:"vertical",size:"small",style:{display:"flex"},children:[(0,r.jsx)(a.Z.Item,{label:"Canvas Type",name:"canvas_type",rules:[{required:!0}],children:(0,r.jsx)(u.ZP.Group,{children:[{text:"Rectangle"},{text:"Ellipse"},{text:"Masked"}].map((function(e,n){return(0,r.jsx)(u.ZP,{value:e.text,children:e.text},n)}))})}),"Masked"===N.canvas_type&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z.Item,{label:"Masked File",name:"masked_file",rules:[{required:!0}],children:(0,r.jsx)(d.Z,{multiple:!1,defaultFileList:(null===(e=N.masked_file)||void 0===e?void 0:e.fileList)||[],beforeUpload:function(e){var n="image/png"===e.type;return n||o.ZP.error("".concat(e.name," is not a png file")),n||d.Z.LIST_IGNORE},onChange:function(e){"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status?(o.ZP.success("".concat(e.file.name," file uploaded successfully")),console.log("after file upload",_)):"error"===e.file.status&&o.ZP.error("".concat(e.file.name," file upload failed."))},children:0===N.masked_file.fileList.length&&(0,r.jsx)(f.Z,{children:"Select an Image"})})}),(0,r.jsx)(a.Z.Item,{label:"Contour Width",name:"contour_width",rules:[{required:!0}],children:(0,r.jsx)(h.Z,{})}),(0,r.jsx)(a.Z.Item,{label:"Threshold Alpha",name:"thold_alpha_contour",children:(0,r.jsx)(h.Z,{placeholder:"10"})}),(0,r.jsx)(a.Z.Item,{label:"Threshold Alpha BB",name:"thold_alpha_bb",children:(0,r.jsx)(h.Z,{placeholder:"0"})}),(0,r.jsx)(a.Z.Item,{label:"Contour Color",name:"contour_color",wrapperCol:{span:4},children:(0,r.jsx)(p.Z,{placeholder:"white"})})]}),("Rectangle"===N.canvas_type||"Ellipse"===N.canvas_type)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z.Item,{label:"Canvas Width",name:"canvas_width",rules:[{required:!0}],children:(0,r.jsx)(h.Z,{})}),(0,r.jsx)(a.Z.Item,{label:"Canvas Height",name:"canvas_height",rules:[{required:!0}],children:(0,r.jsx)(h.Z,{})}),(0,r.jsx)(a.Z.Item,{label:"Color",name:"color",wrapperCol:{span:4},children:(0,r.jsx)(p.Z,{placeholder:"white"})})]})]})}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(i.Z,{direction:"vertical",size:"small",style:{display:"flex"},children:[(0,r.jsx)(a.Z.Item,{label:"Emoji Vendor",name:"emoji_vendor",wrapperCol:{span:4},rules:[{required:!0}],children:(0,r.jsx)(m.Z,{children:Object.keys(v).map((function(e,n){return(0,r.jsx)(m.Z.Option,{value:e,children:e},n)}))})}),(0,r.jsx)(a.Z.Item,{label:"Emoji Data",name:"emoji_data",rules:[{required:!0}],children:(0,r.jsx)(p.Z.TextArea,{placeholder:"Enter a Python dictionary here...",style:{height:"8rem"},className:"code-textarea"})}),(0,r.jsx)(g.Z,{style:{transform:"translateY(-20px)"},children:(0,r.jsx)(x.Z,{offset:4,children:(0,r.jsx)(j,{onChange:function(e){console.log("filereader onchange",e);var n={};e.split("\n").map((function(e){var t=e.trim().split(",");""!=t[0].trim()&&(n[t[0].trim()]=parseInt(t[1].trim()))})),console.log("eData",n),console.log("formRef",L),L.current.setFieldsValue({emoji_data:JSON.stringify(n)})},accept:".csv",text:"Import from CSV"})})}),(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(x.Z,{offset:4,children:(0,r.jsx)(f.Z,{size:"large",type:"primary",htmlType:"submit",disabled:k,children:"Submit"})}),(0,r.jsx)(x.Z,{offset:2,children:k?(0,r.jsx)("span",{children:"Processing......"}):(0,r.jsx)("span",{children:"Finished Processing"})})]}),(0,r.jsx)(a.Z.Item,{label:" "})]})})]})}),(0,r.jsx)("div",{children:P&&(0,r.jsx)("img",{src:"/result/".concat(b)})})]})}}},function(e){e.O(0,[732,596,774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);