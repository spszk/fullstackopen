const Total = (props) => {
    const parts = props.course.parts;
    const sum = parts.reduce((s, p) => s + parseInt(p.exercises), 0)
    return (
        <div>
            <p><b>total of {sum} exercises</b></p>
        </div>
    )
}

export default Total