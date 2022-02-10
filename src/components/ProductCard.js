import {
    AspectRatio,
    Box,
    HStack,
    Image,
    Skeleton,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { Rating } from './Rating'
  import { PriceTag } from './PriceTag'
  import { Link } from 'react-router-dom'
  
  export const ProductCard = (props) => {
    const { product } = props
    return (
    <Link to={`/products/${product.handle}`} key={product.id}>
        <Stack spacing="4">
            <Box position="relative" className="group">
            <AspectRatio ratio={3 / 4}>
                <Image
                src={product.images[0].src}
                alt={product.title}
                draggable="false"
                fallback={<Skeleton />}
                borderRadius="md"
                />
            </AspectRatio>
            <Box
                opacity={0}
                transition="opacity 0.1s"
                position="absolute"
                className="container"
                bottom="3"
                left="3"
                _groupHover={{
                opacity: 1,
                }}
            >
                
            </Box>
            </Box>
            <Stack spacing="1">
            <HStack justifyContent="space-between">
                <Text
                color={useColorModeValue('black', 'white')}
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="wider"
                textTransform="uppercase"
                >
                {product.title}
                </Text>
                <PriceTag
                currency={product.currency}
                price={product.variants[0].price}
                priceProps={{
                    fontSize: 'sm',
                    fontWeight: 'semibold',
                    color: useColorModeValue('black', 'white'),
                }}
                />
            </HStack>
            
            </Stack>
        </Stack>
      </Link>
    )
  }