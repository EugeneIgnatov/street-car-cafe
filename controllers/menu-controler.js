const HttpError = require('../models/http-error');

const MENU_SECTIONS = [
  {
    section_name: 'beignet & coffee',
    id: 1,
    items: [
      {
        id: 1.1,
        name: 'Beignet',
        price: '$10',
        descreption: '3 egg any style with choice (ham, bacon or sausage)',
      },
      { id: 1.2, name: 'Latte (Iced or Hot)', price: '$ 5', descreption: '' },
      { id: 1.3, name: 'Espresso', price: '$ 4', descreption: '' },
      { id: 1.4, name: 'Americano', price: '$ 4', descreption: '' },
      { id: 1.5, name: 'Fresh Roasted Coffee', price: '$ 3', descreption: '' },
    ],
  },
  {
    section_name: 'appetizers',

    id: 2,
    items: [
      {
        id: 2.1,
        name: 'Cup of Gumbo',
        price: '$ 6',
        descreption: 'Served NOLA style with potato salad',
      },
      {
        id: 2.2,
        name: 'Cup of Red Beans & Rice',
        price: '$ 7',
        descreption: 'Made with beef sausage',
      },
      {
        id: 2.3,
        name: 'Blackened Alligator Bites',
        price: '$ 10',
        descreption: 'Served with remoulade dipping sauce',
      },
      {
        id: 2.4,
        name: 'Crab Cake',
        price: '$ 10',
        descreption: 'Topped with remoulade sauce',
      },
    ],
  },
  {
    section_name: 'lunch & diner',

    id: 3,
    items: [
      { id: 3.1, name: 'Fried Shrimp Po-boy', price: '$ 14', descreption: '' },
      {
        id: 3.2,
        name: 'Crab Cake Burger & Fries',
        price: '$ 14',
        descreption:
          'Fully dressed with mayo, lettuce, tomato, onion and pickles. Add cheese: $1.00 Add bacon: $2.50',
      },
      {
        id: 3.3,
        name: 'Cajun Penne Pasta',
        price: '$ 15',
        descreption:
          'Creamy penne pasta made with beef sausage & diced chicken served with bread',
      },
    ],
  },
  {
    section_name: 'new orleans',

    id: 4,
    items: [
      {
        id: 4.1,
        name: 'Bowl of Gumbo',
        price: '$ 12',
        descreption: 'Served with biscuit. NOLA style potato salad',
      },
    ],
  },
  {
    section_name: 'drink specials',
    id: 5,
    items: [
      { id: 5.1, name: 'Espresso', price: '$ 4', descreption: '' },
      { id: 5.2, name: 'Fresh Roasted Coffee', price: '$ 3', descreption: '' },
    ],
  },
];

const getMenu = (req, res, next) => {
  res.json({ MENU_SECTIONS });
};

const getMenuSection = (req, res, next) => {
  const sectionId = req.params.sectionId;
  const menuSection = MENU_SECTIONS.find((section) => {
    return section.id.toString() === sectionId.toString();
  });
  if (!menuSection) {
    throw new HttpError('Could not find menu section', 404);
  }

  res.json({ menuSection });
};

const getMenuItem = (req, res, next) => {
  const sectionId = req.params.sectionId;
  const itemId = req.params.itemId;
  const menuSection = MENU_SECTIONS.find((section) => {
    return section.id.toString() === sectionId.toString();
  });

  const menuItem = menuSection.items.find((item) => {
    console.log(item);
    return item.id.toString() === itemId.toString();
  });

  if (!menuItem) {
    throw new HttpError('Could not find menu Item', 404);
  }
  res.json({ menuItem });
};

exports.getMenu = getMenu;
exports.getMenuSection = getMenuSection;
exports.getMenuItem = getMenuItem;
