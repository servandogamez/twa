!function(){"use strict";function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var i,a,o=[],r=!0,s=!1;try{for(e=e.call(t);!(r=(i=e.next()).done)&&(o.push(i.value),!n||o.length!==n);r=!0);}catch(c){s=!0,a=c}finally{try{r||null==e.return||e.return()}finally{if(s)throw a}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}(self.webpackChunkcore=self.webpackChunkcore||[]).push([[901],{4991:function(t,n,e){e.d(n,{gK:function(){return i},aW:function(){return a},jo:function(){return o},_l:function(){return r}});var i=10,a="asc",o="desc",r="sort"},9044:function(t,n,i){i.d(n,{T:function(){return h}});var o,r=i(6006),s=i(7194),c=i(4477),u=i(8036),l=i(2741),d=i(6059),h=((o=function(){function t(n){var i=this;e(this,t),this.sort=n,this.sortIcon=u.CmM,this.sortAscIcon=u.foy,this.sortDescIcon=u.u9C,this.destroy$=new r.xQ,n.predicateChange.pipe((0,s.R)(this.destroy$)).subscribe(function(){return i.updateIconDefinition()}),n.ascendingChange.pipe((0,s.R)(this.destroy$)).subscribe(function(){return i.updateIconDefinition()})}return a(t,[{key:"onClick",value:function(){this.iconComponent&&this.sort.sort(this.jhiSortBy)}},{key:"ngAfterContentInit",value:function(){this.updateIconDefinition()}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}},{key:"updateIconDefinition",value:function(){if(this.iconComponent){var t=this.sortIcon;this.sort.predicate===this.jhiSortBy&&(t=this.sort.ascending?this.sortAscIcon:this.sortDescIcon),this.iconComponent.icon=t.iconName,this.iconComponent.render()}}}]),t}()).\u0275fac=function(t){return new(t||o)(l.Y36(d.b,1))},o.\u0275dir=l.lG2({type:o,selectors:[["","jhiSortBy",""]],contentQueries:function(t,n,e){var i;1&t&&l.Suo(e,c.BN,5),2&t&&l.iGM(i=l.CRH())&&(n.iconComponent=i.first)},hostBindings:function(t,n){1&t&&l.NdJ("click",function(){return n.onClick()})},inputs:{jhiSortBy:"jhiSortBy"}}),o)},6059:function(t,n,i){i.d(n,{b:function(){return s}});var o,r=i(2741),s=((o=function(){function t(){e(this,t),this.predicateChange=new r.vpe,this.ascendingChange=new r.vpe,this.sortChange=new r.vpe}return a(t,[{key:"predicate",get:function(){return this._predicate},set:function(t){this._predicate=t,this.predicateChange.emit(t)}},{key:"ascending",get:function(){return this._ascending},set:function(t){this._ascending=t,this.ascendingChange.emit(t)}},{key:"sort",value:function(t){this.ascending=t!==this.predicate||!this.ascending,this.predicate=t,this.predicateChange.emit(t),this.ascendingChange.emit(this.ascending),this.sortChange.emit({predicate:this.predicate,ascending:this.ascending})}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275dir=r.lG2({type:o,selectors:[["","jhiSort",""]],inputs:{predicate:"predicate",ascending:"ascending"},outputs:{predicateChange:"predicateChange",ascendingChange:"ascendingChange",sortChange:"sortChange"}}),o)},7901:function(n,i,o){o.r(i),o.d(i,{SocialNetworkModule:function(){return at}});var r,s=o(8335),c=o(1382),u=o(9375),l=o(267),d=o(3324),h=o(5113),g=function t(n,i,a,o,r,s,c,u,l){e(this,t),this.id=n,this.name=i,this.active=a,this.url=o,this.edit=r,this.createdBy=s,this.createdDate=c,this.lastModifiedBy=u,this.lastModifiedDate=l},f=o(2741),p=o(7354),m=o(1887),v=o(8986),U=((r=function(){function t(n,i){e(this,t),this.http=n,this.applicationConfigService=i,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/catalog/socialnetwork")}return a(t,[{key:"create",value:function(t){return this.http.post(this.resourceUrl,t)}},{key:"update",value:function(t){return this.http.put(this.applicationConfigService.getEndpointFor("api/catalog/socialnetwork/update"),t)}},{key:"find",value:function(t){return this.http.get("".concat(this.resourceUrl,"/").concat(t))}},{key:"query",value:function(t){var n=(0,p.b)(t);return this.http.get(this.applicationConfigService.getEndpointFor("api/catalog/socialnetwork/page"),{params:n,observe:"response"})}},{key:"delete",value:function(t){return this.http.delete("".concat(this.resourceUrl,"/").concat(t))}}]),t}()).\u0275fac=function(t){return new(t||r)(f.LFG(m.eN),f.LFG(v.y))},r.\u0275prov=f.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r),_=o(1633),y=o(222),Z=o(4243),b=o(6662),k=o(4477);function A(t,n){1&t&&(f.TgZ(0,"h2",7),f._uU(1,"Add social"),f.qZA())}function T(t,n){1&t&&(f.TgZ(0,"h2",8),f._uU(1,"Update social"),f.qZA())}var w=function(){return{max:100}};function N(t,n){1&t&&(f.TgZ(0,"small",19),f._uU(1,"\n                This field cannot be longer than 100 characters.\n              "),f.qZA()),2&t&&f.Q6J("translateValues",f.DdM(1,w))}function S(t,n){if(1&t&&(f.TgZ(0,"div"),f._uU(1,"\n              "),f.YNc(2,N,2,2,"small",18),f._uU(3,"\n            "),f.qZA()),2&t){var e,i=f.oxw(2);f.xp6(2),f.Q6J("ngIf",null==(e=i.editForm.get("name"))||null==e.errors?null:e.errors.maxlength)}}function q(t,n){1&t&&(f.TgZ(0,"small",19),f._uU(1,"\n                This field cannot be longer than 100 characters.\n              "),f.qZA()),2&t&&f.Q6J("translateValues",f.DdM(1,w))}function x(t,n){if(1&t&&(f.TgZ(0,"div"),f._uU(1,"\n              "),f.YNc(2,q,2,2,"small",18),f._uU(3,"\n            "),f.qZA()),2&t){var e,i=f.oxw(2);f.xp6(2),f.Q6J("ngIf",null==(e=i.editForm.get("url"))||null==e.errors?null:e.errors.maxlength)}}function j(t,n){if(1&t&&(f.TgZ(0,"div"),f._uU(1,"\n          "),f._UZ(2,"jhi-alert-error"),f._uU(3,"\n  \n  \n         \n          "),f.TgZ(4,"div",9),f._uU(5,"\n            "),f.TgZ(6,"label",10),f._uU(7,"Name"),f.qZA(),f._uU(8,"\n            "),f._UZ(9,"input",11),f._uU(10,"\n  \n            "),f.YNc(11,S,4,1,"div",5),f._uU(12,"\n          "),f.qZA(),f._uU(13,"\n\n          "),f.TgZ(14,"div",9),f._uU(15,"\n            "),f.TgZ(16,"label",12),f._uU(17,"URL"),f.qZA(),f._uU(18,"\n            "),f._UZ(19,"input",13),f._uU(20,"\n  \n            "),f.YNc(21,x,4,1,"div",5),f._uU(22,"\n          "),f.qZA(),f._uU(23,"\n          "),f.TgZ(24,"div",14),f._uU(25,"\n            "),f.TgZ(26,"label",15),f._uU(27,"\n              "),f._UZ(28,"input",16),f._uU(29,"\n              "),f.TgZ(30,"span",17),f._uU(31,"Activated"),f.qZA(),f._uU(32,"\n            "),f.qZA(),f._uU(33,"\n          "),f.qZA(),f._uU(34,"\n          \n        "),f.qZA()),2&t){var e=f.oxw();f.xp6(11),f.Q6J("ngIf",e.editForm.get("name").invalid&&(e.editForm.get("name").dirty||e.editForm.get("name").touched)),f.xp6(10),f.Q6J("ngIf",e.editForm.get("url").invalid&&(e.editForm.get("url").dirty||e.editForm.get("url").touched))}}function C(t,n){if(1&t){var e=f.EpF();f.TgZ(0,"div",20),f._uU(1,"\n          "),f.TgZ(2,"button",21),f.NdJ("click",function(){return f.CHM(e),f.oxw().previousState()}),f._uU(3,"\n            "),f._UZ(4,"fa-icon",22),f._uU(5,"\xa0"),f.TgZ(6,"span",23),f._uU(7,"Cancel"),f.qZA(),f._uU(8,"\n          "),f.qZA(),f._uU(9,"\n  \n          "),f.TgZ(10,"button",24),f._uU(11,"\n            "),f._UZ(12,"fa-icon",25),f._uU(13,"\xa0"),f.TgZ(14,"span",26),f._uU(15,"Save"),f.qZA(),f._uU(16,"\n          "),f.qZA(),f._uU(17,"\n        "),f.qZA()}if(2&t){var i=f.oxw();f.xp6(10),f.Q6J("disabled",i.editForm.invalid||i.isSaving)}}var M=function(){var t=function(){function t(n,i,a,o){e(this,t),this.service=n,this.route=i,this.fb=a,this.translateService=o,this.blockSome=!1,this.authorities=[],this.isSaving=!1,this.companies=[],this.errorNameExists=!1,this.editForm=this.fb.group({id:[],name:["",[d.kI.required,d.kI.maxLength(150),d.kI.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],status:[],url:[""]})}return a(t,[{key:"ngOnInit",value:function(){var t=this;this.route.data.subscribe(function(n){var e=n.social;e?(t.social=e,void 0===t.social.id||(t.blockSome=!0),t.updateForm(e)):t.social=new g}),this.updateForm(this.social)}},{key:"previousState",value:function(){window.history.back()}},{key:"getPlaceholder",value:function(t){return this.translateService.instant(t)}},{key:"save",value:function(){var t=this;this.errorNameExists=!1,this.isSaving=!0,this.updateSocial(this.social),void 0!==this.social.id?this.service.update(this.social).subscribe(function(){return t.onSaveSuccess()},function(n){return t.onSaveError(n)}):this.service.create(this.social).subscribe(function(){return t.onSaveSuccess()},function(n){return t.onSaveError(n)})}},{key:"updateForm",value:function(t){this.editForm.patchValue({id:t.id,name:t.name,status:t.active,url:t.url})}},{key:"updateSocial",value:function(t){t.name=this.editForm.get(["name"]).value.trim(),t.active=this.editForm.get(["status"]).value,t.url=this.editForm.get(["url"]).value}},{key:"onSaveSuccess",value:function(){this.isSaving=!1,this.previousState()}},{key:"onSaveError",value:function(t){this.isSaving=!1,400===t.status&&t.error.type===h.kH&&(this.errorNameExists=!0)}},{key:"noWhitespaceValidator",value:function(t){return!(0===(t&&t.value&&t.value.toString()||"").trim().length)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(f.Y36(U),f.Y36(s.gz),f.Y36(d.qu),f.Y36(_.sK))},t.\u0275cmp=f.Xpm({type:t,selectors:[["jhi-social-network-add"]],decls:17,vars:5,consts:[[1,"row","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"formGroup","ngSubmit"],["id","myUserLabel","jhiTranslate","socialNetworkManagement.add-update.create",4,"ngIf"],["id","myUserLabel","jhiTranslate","socialNetworkManagement.add-update.update",4,"ngIf"],[4,"ngIf"],["style","margin-top:20px;",4,"ngIf"],["id","myUserLabel","jhiTranslate","socialNetworkManagement.add-update.create"],["id","myUserLabel","jhiTranslate","socialNetworkManagement.add-update.update"],[1,"form-group"],["jhiTranslate","socialNetworkManagement.add-update.name",1,"form-control-label"],["type","text","name","name","formControlName","name",1,"form-control"],["jhiTranslate","socialNetworkManagement.add-update.url",1,"form-control-label"],["type","text","name","url","formControlName","url",1,"form-control"],[1,"form-check",2,"margin-bottom","10px"],["for","status",1,"form-check-label"],["type","checkbox","id","status","name","status","formControlName","status",1,"form-check-input"],["jhiTranslate","socialNetworkManagement.active"],["class","form-text text-danger","jhiTranslate","entity.validation.maxlength",3,"translateValues",4,"ngIf"],["jhiTranslate","entity.validation.maxlength",1,"form-text","text-danger",3,"translateValues"],[2,"margin-top","20px"],["type","button",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["type","submit",1,"btn","btn-primary",3,"disabled"],["icon","save"],["jhiTranslate","entity.action.save"]],template:function(t,n){1&t&&(f.TgZ(0,"div",0),f._uU(1,"\n    "),f.TgZ(2,"div",1),f._uU(3,"\n      "),f.TgZ(4,"form",2),f.NdJ("ngSubmit",function(){return n.save()}),f._uU(5,"\n        "),f.YNc(6,A,2,0,"h2",3),f._uU(7,"\n        "),f.YNc(8,T,2,0,"h2",4),f._uU(9,"\n  \n        "),f.YNc(10,j,35,2,"div",5),f._uU(11,"\n  \n   \n\n        "),f.YNc(12,C,18,1,"div",6),f._uU(13,"\n      "),f.qZA(),f._uU(14,"\n    "),f.qZA(),f._uU(15,"\n  "),f.qZA(),f._uU(16,"\n  ")),2&t&&(f.xp6(4),f.Q6J("formGroup",n.editForm),f.xp6(2),f.Q6J("ngIf",!n.blockSome),f.xp6(2),f.Q6J("ngIf",n.blockSome),f.xp6(2),f.Q6J("ngIf",n.social),f.xp6(2),f.Q6J("ngIf",n.social))},directives:[d._Y,d.JL,d.sg,y.O5,Z.P,b.A,d.Fj,d.JJ,d.u,d.Wl,k.BN],styles:[""]}),t}(),I=o(4991),J=o(2734),F=o(6905),Y=o(8467),L=o(7390),Q=o(4851),B=o(1066),D=o(6059),H=o(9044),E=o(4150),O=function(){return["/social-network/social-add"]};function P(t,n){1&t&&(f.TgZ(0,"button",8),f._uU(1,"\n          "),f._UZ(2,"fa-icon",9),f._uU(3," "),f.TgZ(4,"span",10),f._uU(5,"Create a new Company"),f.qZA(),f._uU(6,"\n        "),f.qZA()),2&t&&f.Q6J("routerLink",f.DdM(1,O))}function z(t,n){1&t&&(f.TgZ(0,"th",25),f._uU(1,"\n              "),f.TgZ(2,"span",26),f._uU(3,"Created Date"),f.qZA(),f._uU(4," "),f._UZ(5,"fa-icon",16),f._uU(6,"\n            "),f.qZA())}function R(t,n){1&t&&(f.TgZ(0,"th",27),f._uU(1,"\n              "),f.TgZ(2,"span",28),f._uU(3,"Last Modified By"),f.qZA(),f._uU(4," "),f._UZ(5,"fa-icon",16),f._uU(6,"\n            "),f.qZA())}function $(t,n){1&t&&(f.TgZ(0,"th",29),f._uU(1,"\n              "),f.TgZ(2,"span",30),f._uU(3,"Last Modified Date"),f.qZA(),f._uU(4," "),f._UZ(5,"fa-icon",16),f._uU(6,"\n            "),f.qZA())}function G(t,n){if(1&t){var e=f.EpF();f.TgZ(0,"button",40),f.NdJ("click",function(){f.CHM(e);var t=f.oxw().$implicit;return f.oxw(3).setActive(t,!0)}),f._uU(1,"\n                Deactivated\n              "),f.qZA()}}function V(t,n){if(1&t){var e=f.EpF();f.TgZ(0,"button",41),f.NdJ("click",function(){f.CHM(e);var t=f.oxw().$implicit;return f.oxw(3).setActive(t,!1)}),f._uU(1,"\n              "),f._uU(2,"\n                Activated\n              "),f.qZA()}}function W(t,n){if(1&t){var e=f.EpF();f.TgZ(0,"tr",32),f.NdJ("dblclick",function(){var t=f.CHM(e).$implicit;return f.oxw(3).doubleClick(t)}),f._uU(1,"\n          \n           \n            "),f.TgZ(2,"td"),f._uU(3),f.qZA(),f._uU(4,"\n            "),f.TgZ(5,"td"),f._uU(6),f.qZA(),f._uU(7,"\n\n            "),f.TgZ(8,"td"),f._uU(9,"\n              "),f.YNc(10,G,2,0,"button",33),f._uU(11,"\n              "),f.YNc(12,V,3,0,"button",34),f._uU(13,"\n            "),f.qZA(),f._uU(14,"\n         \n            "),f.TgZ(15,"td"),f._uU(16),f.ALo(17,"date"),f.qZA(),f._uU(18,"\n            "),f.TgZ(19,"td"),f._uU(20),f.qZA(),f._uU(21,"\n            "),f.TgZ(22,"td"),f._uU(23),f.ALo(24,"date"),f.qZA(),f._uU(25,"\n            \n            "),f.TgZ(26,"td",35),f._uU(27,"\n              "),f.TgZ(28,"div",36),f._uU(29,"\n                "),f.TgZ(30,"button",37),f.NdJ("click",function(){var t=f.CHM(e).$implicit;return f.oxw(3).deleteSocialNetwork(t)}),f._uU(31,"\n              "),f._uU(32,"\n                "),f._UZ(33,"fa-icon",38),f._uU(34,"\n                "),f.TgZ(35,"span",39),f._uU(36,"Delete"),f.qZA(),f._uU(37,"\n              "),f.qZA(),f._uU(38,"\n              \n              "),f.qZA(),f._uU(39,"\n            "),f.qZA(),f._uU(40,"\n          "),f.qZA()}if(2&t){var i=n.$implicit;f.xp6(3),f.Oqu(i.name),f.xp6(3),f.Oqu(i.url),f.xp6(4),f.Q6J("ngIf",!i.active),f.xp6(2),f.Q6J("ngIf",i.active),f.xp6(4),f.Oqu(f.xi3(17,7,i.createdDate,"dd/MM/yy HH:mm")),f.xp6(4),f.Oqu(i.lastModifiedBy),f.xp6(3),f.Oqu(f.xi3(24,10,i.lastModifiedDate,"dd/MM/yy HH:mm"))}}function K(t,n){if(1&t&&(f.TgZ(0,"tbody"),f._uU(1,"\n          "),f.YNc(2,W,41,13,"tr",31),f._uU(3,"\n        "),f.qZA()),2&t){var e=f.oxw(2);f.xp6(2),f.Q6J("ngForOf",e.socialNetworks)("ngForTrackBy",e.trackIdentity)}}var X=function(){return["SUPER_USER"]};function tt(t,n){if(1&t){var e=f.EpF();f.TgZ(0,"div",11),f._uU(1,"\n      "),f.TgZ(2,"table",12),f._uU(3,"\n        "),f.TgZ(4,"thead"),f._uU(5,"\n          "),f.TgZ(6,"tr",13),f.NdJ("predicateChange",function(t){return f.CHM(e),f.oxw().predicate=t})("ascendingChange",function(t){return f.CHM(e),f.oxw().ascending=t})("sortChange",function(){return f.CHM(e),f.oxw().transition()}),f._uU(7,"\n            "),f.TgZ(8,"th",14),f.TgZ(9,"span",15),f._uU(10,"Name"),f.qZA(),f._uU(11," "),f._UZ(12,"fa-icon",16),f.qZA(),f._uU(13,"\n            "),f.TgZ(14,"th",17),f.TgZ(15,"span",18),f._uU(16,"URL"),f.qZA(),f.qZA(),f._uU(17,"\n            "),f.TgZ(18,"th",19),f._uU(19," "),f.TgZ(20,"span",20),f._uU(21,"Status"),f.qZA(),f._UZ(22,"fa-icon",16),f._uU(23," "),f.qZA(),f._uU(24,"\n           \n       \n            "),f.YNc(25,z,7,0,"th",21),f._uU(26,"\n        \n            "),f.YNc(27,R,7,0,"th",22),f._uU(28,"\n         \n            "),f.YNc(29,$,7,0,"th",23),f._uU(30,"\n         \n\n            "),f._UZ(31,"th",24),f._uU(32,"\n          "),f.qZA(),f._uU(33,"\n        "),f.qZA(),f._uU(34,"\n        "),f.YNc(35,K,4,2,"tbody",7),f._uU(36,"\n      "),f.qZA(),f._uU(37,"\n    "),f.qZA()}if(2&t){var i=f.oxw();f.xp6(6),f.Q6J("predicate",i.predicate)("ascending",i.ascending),f.xp6(19),f.Q6J("jhiHasAnyAuthority",f.DdM(6,X)),f.xp6(2),f.Q6J("jhiHasAnyAuthority",f.DdM(7,X)),f.xp6(2),f.Q6J("jhiHasAnyAuthority",f.DdM(8,X)),f.xp6(6),f.Q6J("ngIf",i.socialNetworks)}}var nt=function(t,n,e){return{page:t,totalItems:n,itemsPerPage:e}};function et(t,n){if(1&t){var e=f.EpF();f.TgZ(0,"div"),f._uU(1,"\n      "),f.TgZ(2,"div",42),f._uU(3,"\n        "),f._UZ(4,"jhi-item-count",43),f._uU(5,"\n      "),f.qZA(),f._uU(6,"\n  \n      "),f.TgZ(7,"div",42),f._uU(8,"\n        "),f.TgZ(9,"ngb-pagination",44),f.NdJ("pageChange",function(t){return f.CHM(e),f.oxw().page=t})("pageChange",function(){return f.CHM(e),f.oxw().transition()}),f.qZA(),f._uU(10,"\n      "),f.qZA(),f._uU(11,"\n    "),f.qZA()}if(2&t){var i=f.oxw();f.xp6(4),f.Q6J("params",f.kEZ(7,nt,i.page,i.totalItems,i.itemsPerPage)),f.xp6(5),f.Q6J("collectionSize",i.totalItems)("page",i.page)("pageSize",i.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}var it=[{path:"",children:[{path:"social-management",component:function(){var n=function(){function n(t,i,a,o,r,s){e(this,n),this.socialNetworkService=t,this.accountService=i,this.activatedRoute=a,this.router=o,this.modalService=r,this.translate=s,this.currentAccount=null,this.socialNetworks=null,this.isLoading=!1,this.totalItems=0,this.itemsPerPage=I.gK,this.hideothers=!1}return a(n,[{key:"ngOnInit",value:function(){var t=this;this.accountService.identity().subscribe(function(n){return t.currentAccount=n}),this.handleNavigation()}},{key:"setActive",value:function(t,n){var e=this;this.socialNetworkService.update(Object.assign(Object.assign({},t),{active:n})).subscribe(function(){return e.loadAll()})}},{key:"updateURL",value:function(t){var n=this;this.socialNetworkService.update(Object.assign(Object.assign({},t),{active:t.active})).subscribe(function(){return n.loadAll()})}},{key:"trackIdentity",value:function(t,n){return n.id}},{key:"deleteSocialNetwork",value:function(t){var n=this,e=this.modalService.open(J.v,{size:"lg",backdrop:"static"});e.componentInstance.title=this.translate.instant("global.genericmodal.title.deleteSN"),e.componentInstance.question=this.translate.instant("global.genericmodal.question.deleteSN",{name:t.name}),e.closed.subscribe(function(e){"true"===e&&n.socialNetworkService.delete(t.id?t.id:0).subscribe(function(){return n.loadAll()})})}},{key:"editUrl",value:function(t){this.hideothers=!0,t.edit=!t.edit}},{key:"loadAll",value:function(){var t=this;this.hideothers=!1,this.isLoading=!0,this.socialNetworkService.query({page:this.page-1,size:this.itemsPerPage,sort:this.sort()}).subscribe(function(n){t.isLoading=!1,t.onSuccess(n.body,n.headers)},function(){return t.isLoading=!1})}},{key:"transition",value:function(){this.router.navigate(["/social-network/social-management"],{relativeTo:this.activatedRoute.parent,queryParams:{page:this.page,sort:"".concat(this.predicate,",").concat(this.ascending?I.aW:I.jo)}})}},{key:"doubleClick",value:function(t){this.router.navigate(["/social-network/social-add/"+t.id+"/edit"])}},{key:"handleNavigation",value:function(){var n=this;(0,F.aj)([this.activatedRoute.data,this.activatedRoute.queryParamMap]).subscribe(function(e){var i,a=t(e,2),o=a[0],r=a[1],s=r.get("page");n.page=+(null!=s?s:1);var c=(null!==(i=r.get(I._l))&&void 0!==i?i:o.defaultSort).split(",");n.predicate=c[0],n.ascending=c[1]===I.aW,n.loadAll()})}},{key:"sort",value:function(){var t=["".concat(this.predicate,",").concat(this.ascending?I.aW:I.jo)];return"id"!==this.predicate&&t.push("id"),t}},{key:"onSuccess",value:function(t,n){this.totalItems=Number(n.get("X-Total-Count")),this.socialNetworks=t}}]),n}();return n.\u0275fac=function(t){return new(t||n)(f.Y36(U),f.Y36(Y.B),f.Y36(s.gz),f.Y36(s.F0),f.Y36(L.FF),f.Y36(_.sK))},n.\u0275cmp=f.Xpm({type:n,selectors:[["social-network-manager"]],decls:30,vars:6,consts:[["id","socialNetwork-management-page-heading","jhiTranslate","socialNetworkManagement.home.title","data-cy","socialNetworkManagementPageHeading",1,"mdi","mdi-web"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","mr-2",3,"disabled","click"],["icon","sync",3,"spin"],["jhiTranslate","socialNetworkManagement.home.refreshListLabel"],["class","btn btn-primary jh-create-entity",3,"routerLink",4,"jhiHasAnyAuthority"],["class","table-responsive",4,"ngIf"],[4,"ngIf"],[1,"btn","btn-primary","jh-create-entity",3,"routerLink"],["icon","plus"],["jhiTranslate","socialNetworkManagement.home.createLabel"],[1,"table-responsive"],["aria-describedby","socialNetwork-management-page-heading",1,"table","table-hover","cursor-grab-table","table-striped"],["jhiSort","",3,"predicate","ascending","predicateChange","ascendingChange","sortChange"],["scope","col","jhiSortBy","name",2,"width","15%"],["jhiTranslate","socialNetworkManagement.name"],["icon","sort"],["scope","col",2,"width","20%"],["jhiTranslate","socialNetworkManagement.url"],["scope","col","jhiSortBy","active",2,"width","5%"],["jhiTranslate","socialNetworkManagement.status"],["scope","col","jhiSortBy","createdDate",4,"jhiHasAnyAuthority"],["scope","col","jhiSortBy","lastModifiedBy",4,"jhiHasAnyAuthority"],["scope","col","jhiSortBy","lastModifiedDate",4,"jhiHasAnyAuthority"],["scope","col"],["scope","col","jhiSortBy","createdDate"],["jhiTranslate","topicManagement.createdDate"],["scope","col","jhiSortBy","lastModifiedBy"],["jhiTranslate","topicManagement.lastModifiedBy"],["scope","col","jhiSortBy","lastModifiedDate"],["jhiTranslate","topicManagement.lastModifiedDate"],[3,"dblclick",4,"ngFor","ngForOf","ngForTrackBy"],[3,"dblclick"],["class","btn btn-danger btn-sm","jhiTranslate","socialNetworkManagement.deactivated",3,"click",4,"ngIf"],["class","btn btn-success btn-sm","jhiTranslate","socialNetworkManagement.active",3,"click",4,"ngIf"],[1,"text-right"],[1,"btn-group"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"],["icon","times"],["jhiTranslate","entity.action.delete",1,"d-none","d-md-inline"],["jhiTranslate","socialNetworkManagement.deactivated",1,"btn","btn-danger","btn-sm",3,"click"],["jhiTranslate","socialNetworkManagement.active",1,"btn","btn-success","btn-sm",3,"click"],[1,"row","justify-content-center"],[3,"params"],[3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"]],template:function(t,n){1&t&&(f.TgZ(0,"div"),f._uU(1,"\n    "),f.TgZ(2,"h2"),f._uU(3,"\n      "),f.TgZ(4,"span",0),f._uU(5,"SocialNetworks"),f.qZA(),f._uU(6,"\n  \n      "),f.TgZ(7,"div",1),f._uU(8,"\n        "),f.TgZ(9,"button",2),f.NdJ("click",function(){return n.loadAll()}),f._uU(10,"\n          "),f._UZ(11,"fa-icon",3),f._uU(12,"\n          "),f.TgZ(13,"span",4),f._uU(14,"Refresh List"),f.qZA(),f._uU(15,"\n        "),f.qZA(),f._uU(16,"\n        "),f.YNc(17,P,7,2,"button",5),f._uU(18,"\n      "),f.qZA(),f._uU(19,"\n    "),f.qZA(),f._uU(20,"\n  \n    "),f._UZ(21,"jhi-alert-error"),f._uU(22,"\n    "),f._UZ(23,"jhi-alert"),f._uU(24,"\n  \n    "),f.YNc(25,tt,38,9,"div",6),f._uU(26,"\n  \n    "),f.YNc(27,et,12,11,"div",7),f._uU(28,"\n  "),f.qZA(),f._uU(29,"\n  ")),2&t&&(f.xp6(9),f.Q6J("disabled",n.isLoading),f.xp6(2),f.Q6J("spin",n.isLoading),f.xp6(6),f.Q6J("jhiHasAnyAuthority",f.DdM(5,X)),f.xp6(8),f.Q6J("ngIf",n.socialNetworks),f.xp6(2),f.Q6J("ngIf",n.socialNetworks))},directives:[Z.P,k.BN,Q.o,b.A,B.w,y.O5,s.rH,D.b,H.T,y.sg,E.N,L.N9],pipes:[y.uU],styles:[""]}),n}(),data:{pageTitle:"global.menu.socialNetwork.management",defaultSort:"id,asc"},canActivate:[u.Z]},{path:"social-add/:social/edit",component:M,resolve:{social:function(){var t=function(){function t(n){e(this,t),this.service=n}return a(t,[{key:"resolve",value:function(t){var n=t.params.social;return n?this.service.find(n):(0,l.of)(new g)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(f.LFG(U))},t.\u0275prov=f.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}},{path:"social-add",component:M,data:{pageTitle:"global.menu.company.add"},canActivate:[u.Z]}]}],at=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=f.oAB({type:t}),t.\u0275inj=f.cJS({imports:[[c.m,s.Bz.forChild(it)]]}),t}()}}])}();