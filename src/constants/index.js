import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  bigShoe4,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe8,
  shoe9,
  shoe10,
  shoe11,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  thumbnailShoe4,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
    price: "320,-",
    name: "Nike Air Max 720 ISPA Metallic Silver",
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
    price: "145,-",
    name: "Nike React Runner",
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
    price: "159.97",
    name: "Nike ISPA Sense Flyknit",
  },
  {
    thumbnail: thumbnailShoe4,
    bigShoe: bigShoe4,
    price: "119.45",
    name: "Nike ISPA Link Burley/Redstone/Desert",
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers"},
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Max 270 SP SOE",
    price: "$145",
    rating: 4.5,
    type: "AIR/ISPA",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Max 720 ISPA",
    price: "$320",
    rating: 3,
    type: "AIR/ISPA",
  },
  {
    imgURL: shoe6,
    name: "Nike ISPA Sense Flyknit",
    price: "$159.95",
    rating: 5,
    type: "ISPA",
  },
  {
    imgURL: shoe7,
    name: "Nike ISPA Link Gray",
    price: "$119.45",
    rating: 3.5,
    type: "ISPA",
  },
  {
    imgURL: shoe8,
    name: "Nike ISPA Road Warrior",
    price: "$867.00",
    rating: 4.5,
    type: "ISPA",
  },
  {
    imgURL: shoe9,
    name: "Nike ISPA Flow Desert Sand",
    price: "$180.00",
    rating: 3,
    type: "ISPA",
  },
  {
    imgURL: shoe10,
    name: "Nike ISPA Link Axis",
    price: "$89.00",
    rating: 5,
    type: "ISPA",
  },
  {
    imgURL: shoe11,
    name: "Nike ISPA Mind and Body",
    price: "$109.00",
    rating: 3.5,
    type: "ISPA",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
