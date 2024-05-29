import { AiFillStar } from "react-icons/ai";
import plain from "../assets/image/plain-black-shirt.jpg";

export const products = [
  {
    _id: "623853b2578e9e6ad1ae0dd5",
    id: 1,
    img: "https://render.fineartamerica.com/images/rendered/default/t-shirt/23/30/images/artworkimages/medium/1/coffee-coding-syntax-aadil-farooq-transparent.png?targetx=0&targety=0&imagewidth=430&imageheight=516&modelwidth=430&modelheight=575",
    title: "Keep Coding",
    star: (
      <>
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
      </>
    ),
    reviews: "(342 reviews)",
    category: "round-neck",
    prevPrice: "$140",
    newPrice: "100",
    gender: "female",
    color: "white",
    company: "Van Huesen",
    available: 5,
    purchased: 0,
  },
  {
    _id: "623853b2736f19fd4eb8d44a",
    id: 2,
    star: (
      <>
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
      </>
    ),
    reviews: "(872 reviews)",
    category: "skinny",
    prevPrice: "$140",
    newPrice: "50",
    img: "https://i.pinimg.com/236x/af/96/95/af9695e0116a1d859336024e6cdcea10.jpg",
    title: "Black Skull",
    gender: "female",
    color: "black",
    company: "Allen Solly",
    available: 5,
    purchased: 0,
  },
  {
    _id: "623853b2e91c8de578c9245e",
    id: 3,
    img: "https://5.imimg.com/data5/SH/GC/MY-8764775/mens-t-shirt-500x500.jpg",
    title: "Mix Yellow",
    star: (
      <>
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
      </>
    ),
    reviews: "(1510 reviews)",
    category: "sports",
    prevPrice: "$240",
    newPrice: "200",
    gender: "male",
    color: "yellow",
    company: "Tommy Hilfiger",
    available: 5,
    purchased: 0,
  },
  {
    _id: "623853b2cdda0d5bc294f791",
    id: 4,
    img: "https://m.media-amazon.com/images/I/61GMJ+3ekAS._AC_UL320_.jpg",
    title: "Right Price",
    star: (
      <>
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
      </>
    ),
    reviews: "(735 reviews)",
    category: "skinny",
    prevPrice: "$140",
    newPrice: "150",
    gender: "male",
    color: "black",
    company: "Arrow",
    available: 5,
    purchased: 0,
  },
  {
    _id: "623853b2239582e48409ccc6",
    id: 5,
    star: (
      <>
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
      </>
    ),
    reviews: "(330 reviews)",
    category: "round-neck",
    prevPrice: "$140",
    newPrice: "100",
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bachelor",
    gender: "male",
    color: "white",
    company: "Van Huesen",
    available: 5,
    purchased: 0,
  },
  {
    _id: "623853b21fb149d2ee7b76c7",
    id: 6,
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Black",
    star: (
      <>
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
      </>
    ),
    reviews: "(221 reviews)",
    category: "round-neck",
    prevPrice: "$140",
    newPrice: "50",
    gender: "male",
    color: "black",
    company: "Allen Solly",
    available: 5,
    purchased: 0,
  },
  {
    _id: "623853b2614ad5aba311fdd1",
    id: 7,
    star: (
      <>
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
      </>
    ),
    reviews: "(134 reviews)",
    category: "crew",
    prevPrice: "$140",
    newPrice: "150",
    img: "https://i.pinimg.com/originals/9f/3d/13/9f3d13912d3cf78e4c87975bcebc1fee.jpg",
    title: "Just Chill",
    gender: "female",
    color: "gray",
    company: "Tommy Hilfiger",
    available: 5,
    purchased: 0,
  },
  {
    _id: "623853b2578e9e6ad1ae0zd5",
    id: 8,
    star: (
      <>
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
        <AiFillStar className="rating-star" />
      </>
    ),
    reviews: "(342 reviews)",
    category: "round-neck",
    prevPrice: "$140",
    newPrice: "100",
    img: plain,
    title: "Plain Black",
    gender: "male",
    color: "black",
    company: "Van Huesen",
    available: 5,
    purchased: 0,
  },
];
