class DarkToggle {
  $darkToggle = null;
  darkStatus = window.matchMedia('(prefers-color-scheme: dark)').matches;

  constructor({$target}) {
    const $darkToggle = document.createElement("button");
    $darkToggle.className = "DarkToggle";
    $darkToggle.innerHTML = this.darkStatus ? "라이트모드" : "다크모드";
    this.$darkToggle = $darkToggle;

    $darkToggle.addEventListener("click", e => {
      this.darkStatus = !this.darkStatus;
      this.updateForDarkModeChange(this.darkStatus);
    });

    $target.appendChild($darkToggle);
  }

  updateForDarkModeChange(darkStatus) {
    document.querySelector('#dark-mode-sheet').setAttribute(
      'media',
      darkStatus ? 'screen' : 'not screen'
    );
    this.$darkToggle.innerHTML = darkStatus ? "라이트모드" : "다크모드";
  }
}

