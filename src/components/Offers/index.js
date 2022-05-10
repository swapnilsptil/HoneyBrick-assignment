import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { CartItemsAtom, getOffersSelector, ItemsAtom } from '../../atoms/Atoms';
import { useRecoilState, useRecoilValue } from 'recoil';

const Offers = () => {

    
    const availableGoals = useRecoilValue(getOffersSelector);
    const items = useRecoilValue(ItemsAtom);
    const [cartItems, setCartItems] = useRecoilState(CartItemsAtom);

    const onClick = (id, foundIdx) => {
        if(foundIdx) {
            let addedItem = items.find(item => item.id === id)
            let existed_item = cartItems.find(item => id === item.id)
            const localData = JSON.parse(localStorage.getItem('HoneyBrickData'));
            if (!existed_item) {
                const tempState = [...cartItems, addedItem];
                localData.cartItems = tempState;
                localStorage.setItem('HoneyBrickData',JSON.stringify(localData));
                setCartItems(tempState);
            }
        } else {
            const localData = JSON.parse(localStorage.getItem('HoneyBrickData'));
            const new_items = cartItems.filter(item => id !== item.id);
            localData.cartItems = new_items;
            localStorage.setItem('HoneyBrickData',JSON.stringify(localData));
            setCartItems(new_items);
        }
    }
    return (
        <>
            {
                availableGoals.map(item => {
                    const foundIdx = cartItems.findIndex(ele => ele.id ===item.id) === -1;
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
                                        onClick={() => onClick(item.id, foundIdx) }
                                    >
                                        {foundIdx ? 'Add' : 'Remove'}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })
            }
        </>
    )
}

// const mapStateToProps = (state)=>{
//     return{
//         availableGoals: state.availableGoals,
//         cartItems: state.cartItems,
//     }
// }
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         getOptions: ()=>{dispatch(getOptions())},
//         removeItem: (id) => { dispatch(removeItem(id)) },
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Offers)

export default Offers;