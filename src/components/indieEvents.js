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
        <>
            <span className="text-amber-600 italic">Year :- </span>{year}, <span className="text-amber-600 italic">Revenue :- </span>₹{revenue}            <a className="italic cursor-pointer underline underline-offset-2 text-red-500" onClick={() => {
                deleteMutation.mutate({ id: id })
            }}>Delete &#9746;</a>
        </>
    );
};
