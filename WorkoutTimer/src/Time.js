import useWorkoutData from "./UseWorkOutData"

function Time() {

const {time} = useWorkoutData()
    return (
        <div>
            <h1>Workout timer</h1>
            <time>For your workout on {time}</time>
        </div>
    )
}

export default Time
