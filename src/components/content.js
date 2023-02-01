import { useQuery, useQueryClient } from "@tanstack/react-query";
import { API } from "aws-amplify";
import { listRevenues } from "../graphql/queries";
import IndieEvents from "./indieEvents";
import { useForm } from "react-hook-form";


export default function Content() {
    // Access the client
    const queryClient = useQueryClient();

    const { isLoading, isError, data: revenue, error } = useQuery({
        queryKey: ['revenue'],
        queryFn: async () => {
            const revenueData = await API.graphql({
                query: listRevenues,
            })
            const revenues = revenueData.data.listRevenues.items;
            return revenues;
        }
    })

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div className="flex flex-col">
            <div>
                <ul className="list-disc">
                    {
                        revenue.map((bill) => (
                            <li key={bill.id}><IndieEvents id={bill.id} year={bill.year} revenue={bill.revenue} /></li>
                        ))
                    }
                </ul>
            </div>
            <div>Hi Mom</div>
        </div>
    );
};
