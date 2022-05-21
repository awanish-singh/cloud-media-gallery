import PeopleItem from "./PeopleItem";

import classes from "./PeopleList.module.css";
import dummy from "../../dummy.png";
import { useSelector } from "react-redux";

const DUMMY_DATA = [
  {
    id: "p1",
    personId: "p1",
    url: dummy,
    alt: "person1",
    name: "Person1",
  },
  {
    id: "p2",
    personId: "p2",
    url: dummy,
    alt: "person2",
    name: "Person2",
  },
  {
    id: "p3",
    personId: "p3",
    url: dummy,
    alt: "person3",
    name: "Person3",
  },
  {
    id: "p4",
    personId: "p4",
    url: dummy,
    alt: "person4",
    name: "Person4",
  },
  {
    id: "p5",
    personId: "p5",
    url: dummy,
    alt: "person5",
    name: "Person5",
  },
  {
    id: "p6",
    personId: "p6",
    url: dummy,
    alt: "person6",
    name: "Person6",
  },
  {
    id: "p7",
    personId: "p7",
    url: dummy,
    alt: "person7",
    name: "Person7",
  },
  {
    id: "p8",
    personId: "p8",
    url: dummy,
    alt: "person8",
    name: "Person8",
  },
];

const PeopleList = (props) => {
  const { people } = useSelector((state) => state.people);
  const peopleComp = people.map((val) => {
    return (
      <li key={val.id.value} className={classes.item}>
        <PeopleItem
          name={val.name.first + " " + val.name.last}
          url={val.picture.large}
        />
      </li>
    );
  });
  return (
    <div>
      <ul className={classes.list}>{peopleComp}</ul>
    </div>
  );
};

export default PeopleList;
