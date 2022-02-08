import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Box, SimpleGrid, Image, Flex, chakra } from '@chakra-ui/react'
import ImageWithText from '../components/ImageWithText';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import ImageGrid from '../components/ImageGrid';
 
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
      <SimpleGrid columns={{md: 1, lg: 3}}>
      {
            products.map(product => (
                <Box>
                    <Link to={`/products/${product.handle}`} key={product.id}>
                        
                        <Flex
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            w="sm"
                            mx="auto"
                            mb="2rem"
                        >
                            <Box
                            bg="gray.300"
                            h={64}
                            w="full"
                            rounded="lg"
                            shadow="md"
                            bgSize="cover"
                            bgPos="center"
                            >
                                <Image src={product.images[0].src} />
                            </Box>

                            <Box
                            w={{ base: 56, md: 64 }}
                            bg="gray.800"
                            mt={-10}
                            shadow="lg"
                            rounded="lg"
                            overflow="hidden"
                            >
                            <chakra.h3
                                py={2}
                                textAlign="center"
                                fontWeight="bold"
                                textTransform="uppercase"
                                color="white"
                                letterSpacing={1}
                            >
                                {product.title}
                            </chakra.h3>

                            <Flex
                                alignItems="center"
                                justifyContent="space-between"
                                py={2}
                                px={3}
                                bg="gray.700"
                            >
                                <chakra.span
                                fontWeight="bold"
                                color="gray.200"
                                >
                                ${product.variants[0].price}
                                </chakra.span>
                                <chakra.button
                                bg="#FF38BD"
                                fontSize="xs"
                                fontWeight="bold"
                                color="white"
                                px={2}
                                py={1}
                                rounded="lg"
                                textTransform="uppercase"
                                _hover={{ opacity:"70%" }}
                                >
                                View Item
                                </chakra.button>
                            </Flex>
                            </Box>
                        </Flex>
                        
                        
                    </Link>
                </Box>
        ))
        }
      </SimpleGrid>
      <CallToAction />
      <ImageGrid />
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
