window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var reveal2s = document.querySelectorAll('.reveal2');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }

    for (var i = 0; i < reveal2s.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveal2s[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveal2s[i].classList.add('active2');
        }
    }
}



// Js FOR POP-UP START
const slLocation = document.querySelector('.js-select-location')

const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showLocationPopup() {
    modal.classList.add('open')
}

function hideLocationPopup() {
    modal.classList.remove('open')
}

slLocation.addEventListener('click', showLocationPopup)

modalClose.addEventListener('click', hideLocationPopup)

modal.addEventListener('click', hideLocationPopup)

modalContainer.addEventListener('click', function(event) {
        event.stopPropagation()
    })
    // Js FOR POP-UP END


// <!-- JS for scroll to top button start -->
const btnScrollToTopp = document.querySelector('.btnScrollToTopp');

btnScrollToTopp.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
        btnScrollToTopp.classList.add("hide");
    } else {
        btnScrollToTopp.classList.remove("hide");
    }
})

// <!-- JS for scroll to top button end -->


// <!-- JS for chat box start -->
const chatBox = document.querySelector('.js-chatWrapper')
const btnchat = document.querySelector('.js-btnChat')
const btnclose = document.querySelector('.js-close-chat')

function showChatBox() {
    chatBox.classList.add('showChat');
}

function hideChatBox() {
    chatBox.classList.remove('showChat');

}

btnchat.addEventListener('click', showChatBox);

btnclose.addEventListener('click', hideChatBox);
// <!-- JS for chat box end-->