import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Image,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  import { Link } from 'react-router-dom'

  const Logo = () => {
  return (
    <Link to="/">
      <Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg" w={100} h={100} />
    </Link>
  );
};

const SocialButton = ({
  children,
  label,
  href,
} ) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'whiteAlpha.200',
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
    bg='#2596be'
    color='gray.200'>
    <Container as={Stack} maxW={'6xl'} py={10}>
      <SimpleGrid
        templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
        spacing={8}>
        <Stack spacing={6}>
          <Box>
            <Logo color='white' />
          </Box>
          <Text fontSize={'sm'}>
            © 2020 Chakra Templates. All rights reserved
          </Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Stack>
        <Stack align={'flex-start'}>
          <ListHeader>Company</ListHeader>
          <Link href={'#'}>About us</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Contact us</Link>
          <Link href={'#'}>Pricing</Link>
          <Link href={'#'}>Testimonials</Link>
        </Stack>
        <Stack align={'flex-start'}>
          <ListHeader>Support</ListHeader>
          <Link href={'#'}>Help Center</Link>
          <Link href={'#'}>Terms of Service</Link>
          <Link href={'#'}>Legal</Link>
          <Link href={'#'}>Privacy Policy</Link>
          <Link href={'#'}>Satus</Link>
        </Stack>
        <Stack align={'flex-start'}>
          <ListHeader>Stay up to date</ListHeader>
          <Stack direction={'row'}>
            <Input
              placeholder={'Your email address'}
              bg='whiteAlpha.100'
              border={0}
              _focus={{
                bg: 'whiteAlpha.300',
              }}
            />
            <IconButton
              bg='green.800'
              color='gray.800'
              _hover={{
                bg: 'green.600',
              }}
              aria-label="Subscribe"
              icon={<BiMailSend />}
            />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  </Box>

  )
};

export default Footer;
