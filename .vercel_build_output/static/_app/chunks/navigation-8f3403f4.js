import{T as n,C as t}from"./vendor-bc7dd356.js";import{r}from"./singletons-12a22614.js";function c(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let o="";for(let s=0;s<20;s++)o+=e.charAt(Math.floor(Math.random()*e.length));return o}const h=function(e,o={month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",timeZone:"utc"}){const s=new Date(e);let a=s.getTimezoneOffset()*6e4;return new Date(s-a).toLocaleDateString("en-US",o)},f=t(0),m=t(0),g=t(!1),p=t({}),D=t({type:"pencil",color:"white",lineWidth:3}),y=t(!0),b=t("pre_record"),w=t(null),T=t({}),S=t({}),j=n(c()),v=t(!1),i=r,A=l;async function l(e,o){return i.goto(e,o,[])}export{m as a,j as b,f as c,c as d,S as e,w as f,A as g,g as h,v as i,D as j,b as k,h as l,y as o,T as r,p as u};