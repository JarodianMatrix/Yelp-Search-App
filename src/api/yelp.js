import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 9IvO5eF8n00zvQB_F2CnCv5SrwCKdELuFcIAv336v6epMZVkVCE206i_r63lT2dVUqZ6mBW1HnaEj9cMqcw1oCzKs-HxheuHvfqIk-6Yu3ZxfqbUCEnws78eSUf5XXYx'
    }
});
