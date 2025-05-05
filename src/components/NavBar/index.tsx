import { Box, HStack } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Culture', path: '/culture' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Travel', path: '/travel' },
  { name: 'Contact', path: '/contact' }, // fixed typo
]

const NavBar = () => {
  return (
  
    <Box bg="green" w="100%" p="20px" color="white" justifyItems="center" fontSize="20px">
      <nav>
        <HStack gap="45px" color="white">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
            >
              {item.name}
            </NavLink>
          ))}
        </HStack>
      </nav>
    </Box>
  )
}

export default NavBar
