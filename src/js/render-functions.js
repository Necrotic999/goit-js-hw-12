export const ulEl = document.querySelector(".gallery");

function imgTemplate(img) {
    const {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = img;
    return `<li class="list-item">
        <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" class="item-img" /></a>
        <div class="list-wrapper">
          <div class="text-wrapper">
            <h5 class="title">Likes</h5>
            <p class="text">${likes}</p>
          </div>
          <div class="text-wrapper">
            <h5 class="title">Views</h5>
            <p class="text">${views}</p>
          </div>
          <div class="text-wrapper">
            <h5 class="title">Comments</h5>
            <p class="text">${comments}</p>
          </div>
          <div class="text-wrapper">
            <h5 class="title">Downloads</h5>
            <p class="text">${downloads}</p>
          </div>
        </div>
      </li>`
}

export function imagesTemplate({hits}) { 
    return hits.map(imgTemplate).join("");
}

