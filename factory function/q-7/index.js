function Iphone3(ASIN,color,display,camera,bluetooth){
    this.ASIN=ASIN
    this.color=color
    this.display= display
    this.camera = camera
    this.bluetooth = bluetooth

    this.dial=function(){
        return "tring.. tring.."
    }

    this.sendMessage=function(){
        return "sending Message"
    }

    this.cameraClick=function(){
        return "Camera clicked"
    }

    this.connectBluethooth = function(){
        return "Bluethooth connected successfully"
    }
}

let i3 = {}
Iphone3.call(i3,3,'orange','8.9 inch','32px',true)
Iphone3.apply(i3,[3,'orange','8.9 inch','32px',true])
console.log(i3.sendMessage())
