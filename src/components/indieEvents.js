export default function IndieEvents({ id, year, revenue }) {
    return (
        <>
            <span className="text-amber-600 italic">Year :- </span>{year}, <span className="text-amber-600 italic">Revenue :- </span>₹{revenue}
        </>
    );
};
