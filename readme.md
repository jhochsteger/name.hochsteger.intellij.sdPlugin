# Template Project for the Streamdeck SDK

## How does it work?

It uses the [streamdeck sdk](https://developer.elgato.com/documentation/stream-deck/sdk/overview/) via websockets and communicates with the Streamdeck.
The Plugin.js file contains a class that handles the connection with the Streamdeck and allows you to register you classes to events and send events to the Streamdeck.

## How to use it?

1. Clone the pluginObserver.js file and rename the class to the name of your action. (e.g. MyActionObserver.js)
2. Add the file to the plugin.html file
3. Instance the class in the script tag in the plugin.html file

For the Property Inspector do the same in the pi folder.

The visual elements of the Property Inspector can be added directly in the pi.html file.

For an example look at https://github.com/jhochsteger/name.hochsteger.test.sdPlugin
