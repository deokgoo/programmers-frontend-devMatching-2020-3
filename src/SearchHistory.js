class SearchHistory {
  $searchHistory = null;
  historyData = null;
  onClick = null;

  constructor({$target, searchedData, onClick}){
    const $searchHistory = document.createElement("div");
    $searchHistory.className = "history";
    $searchHistory.innerHTML = "히스토리";
    this.$searchHistory = $searchHistory;

    $target.appendChild(this.$searchHistory);
    this.onClick = onClick;
  }

  setHistoryData(inputData) {
    this.historyData = inputData;
    this.render();
  }

  render() {
    if(this.historyData.length > 0) {
      this.$searchHistory.innerHTML = this.historyData.map(searchedData => `
            <ul><li class="searchedData">${searchedData}</li></ul>
          `).join("");
      document.querySelectorAll('.searchedData').forEach((v, i) => {
        v.addEventListener('click', (e) => {
          console.log(v.innerHTML);
        });
      });
    }
  }
}
