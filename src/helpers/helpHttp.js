export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    // Cabeceras por default
    const defaultHeader = {
      accept: "application/json",
    };

    // Si el endpoint no contesta podemos cancelar la petición
    const controller = new AbortController();
    options.signal = controller.signal;

    // Si no se especifica método, ejecutaremos GET
    options.method = options.method || "GET";
    // Si se envian cabeceras las mezclamos con las definidas por default
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    // Transformamos el body a texto
    // Utilizamos el operador de cortocicuito || por si la petición no incluye body
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    //console.log(endpoint, options);

    // Si la petición demora más de 3 segundos abortamos
    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
