import richTextToMarkdown from '@edwinjoseph/prismic-richtext-markdown'

const checkForEmptySpace = /^(- .*)\n(\n^- )/mg

export default function convertPrismicDataToReadable (prismicData) {
    return {
        slug: prismicData.uid,
        title: prismicData.data.Title,
        content: richTextToMarkdown(prismicData.data.Content).replace(checkForEmptySpace, '$1$2')
    }
}