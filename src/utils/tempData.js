const imgLinks = [
  "https://images.unsplash.com/photo-1611696430200-68655e605723?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80",
  "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=917&q=80",
];

export const buttons = [
  { id: 0, text: "Core Members" },
  { id: 1, text: "Auxilliary Members" },
];

export const coreMembers = [
  { id: 0, name: "Presidential" },
  { id: 1, name: "Vice President" },
  { id: 2, name: "General Secretary" },
  { id: 3, name: "Financial Secretary" },
  { id: 4, name: "Public Relations" },
  { id: 5, name: "General Organizer" },
  { id: 6, name: "Coordinating Secretary" },
  { id: 7, name: "Secretary for Education" },
  { id: 8, name: "Press and Information" },
  { id: 9, name: "Computer Prefect" },
  { id: 10, name: "Utility/Water Prefect" },
];

export const members = {
  0: {
    id: 0,
    members: [
      {
        name: "Adjoah Frimpong",
        alias: "Adjoah The Leader",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Blue",
      },
      {
        name: "Kofi Baboni",
        alias: "Kofi The Warrior",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Magenta",
      },
      {
        name: "Thomas Sankara",
        alias: "Thomas The Champion",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Green",
      },
    ],
  },
  1: {
    id: 1,
    members: [
      {
        name: "Kojo Thompson",
        alias: "Kojo The Leader",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Cyan",
      },
      {
        name: "Yaw Buabeng",
        alias: "Yaw The Warrior",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Indigo",
      },
      {
        name: "Frederick Malan",
        alias: "Frederick The Champion",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Yellow",
      },
      {
        name: "David Goliath",
        alias: "David The Conquerer",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Gold",
      },
    ],
  },
  2: {
    id: 2,
    members: [
      {
        name: "Kojo Thompson",
        alias: "Kojo The Leader",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Cyan",
      },
      {
        name: "Yaw Buabeng",
        alias: "Yaw The Warrior",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Indigo",
      },
      {
        name: "Frederick Malan",
        alias: "Frederick The Champion",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Yellow",
      },
      {
        name: "David Goliath",
        alias: "David The Conquerer",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Gold",
      },
    ],
  },
  3: {
    id: 3,
    members: [
      {
        name: "Kojo Thompson",
        alias: "Kojo The Leader",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Cyan",
      },
      {
        name: "Yaw Buabeng",
        alias: "Yaw The Warrior",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Indigo",
      },
      {
        name: "Frederick Malan",
        alias: "Frederick The Champion",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Yellow",
      },
      {
        name: "David Goliath",
        alias: "David The Conquerer",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Gold",
      },
    ],
  },
  4: {
    id: 4,
    members: [
      {
        name: "Kojo Thompson",
        alias: "Kojo The Leader",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Cyan",
      },
      {
        name: "Yaw Buabeng",
        alias: "Yaw The Warrior",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Indigo",
      },
      {
        name: "Frederick Malan",
        alias: "Frederick The Champion",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Yellow",
      },
      {
        name: "David Goliath",
        alias: "David The Conquerer",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Gold",
      },
    ],
  },
  5: {
    id: 5,
    members: [
      {
        name: "Kojo Thompson",
        alias: "Kojo The Leader",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Cyan",
      },
      {
        name: "Yaw Buabeng",
        alias: "Yaw The Warrior",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Indigo",
      },
      {
        name: "Frederick Malan",
        alias: "Frederick The Champion",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Yellow",
      },
      {
        name: "David Goliath",
        alias: "David The Conquerer",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Gold",
      },
    ],
  },
  6: {
    id: 6,
    members: [
      {
        name: "Kojo Thompson",
        alias: "Kojo The Leader",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Cyan",
      },
      {
        name: "Yaw Buabeng",
        alias: "Yaw The Warrior",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Indigo",
      },
      {
        name: "Frederick Malan",
        alias: "Frederick The Champion",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Yellow",
      },
      {
        name: "David Goliath",
        alias: "David The Conquerer",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Gold",
      },
    ],
  },
  7: {
    id: 7,
    members: [
      {
        name: "Kojo Thompson",
        alias: "Kojo The Leader",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Cyan",
      },
      {
        name: "Yaw Buabeng",
        alias: "Yaw The Warrior",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Indigo",
      },
      {
        name: "Frederick Malan",
        alias: "Frederick The Champion",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Yellow",
      },
      {
        name: "David Goliath",
        alias: "David The Conquerer",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Gold",
      },
    ],
  },
  8: {
    id: 8,
    members: [
      {
        name: "Kojo Thompson",
        alias: "Kojo The Leader",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Cyan",
      },
      {
        name: "Yaw Buabeng",
        alias: "Yaw The Warrior",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Indigo",
      },
      {
        name: "Frederick Malan",
        alias: "Frederick The Champion",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Yellow",
      },
      {
        name: "David Goliath",
        alias: "David The Conquerer",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Gold",
      },
    ],
  },
  9: {
    id: 9,
    members: [
      {
        name: "Kojo Thompson",
        alias: "Kojo The Leader",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Cyan",
      },
      {
        name: "Yaw Buabeng",
        alias: "Yaw The Warrior",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Indigo",
      },
      {
        name: "Frederick Malan",
        alias: "Frederick The Champion",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Yellow",
      },
      {
        name: "David Goliath",
        alias: "David The Conquerer",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Gold",
      },
    ],
  },
  10: {
    id: 10,
    members: [
      {
        name: "Kojo Thompson",
        alias: "Kojo The Leader",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Cyan",
      },
      {
        name: "Yaw Buabeng",
        alias: "Yaw The Warrior",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Indigo",
      },
      {
        name: "Frederick Malan",
        alias: "Frederick The Champion",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Yellow",
      },
      {
        name: "David Goliath",
        alias: "David The Conquerer",
        pictureURL: imgLinks[Math.floor(Math.random() * imgLinks.length)],
        team: "Gold",
      },
    ],
  },
};
