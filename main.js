new Vue({
  el: "#app",
  data: {
    items: [],
    query: "鬼滅",
  },
  methods: {
    async search() {
      const items = await this.getApi();
      console.log(items);

      const texts = items.map((item) => {
        return `
        <div class="items-wrapper">
        <img class='w100' src='${item.image}' />
        <h3 class='mb8'>${item.title}</h3>
        <a class='book_button' href='${item.link}', target='_blank'>
        詳しく
        </a>

          </div>
        `;
      });
      const results = document.querySelector("#result");
      results.innerHTML = texts.join("");


    },
    async getApi() {
      // APIを叩く
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${this.query}`
      );
      // data = json
      const data = await response.json();

      // itemsを一個一個取得
      const items = data.items.map((item) => {
        const vi = item.volumeInfo;
        return {
          title: vi.title,
          description: vi.description,
          link: vi.infoLink,
          image: vi.imageLinks ? vi.imageLinks.smallThumbnail : "./img/noimage.gif",
        };
      });

      return items;
    },
  },
});
