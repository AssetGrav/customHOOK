import httpService from "../services/http.service";
const qualityAndPoint = `quality/`;

const qualityService =  {
    update: async(id, content) => {
        const { data } = await httpService.put(qualityAndPoint + id, content);
        return data;
    },
    get: async(id) => {
        const { data } = await httpService.get(qualityAndPoint+id);
        return data;
    },
    fetchAll: async () => {
        const { data } = await httpService.get(qualityAndPoint);
        return data;
    },
    create: async (content) => {
        const { data } = await httpService.post(qualityAndPoint, content);
        return data;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(qualityAndPoint + id + "fvd");
        return data;
    }
}
export default qualityService;