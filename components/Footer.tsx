import Link from 'next/link'
import { Container, Flex, Box, Icon } from '@chakra-ui/react'
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'

const FOOTER_ITEMS = {
  LINKEDIN: {
    href: 'https://www.linkedin.com/in/changting/',
    IconName: FaLinkedinIn,
  },
  GITHUB: {
    href: 'https://github.com/this-ting',
    IconName: FaGithub,
  },
  TWITTER: {
    href: 'https://twitter.com/this_ting',
    IconName: FaTwitter,
  },
  EMAIL: {
    href: 'mailto:ting.chaang@gmail.com',
    IconName: FaEnvelope,
  },
}

export default function Footer() {
  const date = new Date()
  return (
    <Container
      as="footer"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={6}
    >
      <Box>© {date.getUTCFullYear()} Ting Chang. All rights reserved.</Box>
      <Flex>
        {Object.values(FOOTER_ITEMS).map(({ IconName, href }) => (
          <Box as={Link} key={href} href={href} px={1}>
            <Icon as={IconName} />
          </Box>
        ))}
      </Flex>
    </Container>
  )
}
