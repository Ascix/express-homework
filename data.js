const episodes = [
  {
    id: 1,
    season: 1,
    episode: 1,
    name: "Pilot",
    air_date: "Nov 11, 2004",
    length: 43,
    blurb:
      "Young kindergarten teacher Rebecca Adler collapses in her classroom after losing intelligible speech while teaching students.",
    characters: [1, 2, 3, 4],
  },
  {
    id: 2,
    season: 1,
    episode: 2,
    name: "Paternity",
    air_date: "Nov 23, 2004",
    length: 43,
    blurb:
      "The team helps a high school boy (16) who has double vision and night terrors. (Clinic Cases: Unvaccinated baby, man with boil on leg.)",
    characters: [1, 2, 3, 4],
  },
  {
    id: 3,
    season: 1,
    episode: 3,
    name: "Occam's Razor",
    air_date: "Nov 30, 2004",
    length: 44,
    blurb:
      "A college boy whose low blood pressure does not respond with IV fluids piques House's curiosity. Clinic Cases: A woman who had a cold last week, man with a sore throat, woman whose leg hurts after running 6 miles, a boy and his MP3 Player.",
    characters: [1, 2, 3, 4],
  },
  // etc
];

const characters = [
  {
    id: 1,
    name: "Dr. Gregory House",
    actor: "Hugh Laurie",
  },
  {
    id: 2,
    name: "Dr. Lisa Cuddy",
    actor: "BLisa Edelstein",
  },
  {
    id: 3,
    name: "Dr. Eric Foreman",
    actor: "Omar Epps",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    actor: "Robert Sean Leonard",
  },
  // etc
];

module.exports = {
  episodes,
  characters,
};
