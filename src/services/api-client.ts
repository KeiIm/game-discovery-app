import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '58befdaba64f4eaeb917d247bc0e14ce'
        // store in .environment
    }
})