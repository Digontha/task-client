import React, { useContext } from 'react';
import useAxiosPublic from '../Axios/useAxiosPublic';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useCompleted = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext)
    const { data: completed = [],isPending,refetch} = useQuery({
        queryKey: ["completed"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/completed?email=${user?.email}`)
            return res.data
        }
    })

    return [completed,isPending,refetch]
};

export default useCompleted;