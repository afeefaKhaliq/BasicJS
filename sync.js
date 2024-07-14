const fetchDataSync = () => {
    fetchData('api1', 10000, (data1) => {
      console.log('Data from api1:', data1);
      fetchData('api2', 5000, (data2) => {
        console.log('Data from api2:', data2);
        fetchData('api3', 7000, (data3) => {
          console.log('Data from api3:', data3);
          console.log('All data fetched.');
        });
      });
    });
  };
  
  const fetchData = (api, delay, callback) => {
    setTimeout(() => {
      callback(`Data from ${api}`);
    }, delay);
  };
  
  fetchDataSync();
  