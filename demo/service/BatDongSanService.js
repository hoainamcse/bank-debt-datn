export const BatDongSanService = {
  getBatDongSan() {
    return fetch('/demo/data/bat-dong-san.json', {
      headers: { 'Cache-Control': 'no-cache' },
    })
      .then(res => res.json())
      .then(d => d.data);
  },
};
