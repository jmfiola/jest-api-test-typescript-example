import Jokes from "../../src/endpoints/Jokes";

let jokes: Jokes;

describe("Jokes endpoint", (): void => {
  beforeAll(async (): Promise<void> => {
    jokes = new Jokes();
  });
  it("Get a random joke", async (): Promise<void> => {
    const response = await jokes.getRandomJoke();
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data.created_at).toBeDefined();
    expect(response.data.icon_url).toBeDefined();
    expect(response.data.id).toBeDefined();
    expect(response.data.updated_at).toBeDefined();
    expect(response.data.url).toBeDefined();
    expect(response.data.value).toBeDefined();
    expect(response.data.value).toContain("Chuck Norris");
  });

  it("Get joke categories", async (): Promise<void> => {
    const response = await jokes.getJokeCategories();
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toBeDefined();
    expect(response.data.length).toBeGreaterThanOrEqual(1);
  });

  it("Search jokes", async (): Promise<void> => {
    const response = await jokes.searchJokes("shotgun");
    expect(response.status).toBe(200);
    expect(response.data.total).toBeGreaterThanOrEqual(1);
  });
});
