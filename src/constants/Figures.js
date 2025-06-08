const figures = [
  {
    id: 1,
    name: "Fish",
    image: process.env.PUBLIC_URL + "/images/fish.jpg",
    model: '/models/fish.glb',
    download: '/download/fish.stl',
    author: "John Doe",
    date: "2013-06-07",
    scale: 10,
    description:
      "This hand-crafted porcelain fish features a glossy blue glaze and intricate scale detailing. It symbolizes abundance and good fortune in many cultures, making it a thoughtful decorative piece or gift. Ideal for modern and coastal interiors.",
  },
  {
    id: 2,
    name: "Bird",
    image: process.env.PUBLIC_URL + "/images/bird.jpg",
    model: '/models/bird.glb',
    download: '/download/bird.stl',
    author: "Jack Sparrow",
    date: "2016-02-25",
    scale: 20,
    description:
      "The porcelain bird sculpture is elegantly shaped with a high-gloss black finish. Its minimalist form captures the essence of flight and freedom, perfect for display on shelves, desks, or as part of a nature-themed collection.",
  },
  {
    id: 3,
    name: "Mask",
    image: process.env.PUBLIC_URL + "/images/mask.jpg",
    model: '/models/mask.glb',
    download: null,
    author: "Jack Black",
    date: "2009-04-29",
    scale: 10,
    description:
      "A striking porcelain mask with hand-painted red accents and a serene facial expression. Inspired by traditional theatrical art, this figure makes a bold statement and adds a dramatic touch to any space.",
  },
  {
    id: 4,
    name: "Woman",
    image: process.env.PUBLIC_URL + "/images/woman.jpg",
    model: '/models/woman.glb',
    download: '/download/woman.stl',
    author: "Will Smith",
    date: "2019-11-05",
    scale: 30,
    description:
      "This figure portrays a stylized seated woman, crafted from matte-finished porcelain. Its simplicity evokes calm and introspection, fitting well in spaces dedicated to relaxation or artistic appreciation.",
  },
];

export default figures;
