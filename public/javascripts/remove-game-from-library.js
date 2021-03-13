window.addEventListener("load", (event)=>{
        console.log("hello from javascript!")
    })

document.addEventListener('DOMContentLoaded', event => {
    const deleteBtns = document.querySelectorAll('button');
    deleteBtns.forEach(button => {
        button.addEventListener('click', async(e) => {
            const gameId = button.id
            let body = { gameId }
            try {
              console.log('ENTER THE TRY')
              const res = await fetch(`/users/mygames/delete`, {
                method: 'post',
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
                });
                const cardDiv = button.parentNode
                cardDiv.remove()
              if(!res.ok){
                console.log('response did not return 200s')
                window.location.href = 'https://goodgames-appacademy.herokuapp.com/users/login'
              } else {
              }
            } catch(err) {
                console.log(err)
            }
        })
    })
});
