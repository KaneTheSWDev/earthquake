(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{yX1w:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),s=n("tyNb"),r=n("XNiG"),o=n("fXoL"),a=n("TkYP"),l=n("mrSG"),h=n("HDdC"),u=n("2Vo4"),c=n("Cfvw"),d=n("PqYM"),p=n("DH7j"),g=n("n6bG"),b=n("lJxs"),m=n("VRyK"),_=n("jtHE");n("quSY"),n("8Qeq"),n("z+Ro"),n("LRne"),n("z6cu");var f=n("5+tZ"),v=n("l7GE"),y=n("ZUHj");class C{constructor(e){this.notifier=e}call(e,t){const n=new k(e),i=t.subscribe(n);return i.add(Object(y.a)(n,this.notifier)),i}}class k extends v.a{constructor(){super(...arguments),this.hasValue=!1}_next(e){this.value=e,this.hasValue=!0}notifyNext(e,t,n,i,s){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.value))}}var w=n("eIep"),O=n("UXun"),M=(n("/uUt"),n("1G5W"),n("JX91")),I=n("zP0r");n("oB13");const z=["*"];let P=(()=>{let e=class{};return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac}),e})(),W=(()=>{let e=class{constructor(e,t){this._loader=e,this._zone=t,this._map=new Promise(e=>{this._mapResolver=e})}createMap(e,t){return this._zone.runOutsideAngular(()=>this._loader.load().then(()=>{const n=new google.maps.Map(e,t);this._mapResolver(n)}))}setMapOptions(e){return this._zone.runOutsideAngular(()=>{this._map.then(t=>{t.setOptions(e)})})}createMarker(e={},t=!0){return this._zone.runOutsideAngular(()=>this._map.then(n=>(t&&(e.map=n),new google.maps.Marker(e))))}createInfoWindow(e){return this._zone.runOutsideAngular(()=>this._map.then(()=>new google.maps.InfoWindow(e)))}createCircle(e){return this._zone.runOutsideAngular(()=>this._map.then(t=>("string"==typeof e.strokePosition&&(e.strokePosition=google.maps.StrokePosition[e.strokePosition]),e.map=t,new google.maps.Circle(e))))}createRectangle(e){return this._zone.runOutsideAngular(()=>this._map.then(t=>(e.map=t,new google.maps.Rectangle(e))))}createPolyline(e){return this._zone.runOutsideAngular(()=>this.getNativeMap().then(t=>{let n=new google.maps.Polyline(e);return n.setMap(t),n}))}createPolygon(e){return this._zone.runOutsideAngular(()=>this.getNativeMap().then(t=>{let n=new google.maps.Polygon(e);return n.setMap(t),n}))}createDataLayer(e){return this._zone.runOutsideAngular(()=>this._map.then(t=>{let n=new google.maps.Data(e);return n.setMap(t),n}))}createTransitLayer(e){return this._zone.runOutsideAngular(()=>this._map.then(t=>{let n=new google.maps.TransitLayer;return n.setMap(e.visible?t:null),n}))}createBicyclingLayer(e){return this._zone.runOutsideAngular(()=>this._map.then(t=>{let n=new google.maps.BicyclingLayer;return n.setMap(e.visible?t:null),n}))}containsLocation(e,t){return google.maps.geometry.poly.containsLocation(e,t)}subscribeToMapEvent(e){return new h.a(t=>{this._map.then(n=>{n.addListener(e,e=>{this._zone.run(()=>t.next(e))})})})}clearInstanceListeners(){return this._zone.runOutsideAngular(()=>{this._map.then(e=>{google.maps.event.clearInstanceListeners(e)})})}setCenter(e){return this._zone.runOutsideAngular(()=>this._map.then(t=>t.setCenter(e)))}getZoom(){return this._zone.runOutsideAngular(()=>this._map.then(e=>e.getZoom()))}getBounds(){return this._zone.runOutsideAngular(()=>this._map.then(e=>e.getBounds()))}getMapTypeId(){return this._zone.runOutsideAngular(()=>this._map.then(e=>e.getMapTypeId()))}setZoom(e){return this._zone.runOutsideAngular(()=>this._map.then(t=>t.setZoom(e)))}getCenter(){return this._zone.runOutsideAngular(()=>this._map.then(e=>e.getCenter()))}panTo(e){return this._zone.runOutsideAngular(()=>this._map.then(t=>t.panTo(e)))}panBy(e,t){return this._zone.runOutsideAngular(()=>this._map.then(n=>n.panBy(e,t)))}fitBounds(e,t){return this._zone.runOutsideAngular(()=>this._map.then(n=>n.fitBounds(e,t)))}panToBounds(e,t){return this._zone.runOutsideAngular(()=>this._map.then(n=>n.panToBounds(e,t)))}getNativeMap(){return this._map}triggerMapEvent(e){return this._map.then(t=>google.maps.event.trigger(t,e))}};return e.\u0275fac=function(t){return new(t||e)(o.Zb(P),o.Zb(o.z))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac}),e})(),L=(()=>{let e=class{constructor(e){this._wrapper=e,this._layers=new Map}addTransitLayer(e,t){const n=this._wrapper.createTransitLayer(t);this._layers.set(e,n)}addBicyclingLayer(e,t){const n=this._wrapper.createBicyclingLayer(t);this._layers.set(e,n)}deleteLayer(e){return this._layers.get(e).then(t=>{t.setMap(null),this._layers.delete(e)})}toggleLayerVisibility(e,t){return this._layers.get(e).then(e=>t.visible?this._wrapper.getNativeMap().then(t=>{e.setMap(t)}):void e.setMap(null))}};return e.\u0275fac=function(t){return new(t||e)(o.Zb(W))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac}),e})(),S=(()=>{let e=class{constructor(e,t){this._apiWrapper=e,this._zone=t,this._circles=new Map}addCircle(e){this._circles.set(e,this._apiWrapper.createCircle({center:{lat:e.latitude,lng:e.longitude},clickable:e.clickable,draggable:e.draggable,editable:e.editable,fillColor:e.fillColor,fillOpacity:e.fillOpacity,radius:e.radius,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokePosition:e.strokePosition,strokeWeight:e.strokeWeight,visible:e.visible,zIndex:e.zIndex}))}removeCircle(e){return this._circles.get(e).then(t=>{t.setMap(null),this._circles.delete(e)})}setOptions(e,t){return this._circles.get(e).then(e=>{"string"==typeof t.strokePosition&&(t.strokePosition=google.maps.StrokePosition[t.strokePosition]),e.setOptions(t)})}getBounds(e){return this._circles.get(e).then(e=>e.getBounds())}getCenter(e){return this._circles.get(e).then(e=>e.getCenter())}getRadius(e){return this._circles.get(e).then(e=>e.getRadius())}setCenter(e){return this._circles.get(e).then(t=>t.setCenter({lat:e.latitude,lng:e.longitude}))}setEditable(e){return this._circles.get(e).then(t=>t.setEditable(e.editable))}setDraggable(e){return this._circles.get(e).then(t=>t.setDraggable(e.draggable))}setVisible(e){return this._circles.get(e).then(t=>t.setVisible(e.visible))}setRadius(e){return this._circles.get(e).then(t=>t.setRadius(e.radius))}getNativeCircle(e){return this._circles.get(e)}createEventObservable(e,t){return new h.a(n=>{let i=null;return this._circles.get(t).then(t=>{i=t.addListener(e,e=>this._zone.run(()=>n.next(e)))}),()=>{null!==i&&i.remove()}})}};return e.\u0275fac=function(t){return new(t||e)(o.Zb(W),o.Zb(o.z))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac}),e})(),T=(()=>{let e=class{constructor(e,t){this._wrapper=e,this._zone=t,this._layers=new Map}addDataLayer(e){const t=this._wrapper.createDataLayer({style:e.style}).then(t=>(e.geoJson&&this.getDataFeatures(t,e.geoJson).then(e=>t.features=e),t));this._layers.set(e,t)}deleteDataLayer(e){this._layers.get(e).then(t=>{t.setMap(null),this._layers.delete(e)})}updateGeoJson(e,t){this._layers.get(e).then(e=>{e.forEach((function(t){e.remove(t);var n=e.features.indexOf(t,0);n>-1&&e.features.splice(n,1)})),this.getDataFeatures(e,t).then(t=>e.features=t)})}setDataOptions(e,t){this._layers.get(e).then(e=>{e.setControlPosition(t.controlPosition),e.setControls(t.controls),e.setDrawingMode(t.drawingMode),e.setStyle(t.style)})}createEventObservable(e,t){return new h.a(n=>{this._layers.get(t).then(t=>{t.addListener(e,e=>this._zone.run(()=>n.next(e)))})})}getDataFeatures(e,t){return new Promise((n,i)=>{if("object"==typeof t)try{n(e.addGeoJson(t))}catch(s){i(s)}else"string"==typeof t?e.loadGeoJson(t,null,n):i("Impossible to extract features from geoJson: wrong argument type")})}};return e.\u0275fac=function(t){return new(t||e)(o.Zb(W),o.Zb(o.z))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac}),e})();class B{}let x=(()=>{let e=class{constructor(e){var t;this._boundsChangeSampleTime$=new u.a(200),this._includeInBounds$=new u.a(new Map),this.bounds$=Object(c.a)(e.load()).pipe(Object(f.a)(()=>this._includeInBounds$),(t=this._boundsChangeSampleTime$.pipe(Object(w.a)(e=>Object(d.a)(0,e))),e=>e.lift(new C(t))),Object(b.a)(e=>this._generateBounds(e)),Object(O.a)(1))}_generateBounds(e){const t=new google.maps.LatLngBounds;return e.forEach(e=>t.extend(e)),t}addToBounds(e){const t=this._createIdentifier(e);if(this._includeInBounds$.value.has(t))return;const n=this._includeInBounds$.value;n.set(t,e),this._includeInBounds$.next(n)}removeFromBounds(e){const t=this._includeInBounds$.value;t.delete(this._createIdentifier(e)),this._includeInBounds$.next(t)}changeFitBoundsChangeSampleTime(e){this._boundsChangeSampleTime$.next(e)}getBounds$(){return this.bounds$}_createIdentifier(e){return`${e.lat}+${e.lng}`}};return e.\u0275fac=function(t){return new(t||e)(o.Zb(P))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac}),e})(),D=(()=>{let e=class{constructor(e,t){this._mapsWrapper=e,this._zone=t,this._markers=new Map}convertAnimation(e){return Object(l.a)(this,void 0,void 0,(function*(){return null===e?null:this._mapsWrapper.getNativeMap().then(()=>google.maps.Animation[e])}))}deleteMarker(e){const t=this._markers.get(e);return null==t?Promise.resolve():t.then(t=>this._zone.run(()=>{t.setMap(null),this._markers.delete(e)}))}updateMarkerPosition(e){return this._markers.get(e).then(t=>t.setPosition({lat:e.latitude,lng:e.longitude}))}updateTitle(e){return this._markers.get(e).then(t=>t.setTitle(e.title))}updateLabel(e){return this._markers.get(e).then(t=>{t.setLabel(e.label)})}updateDraggable(e){return this._markers.get(e).then(t=>t.setDraggable(e.draggable))}updateIcon(e){return this._markers.get(e).then(t=>t.setIcon(e.iconUrl))}updateOpacity(e){return this._markers.get(e).then(t=>t.setOpacity(e.opacity))}updateVisible(e){return this._markers.get(e).then(t=>t.setVisible(e.visible))}updateZIndex(e){return this._markers.get(e).then(t=>t.setZIndex(e.zIndex))}updateClickable(e){return this._markers.get(e).then(t=>t.setClickable(e.clickable))}updateAnimation(e){return Object(l.a)(this,void 0,void 0,(function*(){(yield this._markers.get(e)).setAnimation(yield this.convertAnimation(e.animation))}))}addMarker(e){const t=new Promise(t=>Object(l.a)(this,void 0,void 0,(function*(){return this._mapsWrapper.createMarker({position:{lat:e.latitude,lng:e.longitude},label:e.label,draggable:e.draggable,icon:e.iconUrl,opacity:e.opacity,visible:e.visible,zIndex:e.zIndex,title:e.title,clickable:e.clickable,animation:yield this.convertAnimation(e.animation)}).then(t)})));this._markers.set(e,t)}getNativeMarker(e){return this._markers.get(e)}createEventObservable(e,t){return new h.a(n=>{this._markers.get(t).then(t=>{t.addListener(e,e=>this._zone.run(()=>n.next(e)))})})}};return e.\u0275fac=function(t){return new(t||e)(o.Zb(W),o.Zb(o.z))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac}),e})(),A=(()=>{let e=class{constructor(e,t,n){this._mapsWrapper=e,this._zone=t,this._markerManager=n,this._infoWindows=new Map}deleteInfoWindow(e){const t=this._infoWindows.get(e);return null==t?Promise.resolve():t.then(t=>this._zone.run(()=>{t.close(),this._infoWindows.delete(e)}))}setPosition(e){return this._infoWindows.get(e).then(t=>t.setPosition({lat:e.latitude,lng:e.longitude}))}setZIndex(e){return this._infoWindows.get(e).then(t=>t.setZIndex(e.zIndex))}open(e){return this._infoWindows.get(e).then(t=>null!=e.hostMarker?this._markerManager.getNativeMarker(e.hostMarker).then(e=>this._mapsWrapper.getNativeMap().then(n=>t.open(n,e))):this._mapsWrapper.getNativeMap().then(e=>t.open(e)))}close(e){return this._infoWindows.get(e).then(e=>e.close())}setOptions(e,t){return this._infoWindows.get(e).then(e=>e.setOptions(t))}addInfoWindow(e){const t={content:e.content,maxWidth:e.maxWidth,zIndex:e.zIndex,disableAutoPan:e.disableAutoPan};"number"==typeof e.latitude&&"number"==typeof e.longitude&&(t.position={lat:e.latitude,lng:e.longitude});const n=this._mapsWrapper.createInfoWindow(t);this._infoWindows.set(e,n)}createEventObservable(e,t){return new h.a(n=>{this._infoWindows.get(t).then(t=>{t.addListener(e,e=>this._zone.run(()=>n.next(e)))})})}};return e.\u0275fac=function(t){return new(t||e)(o.Zb(W),o.Zb(o.z),o.Zb(D))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac}),e})();var E;let Z=0,V=(()=>{let e=E=class{constructor(e,t){this._infoWindowManager=e,this._el=t,this.isOpen=!1,this.infoWindowClose=new o.n,this._infoWindowAddedToManager=!1,this._id=(Z++).toString()}ngOnInit(){this.content=this._el.nativeElement.querySelector(".agm-info-window-content"),this._infoWindowManager.addInfoWindow(this),this._infoWindowAddedToManager=!0,this._updateOpenState(),this._registerEventListeners()}ngOnChanges(e){this._infoWindowAddedToManager&&((e.latitude||e.longitude)&&"number"==typeof this.latitude&&"number"==typeof this.longitude&&this._infoWindowManager.setPosition(this),e.zIndex&&this._infoWindowManager.setZIndex(this),e.isOpen&&this._updateOpenState(),this._setInfoWindowOptions(e))}_registerEventListeners(){this._infoWindowManager.createEventObservable("closeclick",this).subscribe(()=>{this.isOpen=!1,this.infoWindowClose.emit()})}_updateOpenState(){this.isOpen?this.open():this.close()}_setInfoWindowOptions(e){let t={};Object.keys(e).filter(e=>-1!==E._infoWindowOptionsInputs.indexOf(e)).forEach(n=>{t[n]=e[n].currentValue}),this._infoWindowManager.setOptions(this,t)}open(){return this._infoWindowManager.open(this)}close(){return this._infoWindowManager.close(this).then(()=>{this.infoWindowClose.emit()})}id(){return this._id}toString(){return"AgmInfoWindow-"+this._id.toString()}ngOnDestroy(){this._infoWindowManager.deleteInfoWindow(this)}};return e.\u0275fac=function(t){return new(t||e)(o.Pb(A),o.Pb(o.l))},e.\u0275cmp=o.Jb({type:e,selectors:[["agm-info-window"]],inputs:{isOpen:"isOpen",latitude:"latitude",longitude:"longitude",disableAutoPan:"disableAutoPan",zIndex:"zIndex",maxWidth:"maxWidth"},outputs:{infoWindowClose:"infoWindowClose"},features:[o.zb()],ngContentSelectors:z,decls:2,vars:0,consts:[[1,"agm-info-window-content"]],template:function(e,t){1&e&&(o.mc(),o.Vb(0,"div",0),o.lc(1),o.Ub())},encapsulation:2}),e._infoWindowOptionsInputs=["disableAutoPan","maxWidth"],e})(),j=(()=>{let e=class{constructor(e,t){this._wrapper=e,this._zone=t,this._layers=new Map}addKmlLayer(e){const t=this._wrapper.getNativeMap().then(t=>new google.maps.KmlLayer({clickable:e.clickable,map:t,preserveViewport:e.preserveViewport,screenOverlays:e.screenOverlays,suppressInfoWindows:e.suppressInfoWindows,url:e.url,zIndex:e.zIndex}));this._layers.set(e,t)}setOptions(e,t){this._layers.get(e).then(e=>e.setOptions(t))}deleteKmlLayer(e){this._layers.get(e).then(t=>{t.setMap(null),this._layers.delete(e)})}createEventObservable(e,t){return new h.a(n=>{this._layers.get(t).then(t=>{t.addListener(e,e=>this._zone.run(()=>n.next(e)))})})}};return e.\u0275fac=function(t){return new(t||e)(o.Zb(W),o.Zb(o.z))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac}),e})();function R(e){const t=["insert_at","remove_at","set_at"];return function e(t,n,i){return i?e(t,n).pipe(Object(b.a)(e=>Object(p.a)(e)?i(...e):i(e))):new h.a(e=>{const i=(...t)=>e.next(1===t.length?t[0]:t);let s;try{s=t(i)}catch(r){return void e.error(r)}if(Object(g.a)(n))return()=>n(i,s)})}(n=>t.map(t=>e.addListener(t,(i,s)=>n.apply(e,[{newArr:e.getArray(),evName:t,index:i,previous:s}]))),(e,t)=>t.forEach(e=>e.remove()))}let N=(()=>{let e=class{constructor(e,t){this._mapsWrapper=e,this._zone=t,this._polygons=new Map}addPolygon(e){const t=this._mapsWrapper.createPolygon({clickable:e.clickable,draggable:e.draggable,editable:e.editable,fillColor:e.fillColor,fillOpacity:e.fillOpacity,geodesic:e.geodesic,paths:e.paths,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight,visible:e.visible,zIndex:e.zIndex});this._polygons.set(e,t)}updatePolygon(e){const t=this._polygons.get(e);return null==t?Promise.resolve():t.then(t=>this._zone.run(()=>{t.setPaths(e.paths)}))}setPolygonOptions(e,t){return this._polygons.get(e).then(e=>{e.setOptions(t)})}deletePolygon(e){const t=this._polygons.get(e);return null==t?Promise.resolve():t.then(t=>this._zone.run(()=>{t.setMap(null),this._polygons.delete(e)}))}getPath(e){return this._polygons.get(e).then(e=>e.getPath().getArray())}getPaths(e){return this._polygons.get(e).then(e=>e.getPaths().getArray().map(e=>e.getArray()))}createEventObservable(e,t){return new h.a(n=>{this._polygons.get(t).then(t=>{t.addListener(e,e=>this._zone.run(()=>n.next(e)))})})}createPathEventObservable(e){return Object(l.a)(this,void 0,void 0,(function*(){const t=(yield this._polygons.get(e)).getPaths();return R(t).pipe(Object(M.a)({newArr:t.getArray()}),Object(w.a)(e=>Object(m.a)(...e.newArr.map((t,n)=>R(t).pipe(Object(b.a)(t=>({parentMVEvent:e,chMVCEvent:t,pathIndex:n}))))).pipe(Object(M.a)({parentMVEvent:e,chMVCEvent:null,pathIndex:null}))),Object(I.a)(1),Object(b.a)(({parentMVEvent:e,chMVCEvent:t,pathIndex:n})=>{let i;return t?(i={newArr:e.newArr.map(e=>e.getArray().map(e=>e.toJSON())),pathIndex:n,eventName:t.evName,index:t.index},t.previous&&(i.previous=t.previous)):(i={newArr:e.newArr.map(e=>e.getArray().map(e=>e.toJSON())),eventName:e.evName,index:e.index},e.previous&&(i.previous=e.previous.getArray())),i}))}))}};return e.\u0275fac=function(t){return new(t||e)(o.Zb(W),o.Zb(o.z))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac}),e})();var $;let U=(()=>{let e=$=class{constructor(e,t){this._mapsWrapper=e,this._zone=t,this._polylines=new Map}static _convertPoints(e){return e._getPoints().map(e=>({lat:e.latitude,lng:e.longitude}))}static _convertPath(e){const t=google.maps.SymbolPath[e];return"number"==typeof t?t:e}static _convertIcons(e){const t=e._getIcons().map(e=>({fixedRotation:e.fixedRotation,offset:e.offset,repeat:e.repeat,icon:{anchor:new google.maps.Point(e.anchorX,e.anchorY),fillColor:e.fillColor,fillOpacity:e.fillOpacity,path:$._convertPath(e.path),rotation:e.rotation,scale:e.scale,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}}));return t.forEach(e=>{Object.entries(e).forEach(([t,n])=>{void 0===n&&delete e[t]}),void 0!==e.icon.anchor.x&&void 0!==e.icon.anchor.y||delete e.icon.anchor}),t}addPolyline(e){const t=this._mapsWrapper.getNativeMap().then(()=>[$._convertPoints(e),$._convertIcons(e)]).then(([t,n])=>this._mapsWrapper.createPolyline({clickable:e.clickable,draggable:e.draggable,editable:e.editable,geodesic:e.geodesic,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight,visible:e.visible,zIndex:e.zIndex,path:t,icons:n}));this._polylines.set(e,t)}updatePolylinePoints(e){const t=$._convertPoints(e),n=this._polylines.get(e);return null==n?Promise.resolve():n.then(e=>this._zone.run(()=>{e.setPath(t)}))}updateIconSequences(e){return Object(l.a)(this,void 0,void 0,(function*(){yield this._mapsWrapper.getNativeMap();const t=$._convertIcons(e),n=this._polylines.get(e);if(null!=n)return n.then(e=>this._zone.run(()=>e.setOptions({icons:t})))}))}setPolylineOptions(e,t){return this._polylines.get(e).then(e=>{e.setOptions(t)})}deletePolyline(e){const t=this._polylines.get(e);return null==t?Promise.resolve():t.then(t=>this._zone.run(()=>{t.setMap(null),this._polylines.delete(e)}))}getMVCPath(e){return Object(l.a)(this,void 0,void 0,(function*(){return(yield this._polylines.get(e)).getPath()}))}getPath(e){return Object(l.a)(this,void 0,void 0,(function*(){return(yield this.getMVCPath(e)).getArray()}))}createEventObservable(e,t){return new h.a(n=>{this._polylines.get(t).then(t=>{t.addListener(e,e=>this._zone.run(()=>n.next(e)))})})}createPathEventObservable(e){return Object(l.a)(this,void 0,void 0,(function*(){return R(yield this.getMVCPath(e))}))}};return e.\u0275fac=function(t){return new(t||e)(o.Zb(W),o.Zb(o.z))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac}),e})(),H=(()=>{let e=class{constructor(e,t){this._apiWrapper=e,this._zone=t,this._rectangles=new Map}addRectangle(e){this._rectangles.set(e,this._apiWrapper.createRectangle({bounds:{north:e.north,east:e.east,south:e.south,west:e.west},clickable:e.clickable,draggable:e.draggable,editable:e.editable,fillColor:e.fillColor,fillOpacity:e.fillOpacity,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokePosition:e.strokePosition,strokeWeight:e.strokeWeight,visible:e.visible,zIndex:e.zIndex}))}removeRectangle(e){return this._rectangles.get(e).then(t=>{t.setMap(null),this._rectangles.delete(e)})}setOptions(e,t){return this._rectangles.get(e).then(e=>e.setOptions(t))}getBounds(e){return this._rectangles.get(e).then(e=>e.getBounds())}setBounds(e){return this._rectangles.get(e).then(t=>t.setBounds({north:e.north,east:e.east,south:e.south,west:e.west}))}setEditable(e){return this._rectangles.get(e).then(t=>t.setEditable(e.editable))}setDraggable(e){return this._rectangles.get(e).then(t=>t.setDraggable(e.draggable))}setVisible(e){return this._rectangles.get(e).then(t=>t.setVisible(e.visible))}createEventObservable(e,t){return h.a.create(n=>{let i=null;return this._rectangles.get(t).then(t=>{i=t.addListener(e,e=>this._zone.run(()=>n.next(e)))}),()=>{null!==i&&i.remove()}})}};return e.\u0275fac=function(t){return new(t||e)(o.Zb(W),o.Zb(o.z))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac}),e})();var F;let J=(()=>{let e=F=class{constructor(e,t,n,i,s){this._elem=e,this._mapsWrapper=t,this._platformId=n,this._fitBoundsService=i,this._zone=s,this.longitude=0,this.latitude=0,this.zoom=8,this.draggable=!0,this.disableDoubleClickZoom=!1,this.disableDefaultUI=!1,this.scrollwheel=!0,this.keyboardShortcuts=!0,this.styles=[],this.usePanning=!1,this.fitBounds=!1,this.scaleControl=!1,this.mapTypeControl=!1,this.panControl=!1,this.rotateControl=!1,this.fullscreenControl=!1,this.mapTypeId="roadmap",this.clickableIcons=!0,this.showDefaultInfoWindow=!0,this.gestureHandling="auto",this.tilt=0,this._observableSubscriptions=[],this.mapClick=new o.n,this.mapRightClick=new o.n,this.mapDblClick=new o.n,this.centerChange=new o.n,this.boundsChange=new o.n,this.mapTypeIdChange=new o.n,this.idle=new o.n,this.zoomChange=new o.n,this.mapReady=new o.n,this.tilesLoaded=new o.n}ngOnInit(){if(Object(i.v)(this._platformId))return;const e=this._elem.nativeElement.querySelector(".agm-map-container-inner");this._initMapInstance(e)}_initMapInstance(e){this._mapsWrapper.createMap(e,{center:{lat:this.latitude||0,lng:this.longitude||0},zoom:this.zoom,minZoom:this.minZoom,maxZoom:this.maxZoom,controlSize:this.controlSize,disableDefaultUI:this.disableDefaultUI,disableDoubleClickZoom:this.disableDoubleClickZoom,scrollwheel:this.scrollwheel,backgroundColor:this.backgroundColor,draggable:this.draggable,draggableCursor:this.draggableCursor,draggingCursor:this.draggingCursor,keyboardShortcuts:this.keyboardShortcuts,styles:this.styles,zoomControl:this.zoomControl,zoomControlOptions:this.zoomControlOptions,streetViewControl:this.streetViewControl,streetViewControlOptions:this.streetViewControlOptions,scaleControl:this.scaleControl,scaleControlOptions:this.scaleControlOptions,mapTypeControl:this.mapTypeControl,mapTypeControlOptions:this.mapTypeControlOptions,panControl:this.panControl,panControlOptions:this.panControlOptions,rotateControl:this.rotateControl,rotateControlOptions:this.rotateControlOptions,fullscreenControl:this.fullscreenControl,fullscreenControlOptions:this.fullscreenControlOptions,mapTypeId:this.mapTypeId,clickableIcons:this.clickableIcons,gestureHandling:this.gestureHandling,tilt:this.tilt,restriction:this.restriction}).then(()=>this._mapsWrapper.getNativeMap()).then(e=>this.mapReady.emit(e)),this._handleMapCenterChange(),this._handleMapZoomChange(),this._handleMapMouseEvents(),this._handleBoundsChange(),this._handleMapTypeIdChange(),this._handleTilesLoadedEvent(),this._handleIdleEvent()}ngOnDestroy(){this._observableSubscriptions.forEach(e=>e.unsubscribe()),this._mapsWrapper.clearInstanceListeners(),this._fitBoundsSubscription&&this._fitBoundsSubscription.unsubscribe()}ngOnChanges(e){this._updateMapOptionsChanges(e),this._updatePosition(e)}_updateMapOptionsChanges(e){let t={};Object.keys(e).filter(e=>-1!==F._mapOptionsAttributes.indexOf(e)).forEach(n=>{t[n]=e[n].currentValue}),this._mapsWrapper.setMapOptions(t)}triggerResize(e=!0){return new Promise(t=>{setTimeout(()=>this._mapsWrapper.triggerMapEvent("resize").then(()=>{e&&(null!=this.fitBounds?this._fitBounds():this._setCenter()),t()}))})}_updatePosition(e){(null!=e.latitude||null!=e.longitude||e.fitBounds)&&("fitBounds"in e?this._fitBounds():"number"==typeof this.latitude&&"number"==typeof this.longitude&&this._setCenter())}_setCenter(){let e={lat:this.latitude,lng:this.longitude};this.usePanning?this._mapsWrapper.panTo(e):this._mapsWrapper.setCenter(e)}_fitBounds(){switch(this.fitBounds){case!0:this._subscribeToFitBoundsUpdates();break;case!1:this._fitBoundsSubscription&&this._fitBoundsSubscription.unsubscribe();break;default:this._updateBounds(this.fitBounds,this.fitBoundsPadding)}}_subscribeToFitBoundsUpdates(){this._zone.runOutsideAngular(()=>{this._fitBoundsSubscription=this._fitBoundsService.getBounds$().subscribe(e=>{this._zone.run(()=>this._updateBounds(e,this.fitBoundsPadding))})})}_updateBounds(e,t){if(e){if(this._isLatLngBoundsLiteral(e)&&"undefined"!=typeof google&&google&&google.maps&&google.maps.LatLngBounds){const t=new google.maps.LatLngBounds;t.union(e),e=t}this.usePanning?this._mapsWrapper.panToBounds(e,t):this._mapsWrapper.fitBounds(e,t)}}_isLatLngBoundsLiteral(e){return null!=e&&void 0===e.extend}_handleMapCenterChange(){const e=this._mapsWrapper.subscribeToMapEvent("center_changed").subscribe(()=>{this._mapsWrapper.getCenter().then(e=>{this.latitude=e.lat(),this.longitude=e.lng(),this.centerChange.emit({lat:this.latitude,lng:this.longitude})})});this._observableSubscriptions.push(e)}_handleBoundsChange(){const e=this._mapsWrapper.subscribeToMapEvent("bounds_changed").subscribe(()=>{this._mapsWrapper.getBounds().then(e=>{this.boundsChange.emit(e)})});this._observableSubscriptions.push(e)}_handleMapTypeIdChange(){const e=this._mapsWrapper.subscribeToMapEvent("maptypeid_changed").subscribe(()=>{this._mapsWrapper.getMapTypeId().then(e=>{this.mapTypeIdChange.emit(e)})});this._observableSubscriptions.push(e)}_handleMapZoomChange(){const e=this._mapsWrapper.subscribeToMapEvent("zoom_changed").subscribe(()=>{this._mapsWrapper.getZoom().then(e=>{this.zoom=e,this.zoomChange.emit(e)})});this._observableSubscriptions.push(e)}_handleIdleEvent(){const e=this._mapsWrapper.subscribeToMapEvent("idle").subscribe(()=>{this.idle.emit(void 0)});this._observableSubscriptions.push(e)}_handleTilesLoadedEvent(){const e=this._mapsWrapper.subscribeToMapEvent("tilesloaded").subscribe(()=>this.tilesLoaded.emit(void 0));this._observableSubscriptions.push(e)}_handleMapMouseEvents(){[{name:"click",emitter:this.mapClick},{name:"rightclick",emitter:this.mapRightClick},{name:"dblclick",emitter:this.mapDblClick}].forEach(e=>{const t=this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(t=>{let n={coords:{lat:t.latLng.lat(),lng:t.latLng.lng()},placeId:t.placeId};n.placeId&&!this.showDefaultInfoWindow&&t.stop(),e.emitter.emit(n)});this._observableSubscriptions.push(t)})}};return e.\u0275fac=function(t){return new(t||e)(o.Pb(o.l),o.Pb(W),o.Pb(o.B),o.Pb(x),o.Pb(o.z))},e.\u0275cmp=o.Jb({type:e,selectors:[["agm-map"]],hostVars:2,hostBindings:function(e,t){2&e&&o.Fb("sebm-google-map-container",!0)},inputs:{longitude:"longitude",latitude:"latitude",zoom:"zoom",draggable:["mapDraggable","draggable"],disableDoubleClickZoom:"disableDoubleClickZoom",disableDefaultUI:"disableDefaultUI",scrollwheel:"scrollwheel",keyboardShortcuts:"keyboardShortcuts",styles:"styles",usePanning:"usePanning",fitBounds:"fitBounds",scaleControl:"scaleControl",mapTypeControl:"mapTypeControl",panControl:"panControl",rotateControl:"rotateControl",fullscreenControl:"fullscreenControl",mapTypeId:"mapTypeId",clickableIcons:"clickableIcons",showDefaultInfoWindow:"showDefaultInfoWindow",gestureHandling:"gestureHandling",tilt:"tilt",minZoom:"minZoom",maxZoom:"maxZoom",controlSize:"controlSize",backgroundColor:"backgroundColor",draggableCursor:"draggableCursor",draggingCursor:"draggingCursor",zoomControl:"zoomControl",zoomControlOptions:"zoomControlOptions",streetViewControl:"streetViewControl",streetViewControlOptions:"streetViewControlOptions",fitBoundsPadding:"fitBoundsPadding",scaleControlOptions:"scaleControlOptions",mapTypeControlOptions:"mapTypeControlOptions",panControlOptions:"panControlOptions",rotateControlOptions:"rotateControlOptions",fullscreenControlOptions:"fullscreenControlOptions",restriction:"restriction"},outputs:{mapClick:"mapClick",mapRightClick:"mapRightClick",mapDblClick:"mapDblClick",centerChange:"centerChange",boundsChange:"boundsChange",mapTypeIdChange:"mapTypeIdChange",idle:"idle",zoomChange:"zoomChange",mapReady:"mapReady",tilesLoaded:"tilesLoaded"},features:[o.Ab([S,T,T,x,W,A,j,L,D,N,U,H]),o.zb()],ngContentSelectors:z,decls:3,vars:0,consts:[[1,"agm-map-container-inner","sebm-google-map-container-inner"],[1,"agm-map-content"]],template:function(e,t){1&e&&(o.mc(),o.Qb(0,"div",0),o.Vb(1,"div",1),o.lc(2),o.Ub())},styles:[".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"]}),e._mapOptionsAttributes=["disableDoubleClickZoom","scrollwheel","draggable","draggableCursor","draggingCursor","keyboardShortcuts","zoomControl","zoomControlOptions","styles","streetViewControl","streetViewControlOptions","zoom","mapTypeControl","mapTypeControlOptions","minZoom","maxZoom","panControl","panControlOptions","rotateControl","rotateControlOptions","fullscreenControl","fullscreenControlOptions","scaleControl","scaleControlOptions","mapTypeId","clickableIcons","gestureHandling","tilt","restriction"],e})();var q;let G=0,K=(()=>{let e=q=class{constructor(e){this._markerManager=e,this.draggable=!1,this.visible=!0,this.openInfoWindow=!0,this.opacity=1,this.zIndex=1,this.clickable=!0,this.animationChange=new o.n,this.markerClick=new o.n,this.markerDblClick=new o.n,this.markerRightClick=new o.n,this.dragStart=new o.n,this.drag=new o.n,this.dragEnd=new o.n,this.mouseOver=new o.n,this.mouseOut=new o.n,this.infoWindow=new o.D,this._markerAddedToManger=!1,this._observableSubscriptions=[],this._fitBoundsDetails$=new _.a(1),this._id=(G++).toString()}ngAfterContentInit(){this.handleInfoWindowUpdate(),this.infoWindow.changes.subscribe(()=>this.handleInfoWindowUpdate())}handleInfoWindowUpdate(){if(this.infoWindow.length>1)throw new Error("Expected no more than one info window.");this.infoWindow.forEach(e=>{e.hostMarker=this})}ngOnChanges(e){if("string"==typeof this.latitude&&(this.latitude=Number(this.latitude)),"string"==typeof this.longitude&&(this.longitude=Number(this.longitude)),"number"==typeof this.latitude&&"number"==typeof this.longitude){if(!this._markerAddedToManger)return this._markerManager.addMarker(this),this._updateFitBoundsDetails(),this._markerAddedToManger=!0,void this._addEventListeners();(e.latitude||e.longitude)&&(this._markerManager.updateMarkerPosition(this),this._updateFitBoundsDetails()),e.title&&this._markerManager.updateTitle(this),e.label&&this._markerManager.updateLabel(this),e.draggable&&this._markerManager.updateDraggable(this),e.iconUrl&&this._markerManager.updateIcon(this),e.opacity&&this._markerManager.updateOpacity(this),e.visible&&this._markerManager.updateVisible(this),e.zIndex&&this._markerManager.updateZIndex(this),e.clickable&&this._markerManager.updateClickable(this),e.animation&&this._markerManager.updateAnimation(this)}}getFitBoundsDetails$(){return this._fitBoundsDetails$.asObservable()}_updateFitBoundsDetails(){this._fitBoundsDetails$.next({latLng:{lat:this.latitude,lng:this.longitude}})}_addEventListeners(){const e=this._markerManager.createEventObservable("click",this).subscribe(()=>{this.openInfoWindow&&this.infoWindow.forEach(e=>e.open()),this.markerClick.emit(this)});this._observableSubscriptions.push(e);const t=this._markerManager.createEventObservable("dblclick",this).subscribe(()=>{this.markerDblClick.emit(null)});this._observableSubscriptions.push(t);const n=this._markerManager.createEventObservable("rightclick",this).subscribe(()=>{this.markerRightClick.emit(null)});this._observableSubscriptions.push(n);const i=this._markerManager.createEventObservable("dragstart",this).subscribe(e=>{this.dragStart.emit({coords:{lat:e.latLng.lat(),lng:e.latLng.lng()}})});this._observableSubscriptions.push(i);const s=this._markerManager.createEventObservable("drag",this).subscribe(e=>{this.drag.emit({coords:{lat:e.latLng.lat(),lng:e.latLng.lng()}})});this._observableSubscriptions.push(s);const r=this._markerManager.createEventObservable("dragend",this).subscribe(e=>{this.dragEnd.emit({coords:{lat:e.latLng.lat(),lng:e.latLng.lng()}})});this._observableSubscriptions.push(r);const o=this._markerManager.createEventObservable("mouseover",this).subscribe(e=>{this.mouseOver.emit({coords:{lat:e.latLng.lat(),lng:e.latLng.lng()}})});this._observableSubscriptions.push(o);const a=this._markerManager.createEventObservable("mouseout",this).subscribe(e=>{this.mouseOut.emit({coords:{lat:e.latLng.lat(),lng:e.latLng.lng()}})});this._observableSubscriptions.push(a);const l=this._markerManager.createEventObservable("animation_changed",this).subscribe(()=>{this.animationChange.emit(this.animation)});this._observableSubscriptions.push(l)}id(){return this._id}toString(){return"AgmMarker-"+this._id.toString()}ngOnDestroy(){this._markerManager.deleteMarker(this),this._observableSubscriptions.forEach(e=>e.unsubscribe())}};return e.\u0275fac=function(t){return new(t||e)(o.Pb(D))},e.\u0275dir=o.Kb({type:e,selectors:[["agm-marker"]],contentQueries:function(e,t,n){var i;1&e&&o.Hb(n,V,!1),2&e&&o.sc(i=o.ec())&&(t.infoWindow=i)},inputs:{latitude:"latitude",longitude:"longitude",title:"title",label:"label",draggable:["markerDraggable","draggable"],iconUrl:"iconUrl",openInfoWindow:"openInfoWindow",opacity:"opacity",visible:"visible",zIndex:"zIndex",animation:"animation",clickable:["markerClickable","clickable"]},outputs:{markerClick:"markerClick",dragStart:"dragStart",drag:"drag",dragEnd:"dragEnd",mouseOver:"mouseOver",mouseOut:"mouseOut",animationChange:"animationChange",markerDblClick:"markerDblClick",markerRightClick:"markerRightClick"},features:[o.Ab([{provide:B,useExisting:Object(o.T)(()=>q)}]),o.zb()]}),e})();class X{getNativeWindow(){return window}}class Y{getNativeDocument(){return document}}const Q=[X,Y];var ee=function(e){return e[e.HTTP=1]="HTTP",e[e.HTTPS=2]="HTTPS",e[e.AUTO=3]="AUTO",e}({});const te=new o.q("angular-google-maps LAZY_MAPS_API_CONFIG");let ne=(()=>{let e=class extends P{constructor(e=null,t,n,i){super(),this.localeId=i,this._SCRIPT_ID="agmGoogleMapsApiScript",this.callbackName="agmLazyMapsAPILoader",this._config=e||{},this._windowRef=t,this._documentRef=n}load(){const e=this._windowRef.getNativeWindow();if(e.google&&e.google.maps)return Promise.resolve();if(this._scriptLoadingPromise)return this._scriptLoadingPromise;const t=this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);if(t)return this._assignScriptLoadingPromise(t),this._scriptLoadingPromise;const n=this._documentRef.getNativeDocument().createElement("script");return n.type="text/javascript",n.async=!0,n.defer=!0,n.id=this._SCRIPT_ID,n.src=this._getScriptSrc(this.callbackName),this._assignScriptLoadingPromise(n),this._documentRef.getNativeDocument().body.appendChild(n),this._scriptLoadingPromise}_assignScriptLoadingPromise(e){this._scriptLoadingPromise=new Promise((t,n)=>{this._windowRef.getNativeWindow()[this.callbackName]=()=>{t()},e.onerror=e=>{n(e)}})}_getScriptSrc(e){let t;switch(this._config&&this._config.protocol||ee.HTTPS){case ee.AUTO:t="";break;case ee.HTTP:t="http:";break;case ee.HTTPS:t="https:"}const n={v:this._config.apiVersion||"quarterly",callback:e,key:this._config.apiKey,client:this._config.clientId,channel:this._config.channel,libraries:this._config.libraries,region:this._config.region,language:this._config.language||"en-US"!==this.localeId?this.localeId:null};return`${t}//${this._config.hostAndPath||"maps.googleapis.com/maps/api/js"}?${Object.keys(n).filter(e=>null!=n[e]).filter(e=>!Array.isArray(n[e])||Array.isArray(n[e])&&n[e].length>0).map(e=>{let t=n[e];return Array.isArray(t)?{key:e,value:t.join(",")}:{key:e,value:n[e]}}).map(e=>`${e.key}=${e.value}`).join("&")}`}};return e.\u0275fac=function(t){return new(t||e)(o.Zb(te,8),o.Zb(X),o.Zb(Y),o.Zb(o.u))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac}),e})();var ie;let se=(()=>{let e=ie=class{static forRoot(e){return{ngModule:ie,providers:[...Q,{provide:P,useClass:ne},{provide:te,useValue:e}]}}};return e.\u0275mod=o.Nb({type:e}),e.\u0275inj=o.Mb({factory:function(t){return new(t||e)}}),e})();function re(e,t){if(1&e&&o.Qb(0,"agm-marker",3),2&e){const e=t.$implicit;o.nc("latitude",e.latitude)("longitude",e.longitude)("label",e.label)("markerDraggable",e.draggable)}}function oe(e,t){if(1&e&&(o.Vb(0,"agm-map",1),o.Dc(1,re,1,4,"agm-marker",2),o.Ub()),2&e){const e=o.hc();o.nc("latitude",e.lat)("longitude",e.long)("zoom",e.zoom)("disableDefaultUI",!1)("zoomControl",!1),o.Bb(1),o.nc("ngForOf",e.mapData)}}const ae=[{path:"",component:(()=>{class e{constructor(e){this.earthquakeService=e,this.zoom=2,this.lat=-38.416096,this.long=-63.616673,this.mapData=[],this.destroyed$=new r.a}ngOnInit(){this.earthquakeService.getEarthquakeData().subscribe(e=>{this.data=e,this.generateMapData()})}generateMapData(){this.mapData=[];for(const e of this.data.geometries)this.mapData.push({latitude:e.coordinates[0],longitude:e.coordinates[1],draggable:!1})}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}}return e.\u0275fac=function(t){return new(t||e)(o.Pb(a.a))},e.\u0275cmp=o.Jb({type:e,selectors:[["app-data-map"]],decls:1,vars:1,consts:[[3,"latitude","longitude","zoom","disableDefaultUI","zoomControl",4,"ngIf"],[3,"latitude","longitude","zoom","disableDefaultUI","zoomControl"],[3,"latitude","longitude","label","markerDraggable",4,"ngFor","ngForOf"],[3,"latitude","longitude","label","markerDraggable"]],template:function(e,t){1&e&&o.Dc(0,oe,2,6,"agm-map",0),2&e&&o.nc("ngIf",t.data)},directives:[i.l,J,i.k,K],styles:["agm-map[_ngcontent-%COMP%]{height:600px}"]}),e})()}];let le=(()=>{class e{}return e.\u0275mod=o.Nb({type:e}),e.\u0275inj=o.Mb({factory:function(t){return new(t||e)},imports:[[s.b.forChild(ae)],s.b]}),e})();n.d(t,"MapModule",(function(){return he}));let he=(()=>{class e{}return e.\u0275mod=o.Nb({type:e}),e.\u0275inj=o.Mb({factory:function(t){return new(t||e)},imports:[[i.c,le,se.forRoot({apiKey:"AIzaSyDBvu5D94WBkPYj3mFD9pl8rwwIIM_8ulQ"})]]}),e})()}}]);