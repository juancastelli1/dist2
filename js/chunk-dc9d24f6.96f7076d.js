(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc9d24f6"],{"0c6d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"myTable",staticStyle:{"text-align":"center","vertical-align":"middle"},attrs:{id:"clientes"}},[a("b-form-group",{attrs:{label:"Fecha","label-for":"fecharealizacion"}},[a("b-form-input",{attrs:{id:"fechausada",type:"date",placeholder:"Ingrese la fecha en la que quiere el reporte","invalid-feedback":"Complete este campo",required:""},on:{change:function(t){return e.fechausadacambio()}},model:{value:e.fechausada,callback:function(t){e.fechausada=t},expression:"fechausada"}})],1),a("b-form-group",{attrs:{label:"*Reparto","label-for":"id_reparto"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("v-autocomplete",{attrs:{id:"id_reparto",type:"text",placeholder:"Ingrese un Reparto","invalid-feedback":"Complete este campo",required:"",solo:"",filled:"",items:e.op_repartos},on:{change:function(t){return e.cambiarrepausado(e.idrepaus)}},model:{value:e.idrepaus,callback:function(t){e.idrepaus=t},expression:"idrepaus"}})],1),a("b-modal",{ref:"modal-pdf",attrs:{"no-close-on-backdrop":"",size:"xl",id:"modal-pdf","hide-footer":""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[a("h5",{staticClass:"modal-title"},[e._v("Vista Previa")])]},proxy:!0}])},[a("reporte-listadopdf",{attrs:{PDFventa:e.ordenAPDF}})],1),a("div",[a("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{id:"btn_down_pdf",title:"Generar PDF",variant:"danger"},on:{click:function(t){return e.generarPDF()}}},[a("svg",{staticClass:"bi bi-file-pdf-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"}})]),e._v(" Generar PDF ")]),a("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{id:"btn_down_pdf",title:"Generar Excel",variant:"success"},on:{click:function(t){return e.generarPDF()}}},[a("svg",{staticClass:"bi bi-file-pdf-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"}})]),e._v(" Generar Excel ")])],1),a("script",{tag:"component",attrs:{src:"https://code.jquery.com/jquery-1.12.3.min.js",async:""}}),a("script",{tag:"component",attrs:{src:"https://cdnjs.cloudflare.com/ajax/libs/jspdf/0.9.0rc1/jspdf.min.js",async:""}}),a("script",{tag:"component",attrs:{src:"https://cdn.jsdelivr.net/npm/chart.js@2.9.4",async:""}}),a("div",{attrs:{id:"divpdf"}},[a("h3",[e._v("Fecha: "+e._s(e.fechausada))]),e._m(0),a("vue-headful",{attrs:{title:"Ventas por cada Reparto"}}),a("h1",[e._v("Reparto nro "+e._s(e.repartousado.repa.id_reparto))]),a("h2",[e._v("Listado de Clientes")]),e._l(e.repartousado.tabla_clientes,(function(t,r){return a("div",{key:r,staticStyle:{"max-width":"100%",display:"inline-block",margin:"2em"}},[a("h2",[e._v("Cliente "+e._s(t.cliente.nombre))]),a("b-table",{ref:"tablaregistros",refInFor:!0,attrs:{fields:e.fields,striped:"",responsive:"",hover:"",items:t.tabla_ventas,"show-empty":"","per-page":e.perPage,"current-page":e.currentPage,"sticky-header":!0,"no-border-collapse":!1,id:"tablaregistros"},scopedSlots:e._u([{key:"empty",fn:function(){return[a("b",[e._v("No hay registros para mostrar")])]},proxy:!0},{key:"cell(id_reparto)",fn:function(t){return[e._v(" "+e._s(t.value.split("/")[4])+" ")]}},{key:"cell(id_stock)",fn:function(t){return[e._v(" "+e._s(t.value.split("/")[4])+" ")]}},{key:"cell(id_cliente)",fn:function(t){return[e._v(" "+e._s(t.value.split("/")[4])+" ")]}},{key:"cell(gananciatotal)",fn:function(t){return[e._v(" $"+e._s(t.value)+" ")]}},{key:"cell(totalpagado)",fn:function(t){return[e._v(" $"+e._s(t.value)+" ")]}},{key:"cell(diferencia)",fn:function(t){return[e._v(" $"+e._s(t.value)+" ")]}},{key:"cell(action)",fn:function(t){return[a("div",{staticClass:"mt-3"},[a("b-button-group",[a("b-button",{attrs:{variant:"info",id:"button-1",title:"Mostrar Informaci�n adicional",disabled:e.btn_mostrar},on:{click:t.toggleDetails}},[e._v(" "+e._s(t.detailsShowing?"Ocultar":"Mostrar")+" Productos ")])],1)],1)]}},{key:"row-details",fn:function(t){return[a("b-card",[a("b-list-group",{attrs:{horizontal:""}},[a("b-list-group",[t.item.componentes.length>0?a("b-card",{attrs:{title:"Productos: "}},[a("b-list-group",{attrs:{horizontal:""}},e._l(t.item.componentes,(function(t){return a("div",{key:t.id},[a("b-list-group",[a("b-list-group-item",[a("b",[e._v("Producto:")]),e._v(" "+e._s(e.productos.find((function(e){return e.id_producto==t.producto.split("/")[4]})).nombre)+" ")]),a("b-list-group-item",[a("p",[a("b",[e._v("Cantidad: ")]),e._v(" "+e._s(t.cantidad)+" ")])]),a("b-list-group-item",[a("p",[a("b",[e._v("Precio: ")]),e._v(" $"+e._s(t.precio)+" ")])])],1)],1)})),0)],1):a("b-list-group-item",[e._v(" Sin Productos ")])],1),e._v("   ")],1)],1)]}}],null,!0)})],1)}))],2)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"max-width":"100%",display:"inline-block","text-align":"center"}},[a("canvas",{staticStyle:{"text-align":"center"},attrs:{id:"chart",width:"300",height:"500"}})])}],o=a("1da1"),s=a("5530"),i=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("4de4"),a("caad"),a("2532"),a("159b"),a("ac1f"),a("1276"),a("fb6a"),a("7db0"),a("6480")),c=a("bc3a"),l=a.n(c),u=(a("6ada"),a("8baf"),a("618c")),d=a("aa47"),p=a("d67e"),f=a.n(p),h=a("d549"),b=(a("f7e2"),a("c03a")),m=(a("e4a4"),new URL("http://45.162.169.58:8081"));m.pathname="ventas";var g=function(e,t,a){return d["a"].create(e,Object(s["a"])({},t))},v={name:"sortable",bind:function(e,t,a){var r=e.querySelector("table");r._sortable=g(r.querySelector("tbody"),t.value,a)}},_={directives:{sortable:v},components:{VueHtml2pdf:i["a"],ReporteListadopdf:u["a"]},data:function(){return{repartoslista:[],reparto:{},chart:null,datarep:[],listacli:[],hex:[],idrepaus:-1,lista_id:[],repartousado:{repa:{},lista_id:[],tabla_clientes:[]},productos:[],datachart:{labels:[],datasets:[]},fields:[{key:"id_venta",label:"ID",sortable:!0},{key:"tipo_venta",label:"Tipo",sortable:!0},{key:"fecharealizacion",label:"Fecha",sortable:!0},{key:"gananciatotal",label:"Total",sortable:!0},{key:"id_reparto",label:"Reparto",sortable:!0},{key:"id_stock",label:"Stock",sortable:!0},{key:"id_cliente",label:"Cliente",sortable:!0},{key:"totalpagado",label:"Total Pagado",sortable:!0},{key:"totalpagadomp",label:"Total Pagado con MP",sortable:!0},{key:"diferencia",label:"Diferencia",sortable:!0},{key:"action",label:"",variant:"secondary"}],totalRows:1,currentPage:1,perPage:10,buscar:"",op_repartos:[],fechausada:null,sortableOptions:{chosenClass:"is-selected"},token:"",infoVisitar:{id:"modal_visitar",cliente:-1},ordenAPDF:{}}},computed:{rows:function(){return this.tabla_ventas.length},id:function(){return this.tabla_ventas.numero_orden},items:function(){var e=this;return tabla_ordenes.filter((function(t){return t.numero_orden.toLowerCase().includes(e.buscar.toLowerCase())}))}},methods:{fechausadacambio:function(){this.setGraph(),this.testFetch()},cambiarrepausado:function(e){this.repartousado.repa=this.getReparto(e),this.setGraph(),this.testFetch()},testFetch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(m);case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,r.results.length,e.datachart.datasets=[],e.datachart.labels=[],n={label:"Ventas por Reparto",data:[],backgroundColor:["rgb(276, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)","rgb(0, 0, 0)","rgb(255, 165, 0)","rgb(137, 30, 53)"],hoverOffset:4},o={repa:null,lista_id:[],tabla_clientes:[]},o.repa=e.repartousado.repa,o.repa.clientes_reparto.forEach((function(e){return o.lista_id.push(parseInt(e.split("/")[4]))})),e.listacli.forEach((function(t){var a={cliente:t,tabla_ventas:[]};e.datachart.labels.push("Cliente "+t.numero_cliente);for(var s=0;s<r.results.length;s++)r.results[s].fecharealizacion==e.fechausada&&r.results[s].id_reparto.split("/")[4]==e.repartousado.repa.id_reparto&&r.results[s].id_cliente.split("/")[4]==t.numero_cliente&&a.tabla_ventas.push(r.results[s]);console.log(a),o.lista_id.includes(t.numero_cliente)&&o.tabla_clientes.push(a),n.data.push(a.tabla_ventas.length),e.datachart.datasets.push(n),e.repartousado=o,console.log("opcion completa"),console.log(o)})),console.log(e.repartoslista),e.setGraph(),t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](0),console.log(t.t0);case 22:case"end":return t.stop()}}),t,null,[[0,19]])})))()},getRepartos:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new b["a"],a.apiUrl.pathname="repartos/",t.next=4,a.getData();case 4:e.datarep=t.sent,e.datarep.forEach((function(t){r={},r.value=t.id_reparto,r.text=t.nombre,console.log(r),e.op_repartos.push(r)}));case 6:case"end":return t.stop()}}),t)})))()},getProductos:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new b["a"],a.apiUrl.pathname="productos/",t.next=4,a.getData();case 4:e.productos=t.sent;case 5:case"end":return t.stop()}}),t)})))()},getClientes:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new b["a"],a.apiUrl.pathname="clientes/",t.next=4,a.getData();case 4:e.listacli=t.sent;case 5:case"end":return t.stop()}}),t)})))()},setGraph:function(){var e=document.getElementById("chart");this.chart&&this.chart.destroy(),this.chart=new h["a"](e,{type:"bar",data:this.datachart,options:{title:{text:"Cantidad de ventas por Reparto",display:!0}}})},testFetch2:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,"undefined"!==typeof e.$route.params.repa){t.next=8;break}return console.log("Reparto vacio"),a="http://45.162.169.58:8081",t.next=6,l.a.get(a+"/repartos/"+e.$route.query.id);case 6:r=t.sent,e.reparto=r.data;case 8:return t.next=10,fetch(m);case 10:return n=t.sent,t.next=13,n.json();case 13:o=t.sent,o.results.filter((function(t){return t.id_medico.split("/")[4]==e.profesional.id_medico})),e.tabla_ordenes=lista_ordenes,t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](0),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))()},showModal:function(){this.$refs["my-modal"].show()},showModalinfo:function(e,t){this.infoVisitar.cliente=e,this.showModal()},hideModal:function(){this.$refs["my-modal"].hide()},fechaactual:function(){var e=new Date;console.log(e.toLocaleDateString());var t=function(e){return("0"+e.getDate()).slice(-2)+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+e.getFullYear()};return console.log(t(e)),t(e)},fechaactual2:function(){var e=new Date,t=function(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)};return console.log(t(e)),t(e)},buscarnow:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,n,o,s,i,c,l,u,d,p,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(a=e.$refs.buscadorlista,r=a.value.toUpperCase(),n=document.getElementById("tablaregistros"),o=n.getElementsByTagName("tr"),i=1;i<o.length;i++)s=o[i].getElementsByTagName("td"),l=s[0].textContent||s[0].innerText,u=s[1].textContent||s[1].innerText,d=s[3].textContent||s[3].innerText,p=s[4].textContent||s[4].innerText,f=s[6].textContent||s[6].innerText,c=l+u+d+p+f,c.toUpperCase().indexOf(r)>-1?o[i].style.display="":o[i].style.display="none";case 5:case"end":return t.stop()}}),t)})))()},getReparto:function(e){var t=this.datarep.find((function(t){return t.id_reparto==e}));return t},inicializar:function(){"reparto"==this.$session.get("tipocuenta")&&(console.log(this.$session.get("repartused")),this.reparto=this.$session.get("repartused")),this.fechausada=this.fechaactual2()},generarPDF:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=document.getElementById("divpdf"),f()().set({margin:1,filename:"documento.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:3,letterRendering:!0},jsPDF:{unit:"in",format:"a4",orientation:"portrait"}}).from(t).save().catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})))()}},beforeMount:function(){this.getRepartos(),this.inicializar(),this.getClientes(),this.getProductos()}},y=_,w=(a("66ec"),a("2877")),k=Object(w["a"])(y,r,n,!1,null,"0a288372",null);t["default"]=k.exports},"66ec":function(e,t,a){"use strict";a("7321")},7321:function(e,t,a){}}]);
//# sourceMappingURL=chunk-dc9d24f6.96f7076d.js.map