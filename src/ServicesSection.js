import ServiceBlock from "./ServiceBlock";

const imgs = [
  "https://assets.codepen.io/6060109/agency-service-1.png",
  "https://assets.codepen.io/6060109/agency-service-2.png",
  "https://assets.codepen.io/6060109/agency-service-3.png"
];

const SERVICE_BLOCK_DATA = [
  {
    imgURL: "https://assets.codepen.io/6060109/agency-service-1.png",
    service: "web design"
  },
  {
    imgURL: "https://assets.codepen.io/6060109/agency-service-2.png",
    service: "ecomerce"
  },
  {
    imgURL: "https://assets.codepen.io/6060109/agency-service-3.png",
    service: "automation"
  }
];

export default function ServicesSection() {
  return (
    <div className="services-section py-12">
      <h1 className="my-3 text-[#133588] font-semibold text-4xl">our sevices</h1>
      {/* props method 1 with imgs Array */}
      <div className="wrap flex flex-wrap justify-center items-center">
        <ServiceBlock block={{ imgURL: imgs[0], service: "web design" }} />
        <ServiceBlock block={{ imgURL: imgs[1], service: "ecomerce" }} />
        <ServiceBlock block={{ imgURL: imgs[2], service: "automation" }} />
        {/* <ServiceBlock imgURL={imgs[0]} service="web design" /> */}
        {/* <ServiceBlock imgURL={imgs[1]} service="ecomerce" /> */}
        {/* <ServiceBlock imgURL={imgs[2]} service="automation" /> */}
      </div>

      {/* mapping method with JSX inside*/}
      <div className="wrap flex flex-wrap justify-center items-center">
        {SERVICE_BLOCK_DATA.map((block) => {
          return (
            <div
              className="agency-service-block m-5 flex flex-col"
              key={block.service.toString()}
            >
              <img  className="w-[200px] h-auto" src={block.imgURL} alt="{block.service}" />
              <p className="font-semibold text-[#806c6c]">{block.service}</p>
            </div>
          );
        })}
      </div>

      {/* ServiceBlock with props mapping*/}
      <div className="wrap flex flex-wrap justify-center items-center">
        {SERVICE_BLOCK_DATA.map((block) => (
          <ServiceBlock block={block} key={block.service.toString()} />
        ))}
      </div>
    </div>
  );
}
