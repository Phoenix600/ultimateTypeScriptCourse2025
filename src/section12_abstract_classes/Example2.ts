abstract class Camera
{
    openCamera():void
    {
        console.log("Opening Camera");
    }

    abstract click():void;
    abstract record():void;
}

abstract class MusicPlayer
{
    openMusicPlayer():void
    {
        console.log("Opening Music Player");
    }

    abstract shuffle():void;
}

class SmartPhone extends Camera {
    click(): void {
        console.log("Clicking a photo with the smartphone camera");
    }

    record(): void {
        console.log("Recording a video with the smartphone camera");
    }
}


const myPhone = new SmartPhone();

myPhone.openCamera();  // Output: Opening Camera
myPhone.click();       // Output: Clicking a photo with the smartphone camera
myPhone.record(); 