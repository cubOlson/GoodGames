window.addEventListener('DOMContentLoaded', event => {
  const deleteReviewBtns = document.querySelectorAll('#deleteReviewBtn')

  deleteReviewBtns.forEach( button => {
    button.addEventListener('click', async (e) => {
      const gameId = e.target.name
      const reviewId = e.target.value
      console.log(reviewId)
      try { 
        const res = await fetch(`/games/${gameId}/delete/${reviewId}`, { method: 'DELETE' })
        if(res.ok) {
          const reviewDiv = document.getElementById(reviewId)
          reviewDiv.remove()
        }
      } catch (e) {
        console.log('response did not return 200s')
        window.location.href = 'https://goodgames-appacademy.herokuapp.com/users/login'
      }
  })
  })
})