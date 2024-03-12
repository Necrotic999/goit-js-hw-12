import { getImages } from "./js/pixabay-api";
import { ulEl ,imagesTemplate } from "./js/render-functions";
import error from "./img/error-icon.svg";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const instance = new SimpleLightbox(".gallery a", {
            captionsData: "alt",
            captionDelay: 200,
        }); 

const formEl = document.querySelector(".js-form");
const loadEl = document.querySelector(".loader");
const loadBtn = document.querySelector(".load-btn");

let page = 1;
let maxPage;
let inputValue = "";

formEl.addEventListener("submit", onBtnSubmit);
loadBtn.addEventListener("click", onLoadBtnClick)

async function onBtnSubmit(e) { 
    e.preventDefault();
    page = 1;
    inputValue = e.target.elements.photo.value;
    ulEl.innerHTML = "";
    if (!inputValue.trim()) { 
        hideLoadBtn();
        return;
    }
    showLoader();
    hideLoadBtn();

    try {
        const data = await getImages(inputValue, page);
        const markup = imagesTemplate(data);
        if (data.hits.length === 0) {
            ulEl.innerHTML = markup;
            return iziToast.show({
                iconUrl: error,
                color: "#ef4040",
                messageColor: "#fff",
                position: "topRight",
                message: "Sorry, there are no images matching your search query. Please try again!"
            });
        }
        ulEl.insertAdjacentHTML("beforeend", markup);
        if (data.totalHits > 15) { 
            showLoadBtn();
        }
    } catch (error) {
        console.log(error);
    } finally { 
        hideLoader();
        instance.refresh();
        e.target.reset();
    }  
    
}

async function onLoadBtnClick() { 
    page++;
    showLoader();
    try {
        const data = await getImages(inputValue, page);
        const markup = imagesTemplate(data);
        maxPage = Math.ceil(data.totalHits / 15);
        ulEl.insertAdjacentHTML("beforeend", markup);
        scroll();
        if (page >= maxPage) {
            hideLoadBtn();
            iziToast.show({
                color: "#4390d9",
                messageColor: "#fff",
                position: "topRight",
                message: "We're sorry, but you've reached the end of search results."
            });
        }
    } catch (error) { 
        console.log(error);
    }
    hideLoader();
    instance.refresh();

}

function showLoader() { 
    loadEl.classList.remove("is-hidden");
}

function hideLoader() { 
    loadEl.classList.add("is-hidden");
}

function showLoadBtn() { 
    loadBtn.classList.remove("is-hidden");
}

function hideLoadBtn() { 
    loadBtn.classList.add("is-hidden");
}

function scroll() {
    const liEl = ulEl.firstElementChild;
    const height = liEl.getBoundingClientRect().height * 2;
    scrollBy({
        behavior: "smooth",
        top: height,
    });
}