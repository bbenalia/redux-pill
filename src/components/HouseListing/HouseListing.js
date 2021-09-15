import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UilBath, UilBedDouble, UilSquare } from "@iconscout/react-unicons";

import "./HouseListing.scss";
import { useHistory } from "react-router-dom";
import DeleteIcon from "../SVGIcons/DeleteIcon";
import CoinIcon from "../SVGIcons/CoinIcon";
import ButtonRemove from "../ButtonRemove/ButtonRemove";
import { removeProduct } from "../../redux/products/actions";

export default function HouseListing() {
  const { status, data } = useSelector((state) => state.products);
  const { isAuthenticated } = useSelector((state) => state.users);

  const [props, setProps] = useState(data);

  useEffect(() => {
    setProps(data);
  }, [data]);

  const history = useHistory();
  const dispatch = useDispatch();

  const removeProperty = (id) => {
    if (isAuthenticated) {
      const newPropertiesData = props.filter((prop) => prop.id !== id);
      setProps(newPropertiesData);
      dispatch(removeProduct(id));
    } else {
      history.push("/login");
    }
  };

  return (
    <TableContainer component={Paper}>
      {status === "ok" && (
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
            {props.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* Image */}
                <TableCell component="th" scope="row">
                  <img
                    className="rounded size-img custom-picture-row"
                    src={row.image}
                    alt={row.street + row.id}
                  />
                </TableCell>
                {/* Address */}
                <TableCell align="left">
                  <p className="fs-5 fw-bold">{row.street}</p>
                  <p className="text-secondary">{row.city}</p>
                </TableCell>
                {/* Price */}
                <TableCell align="left">
                  <p className="text-warning">${row.price}</p>
                </TableCell>
                {/* Characteristics */}
                <TableCell align="left">
                  <span className="me-3 text-secondary">
                    <UilBath size="18" className="me-1" />
                    {row.bath}
                  </span>
                  <span className="me-3 text-secondary">
                    <UilBedDouble size="18" className="me-1" />
                    {row.room}
                  </span>
                  <span className="text-secondary">
                    <UilSquare size="18" className="me-1" />
                    {row.size}㎡
                  </span>
                </TableCell>
                {/* Mark as Sold */}
                <TableCell align="center">
                  <CoinIcon size={18} />
                </TableCell>
                {/* Remove */}
                <TableCell align="center">
                  <ButtonRemove handleRemove={removeProperty} id={row.id}>
                    <DeleteIcon size={18} />
                  </ButtonRemove>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {status === "loading" && <h1>Loading Properties...</h1>}
      {status === "error" && <h1>ERROR LOADING DATABASE</h1>}
    </TableContainer>
  );
}
