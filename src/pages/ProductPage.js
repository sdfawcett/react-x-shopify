import React, { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
    Box, 
    Grid, 
    Image, 
    Text, 
    Button, 
    Heading, 
    HStack, 
    Icon,  
    Stack, 
    Flex, 
    Center, 
    SimpleGrid, 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel } from '@chakra-ui/react'
import { images, reviews } from '../components/_data'
import { Gallery } from '../components/Gallery'
import { FiClock, FiHeart } from 'react-icons/fi'
import { RiRulerLine } from 'react-icons/ri'
import { Rating } from '../components/Rating'
import { PriceTag } from '../components/PriceTag'
import { QuantityPicker } from '../components/QuantityPicker'
import { ReviewItem } from '../components/ReviewItem'


import { ShopContext } from '../context/shopContext'

const ProductPage = () => {

  const {handle} = useParams();

  const {fetchProductWithHandle, addItemToCheckout, product} = useContext(ShopContext)

  useEffect(() => {
      fetchProductWithHandle(handle)
  }, [fetchProductWithHandle, handle])

  if (!product.title) return <div>Loading...</div>

  return (
    <Box
      maxW="7xl"
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
      <Stack
        direction={{
          base: 'column-reverse',
          lg: 'row',
        }}
        spacing={{
          base: '6',
          lg: '12',
          xl: '16',
        }}
      >
        <Stack
          spacing={{
            base: '6',
            lg: '8',
          }}
          maxW={{
            lg: 'sm',
          }}
          justify="center"
        >
          <Stack
            spacing={{
              base: '3',
              md: '4',
            }}
          >
            <Stack spacing="3">
              <HStack alignSelf="baseline">
                <Rating defaultValue={4} size="sm" />
                <Link
                  href="#"
                  fontSize="sm"
                  fontWeight="medium"
                  color='gray.400'
                >
                  12 Reviews
                </Link>
              </HStack>
              <Heading size="lg" fontWeight="medium">
                Classic Black
              </Heading>
            </Stack>
            <PriceTag
              price={229}
              currency="USD"
              rootProps={{
                fontSize: 'xl',
              }}
            />
            <Text color='gray.400'>
              With a sleek design and a captivating essence, this is a modern Classic made for every
              occasion.
            </Text>
          </Stack>
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '6',
              md: '8',
            }}
          >
            <Stack flex="1">
              
              <HStack spacing="1" color='gray.400'>
                <Icon as={FiClock} />
                <Text fontSize="xs" fontWeight="medium">
                  Low stock
                </Text>
              </HStack>
            </Stack>
            <Stack flex="1">
              
              <HStack spacing="1" color='gray.400'>
                <Icon as={RiRulerLine} />
                <Link href="#" fontSize="xs" fontWeight="medium" textDecoration="underline">
                  View our sizing guide
                </Link>
              </HStack>
            </Stack>
          </Stack>
          <HStack
            spacing={{
              base: '4',
              md: '8',
            }}
            align="flex-end"
            justify="space-evenly"
          >
            <Box flex="1">
              <QuantityPicker defaultValue={1} max={3} />
            </Box>
            <Box flex="1">
              <Button
                variant="outline"
                size="lg"
                fontSize="md"
                isFullWidth
                leftIcon={<Icon as={FiHeart} boxSize="4" />}
              >
                Favorite
              </Button>
            </Box>
          </HStack>
          <Button colorScheme="blue" size="lg">
            Add to cart
          </Button>
        </Stack>
        <Gallery
          rootProps={{
            overflow: 'hidden',
            flex: '1',
          }}
          images={images.slice(0, 5)}
        />
      </Stack>

      <Stack spacing="12">
      <Stack
        spacing={{
          base: '8',
        }}
      >
        <Heading
          fontSize={{
            base: '1.25rem',
            md: '1.5rem',
          }}
          fontWeight="semibold"
          color='black'
        >
          Customer reviews
        </Heading>
        <Stack spacing="5" direction="row" alignItems="center" shouldWrapChildren>
          <Text fontSize="4xl" fontWeight="medium" lineHeight="1">
            4.3
          </Text>
          <Stack spacing="1">
            <Rating defaultValue={4} size="sm" />
            <Text lineHeight="1" color='gray.600'>
              Based on 12 reviews
            </Text>
          </Stack>
        </Stack>
        <HStack spacing="4">
          <Button size="lg" variant="outline" alignSelf="center">
            See all reviews
          </Button>
          <Button size="lg" colorScheme="blue">
            Write a review
          </Button>
        </HStack>
      </Stack>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        columnGap="12"
        rowGap={{
          base: '10',
          md: '12',
        }}
      >
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </SimpleGrid>
    </Stack>

    </Box>

    
  )
};

export default ProductPage;