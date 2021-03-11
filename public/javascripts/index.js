window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")
})

const profileDeleteBtn = document.getElementById('profileDeleteBtn') 

profileDeleteBtn.addEventListener('click', async (e) => {
    const user = await fetch('http://localhost:8080/')

})