const fetchDataAsync = async () => {
    try {
      const results = await Promise.all([
        fetchData('API1', 10000), // Delay of 10000 ms (10 seconds)
        fetchData('API2', 5000),  // Delay of 5000 ms (5 seconds)
        fetchData('API3', 7000)   // Delay of 7000 ms (7 seconds)
      ]);
      
      console.log('All fetched data:', results);
      return results;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  // Simulated fetch function with delay
  const fetchData = (API, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Data from ${API}`);
      }, delay);
    });
  };
  

  fetchDataAsync().then(data => {
    console.log('Received data:', data);
  }).catch(error => {
    console.error('Error:', error);
  });
  