let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    verifyCookie()
  }
}, 100);

function verifyCookie() {
  if(Cookies.get('alreadySeenModal')){
    return
  } else {
    detectMobile()
  }
}

function detectMobile() {
  if(new MobileDetect(window.navigator.userAgent).os() == 'AndroidOS') {
    Cookies.set('alreadySeenModal', true)
    openModal()
  } 
}

function openModal() {
  $('.modalContainer').fadeIn('500')
}

function closeModal() {
  $('.modalContainer').fadeOut('500')
}

function closeModalClickingInOverlay(event) {
  if(event.currentTarget === event.target) {
    closeModal()
  }
}