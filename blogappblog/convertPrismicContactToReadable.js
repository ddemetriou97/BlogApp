export default function convertPrismicHPToReadable (prismicData) {
    return{
       
        title: prismicData.data.title[0].text,
        description: prismicData.data.content[0].text,
        
    }
}