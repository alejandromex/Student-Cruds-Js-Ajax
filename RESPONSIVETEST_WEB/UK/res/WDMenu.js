/*! VersionVI: 30A200067s x */
function WDMenu(n,t,i){n&&(WDChamp.prototype.constructor.apply(this,[n,undefined,undefined]),this.m_bOnglet=t,this.m_tabMenusPopup=i?i:[],this.m_oRacine=null)}function _JEM(n,t,i,r,u){u?_JSL(_PAGE_,n,t,i,r,"MENU_SUBMIT"):_JCL(_PU_+"?WD_ACTION_=MENU&ID="+n,t,i,r)}WDMenu.prototype=new WDChamp;WDMenu.prototype.constructor=WDMenu;WDMenu.prototype.ms_nPositionBasGauche=0;WDMenu.prototype.ms_nPositionHautDroite=1;WDMenu.prototype.ms_nPositionBasCentreGlobal=2;WDMenu.prototype.ms_nPositionBasDroite=3;WDMenu.prototype.ms_nPositionHautGauche=4;WDMenu.prototype.Init=function(){WDChamp.prototype.Init.apply(this,arguments);this.m_oRacine&&(this.m_bOnglet&&this.__AjouteJSSurvol_Onglets(),this.__AjouteJSSurvol_SousMenus())};WDMenu.prototype._vLiaisonHTML=function(){WDChamp.prototype._vLiaisonHTML.apply(this,arguments);this.m_oRacine=_JGE(this.m_sAliasChamp,document,!0,!1)};WDMenu.prototype.__AjouteJSSurvol_Onglets=function(){clWDUtil.bForEachThis(this.m_oRacine.getElementsByTagName("td"),this,function(n){return this.__bAvecClasseSelect(n,"WDOngletOption")&&this.__AjouteJSSurvol_UnOnglet(n,"WDOngletOption","WDOngletOptionSelect"),!0})};WDMenu.prototype.__AjouteJSSurvol_UnOnglet=function(n,t,i){clWDUtil.bForEachThis(n.getElementsByTagName("table"),this,function(r){return r.getElementsByTagName("tr").length&&clWDUtil.bAvecClasse(r.parentNode,"WDSousOnglet")?(this.__AjouteJSSurvol_OptionSousMenu(n,r,t,i),!1):!0})&&this.__AjouteJSSurvol_OptionSimpleOuPopup(n,t,i)};WDMenu.prototype.__AjouteJSSurvol_SousMenus=function(){clWDUtil.bForEachThis(this.m_oRacine.getElementsByTagName("tr"),this,function(n){return this.__AjouteJSSurvol(n),!0})};WDMenu.prototype.__AjouteJSSurvol=function(n){if(this.__bAvecClasseSelect(n,"WDMenuOption")){var t=n.getElementsByTagName("table");t.length&&t[0].getElementsByTagName("tr").length?this.__AjouteJSSurvol_OptionSousMenu(n,t[0],"WDMenuOption","WDMenuOptionSelect"):this.__AjouteJSSurvol_OptionSimpleOuPopup(n,"WDMenuOption","WDMenuOptionSelect")}};WDMenu.prototype.__AjouteJSSurvol_OptionSousMenu=function(n,t,i,r){this.__AjouteJSSurvol_OptionGenerique(n,t,i,r,this.__s_MouseOverOptionAfficheMenu,this.__s_MouseOverOptionMasqueMenu)};WDMenu.prototype.__s_MouseOverOptionAfficheMenu=function(n){var t=n.m_oParametres,r=t.ownerDocument,u=clWDUtil.__nGetBodyPropriete(r,"scrollWidth"),i,f;clWDUtil.SetDisplay(t,!0);i=clWDUtil.__nGetBodyPropriete(r,"scrollWidth");u<i&&(f=parseInt(clWDUtil.oGetCurrentStyle(t).left,10),t.style.left=f-(i-u)+"px")};WDMenu.prototype.__s_MouseOverOptionMasqueMenu=function(n){var t=n.m_oParametres;clWDUtil.SetDisplay(n.m_oParametres,!1);""!=t.style.left&&(t.style.left="")};WDMenu.prototype.__AjouteJSSurvol_OptionSimpleOuPopup=function(n,t,i){var r=n.getElementsByTagName("a");r&&r[0]&&r[0].id.length&&this.m_tabMenusPopup[r[0].id]?this.__AjouteJSSurvol_OptionGenerique(n,this.m_tabMenusPopup[r[0].id],t,i,this.__s_MouseOverOptionAffichePopup,this.__s_MouseOverOptionMasquepopup):this.__AjouteJSSurvol_OptionGenerique(n,null,t,i,null,null)};WDMenu.prototype.__s_MouseOverOptionAffichePopup=function(n){var i=n.m_oOptionMenu,r=clWDUtil.nGetBoundingClientRectLeft(i,!1),u=clWDUtil.nGetBoundingClientRectTop(i,!1),t=_JGE(n.m_oParametres.m_sPopup,document,!0);clWDUtil.oGetCurrentStyle(t).display=="none"&&(t.style.visibility="hidden",clWDUtil.SetDisplay(t,!0));switch(n.m_oParametres.m_ePosition){case WDMenu.prototype.ms_nPositionBasGauche:u+=i.offsetHeight;break;case WDMenu.prototype.ms_nPositionHautDroite:r+=i.offsetWidth;break;case WDMenu.prototype.ms_nPositionBasCentreGlobal:r=clWDUtil.nGetBoundingClientRectLeft(i.parentNode.parentNode,!1)+(i.parentNode.parentNode.offsetWidth-t.offsetWidth)/2;u+=i.offsetHeight;break;case WDMenu.prototype.ms_nPositionBasDroite:r+=i.offsetWidth-t.offsetWidth;u+=i.offsetHeight;break;case WDMenu.prototype.ms_nPositionHautGauche:r-=t.offsetWidth}clWDUtil.RemplaceClassName(t,undefined,"WDMenuPopupVisible");!0===clWDUtil.CelluleAfficheDialogue(n.m_oParametres.m_sPopup,document,0,undefined,0,r,u,undefined,n)&&(t=_JGE(n.m_oParametres.m_sPopup,document,!0),clWDUtil.AttacheDetacheEvent(!0,t,"mouseover",n.m_pfMouseOver),clWDUtil.AttacheDetacheEvent(!0,t,"mouseout",n.m_pfMouseOut))};WDMenu.prototype.__s_MouseOverOptionMasquepopup=function(n){var t=_JGE(n.m_oParametres.m_sPopup,document,!0);clWDUtil.AttacheDetacheEvent(!1,t,"mouseout",n.m_pfMouseOut);clWDUtil.AttacheDetacheEvent(!1,t,"mouseover",n.m_pfMouseOver);clWDUtil.CelluleFermeDialogue(n.m_oParametres.m_sPopup,document);t=_JGE(n.m_oParametres.m_sPopup,document,!0);clWDUtil.RemplaceClassName(t,"WDMenuPopupVisible",undefined)};WDMenu.prototype.__AjouteJSSurvol_OptionGenerique=function(n,t,i,r,u,f){var e={m_oOptionMenu:n,m_oRacine:this.m_oRacine,m_oParametres:t,m_sClasse:i,m_sClasseSelect:r,m_pfAffiche:u,m_pfMasque:f,m_nTimeoutMouseOut:-1,m_pfMouseOver:function(){WDMenu.prototype.__s_MouseOverOption(e)},m_pfMouseOut:function(){WDMenu.prototype.__s_MouseOutOption(e)}};(!bSfr||!bTouch||u||f)&&(n.onmouseover=e.m_pfMouseOver,n.onmouseout=e.m_pfMouseOut)};WDMenu.prototype.__s_MouseOverOption=function(n){if(-1!==n.m_nTimeoutMouseOut){clWDUtil.ClearTimeout(n.m_nTimeoutMouseOut);n.m_nTimeoutMouseOut=-1;return}if(clWDUtil.RemplaceClassNameSiExiste(n.m_oOptionMenu,n.m_sClasse,n.m_sClasse+"Hover"),clWDUtil.RemplaceClassNameSiExiste(n.m_oOptionMenu,n.m_sClasseSelect,n.m_sClasseSelect+"Hover"),n.m_pfAffiche){var t=n.m_oOptionMenu.getElementsByTagName("a");t&&(bIE?t[0].disabled:t[0].attributes.getNamedItem("disabled"))||n.m_pfAffiche(n)}WDMenu.prototype.__s_ReflowMenuPourIE(n.m_oRacine)};WDMenu.prototype.__s_MouseOutOption=function(n){-1===n.m_nTimeoutMouseOut&&(n.m_nTimeoutMouseOut=clWDUtil.nSetTimeout(function(){WDMenu.prototype.__s_MouseOutOptionInterne(n)},clWDUtil.ms_oTimeoutImmediat))};WDMenu.prototype.__s_MouseOutOptionInterne=function(n){n.m_nTimeoutMouseOut=-1;clWDUtil.RemplaceClassNameSiExiste(n.m_oOptionMenu,n.m_sClasse+"Hover",n.m_sClasse);clWDUtil.RemplaceClassNameSiExiste(n.m_oOptionMenu,n.m_sClasseSelect+"Hover",n.m_sClasseSelect);n.m_pfMasque&&n.m_pfMasque(n);WDMenu.prototype.__s_ReflowMenuPourIE(n.m_oRacine)};WDMenu.prototype.__s_ReflowMenuPourIE=function(n){if(clWDUtil.bHTML5&&bIEAvec11){var t=n.style.width;n.style.width="";n.offsetWidth;n.style.width=t}};WDMenu.prototype.__bAvecClasseSelect=function(n,t){return clWDUtil.bAvecClasse(n,t)||clWDUtil.bAvecClasse(n,t+"Select")};WDMenu.prototype.OnClick=function(n){var u,i,f,r,t,e;if(!this.m_bDansOnClick&&(u=clWDUtil.oGetOriginalTarget(n),u&&!clWDUtil.bBaliseEstTag(u,"a")&&(!u.parentNode||!clWDUtil.bBaliseEstTag(u.parentNode,"a")))){for(i=u;i&&!clWDUtil.bBaliseEstTag(i,"tr");){if(i==document.body)return;i=i.parentNode}if(f=i.getElementsByTagName("a"),f&&f.length&&(r=f[0],r&&(t=r.href,t&&t.length)))if(t.substring(0,11)=="javascript:")t=t.substring(11),eval(t);else try{this.m_bDansOnClick=!0;document.createEvent&&r.dispatchEvent?(e=document.createEvent("MouseEvents"),e.initMouseEvent("click",!0,!1,window,1,0,0,0,0,!1,!1,!1,!1,0,null),r.dispatchEvent(e)):bIE&&r.click?r.click():eval(t)}finally{this.m_bDansOnClick=!1}}}