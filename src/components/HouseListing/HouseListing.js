import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./HouseListing.scss";
import DeleteIcon from "../SVGIcons/DeleteIcon";
import CoinIcon from "../SVGIcons/CoinIcon";

// function createData(id, image, address, price, chars, isSold, remove) {
//   return { id, image, address, price, chars, isSold, remove };
// }

const data = [
  {
    id: 1,
    street: "Avinguda Castellví",
    number: 10,
    city: "Molins de Rei",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    province: "Barcelona",
    country: "Spain",
    status: "available",
    type: "flat/apartment",
    description: "This is the description of the property",
    contact_mail: "pepito@assemblerschool.com",
    contact_phone: "+344767574657",
    condition: "new",
    room: 2,
    bath: 1,
    size: 67,
    price: 400000,
    pet: false,
    garden: true,
    air_conditioning: true,
    swimming_pool: false,
    terrace: true,
    publication_date: "2020/12/01 01:01:01",
  },
  {
    id: 2,
    street: "dsadasds",
    number: 10,
    city: "asdasdasd",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    province: "Barcelona",
    country: "Spain",
    status: "available",
    type: "flat/apartment",
    description: "This is the description of the property",
    contact_mail: "pepito@assemblerschool.com",
    contact_phone: "+344767574657",
    condition: "new",
    room: 5,
    bath: 3,
    size: 200,
    price: 100000,
    pet: true,
    garden: false,
    air_conditioning: true,
    swimming_pool: false,
    terrace: true,
    publication_date: "2020/12/01 01:01:01",
  },
];

// const axios = require("axios").default;

// const getProperties = () => {
//   const config = {
//     method: "get",
//     url: "http://localhost:3000/properties",
//     headers: {},
//   };

//   axios(config)
//     .then((response) => {
//       const properties = [response.data];
//       console.log(properties);
//       return properties;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// getProperties();

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Characteristics</TableCell>
            <TableCell align="center">Mark as Sold</TableCell>
            <TableCell align="center">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img
                  className="rounded size-img"
                  src={row.image}
                  alt={row.street + row.id}
                />
              </TableCell>
              <TableCell align="left">
                <p className="fs-5 fw-bold">{row.street}</p>
                <p>{row.city}</p>
              </TableCell>
              <TableCell align="left">
                <p className="text-warning">${row.price}</p>
              </TableCell>
              <TableCell align="left">{row.bath}</TableCell>
              <TableCell align="center">
                <CoinIcon size={22} />
              </TableCell>
              <TableCell align="center">
                <DeleteIcon size={20} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* TODO: Remove: lo añadí para poder ver el final */}
      <div style={{ "min-height": "200px" }} />
    </TableContainer>
  );
}
