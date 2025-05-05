// import React from 'react';
// import { Box, FormLabel, Select, HStack } from '@chakra-ui/react';

// const regions = ['Western Bhutan', 'Central Bhutan', 'Eastern Bhutan'];

// export default function FilterBar({ selectedRegion, onRegionChange }) {
//   return (
//     <Box bg="white" p={4} borderRadius="2xl" boxShadow="md">
//       <HStack spacing={4}>
//         <FormLabel m={0} whiteSpace="nowrap">Filter by region:</FormLabel>
//         <Select
//           placeholder="All Regions"
//           value={selectedRegion}
//           onChange={(e) => onRegionChange(e.target.value)}
//           maxW="250px"
//         >
//           {regions.map((region) => (
//             <option key={region} value={region}>
//               {region}
//             </option>
//           ))}
//         </Select>
//       </HStack>
//     </Box>
//   );
// }
