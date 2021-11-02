new Vue({
  el: "#app",
  data: {
    message: "HelloWorld!",
    number: "0",
    // titles: [],
    // images: [],
    items:[],
    query: "",
  },
  methods: {
    increment() {
      this.number = ++this.number;
    },
    decrement() {
      this.number = --this.number;
    },
    reverse() {
      this.message = this.message.split("").reverse().join("");
    },
    async getApi() {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${this.query}`

      );
      const data = await response.json();
      console.log(data.items);
      this.items = data.items;
      // for (const item of items) {
      //   const image = item.volumeInfo.imageLinks.smallThumbnail;
      //   this.images.push(image)
      //   const title = item.volumeInfo.title;
      //   this.titles.push(title);
      // }
    },
  },
});
