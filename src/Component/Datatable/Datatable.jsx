import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userRows,userColums} from '../../DatatableSource'


function Datatable() {
  const actionColumn=[
    {
    field:'action',
    hederName:'Action',
      width:200,
      renderCell:()=>{
        return(
          <div className="cellButton">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        )
      }
  }
]

  return (
    <div className='datatable'>

      <DataGrid
        rows={userRows}
        columns={userColums.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      /></div>
  )
}

export default Datatable