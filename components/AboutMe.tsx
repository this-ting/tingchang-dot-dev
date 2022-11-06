import { Container } from '@chakra-ui/react'
import SectionHeader from './SectionHeader'

export default function AboutMe() {
  return (
    <Container as="section" p={6}>
      <SectionHeader header="About Me" />
      Hey! I&apos;m a front-end developer, who has migrated from corporate to
      startups. My role started off in Investor Relations to Sales, but with a
      curiosity for technology, while considering the business intent and value
      generation, I transitioned to front-end development.
      <br />
      <br /> I&apos;ve worked in cross-functional product teams with PMs and
      designers to understand our users&apos; pain points and how to solve them
      through development. From co-located to hybrid and remote environments,
      I&apos;ve seen it all and how to best tackle working efficiently in each
      scenario.
      <br />
      <br /> I&apos;m open to opportunities, particularly building Web3
      products!
    </Container>
  )
}
