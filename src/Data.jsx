const data = [
  {
    bookInfo: {
      date: "2019-12-07",
      pages: 514,
      title: "The Scrum Master Guidebook",
      authors: ["CHANDAN LAL PATARY"],
      thumbnail:
        "http://books.google.com/books/content?id=nsnBDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      categories: ["Self-Help"],
    },
    review: {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint omnis at, itaque rerum animi, possimus tempore incidunt fugiat minima, ratione voluptatum repellat. Atque expedita aperiam alias saepe culpa dignissimos molestias cumque iure, maxime repellat quas. Ad tempora nemo odio, sunt veniam dolorum aperiam blanditiis provident cumque, earum asperiores in corrupti eos voluptatem dolor eveniet atque itaque ratione nihil enim facilis dolores impedit similique! Ea provident aliquid iste maiores nisi dolor, dolorem, quam vero magnam in ipsam, dolorum iure minima. A modi eius quibusdam architecto alias deleniti necessitatibus veritatis ratione! Consequatur ratione a distinctio repellendus. Consectetur alias est ex exercitationem.",
    },
    rating: 4,
  },
  {
    bookInfo: {
      title: "Pokemon Ultimate Handbook",
      authors: ["Cris Silvestri"],
      categories: ["Juvenile Fiction"],
      pages: 300,
      date: "2008",
      thumbnail:
        "http://books.google.com/books/content?id=KSIH0ltKUVkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    },
    review: {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint omnis at, itaque rerum animi, possimus tempore incidunt fugiat minima, ratione voluptatum repellat. Atque expedita aperiam alias saepe culpa dignissimos molestias cumque iure, maxime repellat quas. Ad tempora nemo odio, sunt veniam dolorum aperiam blanditiis provident cumque, earum asperiores in corrupti eos voluptatem dolor eveniet atque itaque ratione nihil enim facilis dolores impedit similique! Ea provident aliquid iste maiores nisi dolor, dolorem, quam vero magnam in ipsam, dolorum iure minima. A modi eius quibusdam architecto alias deleniti necessitatibus veritatis ratione! Consequatur ratione a distinctio repellendus. Consectetur alias est ex exercitationem.",
    },
    rating: 5,
  },
  {
    bookInfo: {
      date: "2014-10-03",
      pages: 300,
      title: "Think and Grow Rich",
      authors: ["Napoleon Hill", "Wyatt North"],
      thumbnail:
        "http://books.google.com/books/content?id=03CuBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      categories: ["Business & Economics"],
    },
    review: {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint omnis at, itaque rerum animi, possimus tempore incidunt fugiat minima, ratione voluptatum repellat. Atque expedita aperiam alias saepe culpa dignissimos molestias cumque iure, maxime repellat quas. Ad tempora nemo odio, sunt veniam dolorum aperiam blanditiis provident cumque, earum asperiores in corrupti eos voluptatem dolor eveniet atque itaque ratione nihil enim facilis dolores impedit similique! Ea provident aliquid iste maiores nisi dolor, dolorem, quam vero magnam in ipsam, dolorum iure minima. A modi eius quibusdam architecto alias deleniti necessitatibus veritatis ratione! Consequatur ratione a distinctio repellendus. Consectetur alias est ex exercitationem.",
    },
    rating: 5,
  },
  {
    bookInfo: {
      title: "The Richest Man in Babylon (English)",
      authors: ["George S Clason"],
      categories: ["Self-Help"],
      pages: 144,
      thumbnail:
        "http://books.google.com/books/content?id=saUEEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    },
    review: {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint omnis at, itaque rerum animi, possimus tempore incidunt fugiat minima, ratione voluptatum repellat. Atque expedita aperiam alias saepe culpa dignissimos molestias cumque iure, maxime repellat quas. Ad tempora nemo odio, sunt veniam dolorum aperiam blanditiis provident cumque, earum asperiores in corrupti eos voluptatem dolor eveniet atque itaque ratione nihil enim facilis dolores impedit similique! Ea provident aliquid iste maiores nisi dolor, dolorem, quam vero magnam in ipsam, dolorum iure minima. A modi eius quibusdam architecto alias deleniti necessitatibus veritatis ratione! Consequatur ratione a distinctio repellendus. Consectetur alias est ex exercitationem.",
    },
    rating: 3,
  },
  {
    bookInfo: {
      date: "2017-04-04",
      pages: 144,
      title: "Make Your Bed",
      authors: ["Admiral William H. McRaven"],
      thumbnail:
        "http://books.google.com/books/content?id=QOPkDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      categories: ["Self-Help"],
    },
    review: {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint omnis at, itaque rerum animi, possimus tempore incidunt fugiat minima, ratione voluptatum repellat. Atque expedita aperiam alias saepe culpa dignissimos molestias cumque iure, maxime repellat quas. Ad tempora nemo odio, sunt veniam dolorum aperiam blanditiis provident cumque, earum asperiores in corrupti eos voluptatem dolor eveniet atque itaque ratione nihil enim facilis dolores impedit similique! Ea provident aliquid iste maiores nisi dolor, dolorem, quam vero magnam in ipsam, dolorum iure minima. A modi eius quibusdam architecto alias deleniti necessitatibus veritatis ratione! Consequatur ratione a distinctio repellendus. Consectetur alias est ex exercitationem.",
    },
    rating: 5,
  },
  {
    bookInfo: {
      pages: 272,
      title: "Positive Poker",
      authors: ["Dr. Patricia Cardner with Jonathan Little"],
      thumbnail:
        "http://books.google.com/books/content?id=s9pCAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      categories: ["Games"],
    },
    review: {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint omnis at, itaque rerum animi, possimus tempore incidunt fugiat minima, ratione voluptatum repellat. Atque expedita aperiam alias saepe culpa dignissimos molestias cumque iure, maxime repellat quas. Ad tempora nemo odio, sunt veniam dolorum aperiam blanditiis provident cumque, earum asperiores in corrupti eos voluptatem dolor eveniet atque itaque ratione nihil enim facilis dolores impedit similique! Ea provident aliquid iste maiores nisi dolor, dolorem, quam vero magnam in ipsam, dolorum iure minima. A modi eius quibusdam architecto alias deleniti necessitatibus veritatis ratione! Consequatur ratione a distinctio repellendus. Consectetur alias est ex exercitationem.",
    },
    rating: 4,
  },
  {
    bookInfo: {
      date: "2015-10-06",
      pages: 256,
      title: "Harry Potter and the Sorcerer's Stone",
      authors: ["J. K. Rowling"],
      thumbnail:
        "http://books.google.com/books/content?id=gqX7rQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      categories: ["Juvenile Fiction"],
    },
    review: {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint omnis at, itaque rerum animi, possimus tempore incidunt fugiat minima, ratione voluptatum repellat. Atque expedita aperiam alias saepe culpa dignissimos molestias cumque iure, maxime repellat quas. Ad tempora nemo odio, sunt veniam dolorum aperiam blanditiis provident cumque, earum asperiores in corrupti eos voluptatem dolor eveniet atque itaque ratione nihil enim facilis dolores impedit similique! Ea provident aliquid iste maiores nisi dolor, dolorem, quam vero magnam in ipsam, dolorum iure minima. A modi eius quibusdam architecto alias deleniti necessitatibus veritatis ratione! Consequatur ratione a distinctio repellendus. Consectetur alias est ex exercitationem.",
    },
    rating: 5,
  },
  {
    bookInfo: {
      date: "2006-08-17",
      pages: 1032,
      title: "JavaScript: The Definitive Guide",
      authors: ["David Flanagan"],
      thumbnail:
        "http://books.google.com/books/content?id=2weL0iAfrEMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      categories: ["Computers"],
    },
    review: {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint omnis at, itaque rerum animi, possimus tempore incidunt fugiat minima, ratione voluptatum repellat. Atque expedita aperiam alias saepe culpa dignissimos molestias cumque iure, maxime repellat quas. Ad tempora nemo odio, sunt veniam dolorum aperiam blanditiis provident cumque, earum asperiores in corrupti eos voluptatem dolor eveniet atque itaque ratione nihil enim facilis dolores impedit similique! Ea provident aliquid iste maiores nisi dolor, dolorem, quam vero magnam in ipsam, dolorum iure minima. A modi eius quibusdam architecto alias deleniti necessitatibus veritatis ratione! Consequatur ratione a distinctio repellendus. Consectetur alias est ex exercitationem.",
    },
    rating: 4,
  },

  {
    bookInfo: {
      date: "2017-11-21",
      pages: 320,
      title: "Extreme Ownership",
      authors: ["Jocko Willink", "Leif Babin"],
      thumbnail:
        "http://books.google.com/books/content?id=tpspDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      categories: ["Business & Economics"],
    },
    review: {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint omnis at, itaque rerum animi, possimus tempore incidunt fugiat minima, ratione voluptatum repellat. Atque expedita aperiam alias saepe culpa dignissimos molestias cumque iure, maxime repellat quas. Ad tempora nemo odio, sunt veniam dolorum aperiam blanditiis provident cumque, earum asperiores in corrupti eos voluptatem dolor eveniet atque itaque ratione nihil enim facilis dolores impedit similique! Ea provident aliquid iste maiores nisi dolor, dolorem, quam vero magnam in ipsam, dolorum iure minima. A modi eius quibusdam architecto alias deleniti necessitatibus veritatis ratione! Consequatur ratione a distinctio repellendus. Consectetur alias est ex exercitationem.",
    },
    rating: 4,
  },

  {
    bookInfo: {
      date: "2017-04-27",
      pages: 350,
      title: "Learning React",
      authors: ["Alex Banks", "Eve Porcello"],
      thumbnail:
        "http://books.google.com/books/content?id=pMTADgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      categories: ["Computers"],
    },
    review: {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint omnis at, itaque rerum animi, possimus tempore incidunt fugiat minima, ratione voluptatum repellat. Atque expedita aperiam alias saepe culpa dignissimos molestias cumque iure, maxime repellat quas. Ad tempora nemo odio, sunt veniam dolorum aperiam blanditiis provident cumque, earum asperiores in corrupti eos voluptatem dolor eveniet atque itaque ratione nihil enim facilis dolores impedit similique! Ea provident aliquid iste maiores nisi dolor, dolorem, quam vero magnam in ipsam, dolorum iure minima. A modi eius quibusdam architecto alias deleniti necessitatibus veritatis ratione! Consequatur ratione a distinctio repellendus. Consectetur alias est ex exercitationem.",
    },
    rating: 3,
  },
  {
    bookInfo: {
      date: "2010-10-06",
      pages: 256,
      title: "The Power of Now",
      authors: ["Eckhart Tolle"],
      thumbnail:
        "http://books.google.com/books/content?id=sQYqRCIhFAMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      categories: ["Body, Mind & Spirit"],
    },
    review: {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint omnis at, itaque rerum animi, possimus tempore incidunt fugiat minima, ratione voluptatum repellat. Atque expedita aperiam alias saepe culpa dignissimos molestias cumque iure, maxime repellat quas. Ad tempora nemo odio, sunt veniam dolorum aperiam blanditiis provident cumque, earum asperiores in corrupti eos voluptatem dolor eveniet atque itaque ratione nihil enim facilis dolores impedit similique! Ea provident aliquid iste maiores nisi dolor, dolorem, quam vero magnam in ipsam, dolorum iure minima. A modi eius quibusdam architecto alias deleniti necessitatibus veritatis ratione! Consequatur ratione a distinctio repellendus. Consectetur alias est ex exercitationem.",
    },
    rating: 5,
  },
  {
    bookInfo: {
      date: "2011-09-13",
      pages: 336,
      title: "The Lean Startup",
      authors: ["Eric Ries"],
      thumbnail:
        "http://books.google.com/books/content?id=tvfyz-4JILwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      categories: ["Business & Economics"],
    },
    review: {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint omnis at, itaque rerum animi, possimus tempore incidunt fugiat minima, ratione voluptatum repellat. Atque expedita aperiam alias saepe culpa dignissimos molestias cumque iure, maxime repellat quas. Ad tempora nemo odio, sunt veniam dolorum aperiam blanditiis provident cumque, earum asperiores in corrupti eos voluptatem dolor eveniet atque itaque ratione nihil enim facilis dolores impedit similique! Ea provident aliquid iste maiores nisi dolor, dolorem, quam vero magnam in ipsam, dolorum iure minima. A modi eius quibusdam architecto alias deleniti necessitatibus veritatis ratione! Consequatur ratione a distinctio repellendus. Consectetur alias est ex exercitationem.",
    },
    rating: 5,
  },
];
