const responseJSON = (response, json) => {
  return response.status(200).json(json);
};

const responseError = (response, error) => {
  return response.status(500).json({error: error.message});
};

const requestData = (request, response) => {
  let data = request.body;

  if (request.hasOwnProperty('user')) {
    let { user } = request;
    return {data, user};
  }

  return {data};
};

const baseController = async (params) => {
  let { request, response, service } = params;
  try {
    let { data, user } = requestData(request, response);
    let result = await service(data, user);
    return responseJSON(response, result);
  } catch (error) {
    return responseError(response, error);
  }
}

module.exports = { baseController };