import { articles } from "@/pages/KnowledgeCenter";
import { Box } from "@chakra-ui/react";


export const ArticleDetails = () => {

    const chosenArticle = articles.find((article) => article.id === Number(window.location.pathname.split("/")[2]));
    return <Box>

        {chosenArticle && <h1>{chosenArticle.title.ar}</h1>}
    </Box>
};