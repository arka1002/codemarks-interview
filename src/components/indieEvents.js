import { deleteRevenue } from "../graphql/mutations";
import { API } from "aws-amplify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function IndieEvents({ id, year, revenue }) {
    // Access the client
    const queryClient = useQueryClient();
    //delete bills
    const deleteMutation = useMutation({
        mutationFn: async (deletey) => await API.graphql({
            query: deleteRevenue,
            variables: { input: deletey }
        }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['revenue'] }),
    })
    return (
        <div className="flex flex-row justify-around border-2 border-slate-100 rounded-lg p-2 bg-slate-100 mt-2">
            <div><span className="text-amber-600 italic">Year :- </span>{year}</div>
            <div><span className="text-amber-600 italic">Revenue :- </span>₹{revenue}</div>
            <div><a className="italic cursor-pointer underline underline-offset-2 text-red-500" onClick={() => {
                deleteMutation.mutate({ id: id })
            }}>Remove</a></div>



                       
        </div>
    );
};
