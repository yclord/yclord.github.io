import{o as d,c as u,a as l,d as a,h as g,v as h,n as m,f,u as _}from"./app-b6cd1dc4.js";import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";const p={name:"ImageZoom",props:{imageSrc:{type:String,required:!0},imageAlt:{type:String,default:""},zoomLevel:{type:Number,default:2.5},lensSize:{type:Number,default:100},resultPosition:{type:String,default:"right",validator:t=>["right","bottom"].includes(t)}},data(){return{isZooming:!1,lensX:0,lensY:0,imageWidth:0,imageHeight:0,imageLoaded:!1}},computed:{lensStyle(){return{width:`${this.lensSize}px`,height:`${this.lensSize}px`,left:`${this.lensX}px`,top:`${this.lensY}px`}},resultPosition(){return this.resultPosition==="right"?{top:"0",left:"100%",marginLeft:"20px"}:{top:"100%",left:"0",marginTop:"20px"}},zoomedImageStyle(){const t=this.zoomLevel;return{width:`${this.imageWidth*t}px`,height:`${this.imageHeight*t}px`,transform:`translate(-${this.lensX*t}px, -${this.lensY*t}px)`,transformOrigin:"top left"}}},methods:{handleImageLoad(){this.imageLoaded=!0;const t=this.$refs.mainImage.getBoundingClientRect();this.imageWidth=t.width,this.imageHeight=t.height},showZoom(){this.imageLoaded&&(this.isZooming=!0)},hideZoom(){this.isZooming=!1},handleMouseMove(t){if(!this.isZooming)return;const i=this.$refs.imageContainer.getBoundingClientRect(),s=t.clientX-i.left,r=t.clientY-i.top;let n=s-this.lensSize/2,e=r-this.lensSize/2;n=Math.max(0,Math.min(n,this.imageWidth-this.lensSize)),e=Math.max(0,Math.min(e,this.imageHeight-this.lensSize)),this.lensX=n,this.lensY=e}}},v={class:"zoom-container",ref:"container"},z=["src","alt"],S=["src","alt"];function x(t,i,s,r,n,e){return d(),u("div",v,[l(" Main image container "),a("div",{class:"main-image-container",onMouseenter:i[1]||(i[1]=(...o)=>e.showZoom&&e.showZoom(...o)),onMouseleave:i[2]||(i[2]=(...o)=>e.hideZoom&&e.hideZoom(...o)),onMousemove:i[3]||(i[3]=(...o)=>e.handleMouseMove&&e.handleMouseMove(...o)),ref:"imageContainer"},[a("img",{src:s.imageSrc,alt:s.imageAlt,class:"main-image",ref:"mainImage",onLoad:i[0]||(i[0]=(...o)=>e.handleImageLoad&&e.handleImageLoad(...o))},null,40,z),l(" Zoom lens "),g(a("div",{class:"zoom-lens",style:m(e.lensStyle)},null,4),[[h,n.isZooming]])],544),l(" Zoomed result "),g(a("div",{class:"zoom-result",style:m(e.resultPosition)},[a("img",{src:s.imageSrc,alt:s.imageAlt,style:m(e.zoomedImageStyle),ref:"zoomedImage"},null,12,S)],4),[[h,n.isZooming]])],512)}const y=c(p,[["render",x],["__scopeId","data-v-66498d47"],["__file","img_zoom.vue"]]),Z={__name:"test.html",setup(t){return(i,s)=>(d(),u("div",null,[f(_(y),{"image-src":"/reading/english/Level-L/A%20HERO'S%20NAME-2/011.webp","image-alt":"Product Image","zoom-level":2.5,"lens-size":200,"result-position":"right"})]))}},L=c(Z,[["__file","test.html.vue"]]);export{L as default};
