class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    console.log('data: ', this.data);
    if(this.data === undefined) {
      this.$searchResult.innerHTML = '데이터 불러오기 실패'
    } else {
      if(this.data.length > 0) {
        this.$searchResult.innerHTML = this.data
          .map(
            cat => `
          <article class="item">
            <img src=${cat.url} alt=${cat.name} />
          </article>
        `
          )
          .join("");

        this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
          $item.addEventListener("click", () => {
            this.onClick(this.data[index]);
          });
        });
      } else {
        this.$searchResult.innerHTML = '<div class="no-item">검색 결과가 없어요</div>';
      }
    }
  }
}
