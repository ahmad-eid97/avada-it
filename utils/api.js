export const api = {
  get: async (url) => {
    const res = await fetch(url, {
      method: "GET",
      contentType: "application/json"
    });

    return res.json();
  },
  post: async (url, body) => {
    const res = await fetch(url, {
      method: "POST",
      contentType: "application/json",
      body: JSON.stringify(body)
    });

    return res.json();
  },
  patch: async (url, body) => {
    const res = await fetch(url, {
      method: "PATCH",
      contentType: "application/json",
      body: JSON.stringify(body)
    });

    return res.json();
  },
  delete: async (url, body) => {
    const res = await fetch(url, {
      method: "PATCH",
      contentType: "application/json",
      data: JSON.stringify(body)
    });

    return res.json();
  }
}