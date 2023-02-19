export default function ServiceBlock(props) {
    return (
        <div className="agency-service-block m-5 flex flex-col">
        <img className="w-[200px] h-auto" src={props.block.imgURL} alt={props.block.service} />
        <p  className="font-semibold text-[#806c6c]">{props.block.service}</p>
        {/* <img src={props.imgURL} alt={props.service} />
        <p>{props.service}</p> */}
        </div>
    );
}
  