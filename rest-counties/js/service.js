const URL = 'https://restcountries.com/v3.1/all';

export const getAllCountries = async () => {
    try {
        // Fazendo uma solicitação GET para obter produtos da AP
        const response = await fetch(URL);

        //lidando com oerros na resposta
        // handleErrors(response);

        //converter os dados para json
        return await response.json();
    } catch (error) {
        console.log('Error >>>', error);
    }
};