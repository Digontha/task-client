import React, { useContext } from 'react';
import useAxiosPublic from '../Axios/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useTask = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext)
    const { data: task = [],isPending,refetch} = useQuery({
        queryKey: ["task"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/todo?email=${user?.email}`)
            return res.data
        }
    })

    return [task,isPending,refetch]
};

export default useTask;