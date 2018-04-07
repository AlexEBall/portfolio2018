const portfolioContainer = document.querySelector('.portfolio-items')

portfolioContainer.addEventListener('click', e => {
  // console.log(e)
  e.preventDefault()

  const modalToggle = e.target.closest('.portfolio-link')
  // console.log(modalToggle)
  if (! modalToggle) return

  const modal = modalToggle.parentNode.nextElementSibling
  const closeButton = modal.querySelector('.modal-close')

  const modalOpen = _ => {
    console.log('clicked');
    modal.classList.add('is-open')
    modal.style.animation = 'modalIn 500ms forwards'
    //document.body.style.overflowY = 'hidden'
  }

  // document.getElementsByClassName('.modal-close').onClick = function() {
  //   // alert('clickec')
  //   console.log('clicked');
  // }

  const modalClose = _ => {
    console.log('clicked');
    modal.classList.remove('is-open');
    // modal.classList.add('is-closed');
    modal.removeEventListener('animationend', modalClose)
  }

  closeButton.addEventListener('click', _ => {
    modal.style.animation = 'modalOut 500ms forwards'
    modal.addEventListener('animationend', modalClose)
    //document.body.style.overflowY = 'scroll'
  })

  document.addEventListener('keydown', e => {
    if ( e.keyCode === 27 ) {
      modal.style.animation = 'modalOut 500ms forwards'
      modal.addEventListener('animationend', modalClose)
      document.body.style.overflowY = 'scroll'
    }
  })

  modalOpen()

})
