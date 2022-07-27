import './Table.scss'
import BasicTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Table() {
  const rows = [
    {
      id: 1244569,
      product: "Acer",
      img: 'https://static.acer.com/up/Resource/Acer/Laptops/Aspire_5/rev-may-2022/20220415/acer-laptop-aspire-5-main-s.jpg',
      customer: 'Joy',
      date: '1 May',
      amount: 5500,
      method: 'cash on delivery',
      status: 'Pending'
    },
    {
      id: 6789045,
      product: "Ipone",
      img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433',
      customer: 'Jone',
      date: '20 May',
      amount: 115900,
      method: 'Online Payment',
      status: 'Approved'
    },
    {
      id: 124567,
      product: "Hp Laptop",
      img: 'https://www.xda-developers.com/files/2021/04/Best-HP-laptops.jpg',
      customer: 'Mathew',
      date: '20 March',
      amount: 167800,
      method: 'Online Payment',
      status: 'Approved'
    },
    {
      id: 456899,
      product: "Alexa",
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F06%2F24%2Falexa-1.jpg&q=60',
      customer: 'Jaanu',
      date: '15 June',
      amount: 6000,
      method: 'Cash on delivery',
      status: 'Pending'
    },
  ];

  return (
    <TableContainer component={Paper} className='table'>
      <BasicTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Traking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='tableCell'>{row.id} </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt=""  className='image'/>
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status} `}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </BasicTable>
    </TableContainer>
  )
}

export default Table