const { baseController } = require("../util/baseController")
const service = require("./service")

module.exports = {

  async insert(request, response) {
    return await baseController({request, response, service: service.insert});
  },

  async update(request, response) {
    return await baseController({request, response, service: service.update});
  },

  async delete(request, response) {
    return await baseController({request, response, service: service.delete});
  },

  async list(request, response) {
    return await baseController({request, response, service: service.list});
  },

  async find(request, response) {
    return await baseController({request, response, service: service.find});
  },

}