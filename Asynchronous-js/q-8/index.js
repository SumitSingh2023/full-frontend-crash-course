function getUserData(id,callback){
    setTimeout(()=>{
        const user ={
            id:id,
            name:'sumit singh',
            email:'sumit123@gmail.com'
        }
        callback(user)

    },2000)
    

}

function displayUser(user){
    console.log(`user id:${user.id}`)
    console.log(`name: ${user.name}`)
    console.log(`email: ${user.email}`)

}

getUserData(1,displayUser)