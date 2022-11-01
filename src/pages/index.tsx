import Head from 'next/head';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import { Code, List, ListIcon, ListItem, Flex, VStack, HStack, Box } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { useAccount } from '../context/Account';

import { Container } from '../components/Container';
import Button from '../components/Shared/Button';
import Heading from '../components/Shared/Heading';
import Text from '../components/Shared/Text';
import Link from '../components/Shared/Link';
import Image from '../components/Shared/Image';

import Twitter from '../components/Shared/Icons/Twitter';
import Discord from '../components/Shared/Icons/Discord';

const Index = () => {
  const router = useRouter();

  // Context
  const { wallet } = useAccount();

  if (wallet?.address) {
    router.push('/dashboard');
    return false;
  }

  return (
    <>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Container maxW={'700px'} p='20px'>
          <Flex w='100%' alignItems='center' justifyContent='space-between'>
            <Box h='100%' m={{ base: '0 auto', md: '0' }}>
              <Image src='/logo.svg' alt='Sallet.app' width={150} />
            </Box>

            {/* Buttons desktop */}
            <Flex display={{ base: 'none', md: 'flex' }} flexDirection={{ base: 'column', md: 'row' }} gap='10px'>
              <Link href='/create' passHref>
                Crear
              </Link>
              <Link href='/signup' color='secondary' passHref>
                Ingresar
              </Link>
            </Flex>

            {/* Icons mobile */}
            <HStack display={{ base: 'flex', md: 'none' }} w='100%' justifyContent='flex-end'>
              <Link href='https://twitter.com/SalletApp' target='_blank' size='sm'>
                <Twitter />
              </Link>
              <Link href='https://discord.gg/VCQuJ7cq' target='_blank' size='sm'>
                <Discord />
              </Link>
            </HStack>
          </Flex>
          <Flex flexDirection={'column'} justifyContent='center' gap={4}>
            {/* Content */}
            <VStack gap='10px' alignItems='center' textAlign='center' mt='60px'>
              <Box maxW={{ base: '200px', md: '300px' }} margin='0 auto'>
                <Image src='/img/5.png' alt='Home' />
              </Box>
              <Heading as='h1' fontSize='48px'>
                Aceptar cripto-activos nunca fue tan fácil.
              </Heading>
              <Text maxW={{ base: '270px', md: '400px' }} m='o auto' size='lg'>
                Ten el control total de tus finanzas. <strong>Wallet non-custodial</strong> para <strong>ETH</strong>.
              </Text>
            </VStack>

            {/* Icons desktop */}
            <HStack display={{ base: 'none', md: 'flex' }} w='100%' justifyContent='center' gap='10px' mt='10px'>
              <Link href='https://twitter.com/SalletApp' target='_blank'>
                <Twitter />
              </Link>
              <Link href='https://discord.gg/VCQuJ7cq' target='_blank'>
                <Discord />
              </Link>
            </HStack>

            {/* Buttons mobile */}
            <Flex display={{ base: 'flex', md: 'none' }} flexDirection={{ base: 'column', md: 'row' }} gap='10px'>
              <Link href='/create' passHref>
                Crear
              </Link>
              <Link href='/signup' color='secondary' passHref>
                Ingresar
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Index;
