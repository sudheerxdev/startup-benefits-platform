export default function Navbar() {
    return (
        <nav className="w-full border-b p-4 flex justify-between">
            <span className="font-bold">Startup Benefits</span>
            <div className="space-x-4">
                <a href="/deals">Deals</a>
                <a href="/dashboard">Dashboard</a>
            </div>
        </nav>
    );
}
