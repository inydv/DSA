async function retryApi(fn, retries = 3, delay = 1000) {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) throw error;
    await new Promise((resolve) => setTimeout(resolve, delay));
    return retryApi(fn, retries - 1, delay);
  }
}

const fetchData = () =>
  fetch("https://api.example.com/data").then((res) => {
    if (!res.ok) throw new Error("Network error");
    return res.json();
  });

retryApi(fetchData, 3, 1000)
  .then((data) => console.log("Success:", data))
  .catch((err) => console.error("Failed after 3 retries:", err));
