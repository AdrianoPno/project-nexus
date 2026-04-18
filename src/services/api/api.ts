import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

export const campaignService = {
  // Busca campanhas filtradas por região
  async getCampaigns(region?: string) {
    const response = await api.get("/campaigns", {
      params: region ? { region } : {},
    });
    return response.data;
  },
};

export default api;
