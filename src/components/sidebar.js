import "../styles.css";

export default function Sidebar({ isOpen }) {
    const sidebarClass = isOpen ? "sidebar open" : "sidebar";

    return (
        <div className={sidebarClass}>
            <div> I slide into view </div>
            <div> Me Too! </div>
            <div> Me Three! </div>
        </div>
    );
};
