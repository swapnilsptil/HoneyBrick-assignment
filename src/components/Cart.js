import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useRecoilState } from 'recoil';
import { CartItemsAtom } from '../atoms/Atoms';
import Checkout from './Checkout';

const Cart = ({
    items
}) => {

    const [cartItems, setCartItems] = useRecoilState(CartItemsAtom);

    const removeItem = (id) => {
        const new_items = cartItems.filter(item => id !== item.id);
        setCartItems(new_items);
    }

    let cartItemsList = cartItems.length ?
        (
            cartItems.map(item => {
                return (
                    <Grid key={item.id} item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.img}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.desc}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )

            })
        ) :
        (
            <p>No Item in Cart</p>
        )
    return (
        <div className="container">
            <div className="cart">
                <ul className="collection">
                    <h3>Added Offers</h3>
                    <Grid container justifyContent="center" spacing={2}>
                        {cartItemsList}
                    </Grid>
                </ul>
            </div>
            <Checkout />
        </div>
    )
}

export default Cart;