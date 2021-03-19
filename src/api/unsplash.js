import axios from 'axios';

 export default axios.create( { 
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID tH1AMHaMWkQ4WP_L0QeFoMN--Hjaop933iAIZ2cZx2E' 
       }
});