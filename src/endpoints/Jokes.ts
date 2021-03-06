import { AxiosResponse } from "axios";

import { AEndpoint } from "./abstracts/AEndpoint";

export default class Jokes extends AEndpoint {
  constructor() {
    super("/jokes");
  }

  public async getRandomJoke(category?: string): Promise<AxiosResponse> {
    let params = null;
    if (category) {
      params = { category: category };
    }
    return this.restClient.sendGet({ route: "/random", params });
  }

  public async getJokeCategories(): Promise<AxiosResponse> {
    return this.restClient.sendGet({ route: "/categories" });
  }

  public async searchJokes(query: string): Promise<AxiosResponse> {
    return this.restClient.sendGet({
      route: "/search",
      params: { query: query },
    });
  }
}
