import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function SanAntonio(){
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>San Antonio</BreadcrumbItem>
                        </Breadcrumb>
                    <h2>San Antonio</h2>
                    <hr />
                </div>
            </div>
        </div>

    );
}
export default SanAntonio;