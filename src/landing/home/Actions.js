export const sendRequest = async (data) => {
  const response = await fetch("/api/send-request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
};
