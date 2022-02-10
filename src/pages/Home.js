import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Box, Button, Icon, LightMode, Stack, Text, SimpleGrid, Image, Flex, chakra } from '@chakra-ui/react'
import ImageWithText from '../components/ImageWithText';
import Hero from '../components/Hero';
import { CollectionGrid } from '../components/CollectionGrid';
import { ProductCard } from '../components/ProductCard'
import { ProductGrid } from '../components/ProductGrid';
import ImageGrid from '../components/ImageGrid';
import BlogCardGrid from '../components/BlogCardGrid';
 
import { ShopContext } from '../context/shopContext'
import RichText from '../components/RichText';

const Home = () => {

  const {fetchAllProducts, products} = useContext(ShopContext)

  useEffect(() => {
      fetchAllProducts()
  }, [fetchAllProducts])

  if (!products) return <div>Loading...</div>

  return (
  
  <Box>
      <Hero />
      <RichText 
        heading="The relaxation you've been waiting for."
        text="Our Bath Bombs guarantee a fun, relaxing, and colorful night"
      />
        <Box
        maxW="5xl"
        mx="auto"
        px={{
        base: '4',
        md: '8',
        lg: '12',
        }}
        py={{
        base: '6',
        md: '8',
        lg: '12',
        }}
    >
            <SimpleGrid
            columns={{
                base: 1,
                sm: 2,
                lg: 3,
            }}
            gap={{
                base: '8',
                lg: '12',
            }}
            >
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </SimpleGrid>
        </Box>
      <CollectionGrid />
      <RichText 
        heading="Treat Yourself."
      />
      <ImageWithText 
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758" 
        heading="Heading" 
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee."
      />
      <ImageWithText
        reverse 
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758" 
        heading="Second Heading" 
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee."
      />
      
      
      
      
      
  </Box>
  )
};

export default Home;
