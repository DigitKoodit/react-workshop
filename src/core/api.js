const fakeData = [
  {
    tutors: "Piia ja Santeri-Korianteri",
    students: [
      {
        name: "Sakari Villapaita",
        chronicles: 5
      },
      {
        name: "Sissi Juusto",
        chronicles: 12
      }
    ]
  },
  {
    tutors: "Matti M. ja Matti VH.",
    students: [
      {
        name: "Hilda Hilpari",
        chronicles: 7
      },
      {
        name: "Tiina Tikari",
        chronicles: 9
      }
    ]
  }
];

export default function() {
  return new Promise((resolve, reject) => {
    resolve();
  }).then(() => fakeData);
}
