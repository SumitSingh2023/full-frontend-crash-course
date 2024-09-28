function iPhone2(ASIN,color,display,camera,bluetooth){
    return {
        ASIN,
        color,
        display,
        camera,
        bluetooth,
        dial : function(){
           return "tring tring..."
        },
        sendMessage : function(){
            return 'sending message'
        },
        cameraClick: function(){
            return 'camera clicked'
        },
        connectBluetooth : function(){
            return "Bluethooth connected successfully"
        }

    }

}

let ip1 = iPhone2(2,"blue","10 inch","32Px",true)
console.log(ip1)
console.log(ip1.dial())
console.log(ip1.sendMessage())
console.log(ip1.cameraClick())
console.log(ip1.connectBluetooth())