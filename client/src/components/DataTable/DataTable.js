import React from "react";
import { Table, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./DataTable.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DataTable = props => {
  console.log(props);
  return (
   
      <div className="table-wrapper">
       
         
          
        
        <Table className="table table-striped table-hover">
         
          <thead style={{background:"#283fb1"}}>
            <tr style={{color:"white"}}>
              <th>Reference Number</th>
              <th>Image Count</th>
              <th>Damage Density</th>
              <th>Year</th>
              <th>Make</th>
              <th>Model</th>
              <th>Date of Loss</th>
              <th></th>
            </tr>
          </thead>
         
          <tbody>

            {props.data.map(e => {
              return (
                <tr key={e._id}>
                  <td>
                    <Link
                      to={{
                        pathname: `/profile/claim/${e._id}`,
                        state: {
                          data: e
                        }
                      }}
                    >
                      {e.claim_reference_no}
                    </Link>
                  </td>
                  <td >1</td>
                  <td>60%</td>
                  <td>{e.year}</td>
                  <td style={{textTransform:'capitalize'}}>{e.make}</td>
                  <td>Tesla</td>
                  <td>{e.date_uploaded}</td>

                  <td>
                  <Link
                      to={{
                        pathname: `/profile/claim/edit/${e._id}`,
                        state: {
                          data: e
                        }
                      }}
                    >
                    <FontAwesomeIcon icon="edit" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    
  );
};

export default DataTable;
