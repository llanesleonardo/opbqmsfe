 
 
export const IsoDate = (currentDate) =>{
    // Get components
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() is zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    
    // Format into ISO 8601 string
    return `${year}-${month}-${day}T${hours}:${minutes}`;
 }

