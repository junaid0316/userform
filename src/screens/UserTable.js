import React, { useEffect, useMemo, useState } from 'react'

import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from 'ag-grid-react';

const UserTable = () => {

    const [rowData, setRowData] = useState([]);

    const [coldefs, setcoldefs] = useState([
        {
            headerName: '#',
            sortable: true,
            menuTabs: [],
            width: 80,
            valueFormatter: (params) => {
                return `${parseInt(params.node.id) + 1}`;
            },
        },
        {
            headerName: "Name",
            field: "fullName",
            filter: 'agTextColumnFilter',
            menuTabs: ['filterMenuTab'],
            sortable: true,
            width: 160,
            minWidth: 160,
            maxWidth: 200,
        },
        {
            headerName: "Email",
            flex: 1,
            filter: 'agTextColumnFilter',
            sortable: false,
            menuTabs: ['filterMenuTab'],
            field: "email",
            minWidth: 160,
        },
        {
            headerName: "Profile Picture",
            field: "Profile Picture",
            menuTabs: [],
            sortable: false,
            minWidth: 150,
            width: 150,
            maxWidth: 200,
            cellRenderer: p => {
                return (
                    <img src={p.data.profilePicture} style={{ width: "50px", height: "50px", display: "flex", margin: "auto" }} />
                )
            }
        },
        {
            headerName: "Country",
            field: "country",
            menuTabs: [],
            sortable: false,
            width: 150,
            minWidth: 150,
            maxWidth: 200,
        },
        {
            headerName: "State",
            field: "state",
            menuTabs: [],
            sortable: false,
            width: 150,
            maxWidth: 200,
        },

    ]);

    useEffect(() => {
        setRowData([
            {
                id: 1,
                fullName: 'Junaid',
                email: 'junaid@example.com',
                profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uY28hTxtOMs2A2lAQnUNPloUL8B__qsD39ura0-8OQ&s',
                country: 'United States',
                state: 'California',
            },
            {
                id: 2,
                fullName: 'John Doe',
                email: 'john.doe@example.com',
                profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uY28hTxtOMs2A2lAQnUNPloUL8B__qsD39ura0-8OQ&s',
                country: 'United States',
                state: 'California',
            },
            {
                id: 3,
                fullName: 'Alice Johnson',
                email: 'alice.johnson@example.com',
                profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uY28hTxtOMs2A2lAQnUNPloUL8B__qsD39ura0-8OQ&s',
                country: 'Australia',
                state: 'New South Wales',
            },
            {
                id: 4,
                fullName: 'Chris Lee',
                email: 'chris.lee@example.com',
                profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uY28hTxtOMs2A2lAQnUNPloUL8B__qsD39ura0-8OQ&s',
                country: 'Canada',
                state: 'Quebec',
            }, {
                fullName: 'User 51',
                email: 'user51@example.com',
                profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uY28hTxtOMs2A2lAQnUNPloUL8B__qsD39ura0-8OQ&s',
                country: 'Random Country',
                state: 'Random State',
            },
            {
                fullName: 'User 52',
                email: 'user52@example.com',
                profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uY28hTxtOMs2A2lAQnUNPloUL8B__qsD39ura0-8OQ&s',
                country: 'Random Country',
                state: 'Random State',
            },
            {
                fullName: 'User 53',
                email: 'user53@example.com',
                profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uY28hTxtOMs2A2lAQnUNPloUL8B__qsD39ura0-8OQ&s',
                country: 'Random Country',
                state: 'Random State',
            },
            {
                fullName: 'User 54',
                email: 'user54@example.com',
                profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uY28hTxtOMs2A2lAQnUNPloUL8B__qsD39ura0-8OQ&s',
                country: 'Random Country',
                state: 'Random State',
            },
            {
                fullName: 'User 55',
                email: 'user55@example.com',
                profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uY28hTxtOMs2A2lAQnUNPloUL8B__qsD39ura0-8OQ&s',
                country: 'Random Country',
                state: 'Random State',
            },
            {
                fullName: 'User 56',
                email: 'user56@example.com',
                profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uY28hTxtOMs2A2lAQnUNPloUL8B__qsD39ura0-8OQ&s',
                country: 'Random Country',
                state: 'Random State',
            },
            {
                fullName: 'User 57',
                email: 'user57@example.com',
                profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uY28hTxtOMs2A2lAQnUNPloUL8B__qsD39ura0-8OQ&s',
                country: 'Random Country',
                state: 'Random State',
            },
            {
                fullName: 'User 58',
                email: 'user58@example.com',
                profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uY28hTxtOMs2A2lAQnUNPloUL8B__qsD39ura0-8OQ&s',
                country: 'Random Country',
                state: 'Random State',
            },
            {
                fullName: 'User 59',
                email: 'user59@example.com',
                profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uY28hTxtOMs2A2lAQnUNPloUL8B__qsD39ura0-8OQ&s',
                country: 'Random Country',
                state: 'Random State',
            },
            {
                fullName: 'User 60',
                email: 'user60@example.com',
                profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uY28hTxtOMs2A2lAQnUNPloUL8B__qsD39ura0-8OQ&s',
                country: 'Random Country',
                state: 'Random State',
            },

        ])
    }, [])

    return (
        <div className='usertable'>
            <h2>User Table</h2>

            <div className='ag-theme-alpine' style={{ width: "100%", height: 540 }}>
                {/* The AG Grid component */}
                <AgGridReact
                    rowData={rowData}
                    columnDefs={coldefs}
                    // defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={10}
                    animateRows={true}
                />
            </div>
        </div>
    )
}

export default UserTable