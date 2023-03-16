const LIMIT = 10;

const baseListService = async (params) => {
  let { data, db, lister, counter } = params;
  let { page } = data;

  let total = await counter(data, db);
  let pages = Math.ceil((total/LIMIT));
  let offset = (page -1) * LIMIT;

  let dataList = { filter: data, limit: LIMIT, offset: offset };
  let list = await lister(dataList, db);

  return { page, pages, list, total };
};

module.exports = { baseListService };