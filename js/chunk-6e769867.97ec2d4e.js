(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e769867"],{b479:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("vue-headful",{attrs:{title:"Home - Aranda"}}),o("b-jumbotron",{attrs:{header:"Bienvenido al reparto"}},[t.logout?o("form",{staticStyle:{"text-align":"center"},on:{submit:function(e){return e.preventDefault(),t.logout.apply(null,arguments)}}},[o("b-button",{staticClass:"accesorapido",staticStyle:{"background-color":"red","align-content":"center"},attrs:{type:"submit"}},[t._v("Logout")])],1):t._e(),o("b-form-group",{attrs:{label:"*Reparto","label-for":"id_reparto"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[o("v-autocomplete",{attrs:{id:"id_reparto",type:"text",placeholder:"Ingrese un Reparto","invalid-feedback":"Complete este campo",required:"",solo:"",filled:"",items:t.op_repartos,disabled:t.repartohabilitado},on:{change:function(e){return t.setReparto()}},model:{value:t.pagina.id_reparto,callback:function(e){t.$set(t.pagina,"id_reparto",e)},expression:"pagina.id_reparto"}})],1),o("div",{staticStyle:{"text-align":"center"},attrs:{id:"accesosrapidos"}},[o("b-button",{staticClass:"accesorapido",staticStyle:{"background-color":"darkorange"},on:{click:function(e){return t.verventas2()}}},[t._v("Venta")]),o("b-button",{staticClass:"accesorapido",staticStyle:{"background-color":"dodgerblue"},on:{click:function(e){return t.verstock()}}},[t._v("Stock")]),o("b-button",{staticClass:"accesorapido",staticStyle:{"background-color":"deeppink"},on:{click:function(e){return t.verdevs()}}},[t._v("Devolucion")]),o("b-button",{staticClass:"accesorapido",staticStyle:{"background-color":"dodgerblue"},on:{click:function(e){return t.verventas()}}},[t._v("Ver Ventas")])],1)],1)],1)},r=[],a=o("1da1"),n=(o("96cf"),o("ac1f"),o("5319"),o("159b"),o("fb6a"),o("7db0"),o("1276"),o("d8f0"),o("bc3a"),o("c03a")),i=o("2b0e"),c=o("0628"),u=o.n(c);i["default"].use(u.a);var l={data:function(){return{usuario:!0,op_repartos:[{value:null,text:"Ningun Reparto"}],repartos:[],stocks:[],op_stocks:[{value:null,text:"Ningun Reparto"}],pagina:{},repartohabilitado:!1}},methods:{prueba:function(){console.log($cookies.get("usuario"))},logout:function(){this.$session.destroy(),swal("Deslogueado"," ","success"),window.location.replace("/")},redirect:function(){this.$session.exists()||window.location.replace("/login"),"administrador"!=this.$session.get("tipocuenta")&&"reparto"!=this.$session.get("tipocuenta")&&"encargado"!=this.$session.get("tipocuenta")&&window.location.replace("/login")},getRepartos:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=new n["a"],o.apiUrl.pathname="repartos/",e.next=4,o.getData();case 4:t.repartos=e.sent,t.repartos.forEach((function(e){s={},s.value="http://45.162.168.170:8081/repartos/"+e.id_reparto+"/",s.text=e.id_reparto+" - "+e.nombre,console.log(s),t.op_repartos.push(s)})),t.op_repartos.push(s);case 7:case"end":return e.stop()}}),e)})))()},getStocks:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=new n["a"],o.apiUrl.pathname="stocks/",e.next=4,o.getData();case 4:t.stocks=e.sent,t.stocks.forEach((function(e){s={},s.value="http://45.162.168.170:8081/stocks/"+e.id_stock+"/",s.text=e.id_stock,console.log(s),t.op_stocks.push(s)}));case 6:case"end":return e.stop()}}),e)})))()},verventas:function(){null!=this.$session.get("repartused")?window.location.replace("/ventasReparto/?id_repa="+this.$session.get("repartused").id_reparto):windows.location.replace("/ventas/")},verventas2:function(){null!=this.$session.get("repartused")?window.location.replace("/ventasReparto/?abrir=true&id_repa="+this.$session.get("repartused").id_reparto):windows.location.replace("/ventas/")},verdevs:function(){null!=this.$session.get("repartused")?window.location.replace("/devoreparto/?abrir=true&id_dev="+this.$session.get("repartused").id_reparto):windows.location.replace("/ventas/")},verstock:function(){null!=this.$session.get("repartused")?window.location.replace("/stockreparto/?id_sto="+this.$session.get("stockused").id_stock):windows.location.replace("/stocks/")},fechaactual:function(){var t=new Date;console.log(t.toLocaleDateString());var e=function(t){return t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2)};return console.log(e(t)),e(t)},getReparto:function(t){var e=this;return this.repartos==[]?getRepartos().then((function(){return e.getReparto(t)})):this.repartos.find((function(e){return e.id_reparto==t}))},getStockactual:function(t){var e=this;return this.stocks==[]?getStocks().then((function(){return e.getStockactual(t)})):this.stocks.find((function(o){if(o.fechastock==e.fechaactual())return o.id_reparto.split("/")[4]==t}))},setReparto:function(){this.$session.start(),null==this.pagina.id_reparto?(this.$session.set("repartused",null),this.$session.set("stockused",null)):(this.$session.set("repartused",this.getReparto(this.pagina.id_reparto.split("/")[4])),this.$session.set("stockused",this.getStockactual(this.pagina.id_reparto.split("/")[4]))),console.log(this.$session.get("repartused")),console.log(this.$session.get("stockused"))},inicializar:function(){this.$session.exists()&&"reparto"==this.$session.get("tipocuenta")&&(this.repartohabilitado=!0,this.pagina.id_reparto="http://45.162.168.170:8081/repartos/"+String(this.$session.get("repartused").id_reparto)+"/")}},computed:{controlarusuario:function(){null!=$cookies.get("usuario")?this.usuario=!0:this.usuario=!1}},beforeMount:function(){this.getRepartos(),this.getStocks(),this.inicializar(),this.redirect()}},p=l,d=(o("d531"),o("2877")),g=Object(d["a"])(p,s,r,!1,null,null,null);e["default"]=g.exports},d531:function(t,e,o){"use strict";o("e72a")},e72a:function(t,e,o){}}]);
//# sourceMappingURL=chunk-6e769867.97ec2d4e.js.map