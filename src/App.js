console.log("app is running!");

class App {
  $target = null;
  data = [];
  searchedData = [];

  //2. $target 파라미터로 #App가 들어옴
  constructor($target) {
    this.$target = $target;

    this.darkToggle = new DarkToggle({
      $target
    });

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        this.addHistoryData(keyword);
        this.searchData(keyword);
      }
    });

    this.searchHistory = new SearchHistory({
      $target,
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        this.imageInfo.setState({
          visible: true,
          image
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });
  }

  //this -> window, window.data = [];
  setState(nextData) {
    console.log('setState :', this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }

  searchData(keyword) {
    // this.searchResult.$searchResult.innerHTML = '<div class="loader-wrapper"><div class="loader"></div></div>';
    api.fetchCats(keyword).then(({ data }) => this.setState(data));
  }

  addHistoryData(keyword) {
    this.searchedData.unshift(keyword);
    if (this.searchedData.length > 5) {
      console.log(this.searchedData);
      this.searchedData.pop();
    }
    console.log(this.searchedData);
    this.searchHistory.setHistoryData(this.searchedData);
  }
}

