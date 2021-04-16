const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://s1.meble.pl/gfx/_zdjecia_wspolne/sklep_oferta/2/743/2743454/bzielona_kanapa_w_skandynawskim_stylu_pik___index__4176921222.jpg',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://lectus24.pl/96216-large_default/biurko-z-szufladami-raflo-biale-mat.jpg',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://www.meblezagrosze.pl/upload/l650/szafka-rtv-sewt142-m115-colonial-oak-black-colonial-oak-sewill-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground: 'https://www.mirjan24.pl/83016/komoda-nowoczesna-empire.jpg',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://meblini.pl/userdata/public/gfx/23421/Stolik-kawowy-lawa-2w1-okragly-industrialny-w-stylu-loft-Dab-Craft-Zloty.jpg',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://www.strefasypialni.pl/userdata/public/gfx/5848/Lozko-Texas_90.jpg',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://www.seart.pl/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/i/witryna-industrial-2-seart-5.jpg',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground: 'https://birdmeble.pl/userdata/public/gfx/4474.jpg',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://a.allegroimg.com/original/038030/4e128be0469db48ff02ea169cb2a/PIKO-LAWA-STOLIK-KAWOWY-LOFT-RETRO-INDUSTRIALNY',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://meblowy.salon/userdata/public/gfx/3152/Rozkladana-sofa-Corner-z-podnozkiem-niebieska.jpg',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://3.allegroimg.com/s1024/0c7717/0cb014b14a218bcae20a9cad26d3',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://www.ikea-club.org/cache/zoo_images/d/d8b2d6766a1f0a7c43be4cb92958dd32.jpg',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://umeblowana.com/userdata/public/gfx/5379/Komplet-mebli-do-lazienki-w-stylu-loft-80-cm.jpg',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://www.lustrodlaciebie.pl/galerie/l/lustro-do-makijazu-wizazu-holl_2032.jpg',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://bromarkt.pl/pol_pl_Duza-szafa-na-ubrania-180-cm-Dab-artisan-czarny-ISMENA-932_3.jpg',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://a.allegroimg.com/original/11fe09/a41ca80f44a1b06d0467ed8d7458/Szafa-na-Ubrania-Garderoba-Skladana-XXL-Tekstylna',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://www.resmar.pl/pol_pl_Zestaw-mebli-kuchennych-290x215-cm-Modena-24536_1.jpg',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://antyki24.pl/environment/cache/images/500_500_productGfx_e1be05b730a946274d13299ecc6230bc.jpg',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://i.dobrzemieszkaj.pl/i/72/13/41/r3/1920/meble-do-salonu-10-swietnych-kolekcji-na-kazda-kieszen.jpg',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://mebletwojemiejsce.pl/fotosD/13_meble_z_litego_drewna_na_wymiar_warszawa.jpg',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://meblini.pl/userdata/public/gfx/20450/krzeslo-TUGO-2-do-jadalni-kuchni.jpg',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://www.zyrandole24.pl/images/allegro_foto/zdjecia/K213/IMG_2244-30-01-19-01-10.jpeg',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground: 'https://lissy.pl/wp-content/uploads/Witryna-150-Lugo.jpg',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photoBackground:
        'https://lissy.pl/wp-content/uploads/szafka-nocna-Lugo-aranz.jpg',
    },
  ],
  cart: {
    products: [],
  },
};

export default initialState;
