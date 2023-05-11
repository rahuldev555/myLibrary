import { ICatItem } from "./interface";
import categoryIcons from "./assets/categories";

export const CategoryItems: Array<ICatItem> = [
  { image: categoryIcons["action"], title: "Action", link: "/category/action" },
  {
    image: categoryIcons["adventure"],
    title: "Adventure",
    link: "/category/adventure",
  },
  { image: categoryIcons["comedy"], title: "Humor", link: "/category/humor" },
  { image: categoryIcons["crime"], title: "Crime", link: "/category/crime" },
  { image: categoryIcons["family"], title: "Family", link: "/category/family" },
  {
    image: categoryIcons["fantasy"],
    title: "Fantasy",
    link: "/category/fantasy",
  },
  {
    image: categoryIcons["fiction"],
    title: "Fiction",
    link: "/category/fiction",
  },
  { image: categoryIcons["horror"], title: "Horror", link: "/category/horror" },
  { image: categoryIcons["magic"], title: "Magic", link: "/category/magic" },
  {
    image: categoryIcons["mystery"],
    title: "Mystery",
    link: "/category/mystery_and_detective_stories",
  },
  {
    image: categoryIcons["nonFiction"],
    title: "Non Fiction",
    link: "/category/non_fiction",
  },
  {
    image: categoryIcons["romance"],
    title: "Romance",
    link: "/category/romance",
  },
  {
    image: categoryIcons["science fiction"],
    title: "Science Fiction",
    link: "/category/science_fiction",
  },
  {
    image: categoryIcons["thriller"],
    title: "Thriller",
    link: "/category/thriller",
  },
  {
    image: categoryIcons["youngAdult"],
    title: "Young Adult",
    link: "/category/young_adult_fiction",
  },
];

export const ServiceItems: Array<ICatItem> = [
  {
    image: categoryIcons["crowd"],
    title: "Crowd Level",
    link: "/services/crowd",
  },
  {
    image: categoryIcons["compass"],
    title: "Nearby Libraries",
    link: "/services/nearby-libs",
  },
];
