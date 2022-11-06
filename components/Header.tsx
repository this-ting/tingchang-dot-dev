import Link from 'next/link'
import { Container, Flex, Box } from '@chakra-ui/react'

const NAV_ITEMS = {
  ABOUT: { name: 'About', href: '#about' },
  WORK: { name: 'Work', href: '#work' },
  CONTACT: { name: 'Contact', href: '#contact' },
}

export default function Header() {
  return (
    <Container
      as="header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={6}
    >
      <Box>Ting Chang</Box>
      <Flex>
        {Object.values(NAV_ITEMS).map(({ name, href }) => (
          <Link key={name} href={href}>
            <Box p={3}>{name}</Box>
          </Link>
        ))}
      </Flex>
    </Container>
  )
}
