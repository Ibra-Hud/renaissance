const insightsUrl = "/api/insights";
const finalInsightUrl = "/api/finalInsights";

export const insights = async (goal: string) => {
  return await fetch(insightsUrl, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ goal: goal }),
  });
};

export const finalInsight = async (goals: string[]) => {
  return await fetch(finalInsightUrl, {
    method: "POST",
    headers: { "content-Type": "applications/json" },
    body: JSON.stringify({ goals: goals }),
  });
};
