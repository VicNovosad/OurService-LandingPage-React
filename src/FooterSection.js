export default function FooterSection() {
    return (
        <div className="footer-section flex justify-center items-center h-[300px] bg-[#133588] text-white p-12">
        <div className="wrap flex flex-col max-w-[400px] justify-center items-center">
            <h1 className="font-medium text-4xl pb-10">subscribe to our email list</h1>
            <form className="w-full flex flex-col justify-center items-center" action="">
                <input className="bg-transparent border-b-2 border-[rgba(255,255,255,.3)] w-full h-7 text-white px-2
                        placeholder:text-center placeholder:text-slate-400 placeholder:text-lg placeholder:translate-y-[-3px]" 
                    type="text" id="email" placeholder="What is your email?" />
                <input className="w-[120px] h-10 mt-8 bg-gray-100 text-lg font-semibold text-[#806c6c]" 
                    type="submit" value="Submit" />
            </form>
        </div>
        </div>
    );
}
  