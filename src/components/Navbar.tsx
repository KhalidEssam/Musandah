import { Box, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useSelector, useDispatch } from "react-redux";
import { setActiveLink } from "../store/slices/navSlice";
import { Link as RouterLink } from "react-router-dom";
import type { RootState } from "@/store";
import { selectLanguage } from "../store/slices/languageSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { activeLink, links } = useSelector((state: RootState) => state.nav);
  const lang = useSelector(selectLanguage);

  return (
    <Stack direction="column">
      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        gap={{ base: "1rem", md: "2rem", xl: "3.5rem" }}
        // bg={useColorModeValue("white", "gray.100")}
      >
        {links.map((link) => {
          return (
            <RouterLink key={link.href} to={link.href}>
              <Box
                onClick={() => dispatch(setActiveLink(link.href))}
                fontSize="1.125rem"
                lineHeight="100%"
                fontWeight="500"
                bg={useColorModeValue("transparent", "gray.400")}
                color={
                  activeLink === link.href
                    ? useColorModeValue("#4d7cb1", "gray.100")
                    : useColorModeValue("#2c3e50", "gray.400")
                }
                _hover={{ color: useColorModeValue("#4d7cb1", "gray.100") }}
                _active={{ color: useColorModeValue("#4d7cb1", "gray.100") }}
                display="inline-block" // 👈 keeps text & svg together
              >
                {lang === "en" ? link.en : link.ar}

                {/* underline svg */}
                <Box
                  w="100%"
                  pt={2}
                  display={activeLink === link.href ? "block" : "none"}
                >
                  <svg
                    viewBox="0 0 107 10"
                    fill="none"

                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none" // 👈 stretch with text width
                  >
                    <path
                      d="M1.95223 5.62912C19.379 2.31408 64.5692 -1.77887 105.916 8.36969"
                      stroke="#981C20"
                      strokeWidth="4"
                      // strokeLinecap="round"
                      // strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Box>
            </RouterLink>
          );
        })}
      </Stack>
    </Stack>
  );
};
