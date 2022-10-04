export const rows = [
  {
    id: 1,
    title: "Next.js is the future of React",
    time: "2h ago",
    statusPublished: true,
  },
  {
    id: 2,
    title: "Next.js is the future of React",
    time: "2h ago",
    statusPublished: true,
  },
  {
    id: 3,
    title: "Next.js is the future of randomtext",
    time: "2h ago",
    statusPublished: true,
  },
  {
    id: 4,
    title: "Next.js is the future of React",
    time: "2h ago",
    statusPublished: false,
  },
  {
    id: 5,
    title: "Next.js is the future of React",
    time: "2h ago",
    statusPublished: true,
  },
  {
    id: 6,
    title: "Next.js is the future of React",
    time: "2h ago",
    statusPublished: true,
  },
  {
    id: 7,
    title: "Next.js is the future of Any.js",
    time: "3hr ago",
    statusPublished: false,
  },
  {
    id: 8,
    title: "Next.js is the future of Any.js",
    time: "3hr ago",
    statusPublished: false,
  },
  {
    id: 9,
    title: "Next.js is the future of Any.js",
    time: "3hr ago",
    statusPublished: false,
  },
  {
    id: 10,
    title: "Next.js is the future of Any.js",
    time: "3hr ago",
    statusPublished: true,
  },
  {
    id: 11,
    title: "Next.js is the future of Any.js",
    time: "3hr ago",
    statusPublished: true,
  },
  {
    id: 12,
    title: "Next.js is the future of React",
    time: "2h ago",
    statusPublished: true,
  },
  {
    id: 13,
    title: "Next.js is the future of React",
    time: "2h ago",
    statusPublished: false,
  },
  {
    id: 14,
    title: "Next.js is the future of React",
    time: "2h ago",
    statusPublished: false,
  },
  {
    id: 15,
    title: "Next.js is the future of React",
    time: "2h ago",
    statusPublished: false,
  },
  {
    id: 16,
    title: "Next.js is the future of React",
    time: "2h ago",
    statusPublished: false,
  },
  {
    id: 17,
    title: "Next.js is the nearest future of React",
    time: "2h ago",
    statusPublished: false,
  },
  {
    id: 18,
    title: "Next.js is the future of React",
    time: "2h ago",
    statusPublished: false,
  },
  {
    id: 19,
    title: "Any.js is the future of React",
    time: "2h ago",
    statusPublished: false,
  },
  {
    id: 20,
    title: "Any.js is the future of React",
    time: "2h ago",
    statusPublished: true,
  },

];

if (typeof window !== "undefined") {
  let rowsSerialized = JSON.stringify(rows);
  localStorage.setItem("data", rowsSerialized);
}
