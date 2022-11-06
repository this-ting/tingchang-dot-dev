import { Box } from '@chakra-ui/react'

export default function SectionHeader({ header }: { header: string }) {
  return (
    <Box as="section">
      <h2>{header}</h2>
      <Box borderBottom="1px solid" />
    </Box>
  )
}
