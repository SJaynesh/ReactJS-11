import axios from "axios";

export const translate = async (input: string, source: string, target: string) => {

    const res = await axios.post("https://deep-translate1.p.rapidapi.com/language/translate/v2",
        {
            "q": input,
            "source": source,
            "target": target
        },
        {
            headers: {
                'x-rapidapi-key': 'd8f7cda0bamshbc4d982d36cb16dp1e6fe5jsn32111f51b5bd',
                'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
                'Content-Type': 'application/json'
            },

        }
    )

    // console.log("Translate Response", res.data.data.translations.translatedText[0]);
    return res.data.data.translations.translatedText[0];

}