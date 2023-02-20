// 拦截器
const interceptors = async (options: UniApp.RequestOptions) => {
  try {
    // TODO 请求封装
    const res = await uni.request(options);
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

// 默认配置
const defaultConfig = {
  header: {
    "content-type": "application/json",
  },
};

export class request {
  static get(url: string, data: any, config: object = {}) {
    return interceptors({
      ...defaultConfig,
      ...config,
      url,
      data,
      method: "GET",
    });
  }

  static post(url: string, data: any, config: object = {}) {
    const header = {
      "content-type": "application/x-www-form-urlencoded",
    };
    return interceptors({
      ...defaultConfig,
      // 重写默认 header
      header,
      ...config,
      url,
      data,
      method: "POST",
    });
  }

  static put(url: string, data: any, config: object = {}) {
    return interceptors({
      ...defaultConfig,
      ...config,
      url,
      data,
      method: "PUT",
    });
  }

  static delete(url: string, data: any, config: object = {}) {
    return interceptors({
      ...defaultConfig,
      ...config,
      url,
      data,
      method: "DELETE",
    });
  }
}
