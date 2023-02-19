export default function HeroSection() {
    return (
    <div className="hero-section flex flex-col items-center 
        text-white bg-black w-full h-[500px] bg-cover 
        bg-[url('https://assets.codepen.io/6060109/agency-hero-image.png')]">
        <nav className="flex">
            <p className="text-sm my-5 mx-3">home</p>
            <p className="text-sm my-5 mx-3">our services</p>
            <p className="text-sm my-5 mx-3">subscribe</p>
        </nav>
        <h1 className="font-medium m-auto">we do websites right</h1>
    </div>
    );
}
  