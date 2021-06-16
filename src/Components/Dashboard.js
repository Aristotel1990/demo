import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useStateValue } from "../reducers/StateProvider";

function Dashboard() {
  const [{ basket }, dispatch] = useStateValue();

  const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
      let direction = "ascending";
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === "ascending"
      ) {
        direction = "descending";
      }
      setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
  };

  const ProductTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
      <Table striped bordered hover>
        <caption>Customers</caption>
        <thead>
          <tr>
            <th>
              <Button
                variant="light"
                type="Button"
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                Name
              </Button>
            </th>
            <th>
              <Button
                variant="light"
                type="Button"
                onClick={() => requestSort("surname")}
                className={getClassNamesFor("surname")}
              >
                Surname
              </Button>
            </th>
            <th>
              <Button
                variant="light"
                type="Button"
                onClick={() => requestSort("address")}
                className={getClassNamesFor("address")}
              >
                Address
              </Button>
            </th>
            <th>
              <Button
                variant="light"
                type="Button"
                onClick={() => requestSort("address2")}
                className={getClassNamesFor("address2")}
              >
                Address 2
              </Button>
            </th>
            <th>
              <Button
                variant="light"
                type="Button"
                onClick={() => requestSort("nationality")}
                className={getClassNamesFor("nationality")}
              >
                Nationality
              </Button>
            </th>
            <th>
              <Button
                variant="light"
                type="Button"
                onClick={() => requestSort("age")}
                className={getClassNamesFor("age")}
              >
                Age
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.address}</td>
              <td>{item.address2}</td>
              <td>{item.nationality}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <div className="App">
      <ProductTable products={basket} />
    </div>
  );
}

export default Dashboard;
