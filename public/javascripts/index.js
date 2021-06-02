document.addEventListener('DOMContentLoaded', event => {

    window.addEventListener("load", (event)=>{
        // console.log("hello from javascript!")
    })

    const forms = document.querySelectorAll('form')
    forms.forEach(form => {
        form.addEventListener('change', async(e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const gameId = formData.get("gameId");
            const status = formData.get("status");
            const _csrf = formData.get("_csrf");
            const body = { gameId, status, _csrf };
            try {
              const res = await fetch(`/users/mygames`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
              });
              console.log("this is the error")
              if(!res.ok){
                const pojo = await res.json()
                console.log(pojo)
                window.location.href = 'https://goodgames-appacademy.herokuapp.com/users/login'
              }
            } catch(err) {
                console.log(err)
            }
        })
    })
});
