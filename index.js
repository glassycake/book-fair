import {books} from '/data.js'

const modal = document.getElementById('modal')
const modalTitle = document.getElementById('modal-title')
const modalAuthor = document.getElementById('modal-author')
const modalText = document.getElementById('modal-text')
const modalVideo = document.getElementById('modal-video')
const header = document.getElementById('header')
const bookOne = document.getElementById('book-one')
const bookTwo = document.getElementById('book-two')
const bookThree = document.getElementById('book-three')
const bookFour = document.getElementById('book-four')
const bookFive = document.getElementById('book-five')
const bookSix = document.getElementById('book-six')
const bookSeven = document.getElementById('book-seven')
const bookEight = document.getElementById('book-eight')
const bookNine = document.getElementById('book-nine')
const bookTen = document.getElementById('book-ten')
const bookEleven = document.getElementById('book-eleven')
const bookTwelve = document.getElementById('book-twelve')
const bookThirteen = document.getElementById('book-thirteen')

// Page Colors - Can Change! //

body.style.background = "#C2C5BB" //page background color//
header.style.background = "#13c4a3" //header background color//
header.style.color = "#4c6085" //header text color//
modal.style.background = "#C2C5BB" // book modal background color (same as main page bg color)//
modalText.style.color = "black" //book modal text color//
modalTitle.style.color = "black"
modalAuthor.style.color = "black"


// Close Button //
document.getElementById('modal-close-btn').addEventListener("click", function(){
    modal.style.display = "none",
    
    function(){
        let video =  modalVideo
        video.contentWindow.postMessage( '{"event":"command", "func":"stopVideo", "args":""}', '*');
    }
})


function openModal(){
    modal.style.display = "block"
}


// Book Images- Modal Openers //
bookOne.addEventListener("click", function(){
    
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[0].title
    modalAuthor.textContent += books[0].author
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[0].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

bookTwo.addEventListener("click", function(){
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[1].title
    modalAuthor.textContent += books[1].author
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[1].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

bookThree.addEventListener("click", function(){
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[2].title
    modalAuthor.textContent += books[2].author
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[2].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

bookFour.addEventListener("click", function(){
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[3].title
    modalAuthor.textContent += books[3].author
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[3].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

bookFive.addEventListener("click", function(){
    
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[4].title
    modalAuthor.textContent += books[4].author
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[4].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

bookSix.addEventListener("click", function(){
    
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[5].title
    modalAuthor.textContent += books[5].author
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[5].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

bookSeven.addEventListener("click", function(){
    
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[6].title
    modalAuthor.textContent += books[6].author
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[6].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

bookEight.addEventListener("click", function(){
    
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[7].title
    modalAuthor.textContent += books[7].author
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[7].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

bookNine.addEventListener("click", function(){
    
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[8].title
    modalAuthor.textContent += books[8].author
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[8].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

bookTen.addEventListener("click", function(){
    
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[9].title
    modalAuthor.textContent += books[9].author
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[9].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

bookEleven.addEventListener("click", function(){
    
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[10].title
    modalAuthor.textContent += books[10].author
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[10].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

bookTwelve.addEventListener("click", function(){
    
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[11].title
    modalAuthor.textContent += books[11].author
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[11].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

bookThirteen.addEventListener("click", function(){
    
    modalTitle.textContent = ""
    modalAuthor.textContent = "by "
    modalText.textContent = ""
    modalVideo.innerHTML = ""
    openModal()
    modalTitle.textContent += books[12].title
    modalAuthor.textContent += books[12].author
    modalVideo.innerHTML = `<iframe width="525" height="350" src="https://www.youtube.com/embed/${books[12].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})
