class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({$target, data}) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  closeModal() {
    this.data.visible = false;
    this.render()
  }

  setCloseListener() {
    document.querySelector("#close-modal").addEventListener('click', e => {
      e.stopPropagation();
      this.closeModal();
    }, {once : true});
    document.querySelector(".ImageInfo").addEventListener('click', e => {
      e.stopPropagation();
      if (e.target !== e.currentTarget) return;
      this.closeModal();
    });
    window.addEventListener('keyup', e => {
      if(e.keyCode === 27) {
        console.log('keyboard esc');
        this.closeModal();
      }
    }, {once : true});
  }

  getCatInfo(catId) {
     api.fetchCatInfo(catId).then(res => {
       const {name, url, temperament, origin} = res.data;

       this.$imageInfo.innerHTML = `
        <section class="content-wrapper">
          <div class="title">
            <h3>${name}</h3>
            <button class="close" id="close-modal">X</button>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>
              <p>성격: ${temperament}</p>
            </div>
            <div>
              <p>태생: ${origin}</p>
            </div>
          </div>
        </section>`;
       this.$imageInfo.style.display = "block";
       this.setCloseListener(true);
    });
  }

  render() {
    if (this.data.visible) {
      this.getCatInfo(this.data.image.id);
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
