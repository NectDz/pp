import React, { useState, useEffect } from "react";
import { Box, IconButton, VStack, HStack, Link, Text} from "@chakra-ui/react";
import { HamburgerIcon, InfoIcon, SettingsIcon } from "@chakra-ui/icons"; // import Chakra UI icons

const SidePanel = ({ onToggleMaximize }) => { // onToggleMaximize is the prop that the child parent recieved
  const [isMaximized, setIsMaximized] = useState(false); 
  // isMaximized is the current local state value
  // setIsMaximized is the function to update the state value
  // false is the initial value for isMaximized


  // this is a function that calls the setIsMaximized function and passes the value !isMaximized which updates the state of isMaximized
  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  // handles side effects, renders when component mounts, and then continues to render if any value in in dependency array changed from last render
  useEffect(() => {
    // code we want to run
    // calls the onToggleMaximize prop (aka handleToggleMaximize from parent component) when local isMaximized value changes
    onToggleMaximize(isMaximized); // basically calling -> handleToggleMaximize(isMaximized)
    // the local isMaximized state becomes the "value" in handleToggleMaximize function
  }, [isMaximized, onToggleMaximize]); // dependancy array: what the useEffect should listen to, to run the code; 
                                      // onToggleMaximize isn't really needed bc it's not a value but its best practice to add it
  
  return (
    <Box
      as="nav"
      width={isMaximized ? "220px" : "70px"}
      height="100vh"
      bg="gray.800"
      color="white"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      paddingLeft="17px"
      transition="width 0.5s ease"
      position="fixed"
      onMouseEnter={toggleMaximize} // calls function toggleMaximize which would make the value of isMaximized true
      onMouseLeave={toggleMaximize} // when the mouse leaves, isMaximized becomes false again
    >
      <VStack pt="60px" spacing={4} align="start">
        <Text> Panel </Text>
        <HStack spacing={2}>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Menu"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
          {isMaximized && <Link>Profile</Link>}
        </HStack>
        <HStack spacing={2}>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Profile"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
          {isMaximized && <Link minW="150px">Overview</Link>}
        </HStack>
        <HStack spacing={2}>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Settings"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
          {isMaximized && <Link minW="150px">Lab Test Results</Link>}
        </HStack>
        <HStack spacing={2}>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Settings"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
          {isMaximized && <Link minW="150px">Care Team and Providers</Link>}
        </HStack>
        <HStack spacing={2}>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Settings"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
          {isMaximized && <Link minW="150px">Integrated Calendar</Link>}
        </HStack>
        <HStack spacing={2}>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Settings"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
          {isMaximized && <Link minW="150px">Medical History</Link>}
        </HStack>
      </VStack>
    </Box>
  );
};

export default SidePanel;
