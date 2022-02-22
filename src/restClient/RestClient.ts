import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from "axios";
import { Logger } from "tslog";
import { stringify } from "yaml";

import https from "https";

import ConfigHandler from "../config/configHandler";

const config = ConfigHandler.getInstance();
const log = new Logger({
  minLevel: config.environmnetConfig.log_level,
  dateTimeTimezone:
    config.environmnetConfig.time_zone ||
    Intl.DateTimeFormat().resolvedOptions().timeZone,
});

function isSet(property): boolean {
  return property !== undefined && property !== null;
}

export class RestClient {
  private static authToken: string;

  private axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({ baseURL: baseUrl });
  }

  private httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  static async getToken() {
    RestClient.authToken = "asdf";
  }

  public async callEndpoint(
    url: string,
    method: Method,
    authToken?: string,
    data?: object,
    params?: object,
    headers?: any,
    additionalConfigs?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    let response;
    let responseLog = "Response: ";

    let requestHeaders = headers;

    // if headers are not passed in, use the default headers
    if (requestHeaders == undefined) {
      requestHeaders = { ...config.commonConfig.request_headers };
    }

    // if authToken is passed in, add it to the request headers
    if (authToken !== undefined) {
      requestHeaders = {
        ...requestHeaders,
        ...{
          Authorization: `Bearer ${authToken}`,
        },
      };
    }
    // if we have not set the auth headers yet, set them
    else if (!requestHeaders.Authorization) {
      await RestClient.getToken();
    }

    log.debug(
      RestClient.prepareLogRecord(
        url,
        method,
        requestHeaders,
        data,
        additionalConfigs,
        params
      )
    );

    await this.axiosInstance
      .request({
        url,
        method,
        data,
        headers: requestHeaders,
        httpsAgent: this.httpsAgent,
        params,
        ...additionalConfigs,
      })
      .then((res) => {
        response = res;
        responseLog = `<Success> Status = ${res.status} ${res.statusText}`;
      })
      .catch((error) => {
        response = error.response;
        if (response === undefined)
          responseLog = `<Error> Something wrong happened, did not get proper error from server! (${error.message})`;
        else
          responseLog = `<Error> Status = ${response.status} ${response.statusText}, ${error.message}`;
      });
    log.debug(responseLog);
    return response;
  }

  public async sendPost(
    url: string,
    authToken?: string,
    data?: object,
    params?: object,
    headers?: any,
    additionalConfigs?: AxiosRequestConfig
  ): Promise<any> {
    return this.callEndpoint(
      url,
      "POST",
      authToken,
      data,
      params,
      headers,
      additionalConfigs
    );
  }

  public async sendGet(
    url: string,
    authToken?: string,
    params?: object,
    headers?: any,
    additionalConfigs?: AxiosRequestConfig
  ): Promise<any> {
    return this.callEndpoint(
      url,
      "GET",
      authToken,
      null,
      params,
      headers,
      additionalConfigs
    );
  }

  public async sendDelete(
    url: string,
    authToken?: string,
    params?: object,
    headers?: any,
    additionalConfigs?: AxiosRequestConfig
  ): Promise<any> {
    return this.callEndpoint(
      url,
      "DELETE",
      authToken,
      null,
      params,
      headers,
      additionalConfigs
    );
  }

  public async sendPatch(
    url: string,
    authToken?: string,
    data?: object,
    headers?: any,
    additionalConfigs?: AxiosRequestConfig
  ): Promise<any> {
    return this.callEndpoint(
      url,
      "PATCH",
      authToken,
      data,
      null,
      headers,
      additionalConfigs
    );
  }

  public async sendPut(
    url: string,
    authToken?: string,
    data?: object,
    headers?: any,
    additionalConfigs?: AxiosRequestConfig
  ): Promise<any> {
    return this.callEndpoint(
      url,
      "PUT",
      authToken,
      data,
      null,
      headers,
      additionalConfigs
    );
  }

  private static prepareLogRecord(
    url: string,
    method: Method,
    headers?: any,
    data?: object,
    additionalConfigs?: AxiosRequestConfig,
    params?: object
  ): string {
    let logRecord = `Request: ${method} ${url}`;
    if (isSet(headers))
      logRecord = `${logRecord}\nHeaders: ${stringify(headers)}`;

    if (isSet(params)) logRecord = `${logRecord}\nParams: ${stringify(params)}`;
    if (isSet(additionalConfigs))
      logRecord = `${logRecord}\nAdditional Configuration: ${stringify(
        additionalConfigs
      )}`;

    if (isSet(data)) {
      const jsonData = stringify(data);
      // We don't want to log anything that isn't json data
      logRecord = `${logRecord}\nData: ${
        jsonData === undefined ? "Some data, not JSON!" : jsonData
      }`;
    }

    return logRecord;
  }
}
