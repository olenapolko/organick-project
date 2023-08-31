import axios from "axios";
axios.defaults.baseURL = "http://localhost:4004";

export async function getAllProducts() {
    return await axios.get("/product");
}

export async function getCategoryById(id) {
    return await axios.get(`/category/${id}`);
}

export async function addUser({ userName, surName, phone, email, address }) {
    const user = { userName, surName, phone, email, address };
    return await axios.post("/user", user);
}

export async function addOrder({userName, surName, email, phone, message, products}) {
    const order = {userName, surName, email, phone, message, products};
    return await axios.post("/order", order);
}

export async function getAllOrders() {
    return await axios.get("/order");
}

export async function getAllSubscribers() {
    return await axios.get("/subscriber");
}

export async function addSubscriber(email) {
    return await axios.post("/subscriber", { email });
}

export async function getAllExperts() {
    return await axios.get("/experts");
}

export async function getAllNews() {
    return await axios.get("/news");
}

export async function getAllProjects() {
    return await axios.get("/projects");
}
