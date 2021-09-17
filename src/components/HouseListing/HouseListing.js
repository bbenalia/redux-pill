import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { UilBath, UilBedDouble, UilSquare } from "@iconscout/react-unicons";

import "./HouseListing.scss";
import { useHistory } from "react-router-dom";
import DeleteIcon from "../SVGIcons/DeleteIcon";
import CoinIcon from "../SVGIcons/CoinIcon";
import ButtonRemove from "../ButtonRemove/ButtonRemove";
import {
  removeProduct,
  setFilteredProducts,
} from "../../redux/products/actions";
import { getFilterParams } from "../../helpers/filterParams";

export default function HouseListing() {
  const { status, data } = useSelector((state) => state.products);
  const { user, isAuthenticated } = useSelector((state) => state.users);
  const { filters } = useSelector((state) => state.filters);

  const [props, setProps] = useState(data);
  const history = useHistory();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = React.useState(1);

  useEffect(() => {
    setProps(data);
  }, [data]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const removeProperty = (id) => {
    if (isAuthenticated) {
      const newPropertiesData = props.filter((prop) => prop.id !== id);
      setProps(newPropertiesData);
      dispatch(removeProduct(id, user.token));
    } else {
      history.push("/login");
    }
  };

  const handleChangePage = (_event, page) => {
    setCurrentPage(page);
    dispatch(setFilteredProducts(filters, page));
    const query = getFilterParams(filters, page);
    history.push(query);
  };

  return (
    <TableContainer component={Paper}>
      {status === "ok" && (
        <>
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
              {props.data?.map((row) => (
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
          <div className="my-3 d-flex justify-content-center">
            <Pagination
              count={props.last_page}
              color="warning"
              page={currentPage}
              onChange={handleChangePage}
            />
          </div>
        </>
      )}
      {status === "loading" && <h1>Loading Properties...</h1>}
      {status === "error" && <h1>ERROR LOADING DATABASE</h1>}
    </TableContainer>
  );
}
