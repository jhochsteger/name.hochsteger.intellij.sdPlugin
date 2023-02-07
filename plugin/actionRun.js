class ActionRun {
    actionId = "name.hochsteger.intellij.run";
    update(action, event, jsonEvent) {
        // if (action === this.actionId) {
        console.log()
            switch (event) {
                case ReceiveEvents.keyDown:
                    console.log(jsonEvent);
                    break;
                default:
                    console.log("Unknown event: " + event);
                    break;
            }
        // }
    }

    constructor() {
        streamDeckSocketInstance.subscribeToEvent(ReceiveEvents.keyDown, this);
    }
}
