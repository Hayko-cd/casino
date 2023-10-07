export const Balance = 100000;

export const EGT_PAYMENTS = [
  { egt_count: 40, active: true },
  { egt_count: 80, active: false },
  { egt_count: 120, active: false },
  { egt_count: 250, active: false },
  { egt_count: 500, active: false },
];

const SuperHot7 =
  "https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/7-512.png";
const superHotCherry =
  "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Cherry-512.png";
const superHotLemon =
  "https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/lemon-512.png";
const superWaterMelon =
  "https://cdn1.iconfinder.com/data/icons/casino-smooth-vol-2/256/WATERMELON-512.png";
const superHotGrape =
  "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Grapes-512.png";
const superHotOrange =
  "https://cdn3.iconfinder.com/data/icons/casino/256/Orange-512.png";
const superHotPlum =
  "https://cdn3.iconfinder.com/data/icons/casino/256/Plum-512.png";

export const LINES = [
  [
    {
      items: [SuperHot7, superHotCherry, superWaterMelon],
    },
    {
      items: [superHotGrape, SuperHot7, superHotLemon],
    },
    {
      items: [superHotLemon, superWaterMelon, SuperHot7],
    },
    {
      items: [superHotLemon, superHotLemon, superHotGrape],
    },
    {
      items: [SuperHot7, superHotGrape, superWaterMelon],
    },
    {
      win_price: 5,
    },
  ],

  [
    {
      items: [superHotCherry, superHotCherry, superHotCherry],
    },
    {
      items: [superHotGrape, superWaterMelon, superWaterMelon],
    },
    {
      items: [superHotLemon, superWaterMelon, SuperHot7],
    },
    {
      items: [superWaterMelon, superHotGrape, superHotGrape],
    },
    {
      items: [SuperHot7, superHotGrape, superWaterMelon],
    },
    {
      win_price: 0,
    },
  ],

  [
    {
      items: [SuperHot7, SuperHot7, SuperHot7],
    },
    {
      items: [SuperHot7, SuperHot7, SuperHot7],
    },
    {
      items: [SuperHot7, SuperHot7, SuperHot7],
    },
    {
      items: [SuperHot7, SuperHot7, SuperHot7],
    },
    {
      items: [SuperHot7, SuperHot7, SuperHot7],
    },
    {
      win_price: 100,
    },
  ],

  [
    {
      items: [superWaterMelon, superHotCherry, superHotCherry],
    },
    {
      items: [superWaterMelon, superHotCherry, superWaterMelon],
    },
    {
      items: [superWaterMelon, superHotGrape, SuperHot7],
    },
    {
      items: [superWaterMelon, superHotCherry, superHotGrape],
    },
    {
      items: [superWaterMelon, superHotGrape, superWaterMelon],
    },
    {
      win_price: 20,
    },
  ],

  [
    {
      items: [superHotPlum, superHotOrange, superHotOrange],
    },
    {
      items: [superHotGrape, superHotPlum, superWaterMelon],
    },
    {
      items: [superHotLemon, superWaterMelon, SuperHot7],
    },
    {
      items: [SuperHot7, superHotGrape, superHotOrange],
    },
    {
      items: [SuperHot7, superHotGrape, superWaterMelon],
    },
    {
      win_price: 0,
    },
  ],

  [
    {
      items: [superHotCherry, superHotCherry, superHotCherry],
    },
    {
      items: [superHotOrange, superHotOrange, superHotOrange],
    },
    {
      items: [superHotLemon, superHotLemon, superHotLemon],
    },
    {
      items: [superHotPlum, superHotPlum, superHotPlum],
    },
    {
      items: [superWaterMelon, superWaterMelon, superWaterMelon],
    },
    {
      win_price: 0,
    },
  ],

  [
    {
      items: [superHotPlum, superWaterMelon, superWaterMelon],
    },
    {
      items: [superHotCherry, superHotCherry, superHotGrape],
    },
    {
      items: [superHotCherry, superHotCherry, superHotCherry],
    },
    {
      items: [superHotPlum, superHotCherry, superHotCherry],
    },
    {
      items: [superHotPlum, superHotPlum, superHotPlum],
    },
    {
      win_price: 0,
    },
  ],

  [
    {
      items: [superHotLemon, superHotLemon, superHotLemon],
    },
    {
      items: [superWaterMelon, superWaterMelon, superHotLemon],
    },
    {
      items: [superHotPlum, superHotPlum, superHotPlum],
    },
    {
      items: [superHotCherry, superHotCherry, superHotGrape],
    },
    {
      items: [superHotGrape, superHotGrape, superHotLemon],
    },
    {
      win_price: 0,
    },
  ],
  [
    {
      items: [superHotLemon, superHotLemon, superHotGrape],
    },
    {
      items: [superWaterMelon, superHotLemon, superHotLemon],
    },
    {
      items: [SuperHot7, SuperHot7, superWaterMelon],
    },
    {
      items: [superHotCherry, superHotCherry, superHotGrape],
    },
    {
      items: [superHotGrape, superHotGrape, superHotLemon],
    },
    {
      win_price: 3,
    },
  ],
];
