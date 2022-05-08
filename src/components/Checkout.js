import React, {useState} from 'react'
import { Button, Container, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { resetCart } from './actions/cartActions';

const Recipe = ({
    state,
    resetCart
}) => {

    const [email, setEmail] = useState('');
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    const navigate = useNavigate();
    const isValidEmail = email.length > 0 && !pattern.test(email);

    const onCheckoutClick = () => {
        const { cartItems } = state;
        alert(JSON.stringify({...cartItems, email}));
    }

    const onResetCart = () => {
        resetCart();
        navigate("/");
    }

    return (
        <div className="container">
            <Container maxWidth="sm" sx={{marginTop: '100px', display: 'flex'}}>
                <TextField
                    error={isValidEmail}
                    id="outlined-error-helper-text"
                    label="Email Id"
                    helperText={isValidEmail && "Enter Valid Email"}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth={true}
                />
                <Container maxWidth="sm" sx={{marginTop: '10px'}}>
                    <Button disabled={email.length === 0 || isValidEmail} variant="contained" onClick={onCheckoutClick}>Checkout</Button> 
                    <Button 
                        variant="contained" 
                        sx={{marginLeft: '10px'}} 
                        onClick={onResetCart}
                        disabled={state?.cartItems?.length === 0}
                    >Reset Cart</Button>
                </Container>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        resetCart: ()=>{dispatch(resetCart())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
