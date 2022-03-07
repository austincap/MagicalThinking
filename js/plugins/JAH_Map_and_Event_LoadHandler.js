//=============================================================================
// JahwsUF - Map and Event Loading Handler
// JAH_Map_and_Event_LoadHandler.js
// Version: 0.01
//=============================================================================

var Imported = Imported || {}; // Let's not erase old evidence as we declare our presence.
Imported.JahwsUF_MaELH = true;  // Oh yeah, may as well say we're here, too.

var JahwsUF = JahwsUF || {};
JahwsUF.MaELH = JahwsUF.MaELH || {};

JahwsUF.MaELH.MapTagHandlers = [];

/*:
 *
 * @plugindesc v0.01 Intercepts the map loading process to facilitate map metadata analysis.
 * @author JahwsUF
 *
 * @help
 * =================================================================================
 * Introduction
 * =================================================================================
 *
 * This plugin intercepts every map just as it is loaded and provides a chance to process
 * its note information and metadata.  The core purpose is to allow other plugins to load
 * metadata of interest by registering a pushing a function onto JahwsUF.MaELH.MapTagHandlers.
 * Any function pushed to that array will be called upon the loading of each map.
 *
 * It's mostly intended as a plugin aide, not as a general-use plugin.
 *
 * As an extra, though minor feature, maps can put raw Javascript into their Note area
 * between two tags:
 * <script>
 * // Code goes here
 * </script>
 *
 * Any such code detected will be evaluated upon the loading of the map.
 *
 * Furthermore, note that this.events will hold a list of all event data corresponding
 * to the newly loaded map, allowing you to intercept that data and process any tags on
 * it as well.
 */

// For this to work, we MUST replace the original function... but we can still keep it
// around and use it.
JahwsUF.MaELH.Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;

// This will allow us to intercept the Map when first loaded, enabling us
// to do processing on it and its events.

Scene_Map.prototype.onMapLoaded = function() {
	
	// $gameMap is first loaded halfway through this method.  It won't hurt us to wait a moment,
	// which is important for possible future plugin compatibility.
	JahwsUF.MaELH.Scene_Map_onMapLoaded.call(this);
	
	//var mapNotes = $dataMap.note;  // Map notes
	JahwsUF.MaELH.processMapNotes.call($dataMap);
	
	//var events = $dataMap.events;  // Events (with theirs attached)
}

// Called with the map in question as "this".  It's then a matter of how you choose to process it.
JahwsUF.MaELH.processMapNotes = function()
{
	for(var i = 0; i < JahwsUF.MaELH.MapTagHandlers.length; i++)
	{
		JahwsUF.MaELH.MapTagHandlers[i].call(this); // Funnels the map along as well.
	}
	
	if(this.meta.script)
	{
		var script = this.note.match(/<script>([\w\W]*?)<\/script>/i);
		
		eval(RegExp.$1.trim());
	}
	
	return 0;
}
