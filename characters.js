const CHARACTERS = [
  {
    "name":"Truman Burbank",
    "universe":"The Truman Show",
    "media":"Films",
    "id":"c001",
    "wiki":"Truman Burbank"
  },
  {
    "name":"Amélie Poulain",
    "universe":"Le Fabuleux Destin d'Amélie Poulain",
    "media":"Films",
    "id":"c002",
    "wiki":"Amélie Poulain"
  },
  {
    "name":"Mia Wallace",
    "universe":"Pulp Fiction",
    "media":"Films",
    "id":"c003",
    "wiki":"Mia Wallace"
  },
  {
    "name":"Vincent Vega",
    "universe":"Pulp Fiction",
    "media":"Films",
    "id":"c004",
    "wiki":"Vincent Vega"
  },
  {
    "name":"Maximus Decimus Meridius",
    "universe":"Gladiator",
    "media":"Films",
    "id":"c005",
    "wiki":"Maximus Decimus Meridius"
  },
  {
    "name":"Tony Montana",
    "universe":"Scarface",
    "media":"Films",
    "id":"c006",
    "wiki":"Tony Montana"
  },
  {
    "name":"Rick Deckard",
    "universe":"Blade Runner",
    "media":"Films",
    "id":"c007",
    "wiki":"Rick Deckard"
  },
  {
    "name":"Sarah Goldfarb",
    "universe":"Requiem for a Dream",
    "media":"Films",
    "id":"c008",
    "wiki":"Sarah Goldfarb"
  },
  {
    "name":"Cobb",
    "universe":"Inception",
    "media":"Films",
    "id":"c009",
    "wiki":"Cobb"
  },
  {
    "name":"Ariadne",
    "universe":"Inception",
    "media":"Films",
    "id":"c010",
    "wiki":"Ariadne"
  },
  {
    "name":"Marty McFly",
    "universe":"Retour vers le futur",
    "media":"Films",
    "id":"c011",
    "wiki":"Marty McFly"
  },
  {
    "name":"Doc Brown",
    "universe":"Retour vers le futur",
    "media":"Films",
    "id":"c012",
    "wiki":"Doc Brown"
  },
  {
    "name":"Mavis Gary",
    "universe":"Young Adult",
    "media":"Films",
    "id":"c013",
    "wiki":"Mavis Gary"
  },
  {
    "name":"Erin Brockovich",
    "universe":"Erin Brockovich",
    "media":"Films",
    "id":"c014",
    "wiki":"Erin Brockovich"
  },
  {
    "name":"Andy Dufresne",
    "universe":"Les Évadés",
    "media":"Films",
    "id":"c015",
    "wiki":"Andy Dufresne"
  },
  {
    "name":"John McClane",
    "universe":"Die Hard",
    "media":"Films",
    "id":"c016",
    "wiki":"John McClane"
  },
  {
    "name":"Verbal Kint",
    "universe":"Usual Suspects",
    "media":"Films",
    "id":"c017",
    "wiki":"Verbal Kint"
  },
  {
    "name":"The Driver",
    "universe":"Drive",
    "media":"Films",
    "id":"c018",
    "wiki":"The Driver"
  },
  {
    "name":"Erik Killmonger",
    "universe":"Black Panther",
    "media":"Films",
    "id":"c019",
    "wiki":"Erik Killmonger"
  },
  {
    "name":"Shuri",
    "universe":"Black Panther",
    "media":"Films",
    "id":"c020",
    "wiki":"Shuri"
  },
  {
    "name":"Okoye",
    "universe":"Black Panther",
    "media":"Films",
    "id":"c021",
    "wiki":"Okoye"
  },
  {
    "name":"Wendy Torrance",
    "universe":"Shining",
    "media":"Films",
    "id":"c022",
    "wiki":"Wendy Torrance"
  },
  {
    "name":"Jack Torrance",
    "universe":"Shining",
    "media":"Films",
    "id":"c023",
    "wiki":"Jack Torrance"
  },
  {
    "name":"Annie Wilkes",
    "universe":"Misery",
    "media":"Films",
    "id":"c024",
    "wiki":"Annie Wilkes"
  },
  {
    "name":"Daniel Plainview",
    "universe":"There Will Be Blood",
    "media":"Films",
    "id":"c025",
    "wiki":"Daniel Plainview"
  },
  {
    "name":"Remy",
    "universe":"Ratatouille",
    "media":"Films",
    "id":"c026",
    "wiki":"Remy"
  },
  {
    "name":"Elastigirl",
    "universe":"Les Indestructibles",
    "media":"Films",
    "id":"c027",
    "wiki":"Elastigirl"
  },
  {
    "name":"Mirabel Madrigal",
    "universe":"Encanto",
    "media":"Films",
    "id":"c028",
    "wiki":"Mirabel Madrigal"
  },
  {
    "name":"Raya",
    "universe":"Raya et le Dernier Dragon",
    "media":"Films",
    "id":"c029",
    "wiki":"Raya"
  },
  {
    "name":"Neytiri",
    "universe":"Avatar",
    "media":"Films",
    "id":"c030",
    "wiki":"Neytiri"
  },
  {
    "name":"Jake Sully",
    "universe":"Avatar",
    "media":"Films",
    "id":"c031",
    "wiki":"Jake Sully"
  },
  {
    "name":"Hiccup",
    "universe":"Dragons",
    "media":"Films",
    "id":"c032",
    "wiki":"Hiccup"
  },
  {
    "name":"Toothless",
    "universe":"Dragons",
    "media":"Films",
    "id":"c033",
    "wiki":"Toothless"
  },
  {
    "name":"Megamind",
    "universe":"Megamind",
    "media":"Films",
    "id":"c034",
    "wiki":"Megamind"
  },
  {
    "name":"Gru",
    "universe":"Moi, moche et méchant",
    "media":"Films",
    "id":"c035",
    "wiki":"Gru"
  },
  {
    "name":"Lucy Wilde",
    "universe":"Moi, moche et méchant",
    "media":"Films",
    "id":"c036",
    "wiki":"Lucy Wilde"
  },
  {
    "name":"Po",
    "universe":"Kung Fu Panda",
    "media":"Films",
    "id":"c037",
    "wiki":"Po"
  },
  {
    "name":"Tigress",
    "universe":"Kung Fu Panda",
    "media":"Films",
    "id":"c038",
    "wiki":"Tigress"
  },
  {
    "name":"Shrek",
    "universe":"Shrek",
    "media":"Films",
    "id":"c039",
    "wiki":"Shrek"
  },
  {
    "name":"Fiona",
    "universe":"Shrek",
    "media":"Films",
    "id":"c040",
    "wiki":"Fiona"
  },
  {
    "name":"Puss in Boots",
    "universe":"Le Chat potté",
    "media":"Films",
    "id":"c041",
    "wiki":"Puss in Boots"
  },
  {
    "name":"Miguel Rivera",
    "universe":"Coco",
    "media":"Films",
    "id":"c042",
    "wiki":"Miguel Rivera"
  },
  {
    "name":"Hector Rivera",
    "universe":"Coco",
    "media":"Films",
    "id":"c043",
    "wiki":"Hector Rivera"
  },
  {
    "name":"Chihiro Ogino",
    "universe":"Le Voyage de Chihiro",
    "media":"Films",
    "id":"c044",
    "wiki":"Chihiro Ogino"
  },
  {
    "name":"Carrie Mathison",
    "universe":"Homeland",
    "media":"Séries",
    "id":"c045",
    "wiki":"Carrie Mathison"
  },
  {
    "name":"Jessica Day",
    "universe":"New Girl",
    "media":"Séries",
    "id":"c046",
    "wiki":"Jessica Day"
  },
  {
    "name":"Eve Polastri",
    "universe":"Killing Eve",
    "media":"Séries",
    "id":"c047",
    "wiki":"Eve Polastri"
  },
  {
    "name":"Fox Mulder",
    "universe":"The X-Files",
    "media":"Séries",
    "id":"c048",
    "wiki":"Fox Mulder"
  },
  {
    "name":"Bobbie Draper",
    "universe":"The Expanse",
    "media":"Séries",
    "id":"c049",
    "wiki":"Bobbie Draper"
  },
  {
    "name":"Naomi Nagata",
    "universe":"The Expanse",
    "media":"Séries",
    "id":"c050",
    "wiki":"Naomi Nagata"
  },
  {
    "name":"Camina Drummer",
    "universe":"The Expanse",
    "media":"Séries",
    "id":"c051",
    "wiki":"Camina Drummer"
  },
  {
    "name":"Laura Roslin",
    "universe":"Battlestar Galactica",
    "media":"Séries",
    "id":"c052",
    "wiki":"Laura Roslin"
  },
  {
    "name":"Rory Williams",
    "universe":"Doctor Who",
    "media":"Séries",
    "id":"c053",
    "wiki":"Rory Williams"
  },
  {
    "name":"Wilfred Mott",
    "universe":"Doctor Who",
    "media":"Séries",
    "id":"c054",
    "wiki":"Wilfred Mott"
  },
  {
    "name":"Donna Noble",
    "universe":"Doctor Who",
    "media":"Séries",
    "id":"c055",
    "wiki":"Donna Noble"
  },
  {
    "name":"Clara Oswald",
    "universe":"Doctor Who",
    "media":"Séries",
    "id":"c056",
    "wiki":"Clara Oswald"
  },
  {
    "name":"Rose Tyler",
    "universe":"Doctor Who",
    "media":"Séries",
    "id":"c057",
    "wiki":"Rose Tyler"
  },
  {
    "name":"Sarah Jane Smith",
    "universe":"Doctor Who",
    "media":"Séries",
    "id":"c058",
    "wiki":"Sarah Jane Smith"
  },
  {
    "name":"Seven of Nine",
    "universe":"Star Trek: Voyager",
    "media":"Séries",
    "id":"c059",
    "wiki":"Seven of Nine"
  },
  {
    "name":"Kathryn Janeway",
    "universe":"Star Trek: Voyager",
    "media":"Séries",
    "id":"c060",
    "wiki":"Kathryn Janeway"
  },
  {
    "name":"Kira Nerys",
    "universe":"Star Trek: Deep Space Nine",
    "media":"Séries",
    "id":"c061",
    "wiki":"Kira Nerys"
  },
  {
    "name":"Benjamin Sisko",
    "universe":"Star Trek: Deep Space Nine",
    "media":"Séries",
    "id":"c062",
    "wiki":"Benjamin Sisko"
  },
  {
    "name":"Jean-Luc Picard",
    "universe":"Star Trek: The Next Generation",
    "media":"Séries",
    "id":"c063",
    "wiki":"Jean-Luc Picard"
  },
  {
    "name":"Beverly Crusher",
    "universe":"Star Trek: The Next Generation",
    "media":"Séries",
    "id":"c064",
    "wiki":"Beverly Crusher"
  },
  {
    "name":"Michael Burnham",
    "universe":"Star Trek: Discovery",
    "media":"Séries",
    "id":"c065",
    "wiki":"Michael Burnham"
  },
  {
    "name":"Philippa Georgiou",
    "universe":"Star Trek: Discovery",
    "media":"Séries",
    "id":"c066",
    "wiki":"Philippa Georgiou"
  },
  {
    "name":"Din Djarin",
    "universe":"The Mandalorian",
    "media":"Séries",
    "id":"c067",
    "wiki":"Din Djarin"
  },
  {
    "name":"Bo-Katan Kryze",
    "universe":"Star Wars",
    "media":"Séries",
    "id":"c068",
    "wiki":"Bo-Katan Kryze"
  },
  {
    "name":"Cassian Andor",
    "universe":"Andor",
    "media":"Séries",
    "id":"c069",
    "wiki":"Cassian Andor"
  },
  {
    "name":"Mon Mothma",
    "universe":"Andor",
    "media":"Séries",
    "id":"c070",
    "wiki":"Mon Mothma"
  },
  {
    "name":"Bix Caleen",
    "universe":"Andor",
    "media":"Séries",
    "id":"c071",
    "wiki":"Bix Caleen"
  },
  {
    "name":"Luthen Rael",
    "universe":"Andor",
    "media":"Séries",
    "id":"c072",
    "wiki":"Luthen Rael"
  },
  {
    "name":"Jimmy McGill",
    "universe":"Better Call Saul",
    "media":"Séries",
    "id":"c073",
    "wiki":"Jimmy McGill"
  },
  {
    "name":"Mike Ehrmantraut",
    "universe":"Better Call Saul",
    "media":"Séries",
    "id":"c074",
    "wiki":"Mike Ehrmantraut"
  },
  {
    "name":"Chuck McGill",
    "universe":"Better Call Saul",
    "media":"Séries",
    "id":"c075",
    "wiki":"Chuck McGill"
  },
  {
    "name":"Nacho Varga",
    "universe":"Better Call Saul",
    "media":"Séries",
    "id":"c076",
    "wiki":"Nacho Varga"
  },
  {
    "name":"Don Draper",
    "universe":"Mad Men",
    "media":"Séries",
    "id":"c077",
    "wiki":"Don Draper"
  },
  {
    "name":"Peggy Olson",
    "universe":"Mad Men",
    "media":"Séries",
    "id":"c078",
    "wiki":"Peggy Olson"
  },
  {
    "name":"Joan Holloway",
    "universe":"Mad Men",
    "media":"Séries",
    "id":"c079",
    "wiki":"Joan Holloway"
  },
  {
    "name":"Betty Draper",
    "universe":"Mad Men",
    "media":"Séries",
    "id":"c080",
    "wiki":"Betty Draper"
  },
  {
    "name":"Leslie Knope",
    "universe":"Parks and Recreation",
    "media":"Séries",
    "id":"c081",
    "wiki":"Leslie Knope"
  },
  {
    "name":"April Ludgate",
    "universe":"Parks and Recreation",
    "media":"Séries",
    "id":"c082",
    "wiki":"April Ludgate"
  },
  {
    "name":"Ron Swanson",
    "universe":"Parks and Recreation",
    "media":"Séries",
    "id":"c083",
    "wiki":"Ron Swanson"
  },
  {
    "name":"Ben Wyatt",
    "universe":"Parks and Recreation",
    "media":"Séries",
    "id":"c084",
    "wiki":"Ben Wyatt"
  },
  {
    "name":"Liz Lemon",
    "universe":"30 Rock",
    "media":"Séries",
    "id":"c085",
    "wiki":"Liz Lemon"
  },
  {
    "name":"Jack Donaghy",
    "universe":"30 Rock",
    "media":"Séries",
    "id":"c086",
    "wiki":"Jack Donaghy"
  },
  {
    "name":"Diane Nguyen",
    "universe":"BoJack Horseman",
    "media":"Séries",
    "id":"c087",
    "wiki":"Diane Nguyen"
  },
  {
    "name":"Princess Carolyn",
    "universe":"BoJack Horseman",
    "media":"Séries",
    "id":"c088",
    "wiki":"Princess Carolyn"
  },
  {
    "name":"Todd Chavez",
    "universe":"BoJack Horseman",
    "media":"Séries",
    "id":"c089",
    "wiki":"Todd Chavez"
  },
  {
    "name":"Mr. Peanutbutter",
    "universe":"BoJack Horseman",
    "media":"Séries",
    "id":"c090",
    "wiki":"Mr. Peanutbutter"
  },
  {
    "name":"Daria Morgendorffer",
    "universe":"Daria",
    "media":"Séries",
    "id":"c091",
    "wiki":"Daria Morgendorffer"
  },
  {
    "name":"Jane Lane",
    "universe":"Daria",
    "media":"Séries",
    "id":"c092",
    "wiki":"Jane Lane"
  },
  {
    "name":"Mabel Pines",
    "universe":"Gravity Falls",
    "media":"Séries",
    "id":"c093",
    "wiki":"Mabel Pines"
  },
  {
    "name":"Stan Pines",
    "universe":"Gravity Falls",
    "media":"Séries",
    "id":"c094",
    "wiki":"Stan Pines"
  },
  {
    "name":"Wendy Corduroy",
    "universe":"Gravity Falls",
    "media":"Séries",
    "id":"c095",
    "wiki":"Wendy Corduroy"
  },
  {
    "name":"Rebecca Bunch",
    "universe":"Crazy Ex-Girlfriend",
    "media":"Séries",
    "id":"c096",
    "wiki":"Rebecca Bunch"
  },
  {
    "name":"Chidi Anagonye",
    "universe":"The Good Place",
    "media":"Séries",
    "id":"c097",
    "wiki":"Chidi Anagonye"
  },
  {
    "name":"Tahani Al-Jamil",
    "universe":"The Good Place",
    "media":"Séries",
    "id":"c098",
    "wiki":"Tahani Al-Jamil"
  },
  {
    "name":"Michael",
    "universe":"The Good Place",
    "media":"Séries",
    "id":"c099",
    "wiki":"Michael"
  },
  {
    "name":"Rory Gilmore",
    "universe":"Gilmore Girls",
    "media":"Séries",
    "id":"c100",
    "wiki":"Rory Gilmore"
  },
  {
    "name":"Paris Geller",
    "universe":"Gilmore Girls",
    "media":"Séries",
    "id":"c101",
    "wiki":"Paris Geller"
  },
  {
    "name":"June Osborne",
    "universe":"The Handmaid's Tale",
    "media":"Séries",
    "id":"c102",
    "wiki":"June Osborne"
  },
  {
    "name":"Moira Rose",
    "universe":"Schitt's Creek",
    "media":"Séries",
    "id":"c103",
    "wiki":"Moira Rose"
  },
  {
    "name":"Alexis Rose",
    "universe":"Schitt's Creek",
    "media":"Séries",
    "id":"c104",
    "wiki":"Alexis Rose"
  },
  {
    "name":"Midge Maisel",
    "universe":"The Marvelous Mrs. Maisel",
    "media":"Séries",
    "id":"c105",
    "wiki":"Midge Maisel"
  },
  {
    "name":"Nico Robin",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c106",
    "wiki":"Nico Robin"
  },
  {
    "name":"Nami",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c107",
    "wiki":"Nami"
  },
  {
    "name":"Boa Hancock",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c108",
    "wiki":"Boa Hancock"
  },
  {
    "name":"Perona",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c109",
    "wiki":"Perona"
  },
  {
    "name":"Trafalgar Law",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c110",
    "wiki":"Trafalgar Law"
  },
  {
    "name":"Donquixote Doflamingo",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c111",
    "wiki":"Donquixote Doflamingo"
  },
  {
    "name":"Charlotte Katakuri",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c112",
    "wiki":"Charlotte Katakuri"
  },
  {
    "name":"Monkey D. Dragon",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c113",
    "wiki":"Monkey D. Dragon"
  },
  {
    "name":"Shanks",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c114",
    "wiki":"Shanks"
  },
  {
    "name":"Brook",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c115",
    "wiki":"Brook"
  },
  {
    "name":"Franky",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c116",
    "wiki":"Franky"
  },
  {
    "name":"Usopp",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c117",
    "wiki":"Usopp"
  },
  {
    "name":"Sanji",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c118",
    "wiki":"Sanji"
  },
  {
    "name":"Roronoa Zoro",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c119",
    "wiki":"Roronoa Zoro"
  },
  {
    "name":"Tashigi",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c120",
    "wiki":"Tashigi"
  },
  {
    "name":"Koby",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c121",
    "wiki":"Koby"
  },
  {
    "name":"Reiju Vinsmoke",
    "universe":"One Piece",
    "media":"Manga / Anime",
    "id":"c122",
    "wiki":"Reiju Vinsmoke"
  },
  {
    "name":"Maki Zenin",
    "universe":"Jujutsu Kaisen",
    "media":"Manga / Anime",
    "id":"c123",
    "wiki":"Maki Zenin"
  },
  {
    "name":"Nobara Kugisaki",
    "universe":"Jujutsu Kaisen",
    "media":"Manga / Anime",
    "id":"c124",
    "wiki":"Nobara Kugisaki"
  },
  {
    "name":"Megumi Fushiguro",
    "universe":"Jujutsu Kaisen",
    "media":"Manga / Anime",
    "id":"c125",
    "wiki":"Megumi Fushiguro"
  },
  {
    "name":"Suguru Geto",
    "universe":"Jujutsu Kaisen",
    "media":"Manga / Anime",
    "id":"c126",
    "wiki":"Suguru Geto"
  },
  {
    "name":"Toji Fushiguro",
    "universe":"Jujutsu Kaisen",
    "media":"Manga / Anime",
    "id":"c127",
    "wiki":"Toji Fushiguro"
  },
  {
    "name":"Kento Nanami",
    "universe":"Jujutsu Kaisen",
    "media":"Manga / Anime",
    "id":"c128",
    "wiki":"Kento Nanami"
  },
  {
    "name":"Yuki Tsukumo",
    "universe":"Jujutsu Kaisen",
    "media":"Manga / Anime",
    "id":"c129",
    "wiki":"Yuki Tsukumo"
  },
  {
    "name":"Kasumi Miwa",
    "universe":"Jujutsu Kaisen",
    "media":"Manga / Anime",
    "id":"c130",
    "wiki":"Kasumi Miwa"
  },
  {
    "name":"Shoko Ieiri",
    "universe":"Jujutsu Kaisen",
    "media":"Manga / Anime",
    "id":"c131",
    "wiki":"Shoko Ieiri"
  },
  {
    "name":"Maki Oze",
    "universe":"Fire Force",
    "media":"Manga / Anime",
    "id":"c132",
    "wiki":"Maki Oze"
  },
  {
    "name":"Shinra Kusakabe",
    "universe":"Fire Force",
    "media":"Manga / Anime",
    "id":"c133",
    "wiki":"Shinra Kusakabe"
  },
  {
    "name":"Arthur Boyle",
    "universe":"Fire Force",
    "media":"Manga / Anime",
    "id":"c134",
    "wiki":"Arthur Boyle"
  },
  {
    "name":"Tamaki Kotatsu",
    "universe":"Fire Force",
    "media":"Manga / Anime",
    "id":"c135",
    "wiki":"Tamaki Kotatsu"
  },
  {
    "name":"Historia Reiss",
    "universe":"L'Attaque des Titans",
    "media":"Manga / Anime",
    "id":"c136",
    "wiki":"Historia Reiss"
  },
  {
    "name":"Sasha Blouse",
    "universe":"L'Attaque des Titans",
    "media":"Manga / Anime",
    "id":"c137",
    "wiki":"Sasha Blouse"
  },
  {
    "name":"Pieck Finger",
    "universe":"L'Attaque des Titans",
    "media":"Manga / Anime",
    "id":"c138",
    "wiki":"Pieck Finger"
  },
  {
    "name":"Annie Leonhart",
    "universe":"L'Attaque des Titans",
    "media":"Manga / Anime",
    "id":"c139",
    "wiki":"Annie Leonhart"
  },
  {
    "name":"Reiner Braun",
    "universe":"L'Attaque des Titans",
    "media":"Manga / Anime",
    "id":"c140",
    "wiki":"Reiner Braun"
  },
  {
    "name":"Armin Arlert",
    "universe":"L'Attaque des Titans",
    "media":"Manga / Anime",
    "id":"c141",
    "wiki":"Armin Arlert"
  },
  {
    "name":"Levi Ackerman",
    "universe":"L'Attaque des Titans",
    "media":"Manga / Anime",
    "id":"c142",
    "wiki":"Levi Ackerman"
  },
  {
    "name":"Jean Kirstein",
    "universe":"L'Attaque des Titans",
    "media":"Manga / Anime",
    "id":"c143",
    "wiki":"Jean Kirstein"
  },
  {
    "name":"Ymir",
    "universe":"L'Attaque des Titans",
    "media":"Manga / Anime",
    "id":"c144",
    "wiki":"Ymir"
  },
  {
    "name":"Near",
    "universe":"Death Note",
    "media":"Manga / Anime",
    "id":"c145",
    "wiki":"Near"
  },
  {
    "name":"Mello",
    "universe":"Death Note",
    "media":"Manga / Anime",
    "id":"c146",
    "wiki":"Mello"
  },
  {
    "name":"Teru Mikami",
    "universe":"Death Note",
    "media":"Manga / Anime",
    "id":"c147",
    "wiki":"Teru Mikami"
  },
  {
    "name":"Matt",
    "universe":"Death Note",
    "media":"Manga / Anime",
    "id":"c148",
    "wiki":"Matt"
  },
  {
    "name":"Ryuk",
    "universe":"Death Note",
    "media":"Manga / Anime",
    "id":"c149",
    "wiki":"Ryuk"
  },
  {
    "name":"Mitsuri Kanroji",
    "universe":"Demon Slayer",
    "media":"Manga / Anime",
    "id":"c150",
    "wiki":"Mitsuri Kanroji"
  },
  {
    "name":"Kanao Tsuyuri",
    "universe":"Demon Slayer",
    "media":"Manga / Anime",
    "id":"c151",
    "wiki":"Kanao Tsuyuri"
  },
  {
    "name":"Tamayo",
    "universe":"Demon Slayer",
    "media":"Manga / Anime",
    "id":"c152",
    "wiki":"Tamayo"
  },
  {
    "name":"Daki",
    "universe":"Demon Slayer",
    "media":"Manga / Anime",
    "id":"c153",
    "wiki":"Daki"
  },
  {
    "name":"Akaza",
    "universe":"Demon Slayer",
    "media":"Manga / Anime",
    "id":"c154",
    "wiki":"Akaza"
  },
  {
    "name":"Giyu Tomioka",
    "universe":"Demon Slayer",
    "media":"Manga / Anime",
    "id":"c155",
    "wiki":"Giyu Tomioka"
  },
  {
    "name":"Kyojuro Rengoku",
    "universe":"Demon Slayer",
    "media":"Manga / Anime",
    "id":"c156",
    "wiki":"Kyojuro Rengoku"
  },
  {
    "name":"Tengen Uzui",
    "universe":"Demon Slayer",
    "media":"Manga / Anime",
    "id":"c157",
    "wiki":"Tengen Uzui"
  },
  {
    "name":"Muichiro Tokito",
    "universe":"Demon Slayer",
    "media":"Manga / Anime",
    "id":"c158",
    "wiki":"Muichiro Tokito"
  },
  {
    "name":"Nezuko Kamado",
    "universe":"Demon Slayer",
    "media":"Manga / Anime",
    "id":"c159",
    "wiki":"Nezuko Kamado"
  },
  {
    "name":"Tanjiro Kamado",
    "universe":"Demon Slayer",
    "media":"Manga / Anime",
    "id":"c160",
    "wiki":"Tanjiro Kamado"
  },
  {
    "name":"Inosuke Hashibira",
    "universe":"Demon Slayer",
    "media":"Manga / Anime",
    "id":"c161",
    "wiki":"Inosuke Hashibira"
  },
  {
    "name":"Zenitsu Agatsuma",
    "universe":"Demon Slayer",
    "media":"Manga / Anime",
    "id":"c162",
    "wiki":"Zenitsu Agatsuma"
  },
  {
    "name":"Jinshi",
    "universe":"Les Carnets de l'apothicaire",
    "media":"Manga / Anime",
    "id":"c163",
    "wiki":"Jinshi"
  },
  {
    "name":"Gyokuyou",
    "universe":"Les Carnets de l'apothicaire",
    "media":"Manga / Anime",
    "id":"c164",
    "wiki":"Gyokuyou"
  },
  {
    "name":"Fern",
    "universe":"Frieren",
    "media":"Manga / Anime",
    "id":"c165",
    "wiki":"Fern"
  },
  {
    "name":"Stark",
    "universe":"Frieren",
    "media":"Manga / Anime",
    "id":"c166",
    "wiki":"Stark"
  },
  {
    "name":"Übel",
    "universe":"Frieren",
    "media":"Manga / Anime",
    "id":"c167",
    "wiki":"Übel"
  },
  {
    "name":"Himmel",
    "universe":"Frieren",
    "media":"Manga / Anime",
    "id":"c168",
    "wiki":"Himmel"
  },
  {
    "name":"Marcille Donato",
    "universe":"Dungeon Meshi",
    "media":"Manga / Anime",
    "id":"c169",
    "wiki":"Marcille Donato"
  },
  {
    "name":"Laios Touden",
    "universe":"Dungeon Meshi",
    "media":"Manga / Anime",
    "id":"c170",
    "wiki":"Laios Touden"
  },
  {
    "name":"Falin Touden",
    "universe":"Dungeon Meshi",
    "media":"Manga / Anime",
    "id":"c171",
    "wiki":"Falin Touden"
  },
  {
    "name":"Okarun",
    "universe":"DanDaDan",
    "media":"Manga / Anime",
    "id":"c172",
    "wiki":"Okarun"
  },
  {
    "name":"Aira Shiratori",
    "universe":"DanDaDan",
    "media":"Manga / Anime",
    "id":"c173",
    "wiki":"Aira Shiratori"
  },
  {
    "name":"Sailor Moon",
    "universe":"Sailor Moon",
    "media":"Manga / Anime",
    "id":"c174",
    "wiki":"Sailor Moon"
  },
  {
    "name":"Sailor Mars",
    "universe":"Sailor Moon",
    "media":"Manga / Anime",
    "id":"c175",
    "wiki":"Sailor Mars"
  },
  {
    "name":"Sailor Mercury",
    "universe":"Sailor Moon",
    "media":"Manga / Anime",
    "id":"c176",
    "wiki":"Sailor Mercury"
  },
  {
    "name":"Sailor Jupiter",
    "universe":"Sailor Moon",
    "media":"Manga / Anime",
    "id":"c177",
    "wiki":"Sailor Jupiter"
  },
  {
    "name":"Sailor Venus",
    "universe":"Sailor Moon",
    "media":"Manga / Anime",
    "id":"c178",
    "wiki":"Sailor Venus"
  },
  {
    "name":"Utena Tenjou",
    "universe":"Revolutionary Girl Utena",
    "media":"Manga / Anime",
    "id":"c179",
    "wiki":"Utena Tenjou"
  },
  {
    "name":"Anthyy Himemiya",
    "universe":"Revolutionary Girl Utena",
    "media":"Manga / Anime",
    "id":"c180",
    "wiki":"Anthyy Himemiya"
  },
  {
    "name":"Homura Akemi",
    "universe":"Puella Magi Madoka Magica",
    "media":"Manga / Anime",
    "id":"c181",
    "wiki":"Homura Akemi"
  },
  {
    "name":"Madoka Kaname",
    "universe":"Puella Magi Madoka Magica",
    "media":"Manga / Anime",
    "id":"c182",
    "wiki":"Madoka Kaname"
  },
  {
    "name":"Mami Tomoe",
    "universe":"Puella Magi Madoka Magica",
    "media":"Manga / Anime",
    "id":"c183",
    "wiki":"Mami Tomoe"
  },
  {
    "name":"Sayaka Miki",
    "universe":"Puella Magi Madoka Magica",
    "media":"Manga / Anime",
    "id":"c184",
    "wiki":"Sayaka Miki"
  },
  {
    "name":"Kyoko Sakura",
    "universe":"Puella Magi Madoka Magica",
    "media":"Manga / Anime",
    "id":"c185",
    "wiki":"Kyoko Sakura"
  },
  {
    "name":"Batou",
    "universe":"Ghost in the Shell",
    "media":"Manga / Anime",
    "id":"c186",
    "wiki":"Batou"
  },
  {
    "name":"Ginko",
    "universe":"Mushishi",
    "media":"Manga / Anime",
    "id":"c187",
    "wiki":"Ginko"
  },
  {
    "name":"Violet Evergarden",
    "universe":"Violet Evergarden",
    "media":"Manga / Anime",
    "id":"c188",
    "wiki":"Violet Evergarden"
  },
  {
    "name":"Yor Forger",
    "universe":"Spy × Family",
    "media":"Manga / Anime",
    "id":"c189",
    "wiki":"Yor Forger"
  },
  {
    "name":"Loid Forger",
    "universe":"Spy × Family",
    "media":"Manga / Anime",
    "id":"c190",
    "wiki":"Loid Forger"
  },
  {
    "name":"Anya Forger",
    "universe":"Spy × Family",
    "media":"Manga / Anime",
    "id":"c191",
    "wiki":"Anya Forger"
  },
  {
    "name":"Fiona Frost",
    "universe":"Spy × Family",
    "media":"Manga / Anime",
    "id":"c192",
    "wiki":"Fiona Frost"
  },
  {
    "name":"Hachi Komatsu",
    "universe":"Nana",
    "media":"Manga / Anime",
    "id":"c193",
    "wiki":"Hachi Komatsu"
  },
  {
    "name":"Nana Komatsu",
    "universe":"Nana",
    "media":"Manga / Anime",
    "id":"c194",
    "wiki":"Nana Komatsu"
  },
  {
    "name":"Yona",
    "universe":"Yona of the Dawn",
    "media":"Manga / Anime",
    "id":"c195",
    "wiki":"Yona"
  },
  {
    "name":"Balsa Yonsa",
    "universe":"Moribito",
    "media":"Manga / Anime",
    "id":"c196",
    "wiki":"Balsa Yonsa"
  },
  {
    "name":"Akane Tsunemori",
    "universe":"Psycho-Pass",
    "media":"Manga / Anime",
    "id":"c197",
    "wiki":"Akane Tsunemori"
  },
  {
    "name":"Shinya Kogami",
    "universe":"Psycho-Pass",
    "media":"Manga / Anime",
    "id":"c198",
    "wiki":"Shinya Kogami"
  },
  {
    "name":"Balalaika",
    "universe":"Black Lagoon",
    "media":"Manga / Anime",
    "id":"c199",
    "wiki":"Balalaika"
  },
  {
    "name":"Benny",
    "universe":"Black Lagoon",
    "media":"Manga / Anime",
    "id":"c200",
    "wiki":"Benny"
  },
  {
    "name":"Vicious",
    "universe":"Cowboy Bebop",
    "media":"Manga / Anime",
    "id":"c201",
    "wiki":"Vicious"
  },
  {
    "name":"Jet Black",
    "universe":"Cowboy Bebop",
    "media":"Manga / Anime",
    "id":"c202",
    "wiki":"Jet Black"
  },
  {
    "name":"Edward",
    "universe":"Cowboy Bebop",
    "media":"Manga / Anime",
    "id":"c203",
    "wiki":"Edward"
  },
  {
    "name":"Mugen",
    "universe":"Samurai Champloo",
    "media":"Manga / Anime",
    "id":"c204",
    "wiki":"Mugen"
  },
  {
    "name":"Jin",
    "universe":"Samurai Champloo",
    "media":"Manga / Anime",
    "id":"c205",
    "wiki":"Jin"
  },
  {
    "name":"Fuu Kasumi",
    "universe":"Samurai Champloo",
    "media":"Manga / Anime",
    "id":"c206",
    "wiki":"Fuu Kasumi"
  },
  {
    "name":"Spider Woman / Jessica Drew",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c207",
    "wiki":"Jessica Drew"
  },
  {
    "name":"Kate Bishop",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c208",
    "wiki":"Kate Bishop"
  },
  {
    "name":"Kamala Khan",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c209",
    "wiki":"Kamala Khan"
  },
  {
    "name":"Monica Rambeau",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c210",
    "wiki":"Monica Rambeau"
  },
  {
    "name":"America Chavez",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c211",
    "wiki":"America Chavez"
  },
  {
    "name":"Wiccan",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c212",
    "wiki":"Wiccan"
  },
  {
    "name":"Hulkling",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c213",
    "wiki":"Hulkling"
  },
  {
    "name":"Kitty Pryde",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c214",
    "wiki":"Kitty Pryde"
  },
  {
    "name":"Emma Frost",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c215",
    "wiki":"Emma Frost"
  },
  {
    "name":"Psylocke",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c216",
    "wiki":"Psylocke"
  },
  {
    "name":"Dazzler",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c217",
    "wiki":"Dazzler"
  },
  {
    "name":"Polaris",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c218",
    "wiki":"Polaris"
  },
  {
    "name":"Magik",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c219",
    "wiki":"Magik"
  },
  {
    "name":"Clea",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c220",
    "wiki":"Clea"
  },
  {
    "name":"Elektra",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c221",
    "wiki":"Elektra"
  },
  {
    "name":"Misty Knight",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c222",
    "wiki":"Misty Knight"
  },
  {
    "name":"Colleen Wing",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c223",
    "wiki":"Colleen Wing"
  },
  {
    "name":"Moon Girl",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c224",
    "wiki":"Moon Girl"
  },
  {
    "name":"Squirrel Girl",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c225",
    "wiki":"Squirrel Girl"
  },
  {
    "name":"Vixen",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c226",
    "wiki":"Vixen"
  },
  {
    "name":"Hawkgirl",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c227",
    "wiki":"Hawkgirl"
  },
  {
    "name":"Batwoman",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c228",
    "wiki":"Batwoman"
  },
  {
    "name":"Power Girl",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c229",
    "wiki":"Power Girl"
  },
  {
    "name":"Donna Troy",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c230",
    "wiki":"Donna Troy"
  },
  {
    "name":"Cassandra Cain",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c231",
    "wiki":"Cassandra Cain"
  },
  {
    "name":"Stephanie Brown",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c232",
    "wiki":"Stephanie Brown"
  },
  {
    "name":"Nightwing",
    "universe":"DC Comics",
    "media":"Comics/Séries",
    "id":"c233",
    "wiki":"Nightwing"
  },
  {
    "name":"Huntress",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c234",
    "wiki":"Huntress"
  },
  {
    "name":"Mary Marvel",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c235",
    "wiki":"Mary Marvel"
  },
  {
    "name":"Big Barda",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c236",
    "wiki":"Big Barda"
  },
  {
    "name":"Black Alice",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c237",
    "wiki":"Black Alice"
  },
  {
    "name":"Poison Ivy",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c238",
    "wiki":"Poison Ivy"
  },
  {
    "name":"Harley Quinn",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c239",
    "wiki":"Harley Quinn"
  },
  {
    "name":"Amanda Waller",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c240",
    "wiki":"Amanda Waller"
  },
  {
    "name":"Talia al Ghul",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c241",
    "wiki":"Talia al Ghul"
  },
  {
    "name":"Valkyrie",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c242",
    "wiki":"Valkyrie"
  },
  {
    "name":"Sif",
    "universe":"Marvel",
    "media":"Films",
    "id":"c243",
    "wiki":"Sif"
  },
  {
    "name":"Shanna the She-Devil",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c244",
    "wiki":"Shanna the She-Devil"
  },
  {
    "name":"Medusa",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c245",
    "wiki":"Medusa"
  },
  {
    "name":"Crystal",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c246",
    "wiki":"Crystal"
  },
  {
    "name":"Mantis",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c247",
    "wiki":"Mantis"
  },
  {
    "name":"Nebula",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c248",
    "wiki":"Nebula"
  },
  {
    "name":"Gamora",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c249",
    "wiki":"Gamora"
  },
  {
    "name":"Dani Moonstar",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c250",
    "wiki":"Dani Moonstar"
  },
  {
    "name":"Armor",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c251",
    "wiki":"Armor"
  },
  {
    "name":"Gwenpool",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c252",
    "wiki":"Gwenpool"
  },
  {
    "name":"Spider-Gwen",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c253",
    "wiki":"Spider-Gwen"
  },
  {
    "name":"Miles Morales",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c254",
    "wiki":"Miles Morales"
  },
  {
    "name":"Sam Wilson",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c255",
    "wiki":"Sam Wilson"
  },
  {
    "name":"Bucky Barnes",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c256",
    "wiki":"Bucky Barnes"
  },
  {
    "name":"Luke Cage",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c257",
    "wiki":"Luke Cage"
  },
  {
    "name":"Iron Fist",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c258",
    "wiki":"Iron Fist"
  },
  {
    "name":"Moon Knight",
    "universe":"Marvel",
    "media":"Comics/Séries",
    "id":"c259",
    "wiki":"Moon Knight"
  },
  {
    "name":"Nova",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c260",
    "wiki":"Nova"
  },
  {
    "name":"Blue Beetle",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c261",
    "wiki":"Blue Beetle"
  },
  {
    "name":"Booster Gold",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c262",
    "wiki":"Booster Gold"
  },
  {
    "name":"Mister Miracle",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c263",
    "wiki":"Mister Miracle"
  },
  {
    "name":"Plastic Man",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c264",
    "wiki":"Plastic Man"
  },
  {
    "name":"Animal Man",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c265",
    "wiki":"Animal Man"
  },
  {
    "name":"Mister Terrific",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c266",
    "wiki":"Mister Terrific"
  },
  {
    "name":"Green Arrow",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c267",
    "wiki":"Green Arrow"
  },
  {
    "name":"Atom",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c268",
    "wiki":"Atom"
  },
  {
    "name":"Cyborg",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c269",
    "wiki":"Cyborg"
  },
  {
    "name":"Martian Manhunter",
    "universe":"DC Comics",
    "media":"Comics",
    "id":"c270",
    "wiki":"Martian Manhunter"
  },
  {
    "name":"Jane Eyre",
    "universe":"Jane Eyre",
    "media":"Romans / Littérature",
    "id":"c271",
    "wiki":"Jane Eyre"
  },
  {
    "name":"Elizabeth Bennet",
    "universe":"Orgueil et Préjugés",
    "media":"Romans / Littérature",
    "id":"c272",
    "wiki":"Elizabeth Bennet"
  },
  {
    "name":"Jo March",
    "universe":"Les Quatre Filles du docteur March",
    "media":"Romans / Littérature",
    "id":"c273",
    "wiki":"Jo March"
  },
  {
    "name":"Anne Shirley",
    "universe":"Anne... la maison aux pignons verts",
    "media":"Romans / Littérature",
    "id":"c274",
    "wiki":"Anne Shirley"
  },
  {
    "name":"Heathcliff",
    "universe":"Les Hauts de Hurlevent",
    "media":"Romans / Littérature",
    "id":"c275",
    "wiki":"Heathcliff"
  },
  {
    "name":"Estella Havisham",
    "universe":"De grandes espérances",
    "media":"Romans / Littérature",
    "id":"c276",
    "wiki":"Estella Havisham"
  },
  {
    "name":"Pip",
    "universe":"De grandes espérances",
    "media":"Romans / Littérature",
    "id":"c277",
    "wiki":"Pip"
  },
  {
    "name":"Jean Valjean",
    "universe":"Les Misérables",
    "media":"Romans / Littérature",
    "id":"c278",
    "wiki":"Jean Valjean"
  },
  {
    "name":"Javert",
    "universe":"Les Misérables",
    "media":"Romans / Littérature",
    "id":"c279",
    "wiki":"Javert"
  },
  {
    "name":"Cosette",
    "universe":"Les Misérables",
    "media":"Romans / Littérature",
    "id":"c280",
    "wiki":"Cosette"
  },
  {
    "name":"Marius Pontmercy",
    "universe":"Les Misérables",
    "media":"Romans / Littérature",
    "id":"c281",
    "wiki":"Marius Pontmercy"
  },
  {
    "name":"Haydée",
    "universe":"Le Comte de Monte-Cristo",
    "media":"Romans / Littérature",
    "id":"c282",
    "wiki":"Haydée"
  },
  {
    "name":"Mercedes",
    "universe":"Le Comte de Monte-Cristo",
    "media":"Romans / Littérature",
    "id":"c283",
    "wiki":"Mercedes"
  },
  {
    "name":"Hester Prynne",
    "universe":"La Lettre écarlate",
    "media":"Romans / Littérature",
    "id":"c284",
    "wiki":"Hester Prynne"
  },
  {
    "name":"Atticus Finch",
    "universe":"Ne tirez pas sur l'oiseau moqueur",
    "media":"Romans / Littérature",
    "id":"c285",
    "wiki":"Atticus Finch"
  },
  {
    "name":"Scout Finch",
    "universe":"Ne tirez pas sur l'oiseau moqueur",
    "media":"Romans / Littérature",
    "id":"c286",
    "wiki":"Scout Finch"
  },
  {
    "name":"Holden Caulfield",
    "universe":"L'Attrape-cœurs",
    "media":"Romans / Littérature",
    "id":"c287",
    "wiki":"Holden Caulfield"
  },
  {
    "name":"Esther Greenwood",
    "universe":"La Cloche de détresse",
    "media":"Romans / Littérature",
    "id":"c288",
    "wiki":"Esther Greenwood"
  },
  {
    "name":"Offred",
    "universe":"La Servante écarlate",
    "media":"Romans / Littérature",
    "id":"c289",
    "wiki":"Offred"
  },
  {
    "name":"Lyra Belacqua",
    "universe":"À la croisée des mondes",
    "media":"Romans / Littérature",
    "id":"c290",
    "wiki":"Lyra Belacqua"
  },
  {
    "name":"Will Parry",
    "universe":"À la croisée des mondes",
    "media":"Romans / Littérature",
    "id":"c291",
    "wiki":"Will Parry"
  },
  {
    "name":"Mrs Coulter",
    "universe":"À la croisée des mondes",
    "media":"Romans / Littérature",
    "id":"c292",
    "wiki":"Mrs Coulter"
  },
  {
    "name":"Serafina Pekkala",
    "universe":"À la croisée des mondes",
    "media":"Romans / Littérature",
    "id":"c293",
    "wiki":"Serafina Pekkala"
  },
  {
    "name":"Tenar",
    "universe":"Terremer",
    "media":"Romans / Littérature",
    "id":"c294",
    "wiki":"Tenar"
  },
  {
    "name":"Therru",
    "universe":"Terremer",
    "media":"Romans / Littérature",
    "id":"c295",
    "wiki":"Therru"
  },
  {
    "name":"Denna",
    "universe":"Chronique du tueur de roi",
    "media":"Romans / Littérature",
    "id":"c296",
    "wiki":"Denna"
  },
  {
    "name":"Eddard Stark",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c297",
    "wiki":"Eddard Stark"
  },
  {
    "name":"Catelyn Stark",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c298",
    "wiki":"Catelyn Stark"
  },
  {
    "name":"Robb Stark",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c299",
    "wiki":"Robb Stark"
  },
  {
    "name":"Bran Stark",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c300",
    "wiki":"Bran Stark"
  },
  {
    "name":"Theon Greyjoy",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c301",
    "wiki":"Theon Greyjoy"
  },
  {
    "name":"Davos Seaworth",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c302",
    "wiki":"Davos Seaworth"
  },
  {
    "name":"Brienne of Tarth",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c303",
    "wiki":"Brienne of Tarth"
  },
  {
    "name":"Mance Rayder",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c304",
    "wiki":"Mance Rayder"
  },
  {
    "name":"Oberyn Martell",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c305",
    "wiki":"Oberyn Martell"
  },
  {
    "name":"Doran Martell",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c306",
    "wiki":"Doran Martell"
  },
  {
    "name":"Ellaria Sand",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c307",
    "wiki":"Ellaria Sand"
  },
  {
    "name":"Syrio Forel",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c308",
    "wiki":"Syrio Forel"
  },
  {
    "name":"Jaqen H'ghar",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c309",
    "wiki":"Jaqen H'ghar"
  },
  {
    "name":"Samwell Tarly",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c310",
    "wiki":"Samwell Tarly"
  },
  {
    "name":"Gilly",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c311",
    "wiki":"Gilly"
  },
  {
    "name":"Sansa Stark",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c312",
    "wiki":"Sansa Stark"
  },
  {
    "name":"Tyrion Lannister",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c313",
    "wiki":"Tyrion Lannister"
  },
  {
    "name":"Varys",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c314",
    "wiki":"Varys"
  },
  {
    "name":"Littlefinger",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c315",
    "wiki":"Littlefinger"
  },
  {
    "name":"Gregor Clegane",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c316",
    "wiki":"Gregor Clegane"
  },
  {
    "name":"Ramsay Bolton",
    "universe":"Game of Thrones",
    "media":"Séries",
    "id":"c317",
    "wiki":"Ramsay Bolton"
  },
  {
    "name":"Phedre nó Delaunay",
    "universe":"Kushiel",
    "media":"Romans / Littérature",
    "id":"c318",
    "wiki":"Phedre nó Delaunay"
  },
  {
    "name":"Imriel de la Courcel",
    "universe":"Kushiel",
    "media":"Romans / Littérature",
    "id":"c319",
    "wiki":"Imriel de la Courcel"
  },
  {
    "name":"Kell Maresh",
    "universe":"Shades of Magic",
    "media":"Romans / Littérature",
    "id":"c320",
    "wiki":"Kell Maresh"
  },
  {
    "name":"Shego",
    "universe":"Kim Possible",
    "media":"Dessin animé / Animation",
    "id":"c321",
    "wiki":"Shego"
  },
  {
    "name":"Toph Beifong",
    "universe":"Avatar : Le Dernier Maître de l'Air",
    "media":"Dessin animé / Animation",
    "id":"c322",
    "wiki":"Toph Beifong"
  },
  {
    "name":"Princess Bubblegum",
    "universe":"Adventure Time",
    "media":"Dessin animé / Animation",
    "id":"c323",
    "wiki":"Princess Bubblegum"
  },
  {
    "name":"Garnet",
    "universe":"Steven Universe",
    "media":"Dessin animé / Animation",
    "id":"c324",
    "wiki":"Garnet"
  },
  {
    "name":"Adora",
    "universe":"She-Ra",
    "media":"Dessin animé / Animation",
    "id":"c325",
    "wiki":"Adora"
  },
  {
    "name":"Catra",
    "universe":"She-Ra",
    "media":"Dessin animé / Animation",
    "id":"c326",
    "wiki":"Catra"
  },
  {
    "name":"Velma Dinkley",
    "universe":"Scooby-Doo",
    "media":"Dessin animé / Animation",
    "id":"c327",
    "wiki":"Velma Dinkley"
  },
  {
    "name":"Daphne Blake",
    "universe":"Scooby-Doo",
    "media":"Dessin animé / Animation",
    "id":"c328",
    "wiki":"Daphne Blake"
  },
  {
    "name":"Amy Wong",
    "universe":"Futurama",
    "media":"Dessin animé / Animation",
    "id":"c329",
    "wiki":"Amy Wong"
  },
  {
    "name":"Leela",
    "universe":"Futurama",
    "media":"Dessin animé / Animation",
    "id":"c330",
    "wiki":"Leela"
  },
  {
    "name":"Bender",
    "universe":"Futurama",
    "media":"Dessin animé / Animation",
    "id":"c331",
    "wiki":"Bender"
  },
  {
    "name":"Finn",
    "universe":"Adventure Time",
    "media":"Dessin animé / Animation",
    "id":"c332",
    "wiki":"Finn"
  },
  {
    "name":"Jake",
    "universe":"Adventure Time",
    "media":"Dessin animé / Animation",
    "id":"c333",
    "wiki":"Jake"
  },
  {
    "name":"Him",
    "universe":"Les Supers Nanas",
    "media":"Dessin animé / Animation",
    "id":"c334",
    "wiki":"Him"
  },
  {
    "name":"Blossom",
    "universe":"Les Supers Nanas",
    "media":"Dessin animé / Animation",
    "id":"c335",
    "wiki":"Blossom"
  },
  {
    "name":"Bubbles",
    "universe":"Les Supers Nanas",
    "media":"Dessin animé / Animation",
    "id":"c336",
    "wiki":"Bubbles"
  },
  {
    "name":"Buttercup",
    "universe":"Les Supers Nanas",
    "media":"Dessin animé / Animation",
    "id":"c337",
    "wiki":"Buttercup"
  },
  {
    "name":"Terra",
    "universe":"Teen Titans",
    "media":"Dessin animé / Animation",
    "id":"c338",
    "wiki":"Terra"
  },
  {
    "name":"Jinx",
    "universe":"Teen Titans",
    "media":"Dessin animé / Animation",
    "id":"c339",
    "wiki":"Jinx"
  },
  {
    "name":"Ron Stoppable",
    "universe":"Kim Possible",
    "media":"Dessin animé / Animation",
    "id":"c340",
    "wiki":"Ron Stoppable"
  },
  {
    "name":"Maggie Simpson",
    "universe":"Les Simpson",
    "media":"Dessin animé / Animation",
    "id":"c341",
    "wiki":"Maggie Simpson"
  },
  {
    "name":"Milhouse Van Houten",
    "universe":"Les Simpson",
    "media":"Dessin animé / Animation",
    "id":"c342",
    "wiki":"Milhouse Van Houten"
  },
  {
    "name":"Bart Simpson",
    "universe":"Les Simpson",
    "media":"Dessin animé / Animation",
    "id":"c343",
    "wiki":"Bart Simpson"
  },
  {
    "name":"Ned Flanders",
    "universe":"Les Simpson",
    "media":"Dessin animé / Animation",
    "id":"c344",
    "wiki":"Ned Flanders"
  },
  {
    "name":"Louise Belcher",
    "universe":"Bob's Burgers",
    "media":"Dessin animé / Animation",
    "id":"c345",
    "wiki":"Louise Belcher"
  },
  {
    "name":"Tina Belcher",
    "universe":"Bob's Burgers",
    "media":"Dessin animé / Animation",
    "id":"c346",
    "wiki":"Tina Belcher"
  },
  {
    "name":"Linda Belcher",
    "universe":"Bob's Burgers",
    "media":"Dessin animé / Animation",
    "id":"c347",
    "wiki":"Linda Belcher"
  },
  {
    "name":"Bob Belcher",
    "universe":"Bob's Burgers",
    "media":"Dessin animé / Animation",
    "id":"c348",
    "wiki":"Bob Belcher"
  },
  {
    "name":"Gene Belcher",
    "universe":"Bob's Burgers",
    "media":"Dessin animé / Animation",
    "id":"c349",
    "wiki":"Gene Belcher"
  },
  {
    "name":"Dipper Pines",
    "universe":"Gravity Falls",
    "media":"Dessin animé / Animation",
    "id":"c350",
    "wiki":"Dipper Pines"
  },
  {
    "name":"Mordecai",
    "universe":"Regular Show",
    "media":"Dessin animé / Animation",
    "id":"c351",
    "wiki":"Mordecai"
  },
  {
    "name":"Rigby",
    "universe":"Regular Show",
    "media":"Dessin animé / Animation",
    "id":"c352",
    "wiki":"Rigby"
  },
  {
    "name":"Benson",
    "universe":"Regular Show",
    "media":"Dessin animé / Animation",
    "id":"c353",
    "wiki":"Benson"
  },
  {
    "name":"Samurai Jack",
    "universe":"Samurai Jack",
    "media":"Dessin animé / Animation",
    "id":"c354",
    "wiki":"Samurai Jack"
  },
  {
    "name":"Amethyst",
    "universe":"Steven Universe",
    "media":"Dessin animé / Animation",
    "id":"c355",
    "wiki":"Amethyst"
  },
  {
    "name":"Lapis Lazuli",
    "universe":"Steven Universe",
    "media":"Dessin animé / Animation",
    "id":"c356",
    "wiki":"Lapis Lazuli"
  },
  {
    "name":"Peridot",
    "universe":"Steven Universe",
    "media":"Dessin animé / Animation",
    "id":"c357",
    "wiki":"Peridot"
  },
  {
    "name":"Hilda",
    "universe":"Hilda",
    "media":"Dessin animé / Animation",
    "id":"c358",
    "wiki":"Hilda"
  },
  {
    "name":"Frida",
    "universe":"Hilda",
    "media":"Dessin animé / Animation",
    "id":"c359",
    "wiki":"Frida"
  },
  {
    "name":"David",
    "universe":"Hilda",
    "media":"Dessin animé / Animation",
    "id":"c360",
    "wiki":"David"
  },
  {
    "name":"Milo Murphy",
    "universe":"Milo Murphy's Law",
    "media":"Dessin animé / Animation",
    "id":"c361",
    "wiki":"Milo Murphy"
  },
  {
    "name":"Wander",
    "universe":"Wander Over Yonder",
    "media":"Dessin animé / Animation",
    "id":"c362",
    "wiki":"Wander"
  },
  {
    "name":"Lord Hater",
    "universe":"Wander Over Yonder",
    "media":"Dessin animé / Animation",
    "id":"c363",
    "wiki":"Lord Hater"
  },
  {
    "name":"Kipo Oak",
    "universe":"Kipo and the Age of Wonderbeasts",
    "media":"Dessin animé / Animation",
    "id":"c364",
    "wiki":"Kipo Oak"
  },
  {
    "name":"Entrapta",
    "universe":"She-Ra",
    "media":"Dessin animé / Animation",
    "id":"c365",
    "wiki":"Entrapta"
  },
  {
    "name":"Scorpia",
    "universe":"She-Ra",
    "media":"Dessin animé / Animation",
    "id":"c366",
    "wiki":"Scorpia"
  },
  {
    "name":"Hordak",
    "universe":"She-Ra",
    "media":"Dessin animé / Animation",
    "id":"c367",
    "wiki":"Hordak"
  },
  {
    "name":"Sasha Waybright",
    "universe":"Amphibia",
    "media":"Dessin animé / Animation",
    "id":"c368",
    "wiki":"Sasha Waybright"
  },
  {
    "name":"Marcy Wu",
    "universe":"Amphibia",
    "media":"Dessin animé / Animation",
    "id":"c369",
    "wiki":"Marcy Wu"
  },
  {
    "name":"Anne Boonchuy",
    "universe":"Amphibia",
    "media":"Dessin animé / Animation",
    "id":"c370",
    "wiki":"Anne Boonchuy"
  },
  {
    "name":"King",
    "universe":"The Owl House",
    "media":"Dessin animé / Animation",
    "id":"c371",
    "wiki":"King"
  },
  {
    "name":"Luz Noceda",
    "universe":"The Owl House",
    "media":"Dessin animé / Animation",
    "id":"c372",
    "wiki":"Luz Noceda"
  },
  {
    "name":"Amity Blight",
    "universe":"The Owl House",
    "media":"Dessin animé / Animation",
    "id":"c373",
    "wiki":"Amity Blight"
  },
  {
    "name":"Willow Park",
    "universe":"The Owl House",
    "media":"Dessin animé / Animation",
    "id":"c374",
    "wiki":"Willow Park"
  },
  {
    "name":"Hunter",
    "universe":"The Owl House",
    "media":"Dessin animé / Animation",
    "id":"c375",
    "wiki":"Hunter"
  },
  {
    "name":"Molly McGee",
    "universe":"The Ghost and Molly McGee",
    "media":"Dessin animé / Animation",
    "id":"c376",
    "wiki":"Molly McGee"
  },
  {
    "name":"Furiosa",
    "universe":"Mad Max",
    "media":"Films",
    "id":"c377",
    "wiki":"Furiosa"
  },

  {
    "name": "Evelyn Wang",
    "universe": "Everything Everywhere All at Once",
    "media": "Films",
    "id": "c378",
    "wiki": "Evelyn Wang"
  },
  {
    "name": "Max Rockatansky",
    "universe": "Mad Max",
    "media": "Films",
    "id": "c379",
    "wiki": "Max Rockatansky"
  },
  {
    "name": "Jules Winnfield",
    "universe": "Pulp Fiction",
    "media": "Films",
    "id": "c380",
    "wiki": "Jules Winnfield"
  },
  {
    "name": "Clarice Starling",
    "universe": "Le Silence des agneaux",
    "media": "Films",
    "id": "c381",
    "wiki": "Clarice Starling"
  },
  {
    "name": "Tyler Durden",
    "universe": "Fight Club",
    "media": "Films",
    "id": "c382",
    "wiki": "Tyler Durden"
  },
  {
    "name": "Driss",
    "universe": "Intouchables",
    "media": "Films",
    "id": "c383",
    "wiki": "Driss"
  },
  {
    "name": "Carmy Berzatto",
    "universe": "The Bear",
    "media": "Séries",
    "id": "c384",
    "wiki": "Carmy Berzatto"
  },
  {
    "name": "Rue Bennett",
    "universe": "Euphoria",
    "media": "Séries",
    "id": "c385",
    "wiki": "Rue Bennett"
  },
  {
    "name": "Kendall Roy",
    "universe": "Succession",
    "media": "Séries",
    "id": "c386",
    "wiki": "Kendall Roy"
  },
  {
    "name": "Mariko Toda",
    "universe": "Shōgun",
    "media": "Séries",
    "id": "c387",
    "wiki": "Mariko Toda"
  },
  {
    "name": "Fleabag",
    "universe": "Fleabag",
    "media": "Séries",
    "id": "c388",
    "wiki": "Fleabag"
  },
  {
    "name": "Denji",
    "universe": "Chainsaw Man",
    "media": "Manga / Anime",
    "id": "c389",
    "wiki": "Denji"
  },
  {
    "name": "Power",
    "universe": "Chainsaw Man",
    "media": "Manga / Anime",
    "id": "c390",
    "wiki": "Power"
  },
  {
    "name": "Asuka Langley Soryu",
    "universe": "Neon Genesis Evangelion",
    "media": "Manga / Anime",
    "id": "c391",
    "wiki": "Asuka Langley Soryu"
  },
  {
    "name": "Shinji Ikari",
    "universe": "Neon Genesis Evangelion",
    "media": "Manga / Anime",
    "id": "c392",
    "wiki": "Shinji Ikari"
  },
  {
    "name": "Thorfinn",
    "universe": "Vinland Saga",
    "media": "Manga / Anime",
    "id": "c393",
    "wiki": "Thorfinn"
  },
  {
    "name": "Winston Smith",
    "universe": "1984",
    "media": "Romans / Littérature",
    "id": "c394",
    "wiki": "Winston Smith"
  },
  {
    "name": "Anna Karénine",
    "universe": "Anna Karénine",
    "media": "Romans / Littérature",
    "id": "c395",
    "wiki": "Anna Karénine"
  },
  {
    "name": "Meursault",
    "universe": "L’Étranger",
    "media": "Romans / Littérature",
    "id": "c396",
    "wiki": "Meursault"
  },
  {
    "name": "Storm",
    "universe": "Marvel Comics",
    "media": "Comics",
    "id": "c397",
    "wiki": "Storm"
  },
  {
    "name": "Zatanna Zatara",
    "universe": "DC Comics",
    "media": "Comics",
    "id": "c398",
    "wiki": "Zatanna Zatara"
  },
  {
    "name": "Mister Sinister",
    "universe": "Marvel Comics",
    "media": "Comics",
    "id": "c399",
    "wiki": "Mister Sinister"
  },
  {
    "name": "Nimona",
    "universe": "Nimona",
    "media": "Dessin animé / Animation",
    "id": "c400",
    "wiki": "Nimona"
  },
   {
    "name":"Joker",
    "universe":"DC",
    "media":"Films",
    "id":"c401",
    "wiki":"Joker"
  },
  {
    "name":"Thanos",
    "universe":"Marvel",
    "media":"Films",
    "id":"c402",
    "wiki":"Thanos"
  },
  {
    "name":"Ultron",
    "universe":"Marvel",
    "media":"Films",
    "id":"c403",
    "wiki":"Ultron"
  },
  {
    "name":"Voldemort",
    "universe":"Harry Potter",
    "media":"Films",
    "id":"c404",
    "wiki":"Voldemort"
  },
  {
    "name":"Scar",
    "universe":"Le Roi Lion",
    "media":"Films",
    "id":"c405",
    "wiki":"Scar"
  },
  {
    "name":"Sukuna",
    "universe":"Jujutsu Kaisen",
    "media":"Anime",
    "id":"c406",
    "wiki":"Ryomen Sukuna"
  },
  {
    "name":"Sauron",
    "universe":"Le Seigneur des Anneaux",
    "media":"Films",
    "id":"c407",
    "wiki":"Sauron"
  },
  {
    "name":"Dark Vador",
    "universe":"Star Wars",
    "media":"Films",
    "id":"c408",
    "wiki":"Dark Vador"
  },
  {
    "name":"Green Goblin",
    "universe":"Marvel",
    "media":"Films",
    "id":"c409",
    "wiki":"Green Goblin"
  },
  {
    "name":"Pennywise",
    "universe":"Ça",
    "media":"Films",
    "id":"c410",
    "wiki":"Pennywise"
  },
  {
    "name":"Dr. Eggman",
    "universe":"Sonic",
    "media":"Jeux vidéo",
    "id":"c411",
    "wiki":"Dr. Eggman"
  },
  {
    "name":"Bowser",
    "universe":"Mario",
    "media":"Jeux vidéo",
    "id":"c412",
    "wiki":"Bowser"
  },
  {
    "name":"Mysterio",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c413",
    "wiki":"Mysterio"
  },
  {
    "name":"Freezer",
    "universe":"Dragon Ball",
    "media":"Anime",
    "id":"c414",
    "wiki":"Freezer"
  },
  {
    "name":"Doctor Doom",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c415",
    "wiki":"Doctor Doom"
  },
  {
    "name":"The Lich",
    "universe":"Adventure Time",
    "media":"Animation",
    "id":"c416",
    "wiki":"The Lich"
  },
  {
    "name":"Superman",
    "universe":"DC",
    "media":"Comics",
    "id":"c417",
    "wiki":"Superman"
  },
  {
    "name":"Batman",
    "universe":"DC Comics",
    "media":"Films",
    "id":"c418",
    "wiki":"Batman"
  },
  {
    "name":"Wonder Woman",
    "universe":"DC Comics",
    "media":"Films",
    "id":"c419",
    "wiki":"Wonder Woman"
  },
  {
    "name":"Spider-Man",
    "universe":"Marvel",
    "media":"Films",
    "id":"c420",
    "wiki":"Spider-Man"
  },
  {
    "name":"Iron Man",
    "universe":"Marvel",
    "media":"Films",
    "id":"c421",
    "wiki":"Iron Man"
  },
  {
    "name":"Captain America",
    "universe":"Marvel",
    "media":"Films",
    "id":"c422",
    "wiki":"Captain America"
  },
  {
    "name":"Thor",
    "universe":"Marvel",
    "media":"Films",
    "id":"c423",
    "wiki":"Thor"
  },
  {
    "name":"Hulk",
    "universe":"Marvel",
    "media":"Comics",
    "id":"c424",
    "wiki":"Hulk"
  },
  {
    "name":"Black Panther",
    "universe":"Marvel",
    "media":"Films",
    "id":"c425",
    "wiki":"Black Panther"
  },
  {
    "name":"Captain Marvel",
    "universe":"Marvel",
    "media":"Films",
    "id":"c426",
    "wiki":"Captain Marvel"
  },
  {
    "name":"Flash",
    "universe":"DC",
    "media":"Series",
    "id":"c427",
    "wiki":"Flash"
  },
  {
    "name":"Aquaman",
    "universe":"DC",
    "media": "Comics",
    "id":"c428",
    "wiki":"Aquaman"
  },
  {
    "name":"Green Lantern (Hal Jordan)",
    "universe":"DC",
    "media":"Comics",
    "id":"c429",
    "wiki":"Green Lantern"
  },
  {
    "name":"Goku",
    "universe":"Dragon Ball",
    "media":"Anime",
    "id":"c430",
    "wiki":"Son Goku"
  },
  {
    "name":"Naruto Uzumaki",
    "universe":"Naruto",
    "media":"Anime",
    "id":"c431",
    "wiki":"Naruto Uzumaki"
  },
  {
    "name":"Monkey D. Luffy",
    "universe":"One Piece",
    "media":"Anime",
    "id":"c432",
    "wiki":"Monkey D. Luffy"
  },
  {
    "name":"Link",
    "universe":"The Legend of Zelda",
    "media":"Jeux vidéo",
    "id":"c433",
    "wiki":"Link"
  },
  {
    "name":"Kratos",
    "universe":"God of War",
    "media":"Jeux vidéo",
    "id":"c434",
    "wiki":"Kratos"
  },
  {
    "name":"Sonic",
    "universe":"Sonic",
    "media":"Jeux vidéo",
    "id":"c435",
    "wiki":"Sonic the Hedgehog"
  },
  {
    "name":"Optimus Prime",
    "universe":"Transformers",
    "media":"Films",
    "id":"c436",
    "wiki":"Optimus Prime"
  },
  {
    "name": "Marsupilami",
    "universe": "Marsupilami",
    "media": "BD",
    "id": "c437",
    "wiki": "Marsupilami"
  },
  {
    "name": "Astérix",
    "universe": "Astérix",
    "media": "BD",
    "id": "c438",
    "wiki": "Asterix"
  },
  {
    "name": "Tintin",
    "universe": "Les Aventures de Tintin",
    "media": "BD",
    "id": "c439",
    "wiki": "Tintin"
  },
  {
    "name": "Lucky Luke",
    "universe": "Lucky Luke",
    "media": "BD",
    "id": "c440",
    "wiki": "Lucky Luke"
  },
  {
    "name": "Yusuke Urameshi",
    "universe": "Yu Yu Hakusho",
    "media": "Anime",
    "id": "c441",
    "wiki": "Yusuke Urameshi"
  },
  {
    "name": "Gon Freecss",
    "universe": "Hunter × Hunter",
    "media": "Manga",
    "id": "c442",
    "wiki": "Gon Freecss"
  },
  {
    "name": "Vash the Stampede",
    "universe": "Trigun",
    "media": "Manga",
    "id": "c443",
    "wiki": "Vash the Stampede"
  },
  {
    "name": "Spike Spiegel",
    "universe": "Cowboy Bebop",
    "media": "Anime",
    "id": "c444",
    "wiki": "Spike Spiegel"
  },
  {
    "name": "Seiya",
    "universe": "Saint Seiya",
    "media": "Anime",
    "id": "c445",
    "wiki": "Seiya"
  },
  {
  "name": "Edmond Dantès",
  "universe": "Le Comte de Monte-Cristo",
  "media": "Romans / Littérature/ Films",
  "id": "c446",
  "wiki": "Edmond Dantès"
},
{
  "name": "Dorian Gray",
  "universe": "Le Portrait de Dorian Gray",
  "media": "Romans / Littérature",
  "id": "c447",
  "wiki": "Dorian Gray"
},
{
  "name": "Jay Gatsby",
  "universe": "Gatsby le Magnifique",
  "media": "Romans / Littérature / Films",
  "id": "c448",
  "wiki": "Jay Gatsby"
},
{
  "name": "Geralt de Riv (Version Jeux vidéo)",
  "universe": "The Witcher",
  "media": "Jeux vidéo",
  "id": "c449",
  "wiki": "Geralt de Riv (Version Jeux vidéo)"
},
{
  "name": "Solid Snake",
  "universe": "Metal Gear",
  "media": "Jeux vidéo",
  "id": "c450",
  "wiki": "Solid Snake"
},
{
  "name": "Samus Aran",
  "universe": "Metroid",
  "media": "Jeux vidéo",
  "id": "c451",
  "wiki": "Samus Aran"
},
{
  "name": "Rocky Balboa",
  "universe": "Rocky",
  "media": "Films",
  "id": "c452",
  "wiki": "Rocky Balboa"
},
{
  "name": "Forrest Gump",
  "universe": "Forrest Gump",
  "media": "Films",
  "id": "c453",
  "wiki": "Forrest Gump"
},
{
  "name": "Ellen Ripley",
  "universe": "Alien",
  "media": "Films",
  "id": "c454",
  "wiki": "Ellen Ripley"
},
  {
  "name": "Flynn Carson",
  "universe": "The Librarians",
  "media": "Séries",
  "id": "c455",
  "wiki": "Flynn Carson"
},
{
  "name": "Eve Baird",
  "universe": "The Librarians",
  "media": "Séries",
  "id": "c456",
  "wiki": "Eve Baird"
},
{
  "name": "Mac Taylor",
  "universe": "Les Experts : Manhattan",
  "media": "Séries",
  "id": "c457",
  "wiki": "Mac Taylor"
},
{
  "name": "Horatio Caine",
  "universe": "Les Experts : Miami",
  "media": "Séries",
  "id": "c458",
  "wiki": "Horatio Caine"
},
{
  "name": "Sarah Williams",
  "universe": "Labyrinthe",
  "media": "Films",
  "id": "c459",
  "wiki": "Sarah Williams"
},
{
  "name": "Meliodas",
  "universe": "The Seven Deadly Sins",
  "media": "Anime",
  "id": "c460",
  "wiki": "Meliodas"
},
{
  "name": "Emma Swan",
  "universe": "Once Upon a Time",
  "media": "Séries",
  "id": "c461",
  "wiki": "Emma Swan"
},
{
  "name": "Regina Mills",
  "universe": "Once Upon a Time",
  "media": "Séries",
  "id": "c462",
  "wiki": "Regina Mills"
},
{
  "name": "Rumplestiltskin",
  "universe": "Once Upon a Time",
  "media": "Séries",
  "id": "c463",
  "wiki": "Rumplestiltskin"
},
{
  "name": "Woody",
  "universe": "Toy Story",
  "media": "Films",
  "id": "c464",
  "wiki": "Woody"
},
{
  "name": "Buzz l'Éclair",
  "universe": "Toy Story",
  "media": "Films",
  "id": "c465",
  "wiki": "Buzz Lightyear"
},
{
  "name": "Negi Springfield",
  "universe": "Negima!",
  "media": "Manga",
  "id": "c466",
  "wiki": "Negi Springfield"
},
{
  "name": "Aragorn",
  "universe": "Le Seigneur des Anneaux",
  "media": "Films",
  "id": "c467",
  "wiki": "Aragorn"
},
{
  "name": "Legolas",
  "universe": "Le Seigneur des Anneaux",
  "media": "Films",
  "id": "c468",
  "wiki": "Legolas"
},
{
  "name": "Hermione Granger",
  "universe": "Harry Potter",
  "media": "Films",
  "id": "c469",
  "wiki": "Hermione Granger"
},
  {
  "name": "Thomas",
  "universe": "Le Labyrinthe",
  "media": "Films",
  "id": "c470",
  "wiki": "Thomas (Le Labyrinthe)"
},
{
  "name": "Teresa",
  "universe": "Le Labyrinthe",
  "media": "Films",
  "id": "c471",
  "wiki": "Teresa (Le Labyrinthe)"
},
{
  "name": "Neo",
  "universe": "Matrix",
  "media": "Films",
  "id": "c472",
  "wiki": "Neo"
},
{
  "name": "Trinity",
  "universe": "Matrix",
  "media": "Films",
  "id": "c473",
  "wiki": "Trinity"
},
{
  "name": "Damon Salvatore",
  "universe": "The Vampire Diaries",
  "media": "Séries",
  "id": "c474",
  "wiki": "Damon Salvatore"
},
{
  "name": "Jérémie Belpois",
  "universe": "Code Lyoko",
  "media": "Séries/Dessin Animé",
  "id": "c475",
  "wiki": "Jérémie Belpois"
},
{
  "name": "Sarah Connor",
  "universe": "Terminator",
  "media": "Films",
  "id": "c476",
  "wiki": "Sarah Connor"
},
{
  "name": "Le Petit Prince",
  "universe": "Le Petit Prince",
  "media": "Romans / Littérature",
  "id": "c477",
  "wiki": "Le Petit Prince"
},
{
  "name": "Mario",
  "universe": "Super Mario",
  "media": "Jeux vidéo",
  "id": "c478",
  "wiki": "Mario"
},
{
  "name": "Alice",
  "universe": "Resident Evil",
  "media": "Films",
  "id": "c479",
  "wiki": "Alice (Resident Evil)"
},
{
  "name": "Malcolm Reynolds",
  "universe": "Firefly",
  "media": "Séries",
  "id": "c480",
  "wiki": "Malcolm Reynolds"
},
{
  "name": "Elliot Alderson",
  "universe": "Mr. Robot",
  "media": "Séries",
  "id": "c481",
  "wiki": "Elliot Alderson"
},
{
  "name": "Walter Bishop",
  "universe": "Fringe",
  "media": "Séries",
  "id": "c482",
  "wiki": "Walter Bishop"
},
{
  "name": "Dexter Morgan",
  "universe": "Dexter",
  "media": "Séries",
  "id": "c483",
  "wiki": "Dexter Morgan"
},
{
  "name": "Lorne Malvo",
  "universe": "Fargo",
  "media": "Séries",
  "id": "c484",
  "wiki": "Lorne Malvo"
},
{
  "name": "Rustin Cohle",
  "universe": "True Detective",
  "media": "Séries",
  "id": "c485",
  "wiki": "Rustin Cohle"
},
{
  "name": "Anton Chigurh",
  "universe": "No Country for Old Men",
  "media": "Films",
  "id": "c486",
  "wiki": "Anton Chigurh"
},
{
  "name": "Ash Williams",
  "universe": "Evil Dead",
  "media": "Films",
  "id": "c487",
  "wiki": "Ash Williams"
},
{
  "name": "Sallah",
  "universe": "Indiana Jones",
  "media": "Films",
  "id": "c488",
  "wiki": "Sallah"
},
{
  "name": "Leon Kowalski",
  "universe": "Blade Runner",
  "media": "Films",
  "id": "c489",
  "wiki": "Leon Kowalski"
},
{
  "name": "Korben Dallas",
  "universe": "Le Cinquième Élément",
  "media": "Films",
  "id": "c490",
  "wiki": "Korben Dallas"
},
{
  "name": "Milo Thatch",
  "universe": "Atlantide, l'empire perdu",
  "media": "Films",
  "id": "c491",
  "wiki": "Milo Thatch"
},
{
  "name": "Frank Martin",
  "universe": "Le Transporteur",
  "media": "Films",
  "id": "c492",
  "wiki": "Frank Martin"
},
{
  "name": "Riddick",
  "universe": "Les Chroniques de Riddick",
  "media": "Films",
  "id": "c493",
  "wiki": "Richard B. Riddick"
},
{
  "name": "Saul Goodman",
  "universe": "Better Call Saul",
  "media": "Séries",
  "id": "c494",
  "wiki": "Saul Goodman"
},
{
  "name": "Raymond Reddington",
  "universe": "The Blacklist",
  "media": "Séries",
  "id": "c495",
  "wiki": "Raymond Reddington"
},
{
  "name": "Alaric Saltzman",
  "universe": "The Vampire Diaries",
  "media": "Séries",
  "id": "c496",
  "wiki": "Alaric Saltzman"
},
{
  "name": "Reigen Arataka",
  "universe": "Mob Psycho 100",
  "media": "Anime",
  "id": "c497",
  "wiki": "Reigen Arataka"
},
{
  "name": "Guts",
  "universe": "Berserk",
  "media": "Manga",
  "id": "c498",
  "wiki": "Guts"
},
{
  "name": "Lelouch Lamperouge",
  "universe": "Code Geass",
  "media": "Anime",
  "id": "c499",
  "wiki": "Lelouch Lamperouge"
},
{
  "name": "Ezio Auditore",
  "universe": "Assassin's Creed",
  "media": "Jeux vidéo",
  "id": "c500",
  "wiki": "Ezio Auditore"
},
{
  "name": "Daisy Johnson (Quake)",
  "universe": "Marvel",
  "media": "Séries",
  "id": "c501",
  "wiki": "Daisy Johnson"
},
{
  "name": "Lt Roberta Warren",
  "universe": "Z Nation",
  "media": "Séries",
  "id": "c502",
  "wiki": "Roberta Warren"
},
{
  "name": "Lucifer Morningstar",
  "universe": "Lucifer",
  "media": "Séries",
  "id": "c503",
  "wiki": "Lucifer Morningstar"
},
{
  "name": "Deadpool",
  "universe": "Marvel",
  "media": "Films/Cimics",
  "id": "c504",
  "wiki": "Deadpool"
},
{
  "name": "Katsuki Bakugo",
  "universe": "My Hero Academia",
  "media": "Anime/Manga",
  "id": "c505",
  "wiki": "Katsuki Bakugo"
},
{
  "name": "Scarlet Witch",
  "universe": "Marvel",
  "media": "Films/Comics",
  "id": "c506",
  "wiki": "Wanda Maximoff"
},
{
  "name": "Joshua J Cody",
  "universe": "Animal Kingdom",
  "media": "Séries",
  "id": "c507",
  "wiki": "Joshua Cody"
},
{
  "name": "Rick Grimes",
  "universe": "The Walking Dead",
  "media": "Séries",
  "id": "c508",
  "wiki": "Rick Grimes"
},
{
  "name": "Dream (Rêve)",
  "universe": "The Sandman",
  "media": "Séries",
  "id": "c509",
  "wiki": "Dream (The Sandman)"
},
{
  "name": "Jesse Custer",
  "universe": "Preacher",
  "media": "Séries",
  "id": "c510",
  "wiki": "Jesse Custer"
},
{
  "name": "Bob l'Éponge",
  "universe": "Bob l'Éponge",
  "media": "Dessin Animé/Animation",
  "id": "c511",
  "wiki": "Bob l'Éponge"
},
{
  "name": "Edward Cullen",
  "universe": "Twilight",
  "media": "Films",
  "id": "c512",
  "wiki": "Edward Cullen"
},
{
  "name": "Timmy Turner",
  "universe": "Mes parrains sont magiques",
  "media": "Dessin Animé/Animation",
  "id": "c513",
  "wiki": "Timmy Turner"
},
{
  "name": "Bugs Bunny",
  "universe": "Looney Tunes",
  "media": "Dessin Animé/Animation",
  "id": "c514",
  "wiki": "Bugs Bunny"
},
{
  "name": "Stuart Little",
  "universe": "Stuart Little",
  "media": "Films",
  "id": "c515",
  "wiki": "Stuart Little"
},
{
  "name": "The Mask",
  "universe": "The Mask",
  "media": "Films",
  "id": "c516",
  "wiki": "The Mask"
},
{
  "name": "Indiana Jones",
  "universe": "Indiana Jones",
  "media": "Films",
  "id": "c517",
  "wiki": "Indiana Jones"
},
{
  "name": "T-800",
  "universe": "Terminator",
  "media": "Films",
  "id": "c518",
  "wiki": "T-800"
},
{
  "name": "Katniss Everdeen",
  "universe": "Hunger Games",
  "media": "Films",
  "id": "c519",
  "wiki": "Katniss Everdeen"
},
{
  "name": "Homer Simpson",
  "universe": "Les Simpson",
  "media": "Séries/Animation",
  "id": "c520",
  "wiki": "Homer Simpson"
},
{
  "name": "Blanche-Neige",
  "universe": "Blanche-Neige et les Sept Nains",
  "media": "Films/Animation",
  "id": "c521",
  "wiki": "Blanche-Neige"
},
{
  "name": "Luke Skywalker",
  "universe": "Star Wars",
  "media": "Films",
  "id": "c522",
  "wiki": "Luke Skywalker"
},
{
  "name": "Sacha du Bourg-Palette",
  "universe": "Pokémon",
  "media": "Dessin Animé/Animation",
  "id": "c523",
  "wiki": "Sacha (Pokémon)"
},
{
  "name": "Pete Lattimer",
  "universe": "Warehouse 13",
  "media": "Séries",
  "id": "c524",
  "wiki": "Pete Lattimer"
},
{
  "name": "Annalise Keating",
  "universe": "How to Get Away with Murder",
  "media": "Séries",
  "id": "c525",
  "wiki": "Annalise Keating"
},
{
  "name": "Hellboy",
  "universe": "Hellboy",
  "media": "Films/Comics",
  "id": "c526",
  "wiki": "Hellboy"
},
{
  "name": "Vlad Tepes (Comte Dracula)",
  "universe": "Dracula",
  "media": "Romans/Littérature",
  "id": "c527",
  "wiki": "Comte Dracula"
},
{
  "name": "Shaka",
  "universe": "Saint Seiya",
  "media": "Manga/Anime",
  "id": "c528",
  "wiki": "Shaka de la Vierge"
},
{
  "name": "Jacquouille la Fripouille",
  "universe": "Les Visiteurs",
  "media": "Films",
  "id": "c529",
  "wiki": "Jacquouille la Fripouille"
},
{
  "name": "Rasputia Latimore-Rice",
  "universe": "Norbit",
  "media": "Films",
  "id": "c530",
  "wiki": "Raspoutia"
},
{
  "name": "Jessica Jones",
  "universe": "Marvel",
  "media": "Séries/Comics",
  "id": "c531",
  "wiki": "Jessica Jones"
},
{
  "name": "Aslan",
  "universe": "Le Monde de Narnia",
  "media": "Films",
  "id": "c532",
  "wiki": "Aslan"
},
{
  "name": "Gandalf",
  "universe": "Le Seigneur des Anneaux",
  "media": "Films",
  "id": "c533",
  "wiki": "Gandalf"
},
{
  "name": "Doom Slayer",
  "universe": "Doom",
  "media": "Jeux vidéo",
  "id": "c534",
  "wiki": "Doom Slayer"
},
{
  "name": "Ender Wiggin",
  "universe": "La Stratégie Ender",
  "media": "Films",
  "id": "c535",
  "wiki": "Ender Wiggin"
},
{
  "name": "Leon",
  "universe": "Léon",
  "media": "Films",
  "id": "c536",
  "wiki": "Léon"
},
{
  "name": "Max Payne",
  "universe": "Max Payne",
  "media": "Jeux vidéo",
  "id": "c537",
  "wiki": "Max Payne"
},
{
  "name": "Dr Manhattan",
  "universe": "Watchmen",
  "media": "Comics/Films",
  "id": "c538",
  "wiki": "Dr Manhattan"
},
{
  "name": "Koro Sensei",
  "universe": "Assassination Classroom",
  "media": "Anime/Manga",
  "id": "c539",
  "wiki": "Koro-sensei"
},
{
  "name": "Buffy Summers",
  "universe": "Buffy contre les vampires",
  "media": "Séries",
  "id": "c540",
  "wiki": "Buffy Summers"
},
{
  "name": "V",
  "universe": "V pour Vendetta",
  "media": "Films",
  "id": "c541",
  "wiki": "V (V pour Vendetta)"
},
{
  "name": "Pinhead",
  "universe": "Hellraiser",
  "media": "Films",
  "id": "c542",
  "wiki": "Pinhead"
},
{
  "name": "Bill Cipher",
  "universe": "Gravity Falls",
  "media": "Dessin Animé",
  "id": "c543",
  "wiki": "Bill Cipher"
},
{
  "name": "Hawks",
  "universe": "My Hero Academia",
  "media": "Anime/Manga",
  "id": "c544",
  "wiki": "Hawks (My Hero Academia)"
},
{
  "name": "Tom Sawyer",
  "universe": "Tom Sawyer",
  "media": "Romans/Dessin Animé",
  "id": "c545",
  "wiki": "Tom Sawyer"
},
{
  "name": "Homelander (Protecteur)",
  "universe": "The Boys",
  "media": "Séries",
  "id": "c546",
  "wiki": "Homelander"
},
{
  "name": "Sung Jin-woo",
  "universe": "Solo Leveling",
  "media": "Manga",
  "id": "c547",
  "wiki": "Sung Jinwoo"
},
{
  "name": "Speedy (Thea Queen)",
  "universe": "Arrow",
  "media": "Séries",
  "id": "c548",
  "wiki": "Thea Queen"
},
{
  "name": "Chapelier Fou",
  "universe": "Alice au pays des merveilles",
  "media": "Films",
  "id": "c549",
  "wiki": "Chapelier Fou (Alice au pays des merveilles)"
},
{
  "name": "Chat du Cheshire",
  "universe": "Alice au pays des merveilles",
  "media": "Films",
  "id": "c550",
  "wiki": "Chat du Cheshire"
},
{
  "name": "Danny Ocean",
  "universe": "Ocean's",
  "media": "Films",
  "id": "c551",
  "wiki": "Danny Ocean"
},
{
  "name": "Ghost Rider (Johnny Blaze)",
  "universe": "Marvel",
  "media": "Films",
  "id": "c552",
  "wiki": "Ghost Rider (Johnny Blaze)"
},
{
  "name": "Fallon Carrington",
  "universe": "Dynastie",
  "media": "Séries",
  "id": "c553",
  "wiki": "Fallon Carrington"
},
{
  "name": "Leonardo",
  "universe": "Les Tortues Ninja",
  "media": "Séries/Comics",
  "id": "c554",
  "wiki": "Leonardo (Tortues Ninja)"
},
{
  "name": "Satanas",
  "universe": "Les Fous du volant",
  "media": "Dessin Animé",
  "id": "c555",
  "wiki": "Satanas (Les Fous du volant)"
},
{
  "name": "Panthère Rose",
  "universe": "La Panthère Rose",
  "media": "Dessin Animé",
  "id": "c556",
  "wiki": "Panthère Rose"
},
{
  "name": "Atomic Betty",
  "universe": "Atomic Betty",
  "media": "Dessin Animé",
  "id": "c557",
  "wiki": "Atomic Betty"
},
{
  "name": "Hélène Magnus",
  "universe": "Sanctuary",
  "media": "Séries",
  "id": "c558",
  "wiki": "Helen Magnus"
},
{
  "name": "Reinhard van Astrea",
  "universe": "Re:Zero",
  "media": "Anime/Manga",
  "id": "c559",
  "wiki": "Reinhard van Astrea"
},
{
  "name": "Bloom",
  "universe": "Winx Club",
  "media": "Dessin Animé",
  "id": "c560",
  "wiki": "Bloom (Winx Club)"
},
{
  "name": "Le Grinch",
  "universe": "Le Grinch",
  "media": "Films",
  "id": "c561",
  "wiki": "Grinch"
},
{
  "name": "Chat Chapeauté",
  "universe": "Le Chat chapeauté",
  "media": "Films",
  "id": "c562",
  "wiki": "Le Chat chapeauté"
},
{
  "name": "Jill Valentine",
  "universe": "Resident Evil",
  "media": "Jeux vidéo",
  "id": "c563",
  "wiki": "Jill Valentine"
},
{
  "name": "Albert Wesker",
  "universe": "Resident Evil",
  "media": "Jeux vidéo",
  "id": "c564",
  "wiki": "Albert Wesker"
},
{
  "name": "Quentin Coldwater",
  "universe": "The Magicians",
  "media": "Séries/Romans",
  "id": "c565",
  "wiki": "Quentin Coldwater"
},
{
  "name": "Spencer Reid",
  "universe": "Esprits criminels",
  "media": "Séries",
  "id": "c566",
  "wiki": "Spencer Reid"
},
{
  "name": "10K",
  "universe": "Z Nation",
  "media": "Séries",
  "id": "c567",
  "wiki": "10K (Z Nation)"
},
{
  "name": "Jack Reacher",
  "universe": "Reacher",
  "media": "Séries/Romans",
  "id": "c568",
  "wiki": "Jack Reacher"
},
{
  "name": "Yennefer de Vengerberg",
  "universe": "The Witcher",
  "media": "Séries/Jeux Vidéo/Romans",
  "id": "c569",
  "wiki": "Yennefer de Vengerberg"
},
{
  "name": "Percy Jackson",
  "universe": "Percy Jackson",
  "media": "Films/Romans",
  "id": "c570",
  "wiki": "Percy Jackson"
},
{
  "name": "John Constantine",
  "universe": "DC Comics",
  "media": "Comics/Sériés",
  "id": "c571",
  "wiki": "John Constantine"
},
{
  "name": "Thomas Shelby",
  "universe": "Peaky Blinders",
  "media": "Séries",
  "id": "c572",
  "wiki": "Thomas Shelby"
},
{
  "name": "Hannibal Lecter",
  "universe": "Le Silence des agneaux",
  "media": "Films",
  "id": "c573",
  "wiki": "Hannibal Lecter"
},
{
  "name": "Walter White",
  "universe": "Breaking Bad",
  "media": "Séries",
  "id": "c574",
  "wiki": "Walter White"
},
{
  "name": "Spike",
  "universe": "Buffy contre les vampires",
  "media": "Séries",
  "id": "c575",
  "wiki": "Spike (Buffy)"
},
{
  "name": "Arthas Menethil",
  "universe": "Warcraft",
  "media": "Jeux vidéo",
  "id": "c576",
  "wiki": "Arthas Menethil"
},
{
  "name": "Kakashi Hatake",
  "universe": "Naruto",
  "media": "Manga/Anime",
  "id": "c577",
  "wiki": "Kakashi Hatake"
},
{
  "name": "Jack Sparrow",
  "universe": "Pirates des Caraïbes",
  "media": "Films",
  "id": "c578",
  "wiki": "Jack Sparrow"
},
{
  "name": "Mercredi Addams",
  "universe": "La Famille Addams",
  "media": "Séries/Films",
  "id": "c579",
  "wiki": "Mercredi Addams"
},
{
  "name": "Black Widow",
  "universe": "Marvel",
  "media": "Films/Comics",
  "id": "c580",
  "wiki": "Black Widow (Marvel)"
},
{
  "name": "Hyoga",
  "universe": "Saint Seiya",
  "media": "Manga/Anime",
  "id": "c581",
  "wiki": "Hyoga du Cygne"
},
{
  "name": "Shoto Todoroki",
  "universe": "My Hero Academia",
  "media": "Manga/Anime",
  "id": "c582",
  "wiki": "Shoto Todoroki"
},
{
  "name": "Dagger",
  "universe": "Marvel",
  "media": "Comics",
  "id": "c583",
  "wiki": "Dagger (Marvel)"
},
{
  "name": "Daimon Hellstrom",
  "universe": "Marvel",
  "media": "Comics",
  "id": "c584",
  "wiki": "Daimon Hellstrom"
},
{
  "name": "Emily Prentiss",
  "universe": "Esprits criminels",
  "media": "Séries",
  "id": "c585",
  "wiki": "Emily Prentiss"
},
{
  "name": "Evan Buckley",
  "universe": "9-1-1",
  "media": "Séries",
  "id": "c586",
  "wiki": "Evan Buckley"
},
{
  "name": "Sœur Harriet",
  "universe": "Hunters",
  "media": "Séries",
  "id": "c587",
  "wiki": "Sœur Harriet"
},
{
  "name": "Rosita Espinosa",
  "universe": "The Walking Dead",
  "media": "Séries/BD",
  "id": "c588",
  "wiki": "Rosita Espinosa"
},
{
  "name": "Clarke Griffin",
  "universe": "The 100",
  "media": "Séries",
  "id": "c589",
  "wiki": "Clarke Griffin"
},
{
  "name": "Liv Moore",
  "universe": "iZombie",
  "media": "Séries",
  "id": "c590",
  "wiki": "Liv Moore"
},
{
  "name": "Prue Halliwell",
  "universe": "Charmed",
  "media": "Séries",
  "id": "c591",
  "wiki": "Prue Halliwell"
},
{
  "name": "Daredevil",
  "universe": "Marvel",
  "media": "Séries/Comics",
  "id": "c592",
  "wiki": "Daredevil"
},
{
  "name": "Dean Winchester",
  "universe": "Supernatural",
  "media": "Séries",
  "id": "c593",
  "wiki": "Dean Winchester"
},
{
  "name": "Sam Winchester",
  "universe": "Supernatural",
  "media": "Séries",
  "id": "c594",
  "wiki": "Sam Winchester"
},
{
  "name": "Nathan Scott",
  "universe": "Les Frères Scott",
  "media": "Séries",
  "id": "c595",
  "wiki": "Nathan Scott"
},
{
  "name": "Lucas Scott",
  "universe": "Les Frères Scott",
  "media": "Séries",
  "id": "c596",
  "wiki": "Lucas Scott"
},
{
  "name": "Punisher",
  "universe": "Marvel",
  "media": "Séries/Comics",
  "id": "c597",
  "wiki": "Punisher (Marvel)"
},
{
  "name": "Death",
  "universe": "The Sandman",
  "media": "Séries",
  "id": "c598",
  "wiki": "Death (The Sandman)"
},
{
  "name": "Daffy Duck",
  "universe": "Looney Tunes",
  "media": "Dessin Animé",
  "id": "c599",
  "wiki": "Daffy Duck"
},
{
  "name": "L'Âne",
  "universe": "Shrek",
  "media": "Films",
  "id": "c600",
  "wiki": "L'Âne (Shrek)"
},
{
  "name": "Mickey Mouse",
  "universe": "Disney",
  "media": "Séries",
  "id": "c601",
  "wiki": "Mickey Mouse"
},
{
  "name": "James Bond",
  "universe": "James Bond",
  "media": "Films",
  "id": "c602",
  "wiki": "James Bond"
},
{
  "name": "Freddy Krueger",
  "universe": "Les Griffes de la nuit",
  "media": "Films",
  "id": "c603",
  "wiki": "Freddy Krueger"
},
{
  "name": "Spock",
  "universe": "Star Trek",
  "media": "Séries",
  "id": "c604",
  "wiki": "Spock"
},
{
  "name": "Casper",
  "universe": "Casper",
  "media": "Films/Animation/BD",
  "id": "c605",
  "wiki": "Casper"
},
{
  "name": "Ursula",
  "universe": "La Petite Sirène/Disney",
  "media": "Films",
  "id": "c606",
  "wiki": "Ursula (Disney)"
},
{
  "name": "Davy Jones",
  "universe": "Pirates des Caraïbes",
  "media": "Films",
  "id": "c607",
  "wiki": "Davy Jones"
},
{
  "name": "Phineas Flynn",
  "universe": "Phineas et Ferb",
  "media": "Dessin Animé",
  "id": "c608",
  "wiki": "Phineas Flynn"
},
{
  "name": "Willy Wonka",
  "universe": "Charlie et la Chocolaterie",
  "media": "Films",
  "id": "c609",
  "wiki": "Willy Wonka"
},
{
  "name": "Dorothée (Dorothy) Gale",
  "universe": "Le Magicien d'Oz",
  "media": "Romans/Littérature",
  "id": "c610",
  "wiki": "Dorothée Gale"
},
{
  "name": "Judge Dredd",
  "universe": "Judge Dredd",
  "media": "Comics/Films",
  "id": "c611",
  "wiki": "Judge Dredd"
},
{
  "name": "Kefka Palazzo",
  "universe": "Final Fantasy",
  "media": "Jeux vidéo",
  "id": "c612",
  "wiki": "Kefka Palazzo"
},
{
  "name": "Tomura Shigaraki",
  "universe": "My Hero Academia",
  "media": "Manga/Anime",
  "id": "c613",
  "wiki": "Tomura Shigaraki"
},
{
  "name": "Pac-Man",
  "universe": "Pac-Man",
  "media": "Jeux vidéo",
  "id": "c614",
  "wiki": "Pac-Man"
},
{
  "name": "Nico Minoru",
  "universe": "Marvel",
  "media": "Comics/Séries",
  "id": "c615",
  "wiki": "Nico Minoru"
},
{
  "name": "RoboCop",
  "universe": "RoboCop",
  "media": "Films",
  "id": "c616",
  "wiki": "RoboCop"
},
{
  "name": "Beatrix Kiddo",
  "universe": "Kill Bill",
  "media": "Films",
  "id": "c617",
  "wiki": "Beatrix Kiddo"
},
{
  "name": "Ethan Hunt",
  "universe": "Mission: Impossible",
  "media": "Films",
  "id": "c618",
  "wiki": "Ethan Hunt"
},
{
  "name": "Joel Barish",
  "universe": "Eternal Sunshine of the Spotless Mind",
  "media": "Films",
  "id": "c619",
  "wiki": "Joel Barish"
},
{
  "name": "Nina Sayers",
  "universe": "Black Swan",
  "media": "Films",
  "id": "c620",
  "wiki": "Nina Sayers"
},
{
  "name": "Marty Byrde",
  "universe": "Ozark",
  "media": "Séries",
  "id": "c621",
  "wiki": "Marty Byrde"
},
{
  "name": "Tony Soprano",
  "universe": "Les Soprano",
  "media": "Séries",
  "id": "c622",
  "wiki": "Tony Soprano"
},
{
  "name": "Albus Dumbledore",
  "universe": "Harry Potter",
  "media": "Films/Romans",
  "id": "c623",
  "wiki": "Albus Dumbledore"
},
{
  "name": "Harry Potter",
  "universe": "Harry Potter",
  "media": "Films/Romans",
  "id": "c624",
  "wiki": "Harry Potter"
},
{
  "name": "Captain America",
  "universe": "Marvel",
  "media": "Films/Comics",
  "id": "c625",
  "wiki": "Captain America"
},
{
  "name": "Blade",
  "universe": "Marvel",
  "media": "Films/Comics",
  "id": "c626",
  "wiki": "Blade (Marvel)"
},
{
  "name": "Izuku Midoriya",
  "universe": "My Hero Academia",
  "media": "Manga/Anime",
  "id": "c627",
  "wiki": "Izuku Midoriya"
},
{
  "name": "Madame Frédéric",
  "universe": "Warehouse 13",
  "media": "Séries",
  "id": "c628",
  "wiki": "Madame Frédéric"
},
{
  "name": "Aiolia",
  "universe": "Saint Seiya",
  "media": "Manga/Anime",
  "id": "c629",
  "wiki": "Aiolia du Lion"
},
{
  "name": "Elena Gilbert",
  "universe": "The Vampire Diaries",
  "media": "Séries",
  "id": "c630",
  "wiki": "Elena Gilbert"
},
{
  "name": "Icy",
  "universe": "Winx Club",
  "media": "Dessin Animé",
  "id": "c631",
  "wiki": "Icy (Winx Club)"
},
{
  "name": "Saitama",
  "universe": "One Punch Man",
  "media": "Anime/Manga",
  "id": "c632",
  "wiki": "Saitama"
},
{
  "name": "Alien X",
  "universe": "Ben 10",
  "media": "Dessin Animé",
  "id": "c633",
  "wiki": "Alien X"
},
{
  "name": "Anti-Spiral",
  "universe": "Gurren Lagann",
  "media": "Anime",
  "id": "c634",
  "wiki": "Anti-Spiral"
},
{
  "name": "Kong",
  "universe": "King Kong",
  "media": "Films",
  "id": "c635",
  "wiki": "King Kong"
},
{
  "name": "Subaru Natsuki",
  "universe": "Re:Zero",
  "media": "Anime/Manga",
  "id": "c636",
  "wiki": "Subaru Natsuki"
},
{
  "name": "Elsa",
  "universe": "La Reine des neiges",
  "media": "Films/Animation",
  "id": "c637",
  "wiki": "Elsa (La Reine des neiges)"
},
{
  "name": "Peter Pan",
  "universe": "Peter Pan",
  "media": "Films/Animation/Romans",
  "id": "c638",
  "wiki": "Peter Pan"
},
{
  "name": "La Sorcière Blanche",
  "universe": "Le Monde de Narnia",
  "media": "Films/Romans",
  "id": "c639",
  "wiki": "Jadis"
},
{
  "name": "Maléfique",
  "universe": "Disney",
  "media": "Films/Animation",
  "id": "c640",
  "wiki": "Maléfique (Disney)"
},
{
  "name": "Eddie Diaz",
  "universe": "9-1-1",
  "media": "Séries",
  "id": "c641",
  "wiki": "Eddie Diaz"
},
{
  "name": "White Canary",
  "universe": "DC Comics",
  "media": "Séries",
  "id": "c642",
  "wiki": "Sara Lance"
},
{
  "name": "Joe Goldberg",
  "universe": "You",
  "media": "Séries",
  "id": "c643",
  "wiki": "Joe Goldberg"
},
{
  "name": "Jack-Jack",
  "universe": "Les Indestructibles",
  "media": "Films/Animation",
  "id": "c644",
  "wiki": "Jack-Jack Parr"
},
{
  "name": "Lucy",
  "universe": "Lucy",
  "media": "Films",
  "id": "c645",
  "wiki": "Lucy (film)"
}
];
