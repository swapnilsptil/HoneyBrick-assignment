import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from './actions/cartActions';
import Checkout from './Checkout';

const Cart = ({
    removeItem,
    items
}) => {

    let cartItems = items.length ?
        (
            items.map(item => {
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
                        {cartItems}
                    </Grid>
                </ul>
            </div>
            <Checkout />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cartItems,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)