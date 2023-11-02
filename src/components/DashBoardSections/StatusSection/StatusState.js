import { AiFillCheckCircle} from "react-icons/ai"; 
import { FaCircleHalfStroke} from "react-icons/fa6"; 
import { BiLoaderCircle,BiSolidXCircle} from "react-icons/bi"; 
import { BsCircle} from "react-icons/bs"; 
import './StatusState.css'
const StatusState=({status})=>{
    const progressIconStyle = {
        transform: "rotate(180deg)", 
        color: "rgb(238, 238, 67)",
      };
    const statusIcons = {
        "Done": <AiFillCheckCircle color="blue" />,
        "Cancelled": <BiSolidXCircle color="grey" />,
        "Todo": <BsCircle color="grey" />,
        "Backlog": <BiLoaderCircle color="grey" />,
        "In progress": <FaCircleHalfStroke style={progressIconStyle} />,
      };
    return (
        <>
        <span className="statusIcon">
        {statusIcons[status]}
        </span>
        </>
    )
}
export default StatusState;