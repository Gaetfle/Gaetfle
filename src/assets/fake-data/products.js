// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";
import product_01_image_04 from "../images/product_01.4.jpeg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpeg";
import product_02_image_03 from "../images/product_2.3.jpg";
import product_02_image_04 from "../images/product_2.4.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";
import product_03_image_04 from "../images/product_3.4.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_01_1 from "../images/product_4.1.1.jpg";
import product_04_image_01_2 from "../images/product_4.1.2.jpg";

// import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";
import product_04_image_04 from "../images/product_4.3.jpg";

import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_02_1 from "../images/product_08.1.jpg";
import product_05_image_02_2 from "../images/product_08.2.jpg";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/socola.jpg";
import product_06_image_02 from "../images/tiramisu.jpg";
import product_06_image_03 from "../images/flangato.jpg";

import product_07_image_01 from "../images/product_9.jpg";
import product_07_image_02 from "../images/product_9.1.jpg";
import product_07_image_03 from "../images/product_9.2.jpg";

const products = [
  {
    id: "01",
    title: "Rose",
    price: 450000,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Flower",
    rating: 4.0,
    type: "gift for 83",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "Baby",
    price: 150000,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Flower",
    rating: 5.0,
    type: "new",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Auspicious",
    price: 200000,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Flower",
    rating: 4.0,
    type: "gift for 83",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "Carnation",
    price: 350000,
    image01: product_04_image_01,
    image02: product_04_image_01_1,
    image03: product_04_image_01_2,
    category: "Flower",
    rating: 4.5,
    type: "best seller",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "05",
    title: "Chrysanthemum",
    price: 100000,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Flower",
    rating: 4.8,
    type: "best seller",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "Tuplip",
    price: 900000,
    image01: product_02_image_04,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Flower",
    rating: 4.7,
    type: "new",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "Sunflower",
    price: 300000,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Flower",
    rating: 4.9,
    type: "gift for 83",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Peony",
    price: 850000,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Flower",
    rating: 5.0,
    type: "gift for 83",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "Hydrangea",
    price: 550000,
    image01: product_03_image_04,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Flower",
    rating: 4.9,
    type: "best seller",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Salem",
    price: 500000,
    image01: product_04_image_04,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Flower",
    rating: 5.0,
    type: "new",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "Delphiniums",
    price: 750000,
    image01: product_01_image_04,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Flower",
    rating: 4.9,
    type: "new",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Peony",
    price: 550000,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Flower",
    rating: 5.0,
    type: "best seller",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "13",
    title: "Set Mouse Square",
    price: 550000,
    image01: product_01_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Cake",
    rating: 4.9,
    type: "best seller",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "14",
    title: "Cupcake",
    price: 250000,
    image01: product_01_image_03,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Cake",
    type: "new",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "15",
    title: "Passion Mouse",
    price: 500000,
    image01: product_05_image_02,
    image02: product_05_image_02_1,
    image03: product_05_image_02_2,
    category: "Cake",
    rating: 5.0,
    type: "best seller",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "16",
    title: "Choco Redvelvet",
    price: 700000,
    image01: product_05_image_03,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Cake",
    rating: 5.0,
    type: "new",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "17",
    title: "Set chocolate",
    price: 200000,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Cake",
    rating: 4.9,
    type: "best seller",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "18",
    title: "Choco tiramisu",
    price: 500000,
    image01: product_06_image_02,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Cake",
    rating: 5.0,
    type: "gift for 83",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "19",
    title: "Flan gato",
    price: 300000,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Cake",
    rating: 4.9,
    type: "best seller",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "20",
    title: "Almond Cookie",
    price: 200000,
    image01: product_07_image_02,
    image02: product_07_image_03,
    image03: product_07_image_01,
    category: "Cake",
    rating: 5.0,
    type: "best seller",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
];

export default products;
