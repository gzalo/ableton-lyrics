function bang(){
	var api = new LiveAPI("this_device canonical_parent");
	api.goto('this_device canonical_parent clip_slots ' + api.get("playing_slot_index") + ' clip');
	var clipName = api.get("name");
	outlet(0, clipName);
}

function msg_int(a){
	bang();
}
