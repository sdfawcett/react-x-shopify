import { Rating } from './Rating'
import { Heading, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'

export const ReviewItem = (props) => {
  const { review } = props
  return (
    <Stack spacing="2.5">
      <Stack direction="row" spacing="3">
        <Rating defaultValue={review.rating} size="sm" />
        <Heading size="sm" fontWeight="medium" color='black'>
          {review.title}
        </Heading>
      </Stack>
      <Text>{review.comment}</Text>
      <Text color='gray.600' fontSize="sm">
        by {review.author}, {review.createdAt}
      </Text>
    </Stack>
  )
}
