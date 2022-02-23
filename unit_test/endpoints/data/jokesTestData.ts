const getRandomJokeAxiosResponse = function getResponse() {
  return [
    200,
    {
      categories: [],
      created_at: "2020-01-05 13:42:26.447675",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "QlwDavQbT1uoVgECA2RYAg",
      updated_at: "2020-01-05 13:42:26.447675",
      url: "https://api.chucknorris.io/jokes/QlwDavQbT1uoVgECA2RYAg",
      value:
        "Chuck Norris has already been to mars thats why there are no signs of life there",
    },
  ];
};

const getJokeCategoriesAxiosResponse = function getResponse() {
  return [
    200,
    [
      "animal",
      "career",
      "celebrity",
      "dev",
      "explicit",
      "fashion",
      "food",
      "history",
      "money",
      "movie",
      "music",
      "political",
      "religion",
      "science",
      "sport",
      "travel",
    ],
  ];
};

const searchJokesAxiosResponse = function getResponse() {
  return [
    200,
    {
      total: 1,
      result: [
        {
          categories: [],
          created_at: "2020-01-05 13:42:30.177068",
          icon_url:
            "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
          id: "i82kQBeUQGOctlk2_tzfVQ",
          updated_at: "2020-01-05 13:42:30.177068",
          url: "https://api.chucknorris.io/jokes/i82kQBeUQGOctlk2_tzfVQ",
          value:
            "When Chuck Norris hunts any type of game bird, he doesnt need a shotgun. He prefers to throw handfuls of gravel instead.",
        },
      ],
    },
  ];
};

export {
  getRandomJokeAxiosResponse,
  getJokeCategoriesAxiosResponse,
  searchJokesAxiosResponse,
};
