export function imageTemplate(item) {
    return `<li class="gallery-item">
        <a href="${item.largeImageURL}" class="gallery-link" >
        <img class="image-item" src="${item.webformatURL}" alt="${item.tags}" width="360" height="200" />
        </a>
        <div class="wrap">
          <div>
            <h4 class="image-title">likes</h4>
            <p class="image-description">${item.likes}</p>
          </div>
          <div>
            <h4 class="image-title">Views</h4>
            <p class="image-description">${item.views}</p>
          </div>
          <div>
            <h4 class="image-title">Comments</h4>
            <p class="image-description">${item.comments}</p>
          </div>
          <div>
            <h4 class="image-title">Downloads</h4>
            <p class="image-description">${item.downloads}</p>
          </div>
        </div>
      </li>`
}

export function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('')
}


export function showLoader(loader) {
  loader.classList.remove('hidden');
}

export function hideLoader(loader) {
  loader.classList.add('hidden');
}

export function showBtn(jsBtn) {
  jsBtn.classList.remove('hidden')
  
}

export function hideBtn(jsBtn) {
  jsBtn.classList.add('hidden')
}
