import { useState, useEffect, useCallback } from "react";
import { campaignService } from "../services/api/api";

export function useCampaigns(region?: string) {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCampaigns = useCallback(async () => {
    try {
      setLoading(true);
      const data = await campaignService.getCampaigns(region);
      setCampaigns(data);
    } catch (err: any) {
      setError(err.message || "Erro ao carregar campanhas");
    } finally {
      setLoading(false);
    }
  }, [region]);

  useEffect(() => {
    fetchCampaigns();
  }, [fetchCampaigns]);

  return { campaigns, loading, error, refetch: fetchCampaigns };
}
