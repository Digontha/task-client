import React, { useContext } from 'react';
import useAxiosPublic from '../Axios/useAxiosPublic';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useOngoing = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext)
    const { data: ongoing = [],isPending,refetch} = useQuery({
        queryKey: ["ongoing"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/ongoing?email=${user?.email}`)
            return res.data
        }
    })

    return [ongoing,isPending,refetch]
};

export default useOngoing;