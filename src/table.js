import "./App.css";
import * as React from "react";
import { useState, useEffect } from 'react';
import { useTable } from "react-table";
import styled from "styled-components";
import Filter from './filter';  

const Containerr = styled.div`
  width: 1120px;
  height: 400px;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  margin-bottom: 5%;
  margin-left: 11%;
  border-radius: 13px;
  background: linear-gradient(to right, #000, #333);
  border: 1px solid white;
`;

function Table() {
  const [data, setData] = useState([]);
  const [catalog, setCatalog] = useState('4');
  const [createDate, setCreateDate] = useState('2025-05-01');

  useEffect(() => {
    fetchData();
  }, [catalog, createDate]);

  const fetchData = () => {
    fetch(`https://fkyv1ocmo5.execute-api.us-west-2.amazonaws.com/dev/getmockdata?catalog=${catalog}&createDate=${createDate}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setData([]);  
      });
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id"
      },
      {
        Header: "UserName",
        accessor: "userName",
      },
      {
        Header: "Catalog",
        accessor: "catalog",
      },
      {
        Header: "CreateDate",
        accessor: "createDate"
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = 
    useTable({ columns, data });

  const handleApply = (newCatalog, newCreateDate) => {
    setCatalog(newCatalog);
    setCreateDate(newCreateDate);
  };

  return (
    <>
      <Filter onApply={handleApply} />
      <Containerr>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Containerr>
    </>
  );
}

export default Table;