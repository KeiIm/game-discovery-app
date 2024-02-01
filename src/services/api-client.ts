import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '58befdaba64f4eaeb917d247bc0e14ce'
        // store in .environment
    }
})