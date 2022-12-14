"use strict";
class TakePhotos {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculations
        return 8;
    }
}
class Instagrams extends TakePhotos {
    constructor(cameraMode, filter, burstMode) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const nadatari = new Instagrams("Test", "test", 3);
