"use strict";(self.webpackChunkidemiafoot_front=self.webpackChunkidemiafoot_front||[]).push([[585],{585:(It,I,s)=>{s.r(I),s.d(I,{AdminModule:()=>Dt});var c=s(6814),x=s(2787),h=s(5861),u=s(4036),t=s(5879),Z=s(5434),L=s(2078),d=s(95),N=s(2595),g=s(824),C=s(9382),M=s(2840),Q=s(855),W=s(1958),P=s(2920),p=s(8386),R=s(6994),f=s(7505),y=s(331),_=s(8324),O=s(7582),S=s(8645),U=s(2438),b=s(7394),E=s(4911),V=s(3019),T=s(2181),v=s(9773),G=s(9397),$=s(5177),F=s(8180),w=s(4664),A=s(7754),m=s(348),k=s(140),K=s(4194);function X(i,r){if(1&i&&(t.ynx(0),t._uU(1),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Oqu(e.nzLabel)}}const j=[[["nz-auto-option"]]],q=["nz-auto-option"],Y=["*"],tt=["panel"],et=["content"];function nt(i,r){}function it(i,r){1&i&&t.YNc(0,nt,0,0,"ng-template")}function ot(i,r){1&i&&t.Hsn(0)}function st(i,r){if(1&i&&(t.TgZ(0,"nz-auto-option",8),t._uU(1),t.qZA()),2&i){const e=r.$implicit;t.Q6J("nzValue",e)("nzLabel",e&&e.label?e.label:e),t.xp6(1),t.hij(" ",e&&e.label?e.label:e," ")}}function rt(i,r){if(1&i&&t.YNc(0,st,2,3,"nz-auto-option",7),2&i){const e=t.oxw(2);t.Q6J("ngForOf",e.nzDataSource)}}function at(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",0,1),t.NdJ("@slideMotion.done",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.onAnimationEvent(o))}),t.TgZ(2,"div",2)(3,"div",3),t.YNc(4,it,1,0,null,4),t.qZA()()(),t.YNc(5,ot,1,0,"ng-template",null,5,t.W1O),t.YNc(7,rt,1,1,"ng-template",null,6,t.W1O)}if(2&i){const e=t.MAs(6),n=t.MAs(8),o=t.oxw();t.ekj("ant-select-dropdown-hidden",!o.showPanel)("ant-select-dropdown-rtl","rtl"===o.dir),t.Q6J("ngClass",o.nzOverlayClassName)("ngStyle",o.nzOverlayStyle)("nzNoAnimation",null==o.noAnimation?null:o.noAnimation.nzNoAnimation)("@slideMotion",void 0)("@.disabled",!(null==o.noAnimation||!o.noAnimation.nzNoAnimation)),t.xp6(4),t.Q6J("ngTemplateOutlet",o.nzDataSource?n:e)}}let lt=(()=>{class i{constructor(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:q,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(e,n){1&e&&(t.F$t(j),t.TgZ(0,"div",0),t.YNc(1,X,2,1,"ng-container",1),t.qZA(),t.Hsn(2)),2&e&&(t.xp6(1),t.Q6J("nzStringTemplateOutlet",n.nzLabel))},dependencies:[_.f],encapsulation:2,changeDetection:0}),i})();class ct{constructor(r,e=!1){this.source=r,this.isUserInput=e}}let D=(()=>{class i{constructor(e,n,o,a){this.ngZone=e,this.changeDetectorRef=n,this.element=o,this.nzAutocompleteOptgroupComponent=a,this.nzDisabled=!1,this.selectionChange=new t.vpe,this.mouseEntered=new t.vpe,this.active=!1,this.selected=!1,this.destroy$=new S.x}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,U.R)(this.element.nativeElement,"mouseenter").pipe((0,T.h)(()=>this.mouseEntered.observers.length>0),(0,v.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>this.mouseEntered.emit(this))}),(0,U.R)(this.element.nativeElement,"mousedown").pipe((0,v.R)(this.destroy$)).subscribe(e=>e.preventDefault())})}ngOnDestroy(){this.destroy$.next()}select(e=!0){this.selected=!0,this.changeDetectorRef.markForCheck(),e&&this.emitSelectionChangeEvent()}deselect(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}getLabel(){return this.nzLabel||this.nzValue.toString()}setActiveStyles(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}setInactiveStyles(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}scrollIntoViewIfNeeded(){(0,A.zT)(this.element.nativeElement)}selectViaInteraction(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}emitSelectionChangeEvent(e=!1){this.selectionChange.emit(new ct(this,e))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(lt,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(e,n){1&e&&t.NdJ("click",function(){return n.selectViaInteraction()}),2&e&&(t.uIk("aria-selected",n.selected.toString())("aria-disabled",n.nzDisabled.toString()),t.ekj("ant-select-item-option-grouped",n.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",n.selected)("ant-select-item-option-active",n.active)("ant-select-item-option-disabled",n.nzDisabled))},inputs:{nzValue:"nzValue",nzLabel:"nzLabel",nzDisabled:"nzDisabled"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:Y,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(e,n){1&e&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},encapsulation:2,changeDetection:0}),(0,O.gn)([(0,A.yF)()],i.prototype,"nzDisabled",void 0),i})();const ut={provide:d.JU,useExisting:(0,t.Gpc)(()=>B),multi:!0};let B=(()=>{class i{get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}constructor(e,n,o,a,l,z){this.ngZone=e,this.elementRef=n,this.overlay=o,this.viewContainerRef=a,this.nzInputGroupWhitSuffixOrPrefixDirective=l,this.document=z,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new S.x,this.overlayRef=null,this.portal=null,this.previousValue=null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,v.R)(this.destroy$)).subscribe(e=>{"void"===e.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(e){this.ngZone.runOutsideAngular(()=>Promise.resolve(null).then(()=>this.setTriggerValue(e)))}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.elementRef.nativeElement.disabled=e,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(e){const n=e.keyCode,o=n===m.LH||n===m.JH;n===m.hY&&e.preventDefault(),!this.panelOpen||n!==m.hY&&n!==m.Mf?this.panelOpen&&n===m.K5?this.nzAutocomplete.showPanel&&(e.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&o&&this.nzAutocomplete.showPanel&&(e.stopPropagation(),e.preventDefault(),n===m.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(e){const n=e.target,o=this.document;let a=n.value;"number"===n.type&&(a=""===a?null:parseFloat(a)),this.previousValue!==a&&(this.previousValue=a,this.onChange(a),this.canOpen()&&o.activeElement===e.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,G.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,$.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(e=>{this.setValueAndClose(e)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,T.h)(e=>!this.elementRef.nativeElement.contains(e.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function ht(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new k.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,v.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new f.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const e=[new f.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new f.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(e).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const e=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==e?(this.nzAutocomplete.setActiveItem(e),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(e){const n=e.nzValue;this.setTriggerValue(e.getLabel()),this.onChange(n),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(e){const n=this.nzAutocomplete.getOption(e),o=n?n.getLabel():e;this.elementRef.nativeElement.value=o??"",this.nzAutocomplete.nzBackfill||(this.previousValue=o)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const e=this.elementRef.nativeElement;return!e.readOnly&&!e.disabled}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.R0b),t.Y36(t.SBq),t.Y36(f.aV),t.Y36(t.s_b),t.Y36(g.ke,8),t.Y36(c.K0,8))},i.\u0275dir=t.lG2({type:i,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(e,n){1&e&&t.NdJ("focusin",function(){return n.handleFocus()})("blur",function(){return n.handleBlur()})("input",function(a){return n.handleInput(a)})("keydown",function(a){return n.handleKeydown(a)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[t._Bn([ut])]}),i})(),pt=(()=>{class i{get options(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}constructor(e,n,o,a){this.changeDetectorRef=e,this.ngZone=n,this.directionality=o,this.noAnimation=a,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=(l,z)=>l===z,this.selectionChange=new t.vpe,this.showPanel=!0,this.isOpen=!1,this.activeItem=null,this.dir="ltr",this.destroy$=new S.x,this.animationStateChange=new t.vpe,this.activeItemIndex=-1,this.selectionChangeSubscription=b.w0.EMPTY,this.optionMouseEnterSubscription=b.w0.EMPTY,this.dataSourceChangeSubscription=b.w0.EMPTY,this.optionSelectionChanges=(0,E.P)(()=>this.options?(0,V.T)(...this.options.map(l=>l.selectionChange)):this.ngZone.onStable.asObservable().pipe((0,F.q)(1),(0,w.w)(()=>this.optionSelectionChanges))),this.optionMouseEnter=(0,E.P)(()=>this.options?(0,V.T)(...this.options.map(l=>l.mouseEntered)):this.ngZone.onStable.asObservable().pipe((0,F.q)(1),(0,w.w)(()=>this.optionMouseEnter)))}ngOnInit(){this.directionality.change?.pipe((0,v.R)(this.destroy$)).subscribe(e=>{this.dir=e,this.changeDetectorRef.detectChanges()}),this.dir=this.directionality.value}onAnimationEvent(e){this.animationStateChange.emit(e)}ngAfterContentInit(){this.nzDataSource||this.optionsInit()}ngAfterViewInit(){this.nzDataSource&&this.optionsInit()}ngOnDestroy(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe(),this.dataSourceChangeSubscription=this.selectionChangeSubscription=this.optionMouseEnterSubscription=null,this.destroy$.next(),this.destroy$.complete()}setVisibility(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}setActiveItem(e){const n=this.options.get(e);n&&!n.active?(this.activeItem=n,this.activeItemIndex=e,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles()):(this.activeItem=null,this.activeItemIndex=-1,this.clearSelectedOptions()),this.changeDetectorRef.markForCheck()}setNextItemActive(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}setPreviousItemActive(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}getOptionIndex(e){return this.options.reduce((n,o,a)=>-1===n?this.compareWith(e,o.nzValue)?a:-1:n,-1)}getOption(e){return this.options.find(n=>this.compareWith(e,n.nzValue))||null}optionsInit(){this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe(n=>{!n.dirty&&this.isOpen&&setTimeout(()=>this.setVisibility()),this.subscribeOptionChanges()})}clearSelectedOptions(e,n=!1){this.options.forEach(o=>{o!==e&&(n&&o.deselect(),o.setInactiveStyles())})}subscribeOptionChanges(){this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe((0,T.h)(e=>e.isUserInput)).subscribe(e=>{e.source.select(),e.source.setActiveStyles(),this.activeItem=e.source,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(e.source,!0),this.selectionChange.emit(e.source)}),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe(e=>{e.setActiveStyles(),this.activeItem=e,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(e)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(R.Is,8),t.Y36(y.P,9))},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-autocomplete"]],contentQueries:function(e,n,o){if(1&e&&t.Suo(o,D,5),2&e){let a;t.iGM(a=t.CRH())&&(n.fromContentOptions=a)}},viewQuery:function(e,n){if(1&e&&(t.Gf(t.Rgc,5),t.Gf(tt,5),t.Gf(et,5),t.Gf(D,5)),2&e){let o;t.iGM(o=t.CRH())&&(n.template=o.first),t.iGM(o=t.CRH())&&(n.panel=o.first),t.iGM(o=t.CRH())&&(n.content=o.first),t.iGM(o=t.CRH())&&(n.fromDataSourceOptions=o)}},inputs:{nzWidth:"nzWidth",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:Y,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(e,n){1&e&&(t.F$t(),t.YNc(0,at,9,10,"ng-template"))},dependencies:[c.mk,c.sg,c.tP,c.PC,y.P,D],encapsulation:2,data:{animation:[K.mF]},changeDetection:0}),(0,O.gn)([(0,A.yF)()],i.prototype,"nzDefaultActiveFirstOption",void 0),(0,O.gn)([(0,A.yF)()],i.prototype,"nzBackfill",void 0),i})(),mt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[R.vT,c.ez,f.U8,_.T,y.g,g.o7]}),i})();var H=s(6494),J=s(9035);function dt(i,r){1&i&&(t.TgZ(0,"button",20),t._UZ(1,"span",21),t.qZA())}function gt(i,r){1&i&&t._UZ(0,"span",27)}function ft(i,r){1&i&&t._UZ(0,"span",28)}function vt(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"nz-switch",22),t.NdJ("ngModelChange",function(o){const l=t.CHM(e).$implicit,z=t.oxw();return t.KtG(z.switchAdmin(o,l.id))}),t.qZA(),t.YNc(7,gt,1,0,"ng-template",null,23,t.W1O),t.YNc(9,ft,1,0,"ng-template",null,24,t.W1O),t.qZA(),t.TgZ(11,"td")(12,"button",25),t.NdJ("nzOnConfirm",function(){const a=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.confirmDelete(a.id))})("nzOnCancel",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.cancelDelete())}),t._uU(13,"Delete"),t._UZ(14,"span",26),t.qZA()()()}if(2&i){const e=r.$implicit,n=t.MAs(8),o=t.MAs(10);t.xp6(2),t.Oqu(e.username),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Q6J("ngModel",e.isAdmin)("nzCheckedChildren",n)("nzUnCheckedChildren",o)}}const zt=function(){return{xs:8,sm:16,md:24,lg:32}},At=[{path:"",component:(()=>{class i{constructor(e,n){this.usersService=e,this.notificationService=n,this.isVisible=!1,this.users=[],this.options=[],this.filteredUsers=[],this.listOfCurrentPageData=[]}ngOnInit(){var e=this;return(0,h.Z)(function*(){try{const n=yield(0,u.z)(e.usersService.findAll());e.users=n,e.filteredUsers=n}catch(n){console.error(n)}})()}checkSelectedUser(e){var n=this;return(0,h.Z)(function*(){(yield(0,u.z)(n.usersService.getUserById(e.id))).admin?yield(0,u.z)(n.usersService.removeAdmin(e.id)):yield(0,u.z)(n.usersService.addAdmin(e.id))})()}onInput(e){const n=e.target.value;this.filteredUsers=n?this.users.filter(o=>o.username.startsWith(n)):this.users,this.options=this.filteredUsers.map(o=>o.username),this.listOfCurrentPageData=this.filteredUsers.slice(0,this.pageSize)}refreshUsers(){var e=this;return(0,h.Z)(function*(){e.users=yield(0,u.z)(e.usersService.findAll()),e.filteredUsers=e.users})()}removeUser(e){var n=this;return(0,h.Z)(function*(){yield(0,u.z)(n.usersService.removeUser(e)).then(()=>{n.refreshUsers(),n.notificationService.success("Succes","User deleted successfully")}).catch(o=>{n.notificationService.error("Error",o.message)})})()}handleRemoveUser(e){var n=this;return(0,h.Z)(function*(){try{yield n.removeUser(e),yield n.refreshUsers()}catch(o){console.error(o)}})()}switchAdmin(e,n){var o=this;return(0,h.Z)(function*(){e?yield(0,u.z)(o.usersService.addAdmin(n)):yield(0,u.z)(o.usersService.removeAdmin(n)),yield o.refreshUsers()})()}onCurrentPageDataChange(e){this.listOfCurrentPageData=e}cancelDelete(){this.nzMessageService.info("Cancel")}confirmDelete(e){var n=this;return(0,h.Z)(function*(){n.handleRemoveUser(e)})()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(Z.f),t.Y36(L.zb))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-admin"]],decls:37,vars:12,consts:[["nz-row","",3,"nzGutter"],["nz-col","",1,"gutter-row",3,"nzSpan"],[1,"inner-box"],[1,"title"],[1,"menu-admin"],["nzTitle","Users"],[1,"search"],[1,"bar"],["nzSearch","",3,"nzAddOnAfter"],["placeholder","username here","nz-input","",3,"ngModel","nzAutocomplete","ngModelChange","input"],["nzBackfill","",3,"nzDataSource"],["auto",""],["suffixIconButton",""],["nzShowPagination","",3,"nzData","nzPageSize","nzCurrentPageDataChange","nzPageIndexChange"],["basicTable",""],["nz-icon","","nzType","user","nzTheme","outline"],["nz-icon","","nzType","mail","nzTheme","outline"],["nz-icon","","nzType","tool","nzTheme","outline"],[4,"ngFor","ngForOf"],["nzTitle","Others"],["nz-button","","nzType","primary","nzSearch","","nzShape","round"],["nz-icon","","nzType","search"],[3,"ngModel","nzCheckedChildren","nzUnCheckedChildren","ngModelChange"],["checkedTemplate",""],["unCheckedTemplate",""],["nzDanger","","nz-button","","nzType","primary","nzShape","round","nz-popconfirm","","nzPopconfirmTitle","Are you sure to delete this user ?","nzPopconfirmPlacement","bottom",3,"nzOnConfirm","nzOnCancel"],["nz-icon","","nzType","delete","nzTheme","outline"],["nz-icon","","nzType","check"],["nz-icon","","nzType","close"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.qZA(),t.TgZ(3,"div",1)(4,"div",2)(5,"h1",3),t._uU(6,"Administration \u{1f510}"),t.qZA(),t.TgZ(7,"nz-tabset",4)(8,"nz-tab",5)(9,"div",6)(10,"div",7)(11,"h3"),t._uU(12,"Search for user"),t.qZA(),t.TgZ(13,"nz-input-group",8)(14,"input",9),t.NdJ("ngModelChange",function(a){return n.inputValue=a})("input",function(a){return n.onInput(a)}),t.qZA(),t._UZ(15,"nz-autocomplete",10,11),t.qZA(),t.YNc(17,dt,2,0,"ng-template",null,12,t.W1O),t.qZA(),t.TgZ(19,"nz-table",13,14),t.NdJ("nzCurrentPageDataChange",function(a){return n.onCurrentPageDataChange(a)})("nzPageIndexChange",function(){return n.refreshUsers()}),t.TgZ(21,"thead")(22,"tr")(23,"th"),t._UZ(24,"span",15),t.qZA(),t.TgZ(25,"th"),t._UZ(26,"span",16),t.qZA(),t.TgZ(27,"th"),t._uU(28,"Admin"),t.qZA(),t.TgZ(29,"th"),t._UZ(30,"span",17),t.qZA()()(),t.TgZ(31,"tbody"),t.YNc(32,vt,15,5,"tr",18),t.qZA()()()(),t.TgZ(33,"nz-tab",19),t._uU(34,"Content of Tab Pane 3"),t.qZA()()()(),t.TgZ(35,"div",1),t._UZ(36,"div",2),t.qZA()()),2&e){const o=t.MAs(16),a=t.MAs(18);t.Q6J("nzGutter",t.DdM(11,zt)),t.xp6(1),t.Q6J("nzSpan",6),t.xp6(2),t.Q6J("nzSpan",24),t.xp6(10),t.Q6J("nzAddOnAfter",a),t.xp6(1),t.Q6J("ngModel",n.inputValue)("nzAutocomplete",o),t.xp6(1),t.Q6J("nzDataSource",n.options),t.xp6(4),t.Q6J("nzData",n.filteredUsers)("nzPageSize",7),t.xp6(13),t.Q6J("ngForOf",n.listOfCurrentPageData),t.xp6(3),t.Q6J("nzSpan",6)}},dependencies:[c.sg,d.Fj,d.JJ,d.On,N.Ls,g.Zp,g.gB,C.xH,C.xw,M.ix,Q.w,W.dQ,P.t3,P.SK,p.N8,p.Uo,p._C,p.Om,p.p0,p.$Z,pt,B,H.i,J.JW]}),i})()}];let Ct=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[x.Bz.forChild(At),x.Bz]}),i})();var yt=s(3410),Ot=s(6556),St=s(3599),bt=s(5695),Tt=s(2274);let Dt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[Z.f],imports:[c.ez,Ct,d.u5,N.PV,yt.wm,g.o7,C.we,Ot.Ph,M.sL,St.U5,p.HQ,mt,bt.X,H.m,Tt.uK,J._p]}),i})()}}]);