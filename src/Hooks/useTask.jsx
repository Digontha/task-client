import React from 'react';
import useAxiosPublic from '../Axios/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useTask = () => {
    const axiosPublic=useAxiosPublic();

    const {data:task=[]}=useQuery({
        queryKey:["task"],
        queryFn: async()=>{
            const res = await axiosPublic.get("/todo")
            return res.data
        }
    })

    return [task]
};

export default useTask;