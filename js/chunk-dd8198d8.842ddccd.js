(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd8198d8"],{"1c0e":function(e,t,a){},2532:function(e,t,a){"use strict";var n=a("23e7"),r=a("5a34"),i=a("1d80"),o=a("577e"),s=a("ab13");n({target:"String",proto:!0,forced:!s("includes")},{includes:function(e){return!!~o(i(this)).indexOf(o(r(e)),arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,a){var n=a("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},"683c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"app"}},[a("div",{staticClass:"myTable",attrs:{id:"pp"}},[a("vue-headful",{attrs:{title:"Pp - Water"}}),a("b-form-group",{attrs:{label:"*Campo","label-for":"id_campo"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("v-autocomplete",{attrs:{id:"id_campo",items:e.opcampos,placeholder:"Elija el campo",required:"",solo:"",filled:""},on:{change:function(t){return e.cambiofecha()}},model:{value:e.campousado,callback:function(t){e.campousado=t},expression:"campousado"}})],1),null!=e.campousado?a("h5",[e._v("Lotes del campo:")]):e._e(),e._l(this.getLotes(e.getCampo(this.campousado)),(function(t){return a("div",[a("p",[e._v("Tipo: "+e._s(t.tipo)+" - Tipo Suelo: "+e._s(t.tiposuelo))])])})),a("b-form-group",{staticStyle:{display:"inline-block",width:"50%"},attrs:{label:"Fecha Inicial","label-for":"fechainiusada"}},[a("b-form-input",{attrs:{id:"fechainiusada",type:"date",placeholder:"Ingrese la fecha en la que quiere el reporte","invalid-feedback":"Complete este campo",required:""},on:{change:function(t){return e.cambiofecha()}},model:{value:e.fechainiusada,callback:function(t){e.fechainiusada=t},expression:"fechainiusada"}})],1),a("b-form-group",{staticStyle:{display:"inline-block",width:"50%"},attrs:{label:"Fecha Final","label-for":"fechafinusada"}},[a("b-form-input",{attrs:{id:"fechafinusada",type:"date",placeholder:"Ingrese la fecha en la que quiere el reporte","invalid-feedback":"Complete este campo",required:""},on:{change:function(t){return e.cambiofecha()}},model:{value:e.fechafinusada,callback:function(t){e.fechafinusada=t},expression:"fechafinusada"}})],1),a("h2",[e._v("Listado de Pp")]),a("b-button",{staticClass:"mb-4",attrs:{title:"Recargar",variant:"light"},on:{click:e.testFetch}},[a("v-icon",{staticStyle:{color:"black"},attrs:{dark:""}},[e._v("mdi-cached")]),e._v(" Actualizar ")],1),0==e.dardealta?a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-excel",modifiers:{"modal-excel":!0}}],staticClass:"mb-4 ml-2",staticStyle:{"background-color":"#00919F",color:"white"},attrs:{id:"btn_del_full",title:"Importar desde Excel"}},[e._v(" Importar Excel ")]):e._e(),a("b-modal",{ref:"my-modal",attrs:{"no-close-on-backdrop":"",id:"modal-excel","hide-footer":"",title:"Importar desde Excel","ok-only":""}},[a("h4",[e._v("Elige un archivo para importar")]),a("p",[e._v("Recuerda que un link para id_campo se forma de la siguiente manera:")]),a("b",[e._v("http://45.162.168.170:8081/campos/ + id_campo (puedes encontrarlo en el listado de campos)")]),a("br"),a("br"),a("input",{ref:"archivo",attrs:{type:"file",accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"},on:{change:e.uploadFile}}),a("b-button",{staticClass:"mt-2",attrs:{block:"",title:"Volver Atras"},on:{click:e.hideModal}},[e._v(" Volver Atras ")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"success",block:"",title:"Importar"},on:{click:e.importarExcel}},[e._v(" Importar ")])],1),0==e.dardealta?a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-alta",modifiers:{"modal-alta":!0}}],staticClass:"mb-4 ml-2",staticStyle:{"background-color":"#00919F",color:"white"},attrs:{title:"Nuevo Pp"},on:{click:function(t){return e.altaPp()}}},[a("v-icon",{attrs:{dark:""}},[e._v(" mdi-plus ")]),e._v(" Nuevo Pp ")],1):e._e(),a("b-modal",{attrs:{id:"modal-alta","hide-footer":""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[a("h5",{staticClass:"modal-title"},[e._v("Nueva PP")])]},proxy:!0}])},[a("pp-alta",{attrs:{updateTable:e.testFetch}})],1),a("div",[a("b-modal",{ref:"my-modal",attrs:{id:"modal-eliminarTodo","hide-footer":"",title:"Eliminar","ok-only":""}},[e.selected.length===e.rows?a("div",{staticClass:"d-block text-center"},[a("h3",[e._v("¿Esta seguro de eliminar todos los registros ?")])]):a("div",{staticClass:"d-block text-center"},[a("h3",[e._v("¿Esta seguro de eliminar "+e._s(e.selected.length)+" registros ?")])]),a("b-button",{staticClass:"mt-2",attrs:{block:"",title:"Volver Atras"},on:{click:e.hideModal}},[e._v(" Volver Atras ")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"danger",block:"",title:"Eliminar"},on:{click:function(t){return e.delete_all_Pp()}}},[e._v(" Eliminar ")])],1)],1),a("b-form-group",{directives:[{name:"show",rawName:"v-show",value:e.rows>0,expression:"rows > 0"}],staticClass:"mb-0",staticStyle:{width:"100%","padding-bottom":"1em"},attrs:{"label-for":"filter-input","label-align-sm":"right","label-size":"sm"}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Buscar registros"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[e._v("Limpiar")])],1)],1)],1),a("div",[a("pre",[e._v("Cantidad de registros: "+e._s(e.rows))])]),e._l(e.periodocomplpp,(function(t,n){return a("div",{key:n},[a("h4",[e._v("Mes: "+e._s(t.mesusado))]),a("b-table",{ref:"tablaregistros",refInFor:!0,attrs:{fields:e.llenarfields(t.tabla_fechas),striped:"",sortable:"",responsive:"",hover:"",items:t.tabla_pp,"show-empty":"","per-page":e.perPage,"current-page":e.currentPage,"sticky-header":!1,"no-border-collapse":!0,id:"tablaregistros",filter:e.filter},on:{filtered:e.onFiltered},scopedSlots:e._u([{key:"empty",fn:function(){return[a("b",[e._v("No hay registros para mostrar")])]},proxy:!0},{key:"cell()",fn:function(t){return[!0===e.ppus?a("p",{on:{click:function(t){return e.showinput()}}},[0==e.dardealta?a("v-icon",{staticClass:"mr-1",staticStyle:{"font-size":"1.2em",display:"inline-block"}},[e._v(" mdi-pencil ")]):e._e(),a("span",{staticStyle:{display:"inline-block"}},[e._v(e._s(t.value))])],1):a("b-form-group",{attrs:{"label-for":"precioref"}},[a("b-form-input",{staticStyle:{width:"100%",display:"inline-block"},attrs:{id:"precioref",type:"number","invalid-feedback":"Complete este campo"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"data.value"}}),a("b-button",{staticStyle:{"background-color":"green",display:"inline-block"},on:{click:function(a){return e.GuardarPrecioRef(t)}}},[e._v("✔")])],1)]}},{key:"cell(fecha)",fn:function(t){return[e._v(" "+e._s(e._f("Date")(t.value))+" ")]}},{key:"cell(selected)",fn:function(t){var n=t.rowSelected;return[n?[a("span",{attrs:{"aria-hidden":"true"}},[e._v("✓")]),a("span",{staticClass:"sr-only"},[e._v("Selected")])]:[a("span",{attrs:{"aria-hidden":"true"}},[e._v(" ")]),a("span",{staticClass:"sr-only"},[e._v("Not selected")])]]}},{key:"row-details",fn:function(t){return[a("b-card",{attrs:{title:"Datos del pp: "}},[a("div",[a("b-list-group",{attrs:{horizontal:""}},[a("b-list-group",{staticClass:"col-3"},[a("b-list-group-item",[a("b",[e._v("Id pp:")]),e._v(" "+e._s(t.item.id_pp))]),a("b-list-group-item",[a("b",[e._v("Numero de ticket:")]),e._v(" "+e._s(t.item.nro_ticket)+" ")]),a("b-list-group-item",[a("b",[e._v("Descripcion:")]),e._v(" "+e._s(t.item.descripcion)+" ")]),a("b-list-group-item",[a("b",[e._v("Total:")]),e._v(" "+e._s(t.item.total))]),a("b-list-group-item",[a("b",[e._v("Fecha:")]),e._v(" "+e._s(t.item.fecha))])],1),e._v("   ")],1)],1)])]}}],null,!0)})],1)})),a("b-modal",{ref:"my-modal",attrs:{id:"modal_eliminar","hide-footer":"",title:"Eliminar","ok-only":""}},[a("div",{staticClass:"d-block text-center"},[a("h3",[e._v(" ¿Esta seguro de eliminar los datos de "+e._s(e.infoEliminar.pp.id_pp)+" - Nro ticket "+e._s(e.infoEliminar.pp.patente)+"? ")])]),a("b-button",{staticClass:"mt-2",attrs:{block:"",title:"Volver Atras"},on:{click:e.hideModal}},[e._v("Volver Atras")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"danger",block:"",title:"Eliminar"},on:{click:function(t){return e.deletePp(e.infoEliminar.pp.id_pp)}}},[e._v(" Eliminar ")])],1),a("b-container",{attrs:{fluid:""}},[a("b-col",{staticClass:"my-1"},[a("b-pagination",{attrs:{align:"center",pills:"","total-rows":e.rows,"per-page":e.perPage,"aria-controls":"table_pp"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1),a("b-modal",{attrs:{id:"modal-editar","hide-footer":""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[a("h5",{staticClass:"modal-title"},[e._v("Editar")])]},proxy:!0}])},[a("pp-update",{attrs:{pp:e.editar,updateTable:e.testFetch}})],1)],2)])},r=[],i=a("1da1"),o=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("d81d"),a("4de4"),a("ac1f"),a("1276"),a("159b"),a("fb6a"),a("7db0"),a("caad"),a("2532"),a("5319"),a("c03a")),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h6",[e._v("Los campos en (*) son obligatorios")]),a("h4",[e._v("Registrar nuevo pp:")]),a("b-form",[a("b-form-group",{attrs:{label:"*Campo","label-for":"id_campo"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("v-autocomplete",{attrs:{id:"id_campo",items:e.opcampos,placeholder:"Elija el campo",state:e.validacion.id_campo.estado,"invalid-feedback":"Complete este campo",required:"",solo:"",filled:""},model:{value:e.pp.id_campo,callback:function(t){e.$set(e.pp,"id_campo",t)},expression:"pp.id_campo"}}),a("b-form-invalid-feedback",{attrs:{id:"id_campo-live-feedback"}},[e._v(" "+e._s(e.validacion.id_campo.mensaje)+" ")])],1),a("b-form-group",{attrs:{label:"*Fecha","label-for":"fecha"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("b-form-input",{attrs:{id:"fecha",type:"date",placeholder:"Ingrese el numero del patente",state:e.validacion.fecha.estado,"invalid-feedback":"Complete este campo",required:""},model:{value:e.pp.fecha,callback:function(t){e.$set(e.pp,"fecha",t)},expression:"pp.fecha"}}),a("b-form-invalid-feedback",{attrs:{id:"fecha-live-feedback"}},[e._v(" "+e._s(e.validacion.fecha.mensaje)+" ")])],1),a("b-form-group",{attrs:{label:"*Pp","label-for":"pp"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("b-form-input",{attrs:{id:"pp",type:"number",placeholder:"Ingrese el numero de pp",state:e.validacion.pp.estado,"invalid-feedback":"Complete este campo",required:""},model:{value:e.pp.pp,callback:function(t){e.$set(e.pp,"pp",t)},expression:"pp.pp"}}),a("b-form-invalid-feedback",{attrs:{id:"pp-live-feedback"}},[e._v(" "+e._s(e.validacion.pp.mensaje)+" ")])],1)],1),a("b-button",{staticStyle:{"background-color":"#006266",color:"white"},attrs:{variant:"success",block:""},on:{click:function(t){return e.postPp()}}},[e._v("Guardar")])],1)},c=[],l={props:{updateTable:Function},data:function(){return{pp:{},data:{},opcampos:[],validacion:{id_campo:{estado:null,mensaje:""},fecha:{estado:null,mensaje:""},pp:{estado:null,mensaje:""}},respuesta:{}}},methods:{getPp:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],t.next=3,a.getData();case 3:e.data=t.sent;case 4:case"end":return t.stop()}}),t)})))()},getCampos:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="campos/",t.next=4,a.getData();case 4:e.listacli=t.sent,e.listacli.forEach((function(t){n={},n.value="http://45.162.168.170:8081/campos/"+t.id_campo+"/",n.text=t.id_campo+" - "+t.nombre+" - "+t.calle,e.opcampos.push(n)}));case 6:case"end":return t.stop()}}),t)})))()},postPp:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="pp/",t.next=4,a.postData(e.pp);case 4:e.respuesta=t.sent,e.cargarFeedback(),e.updateTable();case 7:case"end":return t.stop()}}),t)})))()},fechaactual:function(){var e=new Date,t=function(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)};return console.log(t(e)),t(e)},cargarFeedback:function(){var e;for(var t in this.respuesta=this.respuesta||{},this.validacion)e=!this.respuesta.hasOwnProperty(t),this.validacion[t].estado=e,e||(this.validacion[t].mensaje=this.respuesta[t][0])},inicializar:function(){this.pp.fecha=this.fechaactual()}},beforeMount:function(){this.inicializar(),this.getCampos()}},u=l,p=a("2877"),d=Object(p["a"])(u,s,c,!1,null,null,null),h=d.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h6",[e._v("Los campos en (*) son obligatorios")]),a("h4",[e._v("Datos")]),a("b-form",[a("b-form-group",{attrs:{label:"*Patente","label-for":"patente"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("b-form-input",{attrs:{id:"patente",type:"text",placeholder:"Ingrese el numero del patente",state:e.validacion.patente.estado,"invalid-feedback":"Complete este campo",required:""},model:{value:e.camion.patente,callback:function(t){e.$set(e.camion,"patente",t)},expression:"camion.patente"}}),a("b-form-invalid-feedback",{attrs:{id:"patente-live-feedback"}},[e._v(" "+e._s(e.validacion.patente.mensaje)+" ")])],1)],1),a("b-button",{staticClass:"mt-2",attrs:{variant:"success",block:""},on:{click:function(t){return e.putCamion()}}},[e._v("Modificar")])],1)},m=[],b=a("bc3a"),v=a.n(b),g={props:{camion:{},updateTable:Function},data:function(){return{camiones:{},data:{},options:[{value:null,text:"Elija una gasto",disabled:!0}],validacion:{patente:{estado:null,mensaje:""}}}},created:function(){this.getCamiones()},methods:{getCamiones:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="camiones/",t.next=4,a.getData(e.camiones);case 4:e.data=t.sent,e.data.forEach((function(t){var a={};a.value="https://arandadistribucion.pythonanywhere.com/camiones/"+t.id_camion+"/",a.text=t.camiones,console.log(a),e.options.push(a)}));case 6:case"end":return t.stop()}}),t)})))()},putCamion:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="vacio",t.next=3,v.a.put("https://arandadistribucion.pythonanywhere.com/camiones/"+e.gastoSaliente.id_gasto+"/",e.camion).then((function(e){swal("Operación Exitosa"," ","success")})).catch((function(e){var t=e.response.status<500?"Los datos no son válidos":"Se ha detectado un problema ";swal("¡ERROR!",t,"error"),a=e.response.data}));case 3:e.cargarFeedback(a),e.updateTable();case 5:case"end":return t.stop()}}),t)})))()},cargarFeedback:function(e){var t;for(var a in console.log("respuestaAPI"),console.log(e),this.validacion)t=!e.hasOwnProperty(a),this.validacion[a].estado=t,console.log(a),t||(this.validacion[a].mensaje=e[a][0])}}},_=g,k=Object(p["a"])(_,f,m,!1,null,null,null),w=k.exports,x=new URL("http://45.162.168.170:8081");x.pathname="pp";var y=a("25ca"),R={components:{PpAlta:h,PpUpdate:w},data:function(){return{tabla_pp:[],fields:[{key:"mes",label:"Mes",sortable:!0}],selected:[],periodocomplpp:[],fechas:[],pps:[],dardealta:!1,cultivousado:null,lotescampo:[],campousado:null,cultivos:[],filter:null,totalRows:1,currentPage:1,perPage:10,buscar:"",opcampos:[{value:null,text:"Elija un campo",disabled:!0}],editar:{},fechainiusada:null,ppus:!0,fechafinusada:null,infoEliminar:{id:"modal_eliminar",pp:-1},btn_down_pdf:!0,btn_del_full:!0,msj_tabla:" Presione 'Mostrar' para ver los regitros ",btn_mostrar:!1,btn_editar:!1,btn_eliminar:!1,btn_select:!1,btn_limpiar:!0}},computed:{rows:function(){return this.totalRows=this.tabla_pp.length},rowsFilter:function(){return this.totalRows},id:function(){return this.tabla_pp.id_pp},sortOptions:function(){return this.fields.filter((function(e){return e.sortable})).map((function(e){return{text:e.label,value:e.key}}))}},methods:{cambiofecha:function(){this.periodocompletardo()},GuardarPrecioRef:function(e){var t=e.field.key;if(t=t.split("-")[2]+"-"+t.split("-")[1]+"-"+t.split("-")[0],null==this.findppfecha(t)){var a={fecha:t,pp:e.value,id_campo:this.campousado};this.postPp(a)}else{var n=this.findppfecha2(t);n.pp=e.value,this.putPp(n)}console.log(e),this.ppus=!0},postPp:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=new o["a"],n.apiUrl.pathname="pp/",a.next=4,n.postData(e);case 4:t.respuesta=a.sent;case 5:case"end":return a.stop()}}),a)})))()},uploadFile:function(){this.images=this.$refs.archivo.files[0],console.log(this.images)},importarExcel:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n,r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.images.arrayBuffer();case 2:a=t.sent,n=y.read(a),r=n.SheetNames,console.log("workbook1"),console.log(n),console.log("SheetNames"),console.log(n.SheetNames),i=new o["a"],s=y.utils.sheet_to_json(n.Sheets[r[0]]),console.log("datos"),console.log(s),i.apiUrl.pathname="pp/",s.forEach((function(e){i.postData(e)})),e.testFetch();case 16:case"end":return t.stop()}}),t)})))()},putPp:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return"vacio",t.next=3,v.a.put("http://45.162.168.170:8081/pp/"+e.id_pp+"/",e).then((function(e){swal("Operación Exitosa"," ","success")})).catch((function(e){var t=e.response.status<500?"Los datos no son válidos":"Se ha detectado un problema ";swal("¡ERROR!",t,"error"),e.response.data}));case 3:case"end":return t.stop()}}),t)})))()},testFetch:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(x);case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,n.results,e.periodocomplpp.forEach((function(t){t.tabla_pp=[];var a={};t.tabla_fechas.forEach((function(t){var n=t.split("-")[2]+"-"+t.split("-")[1]+"-"+t.split("-")[0],r=e.findppfecha(n);a[t]=r})),console.log(a),t.tabla_pp.push(a),console.log("Tabla gooooooood"),console.log(t.tabla_pp)})),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},editarPp:function(e,t){this.editar=e},showModal:function(){this.$refs["my-modal"].show()},showModalinfo:function(e,t){this.infoEliminar.pp=e,this.showModal()},hideModal:function(){this.$refs["my-modal"].hide()},fechaperiodo:function(){this.fechas=[];var e=new Date(this.fechainiusada);e.setDate(e.getDate()+1);var t=new Date(this.fechafinusada);t.setDate(t.getDate()+1),console.log(e.getDay());while(e.getTime()<=t.getTime())this.fechas.push(("0"+e.getDate()).slice(-2)+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+e.getFullYear()),e.setDate(e.getDate()+1);console.log(this.fechas)},getPps:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="pp/",t.next=4,a.getData();case 4:e.pps=t.sent;case 5:case"end":return t.stop()}}),t)})))()},findppfecha:function(e){var t=this;console.log(this.pps);var a=this.pps.find((function(a){return a.fecha==e&&a.id_campo==t.campousado}));return void 0==a?null:a.pp},actualizarbh:function(e){var t=findetofecha(e),a=findkcmes(this.getmes(e)),n=findriegofecha(e),r=t*a,i=findbhfecha(e),o=e.split("-")[2]+"-"+e.split("-")[1]+"-"+String(parseInt(e.split("-")[0])-1),s=findbhfecha(o),c=findppfecha(e);if(null==i){if(null!=s){var l={fecha:e,id_cultivo:this.cultivousado,bh:s+c-r+n};this.postBH(l)}}else if(null!=s){var u=findbhfecha2(o);u.bh=s+c-r+n,this.putBH(u)}},postBH:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=new o["a"],n.apiUrl.pathname="bh/",a.next=4,n.postData(e);case 4:t.respuesta=a.sent;case 5:case"end":return a.stop()}}),a)})))()},putBH:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return"vacio",t.next=3,v.a.put("http://45.162.168.170:8081/bh/"+e.id_bh+"/",e).then((function(e){})).catch((function(e){var t=e.response.status<500?"Los datos no son válidos":"Se ha detectado un problema ";swal("¡ERROR!",t,"error"),e.response.data}));case 3:case"end":return t.stop()}}),t)})))()},findkcmes:function(e){var t=this,a=this.kcs.find((function(a){return a.mes==e&&a.id_cultivo==t.cultivousado}));return void 0==a?null:(console.log("devuelvo"),a.kc)},findbhfecha:function(e){var t=this,a=this.bhs.find((function(a){return a.fecha==e&&a.id_cultivo==t.cultivousado}));return void 0==a?null:a.bh},findbhfecha2:function(e){var t=this,a=this.bhs.find((function(a){return a.fecha==e&&a.id_cultivo==t.cultivousado}));return void 0==a?null:a},findriegofecha:function(e){var t=this,a=this.riegos.find((function(a){return a.fecha==e&&a.id_cultivo==t.cultivousado}));return void 0==a?0:a.riego},findetofecha:function(e){var t=this;console.log(this.etos);var a=this.etos.find((function(a){return a.fecha==e&&a.id_campo==t.campousado}));return void 0==a?null:a.eto},getKcs:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="kc/",t.next=4,a.getData();case 4:e.kcs=t.sent;case 5:case"end":return t.stop()}}),t)})))()},getBhs:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="bh/",t.next=4,a.getData();case 4:e.bhs=t.sent;case 5:case"end":return t.stop()}}),t)})))()},getEtos:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="eto/",t.next=4,a.getData();case 4:e.etos=t.sent;case 5:case"end":return t.stop()}}),t)})))()},getRiegos:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="riego/",t.next=4,a.getData();case 4:e.riegos=t.sent;case 5:case"end":return t.stop()}}),t)})))()},showinput:function(){this.ppus=!1},periodocompletardo:function(){var e=this;this.periodocomplpp=[],this.mesesperiodo(),this.fechaperiodo(),this.meses.forEach((function(t){var a={mesusado:t,tabla_fechas:[],tabla_pp:[]};e.fechas.forEach((function(e){var n,r=e.split("-")[2]+"-"+e.split("-")[1]+"-"+e.split("-")[0],i=new Date(r),o=i.getMonth()+1;switch(console.log(o),o){case 1:n="Enero";break;case 2:n="Febrero";break;case 3:n="Marzo";break;case 4:n="Abril";break;case 5:n="Mayo";break;case 6:n="Junio";break;case 7:n="Julio";break;case 8:n="Agosto";break;case 9:n="Septiembre";break;case 10:n="Octubre";break;case 11:n="Noviembre";break;case 12:n="Diciembre";break}n==t&&a.tabla_fechas.push(e)})),e.periodocomplpp.push(a)})),this.testFetch()},mesesperiodo:function(){this.meses=[];var e=new Date(this.fechainiusada),t=new Date(this.fechafinusada);while(e.getTime()<=t.getTime()){var a=void 0,n=e.getMonth()+1;switch(n){case 1:a="Enero";break;case 2:a="Febrero";break;case 3:a="Marzo";break;case 4:a="Abril";break;case 5:a="Mayo";break;case 6:a="Junio";break;case 7:a="Julio";break;case 8:a="Agosto";break;case 9:a="Septiembre";break;case 10:a="Octubre";break;case 11:a="Noviembre";break;case 12:a="Diciembre";break}this.meses.includes(a)||this.meses.push(a),e.setDate(e.getDate()+1)}console.log(this.fechas)},altaPp:function(){},deletePp:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:v.a.delete("https://arandadistribucion.pythonanywhere.com/pp/"+e+"/").then((function(e){swal("Operación Exitosa"," ","success"),console.log(e),t.hideModal()})).catch((function(e){swal("¡ERROR!","Se ha detectado un problema ","error"),console.log(e),t.hideModal()})).finally((function(){return t.testFetch()}));case 1:case"end":return a.stop()}}),a)})))()},llenarfields:function(e){console.log("tabla_ventas"),console.log(e);var t=[];return e.forEach((function(e){var a={};a.key=e,a.label=e.split("-")[0],console.log(a),t.push(a)})),console.log("god"),console.log(t),t},redirect:function(){this.$session.exists()||window.location.replace("/login"),"lector"==this.$session.get("tipocuenta")&&(this.dardealta=!0)},getCultivos:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="cultivos/",t.next=4,a.getData();case 4:e.cultivos=t.sent;case 5:case"end":return t.stop()}}),t)})))()},getCampos:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new o["a"],a.apiUrl.pathname="campos/",t.next=4,a.getData();case 4:e.listacli=t.sent,e.listacli.forEach((function(t){n={},n.value="http://45.162.168.170:8081/campos/"+t.id_campo+"/",n.text=t.id_campo+" - "+t.nombre+" - "+t.calle,e.opcampos.push(n)}));case 6:case"end":return t.stop()}}),t)})))()},getCampo:function(e){var t=this;return null!=e&&(e=e.split("/")[4]),this.listacli==[]?getCampos().then((function(){return t.getCampo(e)})):this.listacli.find((function(t){return t.id_campo==e}))},delete_all_Pp:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.selected.length,t.prev=1,n=0;case 3:if(!(n<a)){t.next=11;break}if(v.a.delete("https://arandadistribucion.pythonanywhere.com/pp/"+e.selected[n].id_pp+"/"),0!=e.selected.length){t.next=8;break}return console.log("Eliminacion Exitosa"),t.abrupt("break",11);case 8:n++,t.next=3;break;case 11:e.hideModal(),swal("Eliminacion Exitosa"," ","success"),t.next=20;break;case 15:t.prev=15,t.t0=t["catch"](1),e.hideModal(),swal("¡ERROR!","Se ha detectado un problema ","error"),console.log(t.t0);case 20:return t.prev=20,e.testFetch(),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[1,15,20,23]])})))()},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1},getLotes:function(e){var t=[];return null!=e&&this.cultivos.forEach((function(a){parseInt(a.id_campo.split("/")[4])==e.id_campo&&t.push(a)})),t},seleccionar_una:function(e){this.selected=e,this.selected.length>0?(this.btn_del_full=!1,this.btn_limpiar=!1,this.selected.length>1&&(this.btn_mostrar=!0,this.btn_editar=!0,this.btn_eliminar=!0),this.selected.length==this.rows?this.btn_select=!0:this.btn_select=!1):(this.btn_del_full=!0,this.btn_mostrar=!1,this.btn_editar=!1,this.btn_eliminar=!1,this.btn_limpiar=!0)},fechaactual:function(){var e=new Date;e.setDate(e.getDate()+30);var t=function(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)};return console.log(t(e)),t(e)},fechaactual2:function(){var e=new Date,t=function(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)};return console.log(t(e)),t(e)},inicializar:function(){this.fechainiusada=this.fechaactual2(),this.fechafinusada=this.fechaactual(),this.periodocompletardo(),this.$session.exists()&&this.$session.get("cultivused")&&(this.cultivousado="http://45.162.168.170:8081/cultivos/"+String(this.$session.get("cultivused").id_cultivo)+"/",this.campousado=String(this.$session.get("cultivused").id_campo))},seleccionar_todas:function(){this.$refs.tablaregistros.selectAllRows(),this.btn_del_full=!1,this.btn_mostrar=!0,this.btn_editar=!0,this.btn_eliminar=!0,this.btn_select=!0,this.btn_limpiar=!1},limpiar_seleccion:function(){this.$refs.tablaregistros.clearSelected(),this.btn_del_full=!0,this.btn_mostrar=!1,this.btn_editar=!1,this.btn_eliminar=!1,this.btn_select=!1,this.btn_limpiar=!0}},beforeMount:function(){this.getCampos(),this.redirect(),this.getPps(),this.getCultivos(),this.inicializar()}},E=R,D=(a("c81e"),Object(p["a"])(E,n,r,!1,null,"74718442",null));t["default"]=D.exports},ab13:function(e,t,a){var n=a("b622"),r=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[r]=!1,"/./"[e](t)}catch(n){}}return!1}},c81e:function(e,t,a){"use strict";a("1c0e")},caad:function(e,t,a){"use strict";var n=a("23e7"),r=a("4d64").includes,i=a("44d2");n({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d81d:function(e,t,a){"use strict";var n=a("23e7"),r=a("b727").map,i=a("1dde"),o=i("map");n({target:"Array",proto:!0,forced:!o},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-dd8198d8.842ddccd.js.map