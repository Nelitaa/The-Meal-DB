const getComments = async (f) => {
  const res = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dJkBaFu7e8jdpHbmcAqU/comments?item_id=${f}`,
  );
  const datas = await res.json();
  return datas;
};

export default getComments;
