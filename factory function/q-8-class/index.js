class Iphone4{
    constructor(ASIN,color,display,camera,bluetooth){
        this.ASIN = ASIN
        this.color = color
        this.display = display
        this.camera = camera
        this.bluetooth = bluetooth
    }

    dial(){
        return "tring.. tring.."
    }
    sendMessage(){
        return "Sending message"
    }
    cameraClick(){
        return "camera clicked"
    }
    connectBluetooth(){
        return "bluetooth connected"
    }
}

let ip4 = new Iphone4(4,"pink","10 inch","50px",true)
console.log(ip4)
console.log(ip4.cameraClick())