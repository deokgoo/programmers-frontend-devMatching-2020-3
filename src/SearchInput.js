const TEMPLATE = '<input type="text">';

class SearchInput {
  $searchInput = null;

  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);
    $searchInput.focus();

    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    $searchInput.addEventListener("click", e => {
      $searchInput.value = '';
    });
  }

  render() {
    console.log()
  }
}
