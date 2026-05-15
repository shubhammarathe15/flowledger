import SummaryCards from "../components/SummaryCards";

function Dashboard({ expenses }) {

    return (

        <div>

            <div className="mb-10">

                <h1 className="text-5xl md:text-6xl font-bold leading-tight">

                    Take Control of
                    <span className="text-blue-500">
                        {" "}Your Finances
                    </span>

                </h1>

                <p className="text-slate-400 mt-4 text-lg max-w-2xl">

                    Track your daily expenses, manage spending habits,
                    and visualize your financial journey with FlowLedger.

                </p>

            </div>

            <SummaryCards expenses={expenses} />

        </div>
    );
}

export default Dashboard;