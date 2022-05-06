import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { connect } from 'react-redux';
import { getOptions, removeItem } from '../actions/cartActions';

const Offers = ({
    handleClick,
    getOptions,
    availableGoals,
    cartItems,
    removeItem
}) => {

    useEffect(() => {
        getOptions()
    }, [getOptions]);

    const onClick = (id, foundIdx) => {
        foundIdx ? handleClick(id) : removeItem(id);
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

const mapStateToProps = (state)=>{
    return{
        availableGoals: state.availableGoals,
        cartItems: state.cartItems,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getOptions: ()=>{dispatch(getOptions())},
        removeItem: (id) => { dispatch(removeItem(id)) },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Offers)