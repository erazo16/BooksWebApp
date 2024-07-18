import axios from "axios";

export const getBooks = async () => {
    try {
        const response = await axios("https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev", {
            method : "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        console.log("response get", response);
        const data = response?.data?.default;
        console.log("DATA INFORMATION", data.data); 
        return data
    } catch (error) {
        console.log("ERROR API getInfo :", error);
    }
}
