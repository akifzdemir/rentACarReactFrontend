import React, { useContext, useEffect, useState } from 'react'
import BrandService from '../services/BrandService';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import BrandsContext from '../context/BrandsContex';
import { Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
function BrandsCategory() {

  const { brands } = useContext(BrandsContext)
  return (
    <div>
      <List sx={{ border: 1, borderColor: "#EEEE", borderRadius: 5, padding: 2, boxShadow: 3 }}>
        <h2><EmojiTransportationIcon />  Brands </h2>
        <Divider />
        {
          brands.map((brand) => (
            <ListItem key={brand.brandId} disablePadding>
                <Button component={Link} to={`/brand/${brand.brandId}`} fullWidth color='inherit' variant='contained' sx={{ margin: 1 }}>
                  {brand.brandName}
                </Button>
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}

export default BrandsCategory