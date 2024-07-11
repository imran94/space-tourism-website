import { createApp } from "https://unpkg.com/petite-vue?module";
// import data from "../data.json";

function Content() {
  return {
    // data: {},
    fetchData() {
      fetch("../data.json")
        .then((res) => res.json())
        .then((json) => console.log(json));
    },
    mounted() {
      this.fetchData();

      // console.log(data);
    },
  };
}

createApp({ Content }).mount();
