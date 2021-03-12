
window.addEventListener('DOMContentLoaded', e => {
    const demoUserBtn = document.getElementById('demoUserBtn')
    const email = document.getElementById('login-email')
    const password = document.getElementById('login-password')
    const form = document.querySelector('#login-form')

    demoUserBtn.addEventListener('click', e =>  {
        e.preventDefault()
        email.value = 'demo1@gmail.com'
        password.value = '1!aA'
        form.submit()
    })
})
