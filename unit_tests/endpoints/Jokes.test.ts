import Jokes from "../../src/endpoints/Jokes";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  getRandomJokeAxiosResponse,
  getJokeCategoriesAxiosResponse,
  searchJokesAxiosResponse,
} from "./data/jokesTestData";

let mock;
let jokesEndpoint: Jokes;

beforeEach(async (): Promise<void> => {
  mock = new MockAdapter(axios);
  mock;
  jokesEndpoint = new Jokes();
});

describe("Unit test jokes endpoint class", (): void => {
  it("Get a random joke", async (): Promise<void> => {
    mock.onGet().reply(getRandomJokeAxiosResponse);
    const result = await jokesEndpoint.getRandomJoke();
    expect(result.status).toBe(200);
    expect(result.data.created_at).toBeDefined();
    expect(result.data.icon_url).toBeDefined();
    expect(result.data.id).toBeDefined();
    expect(result.data.updated_at).toBeDefined();
    expect(result.data.url).toBeDefined();
    expect(result.data.value).toBeDefined();
  });

  it("Get joke categories", async (): Promise<void> => {
    mock.onGet().reply(getJokeCategoriesAxiosResponse);
    const result = await jokesEndpoint.getJokeCategories();
    expect(result.status).toBe(200);
    expect(result.data).toBeDefined();
    expect(result.data.length).toBeGreaterThanOrEqual(1);
  });

  it("Search jokes", async (): Promise<void> => {
    mock.onGet().reply(searchJokesAxiosResponse);
    const response = await jokesEndpoint.searchJokes("shotgun");
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data.total).toBeGreaterThanOrEqual(1);
    response.data.result.forEach((joke) => {
      expect(joke.value.toLowerCase()).toContain("shotgun");
    });
  });
});
