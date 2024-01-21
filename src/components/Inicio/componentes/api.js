export async function fetchData() {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching data:', error);
    }
  }