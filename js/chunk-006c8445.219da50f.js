(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-006c8445"],{1144:function(t,e,a){},5653:function(t,e,a){"use strict";a("1144")},dfcf:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"myTable",staticStyle:{"text-align":"center","vertical-align":"middle"},attrs:{id:"clientes"}},[a("b-form-group",{staticStyle:{display:"inline-block",width:"50%"},attrs:{label:"Fecha","label-for":"fechausada"}},[a("b-form-input",{attrs:{id:"fechausada",gma:"",type:"date",placeholder:"Ingrese la fecha en la que quiere el reporte","invalid-feedback":"Complete este campo",required:""},on:{change:function(e){return t.fechausadacambio()}},model:{value:t.fechausada,callback:function(e){t.fechausada=e},expression:"fechausada"}})],1),a("b-form-group",{attrs:{label:"*Reparto","label-for":"id_reparto"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("v-autocomplete",{attrs:{id:"id_reparto",type:"text",placeholder:"Ingrese un Reparto","invalid-feedback":"Complete este campo",required:"",solo:"",filled:"",items:t.op_repartos},on:{change:function(e){return t.cambiarrepausado(t.idrepaus)}},model:{value:t.idrepaus,callback:function(e){t.idrepaus=e},expression:"idrepaus"}})],1),a("b-modal",{ref:"modal-pdf",attrs:{"no-close-on-backdrop":"",size:"xl",id:"modal-pdf","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[a("h5",{staticClass:"modal-title"},[t._v("Vista Previa")])]},proxy:!0}])},[a("reporte-listadopdf",{attrs:{PDFventa:t.ordenAPDF}})],1),a("div",[a("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{id:"btn_down_pdf",title:"Generar PDF",variant:"danger"},on:{click:function(e){return t.generarPDF()}}},[a("svg",{staticClass:"bi bi-file-pdf-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"}})]),t._v(" Generar PDF ")]),a("b-button",{staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{id:"btn_down_pdf",title:"Generar Excel",variant:"success"},on:{click:function(e){return t.generarPDF1()}}},[a("svg",{staticClass:"bi bi-file-pdf-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"}})]),t._v(" Generar Excel ")])],1),a("script",{tag:"component",attrs:{src:"https://code.jquery.com/jquery-1.12.3.min.js",async:""}}),a("script",{tag:"component",attrs:{src:"https://cdnjs.cloudflare.com/ajax/libs/jspdf/0.9.0rc1/jspdf.min.js",async:""}}),a("script",{tag:"component",attrs:{src:"https://cdn.jsdelivr.net/npm/chart.js@2.9.4",async:""}}),-1===t.idrepaus?a("div",{attrs:{id:"divpdf"}},[a("div",{attrs:{id:"graficos"}},[a("h3",[t._v("Fecha Liquidada: "+t._s(t.fechausada))]),t._m(0),t._m(1),t._m(2)]),a("vue-headful",{attrs:{title:"Ventas por cada Reparto"}}),a("div",{attrs:{id:"tabla"}},t._l(t.repartoslista,(function(e,o){return a("div",{key:o,staticStyle:{"max-width":"100%",display:"inline-block",margin:"2em"}},[a("h1",[t._v("Reparto nro "+t._s(e.repa.id_reparto))]),a("h3",[t._v("Periodo: "+t._s(t.fechausada))]),a("h2",[t._v("Listado de Clientes")]),a("div",{staticStyle:{"max-width":"100%",display:"inline-block",margin:"2em"}},[a("h3",[t._v("Pollo")]),a("b-table",{ref:"tablaregistros",refInFor:!0,attrs:{fields:t.fieldspollo,striped:"",responsive:"",hover:"",items:e.tabla_clientes,"show-empty":"","per-page":t.perPage,"current-page":t.currentPage,"tbody-tr-class":t.rowClass,"no-border-collapse":!1,id:"tablaregistros"},scopedSlots:t._u([{key:"empty",fn:function(){return[a("b",[t._v("No hay registros para mostrar")])]},proxy:!0},{key:"cell(gastadototal)",fn:function(e){return[t._v(" "+t._s(t.suma(e.item.tabla_ventaspollo))+" ")]}},{key:"cell(saldoviejo)",fn:function(e){return[t._v(" "+t._s(e.item.cliente.saldopollo-t.saldos(e.item.tabla_ventaspollo))+" ")]}},{key:"cell(cobradototal)",fn:function(e){return[t._v(" "+t._s(t.pagado(e.item.tabla_ventaspollo)+t.pagadomp(e.item.tabla_ventaspollo))+" ")]}},{key:"cell(efectivo)",fn:function(e){return[t._v(" "+t._s(t.pagado(e.item.tabla_ventaspollo))+" ")]}},{key:"cell(mercadopago)",fn:function(e){return[t._v(" "+t._s(t.pagadomp(e.item.tabla_ventaspollo))+" ")]}},{key:"cell(action)",fn:function(e){return[a("div",{staticClass:"mt-3"},[a("b-button-group",[a("b-button",{attrs:{variant:"info",id:"button-1",title:"Mostrar Información adicional"},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Ocultar":"Mostrar")+" Ventas ")])],1)],1)]}},{key:"row-details",fn:function(e){return[a("b-card",[a("b-list-group",{attrs:{horizontal:""}},[a("b-list-group",[a("b-card",{attrs:{title:" Ventas: "}},[a("b-list-group",{attrs:{horizontal:""}},t._l(e.item.tabla_ventaspollo,(function(e){return a("div",{key:e.id},[a("b-list-group",[a("p",[a("b",[t._v("Total: ")]),t._v(t._s(e.gananciatotal)+" ")]),a("p",[a("b",[t._v("Costo: ")]),t._v(t._s(e.costototal)+" ")]),a("p",[a("b",[t._v("Ganancia: ")]),t._v(t._s(e.ganancia)+" ")]),a("p",[a("b",[t._v("Stock: ")]),t._v(t._s(e.id_stock.split("/")[4])+" ")])]),a("br"),a("h5",[t._v("Productos comprados")]),t._l(e.componentes,(function(e){return a("div",{key:e.id},[a("b-list-group",[a("b-list-group-item",[a("b",[t._v("Producto:")]),t._v(" "+t._s(t.productos.find((function(t){return t.id_producto==e.producto.split("/")[4]})).nombre)+" ")]),a("b-list-group-item",[a("p",[a("b",[t._v("Cantidad: ")]),t._v(" "+t._s(e.cantidad)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Precio Unitario: ")]),t._v(" $"+t._s(e.precio)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Costo Total: ")]),t._v(" $"+t._s(e.costo*e.cantidad)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Precio Total: ")]),t._v(" $"+t._s(e.precio*e.cantidad)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Precio Referencia: ")]),t._v(" $"+t._s(e.precioref)+" ")])])],1)],1)}))],2)})),0)],1)],1),t._v("   ")],1)],1)]}}],null,!0)}),a("h3",[t._v("Congelados")]),a("b-table",{ref:"tablaregistros",refInFor:!0,attrs:{fields:t.fieldsconge,striped:"",responsive:"",hover:"",items:e.tabla_clientes,"show-empty":"","per-page":t.perPage,"current-page":t.currentPage,"tbody-tr-class":t.rowClass,"no-border-collapse":!1,id:"tablaregistros"},scopedSlots:t._u([{key:"empty",fn:function(){return[a("b",[t._v("No hay registros para mostrar")])]},proxy:!0},{key:"cell(nroventas)",fn:function(e){return[t._v(" "+t._s(e.item.tabla_ventasconge.length)+" ")]}},{key:"cell(gastadototal)",fn:function(e){return[t._v(" "+t._s(t.suma(e.item.tabla_ventasconge))+" ")]}},{key:"cell(saldoviejo)",fn:function(e){return[t._v(" "+t._s(e.item.cliente.saldocongelados-t.saldos(e.item.tabla_ventasconge))+" ")]}},{key:"cell(cobradototal)",fn:function(e){return[t._v(" "+t._s(t.pagado(e.item.tabla_ventasconge)+t.pagadomp(e.item.tabla_ventasconge))+" ")]}},{key:"cell(efectivo)",fn:function(e){return[t._v(" "+t._s(t.pagado(e.item.tabla_ventasconge))+" ")]}},{key:"cell(mercadopago)",fn:function(e){return[t._v(" "+t._s(t.pagadomp(e.item.tabla_ventasconge))+" ")]}},{key:"cell(action)",fn:function(e){return[a("div",{staticClass:"mt-3"},[a("b-button-group",[a("b-button",{attrs:{variant:"info",id:"button-1",title:"Mostrar Información adicional"},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Ocultar":"Mostrar")+" Ventas ")])],1)],1)]}},{key:"row-details",fn:function(e){return[a("b-card",[a("b-list-group",{attrs:{horizontal:""}},[a("b-list-group",[a("b-card",{attrs:{title:" Ventas: "}},[a("b-list-group",{attrs:{horizontal:""}},t._l(e.item.tabla_ventasconge,(function(e){return a("div",{key:e.id},[a("b-list-group",[a("p",[a("b",[t._v("Total: ")]),t._v(t._s(e.gananciatotal)+" ")]),a("p",[a("b",[t._v("Costo: ")]),t._v(t._s(e.costototal)+" ")]),a("p",[a("b",[t._v("Ganancia: ")]),t._v(t._s(e.ganancia)+" ")]),a("p",[a("b",[t._v("Stock: ")]),t._v(t._s(e.id_stock.split("/")[4])+" ")])]),a("br"),a("h5",[t._v("Productos comprados")]),t._l(e.componentes,(function(e){return a("div",{key:e.id},[a("b-list-group",[a("b-list-group-item",[a("b",[t._v("Producto:")]),t._v(" "+t._s(t.productos.find((function(t){return t.id_producto==e.producto.split("/")[4]})).nombre)+" ")]),a("b-list-group-item",[a("p",[a("b",[t._v("Cantidad: ")]),t._v(" "+t._s(e.cantidad)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Precio Unitario: ")]),t._v(" $"+t._s(e.precio)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Costo Total: ")]),t._v(" $"+t._s(e.costo*e.cantidad)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Precio Total: ")]),t._v(" $"+t._s(e.precio*e.cantidad)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Precio Referencia: ")]),t._v(" $"+t._s(e.precioref)+" ")])])],1)],1)}))],2)})),0)],1)],1),t._v("   ")],1)],1)]}}],null,!0)})],1)])})),0)],1):a("div",{attrs:{id:"divpdf"}},[a("div",{attrs:{id:"graficos"}},[a("h3",[t._v("Fecha: "+t._s(t.fechausada))]),t._m(3),t._m(4),t._m(5)]),a("div",{attrs:{id:"tabla"}},[a("vue-headful",{attrs:{title:"Ventas por cada Reparto"}}),a("h1",[t._v("Reparto nro "+t._s(t.repartousado.repa.id_reparto))]),a("h3",[t._v("Fecha: "+t._s(t.fechausada))]),a("h2",[t._v("Listado de Clientes")]),a("div",{staticStyle:{"max-width":"100%",display:"inline-block",margin:"2em"}},[a("h3",[t._v("Pollo")]),a("b-table",{ref:"tablaregistros",attrs:{fields:t.fieldspollo,striped:"",responsive:"",hover:"",items:t.repartousado.tabla_clientes,"show-empty":"","per-page":t.perPage,"current-page":t.currentPage,"tbody-tr-class":t.rowClass,"no-border-collapse":!1,id:"tablaregistros"},scopedSlots:t._u([{key:"empty",fn:function(){return[a("b",[t._v("No hay registros para mostrar")])]},proxy:!0},{key:"cell(nroventas)",fn:function(e){return[t._v(" "+t._s(e.item.tabla_ventaspollo.length)+" ")]}},{key:"cell(gastadototal)",fn:function(e){return[t._v(" "+t._s(t.suma(e.item.tabla_ventaspollo))+" ")]}},{key:"cell(saldoviejo)",fn:function(e){return[t._v(" "+t._s(e.item.cliente.saldopollo-t.saldos(e.item.tabla_ventaspollo))+" ")]}},{key:"cell(cobradototal)",fn:function(e){return[t._v(" "+t._s(t.pagado(e.item.tabla_ventaspollo)+t.pagadomp(e.item.tabla_ventaspollo))+" ")]}},{key:"cell(efectivo)",fn:function(e){return[t._v(" "+t._s(t.pagado(e.item.tabla_ventaspollo))+" ")]}},{key:"cell(mercadopago)",fn:function(e){return[t._v(" "+t._s(t.pagadomp(e.item.tabla_ventaspollo))+" ")]}},{key:"cell(action)",fn:function(e){return[a("div",{staticClass:"mt-3"},[a("b-button-group",[a("b-button",{attrs:{variant:"info",id:"button-1",title:"Mostrar Información adicional"},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Ocultar":"Mostrar")+" Ventas ")])],1)],1)]}},{key:"row-details",fn:function(e){return[a("b-card",[a("b-list-group",{attrs:{horizontal:""}},[a("b-list-group",[a("b-card",{attrs:{title:" Ventas: "}},[a("b-list-group",{attrs:{horizontal:""}},t._l(e.item.tabla_ventaspollo,(function(e){return a("div",{key:e.id},[a("b-list-group",[a("p",[a("b",[t._v("Total: ")]),t._v(t._s(e.gananciatotal)+" ")]),a("p",[a("b",[t._v("Costo: ")]),t._v(t._s(e.costototal)+" ")]),a("p",[a("b",[t._v("Ganancia: ")]),t._v(t._s(e.ganancia)+" ")]),a("p",[a("b",[t._v("Stock: ")]),t._v(t._s(e.id_stock.split("/")[4])+" ")])]),a("br"),a("h5",[t._v("Productos comprados")]),t._l(e.componentes,(function(e){return a("div",{key:e.id},[a("b-list-group",[a("b-list-group-item",[a("b",[t._v("Producto:")]),t._v(" "+t._s(t.productos.find((function(t){return t.id_producto==e.producto.split("/")[4]})).nombre)+" ")]),a("b-list-group-item",[a("p",[a("b",[t._v("Cantidad: ")]),t._v(" "+t._s(e.cantidad)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Precio Unitario: ")]),t._v(" $"+t._s(e.precio)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Costo Total: ")]),t._v(" $"+t._s(e.costo*e.cantidad)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Precio Total: ")]),t._v(" $"+t._s(e.precio*e.cantidad)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Precio Referencia: ")]),t._v(" $"+t._s(e.precioref)+" ")])])],1)],1)}))],2)})),0)],1)],1),t._v("   ")],1)],1)]}}])}),a("h3",[t._v("Congelados")]),a("b-table",{ref:"tablaregistros",attrs:{fields:t.fieldsconge,striped:"",responsive:"",hover:"",items:t.repartousado.tabla_clientes,"show-empty":"","per-page":t.perPage,"current-page":t.currentPage,"tbody-tr-class":t.rowClass,"no-border-collapse":!1,id:"tablaregistros"},scopedSlots:t._u([{key:"empty",fn:function(){return[a("b",[t._v("No hay registros para mostrar")])]},proxy:!0},{key:"cell(nroventas)",fn:function(e){return[t._v(" "+t._s(e.item.tabla_ventasconge.length)+" ")]}},{key:"cell(gastadototal)",fn:function(e){return[t._v(" "+t._s(t.suma(e.item.tabla_ventasconge))+" ")]}},{key:"cell(saldoviejo)",fn:function(e){return[t._v(" "+t._s(e.item.cliente.saldocongelados-t.saldos(e.item.tabla_ventasconge))+" ")]}},{key:"cell(cobradototal)",fn:function(e){return[t._v(" "+t._s(t.pagado(e.item.tabla_ventasconge)+t.pagadomp(e.item.tabla_ventasconge))+" ")]}},{key:"cell(efectivo)",fn:function(e){return[t._v(" "+t._s(t.pagado(e.item.tabla_ventasconge))+" ")]}},{key:"cell(mercadopago)",fn:function(e){return[t._v(" "+t._s(t.pagadomp(e.item.tabla_ventasconge))+" ")]}},{key:"cell(action)",fn:function(e){return[a("div",{staticClass:"mt-3"},[a("b-button-group",[a("b-button",{attrs:{variant:"info",id:"button-1",title:"Mostrar Información adicional"},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Ocultar":"Mostrar")+" Ventas ")])],1)],1)]}},{key:"row-details",fn:function(e){return[a("b-card",[a("b-list-group",{attrs:{horizontal:""}},[a("b-list-group",[a("b-card",{attrs:{title:" Ventas: "}},[a("b-list-group",{attrs:{horizontal:""}},t._l(e.item.tabla_ventasconge,(function(e){return a("div",{key:e.id},[a("b-list-group",[a("p",[a("b",[t._v("Total: ")]),t._v(t._s(e.gananciatotal)+" ")]),a("p",[a("b",[t._v("Costo: ")]),t._v(t._s(e.costototal)+" ")]),a("p",[a("b",[t._v("Ganancia: ")]),t._v(t._s(e.ganancia)+" ")]),a("p",[a("b",[t._v("Stock: ")]),t._v(t._s(e.id_stock.split("/")[4])+" ")])]),a("br"),a("h5",[t._v("Productos comprados")]),t._l(e.componentes,(function(e){return a("div",{key:e.id},[a("b-list-group",[a("b-list-group-item",[a("b",[t._v("Producto:")]),t._v(" "+t._s(t.productos.find((function(t){return t.id_producto==e.producto.split("/")[4]})).nombre)+" ")]),a("b-list-group-item",[a("p",[a("b",[t._v("Cantidad: ")]),t._v(" "+t._s(e.cantidad)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Precio Unitario: ")]),t._v(" $"+t._s(e.precio)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Costo Total: ")]),t._v(" $"+t._s(e.costo*e.cantidad)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Precio Total: ")]),t._v(" $"+t._s(e.precio*e.cantidad)+" ")])]),a("b-list-group-item",[a("p",[a("b",[t._v("Precio Referencia: ")]),t._v(" $"+t._s(e.precioref)+" ")])])],1)],1)}))],2)})),0)],1)],1),t._v("   ")],1)],1)]}}])})],1)],1)])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"max-width":"100%",display:"inline-block","text-align":"center","vertical-align":"top"}},[a("canvas",{staticStyle:{"text-align":"center"},attrs:{id:"chart3",width:"300",height:"500"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"max-width":"100%",display:"inline-block","text-align":"center"}},[a("canvas",{staticStyle:{"text-align":"center"},attrs:{id:"chart",width:"300",height:"500"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"max-width":"100%",display:"inline-block","text-align":"center","vertical-align":"top"}},[a("canvas",{staticStyle:{"text-align":"center"},attrs:{id:"chart2",width:"300",height:"500"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"max-width":"100%",display:"inline-block","text-align":"center","vertical-align":"top"}},[a("canvas",{staticStyle:{"text-align":"center"},attrs:{id:"chart3",width:"300",height:"500"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"max-width":"100%",display:"inline-block","text-align":"center"}},[a("canvas",{staticStyle:{"text-align":"center"},attrs:{id:"chart",width:"300",height:"500"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"max-width":"100%",display:"inline-block","text-align":"center","vertical-align":"top"}},[a("canvas",{staticStyle:{"text-align":"center"},attrs:{id:"chart2",width:"300",height:"500"}})])}],n=a("1da1"),s=a("5530"),i=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("4de4"),a("caad"),a("2532"),a("159b"),a("ac1f"),a("1276"),a("7db0"),a("fb6a"),a("6480")),l=(a("bc3a"),a("6ada"),a("8baf"),a("618c")),c=a("aa47"),d=a("d67e"),u=a.n(d),p=a("d549"),b=(a("f7e2"),a("c03a")),v=(a("e4a4"),new URL("http://45.162.169.58:8081"));v.pathname="ventas";var g=function(t,e,a){return c["a"].create(t,Object(s["a"])({},e))},_={name:"sortable",bind:function(t,e,a){var o=t.querySelector("table");o._sortable=g(o.querySelector("tbody"),e.value,a)}},f={directives:{sortable:_},components:{VueHtml2pdf:i["a"],ReporteListadopdf:l["a"]},data:function(){return{repartoslista:[],reparto:{},chart:null,chart2:null,chart3:null,datarep:[],listacli:[],hex:[],idrepaus:0,lista_id:[],repartousado:{repa:{},lista_id:[],tabla_clientes:[]},productos:[],datachart:{labels:[],datasets:[]},datachart2:{labels:["Mercado Pago","Efectivo"],datasets:[]},datachart3:{labels:["Pagado","En saldo"],datasets:[]},fieldspollo:[{key:"icono",label:"Icono",sortable:!0},{key:"cliente.numero_cliente",label:"N° Cliente",sortable:!0},{key:"cliente.nombre",label:"Nombre/s",sortable:!0},{key:"saldoviejo",label:"Saldo Viejo",sortable:!0},{key:"cliente.saldopollo",label:"Saldo Nuevo",sortable:!0},{key:"gastadototal",label:"Venta Total",sortable:!0},{key:"cobradototal",label:"Cobrado Total",sortable:!0},{key:"efectivo",label:"Efectivo",sortable:!0},{key:"mercadopago",label:"Mercado Pago",sortable:!0},{key:"action",label:"",variant:"secondary"}],fieldsconge:[{key:"icono",label:"Icono",sortable:!0},{key:"cliente.numero_cliente",label:"N° Cliente",sortable:!0},{key:"cliente.nombre",label:"Nombre/s",sortable:!0},{key:"saldoviejo",label:"Saldo Viejo",sortable:!0},{key:"cliente.saldocongelados",label:"Saldo Nuevo",sortable:!0},{key:"gastadototal",label:"Venta Total",sortable:!0},{key:"cobradototal",label:"Cobrado Total",sortable:!0},{key:"efectivo",label:"Efectivo",sortable:!0},{key:"mercadopago",label:"Mercado Pago",sortable:!0},{key:"action",label:"",variant:"secondary"}],totalRows:1,currentPage:1,perPage:10,buscar:"",op_repartos:[{value:-1,text:"Todos los Repartos"}],fechausada:null,sortableOptions:{chosenClass:"is-selected"},token:"",infoVisitar:{id:"modal_visitar",cliente:-1},ordenAPDF:{}}},computed:{items:function(){var t=this;return tabla_ordenes.filter((function(e){return e.numero_orden.toLowerCase().includes(t.buscar.toLowerCase())}))}},methods:{suma:function(t){for(var e=0,a=0;a<t.length;a++)e+=t[a].totalpagado+t[a].totalpagadomp;return e},pagado:function(t){for(var e=0,a=0;a<t.length;a++)e+=t[a].totalpagado;return e},pagadomp:function(t){for(var e=0,a=0;a<t.length;a++)e+=t[a].totalpagadomp;return e},costos:function(t){var e=0;return t.forEach((function(t){e+=t.costototal})),e},ganancia:function(t){var e=0;return t.forEach((function(t){e+=t.ganancia})),e},cantidad:function(t){var e=0;return t.forEach((function(t){t.componentes.forEach((function(t){e+=t.cantidad}))})),e},saldos:function(t){var e=0;return t.forEach((function(t){e-=t.diferencia})),Math.abs(e)},fechausadacambio:function(){this.setGraph(),-1!=this.idrepaus?this.testFetch():this.testFetch2()},cambiarrepausado:function(t){-1!=this.idrepaus?(this.repartousado.repa=this.getReparto(t),this.setGraph(),this.testFetch()):(this.repartousado.repa=null,this.setGraph(),this.testFetch2())},rowClass:function(t,e){return t&&"row"===e?t.cliente.saldopollo+t.cliente.saldocongelados>this.getLimite(t.cliente.categoria.split("/")[4]).limite?"table-warning":void 0:"table-danger"},iconospollo:function(t){var e=this,a="",o=0,r=0,n=0;return this.repartousado.tabla_clientes.forEach((function(t){e.saldos(t.tabla_ventaspollo)>o&&(o=e.saldos(t.tabla_ventas)),e.suma(t.tabla_ventas)>r&&(r=e.suma(t.tabla_ventas)),e.ganancia(t.tabla_ventas)>n&&(n=e.ganancia(t.tabla_ventas))})),this.ganancia(t.tabla_ventas)==n&&(a+=" ＄ "),this.suma(t.tabla_ventas)==r&&(a+=" ★ "),this.saldos(t.tabla_ventas)==o&&(a+=" ✗ "),a},getLimite:function(t){var e=this.listacat.find((function(e){return e.id_categoria==t}));return e},getCategorias:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new b["a"],a.apiUrl.pathname="categorias/",e.next=4,a.getData();case 4:t.listacat=e.sent;case 5:case"end":return e.stop()}}),e)})))()},testFetch:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o,r,n,s,i,l,c,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(v);case 3:return a=e.sent,e.next=6,a.json();case 6:o=e.sent,r=0,n=0,s=0,o.results.length,t.datachart.datasets=[],t.datachart2.datasets=[],t.datachart3.datasets=[],t.datachart.labels=[],i={label:"Ventas por Reparto",data:[],backgroundColor:["rgb(276, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)","rgb(0, 0, 0)","rgb(255, 165, 0)","rgb(137, 30, 53)"],hoverOffset:4},l={label:"Pagos de Clientes",data:[],backgroundColor:["rgb(0, 0, 0)","rgb(255, 165, 0)","rgb(137, 30, 53)"],hoverOffset:4},c={label:"Pagos de Clientes",data:[],backgroundColor:["rgb(102, 229, 42)","rgb(137, 30, 53)"],hoverOffset:4},d={repa:null,lista_id:[],tabla_clientes:[]},d.repa=t.repartousado.repa,d.repa.clientes_reparto.forEach((function(t){return d.lista_id.push(parseInt(t.split("/")[4]))})),t.listacli.forEach((function(e){var a={cliente:e,tabla_ventaspollo:[],tabla_ventasconge:[]};t.datachart.labels.push("Cliente "+e.numero_cliente);for(var l=0;l<o.results.length;l++)o.results[l].fecharealizacion==t.fechausada&&o.results[l].id_reparto.split("/")[4]==t.repartousado.repa.id_reparto&&o.results[l].id_cliente.split("/")[4]==e.numero_cliente&&(r+=o.results[l].totalpagadomp,n+=o.results[l].totalpagado,s-=o.results[l].diferencia,"Pollo"===o.results[l].tipo_venta?a.tabla_ventaspollo.push(o.results[l]):a.tabla_ventasconge.push(o.results[l]));console.log(a),d.lista_id.includes(e.numero_cliente)&&d.tabla_clientes.push(a),i.data.push(t.suma(a.tabla_ventaspollo)+t.suma(a.tabla_ventasconge)),t.datachart.datasets.push(i),t.repartousado=d,console.log("opcion completa"),console.log(d)})),l.data.push(r),l.data.push(n),c.data.push(r+n),c.data.push(s),t.datachart2.datasets.push(l),t.datachart3.datasets.push(c),console.log(t.repartoslista),t.setGraph(),console.log(t.repartousado.tabla_clientes),e.next=36;break;case 33:e.prev=33,e.t0=e["catch"](0),console.log(e.t0);case 36:case"end":return e.stop()}}),e,null,[[0,33]])})))()},testFetch2:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o,r,n,s,i,l,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.repartoslista=[],e.next=4,fetch(v);case 4:return a=e.sent,e.next=7,a.json();case 7:o=e.sent,r=0,n=0,s=0,o.results.length,t.datachart.datasets=[],t.datachart2.datasets=[],t.datachart3.datasets=[],t.datachart.labels=[],i={label:"Ventas por Reparto",data:[],backgroundColor:["rgb(276, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)","rgb(0, 0, 0)","rgb(255, 165, 0)","rgb(137, 30, 53)"],hoverOffset:4},l={label:"Pagos de Clientes",data:[],backgroundColor:["rgb(0, 0, 0)","rgb(255, 165, 0)","rgb(137, 30, 53)"],hoverOffset:4},c={label:"Pagos de Clientes",data:[],backgroundColor:["rgb(102, 229, 42)","rgb(137, 30, 53)"],hoverOffset:4},t.datarep.forEach((function(e){var a={repa:null,lista_id:[],tabla_clientes:[]};a.repa=e,a.repa.clientes_reparto.forEach((function(t){return a.lista_id.push(parseInt(t.split("/")[4]))})),t.listacli.forEach((function(l){var c={cliente:l,tabla_ventaspollo:[],tabla_ventasconge:[]};if(a.lista_id.includes(l.numero_cliente)){t.datachart.labels.push("Cliente "+l.numero_cliente);for(var d=0;d<o.results.length;d++)o.results[d].fecharealizacion==t.fechausada&&o.results[d].id_reparto.split("/")[4]==e.id_reparto&&o.results[d].id_cliente.split("/")[4]==l.numero_cliente&&(r+=o.results[d].totalpagadomp,n+=o.results[d].totalpagado,s-=o.results[d].diferencia,console.log("anashey"+o.results[d].tipo_venta),"Pollo"===o.results[d].tipo_venta?c.tabla_ventaspollo.push(o.results[d]):c.tabla_ventasconge.push(o.results[d]));console.log(c),a.lista_id.includes(l.numero_cliente)&&a.tabla_clientes.push(c),i.data.push(t.suma(c.tabla_ventaspollo)+t.suma(c.tabla_ventasconge)),t.datachart.datasets.push(i),console.log("opcion completa"),console.log(a)}})),t.repartoslista.push(a)})),l.data.push(r),l.data.push(n),c.data.push(r+n),c.data.push(s),t.datachart2.datasets.push(l),t.datachart3.datasets.push(c),console.log(t.repartoslista),t.setGraph(),console.log(t.repartousado.tabla_clientes),e.next=34;break;case 31:e.prev=31,e.t0=e["catch"](0),console.log(e.t0);case 34:case"end":return e.stop()}}),e,null,[[0,31]])})))()},getRepartos:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new b["a"],a.apiUrl.pathname="repartos/",e.next=4,a.getData();case 4:t.datarep=e.sent,t.datarep.forEach((function(e){o={},o.value=e.id_reparto,o.text=e.nombre,console.log(o),t.op_repartos.push(o)}));case 6:case"end":return e.stop()}}),e)})))()},getProductos:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new b["a"],a.apiUrl.pathname="productos/",e.next=4,a.getData();case 4:t.productos=e.sent;case 5:case"end":return e.stop()}}),e)})))()},getClientes:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new b["a"],a.apiUrl.pathname="clientes/",e.next=4,a.getData();case 4:t.listacli=e.sent;case 5:case"end":return e.stop()}}),e)})))()},setGraph:function(){var t=document.getElementById("chart");this.chart&&this.chart.destroy(),this.chart=new p["a"](t,{type:"bar",data:this.datachart,options:{title:{text:"Cantidad de ventas por Reparto",display:!0}}});var e=document.getElementById("chart2");this.chart2&&this.chart2.destroy(),this.chart2=new p["a"](e,{type:"pie",data:this.datachart2,options:{title:{text:"Cantidad de ventas por Reparto",display:!0}}});var a=document.getElementById("chart3");this.chart3&&this.chart3.destroy(),this.chart3=new p["a"](a,{type:"pie",data:this.datachart3,options:{title:{text:"Cantidad de ventas por Reparto",display:!0}}})},showModal:function(){this.$refs["my-modal"].show()},showModalinfo:function(t,e){this.infoVisitar.cliente=t,this.showModal()},hideModal:function(){this.$refs["my-modal"].hide()},fechaactual:function(){var t=new Date;console.log(t.toLocaleDateString());var e=function(t){return("0"+t.getDate()).slice(-2)+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+t.getFullYear()};return console.log(e(t)),e(t)},fechaactual2:function(){var t=new Date,e=function(t){return t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2)};return console.log(e(t)),e(t)},buscarnow:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o,r,n,s,i,l,c,d,u,p,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(a=t.$refs.buscadorlista,o=a.value.toUpperCase(),r=document.getElementById("tablaregistros"),n=r.getElementsByTagName("tr"),i=1;i<n.length;i++)s=n[i].getElementsByTagName("td"),c=s[0].textContent||s[0].innerText,d=s[1].textContent||s[1].innerText,u=s[3].textContent||s[3].innerText,p=s[4].textContent||s[4].innerText,b=s[6].textContent||s[6].innerText,l=c+d+u+p+b,l.toUpperCase().indexOf(o)>-1?n[i].style.display="":n[i].style.display="none";case 5:case"end":return e.stop()}}),e)})))()},getReparto:function(t){var e=this.datarep.find((function(e){return e.id_reparto==t}));return e},inicializar:function(){"reparto"==this.$session.get("tipocuenta")&&(console.log(this.$session.get("repartused")),this.reparto=this.$session.get("repartused")),this.fechausada=this.fechaactual2()},generarPDF:function(){return Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=document.getElementById("graficos"),u()().set({margin:1,filename:"Graficos.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:3,letterRendering:!0},jsPDF:{unit:"in",format:"a4",orientation:"landscape"}}).from(e).save().catch((function(t){return console.log(t)})),a=document.getElementById("tabla"),u()().set({margin:1,filename:"Tabla.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:3,letterRendering:!0},jsPDF:{unit:"in",format:"a3",orientation:"landscape"}}).from(a).save().catch((function(t){return console.log(t)}));case 4:case"end":return t.stop()}}),t)})))()}},beforeMount:function(){this.getRepartos(),this.getCategorias(),this.inicializar(),this.getClientes(),this.getProductos()}},h=f,m=(a("5653"),a("2877")),y=Object(m["a"])(h,o,r,!1,null,"3a1c6f62",null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-006c8445.219da50f.js.map