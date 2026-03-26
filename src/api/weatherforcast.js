import instance  from "./client";

export const weatherforcastApi = 
{
    get: ()=> instance.get('/weatherforecast')
};