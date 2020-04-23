console.log("app is running!");

class App {
  $target = null;
  data = [];

  //2. $target 파라미터로 #App가 들어옴
  constructor($target) {
    this.$target = $target;

    this.darkToggle = new DarkToggle({
      $target
    });

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        api.fetchCats(keyword).then(({ data }) => this.setState(data));
      }
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

  setState(nextData) {
    console.log('setState :', this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}

