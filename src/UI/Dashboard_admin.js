import react from 'react'
import {Table, Button} from 'react-bootstrap'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

class Dashboard_admin extends react.Component{
    render(){
        return (
            <div>
<NavBar/>
          
            
            <div className="container shadow mt-4">
                <p><Button className="mt-3" variant="primary">Welcome to admin dashboard</Button></p>
               <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Contact</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><Button variant="success">Approve</Button>&nbsp;<Button variant="danger">Decline</Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><Button variant="success">Approve</Button>&nbsp;<Button variant="danger">Decline</Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><Button variant="success">Approve</Button>&nbsp;<Button variant="danger">Decline</Button></td>
    </tr>
  </tbody>
</Table>
            </div>
            <Footer/>
            </div>
        )
    }
}
export default Dashboard_admin