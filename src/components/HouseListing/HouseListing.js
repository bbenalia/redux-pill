import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// function createData(id, image, address, price, chars, isSold, remove) {
//   return { id, image, address, price, chars, isSold, remove };
// }

const data = [
  {
    id: 1,
    street: "Avinguda Castellví",
    number: 10,
    city: "Molins de Rei",
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
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Characteristics</TableCell>
            <TableCell align="right">Mark as Sold</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.country}
              </TableCell>
              <TableCell align="right">{row.street}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.bath}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">R</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
