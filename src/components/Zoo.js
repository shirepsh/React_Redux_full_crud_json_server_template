import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAnimalsAsync,
  addAnimalAsync,
  delAnimalAsync,
  updAnimalAsync,
  selectUpdStatus,
  selectZoo,
} from "../slicers/zooSlice";

const Zoo = () => {
  //myzoo & flag const
  const myzoo = useSelector(selectZoo);
  const updStatus = useSelector(selectUpdStatus);
  //cont dispatch func
  const dispatch = useDispatch();
  //useState for adding products
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  //called to getprods function
  useEffect(() => {
    dispatch(getAnimalsAsync());
  }, [updStatus]);

  return (
    <div className="backgroundZoo">
      <div className="ZooTitle">our animals</div>
      <br />
      <div className="addAnimal">
        Type: <input onChange={(e) => setType(e.target.value)}></input>
        Name: <input onChange={(e) => setName(e.target.value)}></input>
        Age: <input onChange={(e) => setAge(e.target.value)}></input> <br />
        <br />
        <button
          className="addBtn"
          onClick={() => dispatch(addAnimalAsync({ type, name, age }))}
        >
          add new animal
        </button>{" "}
      </div>{" "}
      <br />
      {myzoo.length > 0 &&
        myzoo.map((p, i) => (
          <div key={i}>
            <div class="row row-cols-1 row-cols-md-4 g-8">
            <div class="card" >
              <div class="card-body">
              <div class="d-flex justify-content-center">
                Animal Type: {p.type} <br /> Animal Name: {p.name} <br /> Animal age: {p.age} <br/></div>
                <div class="d-flex justify-content-center">
                <button onClick={() => dispatch(delAnimalAsync(p.id))}>remove</button>
                <br/>
                <button onClick={() => dispatch(updAnimalAsync({ type, age, name, id: p.id }))}>upd</button></div>
              </div>
            </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Zoo;
