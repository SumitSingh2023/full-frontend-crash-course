function iPhone1(ASIN,color,display,camera){
    let obj = {}
    obj.ASIN = ASIN
    obj.color = color
    obj.display = display
    obj.camera = camera

    obj.dial=function(){
        return "tring.. tring.."
    }
    obj.sendMessage = function(){
        return "sending message..."
    }

    obj.cameraClick = function(){
        return "camera clicked"
    }

    return obj
}

let i1 = iPhone1(1,'red',12.6,'36.0 MP')
console.log(i1)

console.log(i1.dial())
console.log(i1.sendMessage())
console.log(i1.cameraClick())

