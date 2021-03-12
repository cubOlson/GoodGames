document.addEventListener('DOMContentLoaded', event => {

    window.addEventListener("load", (event)=>{
        console.log("hello from javascript!")
    })
    
    const demoUserBtn = document.getElementById('demoUserBtn')
    const email = document.getElementById('login-email')
    const password = document.getElementById('login-password')
    
    demoUserBtn.addEventListener('click', e =>  {
        e.preventDefault()
        email.value = 'demo1@gmail.com'
        password.value = '1!aA'
    })                             
})