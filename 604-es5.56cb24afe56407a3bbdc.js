!function(){"use strict";function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,i,r=[],s=!0,o=!1;try{for(n=n.call(e);!(s=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);s=!0);}catch(u){o=!0,i=u}finally{try{s||null==n.return||n.return()}finally{if(o)throw i}}return r}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(self.webpackChunkcore=self.webpackChunkcore||[]).push([[604],{4991:function(e,t,n){n.d(t,{gK:function(){return a},aW:function(){return i},jo:function(){return r},_l:function(){return s}});var a=10,i="asc",r="desc",s="sort"},9044:function(e,t,a){a.d(t,{T:function(){return m}});var r,s=a(6006),o=a(7194),u=a(4477),c=a(8036),l=a(2741),d=a(6059),m=((r=function(){function e(t){var a=this;n(this,e),this.sort=t,this.sortIcon=c.CmM,this.sortAscIcon=c.foy,this.sortDescIcon=c.u9C,this.destroy$=new s.xQ,t.predicateChange.pipe((0,o.R)(this.destroy$)).subscribe(function(){return a.updateIconDefinition()}),t.ascendingChange.pipe((0,o.R)(this.destroy$)).subscribe(function(){return a.updateIconDefinition()})}return i(e,[{key:"onClick",value:function(){this.iconComponent&&this.sort.sort(this.jhiSortBy)}},{key:"ngAfterContentInit",value:function(){this.updateIconDefinition()}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}},{key:"updateIconDefinition",value:function(){if(this.iconComponent){var e=this.sortIcon;this.sort.predicate===this.jhiSortBy&&(e=this.sort.ascending?this.sortAscIcon:this.sortDescIcon),this.iconComponent.icon=e.iconName,this.iconComponent.render()}}}]),e}()).\u0275fac=function(e){return new(e||r)(l.Y36(d.b,1))},r.\u0275dir=l.lG2({type:r,selectors:[["","jhiSortBy",""]],contentQueries:function(e,t,n){var a;1&e&&l.Suo(n,u.BN,5),2&e&&l.iGM(a=l.CRH())&&(t.iconComponent=a.first)},hostBindings:function(e,t){1&e&&l.NdJ("click",function(){return t.onClick()})},inputs:{jhiSortBy:"jhiSortBy"}}),r)},6059:function(e,t,a){a.d(t,{b:function(){return o}});var r,s=a(2741),o=((r=function(){function e(){n(this,e),this.predicateChange=new s.vpe,this.ascendingChange=new s.vpe,this.sortChange=new s.vpe}return i(e,[{key:"predicate",get:function(){return this._predicate},set:function(e){this._predicate=e,this.predicateChange.emit(e)}},{key:"ascending",get:function(){return this._ascending},set:function(e){this._ascending=e,this.ascendingChange.emit(e)}},{key:"sort",value:function(e){this.ascending=e!==this.predicate||!this.ascending,this.predicate=e,this.predicateChange.emit(e),this.ascendingChange.emit(this.ascending),this.sortChange.emit({predicate:this.predicate,ascending:this.ascending})}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275dir=s.lG2({type:r,selectors:[["","jhiSort",""]],inputs:{predicate:"predicate",ascending:"ascending"},outputs:{predicateChange:"predicateChange",ascendingChange:"ascendingChange",sortChange:"sortChange"}}),r)},7604:function(t,a,r){r.r(a),r.d(a,{StreamModule:function(){return ge}});var s=r(8335),o=r(1499),u=r(1382),c=r(6643),l=r(9375),d=r(267),m=r(3324),g=r(5113),h=function e(t,a,i,r,s,o,u,c,l,d,m,g,h,p,f,v,U,_,Z,b,y){n(this,e),this.id=t,this.query=a,this.active=i,this.createdBy=r,this.createdDate=s,this.lastModifiedBy=o,this.lastModifiedDate=u,this.idUsuario=c,this.usuarioAsignado=l,this.socialNetworks=d,this.topics=m,this.languages=g,this.countries=h,this.company=p,this.idStream=f,this.maxRowCount=v,this.name=U,this.companyName=_,this.startDate=Z,this.endDate=b,this.searchType=y},p=r(7390),f=r(9764),v=r(2741),U=r(7709),_=r(1633),Z=r(222),b=r(4243),y=r(6662),T=r(4477);function q(e,t){1&e&&(v.TgZ(0,"h2",7),v._uU(1,"Add stream"),v.qZA())}function A(e,t){1&e&&(v.TgZ(0,"h2",8),v._uU(1,"Update stream"),v.qZA())}function x(e,t){1&e&&(v.TgZ(0,"div"),v._uU(1,"\n              "),v.TgZ(2,"small",48),v._uU(3,"\n                This field cannot be longer than 30 characters.\n              "),v.qZA(),v._uU(4,"\n            "),v.qZA())}var S=function(){return{max:40}};function k(e,t){1&e&&(v.TgZ(0,"small",50),v._uU(1,"\n                This field cannot be longer than 40 characters.\n              "),v.qZA()),2&e&&v.Q6J("translateValues",v.DdM(1,S))}function C(e,t){if(1&e&&(v.TgZ(0,"div"),v._uU(1,"\n              "),v.YNc(2,k,2,2,"small",49),v._uU(3,"\n            "),v.qZA()),2&e){var n,a=v.oxw(2);v.xp6(2),v.Q6J("ngIf",null==(n=a.editForm.get("name"))||null==n.errors?null:n.errors.maxlength)}}function I(e,t){1&e&&(v.TgZ(0,"label",51),v._uU(1,"startDate *"),v.qZA())}function j(e,t){1&e&&(v.TgZ(0,"label",52),v._uU(1,"startDate"),v.qZA())}function M(e,t){1&e&&(v.TgZ(0,"label",53),v._uU(1,"endDate"),v.qZA())}function N(e,t){1&e&&(v.TgZ(0,"label",54),v._uU(1,"endDate *"),v.qZA())}var w=function(){return{max:500}};function F(e,t){1&e&&(v.TgZ(0,"small",50),v._uU(1,"\n                This field cannot be longer than 500 characters\n              "),v.qZA()),2&e&&v.Q6J("translateValues",v.DdM(1,w))}function D(e,t){if(1&e&&(v.TgZ(0,"div"),v._uU(1,"\n              "),v.YNc(2,F,2,2,"small",49),v._uU(3,"\n            "),v.qZA()),2&e){var n,a=v.oxw(2);v.xp6(2),v.Q6J("ngIf",null==(n=a.editForm.get("query"))||null==n.errors?null:n.errors.maxlength)}}function J(e,t){1&e&&(v.TgZ(0,"label",55),v._uU(1,"Topic *"),v.qZA())}function Q(e,t){1&e&&(v.TgZ(0,"label",56),v._uU(1,"Topic"),v.qZA())}function Y(e,t){1&e&&(v.TgZ(0,"label",57),v._uU(1," *"),v.qZA())}function L(e,t){1&e&&v._UZ(0,"label",58)}function O(e,t){1&e&&v._UZ(0,"input",59)}function B(e,t){if(1&e){var n=v.EpF();v.TgZ(0,"div"),v._uU(1,"\n          "),v._UZ(2,"jhi-alert-error"),v._uU(3,"\n       \n          "),v.TgZ(4,"div",9),v._uU(5,"\n            "),v.TgZ(6,"label",10),v._uU(7,"ID"),v.qZA(),v._uU(8,"\n            "),v._UZ(9,"input",11),v._uU(10,"\n          "),v.qZA(),v._uU(11,"\n\n        \n          "),v.TgZ(12,"div",9),v._uU(13,"\n            "),v._UZ(14,"label",12),v._uU(15,"\n            "),v._UZ(16,"input",13),v._uU(17,"\n            "),v._UZ(18,"span",14),v._uU(19,"\n            "),v.YNc(20,x,5,0,"div",5),v._uU(21,"\n            "),v.YNc(22,C,4,1,"div",5),v._uU(23,"\n          "),v.qZA(),v._uU(24,"\n         \n          \n          "),v.TgZ(25,"div",15),v._uU(26,"\n            "),v.TgZ(27,"label",16),v._uU(28,"Language *"),v.qZA(),v._uU(29,"\n              "),v.TgZ(30,"ng-multiselect-dropdown",17),v._uU(31,"\n                "),v.qZA(),v._uU(32,"\n              "),v.qZA(),v._uU(33,"\n              \n              "),v.TgZ(34,"div",15),v._uU(35,"\n                "),v.TgZ(36,"label",18),v._uU(37,"Country *"),v.qZA(),v._uU(38,"\n                  "),v.TgZ(39,"ng-multiselect-dropdown",19),v._uU(40,"\n                    "),v.qZA(),v._uU(41,"\n                  "),v.qZA(),v._uU(42,"\n                  \n            "),v.TgZ(43,"div",20),v._uU(44,"\n                      "),v.TgZ(45,"div",21),v._uU(46," \n                        "),v.YNc(47,I,2,0,"label",22),v._uU(48,"\n            "),v.YNc(49,j,2,0,"label",23),v._uU(50,"\n                        "),v.TgZ(51,"div",24),v._uU(52,"\n                          \n                            "),v._UZ(53,"input",25,26),v._uU(55,"\n                            "),v.TgZ(56,"div",27),v._uU(57,"\n                                "),v.TgZ(58,"button",28),v.NdJ("click",function(){return v.CHM(n),v.MAs(54).toggle()}),v._UZ(59,"i",29),v.qZA(),v._uU(60,"\n                            "),v.qZA(),v._uU(61,"\n                        "),v.qZA(),v._uU(62,"\n                      "),v.qZA(),v._uU(63,"\n                    "),v.TgZ(64,"div",21),v._uU(65," \n                      \n            "),v.YNc(66,M,2,0,"label",30),v._uU(67,"\n                      "),v.YNc(68,N,2,0,"label",31),v._uU(69,"\n                        "),v.TgZ(70,"div",24),v._uU(71,"\n                            "),v._UZ(72,"input",32,33),v._uU(74,"\n                            "),v.TgZ(75,"div",27),v._uU(76,"\n                                "),v.TgZ(77,"button",28),v.NdJ("click",function(){return v.CHM(n),v.MAs(73).toggle()}),v._UZ(78,"i",29),v.qZA(),v._uU(79,"\n                            "),v.qZA(),v._uU(80,"\n                        "),v.qZA(),v._uU(81,"\n                    "),v.qZA(),v._uU(82,"\n                    "),v.qZA(),v._uU(83,"\n\n          "),v.TgZ(84,"div",15),v._uU(85,"\n            "),v._UZ(86,"label",34),v._uU(87,"\n            "),v.TgZ(88,"input",35),v.NdJ("keypress",function(e){return v.CHM(n),v.oxw().checkNumberValue(e)})("bur",function(e){return v.CHM(n),v.oxw().checkNumberValue(e)}),v.qZA(),v._uU(89,"\n           \n          "),v.qZA(),v._uU(90,"\n\n          "),v.TgZ(91,"div",15),v._uU(92,"\n            "),v.TgZ(93,"label",36),v._uU(94,"Query"),v.qZA(),v._uU(95,"\n            "),v.TgZ(96,"textarea",37),v._uU(97,"            "),v.qZA(),v._uU(98,"\n            "),v.YNc(99,D,4,1,"div",5),v._uU(100,"\n          "),v.qZA(),v._uU(101,"\n\n         \n\n          "),v.TgZ(102,"div",15),v._uU(103,"\n            "),v.YNc(104,J,2,0,"label",38),v._uU(105,"\n            "),v.YNc(106,Q,2,0,"label",39),v._uU(107,"\n              "),v.TgZ(108,"ng-multiselect-dropdown",40),v._uU(109,"\n                "),v.qZA(),v._uU(110,"\n              "),v.qZA(),v._uU(111,"\n              \n\n\n          "),v.TgZ(112,"div",15),v._uU(113,"\n            "),v.YNc(114,Y,2,0,"label",41),v._uU(115,"\n            "),v.YNc(116,L,1,0,"label",42),v._uU(117,"\n          "),v.TgZ(118,"ng-multiselect-dropdown",43),v._uU(119,"\n            "),v.qZA(),v._uU(120,"\n          "),v.qZA(),v._uU(121,"\n          \n\n          "),v.TgZ(122,"div",44),v._uU(123,"\n            "),v.TgZ(124,"label",45),v._uU(125,"\n              "),v.YNc(126,O,1,0,"input",46),v._uU(127,"\n              "),v.TgZ(128,"span",47),v._uU(129,"Activated"),v.qZA(),v._uU(130,"\n            "),v.qZA(),v._uU(131,"\n          "),v.qZA(),v._uU(132,"\n        "),v.qZA()}if(2&e){var a=v.oxw();v.xp6(4),v.Q6J("hidden",!a.stream.id),v.xp6(8),v.Q6J("hidden",a.stream.id),v.xp6(8),v.Q6J("ngIf",a.streamStartWithNumber),v.xp6(2),v.Q6J("ngIf",a.editForm.get("name").invalid&&(a.editForm.get("name").dirty||a.editForm.get("name").touched)),v.xp6(8),v.Q6J("placeholder",a.getPlaceholder("streamManagement.select"))("settings",a.sNetworkSettings)("data",a.language),v.xp6(9),v.Q6J("placeholder",a.getPlaceholder("streamManagement.select"))("settings",a.sNetworkSettings)("data",a.countries),v.xp6(8),v.Q6J("ngIf",!a.requiredFechaIni),v.xp6(2),v.Q6J("ngIf",a.requiredFechaIni),v.xp6(17),v.Q6J("ngIf",a.requiredFechaFin),v.xp6(2),v.Q6J("ngIf",!a.requiredFechaFin),v.xp6(31),v.Q6J("ngIf",a.editForm.get("query").invalid&&(a.editForm.get("query").dirty||a.editForm.get("query").touched)),v.xp6(5),v.Q6J("ngIf",!a.requiredTopic),v.xp6(2),v.Q6J("ngIf",a.requiredTopic),v.xp6(2),v.Q6J("placeholder",a.getPlaceholder("streamManagement.select"))("settings",a.topicSettings)("data",a.topics),v.xp6(6),v.Q6J("ngIf",!a.requiredSocial),v.xp6(2),v.Q6J("ngIf",a.requiredSocial),v.xp6(2),v.Q6J("placeholder",a.getPlaceholder("streamManagement.select"))("settings",a.sNetworkSettings)("data",a.socials),v.xp6(8),v.Q6J("ngIf",!a.blockSome)}}function P(e,t){if(1&e){var n=v.EpF();v.TgZ(0,"div",60),v._uU(1,"\n          "),v.TgZ(2,"button",61),v.NdJ("click",function(){return v.CHM(n),v.oxw().previousState()}),v._uU(3,"\n            "),v._UZ(4,"fa-icon",62),v._uU(5,"\xa0"),v.TgZ(6,"span",63),v._uU(7,"Cancel"),v.qZA(),v._uU(8,"\n          "),v.qZA(),v._uU(9,"\n  \n          "),v.TgZ(10,"button",64),v._uU(11,"\n            "),v._UZ(12,"fa-icon",65),v._uU(13,"\xa0"),v.TgZ(14,"span",66),v._uU(15,"Save"),v.qZA(),v._uU(16,"\n          "),v.qZA(),v._uU(17,"\n        "),v.qZA()}if(2&e){var a=v.oxw();v.xp6(10),v.Q6J("disabled",a.editForm.invalid||a.isSaving)}}var R,H=((R=function(){function e(t,a,i,r,s){n(this,e),this.service=t,this.route=a,this.fb=i,this.activatedRoute=r,this.translateService=s,this.ass=[],this.language=[],this.countries=[],this.requiredSearchType=!1,this.requiredSocial=!1,this.requiredTopic=!1,this.requiredFechaIni=!1,this.requiredFechaFin=!1,this.blockSome=!1,this.admnistrando=!1,this.idCompany=0,this.streamStartWithNumber=!1,this.userSelected=void 0,this.topics=[],this.types=[{id:1,name:"Completa"},{id:2,name:"Parcial"}],this.socials=[],this.authorities=[],this.isSaving=!1,this.errorNameExists=!1,this.topicSettings={singleSelection:!0,idField:"id",textField:"name",selectAllText:"Seleccionar todos",unSelectAllText:"Quitar todos",allowSearchFilter:!0,searchPlaceholderText:"Buscar",enableCheckAll:!1,noDataAvailablePlaceholderText:this.translateService.instant("companyManagement.noData")},this.sNetworkSettings={singleSelection:!1,idField:"id",textField:"name",selectAllText:"Seleccionar todos",unSelectAllText:"Quitar todos",allowSearchFilter:!0,searchPlaceholderText:"Buscar",noDataAvailablePlaceholderText:this.translateService.instant("companyManagement.noData")},this.editForm=this.fb.group({id:[],query:["",[m.kI.required,m.kI.maxLength(500),m.kI.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],status:[],social:[],topic:[],languages:[],countries:[],maxRowCount:[],startDate:[],endDate:[],name:["",[m.kI.required,m.kI.maxLength(40)]]})}return i(e,[{key:"ngOnInit",value:function(){var e=this;this.route.data.subscribe(function(t){var n=t.stream;n?(e.stream=n,void 0===e.stream.id||(e.stream.active=!0,e.blockSome=!0),e.updateForm(n)):(e.stream=new h,e.stream.active=!0,e.activatedRoute.params.subscribe(function(t){t.company?(e.admnistrando=!0,e.idCompany=t.company):e.admnistrando=!1})),e.service.topicsList(e.idCompany).subscribe(function(t){e.topics=t},function(e){}),e.service.countriesList().subscribe(function(t){e.countries=t},function(e){}),e.service.languagesList().subscribe(function(t){e.language=t},function(e){}),e.service.socialNetworkList().subscribe(function(t){e.socials=t},function(e){})}),this.updateForm(this.stream)}},{key:"previousState",value:function(){window.history.back()}},{key:"save",value:function(){var e=this;this.streamStartWithNumber=!1,/^[0-9]+$/.test(this.editForm.get(["name"]).value[0])?this.streamStartWithNumber=!0:!this.validateList()||(this.errorNameExists=!1,this.isSaving=!0,this.updateStream(this.stream),void 0!==this.stream.id?this.service.update(this.stream).subscribe(function(){return e.onSaveSuccess()},function(t){return e.onSaveError(t)}):this.service.create(this.stream).subscribe(function(){return e.onSaveSuccess()},function(t){return e.onSaveError(t)}))}},{key:"updateForm",value:function(e){this.editForm.patchValue({id:e.id,status:e.active,query:e.query,topic:this.getObjectIDSTopics(e.topics),social:this.getObjectIDSTopics(e.socialNetworks),countries:this.getObjectIDSTopics(e.countries),languages:this.getObjectIDSTopics(e.languages),name:e.name,maxRowCount:e.maxRowCount,startDate:e.startDate,endDate:e.endDate})}},{key:"validateList",value:function(){var e=this.editForm.get(["startDate"]).value,t=this.editForm.get(["endDate"]).value,n=!0;return null!=e&&e.length>0?this.requiredFechaIni=!1:(this.requiredFechaIni=!0,n=!1),null!=t&&t.length>0?this.requiredFechaFin=!1:(this.requiredFechaFin=!0,n=!1),null!=this.editForm.get(["topic"]).value&&this.editForm.get(["topic"]).value.length>0?this.requiredTopic=!1:(this.requiredTopic=!0,n=!1),null!=this.editForm.get(["social"]).value&&this.editForm.get(["social"]).value.length>0?this.requiredSocial=!1:(this.requiredSocial=!0,n=!1),n}},{key:"getPlaceholder",value:function(e){return this.translateService.instant(e)}},{key:"updateStream",value:function(e){var t;e.active=this.editForm.get(["status"]).value,e.query=this.editForm.get(["query"]).value,e.socialNetworks=this.getObjectIDS(this.editForm.get(["social"]).value),e.topics=this.getObjectIDS(this.editForm.get(["topic"]).value),e.languages=this.getObjectIDS(this.editForm.get(["languages"]).value),e.countries=this.getObjectIDS(this.editForm.get(["countries"]).value),e.maxRowCount=this.editForm.get(["maxRowCount"]).value,e.name=this.editForm.get(["name"]).value,e.name=null===(t=e.name)||void 0===t?void 0:t.trim(),e.startDate=this.editForm.get(["startDate"]).value,e.endDate=this.editForm.get(["endDate"]).value,0!=this.idCompany&&(e.company=this.idCompany)}},{key:"getObjectIDS",value:function(e){var t=[];return e.forEach(function(e){t.push({id:e.id})}),t}},{key:"getObjectID",value:function(e){var t;return e.forEach(function(e){t=e.id}),t}},{key:"getObjectIDSTopics",value:function(e){var t=[];return null==e||e.forEach(function(e){t.push({id:e.id,name:e.name})}),t}},{key:"onSaveSuccess",value:function(){this.isSaving=!1,this.previousState()}},{key:"onSaveError",value:function(e){this.isSaving=!1,400===e.status&&e.error.type===g.kH&&(this.errorNameExists=!0)}},{key:"noWhitespaceValidator",value:function(e){return!(0===(e&&e.value&&e.value.toString()||"").trim().length)}},{key:"checkNumberValue",value:function(e){var t;return this.editForm.get(["maxRowCount"]).value>999999&&this.editForm.patchValue({maxRowCount:999999}),this.streamStartWithNumber=!1,this.editForm.get(["name"]),(t=e.charCode)>=48&&t<=57}}]),e}()).\u0275fac=function(e){return new(e||R)(v.Y36(U.J),v.Y36(s.gz),v.Y36(m.qu),v.Y36(s.gz),v.Y36(_.sK))},R.\u0275cmp=v.Xpm({type:R,selectors:[["jhi-stream-add"]],features:[v._Bn([{provide:p.DO,useClass:f.W},{provide:p.NG,useClass:f.k}])],decls:17,vars:5,consts:[[1,"row","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"formGroup","ngSubmit"],["id","myUserLabel","jhiTranslate","streamManagement.add-update.create",4,"ngIf"],["id","myUserLabel","jhiTranslate","streamManagement.add-update.update",4,"ngIf"],[4,"ngIf"],["style","margin-top:20px;",4,"ngIf"],["id","myUserLabel","jhiTranslate","streamManagement.add-update.create"],["id","myUserLabel","jhiTranslate","streamManagement.add-update.update"],[1,"form-group",3,"hidden"],["jhiTranslate","streamManagement.add-update.streamname"],["type","text","name","name","formControlName","name","readonly","",1,"form-control"],["jhiTranslate","streamManagement.add-update.streamname",1,"form-control-label"],["type","text","name","name","formControlName","name",1,"form-control"],["jhiTranslate","streamManagement.add-update.note",2,"font-size","10px"],[1,"form-group"],["jhiTranslate","streamManagement.language"],["formControlName","languages",3,"placeholder","settings","data"],["jhiTranslate","streamManagement.country"],["formControlName","countries",3,"placeholder","settings","data"],[1,"form-group","row"],[1,"col-md-6"],["jhiTranslate","streamManagement.startDate",4,"ngIf"],["style","color:red","jhiTranslate","streamManagement.fechainirequired",4,"ngIf"],[1,"input-group"],["placeholder","dd/mm/yyyy","name","dpIni","formControlName","startDate","ngbDatepicker","",1,"form-control"],["fechaIniButton","ngbDatepicker"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary","calendar",3,"click"],[1,"fa","fa-calendar"],["style","color:red","jhiTranslate","streamManagement.fechafinrequired",4,"ngIf"],["jhiTranslate","streamManagement.endDate",4,"ngIf"],["placeholder","dd/mm/yyyy","name","dpIni","formControlName","endDate","ngbDatepicker","",1,"form-control"],["fechaFinButton","ngbDatepicker"],["jhiTranslate","streamManagement.add-update.rowCount",1,"form-control-label"],["onCopy","return false","onDrag","return false","onDrop","return false","onPaste","return false","type","text","max","99","name","maxRowCount","formControlName","maxRowCount",1,"form-control",3,"keypress","bur"],["jhiTranslate","streamManagement.query",1,"form-control-label"],["type","text","name","query","formControlName","query",1,"form-control"],["jhiTranslate","streamManagement.topics",4,"ngIf"],["style","color:red","jhiTranslate","streamManagement.topicsrequired",4,"ngIf"],["formControlName","topic",3,"placeholder","settings","data"],["jhiTranslate","streamManagement.social",4,"ngIf"],["style","color:red","jhiTranslate","streamManagement.socialrequired",4,"ngIf"],["formControlName","social",3,"placeholder","settings","data"],[1,"form-check"],["for","status",1,"form-check-label"],["class","form-check-input","type","checkbox","id","status","name","status","formControlName","status",4,"ngIf"],["jhiTranslate","streamManagement.active"],["jhiTranslate","streamManagement.error.numberOnID",1,"form-text","text-danger"],["class","form-text text-danger","jhiTranslate","entity.validation.maxlength",3,"translateValues",4,"ngIf"],["jhiTranslate","entity.validation.maxlength",1,"form-text","text-danger",3,"translateValues"],["jhiTranslate","streamManagement.startDate"],["jhiTranslate","streamManagement.fechainirequired",2,"color","red"],["jhiTranslate","streamManagement.fechafinrequired",2,"color","red"],["jhiTranslate","streamManagement.endDate"],["jhiTranslate","streamManagement.topics"],["jhiTranslate","streamManagement.topicsrequired",2,"color","red"],["jhiTranslate","streamManagement.social"],["jhiTranslate","streamManagement.socialrequired",2,"color","red"],["type","checkbox","id","status","name","status","formControlName","status",1,"form-check-input"],[2,"margin-top","20px"],["type","button",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["type","submit",1,"btn","btn-primary",3,"disabled"],["icon","save"],["jhiTranslate","entity.action.save"]],template:function(e,t){1&e&&(v.TgZ(0,"div",0),v._uU(1,"\n    "),v.TgZ(2,"div",1),v._uU(3,"\n      "),v.TgZ(4,"form",2),v.NdJ("ngSubmit",function(){return t.save()}),v._uU(5,"\n        "),v.YNc(6,q,2,0,"h2",3),v._uU(7,"\n        "),v.YNc(8,A,2,0,"h2",4),v._uU(9,"\n  \n        "),v.YNc(10,B,133,26,"div",5),v._uU(11,"\n  \n        "),v.YNc(12,P,18,1,"div",6),v._uU(13,"\n      "),v.qZA(),v._uU(14,"\n    "),v.qZA(),v._uU(15,"\n  "),v.qZA(),v._uU(16,"\n  ")),2&e&&(v.xp6(4),v.Q6J("formGroup",t.editForm),v.xp6(2),v.Q6J("ngIf",!t.blockSome),v.xp6(2),v.Q6J("ngIf",t.blockSome),v.xp6(2),v.Q6J("ngIf",t.stream),v.xp6(2),v.Q6J("ngIf",t.stream))},directives:[m._Y,m.JL,m.sg,Z.O5,b.P,y.A,m.Fj,m.JJ,m.u,c.OP,p.J4,m.Wl,T.BN],styles:[".form-control[readonly][_ngcontent-%COMP%]{background-color:#d3d3d3;opacity:1}"]}),R),E=r(4991),z=r(2734),$=r(6905),V=r(8467),W=r(1066),G=r(6059),K=r(9044),X=r(4150),ee=function(){return["/stream/stream-add"]};function te(e,t){1&e&&(v.TgZ(0,"button",8),v._uU(1,"\n          "),v._UZ(2,"fa-icon",9),v._uU(3," "),v.TgZ(4,"span",10),v._uU(5,"Create a new Stream"),v.qZA(),v._uU(6,"\n        "),v.qZA()),2&e&&v.Q6J("routerLink",v.DdM(1,ee))}var ne=function(e){return["/stream/stream-add",e]};function ae(e,t){if(1&e&&(v.TgZ(0,"button",8),v._uU(1,"\n          "),v._UZ(2,"fa-icon",9),v._uU(3," "),v.TgZ(4,"span",10),v._uU(5,"Create a new Stream"),v.qZA(),v._uU(6,"\n        "),v.qZA()),2&e){var n=v.oxw();v.Q6J("routerLink",v.VKq(1,ne,n.idCompany))}}function ie(e,t){if(1&e){var n=v.EpF();v.TgZ(0,"button",37),v.NdJ("click",function(){v.CHM(n);var e=v.oxw().$implicit;return v.oxw(3).setActive(e,!0)}),v._uU(1,"\n                Deactivated\n              "),v.qZA()}}function re(e,t){if(1&e){var n=v.EpF();v.TgZ(0,"button",38),v.NdJ("click",function(){v.CHM(n);var e=v.oxw().$implicit;return v.oxw(3).setActive(e,!1)}),v._uU(1,"\n              "),v._uU(2,"\n                Activated\n              "),v.qZA()}}function se(e,t){if(1&e){var n=v.EpF();v.TgZ(0,"tr",29),v.NdJ("dblclick",function(){var e=v.CHM(n).$implicit;return v.oxw(3).doubleClick(e)}),v._uU(1,"\n            "),v.TgZ(2,"td"),v._uU(3,"\n              "),v.TgZ(4,"a"),v._uU(5),v.qZA(),v._uU(6,"\n            "),v.qZA(),v._uU(7,"\n            "),v.TgZ(8,"td"),v._uU(9),v.ALo(10,"slice"),v.qZA(),v._uU(11,"\n            "),v.TgZ(12,"td"),v._uU(13,"\n              "),v.TgZ(14,"a"),v._uU(15),v.qZA(),v._uU(16,"\n            "),v.qZA(),v._uU(17,"\n            "),v.TgZ(18,"td"),v._uU(19,"\n              "),v.YNc(20,ie,2,0,"button",30),v._uU(21,"\n              "),v.YNc(22,re,3,0,"button",31),v._uU(23,"\n            "),v.qZA(),v._uU(24,"\n            "),v.TgZ(25,"td"),v._uU(26),v.ALo(27,"date"),v.qZA(),v._uU(28,"\n            "),v.TgZ(29,"td"),v._uU(30),v.qZA(),v._uU(31,"\n            "),v.TgZ(32,"td"),v._uU(33),v.ALo(34,"date"),v.qZA(),v._uU(35,"\n            "),v.TgZ(36,"td",32),v._uU(37,"\n              "),v.TgZ(38,"div",33),v._uU(39,"\n \n                "),v.TgZ(40,"button",34),v.NdJ("click",function(){var e=v.CHM(n).$implicit;return v.oxw(3).deleteStream(e)}),v._uU(41,"\n                  "),v._UZ(42,"fa-icon",35),v._uU(43,"\n                  "),v.TgZ(44,"span",36),v._uU(45,"Delete"),v.qZA(),v._uU(46,"\n                "),v.qZA(),v._uU(47,"\n              "),v.qZA(),v._uU(48,"\n            "),v.qZA(),v._uU(49,"\n          "),v.qZA()}if(2&e){var a=t.$implicit;v.xp6(5),v.Oqu(a.idStream),v.xp6(4),v.hij("   ",null==a.query?"":a.query.length>100?v.Dn7(10,8,a.query,0,90)+"..":a.query,""),v.xp6(6),v.Oqu(null==a.maxRowCount?"Sin L\xedmite":a.maxRowCount),v.xp6(5),v.Q6J("ngIf",!a.active),v.xp6(2),v.Q6J("ngIf",a.active),v.xp6(4),v.Oqu(v.xi3(27,12,a.createdDate,"dd/MM/yy HH:mm")),v.xp6(4),v.Oqu(a.lastModifiedBy),v.xp6(3),v.Oqu(v.xi3(34,15,a.lastModifiedDate,"dd/MM/yy HH:mm"))}}function oe(e,t){if(1&e&&(v.TgZ(0,"tbody"),v._uU(1,"\n          "),v.YNc(2,se,50,18,"tr",28),v._uU(3,"\n        "),v.qZA()),2&e){var n=v.oxw(2);v.xp6(2),v.Q6J("ngForOf",n.streams)("ngForTrackBy",n.trackIdentity)}}function ue(e,t){if(1&e){var n=v.EpF();v.TgZ(0,"div",11),v._uU(1,"\n      "),v.TgZ(2,"table",12),v._uU(3,"\n        "),v.TgZ(4,"thead"),v._uU(5,"\n          "),v.TgZ(6,"tr",13),v.NdJ("predicateChange",function(e){return v.CHM(n),v.oxw().predicate=e})("ascendingChange",function(e){return v.CHM(n),v.oxw().ascending=e})("sortChange",function(){return v.CHM(n),v.oxw().transition()}),v._uU(7,"\n            "),v.TgZ(8,"th",14),v.TgZ(9,"span",15),v._uU(10,"ID"),v.qZA(),v._uU(11," "),v._UZ(12,"fa-icon",16),v.qZA(),v._uU(13,"\n            "),v.TgZ(14,"th",17),v.TgZ(15,"span",18),v._uU(16,"Query"),v.qZA(),v._uU(17," "),v.qZA(),v._uU(18,"\n            "),v.TgZ(19,"th",17),v.TgZ(20,"span",19),v._uU(21,"Max Result"),v.qZA(),v._uU(22," "),v.qZA(),v._uU(23,"\n          \n            "),v.TgZ(24,"th",20),v._uU(25," "),v.TgZ(26,"span",21),v._uU(27,"Status"),v.qZA(),v._UZ(28,"fa-icon",16),v._uU(29," "),v.qZA(),v._uU(30,"\n            \n            "),v.TgZ(31,"th",22),v._uU(32,"\n              "),v.TgZ(33,"span",23),v._uU(34,"Created Date"),v.qZA(),v._uU(35," "),v._UZ(36,"fa-icon",16),v._uU(37,"\n            "),v.qZA(),v._uU(38,"\n            "),v.TgZ(39,"th",24),v._uU(40,"\n              "),v.TgZ(41,"span",25),v._uU(42,"Last Modified By"),v.qZA(),v._uU(43," "),v._UZ(44,"fa-icon",16),v._uU(45,"\n            "),v.qZA(),v._uU(46,"\n            "),v.TgZ(47,"th",26),v._uU(48,"\n              "),v.TgZ(49,"span",27),v._uU(50,"Last Modified Date"),v.qZA(),v._uU(51," "),v._UZ(52,"fa-icon",16),v._uU(53,"\n            "),v.qZA(),v._uU(54,"\n            \n            "),v._UZ(55,"th",17),v._uU(56,"\n          "),v.qZA(),v._uU(57,"\n        "),v.qZA(),v._uU(58,"\n        "),v.YNc(59,oe,4,2,"tbody",7),v._uU(60,"\n      "),v.qZA(),v._uU(61,"\n    "),v.qZA()}if(2&e){var a=v.oxw();v.xp6(6),v.Q6J("predicate",a.predicate)("ascending",a.ascending),v.xp6(53),v.Q6J("ngIf",a.streams)}}var ce=function(e,t,n){return{page:e,totalItems:t,itemsPerPage:n}};function le(e,t){if(1&e){var n=v.EpF();v.TgZ(0,"div"),v._uU(1,"\n      "),v.TgZ(2,"div",39),v._uU(3,"\n        "),v._UZ(4,"jhi-item-count",40),v._uU(5,"\n      "),v.qZA(),v._uU(6,"\n  \n      "),v.TgZ(7,"div",39),v._uU(8,"\n        "),v.TgZ(9,"ngb-pagination",41),v.NdJ("pageChange",function(e){return v.CHM(n),v.oxw().page=e})("pageChange",function(){return v.CHM(n),v.oxw().transition()}),v.qZA(),v._uU(10,"\n      "),v.qZA(),v._uU(11,"\n    "),v.qZA()}if(2&e){var a=v.oxw();v.xp6(4),v.Q6J("params",v.kEZ(7,ce,a.page,a.totalItems,a.itemsPerPage)),v.xp6(5),v.Q6J("collectionSize",a.totalItems)("page",a.page)("pageSize",a.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}var de=function(){var t=function(){function t(e,a,i,r,s,o){n(this,t),this.StreamService=e,this.accountService=a,this.activatedRoute=i,this.router=r,this.modalService=s,this.translate=o,this.currentAccount=null,this.streams=null,this.isLoading=!1,this.totalItems=0,this.itemsPerPage=E.gK,this.admnistrando=!1,this.idCompany=0}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.activatedRoute.params.subscribe(function(t){t.company?(e.admnistrando=!0,e.idCompany=t.company):e.admnistrando=!1}),this.accountService.identity().subscribe(function(t){return e.currentAccount=t}),this.handleNavigation()}},{key:"setActive",value:function(e,t){var n=this;t||(e.idUsuario=void 0),this.StreamService.update(Object.assign(Object.assign({},e),{active:t})).subscribe(function(){return n.loadAll()})}},{key:"trackIdentity",value:function(e,t){return t.id}},{key:"deleteStream",value:function(e){var t=this,n=this.modalService.open(z.v,{size:"lg",backdrop:"static"});n.componentInstance.title=this.translate.instant("global.genericmodal.title.trashStream"),n.componentInstance.question=this.translate.instant("global.genericmodal.question.trashStream",{id:e.idStream}),n.closed.subscribe(function(n){"true"===n&&t.StreamService.delete(e.id?e.id:0).subscribe(function(){return t.loadAll()})})}},{key:"loadAll",value:function(){var e=this;this.isLoading=!0,this.StreamService.query({page:this.page-1,size:this.itemsPerPage,sort:this.sort(),idCompany:this.idCompany}).subscribe(function(t){e.isLoading=!1,e.onSuccess(t.body,t.headers)},function(){return e.isLoading=!1})}},{key:"doubleClick",value:function(e){this.router.navigate(["/stream/stream-add/"+e.id+"/edit"])}},{key:"transition",value:function(){this.router.navigate(["./stream-management/"+this.idCompany+"/management"],{relativeTo:this.activatedRoute.parent,queryParams:{page:this.page,sort:"".concat(this.predicate,",").concat(this.ascending?E.aW:E.jo)}})}},{key:"handleNavigation",value:function(){var t=this;(0,$.aj)([this.activatedRoute.data,this.activatedRoute.queryParamMap]).subscribe(function(n){var a,i=e(n,2),r=i[0],s=i[1],o=s.get("page");t.page=+(null!=o?o:1);var u=(null!==(a=s.get(E._l))&&void 0!==a?a:r.defaultSort).split(",");t.predicate=u[0],t.ascending=u[1]===E.aW,t.loadAll()})}},{key:"sort",value:function(){var e=["".concat(this.predicate,",").concat(this.ascending?E.aW:E.jo)];return"id"!==this.predicate&&e.push("id"),e}},{key:"onSuccess",value:function(e,t){this.totalItems=Number(t.get("X-Total-Count")),this.streams=e}}]),t}();return t.\u0275fac=function(e){return new(e||t)(v.Y36(U.J),v.Y36(V.B),v.Y36(s.gz),v.Y36(s.F0),v.Y36(p.FF),v.Y36(_.sK))},t.\u0275cmp=v.Xpm({type:t,selectors:[["jhi-stream-manager"]],decls:32,vars:6,consts:[["id","stream-management-page-heading","jhiTranslate","streamManagement.home.title","data-cy","streamManagementPageHeading",1,"mdi","mdi-nfc"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","mr-2",3,"disabled","click"],["icon","sync",3,"spin"],["jhiTranslate","streamManagement.home.refreshListLabel"],["class","btn btn-primary jh-create-entity",3,"routerLink",4,"ngIf"],["class","table-responsive",4,"ngIf"],[4,"ngIf"],[1,"btn","btn-primary","jh-create-entity",3,"routerLink"],["icon","plus"],["jhiTranslate","streamManagement.home.createLabel"],[1,"table-responsive"],["aria-describedby","stream-management-page-heading",1,"table","table-hover","cursor-grab-table","table-striped"],["jhiSort","",3,"predicate","ascending","predicateChange","ascendingChange","sortChange"],["scope","col","jhiSortBy","id"],["jhiTranslate","global.field.id"],["icon","sort"],["scope","col"],["jhiTranslate","streamManagement.table.query"],["jhiTranslate","streamManagement.table.maxValue"],["scope","col","jhiSortBy","active"],["jhiTranslate","streamManagement.status"],["scope","col","jhiSortBy","createdDate"],["jhiTranslate","streamManagement.createdDate"],["scope","col","jhiSortBy","lastModifiedBy"],["jhiTranslate","streamManagement.lastModifiedBy"],["scope","col","jhiSortBy","lastModifiedDate"],["jhiTranslate","streamManagement.lastModifiedDate"],[3,"dblclick",4,"ngFor","ngForOf","ngForTrackBy"],[3,"dblclick"],["class","btn btn-danger btn-sm","jhiTranslate","streamManagement.deactivated",3,"click",4,"ngIf"],["class","btn btn-success btn-sm","jhiTranslate","streamManagement.active",3,"click",4,"ngIf"],[1,"text-right"],[1,"btn-group"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"],["icon","trash"],["jhiTranslate","entity.action.trash",1,"d-none","d-md-inline"],["jhiTranslate","streamManagement.deactivated",1,"btn","btn-danger","btn-sm",3,"click"],["jhiTranslate","streamManagement.active",1,"btn","btn-success","btn-sm",3,"click"],[1,"row","justify-content-center"],[3,"params"],[3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"]],template:function(e,t){1&e&&(v.TgZ(0,"div"),v._uU(1,"\n    "),v.TgZ(2,"h2"),v._uU(3,"\n      "),v.TgZ(4,"span",0),v._uU(5,"Companies"),v.qZA(),v._uU(6,"\n  \n      "),v.TgZ(7,"div",1),v._uU(8,"\n        "),v.TgZ(9,"button",2),v.NdJ("click",function(){return t.loadAll()}),v._uU(10,"\n          "),v._UZ(11,"fa-icon",3),v._uU(12,"\n          "),v.TgZ(13,"span",4),v._uU(14,"Refresh List"),v.qZA(),v._uU(15,"\n        "),v.qZA(),v._uU(16,"\n        "),v.YNc(17,te,7,2,"button",5),v._uU(18,"\n\n        "),v.YNc(19,ae,7,3,"button",5),v._uU(20,"\n      "),v.qZA(),v._uU(21,"\n    "),v.qZA(),v._uU(22,"\n  \n    "),v._UZ(23,"jhi-alert-error"),v._uU(24,"\n  \n    "),v._UZ(25,"jhi-alert"),v._uU(26,"\n  \n    "),v.YNc(27,ue,62,3,"div",6),v._uU(28,"\n  \n    "),v.YNc(29,le,12,11,"div",7),v._uU(30,"\n  "),v.qZA(),v._uU(31,"\n  ")),2&e&&(v.xp6(9),v.Q6J("disabled",t.isLoading),v.xp6(2),v.Q6J("spin",t.isLoading),v.xp6(6),v.Q6J("ngIf",!t.admnistrando),v.xp6(2),v.Q6J("ngIf",t.admnistrando),v.xp6(8),v.Q6J("ngIf",t.streams),v.xp6(2),v.Q6J("ngIf",t.streams))},directives:[b.P,T.BN,Z.O5,y.A,W.w,s.rH,G.b,K.T,Z.sg,X.N,p.N9],pipes:[Z.OU,Z.uU],styles:[""]}),t}(),me=[{path:"",children:[{path:"stream-management",component:de,data:{pageTitle:"global.menu.stream.management",defaultSort:"id,asc"},canActivate:[l.Z]},{path:"stream-management/:company/management",component:de,data:{pageTitle:"global.menu.stream.management",defaultSort:"id,asc"},canActivate:[l.Z]},{path:"stream-add/:stream/edit",component:H,resolve:{stream:function(){var e=function(){function e(t){n(this,e),this.service=t}return i(e,[{key:"resolve",value:function(e){var t=e.params.stream;return t?this.service.find(t):(0,d.of)(new h)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(v.LFG(U.J))},e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}},{path:"stream-add",component:H,data:{pageTitle:"global.menu.stream.add"},canActivate:[l.Z]},{path:"stream-add/:company",component:H,data:{pageTitle:"global.menu.stream.add"},canActivate:[l.Z]}]}],ge=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=v.oAB({type:e}),e.\u0275inj=v.cJS({imports:[[u.m,s.Bz.forChild(me),o.A0,c.ZQ]]}),e}()}}])}();