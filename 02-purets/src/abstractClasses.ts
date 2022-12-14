
abstract class TakePhotos {// abstract classes are like blueprint, cant create
    constructor(
        public cameraMode: string,
        public filter: string
        
        ) {}

        abstract getSepia(): void  //abstract method
        getReelTime(): number {
            //some complex calculations
            return 8
        }
}



class Instagrams extends TakePhotos {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
} 

const nadatari = new Instagrams("Test", "test", 3) 