(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23247fd2"],{"0e74":function(e,t,a){"use strict";a("f4ee")},2532:function(e,t,a){"use strict";var i=a("23e7"),r=a("5a34"),n=a("1d80"),o=a("577e"),s=a("ab13");i({target:"String",proto:!0,forced:!s("includes")},{includes:function(e){return!!~o(n(this)).indexOf(o(r(e)),arguments.length>1?arguments[1]:void 0)}})},"3b08":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"app"}},[a("div",{staticClass:"myTable",attrs:{id:"riego"}},[a("vue-headful",{attrs:{title:"Riego - Aranda Distribucion"}}),a("b-form-group",{attrs:{label:"*Lote","label-for":"id_cultivo"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("v-autocomplete",{attrs:{id:"id_cultivo",items:e.opcultivos,placeholder:"Elija el cultivo",required:"",solo:"",filled:""},on:{change:function(t){return e.cambiofecha()}},model:{value:e.cultivousado,callback:function(t){e.cultivousado=t},expression:"cultivousado"}})],1),a("b-form-group",{staticStyle:{display:"inline-block",width:"50%"},attrs:{label:"Fecha Inicial","label-for":"fechainiusada"}},[a("b-form-input",{attrs:{id:"fechainiusada",type:"date",placeholder:"Ingrese la fecha en la que quiere el reporte","invalid-feedback":"Complete este campo",required:""},on:{change:function(t){return e.cambiofecha()}},model:{value:e.fechainiusada,callback:function(t){e.fechainiusada=t},expression:"fechainiusada"}})],1),a("b-form-group",{staticStyle:{display:"inline-block",width:"50%"},attrs:{label:"Fecha Final","label-for":"fechafinusada"}},[a("b-form-input",{attrs:{id:"fechafinusada",type:"date",placeholder:"Ingrese la fecha en la que quiere el reporte","invalid-feedback":"Complete este campo",required:""},on:{change:function(t){return e.cambiofecha()}},model:{value:e.fechafinusada,callback:function(t){e.fechafinusada=t},expression:"fechafinusada"}})],1),a("h2",[e._v("Listado de Riego")]),a("b-button",{staticClass:"mb-4",attrs:{title:"Recargar",variant:"light"},on:{click:e.testFetch}},[a("v-icon",{staticStyle:{color:"black"},attrs:{dark:""}},[e._v("mdi-cached")]),e._v(" Actualizar ")],1),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-excel",modifiers:{"modal-excel":!0}}],staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{variant:"success",id:"btn_del_full",title:"Importar desde Excel"}},[e._v(" Importar Excel ")]),a("b-modal",{ref:"my-modal",attrs:{"no-close-on-backdrop":"",id:"modal-excel","hide-footer":"",title:"Importar desde Excel","ok-only":""}},[a("h4",[e._v("Elige un archivo para importar")]),a("p",[e._v("Recuerda que un link para id_cultivo se forma de la siguiente manera:")]),a("b",[e._v("http://45.162.169.58:8081/cultivos/ + id_cultivo + / (puedes encontrarlo en el listado de cultivos)")]),a("br"),a("br"),a("input",{ref:"archivo",attrs:{type:"file",accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"},on:{change:e.uploadFile}}),a("b-button",{staticClass:"mt-2",attrs:{block:"",title:"Volver Atras"},on:{click:e.hideModal}},[e._v(" Volver Atras ")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"success",block:"",title:"Importar"},on:{click:e.importarExcel}},[e._v(" Importar ")])],1),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-alta",modifiers:{"modal-alta":!0}}],staticClass:"mb-4 ml-2",staticStyle:{color:"white"},attrs:{title:"Nuevo Riego"},on:{click:function(t){return e.altaRiego()}}},[a("v-icon",{attrs:{dark:""}},[e._v(" mdi-plus ")]),e._v(" Nuevo Riego ")],1),a("b-modal",{attrs:{id:"modal-alta","hide-footer":""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[a("h5",{staticClass:"modal-title"},[e._v("Alta")])]},proxy:!0}])},[a("riego-alta",{attrs:{updateTable:e.testFetch}})],1),a("div",[a("b-modal",{ref:"my-modal",attrs:{id:"modal-eliminarTodo","hide-footer":"",title:"Eliminar","ok-only":""}},[e.selected.length===e.rows?a("div",{staticClass:"d-block text-center"},[a("h3",[e._v("¿Esta seguro de eliminar todos los registros ?")])]):a("div",{staticClass:"d-block text-center"},[a("h3",[e._v("¿Esta seguro de eliminar "+e._s(e.selected.length)+" registros ?")])]),a("b-button",{staticClass:"mt-2",attrs:{block:"",title:"Volver Atras"},on:{click:e.hideModal}},[e._v(" Volver Atras ")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"danger",block:"",title:"Eliminar"},on:{click:function(t){return e.delete_all_Riego()}}},[e._v(" Eliminar ")])],1)],1),a("b-form-group",{directives:[{name:"show",rawName:"v-show",value:e.rows>0,expression:"rows > 0"}],staticClass:"mb-0",staticStyle:{width:"100%","padding-bottom":"1em"},attrs:{"label-for":"filter-input","label-align-sm":"right","label-size":"sm"}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Buscar registros"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[e._v("Limpiar")])],1)],1)],1),a("div",[a("pre",[e._v("Cantidad de registros: "+e._s(e.rows))])]),e._l(e.periodocomplriego,(function(t,i){return a("div",{key:i},[a("h4",[e._v("Mes: "+e._s(t.mesusado))]),a("b-table",{ref:"tablaregistros",refInFor:!0,attrs:{fields:e.llenarfields(t.tabla_fechas),striped:"",sortable:"",responsive:"",hover:"",items:t.tabla_riego,"show-empty":"","per-page":e.perPage,"current-page":e.currentPage,"sticky-header":!1,"no-border-collapse":!0,id:"tablaregistros",filter:e.filter},on:{filtered:e.onFiltered},scopedSlots:e._u([{key:"empty",fn:function(){return[a("b",[e._v("No hay registros para mostrar")])]},proxy:!0},{key:"cell()",fn:function(t){return[!0===e.riegous?a("p",{on:{click:function(t){return e.showinput()}}},[a("v-icon",{staticClass:"mr-1",staticStyle:{"font-size":"1.2em",display:"inline-block"}},[e._v(" mdi-pencil ")]),a("span",{staticStyle:{display:"inline-block"}},[e._v(e._s(t.value))])],1):a("b-form-group",{attrs:{"label-for":"precioref"}},[a("b-form-input",{staticStyle:{width:"100%",display:"inline-block"},attrs:{id:"precioref",type:"number","invalid-feedback":"Complete este campo"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"data.value"}}),a("b-button",{staticStyle:{"background-color":"green",display:"inline-block"},on:{click:function(a){return e.GuardarPrecioRef(t)}}},[e._v("✔")])],1)]}},{key:"cell(fecha)",fn:function(t){return[e._v(" "+e._s(e._f("Date")(t.value))+" ")]}},{key:"cell(selected)",fn:function(t){var i=t.rowSelected;return[i?[a("span",{attrs:{"aria-hidden":"true"}},[e._v("✓")]),a("span",{staticClass:"sr-only"},[e._v("Selected")])]:[a("span",{attrs:{"aria-hidden":"true"}},[e._v(" ")]),a("span",{staticClass:"sr-only"},[e._v("Not selected")])]]}},{key:"row-details",fn:function(t){return[a("b-card",{attrs:{title:"Datos del riego: "}},[a("div",[a("b-list-group",{attrs:{horizontal:""}},[a("b-list-group",{staticClass:"col-3"},[a("b-list-group-item",[a("b",[e._v("Id riego:")]),e._v(" "+e._s(t.item.id_riego))]),a("b-list-group-item",[a("b",[e._v("Numero de ticket:")]),e._v(" "+e._s(t.item.nro_ticket)+" ")]),a("b-list-group-item",[a("b",[e._v("Descripcion:")]),e._v(" "+e._s(t.item.descripcion)+" ")]),a("b-list-group-item",[a("b",[e._v("Total:")]),e._v(" "+e._s(t.item.total))]),a("b-list-group-item",[a("b",[e._v("Fecha:")]),e._v(" "+e._s(t.item.fecha))])],1),e._v("   ")],1)],1)])]}}],null,!0)})],1)})),a("b-modal",{ref:"my-modal",attrs:{id:"modal_eliminar","hide-footer":"",title:"Eliminar","ok-only":""}},[a("div",{staticClass:"d-block text-center"},[a("h3",[e._v(" ¿Esta seguro de eliminar los datos de "+e._s(e.infoEliminar.riego.id_riego)+" - Nro ticket "+e._s(e.infoEliminar.riego.patente)+"? ")])]),a("b-button",{staticClass:"mt-2",attrs:{block:"",title:"Volver Atras"},on:{click:e.hideModal}},[e._v("Volver Atras")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"danger",block:"",title:"Eliminar"},on:{click:function(t){return e.deleteRiego(e.infoEliminar.riego.id_riego)}}},[e._v(" Eliminar ")])],1),a("b-container",{attrs:{fluid:""}},[a("b-col",{staticClass:"my-1"},[a("b-pagination",{attrs:{align:"center",pills:"","total-rows":e.rows,"per-page":e.perPage,"aria-controls":"table_riego"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1),a("b-modal",{attrs:{id:"modal-editar","hide-footer":""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[a("h5",{staticClass:"modal-title"},[e._v("Editar")])]},proxy:!0}])},[a("riego-update",{attrs:{riego:e.editar,updateTable:e.testFetch}})],1)],2)])},r=[],n=a("1da1"),o=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("d81d"),a("4de4"),a("ac1f"),a("1276"),a("159b"),a("fb6a"),a("7db0"),a("caad"),a("2532"),a("5319"),a("c03a")),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h6",[e._v("Los campos en (*) son obligatorios")]),a("h4",[e._v("Registrar nuevo riego:")]),a("b-form",[a("b-form-group",{attrs:{label:"*Cultivo","label-for":"id_cultivo"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("v-autocomplete",{attrs:{id:"id_cultivo",items:e.opcultivos,placeholder:"Elija el cultivo",state:e.validacion.id_cultivo.estado,"invalid-feedback":"Complete este campo",required:"",solo:"",filled:""},model:{value:e.riego.id_cultivo,callback:function(t){e.$set(e.riego,"id_cultivo",t)},expression:"riego.id_cultivo"}}),a("b-form-invalid-feedback",{attrs:{id:"id_cultivo-live-feedback"}},[e._v(" "+e._s(e.validacion.id_cultivo.mensaje)+" ")])],1),a("b-form-group",{attrs:{label:"*Fecha","label-for":"fecha"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("b-form-input",{attrs:{id:"fecha",type:"date",placeholder:"Ingrese el numero del patente",state:e.validacion.fecha.estado,"invalid-feedback":"Complete este campo",required:""},model:{value:e.riego.fecha,callback:function(t){e.$set(e.riego,"fecha",t)},expression:"riego.fecha"}}),a("b-form-invalid-feedback",{attrs:{id:"fecha-live-feedback"}},[e._v(" "+e._s(e.validacion.fecha.mensaje)+" ")])],1),a("b-form-group",{attrs:{label:"*Riego","label-for":"riego"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("b-form-input",{attrs:{id:"riego",type:"number",placeholder:"Ingrese el numero de riego",state:e.validacion.riego.estado,"invalid-feedback":"Complete este campo",required:""},model:{value:e.riego.riego,callback:function(t){e.$set(e.riego,"riego",t)},expression:"riego.riego"}}),a("b-form-invalid-feedback",{attrs:{id:"riego-live-feedback"}},[e._v(" "+e._s(e.validacion.riego.mensaje)+" ")])],1)],1),a("b-button",{staticClass:"mt-2",attrs:{variant:"success",block:""},on:{click:function(t){return e.postRiego()}}},[e._v("Guardar")])],1)},c=[],l={props:{updateTable:Function},data:function(){return{riego:{},data:{},opcultivos:[],validacion:{id_cultivo:{estado:null,mensaje:""},fecha:{estado:null,mensaje:""},riego:{estado:null,mensaje:""}},respuesta:{}}},methods:{getRiego:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],t.next=3,a.getData();case 3:e.data=t.sent;case 4:case"end":return t.stop()}}),t)})))()},getCultivos:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="cultivos/",t.next=4,a.getData();case 4:e.listacli=t.sent,e.listacli.forEach((function(t){i={},i.value="http://45.162.169.58:8081/cultivos/"+t.id_cultivo+"/",i.text=t.id_campo+t.tipo+t.coordenadas,e.opcultivos.push(i)}));case 6:case"end":return t.stop()}}),t)})))()},postRiego:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="riego/",t.next=4,a.postData(e.riego);case 4:e.respuesta=t.sent,e.cargarFeedback(),e.updateTable();case 7:case"end":return t.stop()}}),t)})))()},fechaactual:function(){var e=new Date,t=function(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)};return console.log(t(e)),t(e)},cargarFeedback:function(){var e;for(var t in this.respuesta=this.respuesta||{},this.validacion)e=!this.respuesta.hasOwnProperty(t),this.validacion[t].estado=e,e||(this.validacion[t].mensaje=this.respuesta[t][0])},inicializar:function(){this.riego.fecha=this.fechaactual()}},beforeMount:function(){this.inicializar(),this.getCultivos()}},u=l,d=a("2877"),h=Object(d["a"])(u,s,c,!1,null,null,null),f=h.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h6",[e._v("Los campos en (*) son obligatorios")]),a("h4",[e._v("Datos")]),a("b-form",[a("b-form-group",{attrs:{label:"*Patente","label-for":"patente"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("b-form-input",{attrs:{id:"patente",type:"text",placeholder:"Ingrese el numero del patente",state:e.validacion.patente.estado,"invalid-feedback":"Complete este campo",required:""},model:{value:e.camion.patente,callback:function(t){e.$set(e.camion,"patente",t)},expression:"camion.patente"}}),a("b-form-invalid-feedback",{attrs:{id:"patente-live-feedback"}},[e._v(" "+e._s(e.validacion.patente.mensaje)+" ")])],1)],1),a("b-button",{staticClass:"mt-2",attrs:{variant:"success",block:""},on:{click:function(t){return e.putCamion()}}},[e._v("Modificar")])],1)},m=[],v=a("bc3a"),b=a.n(v),g={props:{camion:{},updateTable:Function},data:function(){return{camiones:{},data:{},options:[{value:null,text:"Elija una gasto",disabled:!0}],validacion:{patente:{estado:null,mensaje:""}}}},created:function(){this.getCamiones()},methods:{getCamiones:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="camiones/",t.next=4,a.getData(e.camiones);case 4:e.data=t.sent,e.data.forEach((function(t){var a={};a.value="https://arandadistribucion.pythonanywhere.com/camiones/"+t.id_camion+"/",a.text=t.camiones,console.log(a),e.options.push(a)}));case 6:case"end":return t.stop()}}),t)})))()},putCamion:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="vacio",t.next=3,b.a.put("https://arandadistribucion.pythonanywhere.com/camiones/"+e.gastoSaliente.id_gasto+"/",e.camion).then((function(e){swal("Operación Exitosa"," ","success")})).catch((function(e){var t=e.response.status<500?"Los datos no son válidos":"Se ha detectado un problema ";swal("¡ERROR!",t,"error"),a=e.response.data}));case 3:e.cargarFeedback(a),e.updateTable();case 5:case"end":return t.stop()}}),t)})))()},cargarFeedback:function(e){var t;for(var a in console.log("respuestaAPI"),console.log(e),this.validacion)t=!e.hasOwnProperty(a),this.validacion[a].estado=t,console.log(a),t||(this.validacion[a].mensaje=e[a][0])}}},_=g,w=Object(d["a"])(_,p,m,!1,null,null,null),k=w.exports,x=new URL("http://45.162.169.58:8081");x.pathname="riego";var R={components:{RiegoAlta:f,RiegoUpdate:k},data:function(){return{tabla_riego:[],fields:[{key:"mes",label:"Mes",sortable:!0}],selected:[],periodocomplriego:[],fechas:[],riegos:[],cultivousado:null,filter:null,totalRows:1,currentPage:1,perPage:10,buscar:"",opcultivos:[{value:null,text:"Elija un cultivo",disabled:!0}],editar:{},fechainiusada:null,riegous:!0,fechafinusada:null,infoEliminar:{id:"modal_eliminar",riego:-1},btn_down_pdf:!0,btn_del_full:!0,msj_tabla:" Presione 'Mostrar' para ver los regitros ",btn_mostrar:!1,btn_editar:!1,btn_eliminar:!1,btn_select:!1,btn_limpiar:!0}},computed:{rows:function(){return this.totalRows=this.tabla_riego.length},rowsFilter:function(){return this.totalRows},id:function(){return this.tabla_riego.id_riego},sortOptions:function(){return this.fields.filter((function(e){return e.sortable})).map((function(e){return{text:e.label,value:e.key}}))}},methods:{cambiofecha:function(){this.periodocompletardo()},GuardarPrecioRef:function(e){var t=e.field.key;if(t=t.split("-")[2]+"-"+t.split("-")[1]+"-"+t.split("-")[0],null==this.findriegofecha(t)){var a={fecha:t,riego:e.value,id_cultivo:this.cultivousado};this.postRiego(a)}else{var i=this.findriegofecha2(t);i.riego=e.value,this.putRiego(i)}console.log(e),this.riegous=!0},postRiego:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=new o["a"],i.apiUrl.pathname="riego/",a.next=4,i.postData(e);case 4:t.respuesta=a.sent,t.actualizarbh(e.fecha);case 6:case"end":return a.stop()}}),a)})))()},uploadFile:function(){this.images=this.$refs.archivo.files[0],console.log(this.images)},importarExcel:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,i,r,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.images.arrayBuffer();case 2:a=t.sent,i=XLSX.read(a),r=i.SheetNames,console.log("workbook1"),console.log(i),console.log("SheetNames"),console.log(i.SheetNames),n=new o["a"],s=XLSX.utils.sheet_to_json(i.Sheets[r[0]]),console.log("datos"),console.log(s),n.apiUrl.pathname="riego/",s.forEach((function(e){n.postData(e)})),e.testFetch();case 16:case"end":return t.stop()}}),t)})))()},putRiego:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return"vacio",t.next=3,b.a.put("http://45.162.169.58:8081/riego/"+e.id_riego+"/",e).then((function(e){swal("Operación Exitosa"," ","success")})).catch((function(e){var t=e.response.status<500?"Los datos no son válidos":"Se ha detectado un problema ";swal("¡ERROR!",t,"error"),e.response.data}));case 3:case"end":return t.stop()}}),t)})))()},testFetch:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(x);case 3:return a=t.sent,t.next=6,a.json();case 6:i=t.sent,i.results,e.periodocomplriego.forEach((function(t){t.tabla_riego=[];var a={};t.tabla_fechas.forEach((function(t){var i=t.split("-")[2]+"-"+t.split("-")[1]+"-"+t.split("-")[0],r=e.findriegofecha(i);a[t]=r})),console.log(a),t.tabla_riego.push(a),console.log("Tabla gooooooood"),console.log(t.tabla_riego)})),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},editarRiego:function(e,t){this.editar=e},showModal:function(){this.$refs["my-modal"].show()},showModalinfo:function(e,t){this.infoEliminar.riego=e,this.showModal()},hideModal:function(){this.$refs["my-modal"].hide()},fechaperiodo:function(){this.fechas=[];var e=new Date(this.fechainiusada);e.setDate(e.getDate()+1);var t=new Date(this.fechafinusada);t.setDate(t.getDate()+1),console.log(e.getDay());while(e.getTime()<=t.getTime())this.fechas.push(("0"+e.getDate()).slice(-2)+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+e.getFullYear()),e.setDate(e.getDate()+1);console.log(this.fechas)},getRiegos:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="riego/",t.next=4,a.getData();case 4:e.riegos=t.sent;case 5:case"end":return t.stop()}}),t)})))()},findriegofecha:function(e){var t=this;console.log(this.riegos);var a=this.riegos.find((function(a){return a.fecha==e&&a.id_cultivo==t.cultivousado}));return void 0==a?null:a.riego},findriegofecha2:function(e){var t=this;console.log(this.riegos);var a=this.riegos.find((function(a){return a.fecha==e&&a.id_cultivo==t.cultivousado}));return void 0==a?null:a},actualizarbh:function(e){var t=findetofecha(e),a=findkcmes(this.getmes(e)),i=findriegofecha(e),r=t*a,n=findbhfecha(e),o=e.split("-")[2]+"-"+e.split("-")[1]+"-"+String(parseInt(e.split("-")[0])-1),s=findbhfecha(o),c=findppfecha(e);if(null==n){if(null!=s){var l={fecha:e,id_cultivo:this.cultivousado,bh:s+c-r+i};this.postBH(l)}}else if(null!=s){var u=findbhfecha2(o);u.bh=s+c-r+i,this.putBH(u)}},postBH:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=new o["a"],i.apiUrl.pathname="bh/",a.next=4,i.postData(e);case 4:t.respuesta=a.sent;case 5:case"end":return a.stop()}}),a)})))()},putBH:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return"vacio",t.next=3,b.a.put("http://45.162.169.58:8081/bh/"+e.id_bh+"/",e).then((function(e){})).catch((function(e){var t=e.response.status<500?"Los datos no son válidos":"Se ha detectado un problema ";swal("¡ERROR!",t,"error"),e.response.data}));case 3:case"end":return t.stop()}}),t)})))()},findkcmes:function(e){var t=this;console.log(e),console.log(this.cultivousado);var a=this.kcs.find((function(a){return a.mes==e&&a.id_cultivo==t.cultivousado}));return void 0==a?null:(console.log("devuelvo"),a.kc)},findbhfecha:function(e){var t=this,a=this.bhs.find((function(a){return a.fecha==e&&a.id_cultivo==t.cultivousado}));return void 0==a?null:a.bh},findbhfecha2:function(e){var t=this,a=this.bhs.find((function(a){return a.fecha==e&&a.id_cultivo==t.cultivousado}));return void 0==a?null:a},findppfecha:function(e){var t=this,a=this.pps.find((function(a){return a.fecha==e&&a.id_cultivo==t.cultivousado}));return void 0==a?0:a.pp},findetofecha:function(e){var t=this;console.log(this.etos);var a=this.etos.find((function(a){return a.fecha==e&&a.id_cultivo==t.cultivousado}));return void 0==a?null:a.eto},getKcs:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="kc/",t.next=4,a.getData();case 4:e.kcs=t.sent;case 5:case"end":return t.stop()}}),t)})))()},getBhs:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="bh/",t.next=4,a.getData();case 4:e.bhs=t.sent;case 5:case"end":return t.stop()}}),t)})))()},getEtos:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="eto/",t.next=4,a.getData();case 4:e.etos=t.sent;case 5:case"end":return t.stop()}}),t)})))()},getPps:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="pp/",t.next=4,a.getData();case 4:e.bhs=t.sent;case 5:case"end":return t.stop()}}),t)})))()},showinput:function(){this.riegous=!1},periodocompletardo:function(){var e=this;this.periodocomplriego=[],this.mesesperiodo(),this.fechaperiodo(),this.meses.forEach((function(t){var a={mesusado:t,tabla_fechas:[],tabla_riego:[]};e.fechas.forEach((function(e){var i,r=e.split("-")[2]+"-"+e.split("-")[1]+"-"+e.split("-")[0],n=new Date(r),o=n.getMonth()+1;switch(console.log(o),o){case 1:i="Enero";break;case 2:i="Febrero";break;case 3:i="Marzo";break;case 4:i="Abril";break;case 5:i="Mayo";break;case 6:i="Junio";break;case 7:i="Julio";break;case 8:i="Agosto";break;case 9:i="Septiembre";break;case 10:i="Octubre";break;case 11:i="Noviembre";break;case 12:i="Diciembre";break}i==t&&a.tabla_fechas.push(e)})),e.periodocomplriego.push(a)})),this.testFetch()},mesesperiodo:function(){this.meses=[];var e=new Date(this.fechainiusada),t=new Date(this.fechafinusada);while(e.getTime()<=t.getTime()){var a=void 0,i=e.getMonth()+1;switch(i){case 1:a="Enero";break;case 2:a="Febrero";break;case 3:a="Marzo";break;case 4:a="Abril";break;case 5:a="Mayo";break;case 6:a="Junio";break;case 7:a="Julio";break;case 8:a="Agosto";break;case 9:a="Septiembre";break;case 10:a="Octubre";break;case 11:a="Noviembre";break;case 12:a="Diciembre";break}this.meses.includes(a)||this.meses.push(a),e.setDate(e.getDate()+1)}console.log(this.fechas)},altaRiego:function(){},deleteRiego:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:b.a.delete("https://arandadistribucion.pythonanywhere.com/riego/"+e+"/").then((function(e){swal("Operación Exitosa"," ","success"),console.log(e),t.hideModal()})).catch((function(e){swal("¡ERROR!","Se ha detectado un problema ","error"),console.log(e),t.hideModal()})).finally((function(){return t.testFetch()}));case 1:case"end":return a.stop()}}),a)})))()},llenarfields:function(e){console.log("tabla_ventas"),console.log(e);var t=[];return e.forEach((function(e){console.log("anashey");var a={};a.key=e,a.text=e,console.log(a),t.push(a)})),console.log("god"),console.log(t),t},redirect:function(){this.$session.exists()||window.location.replace("/login"),"administrador"!=this.$session.get("tipocuenta")&&"reparto"!=this.$session.get("tipocuenta")||window.location.replace("/Home")},getCultivos:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="cultivos/",t.next=4,a.getData();case 4:e.listacli=t.sent,e.listacli.forEach((function(t){i={},i.value="http://45.162.169.58:8081/cultivos/"+t.id_cultivo+"/",i.text=t.id_campo.split("/")[4]+" - "+t.tipo+" - "+t.tiposuelo,e.opcultivos.push(i)}));case 6:case"end":return t.stop()}}),t)})))()},delete_all_Riego:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.selected.length,t.prev=1,i=0;case 3:if(!(i<a)){t.next=11;break}if(b.a.delete("https://arandadistribucion.pythonanywhere.com/riego/"+e.selected[i].id_riego+"/"),0!=e.selected.length){t.next=8;break}return console.log("Eliminacion Exitosa"),t.abrupt("break",11);case 8:i++,t.next=3;break;case 11:e.hideModal(),swal("Eliminacion Exitosa"," ","success"),t.next=20;break;case 15:t.prev=15,t.t0=t["catch"](1),e.hideModal(),swal("¡ERROR!","Se ha detectado un problema ","error"),console.log(t.t0);case 20:return t.prev=20,e.testFetch(),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[1,15,20,23]])})))()},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1},seleccionar_una:function(e){this.selected=e,this.selected.length>0?(this.btn_del_full=!1,this.btn_limpiar=!1,this.selected.length>1&&(this.btn_mostrar=!0,this.btn_editar=!0,this.btn_eliminar=!0),this.selected.length==this.rows?this.btn_select=!0:this.btn_select=!1):(this.btn_del_full=!0,this.btn_mostrar=!1,this.btn_editar=!1,this.btn_eliminar=!1,this.btn_limpiar=!0)},fechaactual:function(){var e=new Date;e.setDate(e.getDate()+30);var t=function(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)};return console.log(t(e)),t(e)},fechaactual2:function(){var e=new Date,t=function(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)};return console.log(t(e)),t(e)},inicializar:function(){this.$session.exists()&&(this.cultivousado="http://45.162.169.58:8081/cultivos/"+String(this.$session.get("cultivused").id_cultivo)+"/"),this.fechainiusada=this.fechaactual2(),this.fechafinusada=this.fechaactual(),this.periodocompletardo()},seleccionar_todas:function(){this.$refs.tablaregistros.selectAllRows(),this.btn_del_full=!1,this.btn_mostrar=!0,this.btn_editar=!0,this.btn_eliminar=!0,this.btn_select=!0,this.btn_limpiar=!1},limpiar_seleccion:function(){this.$refs.tablaregistros.clearSelected(),this.btn_del_full=!0,this.btn_mostrar=!1,this.btn_editar=!1,this.btn_eliminar=!1,this.btn_select=!1,this.btn_limpiar=!0}},beforeMount:function(){this.getRiegos(),this.inicializar(),this.getCultivos()}},y=R,E=(a("0e74"),Object(d["a"])(y,i,r,!1,null,"739bedee",null));t["default"]=E.exports},"5a34":function(e,t,a){var i=a("44e7");e.exports=function(e){if(i(e))throw TypeError("The method doesn't accept regular expressions");return e}},ab13:function(e,t,a){var i=a("b622"),r=i("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[r]=!1,"/./"[e](t)}catch(i){}}return!1}},caad:function(e,t,a){"use strict";var i=a("23e7"),r=a("4d64").includes,n=a("44d2");i({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("includes")},d81d:function(e,t,a){"use strict";var i=a("23e7"),r=a("b727").map,n=a("1dde"),o=n("map");i({target:"Array",proto:!0,forced:!o},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},f4ee:function(e,t,a){}}]);
//# sourceMappingURL=chunk-23247fd2.722f92c3.js.map