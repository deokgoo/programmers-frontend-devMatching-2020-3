const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (url) => {
  try {
    const result = await fetch(url).then( res => {
      console.log(res.status);
    });
    return result.json();
  } catch (e) {
    console.log('fail');
    console.warn(e);

    return 'fail';
  }
};

const api = {
  fetchCats: keyword => {
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
  fetchCatInfo: keyword => {
    return request(`${API_ENDPOINT}/api/cats/${keyword}`);
  }
};
