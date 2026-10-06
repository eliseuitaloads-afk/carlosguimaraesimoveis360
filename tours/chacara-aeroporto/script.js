(function(){
    var script = {
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.MainViewer",
  "this.Container_04703DA4_0BC0_469B_418C_E99C811468A2",
  "this.Container_193B3BA1_0BC0_4332_4192_EE1E9A16C507"
 ],
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingRight": 0,
 "start": "this.init()",
 "contentOpaque": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "defaultVRPointer": "laser",
 "verticalAlign": "top",
 "scripts": {
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } }
 },
 "downloadEnabled": true,
 "class": "Player",
 "width": "100%",
 "backgroundPreloadEnabled": true,
 "layout": "absolute",
 "minWidth": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B04E5807_9491_17DB_41DC_E77570FB08FA",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B59FFEE6_9491_085D_41D5_8F74C477CA80",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_100423_00_003",
 "hfovMin": "150%",
 "id": "panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0",
 "overlays": [
  "this.overlay_12342E30_0C40_41AC_4194_78C42635E35F",
  "this.panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 163.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_0299F649_0F68_DD83_418D_EF25EE4FD442"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8A231913_9493_09FB_41D0_61CBD047CA49",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_101136_00_017",
 "hfovMin": "150%",
 "id": "panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9",
 "overlays": [
  "this.overlay_2A11BE0E_0C40_418A_41A2_71B0F1A19385",
  "this.panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B34A3F38_94B1_0834_41DF_0359CC70247E",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_100533_00_006",
 "hfovMin": "150%",
 "id": "panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D",
 "overlays": [
  "this.overlay_10472C9E_0C40_4292_41AD_C38F19B121C7",
  "this.overlay_10C19DB9_0C40_429F_4199_88EEF4C53617",
  "this.overlay_3E7D7D71_0CC1_C383_41A7_BC11B04B0C28",
  "this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E"
  },
  {
   "yaw": 62.52,
   "class": "AdjacentPanorama",
   "backwardYaw": -152.53,
   "panorama": "this.panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_89C6CE9B_9493_08F4_41D0_6FC7289F89C4",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B09A4863_9491_0854_41D5_538F6C41E041",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_104625_00_025",
 "hfovMin": "150%",
 "id": "panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C",
 "overlays": [
  "this.overlay_25D538DD_0C40_C285_418C_4D4272EED104",
  "this.panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8AA69BBF_9491_082C_419F_18F08AED488F",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6F7BA33C_7EFC_441C_41DB_B2AD5132287F",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6F934347_7EFD_C46C_41CD_98E4D1803E93",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B6899F1B_9497_09EB_41D0_1592754F094F",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_101028_00_015",
 "hfovMin": "150%",
 "id": "panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664",
 "overlays": [
  "this.overlay_2B93FAC8_0C41_C6F4_419E_E0E269849356",
  "this.panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_camera"
  },
  {
   "media": "this.panorama_01920874_0BC0_CE14_4195_8C83933A94EE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01920874_0BC0_CE14_4195_8C83933A94EE_camera"
  },
  {
   "media": "this.panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_camera"
  },
  {
   "media": "this.panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_camera"
  },
  {
   "media": "this.panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_camera"
  },
  {
   "media": "this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_camera"
  },
  {
   "media": "this.panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_camera"
  },
  {
   "media": "this.panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_camera"
  },
  {
   "media": "this.panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_camera"
  },
  {
   "media": "this.panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_camera"
  },
  {
   "media": "this.panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_camera"
  },
  {
   "media": "this.panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_camera"
  },
  {
   "media": "this.panorama_01B8745A_0BC3_C618_4162_33FFC5315781",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01B8745A_0BC3_C618_4162_33FFC5315781_camera"
  },
  {
   "media": "this.panorama_01A47A98_0BC3_C218_41A1_D322C71C584E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_camera"
  },
  {
   "media": "this.panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_camera"
  },
  {
   "media": "this.panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_camera"
  },
  {
   "media": "this.panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_camera"
  },
  {
   "media": "this.panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_camera"
  },
  {
   "media": "this.panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_camera"
  },
  {
   "media": "this.panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_camera"
  },
  {
   "media": "this.panorama_01A0B57E_0BC0_461D_4176_870008DC0288",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A0B57E_0BC0_461D_4176_870008DC0288_camera"
  },
  {
   "media": "this.panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_camera"
  },
  {
   "media": "this.panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_camera"
  },
  {
   "media": "this.panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_camera"
  },
  {
   "media": "this.panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_camera"
  },
  {
   "media": "this.panorama_01BD2F59_0BC0_C265_4193_8578340ED591",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01BD2F59_0BC0_C265_4193_8578340ED591_camera"
  },
  {
   "media": "this.panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_camera"
  },
  {
   "media": "this.panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_camera"
  },
  {
   "media": "this.panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6C9A8F04_7EFC_7DEC_4197_07A12DF6DE72",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8A1C3F2A_949F_09D5_41E0_2D8A6911EDE7",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B1CE741F_9493_3FEB_41CC_345874C16FAD",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6F6D4344_7EFD_C463_41DC_2E289C95FE19",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B5454E96_9491_08FD_41E1_00E88377BCE3",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B4FDAC36_9491_083D_41E1_7356505AC888",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_18BBC752_310E_006C_41B5_0D8B802FB057",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6FBA5300_7EFD_C5E4_41CF_75BE5933BA16",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B0DCD7C6_9497_185A_41D8_A531C3BCF55A",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8B8DA8FA_9497_0834_41D5_EEF8CA41DCE2",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B22B4AA8_94B3_08D5_41E0_E23ACF2CDC21",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B67B571B_9491_79F4_41E0_0469A8275BE5",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_BCBF1381_94B1_18D4_41DA_F5BC32E00C21",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8B815542_9491_1855_41DA_0BE52A4755F9",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B6DC70EB_9493_3854_41DE_A2CA859C752F",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6F0C2178_7EF3_C424_41DB_BFCD7CE82F8B",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_101422_00_023",
 "hfovMin": "150%",
 "id": "panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6",
 "overlays": [
  "this.overlay_27B83E1D_0C40_418B_419D_2AFC7137E3D9",
  "this.overlay_2544B9F5_0C40_C285_4199_9048DDF739DD",
  "this.panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A0B57E_0BC0_461D_4176_870008DC0288"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B65E46AF_9493_182B_41DF_8471ED8FC98E",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_100937_00_013",
 "hfovMin": "150%",
 "id": "panorama_01B8745A_0BC3_C618_4162_33FFC5315781",
 "overlays": [
  "this.overlay_2D2BA893_0C40_C297_4188_ECFF15BF2173",
  "this.panorama_01B8745A_0BC3_C618_4162_33FFC5315781_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A47A98_0BC3_C218_41A1_D322C71C584E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6F643CB8_7EFC_DC24_41D9_938D437BF2FE",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B1E90B83_9491_08D4_41D3_68B861E7D819",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B176C187_94B3_18DC_41DD_86A1B3A6D16A",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_101214_00_019",
 "hfovMin": "150%",
 "id": "panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9",
 "overlays": [
  "this.overlay_2817BC41_0C40_41F9_419A_53A9A6AFCD3D",
  "this.panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_104702_00_026",
 "hfovMin": "150%",
 "id": "panorama_01BD2F59_0BC0_C265_4193_8578340ED591",
 "overlays": [
  "this.overlay_247BAA48_0C40_418C_41A3_F0E253C3EFAC",
  "this.overlay_23894ED2_0C40_3E9D_4192_DBF2BAEF9044",
  "this.overlay_25CF7C23_0C41_C183_419F_91506F0FD65E",
  "this.panorama_01BD2F59_0BC0_C265_4193_8578340ED591_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D"
  },
  {
   "yaw": 28.35,
   "class": "AdjacentPanorama",
   "backwardYaw": -16.99,
   "panorama": "this.panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_100832_00_011",
 "hfovMin": "150%",
 "id": "panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49",
 "overlays": [
  "this.overlay_2E86C689_0C40_4173_4195_863CDF5F6CBB",
  "this.panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -154.16,
   "class": "AdjacentPanorama",
   "backwardYaw": 64.53,
   "panorama": "this.panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_100739_00_009",
 "hfovMin": "150%",
 "id": "panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C",
 "overlays": [
  "this.overlay_10C39209_0C40_4170_4193_44133D269C96",
  "this.panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8B6A412F_949F_382C_41D0_B8EAABFD42EC",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_100333_00_001",
 "hfovMin": "150%",
 "id": "panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A",
 "overlays": [
  "this.overlay_12331490_0C4F_C16B_41A5_CCA62876B3FC",
  "this.panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01920874_0BC0_CE14_4195_8C83933A94EE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_104821_00_029",
 "hfovMin": "150%",
 "id": "panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D",
 "overlays": [
  "this.overlay_214191B8_0C41_C28F_4178_A7665DC085C7",
  "this.overlay_21EABB10_0C40_479F_41A6_A4E6E296FAD3",
  "this.panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E"
  },
  {
   "yaw": -16.99,
   "class": "AdjacentPanorama",
   "backwardYaw": 28.35,
   "panorama": "this.panorama_01BD2F59_0BC0_C265_4193_8578340ED591",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B798BAF7_9491_083B_41E0_72A7199D0D31",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6E72F95C_7EFC_C41C_41D6_75F45577796D",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_101304_00_021",
 "hfovMin": "150%",
 "id": "panorama_01A0B57E_0BC0_461D_4176_870008DC0288",
 "overlays": [
  "this.overlay_289BECE9_0C40_428B_4197_45581700C3B9",
  "this.overlay_2791483A_0C4F_C189_41A3_DCD6994EF6D0",
  "this.panorama_01A0B57E_0BC0_461D_4176_870008DC0288_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6EE1DB6F_7EFC_443C_41B8_BACF19F5205B",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B02F7E6B_9491_082B_41CC_A3B8AE1814DE",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_88058052_9491_F874_41C8_DB3349E1BEE1",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B1670F28_94B1_09D5_41A1_2C5A4ED7D4DC",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_100449_00_004",
 "hfovMin": "150%",
 "id": "panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF",
 "overlays": [
  "this.overlay_12847D2F_0C41_C3B3_416A_BE1A571BB499",
  "this.panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B6EA9E07_9491_0BDC_41D3_3F6AD3783ABE",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8963A4FE_9497_382C_41C3_E57563184DB9",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8A954146_9497_385C_41BA_68B31A1C0575",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_896FA3EA_9493_3854_41BE_C6AF134EA53D",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B34BF78D_94B1_F8EC_41CF_9FD95971A634",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B3F4D89D_94B1_08EC_41A7_AA127AB48C60",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B625A32F_9491_382B_41B3_2E55B1C3018E",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8B6AABCE_9491_086D_41E0_5DCDB3CA3E52",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B6258D2F_9491_082B_41DE_9AF337AA3DF5",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8BAF5302_9493_39D5_41C8_B519ABDBC4E9",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B5BD2D9B_9493_08F4_41C4_412B2FF594B4",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8AF862CB_9491_386B_41D8_7AAC1CAD5207",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6C4FA978_7EFC_C424_41DA_519605965466",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 139.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_016AD651_0F68_DD83_41A8_A1663C0FE198"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6F775B48_7EFC_4464_41D0_5F685A6DF4DF",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B79FD722_9493_39D4_41D5_0A9CE563DBEC",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_88C6C95F_9491_086C_4199_A68102469DE1",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_112869ED_311E_0034_41C2_70A247245BB7",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B58F2C4F_9491_086B_41C6_A8369D9E7FB0",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_100508_00_005",
 "hfovMin": "150%",
 "id": "panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1",
 "overlays": [
  "this.overlay_110E3450_0C40_C1ED_41AC_A247C7CB6106",
  "this.panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B0F48524_9493_19DC_41CD_D6D8B0EC3851",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B66FC25B_9491_186B_41DD_042FBA348796",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6DC2F695_7F0D_CCEC_41DE_1717A5BCC13E",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B3CF3F9D_94B1_08EC_41D9_E24CD7733252",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B77CFA6F_9491_082B_41E0_D85FC35AABCA",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6E417DE0_7EFD_DC24_41C1_9DAD95E670ED",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01B8745A_0BC3_C618_4162_33FFC5315781_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6FFF10DC_7EFC_4463_41C6_AB36683E158C",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_camera",
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": 0,
   "easing": "cubic_in_out",
   "duration": 3000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "displayOriginPosition": {
  "yaw": 0,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 27.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_01746661_0F68_DD83_41AC_CEA775EEAB0C"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_899FD635_9491_183F_41D0_7002C81DFC77",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_100357_00_002",
 "hfovMin": "150%",
 "id": "panorama_01920874_0BC0_CE14_4195_8C83933A94EE",
 "overlays": [
  "this.overlay_12419519_0C41_C39D_4198_CFBDD1C9B253",
  "this.panorama_01920874_0BC0_CE14_4195_8C83933A94EE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_101159_00_018",
 "hfovMin": "150%",
 "id": "panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542",
 "overlays": [
  "this.overlay_2970FF2F_0C43_DF89_41A3_2AF53DFB8C2F",
  "this.overlay_29A9E327_0C43_C7B9_41AC_B52DE201CF58",
  "this.panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A0B57E_0BC0_461D_4176_870008DC0288"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B1D80C9F_9491_08EB_41DD_FC28B6347ECB",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B481A4D6_9491_387D_41CF_8034E66B72D2",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_101006_00_014",
 "hfovMin": "150%",
 "id": "panorama_01A47A98_0BC3_C218_41A1_D322C71C584E",
 "overlays": [
  "this.overlay_2DBBA54C_0C41_C3F2_41A7_8B46848D7641",
  "this.overlay_2DEC3CBC_0C41_C292_4188_1D8C2BA17E42",
  "this.panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_100910_00_012",
 "hfovMin": "150%",
 "id": "panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC",
 "overlays": [
  "this.overlay_2ED3B6F3_0C5F_CE97_41A8_B5F83EF104A0",
  "this.panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01B8745A_0BC3_C618_4162_33FFC5315781"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B265A3B0_94B3_3834_41D1_12F31D8BFE52",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B0C95277_9493_783C_41D6_8FAD5310A7B0",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B568C9B2_9491_0835_41E0_7C027FD6DCB1",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B27E5D6D_94B3_082C_41E1_33D169919C25",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_104746_00_027",
 "hfovMin": "150%",
 "id": "panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E",
 "overlays": [
  "this.overlay_24CA822E_0C40_4182_4194_B8A109C7DC7D",
  "this.overlay_236CADD6_0C40_4282_4198_D824788DADD7",
  "this.panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -40.99,
   "class": "AdjacentPanorama",
   "backwardYaw": -154.54,
   "panorama": "this.panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B5F6E88B_9493_08D4_4198_D7D5C1DEAE32",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B3FEF8A1_94B1_08D4_41E1_B824963794F5",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6EB05887_7EFC_44EC_41DF_6F5D9CDE67B6",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_101403_00_022",
 "hfovMin": "150%",
 "id": "panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E",
 "overlays": [
  "this.overlay_27A988F1_0C40_C29B_4182_F74F9A630863",
  "this.panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6CDF7CD1_7EF4_BC65_41BB_4C3B13DE93F2",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B7830787_9493_38DB_41DB_A8E9E94D0517",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B482C092_9491_18F5_41DA_C54078523BC0",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_2EF4EDF2_311A_002F_41B7_7476A5CB22BB",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_101116_00_016",
 "hfovMin": "150%",
 "id": "panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9",
 "overlays": [
  "this.overlay_2B63B995_0C40_429C_4195_01CCD1705E40",
  "this.overlay_2BA7F7BD_0C40_CE8C_419E_7985ECE698D4",
  "this.panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B64D30CB_9491_386B_41DA_342B819E43AC",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 25.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_02AFA62E_0F68_DD81_419F_37746FC5BC5D"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8AE5EAF6_9491_083D_41DB_CA2F71BBCDC1",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_100811_00_010",
 "hfovMin": "150%",
 "id": "panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2",
 "overlays": [
  "this.overlay_2F111692_0C40_CE90_41A0_8AC69BB3D0FA",
  "this.overlay_2FB60E02_0C40_C170_41AC_76F8705D19E9",
  "this.overlay_2FE52C10_0C40_C190_41A1_4533F256ACAC",
  "this.panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 64.53,
   "class": "AdjacentPanorama",
   "backwardYaw": -154.16,
   "panorama": "this.panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01B8745A_0BC3_C618_4162_33FFC5315781"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B626EB76_9493_083A_41E0_3863BFDE65E0",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01BD2F59_0BC0_C265_4193_8578340ED591_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -151.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_028A0641_0F68_DD83_41A4_609083237A9B"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B59045F2_9493_1835_41DE_3E60A7B32805",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_101235_00_020",
 "hfovMin": "150%",
 "id": "panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66",
 "overlays": [
  "this.overlay_28589C29_0C41_C188_41A7_4582B74A73DD",
  "this.panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B6F65D40_9493_0854_41D3_91100B2C991E",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6E1D1A84_7EFC_44EC_41D2_A7D7A6578CE1",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01920874_0BC0_CE14_4195_8C83933A94EE_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8B4DCEF3_9493_083B_4189_D2BBEAABCE39",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B0BB10AF_9491_182C_41B8_D3118E6F2E91",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6C591FB1_7EF4_5C24_41DE_1D62A40BF396",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8A79E75A_949F_1874_41DB_B8859D03684A",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B3C94E6D_94B1_082F_41D1_5D861E9658E5",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8822E8AA_9497_08D5_4174_26CC5E1E4686",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6EB6DA23_7EF4_C424_41CD_C7E215878810",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B21F8580_94B3_18D5_41C5_19BFB320DA74",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B067415B_9491_F874_41D1_8A279D72E996",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8B6C9DB3_949F_083B_41CD_C9D467FE2549",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B48232C7_9491_185B_41DA_589BEAD8EFE7",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6FE9B3C0_7EFF_C464_41AD_0C85819CAC1D",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01A0B57E_0BC0_461D_4176_870008DC0288_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B3554030_94B1_3834_41C9_475DE0CD0469",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B70347B8_9491_1834_41C3_6D356CC569AB",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8A2EDCC6_949F_085D_41C7_FD6618A3A0DE",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8BFC2468_9491_1854_41BF_A5CC5585CF55",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8B839F4E_9491_086D_41C7_7BE21F22B2B4",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_898D54CF_9493_386B_41C9_EE8C51220E79",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_100618_00_007",
 "hfovMin": "150%",
 "id": "panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4",
 "overlays": [
  "this.overlay_1055BBE9_0C40_C6B1_4192_24F6073ED3C6",
  "this.panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -117.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_01446668_0F68_DD81_41A3_93992792CD5A"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -115.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_02B85638_0F68_DD81_41AD_370A09B3500F"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_100714_00_008",
 "hfovMin": "150%",
 "id": "panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350",
 "overlays": [
  "this.overlay_108C18F9_0C40_4291_4194_CE489E5205D5",
  "this.panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B328B944_94B1_085D_41D2_100952628A44",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_163FEAB2_310E_002C_416A_B20913F49C44",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8AEC3735_9491_383F_41E0_CF7CBACF3F83",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6F36D593_7EFC_4CE4_41C0_C765037E8ABF",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_898428F2_9493_0835_41DD_CCF2E926B3B1",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B408C7EA_9491_7855_41DD_127E3B34D959",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B0859FF2_9493_0835_41DA_F4FB89B321BF",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_104805_00_028",
 "hfovMin": "150%",
 "id": "panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37",
 "overlays": [
  "this.overlay_22717AD9_0C40_C68E_4193_2FDC15409DD8",
  "this.overlay_22996DB7_0C40_C281_41A6_E2465FDA2212",
  "this.panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -154.54,
   "class": "AdjacentPanorama",
   "backwardYaw": -40.99,
   "panorama": "this.panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20261001_104608_00_024",
 "hfovMin": "150%",
 "id": "panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF",
 "overlays": [
  "this.overlay_26CEC0AC_0C41_C28B_41A7_7A25A13EA9CE",
  "this.overlay_242C3F7C_0C40_5F84_4199_4675ED6675AE",
  "this.panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -152.53,
   "class": "AdjacentPanorama",
   "backwardYaw": 62.52,
   "panorama": "this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_713EE907_7EF5_C5EC_41D2_0A93448DEC18",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_camera"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_6F3D598C_7EFC_44FC_41C4_DE9C841D39F3",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8AB97F8A_9493_08D5_41E0_203E1AE10860",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B449F77A_9493_1835_41D1_60C897D410BD",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B5F508CE_9491_086D_41E1_D7C227D4EE39",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8961C26A_9497_F854_4178_2793F4F53035",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B24695C0_94B1_F855_41D9_964355EF2B59",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_897E419E_9497_78EC_41C6_F0A57FA56749",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B539B4C7_9491_185C_419E_962527A957FB",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B681F4A4_9491_78DD_41E2_5B76E3856C13",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B7CA2CC3_9491_085B_41C6_518E9C84FB66",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_8A78E7D3_9491_187B_41CE_68D80759D3B4",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B5506FF6_9493_083D_4175_2565FEC00830",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 25.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_017B3658_0F68_DD81_4186_1F2D13DA871E"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B59EA966_9497_085D_41D4_CC23D3789789",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B60AE61B_9491_3BF4_41DF_19C7BF97DFF0",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B44B5EBB_9497_082B_41D8_6A78A8A73A6D",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_B1803CFF_9497_082C_41D4_CAC52C83643D",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "playbackBarBottom": 5,
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "toolTipFontSize": "1.11vmin",
 "right": -153,
 "toolTipOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "class": "ViewerArea",
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "borderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "bottom": "94.49%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000"
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.Container_047C4DA2_0BC0_469F_4188_72261119768E",
  "this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E"
 ],
 "id": "Container_04703DA4_0BC0_469B_418C_E99C811468A2",
 "left": "0.54%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": 324,
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.Container_193F4B9F_0BC0_430E_4175_45828A290529"
 ],
 "id": "Container_193B3BA1_0BC0_4332_4192_EE1E9A16C507",
 "paddingRight": 0,
 "right": "0.54%",
 "paddingLeft": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": 330,
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.92,
   "yaw": -33.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30109000_0CC3_C182_41A0_CE1B0F958B80",
   "hfov": 20.92,
   "pitch": -10.55,
   "yaw": -33.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_12342E30_0C40_41AC_4194_78C42635E35F",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.74,
   "yaw": 152.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3018100B_0CC3_C187_418C_19DD3BF3CD94",
   "hfov": 27.74,
   "pitch": -30.15,
   "yaw": 152.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2A11BE0E_0C40_418A_41A2_71B0F1A19385",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.46,
   "yaw": 62.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF, this.camera_01746661_0F68_DD83_41AC_CEA775EEAB0C); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30118001_0CC3_C182_4195_E4E6B3C916A6",
   "hfov": 19.46,
   "pitch": -16.33,
   "yaw": 62.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_10472C9E_0C40_4292_41AD_C38F19B121C7",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 22.57,
   "yaw": -1.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30160001_0CC3_C182_418C_90C0EB969392",
   "hfov": 22.57,
   "pitch": -18.47,
   "yaw": -1.79,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_10C19DB9_0C40_429F_4199_88EEF4C53617",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.86,
   "yaw": 125.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30164001_0CC3_C182_41A2_7CD25D73CE1D",
   "hfov": 25.86,
   "pitch": -20.22,
   "yaw": 125.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3E7D7D71_0CC1_C383_41A7_BC11B04B0C28",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 32.7,
   "yaw": -163.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301F700D_0CC3_C182_412D_CE71C0839A24",
   "hfov": 32.7,
   "pitch": -14.95,
   "yaw": -163.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_25D538DD_0C40_C285_418C_4D4272EED104",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.32,
   "yaw": -163.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301AD00A_0CC3_C181_4195_5769B25111E0",
   "hfov": 28.32,
   "pitch": -30.4,
   "yaw": -163.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2B93FAC8_0C41_C6F4_419E_E0E269849356",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.09,
   "yaw": -161.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3019C00C_0CC3_C182_41A9_DE8ADEA3B602",
   "hfov": 29.09,
   "pitch": -41.95,
   "yaw": -161.45,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_27B83E1D_0C40_418B_419D_2AFC7137E3D9",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 30.91,
   "yaw": 49.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301E700C_0CC3_C182_418C_CA67CE1F6409",
   "hfov": 30.91,
   "pitch": -5.8,
   "yaw": 49.07,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2544B9F5_0C40_C285_4199_9048DDF739DD",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 06"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.86,
   "yaw": -6.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3015E003_0CC3_C186_41A8_F8C250ADC364",
   "hfov": 21.86,
   "pitch": -23.24,
   "yaw": -6.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2D2BA893_0C40_C297_4188_ECFF15BF2173",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01B8745A_0BC3_C618_4162_33FFC5315781_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 22.43,
   "yaw": 13.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301BC00B_0CC3_C187_4194_B485A52B1C4C",
   "hfov": 22.43,
   "pitch": -19.47,
   "yaw": 13.78,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2817BC41_0C40_41F9_419A_53A9A6AFCD3D",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.86,
   "yaw": -158.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301F800D_0CC3_C182_4161_0D6A644B582F",
   "hfov": 25.86,
   "pitch": -20.22,
   "yaw": -158.68,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_247BAA48_0C40_418C_41A3_F0E253C3EFAC",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.27,
   "yaw": 140.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301C000E_0CC3_C19E_41A8_E8655A61FFBF",
   "hfov": 29.27,
   "pitch": -11.05,
   "yaw": 140.65,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_23894ED2_0C40_3E9D_4192_DBF2BAEF9044",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23.14,
   "yaw": 28.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D, this.camera_0299F649_0F68_DD83_418D_EF25EE4FD442); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301C500E_0CC3_C19E_41A6_32FB6D46F0CE",
   "hfov": 23.14,
   "pitch": -13.44,
   "yaw": 28.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_25CF7C23_0C41_C183_419F_91506F0FD65E",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01BD2F59_0BC0_C265_4193_8578340ED591_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.39,
   "yaw": -154.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -50.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2, this.camera_02B85638_0F68_DD81_41AD_370A09B3500F); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30152003_0CC3_C186_41AA_6CBDCA22CEF9",
   "hfov": 25.39,
   "pitch": -50.75,
   "yaw": -154.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2E86C689_0C40_4173_4195_863CDF5F6CBB",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 30.06,
   "yaw": -120.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30178002_0CC3_C186_4175_1403CEBD2602",
   "hfov": 30.06,
   "pitch": -37.43,
   "yaw": -120.12,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_10C39209_0C40_4170_4193_44133D269C96",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 24.51,
   "yaw": 0.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30134FFF_0CC3_FE7F_41AB_72FF7F8D7543",
   "hfov": 24.51,
   "pitch": -14.32,
   "yaw": 0.97,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_12331490_0C4F_C16B_41A5_CCA62876B3FC",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.71,
   "yaw": -82.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3022E00F_0CC3_C19E_41A3_2297B4ADAC92",
   "hfov": 29.71,
   "pitch": -13.69,
   "yaw": -82.81,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_214191B8_0C41_C28F_4178_A7665DC085C7",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.26,
   "yaw": -16.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01BD2F59_0BC0_C265_4193_8578340ED591, this.camera_028A0641_0F68_DD83_41A4_609083237A9B); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3023600F_0CC3_C19E_41A4_3A9A4B99702C",
   "hfov": 28.26,
   "pitch": -13.57,
   "yaw": -16.99,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_21EABB10_0C40_479F_41A6_A4E6E296FAD3",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23.57,
   "yaw": -147.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -52.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3018900C_0CC3_C182_4180_6A4168BF1AD0",
   "hfov": 23.57,
   "pitch": -52.38,
   "yaw": -147.63,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_289BECE9_0C40_428B_4197_45581700C3B9",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 26.7,
   "yaw": -15.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3019300C_0CC3_C182_418D_167B499132AA",
   "hfov": 26.7,
   "pitch": -40.95,
   "yaw": -15.61,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2791483A_0C4F_C189_41A3_DCD6994EF6D0",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01A0B57E_0BC0_461D_4176_870008DC0288_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.65,
   "yaw": 2.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30112000_0CC3_C182_41A9_4F0AA6FDF280",
   "hfov": 27.65,
   "pitch": -21.98,
   "yaw": 2.22,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_12847D2F_0C41_C3B3_416A_BE1A571BB499",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 31.79,
   "yaw": -11.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30116001_0CC3_C182_41A4_4A26E83928B3",
   "hfov": 31.79,
   "pitch": -22.23,
   "yaw": -11.59,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_110E3450_0C40_C1ED_41AC_A247C7CB6106",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23.17,
   "yaw": -12.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30104000_0CC3_C182_41A4_6E39FEB7FA00",
   "hfov": 23.17,
   "pitch": -13.19,
   "yaw": -12.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_12419519_0C41_C39D_4198_CFBDD1C9B253",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01920874_0BC0_CE14_4195_8C83933A94EE_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.74,
   "yaw": -53.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3018900B_0CC3_C187_41A9_284616BC9AFE",
   "hfov": 28.74,
   "pitch": -26.38,
   "yaw": -53.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2970FF2F_0C43_DF89_41A3_2AF53DFB8C2F",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.98,
   "yaw": 62.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3018D00B_0CC3_C187_41A2_FD0BE96A7EC6",
   "hfov": 25.98,
   "pitch": -25.63,
   "yaw": 62.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_29A9E327_0C43_C7B9_41AC_B52DE201CF58",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.74,
   "yaw": -36.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301A0003_0CC3_C185_41AE_55609BBCF1BE",
   "hfov": 21.74,
   "pitch": -23.99,
   "yaw": -36.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2DBBA54C_0C41_C3F2_41A7_8B46848D7641",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 22.93,
   "yaw": -11.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301AA004_0CC3_C182_41A4_9F391CFE877F",
   "hfov": 22.93,
   "pitch": -15.45,
   "yaw": -11.09,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2DEC3CBC_0C41_C292_4188_1D8C2BA17E42",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 33.89,
   "yaw": -156.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30155003_0CC3_C186_4186_88FFD6C9CC89",
   "hfov": 33.89,
   "pitch": -32.91,
   "yaw": -156.04,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2ED3B6F3_0C5F_CE97_41A8_B5F83EF104A0",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.31,
   "yaw": -40.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37, this.camera_02AFA62E_0F68_DD81_419F_37746FC5BC5D); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301D200E_0CC3_C19E_419A_FF51ADE5518F",
   "hfov": 28.31,
   "pitch": -18.34,
   "yaw": -40.99,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_24CA822E_0C40_4182_4194_B8A109C7DC7D",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 31.01,
   "yaw": 142.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301D400E_0CC3_C19E_419F_82099106E9A4",
   "hfov": 31.01,
   "pitch": -16.46,
   "yaw": 142.41,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_236CADD6_0C40_4282_4198_D824788DADD7",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.76,
   "yaw": -8.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3019400C_0CC3_C182_4180_47776B30EEA2",
   "hfov": 20.76,
   "pitch": -29.27,
   "yaw": -8.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_27A988F1_0C40_C29B_4182_F74F9A630863",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 22.06,
   "yaw": -74.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301B700A_0CC3_C181_4186_9234E5548331",
   "hfov": 22.06,
   "pitch": -21.98,
   "yaw": -74.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2B63B995_0C40_429C_4195_01CCD1705E40",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 24.33,
   "yaw": 64.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301B900B_0CC3_C187_419B_8273C47CCCB3",
   "hfov": 24.33,
   "pitch": -22.36,
   "yaw": 64.03,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2BA7F7BD_0C40_CE8C_419E_7985ECE698D4",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 22.73,
   "yaw": 64.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49, this.camera_017B3658_0F68_DD81_4186_1F2D13DA871E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3017D002_0CC3_C186_4184_4C05C2810929",
   "hfov": 22.73,
   "pitch": -32.03,
   "yaw": 64.53,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2F111692_0C40_CE90_41A0_8AC69BB3D0FA",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.54,
   "yaw": -80.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30144002_0CC3_C186_41AA_C0C5C5FE8D06",
   "hfov": 27.54,
   "pitch": -34.29,
   "yaw": -80.93,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2FB60E02_0C40_C170_41AC_76F8705D19E9",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 24.37,
   "yaw": -1.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3014E002_0CC3_C186_41A7_8BA4FFFE6929",
   "hfov": 24.37,
   "pitch": -25.75,
   "yaw": -1.17,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2FE52C10_0C40_C190_41A1_4533F256ACAC",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.44,
   "yaw": 159.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3018700B_0CC3_C187_41AB_577D0081E17A",
   "hfov": 28.44,
   "pitch": -18.97,
   "yaw": 159.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_28589C29_0C41_C188_41A7_4582B74A73DD",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 26.23,
   "yaw": -9.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3016C001_0CC3_C182_41A4_8937C45B89CD",
   "hfov": 26.23,
   "pitch": -35.17,
   "yaw": -9.96,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1055BBE9_0C40_C6B1_4192_24F6073ED3C6",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.57,
   "yaw": -127.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30176002_0CC3_C186_4186_B3FD14886237",
   "hfov": 28.57,
   "pitch": -52,
   "yaw": -127.15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_108C18F9_0C40_4291_4194_CE489E5205D5",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 30.96,
   "yaw": -83.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301DF00F_0CC3_C19E_418E_77F72244B442",
   "hfov": 30.96,
   "pitch": -15.2,
   "yaw": -83.82,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_22717AD9_0C40_C68E_4193_2FDC15409DD8",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.63,
   "yaw": -154.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E, this.camera_016AD651_0F68_DD83_41A8_A1663C0FE198); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3022600F_0CC3_C19E_41A7_FBC62CF30A9B",
   "hfov": 29.63,
   "pitch": -12.31,
   "yaw": -154.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_22996DB7_0C40_C281_41A6_E2465FDA2212",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 35.78,
   "yaw": -152.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D, this.camera_01446668_0F68_DD81_41A3_93992792CD5A); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301EB00D_0CC3_C182_41A9_14DF3350AFDA",
   "hfov": 35.78,
   "pitch": -30.15,
   "yaw": -152.53,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_26CEC0AC_0C41_C28B_41A7_7A25A13EA9CE",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.16,
   "yaw": -22.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301F200D_0CC3_C182_419E_9CE34560C1AE",
   "hfov": 28.16,
   "pitch": -26,
   "yaw": -22.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_242C3F7C_0C40_5F84_4199_4675ED6675AE",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 30,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ]
 }
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.Container_047C2DA2_0BC0_469F_419A_69D22518CCED",
  "this.IconButton_047C1DA2_0BC0_469F_4199_EF604E6A01A9"
 ],
 "id": "Container_047C4DA2_0BC0_469F_4188_72261119768E",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": 66,
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "- COLLAPSE"
 },
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.Container_047CFDA2_0BC0_469F_41A5_059DE3E8758A"
 ],
 "id": "Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": 259,
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "- EXPANDED"
 },
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.Container_193F5B9F_0BC0_430E_4168_3FC5C8FFCBC9",
  "this.IconButton_193F6B9F_0BC0_430E_4160_004333F6CFEF"
 ],
 "id": "Container_193F4B9F_0BC0_430E_4175_45828A290529",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": 66,
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "- COLLAPSE"
 },
 "propagateClick": true,
 "visible": false,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_30109000_0CC3_C182_41A0_CE1B0F958B80",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3018100B_0CC3_C187_418C_19DD3BF3CD94",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_30118001_0CC3_C182_4195_E4E6B3C916A6",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_30160001_0CC3_C182_418C_90C0EB969392",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_30164001_0CC3_C182_41A2_7CD25D73CE1D",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_301F700D_0CC3_C182_412D_CE71C0839A24",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_301AD00A_0CC3_C181_4195_5769B25111E0",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3019C00C_0CC3_C182_41A9_DE8ADEA3B602",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_301E700C_0CC3_C182_418C_CA67CE1F6409",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3015E003_0CC3_C186_41A8_F8C250ADC364",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_301BC00B_0CC3_C187_4194_B485A52B1C4C",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_301F800D_0CC3_C182_4161_0D6A644B582F",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_301C000E_0CC3_C19E_41A8_E8655A61FFBF",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_301C500E_0CC3_C19E_41A6_32FB6D46F0CE",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_30152003_0CC3_C186_41AA_6CBDCA22CEF9",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_30178002_0CC3_C186_4175_1403CEBD2602",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_30134FFF_0CC3_FE7F_41AB_72FF7F8D7543",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3022E00F_0CC3_C19E_41A3_2297B4ADAC92",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3023600F_0CC3_C19E_41A4_3A9A4B99702C",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3018900C_0CC3_C182_4180_6A4168BF1AD0",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3019300C_0CC3_C182_418D_167B499132AA",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_30112000_0CC3_C182_41A9_4F0AA6FDF280",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_30116001_0CC3_C182_41A4_4A26E83928B3",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_30104000_0CC3_C182_41A4_6E39FEB7FA00",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3018900B_0CC3_C187_41A9_284616BC9AFE",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3018D00B_0CC3_C187_41A2_FD0BE96A7EC6",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_301A0003_0CC3_C185_41AE_55609BBCF1BE",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_301AA004_0CC3_C182_41A4_9F391CFE877F",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_30155003_0CC3_C186_4186_88FFD6C9CC89",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_301D200E_0CC3_C19E_419A_FF51ADE5518F",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_301D400E_0CC3_C19E_419F_82099106E9A4",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3019400C_0CC3_C182_4180_47776B30EEA2",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_301B700A_0CC3_C181_4186_9234E5548331",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_301B900B_0CC3_C187_419B_8273C47CCCB3",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3017D002_0CC3_C186_4184_4C05C2810929",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_30144002_0CC3_C186_41AA_C0C5C5FE8D06",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3014E002_0CC3_C186_41A7_8BA4FFFE6929",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3018700B_0CC3_C187_41AB_577D0081E17A",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3016C001_0CC3_C182_41A4_8937C45B89CD",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_30176002_0CC3_C186_4186_B3FD14886237",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_301DF00F_0CC3_C19E_418E_77F72244B442",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3022600F_0CC3_C19E_41A7_FBC62CF30A9B",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_301EB00D_0CC3_C182_41A9_14DF3350AFDA",
 "frameCount": 24,
 "rowCount": 6
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_301F200D_0CC3_C182_419E_9CE34560C1AE",
 "frameCount": 24,
 "rowCount": 6
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047C2DA2_0BC0_469F_419A_69D22518CCED",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "width": 36,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.4,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "height": "100%",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container black"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0
},
{
 "maxHeight": 80,
 "horizontalAlign": "center",
 "id": "IconButton_047C1DA2_0BC0_469F_4199_EF604E6A01A9",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 50,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_047C1DA2_0BC0_469F_4199_EF604E6A01A9.png",
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_047C1DA2_0BC0_469F_4199_EF604E6A01A9_rollover.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, true, 0, this.effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16, 'showEffect', false); this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "propagateClick": true,
 "cursor": "hand",
 "maxWidth": 80
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.Container_047CEDA2_0BC0_469F_4198_B20A901BFDCD"
 ],
 "id": "Container_047CFDA2_0BC0_469F_41A5_059DE3E8758A",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "92.664%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "height": "100%",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_193F5B9F_0BC0_430E_4168_3FC5C8FFCBC9",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "width": 36,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.4,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "height": "100%",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container black"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0
},
{
 "maxHeight": 80,
 "horizontalAlign": "center",
 "id": "IconButton_193F6B9F_0BC0_430E_4160_004333F6CFEF",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 50,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_193F6B9F_0BC0_430E_4160_004333F6CFEF.png",
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_193F6B9F_0BC0_430E_4160_004333F6CFEF_rollover.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_193F4B9F_0BC0_430E_4175_45828A290529, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "propagateClick": true,
 "cursor": "hand",
 "maxWidth": 80
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.Image_047CDDA2_0BC0_469F_41A4_B04BD80943C8",
  "this.Container_047CCDA2_0BC0_469F_4182_4C28E334A1E2",
  "this.Container_047E6DA2_0BC0_469F_416B_8A460CF07A58",
  "this.Container_047D2DA3_0BC0_469D_4189_43B2E328475A",
  "this.Container_047C9DA3_0BC0_469D_41A6_03479C1B471E",
  "this.Container_047E3DA3_0BC0_469D_4193_8BAF7C6B0DEB",
  "this.Container_047D8DA3_0BC0_469D_4198_0EA8B4187BC7",
  "this.Container_047F3DA4_0BC0_469B_419E_78155C120416",
  "this.Container_047F7DA4_0BC0_469B_418D_CBF7443812EA",
  "this.IconButton_19283D3D_0BC0_470B_4195_BD4936F33462"
 ],
 "id": "Container_047CEDA2_0BC0_469F_4198_B20A901BFDCD",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 40,
 "paddingRight": 40,
 "backgroundColorDirection": "horizontal",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "top": "0%",
 "backgroundColor": [
  "#000066"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingBottom": 40,
 "scrollBarColor": "#000000",
 "paddingTop": 40,
 "height": "95.921%",
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "- Buttons set"
 },
 "backgroundColorRatios": [
  0.91
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver"
},
{
 "maxHeight": 1095,
 "horizontalAlign": "left",
 "id": "Image_047CDDA2_0BC0_469F_41A4_B04BD80943C8",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "url": "skin/Image_047CDDA2_0BC0_469F_41A4_B04BD80943C8.png",
 "minHeight": 30,
 "width": "94.375%",
 "verticalAlign": "top",
 "class": "Image",
 "top": "6.05%",
 "minWidth": 40,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": "22.658%",
 "paddingTop": 0,
 "borderRadius": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "propagateClick": true,
 "maxWidth": 1095
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.Button_047C8DA2_0BC0_469F_4191_1CE4847ED327",
  "this.Container_047D7DA2_0BC0_469F_418F_EF5ECCEB4792",
  "this.Button_047D6DA2_0BC0_469F_4198_A414673F6877",
  "this.Container_047D5DA2_0BC0_469F_41A6_79E3A94E689F",
  "this.Button_047D4DA2_0BC0_469F_417F_8381E89D626A",
  "this.Container_047D2DA2_0BC0_469F_41A1_57F0A51C5F1D",
  "this.Button_047D1DA2_0BC0_469F_418F_47B17304F464",
  "this.Container_047DEDA2_0BC0_469F_419A_B232F6904CA2",
  "this.Button_047DDDA2_0BC0_469F_4199_7ECCB895A877",
  "this.Container_047DADA2_0BC0_469F_4177_204B8C4D0BE5",
  "this.Button_047D9DA2_0BC0_469F_418F_1F3C1F67AFF4",
  "this.Container_047E7DA2_0BC0_469F_419F_F753964E89BF",
  "this.Button_1B5CC5DE_0DC0_42D2_41AA_D9CAE30BB1F5"
 ],
 "id": "Container_047CCDA2_0BC0_469F_4182_4C28E334A1E2",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "vertical",
 "class": "Container",
 "top": "28.71%",
 "bottom": "22.49%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-Level 1"
 },
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_047C3DA2_0BC0_469F_418D_0E927EBDF314",
  "this.Container_18B1B772_0BC0_C313_4181_6AE92C5D9BA9"
 ],
 "id": "Container_047E6DA2_0BC0_469F_416B_8A460CF07A58",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "bottom",
 "layout": "vertical",
 "class": "Container",
 "bottom": "2.18%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "height": 124,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarOpacity": 0.5
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.Button_047D1DA3_0BC0_469D_41A0_739A7113B487",
  "this.Container_047D0DA3_0BC0_469D_4180_EEA8E0DE7BF8",
  "this.Container_047DFDA3_0BC0_469D_4173_577A1C41DACC",
  "this.Button_047DCDA3_0BC0_469D_4180_8B213EA79ABC",
  "this.Button_047DBDA3_0BC0_469D_4191_2E9AF6744605",
  "this.Button_047C2DA3_0BC0_469D_419B_D08C650689E6",
  "this.Button_047C1DA3_0BC0_469D_419F_5FB848DDEC8B",
  "this.Button_047C0DA3_0BC0_469D_4153_D0E478457D10",
  "this.Button_047CFDA3_0BC0_469D_41A1_BC14AAB3AE1F",
  "this.Button_047CEDA3_0BC0_469D_4199_18552F062284",
  "this.Button_047CDDA3_0BC0_469D_4166_8EE658D6BF74",
  "this.Button_047CCDA3_0BC0_469D_41A4_034F5BA3E8C2",
  "this.Button_047CBDA3_0BC0_469D_4197_F20FF8AAD364"
 ],
 "id": "Container_047D2DA3_0BC0_469D_4189_43B2E328475A",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "vertical",
 "class": "Container",
 "top": "25%",
 "bottom": "25%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-Level 2-1"
 },
 "propagateClick": true,
 "visible": false,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.Button_047D7DA3_0BC0_469D_4164_F2DFE08C14F6",
  "this.Container_047D5DA3_0BC0_469D_4199_57D57AA2102C",
  "this.Container_047D3DA3_0BC0_469D_41A4_92C9A8B4FCBA",
  "this.Button_047D2DA3_0BC0_469D_41A4_721FDD21CD1A",
  "this.Button_047D1DA3_0BC0_469D_419F_1BE71DC050A7",
  "this.Button_047DFDA3_0BC0_469D_41A5_261AD3F53E2A",
  "this.Button_047DEDA3_0BC0_469D_4190_0B631C9F7003",
  "this.Button_047DCDA3_0BC0_469D_41A6_A328F9086A2E",
  "this.Button_047DBDA3_0BC0_469D_41A3_44E175FA85F5",
  "this.Button_047D9DA3_0BC0_469D_419E_E9FAB0F5EE09",
  "this.Button_047D8DA3_0BC0_469D_4196_40431B74A4E0",
  "this.Button_047E6DA3_0BC0_469D_41A5_72DEBF38FB57",
  "this.Button_047E5DA3_0BC0_469D_41A6_87CD0CA13F41"
 ],
 "id": "Container_047C9DA3_0BC0_469D_41A6_03479C1B471E",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "vertical",
 "class": "Container",
 "top": "25%",
 "bottom": "25%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-Level 2-2"
 },
 "propagateClick": true,
 "visible": false,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.Button_047E2DA3_0BC0_469D_4189_1B929F91481C",
  "this.Container_047E1DA3_0BC0_469D_4199_1E8F3F4AFC11",
  "this.Container_047E0DA3_0BC0_469D_4154_AC330E1D3533",
  "this.Button_047EFDA3_0BC0_469D_4175_7DFDA64B7BFB",
  "this.Button_047EEDA3_0BC0_469D_4150_1D59B0578E76",
  "this.Button_047EBDA3_0BC0_469D_419F_20060216239A",
  "this.Button_047EADA3_0BC0_469D_41A5_BAE8DC277B94",
  "this.Button_047E8DA3_0BC0_469D_41A6_4CD9BFEF8B28",
  "this.Button_047F7DA3_0BC0_469D_4184_52B909897054",
  "this.Button_047F5DA3_0BC0_469D_4165_E9AF85203174",
  "this.Button_047F4DA3_0BC0_469D_4177_BA55AA683DF2",
  "this.Button_047F2DA3_0BC0_469D_4181_51CB4FDE85D9",
  "this.Button_047F0DA3_0BC0_469D_419C_567520A70BF4"
 ],
 "id": "Container_047E3DA3_0BC0_469D_4193_8BAF7C6B0DEB",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "vertical",
 "class": "Container",
 "top": "25%",
 "bottom": "25%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-Level 2-3"
 },
 "propagateClick": true,
 "visible": false,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.Button_047E7DA4_0BC0_469B_41A6_0041AAC801BA",
  "this.Container_047E5DA4_0BC0_469B_419E_A15FD725ACB4",
  "this.Container_047E4DA4_0BC0_469B_418D_AD4D292AB8CD",
  "this.Button_047E3DA4_0BC0_469B_419B_3BCB79DBB696",
  "this.Button_047E1DA4_0BC0_469B_41A0_A0EB560A63AD",
  "this.Button_047E0DA4_0BC0_469B_4184_52BD66F75F98",
  "this.Button_047EFDA4_0BC0_469B_419D_0AEBD950DEEF",
  "this.Button_047EDDA4_0BC0_469B_4198_3CA848348A6D",
  "this.Button_047ECDA4_0BC0_469B_4185_3CDDFCE3068E",
  "this.Button_047EADA4_0BC0_469B_4165_2341188A18A1",
  "this.Button_047E9DA4_0BC0_469B_4186_EF1B03C4B8FF",
  "this.Button_047F6DA4_0BC0_469B_4191_F15B02E49A59",
  "this.Button_047F5DA4_0BC0_469B_4189_B47E80985129"
 ],
 "id": "Container_047D8DA3_0BC0_469D_4198_0EA8B4187BC7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "vertical",
 "class": "Container",
 "top": "25%",
 "bottom": "25%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-Level 2-4"
 },
 "propagateClick": true,
 "visible": false,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.Button_047F2DA4_0BC0_469B_4171_66DBCB636C3A",
  "this.Container_047F0DA4_0BC0_469B_4197_4D6208A025E9",
  "this.Container_047FFDA4_0BC0_469B_4190_6451E3A3D87F",
  "this.Button_047E7DA4_0BC0_469B_4185_DFC0E6F8801C",
  "this.Button_047E6DA4_0BC0_469B_4186_06CC8A36DB76",
  "this.Button_047E5DA4_0BC0_469B_4175_735564C4BCBC",
  "this.Button_047E4DA4_0BC0_469B_41A7_19C5CFC13555",
  "this.Button_047E1DA4_0BC0_469B_41A5_582D9B76401E",
  "this.Button_047E0DA4_0BC0_469B_41A6_5FEAE1F69479",
  "this.Button_047EFDA4_0BC0_469B_4182_DC65085A6EA2",
  "this.Button_047EDDA4_0BC0_469B_41A1_14D779ADFFCF",
  "this.Button_047EADA4_0BC0_469B_418E_66BFAD35E596",
  "this.Button_047E9DA4_0BC0_469B_417F_176E75988052"
 ],
 "id": "Container_047F3DA4_0BC0_469B_419E_78155C120416",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "vertical",
 "class": "Container",
 "top": "25%",
 "bottom": "25%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-Level 2-5"
 },
 "propagateClick": true,
 "visible": false,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.Button_047F6DA4_0BC0_469B_41A0_2CE6875D8359",
  "this.Container_047F5DA4_0BC0_469B_419A_1CABFA539C64",
  "this.Container_047F4DA4_0BC0_469B_4173_057E89E6E46C",
  "this.Button_047F2DA4_0BC0_469B_41A4_FD0587BE85DE",
  "this.Button_047F1DA4_0BC0_469B_41A2_970455D6A2BF",
  "this.Button_047FFDA4_0BC0_469B_4164_5891C6E730BC",
  "this.Button_047FDDA4_0BC0_469B_4169_E05927BEE424",
  "this.Button_047FCDA4_0BC0_469B_4192_25F47B199A11",
  "this.Button_047FBDA4_0BC0_469B_416E_6C74E0210C5C",
  "this.Button_047FADA4_0BC0_469B_4184_8205808A8E56",
  "this.Button_047F9DA4_0BC0_469B_4165_216B6622460E",
  "this.Button_047F8DA4_0BC0_469B_419C_BCDF3DFED03F",
  "this.Button_04706DA4_0BC0_469B_41A6_C96F76938116"
 ],
 "id": "Container_047F7DA4_0BC0_469B_418D_CBF7443812EA",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "vertical",
 "class": "Container",
 "top": "25%",
 "bottom": "25%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-Level 2-6"
 },
 "propagateClick": true,
 "visible": false,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0
},
{
 "maxHeight": 52,
 "horizontalAlign": "center",
 "id": "IconButton_19283D3D_0BC0_470B_4195_BD4936F33462",
 "left": "14.29%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "width": 53,
 "verticalAlign": "middle",
 "class": "IconButton",
 "bottom": "-9.6%",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "height": 52,
 "transparencyActive": false,
 "click": "this.shareFacebook(window.location.href)",
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_19283D3D_0BC0_470B_4195_BD4936F33462.png",
 "data": {
  "name": "IconButton4575"
 },
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 53
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047C8DA2_0BC0_469F_4191_1CE4847ED327",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 50,
 "label": "Entrada",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button Tour Info"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047D7DA2_0BC0_469F_418F_EF5ECCEB4792",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingBottom": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047D6DA2_0BC0_469F_4198_A414673F6877",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 50,
 "label": "\u00c1rea de Lazer",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 23,
 "shadow": false,
 "data": {
  "name": "Button Panorama List"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 26); this.mainPlayList.set('selectedIndex', 27); this.mainPlayList.set('selectedIndex', 28)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047D5DA2_0BC0_469F_41A6_79E3A94E689F",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingBottom": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047D4DA2_0BC0_469F_417F_8381E89D626A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 50,
 "label": "Escrit\u00f3rio",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "pressedLabel": "Inserdt Text",
 "data": {
  "name": "Button Location"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047CCDA2_0BC0_469F_4182_4C28E334A1E2, false, 0, this.effect_112869ED_311E_0034_41C2_70A247245BB7, 'hideEffect', false); this.setComponentVisibility(this.Container_047E3DA3_0BC0_469D_4193_8BAF7C6B0DEB, true, 0, this.effect_18BBC752_310E_006C_41B5_0D8B802FB057, 'showEffect', false); this.mainPlayList.set('selectedIndex', 7)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047D2DA2_0BC0_469F_41A1_57F0A51C5F1D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingBottom": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047D1DA2_0BC0_469F_418F_47B17304F464",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 50,
 "label": "Cozinha",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button Floorplan"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047CCDA2_0BC0_469F_4182_4C28E334A1E2, false, 0, this.effect_2EF4EDF2_311A_002F_41B7_7476A5CB22BB, 'hideEffect', false); this.setComponentVisibility(this.Container_047D8DA3_0BC0_469D_4198_0EA8B4187BC7, true, 0, this.effect_163FEAB2_310E_002C_416A_B20913F49C44, 'showEffect', false); this.mainPlayList.set('selectedIndex', 10)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047DEDA2_0BC0_469F_419A_B232F6904CA2",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingBottom": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047DDDA2_0BC0_469F_4199_7ECCB895A877",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 50,
 "label": "Sala",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button Photoalbum"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.mainPlayList.set('selectedIndex', 13)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047DADA2_0BC0_469F_4177_204B8C4D0BE5",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingBottom": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047D9DA2_0BC0_469F_418F_1F3C1F67AFF4",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "73.064%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 50,
 "label": "Quartos",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button Contact"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.mainPlayList.set('selectedIndex', 16); this.mainPlayList.set('selectedIndex', 17); this.mainPlayList.set('selectedIndex', 18); this.mainPlayList.set('selectedIndex', 19); this.mainPlayList.set('selectedIndex', 20); this.mainPlayList.set('selectedIndex', 21); this.mainPlayList.set('selectedIndex', 22)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047E7DA2_0BC0_469F_419F_F753964E89BF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingBottom": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_1B5CC5DE_0DC0_42D2_41AA_D9CAE30BB1F5",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "73.064%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 50,
 "label": "Varanda",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button Contact"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_047C3DA2_0BC0_469F_418D_0E927EBDF314",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 78,
 "paddingTop": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_18C32758_0BC0_C31F_419F_986C624DD404",
  "this.Container_18C36758_0BC0_C31F_41A3_D10CE0AABADE",
  "this.Container_18C07759_0BC0_C311_4148_995E1DCC74C3"
 ],
 "id": "Container_18B1B772_0BC0_C313_4181_6AE92C5D9BA9",
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "bottom",
 "layout": "vertical",
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingBottom": 0,
 "height": 124,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_047D2DA3_0BC0_469D_4189_43B2E328475A, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_047CCDA2_0BC0_469F_4182_4C28E334A1E2, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "id": "Button_047D1DA3_0BC0_469D_41A0_739A7113B487",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "height": 50,
 "rollOverFontSize": 18,
 "label": "BACK",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverIconURL": "skin/Button_047D1DA3_0BC0_469D_41A0_739A7113B487_rollover.png",
 "shadow": false,
 "iconURL": "skin/Button_047D1DA3_0BC0_469D_41A0_739A7113B487.png",
 "data": {
  "name": "Button <BACK"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 30,
 "cursor": "hand",
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047D0DA3_0BC0_469D_4180_EEA8E0DE7BF8",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047DFDA3_0BC0_469D_4173_577A1C41DACC",
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "height": 8,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "horizontalAlign": "left",
 "id": "Button_047DCDA3_0BC0_469D_4180_8B213EA79ABC",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "height": 36,
 "label": "Main Entrance",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_6F775B48_7EFC_4464_41D0_5F685A6DF4DF, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_713EE907_7EF5_C5EC_41D2_0A93448DEC18, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047DBDA3_0BC0_469D_4191_2E9AF6744605",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lobby",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 23,
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_6E72F95C_7EFC_C41C_41D6_75F45577796D, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_6EB6DA23_7EF4_C424_41CD_C7E215878810, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047C2DA3_0BC0_469D_419B_D08C650689E6",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Reception",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "pressedLabel": "Reception",
 "data": {
  "name": "Button text 3"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_6F934347_7EFD_C46C_41CD_98E4D1803E93, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_6E417DE0_7EFD_DC24_41C1_9DAD95E670ED, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047C1DA3_0BC0_469D_419F_5FB848DDEC8B",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Meeting Area 1",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_6FE9B3C0_7EFF_C464_41AD_0C85819CAC1D, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_6EE1DB6F_7EFC_443C_41B8_BACF19F5205B, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047C0DA3_0BC0_469D_4153_D0E478457D10",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Meeting Area 2",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_6EB05887_7EFC_44EC_41DF_6F5D9CDE67B6, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_6F7BA33C_7EFC_441C_41DB_B2AD5132287F, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047CFDA3_0BC0_469D_41A1_BC14AAB3AE1F",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Bar",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_6E1D1A84_7EFC_44EC_41D2_A7D7A6578CE1, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_6F6D4344_7EFD_C463_41DC_2E289C95FE19, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047CEDA3_0BC0_469D_4199_18552F062284",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Chill Out",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_6FBA5300_7EFD_C5E4_41CF_75BE5933BA16, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_6F3D598C_7EFC_44FC_41C4_DE9C841D39F3, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047CDDA3_0BC0_469D_4166_8EE658D6BF74",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Terrace",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_6FFF10DC_7EFC_4463_41C6_AB36683E158C, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_6F643CB8_7EFC_DC24_41D9_938D437BF2FE, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047CCDA3_0BC0_469D_41A4_034F5BA3E8C2",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Garden",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_6C4FA978_7EFC_C424_41DA_519605965466, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_6F36D593_7EFC_4CE4_41C0_C765037E8ABF, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047CBDA3_0BC0_469D_4197_F20FF8AAD364",
 "paddingLeft": 0,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_6C9A8F04_7EFC_7DEC_4197_07A12DF6DE72, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_6F0C2178_7EF3_C424_41DB_BFCD7CE82F8B, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_047C9DA3_0BC0_469D_41A6_03479C1B471E, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_047CCDA2_0BC0_469F_4182_4C28E334A1E2, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "id": "Button_047D7DA3_0BC0_469D_4164_F2DFE08C14F6",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "height": 50,
 "rollOverFontSize": 18,
 "label": "BACK",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverIconURL": "skin/Button_047D7DA3_0BC0_469D_4164_F2DFE08C14F6_rollover.png",
 "shadow": false,
 "iconURL": "skin/Button_047D7DA3_0BC0_469D_4164_F2DFE08C14F6.png",
 "data": {
  "name": "Button <BACK"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 30,
 "cursor": "hand",
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047D5DA3_0BC0_469D_4199_57D57AA2102C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047D3DA3_0BC0_469D_41A4_92C9A8B4FCBA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "height": 8,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "horizontalAlign": "left",
 "id": "Button_047D2DA3_0BC0_469D_41A4_721FDD21CD1A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_6C591FB1_7EF4_5C24_41DE_1D62A40BF396, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_6CDF7CD1_7EF4_BC65_41BB_4C3B13DE93F2, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047D1DA3_0BC0_469D_419F_1BE71DC050A7",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 23,
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_6DC2F695_7F0D_CCEC_41DE_1717A5BCC13E, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_8963A4FE_9497_382C_41C3_E57563184DB9, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047DFDA3_0BC0_469D_41A5_261AD3F53E2A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_88C6C95F_9491_086C_4199_A68102469DE1, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_8961C26A_9497_F854_4178_2793F4F53035, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047DEDA3_0BC0_469D_4190_0B631C9F7003",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_898428F2_9493_0835_41DD_CCF2E926B3B1, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_8A954146_9497_385C_41BA_68B31A1C0575, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047DCDA3_0BC0_469D_41A6_A328F9086A2E",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_898D54CF_9493_386B_41C9_EE8C51220E79, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_897E419E_9497_78EC_41C6_F0A57FA56749, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047DBDA3_0BC0_469D_41A3_44E175FA85F5",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_8A231913_9493_09FB_41D0_61CBD047CA49, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_8B8DA8FA_9497_0834_41D5_EEF8CA41DCE2, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047D9DA3_0BC0_469D_419E_E9FAB0F5EE09",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_8AB97F8A_9493_08D5_41E0_203E1AE10860, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_8822E8AA_9497_08D5_4174_26CC5E1E4686, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047D8DA3_0BC0_469D_4196_40431B74A4E0",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_8BAF5302_9493_39D5_41C8_B519ABDBC4E9, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_899FD635_9491_183F_41D0_7002C81DFC77, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047E6DA3_0BC0_469D_41A5_72DEBF38FB57",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_89C6CE9B_9493_08F4_41D0_6FC7289F89C4, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_8AEC3735_9491_383F_41E0_CF7CBACF3F83, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047E5DA3_0BC0_469D_41A6_87CD0CA13F41",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_896FA3EA_9493_3854_41BE_C6AF134EA53D, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_88058052_9491_F874_41C8_DB3349E1BEE1, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_047E3DA3_0BC0_469D_4193_8BAF7C6B0DEB, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_047CCDA2_0BC0_469F_4182_4C28E334A1E2, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "id": "Button_047E2DA3_0BC0_469D_4189_1B929F91481C",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "height": 50,
 "rollOverFontSize": 18,
 "label": "BACK",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverIconURL": "skin/Button_047E2DA3_0BC0_469D_4189_1B929F91481C_rollover.png",
 "shadow": false,
 "iconURL": "skin/Button_047E2DA3_0BC0_469D_4189_1B929F91481C.png",
 "data": {
  "name": "Button <BACK"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 30,
 "cursor": "hand",
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047E1DA3_0BC0_469D_4199_1E8F3F4AFC11",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047E0DA3_0BC0_469D_4154_AC330E1D3533",
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "height": 8,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "horizontalAlign": "left",
 "id": "Button_047EFDA3_0BC0_469D_4175_7DFDA64B7BFB",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_8A78E7D3_9491_187B_41CE_68D80759D3B4, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_8AF862CB_9491_386B_41D8_7AAC1CAD5207, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047EEDA3_0BC0_469D_4150_1D59B0578E76",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 23,
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_8B839F4E_9491_086D_41C7_7BE21F22B2B4, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_8AE5EAF6_9491_083D_41DB_CA2F71BBCDC1, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047EBDA3_0BC0_469D_419F_20060216239A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B5F508CE_9491_086D_41E1_D7C227D4EE39, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B481A4D6_9491_387D_41CF_8034E66B72D2, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047EADA3_0BC0_469D_41A5_BAE8DC277B94",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_8AA69BBF_9491_082C_419F_18F08AED488F, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_8A79E75A_949F_1874_41DB_B8859D03684A, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047E8DA3_0BC0_469D_41A6_4CD9BFEF8B28",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_8A1C3F2A_949F_09D5_41E0_2D8A6911EDE7, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_8B6C9DB3_949F_083B_41CD_C9D467FE2549, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047F7DA3_0BC0_469D_4184_52B909897054",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_8B6A412F_949F_382C_41D0_B8EAABFD42EC, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_8A2EDCC6_949F_085D_41C7_FD6618A3A0DE, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047F5DA3_0BC0_469D_4165_E9AF85203174",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_8B815542_9491_1855_41DA_0BE52A4755F9, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_8BFC2468_9491_1854_41BF_A5CC5585CF55, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047F4DA3_0BC0_469D_4177_BA55AA683DF2",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B5454E96_9491_08FD_41E1_00E88377BCE3, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B48232C7_9491_185B_41DA_589BEAD8EFE7, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047F2DA3_0BC0_469D_4181_51CB4FDE85D9",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B4FDAC36_9491_083D_41E1_7356505AC888, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B482C092_9491_18F5_41DA_C54078523BC0, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047F0DA3_0BC0_469D_419C_567520A70BF4",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B408C7EA_9491_7855_41DD_127E3B34D959, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_8B6AABCE_9491_086D_41E0_5DCDB3CA3E52, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_047D8DA3_0BC0_469D_4198_0EA8B4187BC7, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_047CCDA2_0BC0_469F_4182_4C28E334A1E2, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "id": "Button_047E7DA4_0BC0_469B_41A6_0041AAC801BA",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "height": 50,
 "rollOverFontSize": 18,
 "label": "BACK",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverIconURL": "skin/Button_047E7DA4_0BC0_469B_41A6_0041AAC801BA_rollover.png",
 "shadow": false,
 "iconURL": "skin/Button_047E7DA4_0BC0_469B_41A6_0041AAC801BA.png",
 "data": {
  "name": "Button <BACK"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 30,
 "cursor": "hand",
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047E5DA4_0BC0_469B_419E_A15FD725ACB4",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047E4DA4_0BC0_469B_418D_AD4D292AB8CD",
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "height": 8,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "horizontalAlign": "left",
 "id": "Button_047E3DA4_0BC0_469B_419B_3BCB79DBB696",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B449F77A_9493_1835_41D1_60C897D410BD, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B79FD722_9493_39D4_41D5_0A9CE563DBEC, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047E1DA4_0BC0_469B_41A0_A0EB560A63AD",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 23,
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B5F6E88B_9493_08D4_4198_D7D5C1DEAE32, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B59045F2_9493_1835_41DE_3E60A7B32805, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047E0DA4_0BC0_469B_4184_52BD66F75F98",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_8B4DCEF3_9493_083B_4189_D2BBEAABCE39, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B5506FF6_9493_083D_4175_2565FEC00830, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047EFDA4_0BC0_469B_419D_0AEBD950DEEF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B5BD2D9B_9493_08F4_41C4_412B2FF594B4, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B568C9B2_9491_0835_41E0_7C027FD6DCB1, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047EDDA4_0BC0_469B_4198_3CA848348A6D",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B64D30CB_9491_386B_41DA_342B819E43AC, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B6EA9E07_9491_0BDC_41D3_3F6AD3783ABE, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047ECDA4_0BC0_469B_4185_3CDDFCE3068E",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B58F2C4F_9491_086B_41C6_A8369D9E7FB0, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B539B4C7_9491_185C_419E_962527A957FB, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047EADA4_0BC0_469B_4165_2341188A18A1",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B59FFEE6_9491_085D_41D5_8F74C477CA80, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B7CA2CC3_9491_085B_41C6_518E9C84FB66, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047E9DA4_0BC0_469B_4186_EF1B03C4B8FF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B67B571B_9491_79F4_41E0_0469A8275BE5, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B625A32F_9491_382B_41B3_2E55B1C3018E, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047F6DA4_0BC0_469B_4191_F15B02E49A59",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B77CFA6F_9491_082B_41E0_D85FC35AABCA, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B59EA966_9497_085D_41D4_CC23D3789789, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047F5DA4_0BC0_469B_4189_B47E80985129",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B44B5EBB_9497_082B_41D8_6A78A8A73A6D, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B6899F1B_9497_09EB_41D0_1592754F094F, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_047F3DA4_0BC0_469B_419E_78155C120416, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_047CCDA2_0BC0_469F_4182_4C28E334A1E2, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "id": "Button_047F2DA4_0BC0_469B_4171_66DBCB636C3A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "height": 50,
 "rollOverFontSize": 18,
 "label": "BACK",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverIconURL": "skin/Button_047F2DA4_0BC0_469B_4171_66DBCB636C3A_rollover.png",
 "shadow": false,
 "iconURL": "skin/Button_047F2DA4_0BC0_469B_4171_66DBCB636C3A.png",
 "data": {
  "name": "Button <BACK"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 30,
 "cursor": "hand",
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047F0DA4_0BC0_469B_4197_4D6208A025E9",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047FFDA4_0BC0_469B_4190_6451E3A3D87F",
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "height": 8,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "horizontalAlign": "left",
 "id": "Button_047E7DA4_0BC0_469B_4185_DFC0E6F8801C",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B1803CFF_9497_082C_41D4_CAC52C83643D, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B0DCD7C6_9497_185A_41D8_A531C3BCF55A, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047E6DA4_0BC0_469B_4186_06CC8A36DB76",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 23,
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B09A4863_9491_0854_41D5_538F6C41E041, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B70347B8_9491_1834_41C3_6D356CC569AB, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047E5DA4_0BC0_469B_4175_735564C4BCBC",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B0BB10AF_9491_182C_41B8_D3118E6F2E91, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B66FC25B_9491_186B_41DD_042FBA348796, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047E4DA4_0BC0_469B_41A7_19C5CFC13555",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B60AE61B_9491_3BF4_41DF_19C7BF97DFF0, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B681F4A4_9491_78DD_41E2_5B76E3856C13, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047E1DA4_0BC0_469B_41A5_582D9B76401E",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B6258D2F_9491_082B_41DE_9AF337AA3DF5, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B798BAF7_9491_083B_41E0_72A7199D0D31, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047E0DA4_0BC0_469B_41A6_5FEAE1F69479",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B1CE741F_9493_3FEB_41CC_345874C16FAD, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B0C95277_9493_783C_41D6_8FAD5310A7B0, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047EFDA4_0BC0_469B_4182_DC65085A6EA2",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B6DC70EB_9493_3854_41DE_A2CA859C752F, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B0859FF2_9493_0835_41DA_F4FB89B321BF, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047EDDA4_0BC0_469B_41A1_14D779ADFFCF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B0F48524_9493_19DC_41CD_D6D8B0EC3851, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B65E46AF_9493_182B_41DF_8471ED8FC98E, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047EADA4_0BC0_469B_418E_66BFAD35E596",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B626EB76_9493_083A_41E0_3863BFDE65E0, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B7830787_9493_38DB_41DB_A8E9E94D0517, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047E9DA4_0BC0_469B_417F_176E75988052",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B6F65D40_9493_0854_41D3_91100B2C991E, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B02F7E6B_9491_082B_41CC_A3B8AE1814DE, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_047F7DA4_0BC0_469B_418D_CBF7443812EA, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_047CCDA2_0BC0_469F_4182_4C28E334A1E2, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "id": "Button_047F6DA4_0BC0_469B_41A0_2CE6875D8359",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "height": 50,
 "rollOverFontSize": 18,
 "label": "BACK",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverIconURL": "skin/Button_047F6DA4_0BC0_469B_41A0_2CE6875D8359_rollover.png",
 "shadow": false,
 "iconURL": "skin/Button_047F6DA4_0BC0_469B_41A0_2CE6875D8359.png",
 "data": {
  "name": "Button <BACK"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 30,
 "cursor": "hand",
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047F5DA4_0BC0_469B_419A_1CABFA539C64",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "id": "Container_047F4DA4_0BC0_469B_4173_057E89E6E46C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "height": 8,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "horizontalAlign": "left",
 "id": "Button_047F2DA4_0BC0_469B_41A4_FD0587BE85DE",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B067415B_9491_F874_41D1_8A279D72E996, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B1E90B83_9491_08D4_41D3_68B861E7D819, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047F1DA4_0BC0_469B_41A2_970455D6A2BF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 23,
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B1D80C9F_9491_08EB_41DD_FC28B6347ECB, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B04E5807_9491_17DB_41DC_E77570FB08FA, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047FFDA4_0BC0_469B_4164_5891C6E730BC",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B34BF78D_94B1_F8EC_41CF_9FD95971A634, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B3C94E6D_94B1_082F_41D1_5D861E9658E5, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047FDDA4_0BC0_469B_4169_E05927BEE424",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B34A3F38_94B1_0834_41DF_0359CC70247E, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B3CF3F9D_94B1_08EC_41D9_E24CD7733252, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047FCDA4_0BC0_469B_4192_25F47B199A11",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B328B944_94B1_085D_41D2_100952628A44, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B3FEF8A1_94B1_08D4_41E1_B824963794F5, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047FBDA4_0BC0_469B_416E_6C74E0210C5C",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B265A3B0_94B3_3834_41D1_12F31D8BFE52, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B27E5D6D_94B3_082C_41E1_33D169919C25, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047FADA4_0BC0_469B_4184_8205808A8E56",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B176C187_94B3_18DC_41DD_86A1B3A6D16A, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B22B4AA8_94B3_08D5_41E0_E23ACF2CDC21, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047F9DA4_0BC0_469B_4165_216B6622460E",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_BCBF1381_94B1_18D4_41DA_F5BC32E00C21, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B21F8580_94B3_18D5_41C5_19BFB320DA74, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_047F8DA4_0BC0_469B_419C_BCDF3DFED03F",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B3554030_94B1_3834_41C9_475DE0CD0469, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B3F4D89D_94B1_08EC_41A7_AA127AB48C60, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_04706DA4_0BC0_469B_41A6_C96F76938116",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "width": "100%",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "borderColor": "#000000",
 "class": "Button",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "fontSize": 18,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "height": 36,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "iconWidth": 32,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_047C4DA2_0BC0_469F_4188_72261119768E, true, 0, this.effect_B1670F28_94B1_09D5_41A1_2C5A4ED7D4DC, 'showEffect', false); this.setComponentVisibility(this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E, false, 0, this.effect_B24695C0_94B1_F855_41D9_964355EF2B59, 'hideEffect', false)",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_18C32758_0BC0_C31F_419F_986C624DD404",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 78,
 "paddingTop": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.IconButton_18C1B759_0BC0_C311_419A_A545CF713E55",
  "this.IconButton_18C1C759_0BC0_C311_4185_B06DB37D9DB1",
  "this.IconButton_18C08758_0BC0_C31F_4191_53EC95A463C4",
  "this.IconButton_18C0F758_0BC0_C31F_41A5_CE20BE6A9381",
  "this.IconButton_18C01759_0BC0_C311_4192_2DD48F6D61E3"
 ],
 "id": "Container_18C36758_0BC0_C31F_41A3_D10CE0AABADE",
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "bottom",
 "layout": "horizontal",
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 7,
 "paddingBottom": 0,
 "height": 56,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 1"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5
},
{
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "children": [
  "this.IconButton_18C15759_0BC0_C311_4181_65D129B4DDEF",
  "this.IconButton_3ACF0090_0CC0_4287_417B_CD8B627F2464",
  "this.IconButton_3A71568A_0CC0_4E98_419F_DE5AE153471E"
 ],
 "id": "Container_18C07759_0BC0_C311_4148_995E1DCC74C3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "verticalAlign": "top",
 "layout": "horizontal",
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 7,
 "paddingBottom": 0,
 "height": 64,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 2"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 101,
 "horizontalAlign": "center",
 "id": "IconButton_18C1B759_0BC0_C311_419A_A545CF713E55",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "width": 45,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 44,
 "transparencyActive": true,
 "click": "this.openLink('https://api.whatsapp.com/send/?phone=558881217575', '_top')",
 "paddingTop": 0,
 "borderRadius": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_18C1B759_0BC0_C311_419A_A545CF713E55.png",
 "data": {
  "name": "IconButton Floorplan"
 },
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "horizontalAlign": "center",
 "id": "IconButton_18C1C759_0BC0_C311_4185_B06DB37D9DB1",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "width": 47,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 42,
 "transparencyActive": false,
 "click": "this.openLink('https://www.instagram.com/carlosguimaraesimoveis/', '_top')",
 "paddingTop": 0,
 "borderRadius": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_18C1C759_0BC0_C311_4185_B06DB37D9DB1.png",
 "data": {
  "name": "IconButton Realtor"
 },
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "horizontalAlign": "center",
 "id": "IconButton_18C08758_0BC0_C31F_4191_53EC95A463C4",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "width": 43,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 43,
 "transparencyActive": true,
 "click": "this.openLink('https://www.tiktok.com/@carlosguimaraes.imoveis', '_top')",
 "paddingTop": 0,
 "borderRadius": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_18C08758_0BC0_C31F_4191_53EC95A463C4.png",
 "data": {
  "name": "IconButton Info"
 },
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "horizontalAlign": "center",
 "id": "IconButton_18C0F758_0BC0_C31F_41A5_CE20BE6A9381",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "width": 52,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 44,
 "transparencyActive": false,
 "click": "this.openLink('https://www.instagram.com/carlosguimaraesimoveis/', '_top')",
 "paddingTop": 0,
 "borderRadius": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_18C0F758_0BC0_C31F_41A5_CE20BE6A9381.png",
 "data": {
  "name": "IconButton Thumblist"
 },
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "horizontalAlign": "center",
 "id": "IconButton_18C01759_0BC0_C311_4192_2DD48F6D61E3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "width": 51,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 44,
 "transparencyActive": false,
 "click": "this.openLink('https://www.tiktok.com/@carlosguimaraes.imoveis', '_top')",
 "paddingTop": 0,
 "borderRadius": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_18C01759_0BC0_C311_4192_2DD48F6D61E3.png",
 "data": {
  "name": "IconButton Location"
 },
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "horizontalAlign": "center",
 "id": "IconButton_18C15759_0BC0_C311_4181_65D129B4DDEF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "pressedRollOverIconURL": "skin/IconButton_18C15759_0BC0_C311_4181_65D129B4DDEF_pressed_rollover.png",
 "minHeight": 1,
 "width": 50,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "transparencyActive": false,
 "paddingBottom": 0,
 "height": 50,
 "paddingTop": 0,
 "borderRadius": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_18C15759_0BC0_C311_4181_65D129B4DDEF.png",
 "data": {
  "name": "IconButton --"
 },
 "propagateClick": false,
 "visible": false,
 "pressedIconURL": "skin/IconButton_18C15759_0BC0_C311_4181_65D129B4DDEF_pressed.png",
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "horizontalAlign": "center",
 "id": "IconButton_3ACF0090_0CC0_4287_417B_CD8B627F2464",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "width": 45,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 44,
 "transparencyActive": true,
 "click": "this.openLink('https://carlosguimaraesimoveis.com.br', '_top')",
 "paddingTop": 0,
 "borderRadius": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_3ACF0090_0CC0_4287_417B_CD8B627F2464.png",
 "data": {
  "name": "IconButton Floorplan"
 },
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "horizontalAlign": "center",
 "id": "IconButton_3A71568A_0CC0_4E98_419F_DE5AE153471E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "width": 45,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 44,
 "transparencyActive": true,
 "click": "this.openLink('https://www.google.com/maps/dir//Carlos+Guimaraes+Imoveis+-+Av.+Pl%C3%A1cido+Aderaldo+Castelo,+220+-+loja13+-+Lagoa+Seca,+Juazeiro+do+Norte+-+CE,+63040-540/@-7.6781833,-39.4011845,10z/data=!4m18!1m8!3m7!1s0x7a179cad09daa0d:0x3b133d126096072b!2sCarlos+Guimaraes+Imoveis!8m2!3d-7.2445904!4d-39.3126379!15sChpjYXJsb3MgZ3VpbWFyw6NlcyBpbcOzdmVpc5IBEnJlYWxfZXN0YXRlX2FnZW5jeeABAA!16s%2Fg%2F11nl79tbv6!4m8!1m0!1m5!1m1!1s0x7a179cad09daa0d:0x3b133d126096072b!2m2!1d-39.3126379!2d-7.2445904!3e0?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D', '_top')",
 "paddingTop": 0,
 "borderRadius": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_3A71568A_0CC0_4E98_419F_DE5AE153471E.png",
 "data": {
  "name": "IconButton Floorplan"
 },
 "propagateClick": false,
 "cursor": "hand",
 "maxWidth": 101
}],
 "desktopMipmappingEnabled": false,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "overflow": "visible",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player455"
 },
 "propagateClick": false,
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true,
 "scrollBarOpacity": 0.5,
 "vrPolyfillScale": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
