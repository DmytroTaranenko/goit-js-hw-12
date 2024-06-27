import {
    imageTemplate,
    imagesTemplate,
    showLoader,
    hideLoader,
    showBtn,
    hideBtn,
} from "./js/render-functions";
import { getImages } from "./js/pixabay-api"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";


const refs = {
formEl:document.querySelector('.form'),
galleryEl:document.querySelector('.gallery-list'),
loader:document.querySelector('.loader'),
jsBtn:document.querySelector('.js-btn')
}


const lightbox = new SimpleLightbox('.gallery-list a', {
        captionsData: 'alt',
        captionDelay: 250,
    });

let currentPage = 1;
let userInput = '';
let maxPage;

refs.formEl.addEventListener('submit', async e => {
    e.preventDefault()

    const formData = new FormData(refs.formEl)
    userInput = formData.get('userInput').trim()

    if (userInput === '') {
        iziToast.warning({
            title: 'Empty search',
            message: "Please enter a search query!",
        });
        return;
    }
    showLoader(refs.loader)
    try {
        currentPage = 1;
        const data = await getImages(userInput, currentPage)
        maxPage = Math.ceil(data.totalHits / 15)
        if (data.hits.length !== 0) {
            const markup = imagesTemplate(data.hits)
            refs.galleryEl.innerHTML = markup
            lightbox.refresh()
        } else {
            iziToast.warning({
                title: 'No Results',
                message: "Sorry, there are no images matching your search query. Please try again!",
            });
            refs.galleryEl.innerHTML = ''
        }
    } catch (err) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later.',
        })
        console.log(err);
    } finally {
        hideLoader(refs.loader)
        refs.formEl.reset()
        checkMaxPage()
    }

})

refs.jsBtn.addEventListener('click', async (e) => {
    hideBtn(refs.jsBtn)
    showLoader(refs.loader)
    currentPage++
    const data = await getImages(userInput, currentPage)
    const markup = imagesTemplate(data.hits)
    refs.galleryEl.insertAdjacentHTML('beforeend', markup)
    lightbox.refresh()
    checkMaxPage()
    scrollPage()
    hideLoader(refs.loader)


    
})

function checkMaxPage() {
    if (currentPage < maxPage) {
        showBtn(refs.jsBtn)
    } else {
        infoMessage()
        hideBtn(refs.jsBtn)
    }
}

function infoMessage() {
    if (maxPage) {
        iziToast.info({
            title: 'Last page',
            message: "We're sorry, but you've reached the end of search results."
        })
    }
}

function scrollPage() {
    const height = refs.galleryEl.children[0].getBoundingClientRect().height
    scrollBy({
        'top': height * 3,
        'behavior':'smooth'
    })
}