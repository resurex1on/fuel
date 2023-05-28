const url = 'http://localhost:8002/'

const postData = async (url, data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return await response.json();
};

// const getAllData = async (url) => {
//     const response = await fetch(`${url}`, { method: 'GET', })
//         .then((res) => res.json())
        
//     return response
// };

export const postCompany = (company) => {
    postData(`${url}company`, company).then('Saved Successful')
}

// export const getCompanies = async () => {
//     const response = await fetch(`${url}company`, { method: 'GET', })
//         // .then((res) => res.json()).then(data => console.log(data))
        
//     return response
// }