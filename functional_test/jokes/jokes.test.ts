import Jokes from "../../src/endpoints/Jokes";

let jokes: Jokes;

describe("Jokes endpoint", (): void => {
  beforeAll(async (): Promise<void> => {
    jokes = new Jokes();
  });
  it("Get a random joke", async (): Promise<void> => {
    const response = await jokes.getRandomJoke();
    expect(response.status).toBe(200);
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
    expect(response.data).toBeDefined();
    expect(response.data.length).toBeGreaterThanOrEqual(1);
  });

  it("Search jokes with shotgun in the query", async (): Promise<void> => {
    const response = await jokes.searchJokes("shotgun");
    expect(response.status).toBe(200);
    expect(response.data.total).toBeGreaterThanOrEqual(1);
  });

  it("Search for a joke but none are returned", async (): Promise<void> => {
    const response = await jokes.searchJokes(
      "I don't exist!!!! abcdefghijklmnopqrstuvwxyz. I like trains."
    );
    expect(response.status).toBe(200);
    expect(response.data.result.length).toBe(0);
    expect(response.data.total).toBe(0);
  });

  it("Search using a non-existent joke id", async (): Promise<void> => {
    const response = await jokes.restClient.sendGet({ route: "/unknown" });
    expect(response.status).toBe(404);
    expect(response.data.error).toBe("Not Found");
    expect(response.data.message).toBe('Joke with id "unknown" not found.');
    expect(response.data.timestamp).toBeDefined();
    expect(response.data.path).toBe("/jokes/unknown");
  });

  it("Hit jokes endpoint with a bad route", async (): Promise<void> => {
    const response = await jokes.restClient.sendGet({ route: "/unknown/asdf" });
    expect(response.status).toBe(404);
    expect(response.data.error).toBe("Not Found");
    expect(response.data.message).toBe("No message available");
    expect(response.data.timestamp).toBeDefined();
    expect(response.data.path).toBe("/jokes/unknown/asdf");
  });

  it("Hit jokes endpoint with unnecessary headers", async (): Promise<void> => {
    const response = await jokes.restClient.sendGet({
      route: "/random",
      headers: { foo: "bar" },
    });
    expect(response.status).toBe(200);
    expect(response.data.created_at).toBeDefined();
    expect(response.data.icon_url).toBeDefined();
    expect(response.data.id).toBeDefined();
    expect(response.data.updated_at).toBeDefined();
    expect(response.data.url).toBeDefined();
    expect(response.data.value).toBeDefined();
    expect(response.data.value).toContain("Chuck");
  });

  it("Hit jokes endpoint using a method that is not allowed", async (): Promise<void> => {
    const response = await jokes.restClient.sendPost({ route: "/random" });
    expect(response.status).toBe(405);
    expect(response.data).toBe("");
  });
});
