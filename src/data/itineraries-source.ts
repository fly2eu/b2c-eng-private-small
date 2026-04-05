import { Itinerary } from "@/types/itinerary";

export const itineraries: Itinerary[] = [
  // ─── SWITZERLAND (5) ───────────────────────────────────────────────────────

  {
    id: "1",
    slug: "my-scenic-switzerland",
    title: "My Scenic Switzerland",
    segment: "private",
    countries: ["Switzerland"],
    region: "Switzerland",
    durationDays: { min: 6, max: 6 },
    groupSize: { min: 2, max: 7 },
    description:
      "Six days through the Swiss heartland — lakeside cities, mountain passes, and chocolate-box villages. A chauffeured introduction to Switzerland's greatest hits, built for your first-time client.",
    highlights: [
      "Jungfrau region & Lauterbrunnen Valley",
      "Mount Pilatus cable car & cogwheel railway",
      "Lucerne's Chapel Bridge and Old Town",
      "Rhine Falls at Schaffhausen",
      "Stein am Rhein medieval town",
    ],
    included: [
      "5 nights handpicked hotel accommodation",
      "Daily breakfast",
      "Private chauffeured transfers throughout (V-Class or equivalent)",
      "English-speaking driver with local knowledge",
      "Airport arrival & departure transfers",
      "24/7 on-trip support",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Lunches and dinners",
      "Entrance fees to attractions",
      "Tips and gratuities",
      "Personal expenses",
    ],
    hotelTier: "4-star",
    priceFromEur: 1590,
    heroImage: "https://placehold.co/800x500/0F1E2E/FAE6CF?text=My+Scenic+Switzerland",
    tags: ["scenic", "cultural", "city breaks", "first-timer"],
    featured: true,
    published: true,
    travelStyle: "grand-tour",
    days: [
      {
        dayNumber: 1,
        title: "Geneva Arrival → Interlaken",
        description:
          "Your driver meets you at Geneva Airport. Head east through the Swiss Mittelland, stopping in Gruyères for lunch (own account) and a walk through the cobblestoned medieval village. Arrive in Interlaken in the late afternoon with views of Eiger, Mönch, and Jungfrau from your hotel terrace.",
        distanceKm: 155,
        stops: ["Gruyères", "Thun lakefront"],
        overnightCity: "Interlaken",
      },
      {
        dayNumber: 2,
        title: "Jungfrau Region & Lauterbrunnen Valley",
        description:
          "A full day exploring the Bernese Oberland. Drive into the Lauterbrunnen Valley — 72 waterfalls, sheer cliff faces, and one of the world's most dramatic landscapes. Continue to Grindelwald for lunch and panoramic views of the Eiger's north face. Return to Interlaken via Brienz and its turquoise lake.",
        distanceKm: 80,
        stops: ["Lauterbrunnen", "Grindelwald", "Lake Brienz"],
        overnightCity: "Interlaken",
      },
      {
        dayNumber: 3,
        title: "Interlaken → Lucerne",
        description:
          "Morning departure along the shores of Lake Lucerne. Arrive mid-morning and spend the day at leisure in one of Europe's most beautiful cities — Chapel Bridge, the Old Town wall towers, Lion Monument, and the lakefront. Dinner recommendation from your driver.",
        distanceKm: 75,
        stops: ["Brienz Rothorn viewpoint", "Lungern lake"],
        overnightCity: "Lucerne",
      },
      {
        dayNumber: 4,
        title: "Mount Pilatus & Lake Lucerne",
        description:
          "Morning ascent to the summit of Mount Pilatus by cable car (own account) — the world's steepest cogwheel railway returns you to Alpnachstad. Afternoon boat cruise on Lake Lucerne (own account) with views of the surrounding Alps. Overnight in Lucerne.",
        stops: ["Mount Pilatus summit", "Alpnachstad"],
        overnightCity: "Lucerne",
      },
      {
        dayNumber: 5,
        title: "Lucerne → Rhine Falls → Zürich",
        description:
          "Drive north to Schaffhausen for a visit to Rhine Falls — Europe's largest waterfall. Continue to Stein am Rhein, a perfectly preserved medieval town with painted half-timbered facades. Arrive in Zürich for a final evening stroll along the Limmat.",
        distanceKm: 120,
        stops: ["Rhine Falls (Schaffhausen)", "Stein am Rhein"],
        overnightCity: "Zürich",
      },
      {
        dayNumber: 6,
        title: "Zürich Departure",
        description:
          "Morning at leisure in Zürich — Bahnhofstrasse, the Old Town (Altstadt), or a lakeside stroll. Private transfer to Zürich Airport for your onward flight.",
        stops: ["Zürich Altstadt", "Zürich Airport"],
        overnightCity: "Zürich (departure)",
      },
    ],
  },

  {
    id: "2",
    slug: "switzerland-wonderland",
    title: "Switzerland Wonderland",
    segment: "private",
    countries: ["Switzerland"],
    region: "Switzerland",
    durationDays: { min: 9, max: 9 },
    groupSize: { min: 2, max: 6 },
    description:
      "Nine days, every corner of Switzerland. From the Jura through the Bernese Alps to the Valais and Engadine — this is the definitive Swiss grand tour for clients who want to see it all.",
    highlights: [
      "Glacier Express corridor (Andermatt to Zermatt area)",
      "Matterhorn views from Zermatt",
      "St. Moritz and the Engadine Valley",
      "Montreux Jazz Walk and Chillon Castle",
      "Pilatus, Titlis, and Jungfrau region",
    ],
    included: [
      "8 nights handpicked hotel accommodation (premium and superior properties)",
      "Daily breakfast",
      "Private chauffeured transfers throughout (V-Class or equivalent)",
      "English-speaking driver-guide",
      "Airport arrival & departure transfers",
      "24/7 on-trip support",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Meals other than breakfast",
      "Mountain excursion tickets (cable cars, cogwheel railways)",
      "Tips and gratuities",
      "Personal expenses",
    ],
    hotelTier: "mixed",
    priceFromEur: 2490,
    heroImage: "https://placehold.co/800x500/0F1E2E/FAE6CF?text=Switzerland+Wonderland",
    tags: ["scenic", "cultural", "adventure", "grand tour"],
    featured: true,
    published: true,
    travelStyle: "grand-tour",
    days: [
      {
        dayNumber: 1,
        title: "Zürich Arrival → Lucerne",
        description:
          "Arrival at Zürich Airport. Private transfer to Lucerne — a 50-minute drive through the Swiss Plateau. Afternoon stroll along the Chapel Bridge and the Reuss river. Welcome dinner at a lakeside restaurant (own account).",
        distanceKm: 60,
        stops: ["Zürich Airport", "Chapel Bridge"],
        overnightCity: "Lucerne",
      },
      {
        dayNumber: 2,
        title: "Lucerne → Mount Pilatus → Interlaken",
        description:
          "Morning ascent of Mount Pilatus by aerial gondola. Lunch at the summit hotel with views stretching to the Black Forest. Descend by the world's steepest cogwheel railway and continue to Interlaken via the shoreline of Lake Brienz.",
        distanceKm: 90,
        stops: ["Mount Pilatus", "Lake Brienz shoreline"],
        overnightCity: "Interlaken",
      },
      {
        dayNumber: 3,
        title: "Jungfrau Region",
        description:
          "Full day in the Bernese Oberland. Drive the Lauterbrunnen Valley in the morning, then take the Wengernalpbahn cogwheel train to Kleine Scheidegg for Eiger views (own account). Afternoon walk around Grindelwald First.",
        stops: ["Lauterbrunnen Valley", "Kleine Scheidegg", "Grindelwald"],
        overnightCity: "Interlaken",
      },
      {
        dayNumber: 4,
        title: "Interlaken → Bern → Fribourg",
        description:
          "Morning drive to Bern — UNESCO-listed Old Town, the Bear Park, and the Rose Garden overlook. Afternoon in Fribourg's beautifully intact medieval centre and Gothic Cathedral. Short drive south to the lakeside town of Gruyères for an evening stroll.",
        distanceKm: 100,
        stops: ["Bern Altstadt", "Rose Garden", "Fribourg Cathedral"],
        overnightCity: "Fribourg",
      },
      {
        dayNumber: 5,
        title: "Gruyères → Montreux → Lausanne",
        description:
          "Morning visit to Gruyères Castle and cheese factory (own account). Drive to Montreux via the Lavaux UNESCO hillside terraces. Visit Chillon Castle (own account) before settling into Lausanne for the evening.",
        distanceKm: 95,
        stops: ["Gruyères", "Lavaux UNESCO Terraces", "Chillon Castle"],
        overnightCity: "Lausanne",
      },
      {
        dayNumber: 6,
        title: "Lausanne → Geneva → Zermatt Direction",
        description:
          "Morning in Geneva — the Jet d'Eau, Old Town, and flower clock. Afternoon drive east through the Rhône Valley toward the Valais. Overnight in Visp or Leuk-Stadt as the gateway to Zermatt.",
        distanceKm: 135,
        stops: ["Geneva Old Town", "Martigny", "Rhône Valley"],
        overnightCity: "Visp",
      },
      {
        dayNumber: 7,
        title: "Zermatt Day",
        description:
          "Transfer to Täsch (car-free zone) and take the cog train to Zermatt. A full day beneath the Matterhorn — the village, the Sunnegga Express (own account), and the Mountaineers' Cemetery. Return to Visp in the evening.",
        stops: ["Täsch", "Zermatt village", "Sunnegga viewpoint"],
        overnightCity: "Visp",
      },
      {
        dayNumber: 8,
        title: "Andermatt → Oberalp Pass → St. Moritz",
        description:
          "A spectacular alpine drive over the Oberalp Pass (2,046 m) and through the Upper Engadine to St. Moritz. This is Glacier Express country — all mountains, silence, and granite. Arrive in St. Moritz in time for a lakeside aperitivo.",
        distanceKm: 175,
        stops: ["Andermatt", "Oberalp Pass", "Upper Engadine"],
        overnightCity: "St. Moritz",
      },
      {
        dayNumber: 9,
        title: "St. Moritz → Zürich Departure",
        description:
          "Morning at leisure in St. Moritz. Drive north through the Maloja Pass and along the Via Mala gorge to Zürich. Airport transfer for your onward flight.",
        distanceKm: 200,
        stops: ["Maloja Pass", "Via Mala gorge", "Zürich Airport"],
        overnightCity: "Zürich (departure)",
      },
    ],
  },

  {
    id: "3",
    slug: "sweet-tour-switzerland",
    title: "Sweet Tour Switzerland",
    segment: "private",
    countries: ["Switzerland"],
    region: "Switzerland",
    durationDays: { min: 7, max: 7 },
    groupSize: { min: 2, max: 8 },
    description:
      "Chocolate, cheese, wine, and culture — seven days covering Switzerland's most indulgent experiences. Perfect for food-focused clients who want substance alongside scenery.",
    highlights: [
      "Cailler Chocolate Factory in Broc",
      "Gruyères cheese cellar tour",
      "Lavaux UNESCO Vineyard Terraces",
      "Bern's medieval arcades and markets",
      "Rhine Falls and Stein am Rhein",
    ],
    included: [
      "6 nights handpicked hotel accommodation",
      "Daily breakfast",
      "Private chauffeured transfers throughout",
      "English-speaking driver with regional expertise",
      "Airport arrival & departure transfers",
      "24/7 on-trip support",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Meals other than breakfast",
      "Entrance fees and tastings",
      "Tips and gratuities",
      "Personal expenses",
    ],
    hotelTier: "mixed",
    priceFromEur: 1890,
    heroImage: "https://placehold.co/800x500/0F1E2E/FAE6CF?text=Sweet+Tour+Switzerland",
    tags: ["wine & food", "cultural", "scenic"],
    featured: false,
    published: true,
    travelStyle: "slow",
    days: [
      {
        dayNumber: 1,
        title: "Zürich Arrival → Rhine Falls",
        description:
          "Arrival at Zürich Airport. Drive north to Schaffhausen and Rhine Falls — Europe's largest waterfall. Continue to the perfectly preserved medieval town of Stein am Rhein for an evening stroll along the frescoed main street.",
        distanceKm: 55,
        stops: ["Rhine Falls", "Stein am Rhein"],
        overnightCity: "Stein am Rhein",
      },
      {
        dayNumber: 2,
        title: "Basel → Chocolate Country → Lucerne",
        description:
          "Morning drive through Basel — crossing the Rhine on a traditional wooden ferry. Afternoon visit to the Cailler Chocolate Factory in Broc (own account) — Switzerland's oldest chocolate brand, founded 1819. On to Lucerne for the evening.",
        distanceKm: 135,
        stops: ["Basel Old Town", "Broc Chocolate Factory"],
        overnightCity: "Lucerne",
      },
      {
        dayNumber: 3,
        title: "Lucerne → Emmental → Bern",
        description:
          "Morning in Lucerne's Old Town. Drive east through the rolling hills of Emmental — the cheese region made famous by its holey wheels. Visit a working farm dairy for a tasting (own account) before arriving in Bern, the Swiss capital.",
        distanceKm: 85,
        stops: ["Lucerne Old Town", "Emmental farm dairy"],
        overnightCity: "Bern",
      },
      {
        dayNumber: 4,
        title: "Bern City Day",
        description:
          "A full day in Bern. The UNESCO-listed arcaded Old Town, the Zytglogge astronomical clock, the Bear Park, and the Rose Garden with its famous view over the Aare bend. Optional: Einstein Museum in the house where he developed the Special Theory of Relativity.",
        stops: ["Bern Altstadt", "Rose Garden", "Bear Park"],
        overnightCity: "Bern",
      },
      {
        dayNumber: 5,
        title: "Gruyères → Fribourg",
        description:
          "Morning drive to Gruyères. Visit the medieval castle and the famous cheese cellar at La Maison du Gruyère (own account) — see wheels of cheese at every stage of maturity. Afternoon in Fribourg, straddling the linguistic border between French and German Switzerland.",
        distanceKm: 40,
        stops: ["Gruyères Castle", "La Maison du Gruyère", "Fribourg Cathedral"],
        overnightCity: "Fribourg",
      },
      {
        dayNumber: 6,
        title: "Lavaux UNESCO Terraces → Lausanne → Geneva",
        description:
          "Drive west through the Lavaux UNESCO hillside terraces — 800 years of continuous viticulture carved into steep hillsides above Lake Geneva. Wine tasting at a family domaine (own account). Afternoon in Lausanne, evening in Geneva.",
        distanceKm: 100,
        stops: ["Lavaux Terraces", "Lausanne waterfront"],
        overnightCity: "Geneva",
      },
      {
        dayNumber: 7,
        title: "Geneva Departure",
        description:
          "Morning at leisure — the Jet d'Eau, the Old Town, or the Chocolate and Confectionery Museum. Private transfer to Geneva Airport.",
        stops: ["Geneva Old Town", "Geneva Airport"],
        overnightCity: "Geneva (departure)",
      },
    ],
  },

  {
    id: "4",
    slug: "swiss-cheese-culinary-discovery",
    title: "Swiss Cheese & Culinary Discovery",
    segment: "private",
    countries: ["Switzerland"],
    region: "Switzerland",
    durationDays: { min: 8, max: 8 },
    groupSize: { min: 2, max: 8 },
    description:
      "An eight-day immersion into Switzerland's gastronomic identity — from Lavaux UNESCO hillside terraces above Lake Geneva to Emmental cheese farms and Basel's Rhine-side dining.",
    highlights: [
      "Lavaux UNESCO terraced hillsides walk",
      "Gruyères cheese cellar and castle",
      "Emmental valley farm-to-table experience",
      "Solothurn — Switzerland's most beautiful Baroque city",
      "Basel Museum Night and Rhine swimming culture",
    ],
    included: [
      "7 nights handpicked hotel accommodation",
      "Daily breakfast",
      "Private chauffeured transfers throughout (V-Class or equivalent)",
      "English-speaking driver-guide",
      "Airport arrival & departure transfers",
      "24/7 on-trip support",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Meals other than breakfast",
      "Winery entrance fees and tastings",
      "Tips and gratuities",
      "Personal expenses",
    ],
    hotelTier: "4-star",
    priceFromEur: 2090,
    heroImage: "https://placehold.co/800x500/0F1E2E/FAE6CF?text=Cheese+%26+Wine+Discovery",
    tags: ["wine & food", "cultural", "scenic"],
    featured: false,
    published: true,
    travelStyle: "slow",
    days: [
      {
        dayNumber: 1,
        title: "Geneva Arrival → Lavaux",
        description:
          "Arrival at Geneva Airport. Drive east along the northern shore of Lake Geneva to the Lavaux wine region. Check in to a vineyard-view hotel and walk the Lavaux Vinorama trail at sunset.",
        distanceKm: 65,
        stops: ["Geneva Airport", "Lavaux Vinorama"],
        overnightCity: "Lausanne",
      },
      {
        dayNumber: 2,
        title: "Lavaux Tasting Day → Montreux",
        description:
          "Morning walk through the Lavaux UNESCO terraced hillsides — 800 years of history carved into the slopes above the lake. Afternoon in Montreux: the Chillon Castle (own account) and a lakeside promenade. Evening in one of the Riviera's best fish restaurants.",
        distanceKm: 35,
        stops: ["Lavaux cultural walk", "Chillon Castle", "Montreux Jazz Walk"],
        overnightCity: "Montreux",
      },
      {
        dayNumber: 3,
        title: "Gruyères → Fribourg",
        description:
          "Morning in the fortified hilltop village of Gruyères. Tour the cheese cellar at La Maison du Gruyère and visit the medieval castle. Afternoon in Fribourg — the Gothic Cathedral and the funicular down to the lower town.",
        distanceKm: 55,
        stops: ["Gruyères village", "La Maison du Gruyère", "Fribourg"],
        overnightCity: "Fribourg",
      },
      {
        dayNumber: 4,
        title: "Bern City Day",
        description:
          "A day in the Swiss capital. Rose Garden panorama, the Zytglogge clock tower, and the Federal Palace. Afternoon at the Bern Historical Museum or exploring the arcaded Old Town boutiques.",
        stops: ["Bern Rose Garden", "Federal Palace", "Bern Altstadt"],
        overnightCity: "Bern",
      },
      {
        dayNumber: 5,
        title: "Emmental Valley",
        description:
          "Drive east into the Emmental hills — the gentle, rural landscape that gives the famous cheese its name. Visit a traditional farmhouse dairy and the Emmental Show Dairy in Affoltern. Afternoon continues to the Baroque gem of Solothurn.",
        distanceKm: 70,
        stops: ["Emmental Show Dairy (Affoltern)", "Langenthal village"],
        overnightCity: "Solothurn",
      },
      {
        dayNumber: 6,
        title: "Solothurn → Basel",
        description:
          "Morning walk through Solothurn — Switzerland's most complete Baroque city, the so-called 'City of the Number 11'. Afternoon drive to Basel: the Rhine Middle Bridge, the Art Museum (largest medieval collection in the world), and the Old Town.",
        distanceKm: 45,
        stops: ["Solothurn Old Town", "Basel Art Museum", "Rhine waterfront"],
        overnightCity: "Basel",
      },
      {
        dayNumber: 7,
        title: "Basel → Alsace Villages Route",
        description:
          "Day trip across the French border into Alsace. Drive the scenic village route through Riquewihr, Kaysersberg, and Eguisheim — three of France's most beautiful villages. Local market and artisan food experiences (own account). Return to Basel for dinner.",
        distanceKm: 110,
        stops: ["Riquewihr", "Kaysersberg", "Eguisheim"],
        overnightCity: "Basel",
      },
      {
        dayNumber: 8,
        title: "Basel → Zürich Departure",
        description:
          "Morning stroll through Basel's Kleinbasel quarter or a visit to the Fondation Beyeler (own account). Private transfer to Zürich Airport.",
        distanceKm: 85,
        stops: ["Basel Kleinbasel", "Zürich Airport"],
        overnightCity: "Zürich (departure)",
      },
    ],
  },

  {
    id: "5",
    slug: "swiss-alps-express",
    title: "Swiss Alps Express Circuit",
    segment: "private",
    countries: ["Switzerland"],
    region: "Switzerland",
    durationDays: { min: 3, max: 3 },
    groupSize: { min: 1, max: 7 },
    description:
      "Three days, three iconic summits. A compact, high-impact introduction to the Swiss Alps — Titlis, Interlaken, and the Jungfrau region — designed for clients with limited time who want maximum mountain impact.",
    highlights: [
      "Mount Titlis revolving cable car",
      "Harder Kulm viewpoint above Interlaken",
      "Trümmelbach Falls inside the mountain",
      "Männlichen panorama walk",
      "Geneva or Zürich airport-to-airport routing",
    ],
    included: [
      "2 nights handpicked hotel accommodation",
      "Daily breakfast",
      "Private chauffeured transfers throughout (V-Class, GLE, or equivalent)",
      "English-speaking driver",
      "Airport arrival & departure transfers",
      "24/7 on-trip support",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Meals other than breakfast",
      "Mountain excursion tickets",
      "Tips and gratuities",
      "Personal expenses",
    ],
    hotelTier: "4-star",
    priceFromEur: 890,
    heroImage: "https://placehold.co/800x500/0F1E2E/FAE6CF?text=Swiss+Alps+Express",
    tags: ["adventure", "scenic", "short break"],
    featured: true,
    published: true,
    travelStyle: "countryside",
    days: [
      {
        dayNumber: 1,
        title: "Zürich → Mount Titlis → Lucerne",
        description:
          "Airport pickup and drive south to Engelberg. Ascend Mount Titlis (3,028 m) by the world's first revolving aerial gondola — the TITLIS Rotair — and walk across the cliff walk at the summit (own account). Continue to Lucerne for the evening.",
        distanceKm: 100,
        stops: ["Engelberg", "Mount Titlis summit", "Lucerne Chapel Bridge"],
        overnightCity: "Lucerne",
      },
      {
        dayNumber: 2,
        title: "Lucerne → Interlaken → Lauterbrunnen",
        description:
          "Morning walk through Lucerne's Old Town. Drive south over the Brünig Pass to Interlaken. Afternoon in the Lauterbrunnen Valley — Trümmelbach Falls thundering inside the cliff face, and Staubbach Falls cascading 300 m in free fall.",
        distanceKm: 95,
        stops: ["Brünig Pass", "Harder Kulm (funicular)", "Lauterbrunnen", "Trümmelbach Falls"],
        overnightCity: "Interlaken",
      },
      {
        dayNumber: 3,
        title: "Grindelwald → Männlichen → Geneva",
        description:
          "Early cable car to Männlichen for the famous panorama walk (own account) with views of Eiger, Mönch, and Jungfrau. Drive west to Geneva via the Simmental valley and the shores of Lake Geneva. Airport drop-off for your return flight.",
        distanceKm: 250,
        stops: ["Männlichen viewpoint", "Simmental valley", "Lake Geneva"],
        overnightCity: "Geneva (departure)",
      },
    ],
  },

  // ─── SUPERCAR ──────────────────────────────────────────────────────────────

  {
    id: "6",
    slug: "tuscan-ferrari-circuit",
    title: "Tuscan Ferrari Circuit",
    segment: "supercar",
    countries: ["Italy"],
    region: "Tuscany, Italy",
    durationDays: { min: 4, max: 4 },
    groupSize: { min: 1, max: 4 },
    description:
      "Four days behind the wheel of a Ferrari — or a Lamborghini if you prefer — on the roads that inspired the cars. Chianti back roads, the factory birthplace, and the Apennine mountain passes.",
    highlights: [
      "Ferrari or Lamborghini from our fleet in Florence",
      "Ferrari Museum in Maranello (birthplace of the Prancing Horse)",
      "Futa and Raticosa mountain passes",
      "Chianti wine country back roads",
      "5-star hotels throughout",
    ],
    included: [
      "3 nights premium hotel accommodation",
      "Daily breakfast",
      "Supercar hire for the duration (Ferrari or Lamborghini — model subject to availability)",
      "Fully scouted route notes and roadbook",
      "Lead or sweep vehicle available on request",
      "24/7 on-trip support",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Fuel",
      "Meals other than breakfast",
      "Museum and attraction entrance fees",
      "Tips and gratuities",
      "Personal expenses",
    ],
    hotelTier: "5-star",
    priceFromEur: 3490,
    heroImage: "https://placehold.co/800x500/2E1608/FAE6CF?text=Tuscan+Ferrari+Circuit",
    tags: ["adventure", "scenic", "supercar"],
    featured: true,
    published: true,
    days: [
      {
        dayNumber: 1,
        title: "Florence Collection → Chianti → Bologna",
        description:
          "Collect your Ferrari from our partner's Florence base in the morning. Drive south through the Chianti Classico wine country — Greve in Chianti, Panzano, the Chiantigiana road. Continue north-east via the Futa Pass (903 m) into Emilia-Romagna. Overnight in Bologna.",
        distanceKm: 160,
        stops: ["Greve in Chianti", "Panzano in Chianti", "Futa Pass"],
        overnightCity: "Bologna",
      },
      {
        dayNumber: 2,
        title: "Ferrari Museum → Maranello → Parma",
        description:
          "Morning visit to the Ferrari Museum in Maranello — every Prancing Horse generation under one roof (own account). Drive west through the Po Valley to Parma, capital of Parmigiano-Reggiano and Prosciutto di Parma. Dinner at a local trattoria.",
        distanceKm: 100,
        stops: ["Ferrari Museum Maranello", "Modena historic centre", "Parma"],
        overnightCity: "Parma",
      },
      {
        dayNumber: 3,
        title: "Apennine Passes → Cinque Terre Coast",
        description:
          "South over the Cisa Pass and Apennine ridge road into Liguria — spectacular mountain driving. Arrive on the Ligurian coast at La Spezia with views of Cinque Terre. Afternoon stroll in Portovenere.",
        distanceKm: 185,
        stops: ["Cisa Pass", "Pontremoli", "Portovenere"],
        overnightCity: "La Spezia",
      },
      {
        dayNumber: 4,
        title: "Ligurian Riviera → Monaco",
        description:
          "Drive west along the coast on the Via Aurelia — one of the great European scenic roads. Through Genoa's elevated motorway viaducts, along the Ponente Riviera, and into Monaco. Car return at Monaco or Nice on arrival.",
        distanceKm: 220,
        stops: ["Genoa (brief)", "Albenga", "Ventimiglia", "Monaco"],
        overnightCity: "Monaco (departure)",
      },
    ],
  },

  // ─── SELF-DRIVE ────────────────────────────────────────────────────────────

  {
    id: "7",
    slug: "amalfi-coast-self-drive",
    title: "Amalfi Coast Self-Drive",
    segment: "self-drive",
    countries: ["Italy"],
    region: "Campania, Italy",
    durationDays: { min: 5, max: 5 },
    groupSize: { min: 2, max: 4 },
    description:
      "Five days on the world's most dramatic coastal road — Positano, Ravello, Amalfi, and Pompeii — in a hire car, with a curated roadbook and navigation app.",
    highlights: [
      "Positano's stacked pastel houses above the sea",
      "Ravello's garden villa concerts",
      "Pompeii archaeological site",
      "Furore fjord — Italy's smallest hamlet",
      "Sorrento lemon groves and clifftop hotels",
    ],
    included: [
      "4 nights handpicked hotel accommodation",
      "Daily breakfast",
      "Hire car (compact or standard — your agent confirms class)",
      "Curated roadbook and navigation app",
      "Airport arrival & departure transfers",
      "24/7 on-trip support",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Fuel and tolls",
      "Meals other than breakfast",
      "Entrance fees to Pompeii and other sites",
      "Tips and gratuities",
      "Personal expenses",
    ],
    hotelTier: "4-star",
    priceFromEur: 1290,
    heroImage: "https://placehold.co/800x500/1A3A5C/FAF8F5?text=Amalfi+Coast",
    tags: ["scenic", "cultural", "city breaks"],
    featured: true,
    published: true,
    days: [
      {
        dayNumber: 1,
        title: "Naples Airport → Herculaneum → Positano",
        description:
          "Collect your car at Naples Airport and drive south. Stop at Herculaneum (own account) — often less crowded than Pompeii and better preserved. Continue along the SS163 coastal road to Positano. Park in the upper town and walk down to the beach.",
        distanceKm: 70,
        stops: ["Herculaneum archaeological site", "Vico Equense"],
        overnightCity: "Positano",
      },
      {
        dayNumber: 2,
        title: "Positano → Ravello → Amalfi",
        description:
          "Morning walk Positano's steep stepped streets. Drive east along the Amalfi Drive — every corner a new view — to Ravello, perched 350 m above the sea. Lunch at Villa Rufolo. Descend to Amalfi town for the afternoon. The Duomo and the ancient paper mills.",
        distanceKm: 35,
        stops: ["Ravello Villa Rufolo", "Scala village", "Amalfi Duomo"],
        overnightCity: "Amalfi",
      },
      {
        dayNumber: 3,
        title: "Praiano → Furore → Conca dei Marini",
        description:
          "A slower day on the quieter western Amalfi coast. Praiano's fishermen's terraces, the Furore Fjord — a narrow gorge where a handful of families still live — and the Emerald Grotto at Conca dei Marini (own account). Return to Amalfi for a waterfront dinner.",
        distanceKm: 30,
        stops: ["Praiano", "Furore Fjord", "Grotta dello Smeraldo"],
        overnightCity: "Amalfi",
      },
      {
        dayNumber: 4,
        title: "Pompeii → Sorrento",
        description:
          "Morning at Pompeii — the preserved Roman city frozen in 79 AD (own account). Drive north around the base of Vesuvius to Sorrento. An afternoon exploring the old town, the clifftop gardens, and the limonaia lemon groves.",
        distanceKm: 55,
        stops: ["Pompeii archaeological site", "Castellammare di Stabia", "Sorrento"],
        overnightCity: "Sorrento",
      },
      {
        dayNumber: 5,
        title: "Sorrento → Naples Departure",
        description:
          "Morning at leisure in Sorrento. Return via the SS145 Nastro Azzurro coastal road through Meta and Castellammare. Car return at Naples Airport.",
        distanceKm: 55,
        stops: ["Meta di Sorrento", "Naples Airport"],
        overnightCity: "Naples (departure)",
      },
    ],
  },

  {
    id: "8",
    slug: "french-riviera-road-trip",
    title: "French Riviera Road Trip",
    segment: "self-drive",
    countries: ["France"],
    region: "Côte d'Azur, France",
    durationDays: { min: 7, max: 7 },
    groupSize: { min: 2, max: 4 },
    description:
      "Seven days from Nice to Marseille on the Grande Corniche — Monaco, Eze, Cannes, the Gorges du Verdon, and Aix-en-Provence — with a curated roadbook from the flyEurope platform.",
    highlights: [
      "Monaco Grand Prix circuit on public roads",
      "Eze village — the eagle's nest above the sea",
      "Cannes old port and the Lérins Islands",
      "Gorges du Verdon — Europe's Grand Canyon",
      "Aix-en-Provence markets and Cézanne heritage",
    ],
    included: [
      "6 nights handpicked hotel accommodation",
      "Daily breakfast",
      "Hire car (standard or premium class)",
      "Curated roadbook and navigation app",
      "Airport arrival & departure transfers",
      "24/7 on-trip support",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Fuel, tolls, and parking",
      "Meals other than breakfast",
      "Entrance fees",
      "Tips and gratuities",
      "Personal expenses",
    ],
    hotelTier: "4-star",
    priceFromEur: 1190,
    heroImage: "https://placehold.co/800x500/1A2E4A/FAE6CF?text=French+Riviera",
    tags: ["scenic", "city breaks", "cultural"],
    featured: false,
    published: true,
    days: [
      {
        dayNumber: 1,
        title: "Nice Arrival → Monaco → Menton",
        description:
          "Collect car at Nice Airport. Drive east on the Grande Corniche — the road clinging to 500 m cliffs above the sea — to Monaco. Walk the Grand Prix circuit, visit the Casino terrace. Continue to the Italian border town of Menton.",
        distanceKm: 45,
        stops: ["Monaco Casino", "Monaco Grand Prix circuit", "Menton old town"],
        overnightCity: "Menton",
      },
      {
        dayNumber: 2,
        title: "Eze → Nice",
        description:
          "Morning in Eze Village — a medieval cluster of stone buildings at 427 m with views stretching to Corsica on a clear day. Nietzsche path down to the coast for a swim. Afternoon and evening in Nice: the Cours Saleya flower market, the Promenade des Anglais.",
        distanceKm: 30,
        stops: ["Eze Village", "Nietzsche footpath", "Nice Cours Saleya"],
        overnightCity: "Nice",
      },
      {
        dayNumber: 3,
        title: "Antibes → Cannes",
        description:
          "Drive west along the coast to Antibes — the Picasso Museum and the Antibes Juan-les-Pins jazz heritage. Continue to Cannes: the Croisette, the old port, and the hilltop district of Le Suquet. Optional boat to the Lérins Islands (own account).",
        distanceKm: 35,
        stops: ["Antibes Picasso Museum", "Juan-les-Pins", "Cannes Croisette"],
        overnightCity: "Cannes",
      },
      {
        dayNumber: 4,
        title: "Grasse → St-Paul-de-Vence",
        description:
          "Morning in Grasse — world capital of perfume. Tour an old-established parfumerie and the workshops behind Chanel No. 5's raw materials (own account). Afternoon in St-Paul-de-Vence — the gallery village with Miró, Léger, and Braque at the Fondation Maeght (own account).",
        distanceKm: 40,
        stops: ["Grasse Parfumerie", "Mougins village", "St-Paul-de-Vence"],
        overnightCity: "St-Paul-de-Vence",
      },
      {
        dayNumber: 5,
        title: "Gorges du Verdon",
        description:
          "A full day at the Gorges du Verdon — 25 km of turquoise water between 700 m limestone cliffs. Drive the Route des Crêtes along the south rim, stop at the Belvedere de la Mescla, and walk part of the Sentier Martel trail. Overnight in the perched village of Moustiers-Sainte-Marie.",
        distanceKm: 150,
        stops: ["Pont de l'Artuby", "Belvedere de la Mescla", "Moustiers-Sainte-Marie"],
        overnightCity: "Moustiers-Sainte-Marie",
      },
      {
        dayNumber: 6,
        title: "Aix-en-Provence",
        description:
          "Drive south through the Var plateau to Aix-en-Provence. Walk the Cours Mirabeau, visit the Atelier Cézanne (own account), and explore the morning market at Place Richelme. Afternoon at the Caumont Cultural Centre.",
        distanceKm: 85,
        stops: ["Aix-en-Provence Cours Mirabeau", "Atelier Cézanne", "Montagne Sainte-Victoire viewpoint"],
        overnightCity: "Aix-en-Provence",
      },
      {
        dayNumber: 7,
        title: "Cassis → Marseille Departure",
        description:
          "Morning drive to Cassis — a small fishing port beneath white limestone cliffs. Boat trip to the Calanques (own account), the sea-carved inlets accessible only by foot or boat. Drive to Marseille–Provence Airport for your return flight.",
        distanceKm: 55,
        stops: ["Cassis calanques boat trip", "Marseille Old Port (brief)", "Marseille Airport"],
        overnightCity: "Marseille (departure)",
      },
    ],
  },

  // ─── COACH ─────────────────────────────────────────────────────────────────

  {
    id: "9",
    slug: "rhine-valley-belgium-coach",
    title: "Rhine Valley & Belgium Classic",
    segment: "coach",
    countries: ["Belgium", "Germany"],
    region: "Belgium & Rhine Valley",
    durationDays: { min: 6, max: 6 },
    groupSize: { min: 40, max: 52 },
    description:
      "Six days across two countries — the preserved medieval cities of Belgium and the legendary castle-studded Rhine gorge. A proven coach itinerary with reliable hotel blocks and competitive net rates.",
    highlights: [
      "Bruges UNESCO city centre",
      "Ghent's illuminated medieval skyline",
      "Cologne Cathedral — 632 years in the building",
      "Loreley Rock and the Rhine Gorge",
      "Rüdesheim Drosselgasse wine alley",
    ],
    included: [
      "5 nights hotel accommodation (twin rooms, porterage included)",
      "Daily breakfast and dinner (half board)",
      "Full-size coach (49 seats, WiFi, air conditioning)",
      "Professional tour manager throughout",
      "Airport arrival & departure transfers by coach",
      "24/7 on-trip support",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Lunches",
      "Entrance fees to attractions",
      "Tips for tour manager and driver",
      "Personal expenses",
    ],
    hotelTier: "3-star",
    priceFromEur: 490,
    heroImage: "https://placehold.co/800x500/162840/FAF8F5?text=Rhine+%26+Belgium",
    tags: ["cultural", "scenic", "city breaks"],
    featured: false,
    published: true,
    days: [
      {
        dayNumber: 1,
        title: "Brussels Arrival → Ghent",
        description:
          "Coach pickup at Brussels Airport. Drive to Ghent for an afternoon walking tour — St. Bavo's Cathedral (Ghent Altarpiece, own account), the Korenlei quayside, and the illuminated towers at dusk. Overnight in Ghent.",
        distanceKm: 55,
        stops: ["Brussels Airport", "Ghent Korenlei", "St. Bavo's Cathedral"],
        overnightCity: "Ghent",
      },
      {
        dayNumber: 2,
        title: "Bruges",
        description:
          "Full day in Bruges — Europe's best-preserved medieval city. Guided walk through the UNESCO Old Town: Markt Square, the Burg, the Beguinage, and a lace demonstration (own account). Afternoon free for canal boat trips and chocolate shops.",
        distanceKm: 55,
        stops: ["Bruges Markt", "Bruges Beguinage", "Minnewater Lake"],
        overnightCity: "Bruges",
      },
      {
        dayNumber: 3,
        title: "Bruges → Maastricht → Cologne",
        description:
          "Morning drive east through the Flemish countryside to Maastricht — the Vrijthof square and the fortified city walls. Continue into Germany, arriving in Cologne in the late afternoon. Evening walk to see the Cathedral lit at night.",
        distanceKm: 275,
        stops: ["Maastricht Vrijthof", "Aachen (brief stop)", "Cologne Cathedral"],
        overnightCity: "Cologne",
      },
      {
        dayNumber: 4,
        title: "Cologne → Rhine Valley → Koblenz",
        description:
          "Morning guided tour of Cologne Cathedral. Drive south along the Rhine — the landscape tightening into the legendary gorge as the river cuts through slate hills crowned with ruined castles. Arrive in Koblenz at the Deutsches Eck — where the Moselle meets the Rhine.",
        distanceKm: 110,
        stops: ["Cologne Cathedral interior", "Loreley Rock", "Koblenz Deutsches Eck"],
        overnightCity: "Koblenz",
      },
      {
        dayNumber: 5,
        title: "Rüdesheim → Rhine Gorge → Frankfurt",
        description:
          "Morning in Rüdesheim: the Drosselgasse wine alley and a cable car over the Rhine to the Germania Monument (own account). Drive south along the river bank through the UNESCO Rhine Gorge to Frankfurt. Evening walk along the Sachsenhausen cider district.",
        distanceKm: 120,
        stops: ["Rüdesheim Drosselgasse", "Bacharach village", "Frankfurt Sachsenhausen"],
        overnightCity: "Frankfurt",
      },
      {
        dayNumber: 6,
        title: "Frankfurt Departure",
        description:
          "Morning at leisure in Frankfurt — the Römerberg old town, Goethe's birthplace, or the Städel Museum (own account). Coach transfer to Frankfurt Airport for your return flight.",
        stops: ["Frankfurt Römerberg", "Frankfurt Airport"],
        overnightCity: "Frankfurt (departure)",
      },
    ],
  },

  // ─── PRIVATE (non-Switzerland) ─────────────────────────────────────────────

  {
    id: "10",
    slug: "alpine-private-grand-tour",
    title: "Alpine Private Grand Tour",
    segment: "private",
    countries: ["Austria", "Germany"],
    region: "Austrian & Bavarian Alps",
    durationDays: { min: 5, max: 5 },
    groupSize: { min: 2, max: 12 },
    description:
      "Five days through the greatest mountain landscapes of central Europe — the Dolomites, the Grossglockner, Salzburg, and the Bavarian Lakes — in private transport sized to your group.",
    highlights: [
      "Grossglockner High Alpine Road (2,504 m)",
      "Cortina d'Ampezzo and the Dolomite UNESCO peaks",
      "Salzburg — Mozart, Baroque architecture, Fortress Hohensalzburg",
      "Berchtesgaden salt mines and Eagle's Nest access road",
      "Chiemsee — Bavaria's inland sea with palace island",
    ],
    included: [
      "4 nights handpicked hotel accommodation",
      "Daily breakfast",
      "Private chauffeured transfers (V-Class for 1–7 pax or Sprinter for 8–12 pax)",
      "English-speaking driver-guide",
      "Airport arrival & departure transfers",
      "24/7 on-trip support",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Meals other than breakfast",
      "Grossglockner toll road ticket",
      "Attraction entrance fees",
      "Tips and gratuities",
      "Personal expenses",
    ],
    hotelTier: "4-star",
    priceFromEur: 1690,
    heroImage: "https://placehold.co/800x500/0E1E2E/FAF8F5?text=Alpine+Grand+Tour",
    tags: ["scenic", "adventure", "cultural"],
    featured: false,
    published: true,
    travelStyle: "countryside",
    days: [
      {
        dayNumber: 1,
        title: "Innsbruck → Brenner Pass → Bolzano",
        description:
          "Begin in Innsbruck — the Goldenes Dachl and the Imperial Palace. Drive south over the Brenner Pass into South Tyrol. Bolzano is the meeting point of Alpine and Italian cultures — the Ötzi Iceman Museum (own account) and the vine-covered wine quarter.",
        distanceKm: 120,
        stops: ["Innsbruck Goldenes Dachl", "Brenner Pass", "Bolzano wine quarter"],
        overnightCity: "Bolzano",
      },
      {
        dayNumber: 2,
        title: "Dolomites → Cortina → Lienz",
        description:
          "Drive east through the Great Dolomite Road — the greatest mountain drive in Italy. Stop at the Tre Cime di Lavaredo viewpoint (own account) and the Misurina Lake. Overnight in Lienz, the capital of East Tyrol.",
        distanceKm: 130,
        stops: ["Passo Falzarego (2,105 m)", "Tre Cime di Lavaredo viewpoint", "Misurina Lake"],
        overnightCity: "Lienz",
      },
      {
        dayNumber: 3,
        title: "Grossglockner → Salzburg",
        description:
          "The Grossglockner High Alpine Road (own account for toll) — Austria's most spectacular mountain road, cresting at 2,504 m with views of the Pasterze Glacier. Descend to Zell am See for lunch, then drive north to Salzburg.",
        distanceKm: 175,
        stops: ["Grossglockner summit platform", "Pasterze Glacier viewpoint", "Zell am See"],
        overnightCity: "Salzburg",
      },
      {
        dayNumber: 4,
        title: "Salzburg → Berchtesgaden → Chiemsee",
        description:
          "Morning guided walk in Salzburg — Fortress Hohensalzburg, Mirabell Gardens, Mozart's birthplace. Afternoon cross into Germany to Berchtesgaden and the Königssee — a dark glacial lake enclosed by vertical rock walls. Overnight by Lake Chiemsee.",
        distanceKm: 85,
        stops: ["Fortress Hohensalzburg", "Königssee boat trip (own account)", "Lake Chiemsee"],
        overnightCity: "Prien am Chiemsee",
      },
      {
        dayNumber: 5,
        title: "Herrenchiemsee → Munich Departure",
        description:
          "Morning boat to the Herreninsel (own account) — Ludwig II's unfinished Versailles replica on an island in the lake. Drive west to Munich through the rolling Bavarian countryside. Airport drop-off for your return flight.",
        distanceKm: 90,
        stops: ["Herrenchiemsee Palace", "Munich Airport"],
        overnightCity: "Munich (departure)",
      },
    ],
  },
];
