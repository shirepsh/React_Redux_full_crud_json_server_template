import axios from "axios";
const SERVER='http://localhost:3006/Animals'

//get function
export function fetchAnimals() {
  return new Promise((resolve) =>
    axios.get(SERVER).then((res) => resolve({ data: res.data }))
  );
}

//add function
export function addAnimal(newProd) {
    return new Promise((resolve) =>
      axios.post(SERVER,newProd).then((res) => resolve({ data: res.data }))
    );
  }

//del function
export function delAnimal(id) {
  return new Promise((resolve) =>
    axios.delete(`${SERVER}/${id}`).then((res) => resolve({ data: res.data }))
  );
}

//upd function
export function updAnimal(newAnimal) {
  return new Promise((resolve) =>
    axios.put(`${SERVER}/${newAnimal.id}`, newAnimal).then((res) => resolve({ data: res.data }))
  );
}
 