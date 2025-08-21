import { Button } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useNavigate } from "react-router-dom";

interface GradientButtonProps {
  title: string;
  icon?: React.ReactNode;
  href?: string; // can be external or internal
  onClick?: () => void; // optional custom click handler
}

export const GradientButton = ({ title, icon, href, onClick }: GradientButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); // custom handler (has highest priority)
    } else if (href) {
      if (href.startsWith("http")) {
        // External URL
        window.open(href, "_blank");
      } else if (href.startsWith("#")) {
        // Scroll to section in same page
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Internal route
        navigate(href);
      }
    }
  };

  return (
    <Button
      variant="ghost"
      bg="linear-gradient(to right, #4d7cb1, #649bd6)"
      color={useColorModeValue("white", "gray.400")}
      _hover={{ boxShadow: "0px 0.5rem 1rem rgba(0, 0, 0, 0.2)" }}
      alignItems="center"
    
      gap="0.25rem"
      onClick={handleClick}
    >
      {title}

      {icon}
    </Button>
  );
};
