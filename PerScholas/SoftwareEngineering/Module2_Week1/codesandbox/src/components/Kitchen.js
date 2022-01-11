import Oven from "../components/Oven"
import Sink from "../components/Sink"


function Kitchen(props) {

    return (
        <>
            <div className={props.className}>
                {props.title}
                    <Oven className={props.className} title="Oven"/>
                    <Sink className={props.className} title="Sink"/>
            </div>
        </>
    )
}

export default Kitchen