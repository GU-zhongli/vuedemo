
export const setCookie = (key: string, value: string, options: Record<string, any> = {}) => {
  const cookieOptions = {
    path: '/',
    ...options,
  };

  document.cookie = `${key}=${encodeURIComponent(value)}; ${serializeOptions(cookieOptions)}`;
};

export const getCookie = (key: string) => {
  const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
    const [name, value] = cookie.split('=');
    acc[name] = decodeURIComponent(value);
    return acc;
  }, {});

  return cookies[key];
};

export const removeCookie = (key: string) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
};

const serializeOptions = (options: Record<string, any>) => {
  return Object.entries(options)
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');
};