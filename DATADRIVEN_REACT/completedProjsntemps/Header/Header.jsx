export default function Header() {
    return (
        <header className=" p-2 border rounded-full  text-center text-3xl flex justify-center h-14">
            <img
                className="w-11 h-10 mr-4 imgheader font-extrabold font-sans"
                src="https://t4.ftcdn.net/jpg/00/98/05/91/240_F_98059106_GA7REUe2I07Vmmz2cD5WCcce7xrErSXx.jpg" // Add your image URL
                alt="Tree Silhouette"
            />
            <img src="" alt="" />
            <h1 className="text-black">HI FROM ME</h1> {/* Specify text color if needed */}
        </header>
    );
}