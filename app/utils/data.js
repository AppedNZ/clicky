export const getServicesAvailability = async () => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbx9VDyi5-OhtaSeTw8SrIYEVZGeoE3KcWqStVP9utCaGw-M-F-2gSkkCioIzwxjNaWQSQ/exec"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log(response); // Use the fetched data here
    const data = await response.json();

    return data; // Return the data so it can be used elsewhere
  } catch (error) {
    console.error("Error fetching the data:", error);
    throw error; // Optionally re-throw the error for further handling
  }
};
