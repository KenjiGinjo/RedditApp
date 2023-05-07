const API_DOMAIN = "https://api.reddit.com/";

namespace RequestFunc {
  export type RequestData<T> = {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    data?: T;
    url: string;
  };
  export type request = <R, T>(data: RequestData<T>) => Promise<R>;
}

const createKey = (path: string, data: any) => `${JSON.stringify(data)}${path}`;
const requestList = new Map();

const RequestMethod: RequestFunc.request = async ({
  method = "GET",
  data = null,
  url = "",
}) => {
  const requestKey = createKey(url, data);
  if (requestList.has(requestKey)) {
    requestList.get(requestKey)?.abort();
  }
  const controller = new AbortController();
  requestList.set(requestKey, controller);
  const signal = controller.signal;
  const response = await fetch(`${API_DOMAIN}${url}`, {
    method: method,
    ...() => {
      return data !== null ? { body: JSON.stringify(data) } : {};
    },
    signal,
  }).finally(() => requestList.delete(requestKey));
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

const _request = <R, T>(params: RequestFunc.RequestData<T>) =>
  RequestMethod<R, T>({
    method: params.method,
    url: params.url,
    data: params.data,
  });
export default _request;
