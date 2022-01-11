import Bedroom from "../components/Bedroom"
import Kitchen from "../components/Kitchen"
import FullBath from "../components/FullBath"
import HalfBath from "../components/HalfBath"
import LivingRoom from "../components/LivingRoom"


function Floor(props) {
    
    return (
        <>
            <Bedroom className={props.className} title="Bedroom 1"/>
            <Kitchen className={props.className} title="Kitchen"/>
            <FullBath className={props.className} title="Full Bath"/>
            <Bedroom className={props.className} title="Bedroom 2"/>
            <LivingRoom className={props.className} title="Living Room"/>
            <HalfBath className={props.className} title="Half Bath"/>
            <Bedroom className={props.className} title="Bedroom 3"/>
        </>
    )
}

export default Floor