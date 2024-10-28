export interface IshopsData {
  id: string;
  logo?: string;
  image: string;
  owner_photo?: string;
  shop_name: string;
  ownerName: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  description: string;
}

export const shopsData: IshopsData[] = [
  {
    id: "s1",
    // logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dTZN7KmUKqsI2HHADhW5XSXzQXA_jedmZg&s",
    image: "https://c8.alamy.com/comp/ED0HHW/kerala-india-shops-in-mundakayam-ED0HHW.jpg",
    owner_photo: "https://c8.alamy.com/comp/ED0HHW/kerala-india-shops-in-mundakayam-ED0HHW.jpg",
    shop_name: "Tech Haven",
    ownerName: "John Doe",
    address: {
      street: "123 Tech Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94107",
      country: "USA",
    },
    contact: {
      email: "contact@techhaven.com",
      phone: "+1-123-456-7890",
    },
    description: "A one-stop shop for the latest in tech gadgets and electronics.",
  },
  {
    id: "s2",
    logo: "https://img.freepik.com/free-vector/gradient-instagram-shop-logo-template_23-2149704603.jpg",
    image: "https://www.shutterstock.com/image-photo/young-woman-happily-shops-fresh-260nw-2476499265.jpg",
    owner_photo: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    shop_name: "Fashion Hub",
    ownerName: "Jane Smith",
    address: {
      street: "456 Fashion Ave",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA",
    },
    contact: {
      email: "hello@fashionhub.com",
      phone: "+1-987-654-3210",
    },
    description: "Trendy and stylish clothing for all ages.",
  },
  {
    id: "s3",
    // logo: "https://i.pinimg.com/originals/c1/92/9d/c1929d3492c2f64ab65b43808c072043.jpg",
    image: "https://imgmedia.lbb.in/media/2021/03/604af35bf9e6694e5d32d061_1615524699384.jpg",
    owner_photo: "https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=",
    shop_name: "Home & Decor",
    ownerName: "Alice Johnson",
    address: {
      street: "789 Maple Lane",
      city: "Austin",
      state: "TX",
      zipCode: "73301",
      country: "USA",
    },
    contact: {
      email: "support@homedecor.com",
      phone: "+1-512-555-1212",
    },
    description: "Beautiful home furnishings and decor items.",
  },
  {
    id: "s4",
    logo: "https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-cart-icon-designs-134743663.jpg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoV3kS2Wg6n5b_-XJ3OXa6dZdSnpRTPX6Mdw&s",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s",
    shop_name: "Book Nook",
    ownerName: "Mark Lewis",
    address: {
      street: "321 Book Street",
      city: "Seattle",
      state: "WA",
      zipCode: "98101",
      country: "USA",
    },
    contact: {
      email: "info@booknook.com",
      phone: "+1-206-555-9876",
    },
    description: "Your neighborhood bookstore for all genres.",
  },
  {
    id: "s5",
    logo: "https://img.freepik.com/premium-vector/best-shop-logo-design_501861-419.jpg",
    image: "https://cdn.shopify.com/s/files/1/1246/6441/files/Sephora_Shop_in_shop_480x480.jpg?v=1648491761",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s",
    shop_name: "Gourmet Market",
    ownerName: "Emma Thompson",
    address: {
      street: "88 Culinary Road",
      city: "Portland",
      state: "OR",
      zipCode: "97205",
      country: "USA",
    },
    contact: {
      email: "orders@gourmetmarket.com",
      phone: "+1-503-555-7890",
    },
    description: "Organic and gourmet food items for healthy living.",
  },
  {
    id: "s6",
    // logo: "https://png.pngtree.com/png-vector/20190322/ourmid/pngtree-shop-logo-vector-template-design-illustration-png-image_860078.jpg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7tIped7JQzX1IDuNk2sNmCBDzN2Rhg97XQ&s",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHt2GDofV5sNOaTrLarqU3XmMpTNXxaw9dg&s",
    shop_name: "Pet Paradise",
    ownerName: "Daniel Harris",
    address: {
      street: "654 Pet Lane",
      city: "Denver",
      state: "CO",
      zipCode: "80202",
      country: "USA",
    },
    contact: {
      email: "hello@petparadise.com",
      phone: "+1-303-555-1234",
    },
    description: "All the supplies and care products for your pets.",
  },
  {
    id: "s7",
    logo: "https://img.freepik.com/premium-vector/colorful-bag-that-says-shopping-here-here_1288538-6301.jpg?semt=ais_hybrid",
    image:
      "https://i.guim.co.uk/img/media/bb5e732bdd0ae3bafca2ca7182232a562a824dfa/0_331_6541_3924/master/6541.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2d7e945e63c81df2a9e3fdbf154c7958",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPjv1lHEIpzgDk_e3Sm-e4EVOzggYdb5aHA&s",
    shop_name: "Fitness Zone",
    ownerName: "Laura Carter",
    address: {
      street: "111 Fitness Street",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      country: "USA",
    },
    contact: {
      email: "info@fitnesszone.com",
      phone: "+1-312-555-5678",
    },
    description: "Everything you need for fitness and sports activities.",
  },
  {
    id: "s8",
    logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/store-logo-design%2C-online-shopping-store-logo-template-b96b23a1a56e685fe30519cbf20883bc_screen.jpg?ts=1662903800",
    image: "https://c8.alamy.com/comp/CF4H1C/the-exterior-of-a-local-convenience-shop-british-food-wine-store-in-CF4H1C.jpg",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjw9i6PO7C3BluMusZzcQs2J7BWkF0pLSrRw&s",
    shop_name: "Kids World",
    ownerName: "Nancy Lee",
    address: {
      street: "234 Fun Street",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      country: "USA",
    },
    contact: {
      email: "support@kidsworld.com",
      phone: "+1-213-555-4321",
    },
    description: "A wide range of toys and products for children of all ages.",
  },
  {
    id: "s9",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jCLFM94W5u8LLAqAlyEPEDqHONQMIEYyhA&s",
    image: "https://c8.alamy.com/comp/H3D3H0/small-indian-shop-sells-merchandise-per-single-unit-H3D3H0.jpg",
    owner_photo: "hhttps://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
    shop_name: "Outdoor Life",
    ownerName: "Chris Green",
    address: {
      street: "555 Adventure Road",
      city: "Phoenix",
      state: "AZ",
      zipCode: "85001",
      country: "USA",
    },
    contact: {
      email: "contact@outdoorlife.com",
      phone: "+1-602-555-6789",
    },
    description: "Gear and apparel for outdoor enthusiasts and adventurers.",
  },
  {
    id: "s10",
    logo: "https://thumbs.dreamstime.com/b/letter-z-online-shopping-shopping-application-company-branding-vector-logo-icon-illustration-letter-z-online-shopping-shopping-324351567.jpg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBq_uwsHdVmzZwmr-BEk3IQAwwarU2Qlchqg&s",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hb5xzFZJCTW4cMqmPwsgfw-gILUV7QevvQ&s",
    shop_name: "Beauty Bliss",
    ownerName: "Sophia Martin",
    address: {
      street: "77 Beauty Blvd",
      city: "Miami",
      state: "FL",
      zipCode: "33101",
      country: "USA",
    },
    contact: {
      email: "info@beautybliss.com",
      phone: "+1-305-555-0987",
    },
    description: "Top beauty products and cosmetics from around the world.",
  },
  {
    id: "s11",
    // logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dTZN7KmUKqsI2HHADhW5XSXzQXA_jedmZg&s",
    image: "https://c8.alamy.com/comp/ED0HHW/kerala-india-shops-in-mundakayam-ED0HHW.jpg",
    owner_photo: "https://c8.alamy.com/comp/ED0HHW/kerala-india-shops-in-mundakayam-ED0HHW.jpg",
    shop_name: "Tech Haven",
    ownerName: "John Doe",
    address: {
      street: "123 Tech Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94107",
      country: "USA",
    },
    contact: {
      email: "contact@techhaven.com",
      phone: "+1-123-456-7890",
    },
    description: "A one-stop shop for the latest in tech gadgets and electronics.",
  },
  {
    id: "s12",
    logo: "https://img.freepik.com/free-vector/gradient-instagram-shop-logo-template_23-2149704603.jpg",
    image: "https://www.shutterstock.com/image-photo/young-woman-happily-shops-fresh-260nw-2476499265.jpg",
    owner_photo: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    shop_name: "Fashion Hub",
    ownerName: "Jane Smith",
    address: {
      street: "456 Fashion Ave",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA",
    },
    contact: {
      email: "hello@fashionhub.com",
      phone: "+1-987-654-3210",
    },
    description: "Trendy and stylish clothing for all ages.",
  },
  {
    id: "s13",
    // logo: "https://i.pinimg.com/originals/c1/92/9d/c1929d3492c2f64ab65b43808c072043.jpg",
    image: "https://imgmedia.lbb.in/media/2021/03/604af35bf9e6694e5d32d061_1615524699384.jpg",
    owner_photo: "https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=",
    shop_name: "Home & Decor",
    ownerName: "Alice Johnson",
    address: {
      street: "789 Maple Lane",
      city: "Austin",
      state: "TX",
      zipCode: "73301",
      country: "USA",
    },
    contact: {
      email: "support@homedecor.com",
      phone: "+1-512-555-1212",
    },
    description: "Beautiful home furnishings and decor items.",
  },
  {
    id: "s14",
    logo: "https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-cart-icon-designs-134743663.jpg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoV3kS2Wg6n5b_-XJ3OXa6dZdSnpRTPX6Mdw&s",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s",
    shop_name: "Book Nook",
    ownerName: "Mark Lewis",
    address: {
      street: "321 Book Street",
      city: "Seattle",
      state: "WA",
      zipCode: "98101",
      country: "USA",
    },
    contact: {
      email: "info@booknook.com",
      phone: "+1-206-555-9876",
    },
    description: "Your neighborhood bookstore for all genres.",
  },
  {
    id: "s15",
    logo: "https://img.freepik.com/premium-vector/best-shop-logo-design_501861-419.jpg",
    image: "https://cdn.shopify.com/s/files/1/1246/6441/files/Sephora_Shop_in_shop_480x480.jpg?v=1648491761",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s",
    shop_name: "Gourmet Market",
    ownerName: "Emma Thompson",
    address: {
      street: "88 Culinary Road",
      city: "Portland",
      state: "OR",
      zipCode: "97205",
      country: "USA",
    },
    contact: {
      email: "orders@gourmetmarket.com",
      phone: "+1-503-555-7890",
    },
    description: "Organic and gourmet food items for healthy living.",
  },
  {
    id: "s16",
    // logo: "https://png.pngtree.com/png-vector/20190322/ourmid/pngtree-shop-logo-vector-template-design-illustration-png-image_860078.jpg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7tIped7JQzX1IDuNk2sNmCBDzN2Rhg97XQ&s",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHt2GDofV5sNOaTrLarqU3XmMpTNXxaw9dg&s",
    shop_name: "Pet Paradise",
    ownerName: "Daniel Harris",
    address: {
      street: "654 Pet Lane",
      city: "Denver",
      state: "CO",
      zipCode: "80202",
      country: "USA",
    },
    contact: {
      email: "hello@petparadise.com",
      phone: "+1-303-555-1234",
    },
    description: "All the supplies and care products for your pets.",
  },
  {
    id: "s17",
    logo: "https://img.freepik.com/premium-vector/colorful-bag-that-says-shopping-here-here_1288538-6301.jpg?semt=ais_hybrid",
    image:
      "https://i.guim.co.uk/img/media/bb5e732bdd0ae3bafca2ca7182232a562a824dfa/0_331_6541_3924/master/6541.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2d7e945e63c81df2a9e3fdbf154c7958",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPjv1lHEIpzgDk_e3Sm-e4EVOzggYdb5aHA&s",
    shop_name: "Fitness Zone",
    ownerName: "Laura Carter",
    address: {
      street: "111 Fitness Street",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      country: "USA",
    },
    contact: {
      email: "info@fitnesszone.com",
      phone: "+1-312-555-5678",
    },
    description: "Everything you need for fitness and sports activities.",
  },
  {
    id: "s18",
    logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/store-logo-design%2C-online-shopping-store-logo-template-b96b23a1a56e685fe30519cbf20883bc_screen.jpg?ts=1662903800",
    image: "https://c8.alamy.com/comp/CF4H1C/the-exterior-of-a-local-convenience-shop-british-food-wine-store-in-CF4H1C.jpg",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjw9i6PO7C3BluMusZzcQs2J7BWkF0pLSrRw&s",
    shop_name: "Kids World",
    ownerName: "Nancy Lee",
    address: {
      street: "234 Fun Street",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      country: "USA",
    },
    contact: {
      email: "support@kidsworld.com",
      phone: "+1-213-555-4321",
    },
    description: "A wide range of toys and products for children of all ages.",
  },
  {
    id: "s19",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jCLFM94W5u8LLAqAlyEPEDqHONQMIEYyhA&s",
    image: "https://c8.alamy.com/comp/H3D3H0/small-indian-shop-sells-merchandise-per-single-unit-H3D3H0.jpg",
    owner_photo: "hhttps://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
    shop_name: "Outdoor Life",
    ownerName: "Chris Green",
    address: {
      street: "555 Adventure Road",
      city: "Phoenix",
      state: "AZ",
      zipCode: "85001",
      country: "USA",
    },
    contact: {
      email: "contact@outdoorlife.com",
      phone: "+1-602-555-6789",
    },
    description: "Gear and apparel for outdoor enthusiasts and adventurers.",
  },
  {
    id: "s20",
    logo: "https://thumbs.dreamstime.com/b/letter-z-online-shopping-shopping-application-company-branding-vector-logo-icon-illustration-letter-z-online-shopping-shopping-324351567.jpg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBq_uwsHdVmzZwmr-BEk3IQAwwarU2Qlchqg&s",
    owner_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hb5xzFZJCTW4cMqmPwsgfw-gILUV7QevvQ&s",
    shop_name: "Beauty Bliss",
    ownerName: "Sophia Martin",
    address: {
      street: "77 Beauty Blvd",
      city: "Miami",
      state: "FL",
      zipCode: "33101",
      country: "USA",
    },
    contact: {
      email: "info@beautybliss.com",
      phone: "+1-305-555-0987",
    },
    description: "Top beauty products and cosmetics from around the world.",
  },
];
