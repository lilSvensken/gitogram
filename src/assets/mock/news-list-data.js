import img1 from "@/assets/mock/img/avatar-1.png";
import img2 from "@/assets/mock/img/avatar-2.png";
import img3 from "@/assets/mock/img/avatar-3.png";

export const newsListData = [
  {
    user: {
      name: "joshua_l",
      img: img2,
      link: "",
    },
    articleName: "Vue.js",
    followersNum: 156000,
    branchNum: 4,
    articleText:
      "<b>JavaScript</b> framework for building interactive web applications ⚡",
    issuesList: [
      {
        user: {
          name: "joshua_l",
          img: img1,
          link: "",
        },
        issues:
          "Enable performance measuring in production, at the user's request",
      },
      {
        user: {
          name: "Camille",
          img: img3,
          link: "",
        },
        issues: "It's Impossible to Rename an Inherited Slot",
      },
    ],
    date: "2022-05-15T03:00:00Z",
  },
  {
    user: {
      name: "Camille",
      img: img3,
      link: "",
    },
    articleName: "React.js",
    followersNum: 156000,
    branchNum: 4,
    articleText:
      "<b>Open source</b> JavaScript library used for designing user interfaces",
    issuesList: [
      {
        user: {
          name: "joshua_l",
          img: img1,
          link: "",
        },
        issues:
          "Enable performance measuring in production, at the user's request",
      },
    ],
    date: "2022-05-15T03:00:00Z",
  },
  {
    user: {
      name: "joshua_l",
      img: img2,
      link: "",
    },
    articleName: "Vue.js",
    followersNum: 156000,
    branchNum: 4,
    articleText:
      "<b>JavaScript</b> framework for building interactive web applications ⚡",
    issuesList: [
      {
        user: {
          name: "joshua_l",
          img: img1,
          link: "",
        },
        issues:
          "Enable performance measuring in production, at the user's request",
      },
    ],
    date: "2022-05-15T03:00:00Z",
  },
];
