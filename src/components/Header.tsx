import {
    Box,
    HStack,
    IconButton,
    Image,
    VStack,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Link as RouterLink } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
// import { InputWithKbd } from './Searchbar';
import { Navbar } from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveLink } from '@/store/slices/navSlice';
// import type { RootState } from '@/store';
import { FaXmark } from 'react-icons/fa6';
import { LangToggle } from './LangToggle';
import { selectLanguage } from '../store/slices/languageSlice';
import { useRef } from 'react'; // 👈 import React ref
import { useOnClickOutside } from 'usehooks-ts';


export const Header = () => {
    // Redux hooks
    const dispatch = useDispatch();
    const currentLanguage = useSelector(selectLanguage);
    const isMobileOrTablet = useBreakpointValue({ base: true, lg: false });
    const { open, onToggle, onClose } = useDisclosure();
    // 👇 Ref for collapsible menu
    const menuRef = useRef<HTMLDivElement>(null!);

    // 👇 Hook: close when clicking outside
    useOnClickOutside(menuRef, () => {
        if (open) onClose();
    });
    return (
        <HStack
            as="header"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottom="1px solid #ddd"
            position="sticky"
            justifyContent={'center'}
            top={0}
            zIndex={100}
            w={'98VW'}
            maxWidth="100VW"
            p={4}

        >
            {/* Header Row */}
            <HStack w={"fill"} justify="space-between" gap={'4rem'} align="center">
                {/* Logo */}
                <HStack gap={"4rem"} justify="space-between">
                    <RouterLink to="/" onClick={() => dispatch(setActiveLink('/'))}>
                        <Image
                            src={currentLanguage === 'en' ? '/logo-en.png' : '/logo-ar.png'}
                            alt="Logo"
                            width="4.25rem"
                            height={"auto"}
                        />
                    </RouterLink>

                    <HStack gap={"3.5rem"}>
                        {!isMobileOrTablet && (
                            <Navbar />
                        )}

                        <LangToggle />
                    </HStack>
                </HStack>


                {/* Desktop Nav + Search + Login */}
                {!isMobileOrTablet && (
                    <Box p={"1rem"} gap={"10px"} borderRadius={'1rem'}
                        onClick={() => window.open('https://portal.lsc-sa.net/', '_blank')}
                        bgColor={"#5A77BB"} color={"white"}
                        _hover={{ cursor: "pointer", transform: "scale(1.02)" }}
                    >                        تسجيل الدخول
                    </Box>
                )}

                {/* Mobile Hamburger */}
                {isMobileOrTablet &&
                    ((!open && (
                        <IconButton
                            border={'1px solid #ddd'}
                            bgColor={'transparent'}
                            color={'#4d7cb1'}
                            aria-label="Toggle Menu"
                            onClick={onToggle}
                            variant="outline"
                        >
                            <MdMenu size="md" />
                        </IconButton>
                    )) ||
                        (open && (
                            <IconButton
                                border={'1px solid #ddd'}
                                bgColor={'transparent'}
                                color={'#4d7cb1'}
                                aria-label="Toggle Menu"
                                onClick={onToggle}
                                variant="outline"
                            >
                                <FaXmark />
                            </IconButton>
                        )))}
            </HStack>

            {/* Mobile Collapsible Menu */}
            {isMobileOrTablet && open && (
                <VStack
                    zIndex={100}
                    position={"fixed"}
                    ref={menuRef}
                    top={"100px"}
                    left={0}
                    w="full"
                    justify="space-between"
                    align="stretch"
                    gap={4}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    p={4}
                    borderRadius="md"
                    boxShadow="md"
                >
                    <Navbar />
                    {/* Login Button */}
                    <Box p={"1rem"}
                        onClick={() => window.open('https://portal.lsc-sa.net/', '_blank')}
                        gap={"10px"} borderRadius={'1rem'} bgColor={"#5A77BB"} color={"white"}
                    >
                        {/* {loginText} */}
                        تسجيل الدخول
                    </Box>
                </VStack>
            )}
        </HStack>
    );
};
