import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export default function SearchBox() {
    
    //controlled Components, controle usando o estado, ao qual é pego instantâneamente
    //const [search, setSearch] = useState('');

    //uncontrolled components, o estado é pego através de um evento
    const searchInputRef = useRef<HTMLInputElement>(null);

    //console.log(searchInputRef.current.focus())

    return (
        <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={400}
            alignSelf="center"
            color="gray.200"
            position="relative" 
            bg="gray.800"
            borderRadius="full"
        >
            <Input 
                color="gray.50"
                variant="unstyled"
                px="4"
                mr="4"
                placeholder="Buscar na Plataforma"
                _placeholder={{ color: 'gray.400'}}
                // Se usássemos Controlled Components
                // value={search}
                // onChange={event => setSearch(event.target.value)}

                //usando Uncontrolled Components
                ref={searchInputRef}
                
            />

            <Icon as={RiSearchLine} fontSize="20"/>

        </Flex>
    );
}