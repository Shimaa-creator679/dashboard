import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../shared/Header';




const rows = [
  { id: 1, Email: 'Snow', Name: 'Jon', age: 14,phone:"0112298765",access:"admin" },
  { id: 2, Email: 'Lannister', Name: 'Cersei', age: 31,phone:"0112298765",access:"admin" },
  { id: 3, Email: 'Lannister', Name: 'Jaime', age: 31,phone:"0112298765" ,access:"admin"},
  { id: 4, Email: 'Stark', Name: 'Arya', age: 11,phone:"0112298765" ,access:"user"},
  { id: 5, Email: 'Targaryen', Name: 'Daenerys', age: null,phone:"0112298765" ,access:"user"},
  { id: 6, Email: 'Melisandre',Name: null, age: 150,phone:"0112298765" ,access:"user"},
  { id: 7, Email: 'Clifford', Name: 'Ferrara', age: 44 ,phone:"0112298765",access:"menager"},
  { id: 8, Email: 'Frances', Name: 'Rossini', age: 36 ,phone:"0112298765",access:"menager"},
  { id: 9, Email: 'Roxie', Name: 'Harvey', age: 65 ,phone:"0112298765",access:"menager"},
];

const Invoices = () => {

       const theme=useTheme();
    
      const columns = [
      { field: 'id', headerName: 'ID', width: 90  },
      {
        field: 'Name',
        headerName: ' name',
        width: 90,
        editable: true,
        align:"center",
        
        headerAlign:"center"
      },
      {
        field: 'Email',
        headerName: 'Email',
      
        editable: true,
        align:"center",
        
        headerAlign:"center",
        flex:1
      },
      {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
        editable: true,
        align:"center",
        
        headerAlign:"center"
      },
      {
        field: 'phone',
        headerName: 'phone',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
       flex:1,
        align:"center",
        
        headerAlign:"center"
       
      },
      {
        field: 'access',
        headerName: 'access',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        
        align:"center",
        
        headerAlign:"center",
        renderCell:({row:{access}})=>{
          return(
            <Box sx={{color:"white",borderRadius:"5px",padding:"5px",textAlign:"center",}}
            bgcolor={access==="admin"?theme.palette.primary.dark:access==="user"?"green":theme.palette.secondary.dark}>
            <Typography>{access}</Typography>
            </Box>
          )
        }
       
      },
    ];
  return (
    <Box>

   <Header title={"Invoices"} subtitle={"Manage your invoices"}/>

                  <Box sx={{ height:"600", width: '80%',mx:"auto" }}>
      <DataGrid
      checkboxSelection
                 rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </Box>
  )
}

export default Invoices