import richTextToMarkdown from '@edwinjoseph/prismic-richtext-markdown'

const checkForEmptySpace = /^(- .*)\n(\n^- )/mg

export default function convertPrismicHPToReadable (prismicData) {
    return{
        //slug: prismicData.uid,
        title: prismicData.data.title[0].text,
        description: prismicData.data.description[0].text,
        image: prismicData.data.backgroundImage.url,
        //content: richTextToMarkdown(prismicData.data.description[0].text).replace(checkForEmptySpace, '$1$2')
    }
}