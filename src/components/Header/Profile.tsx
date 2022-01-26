import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export default function profile({ showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Adller</Text>   
                    <Text color="gray.300" fontSize="small">adller.eel.ufsc@gmail.com</Text> 
                </Box> 
            )} 

            <Avatar size="md" name="Adller Simas"/>   
        </Flex>
    );
}