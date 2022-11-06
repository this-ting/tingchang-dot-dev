import { Container, Box } from '@chakra-ui/react'

export default function Jumbotron() {
  return (
    <Container as="section" p={6}>
      I’m Ting Chang, a front-end developer & content creator based in Taipei.
      <Box as="u" pl={1}>
        Available
      </Box>{' '}
      for freelance & collaborations.
    </Container>
  )
}
