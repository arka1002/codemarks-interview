import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { API } from "aws-amplify";
import { listRevenues } from "../graphql/queries";
import { createRevenue } from "../graphql/mutations";
import IndieEvents from "./indieEvents";
import { useForm } from "react-hook-form";
import { useEffect } from "react";


export default function Content() {
    // Access the client
    const queryClient = useQueryClient();

    //react-hook-form
    const { register, handleSubmit, reset, formState, formState: { errors }, formState: { isSubmitSuccessful } } = useForm();
    //resetting the form please
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ year: '', revenue: '' });
        }
    }, [formState, reset]);
    //Mutations
    const addMutation = useMutation({
        mutationFn: async (add) => await API.graphql({
            query: createRevenue,
            variables: { input: add },
        }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['revenue'] }),
    })

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
        <div className="flex flex-col gap-y-4">
            <div>
                <ul className="list-disc">
                    {
                        revenue.map((bill) => (
                            <li key={bill.id}><IndieEvents id={bill.id} year={bill.year} revenue={bill.revenue} /></li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <form className="flex flex-col gap-y-2" onSubmit={handleSubmit((data) => { addMutation.mutate(data); })}>
                    <div>
                        <label htmlFor="year-choice">Choose year: </label>
                        <input
                            list="year-options"
                            id="year-choice"
                            name="year-choice" required
                            className="border-2 border-indigo-600"
                            {...register("year", { required: true })} />

                        <datalist id="year-options">
                            <option value="1998" />
                            <option value="2008" />
                            <option value="2018" />
                            <option value="2028" />
                            <option value="2038" />
                        </datalist>
                        <p>{errors.year && <span className='text-rose-500'>This field is required</span>}</p>
                    </div>
                    <div>
                        <label htmlFor="revenue">Revenue : ₹ </label>

                        <input
                            type="text"
                            id="revenue"
                            name="revenue" required
                            minLength="4"
                            maxLength="8"
                            size="10"
                            className="border-2 border-indigo-600"
                            {...register("revenue", { required: true })} />
                        <p>{errors.revenue && <span className='text-rose-500'>This field is required</span>}</p>
                    </div>
                    <div className="flex flex-row justify-center">
                        <button type="submit" className='transition ease-in-out delay-50 mt-5 border-solid border-2 border-indigo-600 px-2 py-2 rounded-md font-bold hover:bg-sky-500/50'>Add Bills</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
