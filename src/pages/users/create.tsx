import { Box, Button, Divider, Flex, Heading, HStack, Link, SimpleGrid, VStack} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import { Input } from '../../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}
  
const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome Obrigatório'),
    email: yup.string().required('Email Obrigatório').email('Email Inválido'),
    password: yup.string().required('Senha Obrigatória').min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup.string().required('Senha de Confirmação Obrigatória').oneOf([null, yup.ref('password')], 'As senhas devem ser iguais!'),
})

export default function CreateUser() {

    const { register, handleSubmit, formState } = useForm({
      resolver: yupResolver(createUserFormSchema)  
    })

    const { errors } = formState;


    const handleCreateUser: SubmitHandler<CreateUserFormData> = (values) => {

    }

    return (
        <Box>
            <Header/>

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar/>

                <Box as="form" onSubmit={handleSubmit(handleCreateUser)}  flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
                    <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

                    <Divider  my="6" borderColor="gray.700"/>

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="name" label="Nome Completo" error={errors.name} {...register('name')}/>
                            <Input name="email" type="email" label="E-mail" error={errors.email} {...register('email')}/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="password" type="password" label="Senha" error={errors.password} {...register('password')}/>
                            <Input name="password_confirmation" type="password" label="Confirmação da Senha" error={errors.password_confirmation} {...register('password_confirmation')}/>
                        </SimpleGrid>   
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                        <Link href="/users" passHref>
                            <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                        </Link>
                            <Button type="submit" isLoading={formState.isSubmitting} colorScheme="pink">Salvar</Button>
                        
                        </HStack>
                    </Flex>

                </Box>
            </Flex>

        </Box>
    );
}