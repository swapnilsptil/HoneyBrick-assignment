import React, {useState} from 'react'
import { Button, Container, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { CartItemsAtom } from '../atoms/Atoms';

const Recipe = () => {

    const [email, setEmail] = useState('');
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    const navigate = useNavigate();
    const isValidEmail = email.length > 0 && !pattern.test(email);
    const cartItems = useRecoilValue(CartItemsAtom);

    const onCheckoutClick = () => {
        const tempHoneyBrickData = JSON.parse(localStorage?.getItem('HoneyBrickData'))
        alert(JSON.stringify({...tempHoneyBrickData, email}));
    }

    const onResetCart = () => {
        localStorage.removeItem('HoneyBrickData');
        navigate("/");
    }

    return (
        <div className="container">
            <Container maxWidth="sm" sx={{marginTop: '100px', display: 'flex'}}>
                <TextField
                    data-testid='email-id-field'
                    error={isValidEmail}
                    placeholder='Enter Email id'
                    id="outlined-error-helper-text"
                    label="Email Id"
                    helperText={isValidEmail && "Enter Valid Email"}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth={true}
                />
                <Container maxWidth="sm" sx={{marginTop: '10px'}}>
                    <Button data-testid='checkout-btn' disabled={email.length === 0 || isValidEmail} variant="contained" onClick={onCheckoutClick}>Checkout</Button> 
                    <Button 
                        data-testid='reset-cart'
                        variant="contained" 
                        sx={{marginLeft: '10px'}} 
                        onClick={onResetCart}
                        disabled={cartItems?.length === 0}
                    >Reset Cart</Button>
                </Container>
            </Container>
        </div>
    )
}

export default Recipe;