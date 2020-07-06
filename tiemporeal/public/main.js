const socket = io()
//elements
let message = document.getElementById("message")
let user = document.getElementById("user")
let btn = document.getElementById("enviar")
let output = document.getElementById("output")
let actions = document.getElementById("actions")

btn.addEventListener('click',function(){
    let obj = {
        user : user.value,
        message : message.value
    }
    socket.emit("chat:message",obj)
})

message.addEventListener('keypress',function () {
    socket.emit('chat:typing',user.value)
})

socket.on('chat:message',(data)=>{
    output.innerHTML+= `<p>
        <strong>${data.user}: </strong>${data.message}
    </p>`
    actions.innerHTML='<p></p>'
})

socket.on('chat:typing',(data)=>{
    actions.innerHTML=`<p>
        <i>${data} escribiendo...</i>
    </p>`
})