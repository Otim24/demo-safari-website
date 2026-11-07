export interface DayPlan {
  day: number;
  title: string;
  description: string;
  accommodation: string;
  mealPlan: string;
}

export interface SafariPackage {
  id: string;
  slug: string;
  title: string;
  category: "Primate & Gorilla" | "Classic Savanna" | "Grand Expedition" | "Photographic & Birding";
  durationDays: number;
  durationNights: number;
  priceFromUSD: number;
  groupType: "Private Tailored" | "Small Guild Group (Max 6)";
  physicalDemand: "Moderate" | "Challenging" | "Gentle";
  bestSeason: string;
  heroImage: string;
  tagline: string;
  overview: string;
  highlights: string[];
  destinations: string[];
  itinerary: DayPlan[];
  inclusions: string[];
  exclusions: string[];
}

export const safarisData: SafariPackage[] = [
  {
    id: "great-albertine-rift",
    slug: "great-albertine-rift-primate-expedition",
    title: "The Great Albertine Rift & Gorilla Habituation Expedition",
    category: "Primate & Gorilla",
    durationDays: 10,
    durationNights: 9,
    priceFromUSD: 6850,
    groupType: "Private Tailored",
    physicalDemand: "Challenging",
    bestSeason: "Year-round; prime dry trails from June to September and December to February",
    heroImage: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1600&q=80",
    tagline: "An extraordinary primate Odyssey combining four hours of gorilla habituation with Kibale chimpanzees and Ishasha lions.",
    overview: "This signature overland safari is engineered for discerning travelers who want more than a brief wildlife glimpse. By securing the rare Uganda Wildlife Authority Mountain Gorilla Habituation permit, you spend four full immersive hours with a semi-habituated wild gorilla family in Bwindi southern sector, accompanying research biologists and trackers. The journey also explores the ancient Kibale canopy for chimpanzee tracking, traverses the Queen Elizabeth savanna, and cruises the wildlife-rich Kazinga Channel.",
    highlights: [
      "Official 4-hour Mountain Gorilla Habituation Experience in Bwindi Impenetrable Forest",
      "Full tracking expedition in Kibale National Park with 13 primate species",
      "Game drives across the Ishasha wilderness searching for tree-climbing lions",
      "Private Kazinga Channel electric boat safari for eye-level hippo and bird photography",
      "Scenic overland traversal across crater lakes and tea estates in luxury 4x4 Land Cruiser",
      "Full AMREF Flying Doctors aero-medical evacuation coverage included"
    ],
    destinations: ["Entebbe", "Kibale Forest", "Queen Elizabeth", "Ishasha Sector", "Bwindi Impenetrable", "Lake Mburo"],
    itinerary: [
      {
        day: 1,
        title: "Entebbe Arrival and Lake Victoria Welcome",
        description: "Arrive at Entebbe International Airport where your private senior naturalist welcomes you through VIP customs. Transfer to your boutique lakeside residence for your comprehensive expedition briefing and equipment check.",
        accommodation: "The Boma Hotel or Hotel No.5 (Entebbe)",
        mealPlan: "Dinner included"
      },
      {
        day: 2,
        title: "Overland to the Crater Lake Highlands of Kibale",
        description: "Depart westward through scenic rolling tea terraces of Fort Portal. Arrive at your luxury cliffside lodge overlooking turquoise volcanic crater lakes. Enjoy an afternoon guided walk around the Ndali vanilla plantations.",
        accommodation: "Ndali Crater Lodge or Kyaninga Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 3,
        title: "Kibale Forest Chimpanzee Tracking and Bigodi Wetland Sanctuary",
        description: "Early morning entry into Kibale National Park for an exhilarating tracking session with habituated eastern chimpanzee communities. After lunch, take an afternoon boardwalk exploration through Bigodi Wetland to observe rare red colobus and blue turacos.",
        accommodation: "Ndali Crater Lodge or Kyaninga Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 4,
        title: "Traversal into Queen Elizabeth National Park and Kazinga Channel",
        description: "Cross the equator into Queen Elizabeth National Park with panoramic vistas of the Rwenzori peaks. In the afternoon, embark on an exclusive private boat safari along the Kazinga Channel, home to one of Africa's highest concentrations of hippos and river birds.",
        accommodation: "Kyambura Gorge Lodge or Elephant Plains Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 5,
        title: "Kasenyi Plains Dawn Safari and Ishasha Tree-Climbing Lions",
        description: "Dawn game drive across the Kasenyi plains tracking hunting lion prides, leopards, and large herds of Ugandan kobs. Continue south into the remote Ishasha wilderness, checking into a riverfront tented camp where elephants frequently cross the Ntungwe River.",
        accommodation: "Ishasha Wilderness Camp",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 6,
        title: "Ishasha Fig Tree Canopies and Ascent to Bwindi Cloud Forest",
        description: "Morning game drive dedicated to searching the spreading branches of giant sycamore fig trees for resident tree-climbing lions. In the afternoon, ascend the dramatic mountain contours into the Bwindi Impenetrable Forest highlands.",
        accommodation: "Clouds Mountain Gorilla Lodge or Sanctuary Gorilla Forest Camp",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 7,
        title: "The Bwindi Four-Hour Mountain Gorilla Habituation Experience",
        description: "The crown jewel of the expedition: enter the deep primary forest with senior UWA researchers and trackers. Spend four unforgettable hours observing a gorilla group in their natural home, observing family interactions, play, and foraging behavior.",
        accommodation: "Clouds Mountain Gorilla Lodge or Sanctuary Gorilla Forest Camp",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 8,
        title: "Forest Canopy Walk and Batwa Indigenous Heritage Dialogue",
        description: "A gentler morning walking along rainforest ridges with our botanical specialist. In the afternoon, meet Batwa elders on ancestral communal lands to understand traditional forest medicine, hunting techniques, and historical forest conservation.",
        accommodation: "Clouds Mountain Gorilla Lodge or Four Gorillas Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 9,
        title: "Overland to Lake Mburo National Park and Sunset Night Safari",
        description: "Drive eastward through the terraced hills of Kabale into Lake Mburo National Park. Sunset game drive followed by a spotlight night drive in search of nocturnal wildlife including bushbabies, servals, and leopards.",
        accommodation: "Mihingo Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 10,
        title: "Guided Bush Walk and Return to Entebbe Airport",
        description: "Early morning bush walking safari on foot among zebras, topis, and elands accompanied by an armed ranger. Following brunch, travel back across the equator to Entebbe for your evening outbound departure flight.",
        accommodation: "Dayroom at Entebbe / Outbound departure",
        mealPlan: "Breakfast, Lunch"
      }
    ],
    inclusions: [
      "Official Uganda Wildlife Authority Gorilla Habituation Permit ($1,500 value per person)",
      "Official Kibale Chimpanzee Tracking Permit ($250 value per person)",
      "All national park conservation entry fees and UWA ranger guide services",
      "Private custom 4x4 extended safari Land Cruiser with fuel and senior lead naturalist",
      "Luxury full-board lodge accommodations as detailed in the day-by-day plan",
      "Private Kazinga Channel boat safari and Lake Mburo walking safari",
      "AMREF Flying Doctors aero-medical emergency evacuation registration",
      "Chilled mineral water, organic Ugandan coffee, and refreshments inside vehicles"
    ],
    exclusions: [
      "International flights and Ugandan tourist entry visas ($50 online)",
      "Premium imported champagne and cellar reserve spirits at lodges",
      "Gratuities for safari guide, lodge staff, and local trackers (guidance provided)",
      "Personal travel, baggage, and medical cancellation insurance"
    ]
  },
  {
    id: "classic-savanna-primates",
    slug: "classic-uganda-big-game-gorilla-circuit",
    title: "The Classic Uganda Big Game & Gorilla Circuit",
    category: "Classic Savanna",
    durationDays: 8,
    durationNights: 7,
    priceFromUSD: 4950,
    groupType: "Private Tailored",
    physicalDemand: "Moderate",
    bestSeason: "Year-round; excellent during December to March and June to October",
    heroImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80",
    tagline: "The definitive route capturing Uganda's iconic wildlife: savanna predators, Kazinga boat safaris, and Bwindi gorilla tracking.",
    overview: "Designed for travelers seeking the ultimate balance between classic African savanna game drives and mountain gorilla tracking. This 8-day private journey covers the misty rainforests of Bwindi, the diverse habitats of Queen Elizabeth National Park, and the serene acacia woodlands of Lake Mburo.",
    highlights: [
      "Guaranteed Bwindi Mountain Gorilla Tracking permit with experienced trackers",
      "Morning and dusk predator safaris across Kasenyi and Ishasha savanna",
      "Kazinga Channel boat expedition along natural hippo and bird habitats",
      "Private bush walking safari among grazing zebras and elands in Lake Mburo",
      "Stunning scenic flights or luxury road traversal across the Albertine Rift"
    ],
    destinations: ["Entebbe", "Lake Mburo", "Queen Elizabeth", "Ishasha", "Bwindi Impenetrable"],
    itinerary: [
      {
        day: 1,
        title: "Entebbe Welcome and Transfer to Lake Mburo",
        description: "Meet your lead naturalist at Entebbe and journey south to Lake Mburo National Park. Enjoy an evening game drive watching plains zebras against the setting sun.",
        accommodation: "Mihingo Lodge or Kigambira Safari Lodge",
        mealPlan: "Lunch, Dinner"
      },
      {
        day: 2,
        title: "Acacia Walking Safari and Crossing to Queen Elizabeth",
        description: "Step out on foot with an armed UWA ranger for a gentle walking safari among giraffes and topis. Continue west through the Ankole ranching plains into Queen Elizabeth National Park.",
        accommodation: "Elephant Plains Lodge or Mweya Safari Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 3,
        title: "Kasenyi Plains Game Drive and Kazinga Channel Boat Cruise",
        description: "Track lions, spotted hyenas, and giant forest hogs on the open plains. In the afternoon, take a private boat cruise along the Kazinga Channel surrounded by bathing elephants and skimmers.",
        accommodation: "Elephant Plains Lodge or Mweya Safari Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 4,
        title: "Ishasha Tree-Climbing Lion Expedition",
        description: "Travel through the southern Ishasha plains. Search large sycamore fig trees where resident lions seek shelter from mid-afternoon heat.",
        accommodation: "Ishasha Wilderness Camp",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 5,
        title: "Ascent into Bwindi Rainforest Canopy",
        description: "Winding drive ascending the mist-shrouded Kigezi highlands to your luxury lodge bordering Bwindi Impenetrable National Park.",
        accommodation: "Bwindi Lodge by Volcanoes Safaris or Clouds Mountain Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 6,
        title: "Bwindi Mountain Gorilla Tracking Encounter",
        description: "Briefing at park headquarters followed by tracking with experienced UWA rangers. Spend one unforgettable hour quietly observing a wild mountain gorilla family.",
        accommodation: "Bwindi Lodge by Volcanoes Safaris or Clouds Mountain Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 7,
        title: "Batwa Community Conservation Walk and Highlands Relaxation",
        description: "Explore community-led medicinal plant trails and hear traditional songs from Batwa elders. Afternoon spa treatments and relaxation with sweeping rainforest views.",
        accommodation: "Bwindi Lodge by Volcanoes Safaris or Clouds Mountain Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 8,
        title: "Scenic Return Drive to Entebbe Airport",
        description: "Scenic overland journey back through Mbarara and the Equator monument, arriving in Entebbe in time for your evening outbound departure.",
        accommodation: "Dayroom at Entebbe / Outbound departure",
        mealPlan: "Breakfast, Lunch"
      }
    ],
    inclusions: [
      "Official Bwindi Mountain Gorilla Tracking Permit ($800 value per person)",
      "All national park entrance tickets and government conservation fees",
      "Private 4x4 Toyota Land Cruiser with pop-up roof and fuel",
      "Senior USAGA certified wildlife guide throughout",
      "Luxury lodge accommodations on full board basis",
      "Private boat cruise on the Kazinga Channel",
      "AMREF Flying Doctors coverage"
    ],
    exclusions: [
      "International flights and tourist visas",
      "Optional helicopter transfers (available on request)",
      "Personal items, souvenirs, and guide gratuities"
    ]
  },
  {
    id: "kidepo-murchison-remote",
    slug: "kidepo-valley-murchison-remote-wilderness",
    title: "Kidepo Valley & Murchison Falls Frontier Expedition",
    category: "Grand Expedition",
    durationDays: 8,
    durationNights: 7,
    priceFromUSD: 5400,
    groupType: "Private Tailored",
    physicalDemand: "Moderate",
    bestSeason: "September to March for crystal clear skies and prime predator sightings",
    heroImage: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1600&q=80",
    tagline: "Venture to Uganda's wild northern frontiers: untouched savanna, cheetah territories, and the thunderous Nile.",
    overview: "For the adventurous safari enthusiast who wants uncrowded expanses, dramatic raw landscapes, and wilderness exclusivity. This expedition combines the thunderous power of Murchison Falls National Park with the breathtaking isolation of Kidepo Valley National Park near the northern borders.",
    highlights: [
      "Fly-in bush flight into remote Kidepo Valley surrounded by the Morungole Mountains",
      "Private game drives across Narus Valley tracking cheetahs, lions, and vast buffalo herds",
      "Boat cruise to the base of Murchison Falls where the Nile surges through a narrow gorge",
      "Dawn delta boat safari tracking rare shoebill storks along Lake Albert",
      "Cultural visit to the traditional Manyattas of the pastoralist Karamojong people"
    ],
    destinations: ["Entebbe", "Murchison Falls", "Lake Albert Delta", "Kidepo Valley", "Narus Basin"],
    itinerary: [
      {
        day: 1,
        title: "Entebbe to Murchison Falls via Ziwa Rhino Sanctuary",
        description: "Drive north through lush farmland to Ziwa Rhino Sanctuary for on-foot tracking of wild southern white rhinos. Continue to Murchison Falls National Park.",
        accommodation: "Baker's Lodge or Nile Safari Lodge",
        mealPlan: "Lunch, Dinner"
      },
      {
        day: 2,
        title: "Savanna Game Drive and Victoria Nile Waterfall Cruise",
        description: "Dawn game drive across the Borassus palm savanna encountering Rothschild giraffes, lions, and Jackson's hartebeests. Afternoon boat safari to the foot of Murchison Falls.",
        accommodation: "Baker's Lodge or Nile Safari Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 3,
        title: "Albert Delta Shoebill Quest and Top of the Falls Hike",
        description: "Early morning boat safari downstream toward the Lake Albert delta searching for rare prehistoric shoebill storks. Visit the top of the falls to feel the ground shake beneath your feet.",
        accommodation: "Baker's Lodge or Nile Safari Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 4,
        title: "Scenic Traverse Across Northern Uganda into Kidepo Valley",
        description: "Scenic drive or private bush flight northeast across Acholi and Karamoja landscapes, descending into the magnificent wilderness amphitheater of Kidepo Valley.",
        accommodation: "Apoka Safari Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 5,
        title: "Narus Valley Predator Tracking and Granite Kopjes",
        description: "Full day exploring the permanent water sources of the Narus Valley. Search for tree-climbing lions perched on smooth granite kopjes, cheetahs scanning the plains, and caracals.",
        accommodation: "Apoka Safari Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 6,
        title: "Kidepo River Sand Bed and South Sudan Borderland Plains",
        description: "Drive north through the dry sand bed of the Kidepo River fringed by Borassus palms, reaching the Kanangorok hot springs with panoramic views of the South Sudan mountain ranges.",
        accommodation: "Apoka Safari Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 7,
        title: "Karamojong Cultural Homestead and Sunset Ridge Drive",
        description: "A respectful, private visit to a traditional Karamojong Manyatta to learn about nomadic pastoralist culture, beadwork, and cattle traditions. Sunset sundowners over the savanna.",
        accommodation: "Apoka Safari Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 8,
        title: "Bush Flight Departure to Entebbe International",
        description: "Final sunrise game drive followed by a private scheduled charter flight from Apoka airstrip directly back to Entebbe Airport for international connections.",
        accommodation: "Outbound flight departure",
        mealPlan: "Breakfast"
      }
    ],
    inclusions: [
      "All park conservation entries, ranger fees, and boat safaris",
      "Ziwa Rhino Sanctuary tracking on foot with specialist ranger",
      "Luxury lodge accommodations on full board with selected drinks",
      "Private custom 4x4 Land Cruiser and lead naturalist guide",
      "Scheduled bush flight from Kidepo to Entebbe",
      "AMREF Flying Doctors aero-medical coverage"
    ],
    exclusions: [
      "International airfare and visas",
      "Premium vintage wines and spirits",
      "Gratuities for guide and camp staff"
    ]
  },
  {
    id: "primates-of-the-pearl",
    slug: "primates-of-the-pearl-chimpanzees-gorillas-golden-monkeys",
    title: "Primates of the Pearl: Chimpanzees, Gorillas & Golden Monkeys",
    category: "Primate & Gorilla",
    durationDays: 7,
    durationNights: 6,
    priceFromUSD: 4600,
    groupType: "Private Tailored",
    physicalDemand: "Moderate to Challenging",
    bestSeason: "Year-round; premier dry months June to August and December to February",
    heroImage: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1600&q=80",
    tagline: "The definitive three-primate quest through Kibale rainforest, Bwindi cloud forest, and the volcanic slopes of Mgahinga.",
    overview: "Uganda is universally recognized as Africa's greatest primate sanctuary. This focused 7-day itinerary tracks three of the continent's most iconic primate species: habituated eastern chimpanzees in Kibale, mountain gorillas in Bwindi, and endangered golden monkeys on the bamboo slopes of Mount Gahinga.",
    highlights: [
      "Kibale National Park chimpanzee tracking with senior primatologist",
      "Mountain Gorilla tracking permit in the mist-veiled forests of Bwindi",
      "Golden Monkey tracking in the bamboo forests of Mgahinga Gorilla National Park",
      "Spectacular views of the three dormant Virunga volcanoes: Muhavura, Gahinga, and Sabinyo",
      "Boutique eco-lodges with heated fireplaces and private forest verandas"
    ],
    destinations: ["Entebbe", "Kibale Forest", "Bwindi Impenetrable", "Mgahinga Gorilla Park", "Lake Bunyonyi"],
    itinerary: [
      {
        day: 1,
        title: "Entebbe to Kibale Forest Highlands",
        description: "Early departure from Entebbe heading west into the tea terraces and tropical woodlands of Kibale Forest.",
        accommodation: "Ndali Crater Lodge or Primate Lodge Kibale",
        mealPlan: "Lunch, Dinner"
      },
      {
        day: 2,
        title: "Kibale Forest Chimpanzee Encounter",
        description: "Morning guided tracking of habituated chimpanzees. Observe their grooming, canopy feeding, and vocal pant-hoots.",
        accommodation: "Ndali Crater Lodge or Primate Lodge Kibale",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 3,
        title: "Scenic Traverse to Southern Bwindi Highlands",
        description: "Overland journey south through Queen Elizabeth savanna and mountain passes into the mist of southern Bwindi.",
        accommodation: "Clouds Mountain Gorilla Lodge or Four Gorillas Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 4,
        title: "Bwindi Mountain Gorilla Tracking Expedition",
        description: "Follow expert rangers into primary jungle to spend one profound hour with a wild mountain gorilla family.",
        accommodation: "Clouds Mountain Gorilla Lodge or Four Gorillas Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 5,
        title: "Mgahinga Bamboo Slopes and Golden Monkey Tracking",
        description: "Short drive to Mgahinga Gorilla National Park. Hike into the high-altitude bamboo zone to track troops of lively, endangered golden monkeys.",
        accommodation: "Mount Gahinga Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 6,
        title: "Lake Bunyonyi Rest and Dugout Canoe Exploration",
        description: "Transfer to tranquil Lake Bunyonyi, framed by terraced green hills. Enjoy an afternoon canoe exploration and peaceful sunset.",
        accommodation: "BirdNest Resort (Lake Bunyonyi)",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 7,
        title: "Return to Entebbe via the Equator Line",
        description: "Scenic return drive to Entebbe with a traditional lunch stop at Igongo Cultural Center, arriving in Entebbe for evening departures.",
        accommodation: "Outbound flight departure",
        mealPlan: "Breakfast, Lunch"
      }
    ],
    inclusions: [
      "Official Bwindi Mountain Gorilla Tracking Permit ($800 value)",
      "Official Kibale Chimpanzee Tracking Permit ($250 value)",
      "Official Mgahinga Golden Monkey Tracking Permit ($100 value)",
      "Private 4x4 safari Land Cruiser with dedicated driver naturalist",
      "Full board luxury accommodations throughout",
      "AMREF Flying Doctors coverage"
    ],
    exclusions: [
      "International flights and entry visas",
      "Personal gratuities and optional alcoholic beverages"
    ]
  },
  {
    id: "rwenzori-savanna-foothills",
    slug: "rwenzori-glacial-foothills-savanna-expedition",
    title: "Rwenzori Glacial Foothills & Savanna Wilderness Expedition",
    category: "Classic Savanna",
    durationDays: 6,
    durationNights: 5,
    priceFromUSD: 3800,
    groupType: "Private Tailored",
    physicalDemand: "Moderate",
    bestSeason: "June to September and December to February",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80",
    tagline: "Explore the legendary Mountains of the Moon foothills alongside Queen Elizabeth wildlife and crater lakes.",
    overview: "Ptolemy's legendary 'Mountains of the Moon' rise dramatically above the western Albertine Rift. This expedition combines guided treks through the giant heather and moss-draped valleys of the Rwenzori foothills with big game safaris across Queen Elizabeth National Park.",
    highlights: [
      "Guided day trek into Rwenzori Mountains National Park along the pristine Mubuku Valley",
      "Boat cruise along the Kazinga Channel with thousands of hippos and river birds",
      "Exclusive photography hides for lion and leopard tracking on Kasenyi plains",
      "Exploration of dramatic salt pans and extinct explosion crater lakes"
    ],
    destinations: ["Entebbe", "Fort Portal", "Rwenzori Foothills", "Queen Elizabeth", "Kasenyi"],
    itinerary: [
      {
        day: 1,
        title: "Entebbe to Fort Portal Foothills",
        description: "Drive westward to the pleasant colonial mountain town of Fort Portal situated at the base of the Rwenzori range.",
        accommodation: "Kyaninga Lodge",
        mealPlan: "Lunch, Dinner"
      },
      {
        day: 2,
        title: "Rwenzori Foothills Alpine Valley Hike",
        description: "Full day guided hike into the montane forests of Rwenzori Mountains National Park with experienced local Bakonzo mountain guides.",
        accommodation: "Kyaninga Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 3,
        title: "Descent to Queen Elizabeth National Park and Kazinga Cruise",
        description: "Descend onto the savanna floor. Afternoon private cruise on the Kazinga Channel amidst elephant herds and pelicans.",
        accommodation: "Kyambura Gorge Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 4,
        title: "Kasenyi Plains Game Drives and Kyambura Chimpanzee Chasm",
        description: "Dawn game drive across Kasenyi plains followed by a walk into the sunken underground rainforest of Kyambura Gorge.",
        accommodation: "Kyambura Gorge Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 5,
        title: "Crater Lake Trail and Wildlife Salt Mines",
        description: "Drive the dramatic 27-kilometer Explosion Crater track and visit the historic Lake Katwe traditional salt pans.",
        accommodation: "Elephant Plains Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 6,
        title: "Return Traversal to Entebbe International",
        description: "Morning departure east toward Kampala and Entebbe Airport for evening outbound departures.",
        accommodation: "Outbound flight departure",
        mealPlan: "Breakfast, Lunch"
      }
    ],
    inclusions: [
      "All park fees, UWA mountain guide services, and Kazinga boat safari",
      "Private 4x4 Land Cruiser with professional driver naturalist",
      "Full board luxury lodge accommodations",
      "AMREF Flying Doctors coverage"
    ],
    exclusions: [
      "International airfare and visas",
      "Staff gratuities and premium lodge cellar drinks"
    ]
  },
  {
    id: "uganda-birding-shoebill",
    slug: "uganda-birding-endemics-shoebill-quest",
    title: "Uganda Birding & Albertine Rift Endemics Quest",
    category: "Photographic & Birding",
    durationDays: 12,
    durationNights: 11,
    priceFromUSD: 7200,
    groupType: "Small Guild Group (Max 6)",
    physicalDemand: "Moderate",
    bestSeason: "January to March and July to September for resident breeding plumage and optimal light",
    heroImage: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1600&q=80",
    tagline: "Over 1,060 recorded bird species: search for the prehistoric shoebill stork, green-breasted pitta, and 24 Albertine Rift endemics.",
    overview: "Led by Uganda's most celebrated senior ornithologist guides, this comprehensive birding safari visits Mabamba Bay papyrus swamp, the Albertine Rift montane forests of Bwindi (voted Africa's number one birding destination), Kibale Forest, and Queen Elizabeth National Park.",
    highlights: [
      "Mabamba Bay wetland traditional canoe excursion to locate the elusive Shoebill Stork",
      "Ruhija Mubwindi Swamp trek searching for the rare African Green Broadbill",
      "Kibale Forest dawn quest for the Green-breasted Pitta during display call season",
      "Albertine Rift endemics checklist including Handsome Francolin, Regal Sunbird, and Archer's Robin-Chat",
      "Small expedition group capped at six birders for unobstructed photographic viewpoints"
    ],
    destinations: ["Mabamba Bay", "Kibale Forest", "Queen Elizabeth", "Bwindi Ruhija", "Lake Mburo"],
    itinerary: [
      {
        day: 1,
        title: "Entebbe Arrival and Botanical Gardens Orientation",
        description: "Arrive in Entebbe. Afternoon birding in the historic Entebbe Botanical Gardens for Great Blue Turacos, Orange Weavers, and Bat Hawks.",
        accommodation: "The Boma Hotel",
        mealPlan: "Dinner included"
      },
      {
        day: 2,
        title: "Mabamba Bay Papyrus Swamp Shoebill Quest",
        description: "Early motorized canoe excursion into Mabamba Wetland Ramsar site. Track the prehistoric Shoebill along with Papyrus Gonoleks and Lesser Jacanas.",
        accommodation: "The Boma Hotel",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 3,
        title: "Transfer to Kibale Forest with roadside birding stops",
        description: "Journey west with strategic stops in Papyrus swamps and riverine forests for Ross's Turaco and Joyful Greenbul.",
        accommodation: "Primate Lodge Kibale",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 4,
        title: "Green-Breasted Pitta Dawn Quest and Kibale Canopies",
        description: "Pre-dawn entry into Kibale to locate the displaying Green-breasted Pitta. Continue tracking Afep Pigeons and Black-capped Apalises.",
        accommodation: "Primate Lodge Kibale",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 5,
        title: "Queen Elizabeth Savanna and Kazinga Channel Waterbirds",
        description: "Morning birding across Kasenyi savanna for Temminck's Courser and Martial Eagle. Afternoon boat cruise for African Skimmers and Pink-backed Pelicans.",
        accommodation: "Elephant Plains Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 6,
        title: "Ishasha Riverine Woodlands to Bwindi Ruhija",
        description: "Birding through Ishasha riverine strips before ascending to Ruhija, the highest sector of Bwindi Impenetrable National Park.",
        accommodation: "Bakiga Lodge or Ruhija Gorilla Safari Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 7,
        title: "Mubwindi Swamp Quest for African Green Broadbill",
        description: "Full day trek down into Mubwindi Swamp inside Bwindi. High-priority search for the rare African Green Broadbill and Grauer's Rush Warbler.",
        accommodation: "Bakiga Lodge or Ruhija Gorilla Safari Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 8,
        title: "The Neck Forest Corridor and Buhoma Lowlands",
        description: "Birding the famous 'Neck' river crossing connecting Ruhija to Buhoma. Targets include Black Bee-eater, Chapin's Flycatcher, and Cassin's Grey Flycatcher.",
        accommodation: "Mahogany Springs Lodge or Bwindi Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 9,
        title: "Optional Gorilla Tracking or Forest Birding Trail",
        description: "Guests may choose an optional mountain gorilla tracking permit or spend the day exploring Buhoma's Waterfall Trail for Short-tailed Warbler.",
        accommodation: "Mahogany Springs Lodge or Bwindi Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 10,
        title: "Transfer to Lake Mburo National Park",
        description: "Drive east to Lake Mburo, entering through acacia woodlands that host species not found elsewhere in Uganda.",
        accommodation: "Mihingo Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 11,
        title: "Lake Mburo Boat Safari for African Finfoot and Red-faced Barbet",
        description: "Morning boat cruise along Lake Mburo's papyrus fringes for African Finfoot and White-backed Night Heron. Afternoon drive for Red-faced Barbet.",
        accommodation: "Mihingo Lodge",
        mealPlan: "Breakfast, Lunch, Dinner"
      },
      {
        day: 12,
        title: "Morning Bird Walk and Return to Entebbe Airport",
        description: "Final birding walk in the acacia savannah. Return drive to Entebbe Airport for evening outbound international flights.",
        accommodation: "Outbound flight departure",
        mealPlan: "Breakfast, Lunch"
      }
    ],
    inclusions: [
      "Lead senior ornithologist guide certified by USAGA",
      "High-powered spotting scopes and playback equipment",
      "All park entrance permits, canoe charters, and boat safaris",
      "Private custom 4x4 Land Cruiser with pop-up roof",
      "Full board lodge accommodations",
      "AMREF Flying Doctors aero-medical coverage"
    ],
    exclusions: [
      "International flights and entry visas",
      "Optional Mountain Gorilla permit ($800 extra if selected on Day 9)",
      "Gratuities and personal bar expenses"
    ]
  }
];

