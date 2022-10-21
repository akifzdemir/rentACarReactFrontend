import React, { useContext, useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { Button, Divider } from '@mui/material';
import ColorContex from '../context/ColorContex';
import { Link } from 'react-router-dom';

function ColorsCategory() {

    const { colors } = useContext(ColorContex)

    return (
        <div>
            <List sx={{ border: 1, borderColor: "#EEEE", borderRadius: 5, padding: 2, boxShadow: 3 }}>
                <h2><PaletteOutlinedIcon />  Colors </h2>
                <Divider />
                {
                    colors.map((color) => (
                        <ListItem key={color.colorId} disablePadding>
                            <Button component={Link} to={`/color/${color.colorId}`} fullWidth color='inherit' variant='contained' sx={{ margin: 1 }}>
                                {color.colorName}
                            </Button>
                        </ListItem>
                    ))
                }
            </List>
        </div>
    )
}

export default ColorsCategory