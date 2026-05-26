import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Login1(props){
    return (
        <div className="d-flex justify-content-center align-items-center bg -light" 
    style={{height:"100vh"}}>
      <div className="bg-white p-4 rounded shadow"
      style={{width:"400px"}}>
<h1>Campus Complaint </h1>


            <div class name="login-form">   
                <label>  Username </label>
                <input type="text" placeholder="Username" className='form-control mb-3'></input>
                <label>  Password </label>
                <input type="password" placeholder="Password" className='form-control mb-3'></input>
                <button type="submit" className='btn btn-primary'>Login</button>
            </div>
            </div>
            </div>



    );
}
export default Login1;