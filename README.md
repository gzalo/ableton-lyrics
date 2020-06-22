# Ableton Lyrics 
Lyrics for Ableton (using Max for Live and OSC)

Usage:
- Import the amxd patch into a new MIDI layer
- Create multiple clips (each one should map to a lyric line) and rename them to add the desired text in each case
- Add a single note in each clip. This note has to be near the beginning of the clip, not at the start but a couple hundred ms after it. This is required because the Live API used to get the clip name is slow, and returns the name of the previous clip instead of the current one if called right after a new clip has started.

Output:
- The clip name gets sent through OSC (using the /clipName address) to localhost, port 1234. This can be used to show the text in another application. 

Disclaimer: this plugin only works in session view, not arrangement. If anyone knows if there's a way to make it work there, please make a PR!
	
Todo:
- Add example project
- Unhardcode remote address and port
- Make a small electron app to show lyrics, the long term goal is to make them available be included in a stream (using OBS with a chroma key filter, for instance)